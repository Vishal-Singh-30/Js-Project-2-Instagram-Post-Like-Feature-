let card = document.querySelector("#card");
let love = document.querySelector("#love");

console.log(card, love);

card.addEventListener("click", function(){
    love.style.transform = 'scale(1)';
    love.style.opacity = 0.8;
    setTimeout(() => {
        love.style.transform = 'scale(0)';
        love.style.opacity = 0;
    }, 1000);
    
});





