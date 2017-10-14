import Ember from 'ember';

export function formatMarkdowm(params) {
	return Ember.String.htmlSafe(new showDown.Converter().makeHtml(params[0]));
}

export default Ember.Helper.helper(formatMarkdowm);