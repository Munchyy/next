import Link from 'next/link';
import PropTypes from 'prop-types';
import axios from 'axios';
import Layout from '../components/Layout';

const Index = ({ shows }) => (
  <Layout>
    <div>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  console.log(`Show data fetched. Count: ${data.length}`);
  return { shows: data };
};

Index.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Index;
