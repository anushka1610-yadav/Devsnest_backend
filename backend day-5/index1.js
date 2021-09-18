var fs = require("fs");
fs.mkdirSync('day_2');
fs.writeFileSync("day_2/hel.txt","hiiiii");
fs.readFileSync("day_2/hel.txt","utf-8");

