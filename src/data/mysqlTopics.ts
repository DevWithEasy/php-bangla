import { TopicItem } from '../types';

export const MYSQL_TOPICS: TopicItem[] = [
  {
    id: 'php-pdo-connection',
    title: 'PHP PDO & Secure Database',
    category: 'mysql',
    tag: 'Database & PDO',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PDO (PHP Data Objects), DSN স্ট্রিং ও পারফেক্ট এরর মোড কনফিগারেশন।',
    sampleCode: `<?php
// মেমরি ভিত্তিক SQLite দিয়ে PDO টেস্ট
try {
    $pdo = new PDO('sqlite::memory:');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // টেবিল তৈরি
    $pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");
    
    // ডাটা ইনসার্ট
    $pdo->exec("INSERT INTO users (name, email) VALUES ('Robiul', 'robiul@example.com')");

    // ফেচ করা
    $stmt = $pdo->query("SELECT * FROM users");
    $users = $stmt->fetchAll();

    echo "<h3>PDO মেমোরি ডাটাবেস টেস্ট:</h3>";
    print_r($users);
} catch (PDOException $e) {
    echo "ডাটাবেস কানেকশন এরর: " . $e->getMessage();
}
?>`,
    deepDive: {
      conceptBn: `পুরোনো mysql_* ফাংশন বহু বছর আগেই অবলুপ্ত করা হয়েছে। আধুনিক পিএইচপিতে ডাটাবেস কমিউনিকেশনের জন্য PDO একমাত্র সার্বজনীন স্ট্যান্ডার্ড, কারণ এটি MySQL, PostgreSQL, SQLite, Oracle সব ডাটাবেসে এক ইউনিফাইড ইন্টারফেস প্রদান করে।`,
      keyPointsBn: [
        'সর্বদা PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION সেট করুন যাতে কুয়েরির ব্যর্থতায় সাইলেন্ট ফল্ট না হয়ে এক্সেপশন রেইজ হয়।',
        'PDO::ATTR_EMULATE_PREPARES => false রাখুন যাতে ডাটাবেস ইঞ্জিন নিজে ট্রু প্রিপেয়ার্ড স্টেটমেন্ট তৈরি করে।'
      ]
    }
  },
  {
    id: 'php-pdo-prepared-statements',
    title: 'PHP Prepared Statements (Anti-SQLi)',
    category: 'mysql',
    tag: 'Security Essential',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'SQL Injection-এর বিরুদ্ধে ১০০% সুরক্ষা: প্যারামিটারাইজড কুয়েরি ও টাইপ বাইন্ডিং।',
    sampleCode: `<?php
$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("CREATE TABLE products (id INTEGER PRIMARY KEY, title TEXT, price REAL)");
$pdo->exec("INSERT INTO products (title, price) VALUES ('মেকানিক্যাল কীবোর্ড', 4500.00)");

// ইউজার ইনপুট (যা আক্রমণকারী হতে পারে)
$userInputTitle = "মেকানিক্যাল কীবোর্ড";

// প্রিপেয়ার্ড স্টেটমেন্ট (SQL ইনজেকশন অসম্ভব!)
$stmt = $pdo->prepare("SELECT * FROM products WHERE title = :title");
$stmt->execute(['title' => $userInputTitle]);
$product = $stmt->fetch(PDO::FETCH_ASSOC);

echo "খুঁজে পাওয়া প্রোডাক্ট:<br>";
echo "নাম: " . $product['title'] . "<br>মূল্য: ৳" . $product['price'];
?>`,
    deepDive: {
      conceptBn: `SQL ইনজেকশন ঘটে যখন ইউজারের ইনপুটকে সরাসরি SQL কুয়েরি স্ট্রিংয়ের সাথে কনক্যাটেনেশন (String Concatenation) করা হয়। প্রিপেয়ার্ড স্টেটমেন্টে ডাটাবেস ইঞ্জিন প্রথমে কুয়েরির কাঠামো কম্পাইল করে এবং পরে ডেটাকে সম্পূর্ণ পৃথকভাবে বাইন্ড করে, ফলে কোনো ইনপুটই কমান্ড হিসেবে এক্সিকিউট হতে পারে না।`,
      keyPointsBn: [
        'কখনোই "SELECT * FROM users WHERE email = \'$email\'" লিখবেন না।',
        'সর্বদা prepare() এবং execute([\'key\' => $val]) ব্যবহার করুন।'
      ],
      security: {
        vulnerabilityType: 'SQL Injection (CWE-89)',
        attackVectorBn: '\' OR \'1\'=\'1 দিয়ে লগইন বাইপাস বা UNION SELECT দিয়ে সম্পূর্ণ ডাটাবেস চুরি।',
        preventionRuleBn: 'শতভাগ প্যারামিটারাইজড প্রিপেয়ার্ড স্টেটমেন্ট ব্যবহার করুন। কোনো ডায়নামিক ভ্যারিয়েবল সরাসরি কুয়েরিতে কনক্যাট করা যাবে না।'
      }
    }
  }
];
