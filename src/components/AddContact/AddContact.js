import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import { Box, Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import { selectContacts } from '../../redux/contacts/contactsSelectors';

export const AddContact = () => {
  const contacts = useSelector(selectContacts);
  const dispath = useDispatch();

  const handleAdd = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      return toast.error(`${form.elements.name.value} is already in conracts`);
    }

    dispath(
      addContacts({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
    toast.success('Contact add.');
  };
  return (
    <>
      <Box sx={{ display: 'flex', mr: 4, mt: 3, width: 300 }}>
        <Box
          component="form"
          flexGrow={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          noValidate
          autoComplete="off"
          onSubmit={evt => handleAdd(evt)}
        >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            margin="dense"
            type="name"
          />
          <TextField
            label="Number"
            variant="outlined"
            name="number"
            margin="dense"
            type="tel"
          />
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{ mt: 2, height: 60, fontSize: 22, backgroundColor: '#42a5f5' }}
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </>
  );
};
