function Emitter () {
  const events = {};
  function subscribe(event, callback) {
    const listeners = events[event] || [];
    const id = listeners.push(callback);
    events[event] = listeners;
    return {
      release: function() {
        events[event].splice(id - 1, 1);
      }
    };
  }

  function emit(event) {
    if (events[event]) {
      events[event].forEach(listener => listener());
    }
  }

  return {
    subscribe,
    emit
  };
}

const emitter = new Emitter();
const subscriber = emitter.subscribe('someEvent', () => { console.log('hey') });
emitter.emit('someEvent');
subscriber.release();
emitter.emit('someEvent');
