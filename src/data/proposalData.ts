export interface RiskItem {
  id: string;
  category: string;
  title: string;
  currentRisk: string;
  rootCauses: string[];
  clinicalImpact: string;
  enpNecessity: {
    competency: string;
    action: string;
    clinicalRationale: string;
  };
  expectedOutcome: string;
  severity: 'วิกฤตสูงมาก' | 'วิกฤตสูง' | 'ปานกลาง';
}

export interface ObjectiveCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: {
    id: string;
    objective: string;
    target: string;
    targetMetric: string;
    timeline: string;
    rationale: string;
  }[];
}

export interface StrategicAlignment {
  id: string;
  level: string;
  title: string;
  description: string;
  linkedDirectives: string[];
  enpContribution: string;
  badgeColor: string;
}

export interface MilestoneItem {
  year: number;
  period: string;
  phaseTitle: string;
  focusArea: string;
  strategicTheme: string;
  keyActions: string[];
  deliverables: string[];
  kpis: string[];
}

export interface KPIMetric {
  id: string;
  name: string;
  category: 'ความปลอดภัยและผลลัพธ์ทางคลินิก' | 'การไหลเวียนและระยะเวลารอคอย' | 'สมรรถนะบุคลากร' | 'ความพึงพอใจและจริยธรรม';
  baseline: string;
  year1: string;
  year2: string;
  year3: string;
  source: string;
  frequency: string;
}

