export default function newsDetails() {
  return (
    <div className="news-details-container">
      <header className="news-header">
        <h1>Article Title</h1>
        <div className="meta-info">
          <span className="date">January 1, 2023</span>
          <span className="author">By John Doe</span>
        </div>
      </header>
      
      <div className="news-content">
        <img 
          src="/images/article-image.jpg" 
          alt="Article featured image" 
          className="featured-image"
        />
        
        <p className="lead-paragraph">
          This is the leading paragraph of the news article that summarizes the key points.
        </p>
        
        <section className="article-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            Maecenas vel tincidunt quam. Duis vitae pellentesque enim.
          </p>
          
          <h2>Article Subheading</h2>
          
          <p>
            Proin eget magna sed dui tempor laoreet. Donec ac ligula nec enim
            consectetur sollicitudin. Morbi id tincidunt nibh, in varius risus.
          </p>
          
          <blockquote>
            "This is an important quote from the article that deserves emphasis."
          </blockquote>
          
          <p>
            Cras ut felis sed libero consequat molestie. Maecenas eu urna ac eros
            dignissim commodo eu ac lectus.
          </p>
        </section>
      </div>
      
      <footer className="article-footer">
        <div className="tags">
          <span className="tag">News</span>
          <span className="tag">Technology</span>
          <span className="tag">Updates</span>
        </div>
        
        <div className="share-buttons">
          <button>Share on Twitter</button>
          <button>Share on Facebook</button>
        </div>
      </footer>
    </div>
  );
}