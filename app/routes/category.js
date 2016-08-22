import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveListing3(params) {
      console.log('admin level executes');
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitionTo('admin');
    },
  }
});
