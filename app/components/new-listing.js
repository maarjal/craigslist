import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing1() {
      var params = {
        owner: this.get('owner'),
        title: this.get('title'),
        price: parseInt(this.get('price')),
        city: this.get('city'),
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image') ? this.get('image'): ""
      };
      console.log("params: " + params);
      this.set('addNewListing', false);
      this.sendAction('saveListing2', params);
    }
  }
});
