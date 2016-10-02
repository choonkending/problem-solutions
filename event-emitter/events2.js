function Emitter () {
  const events = {};
  function subscribe(event, callback) {
    const listeners = events[event] || [];
    listeners.push(callback);
    events[event] = listeners;
    return {
      release: function() {
        const id = listeners.indexOf(callback);
        events[event].splice(id, 1);
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
const subscriber2 = emitter.subscribe('someEvent', () => { console.log('hah') });
emitter.emit('someEvent');
subscriber2.release();
emitter.emit('someEvent');

