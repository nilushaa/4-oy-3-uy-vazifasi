// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
// let a = -24
// if (a > 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
// let a = 12
// if (a % 2 != 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
//  let a = 22
//  let b = 3
//  if( a > 2 && b <= 3){
//     console.log(true)
//  }else{
//     console.log(false);

//  }

// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
// let a = 12;
// let b = 14;
// let c = 15;
// if (a <= b && b <= c) {
//     console.log(true)
// }else{
//     console.log(false);

// }
// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
// let a = 22
// let b = 11
// if ( a % 2 == 0 && b % 2 == 0 ){
//     console.log("bular juft son", true);
// }else{
//     console.log("bular toq son", false);

// }

// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
// let a = -22;
// let b = -33;
// let c = -8;
// if (a > 0 || b > 0 || c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
// let a = 143;
// let birinchiSon = (a - (a % 100)) / 100;
// let ikkinchiSon = ((a - (a % 10)) / 10) % 10;
// let uchinchiSon = a % 10;
// if (
//   birinchiSon != ikkinchiSon &&
//   ikkinchiSon != uchinchiSon &&
//   uchinchiSon != birinchiSon
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
// let a = 44;
// let b = 55;
// let c = 66;
// if (a == b || b == c || c == a) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// let a = 33
// if ( a % 2 ==0){
//     console.log(true)
// }else{
//     console.log(false);

// }
// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:
// let a = 48;
// let b = 38;
// if (a >= 0 || b < -2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
// let a = 33;
// let b = 23;
// let c = 43;
// if (a > b && b < c) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = 33;
// let b = 53;
// if (a % 2 != 0 && b % 2 != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// let a = 7;
// let b = 10;
// if (a % 2 != 0 || b % 2 != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
// let a = 24;
// let b = 33;
// if (a % 2 == 0 && b % 2 == 0) {
//   console.log("ikkala son ham toq emas");
// } else if (a % 2 != 0 && b % 2 != 0) {
//   console.log("ikkala son ham toq son");
// } else {
//   console.log("faqat bita son toq son");
// }

// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// let a = 22;
// let b = 44;
// let c = 18;
// if (a > 0 && b > 0 && c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
// let a = 12;
// let b = -8;
// let c = 22;
// let manfiy = 0;
// let musbat = 0;
// if (a > 0) {
//   manfiy++;
// } else {
//   musbat++;
// }
// if (b > 0) {
//   manfiy++;
// } else {
//   musbat++;
// }
// if (c > 0) {
//   manfiy++;
// } else {
//   musbat++;
// }
// if (musbat == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// let a = 88;
// let b = 44;
// let c = -66;
// let manfiy = 0;
// let musbat = 0;
// if (a < 0) {
//   manfiy++;
// } else {
//   musbat++;
// }
// if (b < 0) {
//   manfiy++;
// } else {
//   musbat++;
// }
// if (c < 0) {
//   manfiy++;
// } else {
//   musbat++;
// }
// if (musbat == 2) {
//   console.log(true);
// } else {
//   console.log(false);
// }



// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
// let a = 22;
// if (a > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
// let a = 444;
// if (a > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
// let a = 66;
// let b = 44;
// let c = -66;
// if (a + b == 0 || b + c == 0 || c + a == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let a = 456
// let birinchiSon = (a - (a % 100)) / 100;
// let ikkinchiSon = ((a - (a % 10)) / 10) % 10;
// let uchinchiSon = a % 10;
// if (
//   birinchiSon > ikkinchiSon &&
//   ikkinchiSon > uchinchiSon 
  
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let son = 678;
 
 // let birinchison = (son - (son % 100)) / 100;
 // let ikkinchison = ((son - (son % 10)) / 10) % 10;
 // let uchinchison = son % 10;
 
 // if (birinchison + 1 == ikkinchison && ikkinchison + 1 == uchinchison) {
 //   console.log(true);
 // } else if (uchinchison - 1 == ikkinchison && ikkinchison - 1 == birinchison) {
 //   console.log(true);
 // } else {
 //   console.log(false);
 // }


// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".

 // let son = 678;
 
 // let birinchison = (son - (son % 100)) / 100;
 // let ikkinchison = ((son - (son % 10)) / 10) % 10;
 // let uchinchison = son % 10;
 
 // if (birinchison == uchinchison) {
 //   console.log(true);
 // } else {
 //   console.log(false);
 // }

