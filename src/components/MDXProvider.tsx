import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';
import { CodeBlock } from './CodeBlock';
import { ReactNode } from 'react';

interface MDXProviderProps {
  children: ReactNode;
}

// Custom code component that handles both inline and block code
function CustomCode({ className, children, ...props }: any) {
  // If it's a code block (has language class), use our CodeBlock
  if (className?.startsWith('language-')) {
    return <CodeBlock className={className} {...props}>{children}</CodeBlock>;
  }
  
  // For inline code, return simple styled code
  return (
    <code 
      className="bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono border border-border" 
      {...props}
    >
      {children}
    </code>
  );
}

const components = {
  code: CustomCode,
  // Remove pre mapping since code blocks are handled by the code component
};

export function MDXProvider({ children }: MDXProviderProps) {
  return (
    <BaseMDXProvider components={components}>
      {children}
    </BaseMDXProvider>
  );
}