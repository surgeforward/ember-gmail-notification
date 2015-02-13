import Ember from 'ember';
import NotifierMixin from 'gmail-notifier/mixins/notifier';

module('NotifierMixin');

// Replace this with your real tests.
test('it works', function() {
  var NotifierObject = Ember.Object.extend(NotifierMixin);
  var subject = NotifierObject.create();
  ok(subject);
});
