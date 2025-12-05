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
} & (
  | {
      img: string;
      images?: never;
      stats?: never;
    }
  | {
      img?: never;
      images: string[];
      stats?: never;
    }
  | {
      img?: never;
      images?: never;
      stats: { value: string; label: string }[];
    }
);

export default function Portfolio() {
  const projects: Project[] = [
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
      Icon: BarChart3,
      images: [
        "/images/powerbi_1.png",
        "/images/powerbi_2.png",
        "/images/powerbi_3.png",
      ],
    },
    {
      title: {
        en: "IT Process Modeling (BPMN)",
        pt: "Modelagem de Processos de TI (BPMN)",
        fr: "Modélisation de Processus IT (BPMN)",
      },
      description: {
        en: "Modeled and optimized key IT processes using Business Process Model and Notation (BPMN) to improve efficiency and clarity across the organization.",
        pt: "Modelei e otimizei processos chave de TI usando Business Process Model and Notation (BPMN) para melhorar a eficiência e clareza em toda a organização.",
        fr: "Modélisé et optimisé les processus IT clés en utilisant la Business Process Model and Notation (BPMN) pour améliorer l'efficacité et la clarté dans toute l'organisation.",
      },
      Icon: Workflow,
      img: "/images/bpmn.png",
    },
    {
      title: {
        en: "Enterprise Architecture (ArchiMate)",
        pt: "Arquitetura Empresarial (ArchiMate)",
        fr: "Architecture d'Entreprise (ArchiMate)",
      },
      description: {
        en: "Created and maintained Enterprise Architecture models using ArchiMate to align IT strategy with business goals and manage complexity.",
        pt: "Criei e mantive modelos de Arquitetura Empresarial usando ArchiMate para alinhar a estratégia de TI com os objetivos de negócio e gerir a complexidade.",
        fr: "Créé et maintenu des modèles d'Architecture d'Entreprise en utilisant ArchiMate pour aligner la stratégie IT avec les objectifs commerciaux et gérer la complexité.",
      },
      Icon: Layers,
      img: "/images/archimate.png",
    },
  ];

  const [language, setLanguage] = useState<keyof typeof translations>("en");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set initial language based on browser preference or default to 'en'
    const storedLang = localStorage.getItem("language") as keyof typeof translations;
    if (storedLang && translations[storedLang]) {
      setLanguage(storedLang);
    } else {
      const browserLang = navigator.language.substring(0, 2) as keyof typeof translations;
      if (translations[browserLang]) {
        setLanguage(browserLang);
      }
    }
  }, []);

  useEffect(() => {
    if (activeProject && activeProject.images) {
      setCurrentImageIndex(0);
    }
  }, [activeProject]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "pt" : language === "pt" ? "fr" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const openModal = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  const nextImage = () => {
    if (activeProject && activeProject.images) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % activeProject.images!.length
      );
    }
  };

  const prevImage = () => {
    if (activeProject && activeProject.images) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + activeProject.images!.length) % activeProject.images!.length
      );
    }
  };

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    // Apply theme preference from localStorage
    if (localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const currentTranslation = translations[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {currentTranslation["Duarte Moreira"]}
          </h1>
          <div className="flex items-center space-x-4">
            <Button onClick={toggleLanguage} variant="outline" size="sm">
              <Globe className="w-4 h-4 mr-2" />
              {currentTranslation["Language"]}
            </Button>
            <Button onClick={toggleTheme} variant="outline" size="sm">
              <Sun className="w-4 h-4 dark:hidden" />
              <Moon className="w-4 h-4 hidden dark:block" />
              <span className="sr-only">{currentTranslation["Toggle theme"]}</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-500 dark:border-blue-400">
              <img src="/images/profile.jpg" alt={currentTranslation["Duarte Moreira"]} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900 dark:text-gray-50">
              {currentTranslation["IT Business Analyst & Power BI Specialist"]}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {currentTranslation["I turn messy data into clear decisions. I build reliable data models, actionable dashboards, and user-friendly analytics that improve processes and drive outcomes."]}
            </p>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b pb-2">
            {currentTranslation["About Me"]}
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg mb-4">
                {currentTranslation["With over 5 years of experience in IT, I specialize in bridging the gap between business needs and technical solutions. My focus is on data-driven decision-making, process optimization, and delivering tangible business value."]}
              </p>
              <p className="text-lg">
                {currentTranslation["I hold a Master's degree in Information Systems and have a strong background in business analysis, data modeling, and project management. I am passionate about leveraging technology to solve complex problems."]}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">
                {currentTranslation["Key Skills"]}
              </h3>
              <ul className="list-disc list-inside text-lg space-y-1">
                <li>{currentTranslation["Power BI & Data Modeling"]}</li>
                <li>{currentTranslation["Business Process Modeling (BPMN)"]}</li>
                <li>{currentTranslation["Enterprise Architecture (ArchiMate)"]}</li>
                <li>{currentTranslation["SQL & Database Management"]}</li>
                <li>{currentTranslation["Agile & Scrum Methodologies"]}</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 border-b pb-2">
            {currentTranslation["Portfolio"]}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card
                    className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                    onClick={() => openModal(project)}
                  >
                    <CardContent className="p-6 flex-grow">
                      <project.Icon className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title[language]}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.description[language]}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stats && (
                          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            {currentTranslation["Data-Driven"]}
                          </span>
                        )}
                        {project.images && (
                          <span className="text-xs font-medium bg-green-100 text-green-800 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                            {currentTranslation["Visual Artifacts"]}
                          </span>
                        )}
                        {project.img && (
                          <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                            {currentTranslation["Process Model"]}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Gallery Section - ERROR LOCATION */}
        <section id="gallery" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b pb-2">
            {currentTranslation["Gallery"]}
          </h2>
          <h2 className="text-2xl font-semibold mb-4">{translations[language]["Gallery"]}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {translations[language]["GalleryDescription"]}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Gallery items would go here, but they are not defined in the provided code snippet. 
                Assuming 'gallery' is an array of image paths or objects that was intended to be defined.
                Since the error is only about the translation key, I will focus on that.
            */}
            {/* {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img src={item.path} alt={item.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))} */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b pb-2">
            {currentTranslation["Contact"]}
          </h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg mb-6">
              {currentTranslation["I am open to new opportunities and collaborations. Feel free to reach out to discuss how I can help your business achieve its goals."]}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:duarte.s.moreira@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                {currentTranslation["Email"]}
              </a>
              <a href="/Duarte_Moreira_CV.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                {currentTranslation["View CV"]}
              </a>
              <a href="/Duarte_Moreira_CV.pdf" download className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                {currentTranslation["Download CV"]}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {currentTranslation["Duarte Moreira"]}. {currentTranslation["All rights reserved."]}
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {activeProject.title[language]}
                  </h3>
                  <Button variant="ghost" size="icon" onClick={closeModal}>
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  {activeProject.description[language]}
                </p>

                {/* Stats Section */}
                {activeProject.stats && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 border-b pb-1">
                      {currentTranslation["Key Achievements"]}
                    </h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {activeProject.stats.map((stat, index) => (
                        <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image/Gallery Section */}
                {(activeProject.img || activeProject.images) && (
                  <div className="relative mb-6">
                    <h4 className="text-xl font-semibold mb-3 border-b pb-1">
                      {currentTranslation["Visual Artifact"]}
                    </h4>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                        src={activeProject.images ? activeProject.images[currentImageIndex] : activeProject.img}
                        alt={activeProject.title.en}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Navigation for multiple images */}
                    {activeProject.images && activeProject.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                          onClick={nextImage}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </Button>
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                          {activeProject.images.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                index === currentImageIndex
                                  ? "bg-blue-600 dark:bg-blue-400"
                                  : "bg-gray-400 dark:bg-gray-600 cursor-pointer"
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Additional Context */}
                <div className="text-sm text-gray-500 dark:text-gray-500 pt-4 border-t dark:border-gray-700">
                  <p>
                    {currentTranslation["This project showcases my ability to deliver solutions that combine technical expertise with a strong understanding of business processes."]}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
