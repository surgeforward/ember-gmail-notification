import Ember from 'ember';
export
default Ember.Mixin.create({
  actions: {
    notify: function(message, delayInSeconds) {
      var self = this;
      var templateName = 'common/status-notification';
      var con = this.controllerFor(templateName);
      con.set('message', message);
      delayInSeconds = delayInSeconds || 3;
      if (delayInSeconds > 0) {
        setTimeout(function() {
          self.send('dismiss');
        }, delayInSeconds * 1000);
      }
      return this.render(templateName, {
        into: 'application',
        outlet: 'notification'
      });
    },
    dismiss: function() {
      console.log('dismiss notification');
      return this.disconnectOutlet({
        outlet: 'notification',
        parentView: 'application'
      });
    }
  }
});
