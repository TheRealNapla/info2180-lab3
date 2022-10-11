function boardLayout(){
    var layout = document.getElementById("board").getElementsByTagName("div");
    for (var space of layout){
        space.className = "square";
    }
}

function play(){
    var turn = 1;
    var layout = document.getElementById("board").getElementsByTagName("div");
    for (const space of layout){
        space.addEventListener("mouseover", function(){
            if (space.textContent == ""){
                space.classList.add("hover");
            }
        })
        space.addEventListener("mouseout", function(){
            space.classList.remove("hover");
        })
        space.addEventListener("click", function(){
            if (turn == 1){
                if (space.textContent != "O"){
                    space.classList.add("X");
                    space.textContent = "X";
                    turn = 0;
                }
            }
            else if (turn == 0){
                if (space.textContent != "X"){
                    space.classList.add("O");
                    space.textContent = "O";
                    turn = 1;
                }
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", function(){
    boardLayout();
    play();
})