export default function Label({ children, color }) {
  return (
    <span
      className="px-6 py-3 text-2xl font-extrabold text-white uppercase shadow-md rounded-xl drop-shadow-sm"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {children}
    </span>
  );
}
