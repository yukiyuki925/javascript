(() => {
  const $number = document.querySelector(".number");
  const $button = document.querySelector("#button");

  $button.addEventListener("click", () => {
    $number.textContent = parseInt($number.textContent) + 1;
    const count = parseInt($number.textContent);
    // カウントアップできるのは１０回まで
    if (count > 9) {
      window.alert("end");
    }
  });
})();
