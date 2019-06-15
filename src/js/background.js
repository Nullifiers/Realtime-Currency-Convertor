chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.executeScript(tab.id, {
		runAt: 'document_end',
		allFrames: true,
		file: 'js/contentScript.js',
	});
});