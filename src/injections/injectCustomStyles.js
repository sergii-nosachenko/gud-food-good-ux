const $ = require('jquery');

function injectCustomStyles() {
  const styles = `
    <style type="text/css">
      @media (min-width: 1200px) {
        .container {
            width: 95%;
            max-width: 1600px;
        }
      }
      
      .sorting-block {
        margin-block: 20px 10px;
      }
      
      .sorting-button {
        display: inline-block;
        font-weight: bold;
        color: #777;
      }
      
      .sorting-button:hover {
        color: #333;
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
        max-height: calc(100vh - 100px);
        overflow-y: auto;
      }

      .waitlist-actions {
        display: flex;
        gap: 4px;
        margin-top: -1px;
      }

      .quantity .plus,
      .quantity .minus {
        color: #777;
        cursor: pointer;
      }

      .quantity .plus:hover,
      .quantity .minus:hover {
        color: #333;
      }
    </style>
  `;

  $('head').append(styles);
}

module.exports = injectCustomStyles;
