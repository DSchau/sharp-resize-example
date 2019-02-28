const sharp = require('sharp')

async function run() {
  await sharp('pug.jpg')
  .resize(128)
  .toFile('pug-with-just-one-dimension.jpg')
}

run()
