const soruListesi = [
  new Soru(
    "1-Hangisi Javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" },
    "d"
  ),
  new Soru(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "css", b: "html", c: "javascript", d: "sql" },
    "d"
  ),
  new Soru(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "node.js", b: "Typescript", c: "angular", d: "react" },
    "a"
  ),
  new Soru(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    { a: "react", b: "angular", c: "vuejs", d: "asp.net" },
    "d"
  ),
];

const quiz = new Quiz(soruListesi);
const ui = new UI();

ui.btnNext.addEventListener("click", function () {
  ui.btnNext.classList.remove("show");
  if (quiz.sorular.length > quiz.soruIndex) {
    startTimer(9);
    startTimerLine();
    ui.timeText.textContent = "Kalan Süre: ";
    ui.timeSecond.textContent = 10;
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  } else {
    console.log("Quiz bitti.");
    ui.scoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length);
    ui.quizBox.classList.remove("active");
    ui.scoreBox.classList.add("active");
  }
});

function optionSelected(event) {
  clearInterval(counter);
  clearInterval(counterLine);
  ui.btnNext.classList.add("show");
  let selectedElement = event.target;
  if (selectedElement.nodeName == "SPAN") {
    selectedElement = selectedElement.parentElement;
  }

  const cevap = selectedElement.textContent[0];
  const soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevapSayisi += 1;
    selectedElement.classList.add("correct");
    selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    selectedElement.classList.add("incorrect");
    selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  quiz.soruIndex += 1;

  ui.disableAllOptions();
}

ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});

ui.btnReplay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.btnStart.click();
  ui.scoreBox.classList.remove("active");
});

ui.btnStart.addEventListener("click", function () {
  startTimer(9);
  startTimerLine();
  ui.quizBox.classList.add("active");
  ui.buttonBox.classList.remove("active");
  ui.soruGoster(quiz.soruGetir());
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
});
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.timeSecond.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      ui.timeText.textContent = "Süre Bitti!";
      ui.btnNext.classList.add("show");
      ui.disableAllOptions();
      quiz.soruIndex += 1;
    }
  }
}
let counterLine;
function startTimerLine() {
  let lineWidth = 0;
  counterLine = setInterval(timer, 18);
  
  function timer() {
    lineWidth += 1;
    ui.timeLine.style.width = lineWidth + "px";
    if (lineWidth > 549) {
      clearInterval(counterLine);
    }
  }
}