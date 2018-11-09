import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import '../css/style.css';

const PostLink = ({ title, id }) => (
  <li>
    <Link as={`/p/${id}`} href={`post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default () => (
  <div>
    <Layout>
      <div>
        <h1>My Blog</h1>
        <ul>
          <PostLink id="hello-nextjs" title="Hello Next.js" />
          <PostLink id="learn-nextjs" title="Learn Next.js is great" />
          <PostLink id="deploy-nextjs" title="Deploy apps with next" />
        </ul>
      </div>
    </Layout>
  </div>
);