export const RISKS_DATA: RiskItem[] = [
  {
    id: 'risk-1',
    category: 'การคัดแยกและการเข้าถึง (Triage & Access)',
    title: 'ความคลาดเคลื่อนในการคัดแยก (Triage Misclassification) และผู้ป่วยทรุดลงระหว่างรอ',
    currentRisk: 'การคัดแยกผู้ป่วยต่ำกว่าความเป็นจริง (Under-triage) ส่งผลให้ผู้ป่วยวิกฤตและกึ่งวิกฤต (ESI 2-3) ไม่ได้รับการรักษาทันเวลา เกิดภาวะหัวใจหยุดเต้นหรือทรุดหนักเฉียบพลันในพื้นที่รอตรวจ (Waiting Area)',
    rootCauses: [
      'พยาบาลคัดแยกขาดทักษะการประเมินสัญญาณเตือนทางสรีรวิทยาขั้นสูง (Advanced Physiological Triggering)',
      'ภาระงานหนาแน่นช่วงชั่วโมงเร่งด่วนทำให้การประเมินสัญญาณชีพและการตรวจร่างกายแบบรวดเร็วทำได้ไม่ละเอียด',
      'ขาดระบบ Re-triage และระบบเฝ้าระวังสัญญาณชีพแบบต่อเนื่องสำหรับผู้ป่วยที่นั่งรอตรวจ',
    ],
    clinicalImpact: 'เพิ่มอัตราการเสียชีวิตที่หลีกเลี่ยงได้ (Preventable Mortality), เกิดภาวะแทรกซ้อนรุนแรง, เพิ่มอัตราการฟ้องร้องทางกฎหมาย และลดความเชื่อมั่นของประชาชน',
    enpNecessity: {
      competency: 'Advanced Clinical Assessment & Diagnostic Reasoning (การประเมินสรีรวิทยาและพยาธิสรีรวิทยาขั้นสูง)',
      action: 'กำหนดระบบ ENP-Triage Support & Rapid Secondary Survey, นำ Modified Early Warning Score (MEWS/NEWS2) มาใช้ และการประเมิน Red Flag Symptoms เชิงรุก',
      clinicalRationale: 'ENP มีทรรศนะทางคลินิกขั้นสูง สามารถสั่งการตรวจทางห้องปฏิบัติการด่วน (Point-of-Care Testing), ภาพถ่ายรังสีเบื้องต้น และแยกแยะอาการไม่จำเพาะของกลุ่มวิกฤตแฝง (Atypical Presentations) ได้ทันทีตั้งแต่จุดคัดแยก',
    },
    expectedOutcome: 'ลดอัตรา Under-triage เหลือ < 3%, ป้องกันภาวะหัวใจหยุดเต้นในพื้นที่รอตรวจเป็น 0 รายต่อปี',
    severity: 'วิกฤตสูงมาก',
  },
  {
    id: 'risk-2',
    category: 'การกู้ชีพและกลุ่มโรคเวลาทอง (Resuscitation & Time-Sensitive Emergencies)',
    title: 'ความล่าช้าในการเริ่มกระบวนการช่วยชีวิต (Delayed Resuscitation) ในกลุ่ม Sepsis, STEMI, Stroke และ Major Trauma',
    currentRisk: 'การปฏิบัติตาม Clinical Practice Guidelines (CPG) ไม่ทันตามเวลาทอง (Golden Hour / Golden Period) เช่น การให้ยาปฏิชีวนะใน 1 ชั่วโมงใน Sepsis, Door-to-Needle ใน Stroke หรือ Door-to-Balloon ใน STEMI',
    rootCauses: [
      'แพทย์เวรห้องฉุกเฉินมีภาระงานล้นและต้องดูแลผู้ป่วยพร้อมกันหลายเตียง ทำให้เกิดภาวะคอขวด (Physician Bottleneck)',
      'ขั้นตอนการตัดสินใจสั่งการรักษาต้องรอการยืนยันหลายขั้นตอน ขาดพยาบาลที่มีอำนาจตัดสินใจทางคลินิกขั้นสูง (Clinical Autonomy)',
      'การประสานงานข้ามแผนก (Cath Lab, Stroke Unit, OR, Blood Bank) ยังขาดผู้จัดการทางคลินิก (Clinical Coordinator)',
    ],
    clinicalImpact: 'กล้ามเนื้อหัวใจและเซลล์สมองเสียหายถาวร, อัตราความพิการสูงขึ้น, อัตราเสียชีวิตจาก Septic Shock และ Hypovolemic Shock พุ่งสูง',
    enpNecessity: {
      competency: 'Resuscitation Leadership & Advanced Critical Interventions (ภาวะผู้นำการกู้ชีพและหัตถการวิกฤต)',
      action: 'ทำหน้าที่เป็น Resuscitation Team Leader ร่วมกับแพทย์, สั่งเปิด Fast-track Pathway ทันที, ทำหัตถการช่วยชีวิตขั้นสูง (Advanced Airway, Intraosseous, POCUS eFAST เบื้องต้น) และเริ่มยา Inotropes/Vasoactive drugs ตามโปรโตคอล',
      clinicalRationale: 'ความรู้ ENP ช่วยลดระยะเวลา Door-to-Intervention ได้อย่างมีนัยสำคัญ โดยไม่ต้องรอให้แพทย์เสร็จภารกิจจากเตียงอื่นเพื่อสั่งคำสั่งพื้นฐานการกู้ชีพ',
    },
    expectedOutcome: 'Sepsis Hour-1 Bundle สำเร็จ > 85%, STEMI Door-to-ECG < 10 นาที, Stroke Fast-track Door-to-CT < 25 นาที',
    severity: 'วิกฤตสูงมาก',
  },
  {
    id: 'risk-3',
    category: 'ความปลอดภัยทางยาและหัตถการ (Medication Safety & Procedures)',
    title: 'ความคลาดเคลื่อนทางยาในกลุ่มยาเสี่ยงสูง (High-Alert Drugs) และภาวะแทรกซ้อนจากการใส่ท่อช่วยหายใจ',
    currentRisk: 'การบริหารยาฉุกเฉิน (Adrenaline, Noradrenaline, Nicardipine, Thrombolytic, Sedatives/Paralytics) ภายใต้สภาวะกดดันสูง เกิดความผิดพลาดด้านขนาดยา อัตราการหยด และการเข้ากันไม่ได้ของยา (Drug Incompatibility)',
    rootCauses: [
      'ความเร่งรีบในการกู้ชีพทำให้ขาดการสื่อสารแบบสองทาง (Closed-loop Communication) ที่รัดกุม',
      'พยาบาลจบใหม่หรือหมุนเวียนยังไม่ชำนาญการคำนวณขนาดยาฉุกเฉินและการเฝ้าระวังผลข้างเคียงวิกฤต',
      'ขาดการทำ Smart Infusion Check และขาดระบบมาตรฐานในการเตรียมยาฉุกเฉิน',
    ],
    clinicalImpact: 'หัวใจเต้นผิดจังหวะรุนแรง, ความดันโลหิตตกอย่างเฉียบพลัน, เนื้อเยื่อตายจากการรั่วของยาหลอดเลือด (Extravasation), การเสียชีวิตจากภาวะแทรกซ้อนทางยา',
    enpNecessity: {
      competency: 'Advanced Emergency Pharmacology & Medication Safety Protocols',
      action: 'ออกแบบระบบ Standardized Resuscitation Drug Protocols, เป็นผู้ควบคุมการบริหารยาเสี่ยงสูง (High-Alert Drug Double Check) และนิเทศทางคลินิกในการปรับขนาดยา (Titration)',
      clinicalRationale: 'ความรู้เภสัชวิทยาขั้นสูงของ ENP ทำให้สามารถประเมินการตอบสนองต่อยาในระดับเซลล์และพลศาสตร์การไหลเวียนโลหิต (Hemodynamic monitoring) ได้แม่นยำ',
    },
    expectedOutcome: 'อุบัติการณ์ Medication Error กลุ่มความรุนแรงระดับ E ขึ้นไปในห้องฉุกเฉินลดลงเป็น 0',
    severity: 'วิกฤตสูง',
  },
  {
    id: 'risk-4',
    category: 'การไหลเวียนของผู้ป่วยและการนอนค้าง (Patient Flow & Boarding)',
    title: 'ผู้ป่วยนอนค้างในห้องฉุกเฉินเป็นเวลานาน (ED Boarding) และการส่งมอบเวรขาดความต่อเนื่อง',
    currentRisk: 'ผู้ป่วยวิกฤตและกึ่งวิกฤตนอนรอเตียงผู้ป่วยใน (Inpatient Boarding) ในห้องฉุกเฉินเกินกว่า 4-6 ชั่วโมง ทำให้เกิดความแออัด เสี่ยงต่อการติดเชื้อในโรงพยาบาล แผลกดทับ และภาวะสับสนเฉียบพลัน (Delirium)',
    rootCauses: [
      'เตียงในหอผู้ป่วยวิกฤต (ICU) และหอผู้ป่วยในเต็มตลอดเวลา',
      'กระบวนการส่งต่อข้อมูลทางคลินิก (Handover) มีความซ้ำซ้อนและขาดรูปแบบที่เป็นมาตรฐานสากล (Standardized SBAR)',
      'ขาดการบริหารจัดการ Discharge Planning สำหรับผู้ป่วยกลุ่ม ESI 4-5 ที่สามารถจำหน่ายกลับบ้านพร้อมแผนการรักษาที่ชัดเจน',
    ],
    clinicalImpact: 'ประสิทธิภาพการรองรับผู้ป่วยวิกฤตรายใหม่ลดลง, บุคลากรเหนื่อยล้าสะสม, เกิดภาวะแทรกซ้อนทางอ้อมที่ป้องกันได้',
    enpNecessity: {
      competency: 'Patient Flow Coordination & ENP-led Fast Track Clinic (คลินิกคัดกรองและรักษาโรคฉุกเฉินไม่ซับซ้อน)',
      action: 'เปิดให้บริการ ENP Fast-Track Clinic สำหรับผู้ป่วยกลุ่มความเร่งด่วนต่ำ (ESI 4-5 / Minor Trauma) และทำหน้าที่เป็น Clinical Bed Liaison ร่วมกับทีมอายุรกรรม/ศัลยกรรม',
      clinicalRationale: 'การให้ ENP ดูแลกลุ่มผู้ป่วยไม่ซับซ้อนและทำหัตถการเย็บแผล/ใส่เฝือก ช่วยลดภาระแพทย์ลงกว่า 40% ทำให้แพทย์และพยาบาลหลักทุ่มเทกับผู้ป่วยวิกฤต Red/Yellow Zone ได้อย่างเต็มศักยภาพ',
    },
    expectedOutcome: 'ลดระยะเวลารอตรวจกลุ่ม ESI 4-5 ลง 40%, ลด ED Boarding Time สำหรับผู้ป่วยรอรับไว้รักษาในโรงพยาบาลลงเหลือ < 4 ชั่วโมง',
    severity: 'วิกฤตสูง',
  },
  {
    id: 'risk-5',
    category: 'สมรรถนะบุคลากรและวัฒนธรรมความปลอดภัย (Workforce & Safety Culture)',
    title: 'ช่องว่างสมรรถนะของพยาบาลจบใหม่ ภาวะหมดไฟ (Burnout) และการลาออกจากงานสูง',
    currentRisk: 'พยาบาลห้องฉุกเฉินมากกว่า 35-45% เป็นพยาบาลที่มีอายุงานน้อยกว่า 3 ปี ขาดทักษะการตัดสินใจในภาวะวิกฤต เกิดความเครียด วิตกกังวล และอัตราการลาออกจากงานสูง ส่งผลกระทบต่อคุณภาพการดูแลอย่างต่อเนื่อง',
    rootCauses: [
      'ระบบการฝึกอบรมในงาน (On-the-job training) ขาดพี่เลี้ยงทางคลินิกเฉพาะทางที่มีเวลาประกบตัวต่อตัว',
      'ภาระงานที่หนักเกินกำลังและความกดดันจากการเผชิญหน้ากับญาติในภาวะวิกฤต',
      'ขาดเส้นทางความก้าวหน้าทางวิชาชีพที่ชัดเจนในสายงานการพยาบาลฉุกเฉิน',
    ],
    clinicalImpact: 'สูญเสียงบประมาณในการอบรมบุคลากรใหม่ซ้ำซาก, ขาดความต่อเนื่องของมาตรฐานการพยาบาล, เกิดอุบัติการณ์ความเสี่ยงซ้ำซาก',
    enpNecessity: {
      competency: 'Clinical Preceptor, Simulation-based Educator & Transformational Leadership',
      action: 'จัดทำหลักสูตร Emergency Nursing Residency & Preceptorship Program โดยมี ENP เป็นพี่เลี้ยงทางคลินิกประจำเวร จัดฝึกอบรมสถานการณ์จำลอง (Simulation & Mock Code Drills) สม่ำเสมอ',
      clinicalRationale: 'ENP มีบทบาทโดยตรงในการเป็น Role Model ทางคลินิก เสริมสร้างความมั่นใจในการปฏิบัติงาน และสร้างวัฒนธรรมความปลอดภัยที่ไม่กล่าวโทษ (Just Culture)',
    },
    expectedOutcome: 'อัตราการคงอยู่ของพยาบาล ER เพิ่มขึ้น > 85%, ความมั่นใจในการประเมินภาวะวิกฤตของพยาบาลใหม่เพิ่มขึ้นอย่างมีนัยสำคัญ',
    severity: 'ปานกลาง',
  },
];

