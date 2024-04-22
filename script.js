let player = 'X';
let board = document.querySelectorAll('.box');
let moveCheck = ['-','-','-','-','-','-','-','-','-'];
let moveCount = 0;
function move(){
    while(!(moveCount==9)){
        let i = Math.floor(Math.random()*9);
        if(moveCheck[i]=== '-'){
            board[i].innerHTML=player;
            moveCheck[i]= player;
            if(winner()){
                setTimeout(winnerAnnounce,500)
                break;
            }
            moveCount++;
            player = player === 'X' ? 'O' :'X';
            document.getElementsByClassName('player')[0].innerHTML='Player '+player
            break;
        }
    }
}

function reset(){
    for(let i=0;i<board.length;i++){
        board[i].innerHTML=""
    }
    moveCount=0;
}

function winner(){
    if(
        moveCheck[0]===player&& moveCheck[1]===player && moveCheck[2] === player||
        moveCheck[3]===player&& moveCheck[4]===player && moveCheck[5] === player||
        moveCheck[6]===player&& moveCheck[7]===player && moveCheck[8] === player||
        moveCheck[0]===player&& moveCheck[3]===player && moveCheck[6] === player||
        moveCheck[1]===player&& moveCheck[4]===player && moveCheck[7] === player||
        moveCheck[2]===player&& moveCheck[5]===player && moveCheck[8] === player||
        moveCheck[0]===player&& moveCheck[4]===player && moveCheck[8] === player||
        moveCheck[2]===player&& moveCheck[4]===player && moveCheck[6] === player
    ){
        setTimeout(reset,2000)
        return true;
    }else{
        return false;
    }
}

function winnerAnnounce(){
    alert(player +" is a winner ")
}