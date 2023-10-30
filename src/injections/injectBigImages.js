function injectBigImages() {
  const images = $('img.media-object');

  if (!images.length) {
    return;
  }

  images.each(function () {
    const image = $(this);
    const src = image.attr('src').replace('crop-64-64-', '');
    const $linkWrapper = $('<a>')
      .attr('href', src)
      .attr('target', '_blank');

    image.css('width', '128px');
    image.css('height', '128px');

    image.before($linkWrapper);
    $linkWrapper.append(image);
  });
}

module.exports = injectBigImages;
