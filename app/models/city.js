// This tells Ember what the city model actually looks like.
// These are the properties Ember will try to retrieve from Firebase when finding a record or records.
// These are also the properties Ember will try to save in Firebase when creating a new record.

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  attractions: DS.attr(),
  country: DS.attr(),
  rentals: DS.hasMany('rental', {async: true})
});
