const Page = require('./Page');

class Waitlist {
  constructor() {
    this.page = new Page();

    this.selectors = {
      waitlist: '#waitlist',
      waitlistTotal: '#waitlist-total',
      quantityValue: '.quantity .value',
      minus: '.quantity .minus',
      plus: '.quantity .plus',
      remove: '.remove',
      toCart: '.to-cart',
    };

    this.products = JSON.parse(localStorage.getItem('waitlistedProducts'))
    || [];

    this.$waitlist = this.addWaitlistPanel();
    this.$total = $(this.selectors.waitlistTotal);

    if (!this.$waitlist) {
      return;
    }

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

      listItem.find(this.selectors.quantityValue).text(existingProduct.quantity);
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

  addWaitlistPanel() {
    const sidebar = this.page.$sidebar;

    if (!sidebar.length) {
      return null;
    }

    const existingWaitlist = sidebar.find(this.selectors.waitlist);

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

    return sidebar.find(this.selectors.waitlist);
  }

  addWaitListItem(product) {
    const listItem = $(`
      <tr>
        <td>${product.title}</td>
        <td class="quantity">
          <span class="glyphicon glyphicon-minus minus"></span>
          <span class="value">${product.quantity}</span>
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
              title="Put into cart"
            ></span>
          </button>
        </td>
      </tr>
    `);

    this.$waitlist.append(listItem);

    listItem.find(this.selectors.minus).on('click', () => {
      const currentProduct = this.products.find((item) => item.pid === product.pid);

      if (currentProduct.quantity > 1) {
        currentProduct.quantity -= 1;

        listItem.find(this.selectors.quantityValue).text(currentProduct.quantity);
      } else {
        this.removeProduct(product.pid);

        listItem.remove();
      }

      this.changeTotal();
    });

    listItem.find(this.selectors.plus).on('click', () => {
      const currentProduct = this.products.find((item) => item.pid === product.pid);

      currentProduct.quantity += 1;

      listItem.find(this.selectors.quantityValue).text(currentProduct.quantity);

      this.changeTotal();

      this.store();
    });

    listItem.find(this.selectors.remove).on('click', () => {
      this.removeProduct(product.pid);

      listItem.remove();
    });

    listItem.find(this.selectors.toCart).on('click', async () => {
      for (let i = 0; i < product.quantity; i += 1) {
        $.get(`/order/buy/pid/${product.pid}`, (resp) => {
          if (resp.status === 'ok') {
            this.page.$cart.html(resp.cart);
            this.page.$weekInfo.html(resp.weekinfo);
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

            this.page.$messages.html(message);
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

module.exports = Waitlist;
