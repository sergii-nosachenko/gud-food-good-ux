const $ = require('jquery');
const Page = require('../classes/Page');

function injectSearchByTitle() {
  const page = new Page();

  const sortRowHtml = `
    <div class="col-md-120 search-block">
      <div class="row">
        <div class="col-md-12">
          <label for="search-input">Search by title</label>
          </p>
          <input 
            type="text" 
            class="form-control search-input"
            placeholder="Type to search in titles of products"
          />
      </div>
    </div>
  `;

  page.$tabPanes.each(function addSearch() {
    const tabPane = $(this);

    tabPane.prepend(sortRowHtml);

    tabPane.find('.search-input').on('change', function handleSearch() {
      const input = $(this);
      const query = input.val().toLowerCase();

      const products = tabPane.find(page.selectors.products);

      if (!query) {
        products.show();

        return;
      }

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
