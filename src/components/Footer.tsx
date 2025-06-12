export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          © {new Date().getFullYear()} Samuel Nishimwe. All rights reserved.
        </div>
        <div className="footer-message">
            <p>Made with ❤️ in Kigali</p>
        </div>
      </div>
    </footer>
  );
} 