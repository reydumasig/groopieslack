export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Groopie</h1>
          <p className="text-gray-600 mt-2">
            Create and manage monetized WhatsApp communities
          </p>
        </div>
        {children}
      </div>
    </div>
  )
} 