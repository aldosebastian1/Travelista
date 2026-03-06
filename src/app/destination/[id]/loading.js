export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 border-4 border-slate-200 rounded-full animate-spin"
          style={{ borderTopColor: "#1483b0" }}
        ></div>
        <p className="text-slate-500 font-medium animate-pulse">Memuat detail paket travel...</p>
      </div>
    </div>
  );
}
