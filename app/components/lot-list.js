import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['isFull:list-group-item-success'],
	isFull: true
});
