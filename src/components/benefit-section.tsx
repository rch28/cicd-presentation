import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Shield, Zap, Users, TrendingUp, Sparkles } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Faster Time to Market",
      description:
        "Automate manual processes to deliver features quickly and frequently.",
      icon: Clock,
    },
    {
      title: "Improved Quality",
      description:
        "Catch bugs early through automated testing and continuous feedback.",
      icon: Shield,
    },
    {
      title: "Increased Efficiency",
      description:
        "Eliminate manual tasks and reduce context switching for developers.",
      icon: Zap,
    },
    {
      title: "Better Collaboration",
      description:
        "Foster teamwork with shared responsibility for delivery and quality.",
      icon: Users,
    },
    {
      title: "Reduced Risk",
      description:
        "Smaller, incremental changes are easier to troubleshoot and roll back.",
      icon: TrendingUp,
    },
    {
      title: "Continuous Improvement",
      description:
        "Gather metrics and feedback to iteratively enhance processes.",
      icon: Sparkles,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Benefits of CI/CD</CardTitle>
        <CardDescription>
          Why organizations adopt Continuous Integration and Continuous
          Deployment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
