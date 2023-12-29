import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/contacts/contactsSelectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      {visibleContacts.length > 0 && (
        <Grid container spacing={6} sx={{ ml: 1 }}>
          {visibleContacts.map(contact => (
            <Grid item key={contact.id}>
              <ContactItem contact={contact} />
            </Grid>
          ))}
        </Grid>
      )}
      {isLoading && <Loader />}
      {error && <b>{error}, please reload page</b>}
    </>
  );
};
