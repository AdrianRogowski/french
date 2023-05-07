import React, { useState } from "react";
import "./App.css";

const frenchWords = [
  { french: "Bonjour", english: "Hello" },
  { french: "La piscine", english: "Swimming pool" },
  { french: "La bibliothèque", english: "Library" },
  { french: "Le supermarché", english: "Supermarket" },
  { french: "La pharmacie", english: "Pharmacy" },
  { french: "L'hôpital", english: "Hospital" },
  { french: "La poste", english: "Post office" },
  { french: "La banque", english: "Bank" },
  { french: "Le téléphone", english: "Telephone" },
  { french: "La police", english: "Police" },
  { french: "L'école", english: "School" },
  { french: "Le travail", english: "Work" },
  { french: "La maison", english: "House" },
  { french: "L'appartement", english: "Apartment" },
  { french: "La famille", english: "Family" },
  { french: "Les amis", english: "Friends" },
  { french: "Le temps", english: "Weather" },
  { french: "Le soleil", english: "Sun" },
  { french: "La pluie", english: "Rain" },
  { french: "Le nuage", english: "Cloud" },
  { french: "La neige", english: "Snow" },
  { french: "Le vent", english: "Wind" },
  { french: "Froid", english: "Cold" },
  { french: "Chaud", english: "Hot" },
  { french: "Lundi", english: "Monday" },
  { french: "Mardi", english: "Tuesday" },
  { french: "Mercredi", english: "Wednesday" },
  { french: "Jeudi", english: "Thursday" },
  { french: "Vendredi", english: "Friday" },
  { french: "Samedi", english: "Saturday" },
  { french: "Dimanche", english: "Sunday" },
  { french: "Le matin", english: "Morning" },
  { french: "L'après-midi", english: "Afternoon" },
  { french: "Le soir", english: "Evening" },
  { french: "La nuit", english: "Night" },
  { french: "Hier", english: "Yesterday" },
  { french: "Aujourd'hui", english: "Today" },
  { french: "Demain", english: "Tomorrow" },
  { french: "Les jours", english: "Days" },
  { french: "Les semaines", english: "Weeks" },
  { french: "Les mois", english: "Months" },
  { french: "Les années", english: "Years" },
  { french: "Janvier", english: "January" },
  { french: "Février", english: "February" },
  { french: "Mars", english: "March" },
  { french: "Avril", english: "April" },
  { french: "Mai", english: "May" },
  { french: "Juin", english: "June" },
  { french: "Juillet", english: "July" },
  { french: "Août", english: "August" },
];

function App() {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState(getRandomWord());

  function getRandomWord() {
    return frenchWords[Math.floor(Math.random() * frenchWords.length)];
  }

  function generateChoices(correct) {
    let choices = [correct];
    while (choices.length < 5) {
      const randomWord = getRandomWord().english;
      if (!choices.includes(randomWord)) {
        choices.push(randomWord);
      }
    }
    return choices.sort(() => Math.random() - 0.5);
  }

  function checkAnswer(answer) {
    if (answer === currentWord.english) {
      setScore(score + 1);
      setCurrentWord(getRandomWord());
    } else {
      setCurrentWord(getRandomWord());
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn French</h1>
        <div className="score">Score: {score}</div>
      </header>
      <div className="flashcard">
        <h2>{currentWord.french}</h2>
        <ul>
          {generateChoices(currentWord.english).map((choice, index) => (
            <li key={index}>
              <button onClick={() => checkAnswer(choice)}>{choice}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

