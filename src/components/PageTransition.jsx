// Re-mounts on every route change: a dark curtain sweeps up and the new page fades in.
export default function PageTransition({ routeKey, children }) {
  return (
    <>
      <div key={`c-${routeKey}`} className="curtain" aria-hidden="true" />
      <main key={routeKey} className="page">
        {children}
      </main>
    </>
  )
}
