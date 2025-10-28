/* Responsive menu toggles: header appears on every page with a separate toggle id.
   Script finds whichever toggle and nav exist on the page and wires them up. */

function wireMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId) || document.getElementById(navId?.replace('-',''));
  if (!toggle) return;
  // find nearest .main-nav element on the page (we used several ids)
  const mainNav = document.querySelector(`#${navId}`) || document.querySelector('.main-nav');
  const navUl = mainNav ? mainNav.querySelector('ul') : null;
  toggle.addEventListener('click', () => {
    if (navUl) navUl.classList.toggle('show');
  });
}
// call for the possible toggles used in each page header
wireMenu('menu-toggle', 'main-nav');
wireMenu('menu-toggle-2', 'main-nav-2');
wireMenu('menu-toggle-3', 'main-nav-3');
wireMenu('menu-toggle-4', 'main-nav-4');

// Lightbox for gallery items
function openLightbox(btn){
  const img = btn.querySelector('img');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (!lb || !lbImg || !img) return;
  lbImg.src = img.src;
  lb.style.display = 'flex';
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  if (lb) lb.style.display = 'none';
}
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// small script to mark current nav link active based on filename
(function markActive(){
  const path = location.pathname.split("/").pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a=>{
    if (a.getAttribute('href') === path) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
})();