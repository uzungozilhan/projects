let uretilen_sayi = Math.floor(Math.random() * 100) + 1;
console.log(uretilen_sayi);

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
let deneme_sayisi = 0;
girilen_sayilar = []
function sayiGir() {
  
  let girilen_sayi = document.getElementById("number").value;
  deneme_sayisi++;
  if (deneme_sayisi === 0) {
    document.querySelector(
      ".girilen-sayilar"
    ).innerHTML = 'Previous guesses: ';
  }
  document.querySelector(
    ".girilen-sayilar"
  ).innerHTML += girilen_sayi + ' ';
 
  if (uretilen_sayi == girilen_sayi) {
    document.querySelector(
      "#result"
    ).innerHTML = `Congratulations! You found the number ${uretilen_sayi} in ${deneme_sayisi} attempts.`;
    document.querySelector("#remain").innerHTML = "";
    document.querySelector("body").style.backgroundImage = "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(0, 255, 0))";
  } else if (girilen_sayi < 0 || girilen_sayi > 100) {
    document.querySelector("#result").innerHTML =
      "Please enter a value between 1 and 100!";
  } else if (uretilen_sayi < girilen_sayi) {
    if(deneme_sayisi < 10){
      document.querySelector("#result").innerHTML = "Too high! DOWN...";
      document.querySelector("#remain").innerHTML = `Remaining attempt: ${10-deneme_sayisi}`;
    }else{
      document.querySelector("#result").innerHTML = "You lost the game! Try again...";
      document.querySelector("body").style.backgroundImage = "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(255, 0, 0))";
    }
    
  } else if (uretilen_sayi > girilen_sayi) {
    if(deneme_sayisi < 10){
      document.querySelector("#result").innerHTML = "Too low! UP...";
      document.querySelector("#remain").innerHTML = `Remaining attempt: ${10-deneme_sayisi}`;
    }else{
      document.querySelector("#result").innerHTML = "You lost the game! Try again...";
      document.querySelector("#remain").innerHTML = "";
      document.querySelector("body").style.backgroundImage = "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(255, 0, 0))";
    }
    
  }
}

