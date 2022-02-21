const getFilter = state => state.filter;
export default getFilter;

// export const getContacts = state => state.contacts.items;
// export const getfilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   if (filter !== '') {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   } else {
//     return contacts;
//   }
// };
