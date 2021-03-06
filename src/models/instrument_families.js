const PubSub = require('../helpers/pub_sub.js');
const instrumentFamilyData = require('../data/instrument_family_data.js');

class InstrumentFamilies {

  constructor(data) {
    this.data = data;
  }

  // On instantiation publishes data. Subscribe to change event from SelectView.
  bindEvents() {
    PubSub.publish('InstrumentFamilies:all-ready', this.data);

    PubSub.subscribe('SelectView:change', (event) => {
      this.selectData(event.detail);
    });
  };

  selectData(index) {
    const selectedData = this.data[index];
    PubSub.publish('SelectedInstrument:ready', selectedData);
  };

};

module.exports = InstrumentFamilies;
