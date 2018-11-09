import axios from 'axios';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const Post = ({ show }) => (
  <Layout>
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={show.image.medium} alt="movie poster" />
    </div>
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  console.log(`Fetched show: ${data.name}`);
  return { show: data };
};

Post.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
};

export default Post;
