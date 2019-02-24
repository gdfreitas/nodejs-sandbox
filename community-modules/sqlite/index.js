const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/loot.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the loot database.');
});

db.serialize(() => {
    db.each(`SELECT * FROM Items `, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + "\t" + row.name);
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});