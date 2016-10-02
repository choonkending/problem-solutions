function Emitter() {
  this.events = {};
}

Emitter.prototype.subscribe = function(event, callback) {
  const listeners = this.events[event] || [];
  listeners.push(callback);
  this.events[event] = listeners;
  return {
    release: () => {
      const id = listeners.indexOf(callback);
      this.events[event].splice(id, 1);
    }
  };
};

Emitter.prototype.emit = function(event) {
  if (this.events[event]) {
    this.events[event].forEach(listener => listener());
  }
};

const emitter = new Emitter();
const subscriber = emitter.subscribe('someEvent', () => { console.log('hey') });
const subscriber2 = emitter.subscribe('someEvent', () => { console.log('hah') });
emitter.emit('someEvent');
subscriber2.release();
emitter.emit('someEvent');

