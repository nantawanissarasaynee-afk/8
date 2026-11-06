import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Award,
  FileCheck,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { STRATEGIC_ALIGNMENTS, StrategicAlignment } from '../data/proposalData';

export const StrategicAlignmentSection: React.FC = () => {
  const [selectedAlignmentId, setSelectedAlignmentId] = useState<string>('strat-1');

  const selectedAlignment =
    STRATEGIC_ALIGNMENTS.find((item) => item.id === selectedAlignmentId) ||
    STRATEGIC_ALIGNMENTS[0];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-slate-900 border border-purple-900/50 p-6 sm:p-7">
        <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Compass className="w-4 h-4" />
          <span>ประเด็นสำคัญที่ ๓ : ความสอดคล้องเชิงยุทธศาสตร์และทิศทางขององค์กร</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          การบูรณาการเชื่อมโยงยุทธศาสตร์ ๔ มิติ (Strategic Alignment Framework)
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
          โครงการนี้มิได้จัดทำขึ้นเฉพาะภายในแผนก แต่ถูกออกแบบให้เชื่อมโยงในแนวตั้งและแนวนอน (Vertical & Horizontal Alignment)
          ตอบสนองต่อนโยบายระดับชาติ (กระทรวงสาธารณสุข), มาตรฐานความปลอดภัยสากล (2P Safety Goals ของ สรพ.),
          ยุทธศาสตร์โรงพยาบาล และทิศทางวิชาชีพการพยาบาลขั้นสูง
        </p>
      </div>

      {/* Strategic Pillars Horizontal Grid / Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {STRATEGIC_ALIGNMENTS.map((strat, idx) => {
          const isSelected = selectedAlignmentId === strat.id;
          return (
            <button
              key={strat.id}
              onClick={() => setSelectedAlignmentId(strat.id)}
              className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-800 border-purple-500/80 shadow-lg shadow-purple-950/40 ring-1 ring-purple-500/50'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-400">ระดับที่ {idx + 1}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${strat.badgeColor}`}>
                    {strat.level.split('/')[0].trim()}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-100 line-clamp-2">
                  {strat.title}
                </h3>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-purple-400">
                <span>{isSelected ? 'กำลังดูเนื้อหา' : 'คลิกเพื่อดูรายละเอียด'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Alignment View for Selected Strategic Level */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
        <div className="p-5 sm:p-6 bg-slate-800/40 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">
              {selectedAlignment.level}
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">{selectedAlignment.title}</h3>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300">
            <strong>สถานะการบรรจุในแผน:</strong> บรรจุเป็นแผนยุทธศาสตร์ ๓ ปี
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Strategic Context */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-purple-400" />
              <span>สาระสำคัญและทิศทางเชิงยุทธศาสตร์ (Strategic Intent)</span>
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {selectedAlignment.description}
            </p>
          </div>

          {/* Linked Directives */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>ประเด็นเป้าหมายหรือนโยบายที่โครงการร่วมตอบสนอง (Key Strategic Directives)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedAlignment.linkedDirectives.map((dir, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium leading-relaxed">{dir}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ENP Contribution Callout */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-purple-950/40 via-slate-800/80 to-slate-800/80 border border-purple-500/40 space-y-2">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-xs uppercase">
              <Award className="w-4 h-4 text-purple-400" />
              <span>บทบาทการมีส่วนร่วมและการขับเคลื่อนโดย ENP (ENP Strategic Value-Add)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              {selectedAlignment.enpContribution}
            </p>
          </div>
        </div>
      </div>

      {/* 2P Safety Goals Detailed Focus Section (SIMPLE) */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-rose-400" />
            <span>เจาะลึกความสอดคล้องกับมาตรฐานความปลอดภัย 2P Safety Goals (SIMPLE Concepts)</span>
          </div>
          <span className="text-xs text-slate-400">สถาบันรับรองคุณภาพสถานพยาบาล (องค์การมหาชน) - สรพ.</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <div className="font-bold text-rose-300">S - Safe Surgery & Procedures</div>
            <p className="text-slate-300">
              ENP กำกับ Time-out ก่อนใส่ท่อช่วยหายใจฉุกเฉิน, Chest drain, และการทำหัตถการเปิดเส้นเลือดดำส่วนกลาง
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <div className="font-bold text-rose-300">I - Infection Prevention</div>
            <p className="text-slate-300">
              ควบคุม Aseptic Technique ในห้องฉุกเฉินขณะกู้ชีพเร่งด่วน ลดการติดเชื้อในกระแสเลือดและปอดอักเสบ
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <div className="font-bold text-rose-300">M - Medication Safety</div>
            <p className="text-slate-300">
              ระบบ Double-check ยาเสี่ยงสูง (High-Alert Drugs) Adrenaline, Norepinephrine และยาละลายลิ่มเลือด
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <div className="font-bold text-rose-300">P - Patient Care Process</div>
            <p className="text-slate-300">
              ระบบ Triage แม่นยำด้วย ESI/MEWS, การประเมินซ้ำ (Re-triage) และการส่งต่อเวรด้วย ISBAR มาตรฐาน
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <div className="font-bold text-rose-300">L - Line, Tube & Lab Safety</div>
            <p className="text-slate-300">
              การระบุตัวตนถูกต้อง 2 ตัวบ่งชี้, การติดฉลากหลอดเลือดและสายสวน, การติดตามผลวิกฤต (Critical Lab Value)
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
            <div className="font-bold text-rose-300">E - Emergency Response</div>
            <p className="text-slate-300">
              การนำทีมตอบสนองต่อ Code Heart (STEMI), Code Stroke, Code Sepsis และ Code Trauma ทันทีใน Golden Period
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
