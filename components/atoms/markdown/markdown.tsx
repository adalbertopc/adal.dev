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
