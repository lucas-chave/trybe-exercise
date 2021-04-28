import Pokemon from './components/Pokemon';


function App() {
  const pokemon = {
    id: 78,
    name: "Rapidash",
    type: 'Fire',
    averageWeight: {
        value: '95',
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
  }
 
  return ( 
    <div>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
 