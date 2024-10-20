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
        if (item.classList.contains(filterValue) || filterValue === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    }
  });
}

//display fixed header after scroll x[px] height
window.addEventListener("scroll", function () {
  const height = document.querySelector(".cm-person .container").clientHeight;
  console.log(`height: ${height}`);

  var header = document.querySelector(".navbar");
  header.classList.toggle("animation", window.scrollY > height);
  header.classList.toggle("fixed-top", window.scrollY > height);
  document
    .querySelector("body")
    .classList.toggle("pt-5", window.scrollY > height);
});

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
};

// change theme style by cookies

//cookies logic
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

// toogle to change dark/light mode
function toggleTheme() {
  var theme = document.getElementsByTagName("link")[1];
  const indicator = document.querySelector(".indicator");
  indicator.classList.toggle("change");
  if (theme.getAttribute("href") == "/css/light.css") {
    theme.setAttribute("href", "/css/dark.css");
    setCookie("light", "1", "-1");
    setCookie("dark", "0", "7");
  } else {
    theme.setAttribute("href", "/css/light.css");
    setCookie("dark", "1", "-1");
    setCookie("light", "1", "7");
  }
}

// toogle to change dark/light mode auto without set a cookies
function toggleThemeNoCookies() {
  var theme = document.getElementsByTagName("link")[1];
  if (theme.getAttribute("href") == "/css/light.css") {
    theme.setAttribute("href", "/css/dark.css");
  } else {
    theme.setAttribute("href", "/css/light.css");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var theme = document.getElementsByTagName("link")[1];
  var darkMode = getCookie("dark");
  var lightMode = getCookie("light");

  // verify is set a cookies
  if (darkMode === null && lightMode === null) {
    console.log("darkmode", darkMode);
    console.log("lightmode", lightMode);
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    console.log(isDayTime);
    if (isDayTime == false) {
      toggleThemeNoCookies();
    }
  }

  // set link to style depending which cookie is set
  if (darkMode) {
    theme.setAttribute("href", "/css/dark.css");
  }
  if (lightMode) {
    theme.setAttribute("href", "/css/light.css");
  }
});


	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		$(window).on("scroll", function () {
      let scroll = $(window).scrollTop();
      let oTop = $(".skill-progress-bar").offset().top - window.innerHeight;
      if (scroll > oTop) {
        $(".progress").addClass("progressbar-active");
      } else {
        $(".progress").removeClass("progressbar-active");
      }
    });

 $(function () {
   $('a[href^="#"]').click(function () {
     if (
       location.pathname.replace(/^\//, "") ==
         this.pathname.replace(/^\//, "") &&
       location.hostname == this.hostname
     ) {
       var target = $(this.hash);
       target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
       if (target.length) {
         $("html,body").animate(
           {
             scrollTop: target.offset().top,
           },
           1000
         );
         return false;
       }
     }
   });
 });