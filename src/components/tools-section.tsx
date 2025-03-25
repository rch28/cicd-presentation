import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ToolsSection() {
  const categories = [
    {
      id: "version-control",
      name: "Version Control",
      tools: [
        {
          name: "Git",
          description:
            "Distributed version control system for tracking changes",
        },
        {
          name: "GitHub",
          description:
            "Platform for hosting and collaborating on Git repositories",
        },
        {
          name: "GitLab",
          description:
            "Complete DevOps platform with Git repository management",
        },
        {
          name: "Bitbucket",
          description: "Git repository management with built-in CI/CD",
        },
      ],
    },
    {
      id: "ci-tools",
      name: "CI Tools",
      tools: [
        {
          name: "Jenkins",
          description:
            "Open-source automation server for building, testing, and deploying",
        },
        {
          name: "GitHub Actions",
          description: "CI/CD service built into GitHub repositories",
        },
        {
          name: "CircleCI",
          description:
            "Cloud-based CI/CD service with first-class Docker support",
        },
        {
          name: "Travis CI",
          description:
            "Distributed CI service for open source and private projects",
        },
      ],
    },
    {
      id: "cd-tools",
      name: "CD Tools",
      tools: [
        {
          name: "ArgoCD",
          description:
            "Declarative, GitOps continuous delivery tool for Kubernetes",
        },
        {
          name: "Spinnaker",
          description: "Multi-cloud continuous delivery platform",
        },
        {
          name: "Octopus Deploy",
          description: "Deployment automation server for .NET applications",
        },
        {
          name: "Vercel",
          description: "Platform for frontend frameworks and static sites",
        },
      ],
    },
    {
      id: "testing",
      name: "Testing Tools",
      tools: [
        {
          name: "Jest",
          description:
            "JavaScript testing framework with a focus on simplicity",
        },
        {
          name: "Selenium",
          description: "Automated browser testing for web applications",
        },
        {
          name: "Cypress",
          description: "End-to-end testing framework for web applications",
        },
        {
          name: "JUnit",
          description: "Unit testing framework for Java applications",
        },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tools & Practices</CardTitle>
        <CardDescription>
          Popular tools and best practices in the CI/CD ecosystem
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="version-control">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
                  >
                    <h3 className="font-medium text-lg mb-2">{tool.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
