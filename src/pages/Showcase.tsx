type Product = {
  id: number
  name: string
  price: string
  badge?: string
  rating?: number // 0-5
  color: string   // Tailwind bg-* para placeholder
}

const STAR = (
  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
    <path d="M10 15.27l-5.18 3.05 1.64-5.64L1.7 8.97l5.72-.5L10 3l2.58 5.47 5.72.5-4.76 3.71 1.64 5.64z" />
  </svg>
)

const products: Product[] = [
  { id: 1, name: 'Auriculares Nimbus X', price: '$1,299', badge: 'Nuevo', rating: 5, color: 'bg-indigo-300' },
  { id: 2, name: 'Smartwatch Pulse 2', price: '$2,499', rating: 4, color: 'bg-emerald-300' },
  { id: 3, name: 'Cámara Pocket 4K', price: '$9,999', badge: 'Hot', rating: 5, color: 'bg-rose-300' },
  { id: 4, name: 'Teclado Mecánico S', price: '$1,899', rating: 4, color: 'bg-amber-300' },
  { id: 5, name: 'Monitor 27” QHD', price: '$6,499', rating: 4, color: 'bg-sky-300' },
  { id: 6, name: 'Bocina Portátil Go', price: '$999', rating: 3, color: 'bg-fuchsia-300' },
]

function Rating({ value = 0 }: { value?: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < value ? '' : 'opacity-30'}>
          {STAR}
        </span>
      ))}
    </div>
  )
}

export default function Showcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
              ✨ Demo Tailwind + React
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Diseña rápido. <span className="text-indigo-600">Luce increíble.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Un starter visual para comprobar que Tailwind está funcionando: animaciones sutiles, tarjetas con hover y un hero limpio.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-sm ring-1 ring-indigo-600/60 transition hover:translate-y-[-1px] hover:bg-indigo-500 hover:shadow-md active:translate-y-0">
                Empezar ahora
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <button className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 shadow-sm transition hover:translate-y-[-1px] hover:shadow-md active:translate-y-0">
                Ver catálogo
              </button>
            </div>

            <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-4 text-sm text-slate-600">
              <Stat label="Componentes" value="6+" />
              <Stat label="Tiempo de setup" value="~2 min" />
              <Stat label="Responsive" value="Sí" />
            </div>
          </div>
        </div>
      </header>

      {/* Grid de productos */}
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Destacados</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* badge */}
              {p.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                  {p.badge}
                </span>
              )}

              {/* imagen placeholder */}
              <div className={`h-40 w-full ${p.color} transition group-hover:scale-[1.02]`} />

              <div className="flex flex-col gap-2 p-4">
                <h3 className="line-clamp-1 text-base font-semibold text-slate-900">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <Rating value={p.rating ?? 0} />
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-sm font-semibold text-slate-700">
                    {p.price}
                  </span>
                </div>

                <button
                  className="mt-3 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
                  onClick={() => alert(`Añadido: ${p.name}`)}
                >
                  Añadir al carrito
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-center sm:p-8">
          <p className="text-lg font-semibold text-indigo-900">¿Listo para construir tu tienda?</p>
          <p className="mt-1 text-indigo-700/80">
            Este grid es un punto de partida. Conecta tus datos y personaliza estilos.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-sm ring-1 ring-indigo-600/60 transition hover:bg-indigo-500"
            >
              Crear colección
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Tu Tienda. Todos los derechos reservados.
      </footer>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-base font-semibold text-slate-900">{value}</p>
    </div>
  )
}
