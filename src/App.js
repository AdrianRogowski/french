import React, { useState, useEffect } from "react";
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
  { italian: "La montagna", english: "Mountain" },
  { italian: "Il fiume", english: "River" },
  { italian: "La città", english: "City" },
  { italian: "Il villaggio", english: "Village" },
  { italian: "Il mare", english: "Sea" },
  { italian: "La spiaggia", english: "Beach" },
  { italian: "L'isola", english: "Island" },
  { italian: "Il deserto", english: "Desert" },
  { italian: "La foresta", english: "Forest" },
  { italian: "Il giardino", english: "Garden" },
  { italian: "L'albero", english: "Tree" },
  { italian: "Il fiore", english: "Flower" },
  { italian: "L'erba", english: "Grass" },
  { italian: "La foglia", english: "Leaf" },
  { italian: "Il cibo", english: "Food" },
  { italian: "La frutta", english: "Fruit" },
  { italian: "La verdura", english: "Vegetable" },
  { italian: "Il pane", english: "Bread" },
  { italian: "Il pesce", english: "Fish" },
  { italian: "La carne", english: "Meat" },
  { italian: "Il pollo", english: "Chicken" },
  { italian: "Il formaggio", english: "Cheese" },
  { italian: "Il riso", english: "Rice" },
  { italian: "La pasta", english: "Pasta" },
  { italian: "Il gelato", english: "Ice cream" },
  { italian: "Il dolce", english: "Dessert" },
  { italian: "Il caffè", english: "Coffee" },
  { italian: "Il tè", english: "Tea" },
  { italian: "L'acqua", english: "Water" },
  { italian: "Il succo", english: "Juice" },
  { italian: "La birra", english: "Beer" },
  { italian: "Il vino", english: "Wine" },
  { italian: "Lo zaino", english: "Backpack" },
  { italian: "Il libro", english: "Book" },
  { italian: "La penna", english: "Pen" },
  { italian: "Il giornale", english: "Newspaper" },
  { italian: "La rivista", english: "Magazine" },
  { italian: "Il computer", english: "Computer" },
  { italian: "Il cellulare", english: "Cellphone" },
  { italian: "La chiave", english: "Key" },
  { italian: "L'orologio", english: "Watch" },
  { italian: "L'ombrello", english: "Umbrella" },
  { italian: "Il portafoglio", english: "Wallet" },
  { italian: "Il cappello", english: "Hat" },
  { italian: "La scarpa", english: "Shoe" },
  { italian: "La camicia", english: "Shirt" },
  { italian: "La giacca", english: "Jacket" },
  { italian: "Stazione", english: "Station" },
{ italian: "Aeroporto", english: "Airport" },
{ italian: "Albergo", english: "Hotel" },
{ italian: "Ristorante", english: "Restaurant" },
{ italian: "Negozio", english: "Shop" },
{ italian: "Farmacia", english: "Pharmacy" },
{ italian: "Bar", english: "Café" },
{ italian: "Spiaggia", english: "Beach" },
{ italian: "Museo", english: "Museum" },
{ italian: "Biblioteca", english: "Library" },
{ italian: "Ospedale", english: "Hospital" },
{ italian: "Stadio", english: "Stadium" },
{ italian: "Cinema", english: "Cinema" },
{ italian: "Teatro", english: "Theater" },
{ italian: "Chiesa", english: "Church" },
{ italian: "Piazza", english: "Square" },
{ italian: "Parco", english: "Park" },
{ italian: "Banca", english: "Bank" },
{ italian: "Scuola", english: "School" },
{ italian: "Università", english: "University" },
{ italian: "Ufficio", english: "Office" },
{ italian: "Supermercato", english: "Supermarket" },
{ italian: "Panetteria", english: "Bakery" },
{ italian: "Macelleria", english: "Butcher" },
{ italian: "Fioraio", english: "Florist" },
{ italian: "Pescivendolo", english: "Fishmonger" },
{ italian: "Fruttivendolo", english: "Greengrocer" },
{ italian: "Mercato", english: "Market" },
{ italian: "Edicola", english: "Newsstand" },
{ italian: "Tabaccheria", english: "Tobacco shop" },
{ italian: "Autobus", english: "Bus" },
{ italian: "Treno", english: "Train" },
{ italian: "Taxi", english: "Taxi" },
{ italian: "Metro", english: "Subway" },
{ italian: "Tram", english: "Tram" },
{ italian: "Bicicletta", english: "Bicycle" },
{ italian: "Motocicletta", english: "Motorcycle" },
{ italian: "Macchina", english: "Car" },
{ italian: "Aereo", english: "Airplane" },
{ italian: "Nave", english: "Ship" },
{ italian: "Barca", english: "Boat" },
{ italian: "Lavoro", english: "Work" },
{ italian: "Divertimento", english: "Fun" },
{ italian: "Vacanza", english: "Vacation" },
{ italian: "Viaggio", english: "Trip" },
{ italian: "Amore", english: "Love" },
{ italian: "Amicizia", english: "Friendship" },
{ italian: "Felicità", english: "Happiness" },
];

function App() {
  const [score, setScore] = useState(0);
  const [language, setLanguage] = useState("french");
  const [currentWord, setCurrentWord] = useState(getRandomWord(language));
  const [choices, setChoices] = useState(generateChoices(currentWord.translation));
  const [message, setMessage] = useState("");

  useEffect(() => {
    setChoices(generateChoices(currentWord.translation));
  }, [currentWord]);

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
    setCurrentWord(getRandomWord(e.target.value));
  }

  function getRandomWord(language) {
    const words = language === "french" ? frenchWords : italianWords;
    const randomWord = words[Math.floor(Math.random() * words.length)];
  
    return {
      word: language === "french" ? randomWord.french : randomWord.italian,
      translation: randomWord.english
    };
  }

  function generateChoices(correct) {
    let choices = [correct];
    const words = language === "french" ? frenchWords : italianWords;
    const uniqueWords = words.filter(word => word.english !== correct);

    while (choices.length < 6) {
      const randomWord = uniqueWords[Math.floor(Math.random() * uniqueWords.length)].english;
      if (!choices.includes(randomWord)) {
        choices.push(randomWord);
      }
    }

    return choices.sort(() => Math.random() - 0.5);
  }

  function checkAnswer(answer) {
    if (answer === currentWord.translation) {
      setScore(score + 1);
      setMessage(`Correct! ${currentWord.word} means ${currentWord.translation}`);
      setCurrentWord(getRandomWord(language));
    } else {
      setMessage("Incorrect");
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
      <p className="message">
        {message}
      </p>
      <div className="flashcard">
      < h2>{currentWord.word}</h2>
        <ul>
        {choices.map((choice, index) => (
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

