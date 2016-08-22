import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(listing, params) {
      this.sendAction('update', listing, params);
    },
    delete(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
        this.sendAction('destroyListing', listing);
      }
    }
  }
});
