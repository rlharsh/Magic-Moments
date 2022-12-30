let t = document.getElementById("navi-toggle");
let l = document.getElementById("page-wrapper");

let minimized = false;

t.addEventListener('change', () => {
    if (t.checked) {
        let minimized = true;
        let q = document.getElementById("page-wrapper");
        q.classList.add("hide");
        let r = document.getElementById("social-media-container");
        r.classList.add("show-social-media")
    } else {
        let minimized = false;
        let q = document.getElementById("page-wrapper");
        q.classList.remove("hide");
        let r = document.getElementById("social-media-container");
        r.classList.remove("show-social-media")
    }
})

t.addEventListener('click', () => {
    console.log('min')
    if (minimized) {
        let minimized = false;
        let q = document.getElementById("page-wrapper");
        q.classList.remove("hide");
        let r = document.getElementById("social-media-container");
        r.classList.remove("show-social-media")
    }
})