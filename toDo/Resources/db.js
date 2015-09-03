/*
	purpose : function to insert data to database
	para : task; string
*/
function insertData(task) {
	
	var db = Ti.Database.open('db_toDoList');
	// console.log(db.execute("INSERT INTO `tbl_task`(`id`,`task`,`status`) VALUES (NULL, '" + task + "', '0' )"));
	var query = db.execute("INSERT INTO `tbl_task`(`id`,`task`,`status`) VALUES (NULL, '" + task + "', '0' )");
	query;
	db.close();

	return true;
}

/*
	purpose : function to select all data 
	para : none
*/
function selectAll() {

	var db = Ti.Database.open('db_toDoList');
	// console.log(db.execute("SELECT * FROM tbl_task"));
	return db.execute("SELECT * FROM tbl_task WHERE `status`='0' ORDER BY id DESC");
	// return db.execute("SELECT * FROM tbl_task ORDER BY id DESC");
	db.close();

}

/*
	purpose : function to set task as done(Update).
	para : id; int/string
*/
function setDoneTask(id) {
	
	var db = Ti.Database.open('db_toDoList');
	//console.log(db.execute("UPDATE `tbl_task` SET `status`=1 WHERE `id`='"+ id +"'"));
	db.execute("UPDATE `tbl_task` SET `status`=1 WHERE `id`='"+ id +"'");
	db.close();
	return true;
	// console.log(st);
}










