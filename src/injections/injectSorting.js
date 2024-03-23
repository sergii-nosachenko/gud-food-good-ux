const $ = require('jquery');
const Page = require('../classes/Page');

function sortRows(tabPane, by, order) {
  const page = new Page();

  const rows = tabPane.find(page.selectors.products);

  rows.each(function addIndex(index) {
    const row = $(this);

    if (row.data('index')) {
      return;
    }

    row.data('index', index + 1);
  });

  const rowsSorted = rows.toArray();
  const $parent = $(rows[0]).parent();

  if (!order) {
    rowsSorted.sort((a, b) => (
      $(a).data('index') - $(b).data('index')
    ));

    $parent.append(rowsSorted);

    return;
  }

  const multiplier = order === 'asc'
    ? 1
    : -1;

  switch (by) {
    case 'title':
      rowsSorted.sort((a, b) => {
        const aTitle = $(a).find(page.selectors.productTitle).text();
        const bTitle = $(b).find(page.selectors.productTitle).text();

        return aTitle.localeCompare(bTitle) * multiplier;
      });

      break;

    case 'price':
      rowsSorted.sort((a, b) => {
        const aPrice = parseInt($(a).find(page.selectors.productPrice).text(), 10);
        const bPrice = parseInt($(b).find(page.selectors.productPrice).text(), 10);

        return (aPrice - bPrice) * multiplier;
      });

      break;

    default:
      break;
  }

  $parent.append(rowsSorted);
}

function injectSorting() {
  const page = new Page();

  const sortRowHtml = `
    <div class="col-md-120 sorting-block">
      <div class="row">
        <div class="col-md-7 col-md-offset-2">
          <p class="sorting-button title">
            Sort by title
          </p>
        </div>
          
        <div class="col-md-3">
          <p class="sorting-button price">
            Sort by price
          </p>
        </div>
      </div>
    </div>
  `;

  page.$tabPanes.each(function addSorting() {
    const tabPane = $(this);

    tabPane.prepend(sortRowHtml);

    tabPane.find('.sorting-button').on('click', function handleSort() {
      const button = $(this);
      const by = button.hasClass('title')
        ? 'title'
        : 'price';

      const anotherBy = by === 'title'
        ? 'price'
        : 'title';

      button
        .closest('.sorting-block')
        .find(`.sorting-button.${anotherBy}`)
        .removeClass('asc desc');

      if (button.hasClass('asc')) {
        button.toggleClass('asc desc');

        sortRows(tabPane, by, 'desc');

        return;
      }

      if (button.hasClass('desc')) {
        button.toggleClass('desc');

        sortRows(tabPane, by);

        return;
      }

      button.toggleClass('asc');
      sortRows(tabPane, by, 'asc');
    });
  });
}

module.exports = injectSorting;
