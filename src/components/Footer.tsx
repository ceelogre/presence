'use client'

import { useEffect, useState } from "react";


export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <span>© {year} Samuel Nishimwe. All rights reserved.</span>
        </div>
        <div className="footer-message">
            <span>Made with ❤️ in Kigali</span>
        </div>
      </div>
    </footer>
  );
} 