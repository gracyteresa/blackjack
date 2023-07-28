let cards=[]
sum=0;
let game=true
let blackjack=false
let out=false
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
function startGame(){
     out=true
     if(game===true){
    
    let first=Math.floor(Math.random()*10)+1
    let second=Math.floor(Math.random()*10)+1
    cards.push(first)
    cards.push(second)
    sum=first+second
    
    render()
    game=false
     }
}
function render(){
    cardsEl.textContent="cards:"
    
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    
    if(sum<=20){
        messageEl.textContent="Draw a new card!"


    }
    else if(sum===21){
        messageEl.textContent="You got a blackjack🥳"
        blackjack=true
    }
    else{
        messageEl.textContent="You are out of game😕"
        out=false
        
    }
    sumEl.textContent="sum:"+sum 


}
function newCard(){
    if(out===true && blackjack===false){
        let newcard=Math.floor(Math.random()*10)+1
        sum+=newcard
        cards.push(newcard)
        render()

    }



}