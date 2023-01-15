import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Container, PhoneTitle, ContactTitle, IconWrapper } from './Contacts.styled';
import { AiOutlineApple } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

export default function Contacts() {
  return (
    <Container>
      <IconWrapper>
        <PhoneTitle>Phonebook</PhoneTitle>
        <AiOutlineApple color="#D71868" fontSize="3em" />
      </IconWrapper>
      <ContactForm />
      <IconWrapper>
        <ContactTitle>Contacts</ContactTitle>
        <AiOutlineUsergroupAdd color="#D71868" fontSize="3em" />
      </IconWrapper>
      <Filter />
      <ContactList />
    </Container>
  );
}

/*return (
    <Container>
      <IconWrapper>
        <PhoneTitle>Phonebook</PhoneTitle>
        <AiOutlineApple color="#D71868" fontSize="3em" />
      </IconWrapper>
      <ContactForm />
      <IconWrapper>
        <ContactTitle>Contacts</ContactTitle>
        <AiOutlineUsergroupAdd color="#D71868" fontSize="3em" />
      </IconWrapper>
      <Filter />
      <ContactList />
    </Container>
  );*/