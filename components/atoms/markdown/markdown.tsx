import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Link } from "~/components";

interface MarkdownProps {
  value: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ value }) => (
  <ReactMarkdown
    components={{
      h1: ({ children, node, ...rest }) => (
        <h1 className="text-5xl font-bold mb-3" {...rest}>
          {children}
        </h1>
      ),
      h2: ({ children, node, ...rest }) => (
        <h2 className="text-4xl font-bold mb-3" {...rest}>
          {children}
        </h2>
      ),
      h3: ({ children, node, ...rest }) => (
        <h3 className="text-3xl font-bold mb-3" {...rest}>
          {children}
        </h3>
      ),
      h4: ({ children, node, ...rest }) => (
        <h4 className="text-2xl font-bold mb-3" {...rest}>
          {children}
        </h4>
      ),
      h5: ({ children, node, ...rest }) => (
        <h5 className="text-xl font-bold mb-3" {...rest}>
          {children}
        </h5>
      ),
      h6: ({ children, node, ...rest }) => (
        <h6 className="text-lg font-bold mb-3" {...rest}>
          {children}
        </h6>
      ),
      p: ({ children, node, ...rest }) => (
        <p className="text-base mb-3" {...rest}>
          {children}
        </p>
      ),
      a: (props) => <Link href={props.href || "#"}>{props.children}</Link>,
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <SyntaxHighlighter
            style={theme}
            customStyle={{ borderRadius: "0.375rem" }}
            language={match[1]}
            PreTag="div"
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
    }}
  >
    {value}
  </ReactMarkdown>
);
