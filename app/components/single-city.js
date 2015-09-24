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