import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";
import javascript from "highlight.js/lib/languages/javascript";
import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

hljs.registerLanguage("javascript", javascript);

type Props = {
  code: string;
};

function CodeJs({ code }: Props) {
  const highlightedCode = hljs.highlight(code, {
    language: "javascript",
  }).value;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <section className="mb-12 mt-8 rounded-lg relative w-full max-w-2xl">
      <div className="flex justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={copyToClipboard}
                className="absolute bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 p-1 rounded-md"
              >
                <Copy className=" w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        className={`w-full bg-stone-100 dark:bg-stone-900/70 rounded-lg overflow-auto`}
      >
        <pre>
          <code
            className="block px-4 pb-4 text-sm language-javascript"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
    </section>
  );
}

export default CodeJs;
