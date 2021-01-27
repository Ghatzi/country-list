import { Typography, Link, Box } from '@material-ui/core';

const Cards = ({ countries }) =>
  countries.map(c => (
    <div className="card-list" key={c._id}>
      <img src={c.flag.svgFile} alt={c.name} />
      <Typography variant="h5">
        {c.name}, <i>{c.nativeName}</i>
      </Typography>
      <Typography variant="body1">Capital: {c.capital}</Typography>
      <Typography variant="body1">
        Population: {c.population.toLocaleString()}
      </Typography>
      <Typography variant="body1">
        Spoken Languages:{' '}
        <ul>
          {c.officialLanguages.slice(0, 5).map(l => (
            <li key={l._id}>{l.name}</li>
          ))}
        </ul>
      </Typography>
      <Box mt={2}>
        <Link href="/" title="read more">
          <Typography variant="body2">
            Read more about {c.name} &rarr;
          </Typography>
        </Link>
      </Box>
    </div>
  ));

export default Cards;
