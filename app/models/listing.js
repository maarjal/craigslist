import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  title: DS.attr(),
  price: DS.attr(),
  city: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
  body: DS.attr(),
  date: DS.attr(),
  image: DS.attr()
});
