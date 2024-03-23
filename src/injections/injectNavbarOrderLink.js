const $ = require('jquery');
const Page = require('../classes/Page');

function injectNavbarOrderLink() {
  const page = new Page();

  const navbarRight = page.$navBarRight;

  if (!navbarRight.length) {
    return;
  }

  const orderLink = $('<a>')
    .attr('href', '/order')
    .html(`
      <span class="glyphicon glyphicon-apple"></span>
      Order food
    `);

  const listItem = $('<li>')
    .append(orderLink);

  navbarRight.prepend(listItem);
}

module.exports = injectNavbarOrderLink;
