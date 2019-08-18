chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.executeScript(tab.id, {
		runAt: 'document_end',
		allFrames: true,
		file: 'js/contentScript.js',
	});
});

chrome.commands.onCommand.addListener(function (command) {
	if (command === "convert_currency") {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function (tabs) {
			chrome.tabs.executeScript(tabs[0].id, {
				runAt: 'document_end',
				allFrames: true,
				file: 'js/contentScript.js',
			});
		});
	}
});