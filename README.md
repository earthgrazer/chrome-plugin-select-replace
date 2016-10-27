# chrome-plugin-select-replace
Chrome extension to replace drop-down menus with auto-complete lists

## Why?
Using Zephyr integration in JIRA was painful because test cycle selection was using `<select>` drop-down boxes, which are unsorted and can get crazy long. This extension replaces those `<select>` drop-downs with `<input>` lists backed by `<datalist>`, which allows free-form text input in the drop-down with auto-completion.

## Usage
1. Download chrome_plugin_select_replace.crx
2. In Chrome browser, open chrome://extensions
3. Drag the .crx file into page to install

Or

1. Download the source folder
2. In Chrome browser, open chrome://extensions
3. Check "Developer mode"
4. Click "Load unpacked extensions"
5. Navigate to source folder and import
