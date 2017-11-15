const fs = require('fs');


fs.readFile('../inputs/example1.json', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    let r = JSON.parse(data);
    console.log(invalids(r));
});

function invalids(r) {
    let b = r['bans'];
    let d = r['devices'];
    let deleted = [];
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < d.length; j++) {
            if (d[j][b[i]["key"]] === b[i]["value"]) deleted.push(d[j]);
        }
    }
    return new Set(deleted).size;
}
