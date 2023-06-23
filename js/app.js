function ToPagins() {
    window.location.href = "main.html";
  }
  function Tohome() {
    window.location.href = "index.html";
  }
  function Gengar() {
    window.location.href = "gengar.html";
  }

  
  const carousel = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide .carousel-image img');

  let counter = 1;
  const slideWidth = images[0].clientWidth;
  const slidesNumber = images.length;

  carousel.style.transform = `translateX(${-slideWidth * counter}px)`;

  function nextSlide() {
      if (counter >= slidesNumber - 1) return;
      carousel.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
  }

  function prevSlide() {
      if (counter <= 0) return;
      carousel.style.transition = "transform 0.4s ease-in-out";
      counter--;
      carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
  }

  carousel.addEventListener('transitionend', () => {
      if (images[counter].id === 'last-clone') {
          carousel.style.transition = "none";
          counter = slidesNumber - 2;
          carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
      }

      if (images[counter].id === 'first-clone') {
          carousel.style.transition = "none";
          counter = slidesNumber - counter;
          carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
      }
  });

