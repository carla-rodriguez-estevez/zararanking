import "./styles.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';


export const Filters = () => {
  const [category, setCategory] = React.useState('');
  const [categories, setCategories] = React.useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };


  React.useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/products/categories');
      const data = await response.json();

      setCategories(data);
    }

    fetchCategories();

  }, [])


  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="standard-label">Categories</InputLabel>
        <Select
          labelId="standard-label"
          id="standard"
          value={category}
          onChange={handleChange}
          label="Categories"
        >
          {
            categories.map(elem => <MenuItem value={elem}>{elem}</MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
  );
}