var Jimp = require("jimp");

const execute = async () => {
  try {

    const image = await Jimp.read(`./raw/example.jpg`);
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);

    await image
      .resize(800, 800, Jimp.RESIZE_BEZIER)
      .quality(100)
      .print(font, 0, 35, {
        text: 'PALESTRA ACABO GENTE',
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_TOP
      }, 800, 800)
      .print(font, 0, -35, {
        text: 'DAQUI 1 HORA TEM MAIS RS',
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM
      }, 800, 800)
      .write(`./processed/example-after.jpg`)

  } catch (err) {
    console.error(err);
  }
}

execute();