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
    this.$total = $('#waitlist-total');

    this.products.forEach((product) => {
      this.addWaitListItem(product);
    });

    this.changeTotal();
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

    this.changeTotal();

    this.store();
  }

  removeProduct(pid) {
    const index = this.products.findIndex((item) => item.pid === pid);

    this.products.splice(index, 1);

    this.store();

    this.changeTotal();
  }

  getProducts() {
    return this.products;
  }

  getTotal() {
    return this.products.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
  }

  store() {
    localStorage.setItem('waitlistedProducts', JSON.stringify(this.products));
  }

  addWaitListItem(product) {
    const listItem = $(`
      <tr>
        <td>${product.title}</td>
        <td class="quantity">
          <span class="glyphicon glyphicon-minus minus"></span>
            ${product.quantity}
          <span class="glyphicon glyphicon-plus plus"></span>
        </td>
        <td>${product.price}</td>
        <td class="waitlist-actions">
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

    this.$waitlist.append(listItem);

    listItem.find('.minus').on('click', () => {
      const currentProduct = this.products.find((item) => item.pid === product.pid);

      if (currentProduct.quantity > 1) {
        currentProduct.quantity -= 1;

        listItem.find('.quantity').text(currentProduct.quantity);
      } else {
        this.removeProduct(product.pid);

        listItem.remove();
      }

      this.changeTotal();
    });

    listItem.find('.plus').on('click', () => {
      const currentProduct = this.products.find((item) => item.pid === product.pid);

      currentProduct.quantity += 1;

      listItem.find('.quantity').text(currentProduct.quantity);

      this.changeTotal();

      this.store();
    });

    listItem.find('.remove').on('click', () => {
      this.removeProduct(product.pid);

      listItem.remove();
    });

    listItem.find('.to-cart').on('click', async () => {
      for (let i = 0; i < product.quantity; i += 1) {
        $.get(`/order/buy/pid/${product.pid}`, (resp) => {
          if (resp.status === 'ok') {
            $('#cart').html(resp.cart);
            $('#weekinfo').html(resp.weekinfo);
          }

          if ('msg' in resp) {
            const message = $('<div/>')
              .addClass('alert')
              .addClass('alert-danger')
              .addClass('alert-dismissible')
              .html(`
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                ${resp.msg}
              `);

            $('#messages').html(message);
          }
        }, 'json');

        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) => {
          setTimeout(resolve, 100);
        });
      }

      this.removeProduct(product.pid);
      listItem.remove();
    });
  }

  changeTotal() {
    const total = this.getTotal();

    this.$total.text(total);
  }
}

const WAIT_LIST = new Waitlist();

function injectWaitlist() {
  const products = $('.product-row');

  if (!products.length) {
    return;
  }

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
      .attr('title', 'Add to waitlist')
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
