import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-surface border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-500 mt-2 text-sm">Last updated: June 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using ElectroKit Hub, you agree to comply with and be bound by these terms and conditions. If you do not agree, please do not use our services.</p>

        <h2>2. Products and Pricing</h2>
        <p>All prices are listed in US Dollars and are subject to change without notice. We reserve the right to modify or discontinue products at any time. Product images are for illustration purposes; actual products may vary slightly.</p>

        <h2>3. Orders and Payment</h2>
        <p>By placing an order, you agree to provide accurate and complete information. We reserve the right to refuse or cancel orders at our discretion. Payment is due at the time of ordering through available payment methods.</p>

        <h2>4. Shipping and Delivery</h2>
        <p>Orders are processed within 24 hours. Delivery times vary based on location. We are not responsible for delays caused by shipping carriers or customs clearance.</p>

        <h2>5. Returns and Refunds</h2>
        <p>We accept returns of unused items in original packaging within 14 days of delivery. Refunds are processed within 5-7 business days after we receive the returned item. Shipping costs for returns are the customer's responsibility.</p>

        <h2>6. Intellectual Property</h2>
        <p>All content on this website — including text, images, logos, and code samples — is the property of ElectroKit Hub and is protected by applicable copyright laws.</p>

        <h2>7. Limitation of Liability</h2>
        <p>ElectroKit Hub shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</p>

        <h2>8. Contact</h2>
        <p>For questions about these terms, please <Link href="/contact" className="text-secondary hover:underline">contact us</Link>.</p>
      </div>
    </div>
  );
}
