function injectStickySidebar() {
  const sidebar = $('#weekinfo').parent();

  sidebar.toggleClass('stickySidebar');
}

module.exports = injectStickySidebar;
