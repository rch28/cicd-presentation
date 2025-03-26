import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GithubSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GitHub Actions & GitHub Pages</CardTitle>
        <CardDescription>
          How GitHub's tools power modern CI/CD workflows
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="actions">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="actions">GitHub Actions</TabsTrigger>
            <TabsTrigger value="pages">GitHub Pages</TabsTrigger>
          </TabsList>

          <TabsContent value="actions">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  What are GitHub Actions?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  GitHub Actions is a CI/CD platform that allows you to automate
                  your build, test, and deployment pipeline directly from your
                  GitHub repository.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  You can create workflows that build and test every pull
                  request to your repository, or deploy merged pull requests to
                  production.
                </p>
                <h4 className="text-lg font-medium mt-6 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Workflow automation triggered by GitHub events</li>
                  <li>
                    Matrix builds for testing across multiple environments
                  </li>
                  <li>Support for containers and virtual machines</li>
                  <li>Community-contributed actions for common tasks</li>
                </ul>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <pre className="text-sm overflow-x-auto">
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

          <TabsContent value="pages">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  What is GitHub Pages?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  GitHub Pages is a static site hosting service that takes HTML,
                  CSS, and JavaScript files straight from a repository on GitHub
                  and publishes a website.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  It's perfect for hosting documentation, portfolios, project
                  pages, or even full websites directly from your GitHub
                  repository.
                </p>
                <h4 className="text-lg font-medium mt-6 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Free hosting for public repositories</li>
                  <li>Custom domains and HTTPS support</li>
                  <li>Jekyll integration for static site generation</li>
                  <li>Seamless integration with GitHub Actions for CI/CD</li>
                </ul>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full h-48 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center">
                    <p className="text-center text-slate-500 dark:text-slate-400">
                      Your website is published at:
                      <br />
                      <span className="font-mono text-blue-600 dark:text-blue-400">
                        https://username.github.io/repository
                      </span>
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      GitHub Pages automatically serves your site from the
                      configured branch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
