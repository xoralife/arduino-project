import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-primary/10">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-4">Page not found</h1>
        <p className="text-gray-500 mt-2 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1 mt-6 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-lg transition-all text-sm"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
