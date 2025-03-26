import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ArrowDown } from "lucide-react";
import Pipeline from "@/components/Pipeline";
import CiCdDiagram from "@/components/ci-cd-diagram";
import BenefitsSection from "@/components/benefit-section";
import ToolsSection from "@/components/tools-section";
import GithubSection from "@/components/github-section";
import AboutProject from "@/components/about-project";
import Errors from "@/components/Errors";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
            Understanding{" "}
            <span className="text-blue-600 dark:text-blue-400">CI/CD</span>{" "}
            Pipelines
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
            Continuous Integration & Continuous Deployment Explained
          </p>
          <Pipeline />
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Learning
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ArrowDown className="h-8 w-8 text-slate-600 dark:text-slate-400" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <Tabs defaultValue="introduction" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="tools">Tools & Practices</TabsTrigger>
            <TabsTrigger value="github">GitHub Integration</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
            <TabsTrigger value="about">About This Project</TabsTrigger>
          </TabsList>

          <TabsContent value="introduction" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What is CI/CD?</CardTitle>
                <CardDescription>
                  Understanding the fundamentals of Continuous Integration and
                  Continuous Deployment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                      <strong>Continuous Integration (CI)</strong> is the
                      practice of frequently merging code changes into a shared
                      repository, followed by automated builds and tests.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                      <strong>Continuous Deployment (CD)</strong> extends CI by
                      automatically deploying all code changes to a testing or
                      production environment after the build stage.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300">
                      Together, they form a pipeline that enables teams to
                      deliver code changes more frequently and reliably.
                    </p>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                    <CiCdDiagram />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="benefits">
            <BenefitsSection />
          </TabsContent>

          <TabsContent value="tools">
            <ToolsSection />
          </TabsContent>

          <TabsContent value="github">
            <GithubSection />
          </TabsContent>

          <TabsContent value="about">
            <AboutProject />
          </TabsContent>
          <TabsContent value="errors">
            <Errors />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
