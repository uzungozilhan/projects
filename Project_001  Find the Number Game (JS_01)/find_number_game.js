// let uretilen_sayi = Math.floor(Math.random() * 100) + 1;
// console.log(uretilen_sayi);

// let girilen_sayi = parseInt(prompt("1 - 100 arasında bir tam sayı giriniz."));

// let girilen_sayi = -1;
// let deneme_sayisi = 0;

// while (uretilen_sayi !== girilen_sayi) {
//   let girilen_sayi = parseInt(prompt("1 - 100 arasında bir tam sayı giriniz."));
//   deneme_sayisi++;
//   if (uretilen_sayi < girilen_sayi) {
//     console.log("Değeri azaltın");
//   } else if (uretilen_sayi > girilen_sayi) {
//     console.log("Değeri artırın");
//   } else if (girilen_sayi < 0 || girilen_sayi > 100) {
//     console.log("Lütfen 1 - 100 arasında bir değer giriniz");
//   } else {
//     console.log(
//       `Tebrikler! ${uretilen_sayi} sayısını ${deneme_sayisi} denemede buldunuz.`
//     );
//     break;
//   }
// }
var uretilen_sayi = Math.floor(Math.random() * 100) + 1;
function sayiGir() {
  var girilen_sayi = document.getElementById("number").value;

  var deneme_sayisi = 0;
  var numbers = "";
  var text;
  if (girilen_sayi < 0 || girilen_sayi > 100) {
    text = "Lütfen 1 - 100 arasında bir değer giriniz";
  } else if (uretilen_sayi > girilen_sayi) {
    text = "Değeri artırın";
  } else if (uretilen_sayi < girilen_sayi) {
    text = "Değeri azaltın";
  } else if (girilen_sayi === uretilen_sayi) {
    text = `Tebrikler! ${uretilen_sayi} sayısını ${deneme_sayisi} denemede buldunuz.`;
  }
  deneme_sayisi++;
  numbers += girilen_sayi
  document.getElementById("demo").innerHTML = text;
}

document.querySelector("button").addEventListener("onclick", sayiGir);
