import React, { useState } from 'react';
import { X, Check, Building, User, Calendar, Save } from 'lucide-react';
import { ProposalMetadata } from '../utils/planCalculations';

interface MetadataModalProps {
  isOpen: boolean;
  onClose: () => void;
  metadata: ProposalMetadata;
  onSave: (newMeta: ProposalMetadata) => void;
}

export const MetadataModal: React.FC<MetadataModalProps> = ({
  isOpen,
  onClose,
  metadata,
  onSave,
}) => {
  const [form, setForm] = useState<ProposalMetadata>(metadata);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 sm:p-5 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <Building className="w-4 h-4" />
            <span>ปรับแต่งข้อมูลเอกสารโครงการ</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block text-slate-300 font-medium mb-1">ชื่อโรงพยาบาล</label>
            <input
              type="text"
              value={form.hospitalName}
              onChange={(e) => setForm({ ...form, hospitalName: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">ระดับโรงพยาบาล</label>
              <select
                value={form.hospitalTier}
                onChange={(e) =>
                  setForm({ ...form, hospitalTier: e.target.value as ProposalMetadata['hospitalTier'] })
                }
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
              >
                <option value="รพศ.">รพศ. (โรงพยาบาลศูนย์)</option>
                <option value="รพท.">รพท. (โรงพยาบาลทั่วไป)</option>
                <option value="รพช.">รพช. (โรงพยาบาลชุมชน)</option>
                <option value="รพ.มหาวิทยาลัย">รพ.มหาวิทยาลัย</option>
                <option value="รพ.เอกชน">รพ.เอกชน</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">กรอบเวลาเป้าหมาย</label>
              <input
                type="text"
                value={form.targetYears}
                onChange={(e) => setForm({ ...form, targetYears: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
                placeholder="1-3 ปี (พ.ศ. 2569-2571)"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">ชื่อหน่วยงาน / แผนก</label>
            <input
              type="text"
              value={form.departmentName}
              onChange={(e) => setForm({ ...form, departmentName: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">ชื่อ-สกุล ผู้เสนอโครงการ</label>
              <input
                type="text"
                value={form.authorName}
                onChange={(e) => setForm({ ...form, authorName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">ตำแหน่ง</label>
              <input
                type="text"
                value={form.authorPosition}
                onChange={(e) => setForm({ ...form, authorPosition: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
                placeholder="พยาบาลวิชาชีพชำนาญการ (ENP)"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">เสนอต่อ (ผู้อนุมัติ / คณะกรรมการ)</label>
            <input
              type="text"
              value={form.submittedTo}
              onChange={(e) => setForm({ ...form, submittedTo: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
              placeholder="ผู้อำนวยการโรงพยาบาลและหัวหน้ากลุ่มภารกิจด้านการพยาบาล"
              required
            />
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-md transition"
            >
              <Save className="w-4 h-4" />
              <span>บันทึกข้อมูล</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
