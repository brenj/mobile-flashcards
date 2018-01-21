Project: A Mobile App for Studying Flashcards
=============================================

About
-----
From Udacity:
> You will build a mobile application (Android or iOS - or both) that allows
users to study collections of flashcards. The app will allow users to create
different categories of flashcards called "decks", add flashcards to those
decks, then take quizzes on those decks.

Supporting courses:
  * React Native

Platforms supported:
  * Android
  * iOS

Screenshots
-----------

* [Splash](image/screenshot/splash.png)
* [New Deck](image/screenshot/new-deck.png)

Attributions
------------
Icon made by Graphic Resources S.L from [www.flaticon.com](www.flaticon.com)
For more details see: [image/license/license.pdf](image/license/license.pdf)

Requirements
------------
* Node
* Yarn package manager (https://yarnpkg.com/en/docs/install)
* Android/iOS device with [Expo](https://expo.io/tools#client) or a device simulator

Install
-------
1. `git clone https://github.com/brenj/mobile-flashcards.git && cd mobile-flashcards`
2. `yarn install`
3. `yarn start`

Code Quality
------------
This code base adheres to the [Airbnb JavaScript/React/JSX Style Guide](https://github.com/airbnb/javascript)  
Use `yarn lint` to check syntax and style.

Code Organization
-----------------

```console
├── App.js
├── README.md
├── action
│   └── index.js
├── app.json
├── component
│   ├── Answer.js
│   ├── AppStatusBar.js
│   ├── Credits.js
│   ├── DeckDetails.js
│   ├── DeckList.js
│   ├── DeckListItem.js
│   ├── NewCard.js
│   ├── NewDeck.js
│   ├── Quiz.js
│   └── Splash.js
├── image
│   ├── license
│   │   └── license.pdf
│   └── logo.png
├── package.json
├── reducer
│   ├── decks.js
│   ├── index.js
│   └── quiz.js
└── util
    ├── api.js
    ├── colors.js
    ├── notifications.js
    └── styles.js

6 directories, 24 files
```

Grading (by Udacity)
--------------------

Criteria                  |Highest Grade Possible  |Grade Recieved
--------------------------|------------------------|--------------
Application Setup         |Meets Specifications    |
Application Functionality |Meets Specifications    |
Code Quality              |Meets Specifications    |
