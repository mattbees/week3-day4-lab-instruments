const PubSub = require('../helpers/pub_sub.js');

class SelectView {

  constructor() {
    this.element = document.querySelector('#instrument-families')
  };

  // Subscribes to data channel from model and populates dropdown
  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:all-ready', (event) => {
      console.log('InstrumentFamilies:all-ready channel working');
      console.dir(event.detail);
      this.populate_instruments(event.detail)
    });
  };

  populate_instruments(instrumentsData){
    instrumentsData.forEach((instrument,index) => {
      const option = document.createElement('option');
      option.textContent = instrument.name;
      option.value = index;
      this.element.appendChild(option);
    });
  };
};

module.exports = SelectView;
