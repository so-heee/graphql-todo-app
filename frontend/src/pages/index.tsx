import Link from 'next/link';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';

const IndexPage = () => (
  <Layout title="Home">
    <h1>Hello Next.js 👋</h1>
    <Typography variant="h4" component="h1" gutterBottom>
      Next.js example
    </Typography>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
