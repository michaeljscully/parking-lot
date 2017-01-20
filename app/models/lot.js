import DS from 'ember-data';

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

export default DS.Model.extend({
	isFull: DS.attr(),
	type: DS.attr(),
	
});
