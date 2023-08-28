window.onload = function () {
    document.getElementById("MenuDéroulant").addEventListener("change", function () {
      var selectedValue = this.value;
      var boxes = document.querySelectorAll(".box");
      for (var i = 0; i < boxes.length; i++) {
        if (selectedValue === "Niveaux") {
          boxes[i].style.display = "inline-block";
        } else if (boxes[i].id === selectedValue) {
          boxes[i].style.display = "inline-block";
        } else {
          boxes[i].style.display = "none";
        }
      }
    });
  };
  
  var menu = document.getElementById("MenuHorizontal");
  var links = menu.getElementsByTagName("a");
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function () {
      this.parentElement.style.transform = "scale(1.1)";
    });
    
    links[i].addEventListener("mouseout", function () {
      this.parentElement.style.transform = "scale(1)";
    });
  };