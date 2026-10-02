const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded','false'); navigation.classList.remove('open'); }
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menu.focus();}});
window.matchMedia('(min-width: 761px)').addEventListener('change',closeMenu);
document.querySelector('#year').textContent=new Date().getFullYear();
