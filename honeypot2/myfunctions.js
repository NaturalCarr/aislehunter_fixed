function salt(input, check) { //Reterns Salted input or Bool for Salt Check
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
        if (res){return true;}
        return false;
    });
}