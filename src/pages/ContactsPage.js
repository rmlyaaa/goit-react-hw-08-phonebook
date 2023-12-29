import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { featchContacts } from '../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { AddContact } from 'components/AddContact/AddContact';
import { Box } from '@mui/material';

export default function ContactsPage() {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(featchContacts());
  }, [dispath]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AddContact />
        <Box sx={{ width: 1 }}>
          <Filter />
          <ContactList />
        </Box>
      </Box>
    </>
  );
}
