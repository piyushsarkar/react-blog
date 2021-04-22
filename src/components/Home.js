import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(process.env.REACT_APP_API);

  return (
    <div className="container">
      <div className="home">
        {error && <div> {error} </div>}
        {isPending && <div> Loading... </div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    </div>
  );
};

export default Home;
