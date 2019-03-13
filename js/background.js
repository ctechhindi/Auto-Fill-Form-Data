/**
 * App Status Check :: checkbox value get
 */
function appStatusCheck() {
    chrome.storage.local.get('extensionData__appStatus', function (budget) {
        if (budget.extensionData__appStatus === true) {
            chrome.browserAction.setIcon({ path: "img/icon32.png" });
        } else {
            chrome.browserAction.setIcon({ path: "img/icon_disable.png" });
        }
    });
} appStatusCheck();
