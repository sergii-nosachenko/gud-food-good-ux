class Waitlist {
  static addWaitlistPanel() {
    const sidebar = $('#weekinfo').parent();

    if (!sidebar.length) {
      return null;
    }

    const existingWaitlist = sidebar.find('#waitlist');

    if (existingWaitlist.length) {
      return existingWaitlist;
    }

    const panel = `
      <div class="panel panel-warning">
        <div class="panel-heading">
          <h3 class="panel-title">Waitlist</h3>
        </div>
  
        <div class="panel-body">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
  
            <tbody id="waitlist">
            </tbody>
  
            <tfoot>
              <tr>
                <td colspan="4">
                  Total:
                  <span id="waitlist-total"></span>
                  UAH
                </td>
              </tr>
            </tfoot>
        </div>
      </div>
    `;

    sidebar.append(panel);

    return sidebar.find('#waitlist');
  }

  constructor() {
    this.products = JSON.parse(localStorage.getItem('waitlistedProducts'))
    || [];

    this.$waitlist = Waitlist.addWaitlistPanel();
    this.$total = this.$waitlist.find('#waitlist-total');

    this.products.forEach((product) => {
      this.addWaitListItem(product);
    });
  }

  addProduct(product) {
    const existingProduct = this.products.find((item) => item.pid === product.pid);

    if (existingProduct) {
      existingProduct.quantity += 1;

      const listItem = this.$waitlist
        .find(`tr:nth-child(${this.products.indexOf(existingProduct) + 1})`);

      listItem.find('.quantity').text(existingProduct.quantity);
    } else {
      const waitlistedProduct = {
        ...product,
        quantity: 1,
      };

      this.products.push(waitlistedProduct);

      this.addWaitListItem(waitlistedProduct);
    }

    this.store();
  }

  removeProduct(pid) {
    const index = this.products.findIndex((item) => item.pid === pid);

    this.products.splice(index, 1);

    this.store();
  }

  getProducts() {
    return this.products;
  }

  getTotal() {
    return this.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  store() {
    localStorage.setItem('waitlistedProducts', JSON.stringify(this.products));
  }

  addWaitListItem(product) {
    const listItem = $(`
      <tr>
        <td>${product.title}</td>
        <td class="quantity">${product.quantity}</td>
        <td>${product.price}</td>
        <td>
          <button class="btn btn-danger btn-xs remove">
            <span 
              class="glyphicon glyphicon-trash"
              title="Remove from waitlist"
            ></span>
          </button>
  
          <button class="btn btn-success btn-xs to-cart">
            <span 
              class="glyphicon glyphicon-shopping-cart"
              title="Add to cart"
            ></span>
          </button>
        </td>
      </tr>
    `);

    this.$total.text(this.getTotal());

    this.$waitlist.append(listItem);

    listItem.find('.remove').on('click', () => {
      this.removeProduct(product.pid);

      listItem.remove();
    });

    listItem.find('.to-cart').on('click', async () => {
      let lastResult;

      for (let i = 0; i < product.quantity; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        lastResult = await fetch(`/order/buy/pid/${product.pid}`, {
          method: 'GET',
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
          },
        });
      }

      if (lastResult.status === 'ok') {
        const weekinfo = $('#weekinfo');

        weekinfo.prepend(lastResult.weekinfo);
        weekinfo.remove();

        const cart = $('#cart');

        cart.empty();
        cart.append(lastResult.cart);

        this.removeProduct(product.pid);
        listItem.remove();
      }
    });
  }
}

const WAIT_LIST = new Waitlist();

function injectWaitlist() {
  const products = $('.product-row');

  if (!products.length) {
    return;
  }

  // localStorage.setItem('waitlistedProducts', JSON.stringify([]));

  products.each(function () {
    const product = $(this);
    const title = product.find('.media-heading').text();
    const price = parseInt(product.find('.lead').text(), 10);
    const buyButton = product.find('.buy');
    const buyLink = buyButton.attr('href');
    const productId = Number(buyLink.split('/').pop());

    const waitlistButton = $('<button>')
      .addClass('btn btn-warning')
      .html('<span class="glyphicon glyphicon-copy"></span>')
      .attr('title', 'Add to shortlist')
      .css('margin-left', '5px')
      .on('click', () => {
        WAIT_LIST.addProduct({
          pid: productId,
          title,
          price,
        });
      });

    buyButton.after(waitlistButton);
  });
}

module.exports = injectWaitlist;
