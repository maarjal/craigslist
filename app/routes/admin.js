import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('listing');
  },
  actions: {
    saveListing3(params) {
      console.log('admin level executes');
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitionTo('admin');
    },
    // saveCategory(params) {
    //   var newCategory = this.store.createRecord('category', params);
    //   newCategory.save();
    //   this.transitionTo('admin');
    // },
    update(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('admin');
    },
    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo('admin');
    },
  }
});
