var Jimp = require("jimp");

const execute = async () => {
  try {
    const image = await Jimp.read(`./assets/example.jpg`);
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);

    await image
      .resize(800, 800, Jimp.RESIZE_BEZIER)
      .quality(100)
      .print(font, 0, 35, {
        text: 'LOREM IPSUM',
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_TOP
      }, 800, 800)
      .print(font, 0, -35, {
        text: 'IPSUM LOREM',
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM
      }, 800, 800)
      .write(`./assets/example-processed.jpg`)

  } catch (err) {
    console.error(err);
  }
}

execute();
