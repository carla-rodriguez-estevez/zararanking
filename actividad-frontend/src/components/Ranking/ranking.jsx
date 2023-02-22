import "./styles.css";
import FormControl from '@mui/material/FormControl';
import * as React from 'react';


export const Ranking = () => {
  const [ranking, setRanking] = React.useState([]);

  React.useEffect(() => {
    const fetchRanking = async () => {
      const response = await fetch('/ranking');
      const data = await response.json();
      console.log(data)

      setRanking(data);
    }

    fetchRanking();

  }, [])

  console.log(ranking)

  // TODO: https://mui.com/material-ui/react-card/#media use this component to create a list ordered in three columns (using CSS)
  // To complete exercise 5 

  //Header using normal fields

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
      </FormControl>
    </div>
  );
}