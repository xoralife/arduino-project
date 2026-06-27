import { ProductGridSkeleton } from "@/components/ui/LoadingSkeleton";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-8 w-48 bg-gray-100 rounded animate-pulse" />
          <div className="mt-2 h-4 w-32 bg-gray-100 rounded animate-pulse" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductGridSkeleton count={12} />
      </div>
    </div>
  );
}
