export interface ProposalMetadata {
  hospitalName: string;
  departmentName: string;
  authorName: string;
  authorPosition: string;
  targetYears: string;
  hospitalTier: 'รพศ.' | 'รพท.' | 'รพช.' | 'รพ.มหาวิทยาลัย' | 'รพ.เอกชน';
  submittedTo: string;
}

export interface MetricItem {
  id: string;
  name: string;
  baseline: number;
  targetY1: number;
  targetY2: number;
  targetY3: number;
  unit: string;
  higherIsBetter: boolean;
  category: 'clinical' | 'flow' | 'safety' | 'competency';
}

/**
 * Calculates percentage improvement from baseline to a given year's target
 */
export function calculateImprovement(baseline: number, target: number, higherIsBetter: boolean): number {
  if (baseline === 0) {
    return target > 0 ? 100 : 0;
  }
  if (higherIsBetter) {
    return Math.round(((target - baseline) / baseline) * 100);
  } else {
    return Math.round(((baseline - target) / baseline) * 100);
  }
}

/**
 * Computes the overall safety & clinical performance index (0 - 100)
 */
export function calculateProjectReadinessScore(
  risksAddressed: number,
  totalRisks: number,
  milestonesPlanned: number,
  totalMilestones: number,
  strategicPillarsAligned: number,
  totalPillars: number
): number {
  if (totalRisks === 0 || totalMilestones === 0 || totalPillars === 0) return 0;
  
  const riskWeight = 0.4;
  const milestoneWeight = 0.35;
  const strategicWeight = 0.25;

  const riskScore = (risksAddressed / totalRisks) * 100;
  const milestoneScore = (milestonesPlanned / totalMilestones) * 100;
  const strategicScore = (strategicPillarsAligned / totalPillars) * 100;

  const total = Math.round(riskScore * riskWeight + milestoneScore * milestoneWeight + strategicScore * strategicWeight);
  return Math.min(100, Math.max(0, total));
}

/**
 * Generates an executive proposal summary text for copy/export
 */
export function generateProposalSummary(meta: ProposalMetadata): string {
  return `แผนพัฒนาโครงการ: บทบาทพยาบาลเวชปฏิบัติฉุกเฉิน (ENP) ในการร่วมพัฒนาแผนกอุบัติเหตุฉุกเฉินในอีก ${meta.targetYears}
หน่วยงาน: ${meta.departmentName} ${meta.hospitalName} (${meta.hospitalTier})
ผู้เสนอโครงการ: ${meta.authorName} ตำแหน่ง ${meta.authorPosition}
เสนอต่อ: ${meta.submittedTo}

หลักการและเหตุผล:
การบริการผู้ป่วยอุบัติเหตุและฉุกเฉินในปัจจุบันต้องเผชิญกับภาวะผู้ป่วยล้นห้องฉุกเฉิน (ED Overcrowding) ความซับซ้อนของโรค และความเสี่ยงต่อการคลาดเคลื่อนทางคลินิก การนำสมรรถนะของพยาบาลเวชปฏิบัติฉุกเฉิน (Emergency Nurse Practitioner: ENP) ซึ่งมีความเชี่ยวชาญด้าน Advanced Assessment, Clinical Decision Making, Resuscitation Leadership และ Fast-Track Management จะช่วยปิดช่องว่าง (Gap Analysis) ลดอัตราการเสียชีวิตที่ป้องกันได้ และยกระดับความปลอดภัยตาม 2P Safety Goals อย่างเป็นรูปธรรม`;
}
