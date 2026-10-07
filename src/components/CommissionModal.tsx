import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommissionModal: React.FC<CommissionModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Creative Director',
    institution: '',
    email: '',
    scope: 'Spatial Campaign Direction',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="commission-dialog-title"
      className="fixed inset-0 z-50 bg-[#070606]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-[#11100F] border border-[#2A2928] p-8 md:p-10 space-y-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-6 right-6 text-[#787672] hover:text-[#EDECE8] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <CheckCircle2 className="w-12 h-12 text-[#780016] mx-auto" />
            <div className="space-y-2">
              <h3 className="text-2xl font-editorial text-[#EDECE8]">
                Dossier Request Transmitted
              </h3>
              <p className="text-xs text-[#A8A6A1] font-mono tracking-[0.2em] uppercase max-w-md mx-auto leading-relaxed">
                The VANTA curatorial bureau has logged your request for {formData.institution || 'your maison'}. Our direction will review your inquiry within 48 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#EDECE8] text-[#0A0A0A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C4C1BA] transition-colors"
            >
              Return to Campaign
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-2 border-b border-[#2A2928]/60 pb-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#780016] font-mono">
                CURATORIAL INQUIRY & REPRESENTATION
              </div>
              <h2 id="commission-dialog-title" className="text-3xl font-editorial text-[#EDECE8]">
                Request Commission Dossier
              </h2>
              <p className="text-xs text-[#787672] font-light leading-relaxed">
                For creative directors, luxury ateliers, spatial curators, and fashion publications seeking representation or campaign direction.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs tracking-[0.18em] uppercase">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#787672] block font-mono text-[10px]">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Helena Vance"
                    className="w-full bg-[#181615] border border-[#2A2928] p-2.5 text-[#EDECE8] placeholder-[#787672]/60 focus:border-[#EDECE8] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#787672] block font-mono text-[10px]">Professional Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#181615] border border-[#2A2928] p-2.5 text-[#EDECE8] focus:border-[#EDECE8] focus:outline-none"
                  >
                    <option value="Creative Director">Creative Director</option>
                    <option value="Fashion Stylist">Fashion Stylist</option>
                    <option value="Independent Atelier">Independent Atelier</option>
                    <option value="Photographer / DP">Photographer / DP</option>
                    <option value="Museum Curator">Museum Curator</option>
                    <option value="Press / Editorial">Press / Editorial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#787672] block font-mono text-[10px]">Maison / Entity</label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="Maison / Studio name"
                    className="w-full bg-[#181615] border border-[#2A2928] p-2.5 text-[#EDECE8] placeholder-[#787672]/60 focus:border-[#EDECE8] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#787672] block font-mono text-[10px]">Direct Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="direction@studio.com"
                    className="w-full bg-[#181615] border border-[#2A2928] p-2.5 text-[#EDECE8] placeholder-[#787672]/60 focus:border-[#EDECE8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#787672] block font-mono text-[10px]">Commission Scope</label>
                <select
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full bg-[#181615] border border-[#2A2928] p-2.5 text-[#EDECE8] focus:border-[#EDECE8] focus:outline-none"
                >
                  <option value="Spatial Campaign Direction">Spatial Campaign Direction</option>
                  <option value="Author Atelier Representation">Author Atelier Representation</option>
                  <option value="Exhibition Staging & Monograph">Exhibition Staging & Monograph</option>
                  <option value="Cinematographic Editorial Production">Cinematographic Editorial Production</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[#787672] block font-mono text-[10px]">Architectural / Project Notes</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the collection philosophy or architectural location..."
                  className="w-full bg-[#181615] border border-[#2A2928] p-2.5 text-[#EDECE8] placeholder-[#787672]/60 focus:border-[#EDECE8] focus:outline-none resize-none font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#EDECE8] hover:bg-[#C4C1BA] text-[#0A0A0A] font-semibold tracking-[0.25em] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Transmit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
