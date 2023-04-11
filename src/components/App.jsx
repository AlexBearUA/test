import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  formSubmitHandler = userData => {
    const contact = { ...userData, id: nanoid() };
    console.log(contact);
  };
  render() {
    return <ContactForm onSubmit={this.formSubmitHandler} />;
  }
}
export default App;
