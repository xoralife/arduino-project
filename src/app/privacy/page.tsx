import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-surface border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 mt-2 text-sm">Last updated: June 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray max-w-none">
        <h2>1. Information We Collect</h2>
        <p>When you place an order or register on our site, we collect personal information such as your name, email address, phone number, and shipping address. We also collect order details and payment information necessary to process your transactions.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to process orders, provide customer support, improve our products and services, and send occasional updates about new products or promotions (with your consent).</p>

        <h2>3. Data Protection</h2>
        <p>We implement industry-standard security measures to protect your personal data. All payment transactions are processed through secure, encrypted channels. We do not store full credit/debit card numbers on our servers.</p>

        <h2>4. Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and processing orders, provided they agree to keep your data confidential.</p>

        <h2>5. Cookies</h2>
        <p>Our website uses cookies to enhance your browsing experience, analyze site traffic, and remember your preferences. You can choose to disable cookies in your browser settings.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal data at any time. Contact us at support@electrokithub.com to exercise these rights.</p>

        <h2>7. Contact</h2>
        <p>If you have questions about this privacy policy, please <Link href="/contact" className="text-secondary hover:underline">contact us</Link>.</p>
      </div>
    </div>
  );
}
