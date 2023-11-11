/* eslint-disable class-methods-use-this */
class Page {
  constructor() {
    this.selectors = {
      image: 'img.media-object',
      products: '.product-row',
      productTitle: '.media-heading',
      productPrice: '.lead',
      productBuyButton: '.buy',
      tabPane: '.tab-pane',
      weekInfo: '#weekinfo',
      cart: '#cart',
      messages: '#messages',
    };
  }

  get $images() {
    return $(this.selectors.image);
  }

  get $products() {
    return $(this.selectors.products);
  }

  get $tabPanes() {
    return $(this.selectors.tabPane);
  }

  get $sidebar() {
    return this.$weekInfo.parent();
  }

  get $weekInfo() {
    return $(this.selectors.weekInfo);
  }

  get $cart() {
    return $(this.selectors.cart);
  }

  get $messages() {
    return $(this.selectors.messages);
  }
}

module.exports = Page;
