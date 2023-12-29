import {
  Box,
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  deleteContacts,
  updateContacts,
} from '../../redux/contacts/operations';
import { useMemo, useState } from 'react';

export const ContactItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [bgColor, setBgColor] = useState('');
  const dispath = useDispatch();

  useMemo(
    () =>
      setBgColor(
        `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`
      ),
    []
  );

  const handleUpdate = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispath(
      updateContacts({
        contactId: contact.id,
        credentials: {
          name: form.elements.name.value,
          number: form.elements.number.value,
        },
      })
    );
    setIsEdit(false);
  };

  return (
    <>
      {isEdit ? (
        <Box component={'form'} onSubmit={evt => handleUpdate(evt)}>
          <CardContent sx={{ width: 200 }}>
            <Box
              sx={{
                width: 150,
                height: 150,
                pt: 5,
                bgcolor: bgColor,
                // borderRadius: 100,
                ml: 3,
              }}
            >
              <Typography
                textAlign={'center'}
                sx={{ fontSize: 40, color: 'white' }}
              >
                {contact.name}
              </Typography>
            </Box>

            <TextField
              label="Number"
              variant="standard"
              name="number"
              type="tel"
              defaultValue={contact.number}
              sx={{ mt: 1 }}
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              sx={{ ml: 2, mr: 3, fontSize: 18 }}
              size="small"
            >
              Save
            </Button>
            <Button
              sx={{ fontSize: 18 }}
              size="small"
              onClick={() => dispath(deleteContacts(contact.id))}
            >
              Delete
            </Button>
          </CardActions>
        </Box>
      ) : (
        <div>
          <CardContent sx={{ width: 200 }}>
            <Box
              sx={{
                width: 150,
                height: 150,
                pt: 5,
                bgcolor: bgColor,
                borderRadius: 50,
                ml: 3,
              }}
            >
              <Typography
                textAlign={'center'}
                sx={{ fontSize: 40, color: 'white' }}
              >
                {contact.name}
              </Typography>
            </Box>

            <Typography
              textAlign={'center'}
              variant="body2"
              sx={{ fontSize: 30, ml: 3 }}
            >
              {contact.number}
            </Typography>
          </CardContent>{' '}
          <CardActions>
            <Button
              type="button"
              onClick={() => {
                setIsEdit(true);
              }}
              sx={{ ml: 2, mr: 3, fontSize: 18 }}
              size="small"
            >
              Edit
            </Button>
            <Button
              sx={{ fontSize: 18 }}
              size="small"
              onClick={() => dispath(deleteContacts(contact.id))}
            >
              Delete
            </Button>
          </CardActions>
        </div>
      )}
    </>
  );
};
