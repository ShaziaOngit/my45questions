function  show_magicians(magicians:string[]){
  return magicians.forEach(name=>console.log(name)
);
}
    
function make_great(magicians:string[]){
    return magicians.map(name=>`The Great${name}`)
}

let magicians_names=["Shoaib","Rabia","Sannan"]

let copy_magicians_names =magicians_names.slice()

let copy_great_magicians= make_great(copy_magicians_names)

console.log("Orignal Array\n");
show_magicians(magician_names)
console.log("Copied Array\n")
show_magician(magician_names);


