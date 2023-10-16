from PIL import Image

# Function to decode a message from an image
def decode_image(input_image_path):
    img = Image.open(input_image_path)
    width, height = img.size
    binary_message = ''

    for x in range(width):
        for y in range(height):
            pixel = img.getpixel((x, y))
            for color_channel in range(3):  # RGB channels
                binary_message += bin(pixel[color_channel])[-1]

    decoded_message = ''.join([chr(int(binary_message[i:i+8], 2)) for i in range(0, len(binary_message), 8)])
    return decoded_message

output_image = "output_image.png"

# Decode the message from the image
decoded_message = decode_image(output_image)
print("Decoded message:", decoded_message)