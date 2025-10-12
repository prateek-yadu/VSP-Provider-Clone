
export default function Dashboard() {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-3">Overview</h3>
      <div className="grid grid-cols-4 gap-3 mt-4">
        <div className="bg-accent h-72 rounded"></div>
        <div className="bg-accent h-72 rounded"></div>
        <div className="bg-accent h-72 rounded"></div>
        <div className="bg-accent h-72 rounded"></div>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-4">
        <div className="bg-accent h-96 rounded"></div>
      </div>
    </>
  )
}
