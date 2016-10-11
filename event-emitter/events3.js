class Emitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, listener) {
    // If there is an event
    //  add it to the array of listeners
    // If there isn't create and push an array

    // Return an object with a fn that allows you to release the callback from
    // the event
    const listeners = this.events[event] || [];
    listeners.push(listener);
    return {
      release: () => {
        const id = listeners.indexOf(listener);
        listeners.splice(id, 1);
      }
    };
  }

  emit(event) {
    const listeners = this.events[event];
    if (listeners) {
      listeners.forEach(cb => cb());
    }
  }
}


const emitter = new Emitter();
const subscriber = emitter.subscribe('someEvent', () => { console.log('hey') });
const subscriber2 = emitter.subscribe('someEvent', () => { console.log('hah') });
emitter.emit('someEvent');
subscriber2.release();
emitter.emit('someEvent');
