/** Fixed page backdrop: faint grid plus two soft indigo / cyan glows. Pure CSS, no blur filters. */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%)',
        }}
      />
      <div
        className="absolute -left-40 -top-40 h-[640px] w-[640px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.22), transparent 65%)' }}
      />
      <div
        className="absolute -right-40 top-[18%] h-[560px] w-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12), transparent 65%)' }}
      />
    </div>
  )
}
