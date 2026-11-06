import React from 'react';
import {
  ShieldAlert,
  Target,
  Compass,
  Calendar,
  BarChart3,
  FileText,
  Printer,
  Copy,
  Check,
  Settings,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { ProposalMetadata } from '../utils/planCalculations';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  metadata: ProposalMetadata;
  onOpenSettings: () => void;
  onCopyAll: () => void;
  isCopied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  metadata,
  onOpenSettings,
  onCopyAll,
  isCopied,
}) => {
  const tabs = [
    { id: 'overview', label: 'ภาพรวมโครงการ', icon: Sparkles },
    { id: 'risks-enp', label: '๑. ความเสี่ยง & ความจำเป็น ENP', icon: ShieldAlert },
    { id: 'objectives', label: '๒. วัตถุประสงค์โครงการ', icon: Target },
    { id: 'strategy', label: '๓. ความสอดคล้องยุทธศาสตร์', icon: Compass },
    { id: 'roadmap', label: 'แผนดำเนินงาน ๑-๓ ปี', icon: Calendar },
    { id: 'kpis', label: 'ตัวชี้วัด & ผลสัมฤทธิ์', icon: BarChart3 },
    { id: 'document', label: 'เอกสารทางการฉบับเต็ม', icon: FileText },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      {/* Top Banner with Hospital Info & Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-950/40">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  ENP Strategic Project Plan
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {metadata.hospitalTier} • {metadata.targetYears}
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-100 leading-tight">
                แผนพัฒนาบทบาทพยาบาลเวชปฏิบัติฉุกเฉิน (ENP) ในการร่วมพัฒนาแผนกอุบัติเหตุฉุกเฉิน ๑-๓ ปี
              </h1>
              <p className="text-xs text-slate-400">
                {metadata.departmentName} {metadata.hospitalName} | ผู้เสนอ: <span className="text-slate-300 font-medium">{metadata.authorName}</span> ({metadata.authorPosition})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-center">
            <button
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
              title="ตั้งค่าข้อมูลโรงพยาบาลและผู้เสนอ"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>ปรับแต่งข้อมูล</span>
            </button>

            <button
              onClick={onCopyAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition"
              title="คัดลอกเนื้อหาโครงการทั้งหมด"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'คัดลอกสำเร็จ!' : 'คัดลอกเนื้อหา'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-rose-600 hover:bg-rose-500 text-white shadow-sm transition"
              title="พิมพ์เอกสารโครงการ / พิมพ์เป็น PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>พิมพ์ / ส่งออก PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 overflow-x-auto no-scrollbar">
        <nav className="flex items-center gap-1.5 py-2 min-w-max px-0.5" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40 font-semibold ring-1 ring-rose-400/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
