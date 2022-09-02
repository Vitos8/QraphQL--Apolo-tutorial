import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
     query GET_CHARACTERS {
          characters {
               results {
                    name
                    status
                    id
                    type
                    gender
                    image
                    species
               }
          }
     }
`;

export const SEARCH_CHARACTERS = gql`
     query SEARCH_CHARACTER($name: String) {
          characters(filter: { name: $name }) {
               results {
                    name
                    status
                    species
                    id
                    type
                    gender
                    image
               }
          }
     }
`;

export const GET_CHARACTERS_BY_PAGE = gql`
     query GET_CHARACTERS_BY_PAGE($Page: Int) {
          characters(page: $Page) {
               results {
                    name
                    status
                    species
                    id
                    type
                    gender
                    image
               }
          }
     }
`;
