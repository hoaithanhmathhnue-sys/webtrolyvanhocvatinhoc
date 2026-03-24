/**
 * Kho Công cụ AI - Cô Thu Trang
 * Website cá nhân giới thiệu các ứng dụng AI hỗ trợ giảng dạy
 * Cô Thu Trang - Trường THPT Sơn Dương
 */

import React, { useState } from 'react';
import { 
  FlaskConical, 
  Gamepad2, 
  GraduationCap, 
  ExternalLink,
  Sparkles,
  Search,
  BookOpen,
  Monitor,
  Cpu,
  ArrowRight,
  Heart,
  Star,
  Zap,
  Rocket
} from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Tool, TOOLS_DATA } from './types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Icon mapping
const IconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  FlaskConical,
  Gamepad2,
  GraduationCap,
  BookOpen,
  Monitor,
  Cpu,
};

function ToolIcon({ iconName, size = 24, className = '' }: { iconName: string; size?: number; className?: string }) {
  const Icon = IconMap[iconName] || Sparkles;
  return <Icon size={size} className={className} />;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  // Get unique categories
  const categories = ['Tất cả', ...Array.from(new Set(TOOLS_DATA.map(t => t.category)))];

  // Filter tools
  const filteredTools = TOOLS_DATA.filter(tool => {
    const matchSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'Tất cả' || tool.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-[#faf5ff]">
      {/* ===== HEADER ===== */}
      <header className="gradient-header text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center animate-pulse-glow">
                <Rocket size={22} className="text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight tracking-tight">KHO CÔNG CỤ AI</h1>
                <p className="text-white/80 text-[11px] font-medium">Cô Thu Trang — Trường THPT Sơn Dương</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
              <Zap size={16} className="text-amber-300" />
              <span className="text-sm font-medium text-white/90">Công cụ AI hỗ trợ dạy học hiệu quả</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="gradient-hero text-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-pink-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/15">
                <Star size={14} className="text-amber-300 fill-amber-300" />
                <span className="text-sm font-medium text-white/90">Cô Thu Trang — Trường THPT Sơn Dương</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
                Kho Công cụ{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 animate-gradient">
                  AI Thông minh
                </span>
                <br />
                <span className="text-2xl md:text-3xl font-bold text-white/80 mt-2 block">
                  Hỗ trợ Giảng dạy Hiệu quả
                </span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                Tổng hợp các ứng dụng AI thông minh, hỗ trợ giáo viên trong việc giảng dạy Ngữ văn, Tin học và mang lại trải nghiệm học tập thú vị cho học sinh.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <motion.div 
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 font-medium">{TOOLS_DATA.length} công cụ</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 font-medium">Miễn phí 100%</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 font-medium">Cập nhật liên tục</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SEARCH & FILTER BAR ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <motion.div 
          className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/60 p-4 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm công cụ..."
              className="w-full bg-purple-50/50 border border-purple-200/50 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/30 focus:border-purple-400/50 transition-all text-sm placeholder:text-slate-400"
            />
          </div>
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap",
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-md shadow-purple-300/30"
                    : "bg-purple-50 text-slate-600 hover:bg-purple-100 hover:text-purple-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ===== TOOLS GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Công cụ AI</span>
            </h3>
            <p className="text-slate-500 text-sm mt-1">Chọn công cụ để bắt đầu sử dụng</p>
          </div>
          <span className="text-sm bg-purple-100 text-purple-600 font-bold px-3 py-1 rounded-full">{filteredTools.length} công cụ</span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <motion.a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="tool-card group block no-underline"
              >
                {/* Card Header - Gradient */}
                <div className={cn("h-40 bg-gradient-to-br flex items-center justify-center relative", tool.color)}>
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="tool-card-icon transition-transform duration-300 relative z-10">
                    <ToolIcon iconName={tool.icon} size={60} className="text-white/90 drop-shadow-lg" />
                  </div>
                  {tool.isNew && (
                    <span className="absolute top-3 right-3 badge-new text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Mới
                    </span>
                  )}
                  {/* Decorative circles */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -mb-10 -ml-10"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-purple-500 uppercase tracking-wider">{tool.category}</span>
                    <h4 className="text-lg font-bold text-slate-800 mt-1 leading-snug group-hover:text-purple-600 transition-colors line-clamp-2">
                      {tool.name}
                    </h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {tool.description}
                  </p>
                  <div className="tool-card-btn flex items-center justify-center gap-2 bg-purple-50 text-purple-600 py-3 rounded-xl font-bold text-sm transition-all">
                    <span>Truy cập ngay</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={28} className="text-purple-400" />
            </div>
            <p className="text-slate-500 font-medium">Không tìm thấy công cụ nào phù hợp</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('Tất cả'); }} className="text-purple-600 font-semibold text-sm mt-2 hover:underline">
              Xóa bộ lọc
            </button>
          </div>
        )}
      </section>

      {/* ===== COMING SOON ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div 
          className="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-purple-200/40 text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="animate-float inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-300/30">
                <Sparkles size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Sắp có thêm công cụ mới! 🚀</h3>
            <p className="text-slate-500 max-w-lg mx-auto">
              Cô Thu Trang đang phát triển thêm nhiều công cụ AI thú vị khác. Hãy quay lại thường xuyên để khám phá nhé!
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                <Rocket size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Kho Công cụ AI</p>
                <p className="text-xs text-slate-500">Cô Thu Trang — Trường THPT Sơn Dương</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <span>Được tạo với</span>
              <Heart size={14} className="text-pink-500 fill-pink-500" />
              <span>cho giáo dục Việt Nam</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
