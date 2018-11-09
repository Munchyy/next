import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import '../css/style.css';

const PostLink = ({ title }) => (
  <li>
    <Link href={`post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default () => (
  <div>
    <Layout>
      <div>
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Next.js is great" />
          <PostLink title="Deploy apps with next" />
        </ul>
      </div>
    </Layout>
  </div>
);
