//Quizzard Questions object array for the storing my 50 questions
let questions = [
  {
    question: "What type of dragon was Norbet",
    optionA: "Hungarian Horntail",
    optionB: "A Romanian Longhorn",
    optionC: "A Norwegian Ridgeback",
    optionD: "An Antipodean Opaleye",
    correctOption: "optionC", //Q1   //All 50 questions and answers are taken from various online sources materials
  },

  {
    question: "What is the smallest of all known dragons?",
    optionA: "Ukrainian Ironbelly",
    optionB: "Peruvian Vipertooth",
    optionC: "Antipodean Opaleye",
    optionD: "Welsh Green",
    correctOption: "optionB", //Q2
  },

  {
    question: "How many uses of Dragon's blood did Albus Dumbledore discover?",
    optionA: "30",
    optionB: "12",
    optionC: "22",
    optionD: "10",
    correctOption: "optionB", //Q3
  },

  {
    question:
      "What is the five digit code that one needs to dial to get inside the Ministry of Magic?",
    optionA: "6-4-4-2-6",
    optionB: "6-3-3-4-2",
    optionC: "6-2-5-5-2",
    optionD: "6-2-4-4-2",
    correctOption: "optionD", //Q4
  },

  {
    question: "What colour are the eggs of a Chinese Fireball?",
    optionA: "Crimson speckled with gold streaks ",
    optionB: "Crimson speckled with gold",
    optionC: "Crimson with gold and red streaks",
    optionD: "Crimson with red swirls",
    correctOption: "optionB", //Q5
  },

  {
    question:
      "Harry, Ron, and Hermione help save the Sorcerer's Stone from being stolen. How old was its co-creator, Nicholas Flamel, when he decided to destroy it?",
    optionA: "670",
    optionB: "651",
    optionC: "665",
    optionD: "668",
    correctOption: "optionC", //Q6
  },

  {
    question:
      "In the Ministry of Magic, for which department does Arthur Weasley work?",
    optionA: "Ministry of Magic Witch Watchers",
    optionB: "Misuse of Muggle artifacts",
    optionC: "Improper Use of Magic Office",
    optionD: "Muggle Liaison Office",
    correctOption: "optionB", //Q7
  },

  {
    question: "Who among the Marauders was also known as Prongs?",
    optionA: "James Potter",
    optionB: "Sirius Black",
    optionC: "Remus Lupin",
    optionD: "Peter Pettigrew",
    correctOption: "optionA", //Q8
  },

  {
    question: "What is the name of Nymphadora Tonk's Aunt?",
    optionA: "Laurena Lestrange",
    optionB: "Balbine Lestrange",
    optionC: "Bellatrix Lestrange",
    optionD: "Leta Lestrange",
    correctOption: "optionC", //Q9
  },

  {
    question: "What is Harry's vault number in Gringotts?",
    optionA: "657",
    optionB: "687",
    optionC: "697",
    optionD: "667",
    correctOption: "optionB", //Q10
  },

  {
    question: "How is a Basilisk born?",
    optionA: "A cock egg born below the dark",
    optionB: "A cock egg born below a rock",
    optionC: "A cock egg born below a tree",
    optionD: "A cock egg born below a toad",
    correctOption: "optionD", //Q11
  },

  {
    question:
      "What chess piece does Luna's house resemble during the Golden Trio's visit?",
    optionA: "A knight",
    optionB: "A bishop",
    optionC: "A pawn",
    optionD: "A rook",
    correctOption: "optionD", //Q12
  },

  {
    question:
      "In Knockturn Alley, Harry watches as Draco examines a cursed necklace that has killed how many muggle owners?",
    optionA: "15",
    optionB: "22",
    optionC: "19",
    optionD: "12",
    correctOption: "optionC", //Q13
  },

  {
    question: "What organization did Hermione start in her 4th year?",
    optionA: "Wizzards against the Dark Arts",
    optionB: "Society for the promotion of Elfish Welfare",
    optionC: "Witches for Equal Rights",
    optionD: "Dumbledore's Army",
    correctOption: "optionB", //Q14
  },

  {
    question: "What potion did Harry take in order to get Slughorn's memories?",
    optionA: "Felix Felicis",
    optionB: "Polyjucie Potion",
    optionC: "Essence of Dittany",
    optionD: "Alihotsy Draught",
    correctOption: "optionA", //Q15
  },

  {
    question: "What did Dumbledore leave for Hermione in his will?",
    optionA: "Cloak of invisibility",
    optionB: "An enchanted purse",
    optionC: "The Tales of Beadle the Bard",
    optionD: "A bezoar",
    correctOption: "optionC", //Q16
  },

  {
    question: "Monkshood and wolfsbane are the same plant, also known as what?",
    optionA: "Silverweed",
    optionB: "Aconite",
    optionC: "Mallowsweet",
    optionD: "Puffapod",
    correctOption: "optionB", //Q17
  },

  {
    question:
      "During their first visit to Diagon Alley, what flavor of ice cream did Hagrid buy for Harry?",
    optionA: "Strawberry and Chocolate",
    optionB: "Chocolate and raspberry",
    optionC: "Chocolate and Orange",
    optionD: "Strawberry and Lemon",
    correctOption: "optionB", //Q18
  },

  {
    question: "Name the mother of Severus Snape, who was a pure-blooded witch",
    optionA: "Emma",
    optionB: "Emily",
    optionC: "Elieen",
    optionD: "Everly",
    correctOption: "optionC", //Q19
  },

  {
    question:
      "Name the warden of the orphanage from where Voldemort came from?",
    optionA: "Mr. Cole",
    optionB: "Mrs. Cole",
    optionC: "Mr Smith",
    optionD: "Mrs Smith",
    correctOption: "optionB", //Q20
  },

  {
    question:
      "Which school Harry planned to go before he decided to go to Hogwarts?",
    optionA: "Johnson City High",
    optionB: "Jamestown High",
    optionC: "Stonewall High",
    optionD: "Ridgeback High",
    correctOption: "optionC", //Q21
  },

  {
    question:
      "What plants are the Gryffindors and the Hufflepuffs working with on their first day of second-year Herbology?",
    optionA: "Mandrakes",
    optionB: "Gillyweed",
    optionC: "Bubotuber",
    optionD: "Devil's Snare",
    correctOption: "optionA", //Q22
  },

  {
    question: "How many staircases does Hogwarts have?",
    optionA: "145",
    optionB: "132",
    optionC: "150",
    optionD: "142",
    correctOption: "optionD", //Q23
  },

  {
    question:
      "In the Hall of Prophecy, which row holds Harry and Voldemort's prophecy?",
    optionA: "57",
    optionB: "97",
    optionC: "87",
    optionD: "67",
    correctOption: "optionB", //Q24
  },

  {
    question:
      "Which dragon does Cedric Diggory get for his first task during the Triwizard Tournament?",
    optionA: "Welsh Green",
    optionB: "Chinese Fireball",
    optionC: "Swedish Short-Snout",
    optionD: "Hungarian Horntail",
    correctOption: "optionB", //Q25
  },

  {
    question: "In the game of Quidditch, how many possible fouls are there?",
    optionA: "500",
    optionB: "1000",
    optionC: "700",
    optionD: "800",
    correctOption: "optionC", //Q26
  },

  {
    question:
      "Cedric Diggory let Harry use the prefect's bathroom in 'The Goblet of Fire.' What man's statue is next to the special lavatory entrance?",
    optionA: "Lachlan the Lanky",
    optionB: "Bloody Baron",
    optionC: "Boris the Bewildered",
    optionD: "Wilfred the Wistful",
    correctOption: "optionC", //Q27
  },

  {
    question: "What spell would you use to open a door?",
    optionA: "Alohomora",
    optionB: "Lumos",
    optionC: "Riddikulus",
    optionD: "Avada Kedavra",
    correctOption: "optionA", //28
  },

  {
    question:
      "In 'Harry Potter And The Prisoner Of Azkaban', to what page number does Professor Snape ask his class to turn to?",
    optionA: "394",
    optionB: "350",
    optionC: "400",
    optionD: "384",
    correctOption: "optionA", //Q29
  },

  {
    question:
      "After visiting Gringotts, which shop does Harry first go to in Diagon Alley?",
    optionA: "Flourish and Blotts",
    optionB: "Madam Malkin's Robes For All Occasions",
    optionC: "Slugs and Jigger's Apothecary",
    optionD: "Twilfitt and Tatting’s",
    correctOption: "optionB", //Q30
  },

  {
    question: "For how many years did the Weasleys have Scabbers as a pet?",
    optionA: "11",
    optionB: "8",
    optionC: "10",
    optionD: "12",
    correctOption: "optionD", //Q31
  },

  {
    question:
      "What did Harry receive from the Dursley’s on his first Christmas at Hogwarts?",
    optionA: "A ten-pence piece",
    optionB: "A twenty-pence piece",
    optionC: "A fifty-pence piece",
    optionD: "Nothing!",
    correctOption: "optionC", //Q32
  },

  {
    question: "How many Knuts are in a Sickle?",
    optionA: "17",
    optionB: "33",
    optionC: "29",
    optionD: "20",
    correctOption: "optionC", //Q33
  },

  {
    question: "What is the maximum speed that a firebolt broomstick can reach?",
    optionA: "120 mph",
    optionB: "150 mph",
    optionC: "200 mph",
    optionD: "300 mph",
    correctOption: "optionB", //Q34
  },

  {
    question:
      "Where did Hermione first apparate to after Harry, Ron and Hermione flee from Bill and Fleurs’s wedding from Voldemort?",
    optionA: "Oxford Circus",
    optionB: "Tottenham court road",
    optionC: "Picadily Circus",
    optionD: "Trafalgar Square",
    correctOption: "optionB", //Q35
  },

  {
    question:
      "What was the name of the Irish chaser that scored the first goal in the Quidditch World Cup?",
    optionA: "Mullet",
    optionB: "Troy",
    optionC: "Moran",
    optionD: "Conolly",
    correctOption: "optionB", //Q36
  },

  {
    question: "How many Horcruxes were made?",
    optionA: "10",
    optionB: "7",
    optionC: "8",
    optionD: "6",
    correctOption: "optionC", //Q37
  },

  {
    question: "Hannah Abbott is sorted into which house?",
    optionA: "Slytherin",
    optionB: "Ravenclaw",
    optionC: "Gryffindor",
    optionD: "Hufflepuff",
    correctOption: "optionD", //Q38
  },

  {
    question:
      "What is the Quidditch foul where a player uses their elbows to hurt another player?",
    optionA: "Blagging",
    optionB: "Flacking",
    optionC: "Blatching",
    optionD: "Cobbing",
    correctOption: "optionD", //Q39
  },

  {
    question: 'Who said,"The wand chooses the wizard, Mr. Potter."',
    optionA: "Ollivander",
    optionB: "Dumbledore",
    optionC: "Hagrid",
    optionD: "Hermione",
    correctOption: "optionA", //Q40
  },

  {
    question: "How many ingredients did the polyjuice potion have?",
    optionA: "Nine",
    optionB: "Seven",
    optionC: "Eight",
    optionD: "Five",
    correctOption: "optionB", //Q41
  },

  {
    question:
      "What is the first line in the film, 'Harry Potter And The Philosopher's Stone'?",
    optionA: "I should have known that you would be here.",
    optionB: "Fancy seeing you here, Professor McGonagall.",
    optionC: "Good evening, Professor McGonagall.",
    optionD: "Are the rumors true, Albus?",
    correctOption: "optionA", //Q42
  },

  {
    question:
      "What Was The Exact Time That Harry & Hermione Went Back In Time To Using The Time-Turner? (Prisoner Of Azkaban film)",
    optionA: "6:30",
    optionB: "5:30",
    optionC: "8:30",
    optionD: "7:30",
    correctOption: "optionD", //Q43
  },

  {
    question: "What is Aberforth Dumbledore's Patronus?",
    optionA: "A Hare",
    optionB: "An Otter",
    optionC: "Goat",
    optionD: "Phoenix",
    correctOption: "optionC", //Q44
  },

  {
    question: "When was the first Harry Potter film released?",
    optionA: "2000",
    optionB: "2001",
    optionC: "2003",
    optionD: "1999",
    correctOption: "optionB", //Q45
  },

  {
    question:
      "How many copies of Harry Potter and the Philosopher's Stone were printed in the book's first print run?",
    optionA: "100",
    optionB: "250",
    optionC: "500",
    optionD: "300",
    correctOption: "optionC", //Q46
  },

  {
    question:
      "Which of these species is considered a 'being' rather than a beast or spirit under magical law?",
    optionA: "Leprechauns",
    optionB: "Merpeople",
    optionC: "Centaurs",
    optionD: "Veela",
    correctOption: "optionD", //Q47
  },

  {
    question:
      "After escaping from the Chamber of Secrets with Fawkes, where do Ron, Harry, Ginny, and Professor Lockhart go?",
    optionA: "Professor's McGonagall's Office",
    optionB: "Professor Snape Office",
    optionC: "Professor Dumbledore Office",
    optionD: "Professor Fortinbras Office",
    correctOption: "optionA", //Q48
  },

  {
    question: "Which professional Quidditch team does Cho Chang support?",
    optionA: "Montrose Magpies",
    optionB: "Wigtown Wanderers",
    optionC: "Tutshill Tornados",
    optionD: "Ballycastle Bats",
    correctOption: "optionC", //Q49
  },

  {
    question:
      "Which Of The Following Is NOT A Bertie Bott’s Every Flavour Bean?",
    optionA: "Tripe",
    optionB: "Onion",
    optionC: "Spinach",
    optionD: "Earwax",
    correctOption: "optionB", //Q50
  },

  {
    question:
      "At the end of 'Harry Potter And The Philosopher's Stone', what was the final number of points that Gryffindor and Slytherin had?",
    optionA: "420 and 490",
    optionB: "485 and 485",
    optionC: "482 and 472",
    optionD: "486 and 470",
    correctOption: "optionC", //Q51
  },

  {
    question:
      "What is the name of Dudley's friend who accompanies the Dursleys and Harry Potter to the zoo?",
    optionA: "Piers",
    optionB: "Dennis",
    optionC: "Gordon",
    optionD: "Malcolm",
    correctOption: "optionA", //Q52
  },

  {
    question: "What day was Lily Potter born?",
    optionA: "January 30, 1962",
    optionB: "January 30, 1958",
    optionC: "January 30, 1956",
    optionD: "January 30, 1960",
    correctOption: "optionD", //Q53
  },

  {
    question: "Who said, 'Nitwit!' 'Blubber!' 'Oddment!' Tweak!'?",
    optionA: "Filius Flitwick",
    optionB: " Albus Dumbledore",
    optionC: "Dolores Umbridge",
    optionD: "Sybill Trelawney",
    correctOption: "optionB", //Q54
  },

  {
    question:
      "Which potion was used to awaken the princess given the Draught of Living Death?",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "Wiggenweld Potion",
    correctOption: "optionD", //Q55
  },

  {
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: "optionA", //Q53
  },
];
