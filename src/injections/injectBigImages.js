const Page = require('../classes/Page');

function injectBigImages() {
  const { images } = new Page();

  if (!images.length) {
    return;
  }

  images.each(function () {
    const image = $(this);
    const src = image.attr('src').replace('crop-64-64-', '');
    const $linkWrapper = $('<a>')
      .attr('href', src)
      .attr('title', 'Open bigger image in new tab')
      .attr('target', '_blank');

    image.css('width', '80px');
    image.css('height', '80px');

    image.before($linkWrapper);
    $linkWrapper.append(image);
  });
}

module.exports = injectBigImages;
