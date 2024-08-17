// this was written using this article from w3schools https://www.w3schools.com/howto/howto_js_scroll_to_top.asp just to see if i could get it to work
let mybutton = document.getElementById("top");
window.onscroll = function () {
  scrollfunction();
};
function scrollfunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topfunction() {
  document.documentElement.scrollTop = 0;
}
