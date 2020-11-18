/* Burger menu */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('showMenu');

navToggle.addEventListener('click', (e) => {
    e.preventDefault();

    if (navToggle.classList.contains('active')) {

        navToggle.classList.remove('active');
        navMenu.classList.remove('active');


    } else {
        navToggle.classList.add('active');
        navMenu.classList.add('active');
    }
});

/* Scroll to top */
const offset = 100;

const scrollUp = document.getElementById('scrollUp');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


// /* onScroll */
// scrollUp.addEventListener('scroll', () => {
//     if (getTop() > offset) {
//         scrollUp.classList.add('active');
//     } else {
//         scrollUp.classList.remove('active');
//     }
// });


/* Click */
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

