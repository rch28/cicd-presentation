import { CheckCircle2, GitFork, RefreshCcw, Rocket } from "lucide-react";
import React from "react";

const pipelines = [
  {
    icon: <GitFork className="w-8 h-8 text-blue-600" />,
    name: "Code",
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-blue-600" />,
    name: "Build",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    name: "Test",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    name: "Deploy",
  },
];

const Pipeline = () => (
  <div className="flex items-center justify-center gap-4 my-8 flex-wrap">
    {pipelines.map((stage, index) => (
      <React.Fragment key={stage?.name}>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            {stage?.icon}
          </div>
          <span className="mt-2 font-medium">{stage?.name}</span>
        </div>
        {index < 3 && <div className="w-8 h-0.5 bg-blue-300" />}
      </React.Fragment>
    ))}
  </div>
);

export default Pipeline;
