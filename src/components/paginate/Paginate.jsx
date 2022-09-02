import React from 'react';
import { GET_CHARACTERS_BY_PAGE } from '../../apollo/characters';
import { useLazyQuery } from '@apollo/client';


const Paginate = ({onSetPaginateValue}) => {
     const [paginteValue, setPaginateValue] = React.useState(1);
     const [characters, setCharacters] = React.useState([]);
     const [executePaginate, { data }] = useLazyQuery(
          GET_CHARACTERS_BY_PAGE
     );

     // React.useEffect(() => {
     //      executePaginate({
     //           variables: { Page: 2 }
     //      });
     // },[]);

     React.useEffect(() => {
          executePaginate({
               variables: { Page: paginteValue + 1 }
          });
     },[paginteValue]);

     let decrementPaginateValue = () => {
          if(paginteValue === 1) return setPaginateValue(1);
          setPaginateValue(prev => prev - 1);
          onSetPaginateValue( data?.characters?.results);
     };

     let incrementPaginateValue = () => {
          if(paginteValue === 42) return setPaginateValue(42);
          setPaginateValue(prev => prev + 1);
          onSetPaginateValue( data?.characters?.results);
     };


     return (
          <nav className='flex justify-center' aria-label="Page navigation ">
               <ul class="inline-flex items-center -space-x-px">
                    <li>
                         <a  onClick={decrementPaginateValue} class="cursor-pointer block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                         <span class="sr-only">Previous</span>
                         <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                         </a>
                    </li>
                    <li>
                         <a class="cursor-pointer mx-1 py-2  px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{paginteValue}</a>
                    </li>
                    <li>
                         <a onClick={incrementPaginateValue}  class="cursor-pointer block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                         <span class="sr-only">Next</span>
                         <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                         </a>
                    </li>
               </ul>
          </nav>
     )
}

export default Paginate