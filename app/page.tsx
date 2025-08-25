"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Activity, Mail, Download, FileText, X, ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";

// Define a strict type for our project objects
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

      <header id="home" className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-3">
            IT Business Analyst & Power BI Specialist
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400">
            I turn messy data into clear decisions. I build reliable data models, actionable dashboards, and user-friendly analytics that improve processes and drive outcomes.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 shadow-sm">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button asChild className="rounded-2xl">
              <a href="#resume"><FileText className="w-4 h-4 mr-2"/>View CV</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="/duarte-moreira-cv.pdf" download><Download className="w-4 h-4 mr-2"/>Download PDF</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/duarte.jpg" alt="Duarte Moreira" className="w-48 h-48 rounded-full object-cover shadow-lg"/>
        </div>
      </header>

      <section id="work" className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4">Selected Work</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Visuals below are anonymized (dummy or blurred data). They demonstrate structure, UX, and the problem-solving approach without exposing sensitive information.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const [currentImageIndex, setCurrentImageIndex] = useState(0);
            if (project.img) {
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
                  <Card className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full bg-white dark:bg-gray-800/50">
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <div className="flex items-center space-x-3 mb-3">
                        <project.Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                      </div>
                      <img src={project.img} alt={project.title} className="rounded-xl mb-3 object-cover h-40 w-full cursor-pointer" onClick={() => setLightbox({ open: true, type: "image", src: project.img, caption: project.title })} />
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            }
            if (project.images && project.images.length > 0) {
              const handleNext = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev + 1) % project.images.length); };
              const handlePrev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length); };
              const currentImageSrc = project.images[currentImageIndex];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
                  <Card className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full bg-white dark:bg-gray-800/50">
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <div className="flex items-center space-x-3 mb-3">
                        <project.Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                      </div>
                      <div className="relative group rounded-xl mb-3 h-40 w-full cursor-pointer" onClick={() => setLightbox({ open: true, type: "image", src: currentImageSrc, caption: project.title })}>
                        <AnimatePresence initial={false}>
                          <motion.img key={currentImageSrc} src={currentImageSrc} alt={project.title} className="absolute inset-0 rounded-xl object-cover h-full w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />
                        </AnimatePresence>
                        <button onClick={handlePrev} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronLeft className="w-4 h-4" /></button>
                        <button onClick={handleNext} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronRight className="w-4 h-4" /></button>
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs rounded-full px-2 py-0.5 z-10">{currentImageIndex + 1} / {project.images.length}</div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </section>

      <section id="resume" className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Curriculum Vitae</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Experience</h3>
            <div className="space-y-5">
              {experience.map((job, i) => (
                <div key={i} className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{job.role}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{job.dates}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{job.company} • {job.loc}</p>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {job.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Education</h3>
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm mb-5">
              <p className="font-medium">Master’s in Information Systems Management</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Setúbal Polytechnic Institute • 09/2023 – 09/2025</p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm mb-5">
              <p className="font-medium">Bachelor’s in Information Systems Management</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Setúbal Polytechnic Institute • 09/2017 – 09/2021</p>
            </div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm mb-5 text-sm text-gray-700 dark:text-gray-300">
              Portuguese (Native) • English (Proficient) • French (Advanced)
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button asChild className="rounded-2xl"><a href="/duarte-moreira-cv.pdf" download><Download className="w-4 h-4 mr-2"/>Download CV</a></Button>
              <Button asChild variant="secondary" className="rounded-2xl"><a href="/duarte-moreira-cv.pdf" target="_blank" rel="noreferrer"><FileText className="w-4 h-4 mr-2"/>Open PDF</a></Button>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Inline preview (place <code>duarte-moreira-cv.pdf</code> in your <code>public/</code> folder).</p>
          <iframe src="/duarte-moreira-cv.pdf#toolbar=1&zoom=page-fit" className="w-full h-96 rounded-md" title="CV Preview" />
        </div>
      </section>

      <section id="gallery" className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery (Images & Videos)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {gallery.map((g, i) => (
            <div key={i} className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
              {g.type === "image" ? (
                <img className="w-full h-48 object-cover cursor-pointer" src={g.src} alt={g.caption} onClick={() => setLightbox({ open: true, type: "image", src: g.src, caption: g.caption })} />
              ) : (
                <video className="w-full h-48 object-cover cursor-pointer" src={g.src} onClick={() => setLightbox({ open: true, type: "video", src: g.src, caption: g.caption })} controls />
              )}
              <div className="p-3 text-sm text-gray-700 dark:text-gray-300">{g.caption}</div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="text-center mt-12 pb-12">
        <p className="text-gray-600 dark:text-gray-400 mb-3">Based in Lisbon • Open to remote/hybrid roles</p>
        <div className="flex justify-center gap-3">
          <Button asChild className="rounded-2xl"><a href="mailto:duartetraud98@gmail.com"><Mail className="w-4 h-4 mr-2"/>Email Me</a></Button>
          <Button asChild variant="secondary" className="rounded-2xl"><a href="https://www.linkedin.com/in/duarte-moreira-981339196/" target="_blank" rel="noreferrer">LinkedIn</a></Button>
        </div>
      </footer>

      <AnimatePresence>
        {lightbox.open && (
          <motion.div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={( ) => setLightbox({ open: false })}>
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <Button variant="secondary" className="absolute -top-10 right-0 rounded-full" onClick={() => setLightbox({ open: false })}>
                <X className="w-4 h-4" />
              </Button>
              {lightbox.type === "image" ? (
                <img src={lightbox.src} alt={lightbox.caption} className="w-full rounded-lg shadow-2xl" />
              ) : (
                <video src={lightbox.src} controls className="w-full rounded-lg shadow-2xl" />
              )}
              <p className="text-white/80 text-sm mt-2 text-center">{lightbox.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
