(function() {
	console.log('content script loaded');
	
	const usdRegex = /\$( ?[0-9]+)/g;
	const usdToRupeeRatio = 69.58;

	document.body.innerHTML = document.body.innerHTML.replace(usdRegex, (_, val) => {
		const numval = Number(val);
		return Number.isNaN(numval) ? val : `₹ ${usdToRupeeRatio * numval}`;
	});
})();