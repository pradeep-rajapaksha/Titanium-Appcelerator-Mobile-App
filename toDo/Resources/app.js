Titanium.UI.setBackgroundColor('#000');
Ti.include('db.js');
Ti.include('main.js');

var db = Ti.Database.install('/db/db_toDoList.db', 'db_toDoList');

// create login window
var loginWindow = Titanium.UI.createWindow({
	title : 'Login | ToDo List',
	backgroundColor : '#fff',
	layout : 'vertical',
});

// create login form view
var loginFormView = Ti.UI.createView({
	height : '100%',
	backgroundColor : '#c3c3c3',
	top : 0
});

// create login form lable
var loginFormLabel = Ti.UI.createLabel({
	// backgroundColor : '#313F48',
	color : 'white',
	objName : 'label',
	text : 'Login Here',
	touchEnabled : false,
	left : '5%',
	width : Ti.UI.FILL,
});

// create login form Username text field
var txtUserName = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	title : 'User Name',
	backgroundColor : '#ccc',
	left : '5%',
	width : '100%',
	height : 50
});

// create login form Password text field
var txtPassword = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	title : 'Password',
	passwordMask : true,
	backgroundColor : '#ccc',
	left : '5%',
	width : '100%',
	height : 50
});

// create login form button
var btnLogin = Ti.UI.createButton({
	borderColor : '#fff',
	color : '#336699',
	backgroundColor : '#ccc',
	title : 'Add',
	right : '5%',
	left : '5%',
	// width : '30%',
	height : 50
});

// loginFormView.add(loginFormLabel);
// loginFormView.add(txtUserName);
// loginFormView.add(txtPassword);
loginFormView.add(btnLogin);

loginWindow.add(loginFormView);
loginWindow.open();

btnLogin.addEventListener('click', function(e) {
	
	// loginWindow.close();
	mainWindow.open();
	loginWindow.close();
});

