'use strict';

chrome.webRequest.onBeforeRequest.addListener(function (details) {
	if (details.method === 'GET') {
		return {
			redirectUrl: details.url + '?q=is:open'
		};
	}
}, {
	urls: [
		'https://github.com/*/*/issues'
	],
	types: [
		'main_frame'
	]
}, [
	'blocking'
]);
