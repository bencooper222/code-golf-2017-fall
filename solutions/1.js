let fs = require('fs');
fs.readFile('../inputs/example1.json','utf8',function(err,data) {
let r = JSON.parse(data);
fs.writeFile('../answers/1.txt',test(r),function(err){});});
function test(r) {
let b = r['bans'];
let d = r['devices'];
let q = [];
for(let i=0;i<b.length;i++){
for(let j=0;j<d.length;j++){
if(d[j][b[i]["key"]]==b[i]["value"]) q.push(d[j]);
}}return new Set(q).size;}
