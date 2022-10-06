const game = document.querySelector('.game')
const scoreDisplay = document.querySelector('.score')

const jeopardyCategories = [
  {
    genre: "CATCH PHRASES",
    questions: [
      {
        question: `RuPaul says this when a queen is eliminated`,
        choices: ['Leave', 'Shantay Away', 'Shantay You Stay', 'Sashay Away'],
        correct: 'Sashay Away',
        rank: 200,
      },
      {
        question: `This Queen said "Jesus is a biscuit, let him sop you up".`,
        choices: ['Willam Belli', 'Bob the Drag Queen', 'Latrice Royale', 'Trixie Mattel'],
        correct: 'Latrice Royale',
        rank: 400,
      },
      {
        question: `Alyssa Edwards is known for many one liners, this bodypart of hers became a point of contension during a fight with Jade Jolie.`,
        choices: ['Back rolls', 'Belly fat', 'Weak ankles', 'Shotty vocal chords'],
        correct: 'Back rolls',
        rank: 600,
      },
      {
        question: `"Not today Satan, not today" was a line said by Bianca Del Rio in reference to this queen`,
        choices: ['Ben De la Creme', 'Courtney Act', 'Adore Delano', 'Laganja Estranja'],
        correct: 'Courtney Act',
        rank: 800,
      },
      {
        question: `"It's Chocolate" was said this many times on the main stage during season 14, resulting in a queen getting eliminated`,
        choices: ['5', '6', '7', '8'],
        correct: '6',
        rank: 1000,
      },
    ]
  },
  {
    genre: "B*CTHTRACKS & RUSICALS",
    questions: [
      {
        question: `In the All Stars 2 song Read U Wrote U this queen made it clear "I know you love me baby, thats why you brought me here."`,
        choices: ['Alaska', 'Roxxxy Andrews', 'Katya', 'Detox'],
        correct: 'Roxxxy Andrews',
        rank: 200,
      },
      {
        question: `This celebrity diva was being played by Shangelia in the VH1 Divas Live Lip Sync challenge in All Stars 3.`,
        choices: ['Mariah Carey', 'Janet Jackson', 'Donna Summer', 'Patti LaBelle'],
        correct: 'Mariah Carey',
        rank: 400,
      },
      {
        question: `The results of this Rusical lead to the "Jan Sport Facecrack of the Century `,
        choices: ['Moulin Ru! The Rusical', 'Trump: The Rusical', 'Cher: The Unauthorized Rusical', 'Madonna: The Unauthorized Rusical'],
        correct: 'Madonna: The Unauthorized Rusical',
        rank: 600,
      },
      {
        question: `This 2021 music video features canadian drag star Lemon rapping about Reddit, Lip Gloss, and your father paying for her explicit photos.`,
        choices: ['Your Makeup is Terrible', 'Moving Parts', 'XOXOY2k', 'Come Through'],
        correct: 'Come Through',
        rank: 800,
      },
      {
        question: `This Kitty Girl was not a member of the winning team in the All Stars 3 girls group challenge "Sitting on a Secret" vs "Drag Up your Life".`,
        choices: ['Bimbo Kitty', 'Sparkle Kitty', 'I.Q. Kitty', 'Jungle Kitty'],
        correct: 'Bimbo Kitty',
        rank: 1000,
      },
    ]
  },
  {
    genre: "CROWNED QUEENS",
    questions: [
      {
        question: `From winning drag race, having a makeup line, a best selling book with her best friend Katya, multiple music albums, and a hotel this queen has a networth of over 10 million dollars.`,
        choices: ['Willam Belli', 'Bianca Del Rio', 'RuPaul Charles', 'Trixie Mattel'],
        correct: 'Trixie Mattel',
        rank: 200,
      },
      {
        question: `Often referred to as her "Twinner" this queen shares the All stars 4 crown with Trinty the Tuck.`,
        choices: ['Bob the Drag Queen', 'Monet X Change', 'Sasha Valour', 'Shangela'],
        correct: 'Monet X Change',
        rank: 400,
      },
      {
        question: `This narcoleptic burlesque queen has won two drag race titles`,
        choices: ['Jinkx Monsoon', 'Raja', 'Trixie Mattel', 'Violet Chachki'],
        correct: 'Kinkx Monsoon',
        rank: 600,
      },
      {
        question: `The first ever crowned queen of RPDR, Bebe Zahara Benet, hails from this African Country.`,
        choices: ['Nigeria', 'Senegal', 'Cameroon', 'Morocco'],
        correct: 'Cameroon',
        rank: 800,
      },
      {
        question: `Trinity the Tuck holds the record for most ever challenges won in the franchice with this many challenge wins.`,
        choices: ['8', '9', '10', '11'],
        correct: '11',
        rank: 1000,
      },
    ]
  },
  {
    genre: "ICONIC LIP SYNCS",
    questions: [
      {
        question: `Sasha Velour used this prop to seal her win in the season 8 penulitmate lip sync "So Emotional" by Whittney Huston.`,
        choices: ['Rose Pedals', 'Pyrotechnics', 'Angle Wings', 'Money Gun'],
        correct: 'Rose Pedeals',
        rank: 200,
      },
      {
        question: `For All Stars 5 and 6 this twist was added to the lip sync format to change who would perform.`,
        choices: ['Lip Sync Battle Royal', 'Lossers Lip Syncs', 'Winners Lip Syncs', 'Lip Sync Assassins'],
        correct: 'Lip Sync Assassins',
        rank: 400,
      },
      {
        question: `This Rihanna lip sync lead to the double save of Alyssa Edwards and Tatiana.`,
        choices: ['Pon De Replay', 'Shut Up and Drive', 'Love on the Brain', 'Diamonds'],
        correct: 'Shut Up and Drive',
        rank: 600,
      },
      {
        question: `The only spoken word monologue lip sync to feature on an All Stars season is from this 1980's sitcom.`,
        choices: ['The Golden Girls', 'Designing Women', 'Cheers', 'Mama\'s Family'],
        correct: 'Designing Women',
        rank: 800,
      },
      {
        question: `This lip sync song began with Laganja Estranja drop 10' from the air into a split.`,
        choices: ['Sorry Not Sorry', 'Let\'s Get Physical', 'It\'s Raining Men', 'Physical'],
        correct: 'Physical',
        rank: 1000,
      },
    ]
  },
  {
    genre: "INTERNATIONALS",
    questions: [
      {
        question: `The sub title name for Drag race in Australia is this.`,
        choices: ['Down Under', 'Outback', 'Oz Land', 'Aussies'],
        correct: 'Down Under',
        rank: 200,
      },
      {
        question: `This international queen has competeted on 4 seasons of drag race and one drag race singing competition`,
        choices: ['Panjina Heals', 'Manila Luzon', 'Jujubee', 'Janey Jacke'],
        correct: 'Jujubee',
        rank: 400,
      },
      {
        question: `The UK drag group The Frock Destroyers features 3 queens, but not this one.`,
        choices: ['Blu Hydrangea', 'Baga Chipz', 'Divina de Campo', 'Cheryl Hole'],
        correct: 'Cheryl Hole',
        rank: 600,
      },
      {
        question: `Where did UK clown Queen Lawrence Chaney begin her drag career `,
        choices: ['Berlin', 'Dublin', 'Glasgow', 'London'],
        correct: 'Glasgow',
        rank: 800,
      },
      {
        question: `Thailand superstar Panjina Heals uses this 1970's eratic dance style to showcase her drag`,
        choices: ['Waacking', 'Disco', 'Voguing', 'Hairography'],
        correct: 'Waacking',
        rank: 1000,
      },
    ]
  },
  {
    genre: "JUDGES PANEL",
    questions: [
      {
        question: `Michelle Visage is from this state. `,
        choices: ['California', 'Wissconsin', 'New York', 'New Jersey'],
        correct: 'New Jersey',
        rank: 200,
      },
      {
        question: `This Down Under comedian was a full time judge for Drag Race Australia.`,
        choices: ['Rhys Nicholson', 'Iliza Shlesinger', 'Rebel Wilson', 'Santino Rice'],
        correct: 'Rhys Nicholson',
        rank: 400,
      },
      {
        question: ``,
        choices: ['Back rolls', 'Belly fat', 'Weak ankles', 'Shotty vocal chords'],
        correct: 'Back rolls',
        rank: 600,
      },
      {
        question: `"`,
        choices: ['Ben De la Creme', 'Courtney Act', 'Adore Delano', 'Laganja Estranja'],
        correct: 'Courtney Act',
        rank: 800,
      },
      {
        question: `Bianca Del Rio told judge Santino Rice that she will show versitility when he wears this artile of clothing`,
        choices: ['A Pencil Skirt', 'Loafers', 'A Turtleneck', 'Anything Green'],
        correct: 'A Turtleneck',
        rank: 1000,
      },
    ],
  },
]

