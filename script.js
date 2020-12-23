window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) 
  {
    document.querySelector(".nav-container").classList.add('bg-change');
    document.querySelectorAll(".link").forEach(item=>{
      item.style.color = "black";
    });
  } 
  else 
  {
    document.querySelector(".nav-container").classList.remove('bg-change');
    document.querySelectorAll(".link").forEach(item=>{
      item.style.color = "";
    });
  }
}

// Open the Modal
function openModal() {
  console.log(window.innerWidth);
  if(window.innerWidth<800) return ;
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}