export const OBJECTIVES_DATA: ObjectiveCategory[] = [
  {
    id: 'clinical-safety',
    title: '๑. มิติด้านผลลัพธ์ทางคลินิกและความปลอดภัยของผู้ป่วย (Clinical Outcomes & Safety)',
    subtitle: 'ยกระดับความปลอดภัยของผู้ป่วยตามมาตรฐาน 2P Safety และป้องกันภาวะแทรกซ้อนวิกฤต',
    iconName: 'ShieldAlert',
    items: [
      {
        id: 'obj-1-1',
        objective: 'ลดอัตราความคลาดเคลื่อนในการคัดแยกผู้ป่วย (Triage Under-triage Rate) ให้เป็นไปตามมาตรฐานสากล',
        target: 'น้อยกว่า 3%',
        targetMetric: 'Under-triage < 3% (จากเดิม 8.5%)',
        timeline: 'ภายในปีที่ 1 และคงรักษาต่อเนื่อง',
        rationale: 'ป้องกันการคลาดสายตาต่อผู้ป่วยที่เสี่ยงทรุดหนักเฉียบพลันในพื้นที่รอคอย',
      },
      {
        id: 'obj-1-2',
        objective: 'บรรลุเป้าหมายการรักษาตามเวลาทองในกลุ่มโรควิกฤตฉุกเฉิน (Time-Sensitive Emergencies)',
        target: 'มากกว่า 85-90%',
        targetMetric: 'Sepsis Hour-1 Bundle > 85%, STEMI Door-to-ECG < 10 นาที > 90%, Stroke Door-to-CT < 25 นาที > 85%',
        timeline: 'ปีที่ 1-2',
        rationale: 'การรักษาที่รวดเร็วช่วยลดความพิการและอัตราการเสียชีวิตอย่างมีนัยสำคัญ',
      },
      {
        id: 'obj-1-3',
        objective: 'ขจัดภาวะหัวใจหยุดเต้นที่ไม่คาดคิดในห้องฉุกเฉินและพื้นที่รอตรวจ (Unexpected Cardiac Arrest in ED)',
        target: 'เป็น 0 รายต่อปี',
        targetMetric: '0 ราย / 1,000 การเข้ารับบริการ',
        timeline: 'ภายในปีที่ 2-3',
        rationale: 'ผ่านระบบ Early Warning Score (MEWS/NEWS) และการประเมินซ้ำโดย ENP',
      },
      {
        id: 'obj-1-4',
        objective: 'ควบคุมอัตราการกลับมารักษาซ้ำที่ห้องฉุกเฉินโดยไม่ได้วางแผนภายใน 48 ชั่วโมง (Unplanned 48-hr ED Revisit)',
        target: 'น้อยกว่า 1.5%',
        targetMetric: '< 1.5% ของผู้ป่วยจำหน่ายกลับบ้าน',
        timeline: 'ปีที่ 2-3',
        rationale: 'สะท้อนความแม่นยำในการวินิจฉัย การรักษา และคำแนะนำการดูแลตนเองก่อนจำหน่าย',
      },
    ],
  },
  {
    id: 'operational-flow',
    title: '๒. มิติด้านประสิทธิภาพของระบบและการไหลเวียนผู้ป่วย (Operational Efficiency & Patient Flow)',
    subtitle: 'ลดความแออัด แก้ปัญหาคอขวด และเพิ่มความรวดเร็วในการดูแลทุกระดับความเร่งด่วน',
    iconName: 'Activity',
    items: [
      {
        id: 'obj-2-1',
        objective: 'จัดตั้งและขับเคลื่อน ENP-led Fast-Track Clinic สำหรับผู้ป่วยกึ่งเร่งด่วนและไม่เร่งด่วน (ESI 4-5)',
        target: 'ลดเวลารอตรวจลง 35-40%',
        targetMetric: 'Door-to-Doctor/Provider time ESI 4-5 ลดลงจาก 95 นาที เหลือ < 45 นาที',
        timeline: 'ปีที่ 1 (ระยะนำร่อง) - ปีที่ 2 (เต็มรูปแบบ)',
        rationale: 'แยกสายธารการบริการ (Decanting) ช่วยระบายผู้ป่วยและลดความตึงเครียดของห้องฉุกเฉิน',
      },
      {
        id: 'obj-2-2',
        objective: 'ลดระยะเวลาการนอนคอยเตียงในห้องฉุกเฉินของผู้ป่วยที่ต้องรับไว้รักษาในโรงพยาบาล (ED Boarding Time)',
        target: 'น้อยกว่า 4 ชั่วโมง',
        targetMetric: 'ED Boarding Time เฉลี่ย < 240 นาที (เดิม 420 นาที)',
        timeline: 'ปีที่ 2-3',
        rationale: 'ป้องกันการติดเชื้อในโรงพยาบาลและลดความแออัดในพื้นที่ Resuscitation/Observe',
      },
      {
        id: 'obj-2-3',
        objective: 'พัฒนาระบบการส่งต่อข้อมูลทางคลินิกและการส่งเวรแบบมาตรฐานสากล (ISBAR Handover System)',
        target: 'ความครอบคลุม 100%',
        targetMetric: 'Compliance rate ในการใช้ ISBAR ระหว่าง ER-ICU-OR-Ward > 95%',
        timeline: 'ปีที่ 1',
        rationale: 'ลดความคลาดเคลื่อนในการส่งต่อข้อมูลสำคัญและแผนการรักษาผู้ป่วยวิกฤต',
      },
    ],
  },
  {
    id: 'competency-education',
    title: '๓. มิติด้านการพัฒนาสมรรถนะบุคลากรการพยาบาล (Workforce Competency & Learning)',
    subtitle: 'สร้างระบบพี่เลี้ยงทางคลินิก ยกระดับทักษะการพยาบาลฉุกเฉินขั้นสูง และลดภาวะหมดไฟ',
    iconName: 'GraduationCap',
    items: [
      {
        id: 'obj-3-1',
        objective: 'จัดตั้งระบบการนิเทศและฝึกสอนทางคลินิก (ENP Clinical Preceptorship & Mentorship)',
        target: 'พยาบาลใหม่ 100% มีพี่เลี้ยงประกบ',
        targetMetric: 'พยาบาลอายุงาน < 3 ปี ผ่านเกณฑ์ประเมินสมรรถนะการพยาบาลฉุกเฉิน 100%',
        timeline: 'ปีที่ 1-3',
        rationale: 'เสริมสร้างความมั่นใจและการตัดสินใจทางคลินิกที่ถูกต้องตั้งแต่ระยะแรกของการทำงาน',
      },
      {
        id: 'obj-3-2',
        objective: 'จัดการฝึกซ้อมสถานการณ์จำลองภาวะวิกฤตขั้นสูง (High-Fidelity Simulation & Mock Code)',
        target: 'อย่างน้อยเดือนละ 2 ครั้ง',
        targetMetric: 'ครอบคลุม Advanced Airway, CPR, Anaphylaxis, Trauma Resuscitation, Pediatric Emergencies',
        timeline: 'ปีที่ 1-3',
        rationale: 'เพิ่มทักษะ Non-technical Skills, Closed-loop Communication และความเร็วในการตอบสนอง',
      },
      {
        id: 'obj-3-3',
        objective: 'พัฒนาและปรับปรุงแนวปฏิบัติการพยาบาลทางคลินิกที่อิงหลักฐานเชิงประจักษ์ (Evidence-Based CNPG)',
        target: 'อย่างน้อย 6 แนวทางหลัก',
        targetMetric: 'CNPG ด้าน Sepsis, Severe Head Injury, STEMI/Stroke, High-Alert Drug, POCUS Triage, Agitated Patient',
        timeline: 'ปีที่ 1-2',
        rationale: 'สร้างแนวทางปฏิบัติที่เป็นมาตรฐานเดียวทั้งองค์กร',
      },
      {
        id: 'obj-3-4',
        objective: 'ยกระดับความพึงพอใจในงานและลดอัตราการลาออกจากงานของพยาบาลห้องฉุกเฉิน',
        target: 'อัตราการคงอยู่ > 85%',
        targetMetric: 'Nurse Turnover Rate ลดลงเหลือน้อยกว่า 10% ต่อปี',
        timeline: 'ปีที่ 2-3',
        rationale: 'ลดความสูญเสียทรัพยากรบุคคลและสร้างทีมที่มีความเชี่ยวชาญผูกพันกับองค์กร',
      },
    ],
  },
  {
    id: 'experience-trust',
    title: '๔. มิติด้านความพึงพอใจ จริยธรรม และความเชื่อมั่นของผู้รับบริการ (Experience & Trust)',
    subtitle: 'การสื่อสารในภาวะวิกฤตด้วยความเห็นอกเห็นใจ และการพิทักษ์สิทธิผู้ป่วย',
    iconName: 'HeartHandshake',
    items: [
      {
        id: 'obj-4-1',
        objective: 'จัดตั้งระบบการสื่อสารและแจ้งข้อมูลสถานะการรักษาแก่ญาติผู้ป่วยวิกฤต (Crisis Communication & Family Liaison)',
        target: 'แจ้งข้อมูลทุก 30-60 นาที',
        targetMetric: 'ความพึงพอใจด้านการสื่อสารและการได้รับข้อมูลของญาติ > 90%',
        timeline: 'ปีที่ 1',
        rationale: 'ลดความเครียด วิตกกังวล และความขัดแย้งที่อาจนำไปสู่ข้อร้องเรียน',
      },
      {
        id: 'obj-4-2',
        objective: 'ลดข้อร้องเรียนด้านพฤติกรรมบริการและความล่าช้าในการดูแลรักษาในห้องฉุกเฉิน',
        target: 'ลดลงมากกว่า 50%',
        targetMetric: 'อุบัติการณ์ข้อร้องเรียนรุนแรง (ระดับ 3 ขึ้นไป) เป็น 0',
        timeline: 'ปีที่ 1-3',
        rationale: 'สร้างภาพลักษณ์ที่ดีและความไว้วางใจต่อโรงพยาบาล',
      },
    ],
  },
];

