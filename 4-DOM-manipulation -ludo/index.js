
activePlayer=1;
finalScore = [0,0];
//DOM variable section

diceImgDom = document.querySelector('.dice'); 

document.querySelector('.btn-roll').addEventListener('click',function(){
    var randomDice = Math.floor(Math.random()*6)+1;
 
    currentScoreDom  = document.getElementById('current-score-'+activePlayer);
    currentScoreDom.textContent = Number(currentScoreDom.textContent) + randomDice;
    diceImgDom.src = 'dice-'+randomDice+'.png'
    if(randomDice === 1){
        currentScoreDom.textContent = 0;
        activePlayer = activePlayer == 1?2:1;
    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
finalScoreDom = document.querySelector('.score-'+activePlayer);
finalScoreDom.textContent =  Number(finalScoreDom.textContent) + Number(document.querySelector('#current-score-'+activePlayer).textContent)
document.getElementById('current-score-'+activePlayer).textContent = 0;
activePlayer = activePlayer === 1?2:1;
})

