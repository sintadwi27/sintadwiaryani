/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  User,
  Mail,
  FileText,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  Download,
  Code2,
  Database,
  LineChart,
  Briefcase,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
  Layers,
  Compass,
  BookOpen,
  Send,
  Building2,
  ShieldCheck,
  Eye,
  CheckCircle2,
  PhoneCall,
  Laptop
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  tools: string[];
  impact: string;
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'semua' | 'teknis' | 'nonteknis'>('semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [photoModalOpen, setPhotoModalOpen] = useState<boolean>(false);
  const [contactSuccess, setContactSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const photoPath = '/assets/aistudio/pas_foto_latar_biru_40a84452.jpeg';
  const htmlPortfolioPath = '/Portofolio_Sinta_Dwi_Aryani.html';

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sintaryn27@gmail.com').then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }).catch(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan Portofolio dari ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nPengirim: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:sintaryn27@gmail.com?subject=${subject}&body=${body}`;
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 5000);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Perancangan Sistem Informasi Inventaris & Stok Barang',
      category: 'System Analysis & Design',
      description: 'Analisis kebutuhan operasional inventarisasi gudang, pemodelan alur kerja menggunakan diagram UML (Use Case & Activity Diagram), serta penyusunan skema data stok real-time.',
      deliverables: [
        'Diagram Alir Data (DFD) & UML',
        'Entity Relationship Diagram (ERD) Multi-Entity',
        'Wireframe Antarmuka Manajemen Barang Masuk & Keluar',
        'Katalog Kebutuhan Fungsional & Non-Fungsional'
      ],
      tools: ['UML Modeling', 'Entity Relationship Diagram', 'Figma', 'System Requirement Analysis'],
      impact: 'Mempercepat pencatatan mutasi barang dan meminimalisir deviasi selisih stok manual.'
    },
    {
      id: 2,
      title: 'Model Analisis Data Penjualan Menggunakan Spreadsheet',
      category: 'Data Analytics',
      description: 'Pengolahan dan visualisasi data transaksi penjualan komparatif untuk mengidentifikasi produk terlaris, tren pendapatan bulanan, dan margin laba kotor.',
      deliverables: [
        'Dashboard Interaktif Pivot Table & Pivot Charts',
        'Implementasi Rumus Lanjutan (XLOOKUP, INDEX-MATCH, SUMIFS)',
        'Data Cleansing & Format Standarisasi Transaksi',
        'Ringkasan Laporan Eksekutif untuk Pengambilan Keputusan'
      ],
      tools: ['Spreadsheet / Excel', 'Pivot Charts', 'Statistical Formulas', 'Data Cleaning'],
      impact: 'Menghasilkan insight visual cepat mengenai segmen produk bernilai tinggi untuk strategi promosi.'
    },
    {
      id: 3,
      title: 'Perancangan Skema Basis Data Relasional Manajemen Akademik',
      category: 'Database Management',
      description: 'Penyusunan struktur basis data relasional hingga bentuk normal ketiga (3NF) guna menjamin integritas data mahasiswa, dosen, mata kuliah, dan kartu hasil studi.',
      deliverables: [
        'Normalisasi Data (1NF, 2NF, hingga 3NF)',
        'Kueri DDL & DML untuk Operasi Transaksional',
        'Desain Foreign Key & Constraints Integritas Referensial',
        'Kueri Lanjutan Multi-Table JOIN & Agregasi'
      ],
      tools: ['Relational Database (SQL)', '3NF Normalization', 'Relational Schema', 'Data Integrity'],
      impact: 'Mencegah redundansi data dan mempercepat eksekusi kueri riwayat akademik mahasiswa.'
    }
  ];

  const technicalSkills = [
    { name: 'Dasar-Dasar Pemrograman', desc: 'Logika algoritma & struktur data dasar', icon: Code2, level: 85 },
    { name: 'Pengolahan Data Spreadsheet', desc: 'Pivot Table, VLOOKUP/XLOOKUP, formula kompleks', icon: LineChart, level: 90 },
    { name: 'Basis Data Relasional', desc: 'Konsep SQL, normalisasi data (1NF-3NF), ERD', icon: Database, level: 85 },
    { name: 'Analisis & Perancangan Sistem', desc: 'Pemodelan alur kerja, DFD, diagram UML', icon: Layers, level: 88 },
    { name: 'Pemahaman Proses Bisnis', desc: 'Analisis alur operasional & efisiensi kerja', icon: Briefcase, level: 86 }
  ];

  const softSkills = [
    { name: 'Berpikir Kritis & Analitis', desc: 'Mampu membedah akar permasalahan secara terstruktur', icon: Sparkles },
    { name: 'Pemecahan Masalah (Problem Solving)', desc: 'Solutif dan fokus pada kemudahan implementasi', icon: ShieldCheck },
    { name: 'Komunikasi yang Efektif', desc: 'Mampu menjembatani kebutuhan teknis dan pengguna non-teknis', icon: Mail },
    { name: 'Kerja Sama dalam Tim', desc: 'Kolaboratif, terbuka terhadap umpan balik dan masukan', icon: User },
    { name: 'Manajemen Waktu', desc: 'Terbiasa menetapkan prioritas dan menyelesaikan tugas tepat tempo', icon: Compass },
    { name: 'Kemampuan Belajar Mandiri', desc: 'Cepat beradaptasi terhadap perangkat lunak dan teknologi baru', icon: BookOpen }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#121915] text-[#E8EFEA]' : 'bg-[#FAFCFA] text-[#26382E]'}`}>
      
      {/* Top Notification Bar */}
      <div className={`${darkMode ? 'bg-[#1C2720] border-[#2E3F35]' : 'bg-[#EAF1EC] border-[#D1DED5]'} border-b px-4 py-2 text-xs text-center flex items-center justify-center gap-2 font-medium`}>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#4F745F] text-white">
          <GraduationCap className="w-3 h-3" /> Universitas Komputama Cilacap
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline opacity-80">Program Studi Sistem Informasi · Sinta Dwi Aryani</span>
        <a 
          href={htmlPortfolioPath}
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-2 underline text-[#C7526D] dark:text-[#E58AA0] hover:opacity-80 inline-flex items-center gap-1 font-semibold"
        >
          Lihat File HTML Asli <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-[#121915]/90 border-[#26382E]' : 'bg-[#FAFCFA]/90 border-[#E2EBE5]'}`}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 font-extrabold text-lg tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-[#4F745F] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              SD
            </span>
            <span>Sinta Dwi Aryani</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <a href="#profil" className="hover:text-[#4F745F] transition-colors">Profil</a>
            <a href="#prodi" className="hover:text-[#4F745F] transition-colors">Program Studi</a>
            <a href="#minat" className="hover:text-[#4F745F] transition-colors">Fokus Minat</a>
            <a href="#skill" className="hover:text-[#4F745F] transition-colors">Keterampilan</a>
            <a href="#proyek" className="hover:text-[#4F745F] transition-colors">Studi Kasus</a>
            <a href="#visi" className="hover:text-[#4F745F] transition-colors">Visi Karier</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Ganti Tema"
              className={`p-2 rounded-xl border transition-colors ${darkMode ? 'border-[#33463B] bg-[#1B2520] text-amber-300' : 'border-[#D1DED5] bg-white text-zinc-700 hover:bg-zinc-100'}`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#kontak"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-[#4F745F] hover:bg-[#3F5E4C] text-white shadow-sm transition-all transform active:scale-95"
            >
              <Mail className="w-4 h-4" /> Hubungi Saya
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#D1DED5] dark:border-[#33463B]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden px-5 py-4 border-b space-y-3 text-sm font-medium ${darkMode ? 'bg-[#18221C] border-[#2A3B31]' : 'bg-[#F3F7F4] border-[#DCE6E0]'}`}>
            <a 
              href="#profil" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#4F745F]"
            >
              Profil Diri
            </a>
            <a 
              href="#prodi" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#4F745F]"
            >
              Tentang Program Studi
            </a>
            <a 
              href="#minat" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#4F745F]"
            >
              Fokus Minat
            </a>
            <a 
              href="#skill" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#4F745F]"
            >
              Matriks Keterampilan
            </a>
            <a 
              href="#proyek" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#4F745F]"
            >
              Studi Kasus Proyek
            </a>
            <a 
              href="#visi" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#4F745F]"
            >
              Visi & Tujuan Karier
            </a>
            <a 
              href="#kontak" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-center rounded-lg bg-[#4F745F] text-white font-semibold"
            >
              Hubungi Sinta
            </a>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-5 pt-12 pb-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F4] dark:bg-[#2A1D21] text-[#C7526D] dark:text-[#E58AA0] border border-[#F5D0D9] dark:border-[#5A3540]">
                <span className="w-2 h-2 rounded-full bg-[#C7526D] animate-ping" />
                Mahasiswa Sistem Informasi · Tech & Business Enthusiast
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Halo! Saya Sinta,{' '}
                <span className="text-[#4F745F] dark:text-[#6F9A82] underline decoration-[#C7526D] decoration-4 underline-offset-8">
                  Sistem Informasi
                </span>{' '}
                Enthusiast.
              </h1>

              <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#4A5D52]'}`}>
                Saya <strong>Sinta Dwi Aryani</strong>, mahasiswa Universitas Komputama Cilacap Program Studi Sistem Informasi yang berfokus mempelajari bagaimana teknologi informasi dan pengelolaan data dapat dimanfaatkan untuk menyelesaikan permasalahan operasional, meningkatkan efisiensi pekerjaan, serta mendukung pengambilan keputusan yang tepat dalam dunia bisnis.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="#kontak"
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#4F745F] hover:bg-[#3F5E4C] text-white shadow-md shadow-[#4F745F]/20 transition-all transform hover:-translate-y-0.5"
                >
                  Mulai Terhubung
                </a>
                <a
                  href="#proyek"
                  className="px-6 py-3 rounded-xl font-semibold text-sm border-2 border-[#D1DED5] dark:border-[#33463B] hover:border-[#4F745F] dark:hover:border-[#6F9A82] text-current transition-all transform hover:-translate-y-0.5"
                >
                  Lihat Portofolio
                </a>
                <button
                  onClick={() => setPhotoModalOpen(true)}
                  className="px-4 py-3 rounded-xl font-semibold text-sm border border-[#F5D0D9] dark:border-[#5A3540] bg-[#FDF2F4] dark:bg-[#2A1D21] text-[#C7526D] dark:text-[#E58AA0] hover:opacity-90 inline-flex items-center gap-1.5 transition-all"
                >
                  <Eye className="w-4 h-4" /> Pas Foto Asli
                </button>
              </div>

              {/* Key tags */}
              <div className={`pt-4 border-t ${darkMode ? 'border-[#26382E] text-[#869E90]' : 'border-[#E2EBE5] text-[#5D7266]'} flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold`}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F745F]" /> Berpikir Logis & Analitis
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F745F]" /> Analisis Alur Sistem
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F745F]" /> Tata Kelola Data
                </span>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                
                {/* Decorative Background Elements */}
                <div className="absolute -top-4 -left-4 w-32 h-32 rounded-3xl bg-[#4F745F]/15 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-[#C7526D]/15 blur-2xl pointer-events-none" />

                {/* Card Container for Photo */}
                <div className={`relative p-3.5 rounded-[2.5rem] border shadow-xl transition-all duration-300 ${darkMode ? 'bg-[#18231D] border-[#2E4136] shadow-black/40' : 'bg-white border-[#D6E3DA] shadow-emerald-950/5'}`}>
                  
                  {/* Photo Frame */}
                  <div className="relative aspect-[3.8/5] rounded-[2rem] overflow-hidden bg-[#0A327A] group cursor-pointer" onClick={() => setPhotoModalOpen(true)}>
                    <img
                      src={photoPath}
                      alt="Pas Foto Latar Biru Sinta Dwi Aryani"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Gradient Overlay for Title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                        <Eye className="w-3.5 h-3.5" /> Klik untuk perbesar pas foto
                      </span>
                    </div>

                    {/* Blue Studio Badge */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#17469e]/90 text-white backdrop-blur-md border border-white/20 shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                      Pas Foto Latar Biru Resmi
                    </div>
                  </div>

                  {/* Caption & Quick Info below photo */}
                  <div className="mt-4 px-2 pb-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-base leading-tight">Sinta Dwi Aryani</h3>
                        <p className={`text-xs mt-0.5 ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                          Sistem Informasi · Universitas Komputama
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#4F745F]/15 text-[#4F745F] dark:text-[#7EB595]">
                        Aktif
                      </span>
                    </div>

                    {/* Action Bar inside card */}
                    <div className="mt-3.5 pt-3 border-t border-[#E2EBE5] dark:border-[#2A3B31] flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-[#C7526D] dark:text-[#E58AA0] font-medium">
                        ● Pas Foto Latar Biru Terpasang
                      </span>
                      <a
                        href={photoPath}
                        download="pas_foto_sinta_dwi_aryani.jpeg"
                        className="inline-flex items-center gap-1 font-semibold text-[#4F745F] dark:text-[#6F9A82] hover:underline"
                        title="Unduh foto asli"
                      >
                        <Download className="w-3.5 h-3.5" /> Unduh Foto
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className={`absolute -bottom-3 -left-3 px-4 py-2 rounded-2xl border shadow-lg flex items-center gap-2.5 ${darkMode ? 'bg-[#1D2B23] border-[#344C3D]' : 'bg-white border-[#D6E3DA]'}`}>
                  <div className="w-7 h-7 rounded-full bg-[#C7526D] text-white flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#C7526D] tracking-wider leading-none">Status Mahasiswa</p>
                    <p className="text-xs font-semibold leading-tight mt-0.5">Sistem Informasi Aktif</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* FOUR PILLARS BAR */}
        <section className={`border-y py-6 ${darkMode ? 'bg-[#16201A] border-[#26382E]' : 'bg-[#F3F7F4] border-[#D1DED5]'}`}>
          <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <span className="font-extrabold text-[#C7526D] text-lg leading-none">01.</span>
              <div>
                <h4 className="font-bold text-sm leading-snug">Analisis Kebutuhan</h4>
                <p className={`text-xs mt-0.5 ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>Identifikasi & alur sistem</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-extrabold text-[#C7526D] text-lg leading-none">02.</span>
              <div>
                <h4 className="font-bold text-sm leading-snug">Pengelolaan Data</h4>
                <p className={`text-xs mt-0.5 ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>Basis data & spreadsheet</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-extrabold text-[#C7526D] text-lg leading-none">03.</span>
              <div>
                <h4 className="font-bold text-sm leading-snug">Logika Pemrograman</h4>
                <p className={`text-xs mt-0.5 ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>Algoritma solusi digital</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-extrabold text-[#C7526D] text-lg leading-none">04.</span>
              <div>
                <h4 className="font-bold text-sm leading-snug">Teknologi Bisnis</h4>
                <p className={`text-xs mt-0.5 ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>Efisiensi & nilai strategis</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: PROFIL DIRI */}
        <section id="profil" className="max-w-6xl mx-auto px-5 py-20">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C7526D] dark:text-[#E58AA0]">
              01 · Profil Diri
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight max-w-3xl leading-snug">
              Membangun Pola Pikir Analitis & Sistematis untuk Menghasilkan Solusi Digital
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mt-10">
            <div className="lg:col-span-7 space-y-5 leading-relaxed text-base">
              <p className={darkMode ? 'text-[#A3B5AA]' : 'text-[#4A5D52]'}>
                Saya <strong>Sinta Dwi Aryani</strong> merupakan mahasiswa Universitas Komputama Cilacap Program Studi Sistem Informasi yang memiliki ketertarikan pada perkembangan teknologi informasi, pengelolaan data, dan pengembangan sistem digital.
              </p>
              <p className={darkMode ? 'text-[#A3B5AA]' : 'text-[#4A5D52]'}>
                Saya tertarik mempelajari bagaimana teknologi dapat dimanfaatkan untuk menyelesaikan permasalahan operasional, meningkatkan efisiensi pekerjaan, serta mendukung pengambilan keputusan dalam dunia bisnis. Sebagai mahasiswa, saya terus berupaya mengembangkan kemampuan berpikir logis, analitis, dan sistematis melalui proses pembelajaran serta praktik terarah secara bertahap.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-[#18231D] border-[#2A3B31]' : 'bg-[#FAFCFA] border-[#DCE6E0]'}`}>
                  <p className="text-xs font-semibold text-[#4F745F]">Institusi Pendidikan</p>
                  <p className="font-bold text-sm mt-1">Universitas Komputama Cilacap</p>
                </div>
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-[#18231D] border-[#2A3B31]' : 'bg-[#FAFCFA] border-[#DCE6E0]'}`}>
                  <p className="text-xs font-semibold text-[#4F745F]">Program Studi</p>
                  <p className="font-bold text-sm mt-1">Sistem Informasi (Strata 1)</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <blockquote className={`p-7 rounded-2xl border relative ${darkMode ? 'bg-[#251A1E] border-[#552E38] text-[#F3D7DF]' : 'bg-[#FDF2F4] border-[#F5D0D9] text-[#78283D]'}`}>
                <div className="text-4xl font-serif text-[#C7526D] mb-2 leading-none">“</div>
                <p className="italic text-base sm:text-lg leading-relaxed font-medium">
                  Bagi saya, teknologi bukan sekadar rangkaian kode atau infrastruktur, melainkan instrumen solutif untuk menyederhanakan alur kerja yang kompleks dan memberdayakan para pengambil keputusan.
                </p>
                <footer className="mt-4 pt-4 border-t border-[#F5D0D9] dark:border-[#552E38] text-xs font-bold uppercase tracking-wider text-[#C7526D]">
                  — Sinta Dwi Aryani
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Three Mindset Cards */}
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#18231D] border-[#2E3F35] hover:border-[#6F9A82]' : 'bg-white border-[#DCE6E0] hover:border-[#4F745F] shadow-sm'}`}>
              <div className="w-10 h-10 rounded-xl bg-[#4F745F]/15 text-[#4F745F] dark:text-[#6F9A82] flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Pola Pikir Logis</h3>
              <p className={`text-sm mt-2 leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                Menelaah dan membedah alur data serta permasalahan sistematis dengan langkah demi langkah terukur.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#18231D] border-[#2E3F35] hover:border-[#6F9A82]' : 'bg-white border-[#DCE6E0] hover:border-[#4F745F] shadow-sm'}`}>
              <div className="w-10 h-10 rounded-xl bg-[#C7526D]/15 text-[#C7526D] dark:text-[#E58AA0] flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Berorientasi Nilai Bisnis</h3>
              <p className={`text-sm mt-2 leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                Fokus menghasilkan solusi teknologi yang aplikatif, efisien dalam biaya, serta memberi nilai tambah nyata.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#18231D] border-[#2E3F35] hover:border-[#6F9A82]' : 'bg-white border-[#DCE6E0] hover:border-[#4F745F] shadow-sm'}`}>
              <div className="w-10 h-10 rounded-xl bg-[#4F745F]/15 text-[#4F745F] dark:text-[#6F9A82] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Pembelajar Adaptif</h3>
              <p className={`text-sm mt-2 leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                Cepat menyerap perkakas dan metodologi baru seiring laju perkembangan teknologi informasi yang pesat.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TENTANG PROGRAM STUDI */}
        <section id="prodi" className={`py-20 border-y ${darkMode ? 'bg-[#16201A] border-[#26382E]' : 'bg-[#F3F7F4] border-[#D1DED5]'}`}>
          <div className="max-w-6xl mx-auto px-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C7526D] dark:text-[#E58AA0]">
              02 · Tentang Program Studi
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 max-w-3xl leading-snug">
              Konvergensi Strategis: Teknologi Informasi, Bisnis, dan Manajemen
            </h2>
            <p className={`mt-5 max-w-4xl text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#4A5D52]'}`}>
              Sistem Informasi merupakan bidang ilmu yang menggabungkan teknologi informasi, bisnis, dan manajemen untuk menghasilkan solusi yang sesuai dengan kebutuhan pengguna. Dalam program studi ini, saya mempelajari dasar-dasar pemrograman, pengelolaan basis data, analisis dan perancangan sistem, serta pemanfaatan teknologi untuk mendukung proses bisnis. Melalui pembelajaran tersebut, saya ingin memahami tidak hanya bagaimana suatu sistem dibangun, tetapi juga bagaimana sistem tersebut dapat memberikan manfaat nyata, meningkatkan produktivitas, dan membantu menyelesaikan permasalahan secara efektif.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className={`p-7 rounded-2xl border transition-all ${darkMode ? 'bg-[#1D2B23] border-[#344C3D]' : 'bg-white border-[#DCE6E0]'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4F745F]/20 text-[#4F745F] dark:text-[#6F9A82] flex items-center justify-center font-bold">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">Teknologi Informasi</h3>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                  Pemrograman · Basis Data Relasional · Arsitektur Infrastruktur & Keamanan Sistem
                </p>
                <div className="mt-4 pt-3 border-t border-dashed border-[#D1DED5] dark:border-[#33463B] text-xs font-semibold text-[#4F745F]">
                  Pondasi Logika Digital
                </div>
              </div>

              <div className={`p-7 rounded-2xl border transition-all ${darkMode ? 'bg-[#1D2B23] border-[#344C3D]' : 'bg-white border-[#DCE6E0]'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C7526D]/20 text-[#C7526D] dark:text-[#E58AA0] flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">Bisnis & Manajemen</h3>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                  Pemodelan Proses Bisnis · Analisis Biaya & Manfaat · Efisiensi Rantai Pasok Operasional
                </p>
                <div className="mt-4 pt-3 border-t border-dashed border-[#D1DED5] dark:border-[#33463B] text-xs font-semibold text-[#C7526D]">
                  Pemberi Arah Strategis
                </div>
              </div>

              <div className={`p-7 rounded-2xl border transition-all ${darkMode ? 'bg-[#1D2B23] border-[#344C3D]' : 'bg-white border-[#DCE6E0]'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4F745F]/20 text-[#4F745F] dark:text-[#6F9A82] flex items-center justify-center font-bold">
                    <User className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">Kebutuhan Pengguna</h3>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                  Human-Centered Design · Pengalaman Pengguna (UX) · Peningkatan Produktivitas Kerja
                </p>
                <div className="mt-4 pt-3 border-t border-dashed border-[#D1DED5] dark:border-[#33463B] text-xs font-semibold text-[#4F745F]">
                  Fokus Solusi Nyata
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FOKUS MINAT */}
        <section id="minat" className="max-w-6xl mx-auto px-5 py-20">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C7526D] dark:text-[#E58AA0]">
              03 · Minat & Bidang Pengembangan
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Empat Pilar Keahlian yang Terus Dikembangkan
            </h2>
            <p className={`text-sm sm:text-base max-w-2xl ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
              Fokus pembelajaran komprehensif yang dirancang untuk mengintegrasikan teknis komputasi dan kebutuhan strategis organisasi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Card A */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${darkMode ? 'bg-[#18231D] border-[#2E3F35] hover:border-[#6F9A82]' : 'bg-white border-[#DCE6E0] hover:border-[#4F745F] shadow-sm'}`}>
              <div>
                <span className="inline-block w-8 h-8 rounded-lg bg-[#FDF2F4] dark:bg-[#2A1D21] text-[#C7526D] dark:text-[#E58AA0] font-extrabold text-sm text-center leading-8">
                  A
                </span>
                <h3 className="font-bold text-lg mt-3">Pengembangan Sistem Informasi</h3>
                <p className={`text-sm mt-3 leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                  Mempelajari proses analisis kebutuhan, perancangan, dan pengembangan sistem yang dapat membantu pengguna menjalankan aktivitas secara lebih terstruktur.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E2EBE5] dark:border-[#2A3B31] text-xs font-semibold text-[#4F745F]">
                System Analyst Track
              </div>
            </div>

            {/* Card B */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${darkMode ? 'bg-[#18231D] border-[#2E3F35] hover:border-[#6F9A82]' : 'bg-white border-[#DCE6E0] hover:border-[#4F745F] shadow-sm'}`}>
              <div>
                <span className="inline-block w-8 h-8 rounded-lg bg-[#FDF2F4] dark:bg-[#2A1D21] text-[#C7526D] dark:text-[#E58AA0] font-extrabold text-sm text-center leading-8">
                  B
                </span>
                <h3 className="font-bold text-lg mt-3">Analisis dan Pengelolaan Data</h3>
                <p className={`text-sm mt-3 leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                  Mempelajari cara mengumpulkan, mengolah, menyimpan, dan menganalisis data agar dapat menghasilkan informasi yang berguna untuk pengambilan keputusan.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E2EBE5] dark:border-[#2A3B31] text-xs font-semibold text-[#4F745F]">
                Data Analyst Track
              </div>
            </div>

            {/* Card C */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${darkMode ? 'bg-[#18231D] border-[#2E3F35] hover:border-[#6F9A82]' : 'bg-white border-[#DCE6E0] hover:border-[#4F745F] shadow-sm'}`}>
              <div>
                <span className="inline-block w-8 h-8 rounded-lg bg-[#FDF2F4] dark:bg-[#2A1D21] text-[#C7526D] dark:text-[#E58AA0] font-extrabold text-sm text-center leading-8">
                  C
                </span>
                <h3 className="font-bold text-lg mt-3">Pemrograman & Aplikasi</h3>
                <p className={`text-sm mt-3 leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                  Mempelajari logika pemrograman dan pengembangan aplikasi sebagai sarana untuk menciptakan solusi digital yang stabil dan mudah dipelihara.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E2EBE5] dark:border-[#2A3B31] text-xs font-semibold text-[#4F745F]">
                Software Engineering
              </div>
            </div>

            {/* Card D */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${darkMode ? 'bg-[#18231D] border-[#2E3F35] hover:border-[#6F9A82]' : 'bg-white border-[#DCE6E0] hover:border-[#4F745F] shadow-sm'}`}>
              <div>
                <span className="inline-block w-8 h-8 rounded-lg bg-[#FDF2F4] dark:bg-[#2A1D21] text-[#C7526D] dark:text-[#E58AA0] font-extrabold text-sm text-center leading-8">
                  D
                </span>
                <h3 className="font-bold text-lg mt-3">Teknologi untuk Bisnis</h3>
                <p className={`text-sm mt-3 leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                  Mempelajari bagaimana teknologi dapat digunakan untuk meningkatkan efisiensi operasional, mengelola transaksi, dan mendukung perkembangan suatu usaha.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E2EBE5] dark:border-[#2A3B31] text-xs font-semibold text-[#4F745F]">
                Business IT Strategy
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KETERAMPILAN */}
        <section id="skill" className={`py-20 border-y ${darkMode ? 'bg-[#16201A] border-[#26382E]' : 'bg-[#F3F7F4] border-[#D1DED5]'}`}>
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C7526D] dark:text-[#E58AA0]">
                  04 · Keterampilan
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Matriks Keterampilan
                </h2>
              </div>

              {/* Tabs */}
              <div className="inline-flex p-1 rounded-xl bg-white dark:bg-[#1D2B23] border border-[#D1DED5] dark:border-[#33463B] text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('semua')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'semua' ? 'bg-[#4F745F] text-white' : 'text-current hover:text-[#4F745F]'}`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setActiveTab('teknis')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'teknis' ? 'bg-[#4F745F] text-white' : 'text-current hover:text-[#4F745F]'}`}
                >
                  Teknis
                </button>
                <button
                  onClick={() => setActiveTab('nonteknis')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'nonteknis' ? 'bg-[#C7526D] text-white' : 'text-current hover:text-[#C7526D]'}`}
                >
                  Nonteknis
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              
              {/* Technical Skills Card */}
              {(activeTab === 'semua' || activeTab === 'teknis') && (
                <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-[#1D2B23] border-[#344C3D]' : 'bg-white border-[#DCE6E0]'}`}>
                  <div className="flex items-center gap-3 pb-5 border-b border-[#E2EBE5] dark:border-[#2E3F35]">
                    <div className="w-10 h-10 rounded-xl bg-[#4F745F]/20 text-[#4F745F] dark:text-[#6F9A82] flex items-center justify-center">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#4F745F] dark:text-[#6F9A82]">Keterampilan Teknis</h3>
                      <p className={`text-xs ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>Keahlian instrumen komputasi & analisis</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {technicalSkills.map((tech, idx) => {
                      const Icon = tech.icon;
                      return (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-bold flex items-center gap-2">
                              <Icon className="w-4 h-4 text-[#4F745F]" /> {tech.name}
                            </span>
                            <span className="text-xs font-semibold text-[#4F745F] dark:text-[#6F9A82]">
                              Kompeten
                            </span>
                          </div>
                          <p className={`text-xs ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                            {tech.desc}
                          </p>
                          <div className="w-full bg-[#EAF1EC] dark:bg-[#15201A] h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-[#4F745F] h-full rounded-full transition-all duration-500" 
                              style={{ width: `${tech.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Soft Skills Card */}
              {(activeTab === 'semua' || activeTab === 'nonteknis') && (
                <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-[#1D2B23] border-[#344C3D]' : 'bg-white border-[#DCE6E0]'}`}>
                  <div className="flex items-center gap-3 pb-5 border-b border-[#E2EBE5] dark:border-[#2E3F35]">
                    <div className="w-10 h-10 rounded-xl bg-[#C7526D]/20 text-[#C7526D] dark:text-[#E58AA0] flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#C7526D] dark:text-[#E58AA0]">Keterampilan Nonteknis</h3>
                      <p className={`text-xs ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>Kecakapan personal, kolaborasi & komunikasi</p>
                    </div>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {softSkills.map((soft, idx) => {
                      const Icon = soft.icon;
                      return (
                        <div 
                          key={idx}
                          className={`p-4 rounded-xl border transition-all ${darkMode ? 'bg-[#16201A] border-[#2A3B31]' : 'bg-[#FAFCFA] border-[#E5EDE8]'}`}
                        >
                          <div className="flex items-center gap-2 font-bold text-sm text-[#C7526D] dark:text-[#E58AA0]">
                            <Icon className="w-4 h-4 shrink-0" />
                            <span>{soft.name}</span>
                          </div>
                          <p className={`text-xs mt-2 leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                            {soft.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* SECTION 5: STUDI KASUS PROYEK */}
        <section id="proyek" className="max-w-6xl mx-auto px-5 py-20">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C7526D] dark:text-[#E58AA0]">
              05 · Studi Kasus Proyek
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Eksplorasi Proyek & Portofolio Karya
            </h2>
            <p className={`text-base max-w-3xl ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
              Representasi implementasi praktis konsep Sistem Informasi mulai dari analisis perancangan, pengelolaan basis data, hingga visualisasi data operasional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`p-6 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${darkMode ? 'bg-[#18231D] border-[#2E3F35] hover:border-[#6F9A82]' : 'bg-white border-[#DCE6E0] hover:border-[#4F745F]'}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FDF2F4] dark:bg-[#2A1D21] text-[#C7526D] dark:text-[#E58AA0]">
                      Proyek 0{proj.id}
                    </span>
                    <span className="text-[11px] font-semibold text-[#4F745F] dark:text-[#7EB595]">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg mt-4 leading-snug">
                    {proj.title}
                  </h3>
                  <p className={`text-xs mt-3 leading-relaxed line-clamp-3 ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                    {proj.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2EBE5] dark:border-[#2A3B31]">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.tools.slice(0, 2).map((tool, tidx) => (
                      <span key={tidx} className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
                        {tool}
                      </span>
                    ))}
                    {proj.tools.length > 2 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-medium">
                        +{proj.tools.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#4F745F] dark:text-[#6F9A82] group">
                    Buka Detail Proyek <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: VISI & TUJUAN KARIER */}
        <section id="visi" className={`py-20 border-y ${darkMode ? 'bg-[#16201A] border-[#26382E]' : 'bg-[#F3F7F4] border-[#D1DED5]'}`}>
          <div className="max-w-6xl mx-auto px-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C7526D] dark:text-[#E58AA0]">
              06 · Visi & Tujuan Karier
            </p>
            
            <blockquote className="text-2xl sm:text-3xl font-bold leading-snug mt-4 max-w-4xl">
              “Menjadi individu yang kompeten di bidang Sistem Informasi, mampu beradaptasi dengan perkembangan teknologi, serta dapat memberikan kontribusi melalui pemanfaatan teknologi yang tepat guna.”
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className={`p-7 rounded-2xl border ${darkMode ? 'bg-[#1D2B23] border-[#344C3D]' : 'bg-white border-[#DCE6E0]'}`}>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4F745F]" /> Komitmen Pencapaian
                </h3>
                <ul className={`mt-4 space-y-3 text-sm ${darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}`}>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F745F] mt-2 shrink-0" />
                    <span>Meningkatkan kemampuan teknis analitis secara berkelanjutan melalui praktik nyata.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F745F] mt-2 shrink-0" />
                    <span>Memperluas wawasan inovasi teknologi informasi dan otomatisasi proses bisnis modern.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F745F] mt-2 shrink-0" />
                    <span>Membangun portofolio pengalaman solid melalui studi kasus sistem nyata dan kolaborasi tim.</span>
                  </li>
                </ul>
              </div>

              <div className={`p-7 rounded-2xl border ${darkMode ? 'bg-[#251A1E] border-[#552E38]' : 'bg-[#FDF2F4] border-[#F5D0D9]'}`}>
                <h3 className="font-bold text-lg text-[#C7526D] dark:text-[#E58AA0] flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Target Peran Masa Depan
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-current opacity-90">
                  Fokus aspirasi profesional masa depan yang selaras dengan kurikulum Sistem Informasi:
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-xl font-bold text-xs bg-white/80 dark:bg-black/30 border border-[#F5D0D9] dark:border-[#552E38] text-[#C7526D] dark:text-[#E58AA0]">
                    System Analyst
                  </span>
                  <span className="px-3 py-1.5 rounded-xl font-bold text-xs bg-white/80 dark:bg-black/30 border border-[#F5D0D9] dark:border-[#552E38] text-[#C7526D] dark:text-[#E58AA0]">
                    Data Analyst
                  </span>
                  <span className="px-3 py-1.5 rounded-xl font-bold text-xs bg-white/80 dark:bg-black/30 border border-[#F5D0D9] dark:border-[#552E38] text-[#C7526D] dark:text-[#E58AA0]">
                    Information Systems Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: KONTAK */}
        <section id="kontak" className="max-w-6xl mx-auto px-5 py-20">
          <p className="text-xs font-bold uppercase tracking-wider text-[#C7526D] dark:text-[#E58AA0]">
            Hubungi Saya
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
            Mari Terhubung dan Berkolaborasi
          </h2>

          <div className="grid lg:grid-cols-12 gap-10 mt-10">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <p className={`text-base leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#4A5D52]'}`}>
                Tertarik berdiskusi seputar sistem informasi, pengolahan data, atau ingin mengenal latar belakang saya lebih jauh? Kirim pesan lewat formulir, atau hubungi langsung melalui email resmi.
              </p>

              <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#18231D] border-[#2E3F35]' : 'bg-white border-[#DCE6E0] shadow-sm'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4F745F]/20 text-[#4F745F] dark:text-[#6F9A82] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5D7266] dark:text-[#A3B5AA] font-semibold">Alamat Email</p>
                    <p className="font-bold text-sm sm:text-base break-all">sintaryn27@gmail.com</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E2EBE5] dark:border-[#2A3B31] flex flex-wrap gap-2.5">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-[#D1DED5] dark:border-[#33463B] hover:bg-[#4F745F] hover:text-white transition-all"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedEmail ? 'Email Berhasil Tersalin!' : 'Salin Alamat Email'}
                  </button>
                  <a
                    href="mailto:sintaryn27@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#4F745F] text-white hover:bg-[#3F5E4C] transition-all"
                  >
                    <Send className="w-3.5 h-3.5" /> Buka Mail Client
                  </a>
                </div>
              </div>

              {/* Download original HTML portfolio button */}
              <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-[#1D2B23] border-[#344C3D]' : 'bg-[#EAF1EC] border-[#D1DED5]'}`}>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-sm">Dokumen Portofolio HTML</h4>
                    <p className="text-xs opacity-80">Berkas HTML standalone dengan pas foto latar biru</p>
                  </div>
                  <a
                    href={htmlPortfolioPath}
                    download="Portofolio_Sinta_Dwi_Aryani.html"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4F745F] text-white inline-flex items-center gap-1 shadow-sm hover:bg-[#3F5E4C]"
                  >
                    <Download className="w-3.5 h-3.5" /> Unduh
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className={`p-8 rounded-2xl border space-y-4 ${darkMode ? 'bg-[#18231D] border-[#2E3F35]' : 'bg-white border-[#DCE6E0] shadow-sm'}`}>
                <h3 className="font-bold text-lg">Kirim Pesan Langsung</h3>
                
                {contactSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Pesan Anda disiapkan di aplikasi email default. Terima kasih!
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama Anda"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-colors ${darkMode ? 'bg-[#121915] border-[#2E3F35] text-white focus:border-[#6F9A82]' : 'bg-[#FAFCFA] border-[#D1DED5] text-zinc-900 focus:border-[#4F745F]'}`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-colors ${darkMode ? 'bg-[#121915] border-[#2E3F35] text-white focus:border-[#6F9A82]' : 'bg-[#FAFCFA] border-[#D1DED5] text-zinc-900 focus:border-[#4F745F]'}`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan, tawaran kolaborasi, atau pertanyaan Anda..."
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-colors ${darkMode ? 'bg-[#121915] border-[#2E3F35] text-white focus:border-[#6F9A82]' : 'bg-[#FAFCFA] border-[#D1DED5] text-zinc-900 focus:border-[#4F745F]'}`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-sm bg-[#4F745F] hover:bg-[#3F5E4C] text-white shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" /> Kirim Pesan Sekarang
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={`border-t py-10 transition-colors ${darkMode ? 'bg-[#101712] border-[#26382E]' : 'bg-white border-[#D1DED5]'}`}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-[#4F745F] text-white flex items-center justify-center font-bold text-[10px]">
              SD
            </span>
            <span className={darkMode ? 'text-[#A3B5AA]' : 'text-[#5D7266]'}>
              Copyright © 2026 Sinta Dwi Aryani · Program Studi Sistem Informasi
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-[#4F745F] transition-colors">Kembali ke Atas ↑</a>
            <span>•</span>
            <button onClick={handleCopyEmail} className="hover:text-[#4F745F] transition-colors">
              sintaryn27@gmail.com
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL: PHOTO LIGHTBOX */}
      {photoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setPhotoModalOpen(false)}>
          <div 
            className={`max-w-lg w-full rounded-3xl overflow-hidden border p-5 shadow-2xl relative ${darkMode ? 'bg-[#18231D] border-[#2E3F35]' : 'bg-white border-[#DCE6E0]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h4 className="font-bold text-base">Pas Foto Latar Biru</h4>
                <p className="text-xs text-zinc-500">Sinta Dwi Aryani · Sistem Informasi</p>
              </div>
              <button 
                onClick={() => setPhotoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 rounded-2xl overflow-hidden bg-[#0A327A] flex items-center justify-center aspect-[4/5] border">
              <img
                src={photoPath}
                alt="Pas Foto Latar Biru Sinta Dwi Aryani"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-[#C7526D] font-semibold">● Pas Foto Latar Biru Resmi</span>
              <a
                href={photoPath}
                download="pas_foto_sinta_dwi_aryani.jpeg"
                className="px-3.5 py-1.5 rounded-lg bg-[#4F745F] text-white font-semibold inline-flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" /> Unduh Pas Foto
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PROJECT DETAIL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div 
            className={`max-w-2xl w-full rounded-3xl overflow-hidden border p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-[#18231D] border-[#2E3F35]' : 'bg-white border-[#DCE6E0]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#FDF2F4] dark:bg-[#2A1D21] text-[#C7526D] dark:text-[#E58AA0]">
                  Studi Kasus 0{selectedProject.id} · {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6 text-sm">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#4F745F] mb-2">Deskripsi Proyek</h4>
                <p className={`leading-relaxed ${darkMode ? 'text-[#A3B5AA]' : 'text-[#4A5D52]'}`}>
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#4F745F] mb-3">Luaran & Artefak yang Dihasilkan</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border flex items-start gap-2 ${darkMode ? 'bg-[#141C17] border-[#25362B]' : 'bg-[#FAFCFA] border-[#E5EDE8]'}`}>
                      <CheckCircle2 className="w-4 h-4 text-[#4F745F] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#4F745F] mb-2">Dampak Solusi</h4>
                <p className={`p-3.5 rounded-xl border ${darkMode ? 'bg-[#2A1D21] border-[#552E38] text-[#F3D7DF]' : 'bg-[#FDF2F4] border-[#F5D0D9] text-[#78283D]'}`}>
                  {selectedProject.impact}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#4F745F] mb-2">Perangkat Lunak & Metode</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#4F745F]/15 text-[#4F745F] dark:text-[#7EB595]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-[#4F745F] text-white hover:bg-[#3F5E4C] transition-colors"
                >
                  Tutup Tinjauan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
