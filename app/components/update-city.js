import Ember from 'ember';

export default Ember.Component.extend({
  updateCityForm: false,
  actions: {
    showCityForm() {
      this.set('updateCityForm', true);
    },
    updateCity(city) {
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions'),
        country: this.get('country')
      };
      this.set('updateCityForm', false);
      this.sendAction('updateCity', city, params);
    }
  }
});
