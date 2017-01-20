import DS from 'ember-data';

let lot = [
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
	isFull: DS.attr('boolean'),
	type: DS.attr('string')
});
