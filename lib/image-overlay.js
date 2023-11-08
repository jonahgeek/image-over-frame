const Jimp = require('jimp');

function overlayImages(framePath, secondImagePath, outputPath, callback) {
  Jimp.read(framePath)
    .then(frame => {
      return Jimp.read(secondImagePath)
        .then(secondImage => {
          const frameWidth = frame.bitmap.width;
          const frameHeight = frame.bitmap.height;
          const secondWidth = secondImage.bitmap.width;
          const secondHeight = secondImage.bitmap.height;

          // Reduce the secondImage size by 20 pixels in both height and width
          const newWidth = secondWidth - 80;
          const newHeight = secondHeight - 80;

          // Calculate the position to place the resized secondImage in the center
          const x = (frameWidth - newWidth) / 2;
          const y = (frameHeight - newHeight) / 2;

          // Resize the secondImage
          secondImage.resize(newWidth, newHeight);

          // Overlay the resized secondImage on the frame image
          frame.composite(secondImage, x, y);
          frame.write(outputPath, callback);
        })
        .catch(err => {
          callback(err);
        });
    })
    .catch(err => {
      callback(err);
    });
}

module.exports = {
  overlayImages,
};
