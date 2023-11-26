(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  const active_class = "is-active";

  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  //クリックイベント
  const handleClick = (e) => {
    e.preventDefault();

    //クリックされたnavとそのデータを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav, contentをリセット
    let index = 0;
    while (index < $nav.length) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(active_class);
      index++;
    }
    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";

    $nav[targetVal].classList.add(active_class);
  };

  //全nav要素に対して関数適用
  let index = 0;
  while (index < $nav.length) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();
