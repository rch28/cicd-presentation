import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function AboutProject() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About This Project</CardTitle>
        <CardDescription>
          How this website uses CI/CD principles
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg text-slate-700 dark:text-slate-300">
          This CI/CD presentation website itself is built to practice and
          implement the very CI/CD principles it explains.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Technology Stack</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
              <li>
                <strong>Framework:</strong> Next.js (React)
              </li>
              <li>
                <strong>Styling:</strong> Tailwind CSS
              </li>
              <li>
                <strong>Components:</strong> shadcn/ui
              </li>
              <li>
                <strong>Animations:</strong> Framer Motion
              </li>
              <li>
                <strong>Hosting:</strong> GitHub Pages
              </li>
              <li>
                <strong>CI/CD:</strong> GitHub Actions
              </li>
              <li>
                <strong>Icons:</strong> lucide React Icons
              </li>
              <li>
                <strong>Theme:</strong> Next Themes
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">CI/CD Pipeline</h3>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Code is pushed to the GitHub repository</li>
              <li>GitHub Actions workflow is triggered</li>
              <li>Code is linted and tested</li>
              <li>Next.js application is built as static site</li>
              <li>Built files are deployed to GitHub Pages</li>
              <li>Website is automatically updated</li>
            </ol>
          </div>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Learning Resource</AlertTitle>
          <AlertDescription>
            This project serves as both an educational resource about CI/CD and
            a practical demonstration of these principles in action.
          </AlertDescription>
        </Alert>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">GitHub Actions Workflow</h3>
          <pre className="text-sm overflow-x-auto">
            <code className="language-yaml">
              {`name: Build and Deploy
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Lint code
        run: npm run lint
      - name: Build application
        run: npm run build
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-output
          path: out/

  deploy:
    needs: build-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: build-output
          path: out
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out`}
            </code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
