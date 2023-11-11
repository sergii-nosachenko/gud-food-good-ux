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
      weekInfo: '.week-info',
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
    return $(this.selectors.weekInfo).parent();
  }
}

module.exports = Page;
