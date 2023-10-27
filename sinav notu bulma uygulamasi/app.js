
let vize1 = Number(prompt("Vize 1 notunuzu giriniz:"));

let final = Number(prompt("Final 2 notunuzu giriniz:"));

let ortalama = vize1*0.4 + final*0.6

if(ortalama>60){
    alert("Dersten geçtiniz tebrikler")
}else{
    alert("Dersten kaldınız")
}