const PubSub = require('../helpers/pub_sub.js');

class ResultView {

  constructor() {
    this.element = document.querySelector('#instrument-group')
  };

  bindEvents() {
    PubSub.subscribe('SelectedInstrument:ready', (event) => {
      console.log('SelectedInstrument:ready working');
      this.populate_result(event.detail);
      this.populateUL(event.detail);
    });
  };

  populate_result(detail) {
    const resultText = document.createElement('p');
    resultText.textContent = detail.description;
    this.element.appendChild(resultText);
  };

  populateUL(data) {
    
    data.instruments.forEach((instrument) => {
      this.element.appendChild();
    });
  };

};

module.exports = ResultView;
