export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
  category: string;
  isNew?: boolean;
}

export const TOOLS_DATA: Tool[] = [
  {
    id: 'tro-ly-mon-van-pro',
    name: 'Trợ lý Môn Văn PRO',
    description: 'Trợ lý AI thông minh hỗ trợ giảng dạy và học tập môn Ngữ văn, soạn đề thi, phân tích tác phẩm, hướng dẫn viết văn.',
    url: 'https://trolymonvanpro.vercel.app/',
    icon: 'BookOpen',
    color: 'from-violet-500 to-purple-600',
    category: 'Ngữ văn',
    isNew: true,
  },
  {
    id: 'tro-ly-tin-hoc-thcs',
    name: 'Trợ lý Tin học THCS',
    description: 'Công cụ AI hỗ trợ dạy và học Tin học cấp THCS – giải bài tập, kiểm tra code, hướng dẫn lập trình.',
    url: 'https://trolytinhocthcs.vercel.app/',
    icon: 'Cpu',
    color: 'from-emerald-500 to-teal-600',
    category: 'Tin học',
    isNew: true,
  },
  {
    id: 'tro-ly-van-hoc-va-tin-hoc',
    name: 'Trợ lý Môn Văn và Tin học cấp THCS',
    description: 'Tổng hợp trợ lý AI cho cả Ngữ văn và Tin học cấp THCS – sửa lỗi chính tả, soạn văn, hỗ trợ lập trình.',
    url: 'https://trolyvanhocvatinhoc.vercel.app/',
    icon: 'GraduationCap',
    color: 'from-blue-500 to-indigo-600',
    category: 'Tổng hợp',
    isNew: true,
  },
];
