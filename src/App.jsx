import React from 'react'
import { useState } from 'react';
import BookCard from './Components/BookCard';
import AddBookModal from './Components/AddBookModal';

const App = () => {
  // ✅ Храним книги в useState
  const [books, setBooks] = useState([
    {
      title: "Tafsir Hilal",
      author: "Hilol Nashr",
      image: "https://kitoblardunyosi.uz/image/cache/catalog/tasfir%20hilol-228x342.jpg",
      description: "Muqaddas Qur'on tafsirining zamonaviy talqini. Har bir sura va oyatning ma'nosi va tafsiri sodda tilda bayon etilgan."
    },
    {
      title: "Ulamolar Nasihatda Yolgʻonchi Qadri",
      author: "Shayx Muhammad Sodiq",
      image: "https://kitoblardunyosi.uz/image/cache/catalog/nasihat-228x342.jpg",
      description: "Islom ulamolarining donishmandlikka toʻla nasihatlari, yoshlar va kattalar uchun birdek foydali."
    },
    {
      title: "Ikki Eshik Orasi",
      author: "Tohir Malik",
      image: "https://kitoblardunyosi.uz/image/cache/catalog/ikki%20eshik%20orasi-228x342.jpg",
      description: "Oʻzbek adabiyotidagi mashhur detektiv roman. Sirli hodisalar va ruhiy kechinmalar bilan boyitilgan."
    },
    {
      title: "Oʻtkan Kunlar",
      author: "Abdulla Qodiriy",
      image: "https://kitoblardunyosi.uz/image/cache/catalog/otkan%20kunlar-228x342.jpg",
      description: "Oʻzbek klassik adabiyotining durdonasi. XIX asr Turkistonining ijtimoiy hayotini aks ettiruvchi sevgi va fidoiylik haqida roman."
    },
    {
      title: "Utruniy Oqshomlar",
      author: "Ortiq Khojiyev",
      image: "https://kitoblardunyosi.uz/image/cache/catalog/utruniy-228x342.jpg",
      description: "Hayotiy tajribaga boy, falsafiy qarashlar bilan toʻla hikoyalar toʻplami."
    },
    {
      title: "Qorongʻu Koʻchalar",
      author: "Azizbek Nur",
      image: "https://kitoblardunyosi.uz/image/cache/catalog/dark-streets-228x342.jpg",
      description: "Jinoyat va adolat orasidagi kurash, real voqealarga asoslangan zamonaviy detektiv hikoya."
    }
  ]);

  // ✅ Добавление новой книги
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="min-h-screen bg-blue-100 px-8 py-6">
      <h1 className="text-3xl font-bold mb-4 text-black">MY Books test</h1>
      <h2>salom dunyo</h2>
      <AddBookModal onAdd={handleAddBook}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book}/>
        ))}
      </div>

      <div>
        <h1> 
          kjbqerbqejb
          <p>sa;mf;amsf
            
          </p>
        </h1>
      </div>
    </div>
  )
}

export default App









// import React from "react";
// import AxiosData from "./AxiosData";

// const App = () => {
//   return (
//     <div>
//       <AxiosData />
//     </div>
//   );
// };

// export default App;
