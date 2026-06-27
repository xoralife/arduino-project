import Link from "next/link";

const posts = [
  {
    title: "Getting Started with Arduino: Your First Project",
    excerpt: "Learn how to set up your Arduino board and create your first blinking LED project in under 10 minutes.",
    date: "June 15, 2026",
    readTime: "5 min read",
    category: "Tutorial",
    slug: "getting-started-arduino",
    image: "🔌",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "How to Use an Ultrasonic Sensor (HC-SR04) with Arduino",
    excerpt: "A complete guide to measuring distance using the HC-SR04 ultrasonic sensor. Includes wiring diagram and code.",
    date: "June 10, 2026",
    readTime: "8 min read",
    category: "Guide",
    slug: "ultrasonic-sensor-guide",
    image: "📡",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Top 10 Arduino Projects for Kids",
    excerpt: "Fun and educational Arduino projects perfect for young makers. From LED magic to robot cars!",
    date: "June 5, 2026",
    readTime: "10 min read",
    category: "Projects",
    slug: "top-10-arduino-projects-kids",
    image: "🧒",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Complete Guide to Soldering for Beginners",
    excerpt: "Learn the basics of soldering, essential tools, safety tips, and how to make perfect solder joints every time.",
    date: "May 28, 2026",
    readTime: "7 min read",
    category: "Tutorial",
    slug: "soldering-beginners-guide",
    image: "🔥",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Building a Smart Home with Arduino",
    excerpt: "Automate your home with Arduino! Control lights, fans, and appliances using relays and sensors.",
    date: "May 20, 2026",
    readTime: "12 min read",
    category: "Projects",
    slug: "smart-home-arduino",
    image: "🏠",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Understanding Arduino Sensors: A Complete Guide",
    excerpt: "An overview of the most popular Arduino sensors — temperature, motion, distance, light, and more.",
    date: "May 12, 2026",
    readTime: "6 min read",
    category: "Guide",
    slug: "arduino-sensors-guide",
    image: "🔍",
    color: "from-teal-500 to-teal-600",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
            Tutorials & Guides
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Blog</h1>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Learn Arduino, electronics, and soldering with our step-by-step tutorials and project guides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <div className={`h-44 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                <span className="text-6xl">{post.image}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="px-2 py-0.5 bg-gray-50 rounded-full font-medium text-gray-500">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
