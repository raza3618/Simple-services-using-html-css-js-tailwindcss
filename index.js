document.getElementById("hamburger").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  });
  
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
    },
  });
  
  let currentProjectSlide = 0;
  const totalProjectSlides = 8;
  const projectSlideContainer = document.getElementById('slides-container');
  const projectIndicators = document.querySelectorAll('.indicator');
  let autoSlideInterval;
  
  function showProjectSlide(index) {
    if (index >= totalProjectSlides) index = 0;
    if (index < 0) index = totalProjectSlides - 1;
  
    projectSlideContainer.style.transform = `translateX(-${index * 100}%)`;
  
    projectIndicators.forEach(ind => {
      ind.classList.remove('bg-white');
      ind.classList.add('bg-gray-400');
    });
    projectIndicators[index].classList.add('bg-white');
    projectIndicators[index].classList.remove('bg-gray-400');
  
    currentProjectSlide = index;
  }
  
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      showProjectSlide(currentProjectSlide + 1);
    }, 3000);
  }
  
  startAutoSlide();
  
  document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    showProjectSlide(currentProjectSlide - 1);
    startAutoSlide();
  });
  
  document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    showProjectSlide(currentProjectSlide + 1);
    startAutoSlide();
  });
  
  projectIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      showProjectSlide(index);
      startAutoSlide();
    });
  });
  