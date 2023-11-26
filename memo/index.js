(() => {
  const $text = document.querySelector("#text");
  const $button = document.querySelector("#button");
  const $list = document.querySelector("#list");

  // メモ、編集、削除ボタンを追加
  $button.addEventListener("click", () => {
    const liLast = document.createElement("li");
    const inputValue = $text.value.trim();
    if (inputValue === "") {
      window.alert("empty");
      return;
    }

    // メモを追加
    liLast.textContent = $text.value;
    $list.appendChild(liLast);
    $text.value = "";

    // 編集ボタン追加
    const liEdit = document.createElement("button");
    liEdit.textContent = "編集";
    $list.appendChild(liEdit);

    // 削除ボタン追加
    const liDelete = document.createElement("button");
    liDelete.textContent = "削除";
    $list.appendChild(liDelete);

    //メモを編集
    liEdit.addEventListener("click", () => {
      // 編集ボタンがクリックされたときの処理
      const newText = prompt(
        "新しいテキストを入力してください",
        liLast.textContent
      );
      if (newText !== null) {
        liLast.textContent = newText;
      }
    });

    //メモを削除
    liDelete.addEventListener("click", () => {
      $list.removeChild(liLast);
      $list.removeChild(liEdit);
      $list.removeChild(liDelete);
    });
  });
})();
