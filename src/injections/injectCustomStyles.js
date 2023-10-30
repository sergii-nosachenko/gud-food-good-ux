function injectCustomStyles() {
  const styles = `
    <style type="text/css">
      @media (min-width: 1200px) {
        .container {
            width: 90%;
            max-width: 1400px;
        }
      }
      
      .sorting-block {
        margin-block: 20px 10px;
      }
      
      .sorting-button {
        display: inline-block;
        font-weight: bold;
      }
      
      .sorting-button:hover {
        cursor: pointer;
      }
      
      .sorting-button.asc::after {
        content: '▼';
      }
      
      .sorting-button.desc::after {
        content: '▲';
      }
      
      .stickySidebar {
        position: sticky;
        top: 70px;
      }
    </style>
  `;
  
  $('head').append(styles);
}

module.exports = injectCustomStyles;