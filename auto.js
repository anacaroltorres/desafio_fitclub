// Direcionamento de cada item do navbar para sua seção correspondente
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 
      // identifica ID da seção
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // rolagem até a seção identificada
      targetSection.scrollIntoView({
        behavior: 'smooth', // rolagem suave
        block: 'start' 
      });
    });
  });
  

// Scroll Reveal
document.addEventListener('DOMContentLoaded', function () {
  // início do ScrollReveal 
  const sr = ScrollReveal({
    origin: 'bottom',  // início da animação 
    distance: '50px',   // distância 
    duration: 800,      // duração
    delay: 200,         // atraso entre cada animação
    reset: true         // reset da animação quando o elemento sai de vista
  });

  // animação aos cards da segunda seção (Explore Our Program)
  sr.reveal('.card.reveal', {
    interval: 200,  // intervalo de animação entre os cards

    
  });
});

  