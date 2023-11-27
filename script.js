function toggleAnswer(answerId, iconId) {
    var answer = document.getElementById(answerId);
    var icon = document.getElementById(iconId);

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.classList.remove('open');
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.add('open');
    }
  }

  function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}
