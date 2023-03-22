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

//display fixed header after scroll x[px] height
window.addEventListener('scroll', function () {
 
  
  const height = document.querySelector(".mci-person .container").clientHeight;
  console.log(`height: ${height}`);
   
  var header = document.querySelector(".navbar");
        header.classList.toggle("animation", window.scrollY > height);
  header.classList.toggle("fixed-top", window.scrollY > height);
  document.querySelector("body").classList.toggle("pt-5", window.scrollY > height);
        
    }
)

//hide menu on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-105px";
    }
    prevScrollpos = currentScrollPos;
}


// change theme style




  function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
  }

  function getCookie(key) {
    var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    return keyValue ? keyValue[2] : null;
  }

  function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, "-1");
  }

function toggleTheme() {
  var theme = document.getElementsByTagName("link")[1];
  const indicator = document.querySelector(".indicator");
  indicator.classList.toggle("change");
  if (theme.getAttribute("href") == "/css/dark.css") {
    theme.setAttribute("href", "/css/light.css");
       setCookie("dark", "1", "-1");
       setCookie("light", "1", "7");
  } else {
    theme.setAttribute("href", "/css/dark.css");

     setCookie("light", "1", "-1");
     setCookie("dark", "0", "7");
  }
}
function toggleThemeNoCookies() {
  var theme = document.getElementsByTagName("link")[1];
   if (theme.getAttribute("href") == "/css/dark.css") {
    theme.setAttribute("href", "/css/light.css");
   
  } else {
    theme.setAttribute("href", "/css/dark.css");
    
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var darkMode = getCookie("dark");
  var lightMode = getCookie("light");
  if (darkMode === null && lightMode === null) {
    console.log("darkmode", darkMode);
    console.log("lightmode", lightMode);
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 24;

    if (isDayTime) {
      toggleThemeNoCookies();
    }
  } else {
    alert;
  }
});
