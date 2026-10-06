import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PROJECTS, BRAND } from '../data/content';
import { ambientAudio } from '../utils/audio';

interface NavbarProps {
  onOpenInquiry: (initialStep?: number) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  currentPage: 'home' | 'portfolio' | 'project-detail';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  onNavigate,
  currentPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [hoveredProjectImage, setHoveredProjectImage] = useState<string>(PROJECTS[0].heroImage);

  // Scroll detection for hide/reveal
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 60);

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down -> hide navbar
        setNavVisible(false);
      } else {
        // Scrolling up -> show navbar
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleSound = () => {
    const status = ambientAudio.toggle();
    setIsAudioPlaying(status);
  };

  const navLinks = [
    { label: 'Work', sectionId: 'projects', previewImg: PROJECTS[0].heroImage },
    { label: 'Manifesto', sectionId: 'manifesto', previewImg: PROJECTS[1].heroImage },
    { label: 'About Cinda', sectionId: 'about', previewImg: 'https://images.pexels.com/photos/5292231/pexels-photo-5292231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800' },
    { label: 'Services', sectionId: 'services', previewImg: PROJECTS[3].heroImage },
    { label: 'Process', sectionId: 'process', previewImg: PROJECTS[2].heroImage },
    { label: 'Press & Recognition', sectionId: 'press', previewImg: PROJECTS[4].heroImage },
    { label: 'Contact', sectionId: 'contact', previewImg: PROJECTS[0].secondaryImage },
  ];

  const handleLinkClick = (sectionId: string) => {
    setMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('hero')}
            className="group cursor-pointer focus:outline-none"
            aria-label="Cinda Brown Interiors - Return to Home"
          >
            <BrandLogo theme="light" size="sm" showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => onNavigate('projects')}
              className={`font-body text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 relative py-1 ${
                currentPage === 'portfolio' ? 'text-[#A88B5C]' : 'text-white/80 hover:text-white'
              }`}
            >
              Portfolio
              {currentPage === 'portfolio' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#A88B5C]" />
              )}
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="font-body text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="font-body text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="font-body text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300"
            >
              Process
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="font-body text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300"
            >
              Studio
            </button>
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Ambient Sound Toggle */}
            <button
              onClick={toggleSound}
              className="relative p-2 text-white/70 hover:text-[#A88B5C] transition-colors duration-300 focus:outline-none group flex items-center gap-2"
              title={isAudioPlaying ? 'Mute ambient soundscape' : 'Enable luxury soundscape'}
              aria-label={isAudioPlaying ? 'Mute sound' : 'Play sound'}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#A88B5C] animate-pulse" />
                  <span className="hidden xl:inline-block font-body text-[9px] uppercase tracking-[0.2em] text-[#A88B5C]">
                    Sound On
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-white/60 group-hover:text-white" />
                  <span className="hidden xl:inline-block font-body text-[9px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white">
                    Sound Off
                  </span>
                </>
              )}
            </button>

            {/* Magnetic CTA button: Start Your Project */}
            <button
              onClick={() => onOpenInquiry(1)}
              className="relative inline-flex items-center justify-center px-4 py-2 text-[10px] md:text-[11px] font-body uppercase tracking-[0.22em] text-[#FAF8F5] bg-transparent border border-[#A88B5C]/70 hover:bg-[#A88B5C] hover:text-[#0D0D0D] transition-all duration-500 overflow-hidden group focus:outline-none"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Start Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>

            {/* Menu overlay toggle button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white hover:text-[#A88B5C] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Menu Overlay with Image Preview */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] text-[#FAF8F5] flex flex-col justify-between p-6 md:p-14 overflow-y-auto"
          >
            {/* Top Bar inside overlay */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 pt-16">
              <span className="font-body text-[10px] uppercase tracking-[0.35em] text-[#A88B5C]">
                Navigation &bull; Austin, Texas
              </span>
              <span className="font-editorial text-sm italic text-white/50">
                Crafting Timeless Sanctuaries Since 2004
              </span>
            </div>

            {/* Center Grid: Navigation Links + Project Image Hover Preview */}
            <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Links Column */}
              <div className="lg:col-span-7 flex flex-col space-y-2 md:space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
                    onMouseEnter={() => setHoveredProjectImage(link.previewImg)}
                    className="group flex items-baseline gap-4 cursor-pointer"
                    onClick={() => handleLinkClick(link.sectionId)}
                  >
                    <span className="font-editorial text-xs text-[#A88B5C] tracking-widest tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="font-editorial text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white/80 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#A88B5C] transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Dynamic Project Image Preview Column (Desktop) */}
              <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
                <div className="relative w-full aspect-[4/5] max-w-sm overflow-hidden border border-white/10 bg-[#171717]">
                  <motion.img
                    key={hoveredProjectImage}
                    src={hoveredProjectImage}
                    alt="Interior Architecture Preview"
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-body uppercase tracking-[0.25em] text-white/70">
                    <span>Portfolio Archive</span>
                    <span className="text-[#A88B5C]">Austin &bull; Aspen &bull; Palm Beach</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Meta & Direct Contact Info */}
            <div className="border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] font-body tracking-wider text-white/60">
              <div>
                <p className="text-white uppercase tracking-widest text-[9px] mb-1">Direct Inquiries</p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-[#A88B5C] transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>
              <div>
                <p className="text-white uppercase tracking-widest text-[9px] mb-1">Telephone</p>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="hover:text-[#A88B5C] transition-colors"
                >
                  {BRAND.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center justify-start md:justify-end gap-4">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A88B5C] transition-colors uppercase tracking-[0.2em]"
                >
                  Instagram @{BRAND.instagram}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
