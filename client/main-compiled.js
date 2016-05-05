import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/startup/client/i18n_startup.js';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    event.preventDefault();
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
});

//# sourceMappingURL=main-compiled.js.map