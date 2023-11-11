const Page = require('../classes/Page');

function injectNavbarOrderLink() {
  const page = new Page();

  const navbarRight = page.$navBarRight;

  if (!navbarRight.length) {
    return;
  }

  const orderLink = $('<a>')
    .attr('href', '/order')
    .text('Order food');

  const listItem = $('<li>')
    .append(orderLink);

  navbarRight.prepend(listItem);
}

module.exports = injectNavbarOrderLink;
