import tkinter as tk
from tkinter import ttk
import random as ran
root = tk.Tk()
root.title("RPG")
root.geometry("720x720")

class baseCharacter:
    def __init__(self, Name, HP, DF, ATK, LVL, EXP,):
        self.Name = Name
        self.HP = HP
        self.DF = DF
        self.ATK = ATK
        self.LVL = LVL
        self.EXP = EXP
        self.StatusEffect = {}
    def takeDamage(self, amount):
        finalDamage = amount - self.DF
        self.HP -= finalDamage
        log(f"{self.Name} took {finalDamage} damage and has {self.HP} left!")
    def attack(self, target):
        target.takeDamage(self.ATK)
    def Status(self):
        for effect in list(self.StatusEffect.keys()):
            if self.StatusEffect[effect] > 0:
                self.StatusEffect[effect] -= 1
                if effect == "slow":
                    self.DF -= int(self.DF * 0.1)
                    log(f"{self.Name} is slowed! Defense lowered.")
                elif effect == "burn":
                    self.HP -= 5
                    log(f"{self.Name} takes 5 burn damage! ({self.StatusEffect[effect]} turns left)") 
                elif effect == "stun":
                    self.ATK = 0
                    log(f"{self.Name} is stunned!")
                if self.StatusEffect[effect] <= 0:
                    log(f"{self.Name} is no longer affected by {effect}!")
                    del self.StatusEffect[effect]
 



class Mage(baseCharacter):
    def __init__(self, Name, HP, DF, ATK, LVL, EXP, MANA):
        super().__init__(Name, HP, DF, ATK, LVL, EXP)
        self.MANA = MANA
    def takeDamage(self, amount):
        finalDamage = max(1, amount - self.DF)
        self.HP -= finalDamage
        log(f"{self.Name} took {finalDamage} damage and has {self.HP} HP left!")
    def fireBall(self, target, manaUsage):
        self.manaUsage = manaUsage
        if self.manaUsage <= self.MANA:
            self.MANA -= manaUsage
            target.takeDamage(self.ATK*(1+(self.manaUsage/100))) #higher mana gives higher damage multiplier
            target.StatusEffect["burn"] = 3
            log(f"{target.Name} is now burned!")
        else:
            log("Not enough mana!")

    def Hail(self, target, manaUsage):
        self.manaUsage = manaUsage
        if self.manaUsage <= self.MANA:
            self.MANA -= manaUsage
            target.takeDamage(self.ATK*0.5) 
            slow = ran.randint(1, 2)
            if slow == 1:
                target.StatusEffect["slow"] = 2
                log(f"{target.Name} is now slowed!")
        else:
            log("Not enough mana!")
        

class Healer(Mage):
    def __init__(self, Name, HP, DF, ATK, LVL, EXP, MANA):
        super().__init__(Name, HP, DF, ATK, LVL, EXP, MANA)
    def takeDamage(self, amount):
        return super().takeDamage(amount)
    def heal(self, target, manaUsage, healAmount):
        self.manaUsage = manaUsage
        self.healAmount = healAmount
        if self.manaUsage <= self.MANA:
            self.MANA -= manaUsage
            target.HP += self.healAmount
            log(f"Healed {self.healAmount} HP for {target.Name}, ally HP is now {target.HP}!")
        else:
            log("Not enough mana!")  
    def attack(self, target):
        target.takeDamage(self.ATK)

def log(message): #helper function for text logs
    log_box.insert(tk.END, message + "\n")#inserts new line after a log 
    log_box.see(tk.END)#scrolls down to latest log

def turn(move):
    player.Status()
    enemy.Status()
    if move == "fireball": 
        log(f"{player.Name} casts Fireball!")
        player.fireBall(enemy, 20)
    elif move == "hail":
        log(f"{player.Name} casts Hail!")
        player.Hail(enemy, 30)
    if enemy.HP <= 0:
        enemy_status.config(text=f"{enemy.Name} has been defeated!")
        log(f"{enemy.Name} has been defeated")
        btn_fireball.config(state="disabled") 
        btn_hail.config(state="disabled")
        return
    chance = ran.randint(1,10)

    if chance <= 5:
        if enemy.HP <= enemy.HP*.1 and chance == 1:
            log(f"{enemy.Name} casts Mega Heal!")
            enemy.heal(enemy, 20, 80)
        else:
            log(f"{enemy.Name} casts Heal!")
            enemy.heal(enemy, 20, 40)
    else:
        log(f"{enemy.Name} launches an attack dealing {enemy.ATK} damage!")
        enemy.attack(player)
    
    if player.HP <= 0:
        player_status.config(text = "You died! Game Over.")
        log("Game Over.")
        btn_fireball.config(state="disabled") 
        btn_hail.config(state="disabled")
        return
    
    player_status.config(text=f"{player.Name} - HP: {player.HP} | Mana: {player.MANA}")
    enemy_status.config(text=f"{enemy.Name} - HP: {enemy.HP}")
    player_hpBar["value"] = max(0, player.HP)
    enemy_hpBar["value"] = max(0, enemy.HP)
    

player = Mage("Mage", 100, 20, 40, 2, 60, 120)
enemy = Healer("Evil Sage", 80, 15, 30, 3, 62, 120)


player_status = tk.Label(root, text=f"{player.Name} - HP: {player.HP} | Mana: {player.MANA}", font=("Arial", 14))
player_status.pack(pady=(20,5))
player_hpBar = ttk.Progressbar(root, orient="horizontal", length=200, mode="determinate", maximum=100, value=player.HP, style="green.Horizontal.TProgressbar")
player_hpBar.pack(pady =(0,20))
player_manaBar = ttk.Progressbar(root, orient="horizontal", lengt=200, mode="determinate", maximum= 100, value= player.MANA, style="blue.Horizontal.TProgressbar")
player_manaBar.pack(pady=(0,20))
player_status.config(text=f"{player.Name} - HP: {player.HP} | Mana: {player.MANA}")

enemy_status = tk.Label(root, text=f"{enemy.Name} - HP: {enemy.HP}", font=("Arial", 14))
enemy_status.pack(pady=(20,5))
enemy_hpBar = ttk.Progressbar(root, orient="horizontal", length=200, mode="determinate", maximum=80, value=enemy.HP, style="green.Horizontal.TProgressbar")
enemy_hpBar.pack(pady=(0,20))
enemy_manaBar = ttk.Progressbar(root, orient="horizontal", lengt=200, mode="determinate", maximum= 100, value= enemy.MANA, style="")
enemy_manaBar.pack(pady=(0,20))
enemy_status.config(text=f"{enemy.Name} - HP: {enemy.HP}")

style = ttk.Style
style.theme_use('default')
style.configure("green.Horizontal.TProgressbar", background='green')
style.configure("blue.Horizontal.TProgressbar", background='blue')
btn_frame = tk.Frame(root)
btn_frame.pack(pady=20)

btn_fireball = tk.Button(btn_frame, text = "Fireball", command=lambda: turn("fireball"))
btn_fireball.pack(side=tk.LEFT, padx = 10)

btn_hail = tk.Button(btn_frame, text = "Hail", command=lambda: turn("hail"))
btn_hail.pack(side=tk.LEFT, padx = 10)

log_box = tk.Text(root, height=12, width= 50, font= ("Arial", 10), bg = "#FFC0CB") 
log_box.pack(pady=10)
log("Battle begins, press 'Fireball' to attack!")

root.mainloop()
