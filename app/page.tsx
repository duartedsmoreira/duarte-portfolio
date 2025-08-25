"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, Activity, Mail, Download, FileText, X, ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";

// Define a strict type for our project objects to satisfy TypeScript
type Project = {
  title: string;
  description: string;
  Icon: React.ElementType;
} & ({
  img: string;
  images?: never;
} | {
  img?: never;
  images: string[];
});

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "SLA Monitoring Dashboard",
      description: "Automated tracking of service-level agreements, reducing manual reporting by 30%. Features drill-through and real-time error ticket KPIs.",
      img: "/sla-dashboard.png",
      Icon: Activity,
    },
    {
      title: "Power BI Reports",
      description: "Developed and managed a suite of Power BI reports for operational monitoring, covering everything from high-level KPIs to detailed drill-through analysis.",
      images: [
        "/powerbi-report-1.png",
        "/powerbi-report-2.png",
        "/powerbi-report-3.png",
        "/powerbi-report-4.png",
        "/powerbi-report-5.png",
      ],
      Icon: BarChart3,
    },
    {
      title: "User Behavior Analytics",
      description: "Analyzed Google Analytics data for web and mobile apps. Built dashboards to track usage patterns and optimize onboarding flows.",
      img: "/analytics-dashboard.png",
      Icon: BarChart3,
    },
  ];

  const experience = [
    {
      role: "IT Business Analyst",
      company: "Greenvolt",
      loc: "Lisbon, Portugal",
      dates: "09/2023 – Present",
      bullets: [
        "Managed three Power BI reports; migrated data from Excel to CRM with accurate mapping.",
        "Monitored error tickets and SLAs; validated data against Solarlog API.",
        "Analyzed Google Analytics for web/mobile; led data integration, billing & onboarding.",
      ],
    },
    {
      role: "Functional Analyst / QA Tester",
      company: "Deloitte – TD Bank",
      loc: "Toronto, Canada",
      dates: "05/2022 – 08/2023",
      bullets: [
        "Gathered requirements and executed test cases for a banking insurance program.",
        "Owned Jira/Confluence test documentation and daily standups to unblock issues.",
      ],
    },
    {
      role: "Duck Creek / XML / SQL Developer",
      company: "Deloitte – AGEAS Insurance",
      loc: "Lisbon, Portugal",
      dates: "05/2021 – 05/2022",
      bullets: [
        "Fixed Duck Creek (C#) website errors; corrected customer data in XML.",
        "Shipped weekly production fixes ensuring stable functionality.",
      ],
    },
  ];

  const skills = [
    "Power BI", "DAX", "SQL", "Jira", "Confluence", "CRM", "Postman", "XML", "Google Analytics", "Excel", "Data Integration",
  ];

  // CORRECTED GALLERY FILENAMES
  const gallery = [
    { type: "image", src: "/powerbi-report-1.png", caption: "General KPIs and Project Submission Overview" },
    { type: "image", src: "/powerbi-report-2.png", caption: "Individual Self-Consumption Analysis with Filters" },
    { type: "image", src: "/powerbi-report-3.png", caption: "Work-in-Progress and Commissioning Funnel" },
    { type: "image", src: "/powerbi-report-4.png", caption: "SLA Analysis for Proposals and Contracts" },
    { type: "image", src: "/powerbi-report-5.png", caption: "Producer Contract SLA Timelines" },
  ];

  const [lightbox, setLightbox] = useState<{ open: boolean; type?: "image" | "video"; src?: string; caption?: string }>({
    open: false,
  });

  // Dark Mode State
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Top Nav */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold">Duarte Moreira</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-blue-500 dark:hover:text-blue-400">Work</a>
            <a href="#resume" className="hover:text-blue-500 dark:hover:text-blue-400">CV</a>
            <a href="#gallery" className="hover:text-blue-500 dark:hover:text-blue-400">Gallery</a>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={toggleTheme} variant="secondary" size="icon" className="rounded-full">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild className="rounded-2xl">
              <a href="mailto:duartetraud98@gmail.com"><Mail className="w-4 h-4 mr-2"/>Get in Touch</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero, Work, Resume, etc. sections will go here, unchanged for now */}
      {/* The code below is truncated for brevity but should be the same as your existing file */}
      {/* ... (rest of your page content) ... */}
      
      {/* Make sure to replace the rest of the file content from your existing page.tsx */}
      {/* For example, the <header>, <section id="work">, etc. */}
    </div>
  );
}
