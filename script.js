    const modal = document.getElementById("customModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const cancel = document.getElementById("cancel");
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });

    function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }

    closeBtn.addEventListener("click", closeModal);
    cancelBtn.addEventListener("click", closeModal);
    cancel.addEventListener("click", closeModal);

const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('dots');
    let currentIndex = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    setInterval(() => {
      dots[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      track.style.transform = `translateX(-${(340 + 45) * currentIndex}px)`;
      dots[currentIndex].classList.add('active');
    }, 2000);