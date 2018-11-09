import PropTypes from 'prop-types';
import Header from './Header';
import '../css/style.css';

const layoutStyle = {
  padding: 40,
  border: '1px solid #DDD',
  backgroundColor: 'rgb(238, 197, 230)',
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Layout;
