var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
var url = require('url');


router.get('/', function(req, res, next) {
    if (req.query.store != null && req.query.item != null) {

        var aisle_number = "";
        var shelf_number = "";
        var position_in_aisle = "";
        var comment = "";

        let aidb = new sqlite3.Database('./public/database/aislehunter.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Database Connection Successfully Established');
        }); //Open Database Connection
        aidb.serialize(() => {
            aidb.each("SELECT AISLE_NUMBER AS ANUM, SHELF_NUMBER AS SNUM, PIA AS PIA, COMMENT AS COM FROM POSITION, STORE WHERE POSITION.ITEM = '" + req.query.item + "' AND POSITION.STOREID = STORE.ID AND STORE.NAME = '" + req.query.store + "';", (err, row) => {
                if (err) { console.error(err.message); }
                storePosition(row.ANUM, row.SNUM, row.PIA, row.COM);
            }); // end of database.each

            function storePosition(anum, snum, pia, com) {
                aisle_number = anum;
                shelf_number = snum;
                position_in_aisle = pia;
                comment = com;
            }
        }); //end of database.serialize

        aidb.close((err) => {

            var imageurl = 'images/' + req.query.store + '/' + req.query.item;
            imageurl = imageurl.replace(/ /g, "_");
            imageurl = imageurl.toLowerCase();

            if (err) { return console.error(err.message); }
            res.render('map', {
                title: 'AH - ' + req.query.store + ': ' + req.query.item,
                anum: aisle_number,
                snum: shelf_number,
                pia: position_in_aisle,
                com: comment,
                item: req.query.item,
                store: req.query.store,
                imageurl: imageurl
            }); //end of res.render
            console.log('Close The Database Connection');
        }); //end of database.close
    } //end of if

}); // end of router.get

module.exports = router;