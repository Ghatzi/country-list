import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_COUNTRIES } from './graphql/Queries';
import Cards from './components/Cards';

import { Box, Typography } from '@material-ui/core';

const GetCountries = () => {
  const { data } = useQuery(LOAD_COUNTRIES);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      setCountries(data.Country);
      console.log(data.Country);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Typography variant="h5">Loading...</Typography>}
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Cards countries={countries} />
      </Box>
    </>
  );
};

export default GetCountries;
