console.log("for")
for (let i = 1; i <=5; i++) {
   console.log(i);
}

console.log("while")
let a = 5;
while (a > 0){
    console.log(a);
    a--;
}

console.log("do while")
let b = 7;
do {
    console.log(b);
    b-=2;
}
while (b >0);


let belanja = parseInt(prompt("masukan total belanja"));

if(belanja > 0 && belanja < 10){
document.writeln("tidak mendapat diskon");
}

if(belanja >= 10 && belanja <= 15){
document.writeln("mendapatkan diskon 10%");
}

if(belanja >=15 && belanja <= 20){
document.writeln("mendapatkan diskon 10%"); 
}
