var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
var url = require('url');


router.get('/', function(req, res, next) {
    var store = {
        items: ["No Items Retrieved"],
        Name: "Store Name Not Retrieved",
        Address: "Store Address Noy Retrieved",
        Zip: "Store Zip Not Reteived",
        Sun: "N/A",
        Mon: "N/A",
        Tue: "N/A",
        Wed: "N/A",
        Thu: "N/A",
        Fri: "N/A",
        Sat: "N/A"
    }; // end of store object creation

    if (req.query.id != null) {

        pullStoreInfo(req.query.id);

        function storeInfo(SUN_O, SUN_C, MON_O, MON_C, TUE_O, TUE_C, WED_O, WED_C, THU_O, THU_C, FRI_O, FRI_C, SAT_O, SAT_C, addr, zip, name) {
            store.Name = name;
            store.Sun = "Sunday: " + SUN_O + " - " + SUN_C;
            store.Mon = "Monday: " + MON_O + " - " + MON_C;
            store.Tue = "Tuesday: " + TUE_O + " - " + TUE_C;
            store.Wed = "Wednesday: " + WED_O + " - " + WED_C;
            store.Thu = "Thursday: " + THU_O + " - " + THU_C;
            store.Fri = "Friday: " + FRI_O + " - " + FRI_C;
            store.Sat = "Saturday: " + SAT_O + " - " + SAT_C;
            store.Address = addr;
            store.Zip = zip;
        }


    } //end of query if-statement

    function storeItems(I, i) {
        store.items[i] = I;
    }

    function pullStoreInfo(query) {
        var i = 0;
        var sid = query;
        let aidb = new sqlite3.Database('./public/database/aislehunter.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Database Connection Successfully Established');
        }); //Open Database Connection

        aidb.serialize(() => {
            aidb.each("SELECT ITEM.NAME AS INAME FROM ITEM, AISLE, POSITION, STORE WHERE POSITION.STOREID = STORE.ID AND AISLE.STOREID = STORE.ID AND POSITION.STOREID = AISLE.STOREID AND POSITION.ITEM = ITEM.NAME AND AISLE.NUMBER = POSITION.AISLE_NUMBER AND STORE.ID = '" + sid + "';", (err, row) => {
                if (err) {
                    console.error(err.message);
                }
                storeItems(row.INAME, i);
                i++;
            }); // end of database.each

            aidb.each("SELECT SUN_O as SUN_O, SUN_C AS SUN_C, MON_O As MON_O, MON_C AS MON_C, TUE_O AS TUE_O, TUE_C AS TUE_C, WED_O AS WED_O, WED_C AS WED_C, THU_O as THU_O, THU_C as THU_C, FRI_O AS FRI_O, FRI_C AS FRI_C, SAT_O AS SAT_O, SAT_C AS SAT_C, Address as addr, ZIP as zip, NAME as name FROM STORE WHERE STORE.ID = '" + sid + "';", (err, row) => {
                if (err) {
                    console.error(err.message);
                }
                storeInfo(row.SUN_O, row.SUN_C, row.MON_O, row.MON_C, row.TUE_O, row.TUE_C, row.WED_O, row.WED_C, row.THU_O, row.THU_C, row.FRI_O, row.FRI_C, row.SAT_O, row.SAT_C, row.addr, row.zip, row.name);
            }); //end of database.each
        }); //end of database.serialize
        aidb.close((err) => {
            if (err) {
                return console.error(err.message);
                render();
            }
            console.log('Close The Database Connection');
            render();
        }); //end of database.close
    } //end of pullinfo function

    function render() {
        res.render('store', {
            title: 'AH - ' + store.Name,
            store: store.Name,
            items: store.items,
            Sun: store.Sun,
            Mon: store.Mon,
            Tue: store.Tue,
            Wed: store.Wed,
            Thu: store.Thu,
            Fri: store.Fri,
            Sat: store.Sat,
            add: store.Address,
            zip: store.Zip
        }); //end of res.render
    }

}); // end of router.get

module.exports = router;