let typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


window.addEventListener("scroll", function() {
  const scrollBtn = document.querySelector(".top");
  if (window.scrollY > 300) {  // show after scrolling 300px
    scrollBtn.classList.add("active");
  } else {
    scrollBtn.classList.remove("active");
  }
});
