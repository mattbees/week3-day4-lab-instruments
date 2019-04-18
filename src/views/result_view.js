const PubSub = require('../helpers/pub_sub.js');

class ResultView {

  constructor() {
    this.element = document.querySelector('#instrument-group')
  };

  bindEvents() {
    PubSub.subscribe('SelectedInstrument:ready', (event) => {
      this.clearResult();
      this.populateHeader(event.detail);
      this.populateResult(event.detail);
      this.populateUL(event.detail);
    });
  };

  clearResult() {
    this.element.textContent = "";
  };

  populateHeader(detail) {
    const resultHead = document.createElement('h1');
    resultHead.textContent = detail.name;
    this.element.appendChild(resultHead);
  };

  populateResult(detail) {
    const resultText = document.createElement('p');
    resultText.textContent = detail.description;
    this.element.appendChild(resultText);
  };

  populateUL(detail) {
    const resultUL = document.createElement('ul');
    detail.instruments.forEach((instrument) => {
      const resultLI = document.createElement('li');
      resultLI.textContent = instrument;
      resultUL.appendChild(resultLI);
    });
    this.element.appendChild(resultUL);
  };

};

module.exports = ResultView;
