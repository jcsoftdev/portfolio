const $dropdown = document.querySelector('.dropdown');
const $navigation_links = document.querySelector('.navigation__links')
const $navigation = document.querySelector('.navigation')

$dropdown.addEventListener("click", e => {
  // $dropdown.setAttribute("data-drop", "1")
  const open = $dropdown.getAttribute("data-drop");
  if ((open)==="0") {
    $dropdown.style.transform = "rotate(180deg)"
    
    console.log(typeof(open));
    $navigation_links.classList.add("show");
    $dropdown.setAttribute("data-drop", "1");
  }else{
    $dropdown.style.transform = "rotate(0deg)";
    $dropdown.setAttribute("data-drop", "0");
    $navigation_links.classList.remove("show")
    console.log(open);
    console.log(e);
  }
});
