/**
 * Vue js
 */
Vue.use(Buefy.default);

new Vue({
    el: '#popup',

    methods: {

        generateScriptDataUrl: function (jScript) {
            var b64 = 'data:text/javascript';
            // base64 may be smaller, but does not handle unicode characters
            // attempt base64 first, fall back to escaped text
            try {
                b64 += (';base64,' + btoa(jScript));
            }
            catch (e) {
                b64 += (';charset=utf-8,' + encodeURIComponent(jScript));
            }

            return b64;
        },

        /**
         * Apply Script
         * @param {*} script name
         */
        applyScript: function (name) {

            var script = {};
            // runAt: "document_start"
            // allFrames: true,

            if (name === "autocomplete_keys") {

                var script_aw1 = "https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.4/awesomplete.min.js";
                chrome.tabs.executeScript({ code: "var e1 = document.createElement('script');e1.src = '" + script_aw1 + "';document.body.appendChild(e1);" });

                var script_src = chrome.runtime.getURL('js/script/autocomplete_keys.min.js');

            } else if (name === "scc_basic_info") {
                var script_src = chrome.runtime.getURL('js/script/scc_basic_info.min.js');
            } else if (name === "ccc_nielit") {
                var script_src = chrome.runtime.getURL('js/script/certificate/ccc_nielit.min.js');
                // script["frameId"] = 129;
                script["allFrames"] = true;
                script["runAt"] = "document_end";
            } else if (name === "o_level_nielit") {
                var script_src = chrome.runtime.getURL('js/script/certificate/o_level_nielit.min.js');
                script["allFrames"] = true;
                script["runAt"] = "document_end";
            } else if (name === "railway_rrb") {
                var script_src = chrome.runtime.getURL('js/script/Railway/railway_rrb.min.js');
            } else if (name === "upsc_online") {
                var script_src = chrome.runtime.getURL('js/script/upsc/upsc_online.min.js');
            }

            if (script_src !== undefined) {
                // var script_data_url = this.generateScriptDataUrl(script_src);

                var inject_script =
                    "var script = document.createElement('script');\
                    script.src = '" + script_src + "';\
                    document.body.appendChild(script);";

                script["code"] = inject_script;

                chrome.tabs.executeScript(script);
            }
        }
    }

});