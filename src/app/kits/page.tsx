import Link from "next/link";

const projectKits = [
  {
    title: "LED Blink Magic Kit",
    difficulty: "Beginner",
    age: "8+",
    price: 9.99,
    components: ["Arduino Nano", "5x LEDs", "Resistors", "Breadboard", "Jumper Wires"],
    description: "Learn the basics of electronics by creating your first blinking LED circuit. Perfect for absolute beginners!",
    color: "from-emerald-500 to-emerald-700",
    badge: "Most Popular",
  },
  {
    title: "Ultrasonic Distance Meter",
    difficulty: "Beginner",
    age: "10+",
    price: 14.99,
    components: ["Arduino Uno", "HC-SR04 Sensor", "Buzzer", "LCD Display", "Breadboard"],
    description: "Build a radar-like distance meter using ultrasonic waves. See distances on an LCD screen!",
    color: "from-sky-500 to-sky-700",
    badge: "New",
  },
  {
    title: "Traffic Light System",
    difficulty: "Beginner",
    age: "10+",
    price: 12.99,
    components: ["Arduino Uno", "Red/Green/Yellow LEDs", "Resistors", "Breadboard", "Code Guide"],
    description: "Simulate a real traffic light intersection with timed LED sequences. Learn about timing and logic!",
    color: "from-amber-500 to-amber-700",
    badge: "",
  },
  {
    title: "Smart Night Lamp",
    difficulty: "Intermediate",
    age: "12+",
    price: 16.99,
    components: ["Arduino Nano", "LDR Sensor", "RGB LED", "Resistors", "USB Cable"],
    description: "Create a smart lamp that turns on automatically when it gets dark and changes colors!",
    color: "from-violet-500 to-violet-700",
    badge: "Smart",
  },
  {
    title: "DIY Robot Car",
    difficulty: "Advanced",
    age: "14+",
    price: 29.99,
    components: ["Arduino Uno", "Motor Driver", "2x Motors", "Wheels", "Ultrasonic Sensor", "Battery Pack"],
    description: "Build your own obstacle-avoiding robot car! It drives around and automatically avoids walls.",
    color: "from-rose-500 to-rose-700",
    badge: "Best Seller",
  },
  {
    title: "Weather Station Kit",
    difficulty: "Intermediate",
    age: "12+",
    price: 22.99,
    components: ["Arduino Uno", "DHT11 Sensor", "Rain Sensor", "OLED Display", "Breadboard"],
    description: "Measure temperature, humidity, and rainfall. Display real-time weather data on an OLED screen!",
    color: "from-cyan-500 to-cyan-700",
    badge: "STEM",
  },
  {
    title: "RFID Door Lock",
    difficulty: "Advanced",
    age: "14+",
    price: 19.99,
    components: ["Arduino Nano", "RFID Module", "RFID Cards", "Servo Motor", "Keypad"],
    description: "Build a secure door lock system that opens with RFID cards or a passcode!",
    color: "from-indigo-500 to-indigo-700",
    badge: "Security",
  },
  {
    title: "Music Player Shield",
    difficulty: "Intermediate",
    age: "12+",
    price: 17.99,
    components: ["Arduino Uno", "DFPlayer Mini", "Speaker", "SD Card", "Buttons"],
    description: "Create your own MP3 player! Load songs on an SD card and play them with button controls.",
    color: "from-pink-500 to-pink-700",
    badge: "Fun",
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-rose-100 text-rose-700",
};

export default function KitsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary via-[#151E3A] to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-accent border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Project Kits
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Arduino Project Kits for Kids
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-lg mx-auto">
              Complete kits with all components included. Each kit comes with a step-by-step guide and sample code. Just open and start building!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectKits.map((kit) => (
            <div
              key={kit.title}
              className="group bg-surface rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className={`h-44 bg-gradient-to-br ${kit.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                {kit.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 text-gray-800 text-xs font-semibold rounded-full shadow-sm backdrop-blur-sm">
                    {kit.badge}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-xl">🧩</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${difficultyColors[kit.difficulty]}`}>
                    {kit.difficulty}
                  </span>
                  <span className="text-xs text-gray-400">Ages {kit.age}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-secondary transition-colors">{kit.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 line-clamp-2 flex-1 leading-relaxed">{kit.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-400 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {kit.components.slice(0, 4).map((comp) => (
                      <span key={comp} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs rounded-md border border-gray-100">
                        {comp}
                      </span>
                    ))}
                    {kit.components.length > 4 && (
                      <span className="px-2 py-0.5 text-gray-400 text-xs">+{kit.components.length - 4} more</span>
                    )}
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${kit.price.toFixed(2)}</span>
                  <button className="px-5 py-2 bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-secondary/20">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
