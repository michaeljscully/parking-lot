import Ember from 'ember';

var lot = [
{
	isFull: true,
	type: 'Car'
},
{
	isFull: false,
	status: 'true',
},
{
	isFull: false,
	status: 'true',
},
{
	isFull: false,
	status: 'true',
},
];

var queue = [
{
	id: '1',
	type: 'Sedan',
	icon: 'fa-car',
	space: 'md || lg'
},
{
	id: '2',
	type: 'Motorcycle',
	icon: 'fa-motorcycle',
	space: 'sm || md || lg'
},
{
	id: '3',
	type: 'Truck',
	icon: 'fa-truck',
	space: 'lg'
},
];

export default Ember.Route.extend({
	model() {
		return queue;
	},
	events: {
		addVehicle: function() {
			var vehicles = this.modelFor('queue');
			var vehicle = queue.pushObject({
				id: vehicles.length,
				//type: '',
			});
			this.transitionTo('index', vehicle);
		}
	}
});
