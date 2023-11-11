const Page = require('../classes/Page');
const Waitlist = require('../classes/Waitlist');

function injectWaitlist() {
  const page = new Page();

  const products = page.$products;

  if (!products.length) {
    return;
  }

  const waitList = new Waitlist();

  products.each(function () {
    const product = $(this);
    const title = product.find(page.selectors.productTitle).text();
    const price = parseInt(product.find(page.selectors.productPrice).text(), 10);
    const buyButton = product.find(page.selectors.productBuyButton);
    const buyLink = buyButton.attr('href');
    const productId = Number(buyLink.split('/').pop());

    const waitlistButton = $('<button>')
      .addClass('btn btn-warning')
      .html('<span class="glyphicon glyphicon-copy"></span>')
      .attr('title', 'Add to waitlist')
      .css('margin-left', '5px')
      .on('click', () => {
        waitList.addProduct({
          pid: productId,
          title,
          price,
        });
      });

    buyButton.after(waitlistButton);
  });
}

module.exports = injectWaitlist;
