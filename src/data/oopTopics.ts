import { TopicItem } from '../types';

export const OOP_TOPICS: TopicItem[] = [
  {
    id: 'php-what-is-oop',
    title: 'PHP What is OOP',
    category: 'oop',
    tag: 'Core Paradigm',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'OOP ধারণা, Procedural বনাম OOP, ৪টি মূল স্তম্ভ (Pillars), রিয়েল-ওয়ার্ল্ড ব্যবহার ও ২১-ধাপের লার্নিং রোডম্যাপ।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP OOP: Class, Object, 4 Pillars & Real-World Live Demo</h3>";

// ১. Class & Object & $this: Product বাস্তব উদাহরণ
class Product {
    public string $name;
    public float $price;

    public function __construct(string $name, float $price) {
        $this->name = $name;
        $this->price = $price;
    }

    public function getPrice(): float {
        return $this->price;
    }

    public function describe(): string {
        return "পণ্য: <b>{$this->name}</b> | মূল্য: ৳" . number_format($this->getPrice(), 2);
    }
}

// ২. Encapsulation: BankAccount
class BankAccount {
    private float $balance = 0;

    public function deposit(float $amount): void {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

// ৩. Inheritance: User -> Admin
class User {
    public function login(): string {
        return "User Logged In";
    }
}

class Admin extends User {
    public function dashboard(): string {
        return "Admin Dashboard (Full Access)";
    }
}

// ৪. Polymorphism: Payment Interface
interface Payment {
    public function pay(float $amount): string;
}

class BkashPayment implements Payment {
    public function pay(float $amount): string {
        return "বিকাশ পেমেন্ট ৳" . number_format($amount, 2) . " সফল!";
    }
}

class CardPayment implements Payment {
    public function pay(float $amount): string {
        return "ভিসা/মাস্টারকার্ড পেমেন্ট ৳" . number_format($amount, 2) . " অনুমোদিত!";
    }
}

// রানটাইমে টেস্ট ও আউটপুট
$product = new Product("Shirt", 500.0);
echo "<p style='margin:4px 0; color:#0f172a;'>🛒 " . $product->describe() . "</p>";

$bank = new BankAccount();
$bank->deposit(7500.0);
echo "<p style='margin:4px 0; color:#059669;'>🔒 BankAccount (Encapsulated): ৳" . number_format($bank->getBalance(), 2) . "</p>";

$admin = new Admin();
echo "<p style='margin:4px 0; color:#2563eb;'>🛡️ Inheritance: " . $admin->login() . " ➔ " . $admin->dashboard() . "</p>";

$bkash = new BkashPayment();
$card = new CardPayment();
echo "<p style='margin:4px 0; color:#d97706;'>💳 Polymorphism: " . $bkash->pay(500.0) . " | " . $card->pay(1500.0) . "</p>";

echo "<p style='margin:10px 0 0 0; color:#64748b; font-size:13px;'>OOP ৪টি স্তম্ভ: Encapsulation | Inheritance | Polymorphism | Abstraction</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `OOP = Object-Oriented Programming. এটি এমন একটি প্রোগ্রামিং অ্যাপ্রোচ যেখানে অ্যাপ্লিকেশনের ডেটা এবং সেই ডেটা নিয়ে কাজ করার লজিককে Object এবং Class এর মাধ্যমে সংগঠিত (Organize) করা হয়। পিএইচপিতে বড় ও জটিল অ্যাপ্লিকেশন (যেমন: Laravel, Symfony ফ্রেমওয়ার্ক) তৈরি করতে OOP শেখা অপরিহার্য।`,
      lessonSections: [
        {
          title: '১. কেন OOP দরকার?',
          explanationBn: `ধরুন একটি E-commerce প্রজেক্টে রয়েছে: User, Product, Order, Payment, Cart। প্রসিডিউরাল কোডে সব লজিক ও ভ্যারিয়েবল ফাইলজুড়ে ছড়িয়ে পড়ে স্প্যাগেটি তৈরি করে। কিন্তু OOP-তে:
• User ➔ User Class
• Product ➔ Product Class
• Order ➔ Order Class
• Payment ➔ Payment Class
প্রতিটি ক্লাস নিজের ডেটা ও আচরণ নিজে ম্যানেজ করে। এর সুবিধা:
✓ কোড গোছানো (Organized)
✓ পুনঃব্যবহারযোগ্য (Reusable)
✓ সহজে রক্ষণাবেক্ষণযোগ্য (Maintainable)
✓ বড় প্রজেক্টে সহজে বৃদ্ধি করা যায় (Scalable)
✓ ইউনিট টেস্টিং সহজ
✓ টিম ডেভেলপমেন্টে কোনো কনফ্লিক্ট ছাড়া কাজ করা যায়`,
          code: `<?php
// Procedural: ডেটা ও ফাংশন ছড়িয়ে থাকে, বাগ হওয়ার ঝুঁকি বেশি
$user_name = "Abbad";
function createUser($name) { /* ... */ }

// OOP: ডেটা ও লজিক একসাথে নিয়ন্ত্রিত
class User {
    public function __construct(public string $name) {}
    public function create() { return "User {$this->name} created."; }
}
?>`,
          codeLanguage: 'Why OOP Architecture'
        },
        {
          title: '২. Class কী?',
          explanationBn: `Class হলো একটি Blueprint বা Template (নকশা)।
ক্লাসের মধ্যে প্রধানত দুইটি জিনিস থাকে:
• Properties ➔ ডেটা বা স্টেট (Data/State)
• Methods ➔ ফাংশন বা আচরণ (Behavior/Action)`,
          code: `<?php
class User {
    public string $name;

    public function login(): string {
        return "User logged in";
    }
}
// এখানে User হলো একটি Class (ব্লুপ্রিন্ট)
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩. Object কী?',
          explanationBn: `Class থেকে new কীওয়ার্ড দিয়ে মেমরিতে তৈরি করা বাস্তব দৃষ্টান্ত বা instance হলো Object।`,
          code: `<?php
class User {
    public string $name;
    public function login(): string {
        return "User {$this->name} logged in";
    }
}

$user = new User(); // Object তৈরি
$user->name = "Abbad"; // Property-তে মান নির্ধারণ
echo $user->login(); // Method কল
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User Abbad logged in`
        },
        {
          title: '৪. সহজ উদাহরণ: Car Class ও Object',
          explanationBn: `Car হলো ক্লাস, $car হলো অবজেক্ট, $brand হলো প্রপার্টি এবং drive() হলো মেথড।`,
          code: `<?php
class Car {
    public string $brand;

    public function drive(): string {
        return "Car is driving";
    }
}

$car = new Car();
$car->brand = "Toyota";

echo $car->brand . "<br>";
echo $car->drive();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Toyota\nCar is driving`
        },
        {
          title: '৫. Real-World Example: Product Class',
          explanationBn: `একটি পণ্যের ডেটা (name, price) এবং তার আচরণ (getPrice()) একই ক্লাসের ভেতর একত্রিত রাখা হয়।`,
          code: `<?php
class Product {
    public string $name;
    public float $price;

    public function getPrice(): float {
        return $this->price;
    }
}

$product = new Product();
$product->name = "Shirt";
$product->price = 500.0;

echo "Product: {$product->name} | Price: ৳" . $product->getPrice();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Product: Shirt | Price: ৳500`
        },
        {
          title: '৬. $this কী?',
          explanationBn: `$this হলো একটি স্পেশাল সিউডো-ভ্যারিয়েবল যা বর্তমান অবজেক্টকে (Current Object) রেফার করে। ক্লাসের নিজস্ব কোনো প্রপার্টি বা মেথড এক্সেস করতে $this->propertyName ব্যবহার করা হয়।`,
          code: `<?php
class Product {
    public string $name;

    public function getName(): string {
        return $this->name; // বর্তমান অবজেক্টের name প্রপার্টি
    }
}

$product = new Product();
$product->name = "Shirt";
echo $product->getName();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Shirt`
        },
        {
          title: '৭. Constructor-এর প্রাথমিক ধারণা',
          explanationBn: `অবজেক্ট তৈরি হওয়ার সময় স্বয়ংক্রিয়ভাবে (Automatically) কিছু প্রাথমিক ডেটা বা সেটআপ করতে চাইলে __construct() ব্যবহার করা হয়। অবজেক্ট তৈরির সময়ই ডেটা পাস করে সেট করা যায়।`,
          code: `<?php
class User {
    public string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }
}

$user = new User("Abbad");
echo $user->name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad`
        },
        {
          title: '৮. OOP-এর মূল ৪টি স্তম্ভ (The 4 Pillars ⭐⭐⭐)',
          explanationBn: `অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং মূলত ৪টি মূল ভিত্তির ওপর দাঁড়িয়ে আছে:
১. Encapsulation (এনক্যাপসুলেশন)
২. Inheritance (ইনহেরিটেন্স)
৩. Polymorphism (পলিমরফিজম)
৪. Abstraction (অ্যাবস্ট্রাকশন)`,
          code: `<?php
// ১. Encapsulation: ডেটা ও মেথড একসাথে লুকিয়ে সুরক্ষিত রাখা
// ২. Inheritance: প্যারেন্ট ক্লাসের কোড চাইল্ড ক্লাসে রিইউজ করা
// ৩. Polymorphism: একই ইন্টারফেসের ভিন্ন ভিন্ন রূপায়ন
// ৪. Abstraction: জটিল কার্যপ্রণালী লুকিয়ে কেবল ইন্টারফেস দেখানো
echo "OOP 4 Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction";
?>`,
          codeLanguage: 'Architecture Principles'
        },
        {
          title: '৯. Pillar ১: Encapsulation',
          explanationBn: `ডেটা এবং রিলেটেড মেথডস একসাথে রাখা এবং প্রয়োজন অনুযায়ী এক্সেস কন্ট্রোল করা। বাইরের কোড যাতে সরাসরি সংবেদনশীল ভ্যারিয়েবল নষ্ট না করতে পারে।`,
          code: `<?php
class BankAccount {
    private float $balance = 0.0;

    public function deposit(float $amount): void {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$acc = new BankAccount();
$acc->deposit(1000.0);
echo "Balance: ৳" . $acc->getBalance();
// $acc->balance = 50000; // ❌ Fatal Error! সরাসরি পরিবর্তন রোধ
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Balance: ৳1000`
        },
        {
          title: '১০. Pillar ২: Inheritance',
          explanationBn: `একটি ক্লাস অন্য ক্লাসের প্রপার্টি এবং মেথড extend করে সরাসরি ব্যবহার করতে পারে। এতে কোড ডুপ্লিকেশন দূর হয়।`,
          code: `<?php
class User {
    public function login(): string {
        return "Login successful";
    }
}

class Admin extends User {
    public function dashboard(): string {
        return "Admin Dashboard";
    }
}

$admin = new Admin();
echo $admin->login() . " | " . $admin->dashboard();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Login successful | Admin Dashboard`
        },
        {
          title: '১১. Pillar ৩: Polymorphism',
          explanationBn: `একই ইন্টারফেস বা কন্ট্রাক্ট ব্যবহার করে বিভিন্ন ক্লাস বিভিন্ন রকম আচরণ দিতে পারে। যেমন: BkashPayment এবং CardPayment উভয়ই Payment ইন্টারফেসের pay() বাস্তবায়ন করছে, কিন্তু তাদের লেনদেন প্রসেস আলাদা।`,
          code: `<?php
interface Payment {
    public function pay(float $amount): bool;
}

class BkashPayment implements Payment {
    public function pay(float $amount): bool {
        echo "Processing ৳{$amount} via bKash API...\\n";
        return true;
    }
}

class CardPayment implements Payment {
    public function pay(float $amount): bool {
        echo "Processing ৳{$amount} via SSLCommerz Gateway...\\n";
        return true;
    }
}

$p1 = new BkashPayment();
$p1->pay(500.0);

$p2 = new CardPayment();
$p2->pay(1500.0);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Processing ৳500 via bKash API...\nProcessing ৳1500 via SSLCommerz Gateway...`
        },
        {
          title: '১২. Pillar ৪: Abstraction',
          explanationBn: `কোনো অবজেক্টের অপ্রয়োজনীয় অভ্যন্তরীণ বিবরণ লুকিয়ে রেখে শুধুমাত্র প্রয়োজনীয় কন্ট্রাক্ট বা ইন্টারফেস প্রদর্শন করা। abstract class ব্যবহার করে চাইল্ড ক্লাসকে নির্দিষ্ট মেথড বাস্তবায়ন করতে বাধ্য করা হয়।`,
          code: `<?php
abstract class Payment {
    abstract public function pay(float $amount): bool;
}

class RocketPayment extends Payment {
    public function pay(float $amount): bool {
        echo "Rocket Payment Success: ৳{$amount}";
        return true;
    }
}

$r = new RocketPayment();
$r->pay(800.0);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Rocket Payment Success: ৳800`
        },
        {
          title: '১৩. OOP কোথায় বেশি ব্যবহার হয়?',
          explanationBn: `বাস্তব জীবনের পিএইচপি ও লারাভেল প্রজেক্টে সর্বত্র OOP ব্যবহার হয়:
✓ User Management ও Authentication
✓ Product ও Category ক্যাটালগ
✓ Order প্রসেসিং ও Cart সিস্টেম
✓ Payment Gateway ইন্টিগ্রেশন (bKash, Nagad, Stripe)
✓ Database Eloquent ORM
✓ API Services ও Microservices
✓ Email ও SMS Notification সার্ভিস
✓ File Storage ও Media হ্যান্ডলার
✓ বিজনেস লজিক সার্ভিস লেয়ার
লারাভেল ফ্রেমওয়ার্ক নিজে সম্পূর্ণভাবে OOP-র ওপর প্রতিষ্ঠিত।`,
          code: `<?php
echo "Real-world domain: Auth, Orders, Payments, APIs, Services, Repositories";
?>`,
          codeLanguage: 'Domain Architecture'
        },
        {
          title: '১৪. OOP বনাম Procedural তুলনা',
          explanationBn: `• Procedural:
  - লজিক আলাদা আলাদা ফাংশনে ছড়িয়ে থাকে (function createUser(), updateUser(), deleteUser())।
  - গ্লোবাল ডেটা মিউটেশনের ঝুঁকি থাকে।
  - বড় প্রজেক্টে পরিবর্তন করা ঝুঁকিপূর্ণ।
• OOP:
  - ডেটা ও সমস্ত মেথড ক্লাস কাঠামোর ভেতর থাকে (class User { public function create() {} })।
  - এনক্যাপসুলেশন ও টাইপ সেফটি বজায় থাকে।
  - সহজে স্কেল ও রিফ্যাক্টর করা যায়।`,
          code: `<?php
echo "Procedural = Function-centric | OOP = Object & Contract-centric";
?>`,
          codeLanguage: 'Paradigm Comparison'
        },
        {
          title: '⭐ OOP শেখার পরিপূর্ণ রোডম্যাপ (২১ ধাপ)',
          explanationBn: `OOP শেখার সময় নিচের ক্রমানুসার (Order) অনুসরণ করলে শেখা সবচেয়ে কার্যকর ও সহজ হয়:
১. Class & Object
২. Properties & Methods
৩. \$this সিউডো-ভ্যারিয়েবল
৪. Constructor
৫. Access Modifiers (public, protected, private)
৬. Encapsulation
৭. Inheritance
৮. Method Overriding
৯. Static (Methods & Properties)
১০. Abstract Class
১১. Interface
১২. Trait
১৩. Namespace
১৪. Type Declaration
১৫. Return Type
১৬. Exception Handling
১৭. Constructor Property Promotion
১৮. Dependency Injection
১৯. Composition
২০. Polymorphism
২১. SOLID Principles`,
          code: `<?php
echo "Roadmap: 1.Class/Object -> 2.Props/Methods -> 3.\$this -> 4.Constructor -> ... -> 21.SOLID";
?>`,
          codeLanguage: 'Mastery Path'
        }
      ],
      keyPointsBn: [
        'Class = কী থাকবে তার ডিজাইন বা ব্লুপ্রিন্ট (Blueprint)',
        'Object = সেই ডিজাইনের বাস্তব জীবন্ত দৃষ্টান্ত (Instance)',
        'Property = অবজেক্টের ডেটা বা স্টেট (Data/State)',
        'Method = অবজেক্ট কী কাজ করবে তার আচরণ (Behavior/Action)',
        'OOP-এর ৪টি মূল স্তম্ভ: Encapsulation, Inheritance, Polymorphism, Abstraction।',
        '⭐ পিএইচপি থেকে লারাভেলে (Laravel) যাওয়ার আগে OOP ভালোভাবে শেখা সবচেয়ে গুরুত্বপূর্ণ।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: সম্পূর্ণ ই-কমার্স ইউজার ও কার্ট মডেলিং',
          descriptionBn: 'ইউজার ও প্রোডাক্টের মাধ্যমে অবজেক্ট-ভিত্তিক কার্ট ক্যালকুলেশন।',
          code: `<?php
class Product {
    public function __construct(
        public string $name,
        public float $price
    ) {}
}

class Cart {
    private array $items = [];

    public function addProduct(Product $product, int $quantity = 1): void {
        $this->items[] = ['product' => $product, 'qty' => $quantity];
    }

    public function calculateTotal(): float {
        $total = 0.0;
        foreach ($this->items as $item) {
            $total += $item['product']->price * $item['qty'];
        }
        return $total;
    }
}

$shirt = new Product("Oxford Cotton Shirt", 1250.0);
$pant = new Product("Slim Fit Denim", 2200.0);

$cart = new Cart();
$cart->addProduct($shirt, 2);
$cart->addProduct($pant, 1);

echo "Cart Total: ৳" . number_format($cart->calculateTotal(), 2);
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-classes',
    title: 'PHP Classes/Objects',
    category: 'oop',
    tag: 'Classes & Objects',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'ক্লাস ব্লুপ্রিন্ট, অবজেক্ট ইনস্ট্যানশিয়েট (new), প্রপার্টি, মেথড এবং $this স্পেশাল ভেরিয়েবল।',
    sampleCode: `<?php
// ১. ক্লাসের ব্লুপ্রিন্ট ডিক্লেয়ারেশন
class Car {
    // Typed Properties
    public string $brand;
    public string $color;
    public int $speed = 0;

    // মেথড
    public function accelerate(int $increase): void {
        $this->speed += $increase;
    }

    public function describe(): string {
        return "গাড়ি: {$this->brand} | রঙ: {$this->color} | গতি: {$this->speed} km/h";
    }
}

echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>Classes & Objects Live Demo</h3>";

// ২. অবজেক্ট ইনস্ট্যানশিয়েট করা (new keyword)
$car1 = new Car();
$car1->brand = "Toyota";
$car1->color = "লাল";
$car1->accelerate(60);

$car2 = new Car();
$car2->brand = "Honda";
$car2->color = "কালো";
$car2->accelerate(85);

echo "<p style='margin:4px 0; color:#dc2626;'>🚗 " . $car1->describe() . "</p>";
echo "<p style='margin:4px 0; color:#0284c7;'>🚗 " . $car2->describe() . "</p>";
echo "<p style='margin:4px 0; color:#64748b; font-size:13px;'>Type check: " . ($car1 instanceof Car ? 'Valid Car instance' : 'Unknown') . "</p>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `ক্লাস (Class) হলো অবজেক্টের ব্লুপ্রিন্ট বা স্থাপত্য নকশা। আর সেই নকশা অনুসরণ করে মেমরিতে যে বাস্তব দৃষ্টান্ত তৈরি হয় তাকে অবজেক্ট (Object) বলা হয়। ক্লাসের নিজস্ব ভেরিয়েবলগুলোকে প্রপার্টি (Property) এবং ফাংশনগুলোকে মেথড (Method) বলা হয়। $this হলো একটি স্পেশাল সিউডো-ভ্যারিয়েবল যা বর্তমান অবজেক্টের নিজস্ব প্রপার্টি ও মেথড নির্দেশ করে।`,
      lessonSections: [
        {
          title: '১. ক্লাস ডিক্লেয়ারেশন ও অবজেক্ট তৈরি',
          explanationBn: `class কীওয়ার্ডের পর ক্লাসের নাম সাধারণত PascalCase-এ লিখতে হয়। new কীওয়ার্ড দিয়ে মেমরিতে অবজেক্টের জন্য জায়গা বরাদ্দ করা হয়।`,
          code: `<?php

class Student {
    public string $name;
    public int $roll;
}

$s1 = new Student();
$s1->name = "Abbad";
$s1->roll = 101;

echo "Student: " . $s1->name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Student: Abbad`
        },
        {
          title: '২. $this স্পেশাল ভ্যারিয়েবল (⭐⭐⭐)',
          explanationBn: `ক্লাসের কোনো মেথডের ভেতর থেকে সেই অবজেক্টের নিজস্ব প্রপার্টি বা অন্য কোনো মেথড অ্যাক্সেস করতে $this-> ব্যবহার করা হয়।`,
          code: `<?php

class Counter {
    public int $count = 0;

    public function increment(): void {
        $this->count++;
    }

    public function getCount(): int {
        return $this->count;
    }
}

$c = new Counter();
$c->increment();
$c->increment();
echo "Count: " . $c->getCount();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Count: 2`
        },
        {
          title: '৩. instanceof অপারেটর',
          explanationBn: `কোনো অবজেক্ট নির্দিষ্ট ক্লাসের ইনস্ট্যান্স কি না তা রানটাইমে যাচাই করার জন্য instanceof ব্যবহৃত হয়।`,
          code: `<?php

class Order {}
$order = new Order();

var_dump($order instanceof Order);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `bool(true)`
        }
      ],
      keyPointsBn: [
        'ক্লাস হলো ব্লুপ্রিন্ট, অবজেক্ট হলো মেমরিতে তৈরি বাস্তব দৃষ্টান্ত।',
        '$this কেবলমাত্র মেথডের ভেতরেই ব্যবহারযোগ্য এবং এটি বর্তমান ইনস্ট্যান্সকে নির্দেশ করে।',
        'PHP 7.4+ থেকে টাইপড প্রপার্টি (public string $name) বাধ্যতামূলকভাবে সাপোর্ট করে।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: বুক শপ ক্যাটালগ আইটেম',
          descriptionBn: 'Book ক্লাস থেকে একাধিক বইয়ের অবজেক্ট তৈরি ও দাম গণনা।',
          code: `<?php
class Book {
    public string $title;
    public string $author;
    public float $price;

    public function getFormattedPrice(): string {
        return "৳" . number_format($this->price, 2);
    }
}

$book = new Book();
$book->title = "Clean Code in PHP";
$book->author = "Robert C. Martin";
$book->price = 1250.0;

echo "Title: {$book->title}<br>Author: {$book->author}<br>Price: " . $book->getFormattedPrice();
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-constructor',
    title: 'PHP Constructor',
    category: 'oop',
    tag: 'Object Lifecycle',
    phpVersion: 'PHP 8.0+',
    subtitleBn: '__construct() ম্যাজিক মেথড, ডেটা ইনিশিয়ালাইজেশন, ভ্যালিডেশন, ডিপেনডেন্সি ইনজেকশন ও PHP 8 Property Promotion।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Constructor Lifecycle & Modern PHP 8 Promotion</h3>";

// ১. ভ্যালিডেশন ও ডিফল্ট প্যারামিটারসহ Product ক্লাস
class Product {
    public function __construct(
        public string $name,
        public float $price,
        public int $stock = 10,
        private string $sku = "PRD-DEFAULT"
    ) {
        if ($this->price < 0) {
            throw new InvalidArgumentException("মূল্য কখনো নেগেটিভ হতে পারে না!");
        }
    }

    public function getSummary(): string {
        return "পণ্য: <b>{$this->name}</b> | মূল্য: ৳" . number_format($this->price, 2) . " | স্টক: {$this->stock} টি [SKU: {$this->sku}]";
    }
}

// ২. ডিপেনডেন্সি ইনজেকশন (Dependency Injection) কনস্ট্রাক্টরে
class PaymentGateway {
    public function process(float $amount): string {
        return "৳" . number_format($amount, 2) . " গেটওয়েতে চার্জ সম্পন্ন।";
    }
}

class OrderService {
    public function __construct(
        private PaymentGateway $gateway,
        public string $orderId
    ) {}

    public function checkout(float $amount): string {
        return "Order #{$this->orderId}: " . $this->gateway->process($amount);
    }
}

// ৩. ইনহেরিটেন্সে প্যারেন্ট কনস্ট্রাক্টর কল
class User {
    public function __construct(public string $name) {}
}

class Admin extends User {
    public function __construct(string $name, public string $role = "SuperAdmin") {
        parent::__construct($name); // প্যারেন্ট কনস্ট্রাক্টর কল
    }
}

// লাইভ এক্সিকিউশন
$laptop = new Product("MacBook Pro M3", 240000.0, 5, "SKU-APPLE-M3");
$monitor = new Product("Dell 27-inch 4K", 42000.0); // ডিফল্ট স্টক ১০

echo "<p style='margin:4px 0; color:#0f172a;'>📦 " . $laptop->getSummary() . "</p>";
echo "<p style='margin:4px 0; color:#2563eb;'>🖥️ " . $monitor->getSummary() . "</p>";

$order = new OrderService(new PaymentGateway(), "ORD-9904");
echo "<p style='margin:4px 0; color:#059669;'>💳 " . $order->checkout(282000.0) . "</p>";

$admin = new Admin("Abbad");
echo "<p style='margin:4px 0; color:#d97706;'>🛡️ Admin created: {$admin->name} ({$admin->role})</p>";

echo "<p style='margin:10px 0 0 0; color:#64748b; font-size:13px;'>ফ্লো: new User(...) ➔ __construct(...) ➔ Object Ready State</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Constructor হলো একটি বিশেষ ম্যাজিক মেথড (__construct()) যা new কীওয়ার্ড দিয়ে ক্লাসের অবজেক্ট তৈরি করার সাথে সাথে স্বয়ংক্রিয়ভাবে (Automatically) কল হয়। অবজেক্টের প্রাথমিক ডেটা ইনিশিয়ালাইজ করা, ইনপুট ভ্যালিডেশন চেক করা এবং সার্ভিস ক্লাসের ডিপেনডেন্সি ইনজেকশন করার জন্য কনস্ট্রাক্টর হলো সবচেয়ে আদর্শ জায়গা।`,
      lessonSections: [
        {
          title: '১. Basic Constructor',
          explanationBn: `যখনই new User() কল করা হয়, তখনই __construct() মেথডটি নিজে থেকেই এক্সিকিউট হয়। আলাদা করে কল করতে হয় না।`,
          code: `<?php
class User {
    public function __construct() {
        echo "User Object Created\\n";
    }
}

$user = new User(); // স্বয়ংক্রিয়ভাবে রান হবে
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User Object Created`
        },
        {
          title: '২. Constructor দিয়ে Data Set',
          explanationBn: `অবজেক্ট তৈরির সময়েই প্যারামিটার দিয়ে প্রপার্টিতে প্রাথমিক ভ্যালু সেট করে নেওয়া যায়।`,
          code: `<?php
class User {
    public string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }
}

$user = new User("Abbad");
echo $user->name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad`
        },
        {
          title: '৩. Multiple Parameters ইনপুট গ্রহণ',
          explanationBn: `কনস্ট্রাক্টরে কমা দিয়ে একাধিক আর্গুমেন্ট পাঠানো যায়।`,
          code: `<?php
class Product {
    public string $name;
    public float $price;

    public function __construct(string $name, float $price) {
        $this->name = $name;
        $this->price = $price;
    }
}

$product = new Product("Shirt", 500.0);
echo "Product: {$product->name} (৳{$product->price})";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Product: Shirt (৳500)`
        },
        {
          title: '৪. Default Parameter ভ্যালু নির্ধারণ',
          explanationBn: `প্যারামিটারে ডিফল্ট মান দিয়ে রাখলে অবজেক্ট তৈরির সময় আর্গুমেন্ট না পাঠালেও কোনো ত্রুটি হয় না।`,
          code: `<?php
class User {
    public string $name;
    public string $role;

    public function __construct(string $name, string $role = "user") {
        $this->name = $name;
        $this->role = $role;
    }
}

$u1 = new User("Abbad"); // role হবে "user"
$u2 = new User("Karim", "admin"); // role হবে "admin"

echo "{$u1->name}: {$u1->role} | {$u2->name}: {$u2->role}";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad: user | Karim: admin`
        },
        {
          title: '৫. Constructor + Validation (ইনভ্যালিড অবজেক্ট রোধ)',
          explanationBn: `অবজেক্ট তৈরি হওয়ার সময় ভুল ডেটা ঢুকলে কনস্ট্রাক্টর থেকেই Exception থ্রো করে ইনভ্যালিড অবজেক্ট তৈরি হওয়া রোধ করা যায়।`,
          code: `<?php
class Product {
    public string $name;
    public float $price;

    public function __construct(string $name, float $price) {
        if ($price < 0) {
            throw new InvalidArgumentException("Price cannot be negative");
        }
        $this->name = $name;
        $this->price = $price;
    }
}

try {
    $product = new Product("Pant", -200.0);
} catch (InvalidArgumentException $e) {
    echo "Validation Caught: " . $e->getMessage();
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Validation Caught: Price cannot be negative`
        },
        {
          title: '৬. Constructor-এর Real-World Use ⭐⭐⭐',
          explanationBn: `বাস্তব জীবনের পিএইচপি ও লারাভেল প্রজেক্টে কনস্ট্রাক্টরের মূল ভূমিকা:
1. Initial data set করা
2. Dependency receive করা (Dependency Injection)
3. Configuration প্রস্তুত করা
4. Object-এর required state নিশ্চিত করা
লারাভেলের কন্ট্রোলার ও সার্ভিস ক্লাসে ডিপেনডেন্সি ইনজেকশন কনস্ট্রাক্টরের মাধ্যমেই করা হয়।`,
          code: `<?php
class PaymentService {
    public function charge(): string { return "Charged"; }
}

class OrderService {
    private PaymentService $paymentService;

    // Dependency Injection
    public function __construct(PaymentService $paymentService) {
        $this->paymentService = $paymentService;
    }
}

$orderService = new OrderService(new PaymentService());
echo "OrderService initialized with PaymentService dependency!";
?>`,
          codeLanguage: 'Dependency Injection'
        },
        {
          title: '৭. Constructor Property Promotion ⭐⭐⭐ (PHP 8.0+)',
          explanationBn: `PHP 8-এর সবচেয়ে জনপ্রিয় ফিচার। কনস্ট্রাক্টরের আর্গুমেন্টে public/private লিখে দিলে আলাদাভাবে প্রপার্টি ডিক্লেয়ার এবং $this->prop = $prop লেখার দরকার নেই।`,
          code: `<?php
// PHP 8 Clean Code:
class User {
    public function __construct(
        public string $name,
        public int $age
    ) {}
}

$user = new User("Abbad", 25);
echo "Name: {$user->name}, Age: {$user->age}";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Name: Abbad, Age: 25`
        },
        {
          title: '৮. private Constructor (Singleton ও Factory Pattern)',
          explanationBn: `যদি কনস্ট্রাক্টর private করা হয়, তবে বাইরে থেকে new ClassName() কল করে অবজেক্ট তৈরি করা যায় না। এটি Singleton প্যাটার্ন এবং স্ট্যাটিক ফ্যাক্টরি মেথডে ব্যবহৃত হয়।`,
          code: `<?php
class Database {
    private function __construct() {
        // বাইরে থেকে new Database() বন্ধ
    }

    public static function connect(): string {
        return "Database Connected via static factory method";
    }
}

// $db = new Database(); // ❌ Fatal error: Call to private constructor
echo Database::connect();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Database Connected via static factory method`
        },
        {
          title: '৯. Parent Constructor কল করা (parent::__construct)',
          explanationBn: `Child ক্লাসের নিজস্ব __construct() থাকলে Parent ক্লাসের কনস্ট্রাক্টর স্বয়ংক্রিয়ভাবে কল হয় না। চাইল্ডের ভেতর থেকে parent::__construct(...) মেথড কল করতে হয়।`,
          code: `<?php
class User {
    public function __construct(public string $name) {}
}

class Admin extends User {
    public string $role;

    public function __construct(string $name, string $role) {
        parent::__construct($name); // Parent Constructor কল
        $this->role = $role;
    }
}

$admin = new Admin("Abbad", "admin");
echo "Admin: {$admin->name} | Role: {$admin->role}";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Admin: Abbad | Role: admin`
        },
        {
          title: '১০. Constructor বনাম Normal Method তুলনা',
          explanationBn: `• Constructor:
  - মেথডের নাম নির্দিষ্ট: __construct()
  - new কীওয়ার্ড দেওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে এক্সিকিউট হয়।
  - সাধারণত অবজেক্ট ইনিশিয়ালাইজেশন ও কনফিগারেশনে ব্যবহৃত হয়।
• Normal Method:
  - যেকোনো নাম হতে পারে (যেমন: login(), getPrice())।
  - অবজেক্ট তৈরির পর ম্যানুয়ালি $obj->method() দিয়ে কল করতে হয়।
  - অ্যাপ্লিকেশনের যেকোনো সময় একাধিকবার এক্সিকিউট করা যায়।`,
          code: `<?php
echo "Constructor: Auto-called on instantiation | Normal Method: Explicitly called on demand";
?>`,
          codeLanguage: 'Lifecycle Comparison'
        },
        {
          title: '১১. Constructor-এর Important Rule (একাধিক কনস্ট্রাক্টর নেই)',
          explanationBn: `একটি ক্লাসে একাধিক __construct() মেথড ডিফাইন করা যায় না (PHP মেথড ওভারলোডিং সাপোর্ট করে না)।
একাধিক উপায়ে ইনিশিয়ালাইজ করতে চাইলে:
১. Default Parameter ব্যবহার করুন
২. অথবা Static Factory Method (যেমন: User::fromArray($data)) তৈরি করুন।`,
          code: `<?php
class UserFactory {
    public function __construct(public string $name, public string $email) {}

    public static function fromArray(array $data): self {
        return new self($data['name'], $data['email']);
    }
}

$user = UserFactory::fromArray(['name' => 'Abbad', 'email' => 'abbad@dev.io']);
echo "User from factory: " . $user->name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User from factory: Abbad`
        }
      ],
      keyPointsBn: [
        'new User(...) ➔ __construct(...) স্বয়ংক্রিয়ভাবে কল হয়।',
        'Constructor কোনো মান রিটার্ন (return) করে না।',
        'PHP 8 Constructor Property Promotion কোডকে সংক্ষিপ্ত ও আধুনিক করে।',
        'চাইল্ড ক্লাসে কনস্ট্রাক্টর ওভাররাইড করলে parent::__construct() কল করা আবশ্যক।',
        '⭐ কনস্ট্রাক্টরে ভ্যালিডেশন এবং ডিপেনডেন্সি ইনজেকশন নিশ্চিত করলে সিস্টেম বাগ-ফ্রি থাকে।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: API ক্লায়েন্ট কনফিগারেশন ইনিশিয়ালাইজার',
          descriptionBn: 'কনস্ট্রাক্টরে বেস ইউআরএল, টাইমআউট এবং এপিআই কী সেট করে অবজেক্ট প্রস্তুতকরণ।',
          code: `<?php
class ApiClient {
    public function __construct(
        private string $baseUrl,
        private string $apiKey,
        public int $timeoutSeconds = 30
    ) {
        if (empty($this->apiKey)) {
            throw new InvalidArgumentException("API Key cannot be empty");
        }
    }

    public function getConnectionSummary(): string {
        return "Connecting to {$this->baseUrl} with Key: " . substr($this->apiKey, 0, 4) . "*** (Timeout: {$this->timeoutSeconds}s)";
    }
}

$client = new ApiClient("https://api.payment.com", "sec_live_98412847291");
echo $client->getConnectionSummary();
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-destructor',
    title: 'PHP Destructor',
    category: 'oop',
    tag: 'Object Lifecycle',
    phpVersion: 'PHP 8.0+',
    subtitleBn: '__destruct() মেথড, অবজেক্ট ধ্বংস ও রিসোর্স ক্লিনআপ, রিয়েল-ওয়ার্ল্ড সতর্কতা ও প্রায়োরিটি গাইড।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Destructor Lifecycle & Resource Cleanup Demo</h3>";

class FileLogger {
    private string $filename;
    private array $logs = [];

    public function __construct(string $filename) {
        $this->filename = $filename;
        echo "<p style='color:#0284c7; margin:2px 0;'>[1. Construct] Logger initialized for: <b>{$this->filename}</b></p>";
    }

    public function log(string $message): void {
        $this->logs[] = "[" . date('H:i:s') . "] " . $message;
        echo "<p style='color:#334155; margin:2px 0;'>[2. Running] Log added: <i>{$message}</i></p>";
    }

    // অবজেক্টের রেফারেন্স শেষ হলে বা স্ক্রিপ্ট শেষ হলে স্বয়ংক্রিয়ভাবে কল হয়
    public function __destruct() {
        echo "<p style='color:#d97706; margin:2px 0;'>[3. Destruct] Flushing " . count($this->logs) . " logs to <b>{$this->filename}</b> and closing resource handle.</p>";
    }
}

$logger = new FileLogger("app.log");
$logger->log("User 'Abbad' signed in successfully.");
$logger->log("Checkout completed for Invoice #1029.");

// অবজেক্ট ম্যানুয়ালি ডেস্ট্রয় করা (Garbage Collection ট্রিগার)
unset($logger);

echo "<p style='color:#16a34a; margin:6px 0 0 0;'>✓ Script continues running safely after object destruction.</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Destructor হলো পিএইচপির একটি বিশেষ ম্যাজিক মেথড (__destruct()) যা কোনো অবজেক্টের আর কোনো রেফারেন্স না থাকলে অথবা পুরো স্ক্রিপ্ট/রিকোয়েস্ট এক্সিকিউশন শেষ হয়ে মেমোরি থেকে অবজেক্ট মুছে যাওয়ার সময় স্বয়ংক্রিয়ভাবে কল হয়। এর মূল দায়িত্ব হলো রিসোর্স ক্লিনআপ করা। তবে আধুনিক পিএইচপি অ্যাপ্লিকেশনে কনস্ট্রাক্টরের তুলনায় ডেস্ট্রাক্টরের ব্যবহার অনেক কম।`,
      lessonSections: [
        {
          title: '১. Basic Example: Constructor ও Destructor লাইফসাইকেল',
          explanationBn: `অবজেক্ট তৈরির সময় কনস্ট্রাক্টর কল হয়, আর স্ক্রিপ্ট শেষ হওয়ার মুহূর্তে ডেস্ট্রাক্টর স্বয়ংক্রিয়ভাবে কল হয়ে মেমোরি খালি করে।`,
          code: `<?php
class User {
    public function __construct() {
        echo "Object Created<br>";
    }

    public function __destruct() {
        echo "Object Destroyed<br>";
    }
}

$user = new User();
// স্ক্রিপ্টের শেষে Object Destroyed প্রিন্ট হবে
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Object Created\nObject Destroyed`
        },
        {
          title: '২. কখন Destructor Call হয়?',
          explanationBn: `ডেস্ট্রাক্টর প্রধানত তিনটি পরিস্থিতিতে কার্যকর হয়:
১. যখন অবজেক্টের আর কোনো রেফারেন্স অবশিষ্ট থাকে না।
২. স্ক্রিপ্ট এক্সিকিউশন বা রিকোয়েস্ট সমাপ্তির সময়।
৩. যখন unset($obj) দিয়ে অবজেক্টটি মেমোরি থেকে মুছে ফেলা হয়।`,
          code: `<?php
class SessionWatcher {
    public function __destruct() {
        echo "Session Watcher Ended.\\n";
    }
}

function runScope() {
    $watcher = new SessionWatcher();
    // ফাংশনের স্কোপ শেষ হওয়ার সাথে সাথেই অবজেক্ট ডেস্ট্রয় হবে
}

runScope();
echo "Outside function scope.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Session Watcher Ended.\nOutside function scope.`
        },
        {
          title: '৩. unset() দিয়ে ম্যানুয়ালি Reference Remove করা',
          explanationBn: `unset($variable) ব্যবহার করলে ভ্যারিয়েবলের রেফারেন্স তৎক্ষণাৎ মুছে যায় এবং পিএইচপি ইঞ্জিন তাৎক্ষণিকভাবে __destruct() মেথড কল করে।`,
          code: `<?php
class TempTracker {
    public function __destruct() {
        echo "Destruct Called!\\n";
    }
}

$tracker = new TempTracker();
unset($tracker); // সাথে সাথে ডেস্ট্রাক্টর কল হবে

echo "Script Still Running...";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Destruct Called!\nScript Still Running...`
        },
        {
          title: '৪. Real-World Use ⭐',
          explanationBn: `ডেস্ট্রাক্টরের বাস্তবমুখী ব্যবহার মূলত সিস্টেম রিসোর্স ক্লিন করার ক্ষেত্রে:
✓ ফাইল হ্যান্ডল বা স্ট্রিম ক্লোজ করা
✓ টেম্পোরারি ফাইল বা রানটাইম ক্যাশ ফাইল ডিলিট করা
✓ সকেট কানেকশন বা এক্সটার্নাল লক রিলিজ করা
✓ এক্সিকিউশন সামারি লগ ফ্লাশ করা
⚠️ তবে মনে রাখা জরুরি: আধুনিক PHP/Laravel-এ মেমোরি ও কানেকশন PHP স্বয়ংক্রিয়ভাবে রিকোয়েস্ট শেষে নিজেই সুন্দরভাবে রিলিজ করে দেয়।`,
          code: `<?php
echo "Real-world uses: Resource cleanup, temporary file deletion, stream closing, socket release.";
?>`,
          codeLanguage: 'Resource Management'
        },
        {
          title: '৫. Constructor + Destructor ফাইল ম্যানেজার প্যাটার্ন',
          explanationBn: `কনস্ট্রাক্টরে রিসোর্স ওপেন করা এবং ডেস্ট্রাক্টরে সেফলি ক্লোজ করার ক্লাসিক উদাহরণ।`,
          code: `<?php
class FileManager {
    public function __construct() {
        echo "Resource Initialized (Open File)<br>";
    }

    public function __destruct() {
        echo "Resource Cleanup (Close File)<br>";
    }
}

$file = new FileManager();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Resource Initialized (Open File)\nResource Cleanup (Close File)`
        },
        {
          title: '৬. Database Connection রিসোর্স রিলিজ',
          explanationBn: `ডেটাবেস হ্যান্ডলারের রেফারেন্স নাল (null) করে কানেকশন ডিসকানেক্ট নিশ্চিত করা।`,
          code: `<?php
class Database {
    private ?string $connection = null;

    public function __construct() {
        $this->connection = "PDO Active Connection";
        echo "DB Connected<br>";
    }

    public function __destruct() {
        $this->connection = null;
        echo "DB Connection Safely Closed<br>";
    }
}

$db = new Database();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `DB Connected\nDB Connection Safely Closed`
        },
        {
          title: '৭. ⚠️ Destructor-এর Timing Guaranteed নয় (সতর্কতা)',
          explanationBn: `PHP-তে গারবেজ কালেকশন কখন রান করবে তা ১০০% নির্দিষ্ট সেকেন্ডে নিশ্চিত নয়।
তাই নিচের ক্রিটিক্যাল বিজনেস লজিক কখনোই Destructor-এ রাখা যাবে না:
❌ Payment Process
❌ Database Critical Update
❌ Business Logic Calculation
❌ Email Sending
❌ Transaction Commit
এই কাজগুলোর জন্য সর্বদা এক্সপ্লিজিট মেথড (যেমন: completeTransaction(), sendEmail()) কল করতে হয়।`,
          code: `<?php
// ❌ মারাত্মক ভুল:
// public function __destruct() { $this->chargeCreditCard(); }

// ✓ সঠিক পদ্ধতি:
// $paymentService->chargeCreditCard();
echo "Never put critical business logic or financial transactions in destructors!";
?>`,
          codeLanguage: 'Architectural Warning'
        },
        {
          title: '৮. Destructor-এ Exception হ্যান্ডলিং সতর্কতা',
          explanationBn: `__destruct() মেথডের ভেতর থেকে কোনো আনহ্যান্ডল্ড Exception থ্রো করা মারাত্মক ঝুঁকিপূর্ণ, কারণ PHP রানটাইম Fatal Error ছুড়ে দিয়ে পুরো অ্যাপ্লিকেশন ক্র্যাশ করাতে পারে। যদি কোনো এরর হওয়ার সম্ভাবনা থাকে, তবে অবশ্যই try...catch ব্লকে আটকে দিতে হবে।`,
          code: `<?php
class SafeDestructor {
    public function __destruct() {
        try {
            // ক্লিনআপ অপারেশন
        } catch (Throwable $e) {
            error_log("Destructor error: " . $e->getMessage());
        }
    }
}
echo "Destructors must handle internal exceptions safely.";
?>`,
          codeLanguage: 'Best Practice'
        },
        {
          title: '৯. Constructor বনাম Destructor তুলনা',
          explanationBn: `• Constructor:
  - মেথড: __construct()
  - এক্সিকিউশন: অবজেক্ট তৈরির সময় শুরুতে (At creation)
  - মূল কাজ: ইনিশিয়ালাইজেশন ও কনফিগারেশন
  - প্যারামিটার: আর্গুমেন্ট গ্রহণ করতে পারে
• Destructor:
  - মেথড: __destruct()
  - এক্সিকিউশন: অবজেক্ট ধ্বংসের সময় শেষে (At termination)
  - মূল কাজ: রিসোর্স মুক্তকরণ ও ক্লিনআপ
  - প্যারামিটার: কোনো আর্গুমেন্ট গ্রহণ করতে পারে না`,
          code: `<?php
echo "new User() ➔ __construct() ➔ [Application Logic] ➔ __destruct() ➔ Memory Freed";
?>`,
          codeLanguage: 'Lifecycle Comparison'
        }
      ],
      keyPointsBn: [
        '__destruct() মেথডে কোনো আর্গুমেন্ট পাস করা যায় না।',
        'unset($object) কল করলে অবজেক্ট সাথে সাথে ডেস্ট্রয় হয়ে ডেস্ট্রাক্টর ট্রিগার হয়।',
        '⭐ বাস্তব দুনিয়ায় গুরুত্ব: Constructor ⭐⭐⭐⭐⭐ (সবসময় লাগে) বনাম Destructor ⭐⭐ (মাঝে মাঝে লাগে)।',
        'ক্রিটিক্যাল কোনো পেমেন্ট বা বিজনেস লজিক কখনোই ডেস্ট্রাক্টরে রাখা যাবে না।',
        '🎯 মনে রাখুন: Constructor = শুরুতে কাজ, Destructor = শেষে cleanup।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: টেম্পোরারি ফাইল ক্লিনার',
          descriptionBn: 'অবজেক্ট ধ্বংস হওয়ার সাথে সাথে ডিস্ক থেকে টেম্পোরারি ক্যাশ ফাইল স্বয়ংক্রিয়ভাবে মুছে ফেলা।',
          code: `<?php
class TempFileManager {
    private string $tempFile;

    public function __construct(string $filename) {
        $this->tempFile = sys_get_temp_dir() . "/" . $filename;
        file_put_contents($this->tempFile, "Temporary session snapshot " . date('Y-m-d H:i:s'));
        echo "Created Temp File: {$this->tempFile}<br>";
    }

    public function __destruct() {
        if (file_exists($this->tempFile)) {
            unlink($this->tempFile);
            echo "Cleaned up Temp File safely on destruction.<br>";
        }
    }
}

$temp = new TempFileManager("session_cache.tmp");
unset($temp); // ডেস্ট্রাক্টর ট্রিগার
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-access-modifiers',
    title: 'PHP Access Modifiers',
    category: 'oop',
    tag: 'Encapsulation',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'public, protected, private এক্সেস স্তর, Encapsulation, Getter/Setter এবং রিয়েল-ওয়ার্ল্ড সিকিউর মডেলিং।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Access Modifiers Live Demonstration</h3>";

// ১. public: যেকোনো জায়গা থেকে access করা যায়
class User {
    public string $name = "Abbad";
    protected string $email = "abbad@example.com";
    private string $passwordHash;

    public function login(): string {
        return "Logged In";
    }

    public function setPassword(string $password): void {
        $this->passwordHash = password_hash($password, PASSWORD_DEFAULT);
    }

    public function verifyPassword(string $password): bool {
        return password_verify($password, $this->passwordHash);
    }
}

// ২. protected: শুধু একই Class এবং Child Class থেকে access করা যায়
class Admin extends User {
    public function getEmail(): string {
        // Child class parent-এর protected member অ্যাক্সেস করতে পারে
        return $this->email;
    }
}

// ৩. private: শুধু যে Class-এর ভিতরে declare করা হয়েছে, সেই Class থেকেই access করা যায়
class BankAccount {
    private float $balance = 0.0;

    public function deposit(float $amount): void {
        // ভ্যালিডেশন ছাড়া ডেটা পরিবর্তন রোধ (Encapsulation)
        if ($amount <= 0) {
            return;
        }
        $this->balance += $amount;
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$user = new User();
echo "<p style='margin:4px 0;'><b>1. Public Access:</b> Name = {$user->name} | Login = {$user->login()}</p>";

$admin = new Admin();
echo "<p style='margin:4px 0;'><b>2. Protected via Child:</b> Email = {$admin->getEmail()}</p>";

$account = new BankAccount();
$account->deposit(1000);
echo "<p style='margin:4px 0; color:#059669;'><b>3. Private via Getter:</b> Balance = ৳" . number_format($account->getBalance(), 2) . "</p>";

// পাসওয়ার্ড হ্যাশ সিকিউরিটি টেস্ট
$user->setPassword("secret_pass_123");
$verified = $user->verifyPassword("secret_pass_123");
echo "<p style='margin:4px 0; color:#2563eb;'><b>4. Password Encapsulation:</b> Verified = " . ($verified ? "Yes (Secure)" : "No") . "</p>";

echo "<p style='margin:6px 0 0 0; font-size:13px; color:#dc2626;'>Note: Direct access \$account->balance or \$admin->email causes Fatal Error because of visibility!</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Access Modifier দিয়ে Class-এর Property এবং Method কোথা থেকে access করা যাবে সেটা control করা হয়। PHP-তে ৩টি প্রধান Access Modifier রয়েছে:
1. public ⭐⭐⭐ (যেকোনো জায়গা থেকে access করা যায়)
2. protected (শুধু একই Class এবং Child Class থেকে access করা যায়)
3. private ⭐⭐⭐ (শুধু যে Class-এর ভিতরে declare করা হয়েছে, সেই Class থেকেই access করা যায়)

Access Modifier ➔ Encapsulation ➔ Safer + Maintainable OOP design। এটি সংবেদনশীল ডেটা সরাসরি পরিবর্তন হওয়া থেকে রক্ষা করে।`,
      lessonSections: [
        {
          title: '১. public ⭐⭐⭐ (সবার জন্য উন্মুক্ত)',
          explanationBn: `public মেম্বার যেকোনো জায়গা থেকে access করা যায়—ক্লাসের ভেতরে, চাইল্ড ক্লাসে, এবং ক্লাসের বাইরে অবজেক্ট ইনস্ট্যান্স থেকে।`,
          code: `<?php
class User
{
    public string $name;

    public function login()
    {
        return "Logged In";
    }
}

$user = new User();
$user->name = "Abbad";

echo $user->name . "<br>";
echo $user->login();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad\nLogged In`
        },
        {
          title: '২. protected (Class + Child Class)',
          explanationBn: `protected মেম্বার শুধু:
✓ একই Class
✓ Child Class (extends করা ক্লাস)
থেকে access করা যায়। বাইরে থেকে ($admin->email) সরাসরি এক্সেস করতে গেলে ❌ Fatal Error হবে।`,
          code: `<?php
class User
{
    protected string $email = "user@example.com";
}

class Admin extends User
{
    public function getEmail()
    {
        return $this->email; // Child class থেকে অ্যাক্সেসযোগ্য
    }
}

$admin = new Admin();
echo $admin->getEmail();

// কিন্তু:
// echo $admin->email; // ❌ Error: Cannot access protected property
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `user@example.com`
        },
        {
          title: '৩. private ⭐⭐⭐ (শুধুমাত্র নিজস্ব Class)',
          explanationBn: `private মেম্বার শুধু যে Class-এর ভিতরে declare করা হয়েছে, কেবল সেই Class থেকেই access করা যায়। বাইরে থেকে বা কোনো Child Class থেকেও এটি সরাসরি অ্যাক্সেস করা যায় না।`,
          code: `<?php
class BankAccount
{
    private float $balance = 0;

    public function deposit(float $amount)
    {
        $this->balance += $amount;
    }

    public function getBalance()
    {
        return $this->balance;
    }
}

$account = new BankAccount();
$account->deposit(1000);

echo "Balance: ৳" . $account->getBalance();

// কিন্তু:
// echo $account->balance; // ❌ Error: Cannot access private property
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Balance: ৳1000`
        },
        {
          title: '৪. public বনাম protected বনাম private তুলনামূলক ম্যাট্রিক্স',
          explanationBn: `⭐ এই তুলনামূলক চার্টটি সবসময় মনে রাখতে হবে:

• public:
  - Class:   ✓ Accessible
  - Child:   ✓ Accessible
  - Outside: ✓ Accessible

• protected:
  - Class:   ✓ Accessible
  - Child:   ✓ Accessible
  - Outside: ❌ Inaccessible (Fatal Error)

• private:
  - Class:   ✓ Accessible
  - Child:   ❌ Inaccessible (Fatal Error)
  - Outside: ❌ Inaccessible (Fatal Error)`,
          code: `<?php
echo "Visibility Matrix:\n";
echo "public    -> Class: [YES] | Child: [YES] | Outside: [YES]\n";
echo "protected -> Class: [YES] | Child: [YES] | Outside: [NO]\n";
echo "private   -> Class: [YES] | Child: [NO]  | Outside: [NO]\n";
?>`,
          codeLanguage: 'Comparison Matrix'
        },
        {
          title: '৫. কেন Access Modifier দরকার? (Encapsulation)',
          explanationBn: `ধরুন ব্যাংক একাউন্টে ব্যালেন্স যদি public থাকতো, তাহলে বাইরে থেকে যে কেউ সরাসরি $account->balance = -50000; করে দিতে পারতো!
কিন্তু private রাখলে এবং ডিপোজিট মেথডে ভ্যালিডেশন দিলে কেউ অবৈধ মান সেট করতে পারে না। এটাই Encapsulation-এর সবচেয়ে গুরুত্বপূর্ণ অংশ।`,
          code: `<?php
class BankAccount
{
    private float $balance = 0;

    public function deposit(float $amount)
    {
        // অবৈধ ইনপুট গার্ড
        if ($amount <= 0) {
            return;
        }

        $this->balance += $amount;
    }

    public function getBalance(): float
    {
        return $this->balance;
    }
}

$account = new BankAccount();
$account->deposit(5000);
// $account->balance = -50000; // ❌ বাইরে থেকে সরাসরি ব্যালেন্স নষ্ট করা অসম্ভব!
echo "Safe Balance: " . $account->getBalance();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Safe Balance: 5000`
        },
        {
          title: '৬. Getter / Setter (Controlled Access)',
          explanationBn: `Private property-এর controlled access দিতে Getter/Setter ব্যবহার করা যায়।
⚠️ টিপস: সব property-এর জন্য blindly getter/setter বানিয়ে কোড বড় করার দরকার নেই। যেখানে controlled access, ডেটা ফরম্যাটিং বা validation দরকার, ঠিক সেখানেই ব্যবহার করবেন।`,
          code: `<?php
class User
{
    private string $email;

    public function setEmail(string $email): void
    {
        // ফিল্টারিং বা ভ্যালিডেশন যুক্ত করা যায়
        $this->email = strtolower(trim($email));
    }

    public function getEmail(): string
    {
        return $this->email;
    }
}

$user = new User();
$user->setEmail("  Abbad@Example.com  ");
echo $user->getEmail();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `abbad@example.com`
        },
        {
          title: '৭. Protected কখন ব্যবহার করবে?',
          explanationBn: `Inheritance-এর সময় child class-কে কোনো property বা method-এর এক্সেস দিতে হলে protected ব্যবহার করতে হয়। এতে বাইরে থেকে ডেটা নিরাপদ থাকে কিন্তু সাব-ক্লাস সুবিধা পায়।`,
          code: `<?php
class User
{
    protected string $role = "user";
}

class Admin extends User
{
    public function getRole(): string
    {
        return $this->role; // প্যারেন্টের প্রোটেক্টেড প্রপার্টি ব্যবহার
    }
}

$admin = new Admin();
echo "Role: " . $admin->getRole();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Role: user`
        },
        {
          title: '৮. Method-এর ক্ষেত্রেও একই Rule',
          explanationBn: `প্রপার্টির মতো মেথডের ক্ষেত্রেও visibility প্রযোজ্য। কোনো মেথড private হলে তা শুধুমাত্র ক্লাসের ভেতরের অন্য কোনো মেথড থেকে কল করা যায়। বাইরে থেকে কল দিলে Fatal Error হবে।`,
          code: `<?php
class User
{
    private function secret()
    {
        return "Secret";
    }

    public function test()
    {
        return $this->secret(); // ক্লাসের ভেতর থেকে private মেথড কল সম্ভব
    }
}

$user = new User();
echo $user->test(); // Secret

// $user->secret(); // ❌ Fatal Error: Call to private method User::secret()
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Secret`
        },
        {
          title: '৯. Default Access Modifier',
          explanationBn: `কোনো property বা method-এর সামনে public, protected, private না লিখলে PHP-তে historically তা public হিসেবে বিবেচিত হতো।
তবে আধুনিক PHP কোডে (PHP 7.4/8.0+) দৃশ্যমানতা স্পষ্টভাবে (explicitly) লেখা সর্বোত্তম চর্চা:
✓ public
✓ protected
✓ private`,
          code: `<?php
class StandardUser {
    public string $name;      // Explicit public
    protected string $status; // Explicit protected
    private string $pin;      // Explicit private
}
echo "Always write explicit visibility in modern PHP.";
?>`,
          codeLanguage: 'Modern Best Practice'
        },
        {
          title: '১০. Real-World Example: পাসওয়ার্ড হ্যাশিং ও ভেরিফিকেশন',
          explanationBn: `এখানে password সরাসরি বাইরে expose করা হয়নি ($user->password নিষিদ্ধ)। তার বদলে setPassword() দিয়ে নিরাপদ হ্যাশ তৈরি করা হয়েছে এবং verifyPassword() দিয়ে ভেরিফাই করা হয়েছে। এটিই প্রফেশনাল সিকিউর অবজেক্ট মডেলিং।`,
          code: `<?php
class User
{
    private string $password;

    public function setPassword(string $password): void
    {
        $this->password = password_hash(
            $password,
            PASSWORD_DEFAULT
        );
    }

    public function verifyPassword(string $password): bool
    {
        return password_verify(
            $password,
            $this->password
        );
    }
}

$user = new User();
$user->setPassword("secret");

var_dump($user->verifyPassword("secret"));
var_dump($user->verifyPassword("wrong_pass"));
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `bool(true)\nbool(false)`
        },
        {
          title: '১১. ⭐ REAL-WORLD RULE & 🎯 MUST REMEMBER',
          explanationBn: `সাধারণভাবে আর্কিটেকচার রুল:
• public ➔ যা বাইরে থেকে ব্যবহার করার দরকার (API Interface)
• private ➔ Class-এর internal implementation ও গোপন অবস্থা
• protected ➔ Parent + Child-এর মধ্যে shared implementation

⚠️ তবে default হিসেবে সবকিছু private করে ফেলাই একমাত্র নিয়ম নয়। প্রয়োজন অনুযায়ী সচেতনভাবে visibility নির্ধারণ করবেন।

🎯 MUST REMEMBER:
• public    ➔ সবাই access করতে পারে
• protected ➔ Class + Child Class
• private   ➔ শুধু নিজের Class

Access Modifier ➔ কোন data/method কোথা থেকে access করা যাবে ➔ Encapsulation ➔ Safer + Maintainable OOP design!`,
          code: `<?php
echo "Encapsulation = Data Hiding + Controlled Access via Methods";
?>`,
          codeLanguage: 'Architecture Rule'
        }
      ],
      keyPointsBn: [
        'public ➔ যে কেউ যেকোনো জায়গা থেকে অ্যাক্সেস করতে পারে (Class ✓, Child ✓, Outside ✓)।',
        'protected ➔ শুধুমাত্র নিজস্ব ক্লাস এবং ইনহেরিট করা চাইল্ড ক্লাস থেকে অ্যাক্সেসযোগ্য (Class ✓, Child ✓, Outside ❌)।',
        'private ➔ কঠোরভাবে শুধুমাত্র নিজস্ব ক্লাসের ভেতরে অ্যাক্সেসযোগ্য (Class ✓, Child ❌, Outside ❌)।',
        'Access Modifier ➔ Encapsulation ➔ Safer + Maintainable OOP Design।',
        'সংবেদনশীল প্রপার্টি (যেমন: পাসওয়ার্ড, ব্যালেন্স, এপিআই কি) সর্বদা private রেখে মেথড দিয়ে ভ্যালিডেট করুন।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: ডিজিটাল ওয়ালেট অ্যাকাউন্ট গার্ড',
          descriptionBn: 'ব্যালেন্সকে private রেখে পিন ভেরিফিকেশন ও ট্রানজ্যাকশন লিমিট চেক।',
          code: `<?php
class DigitalWallet {
    private float $balance = 0.0;
    private string $pinHash;

    public function __construct(string $pin, float $initialBalance) {
        $this->pinHash = password_hash($pin, PASSWORD_DEFAULT);
        $this->balance = max(0, $initialBalance);
    }

    public function withdraw(float $amount, string $pin): bool {
        if (!password_verify($pin, $this->pinHash)) {
            echo "❌ ভুল পিন নম্বর!<br>";
            return false;
        }

        if ($amount > $this->balance) {
            echo "❌ অপর্যাপ্ত ব্যালেন্স!<br>";
            return false;
        }

        $this->balance -= $amount;
        echo "✓ সফলভাবে ৳" . number_format($amount, 2) . " উত্তোলন করা হয়েছে।<br>";
        return true;
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$wallet = new DigitalWallet("1234", 15000.0);
$wallet->withdraw(5000.0, "1234");
echo "অবশিষ্ট ব্যালেন্স: ৳" . number_format($wallet->getBalance(), 2);
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-inheritance',
    title: 'PHP Inheritance',
    category: 'oop',
    tag: 'Code Reusability',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'extends কীওয়ার্ড, Parent ও Child ক্লাস, Protected/Private এক্সেস, Method Overriding, parent:: ও IS-A বনাম HAS-A।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Inheritance Live Architecture Demo</h3>";

// ১. Base Parent Class
class User {
    public function __construct(
        public string $name
    ) {}

    public function login(): string {
        return "User Login";
    }

    public function role(): string {
        return "User";
    }
}

// ২. Child Class extends Parent (Admin is a User)
class Admin extends User {
    public function __construct(
        string $name,
        public string $adminRole
    ) {
        // Child constructor-এ parent constructor কল করা
        parent::__construct($name);
    }

    // Method Overriding: প্যারেন্টের মেথড নিজের মতো করে redefine করা
    public function role(): string {
        return "Admin (" . strtoupper($this->adminRole) . ")";
    }

    // parent:: দিয়ে প্যারেন্টের মেথড এক্সটেন্ড করা
    public function login(): string {
        return parent::login() . " + Admin Security Check Passed";
    }

    public function dashboard(): string {
        return "Welcome to Admin Dashboard";
    }
}

$admin = new Admin("Abbad", "SuperAdmin");

echo "<p style='margin:4px 0;'><b>1. Property from Parent:</b> Name = {$admin->name}</p>";
echo "<p style='margin:4px 0;'><b>2. Overridden Method:</b> Role = {$admin->role()}</p>";
echo "<p style='margin:4px 0; color:#0284c7;'><b>3. parent:: augmented:</b> " . $admin->login() . "</p>";
echo "<p style='margin:4px 0; color:#16a34a;'><b>4. Child specific method:</b> " . $admin->dashboard() . "</p>";

// বাস্তব উদাহরণ: পেমেন্ট গেটওয়ে ইনহেরিটেন্স
class Payment {
    public function process(float $amount) {
        return "Processing payment: ৳$amount";
    }
}

class BkashPayment extends Payment {
    public function process(float $amount) {
        return "Processing bKash payment: ৳$amount (via bKash PGW API)";
    }
}

class CardPayment extends Payment {
    public function process(float $amount) {
        return "Processing Card payment: ৳$amount (via Visa/MasterCard)";
    }
}

$bkash = new BkashPayment();
$card = new CardPayment();

echo "<p style='margin:6px 0 2px 0; color:#475569;'><b>Payment System (Real-World):</b></p>";
echo "<p style='margin:2px 0; color:#d97706;'>• " . $bkash->process(2500) . "</p>";
echo "<p style='margin:2px 0; color:#7c3aed;'>• " . $card->process(5000) . "</p>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Inheritance (উত্তরাধিকার) মানে হলো একটি Class অন্য একটি Class-এর properties এবং methods reuse করতে পারা। PHP-তে class Child extends Parent সিনট্যাক্সে extends কীওয়ার্ড দিয়ে inheritance করা হয়। এর মূল উদ্দেশ্য শুধু কোড রিইউজ নয়, বরং সম্পর্কিত ক্লাসগুলোর সাধারণ আচরণ ও সম্পর্ক যথাযথভাবে মডেল করা।`,
      lessonSections: [
        {
          title: '১. Basic Example: Parent ও Child Class',
          explanationBn: `Admin extends User করার কারণে Admin ক্লাস স্বয়ংক্রিয়ভাবে User ক্লাসের public ও protected মেম্বার ব্যবহার করার অধিকার পায়।
এখানে:
• User ➔ Parent Class (বা Base Class)
• Admin ➔ Child Class (বা Derived Class)`,
          code: `<?php
class User
{
    public string $name;

    public function login()
    {
        return "User Login";
    }
}

class Admin extends User
{
    public function dashboard()
    {
        return "Admin Dashboard";
    }
}

$admin = new Admin();
$admin->name = "Abbad";

echo $admin->name . "<br>";
echo $admin->login() . "<br>";
echo $admin->dashboard();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad\nUser Login\nAdmin Dashboard`
        },
        {
          title: '২. extends কীওয়ার্ড ও IS-A সম্পর্ক',
          explanationBn: `class Admin extends User মানে হলো "Admin is a User" (Admin একটি User)।
যখন বাস্তব দুনিয়ায় দুটি কনসেপ্টের মধ্যে এই ধরনের লজিক্যাল "IS-A" সম্পর্ক বিদ্যমান থাকে, তখনই কেবল inheritance ব্যবহার করা সংগত।`,
          code: `<?php
class User {}
class Admin extends User {}

$admin = new Admin();
var_dump($admin instanceof User); // Admin একই সাথে User-ও
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `bool(true)`
        },
        {
          title: '৩. Protected + Inheritance',
          explanationBn: `প্যারেন্ট ক্লাসের protected মেম্বার চাইল্ড ক্লাসে সম্পূর্ণ অ্যাক্সেসযোগ্য। ফলে চাইল্ড ক্লাস প্যারেন্টের ইন্টারনাল ডেটা ব্যবহার বা বর্ধিত করতে পারে।`,
          code: `<?php
class User
{
    protected string $role = "user";
}

class Admin extends User
{
    public function getRole()
    {
        return $this->role; // চাইল্ড ক্লাস protected member access করতে পারে
    }
}

$admin = new Admin();
echo $admin->getRole();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `user`
        },
        {
          title: '৪. Private Property Inheritance (অ্যাক্সেস নিষিদ্ধ)',
          explanationBn: `private মেম্বার কঠোরভাবে শুধুমাত্র প্যারেন্টের ভেতরেই কার্যকর। Child Class থেকে সরাসরি প্যারেন্টের private প্রপার্টিতে অ্যাক্সেস পাওয়া যায় না।`,
          code: `<?php
class User
{
    private string $password = "secret";
}

class Admin extends User
{
    public function test()
    {
        // echo $this->password;
        // ❌ Cannot access private property User::$password
    }
}

$admin = new Admin();
echo "Private properties are NOT accessible in child classes.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Private properties are NOT accessible in child classes.`
        },
        {
          title: '৫. Method Overriding ⭐⭐⭐',
          explanationBn: `Child Class চাইলে প্যারেন্ট থেকে পাওয়া মেথডকে নিজের প্রয়োজন অনুযায়ী নতুন কোড দিয়ে redefine বা পরিবর্তন করতে পারে। এটাকে Method Overriding বলে।`,
          code: `<?php
class User
{
    public function role()
    {
        return "User";
    }
}

class Admin extends User
{
    public function role()
    {
        return "Admin"; // প্যারেন্টের মেথড ওভাররাইড
    }
}

$admin = new Admin();
echo $admin->role();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Admin`
        },
        {
          title: '৬. parent:: ⭐⭐⭐ (প্যারেন্ট মেথড এক্সটেনশন)',
          explanationBn: `Child Class থেকে Parent-এর মূল method কল করে তার সাথে অতিরিক্ত কাজ যোগ করতে parent::methodName() ব্যবহার করা হয়।`,
          code: `<?php
class User
{
    public function login()
    {
        return "User Login";
    }
}

class Admin extends User
{
    public function login()
    {
        return parent::login() . " + Admin Check";
    }
}

echo (new Admin())->login();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User Login + Admin Check`
        },
        {
          title: '৭. Parent Constructor Call (parent::__construct)',
          explanationBn: `Child ক্লাসে নিজস্ব কনস্ট্রাক্টর থাকলে প্যারেন্টের কনস্ট্রাক্টর স্বয়ংক্রিয়ভাবে কল হয় না। চাইল্ডের কনস্ট্রাক্টরের ভেতর থেকে parent::__construct(...) কল করে প্যারেন্টের ইনিশিয়ালাইজেশন সম্পন্ন করতে হয়।`,
          code: `<?php
class User
{
    public function __construct(
        public string $name
    ) {}
}

class Admin extends User
{
    public function __construct(
        string $name,
        public string $role
    ) {
        parent::__construct($name); // Parent constructor কল
    }
}

$admin = new Admin("Abbad", "admin");

echo "Name: " . $admin->name . " | Role: " . $admin->role;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Name: Abbad | Role: admin`
        },
        {
          title: '৮. Inheritance + Access Modifier ম্যাট্রিক্স',
          explanationBn: `Parent-এর মেম্বার চাইল্ড কীভাবে পায়:
• public    ➔ Child access করতে পারে (✓)
• protected ➔ Child access করতে পারে (✓)
• private   ➔ Child directly access করতে পারে না (❌)`,
          code: `<?php
class ParentClass
{
    public $a = "Public A";
    protected $b = "Protected B";
    private $c = "Private C";
}

class ChildClass extends ParentClass
{
    public function test()
    {
        echo $this->a . " | "; // ✓
        echo $this->b;         // ✓
        // echo $this->c;      // ❌ Error
    }
}

$child = new ChildClass();
$child->test();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Public A | Protected B`
        },
        {
          title: '৯. Real-World Example: Payment Architecture',
          explanationBn: `প্যারেন্ট Payment ক্লাসে সাধারণ আর্কিটেকচার ডিফাইন করা আছে, এবং BkashPayment ও CardPayment চাইল্ড ক্লাসগুলো তাদের নিজস্ব পেমেন্ট প্রসেসিং সম্পন্ন করে।`,
          code: `<?php
class Payment
{
    public function process(float $amount)
    {
        return "Processing payment: $amount";
    }
}

class BkashPayment extends Payment
{
    public function process(float $amount)
    {
        return "Processing bKash payment: $amount";
    }
}

class CardPayment extends Payment
{
    public function process(float $amount)
    {
        return "Processing Card payment: $amount";
    }
}

$bkash = new BkashPayment();
$card = new CardPayment();

echo $bkash->process(1000) . "<br>";
echo $card->process(5000);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Processing bKash payment: 1000\nProcessing Card payment: 5000`
        },
        {
          title: '১০. কখন Inheritance ব্যবহার করবে? (IS-A বনাম HAS-A ⭐⭐⭐)',
          explanationBn: `কখন Inheritance আর কখন Composition ব্যবহার করবেন—এটি সফটওয়্যার ডিজাইনের সবচেয়ে গুরুত্বপূর্ণ সিদ্ধান্ত:

✓ "IS-A" relationship হলে Inheritance ব্যবহার করো:
  - Admin IS-A User (Admin extends User)
  - Dog IS-A Animal (Dog extends Animal)
  - Car IS-A Vehicle (Car extends Vehicle)

✓ "HAS-A" relationship হলে Composition / Dependency Injection ব্যবহার করো:
  - Order HAS-A PaymentService (Order-এর কনস্ট্রাক্টরে PaymentService ইনজেক্ট করবেন, extends করবেন না!)`,
          code: `<?php
// IS-A (Inheritance):
class Vehicle {}
class Car extends Vehicle {} // Car is a Vehicle

// HAS-A (Composition):
class PaymentService {}
class Order {
    public function __construct(private PaymentService $payment) {} // Order has a PaymentService
}
echo "Rule: IS-A -> Inheritance | HAS-A -> Composition";
?>`,
          codeLanguage: 'Architectural Decision'
        },
        {
          title: '১১. Inheritance-এর সুবিধা',
          explanationBn: `✓ Code reuse: সাধারণ লজিক বারবার লেখার দরকার নেই।
✓ Common behavior এক জায়গায়: প্যারেন্টে পরিবর্তন করলে সব চাইল্ড পেয়ে যায়।
✓ Method overriding: চাইল্ড নিজের মতো আচরণ কাস্টমাইজ করতে পারে।
✓ Polymorphism-এর foundation: প্যারেন্ট টাইপের নিচে বিভিন্ন চাইল্ড চালানো যায়।
✓ Maintainability: কোড সুসংগঠিত থাকে।`,
          code: `<?php
echo "Benefits: Code reuse, single source of truth, polymorphism foundation, maintainability.";
?>`,
          codeLanguage: 'Design Benefits'
        },
        {
          title: '১২. Inheritance-এর অসুবিধা ও সতর্কতা',
          explanationBn: `অতিরিক্ত inheritance করলে সিস্টেমে জটিলতা তৈরি হয়:
❌ Class hierarchy অতিরিক্ত গভীর হলে কোড ট্রেস করা কঠিন হয়ে যায়।
❌ Parent-এর উপর tight coupling তৈরি হয়।
❌ প্যারেন্টে কোনো পরিবর্তন আনলে চাইল্ড ক্লাসে অপ্রত্যাশিত পার্শ্বপ্রতিক্রিয়া (unexpected side effect) তৈরি হতে পারে।
⭐ তাই শুধুমাত্র কোড রিইউজ করার জন্য অন্ধভাবে inheritance ব্যবহার করবেন না।`,
          code: `<?php
echo "Warning: Prefer composition over excessive multi-level inheritance.";
?>`,
          codeLanguage: 'Cautionary Advice'
        },
        {
          title: '১৩. ⭐ REAL-WORLD RULE & 🎯 MUST REMEMBER',
          explanationBn: `⭐ REAL-WORLD RULE:
Inheritance ব্যবহার করো: "IS-A" relationship হলে।
Composition ব্যবহার করো: "HAS-A" relationship হলে।

🎯 MUST REMEMBER:
• extends ➔ Inheritance
• Parent ➔ Base Class
• Child ➔ Derived Class
• parent:: ➔ Parent-এর method/constructor access
• Overriding ➔ Child parent-এর method নিজের implementation দিয়ে replace করে
• Access:
  - public    ➔ Child ✓
  - protected ➔ Child ✓
  - private   ➔ Child ❌

⭐ Inheritance-এর মূল উদ্দেশ্য শুধু code reuse নয়; related classes-এর common behavior এবং relationship properly model করা।`,
          code: `<?php
echo "extends = Inheritance | parent:: = Base Call | Override = Polymorphic Behavior";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'extends কীওয়ার্ড দিয়ে ইনহেরিটেন্স করা হয় (Child extends Parent)।',
        'প্যারেন্ট ক্লাসের public ও protected মেম্বার চাইল্ডে অ্যাক্সেসযোগ্য, কিন্তু private মেম্বার হয় না।',
        'parent:: দিয়ে প্যারেন্ট ক্লাসের মেথড বা কনস্ট্রাক্টর চাইল্ড থেকে কল করা যায়।',
        'Method Overriding দিয়ে চাইল্ড ক্লাস প্যারেন্টের মেথড প্রতিস্থাপন করে।',
        '⭐ আর্কিটেকচার রুল: "IS-A" হলে Inheritance, "HAS-A" হলে Composition / Dependency Injection।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: ই-কমার্স ডিসকাউন্ট ইনহেরিটেন্স ফ্রেমওয়ার্ক',
          descriptionBn: 'বেস ইউজারকে এক্সটেন্ড করে প্রিমিয়াম ও ভিআইপি ইউজারের ডিসকাউন্টেড প্রাইস মেথড ওভাররাইড।',
          code: `<?php
class Customer {
    public function __construct(public string $name) {}

    public function calculateDiscount(float $total): float {
        return 0.0; // সাধারণ ইউজারের কোনো ডিসকাউন্ট নেই
    }
}

class PremiumCustomer extends Customer {
    public function calculateDiscount(float $total): float {
        return $total * 0.10; // ১০% ডিসকাউন্ট
    }
}

class VipCustomer extends Customer {
    public function calculateDiscount(float $total): float {
        return $total * 0.20; // ২০% ডিসকাউন্ট
    }
}

$cust = new Customer("রাকিব");
$vip = new VipCustomer("তাহমিদ (VIP)");

$cartTotal = 5000.0;
echo $cust->name . " পায় ডিসকাউন্ট: ৳" . $cust->calculateDiscount($cartTotal) . "<br>";
echo $vip->name . " পায় ডিসকাউন্ট: ৳" . $vip->calculateDiscount($cartTotal);
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-constants',
    title: 'PHP OOP Constant',
    category: 'oop',
    tag: 'Class Constants',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Class Constant (const), Scope Resolution (::), self:: বনাম static:: (Late Static Binding) এবং Magic Strings পরিহার।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Class Constants & Scope Resolution Demo</h3>";

class User {
    // ১. Basic Class Constant
    public const ROLE = "user";
    protected const STATUS = "active";
    private const SECRET = "hidden";

    // Class-এর ভিতর থেকে self:: দিয়ে অ্যাক্সেস
    public function getRole(): string {
        return self::ROLE;
    }
}

// ২. Real-World Status Example: Magic String রোধ
class Order {
    public const PENDING = "pending";
    public const PAID = "paid";
    public const SHIPPED = "shipped";
    public const CANCELLED = "cancelled";

    public string $orderId;
    public string $status;

    public function __construct(string $orderId, string $status = self::PENDING) {
        $this->orderId = $orderId;
        $this->status = $status;
    }

    public function markAsPaid(): void {
        $this->status = self::PAID;
    }

    public function isPaid(): bool {
        // ❌ if ($this->status === "paid") এর বদলে কনস্ট্যান্ট ব্যবহার
        return $this->status === self::PAID;
    }
}

// ৩. Payment Method Constants
class Payment {
    public const BKASH = "bkash";
    public const CARD = "card";
    public const COD = "cod";
}

// ৪. self:: বনাম static:: (Late Static Binding)
class BaseUser {
    public const TYPE = "User";
    public function getTypeSelf() { return self::TYPE; }
    public function getTypeStatic() { return static::TYPE; }
}

class AdminUser extends BaseUser {
    public const TYPE = "Admin";
}

echo "<p style='margin:4px 0;'><b>1. Outside Access (::):</b> User::ROLE = " . User::ROLE . "</p>";

$order = new Order("ORD-99120");
$order->markAsPaid();
echo "<p style='margin:4px 0; color:#059669;'><b>2. Status Check:</b> Order #{$order->orderId} Paid? " . ($order->isPaid() ? "Yes (Matches Order::PAID)" : "No") . "</p>";

$method = Payment::BKASH;
if ($method === Payment::BKASH) {
    echo "<p style='margin:4px 0; color:#2563eb;'><b>3. Payment Constant:</b> Active method is bKash (" . Payment::BKASH . ")</p>";
}

$admin = new AdminUser();
echo "<p style='margin:4px 0; color:#d97706;'><b>4. Late Static Binding:</b> self:: = {$admin->getTypeSelf()} | static:: = {$admin->getTypeStatic()}</p>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `OOP-তে Class-এর ভিতরে constant define করা যায়। Class Constant হলো এমন fixed value যা সেই Class-এর সাথে logically related। Object property-এর মান প্রতিটি অবজেক্টে আলাদা হতে পারে, কিন্তু Class Constant পুরো ক্লাসের জন্য একটি অপরিবর্তনীয় ও শেয়ার্ড মান। এটি অ্যাক্সেস করতে অবজেক্ট তৈরির প্রয়োজন হয় না, Scope Resolution Operator (::) দিয়ে সরাসরি অ্যাক্সেস করা যায়।`,
      lessonSections: [
        {
          title: '১. Basic Class Constant',
          explanationBn: `const কীওয়ার্ড দিয়ে ক্লাসের কনস্ট্যান্ট তৈরি করা হয়। ক্লাসের বাইরে থেকে ClassName::CONSTANT সিনট্যাক্সে সরাসরি অ্যাক্সেস করা যায়।`,
          code: `<?php
class User
{
    public const ROLE = "user";
}

echo User::ROLE;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `user`
        },
        {
          title: '২. :: (Scope Resolution Operator) কেন?',
          explanationBn: `অপারেটরের পার্থক্য বুঝতে হবে:
• $user->name ➔ -> অপারেটর দিয়ে Object member (ইনস্ট্যান্সের প্রপার্টি/মেথড) অ্যাক্সেস হয়।
• User::ROLE  ➔ :: অপারেটর দিয়ে Class-level member (ক্লাস কনস্ট্যান্ট/স্ট্যাটিক মেথড) অ্যাক্সেস হয়।`,
          code: `<?php
class User {
    public string $name = "Abbad";
    public const ROLE = "user";
}

$user = new User();
echo $user->name . " -> Object member\n";
echo User::ROLE . " -> Class-level member\n";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad -> Object member\nuser -> Class-level member`
        },
        {
          title: '৩. Access Modifier অন Constant (PHP 7.1+)',
          explanationBn: `Class constant-এর visibility দেওয়া যায়:
• public: বাইরে থেকে ও চাইল্ড ক্লাস থেকে access করা যায়
• protected: শুধু একই Class এবং Child Class থেকে access করা যায়
• private: শুধু একই Class-এর ভেতর থেকে access করা যায়`,
          code: `<?php
class User
{
    public const ROLE = "user";
    protected const STATUS = "active";
    private const SECRET = "hidden";

    public function showSecret()
    {
        return self::SECRET;
    }
}

echo User::ROLE . "<br>";
// echo User::SECRET; // ❌ Fatal Error: Cannot access private const User::SECRET
echo (new User())->showSecret();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `user\nhidden`
        },
        {
          title: '৪. Constant-এর Value (কনফিগারেশন ও লিমিট)',
          explanationBn: `অ্যাপ্লিকেশনের বিভিন্ন ফিক্সড মান, ভার্সন ও কনফিগারেশন ক্লাস কনস্ট্যান্টে রাখা হয়।`,
          code: `<?php
class AppConfig
{
    public const APP_NAME = "MyShop";
    public const VERSION = "1.0";
    public const MAX_LOGIN = 5;
}

echo AppConfig::APP_NAME . " (v" . AppConfig::VERSION . ")\n";
echo "Max login attempts: " . AppConfig::MAX_LOGIN;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `MyShop (v1.0)\nMax login attempts: 5`
        },
        {
          title: '৫. Real-World Status Example ⭐⭐⭐ (Magic String পরিহার)',
          explanationBn: `কোডে সরাসরি "paid", "pending" ইত্যাদি Magic String লিখলে বানান ভুল হওয়ার ঝুঁকি থাকে এবং কোড মেইনটেইন করা অসম্ভব হয়ে পড়ে।
❌ খারাপ অভ্যাস: if ($status === "paid")
✓ সঠিক ও প্রফেশনাল: if ($status === Order::PAID)`,
          code: `<?php
class Order
{
    public const PENDING = "pending";
    public const PAID = "paid";
    public const SHIPPED = "shipped";
    public const CANCELLED = "cancelled";
}

$status = Order::PAID;

if ($status === Order::PAID) {
    echo "Payment Complete";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Payment Complete`
        },
        {
          title: '৬. Class-এর ভিতর থেকে Access (self::)',
          explanationBn: `ক্লাসের যেকোনো মেথডের ভেতর থেকে ক্লাসের নিজস্ব constant access করতে self::CONSTANT_NAME ব্যবহার করতে হয়।`,
          code: `<?php
class User
{
    public const ROLE = "user";

    public function getRole(): string
    {
        return self::ROLE;
    }
}

$user = new User();
echo $user->getRole();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `user`
        },
        {
          title: '৭. Parent Class Constant (parent::)',
          explanationBn: `Child Class থেকে Parent Class-এর constant এক্সেস করতে parent::CONSTANT_NAME ব্যবহার করা হয়।`,
          code: `<?php
class User
{
    public const TYPE = "user";
}

class Admin extends User
{
    public function getType()
    {
        return parent::TYPE;
    }
}

echo (new Admin())->getType();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `user`
        },
        {
          title: '৮. self:: বনাম static:: ⭐⭐⭐ (Late Static Binding)',
          explanationBn: `পার্থক্যটি অত্যন্ত গভীর ও গুরুত্বপূর্ণ:
• self:: ➔ যে Class-এ মেথডটি সংজ্ঞায়িত (লেখা) হয়েছে, হুবহু সেই Class-এর constant রেজলভ করে।
• static:: ➔ Late Static Binding ব্যবহার করে রানটাইমে যে ক্লাসের মাধ্যমে মেথডটি কল করা হয়েছে (Called Class), তার constant রেজলভ করতে পারে।`,
          code: `<?php
class User
{
    public const TYPE = "User";

    public function getSelf()
    {
        return self::TYPE; // সর্বদা User রিটার্ন করবে
    }

    public function getStatic()
    {
        return static::TYPE; // চাইল্ড ক্লাস ওভাররাইড করলে চাইল্ডেরটি নিবে
    }
}

class Admin extends User
{
    public const TYPE = "Admin";
}

$admin = new Admin();
echo "self:: gives: " . $admin->getSelf() . "\n";
echo "static:: gives: " . $admin->getStatic();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `self:: gives: User\nstatic:: gives: Admin`
        },
        {
          title: '৯. PHP 8.1+ Enum-এর সাথে সম্পর্ক',
          explanationBn: `Fixed states ও status-এর জন্য আধুনিক PHP 8.1+ এ enum অনেক ক্ষেত্রে Class Constant-এর চেয়েও শক্তিশালী ও Type-safe বিকল্প হিসেবে কাজ করে।
এটি এখনই মুখস্থ করার প্রয়োজন নেই; OOP-এর বেসিক শেষ করে Enum অনায়াসেই আয়ত্ত করা যাবে।`,
          code: `<?php
// PHP 8.1+ Enum উদাহরণ:
enum OrderStatus: string
{
    case PENDING = "pending";
    case PAID = "paid";
    case SHIPPED = "shipped";
}

echo "Enum is a modern type-safe evolution for status constants.";
?>`,
          codeLanguage: 'Modern Evolution'
        },
        {
          title: '১০. Class Constant বনাম Object Property তুলনা',
          explanationBn: `• Object Property:
  - $user->name
  - প্রতিটি Object-এর মান আলাদা হতে পারে (যেমন: একজনের নাম Abbad, আরেকজনের নাম Karim)।
• Class Constant:
  - User::ROLE
  - পুরো ক্লাসের সকল অবজেক্টের জন্য একটি একক অপরিবর্তনীয় fixed মান।`,
          code: `<?php
class User {
    public string $name;
    public const SPECIES = "Homo Sapiens";
}

$u1 = new User(); $u1->name = "Abbad";
$u2 = new User(); $u2->name = "Karim";

echo "$u1->name and $u2->name both belong to " . User::SPECIES;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad and Karim both belong to Homo Sapiens`
        },
        {
          title: '১১. Real-World Example (Payment Methods)',
          explanationBn: `Payment Gateway সিলেক্ট করার ক্ষেত্রে ফিক্সড স্ট্রিং কনস্ট্যান্ট এক জায়গায় রাখলে সহজে ম্যানেজ করা যায় এবং বানান ভুলের সম্ভাবনা ০% থাকে।`,
          code: `<?php
class Payment
{
    public const BKASH = "bkash";
    public const CARD = "card";
    public const COD = "cod";
}

$method = Payment::BKASH;

if ($method === Payment::BKASH) {
    echo "bKash Payment";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `bKash Payment`
        },
        {
          title: '১২. ⭐ REAL-WORLD USE CASES & 🎯 MUST REMEMBER',
          explanationBn: `⭐ REAL-WORLD-এ কোথায় ব্যবহার হবে?
✓ Order / Ticket / Account Status (PENDING, ACTIVE, CLOSED)
✓ Roles & Permissions (ADMIN, EDITOR, SUBSCRIBER)
✓ Payment Gateways (BKASH, NAGAD, STRIPE, COD)
✓ System Limits ও App Config (MAX_UPLOAD_SIZE, API_VERSION)
✓ Business calculation rates (VAT_PERCENTAGE, FLAT_DISCOUNT)
✓ Error / Event identifiers

🎯 MUST REMEMBER:
• Class Constant: class User { public const ROLE = "user"; }
• Outside access: User::ROLE
• Inside current class: self::ROLE
• Parent class: parent::ROLE
• Late Static Binding: static::ROLE
• Object property: $user->name vs Class constant: User::ROLE
• Magic Strings পরিহার করুন (Better: if ($status === Order::PAID))। এতে কোড readable, consistent এবং maintainable হয়।`,
          code: `<?php
echo "Class Constant = Fixed, shared, compile-time verified domain values.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'const কীওয়ার্ড দিয়ে ক্লাস কনস্ট্যান্ট ডিফাইন করা হয়, নামের আগে $ বসে না।',
        'ক্লাসের বাইরে থেকে ClassName::CONST এবং ক্লাসের ভেতর থেকে self::CONST দিয়ে অ্যাক্সেস করা হয়।',
        'ম্যাজিক স্ট্রিং (Magic Strings) পরিহার করে বাগ প্রতিরোধে Class Constants অপরিহার্য।',
        'static::CONST লেট স্ট্যাটিক বাইন্ডিংয়ের মাধ্যমে রানটাইমে কল করা সাব-ক্লাসের কনস্ট্যান্ট রেজলভ করে।',
        'PHP 7.1+ এ কনস্ট্যান্টের সামনে public, protected, private এক্সেস মডিফায়ার ব্যবহার করা যায়।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: ই-কমার্স ইনভয়েস স্ট্যাটাস মেশিন',
          descriptionBn: 'ক্লাস কনস্ট্যান্ট ব্যবহার করে অর্ডার স্ট্যাটাস ট্রানজিশন যাচাইকরণ।',
          code: `<?php
class OrderStateMachine {
    public const STATUS_PENDING = "pending";
    public const STATUS_PAID = "paid";
    public const STATUS_DISPATCHED = "dispatched";
    public const STATUS_DELIVERED = "delivered";

    public static function canCancel(string $currentStatus): bool {
        // শুধুমাত্র pending থাকলে ক্যানসেল করা যাবে
        return $currentStatus === self::STATUS_PENDING;
    }
}

$status = OrderStateMachine::STATUS_PAID;
echo "Can cancel order? " . (OrderStateMachine::canCancel($status) ? "Yes" : "No, order is already paid/processing");
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-abstract-classes',
    title: 'PHP Abstract Classes',
    category: 'oop',
    tag: 'Abstraction',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'abstract class, abstract method, Child Class implementation, Common Structure + Required Behavior, এবং Interface বনাম Abstract Class পার্থক্য।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Abstract Class Architecture Live Demo</h3>";

// ১. Abstract Base Class
abstract class Payment {
    // Normal Method (Common behavior)
    public function log(): string {
        return "Payment Started";
    }

    // Abstract Method: সিগনেচার থাকবে, বডি থাকবে না
    abstract public function pay(float $amount): bool;
}

// ২. Child Class implement করছে abstract method
class BkashPayment extends Payment {
    public function pay(float $amount): bool {
        echo "<p style='margin:3px 0; color:#059669;'>✓ bKash Payment: ৳" . number_format($amount, 2) . " successfully processed.</p>";
        return true;
    }
}

class CardPayment extends Payment {
    public function pay(float $amount): bool {
        echo "<p style='margin:3px 0; color:#2563eb;'>✓ Card Payment: ৳" . number_format($amount, 2) . " charged via VISA gateway.</p>";
        return true;
    }
}

// ৩. Abstract Class with Constructor & Property
abstract class User {
    public function __construct(
        protected string $name
    ) {}

    abstract public function role(): string;

    public function getName(): string {
        return $this->name;
    }
}

class Admin extends User {
    public function role(): string {
        return "System Super Administrator";
    }
}

// ❌ $p = new Payment(); // Fatal Error: Cannot instantiate abstract class

$bkash = new BkashPayment();
echo "<p style='margin:4px 0; color:#475569;'><b>1. Bkash Payment:</b> " . $bkash->log() . "</p>";
$bkash->pay(1000);

$card = new CardPayment();
echo "<p style='margin:4px 0; color:#475569;'><b>2. Card Payment:</b> " . $card->log() . "</p>";
$card->pay(3500);

$admin = new Admin("Abbad");
echo "<p style='margin:4px 0; color:#7c3aed;'><b>3. User Role:</b> {$admin->getName()} is {$admin->role()}</p>";

echo "<p style='margin:6px 0 0 0; font-size:13px; color:#dc2626;'>Note: new Payment() is blocked by PHP compiler because abstract classes cannot be directly instantiated.</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `abstract class হলো এমন একটি Class যেটাকে সরাসরি Object হিসেবে তৈরি করা যায় না।
এর মূল উদ্দেশ্য হলো:
Common structure + common behavior define করা, যা Child Class-গুলো follow করবে।

⭐ সবচেয়ে সহজভাবে:
Abstract Class বলে: "এই ধরনের সব Class-এর মধ্যে এই common জিনিসগুলো থাকবে, আর এই কাজটা অবশ্যই implement করতে হবে।"`,
      lessonSections: [
        {
          title: '১. Basic Abstract Class (সরাসরি Object তৈরি নিষিদ্ধ)',
          explanationBn: `abstract class হলো এমন একটি Class যার সরাসরি অবজেক্ট তৈরি করা যায় না।

abstract class Payment
{
    public function log()
    {
        return "Payment Started";
    }
}

❌ এটা করা যাবে না:
$payment = new Payment(); // Fatal Error!

কারণ Abstract Class-এর সরাসরি Object তৈরি করা নিষিদ্ধ। এটি কেবল অন্য চাইল্ড ক্লাসের বেস ক্লাস হিসেবে কাজ করবে।`,
          code: `<?php
abstract class Payment
{
    public function log()
    {
        return "Payment Started";
    }
}

// $payment = new Payment(); // ❌ Fatal error: Cannot instantiate abstract class Payment
echo "Abstract class defined. Object cannot be created directly.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abstract class defined. Object cannot be created directly.`
        },
        {
          title: '২. Abstract Method ⭐⭐⭐',
          explanationBn: `Abstract Class-এর ভিতরে abstract method থাকতে পারে।
abstract মেথডের কোনো বডি বা কার্লি ব্র্যাকেট { } থাকে না; কেবল সিগনেচার ডিক্লেয়ার করা হয় এবং শেষে সেমিকোলন (;) থাকে।

abstract class Payment
{
    abstract public function pay(float $amount): bool;
}

এখানে pay()-এর implementation দেওয়া হয়নি।
Child Class-কে এটি implement করতে হবে।`,
          code: `<?php
abstract class Payment
{
    // শুধু সিগনেচার, কোনো বডি নেই
    abstract public function pay(float $amount): bool;
}

echo "Abstract method pay() declared without body.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abstract method pay() declared without body.`
        },
        {
          title: '৩. Child Class Implementation',
          explanationBn: `Child Class extends করে প্যারেন্টের সমস্ত abstract method নিজের ভেতরে বডি দিয়ে বাস্তবায়ন (implement) করে।`,
          code: `<?php
abstract class Payment
{
    abstract public function pay(float $amount): bool;
}

class BkashPayment extends Payment
{
    public function pay(float $amount): bool
    {
        echo "Payment successful via bKash: ৳$amount\n";
        return true;
    }
}

$payment = new BkashPayment();
$payment->pay(1000);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Payment successful via bKash: ৳1000`
        },
        {
          title: '৪. কেন Abstract Method দরকার? (Common Contract, Unique Implementation)',
          explanationBn: `ধরো সব Payment system-এর pay() method অবশ্যই থাকতে হবে।
কিন্তু:
• bKash কীভাবে pay করবে? (PIN / OTP API)
• Card কীভাবে pay করবে? (CVV / 3D Secure API)
• Nagad কীভাবে pay করবে?

Implementation সবার আলাদা হবে।
তাই Parent বলে:
"প্রতিটি Payment class-এ pay() method অবশ্যই থাকতে হবে।"
কিন্তু কীভাবে কাজ করবে সেটা Child ঠিক করবে।`,
          code: `<?php
abstract class Payment
{
    abstract public function pay(float $amount): bool;
}

class NagadPayment extends Payment
{
    public function pay(float $amount): bool
    {
        echo "Nagad Payment logic executed for ৳$amount\n";
        return true;
    }
}

$nagad = new NagadPayment();
$nagad->pay(500);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Nagad Payment logic executed for ৳500`
        },
        {
          title: '৫. Abstract Class-এ Normal Method-ও থাকতে পারে',
          explanationBn: `Abstract Class-এ শুধুমাত্র abstract মেথডই নয়, সাধারণ মেথডও থাকতে পারে যা সমস্ত চাইল্ড ক্লাসে রিইউজ হবে।

অর্থাৎ Abstract Class-এ:
✓ Abstract Method
✓ Normal Method
✓ Property
✓ Constant
সবই থাকতে পারে।`,
          code: `<?php
abstract class Payment
{
    abstract public function pay(float $amount): bool;

    public function log()
    {
        return "Payment Processing";
    }
}

class CardPayment extends Payment
{
    public function pay(float $amount): bool
    {
        return true;
    }
}

$card = new CardPayment();
echo $card->log() . "<br>";
echo "Paid: " . ($card->pay(500) ? "Yes" : "No");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Payment Processing<br>Paid: Yes`
        },
        {
          title: '৬. Abstract Property ও Normal Property',
          explanationBn: `Traditional PHP-তে সরাসরি "abstract public string $name;" এর মতো abstract property declare করা যায় না।
তবে Abstract Class-এ normal এবং protected property খুব স্বাভাবিকভাবেই রাখা যায় যা চাইল্ড ক্লাসে উত্তরাধিকারসূত্রে পাওয়া যায়।`,
          code: `<?php
abstract class User
{
    protected string $name;
    public string $status = "active";
}

class Member extends User
{
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }
}

$m = new Member();
$m->setName("Abbad");
echo $m->getName() . " (" . $m->status . ")";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad (active)`
        },
        {
          title: '৭. Abstract Class + Constructor (__construct)',
          explanationBn: `Abstract Class-এ Constructor থাকতে পারে। চাইল্ড ক্লাস তৈরি হওয়ার সময় parent::__construct() কলের মাধ্যমে প্যারেন্টের প্রপার্টি ইনিশিয়ালাইজ করা যায়।`,
          code: `<?php
abstract class User
{
    public function __construct(
        protected string $name
    ) {}

    abstract public function role(): string;

    public function getName(): string
    {
        return $this->name;
    }
}

class Admin extends User
{
    public function role(): string
    {
        return "Admin";
    }
}

$admin = new Admin("Abbad");
echo $admin->getName() . " -> " . $admin->role();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad -> Admin`
        },
        {
          title: '৮. Method Must Implement (বাধ্যতামূলক নিয়ম)',
          explanationBn: `Child Class-কে abstract method implement করতেই হবে, যদি Child নিজেও abstract না হয়।
না লিখলে PHP Fatal Error দেবে: "Class ... contains 1 abstract method and must therefore be declared abstract or implement the remaining methods."`,
          code: `<?php
abstract class Payment
{
    abstract public function pay(float $amount): bool;
}

// class IncompletePayment extends Payment {
//     // ❌ Fatal Error: pay() method implement করা হয়নি!
// }

class CompletePayment extends Payment
{
    public function pay(float $amount): bool
    {
        return true;
    }
}

echo "CompletePayment successfully implemented pay()!";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `CompletePayment successfully implemented pay()!`
        },
        {
          title: '৯. Abstract Child Class (অ্যাবস্ট্রাক্ট চাইল্ড ক্লাস)',
          explanationBn: `একটি Abstract Class-এর Child-ও Abstract হতে পারে। সেক্ষেত্রে সেই চাইল্ডকে প্যারেন্টের মেথড তক্ষনি implement করতে হয় না; তার নিচের কংক্রিট চাইল্ড ক্লাসটিকে মেথডটি implement করতে হয়।`,
          code: `<?php
abstract class Payment
{
    abstract public function pay(float $amount): bool;
}

abstract class OnlinePayment extends Payment
{
    // নিজেও abstract, তাই pay() implement না করলেও চলবে
    abstract public function verifyOtp(string $otp): bool;
}

class BkashPayment extends OnlinePayment
{
    public function pay(float $amount): bool
    {
        return true;
    }

    public function verifyOtp(string $otp): bool
    {
        return $otp === "1234";
    }
}

$b = new BkashPayment();
echo "Pay: " . ($b->pay(200) ? "OK" : "Fail") . " | OTP: " . ($b->verifyOtp("1234") ? "Valid" : "Invalid");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Pay: OK | OTP: Valid`
        },
        {
          title: '১০. Real-World Example ⭐⭐⭐: Notification Architecture',
          explanationBn: `এখানে:
Notification (Abstract Base)
     ↓
EmailNotification
SmsNotification

সব Notification-এর log() মেথড কমন, কিন্তু send() মেথডের implementation আলাদা।`,
          code: `<?php
abstract class Notification
{
    public function log(string $message): void
    {
        echo "[LOG " . date('H:i') . "] $message<br>";
    }

    abstract public function send(string $message): bool;
}

class EmailNotification extends Notification
{
    public function send(string $message): bool
    {
        $this->log("Email queued: $message");
        echo "✓ Sending Email via SMTP server...<br>";
        return true;
    }
}

class SmsNotification extends Notification
{
    public function send(string $message): bool
    {
        $this->log("SMS queued: $message");
        echo "✓ Sending SMS via Telco API gateway...<br>";
        return true;
    }
}

$email = new EmailNotification();
$email->send("Your OTP is 9876");

$sms = new SmsNotification();
$sms->send("Welcome to our platform");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `[LOG 03:22] Email queued: Your OTP is 9876<br>✓ Sending Email via SMTP server...<br>[LOG 03:22] SMS queued: Welcome to our platform<br>✓ Sending SMS via Telco API gateway...`
        },
        {
          title: '১১. Abstract Class বনাম Normal Class',
          explanationBn: `• Normal Class:
  class User {}
  $user = new User(); // ✓ Object তৈরি করা যায়।

• Abstract Class:
  abstract class User {}
  $user = new User(); // ❌ Object তৈরি করা যায় না।

Abstract Class মূলত Parent/Base Class হিসেবে ব্যবহারের জন্য।`,
          code: `<?php
class RegularUser {}
$reg = new RegularUser(); // ✓ Perfectly valid

abstract class BaseUser {}
// $base = new BaseUser(); // ❌ Fatal error!
echo "Regular class can be instantiated. Abstract class cannot.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Regular class can be instantiated. Abstract class cannot.`
        },
        {
          title: '১২. Abstract Class বনাম Interface ⭐⭐⭐',
          explanationBn: `Abstract Class:
✓ Normal method থাকতে পারে
✓ Abstract method থাকতে পারে
✓ Property থাকতে পারে
✓ Constructor থাকতে পারে
✓ State রাখতে পারে
✓ extends করা হয় (একক ইনহেরিটেন্স)

Interface:
✓ Pure Contract define করে
✓ Class implements করে
✓ Multiple interface implement করা যায়
✓ কোনো State বা Property থাকতে পারে না

সহজভাবে:
• Abstract Class → "কিছু common implementation + কিছু বাধ্যতামূলক behavior"
• Interface → "কী কী method থাকতে হবে তার contract"`,
          code: `<?php
echo "Abstract Class = Common Code + Required Behavior (extends)\n";
echo "Interface      = Pure Contract (implements, multiple allowed)\n";
?>`,
          codeLanguage: 'Architecture Comparison'
        },
        {
          title: '১৩. কখন Abstract Class ব্যবহার করবে এবং কখন করবে না?',
          explanationBn: `✓ কখন Abstract Class ব্যবহার করবে?
যখন কয়েকটি related Class-এর:
- Common behavior আছে
- Common state/data আছে
- একই base concept আছে
- কিছু method অবশ্যই implement করাতে হবে
(Example: Payment → BkashPayment, CardPayment, CashPayment)

❌ কখন Abstract Class ব্যবহার করবে না?
শুধু একটি method বাধ্যতামূলক করতে চাইলে Abstract Class সবসময় দরকার নেই। যদি শুধু contract দরকার হয়:
interface Payment { public function pay(float $amount): bool; }
এক্ষেত্রে Interface বেশি suitable হতে পারে।`,
          code: `<?php
echo "Rule of Thumb: Shared code/state + contract -> Abstract Class | Only pure contract -> Interface";
?>`,
          codeLanguage: 'Decision Framework'
        },
        {
          title: '১৪. 🎯 MUST REMEMBER',
          explanationBn: `🎯 MUST REMEMBER:
• abstract class → সরাসরি Object তৈরি করা যায় না।
• abstract method → Body থাকে না।
• Child Class → Abstract method implement করতে হয়।

Abstract Class-এ থাকতে পারে:
✓ Properties
✓ Constructor
✓ Normal Methods
✓ Abstract Methods
✓ Constants

মূল ধারণা:
Abstract Class
      ↓
Common Structure + Required Behavior
      ↓
Child Classes
      ↓
নিজেদের implementation

⭐ সবচেয়ে সহজভাবে:
Abstract Class বলে:
"এই ধরনের সব Class-এর মধ্যে এই common জিনিসগুলো থাকবে, আর এই কাজটা অবশ্যই implement করতে হবে।"`,
          code: `<?php
echo "Abstract Class: Blueprint with both common shared logic and mandatory abstract methods.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'abstract class-এর সরাসরি Object তৈরি করা যায় না ($p = new Payment() ❌)।',
        'abstract method-এর কোনো বডি থাকে না, চাইল্ড ক্লাসকে অবশ্যই তা implement করতে হয়।',
        'Abstract ক্লাসে কনস্ট্রাক্টর, প্রোপার্টি, কনস্ট্যান্ট এবং কংক্রিট (নরমাল) মেথডও থাকতে পারে।',
        'চাইল্ড ক্লাস নিজে abstract না হলে প্যারেন্টের সমস্ত abstract মেথড বাস্তবায়ন বাধ্যতামূলক।',
        'Common implementation + Required behavior নিশ্চিত করতে Abstract Class আদর্শ।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: ক্লাউড ও লোকাল স্টোরেজ ড্রাইভার',
          descriptionBn: 'Abstract FileStorage ক্লাস তৈরি করে লোকাল ডিস্ক ও S3 ক্লাউড ফাইল স্টোরেজ বাস্তবায়ন।',
          code: `<?php
abstract class StorageDriver {
    public function __construct(protected string $basePath) {}

    // কমন মেথড
    public function sanitizeFilename(string $filename): string {
        return preg_replace('/[^a-zA-Z0-9._-]/', '', $filename);
    }

    // অ্যাবস্ট্রাক্ট মেথড
    abstract public function save(string $filename, string $content): bool;
    abstract public function getUrl(string $filename): string;
}

class LocalDiskStorage extends StorageDriver {
    public function save(string $filename, string $content): bool {
        $clean = $this->sanitizeFilename($filename);
        echo "Saving to local disk: {$this->basePath}/$clean<br>";
        return true;
    }

    public function getUrl(string $filename): string {
        return "https://mywebsite.com/storage/" . $this->sanitizeFilename($filename);
    }
}

$local = new LocalDiskStorage("/var/www/uploads");
$local->save("user-avatar.png", "binary_data");
echo "File URL: " . $local->getUrl("user-avatar.png");
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-interfaces',
    title: 'PHP Interfaces',
    category: 'oop',
    tag: 'Contracts & Decoupling',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'interface, implements কীওয়ার্ড, Multiple Interface, Visibility রুল, Polymorphism এবং Dependency Injection-এ Interface-এর ভূমিকা।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Interface & Polymorphism Live Demo</h3>";

// ১. প্রথম ইন্টারফেস চুক্তি (Contract)
interface PaymentGateway {
    public const TYPE = "online";
    public function pay(float $amount): bool;
}

// ২. দ্বিতীয় ইন্টারফেস চুক্তি
interface Refundable {
    public function refund(float $amount): bool;
}

// ৩. Multiple Interface Implementation (implements A, B)
class BkashGateway implements PaymentGateway, Refundable {
    public function pay(float $amount): bool {
        echo "<p style='margin:3px 0; color:#059669;'>✓ bKash PGW: ৳" . number_format($amount, 2) . " paid successfully.</p>";
        return true;
    }

    public function refund(float $amount): bool {
        echo "<p style='margin:3px 0; color:#d97706;'>✓ bKash PGW: ৳" . number_format($amount, 2) . " refunded.</p>";
        return true;
    }
}

class CardGateway implements PaymentGateway {
    public function pay(float $amount): bool {
        echo "<p style='margin:3px 0; color:#2563eb;'>✓ Card PGW: ৳" . number_format($amount, 2) . " paid via Visa/MasterCard.</p>";
        return true;
    }
}

// ৪. Polymorphism ও Type Hinting: নির্দিষ্ট গেটওয়ের উপর নির্ভর না করে ইন্টারফেসে কোড করা
function processCheckout(PaymentGateway $gateway, float $amount) {
    echo "<p style='margin:2px 0; color:#475569;'>Processing checkout via <b>" . get_class($gateway) . "</b> (Type: " . PaymentGateway::TYPE . ")...</p>";
    return $gateway->pay($amount);
}

$bkash = new BkashGateway();
$card = new CardGateway();

processCheckout($bkash, 2500);
$bkash->refund(500);

processCheckout($card, 6000);

echo "<p style='margin:6px 0 0 0; font-size:13px; color:#64748b;'>Interface Contract: Application only depends on PaymentGateway interface, making code loosely coupled!</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Interface হলো একটি contract বা rule-set।
একটি Class যদি Interface implements করে, তাহলে Interface-এ declare করা required methods সেই Class-এ implement করতে হবে।

সহজভাবে:
• Interface = "কী কী করতে হবে" (Contract)
• Class = "কীভাবে করতে হবে" (Implementation)

Interface-এর সরাসরি Object তৈরি করা যায় না। Interface implement করা Class-এর Object তৈরি করতে হয়।`,
      lessonSections: [
        {
          title: '১. Basic Interface (Contract তৈরি)',
          explanationBn: `interface কীওয়ার্ড দিয়ে ইন্টারফেস তৈরি করা হয়। মেথডের কেবল নাম, প্যারামিটার ও রিটার্ন টাইপ থাকে, কোনো বডি থাকে না।

interface Payment
{
    public function pay(float $amount): bool;
}

এখানে pay() শুধু declare করা হয়েছে। কীভাবে payment হবে সেটা বলা হয়নি।`,
          code: `<?php
interface Payment
{
    public function pay(float $amount): bool;
}

echo "Interface Payment declared successfully.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Interface Payment declared successfully.`
        },
        {
          title: '২. implements কীওয়ার্ড ⭐⭐⭐',
          explanationBn: `implements কীওয়ার্ড ব্যবহার করে Class ইন্টারফেসের নিয়মাবলি অনুসরণ করে এবং ইন্টারফেসে উল্লেখিত সমস্ত মেথড বাস্তবায়ন করে।`,
          code: `<?php
interface Payment
{
    public function pay(float $amount): bool;
}

class BkashPayment implements Payment
{
    public function pay(float $amount): bool
    {
        return true;
    }
}

$payment = new BkashPayment();
$result = $payment->pay(1000);
echo "Payment status: " . ($result ? "Success" : "Failed");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Payment status: Success`
        },
        {
          title: '৩. Method Implement না করলে Fatal Error',
          explanationBn: `ইন্টারফেসে ডিক্লেয়ার করা যেকোনো মেথড যদি ক্লাসে implement না করা হয়, তবে PHP সাথে সাথে Fatal Error দেবে।`,
          code: `<?php
interface Payment
{
    public function pay(float $amount): bool;
}

// class BrokenPayment implements Payment {
//     // ❌ Fatal Error: Class BrokenPayment contains 1 abstract method and must implement pay()
// }

echo "Rule: Every interface method must be implemented by the concrete class.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Rule: Every interface method must be implemented by the concrete class.`
        },
        {
          title: '৪. Multiple Interface ⭐⭐⭐ (একাধিক ইন্টারফেস বাস্তবায়ন)',
          explanationBn: `PHP-তে একটি ক্লাস একাধিক ক্লাস extends করতে পারে না (PHP Single Inheritance)।
কিন্তু একটি Class কমা (,) দিয়ে পৃথক করে একাধিক Interface implement করতে পারে! এটি Interface-এর সবচেয়ে বড় সুবিধা।`,
          code: `<?php
interface Payment
{
    public function pay(float $amount): bool;
}

interface Refundable
{
    public function refund(float $amount): bool;
}

class BkashPayment implements Payment, Refundable
{
    public function pay(float $amount): bool
    {
        echo "bKash Paid ৳$amount<br>";
        return true;
    }

    public function refund(float $amount): bool
    {
        echo "bKash Refunded ৳$amount<br>";
        return true;
    }
}

$p = new BkashPayment();
$p->pay(1200);
$p->refund(200);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `bKash Paid ৳1200<br>bKash Refunded ৳200`
        },
        {
          title: '৫. Interface-এ Method Visibility (সর্বদা public)',
          explanationBn: `Interface-এর মেথড সাধারণত public হয়।
Class-এ implement করার সময় visibility কমানো যাবে না (❌ private বা ❌ protected করা নিষিদ্ধ)। সাধারণত public রাখতে হবে।`,
          code: `<?php
interface UserContract
{
    public function login(): bool;
}

class RegularUser implements UserContract
{
    // ❌ protected বা private দিলে Fatal Error হবে!
    public function login(): bool
    {
        return true;
    }
}

$u = new RegularUser();
echo "Login method must be public: " . ($u->login() ? "Yes" : "No");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Login method must be public: Yes`
        },
        {
          title: '৬. Interface Constant',
          explanationBn: `Interface-এর মধ্যে প্রোপার্টি রাখা যায় না, তবে Constant রাখা যায়। এই কনস্ট্যান্ট InterfaceName::CONSTANT দিয়ে সরাসরি অ্যাক্সেসযোগ্য।`,
          code: `<?php
interface Payment
{
    public const TYPE = "online";

    public function pay(float $amount): bool;
}

echo "Payment Type: " . Payment::TYPE;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Payment Type: online`
        },
        {
          title: '৭. Interface Object তৈরি করা যায়?',
          explanationBn: `❌ না। Interface-এর সরাসরি কোনো Object তৈরি করা যায় না।
interface Payment { public function pay(float $amount): bool; }
$payment = new Payment(); // ❌ Fatal Error: Cannot instantiate interface Payment

সর্বদা Interface implement করা Class-এর Object তৈরি করতে হয়।`,
          code: `<?php
interface Payment {
    public function pay(float $amount): bool;
}
// $p = new Payment(); // ❌ Cannot instantiate interface
echo "Interfaces cannot be directly instantiated.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Interfaces cannot be directly instantiated.`
        },
        {
          title: '৮. Real-World Example ⭐⭐⭐: PaymentGateway Architecture',
          explanationBn: `এখানে application শুধু contract জানে: PaymentGateway। কোন নির্দিষ্ট gateway (bKash নাকি Card) ব্যবহার হচ্ছে সেটা implementation-এর বিষয়। ক্লায়েন্ট কোড কোনো নির্দিষ্ট কোম্পানির কোডের সাথে কাপল্ড নয়।`,
          code: `<?php
interface PaymentGateway
{
    public function pay(float $amount): bool;
}

class BkashGateway implements PaymentGateway
{
    public function pay(float $amount): bool
    {
        echo "bKash API Request sent for ৳$amount<br>";
        return true;
    }
}

class CardGateway implements PaymentGateway
{
    public function pay(float $amount): bool
    {
        echo "Card API Payment Gateway charged ৳$amount<br>";
        return true;
    }
}

$gateways = [new BkashGateway(), new CardGateway()];
foreach ($gateways as $gw) {
    $gw->pay(1500);
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `bKash API Request sent for ৳1500<br>Card API Payment Gateway charged ৳1500`
        },
        {
          title: '৯. Polymorphism-এর সাথে Interface',
          explanationBn: `একই function বা method ইন্টারফেস টাইপহিন্ট গ্রহণ করে বিভিন্ন ভিন্ন ভিন্ন ক্লাসের অবজেক্ট দিয়ে স্বচ্ছন্দে চলতে পারে। এটাই Polymorphism-এর practical use।`,
          code: `<?php
interface Payment
{
    public function pay(float $amount): bool;
}

class BkashPayment implements Payment
{
    public function pay(float $amount): bool
    {
        echo "Paid ৳$amount via bKash\n";
        return true;
    }
}

class CardPayment implements Payment
{
    public function pay(float $amount): bool
    {
        echo "Paid ৳$amount via Credit Card\n";
        return true;
    }
}

function processPayment(Payment $payment, float $amount): bool
{
    return $payment->pay($amount);
}

processPayment(new BkashPayment(), 1000);
processPayment(new CardPayment(), 1000);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Paid ৳1000 via bKash\nPaid ৳1000 via Credit Card`
        },
        {
          title: '১০. Interface বনাম Abstract Class ⭐⭐⭐',
          explanationBn: `Interface:
interface Payment {
    public function pay(float $amount): bool;
}

Abstract Class:
abstract class Payment {
    abstract public function pay(float $amount): bool;
    public function log(): void {
        // common logic
    }
}

মূল পার্থক্য:
• Interface → Pure Contract (শুধু কী করতে হবে)
• Abstract Class → Contract + Common Implementation (কী করতে হবে + সাধারণ কোড)`,
          code: `<?php
echo "Interface: 100% Contract, no state, multiple implementation.\n";
echo "Abstract Class: Partial contract + shared code & properties, single inheritance.\n";
?>`,
          codeLanguage: 'Comparison'
        },
        {
          title: '১১. Multiple Inheritance-এর Solution',
          explanationBn: `PHP-তে একটি Class একাধিক Class extends করতে পারে না:
❌ class C extends A, B

কিন্তু multiple Interface implement করা যায়:
✓ class C implements A, B

এর মাধ্যমে মাল্টিপল ইনহেরিটেন্সের সুবিধা কোনো হায়ারার্কি কনফ্লিক্ট ছাড়া অর্জন করা যায়।`,
          code: `<?php
interface A { public function a(); }
interface B { public function b(); }

class C implements A, B {
    public function a() { echo "A "; }
    public function b() { echo "B"; }
}

$c = new C();
$c->a();
$c->b();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `A B`
        },
        {
          title: '১২. Interface extends Interface (ইন্টারফেসের উত্তরাধিকার)',
          explanationBn: `একটি Interface অন্য এক বা একাধিক Interface-কে extend করতে পারে। চাইল্ড ইন্টারফেসকে ইমপ্লিমেন্ট করা ক্লাসকে প্যারেন্ট ও চাইল্ড উভয়ের মেথড বাস্তবায়ন করতে হয়।`,
          code: `<?php
interface Payment
{
    public function pay(float $amount): bool;
}

interface RefundablePayment extends Payment
{
    public function refund(float $amount): bool;
}

class BkashPayment implements RefundablePayment
{
    public function pay(float $amount): bool
    {
        return true;
    }

    public function refund(float $amount): bool
    {
        return true;
    }
}

$p = new BkashPayment();
echo "Both pay() and refund() implemented.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Both pay() and refund() implemented.`
        },
        {
          title: '১৩. Type Hinting-এ Interface ⭐⭐⭐ (Loose Coupling)',
          explanationBn: `function checkout(PaymentGateway $gateway) {
    return $gateway->pay(1000);
}

এখানে function কোনো specific BkashGateway বা CardGateway চায় না।
এটি শুধু বলে: "যে Class PaymentGateway contract follow করে, সেটা দিলেই হবে।"
এতে code loosely coupled হয় এবং ভবিষ্যৎ এক্সটেনশন অত্যন্ত সহজ হয়।`,
          code: `<?php
interface PaymentGateway {
    public function pay(float $amount): bool;
}

class StripeGateway implements PaymentGateway {
    public function pay(float $amount): bool {
        return true;
    }
}

function checkout(PaymentGateway $gateway) {
    return $gateway->pay(1000);
}

echo "Checkout result: " . (checkout(new StripeGateway()) ? "Success" : "Fail");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Checkout result: Success`
        },
        {
          title: '১৪. ⭐ REAL-WORLD-এ কোথায় Interface ব্যবহার হয়?',
          explanationBn: `রিয়েল ওয়ার্ল্ড এবং লারাভেল অ্যাপ্লিকেশনে Interface অপরিহার্য:
✓ Payment Gateway
✓ Notification
✓ File Storage
✓ Cache
✓ Logger
✓ Email Service
✓ API Service
✓ Repository
✓ Authentication
✓ External Service Integration

Laravel project-এ Interface + Dependency Injection সবচেয়ে জনপ্রিয় ও শক্তিশালী আর্কিটেকচারাল প্যাটার্ন।`,
          code: `<?php
echo "Used in: Payment, Notification, FileStorage, Cache, Logger, Mailer, Repository Pattern.";
?>`,
          codeLanguage: 'Architecture List'
        },
        {
          title: '১৫. 🎯 MUST REMEMBER',
          explanationBn: `🎯 MUST REMEMBER:
• Interface → Contract
• implements → Contract follow করা
• Abstract Class → Common code + contract
• একাধিক Interface → একটি Class implement করতে পারে
• Interface Object → তৈরি করা যায় না

⭐ সবচেয়ে গুরুত্বপূর্ণ:
Interface বলে: "এই কাজগুলো অবশ্যই থাকতে হবে।"
Class বলে: "ঠিক আছে, আমি এগুলো এভাবে implement করব।"`,
          code: `<?php
echo "Interface = What to do | Class = How to do";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'Interface হলো একটি পিওর কন্ট্রাক্ট (কী কী মেথড থাকতে হবে)।',
        'implements দিয়ে ক্লাস ইন্টারফেসের সমস্ত মেথড বাস্তবায়ন করে।',
        'একটি ক্লাস কমা দিয়ে একাধিক Interface ইমপ্লিমেন্ট করতে পারে (implements A, B, C)।',
        'ইন্টারফেসের সমস্ত মেথড বাধ্যতামূলকভাবে public হতে হয়।',
        'টাইপ-হিন্টিংয়ে ইন্টারফেস ব্যবহার করলে কোড Loosely Coupled ও সহজে টেস্টেবল হয়।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: ক্যাশ ও ক্লাউড ফাইল স্টোরেজ ইন্টারফেস',
          descriptionBn: 'FileStorageInterface কন্ট্রাক্ট দিয়ে LocalFileStorage ও CloudFileStorage তৈরি।',
          code: `<?php
interface FileStorageInterface {
    public function upload(string $path, string $content): bool;
    public function delete(string $path): bool;
}

class S3CloudStorage implements FileStorageInterface {
    public function upload(string $path, string $content): bool {
        echo "Uploading to AWS S3 bucket: $path<br>";
        return true;
    }

    public function delete(string $path): bool {
        echo "Deleting from AWS S3: $path<br>";
        return true;
    }
}

function handleAvatarUpload(FileStorageInterface $storage, string $file) {
    $storage->upload("avatars/$file", "avatar_bytes");
}

handleAvatarUpload(new S3CloudStorage(), "user-profile.jpg");
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-traits',
    title: 'PHP Traits',
    category: 'oop',
    tag: 'Horizontal Code Reuse',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'trait কীওয়ার্ড, use স্টেটমেন্ট, Multiple Traits, Conflict Resolution (insteadof, as), Trait Abstract Method এবং বাস্তব Laravel প্যাটার্ন।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Traits: Horizontal Code Reuse Live Demo</h3>";

// ১. Logger Trait
trait Logger {
    public function log(string $message): void {
        echo "<p style='margin:2px 0; color:#475569;'>[LOG " . date('H:i:s') . "] $message</p>";
    }
}

// ২. UUID & Status Trait
trait HasUuid {
    public function generateUuid(): string {
        return bin2hex(random_bytes(8));
    }
}

trait HasStatus {
    protected string $status = "active";

    public function getStatus(): string {
        return $this->status;
    }
}

// ৩. আন-রিলেটেড একাধিক ক্লাসে একই ট্রেইট পুনঃব্যবহার (use A, B, C)
class User {
    use Logger, HasUuid, HasStatus;

    public function __construct(public string $name) {}
}

class Order {
    use Logger, HasUuid, HasStatus;

    public function __construct(public float $total) {}
}

// ৪. Conflict Resolution ডেমো (insteadof, as)
trait GatewayA {
    public function ping(): string { return "Ping from Gateway A"; }
}

trait GatewayB {
    public function ping(): string { return "Ping from Gateway B"; }
}

class SystemMonitor {
    use GatewayA, GatewayB {
        GatewayA::ping insteadof GatewayB; // A এর ping ব্যবহৃত হবে
        GatewayB::ping as pingB;           // B এর ping পাওয়া যাবে pingB নামে
    }
}

$user = new User("Abbad");
$user->log("User instance created: {$user->name} (UUID: " . $user->generateUuid() . ", Status: " . $user->getStatus() . ")");

$order = new Order(4500.0);
$order->log("Order placed: ৳" . number_format($order->total, 2) . " (Order ID: " . $order->generateUuid() . ")");

$monitor = new SystemMonitor();
echo "<p style='margin:4px 0; color:#059669;'><b>Conflict Solved:</b> Primary = " . $monitor->ping() . " | Alias = " . $monitor->pingB() . "</p>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Trait হলো এমন একটি reusable code block, যেটার methods/properties একাধিক unrelated Class-এর মধ্যে reuse করা যায়।
PHP-তে:
• trait → code reuse
• class → use Trait
use keyword দিয়ে Trait ক্লাসের ভেতর ব্যবহার করা হয়।

⭐ সবচেয়ে সহজভাবে:
• Interface = কী করতে হবে (Contract)
• Trait = কীভাবে করা যায় তার reusable code (Implementation)
• Inheritance = Parent-এর সাথে IS-A সম্পর্ক বা বংশানুক্রমিক আচরণ নেওয়া`,
      lessonSections: [
        {
          title: '১. Basic Trait (মৌলিক কোড রিইউজ)',
          explanationBn: `trait কীওয়ার্ড দিয়ে ট্রেইট তৈরি করা হয় এবং ক্লাসের ভেতর use কীওয়ার্ড দিয়ে তা অন্তর্ভুক্ত করা হয়। একই মেথড দুটি ভিন্ন ক্লাসে সহজেই রিইউজ করা যায়।`,
          code: `<?php
trait Logger
{
    public function log(string $message): void
    {
        echo $message . "\n";
    }
}

class User
{
    use Logger;
}

class Order
{
    use Logger;
}

$user = new User();
$user->log("User created");

$order = new Order();
$order->log("Order created");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User created\nOrder created`
        },
        {
          title: '২. Trait-এর Property ও স্টেট',
          explanationBn: `Trait-এর মধ্যে শুধুমাত্র মেথডই নয়, প্রোপার্টিও থাকতে পারে। সেই প্রোপার্টি ক্লাসের ইনস্ট্যান্স প্রোপার্টির অংশ হয়ে যায়।`,
          code: `<?php
trait HasStatus
{
    protected string $status = "active";

    public function getStatus(): string
    {
        return $this->status;
    }
}

class User
{
    use HasStatus;
}

$user = new User();
echo "User Status: " . $user->getStatus();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User Status: active`
        },
        {
          title: '৩. Trait + Multiple Classes ⭐⭐⭐',
          explanationBn: `User, Product, Order—এদের মধ্যে কোনো প্যারেন্ট-চাইল্ড সম্পর্ক না থাকলেও একই কার্যকারিতা (যেমন Timestampable) Trait-এর মাধ্যমে শেয়ার করা যায়।`,
          code: `<?php
trait Timestampable
{
    public function createdMessage(): string
    {
        return "Created at " . date("Y-m-d H:i:s");
    }
}

class User { use Timestampable; }
class Product { use Timestampable; }
class Order { use Timestampable; }

$p = new Product();
echo $p->createdMessage();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Created at 2026-09-16 03:22:00`
        },
        {
          title: '৪. Multiple Traits (একাধিক ট্রেইট একসাথে)',
          explanationBn: `একটি ক্লাস কমা দিয়ে পৃথক করে একাধিক Trait ব্যবহার করতে পারে (use Logger, HasUuid;)।`,
          code: `<?php
trait Logger
{
    public function log(string $message): void
    {
        echo "$message\n";
    }
}

trait HasUuid
{
    public function generateUuid(): string
    {
        return bin2hex(random_bytes(8));
    }
}

class Order
{
    use Logger, HasUuid;
}

$order = new Order();
$order->log("Order created with UUID: " . $order->generateUuid());
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Order created with UUID: 4f8b2c1a9e7d30f5`
        },
        {
          title: '৫. Trait Method Conflict (মেথড সংঘর্ষ)',
          explanationBn: `যদি দুটি ভিন্ন Trait-এ একই নামের মেথড থাকে, তবে সরাসরি use করলে PHP Fatal Error দেবে: "Trait method collision".`,
          code: `<?php
trait A
{
    public function test() { return "A"; }
}

trait B
{
    public function test() { return "B"; }
}

// class Demo {
//     use A, B; // ❌ Fatal error: Trait method test has not been applied, because there are collisions with other trait methods
// }

echo "Two traits with the same method name cause a collision!";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Two traits with the same method name cause a collision!`
        },
        {
          title: '৬. Conflict সমাধান: insteadof',
          explanationBn: `insteadof কীওয়ার্ড দিয়ে নির্দিষ্ট করা হয় যে দুটি ট্রেইটের মধ্যে কোন ট্রেইটের মেথডটি ব্যবহৃত হবে।`,
          code: `<?php
trait A
{
    public function test() { return "A"; }
}

trait B
{
    public function test() { return "B"; }
}

class Demo
{
    use A, B {
        A::test insteadof B; // A-এর test মেথড অগ্রাধিকার পাবে
    }
}

$demo = new Demo();
echo $demo->test();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `A`
        },
        {
          title: '৭. Method Renaming ও Alias: as কীওয়ার্ড',
          explanationBn: `as কীওয়ার্ড দিয়ে সংঘাত হওয়া অপর মেথডটিকে একটি বিকল্প বা ভিন্ন নামে ক্লাসে অন্তর্ভুক্ত করা যায়।`,
          code: `<?php
trait A
{
    public function test() { return "Output from A"; }
}

trait B
{
    public function test() { return "Output from B"; }
}

class Demo
{
    use A, B {
        A::test insteadof B;
        B::test as testB; // B-এর test মেথডকে testB নামে অ্যাক্সেস করা যাবে
    }
}

$demo = new Demo();
echo $demo->test() . " | " . $demo->testB();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Output from A | Output from B`
        },
        {
          title: '৮. Trait Method Visibility পরিবর্তন',
          explanationBn: `Trait অন্তর্ভুক্ত করার সময় as কীওয়ার্ড দিয়ে মেথডের দৃশ্যমানতা (public, protected, private) ক্লাসের ভেতরে পরিবর্তন করা যায়।`,
          code: `<?php
trait Logger
{
    public function log()
    {
        return "Internal Log Entry";
    }
}

class User
{
    use Logger {
        log as protected; // ক্লাসে মেথডটি protected হয়ে যাবে
    }

    public function doAction()
    {
        return $this->log(); // ক্লাসের ভেতর থেকে কল সম্ভব
    }
}

$user = new User();
echo $user->doAction();
// echo $user->log(); // ❌ Fatal error: Cannot access protected method
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Internal Log Entry`
        },
        {
          title: '৯. Trait Abstract Method (বাধ্যতামূলক মেথড)',
          explanationBn: `Trait চাইলে একটি abstract method require করতে পারে। এর অর্থ: যে ক্লাস এই Trait ব্যবহার করবে, তাকে অবশ্যই সেই abstract method implement করতে হবে।`,
          code: `<?php
trait HasPayment
{
    abstract public function pay(float $amount): bool;

    public function process(float $amount): bool
    {
        echo "Processing payment...\n";
        return $this->pay($amount);
    }
}

class BkashPayment
{
    use HasPayment;

    public function pay(float $amount): bool
    {
        echo "৳$amount paid via bKash.\n";
        return true;
    }
}

$b = new BkashPayment();
$b->process(500);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Processing payment...\n৳500 paid via bKash.`
        },
        {
          title: '১০. Trait বনাম Inheritance ⭐⭐⭐',
          explanationBn: `• Inheritance:
  class Admin extends User
  → IS-A relationship (Admin একটি User)
  → একটি Class-এর একাধিক parent থাকতে পারে না।

• Trait:
  class User { use Logger, HasUuid, HasStatus; }
  → শুধু reusable functionality নেওয়া
  → একটি ক্লাসে একাধিক Trait ব্যবহার করা যায়।`,
          code: `<?php
echo "Inheritance: IS-A relationship, single hierarchy.\n";
echo "Trait: Reusable capabilities, horizontally shared across unrelated classes.\n";
?>`,
          codeLanguage: 'Architectural Comparison'
        },
        {
          title: '১১. Trait বনাম Interface',
          explanationBn: `• Interface:
  interface Payment { public function pay(float $amount): bool; }
  → Contract দেয় ("এই method অবশ্যই থাকতে হবে")

• Trait:
  trait Logger { public function log(string $msg): void { ... } }
  → Ready-made implementation reuse করে ("এই method-এর ready-made code নাও")

সহজভাবে: Interface = কী করতে হবে | Trait = কীভাবে করার কোড প্রস্তুত আছে।`,
          code: `<?php
echo "Interface = What to do (Contract without implementation)\n";
echo "Trait     = Ready-to-use implementation without inheritance hierarchy\n";
?>`,
          codeLanguage: 'Comparison'
        },
        {
          title: '১২. Real-World Laravel/PHP Example ⭐⭐⭐',
          explanationBn: `লারাভেল এবং আধুনিক পিএইচপিতে অডিট লগ, ইউআইডি, সফট ডিলিট ইত্যাদিতে ট্রেইট ব্যাপকভাবে ব্যবহৃত হয়।`,
          code: `<?php
trait HasActivityLog
{
    public function logActivity(string $message): void
    {
        echo "[ACTIVITY] $message<br>";
    }
}

trait HasUuid
{
    public function uuid(): string
    {
        return bin2hex(random_bytes(6));
    }
}

class Order
{
    use HasActivityLog, HasUuid;
}

class User
{
    use HasActivityLog, HasUuid;
}

$order = new Order();
$order->logActivity("Order placed with UUID: " . $order->uuid());

$user = new User();
$user->logActivity("User registered with UUID: " . $user->uuid());
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `[ACTIVITY] Order placed with UUID: a1b2c3d4e5f6<br>[ACTIVITY] User registered with UUID: 1234567890ab`
        },
        {
          title: '১৩. কখন Trait ব্যবহার করবে এবং ⚠️ কখন পরিহার করবে?',
          explanationBn: `✓ কখন Trait ব্যবহার করবে:
• একই functionality বহু unrelated Class-এ দরকার
• Classes-এর মধ্যে direct parent-child relationship নেই
• ছোট ও স্বতন্ত্র reusable behavior (যেমন Logger, HasUuid, HasStatus, HasTimestamps, FileUpload)

⚠️ Trait অতিরিক্ত ব্যবহার করো না:
প্রতিটি common code Trait বানানোর দরকার নেই। অনেক Trait একসাথে ব্যবহার করলে:
❌ কোথা থেকে method এসেছে বোঝা কঠিন হয়
❌ Dependency hidden বা গোপন হয়ে যায়
❌ Code structure জটিল হয়ে পড়ে
Complex business logic-এর ক্ষেত্রে Service Class + Dependency Injection অনেক সময় Trait-এর চেয়ে অনেক বেশি উত্তম ও টেস্টেবল।`,
          code: `<?php
echo "Caution: Do not overuse traits for complex business logic; prefer Dependency Injection.";
?>`,
          codeLanguage: 'Best Practice'
        },
        {
          title: '১৪. 🎯 MUST REMEMBER',
          explanationBn: `🎯 MUST REMEMBER:
• trait → Reusable code block
• use → Trait Class-এর মধ্যে add করে
• একাধিক Trait: use A, B, C;
• Conflict resolution: insteadof
• Rename / Alias: as
• Trait → সরাসরি Object তৈরি করা যায় না

⭐ সবচেয়ে সহজভাবে:
• Interface = কী করতে হবে
• Trait = কীভাবে করা যায় তার reusable code
• Inheritance = Parent-এর relationship/behavior নেওয়া`,
          code: `<?php
echo "Trait Summary: Horizontal code reuse without inheritance constraints.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'Trait হলো অনুভূমিকভাবে (Horizontal) একাধিক ক্লাসের মাঝে কোড রিইউজ করার কৌশল।',
        'use Trait1, Trait2 দিয়ে ক্লাসে এক বা একাধিক ট্রেইট যুক্ত করা হয়।',
        'একই মেথড নেমে সংঘাত হলে insteadof এবং as দিয়ে সমাধান করা হয়।',
        'Trait-এর নিজস্ব কোনো অবজেক্ট তৈরি করা যায় না (Cannot instantiate trait)।',
        'জটিল বিজনেস লজিকে অন্ধভাবে ট্রেইট না বানিয়ে Dependency Injection ও Service Class ব্যবহার করুন।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: সফট ডিলিট (SoftDelete) ট্রেইট',
          descriptionBn: 'ডাটাবেজ রেকর্ড সরাসরি মুছে না ফেলে deleted_at টাইমস্ট্যাম্প সেট করার ট্রেইট।',
          code: `<?php
trait SoftDeleteTrait {
    protected ?string $deletedAt = null;

    public function delete(): void {
        $this->deletedAt = date('Y-m-d H:i:s');
        echo "✓ Record soft deleted at: {$this->deletedAt}<br>";
    }

    public function isDeleted(): bool {
        return $this->deletedAt !== null;
    }
}

class Product {
    use SoftDeleteTrait;
    public function __construct(public string $title) {}
}

$prod = new Product("MacBook Pro 16");
$prod->delete();
echo "Is product deleted? " . ($prod->isDeleted() ? "Yes (Soft Deleted)" : "No");
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-static-methods',
    title: 'PHP Static Methods',
    category: 'oop',
    tag: 'Class-Level Methods',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'public static function, ClassName::method(), $this নিষিদ্ধ, static property, self:: বনাম static:: (LSB) এবং Factory Method।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Static Methods & Class-Level Access Live Demo</h3>";

// ১. Utility Class with Static Methods
class MathHelper {
    public static function add(int $a, int $b): int {
        return $a + $b;
    }
}

// ২. Static Property + Static Counter Method
class Counter {
    public static int $count = 0;

    public static function increment(): void {
        self::$count++;
    }
}

// ৩. Factory Style Static Method
class User {
    public const ROLE = "Regular User";

    public function __construct(public string $name) {}

    public static function create(string $name): self {
        return new self($name);
    }

    public static function role(): string {
        return static::ROLE; // Late Static Binding
    }
}

class Admin extends User {
    public const ROLE = "Super Administrator";
}

// ৪. Stateless Validator Helper
class Validator {
    public static function isEmail(string $email): bool {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
}

// কলিং (Object তৈরি ছাড়াই সরাসরি ClassName::method())
echo "<p style='margin:4px 0; color:#0f172a;'><b>1. MathHelper::add:</b> 10 + 20 = " . MathHelper::add(10, 20) . "</p>";

Counter::increment();
Counter::increment();
echo "<p style='margin:4px 0; color:#2563eb;'><b>2. Counter::$count:</b> " . Counter::$count . " (shared across calls)</p>";

$user = User::create("Abbad");
echo "<p style='margin:4px 0; color:#059669;'><b>3. Factory Created:</b> {$user->name}</p>";

echo "<p style='margin:4px 0; color:#7c3aed;'><b>4. Late Static Binding (static::):</b> Admin::role() = " . Admin::role() . "</p>";

$emailTest = "user@example.com";
echo "<p style='margin:4px 0; color:#0284c7;'><b>5. Validator:</b> {$emailTest} is " . (Validator::isEmail($emailTest) ? "Valid Email" : "Invalid") . "</p>";

echo "<p style='margin:6px 0 0 0; font-size:13px; color:#dc2626;'>Note: Static methods cannot use \$this because they execute in class scope, not object instance scope.</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `static method হলো এমন method যা Object তৈরি না করেই Class-এর নাম দিয়ে call করা যায়।
Syntax: ClassName::method();

Static method কোনো নির্দিষ্ট Object-এর context-এ চলে না, তাই static method-এর ভিতরে $this ব্যবহার করা কঠোরভাবে নিষিদ্ধ।
এটি মূলত স্টেটলেস ইউটিলিটি, হেল্পার ক্যালকুলেশন, গ্লোবাল কাউন্টার এবং অবজেক্ট তৈরির Factory method হিসেবে ব্যবহৃত হয়।`,
      lessonSections: [
        {
          title: '১. Basic Static Method (অবজেক্ট ছাড়াই মেথড কল)',
          explanationBn: `public static function দিয়ে মেথড ডিক্লেয়ার করা হয়। অবজেক্ট তৈরি না করেই সরাসরি ClassName::method() দিয়ে কল করা যায়।`,
          code: `<?php
class MathHelper
{
    public static function add(int $a, int $b): int
    {
        return $a + $b;
    }
}

echo MathHelper::add(10, 20); // 30
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `30`
        },
        {
          title: '২. Normal Method বনাম Static Method (-> বনাম ::)',
          explanationBn: `Normal Method অবজেক্টের ইনস্ট্যান্সে চলে এবং অ্যারো অপারেটর (->) দিয়ে কল করতে হয়।
আর Static Method সরাসরি ক্লাসের স্কোপে চলে এবং Scope Resolution Operator (::) দিয়ে কল করতে হয়।

মনে রাখবে:
• Object method → ->
• Static method → ::`,
          code: `<?php
class User
{
    public function login()
    {
        return "Normal Object Login";
    }

    public static function role()
    {
        return "Static Class Role: User";
    }
}

// Normal method requires an object
$user = new User();
echo $user->login() . "<br>";

// Static method called directly on Class
echo User::role();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Normal Object Login<br>Static Class Role: User`
        },
        {
          title: '৩. Static Method-এর ভিতরে $this নিষিদ্ধ',
          explanationBn: `Static method-এর ভিতরে $this ব্যবহার করা যায় না।
কারণ static method কোনো specific Object-এর context-এ চলে না। $this লিখলে Fatal Error হবে।`,
          code: `<?php
class User
{
    public string $name = "Abbad";

    public static function test()
    {
        // echo $this->name; // ❌ Fatal Error: Using $this when not in object context
        echo "Static method has no \$this object context.";
    }
}

User::test();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Static method has no $this object context.`
        },
        {
          title: '৪. Static Method + Static Property (self::$property)',
          explanationBn: `Static method ক্লাসের static property সরাসরি অ্যাক্সেস করতে পারে self::$propertyName সিনট্যাক্সে।`,
          code: `<?php
class Counter
{
    public static int $count = 0;

    public static function increment(): void
    {
        self::$count++;
    }
}

Counter::increment();
Counter::increment();
echo "Counter value: " . Counter::$count; // 2
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Counter value: 2`
        },
        {
          title: '৫. self:: ⭐⭐⭐ (Current Class Reference)',
          explanationBn: `Current Class-এর ভেতরের static member (property, method বা constant) কল করতে self:: ব্যবহার করা হয়।`,
          code: `<?php
class User
{
    public static function role()
    {
        return "User";
    }

    public static function getRole()
    {
        return self::role(); // Current Class-এর static মেথড কল
    }
}

echo User::getRole();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User`
        },
        {
          title: '৬. static:: ⭐⭐⭐ (Late Static Binding)',
          explanationBn: `self:: কম্পাইল টাইমে যে ক্লাসে লেখা হয়েছে সেই ক্লাসে আবদ্ধ থাকে।
কিন্তু static:: রানটাইমে যে চাইল্ড ক্লাস থেকে কল করা হয়েছে (Called Class), সেই ক্লাসের মান নির্ধারণ করে। একে Late Static Binding বলে।`,
          code: `<?php
class User
{
    public static function role()
    {
        return static::ROLE; // Late Static Binding
    }
}

class Admin extends User
{
    public const ROLE = "Admin";
}

echo Admin::role(); // Admin
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Admin`
        },
        {
          title: '৭. Static Method + Class Constant',
          explanationBn: `Static method-এর ভেতর থেকে ক্লাসের কনস্ট্যান্টকে self::CONSTANT_NAME দিয়ে খুব সহজেই রিড করা যায়।`,
          code: `<?php
class App
{
    public const VERSION = "1.0.5";

    public static function version(): string
    {
        return self::VERSION;
    }
}

echo "App Version: " . App::version();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `App Version: 1.0.5`
        },
        {
          title: '৮. Static Method থেকে Object তৈরি করা (Factory Style Method)',
          explanationBn: `Static method-এর ভেতর থেকে new self(...) দিয়ে অবজেক্ট তৈরি করে ফেরত দেওয়া যায়। ডিজাইন প্যাটার্নে একে Factory Method বা Named Constructor বলা হয়।`,
          code: `<?php
class User
{
    public function __construct(
        public string $name
    ) {}

    public static function create(string $name): self
    {
        return new self($name);
    }
}

$user = User::create("Abbad");
echo "Created via Factory: " . $user->name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Created via Factory: Abbad`
        },
        {
          title: '৯. Real-World Example ⭐⭐⭐: Validator Utility',
          explanationBn: `এখানে কোনো Object state ধরে রাখার দরকার নেই। তাই static method তৈরি করাই সবচেয়ে ক্লিন ও পরিচ্ছন্ন অ্যাপ্রোচ।`,
          code: `<?php
class Validator
{
    public static function isEmail(string $email): bool
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    public static function isPositiveNumber(float $num): bool
    {
        return $num > 0;
    }
}

if (Validator::isEmail("user@example.com")) {
    echo "Valid Email! ";
}

if (Validator::isPositiveNumber(250)) {
    echo "Valid Amount!";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Valid Email! Valid Amount!`
        },
        {
          title: '১০. কখন Static Method ব্যবহার করবে এবং কখন Avoid করবে?',
          explanationBn: `✓ কখন Static Method ব্যবহার করবে?
যখন method:
• Object-এর state-এর উপর নির্ভর করে না
• Utility/helper কাজ করে (MathHelper::add())
• Stateless calculation করে
• Factory-style creation করে (User::create())
• Class-level behavior represent করে

⚠️ কখন Static Method Avoid করবে?
যদি method-এর কাজ Object-এর property/state-এর উপর নির্ভর করে:
class User {
    public string $name;
    public function getName(): string {
        return $this->name; // এখানে normal method ব্যবহার করবে!
    }
}
কারণ $user->getName() অবজেক্টের নির্দিষ্ট $name ডেটা চায়।`,
          code: `<?php
echo "Stateless utility -> Static Method | State-dependent operation -> Normal Instance Method";
?>`,
          codeLanguage: 'Decision Framework'
        },
        {
          title: '১১. Static Method বনাম Dependency Injection ⭐⭐⭐',
          explanationBn: `Static:
Logger::log($message);
এখানে dependency সরাসরি Class-এর সাথে শক্তভাবে tied বা tightly coupled থাকে, ফলে ইউনিট টেস্টিংয়ে মক করা কঠিন হয়।

Dependency Injection:
class OrderService {
    public function __construct(private Logger $logger) {}
}
এতে dependency বাইরে থেকে ইনজেক্ট করা যায়। Large Enterprise / Laravel application-এ Dependency Injection সাধারণত বেশি flexible, testable এবং maintainable।`,
          code: `<?php
echo "Static: Fast & global access | Dependency Injection: Highly testable, mockable & loosely coupled";
?>`,
          codeLanguage: 'Architecture Comparison'
        },
        {
          title: '১২. 🎯 MUST REMEMBER',
          explanationBn: `🎯 MUST REMEMBER:

Static Method:
public static function method() {}
Call: ClassName::method();

Normal Method:
public function method() {}
Call: $object->method();

Static method:
❌ $this ব্যবহার করতে পারে না

Static member:
self::method()
self::$property
self::CONSTANT

Late Static Binding:
static::method()
static::$property
static::CONSTANT

⭐ সহজভাবে:
• Normal Method → Object-এর সাথে কাজ করে
• Static Method → Class-level কাজ করে
• Object দরকার নেই → ClassName::method()
• Object-এর data/state দরকার → Normal method ব্যবহার করো`,
          code: `<?php
echo "Static = Class level, no \$this | Normal = Instance level, uses \$this";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'Static Method অবজেক্ট তৈরি না করেই সরাসরি ClassName::method() দিয়ে কল করা যায়।',
        'Static মেথডের ভেতর অবজেক্ট স্টেট ($this) অ্যাক্সেস করা সম্পূর্ণ নিষিদ্ধ।',
        'ক্লাসের নিজস্ব স্ট্যাটিক সদস্য অ্যাক্সেসে self:: এবং Late Static Binding-এ static:: ব্যবহৃত হয়।',
        'হেল্পার ফাংশন, স্টেটলেস ভ্যালিডেশন এবং ফ্যাক্টরি মেথডের জন্য static মেথড আদর্শ।',
        'জটিল বিজনেস ডিপেনডেন্সির ক্ষেত্রে হার্ডকোডেড static কলের চেয়ে Dependency Injection বেশি ফ্লেক্সিবল।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: কনফিগ ম্যানেজার ও এনভায়রনমেন্ট হেল্পার',
          descriptionBn: 'অবজেক্ট ইনস্ট্যান্স ছাড়া গ্লোবাল কনফিগারেশন ভ্যালু রিড ও ডিফল্ট ফলব্যাক হ্যান্ডলিং।',
          code: `<?php
class ConfigManager {
    private static array $configs = [
        'app_name' => 'PHP Enterprise Store',
        'currency' => 'BDT',
        'debug' => true
    ];

    public static function get(string $key, mixed $default = null): mixed {
        return self::$configs[$key] ?? $default;
    }
}

echo "App: " . ConfigManager::get('app_name') . "<br>";
echo "Currency: " . ConfigManager::get('currency') . "<br>";
echo "Timezone: " . ConfigManager::get('timezone', 'Asia/Dhaka');
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-static-properties',
    title: 'PHP Static Properties',
    category: 'oop',
    tag: 'Shared Memory State',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'static property, ClassName::$property, self::$property, অবজেক্ট-লেভেল বনাম ক্লাস-লেভেল শেয়ার্ড স্টেট, এবং private static ক্যাশিং।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Static Properties & Shared Memory State</h3>";

// ১. User ক্লাস যা স্ট্যাটিক কাউন্টার দিয়ে অবজেক্ট গণনা করে
class User {
    // স্ট্যাটিক প্রপার্টি: সমস্ত অবজেক্টের জন্য মেমরিতে একটাই কপি থাকে
    public static int $count = 0;
    public string $name;

    public function __construct(string $name) {
        $this->name = $name;
        // ক্লাসের ভেতর থেকে self::$property
        self::$count++;
    }
}

// ২. Private Static Property দিয়ে সুরক্ষিত স্টেট
class Order {
    private static int $totalOrders = 0;
    private static float $totalRevenue = 0.0;

    public function __construct(public float $amount) {
        self::$totalOrders++;
        self::$totalRevenue += $amount;
    }

    public static function getTotalOrders(): int {
        return self::$totalOrders;
    }

    public static function getTotalRevenue(): float {
        return self::$totalRevenue;
    }
}

// ৩. Database Connection Pool (Singleton pattern style)
class Database {
    private static ?string $connection = null;

    public static function getConnection(): string {
        if (self::$connection === null) {
            self::$connection = "PDO_MySQL_Socket_#".bin2hex(random_bytes(3));
            echo "<p style='margin:2px 0; color:#2563eb;'>ℹ️ New DB Connection Created: " . self::$connection . "</p>";
        }
        return self::$connection;
    }
}

echo "<p style='margin:3px 0; color:#64748b;'>Initial User Count: " . User::$count . "</p>";

$user1 = new User("Abbad");
$user2 = new User("Rahim");
$user3 = new User("Karim");

echo "<p style='margin:3px 0; color:#059669;'>✓ 3 Users instantiated! Shared <b>User::\$count</b>: <b>" . User::$count . "</b></p>";

new Order(1200.00);
new Order(2500.50);
new Order(800.00);

echo "<p style='margin:3px 0; color:#7c3aed;'>✓ Total Orders: <b>" . Order::getTotalOrders() . "</b> | Total Revenue: <b>৳" . number_format(Order::getTotalRevenue(), 2) . "</b></p>";

// DB Connection Reuse Demo
Database::getConnection();
Database::getConnection(); // একই কানেকশন রিইউজ হবে

echo "<p style='margin:6px 0 0 0; font-size:13px; color:#475569;'>Normal Property = Individual Object State | Static Property = Shared Class-Level State.</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `static property হলো এমন property যা Object-এর আলাদা আলাদা copy না হয়ে Class-এর সাথে shared থাকে।
অর্থাৎ একই Class-এর সব Object একই static property share করে।

⭐ সহজভাবে:
• Normal Property → "এই নির্দিষ্ট Object-এর data" (প্রতিটি অবজেক্টের জন্য আলাদা)
• Static Property → "এই Class-এর shared data" (পুরো ক্লাসের জন্য মেমরিতে একটাই কপি)`,
      lessonSections: [
        {
          title: '১. Basic Static Property (মৌলিক ধারণা ও অ্যাক্সেস)',
          explanationBn: `ক্লাসে static কীওয়ার্ড দিয়ে প্রপার্টি ডিক্লেয়ার করা হয়।
অ্যাক্সেস করতে ClassName::$property অর্থাৎ Scope Resolution Operator (::) এর পর অবশ্যই ডলার সাইন ($) সহ ভ্যারিয়েবলের নাম দিতে হয়।

class User
{
    public static int $count = 0;
}

echo User::$count; // এখানে :: + $ ব্যবহার হয়`,
          code: `<?php
class User
{
    public static int $count = 0;
}

echo "Initial Count: " . User::$count . "\n";
User::$count = 5;
echo "Updated Count: " . User::$count . "\n";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Initial Count: 0\nUpdated Count: 5`
        },
        {
          title: '২. Object-এর সাথে পার্থক্য ⭐⭐⭐ (Normal vs Static Property)',
          explanationBn: `• Normal Property: প্রতিটি অবজেক্টের নিজস্ব কপি থাকে।
  $user1->name = "Abbad";
  $user2->name = "Rahim";
  উভয়ের জন্য মেমরিতে আলাদা $name তৈরি হয়।

• Static Property: ক্লাসের সব অবজেক্টের জন্য একটাই shared ভেরিয়েবল।
  User::$count++;
  $user1 = new User();
  $user2 = new User();
  User::$count++;
  echo User::$count; // 2
  দুই অবজেক্টের জন্য আলাদা count তৈরি হয়নি, একটাই User::$count আছে।`,
          code: `<?php
class User
{
    public string $name = "";
    public static int $count = 0;
}

$u1 = new User();
$u1->name = "Abbad";

$u2 = new User();
$u2->name = "Rahim";

User::$count = 2;

echo "u1 name: {$u1->name} | u2 name: {$u2->name}\n";
echo "Shared count across both: " . User::$count;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `u1 name: Abbad | u2 name: Rahim\nShared count across both: 2`
        },
        {
          title: '৩. Static Property Access (Outside vs Inside Class)',
          explanationBn: `• Outside Class:
  ClassName::$property

• Inside Class:
  self::$property

Example:
class Counter
{
    public static int $count = 0;

    public static function increment(): void
    {
        self::$count++;
    }
}`,
          code: `<?php
class Counter
{
    public static int $count = 0;

    public static function increment(): void
    {
        self::$count++;
    }
}

Counter::increment();
Counter::increment();

echo "Counter Value: " . Counter::$count;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Counter Value: 2`
        },
        {
          title: '৪. Static Property + Object Constructor ⭐',
          explanationBn: `যখনই new দিয়ে অবজেক্ট তৈরি হয়, কনস্ট্রাক্টরে self::$property পরিবর্তন করে অবজেক্ট ট্র্যাকিং করা যায়।
প্রতিবার new User() কল হলে একই স্ট্যাটিক প্রপার্টি ১ করে বৃদ্ধি পায়।`,
          code: `<?php
class User
{
    public static int $totalUsers = 0;

    public function __construct()
    {
        self::$totalUsers++;
    }
}

new User();
new User();
new User();

echo "Total Users Created: " . User::$totalUsers;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Total Users Created: 3`
        },
        {
          title: '৫. Static Property কেন ব্যবহার করা হয়?',
          explanationBn: `যখন কোনো data পুরো Class-এর জন্য common বা shared হওয়া প্রয়োজন:
✓ Total users / records count
✓ Global configuration ও সেটিংস
✓ Application settings
✓ Cache-like class-level state
✓ Shared counters
✓ Fixed class-level values`,
          code: `<?php
class SystemConfig
{
    public static string $appEnv = "production";
    public static string $defaultLang = "bn";
}

echo "Environment: " . SystemConfig::$appEnv . " | Language: " . SystemConfig::$defaultLang;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Environment: production | Language: bn`
        },
        {
          title: '৬. Static Property-এর ভিতরে $this ব্যবহারের নিষেধাজ্ঞা',
          explanationBn: `Static property access করতে $this ব্যবহার করা যাবে না।
❌ ভুল: $this->count
✅ সঠিক: self::$count

কারণ $this কেবল নির্দিষ্ট Object-এর জন্য বিদ্যমান, আর self::$count হলো Class-level shared property-এর জন্য।`,
          code: `<?php
class Metric
{
    public static int $score = 100;

    public function show()
    {
        // echo $this->score; // ❌ Notice/Warning: Accessing static property as non-static
        return self::$score; // ✅ সঠিক
    }
}

$m = new Metric();
echo "Score: " . $m->show();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Score: 100`
        },
        {
          title: '৭. private Static Property ⭐⭐⭐ (Encapsulation ও Singleton)',
          explanationBn: `Static property-কে private করা যায় যাতে ক্লাসের বাইরে থেকে সরাসরি মান পরিবর্তন করা না যায়।
যেমন: ডেটাবেজ কানেকশন বা ক্যাশ হ্যান্ডলার সংরক্ষণ করার জন্য।`,
          code: `<?php
class Database
{
    private static ?string $connection = null;

    public static function getConnection(): string
    {
        if (self::$connection === null) {
            // First time connection initialization
            self::$connection = "Active_PDO_MySQL_Resource_#1";
        }
        return self::$connection;
    }
}

// Database::$connection; // ❌ Fatal error: Cannot access private property
echo "DB: " . Database::getConnection() . "\n";
echo "Reused DB: " . Database::getConnection();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `DB: Active_PDO_MySQL_Resource_#1\nReused DB: Active_PDO_MySQL_Resource_#1`
        },
        {
          title: '৮. Static Property বনাম Constant',
          explanationBn: `• Constant:
  class App { public const VERSION = "1.0"; }
  মান একবার সেট করলে পরে রানটাইমে পরিবর্তন করা যায় না (Immutable)।

• Static Property:
  class App { public static string $version = "1.0"; }
  মান রানটাইমে যেকোনো সময় পরিবর্তন করা যায় (Mutable)।
  App::$version = "2.0";`,
          code: `<?php
class AppInfo
{
    public const API_KEY = "SECRET_123";
    public static string $runtimeMode = "idle";
}

echo "Constant: " . AppInfo::API_KEY . "\n";
AppInfo::$runtimeMode = "processing_orders";
echo "Static Prop: " . AppInfo::$runtimeMode;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Constant: SECRET_123\nStatic Prop: processing_orders`
        },
        {
          title: '৯. Static Property + Inheritance (উত্তরাধিকার)',
          explanationBn: `প্যারেন্ট ক্লাসের স্ট্যাটিক প্রপার্টি চাইল্ড ক্লাসে এক্সেস করা যায়।
static:: ব্যবহার করলে Late Static Binding-এর আচরণ পাওয়া যায়।`,
          code: `<?php
class ParentClass
{
    public static string $name = "Parent";
}

class ChildClass extends ParentClass
{
}

echo "Accessed via Child: " . ChildClass::$name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Accessed via Child: Parent`
        },
        {
          title: '১০. Real-World Example: Order Tracking System',
          explanationBn: `এখানে $totalOrders কোনো নির্দিষ্ট একটি Order-এর প্রপার্টি নয়; বরং সব অর্ডারের জন্য একটি কমন শেয়ার্ড কাউন্টার।`,
          code: `<?php
class Order
{
    private static int $totalOrders = 0;

    public function __construct()
    {
        self::$totalOrders++;
    }

    public static function getTotalOrders(): int
    {
        return self::$totalOrders;
    }
}

new Order();
new Order();
new Order();

echo "Total Orders Processed: " . Order::getTotalOrders();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Total Orders Processed: 3`
        },
        {
          title: '১১. ⚠️ Important: সতর্কতা ও Architectural Best Practice',
          explanationBn: `Static property shared state তৈরি করে।
তাই অ্যাপ্লিকেশনের যেকোনো জায়গা থেকে ইচ্ছামতো স্ট্যাটিক স্টেট পরিবর্তন করলে:
❌ কোড বোঝা ও ডিবাগ করা কঠিন হয়ে যায়
❌ ইউনিট টেস্টিংয়ে পূর্ববর্তী টেস্টের ডেটা পরবর্তী টেস্টকে নষ্ট করে
❌ Hidden Dependency তৈরি হয়

Laravel বা আধুনিক অ্যাপ্লিকেশনে অপ্রয়োজনে global/static state ব্যবহার না করে Dependency Injection ব্যবহার করা সবচেয়ে ভালো ও maintainable।`,
          code: `<?php
echo "Architecture Rule: Prefer Dependency Injection over mutable static properties for critical business state.";
?>`,
          codeLanguage: 'Best Practice'
        },
        {
          title: '১২. 🎯 MUST REMEMBER',
          explanationBn: `🎯 MUST REMEMBER:
• Normal Property:
  $object->property → প্রতিটি Object-এর আলাদা value
• Static Property:
  ClassName::$property → Class-level shared value

Inside Class:
  self::$property

Static property:
✓ Object ছাড়াও সরাসরি access করা যায়
✓ সমস্ত Object-এর জন্য shared
✓ Class-level state সংরক্ষণ করে
✓ $this ব্যবহার করে না

⭐ সহজভাবে:
Normal Property = "এই Object-এর data"
Static Property = "এই Class-এর shared data"`,
          code: `<?php
echo "Static Property: Shared class-level memory state. Accessed via ClassName::\$prop or self::\$prop.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'স্ট্যাটিক প্রপার্টির মান মেমরিতে ক্লাসের সমস্ত অবজেক্টের মাঝে শেয়ার্ড থাকে।',
        'ক্লাসের বাইরে থেকে ClassName::$prop এবং ভেতর থেকে self::$prop দিয়ে অ্যাক্সেস করতে হয়।',
        'স্ট্যাটিক প্রপার্টিতে ডলার ($) সাইন দেওয়া বাধ্যতামূলক (ClassName::$prop)।',
        'স্ট্যাটিক মেথড বা প্রপার্টিতে $this ব্যবহার করা যায় না।',
        'অতিরিক্ত মিউটেবল স্ট্যাটিক প্রপার্টি কোড টেস্টিং ও ট্রেসিং জটিল করে তোলে।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: API Rate Limiter Request Counter',
          descriptionBn: 'প্রতি মিনিটে কয়টি রিকোয়েস্ট আসছে তা স্ট্যাটিক প্রপার্টি দিয়ে ট্র্যাক করা।',
          code: `<?php
class ApiRateLimiter {
    private static int $requestCount = 0;
    private const MAX_REQUESTS = 5;

    public static function logRequest(): bool {
        if (self::$requestCount >= self::MAX_REQUESTS) {
            echo "🚫 429 Too Many Requests: Limit reached!<br>";
            return false;
        }
        self::$requestCount++;
        echo "✓ Request #" . self::$requestCount . " permitted.<br>";
        return true;
    }

    public static function getCount(): int {
        return self::$requestCount;
    }
}

for ($i = 1; $i <= 6; $i++) {
    ApiRateLimiter::logRequest();
}
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-namespaces',
    title: 'PHP Namespaces',
    category: 'oop',
    tag: 'Code Organization',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'namespace ডিক্লেয়ারেশন, use স্টেটমেন্ট, as দিয়ে অ্যালিয়াসিং, গ্লোবাল নেমস্পেস (\\), নেম কলিশন প্রতিরোধ ও PSR-4 আর্কিটেকচার।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Namespaces & Aliasing Live Demo</h3>";

// ভার্চুয়াল ডোমেন: Payment Service এর Gateway
namespace App\\Services\\Payment {
    class Gateway {
        public function pay(float $amount): string {
            return "৳" . number_format($amount, 2) . " paid via App\\Services\\Payment\\Gateway";
        }
    }
}

// ভার্চুয়াল ডোমেন: Database Model এর Gateway
namespace App\\Models {
    class Gateway {
        public function getDetails(): string {
            return "DB Row from table 'gateways' [SSLCommerz, bKash, Stripe]";
        }
    }
}

// মূল কনজুমার কোড যেখানে দুটি একই নামের ক্লাস সংঘর্ষহীনভাবে ব্যবহার করা হচ্ছে
namespace App\\Http\\Controllers {
    use App\\Services\\Payment\\Gateway as PaymentService;
    use App\\Models\\Gateway as GatewayModel;

    $service = new PaymentService();
    $model = new GatewayModel();

    echo "<p style='margin:3px 0; color:#059669;'>✓ <b>Service:</b> " . $service->pay(4500) . "</p>";
    echo "<p style='margin:3px 0; color:#2563eb;'>✓ <b>Model:</b> " . $model->getDetails() . "</p>";

    // Global Namespace Access (\DateTime)
    $now = new \\DateTime();
    echo "<p style='margin:3px 0; color:#7c3aed;'>✓ <b>Global Namespace (\\DateTime):</b> " . $now->format('Y-m-d H:i:s') . "</p>";

    echo "<p style='margin:6px 0 0 0; font-size:13px; color:#64748b;'>Namespaces prevent naming collision and map directly to directories via PSR-4 autoloading.</p>";
}
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Namespace ব্যবহার করা হয় একই নামের Class, Function বা Constant-এর মধ্যে name conflict (নামের সংঘর্ষ) এড়ানোর জন্য।
সহজভাবে:
Namespace = Class-এর "ঠিকানা" বা ইউনিক পরিচিতি।

এটি লারাভেল ও আধুনিক পিএইচপিতে কোড সংগঠিত রাখতে এবং PSR-4 স্ট্যান্ডার্ডে অটোলোড করতে অপরিহার্য।`,
      lessonSections: [
        {
          title: '১. Namespace ছাড়া সমস্যা (Name Collision)',
          explanationBn: `ধরো দুই জায়গায় একই নামে Class আছে:
App\\Models\\User
Admin\\Models\\User

দুটোর নামই User।
একই ফাইল বা অ্যাপ্লিকেশনে সরাসরি ব্যবহার করতে গেলে PHP Fatal Error দেবে: "Cannot declare class User, because the name is already in use"।
Namespace দিয়ে এদের আলাদা ভার্চুয়াল ডোমেনে বিভক্ত করা যায়।`,
          code: `<?php
echo "Problem without namespace: Multiple libraries having class User will crash PHP due to collision.";
?>`,
          codeLanguage: 'Problem Statement'
        },
        {
          title: '২. Namespace তৈরি করা (Declaration)',
          explanationBn: `ফাইলের শুরুতে namespace ডিক্লেয়ার করা হয়।
namespace App\\Models;

class User
{
    public function name()
    {
        return "User";
    }
}

এখন এই Class-এর সম্পূর্ণ কোয়ালিফায়েড নাম (FQCN): App\\Models\\User`,
          code: `<?php
namespace App\\Models;

class User
{
    public function name(): string
    {
        return "App\\Models\\User";
    }
}

$u = new User();
echo "Loaded Class: " . $u->name();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Loaded Class: App\\Models\\User`
        },
        {
          title: '৩. Namespace ব্যবহার করা ⭐⭐⭐ (use কীওয়ার্ড)',
          explanationBn: `অন্য ফাইলে থাকা ক্লাস ব্যবহারের জন্য use স্টেটমেন্ট দিয়ে import/alias করা হয়।
use App\\Models\\User;
$user = new User();

use কীওয়ার্ড পুরো পাথ বারবার লেখার ঝামেলা দূর করে কোড পরিচ্ছন্ন রাখে।`,
          code: `<?php
namespace App\\Http;

use App\\Models\\User;

// এখন সরাসরি User() কল করা যায়
echo "Class imported into current scope with 'use App\\Models\\User;'";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Class imported into current scope with 'use App\\Models\\User;'`
        },
        {
          title: '৪. Namespace ছাড়া সরাসরি ব্যবহার (Fully Qualified Name)',
          explanationBn: `use না করেও পুরো পাথ (FQCN) দিয়ে সরাসরি অবজেক্ট তৈরি করা যায়:
$user = new \\App\\Models\\User();

তবে ফাইলে বারবার বড় পাথ লেখার চেয়ে use ব্যবহার করাই স্ট্যান্ডার্ড ক্লিন কোড।`,
          code: `<?php
// $user = new \\App\\Models\\User();
echo "Direct FQCN instantiation: new \\App\\Models\\User();";
?>`,
          codeLanguage: 'PHP Syntax'
        },
        {
          title: '৫. একই নামে দুই Class (as দিয়ে Alias প্রদান)',
          explanationBn: `যদি একই ফাইলে দুটি ভিন্ন নেমস্পেস থেকে একই নামের দুটি ক্লাস ব্যবহার করতে হয়:
use App\\Models\\User;
use Admin\\Models\\User as AdminUser;

$user = new User();
$admin = new AdminUser();

as দিয়ে alias দেওয়া হয়েছে। এটি রিয়েল প্রজেক্টে এবং থার্ড-পার্টি প্যাকেজ ব্যবহারে অত্যন্ত কার্যকর।`,
          code: `<?php
namespace Demo {
    class User { public function getRole() { return "Regular Member"; } }
}

namespace AdminDemo {
    class User { public function getRole() { return "Super Administrator"; } }
}

namespace Consumer {
    use Demo\\User;
    use AdminDemo\\User as AdminUser;

    $regular = new User();
    $admin = new AdminUser();

    echo "1: " . $regular->getRole() . "\n";
    echo "2: " . $admin->getRole();
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `1: Regular Member\n2: Super Administrator`
        },
        {
          title: '৬. Namespace-এর ভিতরে Class Access',
          explanationBn: `একই নেমস্পেসের ভেতরে থাকা ক্লাসগুলো একে অপরকে use ছাড়াই সরাসরি অ্যাক্সেস করতে পারে। কিন্তু ভিন্ন নেমস্পেসের ক্লাসের ক্ষেত্রে use দিতে হয়।`,
          code: `<?php
namespace App\\Services;

class UserService
{
    public function getInfo()
    {
        return "UserService Ready";
    }
}

$service = new UserService();
echo $service->getInfo();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `UserService Ready`
        },
        {
          title: '৭. Function এবং Constant-ও Namespace-এর মধ্যে থাকতে পারে',
          explanationBn: `কেবল ক্লাস নয়, ফাংশন ও কনস্ট্যান্টও নেমস্পেসের ভেতরে আবদ্ধ থাকতে পারে।
namespace App\\Helpers;
const VERSION = "1.0";
function formatName($name) { return strtoupper($name); }`,
          code: `<?php
namespace App\\Helpers;

const APP_VERSION = "2.5.0";

function greet(string $name): string {
    return "Hello, " . strtoupper($name);
}

echo "Version: " . APP_VERSION . "\n";
echo greet("abbad");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Version: 2.5.0\nHello, ABBAD`
        },
        {
          title: '৮. Global Namespace ⭐ (রুট ব্যাকস্ল্যাশ \\)',
          explanationBn: `Namespace-এর বাইরে থাকা সমস্ত ক্লাস বা PHP-এর বিল্ট-ইন ক্লাস হলো Global Namespace-এর অংশ।
যেমন: DateTime, Exception, PDO ইত্যাদি।
কোনো নেমস্পেস ফাইলের ভেতর থেকে এগুলো ব্যবহার করতে শুরুতে ব্যাকস্ল্যাশ (\\) দিতে হয়:
$user = new \\User();
$date = new \\DateTime();
শুরুর \\ মানে Root Global Namespace।`,
          code: `<?php
namespace App\\Reports;

// গ্লোবাল পিএইচপি DateTime কল করা হচ্ছে
$now = new \\DateTime("2026-01-01");
echo "Global DateTime Year: " . $now->format("Y");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Global DateTime Year: 2026`
        },
        {
          title: '৯. Namespace + Database Example ⭐⭐⭐ (আর্কিটেকচার)',
          explanationBn: `বাস্তব প্রজেক্ট স্ট্রাকচার:
app/
├── Models/
│   └── User.php       (namespace App\\Models;)
├── Services/
│   └── UserService.php (namespace App\\Services;)
└── Controllers/
    └── UserController.php (namespace App\\Http\\Controllers;)

UserService.php:
namespace App\\Services;
use App\\Models\\User;

class UserService {
    public function create(): User {
        return new User();
    }
}
এভাবেই বড় PHP/Laravel প্রজেক্টে কোড সুন্দরভাবে বিন্যস্ত রাখা হয়।`,
          code: `<?php
echo "Enterprise Architecture: Clean Separation of Concerns mapped by namespaces.";
?>`,
          codeLanguage: 'Architecture Diagram'
        },
        {
          title: '১০. Namespace + Folder এক জিনিস নয় ⚠️ (PSR-4 Autoloading)',
          explanationBn: `• Namespace:
  namespace App\\Models; (এটা logical name/identity)
• Folder:
  app/Models/User.php (এটা physical file location)

Composer এর PSR-4 Autoloading নিয়মের মাধ্যমে নেমস্পেস এবং ফাইল ডিরেক্টরিকে ১:১ অনুকরণে ম্যাপ করা হয়।`,
          code: `<?php
echo "PSR-4 Mapping: 'App\\\\' => 'app/'\n";
echo "Class 'App\\Models\\User' => loaded from 'app/Models/User.php'";
?>`,
          codeLanguage: 'PSR-4 Concept'
        },
        {
          title: '১১. Namespace কেন এত গুরুত্বপূর্ণ? ⭐⭐⭐',
          explanationBn: `Real-world project-এ Namespace এর গুরুত্ব:
✓ Name conflict এড়ায় (একই নামের দুই লাইব্রেরির ক্লাস নিরাপদে থাকে)
✓ Code organize করে (পরিচ্ছন্ন ডোমেন আর্কিটেকচার)
✓ Large project maintain করা সহজ হয়
✓ Composer PSR-4 Autoloading-এর ভিত্তি
✓ Laravel ফ্রেমওয়ার্কে প্রতিদিন ব্যবহার হয়
✓ Class dependency পরিষ্কার করে`,
          code: `<?php
echo "Essential for Modern PHP: Without namespaces, modern modular PHP & Composer would not be possible.";
?>`,
          codeLanguage: 'Industry Value'
        },
        {
          title: '১২. 🎯 MUST REMEMBER',
          explanationBn: `🎯 MUST REMEMBER:
• Namespace: namespace App\\Models;
• Import: use App\\Models\\User;
• Alias: use App\\Models\\User as UserModel;
• Global Namespace: \\ClassName (যেমন: new \\DateTime())

⭐ সহজভাবে:
Namespace → Class-এর unique address
namespace → Class কোথায় belong করে
use → অন্য Namespace-এর Class import করে
as → নতুন নাম/alias দেয়

Laravel-এ দেখবে:
• App\\Models\\User
• App\\Http\\Controllers\\UserController
• App\\Services\\PaymentService
• App\\Repositories\\UserRepository`,
          code: `<?php
echo "Namespace = Unique Address for Classes, Functions and Constants.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'নেমস্পেস একই নামের ক্লাসের মধ্যে সংঘর্ষ (Name Collision) দূর করে।',
        'use স্টেটমেন্ট দিয়ে অন্য নেমস্পেসের ক্লাস নিজের ফাইলে ইমপোর্ট করা হয়।',
        'as কিওয়ার্ড দিয়ে অ্যালিয়াসিং করে ক্লাসের বিকল্প নাম নির্ধারণ করা যায়।',
        'নেমস্পেসের ভেতর থেকে গ্লোবাল পিএইচপি ক্লাস (যেমন: \\DateTime, \\PDO) কল করতে রুট ব্যাকস্ল্যাশ (\\) আবশ্যক।',
        'কম্পোজারের PSR-4 অটোলোডিং নেমস্পেসের ডিরেক্টরি ম্যাপিংয়ের ওপর ভিত্তি করে চলে।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: ই-কমার্স সার্ভিস ও মডেল সেপারেশন',
          descriptionBn: 'App\\Models\\Order এবং App\\Services\\OrderService নেমস্পেস আর্কিটেকচার।',
          code: `<?php
namespace App\\Models {
    class Order {
        public int $id = 101;
        public float $amount = 2500.0;
    }
}

namespace App\\Services {
    use App\\Models\\Order;

    class OrderService {
        public function printInvoice(Order $order): void {
            echo "Invoice for Order #{$order->id}: ৳{$order->amount}";
        }
    }

    $service = new OrderService();
    $service->printInvoice(new Order());
}
?>`
        }
      ]
    }
  },
  {
    id: 'php-oop-iterables',
    title: 'PHP Iterables',
    category: 'oop',
    tag: 'Iteration & Collections',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'iterable টাইপ হিন্ট, Array ও Traversable অবজেক্ট, Generator (yield), is_iterable(), এবং মেমোরি-সাশ্রয়ী ডেটা প্রসেসিং।',
    sampleCode: `<?php
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>PHP Iterables & Generator Live Demo</h3>";

// ১. ফাংশন যা iterable টাইপ গ্রহণ করে (Array অথবা Traversable Object)
function printItems(iterable $items): void {
    foreach ($items as $key => $item) {
        echo "<span style='display:inline-block; background:#e2e8f0; padding:2px 8px; border-radius:4px; margin:2px;'>{$key} => {$item}</span> ";
    }
    echo "<br>";
}

// ২. Generator ফাংশন যা yield ব্যবহার করে (মেমোরি সাশ্রয়ী Traversable)
function numberStream(int $limit): Generator {
    for ($i = 1; $i <= $limit; $i++) {
        yield "Item #{$i}";
    }
}

echo "<p style='margin:3px 0; color:#475569;'><b>1. Iterating standard Array:</b></p>";
$languages = ["PHP", "Laravel", "MySQL", "JavaScript"];
printItems($languages);

echo "<p style='margin:6px 0 3px 0; color:#475569;'><b>2. Iterating Generator Stream (yield):</b></p>";
printItems(numberStream(4));

// ৩. is_iterable() চেক
echo "<p style='margin:6px 0 0 0; color:#059669;'>✓ is_iterable(\$languages): <b>" . (is_iterable($languages) ? 'true' : 'false') . "</b></p>";
echo "<p style='margin:2px 0 0 0; color:#059669;'>✓ is_iterable(numberStream(4)): <b>" . (is_iterable(numberStream(4)) ? 'true' : 'false') . "</b></p>";
echo "<p style='margin:2px 0 0 0; color:#dc2626;'>✗ is_iterable('Hello'): <b>" . (is_iterable("Hello") ? 'true' : 'false') . "</b></p>";

echo "<p style='margin:8px 0 0 0; font-size:13px; color:#64748b;'>iterable accepts both in-memory arrays and on-demand streaming generators seamlessly.</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `iterable হলো একটি PHP type declaration (PHP 7.1+ এ প্রবর্তিত), যা এমন data গ্রহণ করে যেটাকে foreach দিয়ে iterate করা যায়।

অর্থাৎ:
iterable = Array অথবা Traversable Object

এটি ফাংশনের প্যারামিটার ও রিটার্ন টাইপে সাধারণ অ্যারে এবং জেনারেটর/ইটারেটর উভয় ডেটা টাইপ নির্বিঘ্নে ব্যবহারের স্বাধীনতা প্রদান করে।`,
      lessonSections: [
        {
          title: '১. Basic Example (iterable টাইপ ঘোষণা)',
          explanationBn: `function printItems(iterable $items): void
{
    foreach ($items as $item) {
        echo $item;
    }
}

printItems([10, 20, 30]); // Array -> iterable ✅`,
          code: `<?php
function printItems(iterable $items): void
{
    foreach ($items as $item) {
        echo $item . " ";
    }
}

printItems([10, 20, 30]);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `10 20 30 `
        },
        {
          title: '২. Array দিয়ে Iterable ব্যবহার',
          explanationBn: `সাধারণ PHP ইন্ডেক্সড ও অ্যাসোসিয়েটিভ অ্যারে প্রাকৃতিকভাবেই iterable এর শর্ত পূরণ করে।`,
          code: `<?php
function show(iterable $data): void
{
    foreach ($data as $value) {
        echo $value . " ";
    }
}

show(["PHP", "Laravel", "MySQL"]);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `PHP Laravel MySQL `
        },
        {
          title: '৩. Generator দিয়েও Iterable (yield কীওয়ার্ড)',
          explanationBn: `Generator ফাংশন yield কীওয়ার্ড ব্যবহার করে ডেটা স্ট্রিম করে। এটি মেমরিতে সম্পূর্ণ অ্যারে লোড না করেই Traversable অবজেক্ট রিটার্ন করে। জেনারেটরও সম্পূর্ণ iterable ✅`,
          code: `<?php
function numbers(): Generator
{
    yield 1;
    yield 2;
    yield 3;
}

function show(iterable $data): void
{
    foreach ($data as $value) {
        echo $value . " ";
    }
}

show(numbers());
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `1 2 3 `
        },
        {
          title: '৪. iterable আসলে কী কী গ্রহণ করে?',
          explanationBn: `iterable মূলত নিম্নলিখিত ডেটা টাইপসমূহ গ্রহণ করে:
✓ Array (ইন্ডেক্সড ও অ্যাসোসিয়েটিভ)
✓ Traversable Object
✓ Generator (yield)
✓ Iterator
✓ IteratorAggregate

function process(iterable $data) {
    foreach ($data as $item) { ... }
}
এতে function শুধু Array-এর মধ্যে সীমাবদ্ধ থাকে না।`,
          code: `<?php
echo "Accepts: Arrays, Generators, IteratorAggregate, and any Traversable objects.";
?>`,
          codeLanguage: 'Type Support'
        },
        {
          title: '৫. array বনাম iterable ⭐⭐⭐ (তুলনা)',
          explanationBn: `• array:
  function process(array $data) {}
  এটি কেবল এবং কেবলমাত্র সাধারণ Array গ্রহণ করবে। কোনো Generator বা Traversable অবজেক্ট দিলে TypeError দেবে।

• iterable:
  function process(iterable $data) {}
  এটি Array + Traversable Object উভয়ই গ্রহণ করবে।

তাই reusable function/API/service তৈরি করার সময় iterable অনেক বেশি flexible।`,
          code: `<?php
echo "array    -> Strictly Arrays only\n";
echo "iterable -> Arrays + Traversable Objects + Generators";
?>`,
          codeLanguage: 'Comparison'
        },
        {
          title: '৬. Return Type হিসেবে iterable ব্যবহার',
          explanationBn: `ফাংশনের রিটার্ন টাইপ হিসেবেও iterable ঘোষণা করা যায়। ফাংশন চাইলে সাধারণ অ্যারে অথবা মেমোরি সাশ্রয়ী জেনারেটর রিটার্ন করতে পারে।`,
          code: `<?php
function getUsers(): iterable
{
    return ["Abbad", "Rahim", "Karim"];
}

function getNumbers(): iterable
{
    yield 1;
    yield 2;
    yield 3;
}

foreach (getUsers() as $u) { echo "$u "; }
foreach (getNumbers() as $n) { echo "#$n "; }
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad Rahim Karim #1 #2 #3 `
        },
        {
          title: '৭. Real-World Example ⭐⭐⭐ (ডিপেনডেন্ট ডেটা প্রসেসর)',
          explanationBn: `বাস্তব প্রজেক্টে ডেটাবেজ সার্ভিস কখনো অ্যারে রিটার্ন করতে পারে, আবার কখনো কার্সার বা জেনারেটর ইটারেটর দিতে পারে। caller ফাংশন iterable টাইপ দিয়ে উভয়কেই সমান স্বচ্ছন্দে এক্সপোর্ট বা প্রসেস করতে পারে।`,
          code: `<?php
function exportUsers(iterable $users): void
{
    foreach ($users as $user) {
        echo "Exporting: {$user}\n";
    }
}

// অ্যারে দিয়ে কল
exportUsers(["User A", "User B"]);

// জেনারেটর দিয়ে কল
function userGenerator(): Generator {
    yield "Streamed User C";
    yield "Streamed User D";
}
exportUsers(userGenerator());
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Exporting: User A\nExporting: User B\nExporting: Streamed User C\nExporting: Streamed User D`
        },
        {
          title: '৮. is_iterable() ফাংশন',
          explanationBn: `কোনো ভ্যারিয়েবল foreach দিয়ে লুপ করা যাবে কিনা তা রানটাইমে চেক করার জন্য পিএইচপিতে is_iterable() বিল্ট-ইন ফাংশন রয়েছে।`,
          code: `<?php
$data = [1, 2, 3];
$str = "Hello World";

echo "Is array iterable? " . (is_iterable($data) ? "Yes" : "No") . "\n";
echo "Is string iterable? " . (is_iterable($str) ? "Yes" : "No");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Is array iterable? Yes\nIs string iterable? No`
        },
        {
          title: '৯. foreach বনাম iterable',
          explanationBn: `• foreach হলো লুপ বা iteration করার mechanism/syntax।
• iterable হলো type declaration যা ডেটা ভ্যালিডেট করে।

function process(iterable $items) {
    foreach ($items as $item) { ... }
}
iterable → কী ধরনের data গ্রহণ করবে
foreach → data কীভাবে একে একে iterate করবে`,
          code: `<?php
echo "iterable = Type Hint Contract | foreach = Iteration Control Structure";
?>`,
          codeLanguage: 'Concept Distinction'
        },
        {
          title: '১০. PHP Version এবং গুরুত্বপূর্ণ সতর্কতা ⚠️',
          explanationBn: `• iterable type PHP 7.1+ থেকে উপলভ্য।
⚠️ Important সতর্কতা:
iterable মানে "যেকোনো Object" নয়। এটি কেবল Array অথবা Traversable হতে হবে।
অন্য যেকোনো অবজেক্ট বা প্রিমিটিভ টাইপ (যেমন string, int) পাঠালে PHP Fatal TypeError দেবে:
function test(iterable $data) {}
test("Hello"); // ❌ TypeError: Argument #1 must be of type iterable, string given`,
          code: `<?php
function test(iterable $data) {
    return true;
}

try {
    test(["valid"]);
    echo "Array passed successfully.\n";
    // test("invalid string"); // ❌ Throws TypeError
} catch (TypeError $e) {
    echo "Caught TypeError: " . $e->getMessage();
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Array passed successfully.`
        },
        {
          title: '১১. 🎯 MUST REMEMBER',
          explanationBn: `🎯 MUST REMEMBER:
iterable = Array OR Traversable

সবচেয়ে গুরুত্বপূর্ণ:
function process(iterable $data): void
{
    foreach ($data as $item) {
        // ...
    }
}

• array → শুধু Array
• iterable → Array + Traversable (Generator, Iterator)

⭐ Real-world PHP/Laravel-এ API result, collection, database cursor, generator, iterator ইত্যাদি flexibly handle করার জন্য iterable কাজে লাগে।`,
          code: `<?php
echo "iterable: Universal type hint for foreach-compatible data collections.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'iterable হলো পিএইচপির একটি সিউডো-টাইপ (Array বা Traversable অবজেক্ট)।',
        'function(iterable $items) দিয়ে অ্যারে ও জেনারেটর উভয়কেই এক ফাংশনে গ্রহণ করা যায়।',
        'yield কীওয়ার্ড দিয়ে তৈরি জেনারেটর মেমোরি খরচ না করে ট্রাভার্সেবল ডেটা স্ট্রিম করে।',
        'is_iterable($val) দিয়ে রানটাইমে লুপ-যোগ্যতা যাচাই করা যায়।',
        'সাধারণ স্ট্রিং বা অবজেক্ট যা Traversable ইমপ্লিমেন্ট করে না তা iterable নয়।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ: লার্জ ডেটাবেজ রেকর্ডস ব্যাচ প্রসেসর',
          descriptionBn: 'iterable গ্রহণ করে মেমরি সাশ্রয়ী চাংক প্রসেসর তৈরি।',
          code: `<?php
function batchProcessor(iterable $records): void {
    $processed = 0;
    foreach ($records as $row) {
        $processed++;
        echo "Processed #$processed: {$row['title']}<br>";
    }
    echo "Total $processed records processed smoothly without memory spikes.";
}

function fetchLargeDataset(): Generator {
    yield ['title' => 'Invoice #1001'];
    yield ['title' => 'Invoice #1002'];
    yield ['title' => 'Invoice #1003'];
}

batchProcessor(fetchLargeDataset());
?>`
        }
      ]
    }
  }
];
