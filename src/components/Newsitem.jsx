const Newsitem = ({ title, description, src, url }) => {
    return (
      <div className="card my-3 bg-dark text-light mx-auto" style={{ maxWidth: "345px" }}>
        <img
          src={src || 'https://via.placeholder.com/345x200?text=No+Image+Available'}
          className="card-img-top mx-auto" // Centers the image horizontally
          alt="News"
          style={{ width: '100%' }} // Ensures the image takes up the full card width
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description ? description : 'No description available.'}
          </p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default Newsitem;
  