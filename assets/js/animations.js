let t = document.getElementById("navi-toggle");

t.addEventListener('change', () => {
    if (t.checked) {
        let q = document.getElementById("page-wrapper");
        q.classList.add("hide");
        let r = document.getElementById("social-media-container");
        r.classList.add("show-social-media")
    } else {
        let q = document.getElementById("page-wrapper");
        q.classList.remove("hide");
        let r = document.getElementById("social-media-container");
        r.classList.remove("show-social-media")
    }
})