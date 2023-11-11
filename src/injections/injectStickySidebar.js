const Page = require('../classes/Page');

function injectStickySidebar() {
  const page = new Page();

  page.$sidebar.toggleClass('stickySidebar');
}

module.exports = injectStickySidebar;
