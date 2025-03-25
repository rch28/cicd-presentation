"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Play,
  Check,
  Server,
} from "lucide-react";

export default function CiCdDiagram() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stages = [
    { name: "Code", icon: GitCommit, color: "bg-blue-500" },
    { name: "Build", icon: GitBranch, color: "bg-purple-500" },
    { name: "Test", icon: Play, color: "bg-amber-500" },
    { name: "Review", icon: GitPullRequest, color: "bg-green-500" },
    { name: "Deploy", icon: Server, color: "bg-red-500" },
    { name: "Monitor", icon: Check, color: "bg-teal-500" },
  ];

  return (
    <div className="w-full py-8">
      <h3 className="text-xl font-semibold mb-8 text-center">
        CI/CD Pipeline Flow
      </h3>

      <div className="flex flex-wrap justify-center gap-4 md:gap-2">
        {stages.map((stage, index) => (
          <div key={stage.name} className="flex flex-col items-center">
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${
                step === index ? stage.color : "bg-slate-200 dark:bg-slate-700"
              } transition-colors duration-300`}
              animate={{
                scale: step === index ? 1.1 : 1,
                opacity: step === index || index < step ? 1 : 0.7,
              }}
            >
              <stage.icon className="h-8 w-8 text-white" />
            </motion.div>
            <p className="mt-2 text-sm font-medium">{stage.name}</p>

            {index < stages.length - 1 && (
              <div className="hidden md:block mx-2">
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {step === 0 &&
            "Developers commit code changes to a shared repository."}
          {step === 1 &&
            "The build system compiles the code and creates artifacts."}
          {step === 2 &&
            "Automated tests verify the functionality and quality of the code."}
          {step === 3 && "Code reviews and approvals ensure quality standards."}
          {step === 4 &&
            "Approved changes are automatically deployed to production."}
          {step === 5 &&
            "The application is monitored for performance and issues."}
        </p>
      </div>
    </div>
  );
}
