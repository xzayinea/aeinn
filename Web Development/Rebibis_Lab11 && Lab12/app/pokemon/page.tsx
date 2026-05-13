// export default async function PokemonPage() {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//   const pokemon = await res.json();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>{pokemon.name.toUpperCase()}</h1>
//       <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//       <p>Height: {pokemon.height}</p>
//       <p>Weight: {pokemon.weight}</p>
//     </div>
//   );
// }


export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await response.json();

  const detailedPokemon = await Promise.all(
    data.results.map(async (p: { url: string }) => {
      const res = await fetch(p.url);
      return res.json();
    })
  );

  // DEDMA SA CSS
  //!!!!!!!! :b

  return (
    <div className="min-h-screen bg-pink-50 p-8 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-8 uppercase tracking-widest"> Pokengina </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {detailedPokemon.map((pokemon) => (
          <div 
            key={pokemon.id} 
            className="bg-white p-4 rounded-2xl shadow-lg border-b-8 border-pink-400 hover:scale-105 transition-all hover:shadow-pink-200 hover:shadow-xl"
          >
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name}
              className="w-28 h-28 mx-auto"
            />
            
            <h2 className="font-black text-xl uppercase mt-2 text-pink-700">
              {pokemon.name}
            </h2>
            
            <div className="mt-3 flex justify-between text-sm font-medium bg-pink-50 p-2 rounded-lg">
              <p className="text-pink-600">Height: {pokemon.height}</p>
              <p className="text-pink-600">Weight: {pokemon.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}