import React from 'react';
import './App.css';

const puppies = [
  {
    name: 'Pat',
    img:
      'https://i.pinimg.com/originals/39/6f/14/396f14bd9c68652906500047d677356c.jpg',
  },
  {
    name: 'Dexter',
    img:
      'https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog?w=1440&auto=compress&fm=jpg',
  },
  {
    name: 'Clifford',
    img:
      'http://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg',
  },
  {
    name: 'Deno',
    img:
      'http://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg',
  },
];

function App() {
  const [puppiesAreVisible, setPuppiesAreVisible] = React.useState(false);

  const handleClick = () => {
    setPuppiesAreVisible(!puppiesAreVisible);
  };

  return (
    <div className="App">
      <h1>David's Puppy List</h1>
      <button onClick={handleClick}>toggle puppies</button>
      <ul>
        {puppies.map((pup) => {
          return (
            <li key={pup.name}>
              <p>{pup.name}</p>
              {puppiesAreVisible && (
                <img
                  src={pup.img}
                  alt={`a beautiful portrait of ${pup.name}`}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
