function typingEffect() {
  let n = words[i].split("");
  var t = function () {
    if (n.length > 0) document.getElementById("word").innerHTML += n.shift();
    else return deletingEffect(), !1;
    timer = setTimeout(t, 300);
  };
  t();
}
function deletingEffect() {
  let n = words[i].split("");
  var t = function () {
    if (n.length > 0)
      n.pop(), (document.getElementById("word").innerHTML = n.join(""));
    else return words.length > i + 1 ? i++ : (i = 0), typingEffect(), !1;
    timer = setTimeout(t, 200);
  };
  t();
}
const words = ["Awesome Design", "Sematic HTML", "Landing Pages"];
let i = 0,
  timer;
typingEffect();
