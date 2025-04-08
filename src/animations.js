window.onbeforeunload = function (e) {
    leftoutelement = document.getElementsByClassName("out");
    leftoutelement.forEach(function (item, index) {
        item.style.animation = "slide-out-blurred-left 0.5s forwards";
      });
}