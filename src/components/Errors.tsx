import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Errors() {
  const categories = [
    {
      id: "first-error",
      name: "First Error",
    },
    {
      id: "second-error",
      name: "Second Error",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Errors</CardTitle>
        <CardDescription>
          Errors occurs during this project development
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="first-error">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="first-error">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2>Code</h2>
                <pre className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="language-yaml">
                    {`name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out`}
                  </code>
                </pre>
              </div>
              <div>
                <h2>Error</h2>
                <pre className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="language-yaml ">
                    {`
Run npm ci
  npm ci
  shell: /usr/bin/bash -e {0}
npm error code EUSAGE
npm error
npm error The "npm ci" command can only install with an existing package-lock.json or
npm error npm-shrinkwrap.json with lockfileVersion >= 1. Run an install with npm@5 or
npm error later to generate a package-lock.json file, then try again.
npm error
npm error Clean install a project
npm error
npm error Usage:
npm error npm ci
npm error
npm error Options:
npm error [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
npm error [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
npm error [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
npm error [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
npm error [--no-bin-links] [--no-fund] [--dry-run]
npm error [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
npm error [-ws|--workspaces] [--include-workspace-root] [--install-links]
npm error
npm error aliases: clean-install, ic, install-clean, isntall-clean
npm error
npm error Run "npm help ci" for more info
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2025-03-26T14_06_20_271Z-debug-0.log
Error: Process completed with exit code 1.

                            
                            `}
                  </code>
                </pre>
              </div>
              <div>
                <h2>Resolution</h2>
                <pre className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="language-yaml">
                    {`name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install

      - name: Build
        run: bun run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
`}
                  </code>
                </pre>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="second-error">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h1>Cause</h1>
                <pre className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code>
                    {`<CardDescription>
How GitHub's tools power modern CI/CD workflows
</CardDescription>
 <p className="text-slate-700 dark:text-slate-300 mb-4">
It's perfect for hosting documentation, portfolios, project
pages, or even full websites directly from your GitHub repository.
</p>
`}
                  </code>
                </pre>
              </div>
              <div>
                <h2>Error</h2>
                <pre className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="language-yaml ">
                    {`
Run bun run build
$ next build
⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

   ▲ Next.js 15.2.4

   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...

Failed to compile.

./src/components/github-section.tsx
16:21  Error: "'" can be escaped with "&apos;", "&lsquo;", "&#39;", "&rsquo;".  react/no-unescaped-entities
101:21  Error: "" can be escaped with "&apos;", "&lsquo;", "&#39;", "&rsquo;".  react/no-unescaped-entities

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
error: script "build" exited with code 1
Error: Process completed with exit code 1.
                            
                            `}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h2>Resolution</h2>
              <pre className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg overflow-x-auto">
                <code className="language-yaml">
                  {`<CardDescription>
How GitHub&apos;s tools power modern CI/CD workflows
</CardDescription>

<p className="text-slate-700 dark:text-slate-300 mb-4">
It&apos;s perfect for hosting documentation, portfolios,
project pages, or even full websites directly from your GitHub
repository.
</p>
`}
                </code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
