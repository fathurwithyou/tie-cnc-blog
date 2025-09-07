import { useState, useRef, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import { useTheme } from 'next-themes';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string>('');
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Extract language from className (e.g., "language-javascript" -> "javascript")
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'text';
  
  // Convert children to string
  const code = String(children).replace(/\n$/, '');

  useEffect(() => {
    if (match && code) {
      codeToHtml(code, {
        lang: language,
        theme: currentTheme === 'dark' ? 'github-dark' : 'github-light',
      }).then((html) => {
        setHighlightedHtml(html);
      }).catch((err) => {
        console.error('Failed to highlight code:', err);
        setHighlightedHtml(`<pre><code>${code}</code></pre>`);
      });
    }
  }, [code, language, currentTheme, match]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // If this is a code block with language, use Shiki
  if (match) {
    return (
      <div className="relative group">
        <div 
          className="shiki-container"
          style={{
            background: 'hsl(var(--muted))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '0.5rem',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            margin: 0,
            padding: '1.5rem',
            overflow: 'auto',
            fontFamily: "'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
          }}
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted transition-colors opacity-0 group-hover:opacity-100 border border-border/50"
          aria-label="Copy code to clipboard"
          onMouseDown={(e) => e.preventDefault()}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
    );
  }

  // For code without language or pre elements without className, fall back to regular pre
  return (
    <div className="relative group">
      <pre
        className="bg-muted border border-border rounded-lg p-6 overflow-x-auto font-mono text-sm"
        {...props}
      >
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted transition-colors opacity-0 group-hover:opacity-100 border border-border/50"
        aria-label="Copy code to clipboard"
        onMouseDown={(e) => e.preventDefault()}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
}