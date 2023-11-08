# Image Over Frame Library

The Image Over Frame Library is a JavaScript library that allows you to overlay one image on top of another with ease. It uses the Jimp library for image manipulation, and it's suitable for adding watermarks, logos, or any other images to an existing image.

## Installation

You can install the `image-over-frame` library via npm:

```bash
npm install image-over-frame
```

## Usage

Here's how you can use the `image-over-frame` library in your Node.js project:

```javascript
const imageOverlay = require('image-over-frame');

// Define the paths to your frame image and second image
const frameImagePath = 'path/to/frame.png';
const secondImagePath = 'path/to/second_image.png';
const outputImagePath = 'output_image.png';

// Overlay the second image on the frame image
imageOverlay.overlayImages(frameImagePath, secondImagePath, outputImagePath, (err) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Overlay complete. Result saved to', outputImagePath);
  }
});
```

### Configuration

Before using the library, make sure your project directory structure is organized as follows:

```
- Your_Project_Directory
  - node_modules/
  - path/
  - to/
  - frame.png
  - path/
  - to/
  - second_image.png
  - your_script.js
```

Ensure you have the frame image and second image in their respective paths.

### API

#### `overlayImages(framePath, secondImagePath, outputPath, callback)`

- `framePath` (string): The path to the frame image.
- `secondImagePath` (string): The path to the second image.
- `outputPath` (string): The path where the resulting image will be saved.
- `callback` (function): A callback function that will be called after the overlay operation is complete. It will receive an error object as its first argument (or `null` if successful).

## License

This library is released under the [MIT License](LICENSE).

## Contributing

Feel free to contribute to this project. If you find issues or have suggestions for improvements, please open an issue or create a pull request.

## Author

[Jonathan Mwebaze] - [https://mwebaze.com]

## Acknowledgments

- [Jimp](https://github.com/oliver-moran/jimp): Used for image manipulation.
