// //1-masala
// function month(arg) {
//   let a = arg;
//   switch (a) {
//     case 1:
//       console.log("yanvar");
//       break;
//     case 2:
//       console.log("fevral");
//       break;
//     case 3:
//       console.log("mart");
//       break;
//     case 4:
//       console.log("aprel");
//       break;
//     case 5:
//       console.log("may");
//       break;
//     case 6:
//       console.log("iyun");
//       break;
//     case 7:
//       console.log("iyul");
//       break;
//     case 8:
//       console.log("avgust");
//       break;
//     case 9:
//       console.log("sentyabr");
//       break;
//     case 10:
//       console.log("oktyabr");
//       break;
//     case 11:
//       console.log("noyabr");
//       break;
//     case 12:
//       console.log("dekabr");
//       break;
//     default:
//         console.log('qayta urinib koring;');
//       break;
//   }
//   return a ;
// }
// month(5);
// 2-masala
// function balnichiqar() {
//   let a = +prompt("son kiriting");
//   switch (true) {
//     case a > 90 && a <= 100:
//       alert("A");
//       break;
//     case a > 80 && a <= 90:
//       alert("B");
//       break;
//     case a > 70 && a <= 80:
//       alert("C");
//       break;
//     case a > 60 && a <= 70:
//       alert("D");
//       break;
//     case a > 0 && a <= 60:
//       alert("F");
//       break;
//     default:
//       alert("qayta urinib koring;");
//       break;
//   }
// }
// balnichiqar();
// 3-masala
// function vaqtnikiriting() {
//   let t = +prompt("vaqtni kiriting 1 dan 24 gacha;");
//   switch (true) {
//     case t > 5 && t <= 12 :
//       alert("xayrli tong");
//       break;
//       case t > 12 && t <= 17 :
//         alert("xayrli kun");
//         break;
//         case t > 17 && t <= 21 :
//       alert("xayrli kech");
//       break;
//       case t > 21 && t <= 24 || 0 < t && t <= 5 :
//       alert("xayrli tun");
//       break;
      
//     default:
//       break;
//   }
// }
// vaqtnikiriting();
// 4-masala










// 5-masala // 0 dan n gacha sonlarni juftlarini ekranga chiqarish
function sonkirit(params) {
  let n = +prompt("n ni kiriting;");
  let i = 1
  while ( i <= n ) {
    if(i % 2 == 0 ){
    console.log(i);
    }
    i++
  }
}
sonkirit();