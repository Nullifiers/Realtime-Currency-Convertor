# Realtime-Currency-Convertor

Browser Extension to convert foreign currency to local currency, real time.

## How to use:-

- Navigate to any page which has a different currency mentioned in its article body, for example in [this](https://www.smartprix.com/bytes/samsung-galaxy-note-10-realme-5-pro-realme-5-mi-a3-launch-in-india-next-week-heres-what-to-expect/) article the prices are mentioned in dollars and we want them in say Rupees.

- There are two ways to get the currency converted in your desired currency with its real time conversion rate:- 
  1. Simply press the extension icon and your converted currency will be highlighted in the article.

  2. Press the combo of `Ctrl+Shift+K` in the case of Windows/Linux or `Cmd+Shift+K` in the case of Mac computers to get the same result as in 1st case.
  
## Script(s):-

- `npm run lint`: To run ESLint linter rules in `src` folder
- `npm run build`: To create a transpiled `dist` folder which can be then deployed to chrome.
