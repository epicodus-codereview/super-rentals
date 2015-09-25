// This is the route handler for the index route / template.

// SETUP MODEL:
// The route handler returns a model (in this case an Ember hash containing 2 models, though this 2 model thing is only needed in this case because we are actually displaying rentals (from the rental model) on the homepage as well as a list of cities. If we were only displaying a list of cities on the homepage then we could simply return model as this.store.findAll('city'). We can access rentals that belong to a city from within a city object.)
// These 2 models returned in a hash can be accessed in the index template with model.cities and model.rentals

// DATABASE-RELATED ACTIONS:
// We can also include here actions that create, destroy, or update the model.
// Generally actions pertaining to cities would be on the city model, but since we are adding a new city from the index template, the index model will deal with creating the new city record.

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },
  actions: {
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    }
  }

});
