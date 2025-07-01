<script>
  const images = [
    {
      src: "00.png",
      title: "Title 1",
      description: "Cultivated building materials and Infrastructures of self-sufficiency."
    },
    {
      src: "01.png",
      title: "Title 2",
      description: "Another architecture concept description here."
    },
    {
      src: "02.png",
      title: "Title 3",
      description: "Further description of this work or project."
    }
    // Add more images as needed
  ];

  let current = 0;

  const imgEl = document.getElementById("slider-image");
  const titleEl = document.getElementById("slider-title");
  const descEl = document.getElementById("slider-description");
  const currentEl = document.getElementById("slider-current");
  const totalEl = document.getElementById("slider-total");

  totalEl.textContent = String(images.length).padStart(2, '0');

  function updateSlider(index) {
    const image = images[index];
    imgEl.src = image.src;
    titleEl.textContent = image.title;
    descEl.textContent = image.description;
    currentEl.textContent = String(index + 1).padStart(2, '0');
  }

  document.querySelector(".arrow.left").addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    updateSlider(current);
  });

  document.querySelector(".arrow.right").addEventListener("click", () => {
    current = (current + 1) % images.length;
    updateSlider(current);
  });

  updateSlider(current);
</script>