"use client";

import { useState } from "react";
import { Lock, Search, Users, Calendar, Phone, Mail, ChevronRight, School, RefreshCw, CheckCircle2 } from "lucide-react";
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

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showRefreshed, setShowRefreshed] = useState(false);
  
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/admin/applicants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setApplicants(result.data);
        setIsAuthenticated(true);
      } else {
        setError(result.error || "Invalid password");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
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
        // Update local state
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

  // Reset to page 1 when searching
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">Admin Portal</h1>
          <p className="text-slate-500 mb-8 font-medium">Enter your secure password to view admissions.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-center focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-bold tracking-widest"
              />
            </div>
            {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
            >
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div>
            <h1 className="text-4xl font-heading font-bold mb-2">Enrollment Dashboard</h1>
            <p className="text-white/70 font-medium text-lg">Manage and review student applications</p>
          </div>
          <div className="flex items-center gap-4">
             <AnimatePresence>
               {showRefreshed && (
                 <motion.span 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="bg-green-500/20 text-green-300 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-green-500/30"
                 >
                   Data Refreshed!
                 </motion.span>
               )}
             </AnimatePresence>
             <button onClick={refreshData} className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl transition-colors relative group">
               <RefreshCw size={24} className={loading ? "animate-spin" : ""} />
               <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Refresh List</span>
             </button>
          </div>
        </div>
      </div>

      {/* Stats & Search */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
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
              <input 
                type="text" 
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by student, parent name, or phone..." 
                className="w-full bg-transparent border-none focus:outline-none font-medium text-lg text-primary placeholder-slate-300"
              />
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
                  <tr>
                    <td colSpan={4} className="p-12 text-center text-slate-500 font-medium">
                      No applications found.
                    </td>
                  </tr>
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
                        <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block ${
                          app.residentialStatus === 'Boarding' ? 'bg-gold/20 text-yellow-800' : 'bg-blue-50 text-blue-700'
                        }`}>
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
                          <button 
                            onClick={() => handleApprove(app._id)}
                            disabled={loading}
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:shadow-lg active:scale-95 disabled:opacity-50"
                          >
                            Admit
                          </button>
                        )}
                        <div className="mt-2 text-[10px] text-slate-400 font-medium">
                          {new Date(app.createdAt).toLocaleDateString()}
                        </div>
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
              <p className="text-sm font-medium text-slate-500">
                Showing <span className="text-primary font-bold">{startIndex + 1}</span> to <span className="text-primary font-bold">{Math.min(startIndex + itemsPerPage, filteredApplicants.length)}</span> of <span className="text-primary font-bold">{filteredApplicants.length}</span> applicants
              </p>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-primary disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary transition-colors shadow-sm"
                >
                  Previous
                </button>
                <div className="flex items-center gap-1">
                   {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                     <button
                       key={page}
                       onClick={() => setCurrentPage(page)}
                       className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                         currentPage === page ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary border border-slate-200 hover:border-primary'
                       }`}
                     >
                       {page}
                     </button>
                   ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-primary disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary transition-colors shadow-sm"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
