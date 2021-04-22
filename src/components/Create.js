import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('Personal');
  const [isPending, setIsPending] = useState(false);
  // const date = new Date().toJSON().slice(0, 10).split('-').reverse().join('-');
  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, image, category, author, date };
    setIsPending(true);

    fetch(process.env.REACT_APP_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className="container">
      <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Blog title:</label>
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="body">Blog Body:</label>
          <textarea
            name="body"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label htmlFor="image">Blog image url:</label>
          <input
            type="url"
            name="image"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="category">Blog category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Books">Books</option>
            <option value="Business">Business</option>
            <option value="Cars">Cars</option>
            <option value="DIY">DIY</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Events">Events</option>
            <option value="Fashion">Fashion</option>
            <option value="Finance">Finance</option>
            <option value="Fitness">Fitness</option>
            <option value="Food">Food</option>
            <option value="Gaming">Gaming</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Music">Music</option>
            <option value="Movies">Movies</option>
            <option value="Politics">Politics</option>
            <option value="Pets">Pets</option>
            <option value="Sports">Sports</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Writing">Writing</option>
          </select>
          <label htmlFor="author">Blog author:</label>
          <input
            type="text"
            name="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding Blog</button>}
        </form>
      </div>
    </div>
  );
};

export default Create;
