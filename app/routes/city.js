// This is the route handler for the city route / template.

// SETUP MODEL:
// The route handler returns the city model, which is defined here as a single city object (found based on the params passed in here from the URL, as setup in the router.js file.)
// This model (representing a single city object) can be accessed in the city template by the variable model

// DATABASE-RELATED ACTIONS:
// We can also include here actions that update or destroy the city record in Firebase.
// Create city was already taken care of in the index route, but here we have update and destroy for city.
// We also have the action to add a new rental here, as this happens from within the city show page.

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  }, 
  actions: {
    updateCity(city, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          city.set(key,params[key]);
        }
      });
      city.save();
      this.transitionTo('city', city);
    },
    destroyCity(city) {
      city.get('rentals').then(function(rentals) {
        rentals.forEach(function(rental) {
          rental.destroyRecord();
        });
      });
      city.destroyRecord();
      this.transitionTo('index');
    },
    saveRental(city, params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      city.save().then(function(city) {
        city.reload();  
      });
      this.transitionTo('city', city);
    }
  }
});
