var dataListIdx = 0;

/**
 * Replace the given <select> element with <input> <datalist> combo
 */
function replaceSelect(node) {
	var dataListId = 'dataList' + dataListIdx;
	
	// Copy over the options from <select>
	var dataList = $('<datalist>').attr({id: dataListId});
	$(node).children('option').each(function() {
		dataList.append($('<option>').text($(this).text())
									 .attr({value: $(this).attr('value')}));
	})
	
	var dataInput = $('<input>').attr({list: dataListId});
	// Make same selection in original <select> on change
	dataInput.change(function() {
		$(node).val(dataInput.val());
	});
	
	$(node).after(dataInput)
		   .after(dataList);
	
	$(node).hide();
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
	
	// Replace all <select> elements with <input> <datalist> combo
	$('select').each(function() {
		replaceSelect(this);
	});
};

main();