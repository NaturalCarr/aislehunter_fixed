var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

/* GET home page. */
router.get('/', function(req, res, next) {
	var storeNames = [""]; //This Will Hold The List Of Stores In The Database
	var storeIDs = [];
		var i = 0;
		let aidb = new sqlite3.Database('./public/database/aislehunter.db', (err) => {
			if (err){
				return console.error(err.message);
		}
		console.log('Database Connection Successfully Established');
	}); //Open Database Connection

	aidb.serialize(() => {
		aidb.each("SELECT NAME, ID FROM Store;", (err, row) => {
			if (err) {console.error(err.message);}
			store(row.Name, row.ID);
			i++;
		}); // end of database.each
	}); //end of database.serialize

	function store(n, id){
		storeNames[i] = n;
		storeIDs[i] = id;
	}
	aidb.close((err) => {
		if (err){return console.error(err.message);}
		res.render('index', {
			title: 'Aisle Hunter',
			storeN : storeNames,
			storeI : storeIDs
		});
		console.log('Close The Database Connection');
	}); //end of database.close
}); //end of get

module.exports = router;
