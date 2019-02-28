const sharp = require('sharp')

async function run() {
  await sharp('input.svg')
  .resize(128)
  .toFile('output-without-width.png')
}

run()
