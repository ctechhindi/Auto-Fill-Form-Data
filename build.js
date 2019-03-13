var repeat = require('chrome-extension-builder');

var projectFolders = [
  "fonts",
  "img",
  "plugins",
];

var projectFiles = [
  "css/buefy.min.css",
  "css/custom.min.css",
  "css/jquery-ui.min.css",
  "css/materialdesignicons.min.css",
  "js/main_script/in_fill_data_script.min.js",
  "js/script/certificate/ccc_nielit.min.js",
  "js/script/certificate/o_level_nielit.min.js",
  "js/script/Railway/railway_rrb.min.js",
  "js/script/upsc/upsc_online.min.js",
  "js/script/autocomplete_keys.min.js",
  "js/script/scc_basic_info.min.js",
  "js/background.min.js",
  "js/buefy.min.js",
  "js/custom.min.js",
  "js/jquery-1.8.3.min.js",
  "js/keys.min.js",
  "js/options.min.js",
  "js/popup.min.js",
  "js/vue.min.js",
  "keys.html",
  "manifest.json",
  "options.html",
  "popup.html",
];

repeat.init({
  version: "0.0.2",
  basePath: __dirname,
  folders: projectFolders,
  files: projectFiles
});
