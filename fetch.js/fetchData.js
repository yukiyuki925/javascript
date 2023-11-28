let shopName; //選択した店名
let shopList = document.getElementById("shopList");
shopList.addEventListener("change", (e) => {
  // イベントが発生すると、eventオブジェクトが関数に渡される
  shopName = event.target.value;
  let shopForm = document.getElementById("shopForm");
  if (shopName != "" && shopForm) {
    shopForm.remove();
    getJson(shopName);
  } else if (shopName == "" && shopForm) {
    shopForm.remove();
  } else if (shopName != "" && !shopForm) {
    getJson(shopName);
  }
});
function getJson(shopName) {
  const url = "shop.json"; //JSONデータ
  let shopInfo; //店情報
  let shopArea = document.getElementById("shopArea");
  let shopHtml = `
      <form action="List.html" id="shopForm">
        <table id="shopTable">
          <tr>
            <th>商品ID</th>
            <th>商品名</th>
            <th>値段（円）</th>
            <th>注文数</th>
            <th>金額</th>
      `;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      shopInfo = data[shopName]; //店名から店情報を取得
      shopInfo.forEach((row, index) => {
        // console.log("index:" + index);
        // console.log(row["id"] + row["name"] + row["price"]);
        shopHtml += `
            <tr>
              <td>${row["id"]}</td>
              <td>${row["name"]}</td>
              <td>${row["price"]}</td>
              <td class="order"></td>
              <td><div class="red" id="kingaku${index}"></div></td>
            </tr>`;
      });
      shopHtml += `
              </table>
            <div class="red" id="total"></div>
            <button type="submit">送信する</button>
          </form>
          `;
      shopArea.innerHTML = shopHtml; // テーブル再作成
      orderList();
    });
}
