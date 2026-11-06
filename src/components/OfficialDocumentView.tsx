import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Copy,
  Check,
  Building,
  User,
  Calendar,
  Layers,
  ShieldAlert,
  Target,
  Compass,
  Award,
  Sparkles,
} from 'lucide-react';
import { ProposalMetadata } from '../utils/planCalculations';
import { RISKS_DATA, OBJECTIVES_DATA, STRATEGIC_ALIGNMENTS, ROADMAP_DATA, KPIS_TABLE_DATA } from '../data/proposalData';

interface OfficialDocumentViewProps {
  metadata: ProposalMetadata;
}

export const OfficialDocumentView: React.FC<OfficialDocumentViewProps> = ({ metadata }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const generateFullMarkdown = () => {
    return `# แผนพัฒนาโครงการ: บทบาทพยาบาลเวชปฏิบัติฉุกเฉิน (Emergency Nurse Practitioner: ENP) ในการร่วมพัฒนาแผนกอุบัติเหตุฉุกเฉินในอีก ${metadata.targetYears}

**หน่วยงานที่รับผิดชอบ:** ${metadata.departmentName} ${metadata.hospitalName} (${metadata.hospitalTier})
**ผู้เสนอโครงการ:** ${metadata.authorName} ตำแหน่ง ${metadata.authorPosition}
**เสนอต่อ:** ${metadata.submittedTo}

---

## ๑. ชื่อโครงการ
โครงการพัฒนาบทบาทพยาบาลเวชปฏิบัติฉุกเฉิน (ENP) ในการร่วมยกระดับความปลอดภัย การกู้ชีพวิกฤต และการบริหารจัดการแผนกอุบัติเหตุฉุกเฉิน ๑-๓ ปี (${metadata.targetYears})

## ๒. หลักการและเหตุผล
แผนกอุบัติเหตุและฉุกเฉิน (Emergency Department: ED) เป็นด่านหน้าสำคัญในการช่วยชีวิตผู้ป่วยวิกฤตฉุกเฉิน แต่ปัจจุบันประสบปัญหาความแออัด (ED Overcrowding) ความซับซ้อนของผู้ป่วย และภาวะคอขวดของแพทย์ การอาศัยพยาบาลวิชาชีพทั่วไปอาจมีข้อจำกัดด้านอำนาจการตัดสินใจทางคลินิกขั้นสูง (Clinical Autonomy) 
การนำสมรรถนะของพยาบาลเวชปฏิบัติฉุกเฉิน (Emergency Nurse Practitioner: ENP) ซึ่งผ่านการฝึกอบรมการประเมินขั้นสูง การช่วยฟื้นคืนชีพขั้นสูง และการบริหารจัดการผู้ป่วยเฉียบพลันตามเกณฑ์สภาการพยาบาล จะเข้ามาเติมเต็มช่องว่าง (Gap Analysis) ลดความคลาดเคลื่อนในการคัดแยก และผลักดัน Fast-track pathway ในโรคเวลาทองให้บรรลุผลลัพธ์ที่เป็นเลิศ

## ๓. ความเสี่ยงสำคัญที่พบในปัจจุบัน และความจำเป็นที่ต้องนำความรู้ ENP มาแก้ไข
${RISKS_DATA.map((r, i) => `### ๓.${i + 1} ${r.title}
- **ลักษณะความเสี่ยงในปัจจุบัน:** ${r.currentRisk}
- **สาเหตุรากเหง้า:** ${r.rootCauses.join(', ')}
- **ผลกระทบ:** ${r.clinicalImpact}
- **ความจำเป็นและสมรรถนะ ENP ที่นำมาแก้ไข:** ${r.enpNecessity.competency}
- **มาตรการดำเนินงานโดย ENP:** ${r.enpNecessity.action}
- **ผลลัพธ์ที่คาดหวัง:** ${r.expectedOutcome}
`).join('\n')}

## ๔. วัตถุประสงค์ของโครงการ
### ๔.๑ วัตถุประสงค์ทั่วไป
เพื่อพัฒนาระบบบริการการพยาบาลผู้ป่วยอุบัติเหตุและฉุกเฉิน โดยบูรณาการบทบาทและสมรรถนะพยาบาลเวชปฏิบัติฉุกเฉิน (ENP) สู่การยกระดับคุณภาพ ความปลอดภัย การกู้ชีพที่ทันท่วงที และประสิทธิภาพการบริการในระยะเวลา ๑-๓ ปี

### ๔.๒ วัตถุประสงค์เฉพาะ (๔ มิติ)
${OBJECTIVES_DATA.map((c) => `#### ${c.title}
${c.items.map((it, idx) => `${idx + 1}. **${it.objective}**
   - เป้าหมาย: ${it.target} (${it.targetMetric})
   - กรอบเวลา: ${it.timeline}`).join('\n')}
`).join('\n')}

## ๕. ความสอดคล้องเชิงยุทธศาสตร์และทิศทางขององค์กร
${STRATEGIC_ALIGNMENTS.map((s, idx) => `### ๕.${idx + 1} ${s.level}: ${s.title}
- **ทิศทางยุทธศาสตร์:** ${s.description}
- **นโยบายที่สอดรับ:** ${s.linkedDirectives.join('; ')}
- **บทบาทการขับเคลื่อนของ ENP:** ${s.enpContribution}
`).join('\n')}

## ๖. แผนการดำเนินงาน ๓ ระยะ (๑-๓ ปี)
${ROADMAP_DATA.map((rm) => `### ${rm.phaseTitle} (${rm.period})
- **จุดเน้นเชิงยุทธศาสตร์:** ${rm.focusArea}
- **กิจกรรมหลัก:**
${rm.keyActions.map((k) => `  - ${k}`).join('\n')}
- **ผลผลิต (Deliverables):**
${rm.deliverables.map((d) => `  - ${d}`).join('\n')}
- **ตัวชี้วัดระยะนี้:** ${rm.kpis.join('; ')}
`).join('\n')}

## ๗. ตารางตัวชี้วัดความสำเร็จ (KPIs Table)
| ตัวชี้วัด | Baseline | ปีที่ ๑ | ปีที่ ๒ | ปีที่ ๓ |
|---|---|---|---|---|
${KPIS_TABLE_DATA.map((k) => `| ${k.name} | ${k.baseline} | ${k.year1} | ${k.year2} | ${k.year3} |`).join('\n')}

## ๘. ประโยชน์ที่คาดว่าจะได้รับ
๑. ผู้ป่วยวิกฤตฉุกเฉินได้รับการช่วยชีวิตอย่างทันท่วงทีตามเวลาทอง ลดอัตราการเสียชีวิตที่ป้องกันได้ (Preventable Mortality)
๒. แผนกอุบัติเหตุฉุกเฉินมีความปลอดภัยตามมาตรฐาน 2P Safety Goals ของ สรพ. อุบัติการณ์ความคลาดเคลื่อนทางยาลดลงเป็นศูนย์
๓. ลดระยะเวลารอคอยของผู้ป่วยกึ่งเร่งด่วนและไม่เร่งด่วนด้วยคลินิกนำโดย ENP
๔. พยาบาลประจำการได้รับการพัฒนาสมรรถนะผ่านระบบพี่เลี้ยงทางคลินิก (Preceptorship) ลดอัตราการหมดไฟและการลาออกจากงาน
๕. โรงพยาบาลได้รับการยอมรับในฐานะศูนย์ความเป็นเลิศทางการแพทย์และเป็นแหล่งเรียนรู้ด้านการพยาบาลฉุกเฉิน

---
ลงชื่อ............................................................
(${metadata.authorName})
${metadata.authorPosition}
ผู้เสนอโครงการ
`;
  };

  const handleCopyMarkdown = () => {
    const md = generateFullMarkdown();
    navigator.clipboard.writeText(md);
    setCopiedType('markdown');
    setTimeout(() => setCopiedType(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Print Action */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase mb-1">
            <FileText className="w-4 h-4" />
            <span>แบบฟอร์มเอกสารโครงการฉบับสมบูรณ์ (Official Project Proposal Form)</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            เอกสารนำเสนอโครงการเพื่อการขออนุมัติ / ขอรับการประเมินตำแหน่ง
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            จัดรูปแบบตามโครงสร้างทางการ สามารถคลิกพิมพ์ หรือคัดลอกข้อความไปใช้งานได้ทันที
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto">
          <button
            onClick={handleCopyMarkdown}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {copiedType === 'markdown' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>คัดลอกแล้ว!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>คัดลอกเอกสารทั้งหมด</span>
              </>
            )}
          </button>

          <button
            onClick={() => window.print()}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-500 text-white shadow-md transition"
          >
            <Printer className="w-4 h-4" />
            <span>พิมพ์เอกสารนี้</span>
          </button>
        </div>
      </div>

      {/* Printable Paper Document Container */}
      <div className="bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8 font-sans max-w-5xl mx-auto printable-document">
        {/* Document Header */}
        <div className="text-center border-b border-slate-800 pb-6 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
            เอกสารนำเสนอแผนพัฒนาการปฏิบัติงานทางคลินิกและยุทธศาสตร์หน่วยงาน
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            แผนพัฒนาโครงการ: บทบาทพยาบาลเวชปฏิบัติฉุกเฉิน (Emergency Nurse Practitioner: ENP)
            <br />
            ในการร่วมพัฒนาแผนกอุบัติเหตุฉุกเฉินในอีก {metadata.targetYears}
          </h1>
          <div className="text-xs sm:text-sm text-slate-400 flex flex-wrap items-center justify-center gap-4 pt-1">
            <span><strong>หน่วยงาน:</strong> {metadata.departmentName} {metadata.hospitalName} ({metadata.hospitalTier})</span>
            <span><strong>ผู้เสนอโครงการ:</strong> {metadata.authorName} ({metadata.authorPosition})</span>
          </div>
        </div>

        {/* Section 1: ชื่อโครงการ */}
        <div className="space-y-2">
          <h2 className="text-sm sm:text-base font-bold text-rose-300 uppercase tracking-wide border-l-4 border-rose-500 pl-3">
            ๑. ชื่อโครงการ
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-4">
            โครงการพัฒนาบทบาทพยาบาลเวชปฏิบัติฉุกเฉิน (ENP) ในการร่วมยกระดับคุณภาพ การกู้ชีพวิกฤต และการบริหารจัดการแผนกอุบัติเหตุฉุกเฉิน ๑-๓ ปี ({metadata.targetYears})
          </p>
        </div>

        {/* Section 2: หลักการและเหตุผล */}
        <div className="space-y-2">
          <h2 className="text-sm sm:text-base font-bold text-rose-300 uppercase tracking-wide border-l-4 border-rose-500 pl-3">
            ๒. หลักการและเหตุผล
          </h2>
          <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed pl-4 text-justify">
            <p>
              แผนกอุบัติเหตุและฉุกเฉิน (Emergency Department: ED) เป็นจุดแตกหักที่สำคัญที่สุดในการรักษาชีวิตผู้ป่วยในภาวะวิกฤตคุกคามชีวิต อย่างไรก็ดี จากสถิติและการประเมินสถานการณ์ของ {metadata.hospitalName} ในปัจจุบัน พบว่าหน่วยงานกำลังเผชิญกับความท้าทายหลายประการ โดยเฉพาะอย่างยิ่งปัญหาความแออัดของผู้ป่วย (ED Overcrowding) ความล่าช้าในการเริ่มให้การรักษาในกลุ่มโรควิกฤตเวลาทอง (Time-Sensitive Emergencies) เช่น Severe Sepsis, Acute STEMI, Acute Ischemic Stroke และ Major Trauma รวมถึงความคลาดเคลื่อนในการคัดแยกผู้ป่วย (Triage Misclassification) ซึ่งส่งผลให้ผู้ป่วยวิกฤตแฝงเกิดภาวะทรุดหนักเฉียบพลันในพื้นที่รอคอย
            </p>
            <p>
              ข้อจำกัดสำคัญในระบบการดูแลปัจจุบันคือ ภาวะคอขวดของแพทย์เวรฉุกเฉิน (Physician Bottleneck) ที่ต้องดูแลผู้ป่วยวิกฤตและผู้ป่วยไม่เร่งด่วนไปพร้อมกัน ประกอบกับพยาบาลวิชาชีพทั่วไปยังมีขอบเขตการปฏิบัติงานที่ไม่สามารถตัดสินใจทางคลินิกขั้นสูงหรือสั่งการตรวจรักษาเบื้องต้นได้ ทำให้เกิดความล่าช้าในทุกจุดบริการ
            </p>
            <p>
              ดังนั้น การนำองค์ความรู้และสมรรถนะของ <strong>พยาบาลเวชปฏิบัติฉุกเฉิน (Emergency Nurse Practitioner: ENP)</strong> ซึ่งเป็นผู้มีความรู้ความชำนาญการพยาบาลขั้นสูง มีทักษะการประเมินสรีรวิทยาขั้นสูง (Advanced Assessment), การตัดสินใจทางคลินิก (Clinical Decision Making), ภาวะผู้นำการกู้ชีพ (Resuscitation Leadership) และการบริหารจัดการคลินิกด่วน (Fast-Track Clinic) จึงเป็นความจำเป็นเชิงกลยุทธ์ที่จะช่วยปิดช่องว่างดังกล่าว ยกระดับความปลอดภัยของผู้ป่วยตามเกณฑ์ 2P Safety Goals ของ สรพ. และขับเคลื่อนแผนกฉุกเฉินสู่ความเป็นเลิศในระยะเวลา ๑-๓ ปีข้างหน้าอย่างยั่งยืน
            </p>
          </div>
        </div>

        {/* Section 3: ความเสี่ยงสำคัญ & ความจำเป็นของ ENP */}
        <div className="space-y-4">
          <h2 className="text-sm sm:text-base font-bold text-rose-300 uppercase tracking-wide border-l-4 border-rose-500 pl-3">
            ๓. ความเสี่ยงสำคัญที่พบในปัจจุบัน และความจำเป็นที่ต้องนำความรู้ ENP มาแก้ไข
          </h2>
          <div className="space-y-4 pl-4">
            {RISKS_DATA.map((risk, index) => (
              <div
                key={risk.id}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs sm:text-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-slate-100">
                    ๓.{index + 1} {risk.title}
                  </h3>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    ระดับ: {risk.severity}
                  </span>
                </div>
                <p className="text-slate-300">
                  <strong className="text-slate-400">สภาพความเสี่ยงปัจจุบัน:</strong> {risk.currentRisk}
                </p>
                <p className="text-slate-300">
                  <strong className="text-slate-400">สาเหตุรากเหง้า:</strong> {risk.rootCauses.join(', ')}
                </p>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 space-y-1">
                  <div className="font-semibold text-emerald-300">
                    บทบาทและความจำเป็นของ ENP ในการแก้ไข:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{risk.enpNecessity.action}</p>
                  <p className="text-[11px] text-amber-300">
                    <em>เหตุผลทางคลินิก: {risk.enpNecessity.clinicalRationale}</em>
                  </p>
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  <strong>ผลลัพธ์เป้าหมาย:</strong> {risk.expectedOutcome}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: วัตถุประสงค์ของโครงการ */}
        <div className="space-y-4">
          <h2 className="text-sm sm:text-base font-bold text-rose-300 uppercase tracking-wide border-l-4 border-rose-500 pl-3">
            ๔. วัตถุประสงค์ของโครงการ
          </h2>
          <div className="pl-4 space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-blue-500/30 space-y-1">
              <div className="font-bold text-blue-300">๔.๑ วัตถุประสงค์ทั่วไป</div>
              <p className="text-slate-200">
                เพื่อพัฒนาระบบบริการการพยาบาลผู้ป่วยอุบัติเหตุและฉุกเฉิน โดยบูรณาการบทบาทและสมรรถนะพยาบาลเวชปฏิบัติฉุกเฉิน (ENP) สู่การยกระดับคุณภาพ ความปลอดภัย การกู้ชีพที่ทันท่วงที และประสิทธิภาพการบริการในระยะเวลา ๑-๓ ปี
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-bold text-slate-200">๔.๒ วัตถุประสงค์เฉพาะ (๔ มิติ)</div>
              {OBJECTIVES_DATA.map((cat, cIdx) => (
                <div key={cat.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-amber-300 text-xs sm:text-sm">
                    ๔.๒.{cIdx + 1} {cat.title}
                  </h4>
                  <ul className="space-y-1.5 pl-2">
                    {cat.items.map((item, iIdx) => (
                      <li key={item.id} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-blue-400 font-bold">({iIdx + 1})</span>
                        <span>
                          <strong className="text-slate-100">{item.objective}</strong> — เป้าหมาย: {item.targetMetric} (ภายใน {item.timeline})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: ความสอดคล้องเชิงยุทธศาสตร์ */}
        <div className="space-y-4">
          <h2 className="text-sm sm:text-base font-bold text-rose-300 uppercase tracking-wide border-l-4 border-rose-500 pl-3">
            ๕. ความสอดคล้องเชิงยุทธศาสตร์และทิศทางขององค์กร
          </h2>
          <div className="pl-4 space-y-3">
            {STRATEGIC_ALIGNMENTS.map((strat, sIdx) => (
              <div key={strat.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-100">
                    ๕.{sIdx + 1} {strat.level}: {strat.title}
                  </h3>
                </div>
                <p className="text-slate-300">{strat.description}</p>
                <div className="text-xs text-purple-300">
                  <strong>การขับเคลื่อนโดย ENP:</strong> {strat.enpContribution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: แผนการดำเนินงาน ๑-๓ ปี */}
        <div className="space-y-4">
          <h2 className="text-sm sm:text-base font-bold text-rose-300 uppercase tracking-wide border-l-4 border-rose-500 pl-3">
            ๖. แผนการดำเนินงาน ๑-๓ ปี (พ.ศ. ๒๕๖๙ - ๒๕๗๑)
          </h2>
          <div className="pl-4 space-y-3">
            {ROADMAP_DATA.map((rm) => (
              <div key={rm.year} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-emerald-400">{rm.phaseTitle} ({rm.period})</h3>
                </div>
                <div className="text-slate-400 text-xs">
                  <strong>ธีมยุทธศาสตร์:</strong> {rm.strategicTheme}
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-300">กิจกรรมหลัก:</div>
                  <ul className="list-disc pl-5 text-xs text-slate-300 space-y-0.5">
                    {rm.keyActions.map((act, aIdx) => (
                      <li key={aIdx}>{act}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs text-blue-300 font-medium">
                  <strong>ผลผลิตหลัก (Deliverables):</strong> {rm.deliverables.join('; ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: ตัวชี้วัดและเป้าหมาย */}
        <div className="space-y-4">
          <h2 className="text-sm sm:text-base font-bold text-rose-300 uppercase tracking-wide border-l-4 border-rose-500 pl-3">
            ๗. ตัวชี้วัดความสำเร็จและค่าเป้าหมาย (KPIs)
          </h2>
          <div className="pl-4 overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-800">
              <thead className="bg-slate-900 text-slate-300 font-bold border-b border-slate-700">
                <tr>
                  <th className="p-2 border-r border-slate-800">ตัวชี้วัด</th>
                  <th className="p-2 border-r border-slate-800 text-center">Baseline</th>
                  <th className="p-2 border-r border-slate-800 text-center">ปีที่ ๑</th>
                  <th className="p-2 border-r border-slate-800 text-center">ปีที่ ๒</th>
                  <th className="p-2 text-center text-emerald-400">ปีที่ ๓</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {KPIS_TABLE_DATA.map((kpi) => (
                  <tr key={kpi.id}>
                    <td className="p-2 border-r border-slate-800 font-medium text-slate-100">{kpi.name}</td>
                    <td className="p-2 border-r border-slate-800 text-center font-mono">{kpi.baseline}</td>
                    <td className="p-2 border-r border-slate-800 text-center font-mono">{kpi.year1}</td>
                    <td className="p-2 border-r border-slate-800 text-center font-mono">{kpi.year2}</td>
                    <td className="p-2 text-center font-mono font-bold text-emerald-400">{kpi.year3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 8: ประโยชน์ที่คาดว่าจะได้รับ */}
        <div className="space-y-2">
          <h2 className="text-sm sm:text-base font-bold text-rose-300 uppercase tracking-wide border-l-4 border-rose-500 pl-3">
            ๘. ประโยชน์ที่คาดว่าจะได้รับ
          </h2>
          <ol className="list-decimal pl-8 text-xs sm:text-sm text-slate-300 space-y-1.5 leading-relaxed">
            <li>ผู้ป่วยวิกฤตฉุกเฉินได้รับการช่วยฟื้นคืนชีพทันตามเวลาทอง (Golden Hour) ลดอัตราตายและความพิการ</li>
            <li>ความปลอดภัยของผู้ป่วยในแผนกอุบัติเหตุฉุกเฉินเป็นไปตามเป้าหมาย 2P Safety Goals ของ สรพ.</li>
            <li>ลดระยะเวลารอตรวจของผู้ป่วยกลุ่มความเร่งด่วนต่ำลงอย่างน้อย ๔๐% ด้วย ENP Fast-Track Clinic</li>
            <li>ลดระยะเวลาการนอนค้างในห้องฉุกเฉิน (ED Boarding Time) และลดอัตราครองเตียงที่ซ้ำซ้อน</li>
            <li>พยาบาลวิชาชีพได้รับการพัฒนาสมรรถนะอย่างต่อเนื่องผ่านระบบพี่เลี้ยงทางคลินิก (Preceptor)</li>
            <li>สร้างภาพลักษณ์ที่ดี ความไว้วางใจ และความเชื่อมั่นของผู้รับบริการต่อโรงพยาบาล</li>
          </ol>
        </div>

        {/* Signatures Footer */}
        <div className="pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center text-xs text-slate-300">
          <div className="space-y-6">
            <div>ผู้เสนอโครงการ</div>
            <div className="pt-8">
              <div>ลงชื่อ............................................................</div>
              <div className="font-bold text-white mt-1">({metadata.authorName})</div>
              <div className="text-slate-400">{metadata.authorPosition}</div>
              <div className="text-slate-500">วันที่เสนอโครงการ: {new Date().toLocaleDateString('th-TH')}</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>ผู้เห็นชอบ / ผู้อนุมัติโครงการ</div>
            <div className="pt-8">
              <div>ลงชื่อ............................................................</div>
              <div className="font-bold text-white mt-1">(............................................................)</div>
              <div className="text-slate-400">{metadata.submittedTo}</div>
              <div className="text-slate-500">วันที่อนุมัติ: ............................................</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
