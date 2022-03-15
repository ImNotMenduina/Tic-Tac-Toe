

var squares = document.getElementsByClassName("square");
for(var i=0; i<squares.length;i++){
    squares[i].onclick = function(){
        playerMoviment(this.id);
        updateSquares(); 
    
    }
}

 function updateSquares(){


    for(var i=0; i<squares.length; i++){
        let position = squares[i].id;
        let symbol = board[position];

         if(symbol != ''){
            squares[i].innerHTML = `<div class='${symbol}'></div>`
        } 
       
    }
} 