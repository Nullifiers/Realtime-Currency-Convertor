chrome.browserAction.onClicked.addListener(tab => executeScript(tab.id));

chrome.commands.onCommand.addListener(command => {
	if (command === "convert_currency") {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, tabs => executeScript(tabs[0].id));
	}
});

function executeScript(id) {
	chrome.tabs.executeScript(id, {
		runAt: 'document_end',
		allFrames: true,
		file: 'js/contentScript.js',
	});
}