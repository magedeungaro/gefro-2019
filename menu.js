window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let screenWidth = parseFloat(window.screen.width),
  logo = document.getElementById("logo"),
  logo_ = window.getComputedStyle(logo, null).height,
  logoParse = parseFloat(logo_);

  if (screenWidth >1023 && document.body.scrollWidth > 1023) {
    document.getElementById('sidenav').classList.remove('open');
    if (document.body.scrollTop > logoParse * 1.5 && screenWidth > 1023 || document.documentElement.scrollTop > logoParse * 1.5 && screenWidth > 1023) {
      document.getElementById("hid").classList.add('show');
    } else {
      document.getElementById("hid").classList.remove('show');
    }
  // }else {
  //   document.getElementById("cont").style.display = 'inline-block';
  }

}

function menu(x) {
  x.classList.toggle("change");
  document.getElementById('sidenav').classList.toggle('open');
}
// 
// if (screenWidth >1023 && document.body.scrollWidth > 1023) {
//   document.getElementById('sidenav').classList.remove('open');
// }
