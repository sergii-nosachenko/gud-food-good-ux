const $ = require('jquery');
const Page = require('../classes/Page');

function injectBigImages() {
  const page = new Page();
  const images = page.$images;

  if (!images.length) {
    return;
  }

  images.each(function addLink() {
    const image = $(this);
    const src = image.attr('src').replace('crop-64-64-', '');
    const $linkWrapper = $('<a>')
      .attr('href', src)
      .attr('title', 'Open bigger image in new tab')
      .attr('target', '_blank');

    image.before($linkWrapper);
    $linkWrapper.append(image);
  });
}

module.exports = injectBigImages;