export const STRATEGIC_ALIGNMENTS: StrategicAlignment[] = [
  {
    id: 'strat-1',
    level: 'ระดับนโยบายชาติ / กระทรวงสาธารณสุข',
    title: 'Service Plan สาขาอุบัติเหตุและฉุกเฉิน (Accident & Emergency: A&E)',
    description: 'มุ่งเน้นการพัฒนาระบบบริการการแพทย์ฉุกเฉินครบวงจรอย่างไร้รอยต่อ (Seamless Emergency Medical Service), การเพิ่มศักยภาพห้องฉุกเฉินคุณภาพ (Smart & High Reliability ER), การเข้าถึงระบบส่งต่อ Fast-Track และการลดอัตราการเสียชีวิตจากภาวะวิกฤต',
    linkedDirectives: [
      'นโยบาย ER คุณภาพ (Quality ER) ของกระทรวงสาธารณสุข',
      'แผนพัฒนาการแพทย์ฉุกเฉินแห่งชาติ (กพฉ. / สพฉ.)',
      'เป้าหมายการลดอัตราตายจากอุบัติเหตุทางถนน (RTI Mortality Reduction)',
      'การพัฒนาระบบ Stroke / STEMI / Sepsis / Trauma Fast-Track ระดับเขตสุขภาพ',
    ],
    enpContribution: 'ENP ทำหน้าที่เป็น Clinical Driver ในการเชื่อมต่อห่วงโซ่การรอดชีวิต (Chain of Survival) ตั้งแต่จุดแรกรับจนถึงการดูแลขั้นสูง ควบคุมความถูกต้องของ Fast-Track Triage และเป็นแกนนำในการกำกับตามตัวชี้วัด Service Plan',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  },
  {
    id: 'strat-2',
    level: 'ระดับมาตรฐานสากลและความปลอดภัย',
    title: 'เป้าหมายความปลอดภัยของผู้ป่วยและบุคลากร (2P Safety Goals) ของ สรพ. (HA)',
    description: 'การปฏิบัติตามมาตรฐาน SIMPLE Concept ของสถาบันรับรองคุณภาพสถานพยาบาล (องค์การมหาชน) เพื่อป้องกันความคลาดเคลื่อนและเหตุการณ์ไม่พึงประสงค์ (Sentinel Events) ในแผนกฉุกเฉิน',
    linkedDirectives: [
      'S - Safe Surgery & Invasive Procedures: หัตถการฉุกเฉินปลอดภัย ท่อช่วยหายใจ ICD',
      'I - Infection Prevention: ป้องกัน CAUTI, VAP, CLABSI จากการทำหัตถการกู้ชีพเร่งด่วน',
      'M - Medication Safety: ยาความเสี่ยงสูง (High-Alert Drugs) การคำนวณและบริหารยา Resuscitation',
      'P - Patient Care Process: Triage ถูกต้อง, การประเมินซ้ำ, การส่งเวร ISBAR',
      'L - Line, Tube & Lab: การติดฉลากสิ่งส่งตรวจวิกฤต และการระบุตัวตนถูกต้อง',
      'E - Emergency Response: การตอบสนองต่อ Code Heart, Code Stroke, Code Trauma',
    ],
    enpContribution: 'ENP นำองค์ความรู้เวชปฏิบัติฉุกเฉินมาออกแบบ Checklists, Protocol-directed Medication Administration และกระบวนการ Double Check ที่จุดกู้ชีพ ทำให้ความปลอดภัย 2P Safety ปฏิบัติได้จริงในระดับหน้างาน',
    badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  },
  {
    id: 'strat-3',
    level: 'ระดับยุทธศาสตร์โรงพยาบาลและกลุ่มภารกิจพยาบาล',
    title: 'Hospital Strategic Thrusts & Nursing Excellence',
    description: 'การขับเคลื่อนสู่การเป็นศูนย์ความเป็นเลิศทางการแพทย์ (Center of Excellence in Trauma & Critical Care), การจัดการโรงพยาบาลอัจฉริยะ (Smart Hospital) และการพัฒนาบุคลากรเฉพาะทางสู่มาตรฐานสากล (Magnet-like Nursing Environment)',
    linkedDirectives: [
      'ยุทธศาสตร์ที่ 1: การเป็นเลิศด้านการบริการทางการแพทย์ฉุกเฉินและอุบัติเหตุ (Clinical Excellence)',
      'ยุทธศาสตร์ที่ 2: การเพิ่มประสิทธิภาพระบบบริการและลดความแออัด (Operational Excellence & Lean ED)',
      'ยุทธศาสตร์ที่ 3: การยกระดับความพึงพอใจและความผูกพันของผู้รับบริการ (Customer Centricity)',
      'ยุทธศาสตร์ที่ 4: การพัฒนาทรัพยากรบุคคลและเส้นทางความก้าวหน้าวิชาชีพพยาบาล (People & Talent Growth)',
    ],
    enpContribution: 'โครงการนี้ตอบโจทย์ทั้ง 4 ยุทธศาสตร์ของโรงพยาบาลอย่างสมบูรณ์ โดยพัฒนาทั้งกระบวนการทางคลินิก (Clinical), ความคุ้มค่าทางเศรษฐศาสตร์สาธารณสุขจากการลดวันนอนและภาวะแทรกซ้อน (Value-based), และการสร้างขวัญกำลังใจทีมพยาบาล (Workforce Retention)',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  },
  {
    id: 'strat-4',
    level: 'ระดับวิชาชีพการพยาบาลแห่งชาติ',
    title: 'สภาการพยาบาลและการพัฒนาพยาบาลผู้ปฏิบัติการขั้นสูง (Advanced Practice Nursing: APN/ENP)',
    description: 'การส่งเสริมบทบาทพยาบาลเฉพาะทางที่มีสมรรถนะการตัดสินใจทางคลินิกขั้นสูง (Clinical Autonomy) ตามพระราชบัญญัติวิชาชีพการพยาบาลและการผดุงครรภ์ เพื่อตอบสนองต่อปัญหาความขาดแคลนแพทย์ในห้องฉุกเฉิน',
    linkedDirectives: [
      'กรอบสมรรถนะพยาบาลเวชปฏิบัติฉุกเฉิน สภาการพยาบาลแห่งประเทศไทย',
      'แนวทางการขยายขอบเขตการปฏิบัติการพยาบาลขั้นสูงในหน่วยงานวิกฤตฉุกเฉิน',
      'การพัฒนา Evidence-Based Nursing Practice สู่การตีพิมพ์และนำเสนอผลงานวิชาการ',
    ],
    enpContribution: 'โครงการนี้เป็นต้นแบบการนำบทบาท ENP มาใช้เชิงโครงสร้างและระบบ (Structural Empowerment) อย่างเป็นรูปธรรม แสดงให้เห็นถึงคุณค่าของวิชาชีพพยาบาลต่อผลลัพธ์การรักษาของผู้ป่วย',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  },
];

