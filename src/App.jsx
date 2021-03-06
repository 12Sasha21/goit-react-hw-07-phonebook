import React from 'react';
import Title from './components/Title/Title';
import SignupForm from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import './index.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="visually_hidden">Phonebook</h1>
      <Title title="Phonebook" />
      <SignupForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
}
