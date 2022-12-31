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


document.addEventListener("DOMContentLoaded", function(event) {


  var dot = [];
  for(var i = 0 ; i < 20; i++ ){
    dot.push(new freshDot());
  }
});


function freshDot() {
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    this.obj.style.top = (200 * Math.random()) + 'px';
    this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
    this.size = Math.floor(Math.random() * 17);
    this.obj.style.height =  this.size + 'px';
    this.obj.style.width = this.size + 'px';
    
    document.getElementById("header-container").appendChild(this.obj);
}
