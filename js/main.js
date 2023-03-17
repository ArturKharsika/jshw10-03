let doc = document;
let btn = doc.querySelector('.menu-btn');
let sidebar = doc.querySelector('.sibebar');

btn.onclick = function() {
    this.classList.toggle('active');
}