let company_nav_links = document.querySelectorAll('#company-nav-container > ul > li> a');

for (let i = 0; i < company_nav_links.length; i++) {
  company_nav_links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    let id = this.getAttribute('href');
    let section_active = document.getElementsByClassName("visible");
    section_active[0].className = section_active[0].className.replace(" visible", " hidden");
    let section_clicked = document.getElementById(id.substring(1));
    section_clicked.className = "content-area visible";
  });
}