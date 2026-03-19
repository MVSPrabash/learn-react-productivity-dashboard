import './Widget.css'

export default function Widget({ children }) {
  return (
  <>
    <div className="widget">
      {children}
    </div>
  </>
  );
}
