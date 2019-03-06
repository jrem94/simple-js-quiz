const submitAnswers = () => {
  const total = 5;
  let score = 0;

  const q1 = document.forms["quizForm"]["q1"].value;
  const q2 = document.forms["quizForm"]["q2"].value;
  const q3 = document.forms["quizForm"]["q3"].value;
  const q4 = document.forms["quizForm"]["q4"].value;
  const q5 = document.forms["quizForm"]["q5"].value;

  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You did not choose an answer for question" + i);
      return false;
    }
  }

  const answers = ["a", "d", "a", "b", "a"];

  for (let i = 0; i < total; i++) {
    if (eval("q" + (i + 1)) == answers[i]) {
      score++;
    }
  }

  let results = document.getElementById("results");
  results.innerHTML =
    "<h3>You scored <span>" +
    score +
    "</span> out of <span>" +
    total +
    "</span></h3>";

  return false;
};
