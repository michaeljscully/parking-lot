import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model() {
		return RSVP.hash({
			lot: this.get('store').findAll('lot'),
			queue: this.get('store').findAll('queue')
		});
	}
	// events: {
	// 	addVehicle: function() {
	// 		var vehicles = this.modelFor('queue');
	// 		var vehicle = queue.pushObject({
	// 			id: vehicles.length,
	// 			//type: '',
	// 		});
	// 		this.transitionTo('index', vehicle);
	// 	}
	// }
});
