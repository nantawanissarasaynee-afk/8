import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Target,
  FileText,
  Milestone,
} from 'lucide-react';
import { ROADMAP_DATA, MilestoneItem } from '../data/proposalData';

export const RoadmapMilestonesSection: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number>(1);

  const currentMilestone =
    ROADMAP_DATA.find((item) => item.year === activeYear) || ROADMAP_DATA[0];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-900/50 p-6 sm:p-7">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Calendar className="w-4 h-4" />
          <span>แผนปฏิบัติการ ๑-๓ ปี (Phased Implementation Roadmap)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          กรอบเวลา แผนการดำเนินงาน และหมุดหมายความสำเร็จ ๓ ระยะ (พ.ศ. ๒๕๖๙ - ๒๕๗๑)
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
          การดำเนินงานแบ่งออกเป็น ๓ ระยะตามลำดับความสำคัญและความพร้อม เพื่อให้เกิดผลลัพธ์ที่จับต้องได้รวดเร็ว (Quick Wins)
          ควบคู่กับการปฏิรูปโครงสร้างทางคลินิกและการเรียนรู้ของบุคลากรอย่างยั่งยืน
        </p>
      </div>

      {/* Year Selection Tabs / Progress Line */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {ROADMAP_DATA.map((item) => {
          const isActive = activeYear === item.year;
          return (
            <button
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                isActive
                  ? 'bg-slate-800 border-emerald-500/80 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/50'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  ปีที่ {item.year}
                </span>
                <span className="text-[11px] text-slate-400">{item.period.split('(')[0]}</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-100 line-clamp-2">
                {item.phaseTitle.split(':')[1]?.trim() || item.phaseTitle}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{item.strategicTheme}</p>
            </button>
          );
        })}
      </div>

      {/* Active Phase Detailed View */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
        {/* Phase Header */}
        <div className="p-5 sm:p-6 bg-slate-800/40 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                ปีที่ {currentMilestone.year}
              </span>
              <span className="text-xs text-slate-300 font-medium">{currentMilestone.period}</span>
            </div>
            <h3 className="text-lg font-bold text-white">{currentMilestone.phaseTitle}</h3>
            <p className="text-xs text-emerald-400 font-medium mt-0.5">
              ธีมยุทธศาสตร์: {currentMilestone.strategicTheme}
            </p>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300">
            <strong>จุดเน้นหลัก:</strong> {currentMilestone.focusArea}
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Key Actions List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Milestone className="w-4 h-4 text-emerald-400" />
              <span>กิจกรรมและมาตรการขับเคลื่อนหลัก (Key Interventions & Actions)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentMilestone.keyActions.map((action, aIdx) => (
                <div
                  key={aIdx}
                  className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {aIdx + 1}
                  </div>
                  <span className="text-xs text-slate-200 leading-relaxed font-normal">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Two-column layout for Deliverables and KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Deliverables / Output */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>ผลผลิตและชิ้นงานที่เป็นรูปธรรม (Deliverables / Outputs)</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {currentMilestone.deliverables.map((deliv, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target KPIs for this phase */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase flex items-center gap-1.5">
                <Target className="w-4 h-4 text-rose-400" />
                <span>ตัวชี้วัดความสำเร็จของระยะนี้ (Milestone Target KPIs)</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {currentMilestone.kpis.map((kpi, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-200">{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
