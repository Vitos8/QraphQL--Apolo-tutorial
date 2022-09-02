import React from 'react';
import Card from "./components/card/Card";
import {GET_CHARACTERS} from "./apollo/characters";
import { useQuery } from '@apollo/client';
import Spinner from './components/Spinner/Spinner';
import Search from './components/Search/Search';
import Paginate from './components/paginate/Paginate';

function App() {
  const [characters, setCharacters] = React.useState(null);
  const {loading, error, data } = useQuery(GET_CHARACTERS);

  if (error ) return <h2 className="text-center text-xl">{error.message}</h2>  

  if (loading) return <Spinner/>;

  let onSetCharacters = () => {
    setCharacters(data.characters.results);
  };

  let searchValue = (newCharacters) => {
    setCharacters(newCharacters);
  };

  let paginateValue = (newCharacters) => {
    setCharacters(newCharacters && newCharacters.length > 0 ? newCharacters : characters);
  };

  return (
    <section class="bg-gray-50">
      <div class="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl mx-auto text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">Rick and Morty,<strong class="font-extrabold text-red-700 sm:block">QraphQL, Apollo client api's example.</strong></h1>
          <p class="mt-4 sm:leading-relaxed sm:text-xl">Click to the button below to get some Rick any Morty's characters.</p>
          <div class="flex flex-wrap justify-center mt-8 gap-4">
            <a onClick={onSetCharacters} class="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring" href="#characters">Get Characters</a>
          </div>
        </div>
      </div>
      {characters && <div className="bg-indigo-500  py-10">
        <div id='characters' class="px-5 max-w-[1250px] mx-auto ">
        <Search searchValue={searchValue}/>
        <Paginate onSetPaginateValue={paginateValue} />
        <div className=" py-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
          { characters && characters?.map( (item) => (
            <div key={item.id}className="">
              <Card item={item}/>
            </div>
          )) }
          </div>
          </div>  
        </div>}
    </section>
  );    
}

export default App;
