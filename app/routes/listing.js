import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      var listing = params.listing;
      listing.get('categories').addObject(newCategory);
      newCategory.save().then(function() {
        return listing.save();
      });
      this.transitionTo('listing', params.listing);
    }
  }
});
