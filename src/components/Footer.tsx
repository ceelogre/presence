export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <span>© {new Date().getFullYear()} Samuel Nishimwe. All rights reserved.</span>
        </div>
        <div className="footer-message">
            <span>Made with ❤️ in Kigali</span>
        </div>
      </div>
    </footer>
  );
} 