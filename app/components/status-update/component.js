import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    compose: function() {
      this.attrs.openComposeModal();
    },
    showAlert: function() {
      sweetAlert("Sorry", "This feature is not available yet.", "error");
    }
  }
});
