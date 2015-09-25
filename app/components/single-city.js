// single-city.js makes properties & actions available to the template portion of the single-city component

// destroyCity action here is directly called by single-city component's template, which passes in the city object. After displaying a confirmation box, we call the city route handler's destroyCity function and pass along the city. The route handler actually takes care of the database stuff. We know how to find the route handler's destroyCity action because "destroyCity" was passed in here by the calling template (city.hbs).

// updateCity and saveRental actions here simply forward on function / action calls from an embedded component to the city route handler. Again, we know how to find the route handler's actions because "updateCity" and "saveRental" were passed in here by the calling template (city.hbs).

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateCity(city, params) {
      this.sendAction('updateCity', city, params);
    },
    destroyCity(city) {
      if(confirm('Are you sure you want to delete this city and all its rentals?')) {
        this.sendAction('destroyCity', city);
      }
    },
    saveRental(city, params) {
      this.sendAction('saveRental', city, params);
    }
  }
});