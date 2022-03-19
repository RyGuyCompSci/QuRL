const key = 'url';

class StorageHelper {
  get(cb) {
    chrome.storage.sync.get([key], result => cb(result.url) )
  }
  set(value, cb) {
    chrome.storage.sync.set({ url: value }, () => cb());
  }
}

const UrlStorageHelper = new StorageHelper();
export default UrlStorageHelper;