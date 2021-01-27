import { gql } from '@apollo/client';

export const LOAD_COUNTRIES = gql`
  query {
    Country {
      _id
      name
      capital
      nativeName
      population
      flag {
        svgFile
      }
      officialLanguages {
        _id
        name
      }
    }
  }
`;
