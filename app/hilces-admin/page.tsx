"use client";

import { useState, useEffect } from "react";
import { Lock, Search, Users, Calendar, Phone, Mail, ChevronRight, School, RefreshCw, CheckCircle2, Image as ImageIcon, Upload, Trash2, Globe, Home as HomeIcon, BookOpen, Activity as ActivityIcon, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Applicant = {
  _id: string;
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  gender: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  gradeApplyingFor: string;
  residentialStatus: string;
  previousSchool: string;
  status: 'pending' | 'admitted';
  createdAt: string;
};

type MediaOverride = {
  sectionId: string;
  imageUrl: string;
};

const MEDIA_SECTIONS = [
  { id: 'global-logo', label: 'School Logo', default: '/logo.jpeg', category: 'Global' },
  { id: 'home-slide-1', label: 'Home: Slide 1', default: '/slideshow/576274844_122193623714323889_1221105248129116435_n.jpg', category: 'Homepage' },
  { id: 'home-slide-2', label: 'Home: Slide 2', default: '/slideshow/649175189_122205799340323889_7498047806518144597_n.jpg', category: 'Homepage' },
  { id: 'home-slide-3', label: 'Home: Slide 3', default: '/slideshow/650919053_122205798848323889_6911637195678904279_n.jpg', category: 'Homepage' },
  { id: 'home-slide-4', label: 'Home: Slide 4', default: '/slideshow/649576528_122205799154323889_4336832064221734714_n.jpg', category: 'Homepage' },
  { id: 'home-slide-5', label: 'Home: Slide 5', default: '/slideshow/651051850_122205799826323889_9089719439425947692_n.jpg', category: 'Homepage' },
  { id: 'home-welcome-1', label: 'Welcome: Reading', default: '/images/welcome_reading.png', category: 'Homepage' },
  { id: 'home-welcome-2', label: 'Welcome: Robotics', default: '/images/welcome_robotics.png', category: 'Homepage' },
  { id: 'home-welcome-3', label: 'Welcome: Science', default: '/images/science_lab.png', category: 'Homepage' },
  { id: 'home-welcome-4', label: 'Welcome: ICT', default: '/images/welcome_ict.png', category: 'Homepage' },
  { id: 'home-why-curriculum', label: 'Why Choose: Curriculum', default: '/images/curriculum_feature.png', category: 'Homepage' },
  { id: 'home-why-activity', label: 'Why Choose: Activity', default: '/images/activity_feature.png', category: 'Homepage' },
  { id: 'home-why-mentors', label: 'Why Choose: Mentors', default: '/images/teacher_feature.png', category: 'Homepage' },
  { id: 'home-why-labs', label: 'Why Choose: Labs', default: '/images/lab_feature.png', category: 'Homepage' },
  { id: 'home-facility-1', label: 'Facility: Music', default: '/images/facility_multisensory.png', category: 'Homepage' },
  { id: 'home-facility-2', label: 'Facility: Science', default: '/images/science_lab.png', category: 'Homepage' },
  { id: 'home-facility-3', label: 'Facility: Dorm', default: '/images/modern_dorm.png', category: 'Homepage' },
  { id: 'home-facility-4', label: 'Facility: Robotics', default: '/images/robotics_class.png', category: 'Homepage' },
  { id: 'home-review-1', label: 'Parent Review: Pic 1', default: '/images/activity_feature.png', category: 'Homepage' },
  { id: 'home-review-2', label: 'Parent Review: Pic 2', default: '/images/lab_feature.png', category: 'Homepage' },
  { id: 'home-review-3', label: 'Parent Review: Pic 3', default: '/images/curriculum_feature.png', category: 'Homepage' },
  { id: 'about-hero', label: 'About: Hero', default: '/images/hero_school.png', category: 'About' },
  { id: 'about-philosophy', label: 'About: Philosophy', default: '/images/science_lab.png', category: 'About' },
  { id: 'academics-hero', label: 'Academics: Hero', default: '/images/robotics_class.png', category: 'Academics' },
  { id: 'academics-roots', label: 'Academics: Curriculum', default: '/images/science_lab.png', category: 'Academics' },
  { id: 'academics-lab', label: 'Academics: Lab', default: '/images/science_lab.png', category: 'Academics' },
  { id: 'academics-cta', label: 'Academics: CTA Bg', default: '/images/hero_school.png', category: 'Academics' },
  { id: 'activities-hero', label: 'Activities: Hero', default: '/images/robotics_class.png', category: 'Activities' },
  { id: 'activities-main', label: 'Activities: Talent', default: '/images/robotics_class.png', category: 'Activities' },
  { id: 'activities-cta', label: 'Activities: CTA Bg', default: '/images/hero_school.png', category: 'Activities' },
  { id: 'admissions-hero', label: 'Admissions: Hero', default: '/images/hero_school.png', category: 'Admissions' },
];

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<'applicants' | 'media'>('applicants');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showRefreshed, setShowRefreshed] = useState(false);
  
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [mediaOverrides, setMediaOverrides] = useState<Record<string, string>>({});
  const [searchTerm, setSearchTerm] = useState("");
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Fetch applicants
      const appRes = await fetch('/api/admin/applicants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const appResult = await appRes.json();

      if (appRes.ok && appResult.success) {
        setApplicants(appResult.data);
        setIsAuthenticated(true);
        // Also fetch media overrides
        fetchMedia();
      } else {
        setError(appResult.error || "Invalid password");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMedia = async () => {
    try {
      const formData = new FormData();
      formData.append('password', password);
      formData.append('action', 'list');
      
      const res = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        const map: Record<string, string> = {};
        result.data.forEach((item: any) => {
          map[item.sectionId] = item.imageUrl;
        });
        setMediaOverrides(map);
      }
    } catch (err) {
      console.error("Failed to fetch media", err);
    }
  };

  const handleUpload = async (sectionId: string, file: File) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('password', password);
      formData.append('action', 'upload');
      formData.append('sectionId', sectionId);
      formData.append('file', file);

      const res = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setMediaOverrides(prev => ({ ...prev, [sectionId]: result.data.imageUrl }));
        alert("Image updated successfully!");
      } else {
        alert(result.error || "Failed to upload image");
      }
    } catch (err) {
      console.error("Upload error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRevert = async (sectionId: string) => {
    if (!confirm("Revert to the original static image? This will delete the custom upload.")) return;
    
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('password', password);
      formData.append('action', 'delete');
      formData.append('sectionId', sectionId);

      const res = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setMediaOverrides(prev => {
          const next = { ...prev };
          delete next[sectionId];
          return next;
        });
      }
    } catch (err) {
      console.error("Revert error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    if (!confirm("Are you sure you want to admit this student? An SMS will be sent to the parent immediately.")) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setApplicants(prev => prev.map(app => 
          app._id === id ? { ...app, status: 'admitted' } : app
        ));
        setShowRefreshed(true);
        setTimeout(() => setShowRefreshed(false), 2000);
      } else {
        alert(result.error || "Failed to approve");
      }
    } catch (err) {
      console.error("Failed to approve", err);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/applicants?t=' + Date.now(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setApplicants(result.data);
        setShowRefreshed(true);
        setTimeout(() => setShowRefreshed(false), 2000);
      }
      fetchMedia();
    } catch (err) {
      console.error("Failed to refresh", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredApplicants = applicants.filter(app => 
    `${app.studentFirstName} ${app.studentLastName} ${app.parentName} ${app.parentPhone}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedApplicants = filteredApplicants.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-slate-100">
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">Admin Portal</h1>
          <p className="text-slate-500 mb-8 font-medium">Enter your secure password to access management tools.</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-center focus:outline-none focus:ring-2 focus:ring-gold font-bold tracking-widest" />
            {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
            <button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
              {loading ? "Verifying..." : "Access Portal"} <ChevronRight size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-primary text-white pt-10 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div>
              <h1 className="text-4xl font-heading font-bold mb-2">Hilces Management</h1>
              <p className="text-white/70 font-medium text-lg">School Administration Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
               <AnimatePresence>
                 {showRefreshed && (
                   <motion.span initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-green-500/20 text-green-300 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-green-500/30">
                     Data Refreshed!
                   </motion.span>
                 )}
               </AnimatePresence>
               <button onClick={refreshData} className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl transition-colors relative group">
                 <RefreshCw size={24} className={loading ? "animate-spin" : ""} />
               </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex bg-white/10 p-1 rounded-2xl backdrop-blur-md w-full max-w-md">
            <button onClick={() => setActiveTab('applicants')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${activeTab === 'applicants' ? 'bg-white text-primary shadow-lg' : 'text-white/70 hover:text-white'}`}>
              <Users size={18} /> Admissions
            </button>
            <button onClick={() => setActiveTab('media')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${activeTab === 'media' ? 'bg-white text-primary shadow-lg' : 'text-white/70 hover:text-white'}`}>
              <ImageIcon size={18} /> Media Manager
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
        {activeTab === 'applicants' ? (
          <>
            {/* Stats & Search */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Users size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Applications</p>
                  <h3 className="text-4xl font-bold text-primary">{applicants.length}</h3>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-6 md:col-span-2">
                <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center">
                  <Search size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Search Database</p>
                  <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by student, parent name, or phone..." className="w-full bg-transparent border-none focus:outline-none font-medium text-lg text-primary placeholder-slate-300" />
                </div>
              </div>
            </div>

            {/* Applicants List */}
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Student</th>
                      <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Grade / Residential</th>
                      <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Parent Details</th>
                      <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredApplicants.length === 0 ? (
                      <tr><td colSpan={4} className="p-12 text-center text-slate-500 font-medium">No applications found.</td></tr>
                    ) : (
                      paginatedApplicants.map((app) => (
                        <tr key={app._id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-6">
                            <div className="font-bold text-primary text-lg mb-1">{app.studentFirstName} {app.studentLastName}</div>
                            <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
                              <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">{app.gender}</span>
                              <span>DOB: {new Date(app.dateOfBirth).toLocaleDateString()}</span>
                            </div>
                          </td>
                          <td className="p-6">
                            <div className="font-bold text-primary mb-1">{app.gradeApplyingFor}</div>
                            <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block ${app.residentialStatus === 'Boarding' ? 'bg-gold/20 text-yellow-800' : 'bg-blue-50 text-blue-700'}`}>
                              {app.residentialStatus}
                            </div>
                          </td>
                          <td className="p-6">
                            <div className="font-bold text-primary mb-1">{app.parentName}</div>
                            <div className="text-sm font-medium text-slate-500 flex flex-col gap-1">
                              <a href={`tel:${app.parentPhone}`} className="flex items-center gap-1 hover:text-primary transition-colors"><Phone size={14} /> {app.parentPhone}</a>
                              {app.parentEmail && <a href={`mailto:${app.parentEmail}`} className="flex items-center gap-1 hover:text-primary transition-colors"><Mail size={14} /> {app.parentEmail}</a>}
                            </div>
                          </td>
                          <td className="p-6 text-right">
                            {app.status === 'admitted' ? (
                              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-green-100">
                                <CheckCircle2 size={14} /> Admitted
                              </div>
                            ) : (
                              <button onClick={() => handleApprove(app._id)} disabled={loading} className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">Admit</button>
                            )}
                            <div className="mt-2 text-[10px] text-slate-400 font-medium">{new Date(app.createdAt).toLocaleDateString()}</div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm font-medium text-slate-500">Showing <span className="text-primary font-bold">{startIndex + 1}</span> to <span className="text-primary font-bold">{Math.min(startIndex + itemsPerPage, filteredApplicants.length)}</span> of <span className="text-primary font-bold">{filteredApplicants.length}</span> applicants</p>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-primary disabled:opacity-40">Previous</button>
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-primary disabled:opacity-40">Next</button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDIA_SECTIONS.map((section) => {
              const currentSrc = mediaOverrides[section.id] || section.default;
              const isOverridden = !!mediaOverrides[section.id];
              
              return (
                <div key={section.id} className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col group">
                  <div className="relative h-48 bg-slate-900">
                    <Image src={currentSrc} alt={section.label} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                      {section.category}
                    </div>
                    {isOverridden && (
                      <div className="absolute top-4 right-4 bg-gold px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-lg">
                        Custom
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-xl font-heading font-bold text-primary mb-1">{section.label}</h4>
                    <p className="text-xs text-slate-400 font-medium mb-6">ID: {section.id}</p>
                    
                    <div className="mt-auto flex gap-2">
                      <label className="flex-1 bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-xl font-bold text-xs cursor-pointer transition-all flex items-center justify-center gap-2">
                        <Upload size={14} /> Upload
                        <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleUpload(section.id, file);
                        }} />
                      </label>
                      {isOverridden && (
                        <button onClick={() => handleRevert(section.id)} className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm">
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
