
/*
	purpose : function to add row data to table
	para : none
*/
var addRowsToTable = function () {

	var rows = selectAll();
	tableData = [];
	while (rows.isValidRow()) {
		var id = rows.fieldByName('id');
		var task = rows.fieldByName('task');

		var row = Ti.UI.createTableViewRow({
			className : 'row',
			objName : 'row',
			rowID : id,
			touchEnabled : true,
			height : 50
		});

		var rowTextView = Ti.UI.createView({
			backgroundColor : '#008FD5',
			objName : 'textView',
			// rowID : id,
			left : 0,
			width : '80%',
			height : '100%'
		});

		var label = Ti.UI.createLabel({
			// backgroundColor : '#313F48',
			color : 'white',
			objName : 'label',
			text : task,
			touchEnabled : false,
			left : 10,
			width : Ti.UI.FILL,
		});
		rowTextView.add(label);
		row.add(rowTextView);

		var rowImageView = Ti.UI.createView({
			backgroundColor : '#008FD5',
			objName : 'imageView',
			// rowID : i,
			right : 0,
			width : '20%',
			height : '100%'
		});

		var image = Ti.UI.createImageView({
			image : '/images/button_ok.png',
			backgroundSelectedColor : 'red',
		});
		rowImageView.add(image);
		row.add(rowImageView);

		tableData.push(row);
		table.setData(tableData);
		rows.next();
	}

};