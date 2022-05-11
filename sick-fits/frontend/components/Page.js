import PropTypes from 'prop-types';
import Header from './Header.js';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h1>RidOF</h1>
      {children}
    </div>
  );
}

Page.PropTypes = {
  children: PropTypes.any,
};
