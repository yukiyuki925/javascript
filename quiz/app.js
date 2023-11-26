const quiz = [
  {
    question: "ゲーム市場、最も売れたゲームは？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "1の次は？",
    answers: ["1", "2", "3", "4"],
    correct: "2",
  },
  {
    question: "6の次は？",
    answers: ["1", "2", "7", "4"],
    correct: "7",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//問題文と選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("終了");
  }
};

// ボタンをクリックししたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
