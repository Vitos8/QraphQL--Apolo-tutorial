import React from "react";

const Card = ({item}) => {
     return (
          <a data-tooltip-target="tooltip-dark" class="cursor-pointer block overflow-hidden rounded-2xl">
               <img class="object-cover w-full h-auto" src={item.image} alt="cardImg"/>
               <div class="p-4 bg-gray-900">
                    <h5 class="text-white text-xl text-center">{item.name}</h5>
                    <div className="gap-x-[50px] gap-y-4 py-5">
                         <p class=" mt-1 text-sm text-white text-center">Status:<span className={`${item.status === 'Alive' ? 'text-green-500' : 'text-red-500'}`}> {item.status}</span></p>
                         <p class=" mt-1 text-sm text-white text-center">Type: <span className="text-white"> {item.type === '' ? 'From the world' : item.type}</span></p>
                         <p class=" mt-1 text-sm text-white text-center">Gender: <span className={`${item.gender === 'Male' ? 'text-indigo-500' : 'text-pink-500'}`}> {item.gender}</span></p>
                         <p class=" mt-1 text-sm text-white text-center">Type:<span className="text-white"> {item.species}</span></p>
                    </div>
               </div> 
          </a>
     );
};

export default Card;
