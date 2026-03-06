"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { captureError } from "../../../lib/errorMonitoring";

export default function Error({ error, reset }) {
  useEffect(() => {
    captureError(error, { page: "destination/[id]", type: "render" });
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-[8px] shadow-sm border border-slate-100 flex flex-col items-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-[8px] flex items-center justify-center mb-6">
          <AlertCircle size={32} />
        </div>
        <h2 className="font-cinzel text-2xl font-light text-slate-900 mb-2">
          Oops! Terjadi Kesalahan
        </h2>
        <p className="text-slate-600 mb-8">
          Kami tidak dapat memuat informasi paket travel yang Anda tuju. Silakan coba beberapa saat
          lagi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-[8px] transition-colors"
          >
            Coba Lagi
          </button>
          <Link href="/" className="btn-primary px-6 py-3 text-xs">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
