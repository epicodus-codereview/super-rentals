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
