import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      var category = params.category;
      category.get('categories').addObject(newCategory);
      newCategory.save().then(function() {
        return category.save();
      });
      this.transitionTo('listing', params.listing);
    },
  }
});
