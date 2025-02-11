const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1Igk_at2yvP_Bd6GNd3_GLCQmooNszkNDDvm2b6yqIQM',
  {
    name: 'B.o.B Handcraft',
    instagram: 'https://www.instagram.com/bobkeycaps/',
    discord: 'https://discord.com/invite/HRkaz4k',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
