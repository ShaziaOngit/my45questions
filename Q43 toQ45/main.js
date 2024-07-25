function show_magician(magicians) {
    return magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great".concat(name); });
}
var magician_names = ["Shoaib", "Rabia", "Sannan"];
var copy_magician_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("Orignal Array\n");
show_magician(magicians_names);
console.log("Copied Array\n");
show_magician(magicians_names);