export const ROADMAP_DATA: MilestoneItem[] = [
  {
    year: 1,
    period: 'พ.ศ. 2569 (ไตรมาส 1-4)',
    phaseTitle: 'ระยะที่ ๑: การวางรากฐานระบบคัดแยกปลอดภัยและช่องทางด่วน (Foundation & Triage Safety)',
    focusArea: 'Triage System Reform, Resuscitation Safety Baseline & Fast-Track Standardization',
    strategicTheme: 'Quick Wins & Clinical Safety Standardization',
    keyActions: [
      'ประเมินช่องว่างทางคลินิก (Gap Analysis) และจัดตั้งคณะทำงาน ENP Emergency Steering Committee',
      'ปรับปรุงระบบการคัดแยกผู้ป่วยด้วย Emergency Severity Index (ESI) ร่วมกับการประเมิน Modified Early Warning Score (MEWS/NEWS2)',
      'จัดตั้งระบบ ENP-Triage Oversight เพื่อตรวจประเมินซ้ำ (Re-triage) ในกลุ่มผู้ป่วยที่มีความเสี่ยงสูงที่รอตรวจ',
      'ปรับปรุงคู่มือและแนวทางปฏิบัติการพยาบาล (CNPG) 3 กลุ่มโรคสำคัญ: Severe Sepsis/Septic Shock, STEMI, Acute Stroke',
      'เริ่มนำร่อง ENP-led Fast-Track Consultation สำหรับผู้ป่วยกลุ่ม ESI 4-5 ในช่วงเวลาเร่งด่วน (Peak Hours)',
      'เริ่มโปรแกรม Preceptorship & Clinical Mentorship สำหรับพยาบาลบรรจุใหม่ใน ER',
    ],
    deliverables: [
      'คู่มือแนวปฏิบัติ ESI & MEWS Triage Protocol ฉบับปรับปรุง',
      'ระบบบันทึกอิเล็กทรอนิกส์แจ้งเตือนผู้ป่วยวิกฤตแฝงที่จุดคัดแยก',
      'รายงานผลการดำเนินงาน Fast-Track Sepsis, STEMI, Stroke ไตรมาสละ 1 ครั้ง',
      'หลักสูตรปฐมนิเทศพยาบาลใหม่ประจำแผนกอุบัติเหตุฉุกเฉิน (ED Orientation Checklist)',
    ],
    kpis: [
      'Under-triage ลดลงเหลือ < 5%',
      'Sepsis Hour-1 bundle completion เพิ่มขึ้นแตะ 70%',
      'พยาบาล ER ได้รับการอบรม MEWS & ESI ครบ 100%',
    ],
  },
  {
    year: 2,
    period: 'พ.ศ. 2570 (ไตรมาส 1-4)',
    phaseTitle: 'ระยะที่ ๒: ความเป็นเลิศด้านการกู้ชีพขั้นสูงและการไหลเวียนผู้ป่วย (Resuscitation & Flow Excellence)',
    focusArea: 'Advanced Resuscitation Leadership, POCUS Integration, High-Alert Drug Safety & Lean Patient Flow',
    strategicTheme: 'Clinical Deepening & Operational Decanting',
    keyActions: [
      'เปิดให้บริการ ENP Fast-Track Clinic เต็มรูปแบบ ครอบคลุม Minor Trauma, Wound Management, และ Simple Medical Emergencies',
      'นำร่องการใช้ Point-of-Care Ultrasound (POCUS) โดย ENP ในการประเมินเบื้องต้น: eFAST ใน Trauma และ IVC collapsibility ใน Shock',
      'พัฒนา Resuscitation Protocol ร่วมกับทีมแพทย์ฉุกเฉิน โดยให้ ENP มีบทบาท Co-leader ใน Resuscitation Room',
      'จัดตั้งห้องจำลองสถานการณ์ (ED Simulation Lab) จัดฝึกอบรม High-Fidelity Simulation เดือนละ 2 ครั้ง',
      'วางระบบบริหารจัดการเตียงและการส่งมอบเวรข้ามแผนกด้วย ISBAR และ Early Discharge Coordination เพื่อลด ED Boarding',
      'จัดตั้งระบบ Drug Safety Smart Infusion Check สำหรับกลุ่มยา Inotropes และ Thrombolytic agents',
    ],
    deliverables: [
      'แนวปฏิบัติ ENP Fast-Track Protocol และเกณฑ์การส่งปรึกษาแพทย์',
      'รายงานวิจัยทางคลินิก (R2R) เปรียบเทียบผลลัพธ์การดูแลผู้ป่วยก่อนและหลังการมี ENP',
      'ผลการประเมินสถานการณ์จำลอง (Simulation Debriefing Logs)',
      'ระบบแดชบอร์ดติดตามสถานะเตียงและผู้ป่วยรอรับไว้รักษาในโรงพยาบาล (ED Boarding Dashboard)',
    ],
    kpis: [
      'Under-triage ลดลงเหลือ < 3%',
      'Sepsis Hour-1 bundle completion > 80%',
      'Door-to-provider time ในกลุ่ม ESI 4-5 ลดลง 35%',
      'ED Boarding Time เฉลี่ยลดลงเหลือ < 5 ชั่วโมง',
      'อัตราการคงอยู่ของพยาบาล ER > 85%',
    ],
  },
  {
    year: 3,
    period: 'พ.ศ. 2571 (ไตรมาส 1-4)',
    phaseTitle: 'ระยะที่ ๓: ระบบบริการฉุกเฉินบูรณาการและ Smart ED สู่ศูนย์เรียนรู้ (Integrated Smart ED & Learning Center)',
    focusArea: 'Full Autonomy ENP Care, Digital Health & Tele-ER Integration, High Reliability Organization & Regional Hub',
    strategicTheme: 'System Maturity, Sustainable Excellence & Knowledge Transfer',
    keyActions: [
      'บูรณาการระบบเทคโนโลยีดิจิทัล (Smart ER): ระบบ AI Triage Assistance, Real-time Vital Sign Telemetry เชื่อมต่อระบบโรงพยาบาล',
      'จัดตั้งเครือข่ายความร่วมมือการดูแลผู้ป่วยฉุกเฉินระดับเขต (Regional Emergency Care Network) โดยมี ENP ร่วมเป็นที่ปรึกษา Tele-ER ให้ รพช. เครือข่าย',
      'ขยายบทบาท ENP สู่การติดตามผู้ป่วยกลุ่มเสี่ยงสูงหลังจำหน่าย (Post-ED High-Risk Discharge Follow-up) เพื่อป้องกันการกลับมารักษาซ้ำ',
      'ผลักดันแผนกอุบัติเหตุฉุกเฉินสู่การเป็นศูนย์ฝึกอบรมพยาบาลเวชปฏิบัติฉุกเฉิน (ENP Training & Practicum Hub) ร่วมกับสถาบันการศึกษา',
      'สรุปผลสัมฤทธิ์โครงการ จัดทำหนังสือคู่มือปฏิบัติการและตีพิมพ์ผลงานวิจัยในวารสารระดับชาติ/นานาชาติ',
    ],
    deliverables: [
      'ระบบ Smart ED Dashboard และการเชื่อมต่อข้อมูลผู้ป่วยวิกฤตแบบเรียลไทม์',
      'คู่มือมาตรฐานการปฏิบัติการพยาบาลเวชปฏิบัติฉุกเฉินระดับโรงพยาบาลและเครือข่าย',
      'บทความวิจัยประเมินประสิทธิผลโครงการ (Impact Evaluation Study)',
      'การรับรองมาตรฐานเฉพาะโรค (Disease Specific Certification: DSC) จาก สรพ.',
    ],
    kpis: [
      'Under-triage < 2%',
      'Unexpected cardiac arrest in ED = 0 ราย',
      'Sepsis Hour-1 bundle completion > 88%',
      'STEMI Door-to-ECG < 10 นาที > 92%',
      'Unplanned 48-hr ED revisit < 1.2%',
      'ความพึงพอใจของผู้รับบริการและญาติ > 90%',
    ],
  },
];

