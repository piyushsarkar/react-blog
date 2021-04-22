import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    process.env.REACT_APP_API + id
  );

  const history = useHistory();

  const handleDelete = () => {
    fetch(process.env.REACT_APP_API + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className="blog-details">
      {error && <div className="container"> {error} </div>}
      {isPending && <div className="container"> Loading... </div>}
      {blog && (
        <article>
          <div
            className="hero"
            style={{ backgroundImage: `url(${blog.image})` }}
          >
            <div className="content">
              <div className="title">{blog.title}</div>
              <div className="sub-title">
                {blog.author} &#8226; {blog.category} &#8226; {blog.date}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="body">{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
