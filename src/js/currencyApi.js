var api = {
    exchangerate: {
        url: {
            get base() {
                return 'https://api.exchangerate-api.com/v4/';
            },
            get latest() {
                return `${this.base}latest`;
            },
        }
    }
}

function fetchExchangeRates(currencyBase = 'INR') {
    var url = `${api.exchangerate.url.latest}?base=${currencyBase}`;
    fetch(url).then(data => {
        var x = data.json();
        console.log('fetchExchangeRates', x);
    })
}