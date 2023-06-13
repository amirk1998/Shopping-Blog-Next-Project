import axios from 'axios';

const PostPage = ({ post }) => {
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return {
    props: {
      post: data,
    },
  };
}
