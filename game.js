const cards = document.querySelectorAll('.card');


let matched = 0;
let card_one, card_two;
let disable = false;

function flipcard(i){
    let clickedcard = i.target; //getting user clicked card

    if (clickedcard !== card_one && !disable) {
        clickedcard.classList.add('flip');
        if (!card_one){
            
            //return the card_one value to clicked card
            return card_one = clickedcard;
        }

        card_two = clickedcard;
        disable = true;
        let card_one_img = card_one.querySelector('img').src,
        card_two_img = card_two.querySelector('img').src;

        matchcards(card_one_img, card_two_img);
    };
}

function matchcards(img1, img2){
    if(img1 === img2){
        //if two cards matched
        matched++;
// if matched value is 6 that means user has matched all the cards (6*2 = 12 cards)
        if (matched === 6) {
            setTimeout(()=>{

                // open  page after finding all the cards in the same window
                window.location.href= "gamepage.html";

                // return shuffle();

            }, 1000); //calling shuffle card func after 1sec
                
        }

        //if two cards matched
        card_one.removeEventListener("click", flipcard);
        card_two.removeEventListener("click", flipcard);
        card_one = card_two = '';
        return disable = false;
    }
    setTimeout(()=> {

        //adding shake to both card after 400ms
        card_one.classList.add("shake");
        card_two.classList.add("shake");

    }, 400);

    setTimeout(()=> {

        //removing shake and flip classes from both card after 400ms
        card_one.classList.remove("shake", "flip");
        card_two.classList.remove("shake", "flip");
        card_one = card_two = ''; //setting both card to value blank
        disable = false;
    }, 1200);
        
}
 

function shuffle() {
    matched = 0;
    card_one = card_two = '';
    // creating array of 16 items and each item is repeated twice
    let arr = [1,2,3,4,5,6,1,2,3,4,5,6];

    //sorting array item randomly 
    // arr.sort(()=> Math.random()> 0.5 ? 1 :-1); 

//removing "flip" class from all cards and passing random image to each card
    cards.forEach(function(card, indx){
        card.classList.remove("flip");
        let imgtag = card.querySelector('img');
        imgtag.src = `imgs/me-${arr[indx]}.png`;
        card.addEventListener('click', flipcard);
    });
}

shuffle();

cards.forEach(function(card){
    // card.classList.remove("flip");

    //adding click event to all cards
    card.addEventListener('click', flipcard);
});