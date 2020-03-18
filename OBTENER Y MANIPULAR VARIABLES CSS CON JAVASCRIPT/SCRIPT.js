/* CSSOM

	Para recuperar una variable CSS
	getComputedStyle(element).getPropertyValue('--variable')

	Para setear una variable CSS
	element-style.setProperty('--variable', 'value')

	document.documentElement

*/

const rootStyles = getComputedStyle(document.documentElement);