export const KPIS_TABLE_DATA: KPIMetric[] = [
  {
    id: 'kpi-1',
    name: 'อัตราการคัดแยกต่ำกว่าความเป็นจริง (Under-triage Rate)',
    category: 'ความปลอดภัยและผลลัพธ์ทางคลินิก',
    baseline: '8.5%',
    year1: '< 5.0%',
    year2: '< 3.0%',
    year3: '< 2.0%',
    source: 'เวชระเบียนและการตรวจสอบสุ่ม Triage Audit รายเดือน',
    frequency: 'รายเดือน',
  },
  {
    id: 'kpi-2',
    name: 'การปฏิบัติตามแนวทาง Sepsis 1-Hour Bundle ครบถ้วน',
    category: 'ความปลอดภัยและผลลัพธ์ทางคลินิก',
    baseline: '52.4%',
    year1: '> 70.0%',
    year2: '> 80.0%',
    year3: '> 88.0%',
    source: 'ฐานข้อมูล Sepsis Fast-Track & Blood Culture / Lactate / Abx Records',
    frequency: 'รายเดือน',
  },
  {
    id: 'kpi-3',
    name: 'STEMI Door-to-ECG ภายใน 10 นาที',
    category: 'ความปลอดภัยและผลลัพธ์ทางคลินิก',
    baseline: '74.2%',
    year1: '> 85.0%',
    year2: '> 90.0%',
    year3: '> 95.0%',
    source: 'ระบบเวลาจุดคัดแยกและเครื่องตรวจคลื่นไฟฟ้าหัวใจ',
    frequency: 'รายเดือน',
  },
  {
    id: 'kpi-4',
    name: 'Stroke Fast-Track Door-to-CT ภายใน 25 นาที',
    category: 'ความปลอดภัยและผลลัพธ์ทางคลินิก',
    baseline: '68.0%',
    year1: '> 80.0%',
    year2: '> 85.0%',
    year3: '> 90.0%',
    source: 'ระบบ Stroke Fast-Track Logbook และ PACS',
    frequency: 'รายเดือน',
  },
  {
    id: 'kpi-5',
    name: 'ภาวะหัวใจหยุดเต้นที่ไม่คาดคิดในห้องฉุกเฉินและพื้นที่รอตรวจ (Unexpected Arrest in ED)',
    category: 'ความปลอดภัยและผลลัพธ์ทางคลินิก',
    baseline: '4 ราย/ปี',
    year1: '≤ 1 ราย/ปี',
    year2: '0 ราย/ปี',
    year3: '0 ราย/ปี',
    source: 'ระบบรายงานความเสี่ยง (Incident Report) และ CPR Log',
    frequency: 'รายไตรมาส',
  },
  {
    id: 'kpi-6',
    name: 'ระยะเวลารอตรวจกลุ่มผู้ป่วยกึ่งเร่งด่วนและไม่เร่งด่วน (ESI 4-5 Door-to-Provider Time)',
    category: 'การไหลเวียนและระยะเวลารอคอย',
    baseline: '94 นาที',
    year1: '< 65 นาที',
    year2: '< 45 นาที',
    year3: '< 35 นาที',
    source: 'ระบบสารสนเทศโรงพยาบาล (HIS / ED Information System)',
    frequency: 'รายสัปดาห์ / รายเดือน',
  },
  {
    id: 'kpi-7',
    name: 'ระยะเวลาการนอนคอยเตียงในห้องฉุกเฉิน (ED Boarding Time)',
    category: 'การไหลเวียนและระยะเวลารอคอย',
    baseline: '420 นาที',
    year1: '< 360 นาที',
    year2: '< 270 นาที',
    year3: '< 210 นาที',
    source: 'ระบบติดตามสถานะผู้ป่วยรอ Admit (Bed Management System)',
    frequency: 'รายเดือน',
  },
  {
    id: 'kpi-8',
    name: 'ความคลาดเคลื่อนทางยาเสี่ยงสูงระดับ E ขึ้นไป (High-Alert Medication Errors)',
    category: 'ความปลอดภัยและผลลัพธ์ทางคลินิก',
    baseline: '3 เหตุการณ์/ปี',
    year1: '0 เหตุการณ์/ปี',
    year2: '0 เหตุการณ์/ปี',
    year3: '0 เหตุการณ์/ปี',
    source: 'ศูนย์บริหารความเสี่ยงโรงพยาบาล (Risk Management System)',
    frequency: 'รายเดือน',
  },
  {
    id: 'kpi-9',
    name: 'สัดส่วนพยาบาล ER ที่ผ่านการอบรมทักษะกู้ชีพและประเมินภาวะวิกฤตขั้นสูง',
    category: 'สมรรถนะบุคลากร',
    baseline: '45.0%',
    year1: '> 75.0%',
    year2: '> 90.0%',
    year3: '100.0%',
    source: 'บันทึกการฝึกอบรมฝ่ายการพยาบาล (Nursing Training Records)',
    frequency: 'ราย 6 เดือน',
  },
  {
    id: 'kpi-10',
    name: 'อัตราการคงอยู่ของพยาบาลแผนกอุบัติเหตุฉุกเฉิน (ED Nurse Retention Rate)',
    category: 'สมรรถนะบุคลากร',
    baseline: '72.0%',
    year1: '> 80.0%',
    year2: '> 85.0%',
    year3: '> 90.0%',
    source: 'รายงานสถิติกำลังคนกลุ่มภารกิจด้านการพยาบาล',
    frequency: 'รายปี',
  },
  {
    id: 'kpi-11',
    name: 'ความพึงพอใจโดยรวมของผู้ป่วยและญาติที่มารับบริการห้องฉุกเฉิน',
    category: 'ความพึงพอใจและจริยธรรม',
    baseline: '71.5%',
    year1: '> 80.0%',
    year2: '> 85.0%',
    year3: '> 90.0%',
    source: 'แบบสำรวจความพึงพอใจผู้รับบริการแบบเรียลไทม์ / ดิจิทัล',
    frequency: 'รายเดือน',
  },
];

