  
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", "myid" + i);  
    document.getElementById("main").appendChild(div);
    let par = document.createElement("p");
    div.appendChild(par);
    if (i < 1 || i > 100) {
      div.style = "display: none";
    }
    else {
        if (i % 3 == 0 && i % 5 == 0) {
        div.innerText = "FizzBuzz";
        main.appendChild(div);
        div.setAttribute("class", "fB");
        }
        else if (i % 3 == 0 && i % 5 != 0){
        div.innerText = "Fizz";
        main.appendChild(div);
        div.setAttribute("class", "fizz");
        }
        else if (i % 3 != 0 && i % 5 == 0){
        div.innerText = "Buzz";
        main.appendChild(div);
        div.setAttribute("class", "buzz");
        }
        else {
        div.innerText = i;
        main.appendChild(div);
        div.setAttribute("class", "number");
        }
    }
}

$(document).ready(function(){
    $("#onlyFizz").click(function(){
      $(".buzz").toggle();
    });
  });
$(document).ready(function(){
    $("#onlyFizz").click(function(){
      $(".fB").toggle();
    });
  });
$(document).ready(function(){
    $("#onlyFizz").click(function(){
      $(".number").toggle();
    });
  });

$(document).ready(function(){
    $("#onlyBuzz").click(function(){
      $(".fizz").toggle();
    });
  });
$(document).ready(function(){
    $("#onlyBuzz").click(function(){
      $(".fB").toggle();
    });
  });
$(document).ready(function(){
    $("#onlyBuzz").click(function(){
      $(".number").toggle();
    });
  });

$(document).ready(function(){
    $("#onlyFB").click(function(){
      $(".buzz").toggle();
    });
  });
$(document).ready(function(){
    $("#onlyFB").click(function(){
      $(".fizz").toggle();
    });
  });
$(document).ready(function(){
    $("#onlyFB").click(function(){
      $(".number").toggle();
    });
  });

$(document).ready(function(){
    $("#onlyNumber").click(function(){
      $(".buzz").toggle();
    });
  });
$(document).ready(function(){
    $("#onlyNumber").click(function(){
      $(".fB").toggle();
    });
  });
$(document).ready(function(){
    $("#onlyNumber").click(function(){
      $(".fizz").toggle();
    });
  });

function show (elements, specifiedDisplay) {
        elements = elements.length ? elements : [elements];
        for (let index = 0; index < elements.length; index++) {
          elements[index].style.display = specifiedDisplay || 'block';
        }
      }
function showAll() {
      show(document.querySelectorAll('.fizz'));
      show(document.querySelectorAll('.buzz'));
      show(document.querySelectorAll('.fB'));
      show(document.querySelectorAll('.number'));
}

function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (let index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
  }
  
  function hideAll() {
    hide(document.querySelectorAll('.fizz'));
    hide(document.querySelectorAll('.buzz'));
    hide(document.querySelectorAll('.fB'));
    hide(document.querySelectorAll('.number'));
  }