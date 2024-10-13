export default function Experience() {
  return (
    <>
      <div className="min-h-screen bg-white text-black p-8">
        <div className="max-w-3xl mx-auto">
          <Step number={1} title="Create project">
            <p>
              Run the init command to create a new Next.js project or to setup an existing one:
            </p>
          </Step>

          <Step number={2} title="Configure components.json">
            <p>You will be asked a few questions to configure :</p>
          </Step>

          <Step number={3} title="That's it">
            <p>You can now start adding components to your project.</p>
          </Step>
        </div>
      </div>
    </>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-800">
      <div className="absolute left-0 top-0 bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center -translate-x-1/2 text-white">
        {number}
      </div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  )
}
