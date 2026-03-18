'use client';

import { useState } from 'react';

const specializations = [
  'Paediatrics',
  'Neurology',
  'Psychiatry',
  'General Medicine',
  'Obstetrics & Gynaecology',
  'Child Psychology',
  'Developmental Paediatrics',
  'Neonatology',
  'Family Medicine',
  'Other',
];

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    registrationNumber: '',
    specialization: '',
    institution: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm({ name: '', email: '', registrationNumber: '', specialization: '', institution: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#4AB35C' }}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#0D3929' }}>Registration Successful!</h3>
        <p className="text-base" style={{ color: '#0D3929', opacity: 0.7 }}>
          Thank you for registering. We look forward to seeing you on 29th March 2026.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2 rounded-full text-sm font-medium text-white"
          style={{ backgroundColor: '#4AB35C' }}
        >
          Register Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-1.5">
        <label className="block text-sm font-medium" style={{ color: '#0D3929' }}>
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Dr. Deepak"
          required
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
          style={{
            borderColor: '#D1E8D4',
            backgroundColor: '#FAFFFE',
            color: '#0D3929',
          }}
          onFocus={e => (e.target.style.borderColor = '#4AB35C')}
          onBlur={e => (e.target.style.borderColor = '#D1E8D4')}
        />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="block text-sm font-medium" style={{ color: '#0D3929' }}>
          Email ID
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="doctor@hospital.com"
          required
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
          style={{
            borderColor: '#D1E8D4',
            backgroundColor: '#FAFFFE',
            color: '#0D3929',
          }}
          onFocus={e => (e.target.style.borderColor = '#4AB35C')}
          onBlur={e => (e.target.style.borderColor = '#D1E8D4')}
        />
      </div>

      {/* Registration Number + Specialization */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium" style={{ color: '#0D3929' }}>
            Registration Number
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={form.registrationNumber}
            onChange={handleChange}
            placeholder="Medical Reg. No."
            required
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
            style={{
              borderColor: '#D1E8D4',
              backgroundColor: '#FAFFFE',
              color: '#0D3929',
            }}
            onFocus={e => (e.target.style.borderColor = '#4AB35C')}
            onBlur={e => (e.target.style.borderColor = '#D1E8D4')}
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium" style={{ color: '#0D3929' }}>
            Specialization
          </label>
          <div className="relative">
            <select
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all appearance-none"
              style={{
                borderColor: '#D1E8D4',
                backgroundColor: '#FAFFFE',
                color: form.specialization ? '#0D3929' : '#9CA3AF',
              }}
              onFocus={e => (e.target.style.borderColor = '#4AB35C')}
              onBlur={e => (e.target.style.borderColor = '#D1E8D4')}
            >
              <option value="" disabled>Select Area</option>
              {specializations.map(s => (
                <option key={s} value={s} style={{ color: '#0D3929' }}>{s}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4" fill="none" stroke="#0D3929" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Institution */}
      <div className="space-y-1.5">
        <label className="block text-sm font-medium" style={{ color: '#0D3929' }}>
          Hospital/Clinic/Institute Name
        </label>
        <input
          type="text"
          name="institution"
          value={form.institution}
          onChange={handleChange}
          placeholder="Institution Name"
          required
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
          style={{
            borderColor: '#D1E8D4',
            backgroundColor: '#FAFFFE',
            color: '#0D3929',
          }}
          onFocus={e => (e.target.style.borderColor = '#4AB35C')}
          onBlur={e => (e.target.style.borderColor = '#D1E8D4')}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-xl text-white font-semibold text-base transition-opacity disabled:opacity-70 mt-2"
        style={{ backgroundColor: '#0D3929' }}
      >
        {status === 'loading' ? 'Submitting…' : 'Submit Registration'}
      </button>
    </form>
  );
}
