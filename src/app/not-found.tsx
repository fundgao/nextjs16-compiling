import Link from 'next/link'

export default function NotFound() {

  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-4 flex-1"
      style={{
        minHeight: '600px',
      }}
    >
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found
      </h2>
      <p className="text-muted-foreground">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="text-white bg-black px-4 py-2 rounded-md">Back to Home</Link>
    </div>
  )
}
