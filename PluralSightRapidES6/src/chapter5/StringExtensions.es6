var title = 'stuff';
console.log(title.startsWith('stu'));
console.log(title.endsWith('ff'));
console.log(title.includes('tuf'));

//called astroplane values
//deals with emojis and mathematical symbols
var title = "Surfer's \u{1f3c4} Blog"; //shows unicode surfer (run in terminal)
console.log(title);

var surfer = "\u{1f3c4}";
console.log(surfer.length);//2 - JS chops it down to it's 2 symbols

var surfer = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(surfer);
console.log(Array.from(surfer).length);//3 - 3 symbols

var title = "Mazatla\u0301n";
console.log(title + ' ' + title.length); //9 -incorrect
console.log(title + ' ' + title.normalize().length); //8 -ES6 fixes
console.log(title.normalize().codePointAt(7).toString(16)); //base 16
console.log(String.fromCodePoint(0x1f3c4)); //surfer

var title = 'Surfer';
output = String.raw`${title} \u{1f3c4}\n`;
console.log(output);

var surfer = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(surfer.repeat(10));