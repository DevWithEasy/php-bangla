import { TopicItem } from '../types';

export const MYSQL_TOPICS: TopicItem[] = [
  {
    id: 'mysql-database',
    title: 'MySQL Database',
    category: 'mysql',
    tag: 'RDBMS & Architecture',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP + MySQL ডাটাবেস আর্কিটেকচার, RDBMS, CRUD সাইকেল, SQL Injection প্রতিরোধ ও প্রজেক্ট ফ্লো।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP + MySQL Database Architecture & CRUD Lifecycle</h2>";

// ১. মেমোরি ডাটাবেসে টেবিল তৈরি (Real-world simulation using PDO)
try {
    $pdo = new PDO("sqlite::memory:");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // Schema Definition
    $pdo->exec("CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");
    echo "<p style='color:#4ade80;'>✓ ১. Users টেবিল সফলভাবে তৈরি হয়েছে (Schema Initialized)।</p>";

    // ২. Create / Insert Data with Password Hashing & Prepared Statement
    echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. CREATE: Data Insertion with Prepared Statement & Hashing</h4>";
    $plainPassword = "SecurePassword@2026";
    $hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (name, email, password_hash) VALUES (:name, :email, :password_hash)");
    $stmt->execute([
        'name'          => 'Abbad Ibn Bishr',
        'email'         => 'abbad@example.com',
        'password_hash' => $hashedPassword
    ]);
    $userId = $pdo->lastInsertId();
    echo "নতুন ব্যবহারকারী নিবন্ধিত হয়েছে! ID: <code style='color:#38bdf8;'>#$userId</code><br>";
    echo "Password Hash (DB Stored): <code style='color:#94a3b8; font-size:12px;'>" . substr($hashedPassword, 0, 30) . "...</code><br>";

    // ৩. Read / Select Data with Parameterized Query
    echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. READ: Parameterized Query (SQL Injection Safe)</h4>";
    $searchEmail = "abbad@example.com";
    $selectStmt = $pdo->prepare("SELECT id, name, email, created_at FROM users WHERE email = :email");
    $selectStmt->execute(['email' => $searchEmail]);
    $user = $selectStmt->fetch();

    if ($user) {
        echo "খুঁজে পাওয়া ইউজার: <b>{$user['name']}</b> ({$user['email']}) - Joined: {$user['created_at']}<br>";
    }

    // ৪. Authentication Verification (password_verify)
    echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. AUTHENTICATION: Password Verification</h4>";
    $inputPass = "SecurePassword@2026";
    $isMatch = password_verify($inputPass, $hashedPassword);
    echo "Login Attempt with '$inputPass': " . ($isMatch ? "<span style='color:#4ade80;'>✓ Password Matched</span>" : "<span style='color:#f43f5e;'>✗ Invalid Password</span>") . "<br>";

    // ৫. Update Operation
    echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৫. UPDATE: Modifying User Profile</h4>";
    $updateStmt = $pdo->prepare("UPDATE users SET name = :name WHERE id = :id");
    $updateStmt->execute(['name' => 'Abbad Ibn Bishr (Senior Dev)', 'id' => $userId]);
    echo "ইউজার নাম আপডেট হয়েছে! Affected Rows: <code style='color:#fbbf24;'>" . $updateStmt->rowCount() . "</code><br>";

    // ৬. Read All Records
    echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৬. READ ALL: Current Database State</h4>";
    $allUsers = $pdo->query("SELECT id, name, email FROM users")->fetchAll();
    echo "<table style='width:100%; border-collapse:collapse; margin-top:8px; font-size:14px;'>";
    echo "<tr style='background:#1e293b; color:#94a3b8; text-align:left;'><th style='padding:8px;'>ID</th><th style='padding:8px;'>Name</th><th style='padding:8px;'>Email</th></tr>";
    foreach ($allUsers as $row) {
        echo "<tr style='border-bottom:1px solid #334155;'>";
        echo "<td style='padding:8px;'>#{$row['id']}</td>";
        echo "<td style='padding:8px; color:#38bdf8;'>{$row['name']}</td>";
        echo "<td style='padding:8px; color:#4ade80;'>{$row['email']}</td>";
        echo "</tr>";
    }
    echo "</table>";

} catch (PDOException $e) {
    echo "<p style='color:#f43f5e;'>Database Error: " . htmlspecialchars($e->getMessage()) . "</p>";
}
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP নিজে কোনো ডাটাবেস নয়; PHP হলো একটি সার্ভার-সাইড ব্যাকএন্ড স্ক্রিপ্টিং ল্যাঙ্গুয়েজ এবং MySQL হলো একটি Relational Database Management System (RDBMS)। আধুনিক ওয়েব অ্যাপ্লিকেশনে ক্লায়েন্ট ব্রাউজার থেকে সাবমিট করা ডেটা PHP ভ্যালিডেট করে PDO (PHP Data Objects) ড্রাইভারে পাঠায়, যা নিরাপদ SQL কুয়েরির মাধ্যমে MySQL সার্ভারে টেবিল আকারে রো ও কলামে স্ট্রাকচার্ড ডেটা সংরক্ষণ ও রিট্রিভ করে।`,
      lessonSections: [
        {
          title: '১. Database ও RDBMS কী?',
          explanationBn: `Database হলো নিয়মতান্ত্রিকভাবে ডেটা সংরক্ষণ ও দ্রুত রিট্রিভ করার ডিজিটাল ভাণ্ডার। MySQL হলো একটি Relational Database Management System (RDBMS), যার মূল স্তম্ভগুলো হলো Table (নির্দিষ্ট ডোমেইন ডেটা), Row/Record (একক এন্ট্রি), Column/Field (নির্দিষ্ট ডেটা প্রোপার্টি), Primary Key (অনন্য শনাক্তকারী) এবং Foreign Key (টেবিল সম্পর্ক)।`,
          code: `<?php
// RDBMS Table Schema Concept in SQL
$createSchema = "CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";

echo "<pre style='color:#38bdf8;'>$createSchema</pre>";
?>`,
          codeLanguage: 'SQL & PHP Definition',
          outputPreview: `CREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,
          noteBn: 'MySQL-এ সর্বদা InnoDB ইঞ্জিন এবং utf8mb4 ক্যারেক্টার সেট ব্যবহার করবেন যাতে ইমোজি ও ইউনিকোড সাপোর্ট থাকে।'
        },
        {
          title: '২. PHP ও MySQL রিকোয়েস্ট ফ্লো আর্কিটেকচার',
          explanationBn: `User (Browser) ➔ HTTP POST Request ➔ PHP Server (Controller) ➔ Validation ➔ PDO Driver ($pdo->prepare()) ➔ MySQL Server (TCP 3306 / InnoDB) ➔ Result Set ➔ PHP ($stmt->fetch()) ➔ Response to Browser.`,
          code: `<?php
// Request Lifecycle Flow Simulation
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE logs (id INTEGER PRIMARY KEY, action TEXT, ip TEXT)");

$stmt = $pdo->prepare("INSERT INTO logs (action, ip) VALUES (?, ?)");
$stmt->execute(['User Login', '127.0.0.1']);

echo "Query Executed Successfully! Inserted ID: #" . $pdo->lastInsertId();
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Query Executed Successfully! Inserted ID: #1`,
          noteBn: 'ডাটাবেস কানেকশন প্রতি রিকোয়েস্টে একবার তৈরি করে প্রয়োজন শেষে বন্ধ করা উচিত।'
        },
        {
          title: '৩. CRUD সাইকেল ও বাস্তব ডোমেইন ম্যাপিং',
          explanationBn: `• C (Create - INSERT INTO): নতুন ইউজার বা প্রোডাক্ট তৈরি।\n• R (Read - SELECT): ক্যাটালগ দেখা বা লগইন চেক।\n• U (Update - UPDATE SET): প্রোফাইল এডিট বা ব্যালেন্স আপডেট।\n• D (Delete - DELETE FROM): অ্যাকাউন্ট বা কার্ট আইটেম মোছা।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE items (id INTEGER PRIMARY KEY, title TEXT, price INT)");

// 1. Create
$pdo->prepare("INSERT INTO items (title, price) VALUES (?, ?)")->execute(['Laptop', 1200]);

// 2. Read
$item = $pdo->query("SELECT * FROM items WHERE id = 1")->fetch(PDO::FETCH_ASSOC);

// 3. Update
$pdo->prepare("UPDATE items SET price = ? WHERE id = ?")->execute([1150, 1]);

// 4. Delete
// $pdo->prepare("DELETE FROM items WHERE id = ?")->execute([1]);

echo "Item: {$item['title']} | Updated Price: $1150";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Item: Laptop | Updated Price: $1150`,
          noteBn: 'CRUD অপারেশন হলো যে কোনো ওয়েব অ্যাপ্লিকেশনের ভিত্তি।'
        },
        {
          title: '৪. SQL Injection প্রতিরোধ ও Prepared Statements',
          explanationBn: `কখনোই SQL কুয়েরির সাথে স্ট্রিং কনক্যাটেনেশন করবেন না। সর্বদা PDO prepare() এবং প্যারামিটার বাইন্ডিং ব্যবহার করুন যাতে ডাটা এবং এক্সিকিউটেবল কোড আলাদা থাকে।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT)");
$pdo->exec("INSERT INTO users (email) VALUES ('admin@corp.com')");

$unsafeInput = "' OR '1'='1"; // Malicious Injection

// Safe Parameterized Query
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(['email' => $unsafeInput]);
$result = $stmt->fetch();

echo "Result count with safe parameterized query: " . ($result ? "1" : "0 (No Match - Attack Prevented!)");
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Result count with safe parameterized query: 0 (No Match - Attack Prevented!)`,
          noteBn: 'Prepared Statement ব্যবহারের ফলে SQL Injection ১০০% প্রতিরোধ করা সম্ভব।'
        }
      ],
      keyPointsBn: [
        'PHP ব্যাকএন্ড লজিক চালায় এবং MySQL রিলেশনাল ডেটা সংরক্ষণ করে।',
        'আধুনিক পিএইচপিতে PDO (PHP Data Objects) ডেটাবেজ ইন্টারঅ্যাকশনের একক ইন্ডাস্ট্রি স্ট্যান্ডার্ড।',
        'SQL Injection বন্ধে সর্বদা Parameterized Prepared Statements ব্যবহার করতে হবে।',
        'পাসওয়ার্ড সংরক্ষণে password_hash() এবং লগইনে password_verify() ব্যবহার বাধ্যতামূলক।',
        'ডাটাবেস ক্রেডেনশিয়াল সোর্স কোডে হার্ডকোড না করে Environment Variables (.env) এ রাখতে হয়।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন ১: সম্পূর্ণ ইউজার রেজিস্ট্রেশন ফ্লো (PDO + Password Hashing)',
          descriptionBn: 'নতুন ব্যবহারকারীর তথ্য ভ্যালিডেট করে পাসওয়ার্ড হ্যাশ সহ টেবিলে ইনসার্ট করা।',
          code: `<?php
try {
    $pdo = new PDO("sqlite::memory:", null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    $pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)");

    $name = "Robiul Awal";
    $email = "robiul@example.com";
    $hashedPassword = password_hash("SuperSecret123", PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
    $stmt->execute([
        'name'     => $name,
        'email'    => $email,
        'password' => $hashedPassword
    ]);

    echo "✓ ইউজার রেজিস্ট্রেশন সম্পন্ন! আইডি: #" . $pdo->lastInsertId();
} catch (PDOException $e) {
    echo "ত্রুটি: " . $e->getMessage();
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ও অনিরাপদ কোড
$email = $_POST['email'];
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql); // SQL Injection Vulnerability!`,
        juniorProblems: [
          'ইউজার ইনপুট সরাসরি SQL-এ জুড়ে দেওয়ায় SQL Injection আক্রমণ ঘটতে পারে।',
          'ডাটাবেস ডাম্প বা টেবিল ড্রপ হওয়ার চূড়ান্ত ঝুঁকি থাকে।'
        ],
        seniorCode: `// ✅ সিনিয়র কোড: PDO Prepared Statement
$stmt = $pdo->prepare("SELECT id, name, email FROM users WHERE email = :email");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch();`,
        seniorBenefits: [
          'কোড এবং ডেটা সম্পূর্ণ পৃথক থাকে; SQL Injection অসম্ভব।',
          'টাইপ সেফটি ও ডাটাবেস পোর্টেবিলিটি নিশ্চিত হয়।'
        ],
        architectAdvice: 'ডাটাবেস কানেকশন সর্বদা সিঙ্গলটন (Singleton) বা ডিপেনডেন্সি ইনজেকশন কন্টেইনার দিয়ে ম্যানেজ করুন যাতে কানেকশন পুলিং অপ্টিমাইজড থাকে।'
      },
      zendInternals: {
        opcodesSummary: [
          'NEW (PDO)',
          'INIT_METHOD_CALL (prepare)',
          'INIT_METHOD_CALL (execute)',
          'INIT_METHOD_CALL (fetch)'
        ],
        explanationBn: `PDO C-এক্সটেনশন ড্রাইভার MySQL সার্ভারের সাথে বাইনারি প্রোটোকল সকেটে সংযোগ করে এবং প্যারামিটারাইজড স্টেটমেন্ট হ্যান্ডেল করে।`
      },
      security: {
        vulnerabilityType: 'SQL Injection & Plaintext Credentials Exposure',
        attackVectorBn: 'স্ট্রিং কনক্যাটেনেশনের মাধ্যমে ম্যালিশিয়াস SQL ইনজেক্ট করে প্রাইভেট টেবিল ডেটা এক্সপোজ করা।',
        preventionRuleBn: 'কখনোই কুয়েরিতে ভেরিয়েবল কনক্যাট করবেন না; সর্বদা PDO Prepared Statement ব্যবহার করুন।'
      }
    }
  },
  {
    id: 'mysql-connect',
    title: 'MySQL Connect',
    category: 'mysql',
    tag: 'PDO Connection & Error Handling',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'MySQL কানেকশন আর্কিটেকচার, PDO বনাম MySQLi, DSN কনফিগারেশন, UTF-8 চারসেট ও Try-Catch এক্সেপশন হ্যান্ডলিং।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Database Connection — PDO Architecture</h2>";

// কানেকশন প্যারামিটার
$host     = "127.0.0.1";
$db       = "enterprise_app";
$user     = "root";
$pass     = "secret_password";
$charset  = "utf8mb4";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. PDO Connection DSN & Options</h4>";
echo "<pre style='background:#1e293b; color:#38bdf8; padding:10px; border-radius:6px; font-size:12px; margin:0 0 12px 0;'>DSN: $dsn</pre>";

// সিমুলেটেড কানেকশন
try {
    $pdo = new PDO("sqlite::memory:", null, null, $options);
    echo "<p style='color:#4ade80; margin:0;'>✓ <b>Database Connected Successfully!</b> (Simulated in Memory)</p>";
    echo "<p style='color:#94a3b8; font-size:13px; margin:4px 0 0 0;'>Driver: " . $pdo->getAttribute(PDO::ATTR_DRIVER_NAME) . " | Client Version: " . $pdo->getAttribute(PDO::ATTR_CLIENT_VERSION) . "</p>";
} catch (PDOException $e) {
    echo "<p style='color:#f43f5e;'>Connection Failed: " . htmlspecialchars($e->getMessage()) . "</p>";
}

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP 8-এ ডেটাবেস কানেকশনের জন্য PDO (PHP Data Objects) হলো সর্বোচ্চ সুপারিশকৃত অ্যাবস্ট্রাকশন লেয়ার। এটি অবজেক্ট-ওরিয়েন্টেড, ১২টি ভিন্ন ডাটাবেস ইঞ্জিন সাপোর্ট করে এবং শক্তিশালী এক্সেপশন হ্যান্ডলিং প্রদান করে।`,
      lessonSections: [
        {
          title: '১. PDO বনাম MySQLi এর গভীর তুলনা',
          explanationBn: `• PDO: ১২টি ডাটাবেস সাপোর্ট করে (MySQL, PostgreSQL, SQLite, Oracle ইত্যাদি), Named Parameters (:name) সাপোর্ট করে এবং আধুনিক ফ্রেমওয়ার্কগুলোর (Laravel, Symfony) ভিত্তি।\n• MySQLi: শুধু MySQL ডাটাবেসের জন্য সীমাবদ্ধ।`,
          code: `<?php
// PDO Connection Template
$host = 'localhost';
$db   = 'my_database';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
echo "Configured DSN: " . $dsn;
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Configured DSN: mysql:host=localhost;dbname=my_database;charset=utf8mb4`,
          noteBn: 'DSN-এ সর্বদা charset=utf8mb4 উল্লেখ করুন।'
        },
        {
          title: '২. প্রোডাকশন-রেডি PDO Options',
          explanationBn: `• ATTR_ERRMODE => ERRMODE_EXCEPTION (ভুল হলে এক্সেপশন থ্রো করবে)\n• ATTR_DEFAULT_FETCH_MODE => FETCH_ASSOC (অ্যাসোসিয়েটিভ অ্যারে ফেরত দিবে)\n• ATTR_EMULATE_PREPARES => false (নেটিভ প্রিপেয়ার্ড স্টেটমেন্ট নিশ্চিত করে)`,
          code: `<?php
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO("sqlite::memory:", null, null, $options);
echo "PDO Options applied successfully!";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `PDO Options applied successfully!`,
          noteBn: 'EMULATE_PREPARES false রাখলে জেন্ড ইঞ্জিন ডাটাবেসের নেটিভ প্রিপেয়ার্ড স্টেটমেন্ট ব্যবহার করে।'
        }
      ],
      keyPointsBn: [
        'সর্বদা PDO ব্যবহার করুন; MySQLi নতুন প্রজেক্টে এড়িয়ে চলুন।',
        'DSN-এ charset=utf8mb4 উল্লেখ করা বাধ্যতামূলক।',
        'কানেকশন কোড try-catch ব্লকে রাখুন যাতে পাসওয়ার্ড ব্রাউজারে ফাঁস না হয়।',
        'ATTR_EMULATE_PREPARES => false দিয়ে নেটিভ প্রিপেয়ার্ড কুয়েরি নিশ্চিত করুন।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: সেফ ডাটাবেস কানেক্টর ক্লাস',
          descriptionBn: 'সিঙ্গলটন কানেকশন প্যাটার্ন।',
          code: `<?php
class Database {
    private static ?PDO $instance = null;
    public static function getConnection(): PDO {
        if (self::$instance === null) {
            self::$instance = new PDO("sqlite::memory:", null, null, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]);
        }
        return self::$instance;
    }
}
$db = Database::getConnection();
echo "Connected: " . ($db ? "Yes" : "No");
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: mysqli_connect দিয়ে ডাইরেক্ট ডাই করা
$conn = mysqli_connect("localhost", "root", "1234", "app");
if (!$conn) die("Could not connect: " . mysqli_connect_error());`,
        juniorProblems: [
          'ডাটাবেস ডাউন থাকলে পুরো পাসওয়ার্ড ও পাথ স্ক্রিনে প্রিন্ট হয়ে যেতে পারে।',
          'কোনো চারসেট উল্লেখ না থাকায় বাংলা ফন্ট ভেঙে যায়।'
        ],
        seniorCode: `// ✅ সিনিয়র: PDO + try-catch
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    error_log($e->getMessage());
    die("Database connection issue. Please try again later.");
}`,
        seniorBenefits: [
          'ইউজারের কাছে সংবেদনশীল তথ্য গোপন থাকে।',
          'লগ ফাইলে সুনির্দিষ্ট ট্রেস জমা থাকে।'
        ],
        architectAdvice: 'ডাটাবেস ক্রেডেনশিয়াল কখনো গিটহাবে পুশ করবেন না; সর্বদা .env ফাইল এবং vlucas/phpdotenv ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (new PDO)',
          'CATCH (PDOException)'
        ],
        explanationBn: `PDO C-লেভেলে কানেকশন হ্যান্ডেল জেনারেট করে এবং এরর স্টেটকে জেন্ড এক্সেপশনে ম্যাপ করে।`
      },
      security: {
        vulnerabilityType: 'Credential Leak via Uncaught Database Exception',
        attackVectorBn: 'কানেকশন ফেইল হলে ডিফল্ট স্ট্যাক ট্রেসে ডাটাবেস ইউজার ও পাসওয়ার্ড প্লেইন টেক্সটে এক্সপোজ হওয়া।',
        preventionRuleBn: 'কানেকশন কোড try-catch ব্লকে আবদ্ধ করুন এবং প্রডাকশনে display_errors বন্ধ রাখুন।'
      }
    }
  },
  {
    id: 'mysql-create-db',
    title: 'MySQL Create DB',
    category: 'mysql',
    tag: 'DDL & Database Creation',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'CREATE DATABASE স্টেটমেন্ট, IF NOT EXISTS ক্লজ, utf8mb4_unicode_ci কোলেশন ও DDL এক্সিকিউশন।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL Create Database Architecture</h2>";

$dbName = "shop_db";
$sql = "CREATE DATABASE IF NOT EXISTS \`$dbName\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;";

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. SQL DDL Query</h4>";
echo "<pre style='background:#1e293b; color:#38bdf8; padding:10px; border-radius:6px; font-size:12px; margin:0 0 12px 0;'>" . htmlspecialchars($sql) . "</pre>";

echo "<p style='color:#4ade80;'>✓ ডাটাবেস কুয়েরি বৈধ এবং এক্সিকিউশনের জন্য প্রস্তুত।</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP দিয়ে MySQL সার্ভারে নতুন ডাটাবেস তৈরি করার জন্য Data Definition Language (DDL) স্টেটমেন্ট 'CREATE DATABASE' ব্যবহার করা হয়।`,
      lessonSections: [
        {
          title: '১. CREATE DATABASE সিনট্যাক্স ও কোলেশন',
          explanationBn: `utf8mb4_unicode_ci কোলেশন বাংলা, আরবি, ইংরেজি ও ইমোজিসহ সমস্ত আন্তর্জাতিক ক্যারেক্টার নির্ভুলভাবে সর্টিং ও ফিল্টারিং নিশ্চিত করে।`,
          code: `<?php
$sql = "CREATE DATABASE IF NOT EXISTS my_shop 
        CHARACTER SET utf8mb4 
        COLLATE utf8mb4_unicode_ci;";
echo "Standard DDL Query:\n" . $sql;
?>`,
          codeLanguage: 'SQL & PHP DDL',
          outputPreview: `Standard DDL Query:\nCREATE DATABASE IF NOT EXISTS my_shop \n        CHARACTER SET utf8mb4 \n        COLLATE utf8mb4_unicode_ci;`,
          noteBn: 'IF NOT EXISTS ব্যবহার করলে ডাটাবেস আগে থেকেই থাকলে স্ক্রিপ্ট ক্র্যাশ করে না।'
        },
        {
          title: '২. PDO exec() দিয়ে DDL রান করা',
          explanationBn: `যেসব SQL কুয়েরি কোনো রেজাল্ট সেট ফেরত দেয় না (যেমন CREATE, DROP, ALTER), সেগুলোর জন্য $pdo->exec() ব্যবহার করা হয়।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$affected = $pdo->exec("CREATE TABLE test_table (id INT)");
echo "DDL Statement Executed. Return Code: " . $affected;
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `DDL Statement Executed. Return Code: 0`,
          noteBn: 'exec() মেথড পরিবর্তিত রো সংখ্যা ফেরত দেয় অথবা ব্যর্থতায় false দেয়।'
        }
      ],
      keyPointsBn: [
        'CREATE DATABASE IF NOT EXISTS ব্যবহার করুন।',
        'সর্বদা utf8mb4_unicode_ci কোলেশন সেট করুন।',
        'DDL স্টেটমেন্টের জন্য $pdo->exec() মেথড ব্যবহার করুন।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: অটোমেটিক ডাটাবেস ইনিশিয়ালাইজার',
          descriptionBn: 'ডাটাবেস না থাকলে স্বয়ংক্রিয়ভাবে তৈরি করার স্ক্রিপ্ট।',
          code: `<?php
$sql = "CREATE DATABASE IF NOT EXISTS dev_portal CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";
echo "Ready: " . $sql;
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: কোলেশন ছাড়া ডাটাবেস তৈরি
$pdo->exec("CREATE DATABASE test");`,
        juniorProblems: [
          'ডিফল্ট latin1 হলে বাংলা বা ইমোজি সেভ করতে গেলে ??? চিহ্ন দেখাবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: utf8mb4 সহ ডাটাবেস তৈরি
$pdo->exec("CREATE DATABASE IF NOT EXISTS app_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");`,
        seniorBenefits: [
          'আন্তর্জাতিক সব ভাষার জন্য ১০০% পারফেক্ট সাপোর্ট।'
        ],
        architectAdvice: 'প্রোডাকশন অ্যাপ্লিকেশনে পিএইচপি দিয়ে ডাটাবেস তৈরি না করে CI/CD পাইপলাইনে Flyway বা Phinx দিয়ে মাইগ্রেশন চালান।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDO::exec)'
        ],
        explanationBn: `PDO::exec() সরাসরি ড্রাইভার সি-এপিআইতে কুয়েরি পাঠিয়ে রেজাল্ট ছাড়াই সম্পন্ন করে।`
      },
      security: {
        vulnerabilityType: 'Privilege Escalation via DB Creation',
        attackVectorBn: 'ইউজার ইনপুট দিয়ে ডাইনামিক ডাটাবেস তৈরি করতে গিয়ে SQL ইনজেকশন হওয়া।',
        preventionRuleBn: 'ডাটাবেসের নাম কখনোই ইউজারের ইনপুট থেকে সরাসরি নেওয়া যাবে না।'
      }
    }
  },
  {
    id: 'mysql-create-table',
    title: 'MySQL Create Table',
    category: 'mysql',
    tag: 'Data Types, Constraints & InnoDB',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'CREATE TABLE স্টেটমেন্ট, ডেটা টাইপস (INT, VARCHAR, TEXT, DATETIME), প্রাইমারি কি, ফরেন কি ও কনস্ট্রেইন্টস।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL Create Table & Constraints Architecture</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// ১. Users Table
$pdo->exec("CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT DEFAULT 'customer',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

// ২. Orders Table with Foreign Key
$pdo->exec("CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    amount REAL NOT NULL,
    status TEXT DEFAULT 'pending',
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
)");

echo "<p style='color:#4ade80;'>✓ <b>Users</b> এবং <b>Orders</b> টেবিল সফলভাবে তৈরি হয়েছে (Foreign Key Constraint Active)।</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `টেবিল হলো ডাটাবেসের মূল কাঠামো যেখানে কলাম এবং রো আকারে নির্দিষ্ট ডোমেইনের ডেটা সংরক্ষিত হয়। টেবিল ডিজাইনে সঠিক ডেটা টাইপ এবং কনস্ট্রেইন্ট নির্বাচন অ্যাপ্লিকেশন পারফরম্যান্সের জন্য অপরিহার্য।`,
      lessonSections: [
        {
          title: '১. ডেটা টাইপ নির্বাচন ও কনস্ট্রেইন্টস',
          explanationBn: `• INT: পূর্ণসংখ্যার জন্য।\n• VARCHAR(n): পরিবর্তনশীল দৈর্ঘ্যের স্ট্রিং।\n• TEXT: বড় প্রবন্ধ বা বর্ণনার জন্য।\n• DATETIME: তারিখ ও সময়ের জন্য।\n• PRIMARY KEY: ইউনিক আইডেন্টিফায়ার।\n• UNIQUE: ডুপ্লিকেট রোধ।\n• NOT NULL: ফাঁকা রাখা নিষিদ্ধ।`,
          code: `<?php
$sql = "CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);";
echo $sql;
?>`,
          codeLanguage: 'SQL Schema Definition',
          outputPreview: `CREATE TABLE products (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(150) NOT NULL,\n    price DECIMAL(10, 2) NOT NULL,\n    description TEXT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);`,
          noteBn: 'টাকা বা মূল্যের ক্ষেত্রে FLOAT বা DOUBLE ব্যবহার না করে DECIMAL(10,2) ব্যবহার করুন।'
        },
        {
          title: '২. রিলেশনাল ফরেন কি ও ক্যাসকেডিং',
          explanationBn: `FOREIGN KEY কনস্ট্রেইন্ট দিয়ে প্যারেন্ট টেবিল ও চাইল্ড টেবিলের মধ্যে রেফারেনশিয়াল ইন্টিগ্রিটি বজায় রাখা হয় (যেমন: ON DELETE CASCADE)।`,
          code: `<?php
$sql = "CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);";
echo "Foreign Key Schema:\n" . $sql;
?>`,
          codeLanguage: 'SQL Schema Definition',
          outputPreview: `Foreign Key Schema:\nCREATE TABLE orders (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    user_id INT NOT NULL,\n    total DECIMAL(10,2) NOT NULL,\n    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n);`,
          noteBn: 'ON DELETE CASCADE দিলে ইউজার ডিলিট হলে তার সাথে যুক্ত সব অর্ডার স্বয়ংক্রিয়ভাবে মুছে যায়।'
        }
      ],
      keyPointsBn: [
        'প্রাইমারি কি কলামে AUTO_INCREMENT নিশ্চিত করুন।',
        'টাকার হিসাবের জন্য DECIMAL টাইপ ব্যবহার করুন।',
        'রেফারেনশিয়াল ইন্টিগ্রিটি বজায় রাখতে Foreign Key Constraint যোগ করুন।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: ই-কমার্স স্কিমা তৈরি',
          descriptionBn: 'ইউজার ও প্রোডাক্ট টেবিল তৈরি।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE categories (id INTEGER PRIMARY KEY, name TEXT NOT NULL)");
echo "Category table created!";
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: কোনো টাইপ সাইজ বা কনস্ট্রেইন্ট ছাড়া টেবিল
$pdo->exec("CREATE TABLE users (id INT, name TEXT, email TEXT)");`,
        juniorProblems: [
          'প্রাইমারি কি না থাকায় ডুপ্লিকেট রো তৈরি হতে পারে।',
          'ইমেইল ইউনিক না থাকায় একই ইমেইলে বহু অ্যাকাউন্ট তৈরি হবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: ফুল কনস্ট্রেইন্ট সহ স্কিমা
$pdo->exec("CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE
) ENGINE=InnoDB;");`,
        seniorBenefits: [
          'ডাটাবেস লেভেলে ১০০% ডাটা ইন্টিগ্রিটি।'
        ],
        architectAdvice: 'টেবিল তৈরি করার সময় সর্বদা created_at ও updated_at টাইমস্ট্যাম্প কলাম রাখুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDO::exec)'
        ],
        explanationBn: `MySQL সার্ভার DDL স্টেটমেন্ট পেয়ে স্কিমা ডিকশনারিতে টেবিল মেটাডেটা রেজিস্টার করে।`
      },
      security: {
        vulnerabilityType: 'Schema Integrity Violation',
        attackVectorBn: 'ইউনিক কনস্ট্রেইন্ট না থাকার সুযোগ নিয়ে ডুপ্লিকেট রেজিস্ট্রেশন স্প্যাম করা।',
        preventionRuleBn: 'ইউজার ইমেইল ও ইউজারনেম কলামে ডাটাবেস লেভেলে UNIQUE কনস্ট্রেইন্ট প্রয়োগ করুন।'
      }
    }
  },
  {
    id: 'mysql-insert-data',
    title: 'MySQL Insert Data',
    category: 'mysql',
    tag: 'INSERT INTO & Parameter Binding',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'INSERT INTO স্টেটমেন্ট, PDO prepare() ও execute(), Named Parameters (:param) ও Positional Placeholders (?)।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL Insert Data with Prepared Statement</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, stock INT)");

// Named Parameters দিয়ে নিরাপদ ইনসার্ট
$stmt = $pdo->prepare("INSERT INTO products (name, price, stock) VALUES (:name, :price, :stock)");
$stmt->execute([
    'name'  => 'Logitech MX Master 3S',
    'price' => 99.99,
    'stock' => 50
]);

$insertedId = $pdo->lastInsertId();
echo "<p style='color:#4ade80;'>✓ <b>Product Inserted Successfully!</b> Product ID: #$insertedId</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `ডাটাবেস টেবিলে নতুন তথ্য সংরক্ষণ করতে 'INSERT INTO' স্টেটমেন্ট ব্যবহৃত হয়। নিরাপত্তা এবং কোড পরিচ্ছন্নতার স্বার্থে সর্বদা PDO Prepared Statement ব্যবহার করা হয়।`,
      lessonSections: [
        {
          title: '১. Named Parameters (:param) বনাম Positional (?)',
          explanationBn: `• Named Parameters (:name, :price): কোড পড়া সহজ এবং অ্যারে কি দিয়ে মান পাস করা যায়।\n• Positional Placeholders (?, ?): ইনডেক্স ভিত্তিক ক্রম অনুযায়ী মান পাস করতে হয়।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");

// Named Parameter
$stmt1 = $pdo->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
$stmt1->execute(['name' => 'Abbad', 'email' => 'abbad@dev.com']);

// Positional Placeholder
$stmt2 = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt2->execute(['Robiul', 'robiul@dev.com']);

echo "Both records inserted safely!";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Both records inserted safely!`,
          noteBn: 'বড় কুয়েরিতে Named Parameters ব্যবহার করলে বিভ্রান্তি এড়ানো যায়।'
        },
        {
          title: '২. bindValue() বনাম bindParam()',
          explanationBn: `• bindValue(): ভ্যালু সরাসরি কপি করে বাইন্ড করে (Standard)।\n• bindParam(): ভেরিয়েবলকে রেফারেন্স হিসেবে বাইন্ড করে (লুপের মধ্যে মান পরিবর্তনের জন্য)।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE logs (id INTEGER PRIMARY KEY, msg TEXT)");

$stmt = $pdo->prepare("INSERT INTO logs (msg) VALUES (:msg)");
$message = "Log Entry 1";
$stmt->bindValue(':msg', $message, PDO::PARAM_STR);
$stmt->execute();

echo "bindValue executed successfully!";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `bindValue executed successfully!`,
          noteBn: 'অধিকাংশ ক্ষেত্রে execute([\'key\' => $val]) সংক্ষিপ্ত ও নিরাপদ।'
        }
      ],
      keyPointsBn: [
        'কখনোই ইনসার্ট কুয়েরিতে ভ্যারিয়েবল স্ট্রিং কনক্যাট করবেন না।',
        'Named Parameters (:key) ব্যবহার কোডকে রিডেবল করে।',
        'ইনসার্ট সফল হলে $pdo->lastInsertId() দিয়ে আইডি পাওয়া যায়।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: ফর্ম সাবমিশন থেকে ইনসার্ট',
          descriptionBn: 'পোস্ট ডাটা রিসিভ করে ডাটাবেসে সেভ।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE contacts (id INTEGER PRIMARY KEY, name TEXT, msg TEXT)");

$stmt = $pdo->prepare("INSERT INTO contacts (name, msg) VALUES (?, ?)");
$stmt->execute(['Abbad', 'Hello Support']);
echo "Inserted row ID: " . $pdo->lastInsertId();
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: সরাসরি ভেরিয়েবল কনক্যাট করা
$name = $_POST['name'];
$pdo->query("INSERT INTO users (name) VALUES ('$name')");`,
        juniorProblems: [
          'ইনপুটে কোটেশন (\') থাকলে সিনট্যাক্স এরর হবে অথবা SQL Injection আক্রমণ ঘটবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: Prepared Statement
$stmt = $pdo->prepare("INSERT INTO users (name) VALUES (:name)");
$stmt->execute(['name' => $name]);`,
        seniorBenefits: [
          '১০০% সিকিউর ও কোটেশন এস্কেপিং স্বয়ংক্রিয়।'
        ],
        architectAdvice: 'বাল্ক ডাটা ইনসার্টের সময় প্রতিটি রো আলাদা ইনসার্ট না করে ডাটাবেস ট্রানজেকশন (Transaction) ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDO::prepare)',
          'INIT_METHOD_CALL (PDOStatement::execute)'
        ],
        explanationBn: `PDO prepare() মেথড স্টেটমেন্ট অবজেক্ট তৈরি করে এবং execute() মেথডে প্যারামিটার বাইন্ড করে পাঠায়।`
      },
      security: {
        vulnerabilityType: 'SQL Injection via INSERT',
        attackVectorBn: 'ফর্ম ফিল্ডে ম্যালিশিয়াস SQL কোড পাঠিয়ে ইনসার্ট কুয়েরি হাইজ্যাক করা।',
        preventionRuleBn: 'সর্বদা Parameterized Prepared Statement ব্যবহার করুন।'
      }
    }
  },
  {
    id: 'mysql-get-last-id',
    title: 'MySQL Get Last ID',
    category: 'mysql',
    tag: 'lastInsertId & Foreign Keys',
    phpVersion: 'PHP 8.0+',
    subtitleBn: '$pdo->lastInsertId() মেথড, অটো-ইনক্রিমেন্ট আইডি রিট্রিভাল ও প্যারেন্ট-চাইল্ড রিলেশনশিপ ইনসার্ট।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL Get Last Insert ID Architecture</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE orders (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_name TEXT, total REAL)");
$pdo->exec("CREATE TABLE order_items (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INT, item_name TEXT, price REAL)");

// ১. প্যারেন্ট অর্ডার তৈরি
$orderStmt = $pdo->prepare("INSERT INTO orders (customer_name, total) VALUES (?, ?)");
$orderStmt->execute(['Abbad Hossain', 1500.00]);
$orderId = $pdo->lastInsertId();

echo "<p style='color:#4ade80;'>✓ প্যারেন্ট অর্ডার সংরক্ষিত হয়েছে! Generated Order ID: <b>#$orderId</b></p>";

// ২. চাইল্ড আইটেমস ইনসার্ট (Using $orderId as Foreign Key)
$itemStmt = $pdo->prepare("INSERT INTO order_items (order_id, item_name, price) VALUES (?, ?, ?)");
$itemStmt->execute([$orderId, 'Mechanical Keyboard', 1000.00]);
$itemStmt->execute([$orderId, 'Gaming Mouse', 500.00]);

echo "<p style='color:#38bdf8;'>✓ ২ টি আইটেম Order #$orderId এর অধীনে যুক্ত করা হয়েছে।</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `যখন ডাটাবেস টেবিলে AUTO_INCREMENT প্রাইমারি কি থাকে, তখন নতুন রো ইনসার্ট করার পর ডাটাবেস স্বয়ংক্রিয়ভাবে যে অনন্য আইডি তৈরি করে তা $pdo->lastInsertId() মেথড দিয়ে পাওয়া যায়।`,
      lessonSections: [
        {
          title: '১. lastInsertId() কীভাবে কাজ করে?',
          explanationBn: `ডাটাবেস কানেকশন লেভেলে সর্বশেষ ইনসার্ট করা রো-এর অটো-ইনক্রিমেন্ট আইডি ট্র্যাক করা হয়। এটি থ্রেড-সেফ এবং কনকারেন্ট ইউজারের ক্ষেত্রেও সঠিক আইডি দেয়।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");

$stmt = $pdo->prepare("INSERT INTO users (name) VALUES (?)");
$stmt->execute(['Rahim']);
$firstId = $pdo->lastInsertId();

$stmt->execute(['Karim']);
$secondId = $pdo->lastInsertId();

echo "User 1 ID: $firstId | User 2 ID: $secondId";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `User 1 ID: 1 | User 2 ID: 2`,
          noteBn: 'lastInsertId() PDO অবজেক্টের মেথড, Statement অবজেক্টের নয় ($pdo->lastInsertId())।'
        },
        {
          title: '২. প্যারেন্ট-চাইল্ড রিলেশনে lastInsertId() এর ভূমিকা',
          explanationBn: `অর্ডার তৈরি করে তার আইটেমগুলো সেভ করতে, অথবা পোস্ট তৈরি করে তার ট্যাগগুলো সেভ করতে প্যারেন্ট টেবিলের lastInsertId ফরেন কি হিসেবে ব্যবহৃত হয়।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE posts (id INTEGER PRIMARY KEY, title TEXT)");
$pdo->exec("CREATE TABLE tags (post_id INT, tag_name TEXT)");

$pdo->prepare("INSERT INTO posts (title) VALUES (?)")->execute(['PHP 8.2 Guide']);
$postId = $pdo->lastInsertId();

$pdo->prepare("INSERT INTO tags (post_id, tag_name) VALUES (?, ?)")->execute([$postId, 'backend']);

echo "Post #$postId tagged with 'backend' successfully!";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Post #1 tagged with 'backend' successfully!`,
          noteBn: 'সবসময় প্যারেন্ট ইনসার্ট এক্সিকিউট হওয়ার ঠিক পরপরই lastInsertId() রিড করুন।'
        }
      ],
      keyPointsBn: [
        '$pdo->lastInsertId() হলো কানেকশন-লেভেল ফাংশন।',
        'প্যারেন্ট-চাইল্ড ডাটা সেভ করার সময় এটি ফরেন কি হিসেবে কাজে লাগে।',
        'টেবিলে AUTO_INCREMENT কলাম না থাকলে এটি 0 রিটার্ন করে।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: ইনভয়েস এবং আইটেম ইনসার্ট',
          descriptionBn: 'ইনভয়েস আইডি নিয়ে আইটেম টেবিল আপডেট।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE inv (id INTEGER PRIMARY KEY, total INT)");
$pdo->prepare("INSERT INTO inv (total) VALUES (?)")->execute([500]);
echo "Invoice created with ID: " . $pdo->lastInsertId();
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: SELECT MAX(id) দিয়ে শেষ আইডি খোঁজা
$res = $pdo->query("SELECT MAX(id) as last_id FROM orders")->fetch();
$lastId = $res['last_id'];`,
        juniorProblems: [
          'কনকারেন্ট একাধিক ইউজার অর্ডার দিলে ভুল ইউজারের আইডি চলে আসবে (Race Condition)।'
        ],
        seniorCode: `// ✅ সিনিয়র: $pdo->lastInsertId()
$stmt->execute([...]);
$lastId = $pdo->lastInsertId();`,
        seniorBenefits: [
          '১০০% থ্রেড-সেফ এবং বর্তমান কানেকশনের জন্য সুনির্দিষ্ট।'
        ],
        architectAdvice: 'ট্রানজেকশনের ভেতরে একাধিক প্যারেন্ট-চাইল্ড ইনসার্ট করলে ডাটা ইনকনসিস্টেন্সি রোধ করা যায়।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDO::lastInsertId)'
        ],
        explanationBn: `PDO ড্রাইভার MySQL C-API এর mysql_insert_id() ফাংশন কল করে তাৎক্ষণিক রেজাল্ট পায়।`
      },
      security: {
        vulnerabilityType: 'Race Condition in ID Retrieval',
        attackVectorBn: 'MAX(id) কুয়েরি ব্যবহারের কারণে অন্য ইউজারের অর্ডারের সাথে ডেটা মিক্সড হয়ে যাওয়া।',
        preventionRuleBn: 'সর্বদা $pdo->lastInsertId() ব্যবহার করুন।'
      }
    }
  },
  {
    id: 'mysql-insert-multiple',
    title: 'MySQL Insert Multiple',
    category: 'mysql',
    tag: 'Batch Insertion & Transactions',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'একাধিক রেকর্ড একসাথে ইনসার্ট, Multi-row INSERT SQL, লুপ বনাম ব্যাচ ইনসার্ট ও PDO Transactions ($pdo->beginTransaction)।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL Insert Multiple Records & Transactions</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("CREATE TABLE students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, gpa REAL)");

$students = [
    ['name' => 'Abbad Ibn Bishr', 'gpa' => 3.95],
    ['name' => 'Usama Ibn Zayd',  'gpa' => 3.88],
    ['name' => 'Zayd Ibn Haritha', 'gpa' => 3.92]
];

// ট্রানজেকশন শুরু
$pdo->beginTransaction();
try {
    $stmt = $pdo->prepare("INSERT INTO students (name, gpa) VALUES (:name, :gpa)");
    foreach ($students as $student) {
        $stmt->execute($student);
    }
    $pdo->commit();
    echo "<p style='color:#4ade80;'>✓ <b>৩ টি রেকর্ড সফলভাবে ট্রানজেকশনে ইনসার্ট হয়েছে (Committed)!</b></p>";
} catch (Exception $e) {
    $pdo->rollBack();
    echo "<p style='color:#f43f5e;'>Transaction Failed and Rolled Back: " . $e->getMessage() . "</p>";
}

$all = $pdo->query("SELECT * FROM students")->fetchAll(PDO::FETCH_ASSOC);
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>ID</th><th style='padding:6px; text-align:left;'>Name</th><th style='padding:6px; text-align:left;'>GPA</th></tr>";
foreach ($all as $row) {
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>#{$row['id']}</td><td style='padding:6px; color:#38bdf8;'>{$row['name']}</td><td style='padding:6px; color:#4ade80;'>{$row['gpa']}</td></tr>";
}
echo "</table>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `একসাথে একাধিক রেকর্ড ডাটাবেসে ইনসার্ট করার দুটি প্রধান উপায় রয়েছে: ১. লুপের মধ্যে একই Prepared Statement বারবার চালানো এবং পুরো প্রক্রিয়াকে Database Transaction এর মধ্যে রাখা। ২. সিঙ্গেল কুয়েরিতে একাধিক মান (Multi-row Insert) পাঠানো।`,
      lessonSections: [
        {
          title: '১. Transaction দিয়ে ফাস্ট লুপ ইনসার্ট',
          explanationBn: `প্রতিটি ইনসার্টে স্বয়ংক্রিয় ডিস্ক-রাইট (Fsync) এড়াতে $pdo->beginTransaction() এবং $pdo->commit() ব্যবহার করা হয়। এতে ইনসার্ট স্পিড ৫০ গুণ বৃদ্ধি পায়।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE logs (id INTEGER PRIMARY KEY, msg TEXT)");

$pdo->beginTransaction();
$stmt = $pdo->prepare("INSERT INTO logs (msg) VALUES (?)");
for ($i = 1; $i <= 3; $i++) {
    $stmt->execute(["Log entry #$i"]);
}
$pdo->commit();

echo "Total rows inserted: " . $pdo->query("SELECT COUNT(*) FROM logs")->fetchColumn();
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Total rows inserted: 3`,
          noteBn: 'ট্রানজেকশনের ভেতরে কোনো একটি কুয়েরি ফেইল করলে rollBack() দিয়ে আগের অবস্থায় ফেরা যায়।'
        },
        {
          title: '২. Multi-Row INSERT SQL প্যাটার্ন',
          explanationBn: `INSERT INTO table (col1, col2) VALUES (?, ?), (?, ?), (?, ?) দিয়ে একবারে একটি মাত্র নেটওয়ার্ক রাউন্ড-ট্রিপে সব ডেটা পাঠানো যায়।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE tags (id INTEGER PRIMARY KEY, name TEXT)");

$sql = "INSERT INTO tags (name) VALUES ('PHP'), ('MySQL'), ('DevOps')";
$pdo->exec($sql);

echo "Multi-row insert complete! Count: " . $pdo->query("SELECT COUNT(*) FROM tags")->fetchColumn();
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Multi-row insert complete! Count: 3`,
          noteBn: 'Multi-row কুয়েরিতে খুব বেশি রো (যেমন ১০,০০০+) একসাথে না পাঠিয়ে ৫০০ রো করে চাঙ্ক করা উচিত।'
        }
      ],
      keyPointsBn: [
        'লুপে ইনসার্ট করার সময় সর্বদা Transaction ($pdo->beginTransaction()) ব্যবহার করুন।',
        'ট্রানজেকশন ব্যবহার করলে কোনো এরর ঘটলে rollBack() করা সম্ভব।',
        'ব্যাচ ইনসার্ট ডাটাবেস পারফরম্যান্স বহুগুণ বাড়িয়ে দেয়।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: CSV ডাটা ইমপোর্ট ট্রানজেকশন',
          descriptionBn: 'অ্যারে থেকে ডাটাবেসে বাল্ক ইমপোর্ট।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)");
$users = ['User A', 'User B'];

$pdo->beginTransaction();
$stmt = $pdo->prepare("INSERT INTO users (name) VALUES (?)");
foreach ($users as $u) $stmt->execute([$u]);
$pdo->commit();

echo "Import complete!";
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: ট্রানজেকশন ছাড়া সাধারণ লুপ
foreach ($largeData as $row) {
    $pdo->prepare("INSERT ...")->execute($row);
}`,
        juniorProblems: [
          'প্রতিটি রো-এর জন্য আলাদা ডিস্ক I/O হবে, সময় ১০০ গুণ বেশি লাগবে।',
          'মাঝপথে ক্র্যাশ করলে অর্ধেক ডেটা ঢুকে ডাটাবেস করাপ্ট হবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: ট্রানজেকশন ও একক প্রিপেয়ার্ড স্টেটমেন্ট
$pdo->beginTransaction();
$stmt = $pdo->prepare("INSERT INTO users (name) VALUES (?)");
foreach ($largeData as $row) {
    $stmt->execute([$row]);
}
$pdo->commit();`,
        seniorBenefits: [
          'মিলিসেকেন্ডে হাজার হাজার রো ইনসার্ট।',
          'ACID নীতি মেনে সম্পূর্ণ সফল অথবা সম্পূর্ণ রোলব্যাক।'
        ],
        architectAdvice: 'অত্যধিক বড় ডেটাসেটের ক্ষেত্রে MySQL `LOAD DATA INFILE` অথবা 1000-রো চাঙ্ক বাল্ক ইনসার্ট ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDO::beginTransaction)',
          'INIT_METHOD_CALL (PDO::commit)'
        ],
        explanationBn: `MySQL সার্ভারে START TRANSACTION এবং COMMIT পাঠিয়ে ইঞ্জিন লেভেলে আনকমিটেড লগ বাফারিং নিশ্চিত করা হয়।`
      },
      security: {
        vulnerabilityType: 'Partial Data Corruption on Crash',
        attackVectorBn: 'পেমেন্ট বা ইনভয়েস ইনসার্টের সময় নেটওয়ার্ক ফেইল হয়ে অসমাপ্ত ডেটা জমা হওয়া।',
        preventionRuleBn: 'মাল্টিপল সম্পর্কিত ইনসার্টে সর্বদা Database Transactions ব্যবহার করুন।'
      }
    }
  },
  {
    id: 'mysql-prepared',
    title: 'MySQL Prepared',
    category: 'mysql',
    tag: 'Prepared Statements & Security',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Prepared Statements আর্কিটেকচার, Compile বনাম Execute ফেজ, SQL Injection প্রতিরোধ ও Performance Caching।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP PDO Prepared Statements & Security Engine</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE accounts (id INTEGER PRIMARY KEY, username TEXT, balance REAL)");
$pdo->exec("INSERT INTO accounts (username, balance) VALUES ('abbad', 50000.00), ('victim', 10000.00)");

// আক্রমণকারীর ইনপুট সিমুলেশন
$hackerInput = "' OR 1=1 --";

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. Parameterized Prepared Statement</h4>";
$stmt = $pdo->prepare("SELECT * FROM accounts WHERE username = :username");
$stmt->execute(['username' => $hackerInput]);
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo "<p style='color:#38bdf8; font-size:13px; margin:0 0 10px 0;'>Searched for: <code>" . htmlspecialchars($hackerInput) . "</code></p>";
if (empty($result)) {
    echo "<p style='color:#4ade80;'>✓ <b>Attack Neutralized!</b> No records matched because the input was treated strictly as a literal string value, not SQL code.</p>";
} else {
    echo "<p style='color:#f43f5e;'>Vulnerable! Records leaked.</p>";
}

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Prepared Statement হলো ডাটাবেস কোয়েরি এক্সিকিউশনের একটি ২-ধাপের আর্কিটেকচার: \n১. Prepare Phase: ডাটাবেস ইঞ্জিন কুয়েরির টেমপ্লেট কম্পাইল করে এবং এক্সিকিউশন প্ল্যান তৈরি করে।\n২. Execute Phase: ব্যবহারকারীর প্যারামিটারগুলো আলাদা ডেটা চ্যানেল দিয়ে পাঠানো হয়। ফলে ডেটা কখনো কোড হিসেবে এক্সিকিউট হতে পারে না।`,
      lessonSections: [
        {
          title: '১. কেন Prepared Statement ১০০% নিরাপদ?',
          explanationBn: `ডাটাবেস আগে থেকেই জানে কুয়েরির কোন অংশ কোড এবং কোন অংশ প্যারামিটার। ইনপুটে যতই কোটেশন (\') বা SQL কমান্ড (DROP TABLE) থাকুক না কেন, ইঞ্জিন সেটিকে শুধুমাত্র সাধারণ স্ট্রিং বা ভ্যালু হিসেবে গণ্য করে।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INT, email TEXT)");

$unsafe = "admin' --";
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$unsafe]);

echo "Safe execution completed. Engine treated input strictly as literal text.";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Safe execution completed. Engine treated input strictly as literal text.`,
          noteBn: 'নেটিভ প্রিপেয়ার্ড স্টেটমেন্ট ব্যবহারের জন্য PDO::ATTR_EMULATE_PREPARES => false নিশ্চিত করুন।'
        },
        {
          title: '২. পারফরম্যান্স ক্যাশিং সুবিধা',
          explanationBn: `একই কুয়েরি টেমপ্লেট একবার কম্পাইল করে ভিন্ন ভিন্ন প্যারামিটার দিয়ে হাজার বার এক্সিকিউট করা যায়, ফলে ডাটাবেস পার্সিং ওভারহেড কমে যায়।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE hits (page TEXT)");

$stmt = $pdo->prepare("INSERT INTO hits (page) VALUES (?)");
$pages = ['home', 'about', 'contact'];
foreach ($pages as $p) {
    $stmt->execute([$p]);
}
echo "Executed 3 times using the same pre-compiled query template!";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Executed 3 times using the same pre-compiled query template!`,
          noteBn: 'প্রিপেয়ার্ড স্টেটমেন্ট একই সাথে সর্বোচ্চ সিকিউরিটি এবং হাই পারফরম্যান্স নিশ্চিত করে।'
        }
      ],
      keyPointsBn: [
        'Prepared Statement হলো SQL Injection প্রতিরোধের একমাত্র নির্ভরযোগ্য উপায়।',
        'Prepare এবং Execute দুটি সম্পূর্ণ পৃথক ধাপ।',
        'প্যারামিটার বাইন্ডিং স্বয়ংক্রিয়ভাবে সঠিক ডেটা টাইপ হ্যান্ডেল করে।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: সিকিউর লগইন অথেন্টিকেশন',
          descriptionBn: 'প্রিপেয়ার্ড স্টেটমেন্ট দিয়ে ইউজার যাচাই।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, pass TEXT)");
$pdo->exec("INSERT INTO users (email, pass) VALUES ('dev@test.com', '123')");

$stmt = $pdo->prepare("SELECT id, pass FROM users WHERE email = :email");
$stmt->execute(['email' => 'dev@test.com']);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

echo "User Found: " . ($user ? "Yes (ID: {$user['id']})" : "No");
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: স্ট্রিং কনক্যাটেনেশন
$sql = "SELECT * FROM users WHERE user = '" . $_POST['user'] . "'";
$pdo->query($sql);`,
        juniorProblems: [
          'SQL Injection এর চূড়ান্ত ঝুঁকি।'
        ],
        seniorCode: `// ✅ সিনিয়র: Parameterized Prepared Statement
$stmt = $pdo->prepare("SELECT * FROM users WHERE user = :user");
$stmt->execute(['user' => $_POST['user']]);`,
        seniorBenefits: [
          '১০০% নিরাপদ এবং টাইপ-সেফ।'
        ],
        architectAdvice: 'যে কোনো ডাইনামিক ডেটা কুয়েরিতে পাস করার সময় অবশ্যই Prepared Statement প্যারামিটার হিসেবে পাস করবেন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDO::prepare)',
          'INIT_METHOD_CALL (PDOStatement::execute)'
        ],
        explanationBn: `MySQL বাইনারি প্রোটোকলে COM_STMT_PREPARE এবং COM_STMT_EXECUTE কমান্ড দিয়ে সার্ভার ও ক্লায়েন্টের মধ্যে ডেটা ট্রাফিক পরিচালিত হয়।`
      },
      security: {
        vulnerabilityType: 'SQL Injection (CWE-89)',
        attackVectorBn: 'কুয়েরি প্যারামিটারে ক্ষতিকর SQL ট্রিগার করে ডাটাবেস এক্সপোজ বা ধ্বংস করা।',
        preventionRuleBn: 'সর্বদা Parameterized Prepared Statements ব্যবহার করুন।'
      }
    }
  },
  {
    id: 'mysql-select-data',
    title: 'MySQL Select Data',
    category: 'mysql',
    tag: 'SELECT, fetch, fetchAll & Generators',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'SELECT স্টেটমেন্ট, fetch() বনাম fetchAll(), FETCH_ASSOC, FETCH_OBJ, মেমোরি অপ্টিমাইজেশন ও Cursor ব্যবহার।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL Select Data & Fetch Modes</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE courses (id INTEGER PRIMARY KEY, title TEXT, price REAL)");
$pdo->exec("INSERT INTO courses (title, price) VALUES 
    ('Modern PHP 8.2 Mastery', 49.99),
    ('Laravel Architecture & Microservices', 89.99),
    ('MySQL Database Optimization', 39.99)");

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. fetchAll(PDO::FETCH_ASSOC) Output</h4>";
$stmt = $pdo->query("SELECT id, title, price FROM courses");
$courses = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>ID</th><th style='padding:6px; text-align:left;'>Course Title</th><th style='padding:6px; text-align:right;'>Price</th></tr>";
foreach ($courses as $c) {
    echo "<tr style='border-bottom:1px solid #334155;'>";
    echo "<td style='padding:6px;'>#{$c['id']}</td>";
    echo "<td style='padding:6px; color:#38bdf8; font-weight:bold;'>" . htmlspecialchars($c['title']) . "</td>";
    echo "<td style='padding:6px; text-align:right; color:#4ade80;'>$" . number_format($c['price'], 2) . "</td>";
    echo "</tr>";
}
echo "</table>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `ডাটাবেস টেবিল থেকে তথ্য পড়ে আনার জন্য 'SELECT' স্টেটমেন্ট ব্যবহৃত হয়। PHP-তে PDO বিভিন্ন ধরনের Fetch Mode (যেমন FETCH_ASSOC, FETCH_OBJ, FETCH_COLUMN) প্রদান করে।`,
      lessonSections: [
        {
          title: '১. fetch() বনাম fetchAll()',
          explanationBn: `• fetch(): প্রতি কলে একটি করে রো নিয়ে আসে (মেমোরি সেফ, বড় ডেটাসেটের জন্য আদর্শ)।\n• fetchAll(): সমস্ত রেকর্ড একবারে অ্যারেতে মেমোরিতে লোড করে (ছোট ডেটাসেটের জন্য সুবিধাজনক)।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE items (name TEXT)");
$pdo->exec("INSERT INTO items VALUES ('A'), ('B')");

// Single Row Fetch
$stmt = $pdo->query("SELECT name FROM items");
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "Item: " . $row['name'] . "\n";
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Item: A\nItem: B`,
          noteBn: 'লাখো রো রিড করতে fetchAll() ব্যবহার করলে Out of Memory এরর হতে পারে।'
        },
        {
          title: '২. বিভিন্ন Fetch Mode এর ব্যবহার',
          explanationBn: `• PDO::FETCH_ASSOC: কলামের নামে অ্যাসোসিয়েটিভ অ্যারে।\n• PDO::FETCH_OBJ: অ্যানোনিমাস অবজেক্ট ($row->title)।\n• PDO::FETCH_COLUMN: শুধুমাত্র প্রথম কলামের ভ্যালুর অ্যারে।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INT, name TEXT)");
$pdo->exec("INSERT INTO users VALUES (1, 'Abbad')");

$obj = $pdo->query("SELECT name FROM users")->fetch(PDO::FETCH_OBJ);
echo "User Object Name: " . $obj->name;
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `User Object Name: Abbad`,
          noteBn: 'FETCH_ASSOC সবচেয়ে বেশি ব্যবহৃত এবং দ্রুতগতির।'
        }
      ],
      keyPointsBn: [
        'বড় ডেটাসেটে মেমোরি বাঁচাতে while($row = $stmt->fetch()) লুপ চালান।',
        'শুধুমাত্র প্রয়োজনীয় কলাম সিলেক্ট করুন (SELECT * এড়িয়ে চলুন)।',
        'PDO::FETCH_ASSOC ব্যবহার করলে মেমোরি অপ্টিমাইজড থাকে।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: নির্দিষ্ট ইউজারের প্রোফাইল রিড',
          descriptionBn: 'সিঙ্গেল রো ফেচিং।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INT, email TEXT)");
$pdo->exec("INSERT INTO users VALUES (1, 'abbad@test.com')");

$stmt = $pdo->prepare("SELECT email FROM users WHERE id = ?");
$stmt->execute([1]);
$email = $stmt->fetchColumn();

echo "User Email: " . $email;
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: মিলিয়ন রো-এর টেবিলে fetchAll() করা
$all = $pdo->query("SELECT * FROM logs")->fetchAll();`,
        juniorProblems: [
          'PHP Memory Limit শেষ হয়ে Fatal Error দিয়ে স্ক্রিপ্ট ক্র্যাশ করবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: fetch() অথবা জেনারেটর (Cursor)
$stmt = $pdo->query("SELECT id, msg FROM logs");
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    processLog($row);
}`,
        seniorBenefits: [
          'মাত্র কয়েক কিলোবাইট মেমোরিতে আনলিমিটেড রো প্রসেস করা সম্ভব।'
        ],
        architectAdvice: 'API রেসপন্সের ক্ষেত্রে সর্বদা Pagination (LIMIT & OFFSET) ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDOStatement::fetch)',
          'FETCH_DIM_R'
        ],
        explanationBn: `PDO C-লেয়ার ডাটাবেস কার্সর থেকে বাফার ম্যানেজ করে জেন্ড অ্যারে তৈরি করে রিটার্ন করে।`
      },
      security: {
        vulnerabilityType: 'Information Leak via SELECT *',
        attackVectorBn: 'SELECT * ব্যবহারের কারণে পাসওয়ার্ড হ্যাশ বা প্রাইভেট টোকেন অনাকাঙ্ক্ষিতভাবে রেসপন্সে এক্সপোজ হওয়া।',
        preventionRuleBn: 'সবসময় সুনির্দিষ্ট কলামের নাম উল্লেখ করে কুয়েরি করুন।'
      }
    }
  },
  {
    id: 'mysql-where',
    title: 'MySQL Where',
    category: 'mysql',
    tag: 'WHERE Clause & Logical Operators',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'WHERE ক্লজ, কম্প্যারিজন অপারেটর (=, !=, <, >), লজিক্যাল অপারেটর (AND, OR, NOT), IN, BETWEEN ও LIKE সার্চ।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL WHERE Clause & Filtering Engine</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary REAL, status TEXT)");
$pdo->exec("INSERT INTO employees (name, department, salary, status) VALUES 
    ('Abbad', 'Engineering', 95000, 'active'),
    ('Robiul', 'Engineering', 85000, 'active'),
    ('Tariq', 'Marketing', 60000, 'active'),
    ('Zubair', 'Engineering', 70000, 'inactive')");

// ফিল্টারিং: Engineering ডিপার্টমেন্টের একটিভ কর্মী যাদের বেতন >= ৮০,০০০
$stmt = $pdo->prepare("SELECT name, department, salary FROM employees WHERE department = :dept AND salary >= :minSalary AND status = :status");
$stmt->execute([
    'dept'      => 'Engineering',
    'minSalary' => 80000,
    'status'    => 'active'
]);
$filtered = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>ফিল্টার্ড রেজাল্ট:</h4>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>Name</th><th style='padding:6px; text-align:left;'>Department</th><th style='padding:6px; text-align:right;'>Salary</th></tr>";
foreach ($filtered as $emp) {
    echo "<tr style='border-bottom:1px solid #334155;'>";
    echo "<td style='padding:6px; color:#38bdf8; font-weight:bold;'>{$emp['name']}</td>";
    echo "<td style='padding:6px;'>{$emp['department']}</td>";
    echo "<td style='padding:6px; text-align:right; color:#4ade80;'>$" . number_format($emp['salary']) . "</td>";
    echo "</tr>";
}
echo "</table>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `WHERE ক্লজ দিয়ে ডাটাবেস টেবিল থেকে সুনির্দিষ্ট শর্ত সাপেক্ষে ডেটা ফিল্টার করা হয়। একাধিক শর্ত যুক্ত করতে AND, OR, NOT অপারেটর ব্যবহৃত হয়।`,
      lessonSections: [
        {
          title: '১. লজিক্যাল অপারেটর (AND, OR, NOT)',
          explanationBn: `• AND: সব শর্ত সত্য হতে হবে।\n• OR: যে কোনো একটি শর্ত সত্য হলেই ম্যাচ করবে।\n• IN: নির্দিষ্ট তালিকার মধ্যে মান ম্যাচ করা (status IN ('active', 'pending'))।\n• BETWEEN: নির্দিষ্ট সীমার মধ্যে মান চেক করা (salary BETWEEN 50000 AND 100000)।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE products (id INT, price INT)");
$pdo->exec("INSERT INTO products VALUES (1, 50), (2, 150), (3, 250)");

$stmt = $pdo->prepare("SELECT id FROM products WHERE price BETWEEN ? AND ?");
$stmt->execute([100, 300]);
$ids = $stmt->fetchAll(PDO::FETCH_COLUMN);

echo "Products in range $100-$300: " . implode(", ", $ids);
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Products in range $100-$300: 2, 3`,
          noteBn: 'BETWEEN অপারেটরে শুরু এবং শেষের মান উভয়ই অন্তর্ভুক্ত থাকে।'
        },
        {
          title: '২. ডাইনামিক WHERE কুয়েরি তৈরি',
          explanationBn: `ইউজারের সার্চ ফিল্টারের ওপর ভিত্তি করে নিরাপদে ডাইনামিক WHERE ক্লজ তৈরি করার স্ট্যান্ডার্ড পদ্ধতি।`,
          code: `<?php
$conditions = [];
$params = [];

$searchName = 'Abbad';
$minPrice = 500;

if ($searchName !== '') {
    $conditions[] = "name LIKE :name";
    $params['name'] = "%$searchName%";
}
if ($minPrice > 0) {
    $conditions[] = "price >= :price";
    $params['price'] = $minPrice;
}

$sql = "SELECT * FROM products";
if ($conditions) {
    $sql .= " WHERE " . implode(" AND ", $conditions);
}
echo "Generated SQL Query:\n" . $sql;
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Generated SQL Query:\nSELECT * FROM products WHERE name LIKE :name AND price >= :price`,
          noteBn: 'ডাইনামিক কুয়েরিতেও সর্বদা প্যারামিটার বাইন্ডিং বজায় রাখতে হবে।'
        }
      ],
      keyPointsBn: [
        'WHERE ক্লজের প্রতিটি ভ্যারিয়েবল প্যারামিটার হিসেবে পাস করুন।',
        'AND এবং OR একসাথে ব্যবহারের সময় ব্র্যাকেট () দিয়ে অগ্রাধিকার নির্দিষ্ট করুন।',
        'ফিল্টারিং দ্রুত করতে WHERE ক্লজে ব্যবহৃত কলামগুলোতে ডাটাবেস ইনডেক্স (Index) তৈরি করুন।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: স্ট্যাটাস এবং ক্যাটাগরি ফিল্টার',
          descriptionBn: 'নিরাপদ ফিল্টারিং স্ক্রিপ্ট।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE items (cat TEXT, status TEXT)");
$pdo->exec("INSERT INTO items VALUES ('tech', 'active')");

$stmt = $pdo->prepare("SELECT * FROM items WHERE cat = ? AND status = ?");
$stmt->execute(['tech', 'active']);
echo "Found: " . count($stmt->fetchAll()) . " item(s)";
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: ব্র্যাকেট ছাড়া জটিল AND ও OR মেশানো
$sql = "SELECT * FROM users WHERE role = 'admin' OR role = 'manager' AND status = 'active'";`,
        juniorProblems: [
          'অপারেটর প্রিসিডেন্সের কারণে ইনএকটিভ অ্যাডমিনরাও রেজাল্টে চলে আসবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: ব্র্যাকেট দিয়ে লজিক্যাল বাউন্ডিং
$sql = "SELECT * FROM users WHERE (role = :r1 OR role = :r2) AND status = :status";`,
        seniorBenefits: [
          'শতভাগ নিখুঁত লজিক্যাল ফিল্টারিং।'
        ],
        architectAdvice: 'WHERE ক্লজে ঘন ঘন ব্যবহৃত কলামে (যেমন status, created_at) MySQL B-Tree ইনডেক্স যোগ করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDO::prepare)'
        ],
        explanationBn: `MySQL কুয়েরি অপ্টিমাইজার WHERE ক্লজ বিশ্লেষণ করে ইনডেক্স স্ক্যান অথবা টেবিল স্ক্যান সিদ্ধান্ত নেয়।`
      },
      security: {
        vulnerabilityType: 'SQL Injection via WHERE Conditions',
        attackVectorBn: 'WHERE ক্লজে প্যারামিটার কনক্যাট করে ডাটাবেস বাইপাস করা (?id=1 OR 1=1)।',
        preventionRuleBn: 'সর্বদা প্যারামিটারাইজড স্টেটমেন্ট ব্যবহার করুন।'
      }
    }
  },
  {
    id: 'mysql-order-by',
    title: 'MySQL Order By',
    category: 'mysql',
    tag: 'ORDER BY, ASC/DESC & Whitelisting',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'ORDER BY ক্লজ, ASC ও DESC সর্টিং, মাল্টিপল কলাম সর্টিং, ডাইনামিক সর্ট এবং SQL Injection প্রিভেনশনে হোয়াইটলিস্টিং।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL ORDER BY & Dynamic Sorting Architecture</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE leaderboard (id INTEGER PRIMARY KEY, player TEXT, score INT, country TEXT)");
$pdo->exec("INSERT INTO leaderboard (player, score, country) VALUES 
    ('Abbad', 9800, 'BD'),
    ('John', 8500, 'US'),
    ('Chen', 9800, 'CN'),
    ('Ali', 7200, 'AE')");

// ডাইনামিক সর্টিং উইথ হোয়াইটলিস্টিং ⭐
$userInputCol = 'score';
$userInputDir = 'DESC';

$allowedCols = ['player' => 'player', 'score' => 'score', 'country' => 'country'];
$allowedDirs = ['ASC' => 'ASC', 'DESC' => 'DESC'];

$orderBy = $allowedCols[$userInputCol] ?? 'score';
$direction = $allowedDirs[strtoupper($userInputDir)] ?? 'DESC';

// মাল্টিপল কলাম সর্ট: স্কোর দিয়ে DESC, সমান হলে দেশ দিয়ে ASC
$sql = "SELECT player, score, country FROM leaderboard ORDER BY $orderBy $direction, player ASC";
$rows = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>সর্টেড লিডারবোর্ড (ORDER BY $orderBy $direction):</h4>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>Rank</th><th style='padding:6px; text-align:left;'>Player</th><th style='padding:6px; text-align:left;'>Country</th><th style='padding:6px; text-align:right;'>Score</th></tr>";
$rank = 1;
foreach ($rows as $r) {
    echo "<tr style='border-bottom:1px solid #334155;'>";
    echo "<td style='padding:6px; color:#fbbf24;'>#$rank</td>";
    echo "<td style='padding:6px; color:#38bdf8; font-weight:bold;'>{$r['player']}</td>";
    echo "<td style='padding:6px;'>{$r['country']}</td>";
    echo "<td style='padding:6px; text-align:right; color:#4ade80; font-weight:bold;'>" . number_format($r['score']) . "</td>";
    echo "</tr>";
    $rank++;
}
echo "</table>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `ডাটাবেস থেকে প্রাপ্ত ফলাফলকে ক্রমানুসারে সাজাতে 'ORDER BY' ক্লজ ব্যবহৃত হয়। ডিফল্টভাবে এটি ASC (ছোট থেকে বড়) সাজায়, এবং DESC দিলে বড় থেকে ছোট সাজায়।`,
      lessonSections: [
        {
          title: '১. কেন ORDER BY তে প্যারামিটার বাইন্ড করা যায় না?',
          explanationBn: `SQL স্ট্যান্ডার্ড অনুযায়ী কলামের নাম বা ASC/DESC কিওয়ার্ডকে Prepared Statement এর প্লেসহোল্ডার (?) হিসেবে বাইন্ড করা যায় না।\nতাই ডাইনামিক সর্টিংয়ের জন্য Whitelisting (অনুমোদিত কলামের তালিকা যাচাই) একমাত্র নিরাপদ উপায়।`,
          code: `<?php
// ডাইনামিক সর্ট কলাম ভ্যালিডেশন
$userParam = 'price';
$allowed = ['title', 'price', 'created_at'];

if (in_array($userParam, $allowed, true)) {
    $sortCol = $userParam;
} else {
    $sortCol = 'created_at'; // Safe Fallback
}
echo "Safe Sort Column: " . $sortCol;
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Safe Sort Column: price`,
          noteBn: 'হোয়াইটলিস্ট ছাড়া ইউজারের ইনপুট সরাসরি ORDER BY-তে বসালে SQL Injection ঘটে।'
        },
        {
          title: '২. মাল্টি-কলাম সর্টিং',
          explanationBn: `একাধিক কলাম দিয়ে ক্রমানুসারে সাজানো (যেমন: ORDER BY category ASC, price DESC)।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE items (cat TEXT, price INT)");
$pdo->exec("INSERT INTO items VALUES ('A', 20), ('A', 10), ('B', 50)");

$rows = $pdo->query("SELECT * FROM items ORDER BY cat ASC, price ASC")->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as $r) {
    echo "Cat: {$r['cat']} | Price: {$r['price']}\n";
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Cat: A | Price: 10\nCat: A | Price: 20\nCat: B | Price: 50`,
          noteBn: 'প্রথম কলামের মান সমান হলে তবেই দ্বিতীয় কলাম দিয়ে সর্টিং হয়।'
        }
      ],
      keyPointsBn: [
        'ORDER BY ক্লজে কলাম নাম বাইন্ড করা যায় না; সর্বদা Whitelist করুন।',
        'ASC = Ascending (ছোট থেকে বড়), DESC = Descending (বড় থেকে ছোট)।',
        'মাল্টিপল কলাম কমা দিয়ে আলাদা করে সর্ট করা যায়।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: প্রোডাক্ট সর্টিং হ্যান্ডলার',
          descriptionBn: 'হোয়াইটলিস্ট ভিত্তিক সর্ট।',
          code: `<?php
$sortBy = 'price';
$allowed = ['price', 'name', 'id'];
$col = in_array($sortBy, $allowed, true) ? $sortBy : 'id';
echo "ORDER BY $col DESC";
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: সরাসরি ইউজারের ইনপুট ORDER BY-তে বসানো
$sql = "SELECT * FROM products ORDER BY " . $_GET['sort'];`,
        juniorProblems: [
          'আক্রমণকারী ?sort=(SELECT ... FROM passwords) পাঠিয়ে ব্লাইন্ড SQL Injection ঘটাতে পারে।'
        ],
        seniorCode: `// ✅ সিনিয়র: হোয়াইটলিস্ট দিয়ে সর্টিং
$allowed = ['price', 'name', 'created_at'];
$sort = in_array($_GET['sort'] ?? '', $allowed, true) ? $_GET['sort'] : 'created_at';
$sql = "SELECT * FROM products ORDER BY $sort DESC";`,
        seniorBenefits: [
          '১০০% নিরাপদ এবং SQL Injection এর কোনো ঝুঁকি নেই।'
        ],
        architectAdvice: 'বড় টেবিলে ORDER BY করার সময় ইনডেক্স ব্যবহার না করলে MySQL মেমোরিতে Filesort চালায় যা পারফরম্যান্স ধীর করে দেয়।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (php_in_array)',
          'CONCAT (SQL string construction)'
        ],
        explanationBn: `MySQL ইঞ্জিন মেমোরিতে Sort Buffer ব্যবহার করে রেকর্ডগুলো অর্ডার করে।`
      },
      security: {
        vulnerabilityType: 'SQL Injection in ORDER BY Clause',
        attackVectorBn: 'ORDER BY ক্লজে এক্সপ্রেশন ইনজেক্ট করে টাইম-বেসড বা ব্লাইন্ড ডাটা এক্সট্রাকশন করা।',
        preventionRuleBn: 'কখনোই ইউজারের ইনপুট সরাসরি ORDER BY-তে কনক্যাট করবেন না; হোয়াইটলিস্টিং বাধ্যতামূলক।'
      }
    }
  },
  {
    id: 'mysql-delete-data',
    title: 'MySQL Delete Data',
    category: 'mysql',
    tag: 'DELETE FROM, WHERE & Soft Delete',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'DELETE FROM স্টেটমেন্ট, WHERE ক্লজ নিশ্চিতকরণ, rowCount() মেথড, Hard Delete বনাম Soft Delete (is_deleted)।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL Delete Data & Soft Delete Architecture</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, is_deleted INT DEFAULT 0)");
$pdo->exec("INSERT INTO tasks (title) VALUES ('Buy Groceries'), ('Deploy App'), ('Review PR')");

// ১. Hard Delete Simulation with Prepared Statement
$deleteId = 1;
$stmt = $pdo->prepare("DELETE FROM tasks WHERE id = :id");
$stmt->execute(['id' => $deleteId]);
$deletedRows = $stmt->rowCount();

echo "<p style='color:#f87171;'>✓ <b>Hard Delete:</b> Task #$deleteId deleted! Affected Rows: $deletedRows</p>";

// ২. Soft Delete Simulation (Enterprise Standard ⭐)
$softDeleteId = 2;
$softStmt = $pdo->prepare("UPDATE tasks SET is_deleted = 1 WHERE id = :id");
$softStmt->execute(['id' => $softDeleteId]);

echo "<p style='color:#fbbf24;'>✓ <b>Soft Delete:</b> Task #$softDeleteId marked as deleted (Data preserved in DB for auditing).</p>";

// অ্যাক্টিভ টাস্ক রিড (WHERE is_deleted = 0)
$activeTasks = $pdo->query("SELECT id, title FROM tasks WHERE is_deleted = 0")->fetchAll(PDO::FETCH_ASSOC);
echo "<h4 style='color:#a855f7; margin-bottom:5px;'>বর্তমানে সক্রিয় টাস্ক তালিকা:</h4>";
foreach ($activeTasks as $t) {
    echo "<span style='color:#4ade80;'>• #{$t['id']} {$t['title']}</span><br>";
}

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `ডাটাবেস থেকে কোনো অপ্রয়োজনীয় রেকর্ড চিরতরে মুছে ফেলতে 'DELETE FROM' স্টেটমেন্ট ব্যবহৃত হয়। তবে এন্টারপ্রাইজ অ্যাপ্লিকেশনে ডেটা মুছে না ফেলে সফট ডিলিট (Soft Delete) প্যাটার্ন অনুসরণ করা হয়।`,
      lessonSections: [
        {
          title: '১. DELETE স্টেটমেন্টে WHERE ক্লজের সতর্কতা ⚠️',
          explanationBn: `DELETE স্টেটমেন্টে ভুলবশত WHERE ক্লজ না দিলে টেবিলের সমস্ত ডাটা একবারে মুছে যাবে। তাই সবসময় সুনির্দিষ্ট আইডি বা শর্ত উল্লেখ করতে হবে।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE logs (id INT)");
$pdo->exec("INSERT INTO logs VALUES (1), (2)");

$targetId = 1;
$stmt = $pdo->prepare("DELETE FROM logs WHERE id = ?");
$stmt->execute([$targetId]);

echo "Deleted rows: " . $stmt->rowCount();
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Deleted rows: 1`,
          noteBn: 'কখনোই WHERE ক্লজ ছাড়া DELETE কুয়েরি চালাবেন না।'
        },
        {
          title: '২. Hard Delete বনাম Soft Delete',
          explanationBn: `• Hard Delete: ডাটাবেস ডিস্ক থেকে রেকর্ড চিরতরে মুছে যায় (রিকভার অসম্ভব)।\n• Soft Delete: টেবিলে deleted_at বা is_deleted কলামে টাইমস্ট্যাম্প সেট করা হয়। ডেটা অক্ষত থাকে কিন্তু সাধারণ কুয়েরিতে আসে না।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INT, name TEXT, deleted_at TEXT NULL)");
$pdo->exec("INSERT INTO users VALUES (1, 'Abbad', NULL)");

// Soft Delete
$pdo->prepare("UPDATE users SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?")->execute([1]);

// Active Query
$active = $pdo->query("SELECT * FROM users WHERE deleted_at IS NULL")->fetchAll();
echo "Active users count: " . count($active);
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Active users count: 0`,
          noteBn: 'অডিট লগ, ইউজারের অর্ডার হিস্ট্রি ইত্যাদিতে Soft Delete আবশ্যক।'
        }
      ],
      keyPointsBn: [
        'DELETE কুয়েরিতে WHERE ক্লজ বাধ্যতামূলক।',
        '$stmt->rowCount() দিয়ে ডিলিট হওয়া রো সংখ্যা নিশ্চিত করুন।',
        'এন্টারপ্রাইজ সিস্টেমে ডেটা লস এড়াতে Soft Delete (deleted_at) ব্যবহার করুন।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: নিরাপদ ডিলিট অপারেশন',
          descriptionBn: 'আইডি ভ্যালিডেট করে ডিলিট।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE items (id INTEGER PRIMARY KEY)");
$pdo->exec("INSERT INTO items VALUES (10)");

$id = 10;
$stmt = $pdo->prepare("DELETE FROM items WHERE id = ?");
$stmt->execute([$id]);
echo "Deleted: " . $stmt->rowCount() . " row";
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: আনপ্রিপেয়ার্ড ডিলিট
$id = $_GET['id'];
$pdo->query("DELETE FROM users WHERE id = $id");`,
        juniorProblems: [
          'SQL Injection এর মাধ্যমে পুরো টেবিল খালি হয়ে যেতে পারে (?id=1 OR 1=1)।'
        ],
        seniorCode: `// ✅ সিনিয়র: Prepared Statement ও Soft Delete
$stmt = $pdo->prepare("UPDATE users SET deleted_at = NOW() WHERE id = :id AND deleted_at IS NULL");
$stmt->execute(['id' => $id]);`,
        seniorBenefits: [
          'ভুলবশত ডিলিট হলেও ব্যাকআপ থেকে তাৎক্ষণিক রিস্টোর করা যায়।'
        ],
        architectAdvice: 'সেনসিটিভ ডেটা ডিলিটের আগে কনফার্মেশন প্রম্পট ও সেশন পাসওয়ার্ড ভেরিফিকেশন এনফোর্স করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDOStatement::rowCount)'
        ],
        explanationBn: `MySQL ইঞ্জিন টেবিল থেকে সংশ্লিষ্ট রো আনলিঙ্ক করে এবং পরিবর্তিত রো সংখ্যা ক্লায়েন্টে পাঠায়।`
      },
      security: {
        vulnerabilityType: 'Catastrophic Data Loss via Unbounded DELETE',
        attackVectorBn: 'WHERE ক্লজ বাইপাস করে পুরো ডাটাবেস টেবিল ওয়াইপ করা।',
        preventionRuleBn: 'DELETE অপারেশনে সুনির্দিষ্ট প্রাইমারি কি দিয়ে Prepared Statement চালান।'
      }
    }
  },
  {
    id: 'mysql-update-data',
    title: 'MySQL Update Data',
    category: 'mysql',
    tag: 'UPDATE SET, WHERE & Concurrency',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'UPDATE SET স্টেটমেন্ট, একাধিক কলাম পরিবর্তন, rowCount() যাচাই, ডাইনামিক ফিল্ড আপডেট ও কনকারেন্সি হ্যান্ডলিং।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL Update Data Architecture</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE profiles (id INTEGER PRIMARY KEY, username TEXT, email TEXT, status TEXT, updated_at TEXT)");
$pdo->exec("INSERT INTO profiles (username, email, status) VALUES ('abbad', 'old@dev.com', 'pending')");

// আপডেট অপারেশন
$userId = 1;
$newEmail = 'abbad.lead@example.com';
$newStatus = 'active';

$stmt = $pdo->prepare("UPDATE profiles SET email = :email, status = :status, updated_at = datetime('now') WHERE id = :id");
$stmt->execute([
    'email'  => $newEmail,
    'status' => $newStatus,
    'id'     => $userId
]);

echo "<p style='color:#4ade80;'>✓ <b>User Profile Updated!</b> Affected Rows: " . $stmt->rowCount() . "</p>";

$updatedUser = $pdo->query("SELECT * FROM profiles WHERE id = 1")->fetch(PDO::FETCH_ASSOC);
echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-size:13px;'>";
echo "Username: <b>{$updatedUser['username']}</b><br>";
echo "Email: <span style='color:#38bdf8;'>{$updatedUser['email']}</span><br>";
echo "Status: <span style='color:#4ade80;'>{$updatedUser['status']}</span><br>";
echo "Updated At: <span style='color:#94a3b8;'>{$updatedUser['updated_at']}</span>";
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `ডাটাবেসের বিদ্যমান রেকর্ডের তথ্য পরিবর্তন ও হালনাগাদ করতে 'UPDATE SET' স্টেটমেন্ট ব্যবহৃত হয়।`,
      lessonSections: [
        {
          title: '১. UPDATE স্টেটমেন্টের মৌলিক কাঠামো',
          explanationBn: `UPDATE টেবিলের নাম SET কলাম১ = মান১, কলাম২ = মান২ WHERE আইডি = সুনির্দিষ্ট_মান।`,
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INT, score INT)");
$pdo->exec("INSERT INTO users VALUES (1, 10)");

// Score Increment
$stmt = $pdo->prepare("UPDATE users SET score = score + :inc WHERE id = :id");
$stmt->execute(['inc' => 5, 'id' => 1]);

echo "Updated Score: " . $pdo->query("SELECT score FROM users WHERE id=1")->fetchColumn();
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Updated Score: 15`,
          noteBn: 'অ্যাটমিক ইনক্রিমেন্টের জন্য score = score + :val লিখলে রেস কন্ডিশন তৈরি হয় না।'
        },
        {
          title: '২. ডাইনামিক ফিল্ড আপডেট প্যাটার্ন',
          explanationBn: `ব্যবহারকারী প্রোফাইলে যে ফিল্ডগুলো পরিবর্তন করতে চান কেবল সেগুলোর জন্য ডাইনামিক SET ক্লজ তৈরি করা।`,
          code: `<?php
$data = ['email' => 'new@test.com', 'name' => 'Abbad Senior'];
$fields = [];
$params = ['id' => 1];

foreach ($data as $col => $val) {
    $fields[] = "$col = :$col";
    $params[$col] = $val;
}

$sql = "UPDATE users SET " . implode(", ", $fields) . " WHERE id = :id";
echo "Generated Dynamic SQL:\n" . $sql;
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Generated Dynamic SQL:\nUPDATE users SET email = :email, name = :name WHERE id = :id`,
          noteBn: 'ডাইনামিক ফিল্ড আপডেটেও কলামের নাম হোয়াইটলিস্ট করা উচিত।'
        }
      ],
      keyPointsBn: [
        'UPDATE কুয়েরিতে WHERE ক্লজ না দিলে সমস্ত রো একই মানে পরিবর্তিত হয়ে যাবে।',
        '$stmt->rowCount() দিয়ে জানা যায় কতগুলো রো পরিবর্তিত হয়েছে।',
        'আপডেটের সাথে সর্বদা updated_at টাইমস্ট্যাম্প রিফ্রেশ করুন।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: পাসওয়ার্ড আপডেট স্ক্রিপ্ট',
          descriptionBn: 'হ্যাশ সহ পাসওয়ার্ড পরিবর্তন।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE users (id INT, pass TEXT)");
$pdo->exec("INSERT INTO users VALUES (1, 'old')");

$newHash = password_hash("NewPass123", PASSWORD_DEFAULT);
$stmt = $pdo->prepare("UPDATE users SET pass = ? WHERE id = ?");
$stmt->execute([$newHash, 1]);

echo "Password updated! Rows affected: " . $stmt->rowCount();
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: WHERE ক্লজহীন আপডেট
$pdo->query("UPDATE settings SET theme = 'dark'");`,
        juniorProblems: [
          'সমস্ত ইউজারের থিম ডার্ক হয়ে যাবে (Data Overwrite Disaster)।'
        ],
        seniorCode: `// ✅ সিনিয়র: Prepared Statement সহ নির্দিষ্ট আইডিতে আপডেট
$stmt = $pdo->prepare("UPDATE settings SET theme = :theme WHERE user_id = :uid");
$stmt->execute(['theme' => 'dark', 'uid' => $userId]);`,
        seniorBenefits: [
          'শুধুমাত্র নির্দিষ্ট ইউজারের সেটিংস আপডেট হয়।'
        ],
        architectAdvice: 'ব্যালেন্স আপডেটের ক্ষেত্রে Pessimistic Locking (SELECT ... FOR UPDATE) অথবা Optimistic Locking (version column) ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDOStatement::execute)',
          'INIT_METHOD_CALL (PDOStatement::rowCount)'
        ],
        explanationBn: `MySQL ইঞ্জিন আপডেট করা মান আগের মানের সাথে তুলনা করে; যদি মান একই থাকে তবে rowCount() শূন্য ফেরত দিতে পারে।`
      },
      security: {
        vulnerabilityType: 'Unintended Bulk Data Overwrite',
        attackVectorBn: 'লজিক্যাল এররের কারণে WHERE ক্লজ বাদ পড়ে সব ইউজারের ডাটা একাকার হওয়া।',
        preventionRuleBn: 'UPDATE স্টেটমেন্টে কঠোরভাবে WHERE ক্লজ ও প্যারামিটার বাইন্ডিং নিশ্চিত করুন।'
      }
    }
  },
  {
    id: 'mysql-limit',
    title: 'MySQL Limit',
    category: 'mysql',
    tag: 'LIMIT, OFFSET & Pagination',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'LIMIT ও OFFSET ক্লজ, সার্ভার-সাইড পেজিনেশন (Pagination), মোট পেজ ক্যালকুলেশন ও হাই-পারফরম্যান্স কার্সর পেজিনেশন।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP MySQL LIMIT & Pagination Architecture</h2>";

$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE articles (id INTEGER PRIMARY KEY, title TEXT, author TEXT)");

for ($i = 1; $i <= 25; $i++) {
    $pdo->exec("INSERT INTO articles (title, author) VALUES ('Enterprise PHP Architecture - Part $i', 'Author $i')");
}

// পেজিনেশন লজিক
$itemsPerPage = 5;
$currentPage = 2; // ধরুন ইউজার পেজ ২-এ আছে (?page=2)

$totalItems = $pdo->query("SELECT COUNT(*) FROM articles")->fetchColumn();
$totalPages = ceil($totalItems / $itemsPerPage);

$offset = ($currentPage - 1) * $itemsPerPage;

$stmt = $pdo->prepare("SELECT id, title, author FROM articles ORDER BY id ASC LIMIT :limit OFFSET :offset");
$stmt->bindValue(':limit', $itemsPerPage, PDO::PARAM_INT);
$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$stmt->execute();
$pageArticles = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo "<p style='color:#38bdf8; font-size:13px;'>Showing Page <b>$currentPage</b> of <b>$totalPages</b> (Total Articles: $totalItems)</p>";

echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>ID</th><th style='padding:6px; text-align:left;'>Title</th><th style='padding:6px; text-align:left;'>Author</th></tr>";
foreach ($pageArticles as $art) {
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>#{$art['id']}</td><td style='padding:6px; color:#4ade80;'>{$art['title']}</td><td style='padding:6px; color:#94a3b8;'>{$art['author']}</td></tr>";
}
echo "</table>";

echo "<div style='margin-top:12px; display:flex; gap:6px;'>";
for ($p = 1; $p <= $totalPages; $p++) {
    $isActive = ($p === $currentPage);
    echo "<span style='padding:4px 10px; border-radius:4px; font-size:12px; background:" . ($isActive ? '#0284c7' : '#1e293b') . "; color:" . ($isActive ? '#fff' : '#94a3b8') . "; border:1px solid #334155;'>Page $p</span>";
}
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `LIMIT ক্লজ ডাটাবেস কোয়েরি থেকে সর্বোচ্চ কতটি রো রিটার্ন করা হবে তা নির্দিষ্ট করে এবং OFFSET ক্লজ কয়টি রো বাদ দিয়ে শুরু করতে হবে তা নির্ধারণ করে। পেজিনেশনের (Pagination) জন্য এই দুটি ক্লজ অপরিহার্য।`,
      lessonSections: [
        {
          title: '১. পেজিনেশন গণিত (Formula)',
          explanationBn: `• Offset = (Current Page - 1) * Items Per Page\n• Total Pages = ceil(Total Items / Items Per Page)`,
          code: `<?php
$page = 3;
$perPage = 10;
$offset = ($page - 1) * $perPage;

echo "For Page $page: LIMIT $perPage OFFSET $offset";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `For Page 3: LIMIT 10 OFFSET 20`,
          noteBn: 'LIMIT ও OFFSET ভ্যালু বাইন্ড করার সময় PDO::PARAM_INT টাইপ কাস্টিং নিশ্চিত করুন।'
        },
        {
          title: '২. কার্সর-বেসড পেজিনেশন (Keyset Pagination) বনাম Offset',
          explanationBn: `লাখো ডেটার টেবিলে OFFSET 100000 দিলে ডাটাবেস আগের ১ লাখ রো স্ক্যান করতে গিয়ে স্লো হয়ে যায়।\nএর সমাধানে Keyset Pagination (WHERE id > :last_seen_id LIMIT 10) ব্যবহৃত হয় যা ও(1) টাইম কমপ্লেক্সিটিতে চলে।`,
          code: `<?php
$lastSeenId = 150;
$sql = "SELECT id, title FROM posts WHERE id > :last_id ORDER BY id ASC LIMIT 10";
echo "Keyset Pagination Query (O(1) Speed):\n" . $sql;
?>`,
          codeLanguage: 'SQL & PHP Keyset Pattern',
          outputPreview: `Keyset Pagination Query (O(1) Speed):\nSELECT id, title FROM posts WHERE id > :last_id ORDER BY id ASC LIMIT 10`,
          noteBn: 'ইনফিনিট স্ক্রলিং ও মোবাইল অ্যাপ এপিআইতে Keyset Pagination ব্যবহার করা হয়।'
        }
      ],
      keyPointsBn: [
        'LIMIT ক্লজ ডাটাবেস সার্ভার ও নেটওয়ার্ক ব্যান্ডউইথ সাশ্রয় করে।',
        'bindValue(\':limit\', $val, PDO::PARAM_INT) দিয়ে ইন্টিজার টাইপ বাইন্ড করতে হয়।',
        'বিশাল ডেটাসেটের ক্ষেত্রে OFFSET এর পরিবর্তে Keyset Pagination প্রয়োগ করুন।'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: পেজিনেশন এপিআই রেসপন্স',
          descriptionBn: 'মেটা সহ পেজিনেশন ডেটা।',
          code: `<?php
$pdo = new PDO("sqlite::memory:");
$pdo->exec("CREATE TABLE logs (id INTEGER PRIMARY KEY)");
for ($i=1; $i<=20; $i++) $pdo->exec("INSERT INTO logs VALUES ($i)");

$stmt = $pdo->prepare("SELECT id FROM logs LIMIT :lim OFFSET :off");
$stmt->bindValue(':lim', 5, PDO::PARAM_INT);
$stmt->bindValue(':off', 0, PDO::PARAM_INT);
$stmt->execute();
$data = $stmt->fetchAll(PDO::FETCH_COLUMN);

echo "Fetched IDs: " . implode(", ", $data);
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: পুরো টেবিল লোড করে PHP দিয়ে পেজিনেশন করা
$all = $pdo->query("SELECT * FROM products")->fetchAll();
$pageData = array_slice($all, 0, 10);`,
        juniorProblems: [
          '১ লক্ষ প্রোডাক্ট থাকলে পুরো ডাটাবেস মেমোরিতে লোড হয়ে সার্ভার ডাউন হয়ে যাবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: SQL লেভেলে LIMIT ও OFFSET
$stmt = $pdo->prepare("SELECT id, name, price FROM products ORDER BY id DESC LIMIT :limit OFFSET :offset");
$stmt->bindValue(':limit', 10, PDO::PARAM_INT);
$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$stmt->execute();`,
        seniorBenefits: [
          'ডাটাবেস মাত্র ১০টি রো রিড করে পাঠায়; দ্রুততম রেসপন্স টাইম।'
        ],
        architectAdvice: 'হাই-ট্রাফিক অ্যাপে COUNT(*) কুয়েরি ক্যাশে রাখুন (Redis cache) যাতে প্রতি পেজ লোডে ফুল টেবিল কাউন্ট করতে না হয়।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_METHOD_CALL (PDOStatement::bindValue)',
          'FETCH_CONSTANT (PDO::PARAM_INT)'
        ],
        explanationBn: `MySQL ইঞ্জিন নির্ধারিত LIMIT সংখ্যক রো পাওয়ার সাথে সাথেই টেবিল স্ক্যান বন্ধ করে দেয়।`
      },
      security: {
        vulnerabilityType: 'Integer Overflow & Denial of Service via Huge LIMIT',
        attackVectorBn: '?limit=99999999 পাঠিয়ে সার্ভারের সমস্ত মেমোরি খরচ করিয়ে DoS ঘটানো।',
        preventionRuleBn: 'সার্ভার-সাইডে $perPage ভ্যালুকে সর্বোচ্চ ৫০ বা ১০০ দিয়ে সীমাবদ্ধ (Cap) করুন।'
      }
    }
  }
];
