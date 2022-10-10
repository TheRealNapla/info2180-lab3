function boardLayout(){
    var layout = document.getElementById("board").getElementsByTagName("div");
    for (var space of layout){
        space.className = "square";
    }
}

document.addEventListener("DOMContentLoaded",function(){
    boardLayout();
})