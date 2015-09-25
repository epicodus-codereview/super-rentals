// This tells Ember what the rental model actually looks like.
// These are the properties Ember will try to retrieve from Firebase when finding a record or records.
// These are also the properties Ember will try to save in Firebase when creating a new record.

import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  city: DS.belongsTo('city', {async: true})
});
