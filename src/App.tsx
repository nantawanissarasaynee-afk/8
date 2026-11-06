import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExecutiveSummaryView } from './components/ExecutiveSummaryView';
import { RisksAndEnpSection } from './components/RisksAndEnpSection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { StrategicAlignmentSection } from './components/StrategicAlignmentSection';
import { RoadmapMilestonesSection } from './components/RoadmapMilestonesSection';
import { KpiDashboardSection } from './components/KpiDashboardSection';
import { OfficialDocumentView } from './components/OfficialDocumentView';
import { MetadataModal } from './components/MetadataModal';
import { ProposalMetadata, generateProposalSummary } from './utils/planCalculations';
import { RISKS_DATA, OBJECTIVES_DATA, STRATEGIC_ALIGNMENTS } from './data/proposalData';

const DEFAULT_METADATA: ProposalMetadata = {
  hospitalName: 'โรงพยาบาลศูนย์มหาราช',
  hospitalTier: 'รพศ.',
  departmentName: 'กลุ่มงานการพยาบาลอุบัติเหตุและฉุกเฉิน',
  authorName: 'พว.นันทวัน อิศรสัยณี',
  authorPosition: 'พยาบาลวิชาชีพชำนาญการ (ผู้ผ่านการอบรม ENP)',
  targetYears: '๑-๓ ปี (พ.ศ. ๒๕๖๙ - ๒๕๗๑)',
  submittedTo: 'ผู้อำนวยการโรงพยาบาลและหัวหน้ากลุ่มภารกิจด้านการพยาบาล',
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [metadata, setMetadata] = useState<ProposalMetadata>(() => {
    try {
      const saved = localStorage.getItem('enp_proposal_metadata');
      return saved ? JSON.parse(saved) : DEFAULT_METADATA;
    } catch {
      return DEFAULT_METADATA;
    }
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('enp_proposal_metadata', JSON.stringify(metadata));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [metadata]);

  const handleCopyAll = () => {
    const text = generateProposalSummary(metadata) + '\n\n' +
      '=== วัตถุประสงค์ ๔ มิติ ===\n' +
      OBJECTIVES_DATA.map((o) => `${o.title}:\n` + o.items.map((i) => ` - ${i.objective} (เป้าหมาย: ${i.target})`).join('\n')).join('\n\n') + '\n\n' +
      '=== ยุทธศาสตร์ที่สอดรับ ===\n' +
      STRATEGIC_ALIGNMENTS.map((s) => `- ${s.level}: ${s.title}`).join('\n') + '\n\n' +
      '=== ความเสี่ยงสำคัญและการแก้ปัญหาด้วย ENP ===\n' +
      RISKS_DATA.map((r) => `- ${r.title} => แนวทาง ENP: ${r.enpNecessity.action}`).join('\n');

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        metadata={metadata}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onCopyAll={handleCopyAll}
        isCopied={isCopied}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'overview' && (
          <ExecutiveSummaryView metadata={metadata} onNavigateTab={setActiveTab} />
        )}

        {activeTab === 'risks-enp' && <RisksAndEnpSection />}

        {activeTab === 'objectives' && <ObjectivesSection />}

        {activeTab === 'strategy' && <StrategicAlignmentSection />}

        {activeTab === 'roadmap' && <RoadmapMilestonesSection />}

        {activeTab === 'kpis' && <KpiDashboardSection />}

        {activeTab === 'document' && <OfficialDocumentView metadata={metadata} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p>
            แผนพัฒนาบทบาทพยาบาลเวชปฏิบัติฉุกเฉิน (Emergency Nurse Practitioner: ENP) แผนกอุบัติเหตุฉุกเฉิน ๑-๓ ปี
          </p>
          <p className="text-[11px] text-slate-600">
            อิงมาตรฐานสภาการพยาบาล • นโยบาย Service Plan กระทรวงสาธารณสุข • มาตรฐาน 2P Safety สถาบันรับรองคุณภาพสถานพยาบาล (สรพ.)
          </p>
        </div>
      </footer>

      {/* Metadata Configuration Modal */}
      <MetadataModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        metadata={metadata}
        onSave={setMetadata}
      />
    </div>
  );
}
