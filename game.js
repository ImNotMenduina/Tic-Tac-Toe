//iniciar as variaveis
//3 possibilidades X O VAZIO

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver;

function playerMoviment(id) {
    if (gameOver) {
        return;
    }
    if (board[id] == '') {

        board[id] = symbols[playerTime];
        gameOver = isWin();

                                setTimeout(function () {
                                    if (gameOver) {
                                        window.alert("parabens jogador ---> " + symbols[playerTime]);
                                    }
                                }, 500);


        if (!gameOver) {
            let Notempty = 0;
            for (var i = 0;i< board.length; i++) {
                if (board[i] != '') {
                    Notempty++;
                }
            }
            if (Notempty == 9) {
                for(var i=0; i<squares.length;i++){
                    squares[i].style['background-color'] = 'red';
                }

                return;
            }
            else{ 
                if (playerTime == 0) {
                    playerTime = 1;
                }
                else {
                    playerTime = 0;
                }
            }
        }

        return gameOver;
    }
}

function isWin() {

    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (var x = 0; x < winStates.length; x++) {
        let seq = winStates[x];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            for (var i = 0; i < seq.length; i++) {
                squares[seq[i]].style['background-color'] = 'red';
            }
            return true;
        }

    }

    return false;
}

document.getElementById("restart").onclick = function () {
    for (var i = 0; i < board.length; i++) {
        board[i] = '';
    }

    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
        squares[i].style['background-color'] = 'beige';
    }

    gameOver = false;
    playerTime = 0;

}

