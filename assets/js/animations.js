let t = document.getElementById("navi-toggle");

t.addEventListener('change', () => {
    if (t.checked) {
        let q = document.getElementById("page-wrapper");
        q.classList.add("hide");
        let r = document.getElementById("social-media-container");
        r.classList.add("show-social-media")
        let s = document.getElementById("logo-container");
        s.classList.add("show-logo")
    } else {
        let q = document.getElementById("page-wrapper");
        q.classList.remove("hide");
        let r = document.getElementById("social-media-container");
        r.classList.remove("show-social-media")
        let s = document.getElementById("logo-container");
        s.classList.remove("show-logo")
    }
})