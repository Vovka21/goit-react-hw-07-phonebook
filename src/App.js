import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import View from './components/view/View';

const App = () => (
  <>
    <div>
      <Link to="/contacts">Contacts</Link>
    </div>

    <Routes>
      <Route path="/contacts" element={<View />} />
    </Routes>
  </>
);

export default App;
