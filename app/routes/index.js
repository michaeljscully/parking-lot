import Ember from 'ember';

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
});
