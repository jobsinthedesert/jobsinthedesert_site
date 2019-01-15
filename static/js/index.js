let company_nav_links = document.querySelectorAll('#company-nav-container > ul > li> a');

for (let i = 0; i < company_nav_links.length; i++) {
  company_nav_links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}