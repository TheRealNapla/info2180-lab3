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
                    findWinner();
                }
            }
            else if (turn == 0){
                if (space.textContent != "X"){
                    space.classList.add("O");
                    space.textContent = "O";
                    turn = 1;
                    findWinner();
                }
            }
        })
    }
}

function findWinner(){
    var layout = document.getElementById("board").getElementsByTagName("div");
    var status = document.getElementById("status");
    var space0 = layout[0].textContent;
    var space1 = layout[1].textContent;
    var space2 = layout[2].textContent;
    var space3 = layout[3].textContent;
    var space4 = layout[4].textContent;
    var space5 = layout[5].textContent;
    var space6 = layout[6].textContent;
    var space7 = layout[7].textContent;
    var space8 = layout[8].textContent;

    if (space0 != "" && space0 == space1 && space0 == space2){
        status.textContent = "Congratulations! " + space0 + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (space3 != "" && space3 == space4 && space3 == space5){
        status.textContent = "Congratulations! " + space3 + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (space6 != "" && space6 == space7 && space6 == space8){
        status.textContent = "Congratulations! " + space6 + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (space0 != "" && space0 == space4 && space0 == space8){
        status.textContent = "Congratulations! " + space0 + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (space2 != "" && space2 == space4 && space2 == space6){
        status.textContent = "Congratulations! " + space2 + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (space0 != "" && space0 == space3 && space0 == space6){
        status.textContent = "Congratulations! " + space0 + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (space1 != "" && space1 == space4 && space1 == space7){
        status.textContent = "Congratulations! " + space1 + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (space2 != "" && space2 == space5 && space2 == space8){
        status.textContent = "Congratulations! " + space2 + " is the Winner!";
        status.classList.add("you-won");
    }
    else{
        if (space0 != "" && space1 != "" && space2 != "" && space3 != "" && space4 != "" && space5 != "" && space6 != "" && space7 != "" && space8 != "")
        status.textContent = "Tie Game. Please start a new game.";
    }
}
function newGame(){
    document.querySelector("button").addEventListener("click", function(){
        location.reload();
    })
}

document.addEventListener("DOMContentLoaded", function(){
    boardLayout();
    play();
    newGame();
})