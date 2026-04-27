"use client";

import { useState } from "react";
import { Lock, Search, Users, Calendar, Phone, Mail, ChevronRight, School, RefreshCw } from "lucide-react";
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
  createdAt: string;
};

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const refreshData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/applicants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setApplicants(result.data);
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
          <div className="flex gap-4">
             <button onClick={refreshData} className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-xl transition-colors">
               <RefreshCw size={24} className={loading ? "animate-spin" : ""} />
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
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Grade / Status</th>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Parent Details</th>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Date Applied</th>
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
                  filteredApplicants.map((app) => (
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
                      <td className="p-6 text-slate-500 font-medium">
                        {new Date(app.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