let score = 0

//------------------------------- Creating Columns ---------------------------
function addCategory(category) {
  const column = document.createElement('div'); // creates column div and adds class
  column.classList.add('genre-column');

  const genreTitle = document.createElement('div');
  genreTitle.classList.add('genre-title');
  genreTitle.innerHTML = category.genre;

  column.appendChild(genreTitle);
  game.append(column);


  category.questions.forEach(question => {
    const card = document.createElement('div');
    card.classList.add('card');
    column.appendChild(card);

    if (question.rank === 200) {
     card.innerHTML = 200
    }
    if (question.rank === 400) {
     card.innerHTML = 400
    }
    if (question.rank === 600) {
     card.innerHTML = 600
    }
    if (question.rank === 800) {
     card.innerHTML = 800
    }
    if (question.rank === 1000) {
     card.innerHTML = 1000
    }

    card.setAttribute('data-question', question.question)
    card.setAttribute('data-choices-1', question.choices[0])
    card.setAttribute('data-choices-2', question.choices[1])
    card.setAttribute('data-choices-3', question.choices[2])
    card.setAttribute('data-choices-4', question.choices[3])
    card.setAttribute('data-correct', question.correct)
    card.setAttribute('data-value',card.getInnerHTML())

    card.addEventListener('click',flipCard)

})
}

