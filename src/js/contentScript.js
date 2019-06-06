(function() {
	const toRupeeRatio = {
		'$': 69.58,
		'€': 77.82,
	};
	const currencySymbols = ['\\$', '€'];
	const currencyRegex = new RegExp(`(${currencySymbols.join('|')})\\s?(\\d+(?:,\\d{2,3})*(?:\\.\\d+)?)`, 'g');

	const INR = new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'});

	const spanStyle = 'background: rgba(220,220,220,0.7); color: #333; padding: 2px 5px; border-radius: 3px';
	const format = price => `<span style="${spanStyle}">${INR.format(price)}</span>`

	document.body.innerHTML = document.body.innerHTML.replace(currencyRegex, (_, currency, val) => {
		const numval = Number(val.replace(/,/g, ''));
		return Number.isNaN(numval) ?
			`${currency} ${val}` :
			format(toRupeeRatio[currency] * numval);
	});
})();
