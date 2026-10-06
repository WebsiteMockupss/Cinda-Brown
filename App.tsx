import { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor, CursorState } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { RecentProjectsGallery } from './components/RecentProjectsGallery';
import { MidVideoSection } from './components/MidVideoSection';
import { ProcessSection } from './components/ProcessSection';
import { PressAndTestimonialsSection } from './components/PressAndTestimonialsSection';
import { InstagramStrip } from './components/InstagramStrip';
import { PreFooterCta } from './components/PreFooterCta';
import { FooterSection } from './components/FooterSection';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { PortfolioIndexView } from './components/PortfolioIndexView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { Project } from './data/content';

export function App() {
  const [, setPreloaderFinished] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({ type: 'default' });
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryInitialStep, setInquiryInitialStep] = useState(1);
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio' | 'project-detail'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check user system preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleOpenInquiry = (initialStep: number = 1) => {
    setInquiryInitialStep(initialStep);
    setInquiryOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'portfolio') {
      setSelectedProject(null);
      setCurrentPage('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setSelectedProject(null);
      // Wait for DOM to render then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#FAF8F5] font-body selection:bg-[#A88B5C] selection:text-[#0D0D0D]">
      {/* 1. Preloader */}
      <Preloader
        onComplete={() => setPreloaderFinished(true)}
        reducedMotion={reducedMotion}
      />

      {/* Custom Morphing Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Sticky Scroll Navigation */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        activeSection="home"
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Main Home Page Stream */}
      <main className="grain-overlay">
        {/* 2. Hero Section */}
        <HeroSection
          onStartProject={() => handleOpenInquiry(1)}
          onExploreWork={() => handleNavigate('projects')}
          reducedMotion={reducedMotion}
        />

        {/* 3. Manifesto (Positioning paragraph in large serif, revealing word by word) */}
        <ManifestoSection />

        {/* 4. About Cinda (Split layout, layered portrait, bio, 20+ years, states served) */}
        <AboutSection onStartInquiry={() => handleOpenInquiry(1)} />

        {/* 5. Services (Residential and Commercial hover-reveal panels) */}
        <ServicesSection
          onSelectService={() => {
            handleOpenInquiry(1);
          }}
        />

        {/* 6. Recent Projects (Horizontal pinned gallery, project slide in, cursor "View") */}
        <RecentProjectsGallery
          onSelectProject={handleSelectProject}
          onViewAllProjects={() => setCurrentPage('portfolio')}
          setCursorState={setCursorState}
        />

        {/* 7. Video 2 with clip-path expansion */}
        <MidVideoSection reducedMotion={reducedMotion} />

        {/* 8. Process (5 steps stacked card sequence with [PLACEHOLDER] markers) */}
        <ProcessSection onStartInquiry={handleOpenInquiry} />

        {/* 9. As Seen In (Marquee press) & 10. Clients / Testimonials (Large quote slider) */}
        <PressAndTestimonialsSection />

        {/* 11. Instagram Strip */}
        <InstagramStrip />

        {/* 12. Final CTA over Video 3: "We look forward to hearing from you." */}
        <PreFooterCta
          onStartProject={() => handleOpenInquiry(1)}
          reducedMotion={reducedMotion}
        />

        {/* 13. Oversized Footer */}
        <FooterSection
          onNavigate={handleNavigate}
          onOpenInquiry={() => handleOpenInquiry(1)}
        />
      </main>

      {/* Portfolio Index Separate Page / Full View */}
      {currentPage === 'portfolio' && (
        <PortfolioIndexView
          onClose={() => setCurrentPage('home')}
          onSelectProject={handleSelectProject}
          onStartInquiry={() => handleOpenInquiry(1)}
        />
      )}

      {/* Project Detail Template View */}
      {currentPage === 'project-detail' && selectedProject && (
        <ProjectDetailView
          project={selectedProject}
          onClose={() => setCurrentPage('home')}
          onSelectProject={handleSelectProject}
          onStartInquiry={() => handleOpenInquiry(1)}
        />
      )}

      {/* Multi-Step Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialStep={inquiryInitialStep}
      />
    </div>
  );
}

export default App;
