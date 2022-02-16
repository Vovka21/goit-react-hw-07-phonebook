import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../form/ContactForm';
import ContactList from '../list/list';
import Filter from '../filter/filter';
import './view.css';
import contactsOperations from '../../redux/contacts/operations';

class View extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <h2 className="title-contacts">Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
