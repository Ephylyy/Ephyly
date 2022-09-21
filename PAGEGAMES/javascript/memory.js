const cardArray = [
    {
        name: 'fries',
        img: 'image/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'image/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'image/hotdog.png'
    },
    {
        name: 'icecreame',
        img: 'image/icecreame.png'
    },
    {
        name: 'milkshake',
        img: 'image/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'image/pizza.png'
    }
]

//Sorting an array randomly, compares random Math number from 0,0 <-> 1,0 with the number 0,5. Result is ether bigger or smaller 0.5
cardArray.sort(() => 0.5 - Math.random())

//Methode is looking in the, document the html file , for the ID named grid
const griddisplay = document.querySelector('#grid')
const cardsChosen = []
function createBoard () {
    for (let i = 0; i < cardArray.length*2; i++) {
        //Creates an element spezific here an image
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        //Just if 'click' an ivent is triggernt the funktion flipcard is called
        card.addEventListener('click', flipCard)
        griddisplay.appendChild(card)
    }
}
createBoard()

function checkMatch ()
{
    console.log('check match !')

}

function flipCard (){
    //Allows to interact with whatever element we click on to interact with and saving the data id in cardId
    const cardId = this.getAttribute('data-id')
    //Adds the click items into the new Array to later compare to
    cardsChosen.push(cardArray[cardId].name)
    //Chances the clicked image to its name fitting image and assigned it to the card
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch , 500)
    }
}