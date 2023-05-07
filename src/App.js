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

const italianWords = [
  { italian: "Ciao", english: "Hello" },
  { italian: "Grazie", english: "Thank you" },
  { italian: "Prego", english: "You're welcome" },
  { italian: "Mi chiamo", english: "My name is" },
  { italian: "Come stai?", english: "How are you?" },
  { italian: "Sì", english: "Yes" },
  { italian: "No", english: "No" },
  { italian: "Per favore", english: "Please" },
  { italian: "Scusa", english: "Excuse me" },
  { italian: "Arrivederci", english: "Goodbye" },
  { italian: "Buongiorno", english: "Good morning" },
  { italian: "Buonasera", english: "Good evening" },
  { italian: "Buonanotte", english: "Good night" },
  { italian: "Casa", english: "House" },
  { italian: "Amico", english: "Friend" },
  { italian: "Famiglia", english: "Family" },
  { italian: "Cibo", english: "Food" },
  { italian: "Acqua", english: "Water" },
  { italian: "Vino", english: "Wine" },
  { italian: "Pane", english: "Bread" },
  { italian: "Carne", english: "Meat" },
  { italian: "Pesce", english: "Fish" },
  { italian: "Frutta", english: "Fruit" },
  { italian: "Verdura", english: "Vegetable" },
  { italian: "Dolce", english: "Dessert" },
  { italian: "Tavolo", english: "Table" },
  { italian: "Sedia", english: "Chair" },
  { italian: "Cucina", english: "Kitchen" },
];

function App() {
  const [score, setScore] = useState(0);
  const [language, setLanguage] = useState("french");
  const [currentWord, setCurrentWord] = useState(getRandomWord(language));

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
    setCurrentWord(getRandomWord(e.target.value));
  }

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
        <h1>Learn French or Italian</h1>
        <div className="score">Score: {score}</div>
        <select value={language} onChange={handleLanguageChange}>
          <option value="french">French</option>
          <option value="italian">Italian</option>
        </select>
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

