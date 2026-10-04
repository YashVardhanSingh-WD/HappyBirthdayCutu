const openBtn = document.getElementById('openBtn');
const scrapbook = document.getElementById('scrapbook');
const playbtn = document.getElementById('playbtn');
const backgroundMusic = document.getElementById('background-music');
openBtn.addEventListener('click', () => {
  openBtn.disabled = true;
  openBtn.animate([
    {transform:'scale(1) rotate(0deg)', opacity:1},
    {transform:'scale(1.08) rotate(-2deg)', opacity:.95},
    {transform:'scale(.75) translateY(-40px)', opacity:0}
  ], {duration:650,easing:'cubic-bezier(.2,.8,.2,1)'});
  setTimeout(() => {
    document.querySelector('.hero').style.display='none';
    scrapbook.classList.remove('hidden');
    scrapbook.animate([{opacity:0,transform:'translateY(30px)'},{opacity:1,transform:'translateY(0)'}],{duration:700,easing:'ease-out'});
    window.scrollTo({top:0,behavior:'smooth'});
  }, 520);
});

playbtn.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    playbtn.textContent = '▣'; // Change to pause symbol
  } else {
    backgroundMusic.pause();
    playbtn.textContent = '▶'; // Change to play symbol
  }
}); 
