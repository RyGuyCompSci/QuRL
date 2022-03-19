'use strict';

import UrlStorageHelper from "./storageHelper";

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

function storeUrl(url) {
  // can't be blank and can't be chrome tabs
  UrlStorageHelper.set(url, () => { });
  chrome.runtime.sendMessage(
    {
      type: 'POP_URL_CHANGED'
    }
  );
}

chrome.tabs.onActivated.addListener(info => {
  chrome.tabs.query({ 'active': true, 'currentWindow': true }, tabs => {
    storeUrl(tabs[0].url);
  })
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'CON_URL_CHANGED') {
    storeUrl(request.payload.url);
  }
});
