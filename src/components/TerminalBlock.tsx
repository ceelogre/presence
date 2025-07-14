import styles from './TerminalBlock.module.css';
import { ReactNode } from 'react';

interface TerminalBlockProps {
  children: ReactNode;
  prompt?: string;
}

export default function TerminalBlock({ children, prompt = '$' }: TerminalBlockProps) {
  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <span className={styles.dot} style={{ background: 'var(--color-editor-red)' }} />
        <span className={styles.dot} style={{ background: 'var(--color-editor-yellow)' }} />
        <span className={styles.dot} style={{ background: 'var(--color-editor-green)' }} />
      </div>
      <pre className={styles.code}>
        <code>
          <span className={styles.prompt}>{prompt}</span> {children}
        </code>
      </pre>
    </div>
  );
} 