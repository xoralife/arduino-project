import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "getting-started-arduino",
    title: "Getting Started with Arduino: Your First Project",
    content: `Arduino is an open-source electronics platform based on easy-to-use hardware and software. Whether you're a complete beginner or an experienced maker, Arduino makes it easy to bring your ideas to life.

## What You'll Need

To follow this tutorial, you'll need:
- An Arduino board (Uno R3 recommended)
- A USB cable
- An LED (any color)
- A 220Ω resistor
- A breadboard
- Jumper wires

## Step 1: Install the Arduino IDE

Download and install the Arduino IDE from the official Arduino website. It's available for Windows, macOS, and Linux.

## Step 2: Connect Your Board

Use the USB cable to connect your Arduino Uno to your computer. The green power LED should light up.

## Step 3: Write Your First Code

Open the Arduino IDE and type the following code:

\`\`\`cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
\`\`\`

## Step 4: Upload and Test

Select your board and port from the Tools menu, then click the Upload button. The built-in LED on pin 13 will start blinking!

## Next Steps

Congratulations! You've completed your first Arduino project. Check out our Arduino Starter Kit for everything you need to keep learning.`,
    date: "June 15, 2026",
    readTime: "5 min read",
    category: "Tutorial",
  },
  {
    slug: "ultrasonic-sensor-guide",
    title: "How to Use an Ultrasonic Sensor (HC-SR04) with Arduino",
    content: `The HC-SR04 ultrasonic sensor is one of the most popular sensors for Arduino projects. It uses sound waves to measure distance, just like a bat's echolocation!

## How It Works

The sensor sends out a high-frequency sound pulse and measures how long it takes for the echo to return. By knowing the speed of sound, we can calculate the distance.

## Wiring

Connect the HC-SR04 to your Arduino:
- VCC → 5V
- GND → GND
- Trig → Pin 9
- Echo → Pin 10

## Sample Code

\`\`\`cpp
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  float distance = duration * 0.034 / 2;
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(500);
}
\`\`\`

## Applications

- Distance measuring
- Obstacle detection for robots
- Parking sensors
- Liquid level monitoring

Browse our HC-SR04 Ultrasonic Sensor to start building!`,
    date: "June 10, 2026",
    readTime: "8 min read",
    category: "Guide",
  },
  {
    slug: "top-10-arduino-projects-kids",
    title: "Top 10 Arduino Projects for Kids",
    content: `Looking for fun Arduino projects for kids? Here are our top 10 picks that are educational, engaging, and safe for young makers.

## 1. LED Blink Project
The classic first project! Make an LED blink on and off. Teaches basic programming and circuit concepts.

## 2. Traffic Light Simulator
Build a mini traffic light with red, yellow, and green LEDs. Learn about timing and sequences.

## 3. Distance Detector
Use an ultrasonic sensor to measure distances. Fun for understanding how sonar works!

## 4. Color Mixing Lamp
Use an RGB LED to create any color. Teaches about color theory and PWM.

## 5. Temperature Display
Read temperature with a DHT11 sensor and display it. Learn about environmental sensing.

## 6. Simple Robot Car
Build a car that moves forward, backward, and turns. Introduction to robotics.

## 7. Music Player
Create a simple music player with a buzzer. Play melodies by programming notes!

## 8. Smart Night Light
A lamp that turns on when it gets dark. Learn about light sensors and automation.

## 9. Reaction Timer Game
Test your reflexes! An LED lights up randomly and you press a button as fast as you can.

## 10. Weather Station
Measure temperature, humidity, and display on an LCD. Build your own weather station!

Check out our Kids Project Kits for complete kits with tutorials!`,
    date: "June 5, 2026",
    readTime: "10 min read",
    category: "Projects",
  },
  {
    slug: "soldering-beginners-guide",
    title: "Complete Guide to Soldering for Beginners",
    content: `Soldering is an essential skill for electronics. This guide will teach you everything you need to know to get started.

## Safety First

- Always work in a well-ventilated area
- Wear safety glasses
- Never touch the iron tip (it's 350°C!)
- Use a soldering iron stand

## Tools You Need

- Soldering iron (20-60W recommended)
- Solder wire (lead-free, 0.8mm diameter)
- Soldering iron stand
- Sponge or brass tip cleaner
- Desoldering pump (for mistakes)
- Helping hands (highly recommended)

## Step-by-Step Process

1. **Heat the iron** to 350°C and tin the tip with fresh solder
2. **Clean the component leads** with alcohol if needed
3. **Insert the component** through the PCB holes
4. **Touch the iron tip** to both the pad and the component lead simultaneously
5. **Apply solder** to the joint (not the iron)
6. **Remove the iron** and let the joint cool naturally

## Good vs Bad Joints

A good solder joint is shiny, cone-shaped, and completely covers the pad. A bad joint is dull, ball-shaped, or has too much/too little solder.

Browse our Soldering Kit for all the tools you need!`,
    date: "May 28, 2026",
    readTime: "7 min read",
    category: "Tutorial",
  },
  {
    slug: "smart-home-arduino",
    title: "Building a Smart Home with Arduino",
    content: `Transform your home with Arduino-powered automation! Here's how to get started with smart home projects.

## What You Can Automate

- Lights that turn on automatically
- Fan speed control
- Door locks with RFID
- Temperature monitoring
- Motion-activated alarms

## Key Components

- Arduino Uno or Mega
- Relay modules (for high-power devices)
- Motion sensors (PIR)
- Temperature/humidity sensors
- WiFi module (ESP8266)
- LCD or OLED display

## Basic Smart Light Circuit

Connect a relay module to an Arduino pin. When the pin goes HIGH, the relay switches and the light turns on.

\`\`\`cpp
int relayPin = 7;
int motionPin = 2;

void setup() {
  pinMode(relayPin, OUTPUT);
  pinMode(motionPin, INPUT);
}

void loop() {
  if (digitalRead(motionPin) == HIGH) {
    digitalWrite(relayPin, HIGH);
    delay(30000);
  } else {
    digitalWrite(relayPin, LOW);
  }
}
\`\`\`

## Expand Your System

Add WiFi control with an ESP8266 module to control everything from your phone!`,
    date: "May 20, 2026",
    readTime: "12 min read",
    category: "Projects",
  },
  {
    slug: "arduino-sensors-guide",
    title: "Understanding Arduino Sensors: A Complete Guide",
    content: `Sensors are the eyes and ears of your Arduino projects. Here's a comprehensive guide to the most popular sensors.

## Distance Sensors
- **HC-SR04 Ultrasonic**: 2cm-400cm range, great for obstacle detection
- **GP2Y0A21 IR**: 10cm-80cm range, works well in sunlight

## Environmental Sensors
- **DHT11**: Temperature (0-50°C) and humidity (20-90%)
- **DHT22**: More accurate version of DHT11
- **BMP180**: Barometric pressure and temperature

## Motion Sensors
- **PIR HC-SR501**: Detects human movement (up to 7m)
- **SW-420 Vibration**: Detects shaking/tapping

## Light Sensors
- **LDR Module**: Simple light intensity detection
- **BH1750**: Digital ambient light (0-65535 lux)

## Gas Sensors
- **MQ-2**: Smoke and flammable gas
- **MQ-135**: Air quality (CO2, ammonia, benzene)

## Choosing the Right Sensor

Consider: voltage (3.3V or 5V), interface (analog, digital, I2C), accuracy, range, and cost.

Check out our Sensors category for all available options!`,
    date: "May 12, 2026",
    readTime: "6 min read",
    category: "Guide",
  },
];

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-gray-600">{post.title}</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
              <span className="px-2 py-0.5 bg-gray-100 rounded-full font-medium text-gray-500">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>
          <div className="leading-relaxed whitespace-pre-line text-gray-700">
            {post.content}
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
