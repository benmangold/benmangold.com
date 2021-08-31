import remark from "remark";
import html from "remark-html";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkPresetLintMarkdownStyleGuide)
    .use(html)
    .process(markdown);
  return result.toString();
}
