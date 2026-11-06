import React, { useState } from 'react';
import {
  Target,
  ShieldAlert,
  Activity,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { OBJECTIVES_DATA, ObjectiveCategory } from '../data/proposalData';

export const ObjectivesSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('all');

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-blue-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
      default:
        return <Target className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredCategories =
    selectedPillar === 'all'
      ? OBJECTIVES_DATA
      : OBJECTIVES_DATA.filter((cat) => cat.id === selectedPillar);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-slate-900 border border-blue-900/50 p-6 sm:p-7">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Target className="w-4 h-4" />
          <span>ประเด็นสำคัญที่ ๒ : วัตถุประสงค์ของโครงการ (Project Objectives)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          เป้าหมายและวัตถุประสงค์การพัฒนาแผนกอุบัติเหตุฉุกเฉิน ๔ มิติ (SMART Framework)
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
          กำหนดเป้าหมายเชิงยุทธศาสตร์ที่ชัดเจน วัดผลได้จริง (Specific, Measurable, Achievable, Relevant, Time-bound)
          เพื่อเป็นทิศทางในการร่วมพัฒนาแผนกอุบัติเหตุฉุกเฉินในระยะเวลา ๑-๓ ปี มุ่งสู่ผลลัพธ์ทางคลินิกที่เป็นเลิศ
        </p>
      </div>

      {/* วัตถุประสงค์ทั่วไป (General Objective) Callout Box */}
      <div className="rounded-xl bg-slate-900 border-2 border-dashed border-blue-500/40 p-5 sm:p-6 space-y-2">
        <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
          <Layers className="w-4 h-4 text-blue-400" />
          <span>วัตถุประสงค์ทั่วไป (General Objective)</span>
        </div>
        <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
          "เพื่อพัฒนาระบบบริการการพยาบาลผู้ป่วยอุบัติเหตุและฉุกเฉิน โดยบูรณาการบทบาทและสมรรถนะขั้นสูงของพยาบาลเวชปฏิบัติฉุกเฉิน
          (Emergency Nurse Practitioner: ENP) ในการยกระดับความแม่นยำในการคัดแยก ลดระยะเวลารอคอย เพิ่มอัตราความสำเร็จในการกู้ชีพตามเวลาทอง (Golden Hour)
          เสริมสร้างความปลอดภัยทางยาและหัตถการตามมาตรฐาน 2P Safety และพัฒนาสมรรถนะบุคลากรการพยาบาลอย่างยั่งยืนในระยะเวลา ๑-๓ ปี"
        </p>
      </div>

      {/* Pillar Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
        <button
          onClick={() => setSelectedPillar('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
            selectedPillar === 'all'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-950/40'
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          ทุกมิติ ({OBJECTIVES_DATA.reduce((acc, cat) => acc + cat.items.length, 0)} ข้อ)
        </button>
        {OBJECTIVES_DATA.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedPillar(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              selectedPillar === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-950/40'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat.title.split('(')[0].trim()}
          </button>
        ))}
      </div>

      {/* Specific Objectives by Pillars */}
      <div className="space-y-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-lg"
          >
            {/* Category Header */}
            <div className="p-4 sm:p-5 bg-slate-800/60 border-b border-slate-800 flex items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  {getPillarIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100">{category.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{category.subtitle}</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                {category.items.length} วัตถุประสงค์
              </span>
            </div>

            {/* Objective Items Grid */}
            <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-slate-800/40 border border-slate-700/60 p-4 flex flex-col justify-between space-y-3 hover:border-blue-500/40 transition"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{item.timeline}</span>
                        </span>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {item.target}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-100 leading-snug">
                      {item.objective}
                    </h4>

                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                      <div className="text-slate-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>ตัวชี้วัดเป้าหมาย (Key Target Metric):</span>
                      </div>
                      <p className="text-emerald-300 font-medium pl-4">{item.targetMetric}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-300">เหตุผลความสำคัญ:</strong> {item.rationale}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
