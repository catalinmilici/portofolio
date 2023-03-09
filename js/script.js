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

//Filter category case studies
const filterContainer = document.querySelector(".project-filter"),
  Items = document.querySelectorAll(".project-item");
if (filterContainer) {
    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item")) {
            filterContainer.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
            const filterValue = event.target.getAttribute("data-filter");
            Items.forEach((item) => {
                if (item.classList.contains(filterValue) || filterValue === 'all') {
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        }
    });
}

const progressContainer = document.querySelector('.progress-container');

// initial call
setPercentage();

function setPercentage() {
  const percentage = progressContainer.getAttribute('data-percentage') + '%';
  
  const progressEl = progressContainer.querySelector('.progress');
  const percentageEl = progressContainer.querySelector('.percentage');
  
  progressEl.style.width = percentage;
  percentageEl.innerText = percentage;
  percentageEl.style.left = percentage;
}