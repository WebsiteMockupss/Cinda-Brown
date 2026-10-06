import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ArrowLeft, Phone, Mail, MapPin, UploadCloud, Sparkles } from 'lucide-react';
import { BRAND } from '../data/content';

interface InquiryFormData {
  projectType: 'residential' | 'commercial' | '';
  scopes: string[];
  location: string;
  approxSquareFootage: string;
  timeline: string;
  investmentRange: string;
  styleNotes: string;
  inspirationFileName?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'either';
  honeypot: string; // Anti-spam trap
}

const initialFormData: InquiryFormData = {
  projectType: 'residential',
  scopes: ['full-home'],
  location: 'Austin, Texas',
  approxSquareFootage: '4,500 sq ft',
  timeline: 'Within 3-6 months',
  investmentRange: '$250k - $500k',
  styleNotes: '',
  inspirationFileName: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  preferredContact: 'email',
  honeypot: ''
};

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: number;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialStep = 1
}) => {
  const [step, setStep] = useState(initialStep);
  const [formData, setFormData] = useState<InquiryFormData>(() => {
    // Preserve state across sessions
    const saved = localStorage.getItem('cbi_inquiry_state');
    return saved ? JSON.parse(saved) : initialFormData;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRefNumber, setInquiryRefNumber] = useState('');

  // Persist form state
  useEffect(() => {
    localStorage.setItem('cbi_inquiry_state', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialStep) setStep(initialStep);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialStep]);

  if (!isOpen) return null;

  const handleScopeToggle = (scopeId: string) => {
    setFormData(prev => {
      const exists = prev.scopes.includes(scopeId);
      const updated = exists ? prev.scopes.filter(s => s !== scopeId) : [...prev.scopes, scopeId];
      return { ...prev, scopes: updated };
    });
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.projectType) newErrors.projectType = 'Please select residential or commercial';
      if (formData.scopes.length === 0) newErrors.scopes = 'Please select at least one scope';
    } else if (currentStep === 2) {
      if (!formData.location.trim()) newErrors.location = 'Project location is required (City, State)';
      if (!formData.approxSquareFootage.trim()) newErrors.approxSquareFootage = 'Approximate size is required';
      if (!formData.timeline) newErrors.timeline = 'Please indicate your timeline';
    } else if (currentStep === 3) {
      if (!formData.investmentRange) newErrors.investmentRange = 'Please select an estimated investment range';
    } else if (currentStep === 4) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Valid email address is required';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 5)); // Step 5 is review
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bot

    if (!validateStep(4)) {
      setStep(4);
      return;
    }

    setIsSubmitting(true);

    // Simulate API route call to Resend and Supabase lead storage
    setTimeout(() => {
      const ref = `CBI-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryRefNumber(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clear saved storage
      localStorage.removeItem('cbi_inquiry_state');
    }, 1400);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-[#0D0D0D] border border-white/15 text-[#FAF8F5] shadow-2xl overflow-hidden my-auto"
      >
        {/* Subtle decorative metallic hairline */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#A88B5C] to-transparent" />

        {/* Top Header */}
        <div className="flex items-center justify-between p-6 md:px-10 border-b border-white/10">
          <div>
            <span className="font-body text-[10px] tracking-[0.35em] text-[#A88B5C] uppercase">
              Project Commission Inquiry
            </span>
            <h2 className="font-editorial text-2xl md:text-3xl font-light text-white mt-1">
              {isSubmitted ? 'Inquiry Received' : 'Crafting Your Sanctuary'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Only if not submitted) */}
        {!isSubmitted && (
          <div className="px-6 md:px-10 pt-5 pb-2">
            <div className="flex items-center justify-between text-[10px] font-body uppercase tracking-[0.2em] text-white/50 mb-3">
              <span>Step 0{step} of 05</span>
              <span className="text-[#A88B5C]">
                {step === 1 && 'Scope & Type'}
                {step === 2 && 'Location & Scale'}
                {step === 3 && 'Investment & Vision'}
                {step === 4 && 'Contact Information'}
                {step === 5 && 'Review & Dispatch'}
              </span>
            </div>
            {/* Step progress pills */}
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div
                  key={i}
                  className={`h-[2px] transition-all duration-300 ${
                    i <= step ? 'bg-[#A88B5C]' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 md:px-10 md:py-8 max-h-[70vh] overflow-y-auto">
          {/* Honeypot field (hidden from real users) */}
          <input
            type="text"
            name="cbi_studio_hp"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
          />

          {!isSubmitted ? (
            <AnimatePresence mode="wait">
              {/* STEP 1: Project Type and Scope */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-3">
                      1. Select Project Classification
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          type: 'residential' as const,
                          title: 'Private Residential',
                          desc: 'Penthouses, estates, historic renovations, hill country retreats'
                        },
                        {
                          type: 'commercial' as const,
                          title: 'Boutique Commercial',
                          desc: 'Creative headquarters, hospitality salons, executive offices'
                        }
                      ].map(item => (
                        <div
                          key={item.type}
                          onClick={() => setFormData({ ...formData, projectType: item.type })}
                          className={`cursor-pointer p-4 border transition-all duration-300 ${
                            formData.projectType === item.type
                              ? 'border-[#A88B5C] bg-[#A88B5C]/10 text-white'
                              : 'border-white/10 hover:border-white/30 text-white/70'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-editorial text-lg text-white">{item.title}</span>
                            {formData.projectType === item.type && (
                              <Check className="w-4 h-4 text-[#A88B5C]" />
                            )}
                          </div>
                          <p className="font-body text-xs text-white/50">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-3">
                      2. Project Scope (Select all applicable)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'full-home', label: 'Ground-Up / Full Home' },
                        { id: 'renovation', label: 'Architectural Renovation' },
                        { id: 'custom-furnishing', label: 'Bespoke Furnishing & Art' },
                        { id: 'historic', label: 'Historic Restoration' },
                        { id: 'kitchen-bath', label: 'Kitchen & Bath Suites' },
                        { id: 'outdoor-living', label: 'Outdoor Sanctuary' }
                      ].map(scope => {
                        const checked = formData.scopes.includes(scope.id);
                        return (
                          <button
                            type="button"
                            key={scope.id}
                            onClick={() => handleScopeToggle(scope.id)}
                            className={`p-3 text-left border text-xs font-body transition-all duration-200 ${
                              checked
                                ? 'border-[#A88B5C] bg-[#A88B5C]/15 text-white'
                                : 'border-white/10 hover:border-white/30 text-white/60'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{scope.label}</span>
                              {checked && <Check className="w-3.5 h-3.5 text-[#A88B5C]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {errors.scopes && (
                      <p className="text-xs text-red-400 mt-2">{errors.scopes}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Location, Size, Timeline */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                      Property Location (City, State / Neighborhood)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Austin, TX (Old West Austin or Westlake)"
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C] transition-colors"
                    />
                    {errors.location && (
                      <p className="text-xs text-red-400 mt-1">{errors.location}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                        Approximate Interior Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5,000 sq ft or 450 m²"
                        value={formData.approxSquareFootage}
                        onChange={e => setFormData({ ...formData, approxSquareFootage: e.target.value })}
                        className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C] transition-colors"
                      />
                      {errors.approxSquareFootage && (
                        <p className="text-xs text-red-400 mt-1">{errors.approxSquareFootage}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                        Anticipated Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C] transition-colors cursor-pointer"
                      >
                        <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                        <option value="Within 3-6 months">Within 3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="Planning for next year">Planning for next year</option>
                        <option value="Architectural Design Stage">Currently in architectural design</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Investment Range & Style Notes */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                      Estimated Design & Furnishing Investment
                    </label>
                    <p className="text-xs text-white/50 mb-3">
                      Helps us assemble the appropriate architectural fabrication and material recommendations.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        '$100k — $250k',
                        '$250k — $500k',
                        '$500k — $1M',
                        '$1M+'
                      ].map(range => (
                        <button
                          type="button"
                          key={range}
                          onClick={() => setFormData({ ...formData, investmentRange: range })}
                          className={`p-3.5 text-center border font-editorial text-lg transition-all ${
                            formData.investmentRange === range
                              ? 'border-[#A88B5C] bg-[#A88B5C]/15 text-white'
                              : 'border-white/10 hover:border-white/30 text-white/70'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                      Aesthetic Aspirations & Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share elements of your personal style, tactile preferences (e.g., travertine, aged brass, linen), and lifestyle aspirations..."
                      value={formData.styleNotes}
                      onChange={e => setFormData({ ...formData, styleNotes: e.target.value })}
                      className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-1">
                      Inspiration File (Optional)
                    </label>
                    <label className="border border-dashed border-white/20 hover:border-[#A88B5C] p-4 flex items-center justify-center gap-3 cursor-pointer transition-colors bg-[#171717]/50">
                      <UploadCloud className="w-5 h-5 text-[#A88B5C]" />
                      <span className="text-xs text-white/70">
                        {formData.inspirationFileName || 'Upload floor plan, sketch, or moodboard (PDF, PNG, JPG)'}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*,application/pdf"
                        onChange={e => {
                          if (e.target.files?.[0]) {
                            setFormData({ ...formData, inspirationFileName: e.target.files[0].name });
                          }
                        }}
                      />
                    </label>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Contact Details */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Cinda"
                        value={formData.firstName}
                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C]"
                      />
                      {errors.firstName && <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Brown"
                        value={formData.lastName}
                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C]"
                      />
                      {errors.lastName && <p className="text-xs text-red-400 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="client@domain.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C]"
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                        Telephone *
                      </label>
                      <input
                        type="tel"
                        placeholder="(512) 555-0199"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C]"
                      />
                      {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                      Personal Note or Additional Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific architectural dates, builder/architect collaboration details, or questions..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#171717] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A88B5C]"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.25em] text-[#A88B5C] mb-2">
                      Preferred Mode of Initial Discussion
                    </label>
                    <div className="flex gap-4">
                      {(['email', 'phone', 'either'] as const).map(mode => (
                        <label key={mode} className="flex items-center gap-2 cursor-pointer text-xs text-white/80">
                          <input
                            type="radio"
                            name="preferredContact"
                            checked={formData.preferredContact === mode}
                            onChange={() => setFormData({ ...formData, preferredContact: mode })}
                            className="accent-[#A88B5C]"
                          />
                          <span className="capitalize">{mode}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Review Before Submission */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <p className="font-editorial text-lg text-white/90 italic">
                    Please review your project parameters prior to studio submission. Cinda Brown and our principal design directors review each portfolio inquiry personally.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body border border-white/10 p-5 bg-[#171717]/60">
                    <div>
                      <span className="text-[#A88B5C] uppercase tracking-widest block text-[10px]">Classification</span>
                      <p className="text-white capitalize font-medium mt-0.5">{formData.projectType}</p>
                    </div>
                    <div>
                      <span className="text-[#A88B5C] uppercase tracking-widest block text-[10px]">Location & Area</span>
                      <p className="text-white font-medium mt-0.5">{formData.location} &bull; {formData.approxSquareFootage}</p>
                    </div>
                    <div>
                      <span className="text-[#A88B5C] uppercase tracking-widest block text-[10px]">Target Timeline</span>
                      <p className="text-white font-medium mt-0.5">{formData.timeline}</p>
                    </div>
                    <div>
                      <span className="text-[#A88B5C] uppercase tracking-widest block text-[10px]">Investment Scale</span>
                      <p className="text-white font-medium mt-0.5">{formData.investmentRange}</p>
                    </div>
                    <div className="md:col-span-2 pt-2 border-t border-white/10">
                      <span className="text-[#A88B5C] uppercase tracking-widest block text-[10px]">Contact</span>
                      <p className="text-white font-medium mt-0.5">
                        {formData.firstName} {formData.lastName} &bull; {formData.email} &bull; {formData.phone}
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-white/50">
                    By submitting, your inquiry will be routed directly to <span className="text-[#A88B5C]">cinda@cindabrowninteriors.com</span>. You will receive an immediate confirmation dispatch.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            /* Animated Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-10 text-center space-y-6"
            >
              <div className="mx-auto w-16 h-16 rounded-full border border-[#A88B5C] flex items-center justify-center bg-[#A88B5C]/10 text-[#A88B5C]">
                <Sparkles className="w-8 h-8" />
              </div>

              <div>
                <span className="font-body text-[10px] uppercase tracking-[0.35em] text-[#A88B5C]">
                  Reference #{inquiryRefNumber}
                </span>
                <h3 className="font-editorial text-3xl md:text-4xl font-light text-white mt-2">
                  Thank You, {formData.firstName}.
                </h3>
                <p className="font-editorial text-lg text-white/70 italic max-w-lg mx-auto mt-2">
                  We look forward to hearing from you and discussing your vision for living.
                </p>
              </div>

              <div className="max-w-md mx-auto text-xs font-body text-white/60 bg-[#171717] p-5 border border-white/10 text-left space-y-2">
                <p>
                  A confirmation summary has been sent to <span className="text-white font-medium">{formData.email}</span>.
                </p>
                <p>
                  Cinda Brown and our Austin studio team review all inquiries within 24 to 48 business hours. For urgent architectural inquiries, you may call our studio directly.
                </p>
                <div className="pt-2 flex items-center gap-4 text-[#A88B5C]">
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:underline">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{BRAND.phoneFormatted}</span>
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1.5 hover:underline">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{BRAND.email}</span>
                  </a>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="inline-flex items-center justify-center px-8 py-3 text-xs uppercase tracking-[0.25em] bg-[#A88B5C] text-[#0D0D0D] font-medium hover:bg-[#FAF8F5] transition-colors"
              >
                Return to Studio
              </button>
            </motion.div>
          )}
        </div>

        {/* Modal Footer Controls (Only if not submitted) */}
        {!isSubmitted && (
          <div className="p-6 md:px-10 border-t border-white/10 flex items-center justify-between bg-[#0D0D0D]">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs text-white/40">
                <MapPin className="w-3.5 h-3.5 text-[#A88B5C]" />
                <span className="text-[10px] uppercase tracking-widest">{BRAND.city}</span>
              </div>
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-body uppercase tracking-[0.22em] bg-[#FAF8F5] text-[#0D0D0D] hover:bg-[#A88B5C] transition-colors font-medium"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 text-xs font-body uppercase tracking-[0.25em] bg-[#A88B5C] text-[#0D0D0D] hover:bg-[#FAF8F5] transition-colors font-medium disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Dispatching to Cinda...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
