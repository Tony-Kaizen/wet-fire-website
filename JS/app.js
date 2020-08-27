/* Toggle sidebar menu */
const sidebar = document.querySelector('#sidebar');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');

//open sidebar
navBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});
//close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
})
/* Toggle sidebar menu */


/* Parallax */
// const services = document.querySelector('#services');

// window.addEventListener('scroll', () => {
//   let offset = window.pageYOffset;

//   services.style.backgroundPositionY = offset * 0.2 + "px";
// });
/* Parallax */