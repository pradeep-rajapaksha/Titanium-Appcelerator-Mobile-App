
// create main window
var mainWindow = Titanium.UI.createWindow({
	title : 'My ToDo List',
	backgroundColor : '#fff',
	layout : 'vertical',
});

// create view for table
var tbl_view = Ti.UI.createView({
	height : '80%',
	backgroundColor : '#c3c3c3',
	top : 0
});

var tableData = [];
// table data array
var table = Ti.UI.createTableView({// create table
	objName : 'table'
});

addRowsToTable();
// get all todo data to table

var frm_view = Ti.UI.createView({
	height : '20%',
	backgroundColor : 'white',
});

var txtf1 = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	backgroundColor : '#ccc',
	left : '5%',
	width : '55%',
	height : 50
});

var btn1 = Ti.UI.createButton({
	borderColor : '#fff',
	color : '#336699',
	backgroundColor : '#ccc',
	title : 'Add',
	right : '5%',
	width : '30%',
	height : 50
});

frm_view.add(txtf1);
frm_view.add(btn1);

tbl_view.add(table);

mainWindow.add(tbl_view);
mainWindow.add(frm_view);
// mainWindow.open();

// capture table row click event
table.addEventListener('click', function(ev) {

	// console.log(ev.row.rowID);
	var dialog = Ti.UI.createAlertDialog({
		confirm : 1,
		buttonNames : ['Cancel', 'Confirm'],
		message : "You've done this?",
		title : 'Done'
	});
	dialog.addEventListener('click', function(e) {

		if (e.index === e.source.confirm) {

			setDoneTask(ev.row.rowID);
			alert('Task succssfuly removed!');
			addRowsToTable();
		}

	});
	dialog.show();

});

// capture add button click event for submit data
btn1.addEventListener('click', function(e) {
	// alert(txtf1.value);
	if (txtf1.value != '') {// check text box value is NULL

		var dialog = Ti.UI.createAlertDialog({

			confirm : 1,
			buttonNames : ['Cancel', 'Confirm'],
			message : 'Would you like to add this item?',
			title : 'Delete'
		});
		dialog.addEventListener('click', function(e) {

			if (e.index === e.source.confirm) {// check if confirmation

				if (insertData(txtf1.value)) {// check if record inserted

					addRowsToTable();
					// load table row data to table
					alert('Succssfuly added!');
				} else {

					alert('Error!');
				};
				txtf1.value = '';
			}

		});
		dialog.show();

	} else {

		alert('Please enter the what you gonna do.!');
	};

});

/*
 purpose : function to add row data to table
 para : none
 */
function addRowsToTable() {

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

}
