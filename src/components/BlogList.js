import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog-card">
          <div
            className="photo"
            style={{ backgroundImage: `url(${blog.image})` }}
          ></div>
          <div className="blog-body">
            <Link to={`/blogs/${blog.id}`}>
              <div className="blog-body-header">
                <div className={`blog-tag blog-tag-${blog.category}`}>
                  {blog.category}
                </div>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
              </div>
            </Link>
            <div className="blog-body-footer">
              <h4>Posted By: {blog.author}</h4>
              <small>{blog.date}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
