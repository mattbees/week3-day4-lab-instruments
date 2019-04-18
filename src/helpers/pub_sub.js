const PubSub = {
  // publish: needs event and data as args
  publish: (channel, payload) => {
    const event = new CustomEvent(channel, {
    detail: payload
  })
  document.dispatchEvent(event)
},
  // subscribe: needs event and behaviour as args
  subscribe: (channel, callback) => {
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
