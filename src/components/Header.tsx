"use client"
import Link from 'next/link';
import './Header.css';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const getToggleState = () => {
    if (theme === 'dark') return 'active';
    if (theme === 'light') return 'light';
    return '';
  };

  return (
    <header className="header">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="theme-toggle">
        <button 
          className={getToggleState()}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'} theme`}
        />
      </div>
    </header>
  );
} 