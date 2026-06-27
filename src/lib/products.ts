export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

const products: Product[] = [
  {
    id: "1",
    name: "Arduino Uno R3 Board",
    slug: "arduino-uno-r3",
    description: "The official Arduino Uno R3 board. ATmega328P microcontroller, 14 digital I/O pins, 6 analog inputs, USB connection.",
    price: 24.99,
    image: "",
    category: "Boards",
    stock: 15,
  },
  {
    id: "2",
    name: "HC-SR04 Ultrasonic Sensor",
    slug: "hc-sr04-ultrasonic",
    description: "HC-SR04 ultrasonic distance sensor module. 2cm to 400cm range, 5V operation, perfect for Arduino distance measurement projects.",
    price: 3.49,
    image: "",
    category: "Sensors",
    stock: 50,
  },
  {
    id: "3",
    name: "Soldering Iron Kit 60W",
    slug: "soldering-iron-kit-60w",
    description: "Complete soldering iron kit with adjustable temperature, 5 tips, solder wire, stand, and desoldering pump.",
    price: 18.99,
    image: "",
    category: "Tools",
    stock: 20,
  },
  {
    id: "4",
    name: "Arduino Starter Kit",
    slug: "arduino-starter-kit",
    description: "Ultimate Arduino starter kit with Uno R3, breadboard, sensors, LEDs, resistors, jumper wires, and project guide.",
    price: 39.99,
    image: "",
    category: "Kits",
    stock: 10,
  },
  {
    id: "5",
    name: "Breadboard + Jumper Wires Pack",
    slug: "breadboard-jumper-wires",
    description: "830-point solderless breadboard with 65-piece jumper wire kit. Perfect for prototyping circuits.",
    price: 5.99,
    image: "",
    category: "Accessories",
    stock: 30,
  },
  {
    id: "6",
    name: "RGB LED Module",
    slug: "rgb-led-module",
    description: "5mm RGB LED module with common cathode. Compatible with Arduino for color mixing projects.",
    price: 2.99,
    image: "",
    category: "Components",
    stock: 100,
  },
  {
    id: "7",
    name: "Arduino Nano V3.0",
    slug: "arduino-nano-v3",
    description: "Arduino Nano V3.0 ATmega328P board. Compact size, mini USB, perfect for embedded projects.",
    price: 14.99,
    image: "",
    category: "Boards",
    stock: 25,
  },
  {
    id: "8",
    name: "4-Channel 5V Relay Module",
    slug: "4-channel-relay-module",
    description: "Optocoupler isolation 4-channel relay module. 5V input, 10A/250V AC output. For home automation projects.",
    price: 7.99,
    image: "",
    category: "Modules",
    stock: 18,
  },
  {
    id: "9",
    name: "DHT11 Temperature & Humidity Sensor",
    slug: "dht11-sensor",
    description: "DHT11 digital temperature and humidity sensor module. 0-50°C range, 20-90% RH. Direct Arduino compatible.",
    price: 2.49,
    image: "",
    category: "Sensors",
    stock: 40,
  },
  {
    id: "10",
    name: "SG90 Servo Motor",
    slug: "sg90-servo-motor",
    description: "Micro SG90 9g servo motor. 0-180° rotation, 4.8-6V operation. Ideal for robot and automation projects.",
    price: 3.99,
    image: "",
    category: "Components",
    stock: 35,
  },
  {
    id: "11",
    name: "Rainbow LED Strip Kit",
    slug: "rainbow-led-strip",
    description: "WS2812B addressable LED strip 1m with 30 LEDs. 5V operation, individually controllable. Includes power adapter.",
    price: 12.99,
    image: "",
    category: "Modules",
    stock: 12,
  },
  {
    id: "12",
    name: "Kids Robot Car Kit",
    slug: "kids-robot-car-kit",
    description: "Fun DIY robot car kit for kids. Includes Arduino Nano, motor driver, wheels, ultrasonic sensor, and step-by-step guide.",
    price: 29.99,
    image: "",
    category: "Kits",
    stock: 8,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}
