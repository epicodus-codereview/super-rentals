import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  city: DS.belongsTo('city', {async: true})
});
