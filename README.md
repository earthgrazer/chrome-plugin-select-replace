# chrome-plugin-select-replace
Browser extension to replace JIRA drop-down menus with searchable, filterable lists

## Why?
Using Zephyr integration in JIRA was painful because test cycle selection was using `<select>` drop-down boxes, which are unsorted and can get crazy long. This extension replaces those `<select>` drop-downs with `<input>` lists backed by `<datalist>`, which allows free-form text input in the drop-down with item filtering implemented by most modern browsers.

## Install
### Chrome
1. Download [**chrome_plugin_select_replace.crx**](https://github.com/earthgrazer/chrome-plugin-select-replace/raw/master/chrome_plugin_select_replace.crx)
2. In Chrome browser, open chrome://extensions
3. Drag the .crx file into page to install

Or

1. Download the source folder
2. In Chrome browser, open chrome://extensions
3. Check "Developer mode"
4. Click "Load unpacked extensions"
5. Navigate to source folder and import

### Firefox
1. Download [**firefox_plugin_select_replace.xpi**](https://github.com/earthgrazer/chrome-plugin-select-replace/blob/master/firefox_plugin_select_replace.xpi)
2. In Firefox, open about:addons
3. Drag the .xpi file into page to install

## Use
In the "Add to Test Cycle(s)" dialog, each drop-down list has a replacement input next to it. If the Version or Test Cycle name is known, just type in the replacement input to get a list of suggestions, and make the selection there. The original drop-down list may still be used if desired.

## Known Issues
- Replacement lists are not scrollable in Chrome, so long lists may extend past the page boundaries
