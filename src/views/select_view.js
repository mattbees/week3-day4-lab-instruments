const PubSub = require('../helpers/pub_sub.js');

class SelectView {

  constructor() {
    this.element = document.querySelector('#instrument-families')
  };

  // Subscribes to data channel from model and populates dropdown
  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:all-ready', (event) => {
      this.populate_instruments(event.detail)
    });

    this.element.addEventListener('change', (event) => {
      const selectedIndex = event.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
      console.log(selectedIndex);
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
