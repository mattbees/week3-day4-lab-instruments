const PubSub = require('../helpers/pub_sub.js');

class SelectView {

  constructor() {
    this.element = document.querySelector('#instrument-families')
  };

  // Subscribes to data channel from model and populates dropdown
  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:all-ready', (event) => {
      console.log('InstrumentFamilies:all-ready channel working');
    });
  };

};

module.exports = SelectView;
