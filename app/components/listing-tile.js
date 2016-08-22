import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:asc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),

});
