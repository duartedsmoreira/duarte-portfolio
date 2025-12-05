"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Activity, Mail, Download, FileText, X, ChevronLeft, ChevronRight, Sun, Moon, Workflow, Target, Layers, Globe } from "lucide-react";
import { translations, Language } from "./translations";

// Define a strict type for our project objects
type Project = {
  title: { en: string; pt: string; fr: string };
  description: { en: string; pt: string; fr: string };
  Icon: React.ElementType;
} & ({
  img: string;
  images?: never;
  stats?: never;
} | {
  img?: never;
  images: string[];
  stats?: never;
} | {
  img?: never;
  images?: never;
  stats: { value: string; label: string }[];
});

export default function Portfolio() {
  const projects = [
    {
      title: {
        en: "SLA Monitoring Automation",
        pt: "Automação de Monitorização de SLA",
        fr: "Automatisation de la Surveillance des SLA",
      },
      description: {
        en: "Designed and launched an automated system to track Service-Level Agreements, replacing manual reporting and providing real-time KPI monitoring for error tickets.",
        pt: "Concebi e lancei um sistema automatizado para monitorizar Acordos de Nível de Serviço, substituindo relatórios manuais e fornecendo monitorização de KPI em tempo real para tickets de erro.",
        fr: "Conçu et lancé un système automatisé pour suivre les Accords de Niveau de Service, remplaçant les rapports manuels et fournissant une surveillance KPI en temps réel pour les tickets d'erreur.",
      },
      Icon: Target,
      stats: [
        { value: "30%", label: "Manual Reporting Reduced" },
        { value: "50%", label: "Faster Ticket Detection" },
        { value: "100%", label: "Live Data Accuracy" },
      ],
    },
    {
      title: {
        en: "Power BI Reports",
        pt: "Relatórios Power BI",
        fr: "Rapports Power BI",
      },
      description: {
        en: "Developed and managed a suite of Power BI reports for operational monitoring, covering everything from high-level KPIs to detailed drill-through analysis.",
        pt: "Desenvolvi e geri um conjunto de relatórios Power BI para monitorização operacional, cobrindo desde KPIs de alto nível até análises detalhadas de drill-through.",
        fr: "Développé et géré une suite de rapports Power BI pour la surveillance opérationnelle, couvrant tout, des KPI de haut niveau à l'analyse détaillée par exploration.",
      },
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
      title: {
        en: "BPMN Process Modeling",
        pt: "Modelagem de Processos BPMN",
        fr: "Modélisation de Processus BPMN",
      },
      description: {
        en: "Designed and documented core business processes using BPMN to clarify workflows, identify bottlenecks, and standardize operations across departments.",
        pt: "Concebi e documentei processos de negócio centrais usando BPMN para clarificar fluxos de trabalho, identificar gargalos e padronizar operações entre departamentos.",
        fr: "Conçu et documenté les processus métier de base à l'aide de BPMN pour clarifier les flux de travail, identifier les goulots d'étranglement et standardiser les opérations entre les départements.",
      },
      images: [
        "/bpmn-1.png",
        "/bpmn-2.png",
      ],
      Icon: Workflow,
    },
    {
      title: {
        en: "Enterprise Architecture Modeling",
        pt: "Modelagem de Arquitetura Empresarial",
        fr: "Modélisation d'Architecture d'Entreprise",
      },
      description: {
        en: "Modeled business processes and linked them to the underlying application and technology layers using ArchiMate to create a holistic view of the enterprise.",
        pt: "Modelei processos de negócio e liguei-os às camadas de aplicação e tecnologia subjacentes usando ArchiMate para criar uma visão holística da empresa.",
        fr: "Modélisé les processus métier et les a liés aux couches d'application et de technologie sous-jacentes à l'aide d'ArchiMate pour créer une vue holistique de l'entreprise.",
      },
      images: [
        "/archimate-onboarding.png",
        "/archimate-invoicing.png",
      ],
      Icon: Layers,
    },
  ];

  const experience = [
    {
      role: {
        en: "IT Business Analyst",
        pt: "Analista de Negócio de TI",
        fr: "Analyste Commercial IT",
      },
      company: "Greenvolt",
      loc: {
        en: "Lisbon, Portugal",
        pt: "Lisboa, Portugal",
        fr: "Lisbonne, Portugal",
      },
      dates: "09/2023 – Present",
      bullets: [
        {
          en: "Managed three Power BI reports; migrated data from Excel to CRM with accurate mapping.",
          pt: "Geri três relatórios Power BI; migrei dados do Excel para o CRM com mapeamento preciso.",
          fr: "Géré trois rapports Power BI; migré des données d'Excel vers le CRM avec un mappage précis.",
        },
        {
          en: "Monitored error tickets and SLAs; validated data against Solarlog API.",
          pt: "Monitorizei tickets de erro e SLAs; validei dados contra a API Solarlog.",
          fr: "Surveillé les tickets d'erreur et les SLA; validé les données par rapport à l'API Solarlog.",
        },
        {
          en: "Analyzed Google Analytics for web/mobile; led data integration, billing & onboarding.",
          pt: "Analisei o Google Analytics para web/mobile; liderei a integração de dados, faturação e onboarding.",
          fr: "Analysé Google Analytics pour le web/mobile; dirigé l'intégration des données, la facturation et l'intégration.",
        },
      ],
    },
    {
      role: {
        en: "Functional Analyst / QA Tester",
        pt: "Analista Funcional / Testador de QA",
        fr: "Analyste Fonctionnel / Testeur QA",
      },
      company: "Deloitte – TD Bank",
      loc: {
        en: "Toronto, Canada",
        pt: "Toronto, Canadá",
        fr: "Toronto, Canada",
      },
      dates: "05/2022 – 08/2023",
      bullets: [
        {
          en: "Gathered requirements and executed test cases for a banking insurance program.",
          pt: "Reuni requisitos e executei casos de teste para um programa de seguros bancários.",
          fr: "Recueilli les exigences et exécuté les cas de test pour un programme d'assurance bancaire.",
        },
        {
          en: "Owned Jira/Confluence test documentation and daily standups to unblock issues.",
          pt: "Geri a documentação de teste Jira/Confluence e reuniões diárias para desbloquear problemas.",
          fr: "Géré la documentation de test Jira/Confluence et les standups quotidiens pour débloquer les problèmes.",
        },
      ],
    },
    {
      role: {
        en: "Duck Creek / XML / SQL Developer",
        pt: "Programador Duck Creek / XML / SQL",
        fr: "Développeur Duck Creek / XML / SQL",
      },
      company: "Deloitte – AGEAS Insurance",
      loc: {
        en: "Lisbon, Portugal",
        pt: "Lisboa, Portugal",
        fr: "Lisbonne, Portugal",
      },
      dates: "05/2021 – 05/2022",
      bullets: [
        {
          en: "Fixed Duck Creek (C#) website errors; corrected customer data in XML.",
          pt: "Corrigi erros no website Duck Creek (C#); corrigi dados de clientes em XML.",
          fr: "Corrigé les erreurs du site web Duck Creek (C#); corrigé les données client en XML.",
        },
        {
          en: "Shipped weekly production fixes ensuring stable functionality.",
          pt: "Entreguei correções semanais de produção garantindo funcionalidade estável.",
          fr: "Livré des correctifs de production hebdomadaires assurant une fonctionnalité stable.",
        },
      ],
    },
  ];

  const skills = [
    "Power BI", "DAX", "SQL", "Jira", "Confluence", "CRM", "Postman", "XML", "Google Analytics", "Excel", "Data Integration", "BPMN", "ArchiMate"
  ];

  const gallery = [
    { type: "image", src: "/powerbi-report-1.png", caption: "General KPIs and Project Submission Overview" },
    { type: "image", src: "/powerbi-report-2.png", caption: "Individual Self-Consumption Analysis with Filters" },
    { type: "image", src: "/powerbi-report-3.png", caption: "Work-in-Progress and Commissioning Funnel" },
    { type: "image", src: "/powerbi-report-4.png", caption: "SLA Analysis for Proposals and Contracts" },
    { type: "image", src: "/powerbi-report-5.png", caption: "Producer Contract SLA Timelines" },
    { type: "image", src: "/bpmn-1.png", caption: "BPMN Diagram: Client Onboarding Process" },
    { type: "image", src: "/bpmn-2.png", caption: "BPMN Diagram: Invoicing and Validation Workflow" },
    { type: "image", src: "/archimate-onboarding.png", caption: "ArchiMate: Client Data Onboarding Architecture" },
    { type: "image", src: "/archimate-invoicing.png", caption: "ArchiMate: Internal Invoicing Architecture" },
  ];

  const [lightbox, setLightbox] = useState<{ open: boolean; type?: "image" | "video"; src?: string; caption?: string }> ({
    open: false,
  });

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState<"en" | "pt" | "fr">("en");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }

    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

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
            <a href="#interactive-report" className="hover:text-blue-500 dark:hover:text-blue-400">Live Report</a>
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
            <div className="relative">
              <Button variant="secondary" size="icon" className="rounded-full" onClick={() => setLanguage(language === "en" ? "pt" : language === "pt" ? "fr" : "en")}>
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Switch language</span>
              </Button>
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">{language.toUpperCase()}</span>
            </div>
            <Button asChild className="rounded-2xl">
              <a href="mailto:duartetraud98@gmail.com"><Mail className="w-4 h-4 mr-2"/>{translations[language]["Get in Touch"]}</a>
            </Button>
          </div>
        </div>
      </nav>

      <header id="home" className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-3">
            {translations[language]["IT Business Analyst & Power BI Specialist"]}
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400">
            {translations[language]["I turn messy data into clear decisions. I build reliable data models, actionable dashboards, and user-friendly analytics that improve processes and drive outcomes."]}
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
              <a href="#resume"><FileText className="w-4 h-4 mr-2"/>{translations[language]["View CV"]}</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="/duarte-moreira-cv.pdf" download><Download className="w-4 h-4 mr-2"/>{translations[language]["Download PDF"]}</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/duarte.jpg" alt="Duarte Moreira" className="w-48 h-48 rounded-full object-cover shadow-lg"/>
        </div>
      </header>

      <section id="work" className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4">{translations[language]["Selected Work"]}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {translations[language]["Visuals below are anonymized (dummy or blurred data). They demonstrate structure, UX, and the problem-solving approach without exposing sensitive information."]}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const [currentImageIndex, setCurrentImageIndex] = useState(0);
            
            if (project.stats) {
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
                  <Card className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full bg-white dark:bg-gray-800/50">
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <div className="flex items-center space-x-3 mb-3">
                        <project.Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold">{project.title[language]}</h3>
                      </div>
                      <div className="flex-grow grid grid-cols-3 gap-2 my-4 text-center">
                        {project.stats.map(stat => (
                          <div key={stat.label} className="bg-gray-100 dark:bg-gray-700/50 p-2 rounded-lg">
                            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.description[language]}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            }

            if (project.images) {
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
                  <Card className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full bg-white dark:bg-gray-800/50">
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <div className="flex items-center space-x-3 mb-3">
                        <project.Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold">{project.title[language]}</h3>
                      </div>
                      <div className="relative flex-grow my-4">
                        <img src={project.images[currentImageIndex]} alt={project.title[language]} className="rounded-lg object-cover w-full h-40 cursor-pointer" onClick={() => setLightbox({ open: true, type: 'image', src: project.images[currentImageIndex], caption: project.title[language] })}/>
                        {project.images.length > 1 && (
                          <>
                            <Button size="icon" variant="ghost" className="absolute left-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/30 hover:bg-black/50 text-white" onClick={() => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}><ChevronLeft className="h-5 w-5"/></Button>
                            <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/30 hover:bg-black/50 text-white" onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)}><ChevronRight className="h-5 w-5"/></Button>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.description[language]}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            }

            return null;
          })}
        </div>
      </section>

      <section id="interactive-report" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">{translations[language]["Interactive Power BI Report"]}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {translations[language]["This section demonstrates my ability to integrate live, interactive Power BI reports into a web environment. The report below is a dummy example showcasing data visualization and filtering capabilities."]}
        </p>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl">
          <iframe
            title="Interactive Power BI Report (Dummy Data)"
            width="100%"
            height="100%"
            src="https://app.powerbi.com/view?r=eyJrIjoiYmQ0ZTIzYjctYjY3Yy00YjJkLWE3YjItY2Y3YjU1ZTA5YjQ3IiwidCI6IjQ1M2Q0Y2Y2LTc3NjItNDg3Zi1iYjY3LTJkYjQ2YjE3ZTI5ZiIsImMiOjl9"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      </section>

      <section id="resume" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">{translations[language]["Curriculum Vitae"]}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {experience.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.role[language]}</h3>
                <p className="text-lg font-semibold">{exp.company} - {exp.loc[language]}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.dates}</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet[language]}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="space-y-6">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full px-3 py-1 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <p className="font-semibold">MSc in Business Analytics</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Nova School of Business and Economics</p>
                <p className="font-semibold mt-4">BSc in Management</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Nova School of Business and Economics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">{translations[language]["Gallery"]}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {translations[language]["A collection of visual artifacts from my projects, including Power BI dashboards, BPMN diagrams, and ArchiMate models."]}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition" onClick={() => setLightbox({ open: true, type: item.type as "image" | "video", src: item.src, caption: item.caption })}>
              <img src={item.src} alt={item.caption} className="w-full h-full object-cover"/>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">{translations[language]["Get in Touch"]}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {translations[language]["I am currently open to new opportunities and collaborations. Feel free to reach out!"]}
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="rounded-2xl">
            <a href="mailto:duartetraud98@gmail.com"><Mail className="w-5 h-5 mr-2"/>duartetraud98@gmail.com</a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="rounded-2xl">
            <a href="/duarte-moreira-cv.pdf" download><Download className="w-5 h-5 mr-2"/>{translations[language]["Download CV"]}</a>
          </Button>
        </div>
      </section>

      <AnimatePresence>
        {lightbox.open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setLightbox({ open: false })}>
            <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
              <img src={lightbox.src} alt={lightbox.caption} className="max-w-full max-h-[85vh] object-contain rounded-lg"/>
              <p className="text-white text-center mt-2">{lightbox.caption}</p>
              <Button size="icon" variant="ghost" className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white" onClick={() => setLightbox({ open: false })}><X className="h-6 w-6"/></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
