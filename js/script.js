document.addEventListener("DOMContentLoaded", function() {
    const observador = new IntersectionObserver((entradas, observador) => {
      entradas.forEach(entrada => {
        if (!entrada.isIntersecting) {
          return;
        }
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      });
    }, {
      threshold: 0.1 // Ajusta este valor según necesites. 0.1 indica que el callback se ejecutará cuando al menos el 10% del elemento esté visible.
    });
  
    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach(elemento => {
      observador.observe(elemento);
    });
  });
  