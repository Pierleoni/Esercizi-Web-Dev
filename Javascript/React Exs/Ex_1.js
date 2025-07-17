import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

//1. Componente Persona
const Persona = ({ persona }) => (
    <div className="container my-3">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Dati Anagrafici</h5>
        <p className="card-text">Nome: {persona.nome}</p>
        <p className="card-text">Cognome: {persona.cognome}</p>
        <p className="card-text">Età: {persona.eta}</p>
    </div>
    </div>
    </div>
);

//2. Componente tabellina
const Tabellina = ({ numero }) => {
    const righe = [];
    for (let i = 1; i <= 10; i++) {
        righe.push(<li key={i}>{numero} x {i} = {numero * i}</li>);
    }
    return (
    <div className="container my-3">
        <h5>Tabellina del {numero}</h5>
        <ul>{righe}</ul>
    </div>
    );
};


// 3. Componente Stampanumeri
const Stampanumeri = () => {
    const numeri = Array.from({ length: 11 }, (_, i) => i);
    return (
    <div className="container my-3">
        <h5>Numeri da 0 a 10</h5>
        <ul>
        {numeri.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
    );
};


// 4. Programma che stampa numeri da 0 a 20 con passo 2
const ContaPerDue = () => {
    const numeri = [];
    for (let i = 0; i <= 20; i += 2) {
        numeri.push(i);
    }
    console.log("Numeri da 0 a 20 con passo 2:", numeri);
    return (
    <div className="container my-3">
        <h5>Numeri da 0 a 20 (passo 2)</h5>
        <ul>
        {numeri.map(n => <li key={n}>{n}</li>)}
        </ul>
    </div>
    );
};

// 5. Componente BookList
const BookList = ({ books }) => {
    console.log("Lista libri:", books);
    return (
    <div className="container my-3">
        <h5>Lista dei libri</h5>
        <ul>
        {books.map((book, index) => <li key={index}>{book}</li>)}
        </ul>
    </div>
    );
};

// Componente Biblioteca principale
const Biblioteca = () => {
    const [books, setBooks] = useState(["1984", "Il signore degli anelli"]);
    const aggiungiLibro = (libro) => {
    setBooks([...books, libro]);
    console.log("Nuovo libro aggiunto:", libro);
    };

    return (
    <div className="container">
        <h2>Biblioteca</h2>
        <BookList books={books} />
        <AddBookForm onAdd={aggiungiLibro} />
    </div>
    );
};


// Componente principale App
const App = () => (
    <div>
    <Persona persona={{ nome: "Luca", cognome: "Rossi", eta: 30 }} />
    <Tabellina numero={7} />
    <Stampanumeri />
    <ContaPerDue />
    <Biblioteca />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

