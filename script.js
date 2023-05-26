const page = document.querySelector('.document')
const btn = document.getElementById('switch');
btn.addEventListener("click", light);

function light(){
    page.classList.toggle('light');
}


window.sr = ScrollReveal({ reset: true });
sr.reveal('.box', {
distance: '7rem',
  origin: 'left',
  duration: 1000
  });
  
  sr.reveal('.footer',{
distance: '7rem',
  origin: 'left',
  duration: 1000,
  delay: 100
  })

    