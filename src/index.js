const injectCustomStyles = require('./injections/injectCustomStyles');
const injectBigImages = require('./injections/injectBigImages');
const injectSorting = require('./injections/injectSorting');
const injectStickySidebar = require('./injections/injectStickySidebar');
const injectAddToShortlist = require('./injections/injectWaitlist');

$(() => {
  injectCustomStyles();
  injectBigImages();
  injectSorting();
  injectStickySidebar();
  injectAddToShortlist();
});
