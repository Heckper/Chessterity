const obesrver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const nav = document.querySelectorAll('.nav');
nav.forEach((el) => obesrver.observe(el));