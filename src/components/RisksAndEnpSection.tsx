import React, { useState } from 'react';
import {
  ShieldAlert,
  AlertTriangle,
  Flame,
  CheckCircle2,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { RISKS_DATA, RiskItem } from '../data/proposalData';

export const RisksAndEnpSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ทั้งหมด');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedRiskId, setExpandedRiskId] = useState<string | null>('risk-1');

  const categories = ['ทั้งหมด', 'การคัดแยกและการเข้าถึง (Triage & Access)', 'การกู้ชีพและกลุ่มโรคเวลาทอง (Resuscitation & Time-Sensitive Emergencies)', 'ความปลอดภัยทางยาและหัตถการ (Medication Safety & Procedures)', 'การไหลเวียนของผู้ป่วยและการนอนค้าง (Patient Flow & Boarding)', 'สมรรถนะบุคลากรและวัฒนธรรมความปลอดภัย (Workforce & Safety Culture)'];

  const filteredRisks = RISKS_DATA.filter((risk) => {
    const matchesCategory = selectedCategory === 'ทั้งหมด' || risk.category === selectedCategory;
    const matchesSearch =
      risk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      risk.currentRisk.toLowerCase().includes(searchQuery.toLowerCase()) ||
      risk.enpNecessity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      risk.enpNecessity.competency.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedRiskId(expandedRiskId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-2xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-slate-900 border border-rose-900/50 p-6 sm:p-7">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>ประเด็นสำคัญที่ ๑ : การวิเคราะห์ความเสี่ยงและบทบาทเฉพาะทางของ ENP</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          ความเสี่ยงสำคัญที่พบในแผนกอุบัติเหตุฉุกเฉินปัจจุบัน และความจำเป็นเร่งด่วนในการนำความรู้ ENP มาแก้ไข
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
          การบริหารงานแผนกฉุกเฉินแบบเดิมกำลังเผชิญกับจุดวิกฤตจากความแออัดและโรคที่มีความซับซ้อนสูง การปฏิบัติการพยาบาลแบบทั่วไปไม่เพียงพอต่อการป้องกันเหตุไม่พึงประสงค์รุนแรง (Sentinel Events) จึงจำเป็นต้องอาศัย{' '}
          <span className="text-amber-300 font-semibold">พยาบาลเวชปฏิบัติฉุกเฉิน (Emergency Nurse Practitioner: ENP)</span>{' '}
          ซึ่งมีทักษะการตัดสินใจทางคลินิกขั้นสูง (Clinical Autonomy & Advanced Assessment) เข้ามาเป็นผู้นำการเปลี่ยนแปลงในระดับหน้างาน
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาความเสี่ยง, สมรรถนะ ENP, แนวทางแก้ไข..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-800/80 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-xs sm:text-sm bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-rose-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Risks List */}
      <div className="space-y-4">
        {filteredRisks.map((risk, index) => {
          const isExpanded = expandedRiskId === risk.id;

          return (
            <div
              key={risk.id}
              className={`rounded-xl border transition-all ${
                isExpanded
                  ? 'bg-slate-900 border-rose-500/50 shadow-xl shadow-rose-950/20'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Card Summary Header */}
              <button
                onClick={() => toggleExpand(risk.id)}
                className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 text-left"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      risk.severity === 'วิกฤตสูงมาก'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}
                  >
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-slate-400">
                        ความเสี่ยงที่ {index + 1}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {risk.category}
                      </span>
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                          risk.severity === 'วิกฤตสูงมาก'
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}
                      >
                        ระดับ: {risk.severity}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-100">
                      {risk.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-rose-400 hidden md:inline-flex items-center gap-1 font-medium">
                    {isExpanded ? 'ย่อรายละเอียด' : 'ดูบทบาท ENP'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Card Detail Content (Accordion) */}
              {isExpanded && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-2 border-t border-slate-800/80 space-y-5">
                  {/* Two Column Layout: Current Risk & Hazard vs ENP Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Left: The Risk & Problems */}
                    <div className="rounded-xl bg-slate-950/60 border border-rose-950/60 p-4 space-y-3">
                      <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase">
                        <Flame className="w-4 h-4 text-rose-500" />
                        <span>สภาพปัญหาและอันตรายทางคลินิกในปัจจุบัน</span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-slate-400">ลักษณะความเสี่ยงที่เกิดขึ้นจริง:</div>
                        <p className="text-xs text-slate-200 leading-relaxed">{risk.currentRisk}</p>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-slate-400">สาเหตุรากเหง้า (Root Causes):</div>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {risk.rootCauses.map((rc, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                              <span>{rc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200">
                        <strong>ผลกระทบต่อผู้ป่วยและองค์กร:</strong> {risk.clinicalImpact}
                      </div>
                    </div>

                    {/* Right: The ENP Necessity & Solution */}
                    <div className="rounded-xl bg-slate-800/40 border border-emerald-900/40 p-4 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                        <Stethoscope className="w-4 h-4 text-emerald-400" />
                        <span>ความจำเป็นและแนวทางแก้ไขด้วยความรู้ ENP</span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-emerald-300">
                          สมรรถนะเฉพาะทางของ ENP (Core Competency):
                        </div>
                        <p className="text-xs text-slate-200 font-medium">{risk.enpNecessity.competency}</p>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-slate-400">
                          มาตรการปฏิบัติการพยาบาลฉุกเฉินขั้นสูง (ENP Actions):
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-2.5 rounded-lg border border-slate-700/60">
                          {risk.enpNecessity.action}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>เหตุผลเชิงประจักษ์ (Clinical Rationale):</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{risk.enpNecessity.clinicalRationale}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expected Outcome Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-800/70 border border-slate-700/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>ผลลัพธ์ที่คาดหวังเมื่อนำ ENP เข้ามาแก้ไข:</span>
                    </div>
                    <div className="text-xs font-bold text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      {risk.expectedOutcome}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Matrix Box */}
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-3">
        <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-rose-400" />
          <span>สรุปสังเคราะห์: ทำไมต้องเป็น "พยาบาลเวชปฏิบัติฉุกเฉิน (ENP)" มิใช่พยาบาลทั่วไป?</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <div className="font-bold text-amber-300 mb-1">๑. การตัดสินใจทางคลินิกอิสระ (Autonomy)</div>
            <p className="text-slate-400">
              ENP มีอำนาจตามเกณฑ์สภาการพยาบาลในการสั่งตรวจแล็บด่วน, เอ็กซเรย์, และเริ่มให้ยาช่วยชีวิตตามโปรโตคอลได้ทันทีโดยไม่ต้องรอคิวแพทย์ ทำให้กระบวนการกู้ชีพไม่สะดุด
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <div className="font-bold text-amber-300 mb-1">๒. ทักษะหัตถการช่วยชีวิตขั้นสูง (Advanced Procedures)</div>
            <p className="text-slate-400">
              สามารถประเมิน POCUS (eFAST/Lung US), การเปิดหลอดเลือดดำส่วนกลาง, การจัดการทางเดินหายใจขั้นสูง และการควบคุมการบริหารยา Inotrope ได้อย่างแม่นยำ
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <div className="font-bold text-amber-300 mb-1">๓. การเป็นพี่เลี้ยงและผู้สร้างระบบ (Preceptor & System Driver)</div>
            <p className="text-slate-400">
              ช่วยยกระดับพยาบาลจบใหม่ผ่านระบบนิเทศทางคลินิก (Preceptorship) ลดความเครียดและอัตราการลาออก พร้อมทั้งผลักดันงานวิจัย R2R เพื่อพัฒนาแนวปฏิบัติสากล
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
