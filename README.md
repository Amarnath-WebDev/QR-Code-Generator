# QR Code Generator

This is a simple web-based QR Code Generator that allows users to enter text and generate a QR code dynamically using the `api.qrserver.com` API.
[see now project](https://amarnath-webdev.github.io/QR-Code-Generator/)

## Features
- Generate QR codes instantly based on user input
- Select different sizes for the QR code
- Uses a free and reliable QR Code API

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Use
1. Open `index.html` in a browser.
2. Enter text in the input box.
3. Select a QR code size from the dropdown.
4. Click the "Generate" button.
5. The QR code will be displayed below.

## API Used
This project uses the following API to generate QR codes:
```
https://api.qrserver.com/v1/create-qr-code/?data=TEXT&size=SIZE
```

## Example
To generate a QR code with the text `HelloWorld` and size `200x200`, the API request will be:
```
https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=200x200
```

## Future Enhancements
- Allow customization of QR code colors
- Add the ability to download QR codes
- Implement error correction options

## Author
Developed by **Amar**

## License
This project is open-source and free to use.

