export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Amboru Koushik. All rights reserved.
          </p>
          <div className="footer-nav">
            <a
              href="https://www.linkedin.com/in/koushik-amboru/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="http://github.com/koushikamboru"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a href="mailto:amborukoushik@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
