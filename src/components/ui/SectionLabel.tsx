export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-brand font-black text-xs tracking-[0.3em] uppercase block mb-4">
      {children}
    </span>
  );
}
