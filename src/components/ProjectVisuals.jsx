/* Small, CSS-only illustrations that hint at what each project actually is. */

const bars = [0.5, 0.9, 0.6, 1, 0.7, 0.85, 0.45, 0.95, 0.6, 0.8]

export function StreamingVisual() {
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="relative grid flex-1 place-items-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-indigo-950 via-zinc-900 to-cyan-950">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-white/15 backdrop-blur">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-white" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="absolute bottom-3 left-3 flex h-8 items-end gap-[3px]" aria-hidden="true">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-[3px] origin-bottom animate-eq rounded-full bg-brand-cyan"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 0.11}s` }}
            />
          ))}
        </div>
        <span className="absolute right-3 top-3 rounded-md bg-black/40 px-2 py-0.5 text-[11px] font-semibold text-zinc-200">
          Auto
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[58%] rounded-full bg-gradient-to-r from-brand-deep to-brand-cyan" />
      </div>
      <div className="flex gap-1.5 text-[11px] font-semibold">
        {['240p', '480p', '720p', '1080p'].map((q) => (
          <span
            key={q}
            className={`rounded-md px-2 py-1 ${
              q === '720p' ? 'bg-brand-deep/30 text-brand-indigo' : 'bg-white/5 text-zinc-500'
            }`}
          >
            {q}
          </span>
        ))}
      </div>
    </div>
  )
}

export function MicrofrontendVisual() {
  const remote = (label, tone, bar) => (
    <div className={`flex flex-1 flex-col gap-2.5 rounded-lg border border-dashed p-3 ${tone}`}>
      <span className="text-xs font-semibold">{label}</span>
      <span className={`h-2 w-3/4 rounded-full ${bar}`} />
      <span className={`h-2 w-1/2 rounded-full ${bar}`} />
      <span className={`mt-auto h-12 rounded-md ${bar}`} />
    </div>
  )
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-300">
        Shell app (host)
      </div>
      <div className="flex flex-1 gap-3">
        {remote('Remote A', 'border-brand-indigo/60 bg-brand-deep/10 text-brand-indigo', 'bg-brand-indigo/20')}
        {remote('Remote B', 'border-brand-cyan/60 bg-brand-cyan/10 text-brand-cyan', 'bg-brand-cyan/20')}
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] font-medium text-zinc-500">
        Shared dependencies loaded once
      </div>
    </div>
  )
}

export function DesktopVisual() {
  const rows = [
    ['Aarav K.', 'Class 10-A'],
    ['Divya S.', 'Class 9-B'],
    ['Karthik M.', 'Class 10-A'],
    ['Meena R.', 'Class 8-C'],
  ]
  return (
    <div className="flex h-full items-center p-5">
      <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 rounded bg-white/5 px-2 py-0.5 text-[10px] text-zinc-500">Search students</span>
          <span className="ml-auto rounded bg-brand-deep/30 px-2 py-0.5 text-[10px] font-semibold text-brand-indigo">
            Export
          </span>
        </div>
        <ul className="divide-y divide-white/5 text-xs">
          {rows.map(([name, cls]) => (
            <li key={name} className="flex justify-between px-3 py-2.5 text-zinc-400">
              <span className="font-medium text-zinc-200">{name}</span>
              <span>{cls}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const VISUALS = {
  streaming: StreamingVisual,
  microfrontend: MicrofrontendVisual,
  desktop: DesktopVisual,
}
