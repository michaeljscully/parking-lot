import DS from 'ember-data';

var queue = DS.Model.extend({
	type: DS.attr('string'),
	icon: function(){
		switch(this.get('type')) {
			case "Motorcycle":
				return "fa-motorcycle";
			case "Sedan":
				return "fa-car";
			case "Truck":
				return "fa-truck";
		}
	},
	space: function(){
		switch(this.get('type')) {
			case "Motorcycle":
				return "all";
			case "Sedan":
				return "med or large";
			case "Truck":
				return "large";
		}
	}
});

// queue.reopenClass([
// 	FIXTURES: [
// 		{
// 			type: 'Sedan',
// 			icon: 'fa-car',
// 			space: 'md || lg'
// 		},
// 		{
// 			type: 'Motorcycle',
// 			icon: 'fa-motorcycle',
// 			space: 'sm || md || lg'
// 		},
// 		{
// 			type: 'Truck',
// 			icon: 'fa-truck',
// 			space: 'lg'
// 		},
// 	]
// ]);

export default queue;