const $ = require('jquery');
const Page = require('../classes/Page');

function injectSearchByTitle() {
  const page = new Page();

  const sortRowHtml = `
    <div class="col-md-120 search-block">
      <div class="row">
        <div class="col-md-2">
          <p class="search-button title">
            Search by title
          </p>
        </div>
          
        <div class="col-md-10">
          <input type="text" class="search-input" />
      </div>
    </div>
  `;

  page.$tabPanes.each(function addSearch() {
    const tabPane = $(this);

    tabPane.prepend(sortRowHtml);

    tabPane.find('.search-button').on('click', function handleSearch() {
      const button = $(this);
      const input = button.closest('.search-block').find('.search-input');
      const query = input.val().toLowerCase();

      if (!query) {
        return;
      }

      const products = tabPane.find(page.selectors.products);

      products.each(function filterProducts() {
        const product = $(this);
        const title = product.find(page.selectors.productTitle).text().toLowerCase();
        const isMatch = title.includes(query);

        product.toggle(isMatch);
      });
    });
  });
}

module.exports = injectSearchByTitle;
