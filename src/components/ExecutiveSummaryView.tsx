import React from 'react';
import {
  ShieldAlert,
  Target,
  Compass,
  ArrowRight,
  Clock,
  HeartPulse,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { ProposalMetadata, calculateProjectReadinessScore } from '../utils/planCalculations';
import { RISKS_DATA, OBJECTIVES_DATA, STRATEGIC_ALIGNMENTS, ENP_CORE_ROLES } from '../data/proposalData';

interface ExecutiveSummaryViewProps {
  metadata: ProposalMetadata;
  onNavigateTab: (tabId: string) => void;
}

export const ExecutiveSummaryView: React.FC<ExecutiveSummaryViewProps> = ({
  metadata,
  onNavigateTab,
}) => {
  const readinessScore = calculateProjectReadinessScore(
    RISKS_DATA.length,
    RISKS_DATA.length,
    12,
    12,
    STRATEGIC_ALIGNMENTS.length,
    STRATEGIC_ALIGNMENTS.length
  );

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-rose-950/70 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>แผนยุทธศาสตร์การพัฒนาการพยาบาลฉุกเฉินขั้นสูง ๓ ปี ({metadata.targetYears})</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            บทบาทพยาบาลเวชปฏิบัติฉุกเฉิน (ENP) ในการร่วมยกระดับและพัฒนาแผนกอุบัติเหตุฉุกเฉินสู่ความเป็นเลิศและความปลอดภัยสูงสุด
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            โครงการนี้มุ่งเน้นการบูรณาการองค์ความรู้และสมรรถนะของ{' '}
            <strong className="text-amber-300 font-semibold">Emergency Nurse Practitioner (ENP)</strong>{' '}
            ในการแก้ไขวิกฤตความแออัด (ED Overcrowding), ความคลาดเคลื่อนในการคัดแยก (Triage Misclassification),
            การเริ่มกู้ชีพที่ล่าช้าในกลุ่มโรคเวลาทอง (Time-Sensitive Emergencies: Sepsis, STEMI, Stroke, Trauma)
            และยกระดับความปลอดภัยตามเกณฑ์ <strong className="text-rose-300 font-semibold">2P Safety Goals</strong>{' '}
            สอดคล้องกับยุทธศาสตร์ของ {metadata.hospitalName} ({metadata.hospitalTier})
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onNavigateTab('document')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm shadow-lg shadow-rose-950/50 transition"
            >
              <span>ดูแบบฟอร์มเอกสารโครงการฉบับสมบูรณ์</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateTab('risks-enp')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-600 transition"
            >
              <span>วิเคราะห์ความเสี่ยง ๕ ด้าน</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3 Core Questions Executive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: ความเสี่ยงสำคัญ & ความจำเป็นของ ENP */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between hover:border-rose-500/50 transition shadow-lg group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                หัวข้อที่ ๑
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-100 mb-2 group-hover:text-rose-300 transition">
              ความเสี่ยงสำคัญ & ความจำเป็นของ ENP
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              ปัจจุบันพบปัญหาผู้ป่วยล้นห้องฉุกเฉิน, Triage Under-triage ทำให้ผู้ป่วยวิกฤตทรุดลงในพื้นที่รอตรวจ, การกู้ชีพ Sepsis/STEMI/Stroke ล่าช้าเกินเวลาทอง, และความคลาดเคลื่อนในยาเสี่ยงสูง
            </p>
            <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs text-slate-300 space-y-1.5">
              <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
                <span>การแก้ไขด้วยความรู้ ENP:</span>
              </div>
              <p className="text-slate-300">
                ประเมินสัญญาณวิกฤตขั้นสูง (MEWS/NEWS), ตัดสินใจสั่งตรวจด่วน (POCUS, POC Labs), นำทีม Resuscitation Co-leader, และเปิดคลินิก ENP Fast-Track ระบายผู้ป่วย ESI 4-5
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('risks-enp')}
            className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-rose-400 hover:text-rose-300 transition"
          >
            <span>ดูรายละเอียดการวิเคราะห์ความเสี่ยง ๕ ประเด็น</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: วัตถุประสงค์ของโครงการ */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between hover:border-blue-500/50 transition shadow-lg group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                หัวข้อที่ ๒
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-100 mb-2 group-hover:text-blue-300 transition">
              วัตถุประสงค์ของโครงการ (๔ มิติ)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              กำหนดเป้าหมายเชิงประจักษ์ (SMART Objectives) ครอบคลุมทั้งคุณภาพการรักษา ประสิทธิภาพระบบ การเรียนรู้บุคลากร และความเชื่อมั่นของผู้รับบริการ
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">คลินิก:</strong> Under-triage &lt; 3%, Sepsis Bundle &gt; 85%, Arrest ในรอตรวจ = 0</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">การไหลเวียน:</strong> เวลารอตรวจ ESI 4-5 ลด 40%, Boarding Time &lt; 4 ชม.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">บุคลากร:</strong> พี่เลี้ยง Preceptor ประกบ 100%, ซ้อม Mock Code ทุกเดือน</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => onNavigateTab('objectives')}
            className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
          >
            <span>ดูวัตถุประสงค์และตัวชี้วัด ๔ มิติ</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 3: ความสอดคล้องยุทธศาสตร์ */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between hover:border-purple-500/50 transition shadow-lg group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                หัวข้อที่ ๓
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition">
              ความสอดคล้องเชิงยุทธศาสตร์
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              โครงการบูรณาการเชื่อมโยงแนบแน่นกับยุทธศาสตร์ระดับชาติ มาตรฐานความปลอดภัยสากล และวิสัยทัศน์ของโรงพยาบาล
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
                <span className="text-slate-300">Service Plan กระทรวงสาธารณสุข</span>
                <span className="text-emerald-400 font-medium">สาขา A&E</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
                <span className="text-slate-300">มาตรฐานความปลอดภัย สรพ. (HA)</span>
                <span className="text-blue-400 font-medium">2P Safety (SIMPLE)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
                <span className="text-slate-300">ทิศทางโรงพยาบาล & วิชาชีพ</span>
                <span className="text-purple-400 font-medium">Smart & APN Care</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('strategy')}
            className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-purple-400 hover:text-purple-300 transition"
          >
            <span>ดูการเชื่อมโยงยุทธศาสตร์ ๔ ระดับ</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Key Projected Impact Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-rose-400">
            &lt; 2%
          </div>
          <div className="text-xs font-medium text-slate-300 mt-1">เป้าหมาย Under-triage</div>
          <div className="text-[11px] text-slate-500">(ลดจากเดิม 8.5%)</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
            0 ราย
          </div>
          <div className="text-xs font-medium text-slate-300 mt-1">Unexpected Arrest ใน ER</div>
          <div className="text-[11px] text-slate-500">(ตรวจพบก่อนทรุดหนัก)</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
            &gt; 88%
          </div>
          <div className="text-xs font-medium text-slate-300 mt-1">Sepsis Bundle ใน 1 ชม.</div>
          <div className="text-[11px] text-slate-500">(เพิ่มจากเดิม 52.4%)</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
            -40%
          </div>
          <div className="text-xs font-medium text-slate-300 mt-1">เวลารอตรวจ ESI 4-5</div>
          <div className="text-[11px] text-slate-500">(ด้วย ENP Fast-Track Clinic)</div>
        </div>
      </div>

      {/* ENP 4 Core Roles Section */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>กรอบบทบาทหลัก ๔ ด้านของพยาบาลเวชปฏิบัติฉุกเฉิน (ENP Core Roles)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              การขับเคลื่อนการเปลี่ยนแปลงผ่านสมรรถนะการปฏิบัติการพยาบาลขั้นสูง (Advanced Emergency Nursing Practice)
            </p>
          </div>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            ดัชนีความพร้อมของโครงการ: {readinessScore}/100
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ENP_CORE_ROLES.map((role, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition"
            >
              <h4 className="text-sm font-bold text-amber-300 mb-2">{role.title}</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {role.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
