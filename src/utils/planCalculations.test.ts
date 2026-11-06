import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateImprovement,
  calculateProjectReadinessScore,
  generateProposalSummary,
} from './planCalculations.ts';

test('calculateImprovement correctly evaluates lower-is-better metrics (e.g. triage error rate)', () => {
  // Baseline error 8%, target 2% => improvement is (8-2)/8 * 100 = 75%
  const improvement = calculateImprovement(8, 2, false);
  assert.equal(improvement, 75);
});

test('calculateImprovement correctly evaluates higher-is-better metrics (e.g. bundle completion)', () => {
  // Baseline 50%, target 90% => improvement is (90-50)/50 * 100 = 80%
  const improvement = calculateImprovement(50, 90, true);
  assert.equal(improvement, 80);
});

test('calculateProjectReadinessScore computes balanced weighted score', () => {
  const score = calculateProjectReadinessScore(5, 5, 12, 12, 4, 4);
  assert.equal(score, 100);

  const halfScore = calculateProjectReadinessScore(2.5, 5, 6, 12, 2, 4);
  assert.equal(halfScore, 50);
});

test('generateProposalSummary includes metadata fields correctly', () => {
  const summary = generateProposalSummary({
    hospitalName: 'โรงพยาบาลศูนย์มหาราช',
    departmentName: 'กลุ่มงานการพยาบาลอุบัติเหตุและฉุกเฉิน',
    authorName: 'พว.นันทวัน อิศรสัยณี',
    authorPosition: 'พยาบาลวิชาชีพชำนาญการ (ผู้ผ่านการอบรม ENP)',
    targetYears: '1-3 ปี (พ.ศ. 2569-2571)',
    hospitalTier: 'รพศ.',
    submittedTo: 'คณะกรรมการบริหารโรงพยาบาลและหัวหน้าพยาบาล',
  });

  assert.match(summary, /โรงพยาบาลศูนย์มหาราช/);
  assert.match(summary, /พว\.นันทวัน อิศรสัยณี/);
  assert.match(summary, /Emergency Nurse Practitioner: ENP/);
});
