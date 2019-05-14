module.exports = {
    salt: function(input, check) {
        const bcrypt = require('bcrypt');
        var saltRounds = 10; //Edit Me to change Salt Rounds !!! I WILL MAKE OLD ENTRIES IN DB INVALID
        if (!input) { console.log("Error: No Text was Passed for Salting"); }
        if (!check) {
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(input, salt, function(err, hash) {

                    console.log("Orig: " + input + " | Salt: " + hash);
                    return hash;
                });
            });
        }
        bcrypt.compare(input, check, function(err, res) {
            return true;
        });
    }
}