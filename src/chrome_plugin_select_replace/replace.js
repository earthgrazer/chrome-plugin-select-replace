// Limit replacement to select drop-downs with these IDs
var inclNodeIds = ["project_version", "cycle_names"];

var dataListIdx = 0;

/**
 * Replace the given <select> element with <input> <datalist> combo
 */
function replaceSelect(node) {
	var nodeJ = $(node);
	
	// Only apply to select list of IDs
	// Make sure we don't do the replacement more than once
	// Don't apply to hidden select elements
	if (inclNodeIds.indexOf(nodeJ.attr('id')) < 0 ||
	    nodeJ.hasClass('replacedWithInput') || 
	    nodeJ.is(':hidden')) {
		return;
	}
	
	var dataListId = 'dataList' + dataListIdx;
	var dataList = $('<datalist>').attr({id: dataListId});
	var dataInput = $('<input>').attr({list: dataListId}).addClass('select');
	
	// Update datalist every time the input is selected
	dataInput.focus(function() {
		dataList.empty();
	
		// Copy over the options from <select>
		nodeJ.children('option').each(function() {
			dataList.append($('<option>').attr({value: $(this).text(), dataValue: $(this).attr('value')}));
		})
	});
	
	// Make same selection in original <select> on change
	dataInput.on('input', function() {
		console.log(dataInput.val());
		nodeJ.val(dataList.find('[value="' + dataInput.val() + '"]').first().attr('dataValue'));
		node.dispatchEvent(new Event('change', {bubbles: true}));
	});
	
	nodeJ.after(dataInput)
	     .after(dataList);
	// Tag the original list so we don't replace more than once
	nodeJ.addClass('replacedWithInput');
	dataListIdx++;
}

/**
 * Script start function
 */
function main() {
	var appName = $('meta[name="application-name"]').attr('content');

	// Limit replacement only to JIRA
	// Comment this out to apply to all pages
	// TODO: Make this configurable in UI
	if (appName != 'JIRA') {
		return;
	}
	
	// Listen for changes to the DOM and apply replacement when <select> nodes are added
	var config = {attributes: false, childList: true, characterData: false, subtree: true};
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type != "childList") {
				return;
			}
			
			if (mutation.addedNodes.length <= 0) {
				return;
			}
			
			mutation.addedNodes.forEach(function(node) {
				$(node).find('select').each(function() {
					// Only do replacement for pop-up dialogs in JIRA
					if ($(this).parents('.jira-dialog').length <= 0) {
						return;
					}
					
					replaceSelect(this);
				});
			});
		});
	});
	observer.observe(document.body, config);
};

main();