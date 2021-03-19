const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1cDD3aNsQXHJfyskP8906BUwfc1_4H_JJTtZ9akhQkOc', {
  name: 'Girlycaps Studios',
  instagram: 'https://www.instagram.com/girlystudios_caps',
  website: 'https://girlystudios.com/',
  discord: 'http://discord.gg/YeZTMss',
});

launcher(scrap);

module.exports = {
  scrap,
};
