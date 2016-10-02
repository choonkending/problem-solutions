/*
 * Implement a class event emitter
 * - subscribe
 * - release
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    const targetListeners = this.events[event] || [];
    targetListeners.push(callback);
    this.events[event] = targetListeners;
  }

  release(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(listener => listener !== callback);
    }
  }

  emit(event) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener());
    }
  }

}

const emitter = new EventEmitter();
const callbackA = () => { console.log('callback A') };
const callbackB = () => { console.log('callback B') };
emitter.subscribe('randomEvent', callbackA);
emitter.subscribe('randomEvent', callbackB);
emitter.emit('randomEvent');
emitter.release('randomEvent', callbackA);
emitter.emit('randomEvent');
