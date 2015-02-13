import Ember from 'ember';

export
default Ember.Controller.extend({
  actions: {
    showNotification: function() {
      this.send('notify', 'hello world', 5);
    }
  }
});
