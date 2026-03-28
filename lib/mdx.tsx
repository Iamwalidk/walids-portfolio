import fs from "node:fs/promises";
import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";

type MdxResult = {
  content: React.ReactNode;
  frontmatter: Record<string, unknown>;
};

const mdxComponents = {
  pre: CodeBlock,
  Callout,
};

export async function getProjectMdx(slug: string): Promise<MdxResult | null> {
  const sourcePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`);

  try {
    const source = await fs.readFile(sourcePath, "utf8");
    const { content, frontmatter } = await compileMDX({
      source,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      content,
      frontmatter,
    };
  } catch {
    return null;
  }
}
