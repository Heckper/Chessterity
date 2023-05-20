let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let scrollBar = document.querySelector('.scrollbar');
let thumb = document.querySelector('.thumb');


const body = document.body;
const html = document.documentElement;
const height = Math.max(body.getBoundingClientRect().height, html.getBoundingClientRect().height);




window.onscroll = () => {
    let topS = html.scrollTop;
    let percent = (topS * 100) / height;
    console.log(percent);
    
    thumb.style.transform = "translateY(" + percent + "vh)";
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
