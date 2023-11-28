function orderList() {
  let select = [];
  // htmlから要素を取得
  let order = document.getElementsByClassName("order");
  // 数字を繰り返しで表示
  for (let i = 0; i < order.length; i++) {
    let selectHtml = "<select id=select" + i + ">";
    //　注文数を繰り返しで表示
    for (let j = 0; j < 10; j++) {
      selectHtml = selectHtml + "<option>" + j + "</option>";
    }
    order[i].innerHTML = selectHtml + "</select>";
    select[i] = document.getElementById("select" + i);
    select[i].addEventListener("change", calc);
  }
}
function calc() {
  let total = 0; //合計金額
  let elements; //form内の要素
  let orderNumber; //要素の値（注文数）
  let money; //金額を表示する要素
  let price; //一覧表の値段（円）
  let order = document.getElementsByClassName("order");
  let totalElement = document.getElementById("total");
  let shopTable = document.getElementById("shopTable");
  for (let i = 0; i < order.length; i++) {
    elements = document.forms[0].elements[i];
    orderNumber = elements.value;
    price = shopTable.rows[i + 1].cells[2].innerHTML;
    if (orderNumber >= 0) {
      money = document.getElementById("kingaku" + i);
      money.innerHTML = orderNumber * price;
      total += orderNumber * price;
      totalElement.innerHTML = "合計支払金額" + total + "円";
    }
  }
}
