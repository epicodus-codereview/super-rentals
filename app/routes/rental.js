// SETUP MODEL:
// The route handler returns the rental model, which is defined here as a single rental object (found based on the params passed in here from the URL, as setup in the router.js file.)
// This model (representing a single rental object) can be accessed in the rental template by the variable model

// DATABASE-RELATED ACTIONS:
// We can also include here actions that update or destroy the rental record in Firebase.
// Create rental was already taken care of in the city route, because we add a rental to a city.

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    updateRental(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('rental', rental);
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
