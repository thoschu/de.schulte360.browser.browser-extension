/**
 * Created by Tom S.
 */
(function (that) {
    chrome.runtime.onInstalled.addListener(function (details) {
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
            chrome.declarativeContent.onPageChanged.addRules([
                {
                    conditions: [
                        new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: {
                                //hostEquals: 'www.thomas-schulte.de',
                                hostSuffix: 'thomas-schulte.de',
                                schemes: [
                                    'http',
                                    'https'
                                ]
                            },
                            // css: [
                            //     "input[type='text']"
                            // ]
                        })
                    ],
                    actions: [
                        new chrome.declarativeContent.ShowPageAction()
                    ]
                }
            ]);
        });
    });

    chrome.pageAction.onClicked.addListener(function (info) {
        chrome.tabs.executeScript(null, {code: ' console.info("info")'});
    });
})(this);
