const injectCustomStyles = require('./injections/injectCustomStyles');
const injectBigImages = require('./injections/injectBigImages');
const injectSorting = require('./injections/injectSorting');
const injectStickySidebar = require('./injections/injectStickySidebar');
const injectAddToShortlist = require('./injections/injectWaitlist');
const injectNavbarOrderLink = require('./injections/injectNavbarOrderLink');

$(() => {
  injectCustomStyles();
  injectNavbarOrderLink();
  injectBigImages();
  injectSorting();
  injectStickySidebar();
  injectAddToShortlist();
});
