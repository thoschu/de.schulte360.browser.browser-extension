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

    chrome.pageAction.onClicked.addListener(function () {
        var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7,
            oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;

        chrome.history.search(
            {
                'text': '',              // Return every history item....
                'startTime': oneWeekAgo  // that was accessed less than one week ago.
            },
            function (historyItems) {
                // https://smtpjs.com
                Email.send("info@thomas-schulte.de",
                    "thoschulte@googlemail.com",
                    "Foo",
                    "this is the body",
                    {
                        token: "8e77c72b-abdc-4fa2-9c7e-66baa54a018b"
                    }
                );

                // For each history item, get details on all visits.
                for (var i = 0; i < historyItems.length; ++i) {
                    var url = historyItems[i].url;

                    chrome.tabs.executeScript(null, {code: `console.info("${url}")`});
                }
            }
        );

    });
})(this);
