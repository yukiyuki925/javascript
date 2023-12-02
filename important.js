// 分割代入
// const profile = {
//   name: "taro",
//   age: 31,
// };
// const { name, age } = profile;
// const message = `名前は${name}です。${age}歳です`;
// console.log(message);

// デフォルト値
// const profile = {
//   age: 31,
// };
// const { age, name = "taro" } = profile;
// console.log(age);
// console.log(name);

// オブジェクトの省略記法
// const name = "pole";
// const age = 31;
// const profile = {
//   name,
//   age,
// };
// console.log(profile);

// スプレッド構文
// 全く新しい別の配列を作成する
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// const sum = (num1, num2) => console.log(num1 + num2);
// sum(...arr1);
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// map, filterを使った配列の処理
// const nameArr = ["田中", "山田", "宇治"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// map記法
// nameArr.map((name) => {
//   console.log(name);
// });

// 新しい配列として定義;
// const nameArr2 = nameArr.map((name) => {
//   console.log(name);
// });

// 数字と一緒に回す;
// nameArr.map((name, index) => {
//   console.log(`${index + 1}番目は${name}です`);
// });

// filter記法　配列を回しながら特定の条件に合致した値を抽出
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// 三番目の要素だけさんをつける
// const newName = nameArr.map((name) => {
//   if (name === "宇治") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newName);

// 三項演算子
// ある条件? 条件がtrueです : 条件がfalseです;
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const format = typeof num === "number" ? num.toLocaleString() : "number please";
// console.log(format);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over 100" : "inner 100";
// };
// console.log(checkSum(50, 90));

// 論理演算子　&& ||
// truthy,falsyについて
// "ABC" 0 10 undefined null false NaN "" [] {}
// const val = undefined;
// if (val) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("どちらかがtrue");
// }

// if (flag1 && flag2) {
//   console.log("どっちもtrue");
// }

// || は左側がtruthyの時その時点で返却する
// const num = 0;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がfalsyの時その時点で返却する
// const num2 = 10;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
