document.addEventListener('DOMContentLoaded', () =>{


    const cardArray = [
        {
            name: 'fies',
            img: 'fastfood1.png',
        },
        {
            name: 'fies',
            img: 'fastfood1.png',
        },
        {
            name: 'fies',
            img: 'fastfood1.png',
        },
        {
            name: 'fies',
            img: 'fastfood4.jpg',
        },
        {
            name: 'fies',
            img: 'fastfood5.jpg',
        },
        {
            name: 'fies',
            img: 'fastfood6.jpg',
        },
        
    ]
    
    const grid= document.querySelector('.grid')
    cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/color1.jpg')
            card.setAttribute('data=id', i)
            //card.addEventListener('click'flipCard)
            grid.appendChild(card)
        

        } 
    }
    
    createBoard()
    })
              



