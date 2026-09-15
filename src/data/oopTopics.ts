import { TopicItem } from '../types';

export const OOP_TOPICS: TopicItem[] = [
  {
    id: 'php-oop-classes',
    title: 'PHP Classes and Objects',
    category: 'oop',
    tag: 'OOP Basics',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'ক্লাস ব্লুপ্রিন্ট, অবজেক্ট ইনস্ট্যানশিয়েট করা এবং $this স্পেশাল ভেরিয়েবল।',
    sampleCode: `<?php
class Car {
    public string $brand;
    public string $color;

    public function describe(): string {
        return "এই গাড়িটি একটি " . $this->color . " রঙের " . $this->brand . "।";
    }
}

$myCar = new Car();
$myCar->brand = "Toyota";
$myCar->color = "সাদা";

echo $myCar->describe();
?>`,
    deepDive: {
      conceptBn: `ক্লাস হলো অবজেক্টের ব্লুপ্রিন্ট বা নকশা, আর অবজেক্ট হলো সেই নকশা থেকে মেমরিতে তৈরি বাস্তব দৃষ্টান্ত (Instance)। ক্লাসের মেম্বার ভেরিয়েবলগুলোকে প্রপার্টি এবং ফাংশনগুলোকে মেথড বলা হয়।`,
      keyPointsBn: [
        '$this নির্দেশ করে বর্তমান অবজেক্টের ইনস্ট্যান্সকে।',
        'PHP 8.0 থেকে প্রপার্টির টাইপ ডিক্লেয়ারেশন (Typed Properties) সাপোর্ট করে।'
      ]
    }
  },
  {
    id: 'php-oop-constructor-promotion',
    title: 'PHP Constructor Promotion',
    category: 'oop',
    tag: 'PHP 8 Clean Code',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP 8 এর সবচেয়ে প্রিয় বৈশিষ্ট্য: কনস্ট্রাক্টর প্রপার্টি প্রমোশন ও রিডঅনলি ক্লাস।',
    sampleCode: `<?php
// PHP 8 Constructor Property Promotion
class Product {
    public function __construct(
        public string $name,
        public float $price,
        public int $stock = 0
    ) {}

    public function getSummary(): string {
        return "$this->name - ৳$this->price (মজুদ: $this->stock টি)";
    }
}

$laptop = new Product("MacBook Pro", 225000.0, 5);
echo $laptop->getSummary();
?>`,
    deepDive: {
      conceptBn: `PHP 8-এর আগে প্রপার্টি ডিফাইন করতে হতো, কনস্ট্রাক্টরের প্যারামিটারে নিতে হতো এবং $this->prop = $prop অ্যাসাইন করতে হতো। কনস্ট্রাক্টর প্রমোশন এই বয়লারপ্লেট কোডকে এক লাইনে নামিয়ে এনেছে।`,
      keyPointsBn: [
        'কনস্ট্রাক্টরের আর্গুমেন্টে সরাসরি public/protected/private লিখলে স্বয়ংক্রিয়ভাবে ক্লাসের প্রপার্টি ডিক্লেয়ার ও অ্যাসাইন হয়ে যায়।',
        'PHP 8.2-এ পুরো ক্লাসকে readonly ঘোষণা করা যায় (readonly class Invoice { ... })।'
      ]
    }
  },
  {
    id: 'php-oop-inheritance',
    title: 'PHP Inheritance & Polymorphism',
    category: 'oop',
    tag: 'Inheritance',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'extends কীওয়ার্ড, parent:: কনস্ট্রাক্টর ওভাররাইড এবং পলিমরফিজম।',
    sampleCode: `<?php
abstract class PaymentGateway {
    abstract public function pay(float $amount): string;
}

class BkashGateway extends PaymentGateway {
    public function pay(float $amount): string {
        return "বিকাশে ৳$amount পেমেন্ট সম্পন্ন হয়েছে।";
    }
}

class NagadGateway extends PaymentGateway {
    public function pay(float $amount): string {
        return "নগদে ৳$amount পেমেন্ট সম্পন্ন হয়েছে।";
    }
}

function processCheckout(PaymentGateway $gateway, float $amount) {
    echo $gateway->pay($amount) . "<br>";
}

processCheckout(new BkashGateway(), 1500.0);
processCheckout(new NagadGateway(), 2200.0);
?>`,
    deepDive: {
      conceptBn: `ইনহেরিটেন্সের মাধ্যমে চাইল্ড ক্লাস প্যারেন্ট ক্লাসের কার্যকারিতা উত্তরাধিকারসূত্রে পায় ও প্রয়োজনমতো বর্ধিত করে। তবে আধুনিক আর্কিটেকচারে "Composition over Inheritance" নীতি মেনে চলা হয় যাতে অতিরিক্ত টাইট কাপলিং এড়ানো যায়।`,
      keyPointsBn: [
        'abstract মেথড প্যারেন্ট ক্লাসে কেবল সিগনেচার ডিফাইন করে, চাইল্ড ক্লাসকে অবশ্যই তা বাস্তবায়ন করতে হয়।',
        'final কীওয়ার্ড দিলে কোনো ক্লাসকে ইনহেরিট করা বা মেথডকে ওভাররাইড করা নিষিদ্ধ করা যায়।'
      ]
    }
  },
  {
    id: 'php-oop-interfaces-traits',
    title: 'PHP Interfaces & Traits',
    category: 'oop',
    tag: 'Decoupling',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'implements, ইন্টারফেস কন্ট্রাক্ট এবং মাল্টিপল ইনহেরিটেন্সের পরিপূরক Traits।',
    sampleCode: `<?php
interface LoggerInterface {
    public function log(string $msg): void;
}

trait TimestampTrait {
    public function getFormattedTimestamp(): string {
        return date('Y-m-d H:i:s');
    }
}

class FileLogger implements LoggerInterface {
    use TimestampTrait;

    public function log(string $msg): void {
        echo "[" . $this->getFormattedTimestamp() . "] " . $msg . "<br>";
    }
}

$logger = new FileLogger();
$logger->log("ইউজার লগইন সফল!");
?>`,
    deepDive: {
      conceptBn: `ইন্টারফেস হলো একটি স্ট্রং কন্ট্রাক্ট যা ক্লাসের আউটওয়ার্ড এপিআই সংজ্ঞায়িত করে। অন্যদিকে Trait একাধিক সম্পর্কিত ক্লাসের মধ্যে মেথড কোড শেয়ার করতে ব্যবহৃত হয়।`,
      keyPointsBn: [
        'ডিপেনডেন্সি ইনজেকশনের ভিত্তি হলো ইন্টারফেস যাতে যেকোনো সময় মক বা বিকল্প ইমপ্লিমেন্টেশন অদলবদল করা যায়।',
        'একটি ক্লাস একাধিক ইন্টারফেস ইমপ্লিমেন্ট করতে পারে (implements A, B, C)।'
      ]
    }
  }
];
