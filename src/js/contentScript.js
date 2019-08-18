(function () {
	function replace($node, regex, replaceMethod) {
		const queue = [$node];
		while (queue.length) {
			let top = queue.shift();
			if (top.childNodes.length) {
				queue.push(...top.childNodes);
				continue;
			}

			// If a text node is only child then replace currency using innerHTML
			if (top.nodeType === Node.TEXT_NODE && top.parentElement.childNodes.length === 1) {
				top = top.parentElement;
			}

			if (top.nodeType === Node.ELEMENT_NODE && regex.test(top.innerHTML)) {
				top.innerHTML = top.innerHTML.replace(regex, replaceMethod.bind(top));
			} else if (top.nodeType === Node.TEXT_NODE && regex.test(top.nodeValue)) {
				top.nodeValue = top.nodeValue.replace(regex, replaceMethod.bind(top));
			}
		}
	}

	const toRupeeRatio = {
		'$': 69.58,
		'€': 77.82,
	};
	const currencySymbols = ['\\$', '€'];
	const currencyRegex = new RegExp(`(${currencySymbols.join('|')})\\s?(\\d+(?:,\\d{2,3})*(?:\\.\\d+)?)`, 'g');

	const INR = new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'INR'
	});

	const spanStyle = 'background: rgba(220, 220, 220, 0.7); color: #333; padding: 2px 5px; border-radius: 3px';
	const format = price => `<span style="${spanStyle}">${INR.format(price)}</span>`;

	replace(document.body, currencyRegex, function (_, currency, val) {
		const numval = Number(val.replace(/,/g, ''));
		if (Number.isNaN(numval)) return `${currency} ${val}`;

		return this.nodeType === Node.ELEMENT_NODE ?
			format(toRupeeRatio[currency] * numval) :
			INR.format(toRupeeRatio[currency] * numval);
	});
})();