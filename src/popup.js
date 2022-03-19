'use strict';
const QRCode = require('qrcode');
import './popup.css';
import UrlStorageHelper from './storageHelper';

(function () {
  function drawCanvas(url) {
    var canvas = document.getElementById('canvas');
    QRCode.toCanvas(
      canvas, 
      url, 
      { errorCorrectionLevel: 'Q' }, 
      err => err ? console.error(err) : null
    );
  }
  
  function clearCanvas() {
    console.log('clearing canvas')
    var canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0,0, canvas.clientWidth, canvas.height);
  }

  function populateUrl() {
    UrlStorageHelper.get(url => {
      var urElement = document.getElementById('url')
      if (typeof url !== 'undefined' && url.match(/^chrome:/i) == null) {
        urElement.innerHTML = 'Scan this QR code to visit this page on another device';
        drawCanvas(url);
      } else {
        clearCanvas();
        urElement.innerHTML = 'No URL found for this tab, try navigating to a different tab and try again'
      }
    })
  }

  /*
   * Update popup url anytime we get the 'POP_URL_CHANGED' message
   */
  chrome.runtime.onMessage.addListener((request) => {
    if (request.type === 'POP_URL_CHANGED') {
      UrlStorageHelper.get(url => {
        document.getElementById('url').innerHTML = url;
        drawCanvas(url);
      });
    }
  });

  // setup
  document.addEventListener('DOMContentLoaded', populateUrl);
})();