jeopardyCategories.forEach(category => addCategory(category)); // adds the function above

//------------------------------- ^ Creating Columns ^ ---------------------------

//---------------------------------- Flip Card --------------------------------
function flipCard() {
  this.innerHTML = " " //empties the card
  this.style.fontSize = "20px"
  this.style.lineHeight = "26px"
  const textDisplay = document.createElement('div') //creates text for question
  textDisplay.classList.add('card-text') // adds class for style
  textDisplay.innerHTML = this.getAttribute('data-question') // gets the text from the question


 const choiceOne = document.createElement('button') //creates the choies button
 const choiceTwo = document.createElement('button')
 const choiceThree = document.createElement('button')
 const choiceFour = document.createElement('button')

  choiceOne.classList.add('choice-one') // adds class, styles buttons
  choiceTwo.classList.add('choice-two')
  choiceThree.classList.add('choice-three')
  choiceFour.classList.add('choice-four')

  choiceOne.innerHTML = this.getAttribute('data-choices-1') // sets text of hoies on button
  choiceTwo.innerHTML = this.getAttribute('data-choices-2') 
  choiceThree.innerHTML = this.getAttribute('data-choices-3') 
  choiceFour.innerHTML = this.getAttribute('data-choices-4') 

  choiceOne.addEventListener('click', getResult) //callback function for clicking a choice for a result
  choiceTwo.addEventListener('click', getResult)
  choiceThree.addEventListener('click', getResult)
  choiceFour.addEventListener('click', getResult)

  this.append(textDisplay, choiceOne, choiceTwo, choiceThree, choiceFour)


  const allCards = Array.from(document.querySelectorAll('.card')) // removes clicking on other cards when one is flipped
  allCards.forEach(card => card.removeEventListener('click', flipCard))
  
}

// function clicked(e){
//   let allCards = document.querySelectorAll('.card')
//   for (let i = 0; i < allCards.length; i++){
//       let card = allCards[i]
//     if (card === e.target) {
//       card.removeEventListener('click',clicked)
//           console.log('whatever the message is')
//     }
//     else {
//       card.addEventListener('click',clicked)
//         console.log('whatever the message is')
//     }
//   }
// }


function getResult() { 
const allCards = Array.from(document.querySelectorAll('.card'))
allCards.forEach(card => card.addEventListener('click', flipCard))

  const cardOfButton = this.parentElement //gets the parrent of the button = the Div card

  if (cardOfButton.getAttribute('data-correct') === this.innerHTML) {
    score = score + parseInt(cardOfButton.getAttribute('data-value')) // adds score when correct
    scoreDisplay.innerHTML = score
    cardOfButton.classList.add('correct-answer') // will change answer to good color
    setTimeout(() => { // after 300ms removes all eliments inside parent div
      while (cardOfButton.firstchild) {
        cardOfButton.removeChild(cardOfButton.lastChild)
      }
      cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
    }, 300)
  }
  else if (cardOfButton.getAttribute('data-correct') !== this.innerHTML) {
    score = score - parseInt(cardOfButton.getAttribute('data-value'))
    scoreDisplay.innerHTML = score
    cardOfButton.classList.add('wrong-answer') // will change answer to bad color
    setTimeout(() => {
      while (cardOfButton.firstchild) {
        cardOfButton.removeChild(cardOfButton.lastChild)
      }
      cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
    }, 300)
  }
  cardOfButton.removeEventListener('click', flipCard)
}

//---------------Pseduo code---------------\\
// create two teams, using a submit box to make "team names"
// team names displayed on corners with score values starting at 0.
// create board with either buttons or moduls 30 total, 6 columns, 5 rows
// mod operator to swap between players

