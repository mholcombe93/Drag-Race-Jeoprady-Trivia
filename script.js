const game = document.querySelector('.game--container')
const scoreDisplay = document.querySelector('.score')

const jeopardyCategories = [
  {
    genre: "CATCH PHRASES",
    questions: [
      {
        question: `This Queen said "Jesus is a biscuit, let him sop you up".`,
        choices: ['Willam Belli', 'Bob the Drag Queen', 'Latrice Royale', 'Trixie Mattel'],
        correct: 'Latrice Royal',
        rank: 200,
      },
      {
        question: `This Queen said "Is there somthing on my face" directly to RuPaul resulting in him storning out of the Werkroom.`,
        choices: ['Katya', 'Pearl', 'Sasha Valour', 'Trixie Mattel'],
        correct: 'Pearl',
        rank: 400,
      },
      {
        question: `Alyssa Edwards is known for many one liners, this bodypart became a point of contension during a fight with Jade Jolie`,
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
        question: `This Queen said "Jesus is a biscuit, let him sop you up".`,
        choices: ['Willam Belli', 'Bob the Drag Queen', 'Latrice Royale', 'Trixie Mattel'],
        correct: 'Latrice Royal',
        rank: 200,
      },
      {
        question: `This Queen said "Is there somthing on my face" directly to RuPaul resulting in him storning out of the Werkroom.`,
        choices: ['Katya', 'Pearl', 'Sasha Valour', 'Trixie Mattel'],
        correct: 'Pearl',
        rank: 400,
      },
      {
        question: `Alyssa Edwards is known for many one liners, this bodypart became a point of contension during a fight with Jade Jolie`,
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
    genre: "ICONIC LIP SYNCS",
    questions: [
      {
        question: `This Queen said "Jesus is a biscuit, let him sop you up".`,
        choices: ['Willam Belli', 'Bob the Drag Queen', 'Latrice Royale', 'Trixie Mattel'],
        correct: 'Latrice Royal',
        rank: 200,
      },
      {
        question: `This Queen said "Is there somthing on my face" directly to RuPaul resulting in him storning out of the Werkroom.`,
        choices: ['Katya', 'Pearl', 'Sasha Valour', 'Trixie Mattel'],
        correct: 'Pearl',
        rank: 400,
      },
      {
        question: `Alyssa Edwards is known for many one liners, this bodypart became a point of contension during a fight with Jade Jolie`,
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
    genre: "INTERNATIONALS",
    questions: [
      {
        question: `This Queen said "Jesus is a biscuit, let him sop you up".`,
        choices: ['Willam Belli', 'Bob the Drag Queen', 'Latrice Royale', 'Trixie Mattel'],
        correct: 'Latrice Royal',
        rank: 200,
      },
      {
        question: `This Queen said "Is there somthing on my face" directly to RuPaul resulting in him storning out of the Werkroom.`,
        choices: ['Katya', 'Pearl', 'Sasha Valour', 'Trixie Mattel'],
        correct: 'Pearl',
        rank: 400,
      },
      {
        question: `Alyssa Edwards is known for many one liners, this bodypart became a point of contension during a fight with Jade Jolie`,
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
    genre: "JUDGES PANEL",
    questions: [
      {
        question: `This Queen said "Jesus is a biscuit, let him sop you up".`,
        choices: ['Willam Belli', 'Bob the Drag Queen', 'Latrice Royale', 'Trixie Mattel'],
        correct: 'Latrice Royal',
        rank: 200,
      },
      {
        question: `This Queen said "Is there somthing on my face" directly to RuPaul resulting in him storning out of the Werkroom.`,
        choices: ['Katya', 'Pearl', 'Sasha Valour', 'Trixie Mattel'],
        correct: 'Pearl',
        rank: 400,
      },
      {
        question: `Alyssa Edwards is known for many one liners, this bodypart became a point of contension during a fight with Jade Jolie`,
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
    ],
  },
]



function addCategory(category) {
  const column = document.createElement('div');
  column.classList.add('genre-column');

  const genreTitle = document.createElement('div');
  genreTitle.classList.add('genre-title');
  genreTitle.innerText = category.genre;

  column.appendChild(genreTitle);
  game.append(column)
}

jeopardyCategories.forEach(category => addCategory(category));

//---------------Pseduo code---------------\\
// create two teams, using a submit box to make "team names"
// team names displayed on corners with score values starting at 0.
// create board with either buttons or moduls 30 total, 6 columns, 5 rows

