// This is the js portion of the new-city component. 
// It defines variables and actions usable in the new-city component's template. 
// addCityForm is a property used in the component's template to determine whether or not to show the form.

// In the saveCity action, we grab values from the form and create a params object using those values that we will then pass all the way back to the index route handler, where we will use it to create a new city record. Parameter names should match properties defined by the city model (models/city.js). 
// this.sendAction('saveCity', params) calls the saveCity action of the index route handler because we passed the saveCity variable in here when the component was inserted into index.hbs and gave it the value "saveCity", which refers to the saveCity action on the index route handler (routes/index.js). We pass that function our params object.

import Ember from 'ember';

export default Ember.Component.extend({
  addCityForm: false,
  actions: {
    showCityForm() {
      this.set('addCityForm', true);
    },
    saveCity() {
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions'),
        country: this.get('country')
      };
      this.set('addCityForm', false);
      this.sendAction('saveCity', params);
    }
  }
});
