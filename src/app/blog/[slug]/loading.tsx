export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="bg-surface border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-4 w-24 bg-gray-100 rounded mb-4" />
          <div className="h-8 w-3/4 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-4 w-4/5 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}
