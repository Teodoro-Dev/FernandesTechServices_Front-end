export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`px-6 sm:px-10 md:px-16 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}


