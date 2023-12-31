import { useState } from 'react';
import Compteur from './components/Compteur';
import Navbar from './components/Navbar';
import Post from './components/Post';
import './App.css';

 function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titre: "Amani Kaso",
      description:
      "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker:false,
    },
    {
      id: 2,
      titre: "Amani Kaso",
      description:
      "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker:false,
    },
    {
      id: 3,
      titre: "Amani Kaso",
      description:
      "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker:false,
    },
    {
      id: 4,
      titre: "Amani Kaso",
      description:
      "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker:false,
    },
    {
      id: 5,
      titre: "Amani Kaso",
      description:
      "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker:false,
    },
  ]);

  const liker = (data) => {
    const donneeCopier = [...posts];
    const index = posts.indexOf(data)
    donneeCopier[index] = {...posts[index], 
      liker: !posts[index].liker };
      setPosts(donneeCopier);
  };
  const effacerPost = (id) => {
    const nouvelledonnee = posts.filter(p => p.id != id)
    setPosts(nouvelledonnee);
  };
  const nmbreLiker = posts.filter(p=>p.liker) 

  return (
    <div className='App'>
    <Navbar nombrelike = {nmbreLiker.length}/>
    {posts.map((p) => (
    <Post data={p} key={p.id} liker={liker} supression={effacerPost} />
    ))}
    </div>
  )
}

export default App;
