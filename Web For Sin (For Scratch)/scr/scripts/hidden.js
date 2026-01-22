window.addEventListener('load', () => {  
  const hidden_elements = document.querySelectorAll(".hidden");

  const initiallyVisible = [];
  hidden_elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      initiallyVisible.push(el);
    }
  });

  initiallyVisible.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 200);
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  hidden_elements.forEach(el => {
    if (!initiallyVisible.includes(el)) {
      observer.observe(el);
    }
  });
});
