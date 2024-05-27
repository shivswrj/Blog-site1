import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <BlogPost postData={postData} />
    </Layout>
  );
}
