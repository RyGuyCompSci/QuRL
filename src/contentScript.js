'use strict';

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

function sendUrl(urlToSend) {
  if(typeof urlToSend === 'undefined') {
    console.error('we do not have a url');
    return;
  }
  chrome.runtime.sendMessage({
    type: 'CON_URL_CHANGED',
    payload: {
      url: urlToSend
    }
  }, () => null);
}

var oldHref = document.location.href;
var bodyList = document.querySelector("body")
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (oldHref != document.location.href) {
      oldHref = document.location.href;
      /* Changed ! your code here */
      sendUrl(document.location.href)
    }
  });
});

var config = {
  childList: true,
  subtree: true
};

function setup() {
  const url = window.location.href;
  sendUrl(url);
}

observer.observe(bodyList, config);
setup();
