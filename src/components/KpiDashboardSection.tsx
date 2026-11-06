import React, { useState } from 'react';
import {
  BarChart3,
  Sliders,
  TrendingDown,
  TrendingUp,
  HeartPulse,
  Clock,
  ShieldAlert,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { KPIS_TABLE_DATA, KPIMetric } from '../data/proposalData';

export const KpiDashboardSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ทั้งหมด');

  // Simulator state
  const [simulatedPatientsPerMonth, setSimulatedPatientsPerMonth] = useState<number>(3500);
  const [simulatedSepsisAdherence, setSimulatedSepsisAdherence] = useState<number>(85);
  const [simulatedUnderTriage, setSimulatedUnderTriage] = useState<number>(2.5);
  const [simulatedFastTrackDecant, setSimulatedFastTrackDecant] = useState<number>(35);

  const categories = ['ทั้งหมด', 'ความปลอดภัยและผลลัพธ์ทางคลินิก', 'การไหลเวียนและระยะเวลารอคอย', 'สมรรถนะบุคลากร', 'ความพึงพอใจและจริยธรรม'];

  const filteredKpis =
    selectedCategory === 'ทั้งหมด'
      ? KPIS_TABLE_DATA
      : KPIS_TABLE_DATA.filter((k) => k.category === selectedCategory);

  // Simulation calculations
  // Baseline Under-triage is 8.5%, simulated reduces it:
  const preventableDeteriorationAvoided = Math.round(
    (simulatedPatientsPerMonth * (8.5 - simulatedUnderTriage)) / 100 * 0.4
  );
  // Sepsis lives improved (assuming ~3% sepsis in ED, baseline 52% bundle vs current)
  const estimatedSepsisVolume = Math.round(simulatedPatientsPerMonth * 0.035);
  const additionalSepsisBundleCompleted = Math.round(
    estimatedSepsisVolume * ((simulatedSepsisAdherence - 52.4) / 100)
  );
  // Hours saved in waiting area per month
  const lowAcuityVolume = Math.round(simulatedPatientsPerMonth * 0.45);
  const waitingHoursSavedPerMonth = Math.round(
    (lowAcuityVolume * (simulatedFastTrackDecant / 100) * 50) / 60
  );

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-900 border border-amber-900/50 p-6 sm:p-7">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
          <BarChart3 className="w-4 h-4" />
          <span>ตัวชี้วัดความสำเร็จและเครื่องมือจำลองผลสัมฤทธิ์ (KPIs & Impact Simulator)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          ตัวชี้วัดผลสัมฤทธิ์โครงการ (KPIs Table) และการประเมินผลกระทบทางคลินิก
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
          ตารางเปรียบเทียบค่าตั้งต้น (Baseline) กับค่าเป้าหมายรายปีตลอด ๓ ปี พร้อมแหล่งข้อมูลความถี่ในการตรวจติดตาม
          และแบบจำลองประมาณการผลลัพธ์ด้านความปลอดภัยและเวลาที่ประหยัดได้ต่อเดือน
        </p>
      </div>

      {/* Interactive Simulation Panel */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Sliders className="w-4 h-4" />
            <span>แบบจำลองผลสัมฤทธิ์ทางคลินิก (Interactive Clinical Impact Simulator)</span>
          </div>
          <span className="text-xs text-slate-400">
            ทดลองปรับสมมติฐานเพื่อคำนวณผลกระทบเชิงระบบ
          </span>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">จำนวนผู้ป่วย ER ต่อเดือน:</span>
              <span className="text-amber-400">{simulatedPatientsPerMonth.toLocaleString()} ราย</span>
            </div>
            <input
              type="range"
              min={1500}
              max={8000}
              step={250}
              value={simulatedPatientsPerMonth}
              onChange={(e) => setSimulatedPatientsPerMonth(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>1,500</span>
              <span>8,000</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">เป้าหมาย Under-triage:</span>
              <span className="text-rose-400">{simulatedUnderTriage}% (เดิม 8.5%)</span>
            </div>
            <input
              type="range"
              min={1.0}
              max={8.5}
              step={0.5}
              value={simulatedUnderTriage}
              onChange={(e) => setSimulatedUnderTriage(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>1.0% (ดีเยี่ยม)</span>
              <span>8.5% (เดิม)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Sepsis Bundle 1-Hr:</span>
              <span className="text-blue-400">{simulatedSepsisAdherence}% (เดิม 52%)</span>
            </div>
            <input
              type="range"
              min={52}
              max={95}
              step={1}
              value={simulatedSepsisAdherence}
              onChange={(e) => setSimulatedSepsisAdherence(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>52% (เดิม)</span>
              <span>95% (สากล)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">ENP Fast-Track Decant:</span>
              <span className="text-emerald-400">{simulatedFastTrackDecant}% ESI 4-5</span>
            </div>
            <input
              type="range"
              min={10}
              max={60}
              step={5}
              value={simulatedFastTrackDecant}
              onChange={(e) => setSimulatedFastTrackDecant(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>10%</span>
              <span>60%</span>
            </div>
          </div>
        </div>

        {/* Calculated Simulation Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-950 border border-rose-900/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-rose-300">
                ~{preventableDeteriorationAvoided} ราย/เดือน
              </div>
              <div className="text-xs text-slate-300 font-medium">
                ป้องกันผู้ป่วยทรุดหนักแฝงในพื้นที่รอคอย
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-blue-900/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-blue-300">
                +{additionalSepsisBundleCompleted} ราย/เดือน
              </div>
              <div className="text-xs text-slate-300 font-medium">
                ผู้ป่วย Sepsis ได้รับยาฆ่าเชื้อทันใน 1 ชม. เพิ่มขึ้น
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-300">
                ~{waitingHoursSavedPerMonth.toLocaleString()} ชม./เดือน
              </div>
              <div className="text-xs text-slate-300 font-medium">
                ลดเวลารอคอยสะสมของผู้ป่วยและญาติในแผนก
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter for Table */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-950/40'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Master KPI Table */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800/80 text-slate-300 uppercase text-[11px] font-bold border-b border-slate-700">
              <tr>
                <th className="py-3.5 px-4">ชื่อตัวชี้วัด (KPI Title)</th>
                <th className="py-3.5 px-3">หมวดหมู่</th>
                <th className="py-3.5 px-3 text-center text-slate-400">Baseline (ก่อนเริ่ม)</th>
                <th className="py-3.5 px-3 text-center text-amber-300">เป้าหมาย ปี ๑</th>
                <th className="py-3.5 px-3 text-center text-blue-300">เป้าหมาย ปี ๒</th>
                <th className="py-3.5 px-3 text-center text-emerald-400 font-extrabold">เป้าหมาย ปี ๓</th>
                <th className="py-3.5 px-4 hidden lg:table-cell text-slate-400">แหล่งข้อมูล / ความถี่</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {filteredKpis.map((kpi) => (
                <tr key={kpi.id} className="hover:bg-slate-800/40 transition">
                  <td className="py-3 px-4 font-semibold text-slate-100 max-w-xs sm:max-w-md">
                    {kpi.name}
                  </td>
                  <td className="py-3 px-3 text-slate-400 text-xs whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {kpi.category}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-400 font-mono">
                    {kpi.baseline}
                  </td>
                  <td className="py-3 px-3 text-center font-mono font-semibold text-amber-300">
                    {kpi.year1}
                  </td>
                  <td className="py-3 px-3 text-center font-mono font-semibold text-blue-300">
                    {kpi.year2}
                  </td>
                  <td className="py-3 px-3 text-center font-mono font-bold text-emerald-400 bg-emerald-500/5">
                    {kpi.year3}
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-400 hidden lg:table-cell">
                    <div>{kpi.source}</div>
                    <div className="text-[11px] text-slate-500 font-medium">({kpi.frequency})</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
