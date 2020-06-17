document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [
        {
            name: 'sandwich',
            img: 'images/fastfood1.png',
        },
        {
            name: 'sandwich',
            img: 'images/fastfood1.png',
        },
        {
            name: 'chips',
            img: 'images/fastfood2.jpg',
        },
        
        {
            name: 'chips',
            img: 'images/fastfood2.jpg',
        },

        {
            name: 'fried rice',
            img: 'images/fastfood 3.jpg',
        },

        {
            name: 'fried rice',
            img: 'images/fastfood 3.jpg',
        },
        
        {
            name: 'pizza',
            img: 'images/fastfood4.jpg',
        },

        {
            name: 'pizza',
            img: 'images/fastfood4.jpg',
        },

        {
            name: 'burger',
            img: 'images/fastfood5.jpg',
        },

        {
            name: 'burger',
            img: 'images/fastfood5.jpg',
        },
       
        {
            name: 'chicken',
            img: 'images/fastfood6.jpg',
        },

        {
            name: 'chicken',
            img: 'images/fastfood6.jpg',
        },
        
    ]
    cardArray.sort(() => 0.5 - Math.random())
    
    const grid= document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon =[]
    
    
    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/color1.jpg')
            card.setAttribute('data-id' , i)
            
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    
    
//check for matches
function checkForMatch() {
    
    var cards = document.querySelectorAll('img')
    const optionOneId  = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } 
    else {
        cards[optionOneId].setAttribute('src', 'images/color1.jpg')
        cards[optionTwoId].setAttribute('src', 'images/color1.jpg')
        alert('sorry', 'try again')

    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'congratulobia! You found them all!'
    }
}

//flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
} 




createBoard()




    

})
              



