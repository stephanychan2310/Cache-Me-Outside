import qrcode

data = "https://drive.google.com/uc?export=download&id=1yEcbI1KZTYuW-Q6rGx7fg8NCecfsvm9c"

# 2. Create the QR Code object with custom settings
qr = qrcode.QRCode(
    version=1,                      # Controls the size of the QR code (1 is the smallest)
    error_correction=qrcode.constants.ERROR_CORRECT_L, # Controls error correction
    box_size=10,                    # Size of each little square box in pixels
    border=5,                       # Thickness of the white border (4 is minimum)
)

# 3. Add your link data to the object
qr.add_data(data)
qr.make(fit=True)

# 4. Create the actual image (you can change the colors here!)
img = qr.make_image(fill_color="black", back_color="white")

# 5. Save the image to your computer
img.save("my_link_qr.png")

print("QR Code successfully generated and saved as 'my_link_qr.png'!")