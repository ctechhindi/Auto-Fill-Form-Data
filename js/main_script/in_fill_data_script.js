/**
 * Main Function
 */
(function ($) {

    var app = {

        include: {
            jquery_path1: '/jquery/1.11.0/jquery.min.js',
            jquery_path2: '/jquery/2.1.0/jquery.min.js',
            // analytics: 'https://ssl.google-analytics.com/ga.js',
        },

        generateScriptDataUrl: function (jscript) {
            var b64 = 'data:text/javascript';
            // base64 may be smaller, but does not handle unicode characters
            // attempt base64 first, fall back to escaped text
            try {
                b64 += (';base64,' + btoa(jscript));
            }
            catch (e) {
                b64 += (';charset=utf-8,' + encodeURIComponent(jscript));
            }

            return b64;
        },

        injectScript: function (src, where) {
            var elm = document.createElement('script');
            elm.src = src;
            document[where || 'head'].appendChild(elm);
        },

        injectStyle: function (src, where) {
            var elm = document.createElement('link');
            elm.href = src;
            elm.rel = "stylesheet";
            elm.type = "text/css";
            document[where || 'head'].appendChild(elm);
        },

        /**
         * Get Application Data
         */
        getDataElement: {
            activeUserFillData: "extensionData__activeUserFillData",
            activeUserData: "extensionData__activeUserData",
        },

        /**
         * Check Application Status : [true/false]
         */
        checkApplicationStatus: function () {
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get('extensionData__appStatus', function (budget) {
                    if (budget.extensionData__appStatus === true) {
                        resolve("Start");
                    } else {
                        reject("Application Stop");
                    }
                });
            });
        },
    }

    /**
     * Check Application Status : [true/false]
     */
    app.checkApplicationStatus().then(function (resp) {

        /**
         * Custom Data : Fetch All Extension Local Storage Key Data
         */
        chrome.storage.local.get([app.getDataElement.activeUserFillData, app.getDataElement.activeUserData], function (budget) {
            // console.log(budget);
            if (budget.extensionData__activeUserFillData !== undefined) {
                localStorage.setItem("autoFillActiveAutocompleteData_V1", JSON.stringify(budget.extensionData__activeUserFillData));
            }

            if (budget.extensionData__activeUserData !== undefined) {
                localStorage.setItem("autoFillActiveUserData_V1", JSON.stringify(budget.extensionData__activeUserData));
            }
        });

        // include jquery
        // app.injectScript('https://ajax.googleapis.com/ajax/libs' + app.include.jquery_path2);
        // Awesomplete :: https://cdnjs.com/libraries/awesomplete
        // app.injectScript("https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.4/awesomplete.min.js");
        app.injectStyle("https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.4/awesomplete.base.min.css");
        app.injectStyle("https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.4/awesomplete.min.css");
        app.injectStyle("https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.4/awesomplete.theme.min.css");


    }).catch(function (error) {
        console.error(error);
    });
})();