export const ENP_CORE_ROLES = [
  {
    title: '๑. ผู้ให้การดูแลและตัดสินใจทางคลินิกขั้นสูง (Advanced Direct Care & Clinical Decision Maker)',
    points: [
      'ทำหน้าที่คัดแยกขั้นสูง (Advanced Triage & Secondary Assessment) ตรวจร่างกาย วินิจฉัยแยกโรค และตรวจทางห้องปฏิบัติการด่วน',
      'เป็นผู้นำร่วมในการกู้ชีพ (Resuscitation Co-leader) ในผู้ป่วยช็อก หัวใจหยุดเต้น หรืออุบัติเหตุหมู่ตามโปรโตคอลสากล',
      'ทำหัตถการช่วยชีวิตขั้นสูง เช่น การเปิดทางเดินหายใจขั้นสูง, การเปิดเส้นเลือดดำส่วนกลาง/กระดูก (IO), การใช้ POCUS ประเมินภาวะช็อก',
      'ดูแลรักษาผู้ป่วยในคลินิกเร่งด่วน (ENP Fast-Track Clinic) สำหรับกลุ่มโรคเฉียบพลันไม่ซับซ้อนและการทำหัตถการเย็บแผล/ดามกระดูก',
    ],
  },
  {
    title: '๒. ผู้นิเทศทางคลินิกและผู้ให้การศึกษา (Clinical Educator & Preceptor)',
    points: [
      'เป็นพี่เลี้ยงทางคลินิก (Clinical Preceptor) ให้แก่พยาบาลใหม่และพยาบาลประจำการในการประเมินภาวะวิกฤต',
      'ออกแบบและจัดฝึกอบรมสถานการณ์จำลอง (Simulation-Based Training & Mock Code Drills) เสริมสร้างทักษะการทำงานเป็นทีม',
      'ให้คำปรึกษาทางคลินิกตลอด 24 ชั่วโมงในกรณีเคสยากหรือมีสัญญาณเตือนภาวะวิกฤต (Crisis Consultation)',
    ],
  },
  {
    title: '๓. ผู้นำการพัฒนาคุณภาพและวิจัย (Quality Improvement Leader & Nurse Researcher)',
    points: [
      'พัฒนาและปรับปรุงแนวปฏิบัติการพยาบาลทางคลินิก (CNPG) ให้สอดคล้องกับหลักฐานเชิงประจักษ์ล่าสุด',
      'ติดตามและวิเคราะห์ตัวชี้วัดคุณภาพทางคลินิก (Clinical Auditing) เช่น อัตราการรอดชีวิต, อัตรา Under-triage, Door-to-Needle time',
      'ทำวิจัยจากงานประจำสู่งานวิจัย (Routine to Research: R2R) เพื่อพัฒนานวัตกรรมในการดูแลผู้ป่วยฉุกเฉิน',
    ],
  },
  {
    title: '๔. ผู้ประสานการดูแลและผู้จัดการการไหลเวียนผู้ป่วย (System Coordinator & Patient Flow Manager)',
    points: [
      'ประสานงานระหว่างห้องฉุกเฉินกับศูนย์หัวใจ สโตรก หอผู้ป่วยวิกฤต (ICU) และห้องผ่าตัด เพื่อส่งต่อผู้ป่วยอย่างไร้รอยต่อ',
      'บริหารจัดการการจำหน่ายผู้ป่วย (Discharge Planning) และการให้คำแนะนำสุขภาพฉุกเฉินเพื่อป้องกันการกลับมารักษาซ้ำ',
      'เป็นกระบอกเสียงพิทักษ์สิทธิผู้ป่วย (Patient Advocacy) และสร้างการสื่อสารที่เห็นอกเห็นใจระหว่างทีมแพทย์กับญาติ',
    ],
  },
];
