import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const dispath = useDispatch();
  return (
    <>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        type="text"
        sx={{ mt: 4 }}
        onChange={evt => dispath(changeFilter(evt.target.value))}
      />
    </>
  );
};
