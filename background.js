chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: 'red' }, () => {
    console.log('color is red');
  });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'www.ptbird.cn' }
    })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});