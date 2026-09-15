import { TopicItem } from '../types';

export const BASIC_TOPICS: TopicItem[] = [
  {
    id: 'php-home',
    title: 'PHP HOME',
    category: 'basic',
    tag: 'Overview',
    phpVersion: 'PHP 8.2+',
    subtitleBn: 'PHP কী এবং কোথায় ব্যবহার হয় — সংক্ষেপে ও এন্টারপ্রাইজ ব্যাকএন্ড ইকোসিস্টেম।',
    sampleCode: `<?php
// PHP কী এবং কোথায় ব্যবহার হয় — লাইভ ডেমো ও ওভারভিউ

$phpSummary = [
    "Language Type"     => "Server-Side Programming Language",
    "Primary Use"       => "Web Development & Backend Development",
    "Popular CMS"       => "WordPress (ইন্টারনেটের ৪০%+ সাইট)",
    "Popular Framework" => "Laravel, Symfony, CodeIgniter",
    "Databases"         => "MySQL, PostgreSQL, SQLite ইত্যাদি",
    "Client Apps"       => "React, Vue, Flutter, Android, iOS (via REST API)"
];

$creations = [
    "১. Dynamic Website"       => "Business Website, Blog, News Website, Corporate Website",
    "২. Web Application"       => "ERP, CRM, HR, Inventory, School Management, POS System",
    "৩. E-commerce Website"    => "Product Management, Shopping Cart, Checkout, Payment Integration",
    "৪. User Authentication"   => "Registration, Login, Password Reset, Session, Role & Permission",
    "৫. Database Application"  => "MySQL, PostgreSQL, SQLite ডাটাবেসের সাথে নিরবচ্ছিন্ন সংযোগ",
    "৬. REST API / Backend"    => "React, Vue, Flutter, Android, iOS অ্যাপ্লিকেশনের ব্যাকএন্ড",
    "৭. File Handling"         => "File Upload, Download, PDF/CSV Processing, Image & Logs",
    "৮. Popular CMS"           => "WordPress-এর মতো বিশ্বের সবচেয়ে জনপ্রিয় CMS",
    "৯. Enterprise Framework"  => "Laravel-এর মতো ফ্রেমওয়ার্ক দিয়ে বড় ও structured ওয়েব অ্যাপ",
    "১০. CLI & Automation"     => "Command Line Script, Cron Job, Data Processing ও Automation"
];

echo "<div style='font-family:sans-serif; padding:18px; border:2px solid #04AA6D; border-radius:10px; background:#fafafa;'>";
echo "<h2 style='color:#04AA6D; margin-top:0;'>🚀 PHP কী এবং কোথায় ব্যবহার হয় — সংক্ষেপে</h2>";
echo "<p style='color:#333; font-size:14px; line-height:1.6;'><b>PHP</b> হলো একটি Server-Side Programming Language, যা মূলত Web Development এবং Backend Development-এর জন্য ব্যবহৃত হয়।</p>";

echo "<h3 style='color:#1e293b; margin-bottom:8px;'>মূল পরিচিতি:</h3>";
echo "<ul style='color:#475569; font-size:13px; line-height:1.8; margin-top:4px;'>";
foreach ($phpSummary as $key => $val) {
    echo "<li><strong>$key:</strong> $val</li>";
}
echo "</ul>";

echo "<h3 style='color:#1e293b; margin-bottom:8px;'>PHP দিয়ে মূলত কী কী তৈরি করা যায় (১০টি ক্ষেত্র):</h3>";
echo "<ol style='color:#334155; font-size:13px; line-height:1.8; margin-top:4px;'>";
foreach ($creations as $title => $desc) {
    echo "<li><strong>$title:</strong> $desc</li>";
}
echo "</ol>";

echo "<div style='background:#f1f5f9; padding:10px 14px; border-radius:6px; font-family:monospace; font-size:12px; color:#0f172a; margin-top:12px;'>";
echo "<b>PHP Architecture:</b> User ➔ Browser ➔ Request ➔ PHP App ➔ Database/File ➔ Processing ➔ Response (HTML/JSON) ➔ Browser";
echo "</div>";

echo "<p style='background:#e8f5e9; padding:8px 12px; border-radius:6px; color:#2e7d32; font-weight:bold; font-size:13px; margin-top:12px; margin-bottom:0;'>";
echo "✓ Zend Engine 8.2 দ্বারা সরাসরি ব্রাউজারে সফলভাবে এক্সিকিউট সম্পন্ন হয়েছে!";
echo "</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP হলো একটি Server-Side Programming Language, যা মূলত Web Development এবং Backend Development-এর জন্য ব্যবহৃত হয়। নিচে বাস্তব জীবনের বিভিন্ন ক্ষেত্রে এর ব্যবহার, আর্কিটেকচার এবং ইন্টারেক্টিভ কোড উদাহরণ দেওয়া হলো:`,
      lessonSections: [
        {
          title: '১. Dynamic Website (গতিশীল ওয়েবসাইট তৈরি)',
          explanationBn: `PHP দিয়ে Business Website, Blog, News Website ও Corporate Website তৈরি করা যায়। সাধারণ স্ট্যাটিক HTML ফাইলের মতো নয়, পিএইচপি সার্ভার থেকে ডাইনামিক ডেটা লোড করে ব্যবহারকারীর প্রয়োজন অনুযায়ী পেজ তৈরি করে।`,
          code: `<?php
// ১. ডাইনামিক নিউজ আর্টিকেল জেনারেটর
$portalTitle = "Daily Tech Journal";
$articles = [
    ["title" => "PHP 8.3 Released with New Features", "reads" => 1420, "category" => "Tech"],
    ["title" => "Why Modern Companies Still Choose Laravel", "reads" => 3200, "category" => "Engineering"],
    ["title" => "Mastering MySQL Performance for High Traffic", "reads" => 950, "category" => "Database"]
];

echo "<h2>$portalTitle</h2>";
echo "<ul>";
foreach ($articles as $item) {
    echo "<li><b>[{$item['category']}]</b> {$item['title']} - <i>{$item['reads']} reads</i></li>";
}
echo "</ul>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২. Web Application (ERP, CRM, HRM ও POS সিস্টেম)',
          explanationBn: `বড় বড় বাণিজ্যিক প্রতিষ্ঠানের জটিল বিজনেস লজিক হ্যান্ডেল করতে PHP ব্যবহৃত হয়:
• ERP (Enterprise Resource Planning)
• CRM (Customer Relationship Management)
• HR Management & Payroll
• Inventory & POS (Point of Sale) System
• School/College Management System`,
          code: `<?php
// ২. ইআরপি ও সেলস ড্যাশবোর্ড লজিক
$erpMetrics = [
    "monthlySales" => 1245000,
    "activeEmployees" => 64,
    "pendingOrders" => 18,
    "operationalCost" => 420000
];

$netProfit = $erpMetrics["monthlySales"] - $erpMetrics["operationalCost"];

echo "<div style='font-family:sans-serif; background:#f8fafc; padding:14px; border-radius:8px;'>";
echo "<h3 style='margin-top:0; color:#1e293b;'>🏢 Enterprise Resource Metrics</h3>";
echo "<p>Total Monthly Revenue: <b>" . number_format($erpMetrics["monthlySales"]) . " BDT</b></p>";
echo "<p>Operational Overhead: <b>" . number_format($erpMetrics["operationalCost"]) . " BDT</b></p>";
echo "<p style='color:#16a34a; font-size:16px;'>Net Profit: <b>" . number_format($netProfit) . " BDT</b></p>";
echo "<p>Active Staff: " . $erpMetrics["activeEmployees"] . " members</p>";
echo "</div>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩. E-commerce Website (ইকমার্স ও পেমেন্ট গেটওয়ে)',
          explanationBn: `ইকমার্স প্ল্যাটফর্মের প্রধান উপাদানগুলো PHP দিয়ে সহজে ও নিরাপদে তৈরি করা যায়:
• Product Catalog Management
• Shopping Cart & Tax Calculations
• Checkout & Order Management
• Payment Gateway Integration (bKash, SSLCommerz, Stripe)
• Inventory & Stock Tracking`,
          code: `<?php
// ৩. ইকমার্স শপিং কার্ট ও চেকআউট ক্যালকুলেটর
$cart = [
    ["name" => "Mechanical Keyboard", "price" => 4500, "qty" => 1],
    ["name" => "Wireless Mouse", "price" => 1800, "qty" => 2],
    ["name" => "USB-C Hub", "price" => 2200, "qty" => 1]
];

$subtotal = 0;
foreach ($cart as $item) {
    $subtotal += ($item["price"] * $item["qty"]);
}

$discount = ($subtotal > 8000) ? 500 : 0;
$grandTotal = $subtotal - $discount;

echo "<h4>🛒 Shopping Cart Summary:</h4>";
echo "<p>Subtotal: <b>" . number_format($subtotal) . " BDT</b></p>";
echo "<p>Special Discount: <b>-" . number_format($discount) . " BDT</b></p>";
echo "<p style='font-size:16px; color:#04AA6D;'>Payable Total: <b>" . number_format($grandTotal) . " BDT</b></p>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৪. User Authentication (নিরাপদ ইউজার লগইন ও সেশন)',
          explanationBn: `PHP-এর সিকিউরিটি ফাংশন ব্যবহার করে প্রফেশনাল ইউজার ম্যানেজমেন্ট তৈরি করা যায়:
• Registration & Input Validation
• Secure Password Hashing (password_hash)
• Login & Session Security ($_SESSION)
• Password Reset via Email/Token
• Role-Based Access Control (RBAC - Admin, Editor, Customer)`,
          code: `<?php
// ৪. পাসওয়ার্ড হ্যাশিং ও ভেরিফিকেশন ডেমো
$plainPassword = "SecurePassword#2026";

// নিরাপদে পাসওয়ার্ড ডাটাবেসে সেভ করার স্ট্যান্ডার্ড ফাংশন
$hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);

// লগইন ভেরিফিকেশন চেক
$isPasswordCorrect = password_verify("SecurePassword#2026", $hashedPassword);

echo "<p><b>Original Password:</b> $plainPassword</p>";
echo "<p><b>Encrypted BCrypt Hash:</b> <code style='font-size:11px;'>$hashedPassword</code></p>";
echo "<p><b>Login Verification Status:</b> " . ($isPasswordCorrect ? "<span style='color:green;'>✓ Verified Successfully</span>" : "✗ Failed") . "</p>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৫. Database-driven Application (ডাটাবেসের সাথে সংযোগ)',
          explanationBn: `PHP-এর মাধ্যমে MySQL, MariaDB, PostgreSQL, SQLite ইত্যাদি জনপ্রিয় ডাটাবেসের সাথে PDO (PHP Data Objects) বা MySQLi এক্সটেনশন ব্যবহার করে দ্রুত ও নিরাপদে ডেটা রিড ও রাইট করা যায়।`,
          code: `<?php
// ৫. ডাটাবেস কুয়েরি ও রেকর্ড রিট্রিভাল সিমুলেশন
$usersInDatabase = [
    ["id" => 101, "name" => "Rahim Ahmed", "email" => "rahim@example.com", "role" => "Admin"],
    ["id" => 102, "name" => "Fatima Khan", "email" => "fatima@example.com", "role" => "Manager"],
    ["id" => 103, "name" => "Abbad Hossain", "email" => "abbad@example.com", "role" => "Lead Engineer"]
];

echo "<table border='1' cellpadding='8' style='border-collapse:collapse; width:100%;'>";
echo "<tr style='background:#f1f5f9;'><th>ID</th><th>User Name</th><th>Email</th><th>Role</th></tr>";
foreach ($usersInDatabase as $user) {
    echo "<tr><td>{$user['id']}</td><td>{$user['name']}</td><td>{$user['email']}</td><td><span style='background:#e2e8f0; padding:2px 6px; border-radius:4px;'>{$user['role']}</span></td></tr>";
}
echo "</table>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৬. REST API / Backend Development',
          explanationBn: `আধুনিক মোবাইল অ্যাপস (Flutter, React Native, iOS, Android) এবং সিঙ্গেল পেজ অ্যাপ্লিকেশনের (React, Vue, Next.js) জন্য JSON ফরম্যাটে হাই-স্পিড RESTful API তৈরি করতে PHP ব্যবহৃত হয়।`,
          code: `<?php
// ৬. REST API JSON Response জেনারেটর
header('Content-Type: application/json; charset=utf-8');

$response = [
    "status" => "success",
    "code" => 200,
    "timestamp" => time(),
    "data" => [
        "appName" => "PHP Mastery API",
        "apiVersion" => "v1.2",
        "authenticated" => true,
        "availableEndpoints" => ["/api/users", "/api/products", "/api/orders"]
    ]
];

echo json_encode($response, JSON_PRETTY_PRINT);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৭. File Handling & System Processing',
          explanationBn: `PHP দিয়ে স্বয়ংক্রিয়ভাবে সার্ভারে ফাইল আপলোড, ডাউনলোড, ইমেজ রিসাইজ, PDF ইনভয়েস তৈরি, CSV/Excel এক্সপোর্ট এবং সিস্টেম লগ ফাইল সংরক্ষণ করা যায়।`,
          code: `<?php
// ৭. ফাইল প্রসেসিং ও সাইজ ফরম্যাটিং
$uploadedFiles = [
    ["name" => "tax_invoice_2026.pdf", "size" => 245890, "type" => "application/pdf"],
    ["name" => "user_avatar.png", "size" => 85200, "type" => "image/png"]
];

echo "<h4>📂 File Audit Log:</h4><ul>";
foreach ($uploadedFiles as $file) {
    $sizeKb = round($file["size"] / 1024, 2);
    echo "<li><strong>{$file['name']}</strong> ({$sizeKb} KB) - MIME: <code>{$file['type']}</code></li>";
}
echo "</ul>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৮. CMS Development (WordPress & Content Engines)',
          explanationBn: `ইন্টারনেটের ৪৩% এরও বেশি ওয়েবসাইট চলে WordPress CMS দিয়ে, যা সম্পূর্ণ PHP-তে রচিত। এছাড়া Drupal, Joomla ইত্যাদির মতো এন্টারপ্রাইজ কনটেন্ট সিস্টেম পিএইচপি দিয়ে পরিচালিত হয়।`,
          code: `<?php
// ৮. WordPress-স্টাইল হুক ও ফিল্টার লজিক ডেমো
function applyContentFilter($text) {
    return "<div style='color:#1e40af;'>[CMS Verified] " . htmlspecialchars($text) . "</div>";
}

$rawBlogPost = "WordPress powers over 43% of the internet using PHP backend architecture.";
echo applyContentFilter($rawBlogPost);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৯. Framework-based Development (Laravel & Modern MVC)',
          explanationBn: `Laravel ও Symfony-এর মতো আধুনিক পিএইচপি ফ্রেমওয়ার্ক দিয়ে বিশ্বের শীর্ষস্থানীয় প্রতিষ্ঠানসমূহ তাদের জটিল অ্যাপ্লিকেশন পরিচালনা করে। এতে রয়েছে MVC প্যাটার্ন, ডিপেনডেন্সি ইনজেকশন, কিউ সিস্টেম ও স্বয়ংক্রিয় টেস্টিং সুবিধা।`,
          code: `<?php
// ৯. ক্লিন MVC কন্ট্রোলার প্যাটার্ন ডেমো
class ProductController {
    public function show($id) {
        return [
            "productId" => $id,
            "title" => "Enterprise Cloud Server",
            "pricingTier" => "Dedicated Platinum"
        ];
    }
}

$controller = new ProductController();
$productDetails = $controller->show(402);
echo "<p>Controller Loaded: <b>{$productDetails['title']}</b> (Tier: {$productDetails['pricingTier']})</p>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১০. CLI & Automation (টার্মিনাল স্ক্রিপ্ট ও ক্রনজব)',
          explanationBn: `PHP দিয়ে টার্মিনাল কমান্ড লাইন স্ক্রিপ্ট, ডাটাবেস অটো-ব্যাকআপ, ক্রনজব (Cron Job), ইমেইল কিউ প্রসেসর ও সিস্টেম অটোমেশনের কাজ করা যায়।`,
          code: `<?php
// ১০. টার্মিনাল ক্রনজব অটোমেশন সিমুলেশন
$jobName = "Nightly Database Optimization & Purge";
$startTime = microtime(true);

// কৃত্রিম কাজ সম্পন্ন
$purgedRows = 1420;
$executionTime = round((microtime(true) - $startTime) * 1000, 3);

echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px;'>";
echo "[SYSTEM CRON] Starting Job: $jobName\\n";
echo "[INFO] Cleared $purgedRows stale audit records.\\n";
echo "[STATUS] Finished in {$executionTime} ms. Exit code 0.\\n";
echo "</pre>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১১. PHP-এর সাধারণ Architecture ও রিকোয়েস্ট ফ্লো',
          explanationBn: `ইউজার ব্রাউজারে লিংক ক্লিক করার পর থেকে স্ক্রিনে আউটপুট প্রদর্শিত হওয়া পর্যন্ত পিএইচপি রিকোয়েস্ট সাইকেল:`,
          code: `User (Browser)
      ↓ (HTTP Request)
Web Server (Apache / Nginx)
      ↓
PHP Zend Engine
      ↓
Database / Filesystem / APIs
      ↓
PHP Code Execution & HTML/JSON Rendering
      ↓ (HTTP Response)
Web Server ➔ Browser ➔ User Display`,
          codeLanguage: 'System Flow'
        }
      ],
      keyPointsBn: [
        'PHP = Server-Side Language, যা মূলত Web ও Backend Development-এ ব্যবহৃত হয়।',
        'ডাইনামিক ওয়েবসাইট: Business Website, Blog, News Website ও Corporate Website।',
        'ওয়েব অ্যাপ্লিকেশন: ERP, CRM, HR Management, Inventory, School/College Management ও POS System।',
        'ই-কমার্স সল্যুশন: Product Management, Shopping Cart, Checkout, Order ও Payment Integration।',
        'ইউজার অথেন্টিকেশন: Registration, Login, Logout, Password Reset, Session Management, Role & Permission (RBAC)।',
        'ডাটাবেস ড্রিভেন অ্যাপ: MySQL, PostgreSQL, SQLite ইত্যাদি জনপ্রিয় ডাটাবেসের সাথে ডাটা আদান-প্রদান।',
        'REST API ও মোবাইল ব্যাকএন্ড: React, Vue, Flutter, Android ও iOS-এর জন্য হাই-পারফরম্যান্স API ব্যাকএন্ড।',
        'ফাইল হ্যান্ডলিং: File Upload, Download, PDF/CSV Processing, Image Management ও Log Files।',
        'CMS ও ফ্রেমওয়ার্ক: WordPress-এর মতো জনপ্রিয় CMS এবং Laravel-এর মতো robust ফ্রেমওয়ার্ক।',
        'CLI ও অটোমেশন: Command Line Script, Cron Job, Data Processing ও সিস্টেম অটোমেশন।'
      ],
      practiceExamples: [
        {
          title: 'উদাহরণ ১: ডাইনামিক বিজনেস পোর্টাল স্ট্যাটাস ড্যাশবোর্ড',
          descriptionBn: 'PHP দিয়ে ডায়নামিক ওয়েবসাইট ও সার্ভার আপটাইম, তারিখ এবং ডাটা প্রদর্শন।',
          code: `<?php
// ১. ডায়নামিক বিজনেস পোর্টাল ওভারভিউ
$companyName = "Apex Digital Systems Ltd.";
$systemStatus = "Operational (99.98% Uptime)";
$activeServices = ["ERP Core", "Payment Gateway", "HRM Portal", "Inventory API"];

echo "<div style='font-family:sans-serif; padding:16px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;'>";
echo "<h2 style='color:#0f172a; margin-top:0;'>🏢 $companyName</h2>";
echo "<p>System Status: <span style='color:#16a34a; font-weight:bold;'>$systemStatus</span></p>";
echo "<p>Active Services (" . count($activeServices) . "):</p><ul>";
foreach ($activeServices as $svc) {
    echo "<li>$svc</li>";
}
echo "</ul>";
echo "<p style='font-size:12px; color:#64748b;'>Server Timestamp: " . date("F j, Y, g:i a") . "</p>";
echo "</div>";
?>`
        },
        {
          title: 'উদাহরণ ২: REST API ব্যাকএন্ডের সিমুলেটেড JSON রেসপন্স',
          descriptionBn: 'React, Flutter বা মোবাইল অ্যাপের জন্য PHP দিয়ে স্ট্যান্ডার্ড JSON API রেসপন্স তৈরি।',
          code: `<?php
// ২. REST API ব্যাকএন্ড রেসপন্স
$apiResponse = [
    "status" => 200,
    "success" => true,
    "message" => "Products fetched successfully for Mobile Client",
    "timestamp" => time(),
    "data" => [
        ["id" => 101, "title" => "Mechanical Keyboard", "price" => 2500, "in_stock" => true],
        ["id" => 102, "title" => "Wireless Mouse", "price" => 850, "in_stock" => true],
        ["id" => 103, "title" => "USB-C Hub", "price" => 1400, "in_stock" => false]
    ]
];

// ব্রাউজারে JSON দেখার প্রিভিউ
echo "<div style='font-family:monospace; background:#090d16; color:#34d399; padding:14px; border-radius:8px;'>";
echo "<div style='color:#94a3b8; font-size:11px; margin-bottom:6px;'>// Content-Type: application/json</div>";
echo json_encode($apiResponse, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
echo "</div>";
?>`
        }
      ],
      comparison: {
        juniorCode: `<?php
// স্প্যাগেটি কোড: এইচটিএমএল এবং ডাটাবেস লজিক সব মিশ্রিত
$conn = mysqli_connect("localhost", "root", "", "app");
$res = mysqli_query($conn, "SELECT * FROM users WHERE id = " . $_GET['id']);
$user = mysqli_fetch_assoc($res);
echo "<h1>" . $user['name'] . "</h1>";
?>`,
        juniorProblems: [
          'চরম SQL Injection নিরাপত্তা ঝুঁকি ($_GET সরাসরি কোয়েরিতে যুক্ত)',
          'কোনো টাইপ সেফটি ও ভ্যালিডেশন নেই',
          'কোড টেস্ট করা ও মেইনটেইন করা দুঃসাধ্য'
        ],
        seniorCode: `<?php
declare(strict_types=1);

// ২০ বছরের আর্কিটেক্ট প্যাটার্ন: DTO ও ইমিউটেবল অবজেক্ট ব্যবহার
final readonly class UserProfileView {
    public function __construct(
        public int $id,
        public string $safeName,
    ) {}
}

// ভিউতে শুধুমাত্র ফিল্টার করা নিরাপদ ডাটা রেন্ডার হয়
echo htmlspecialchars($userProfile->safeName, ENT_QUOTES, 'UTF-8');`,
        seniorBenefits: [
          '১০০% টাইপ সেফটি (strict_types=1)',
          'XSS আক্রমণ সম্পূর্ণ প্রতিহত',
          'সহজে ইউনিট টেস্টেবল ও ক্লিন আর্কিটেকচার কমপ্লায়েন্ট'
        ],
        architectAdvice: 'কখনোই বিজনেস লজিক, ডাটা অ্যাক্সেস লেয়ার এবং প্রেজেন্টেশন ভিউ এক ফাইলে রাখবেন না। সর্বদা সেপারেশন অফ কনসার্নস বজায় রাখুন।'
      },
      zendInternals: {
        opcodesSummary: ['ZEND_ECHO', 'ZEND_INIT_FCALL', 'ZEND_DO_ICALL'],
        cStructOrMemory: 'zend_op_array এবং zval মেমরি স্ট্রাকচার',
        explanationBn: 'Zend Engine মূলত ৪টি ধাপে কাজ করে: Lexing (টোকেনাইজেশন) -> Parsing (AST তৈরি) -> Compilation (অপকোড তৈরি) -> Execution (ভার্চুয়াল মেশিনে অপকোড রান)। OPcache থাকলে অপকোড সরাসরি মেমরিতে সংরক্ষিত থাকে।'
      },
      security: {
        vulnerabilityType: 'Cross-Site Scripting (XSS)',
        attackVectorBn: 'ইউজারের পাঠানো ডাটা স্যানিটাইজ না করে সরাসরি echo করলে ব্রাউজারে ক্ষতিকর স্ক্রিপ্ট রান হতে পারে।',
        preventionRuleBn: 'HTML রেন্ডার করার সময় সর্বদা htmlspecialchars() বা Twig/Blade টেমপ্লেট ইঞ্জিনের অটো-এসকেপিং ব্যবহার করুন।',
        safeCodeSnippet: `echo htmlspecialchars($userInput, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');`
      }
    }
  },
  {
    id: 'php-intro',
    title: 'PHP Intro',
    category: 'basic',
    tag: 'Getting Started',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'পিএইচপি কী করতে পারে, ব্যাকএন্ড আর্কিটেকচারে এর অবস্থান এবং স্কেলেবিলিটি।',
    sampleCode: `<?php
$features = [
    "ডায়নামিক পেজ কনটেন্ট তৈরি করা",
    "সার্ভার ফাইল ক্রিয়েট, রিড, রাইট ও ডিলিট করা",
    "ফর্ম ডাটা প্রসেসিং ও ভ্যালিডেশন",
    "কুকি ও সেশন ম্যানেজমেন্ট",
    "ডাটাবেস এক্সেস ও ডাটা এনক্রিপশন"
];

echo "<h3>পিএইচপির মূল সক্ষমতাসমূহ:</h3><ul>";
foreach ($features as $f) {
    echo "<li>$f</li>";
}
echo "</ul>";
?>`,
    deepDive: {
      conceptBn: `PHP হলো ক্রস-প্ল্যাটফর্ম উপযোগী ভাষা। এটি Linux, Windows, macOS সব প্ল্যাটফর্মে সমানভাবে কাজ করে। পিএইচপি ৮.০ এর পর থেকে এটি পারফরম্যান্স ও মেমোরি ব্যবহারে অন্যান্য আধুনিক ভাষার সাথে প্রতিযোগিতায় সমকক্ষ।`,
      keyPointsBn: [
        'Share-Nothing আর্কিটেকচার: প্রতিটি রিকোয়েস্টে স্বতন্ত্রভাবে মেমরি বরাদ্দ হয় ও কাজ শেষে মুক্ত হয়।',
        'REST API, GraphQL, মাইক্রোসার্ভিস ও ব্যাকএন্ড এপিআই তৈরিতে অত্যন্ত দ্রুত ও নির্ভরযোগ্য।'
      ]
    }
  },
  {
    id: 'php-install',
    title: 'PHP Install',
    category: 'basic',
    tag: 'Environment',
    phpVersion: 'PHP 8.2+',
    subtitleBn: 'PHP Installation: XAMPP, PHP CLI, Web Server ও প্রফেশনাল এনভায়রনমেন্ট সেটআপ গাইড।',
    sampleCode: `<?php
// PHP Installation & Environment Verification Script
echo "<div style='font-family:sans-serif; padding:18px; border:2px solid #04AA6D; border-radius:10px; background:#fafafa;'>";
echo "<h2 style='color:#04AA6D; margin-top:0;'>⚙️ PHP Installation & Runtime Status</h2>";

$phpInfo = [
    "PHP Version (php -v)"   => phpversion() . " (" . (PHP_VERSION_ID >= 80200 ? "Modern 8.2+" : "Old") . ")",
    "Server SAPI"            => php_sapi_name() . " (Server Interface)",
    "Zend Engine Version"    => zend_version(),
    "Architecture"           => (PHP_INT_SIZE * 8) . "-bit",
    "Loaded Extensions"      => count(get_loaded_extensions()) . " extensions active",
    "Max Execution Time"     => ini_get('max_execution_time') . "s",
    "Memory Limit"           => ini_get('memory_limit')
];

echo "<ul style='color:#334155; font-size:13px; line-height:1.8;'>";
foreach ($phpInfo as $label => $val) {
    echo "<li><strong>$label:</strong> <code style='background:#e2e8f0; padding:2px 6px; border-radius:4px;'>$val</code></li>";
}
echo "</ul>";

echo "<div style='background:#f1f5f9; padding:12px; border-radius:8px; margin-top:14px;'>";
echo "<h4 style='margin:0 0 8px 0; color:#1e293b;'>📌 ৩টি গুরুত্বপূর্ণ টেস্ট কমান্ড:</h4>";
echo "<pre style='margin:0; font-family:monospace; font-size:12px; color:#0f172a;'>";
echo "1. php -v                        # PHP Version Check\\n";
echo "2. php -r \"echo 'PHP Works!';\"   # CLI Test Execution\\n";
echo "3. http://localhost/hello.php    # Browser Test via XAMPP htdocs";
echo "</pre>";
echo "</div>";

echo "<p style='color:#15803d; font-size:13px; font-weight:bold; margin-top:12px; margin-bottom:0;'>";
echo "✓ ব্রাউজারে ইনবিল্ট WebAssembly Zend Engine সফলভাবে কার্যকর রয়েছে!";
echo "</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP শেখা বা PHP দিয়ে Project তৈরি করার আগে আমাদের Computer-এ PHP Environment তৈরি করতে হবে। নিচে প্রতিটি ধাপ বিস্তারিত ব্যাখ্যা ও কোড উদাহরণের মাধ্যমে তুলে ধরা হলো:`,
      lessonSections: [
        {
          title: '১. PHP চালানোর জন্য কী কী দরকার?',
          explanationBn: `PHP একটি Server-Side Language। তাই শুধু .php ফাইল তৈরি করলেই ব্রাউজারে সরাসরি কোড রান হয় না। 
সাধারণত একটি কার্যকর PHP Environment তৈরিতে ৪টি উপাদান দরকার:
• PHP Interpreter / Runtime (কোড এক্সিকিউট করতে)
• Web Server (Apache বা Nginx)
• Database Engine (MySQL বা MariaDB)
• Code Editor (VS Code বা PhpStorm)

Beginner হিসেবে সবচেয়ে সহজ ও জনপ্রিয় সমাধান হলো XAMPP প্যাকেজ।`,
          code: `XAMPP All-in-One Architecture:
XAMPP
├── Apache (Web Server - HTTP রিকোয়েস্ট হ্যান্ডলার)
├── PHP (Zend Engine Interpreter - কোড এক্সিকিউটর)
├── MySQL / MariaDB (Database Engine)
└── phpMyAdmin (ব্রাউজার ভিত্তিক ডাটাবেস অ্যাডমিন প্যানেল)`,
          codeLanguage: 'Architecture Diagram',
          noteBn: 'XAMPP ইন্সটল করলে Apache, PHP এবং MySQL আলাদা কনফিগার করার ঝামেলা ছাড়াই একসাথে সেটআপ হয়ে যায়।'
        },
        {
          title: '২. PHP Install করার প্রধান দুইটি পদ্ধতি',
          explanationBn: `PHP মূলত দুটি পদ্ধতিতে আপনার মেশিনে ইন্সটল করা যায়:
• পদ্ধতি ১ — XAMPP (বিগিনার এবং লোকাল প্রজেক্টের জন্য সবচেয়ে দ্রুত ও সহজ)
• পদ্ধতি ২ — PHP আলাদাভাবে Install (মডার্ন PHP, Composer ও Laravel ফ্রেমওয়ার্কের জন্য ডেডিকেটেড CLI)`,
          code: `# পদ্ধতি ১: www.apachefriends.org থেকে XAMPP ডাউনলোড ও ইন্সটল (C:\\xampp)
# পদ্ধতি ২: উইন্ডোজে সরাসরি Winget দিয়ে PHP 8.2 ইনস্টল:
winget install PHP.PHP.8.2`,
          codeLanguage: 'Installation Methods'
        },
        {
          title: '৩. XAMPP দিয়ে PHP Install ও এক্সিকিউটেবল লোকেশন',
          explanationBn: `XAMPP ইন্সটল করার পর সাধারণত PHP-এর মূল এক্সিকিউটেবল ফাইল থাকে:
C:\\xampp\\php\\php.exe
Apache ওয়েব সার্ভার কোনো পিএইচপি রিকোয়েস্ট পেলে ব্যাকএন্ডে এই php.exe ফাইলটি ইনভোক করে কোড এক্সিকিউট করায়।`,
          code: `# Windows Command Prompt-এ লোকেশন চেক:
where php
# প্রত্যাশিত রেজাল্ট: C:\\xampp\\php\\php.exe`,
          codeLanguage: 'Windows Terminal'
        },
        {
          title: '৪. PHP Install হয়েছে কিনা Check করা',
          explanationBn: `Windows Command Prompt বা PowerShell খুলে নিচের কমান্ডটি রান করুন। যদি PHP সফলভাবে ইন্সটল ও PATH-এ কনফিগার করা থাকে, তবে পিএইচপি ভার্সন ও রানটাইম ইনফো দেখতে পাবেন:`,
          code: `php -v`,
          codeLanguage: 'Terminal Command',
          outputPreview: `PHP 8.2.12 (cli) (built: Oct 24 2023 21:15:15) (ZTS Visual C++ 2019 x64)
Copyright (c) The PHP Group
Zend Engine v4.2.12, Copyright (c) Zend Technologies`
        },
        {
          title: '৫. যদি "php is not recognized" দেখায় — সমাধান',
          explanationBn: `টার্মিনালে "php is not recognized as an internal or external command" দেখালে বুঝতে হবে Windows সিস্টেমের Environment Variables-এ PHP ফোল্ডারের পাথ যুক্ত নেই।
সমাধান:
১. Windows Search-এ গিয়ে "Environment Variables" ওপেন করুন।
২. System Variables থেকে 'Path' সিলেক্ট করে Edit-এ ক্লিক করুন।
৩. 'New' বাটনে ক্লিক করে C:\\xampp\\php লিখে OK দিন।
৪. সব Command Prompt উইন্ডো বন্ধ করে নতুন উইন্ডো খুলে আবার 'php -v' রান করুন।`,
          code: `# PowerShell-এ সিস্টেম পাথ ভেরিফাই করার কমান্ড:
$env:Path -split ';' | Select-String "php"`,
          codeLanguage: 'PowerShell Diagnostic'
        },
        {
          title: '৬. PHP দিয়ে প্রথম Program (hello.php)',
          explanationBn: `একটি সাধারণ টেক্সট ফাইলে নিচের মতো করে PHP ওপেনিং ট্যাগ এবং echo স্টেটমেন্ট লিখে প্রথম প্রোগ্রাম তৈরি করুন:`,
          code: `<?php
// প্রথম PHP প্রোগ্রাম: স্ক্রিনে হ্যালো মেসেজ প্রিন্ট করা
echo "Hello PHP";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello PHP`
        },
        {
          title: '৭. XAMPP দিয়ে Browser-এ PHP Run করা',
          explanationBn: `১. hello.php ফাইলটি C:\\xampp\\htdocs\\hello.php লোকেশনে সেভ করুন।
২. XAMPP Control Panel খুলে 'Apache' মডিউলের পাশে 'Start' বাটনে ক্লিক করুন।
৩. ব্রাউজারে গিয়ে লিখুন: http://localhost/hello.php এবং Enter চাপুন।`,
          code: `<?php
// C:\\xampp\\htdocs\\hello.php
$greeting = "Hello PHP from Local Apache Server!";
$serverTime = date("H:i:s A");

echo "<h1>$greeting</h1>";
echo "<p>Execution Time: $serverTime</p>";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello PHP from Local Apache Server!`
        },
        {
          title: '৮. কেন htdocs-এর মধ্যে file রাখতে হয়?',
          explanationBn: `XAMPP-এর Apache ওয়েব সার্ভার C:\\xampp\\htdocs ফোল্ডারটিকে Document Root হিসেবে সেট করে রাখে। ব্রাউজার যখন http://localhost/hello.php রিকোয়েস্ট করে, Apache তখন htdocs ফোল্ডারের ভেতরে hello.php ফাইলটিকে খুঁজে বের করে Zend Engine-এর কাছে পাঠায়।`,
          code: `Browser HTTP Request (http://localhost/hello.php)
       ↓
Apache Web Server
       ↓
C:\\xampp\\htdocs\\hello.php
       ↓
PHP Zend Engine (Code Execute করে Raw HTML/Text তৈরি করে)
       ↓
Apache রেসপন্স ব্রাউজারে ফেরত পাঠায়
       ↓
Browser (Hello PHP প্রদর্শন করে)`,
          codeLanguage: 'Request-Response Architecture'
        },
        {
          title: '৯. Folder-এর মধ্যে Project তৈরি (myapp)',
          explanationBn: `বাস্তবে প্রতিটি প্রজেক্টের জন্য htdocs-এর ভেতরে আলাদা ফোল্ডার তৈরি করতে হয়। যেমন:
C:\\xampp\\htdocs\\myapp\\index.php
ব্রাউজারে যখন http://localhost/myapp/ লিখবেন, তখন স্বয়ংক্রিয়ভাবে ডিফল্ট ফাইল index.php রান হবে।`,
          code: `<?php
// C:\\xampp\\htdocs\\myapp\\index.php
$projectName = "Ecommerce Enterprise";
$version = "1.0.0";

echo "<div style='font-family:sans-serif; padding:16px; border:1px solid #04AA6D; border-radius:8px;'>";
echo "<h2 style='color:#04AA6D;'>🚀 Welcome to $projectName</h2>";
echo "<p>Project Version: <strong>$version</strong></p>";
echo "<p>Web Root: <code>C:/xampp/htdocs/myapp/</code></p>";
echo "</div>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১০. PHP CLI দিয়ে সরাসরি Run করা',
          explanationBn: `PHP কোড চালানোর জন্য সর্বদা ব্রাউজার বা Apache প্রয়োজন হয় না। টার্মিনাল থেকেই সরাসরি কমান্ড লাইনে PHP রান করা যায়।
কমান্ড: php hello.php
CLI মোড ব্যাকগ্রাউন্ড ক্রনজব, স্ক্রিপ্ট অটোমেশন ও মেসেজ কিউ প্রসেস করার জন্য আধুনিক সফটওয়্যারে সবচেয়ে বেশি ব্যবহৃত হয়।`,
          code: `<?php
// CLI স্ক্রিপ্ট: টার্মিনালে রান করতে লিখুন: php hello.php
$cliMode = (php_sapi_name() === 'cli');

echo "=== PHP Command Line Worker ===\\n";
echo "Active SAPI: " . php_sapi_name() . "\\n";
echo "Current Time: " . date('Y-m-d H:i:s') . "\\n";
echo "Memory Used: " . round(memory_get_usage() / 1024, 2) . " KB\\n";
echo "Status: Task successfully completed.\\n";
?>`,
          codeLanguage: 'PHP CLI Code'
        },
        {
          title: '১১. PHP Development-এর জন্য Code Editor',
          explanationBn: `PHP কোড লেখার জন্য সবচেয়ে জনপ্রিয় ফ্রি এডিটর হলো VS Code। 
VS Code-এ C:\\xampp\\htdocs\\myapp ফোল্ডারটি 'Open Folder' দিয়ে ওপেন করে index.php, about.php, contact.php ইত্যাদি ফাইল তৈরি করে কোড লিখুন। প্রয়োজনীয় এক্সটেনশন: PHP Intelephense।`,
          code: `myapp/
├── index.php      (হোম পেজ ও এন্ট্রি পয়েন্ট)
├── about.php      (কোম্পানি ইনফরমেশন)
├── contact.php    (যোগাযোগ ফর্ম)
└── config.php     (ডাটাবেস ও সিস্টেম কনফিগারেশন)`,
          codeLanguage: 'Project Folder Structure'
        },
        {
          title: '১২. PHP Version কেন গুরুত্বপূর্ণ?',
          explanationBn: `PHP প্রতিনিয়ত উন্নত হচ্ছে। PHP 7.x-এর তুলনায় PHP 8.x (8.0, 8.1, 8.2, 8.3) অনেক দ্রুত, মেমোরি-দক্ষ এবং এতে টাইপ সেফটি ও JIT (Just-In-Time) কম্পাইলার যুক্ত হয়েছে। যেকোনো নতুন প্রজেক্টে সবসময় লেটেস্ট সাপোর্টেড ভার্সন (PHP 8.2+) ব্যবহার করা উচিত।`,
          code: `<?php
// PHP ভার্সন ও ফিচার চেক
echo "Running PHP Version: " . PHP_VERSION . "\\n";

if (PHP_VERSION_ID >= 80200) {
    echo "✓ Modern PHP 8.2+ Active (Readonly Classes, Disjunctive Normal Form Types supported)";
} else {
    echo "⚠ Older PHP detected. Please upgrade to PHP 8.2+ for maximum security & speed.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৩. PHP Installation-এর পর ৪টি গুরুত্বপূর্ণ চেক কমান্ড',
          explanationBn: `পিএইচপি ইন্সটল ও কনফিগারেশনের বিস্তারিত যাচাই করতে একজন ডেভেলপারের প্রতিদিন এই টার্মিনাল কমান্ডগুলো কাজে লাগে:`,
          code: `<?php
// সিস্টেম ডায়াগনস্টিক স্ক্রিপ্ট (টার্মিনাল কমান্ডের সমতুল্য)
$commands = [
    "php -v"    => "PHP ভার্সন ও আর্কিটেকচার প্রিন্ট করে",
    "php -m"    => "ইনস্টল করা সকল PHP মডিউল/এক্সটেনশন তালিকা প্রদর্শন করে",
    "php --ini" => "সিস্টেমের সক্রিয় php.ini কনফিগারেশন ফাইলের লোকেশন দেখায়",
    "where php" => "Windows-এ php.exe ফাইলের সঠিক ডিরেক্টরি পাথ প্রদর্শন করে"
];

echo "<h3>🔍 Important Diagnostic Commands:</h3><ul>";
foreach ($commands as $cmd => $desc) {
    echo "<li><code>$cmd</code> : $desc</li>";
}
echo "</ul>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৪. Real-World PHP Development Environment',
          explanationBn: `একজন প্রফেশনাল পিএইচপি ডেভেলপারের ওয়ার্কস্টেশনে কী কী উপাদান থাকে?
Operating System (Linux/Windows/macOS) ➔ PHP Runtime ➔ Composer (প্যাকেজ ম্যানেজার) ➔ Laravel / Symfony (ফ্রেমওয়ার্ক) ➔ MySQL / PostgreSQL ➔ Git (ভার্সন কন্ট্রোল) ➔ Docker / Nginx (প্রোডাকশন কন্টেইনারাইজেশন)।`,
          code: `Professional Development Architecture Flow:
Local Machine (VS Code + Git)
       ↓
Composer Dependencies (packagist.org)
       ↓
Docker Engine (Isolated PHP-FPM + Nginx + PostgreSQL)
       ↓
CI/CD Pipeline (GitHub Actions)
       ↓
Production Linux Cloud Server (AWS / DigitalOcean)`,
          codeLanguage: 'DevOps Stack'
        },
        {
          title: '১৫. XAMPP বনাম Professional Environment',
          explanationBn: `• XAMPP: বিগিনারদের শেখার জন্য সেরা। মাত্র এক ক্লিকেই Apache, MySQL ও PHP পেয়ে যাবেন।
• প্রফেশনাল এনভায়রনমেন্ট: এন্টারপ্রাইজ পর্যায়ে প্রতিটি প্রজেক্টে স্বতন্ত্র PHP ভার্সন, Composer, Git, Docker ও Linux Nginx সার্ভার ব্যবহৃত হয়।`,
          code: `# প্রফেশনাল ডেভেলপমেন্টে ভার্সন ও টুলস টেস্ট:
composer -V
git --version
docker --version`,
          codeLanguage: 'Professional CLI Tools'
        },
        {
          title: '১৬. ইনস্টলেশন শেষে ৩টি প্রাথমিক টেস্ট (Must Check)',
          explanationBn: `PHP ইন্সটল শেষ করার পর সবসময় এই ৩টি টেস্ট সফল হয়েছে কিনা যাচাই করুন:
১. টার্মিনালে: php -v
২. টার্মিনালে ইনলাইন এক্সিকিউশন: php -r "echo 'PHP is working';"
৩. ব্রাউজারে লোকালহোস্ট টেস্ট: http://localhost/hello.php`,
          code: `<?php
// টেস্ট রেজাল্ট ভেরিফায়ার
echo "<div style='font-family:sans-serif; background:#ecfdf5; border:1px solid #10b981; padding:12px; border-radius:6px;'>";
echo "<h4 style='color:#065f46; margin:0 0 6px 0;'>✓ Environment Verification Successful!</h4>";
echo "<p style='color:#047857; margin:0; font-size:13px;'>PHP Runtime is active and ready for building applications.</p>";
echo "</div>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৭. PHP Installation-এর মূল সারসংক্ষেপ ও ফ্লো',
          explanationBn: `সংক্ষেপে সম্পূর্ণ ফ্লো:
PHP Install ➔ PHP Runtime Ready ➔ Web Server Configure ➔ Project Folder (htdocs) ➔ .php File ➔ PHP Execute ➔ HTML / JSON Output.`,
          code: `<?php
// ইন্সটলেশন ফ্লো ডেমো
$stages = ["PHP Install", "Runtime Ready", "Web Server (htdocs)", "Code Script", "Output Rendered"];
echo "<p><b>Installation Execution Pathway:</b> " . implode(" ➔ ", $stages) . "</p>";
?>`,
          codeLanguage: 'PHP Live Code'
        }
      ],
      keyPointsBn: [
        'PHP Server-Side Language; এটি চালাতে PHP Runtime, Web Server (Apache/Nginx) ও ডাটাবেস প্রয়োজন।',
        'XAMPP দিয়ে এক ক্লিকে Apache, PHP, MySQL ও phpMyAdmin ইন্সটল হয়ে যায়।',
        'XAMPP-এ Web Root ডিরেক্টরি হলো C:\\xampp\\htdocs।',
        '"php is not recognized" এরর এলে সিস্টেম এনভায়রনমেন্ট ভেরিয়েবল PATH-এ C:\\xampp\\php যোগ করতে হয়।',
        'কমান্ড প্রম্পটে php -v (ভার্সন), php -m (মডিউল), php --ini (কনফিগ ফাইল) চেক করা যায়।',
        'CLI রান: php filename.php দিয়ে সরাসরি টার্মিনাল থেকেই স্ক্রিপ্ট ও ক্রনজব চালানো সম্ভব।',
        'প্রফেশনাল আর্কিটেকচারে Docker, Composer, Git ও Linux Server স্ট্যাক ব্যবহৃত হয়।'
      ],
      practiceExamples: [
        {
          title: 'উদাহরণ ১: প্রথম স্ক্রিপ্ট ও বেসিক রিকোয়েস্ট রেসপন্স (hello.php)',
          descriptionBn: 'XAMPP-এর C:\\xampp\\htdocs\\hello.php ফাইলে রেখে ব্রাউজারে http://localhost/hello.php দিয়ে রান করার প্রমিত কোড।',
          code: `<?php
// ১. প্রথম স্ক্রিপ্ট — ব্রাউজার ও লোকাল সার্ভার টেস্টিং
$message = "Hello from Local PHP Server!";
$serverTime = date("Y-m-d H:i:s");

echo "<h1>$message</h1>";
echo "<p>Current Server Timestamp: <strong>$serverTime</strong></p>";
echo "<p>PHP Engine Version: " . phpversion() . "</p>";
?>`
        },
        {
          title: 'উদাহরণ ২: CLI স্ক্রিপ্ট ও সিস্টেম ইনফরমেশন ভেরিফায়ার (cli_verify.php)',
          descriptionBn: 'টার্মিনালে "php cli_verify.php" কমান্ডের মাধ্যমে পিএইচপি রানটাইম ও গুরুত্বপূর্ণ সেটিংস যাচাই করার স্ক্রিপ্ট।',
          code: `<?php
// ২. CLI টেস্টিং স্ক্রিপ্ট (টার্মিনাল থেকে রান করুন: php cli_verify.php)
$isCli = (php_sapi_name() === 'cli');

echo "=== PHP Runtime Verification ===\\n";
echo "Interface: " . php_sapi_name() . " (" . ($isCli ? "Terminal/CLI" : "Web Server") . ")\\n";
echo "PHP Version: " . PHP_VERSION . "\\n";
echo "OS Family: " . PHP_OS . " (" . PHP_OS_FAMILY . ")\\n";
echo "Integer Bit Size: " . (PHP_INT_SIZE * 8) . "-bit\\n";
echo "Memory Limit: " . ini_get('memory_limit') . "\\n";
echo "Max Execution Time: " . ini_get('max_execution_time') . " seconds\\n";
echo "System Status: PHP Environment is Fully Operational!\\n";
?>`
        },
        {
          title: 'উদাহরণ ৩: ডিরেক্টরি পাথ ও Web Root ট্র্যাকিং (path_info.php)',
          descriptionBn: 'XAMPP htdocs ও প্রজেক্ট ডিরেক্টরি পাথ যাচাই করার বাস্তবমুখী ডায়াগনস্টিক স্ক্রিপ্ট।',
          code: `<?php
// ৩. ডিরেক্টরি ও প্রজেক্ট পাথ ট্র্যাকিং
$currentFile = __FILE__;
$currentDir  = __DIR__;
$documentRoot = $_SERVER['DOCUMENT_ROOT'] ?? 'C:/xampp/htdocs';

echo "<div style='font-family:monospace; background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px;'>";
echo "<h3 style='color:#4ade80; margin-top:0;'>📁 Server File Paths Diagnostic:</h3>";
echo "<p><b>Current File (__FILE__):</b><br>" . htmlspecialchars($currentFile) . "</p>";
echo "<p><b>Project Directory (__DIR__):</b><br>" . htmlspecialchars($currentDir) . "</p>";
echo "<p><b>Web Root (DOCUMENT_ROOT):</b><br>" . htmlspecialchars($documentRoot) . "</p>";
echo "</div>";
?>`
        },
        {
          title: 'উদাহরণ ৪: ইনস্টল করা এক্সটেনশন ও ডাটাবেস ড্রাইভার অডিট (extensions_check.php)',
          descriptionBn: 'MySQL, PDO, OpenSSL, cURL, JSON ইত্যাদি প্রয়োজনীয় এক্সটেনশন সক্রিয় আছে কিনা তা অডিট করার স্ক্রিপ্ট।',
          code: `<?php
// ৪. পিএইচপি প্রয়োজনীয় এক্সটেনশন অডিটর
$requiredExts = ['json', 'pdo', 'pdo_mysql', 'curl', 'openssl', 'mbstring', 'bcmath'];

echo "<div style='font-family:sans-serif; padding:14px; border:1px solid #e2e8f0; border-radius:8px;'>";
echo "<h3 style='margin-top:0;'>🔍 Required PHP Extensions Audit:</h3>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#f1f5f9; text-align:left;'><th style='padding:6px;'>Extension</th><th style='padding:6px;'>Status</th></tr>";

foreach ($requiredExts as $ext) {
    $isLoaded = extension_loaded($ext);
    $statusText = $isLoaded ? "<span style='color:#16a34a; font-weight:bold;'>✓ Installed & Active</span>" : "<span style='color:#dc2626; font-weight:bold;'>✗ Missing / Inactive</span>";
    echo "<tr style='border-bottom:1px solid #f1f5f9;'><td style='padding:6px;'><code>$ext</code></td><td style='padding:6px;'>$statusText</td></tr>";
}

echo "</table>";
echo "</div>";
?>`
        }
      ]
    }
  },
  {
    id: 'php-syntax',
    title: 'PHP Syntax',
    category: 'basic',
    tag: 'Language Basics',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP Syntax: কোড লেখার নিয়ম, ট্যাগ, স্টেটমেন্ট, কেস-সেনসিটিভিটি ও প্র্যাকটিক্যাল রুলস।',
    sampleCode: `<?php
// PHP Syntax — প্র্যাকটিক্যাল ও কমপ্লিট উদাহরণ

// ১. ভেরিয়েবল ($ দিয়ে শুরু এবং মান অ্যাসাইনমেন্ট)
$name = "Abbad";
$age = 25;
$role = "PHP Developer";
$productName = "Laptop";
$price = 85000;
$stock = 10;

echo "<div style='font-family:sans-serif; padding:18px; border:2px solid #04AA6D; border-radius:10px; background:#fff;'>";

// ২. echo এবং String Concatenation (.)
echo "<h2 style='color:#04AA6D; margin-top:0;'>PHP Syntax Overview</h2>";
echo "<p><b>Full Profile:</b> " . $name . " | " . $role . " (" . $age . " years old)</p>";

// ৩. Double quote-এ variable interpolation বনাম Single quote
echo "<p style='color:#2563eb;'><b>Double Quote Interpolation:</b> Hello $name!</p>";
echo "<p style='color:#64748b;'><b>Single Quote Literal:</b> " . 'Hello $name' . " (Interpolate হয় না)</p>";

// ৪. Short echo syntax এর সমতুল্য ডেমো (<?= $name ?>)
echo "<div style='background:#f8fafc; border-left:4px solid #04AA6D; padding:8px 12px; margin:10px 0;'>";
echo "Short Echo syntax: <code>&lt;?= \$name ?&gt;</code> ➔ " . $name;
echo "</div>";

// ৫. Condition & Curly Braces Block {}
echo "<h3 style='color:#1e293b; margin-bottom:6px;'>Product Availability Logic:</h3>";
if ($stock > 0) {
    echo "<div style='color:#16a34a; font-weight:bold;'>";
    echo "✓ $productName (মূল্য: $price BDT) — স্টকে রয়েছে ($stock টি)";
    echo "</div>";
} else {
    echo "<div style='color:#dc2626; font-weight:bold;'>Out of stock</div>";
}

// ৬. Case sensitivity রুল
$testVar = "লোয়ার-কেস ভেরিয়েবল";
$TestVar = "টাইটেল-কেস ভেরিয়েবল";
echo "<p style='font-size:12px; color:#475569; margin-top:12px;'>";
echo "<b>Case Sensitivity:</b> \$testVar ('$testVar') এবং \$TestVar ('$TestVar') দুটি আলাদা ভেরিয়েবল।";
echo "</p>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP Syntax বলতে PHP code লেখার নিয়ম বা structure-কে বোঝায়। প্রতিটি টপিকের নিচে বিস্তারিত ব্যাখ্যা এবং সরাসরি এডিটরে রান ও পরিবর্তন করার জন্য ইন্টারেক্টিভ কোড ব্লক দেওয়া হয়েছে:`,
      lessonSections: [
        {
          title: '১. PHP Code কোথা থেকে শুরু হয়? (Opening Tag)',
          explanationBn: `PHP কোড সাধারণত <?php ট্যাগ দিয়ে শুরু হয়। এটিকে PHP Opening Tag বলা হয়।
এর মাধ্যমে PHP interpreter-কে নির্দেশ দেওয়া হয়: "এখন থেকে পিএইচপি কোড শুরু হচ্ছে।"`,
          code: `<?php

echo "Hello PHP";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello PHP`
        },
        {
          title: '২. PHP Statement এবং Semicolon (;)',
          explanationBn: `PHP-তে সাধারণত প্রতিটি statement-এর শেষে semicolon (;) দিতে হয়।
সেমিকোলন ইন্টারপ্রেটারকে জানায় যে এই নির্দেশটি এখানে সমাপ্ত হয়েছে।`,
          code: `<?php

echo "Hello";
$name = "Abbad";
$age = 25;

echo " - Name: " . $name . ", Age: " . $age;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩. echo দিয়ে আউটপুট প্রদর্শন',
          explanationBn: `echo ব্যবহার করে যেকোনো টেক্সট, এইচটিএমএল বা ভেরিয়েবলের মান স্ক্রিনে আউটপুট হিসেবে দেখানো যায়। একাধিক মানও একসাথে আউটপুট করা যায়।`,
          code: `<?php

$name = "Abbad";
$age = 25;

echo "Hello World<br>";
echo $name . "<br>";
echo $age;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৪. PHP এবং HTML একসাথে',
          explanationBn: `PHP ফাইলের ভেতরে সরাসরি HTML লেখা যায়। PHP ডায়নামিক ডেটা প্রসেস করে এবং HTML সেই ডেটা ব্রাউজারে সুন্দরভাবে রেন্ডার করে।`,
          code: `<?php
$name = "Abbad";
?>
<!DOCTYPE html>
<html>
<body>

<h1>Hello <?= $name ?></h1>
<p>PHP and HTML working together in the same file!</p>

</body>
</html>`,
          codeLanguage: 'PHP & HTML'
        },
        {
          title: '৫. Short Echo Syntax (<?= $name ?>)',
          explanationBn: `<?php echo $name; ?> এর পরিবর্তে টেমপ্লেট ফাইলে সরাসরি সংক্ষেপে <?= $name ?> লেখা যায়। এটি আধুনিক পিএইচপি ও ব্লেড ভিউতে বহুল ব্যবহৃত।`,
          code: `<?php
$name = "Abbad";
$title = "Senior Backend Architect";
?>

<h2><?= $name ?></h2>
<p>Designation: <?= $title ?></p>`,
          codeLanguage: 'PHP Short Echo'
        },
        {
          title: '৬. PHP Case Sensitivity ($name বনাম $Name)',
          explanationBn: `Variable name-এর ক্ষেত্রে PHP কঠোরভাবে case-sensitive। অর্থাৎ $name, $Name এবং $NAME তিনটি সম্পূর্ণ আলাদা ভেরিয়েবল। 
তবে বিল্ট-ইন কি-ওয়ার্ড (if, else, echo, while) case-sensitive নয়।`,
          code: `<?php

$name = "Abbad";
$Name = "Rahim";
$NAME = "Karim";

echo "name: " . $name . "<br>";
echo "Name: " . $Name . "<br>";
echo "NAME: " . $NAME . "<br>";

// বিল্ট-ইন কীওয়ার্ড কেস-ইনসেনসিটিভ
ECHO "<p style='color:#0284c7;'>ECHO বড় হাতের হলেও সমানভাবে কাজ করে!</p>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৭. PHP Keywords (সংরক্ষিত শব্দসমূহ)',
          explanationBn: `PHP-এর কিছু সংরক্ষিত keyword আছে যা ভেরিয়েবল বা ফাংশনের নাম হিসেবে ব্যবহার করা যায় না। যেমন: if, else, while, for, function, class, public, private, return, echo ইত্যাদি।`,
          code: `<?php

$age = 25;

if ($age >= 18) {
    echo "Status: Verified Adult User";
} else {
    echo "Status: Minor Account";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৮. Comments (কমেন্টস লেখার নিয়ম)',
          explanationBn: `কোড ব্যাখ্যা করতে বা টেস্টিংয়ের সময় সাময়িকভাবে কোড বন্ধ রাখতে কমেন্ট ব্যবহার করা হয়। PHP ইঞ্জিন কমেন্টকে রান করে না।
• সিঙ্গেল-লাইন: // বা #
• মাল্টি-লাইন: /* ... */`,
          code: `<?php

// ১. এটি একটি সিঙ্গেল-লাইন কমেন্ট
# ২. এটিও একটি সিঙ্গেল-লাইন কমেন্ট

/*
   ৩. এটি একটি
   মাল্টি-লাইন কমেন্ট
*/

// echo "এই লাইনটি রান হবে না";
echo "Comments help you document clean business logic!";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৯. String লেখার Syntax (Single vs Double Quote)',
          explanationBn: `String সাধারণত single quote ('...') অথবা double quote ("...") দিয়ে লেখা যায়।
• Double quote-এর ভেতরে ভেরিয়েবল লিখলে সরাসরি ভেরিয়েবলের মান বসে (Interpolation)।
• Single quote-এ ভেরিয়েবল ইন্টারপোলেট হয় না, হুবহু টেক্সট থাকে।`,
          code: `<?php

$name = "Abbad";

// Double quote: variable interpolation হয়
echo "Hello $name (with double quote)<br>";

// Single quote: variable interpolation হয় না
echo 'Hello $name (with single quote)';
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১০. Concatenation (ডট অপারেটর দিয়ে স্ট্রিং জোড়া)',
          explanationBn: `দুটি string বা string-এর সাথে ভেরিয়েবল একসাথে জোড়া লাগাতে dot (.) ব্যবহার করা হয়।`,
          code: `<?php

$firstName = "Abbad";
$lastName = "Khan";
$role = "PHP Developer";

$fullName = $firstName . " " . $lastName;
echo "Full Name: " . $fullName . "<br>";
echo "Profile: " . $fullName . " (" . $role . ")";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১১. Variable-এর Syntax ($variableName = value;)',
          explanationBn: `PHP variable সবসময় $ দিয়ে শুরু হয়।
$ ➔ ভেরিয়েবল শুরু
name ➔ ভেরিয়েবল নাম
= ➔ অ্যাসাইনমেন্ট অপারেটর
"Abbad" ➔ মান
; ➔ স্টেটমেন্ট শেষ`,
          code: `<?php

$name = "Abbad";
$age = 25;
$salary = 50000;

echo "Employee: $name | Age: $age | Monthly Salary: $salary BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১২. PHP Data Output (echo বনাম print)',
          explanationBn: `echo এবং print দুটিই আউটপুট দেখাতে পারে। তবে real-world কোডে echo বেশি ব্যবহৃত হয়, কারণ echo দ্রুততর এবং কমা দিয়ে একাধিক আর্গুমেন্ট প্রিন্ট করতে পারে।`,
          code: `<?php

echo "Output using echo<br>";
print "Output using print<br>";

// echo কমা দিয়ে একাধিক আর্গুমেন্ট গ্রহণ করতে পারে
echo "Part 1", " - ", "Part 2", " - ", "Part 3";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৩. Multiple PHP Statements ও ক্রম',
          explanationBn: `একটি PHP ব্লকের ভেতরে একাধিক স্টেটমেন্ট থাকতে পারে। প্রতিটি স্টেটমেন্ট ক্রমান্বয়ে উপর থেকে নিচে এক্সিকিউট হয় এবং প্রতিটির শেষে সেমিকোলন আবশ্যক।`,
          code: `<?php

$name = "Abbad";
$age = 25;

echo "Statement 1: " . $name . "<br>";
echo "Statement 2: " . $age . "<br>";
echo "Statement 3: Finished successfully.";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৪. PHP Block (একটি ফাইলে একাধিক পিএইচপি ব্লক)',
          explanationBn: `একটি PHP ফাইলে প্রয়োজন অনুসারে একাধিক <?php ... ?> ব্লক থাকতে পারে। তবে কোড পরিচ্ছন্ন রাখতে অপ্রয়োজনে অতিরিক্ত ব্লক না রাখাই শ্রেয়।`,
          code: `<?php
$siteName = "Enterprise Learning Portal";
$userName = "Abbad";
?>

<h3>Website: <?= $siteName ?></h3>

<?php
echo "<p>Currently logged in user: <b>$userName</b></p>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৫. PHP File-এর Extension (.php)',
          explanationBn: `PHP কোড সম্বলিত ফাইলের এক্সটেনশন অবশ্যই .php হতে হবে (যেমন index.php, config.php, auth.php)। সাধারণ .html ফাইলে পিএইচপি কোড লিখলে তা রান না হয়ে টেক্সট হিসেবে প্রদর্শন করবে।`,
          code: `<?php
// ফাইল ডিরেক্টরি ও এক্সটেনশন রিডার
$fileName = basename(__FILE__);
echo "Current Running Script: <b>$fileName</b><br>";
echo "PHP Engine parsed and executed this file successfully!";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৬. PHP Syntax Error (ভুল ও সঠিক)',
          explanationBn: `সিনট্যাক্সে সেমিকোলন (;) বা কোটেশন বাদ পড়লে PHP Parse Error দেয় এবং স্ক্রিপ্ট বন্ধ হয়ে যায়।
ভুল: $name = "Abbad" (সেমিকোলন নেই)
সঠিক: $name = "Abbad";`,
          code: `<?php
// সঠিক ও নির্ভুল কোড গঠন
$firstName = "Abbad";
$lastName = "Khan";

// প্রতিটি স্টেটমেন্টের শেষে সেমিকোলন আবশ্যক
echo "Correct Syntax: " . $firstName . " " . $lastName;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৭. Braces { } (কন্ডিশন ও লুপের ব্লক)',
          explanationBn: `Condition (if/else), Loop (for/while), Function এবং Class-এর কোড ব্লক শুরু এবং শেষ করতে curly braces { } ব্যবহৃত হয়।`,
          code: `<?php

$age = 25;

if ($age >= 18) {
    // এই ব্লকের ভেতরের কোড শর্ত পূরণ হলে চলবে
    echo "Block Executed: User is eligible for service.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৮. Indentation (কোড রিডাবিলিটি ও সৌন্দর্য)',
          explanationBn: `PHP ইন্ডেন্টেশন বাধ্যতামূলক করে না, তবে পরিচ্ছন্ন কোড এবং দলের অন্যান্য ডেভেলপারদের সহজে বোঝার জন্য সঠিক ৪-স্পেস ইন্ডেন্টেশন প্রফেশনাল স্ট্যান্ডার্ড।`,
          code: `<?php
// ক্লিন ও প্রফেশনাল ইন্ডেন্টেশনের উদাহরণ:
$userStatus = "active";
$score = 85;

if ($userStatus === "active") {
    if ($score >= 80) {
        echo "Outstanding performance!";
    } else {
        echo "Standard active user.";
    }
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৯. PHP Syntax-এর একটি Complete Example',
          explanationBn: `এই উদাহরণটিতে Opening Tag, Variables, String, Integer, if condition, Comparison operator, echo, String concatenation, Semicolon এবং Curly braces একসাথে ব্যবহৃত হয়েছে:`,
          code: `<?php

$name = "Abbad";
$age = 25;
$role = "PHP Developer";

if ($age >= 18) {
    echo "Name: " . $name . "<br>";
    echo "Age: " . $age . "<br>";
    echo "Role: " . $role;
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২০. Real-World PHP Syntax Example (ইকমার্স প্রোডাক্ট)',
          explanationBn: `বাস্তব ইকমার্স অ্যাপ্লিকেশনে পণ্যের ডেটা প্রসেস করে এইচটিএমএল কার্ড রেন্ডার করার আর্কিটেকচারাল সিনট্যাক্স:
Database ➔ PHP ➔ Business Logic ➔ HTML / JSON`,
          code: `<?php

$productName = "MacBook Pro";
$price = 195000;
$stock = 10;

if ($stock > 0) {
    echo "<div style='font-family:sans-serif; padding:14px; border:1px solid #10b981; border-radius:8px;'>";
    echo "<h3 style='margin:0; color:#065f46;'>$productName</h3>";
    echo "<p style='margin:6px 0;'>Price: " . number_format($price) . " BDT</p>";
    echo "<p style='color:#059669; font-weight:bold; margin:0;'>✓ In Stock ($stock units available)</p>";
    echo "</div>";
} else {
    echo "<p style='color:#dc2626; font-weight:bold;'>Out of stock</p>";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২১. PHP Syntax-এর ১০টি মৌলিক নিয়ম',
          explanationBn: `১. PHP code সাধারণত <?php দিয়ে শুরু হয়।
২. Statement-এর শেষে সাধারণত ; দিতে হয়।
৩. Variable $ দিয়ে শুরু হয়।
৪. Variable name case-sensitive।
৫. String quote-এর মধ্যে লেখা হয়।
৬. Condition/Loop/Function block-এর জন্য {} ব্যবহার করা হয়।
৭. PHP file-এর extension সাধারণত .php।
৮. Comment code execute করে না।
৯. PHP এবং HTML একই file-এ ব্যবহার করা যায়।
১০. <?= ?> দিয়ে short echo করা যায়।`,
          code: `<?php
// ১০টি নিয়ম যাচাইকরণ ডেমো
$rulesFollowed = 10;
echo "<p style='color:#15803d; font-weight:bold;'>✓ All $rulesFollowed Core Syntax Rules are verified and active.</p>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২২. PHP Syntax মনে রাখার সহজ Formula',
          explanationBn: `• PHP Code: <?php statement; ?>
• Variable: $variable = value;
• Output: echo value;
• Condition: if (condition) { // code }
• Function: function fnName() { // code }`,
          code: `<?php
// Formula Demo Script:
$appName = "PHP Mastery Interactive Hub";
echo "<b>App:</b> $appName<br>";

function greetStudent($studentName) {
    return "Welcome to PHP 8.2 Mastery, " . $studentName . "!";
}

echo greetStudent("Abbad");
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৩. Beginner হিসেবে এই Syntaxগুলো আগে ভালোভাবে আয়ত্ত করবে',
          explanationBn: `এই বেসিক সিনট্যাক্সগুলো ভালোভাবে বুঝে গেলে পরবর্তীতে এগুলোর উপর ভিত্তি করে Variable ➔ Data Types ➔ Operators ➔ Condition ➔ Loop ➔ Array ➔ Function ➔ Database ➔ OOP ধাপে ধাপে এগোব।
সবচেয়ে গুরুত্বপূর্ণ কথা: PHP Syntax মুখস্থ করার চেয়ে প্রতিটি syntax কেন এবং কখন ব্যবহার হয় সেটা কোড পরিবর্তন করে পরীক্ষা করা বেশি গুরুত্বপূর্ণ।`,
          code: `<?php

echo "Hello PHP<br>";

$name = "Abbad";
$age = 25;

echo "User: " . $name . "<br>";

if ($age >= 18) {
    echo "Status: Verified Adult Developer";
}
?>`,
          codeLanguage: 'PHP Live Code'
        }
      ],
      keyPointsBn: [
        'PHP Opening Tag: <?php দিয়ে কোড শুরু হয়।',
        'Statement Terminator: প্রতিটি স্টেটমেন্টের শেষে সেমিকোলন (;) আবশ্যক।',
        'Variable Syntax: ভেরিয়েবল সর্বদা $ দিয়ে শুরু হয় এবং case-sensitive ($name !== $Name)।',
        'Short Echo: <?= $variable ?> টেমপ্লেটে শর্ট আউটপুটের জন্য বহুল ব্যবহৃত।',
        'String Quotes: Double quote ("...") ভেরিয়েবল ইন্টারপোলেট করে, কিন্তু Single quote (\'...\') করে না।',
        'Concatenation: একাধিক স্ট্রিং বা ভেরিয়েবল জোড়া লাগাতে ডট (.) অপারেটর ব্যবহৃত হয়।',
        'Comments: সিঙ্গেল লাইনের জন্য // বা # এবং মাল্টিলাইনের জন্য /* ... */ ব্যবহৃত হয়।',
        'Code Blocks: Condition, Loop এবং ফাংশনের জন্য কার্লি ব্রেস { } ব্যবহার করা হয়।'
      ],
      practiceExamples: [
        {
          title: 'উদাহরণ ১: ভেরিয়েবল ও স্ট্রিং ইন্টারপোলেশন বনাম কনক্যাটেনেশন',
          descriptionBn: 'Double Quote ("..."), Single Quote (\'...\') এবং Dot (.) অপারেটর ব্যবহারের পুঙ্খানুপুঙ্খ উদাহরণ।',
          code: `<?php
// ১. স্ট্রিং ইন্টারপোলেশন ও কনক্যাটেনেশন
$firstName = "Abbad";
$lastName = "Khan";
$profession = "Backend Architect";

// ডাবল কোটে সরাসরি ভেরিয়েবল বসে
$greeting = "Hello, my name is $firstName $lastName.";

// ডট দিয়ে জোড়া লাগানো
$fullRole = $firstName . " " . $lastName . " is a " . $profession . ".";

// সিঙ্গেল কোটে ইন্টারপোলেশন হয় না, হুবহু টেক্সট আসে
$literal = 'Dear $firstName, welcome to PHP 8.2!';

echo "<h3>$greeting</h3>";
echo "<p><b>Concatenation Result:</b> $fullRole</p>";
echo "<p style='color:#64748b;'><b>Literal Single-Quote:</b> $literal</p>";
?>`
        },
        {
          title: 'উদাহরণ ২: শর্ট ইকো সিনট্যাক্স ও এইচটিএমএল টেমপ্লেটিং',
          descriptionBn: 'মডার্ন পিএইচপি ও ব্লেড/টুইগ টেমপ্লেটের মতো পিএইচপি ও এইচটিএমএল একসাথে ব্যবহারের সর্বোত্তম নিয়মাবলী।',
          code: `<?php
// ২. টেমপ্লেট ডাটা প্রিপারেশন
$user = [
    'name' => 'Abbad Khan',
    'email' => 'abbad@example.com',
    'status' => 'Active Member',
    'points' => 450
];
?>

<!-- HTML এবং Short Echo Syntax: <?= $var ?> -->
<div style="font-family:sans-serif; border:1px solid #cbd5e1; border-radius:8px; padding:16px; max-width:400px; background:#f8fafc;">
    <h3 style="margin-top:0; color:#0f172a;">ইউজার প্রোফাইল কার্ড</h3>
    <p>নাম: <strong><?= $user['name'] ?></strong></p>
    <p>ইমেইল: <code><?= $user['email'] ?></code></p>
    <p>স্ট্যাটাস: <span style="color:#16a34a; font-weight:bold;"><?= $user['status'] ?></span></p>
    <p>পয়েন্টস: <b><?= $user['points'] ?></b> pts</p>
</div>`
        },
        {
          title: 'উদাহরণ ৩: কন্ডিশনাল সিনট্যাক্স ও কার্লি ব্রেসেস ব্লক {}',
          descriptionBn: 'সঠিক ইন্ডেন্টেশন ও ব্লক স্ট্রাকচার সহ কন্ডিশনাল লজিক রেন্ডারিং।',
          code: `<?php
// ৩. কন্ডিশনাল সিনট্যাক্স ও ব্লক এক্সিকিউশন
$userAge = 25;
$hasVerifiedAccount = true;

if ($userAge >= 18 && $hasVerifiedAccount) {
    echo "<div style='color:#15803d; background:#dcfce7; padding:12px; border-radius:6px; font-weight:bold;'>";
    echo "✓ একাউন্ট ভেরিফাইড এবং বয়স ১৮+। আপনি সকল এন্টারপ্রাইজ ফিচার এক্সেস করতে পারেন।";
    echo "</div>";
} elseif ($userAge < 18) {
    echo "<div style='color:#b91c1c; background:#fee2e2; padding:12px; border-radius:6px;'>";
    echo "⚠ দুঃখিত, ন্যূনতম ১৮ বছর বয়স বাধ্যতামূলক।";
    echo "</div>";
} else {
    echo "<div style='color:#b45309; background:#fef3c7; padding:12px; border-radius:6px;'>";
    echo "ℹ অনুগ্রহ করে প্রথমে আপনার একাউন্ট ইমেইল ভেরিফাই করুন।";
    echo "</div>";
}
?>`
        },
        {
          title: 'উদাহরণ ৪: কেস সেনসিটিভিটির বাস্তব ডেমো ($var vs $Var)',
          descriptionBn: 'PHP ভেরিয়েবলের কেস-সেনসিটিভিটি এবং বিল্ট-ইন ফাংশনের কেস-ইনসেনসিটিভিটি প্রমাণ করার লাইভ টেস্ট।',
          code: `<?php
// ৪. Case Sensitivity Demonstration
$siteName = "PHP Mastery Academy";
$SiteName = "Laravel Framework Hub";
$SITENAME = "Web Development Center";

// ভেরিয়েবল ৩টি সম্পূর্ণ আলাদা
echo "<ul>";
echo "<li>\$siteName: <b>$siteName</b></li>";
echo "<li>\$SiteName: <b>$SiteName</b></li>";
echo "<li>\$SITENAME: <b>$SITENAME</b></li>";
echo "</ul>";

// কিন্তু Built-in Keywords এবং Functions Case-Insensitive
ECHO "<p style='color:#0284c7;'>ECHO কি-ওয়ার্ড বড় হাতের অক্ষরেও চমৎকার কাজ করে!</p>";
echo "PHP Version (phpversion vs PHPVERSION): " . phpversion() . " === " . PHPVERSION();
?>`
        },
        {
          title: 'উদাহরণ ৫: রিয়েল-ওয়ার্ল্ড ইকমার্স কার্ট ক্যালকুলেশন সিনট্যাক্স',
          descriptionBn: 'পণ্য যোগফল, ভ্যাট ও ডিসকাউন্ট হিসাব করে ক্লিন এইচটিএমএল আউটপুট তৈরির পূর্ণাঙ্গ কোড।',
          code: `<?php
// ৫. বাস্তবধর্মী কার্ট হিসাব
$cart = [
    ['item' => 'PHP 8 Clean Architecture Book', 'price' => 1200, 'qty' => 1],
    ['item' => 'Backend Development Course', 'price' => 3500, 'qty' => 1],
    ['item' => 'Terminal Cheatsheet Poster', 'price' => 300, 'qty' => 2]
];

$subtotal = 0;
foreach ($cart as $product) {
    $subtotal += ($product['price'] * $product['qty']);
}

$vat = $subtotal * 0.05; // ৫% ভ্যাট
$discount = ($subtotal > 4000) ? 500 : 0;
$grandTotal = ($subtotal + $vat) - $discount;

echo "<div style='font-family:sans-serif; padding:16px; border:2px solid #e2e8f0; border-radius:10px;'>";
echo "<h3 style='margin-top:0; color:#0f172a;'>🛒 অর্ডারের চালান সারসংক্ষেপ</h3>";
echo "<table style='width:100%; font-size:13px; border-collapse:collapse; margin-bottom:12px;'>";
foreach ($cart as $p) {
    $lineTotal = $p['price'] * $p['qty'];
    echo "<tr style='border-bottom:1px solid #f1f5f9;'><td style='padding:6px;'>{$p['item']} (x{$p['qty']})</td><td style='padding:6px; text-align:right;'>{$lineTotal} BDT</td></tr>";
}
echo "</table>";
echo "<p style='margin:4px 0;'>সাবটোটাল: <b>{$subtotal} BDT</b></p>";
echo "<p style='margin:4px 0;'>ভ্যাট (৫%): <b>{$vat} BDT</b></p>";
if ($discount > 0) {
    echo "<p style='margin:4px 0; color:#16a34a;'>ডিসকাউন্ট: <b>-{$discount} BDT</b></p>";
}
echo "<hr style='border:0; border-top:1px solid #cbd5e1; margin:8px 0;'>";
echo "<h4 style='margin:0; color:#04AA6D; font-size:16px;'>সর্বমোট মূল্য: {$grandTotal} BDT</h4>";
echo "</div>";
?>`
        }
      ]
    }
  },
  {
    id: 'php-comments',
    title: 'PHP Comments',
    category: 'basic',
    tag: 'Documentation',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP Comment কী, কেন ব্যবহার হয়, প্রকারভেদ (//, #, /* */, PHPDoc) ও রিয়েল-লাইফ প্র্যাকটিস।',
    sampleCode: `<?php
// ১. Single-line comment: ভেরিয়েবল ডিফাইন
$name = "Abbad"; // ইউজারের নাম

# ২. Shell-style single-line comment
$role = "Backend Architect";

/*
 * ৩. Multi-line comment:
 * ডিসকাউন্ট হিসাবের বিজনেস লজিক
 */
$orderTotal = 6000;
$discount = ($orderTotal >= 5000) ? 500 : 0;
$finalTotal = $orderTotal - $discount;

/**
 * ৪. PHPDoc Comment
 * @param string $user ইউজারের পুরো নাম
 * @return string শুভেচ্ছা বার্তা
 */
function greetUser(string $user): string {
    return "স্বাগতম, " . $user . "!";
}

echo greetUser($name) . "<br>";
echo "Role: " . $role . "<br>";
echo "Order Total: " . $finalTotal . " BDT (Discount: " . $discount . " BDT)";
?>`,
    deepDive: {
      conceptBn: `PHP Comment হলো এমন text বা code যা PHP interpreter execute করে না। Comment মূলত code-এর মধ্যে explanation, note, warning বা temporary code disable করার জন্য ব্যবহার করা হয়। নিচে প্রতিটি পয়েন্ট বিস্তারিত ব্যাখ্যা ও কোড উদাহরণের মাধ্যমে দেওয়া হলো:`,
      lessonSections: [
        {
          title: '১. Comment কেন ব্যবহার করা হয়?',
          explanationBn: `PHP project-এ Comment ব্যবহারের প্রধান ৬টি কারণ:
১. Code-এর explanation দেওয়ার জন্য
২. অন্য developer-কে code বুঝতে সাহায্য করার জন্য
৩. Complex logic সম্পর্কে note রাখার জন্য
৪. Debugging-এর সময় temporary code বন্ধ রাখার জন্য
৫. TODO বা future কাজের reminder রাখার জন্য
৬. গুরুত্বপূর্ণ business logic সম্পর্কে information দেওয়ার জন্য`,
          code: `<?php

// User's name
$name = "Abbad";

echo $name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad`
        },
        {
          title: '২. PHP-তে Comment-এর প্রধান ৩টি ধরন',
          explanationBn: `PHP-তে প্রধানত ৩ ধরনের comment syntax আছে:
১. Single-line comment using //
২. Single-line comment using #
৩. Multi-line comment using /* */`,
          code: `<?php
// ১. এটি // দিয়ে সিঙ্গেল লাইন কমেন্ট
# ২. এটি # দিয়ে সিঙ্গেল লাইন কমেন্ট

/*
   ৩. এটি একাধিক লাইনের
   মাল্টি-লাইন কমেন্ট
*/

echo "PHP supports //, # and /* */ comments.";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩. Single-Line Comment using //',
          explanationBn: `PHP-তে সবচেয়ে বেশি ব্যবহৃত comment syntax হলো //। এই চিহ্নের পর সেই লাইনের বাকি অংশ ইন্টারপ্রেটার রান করে না।`,
          code: `<?php

// This is a comment

$name = "Abbad";

echo $name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad`
        },
        {
          title: '৪. Code-এর পরে // Comment (ইনলাইন কমেন্ট)',
          explanationBn: `একই line-এর কোডের পরে স্পেস দিয়ে মন্তব্য লেখা যায়। এটি real-world কোডে ছোট ও তাৎক্ষণিক ব্যাখ্যার জন্য সুবিধাজনক।`,
          code: `<?php

$name = "Abbad"; // User name

$age = 25; // User age

echo $name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad`
        },
        {
          title: '৫. Multiple Single-Line Comments',
          explanationBn: `পরপর একাধিক লাইনে // ব্যবহার করে একাধিক তথ্যের তালিকা দেওয়া যায়।`,
          code: `<?php

// Get user name
// Get user email
// Get user age

$name = "Abbad";
$email = "abbad@gmail.com";
$age = 25;

echo "User Profile: $name | $email | $age yrs";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৬. Single-Line Comment using # (শেল স্টাইল)',
          explanationBn: `PHP-তে # দিয়েও সিঙ্গেল লাইন কমেন্ট করা যায়। এটি সম্পূর্ণ valid PHP syntax। তবে আধুনিক কোডে // বেশি জনপ্রিয়।`,
          code: `<?php

# This is a comment

$name = "Abbad";

echo $name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad`
        },
        {
          title: '৭. // বনাম # — কোনটি ব্যবহার করা উচিত?',
          explanationBn: `দুটিই সমানভাবে কাজ করে। কিন্তু professional code-এ সর্বদা // ব্যবহার করাই বেশি common এবং দলগতভাবে consistent। তাই নতুন ডেভেলপার হিসেবে // এটাকেই প্রাইমারি স্টাইল হিসেবে ব্যবহার করুন।`,
          code: `<?php

// Primary & Recommended Style
$framework = "Laravel";

# Alternative Unix Shell Style
$database = "MySQL";

echo "Stack: $framework with $database";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৮. Multi-Line Comment (/* ... */)',
          explanationBn: `একাধিক line-এর দীর্ঘ ব্যাখ্যা লেখার জন্য /* এবং */ ব্লক ব্যবহার করা হয়। PHP এই পুরো অংশ এক্সিকিউট না করে এড়িয়ে যায়।`,
          code: `<?php

/*
This section handles
user registration
and validates
user information.
*/

$name = "Abbad";
echo "Registration logic initialized for: $name";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৯. Multi-Line Comment-এর Real Example (দাম হিসাব)',
          explanationBn: `বাস্তব প্রকল্পে পণ্য মূল্য হিসাবের সম্পূর্ণ ফর্মুলা ডকুমেন্টেড করার জন্য মাল্টিলাইন কমেন্ট ব্যবহার:`,
          code: `<?php

/*
    Calculate the final product price.

    Regular Price = Product's original price
    Discount      = Discount amount
    Final Price   = Regular Price - Discount
*/

$price = 1000;
$discount = 100;

$finalPrice = $price - $discount;

echo $finalPrice;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `900`
        },
        {
          title: '১০. Comment দিয়ে Code Temporarily Disable করা (ডিবাগিং)',
          explanationBn: `Debugging বা টেস্টিংয়ের সময় কোনো কোড না মুছে সাময়িকভাবে বন্ধ রাখতে কমেন্ট অত্যন্ত কার্যকরী।`,
          code: `<?php

$name = "Abbad";

// echo $name;

echo "PHP Developer";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `PHP Developer`
        },
        {
          title: '১১. Multiple Code Lines Temporarily Disable',
          explanationBn: `Multi-line comment ব্যবহার করে একসাথে অনেকগুলো কোড লাইন বা পুরো ফাংশনাল ব্লক সাময়িকভাবে ডিসেবল রাখা যায়।`,
          code: `<?php

/*
$name = "Abbad";
$age = 25;

echo $name;
echo $age;
*/

echo "Hello PHP";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello PHP`
        },
        {
          title: '১২. Comment এবং Documentation (কেন এমন কোড?)',
          explanationBn: `Real-world project-এ কমেন্ট শুধু বিগিনারদের জন্য নয়। জটিল business logic বা বিশেষ নিয়মের পেছনের কারণ ব্যাখ্যা করতে কমেন্ট ব্যবহৃত হয়।`,
          code: `<?php

$orderTotal = 5500;
$discount = 0;

// Apply discount only for orders above 5000 BDT.
if ($orderTotal >= 5000) {
    $discount = 500;
}

echo "Order: $orderTotal BDT | Discount Applied: $discount BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৩. TODO Comment (ভবিষ্যতের কাজের রিমাইন্ডার)',
          explanationBn: `ডেভেলপমেন্ট চলাকালীন পরবর্তীতে কোন কোন ফিচার যোগ করতে হবে তা মনে রাখার জন্য ডেভেলপাররা TODO কমেন্ট ব্যবহার করেন। এটি কোনো পিএইচপি কি-ওয়ার্ড নয়, এটি একটি টিম কনভেনশন যা আধুনিক IDE স্বয়ংক্রিয়ভাবে হাইলাইট করে।`,
          code: `<?php

// TODO: Add email verification
// TODO: Implement password reset
// TODO: Add order cancellation

echo "Core checkout completed. Review TODO items before release.";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৪. FIXME Comment (জানা বাগ ফিক্সিংয়ের নোটিশ)',
          explanationBn: `কোডে কোনো সাময়িক ত্রুটি বা পরবর্তীতে পারফরম্যান্স অপ্টিমাইজ করার প্রয়োজন হলে FIXME ব্যবহার করা হয়।`,
          code: `<?php

// FIXME: Improve error handling for failed database connection
// FIXME: Optimize this database query for high traffic

$connectionStatus = "Connected";
echo "Database Status: $connectionStatus";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৫. Comment-এর মধ্যে Sensitive Information রাখা যাবে না',
          explanationBn: `কখনোই কমেন্টের ভেতরে পাসওয়ার্ড, ডাটাবেস সিক্রেট বা এপিআই কি লিখবেন না! কারণ গিট হিস্ট্রি বা সোর্স কোড রিপোজিটরিতে এই তথ্য অন্য সবার কাছে উন্মুক্ত হয়ে বড় সিকিউরিটি রিস্ক তৈরি করে। সংবেদনশীল তথ্য .env এনভায়রনমেন্ট ফাইলে রাখতে হয়।`,
          code: `<?php

// খারাপ অভ্যাস (Dangerous):
// DB_PASSWORD=MySecretPassword123
// STRIPE_API_KEY=sk_live_abc123xyz

// সঠিক পদ্ধতি (Professional):
// Database credentials are loaded securely from environment variables.
$dbUser = getenv('DB_USERNAME') ?: 'production_user';
echo "Connected securely using environment variables.";
?>`,
          codeLanguage: 'Security Best Practice'
        },
        {
          title: '১৬. Comment দিয়ে Password বা Secret Hide করা যায় না',
          explanationBn: `// $password = "123456"; লিখে কমেন্ট করলেই পাসওয়ার্ড নিরাপদ হয়ে যায় না। কমেন্ট সোর্স ফাইলের মধ্যেই থেকে যায়। তাই প্রোডাকশন সোর্সে কখনো পাসওয়ার্ড হার্ডকোড করবেন না।`,
          code: `<?php

// ভুল ধারণা: কমেন্ট করলেই তথ্য গোপন থাকে না!
// $adminSecret = "SuperAdmin@2026";

echo "Always use vault or .env variables for sensitive secrets.";
?>`,
          codeLanguage: 'Security Rule'
        },
        {
          title: '১৭. অতিরিক্ত Comment করা ভালো নয় (Clean Code)',
          explanationBn: `প্রতিটি সাধারণ লাইনের জন্য কমেন্ট লেখা বাজে অভ্যাস। কোড যখন নিজেই স্পষ্ট, তখন অপ্রয়োজনীয় কমেন্ট কোডের রিডাবিলিটি নষ্ট করে।`,
          code: `<?php

// খারাপ: অপ্রয়োজনীয় ব্যাখ্যামূলক কমেন্ট
// $name = "Abbad"; // Create name variable
// $age = 25;        // Create age variable
// echo $name;       // Echo name

// ভালো: কোড নিজেই কথা বলে, কোনো বাড়তি কমেন্টের প্রয়োজন নেই
$userName = "Abbad";
$userAge = 25;
echo "$userName is $userAge years old.";
?>`,
          codeLanguage: 'Clean Code Rule'
        },
        {
          title: '১৮. Code কী করছে বনাম কেন করছে (Why > What)',
          explanationBn: `ভালো কমেন্ট সাধারণত "কোড কী করছে" তা বলে না, বরং "কেন করছে" সেই বিজনেস লজিকের উদ্দেশ্য ব্যাখ্যা করে।`,
          code: `<?php

$total = 1200;

// খারাপ: // Add 500 to total
// ভালো:
// Apply the annual loyalty bonus credit for premium customers.
$total = $total + 500;

echo "Adjusted Account Total: $total BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৯. Real-World Example: Order Processing',
          explanationBn: `বাস্তব ইকমার্স অর্ডারের ৫০০০ টাকার বেশি হলে ৫০০ টাকা ছাড়ের বিজনেস রুল কমেন্ট সহ বাস্তবায়ন:`,
          code: `<?php

$orderTotal = 6000;

// Apply discount for orders above 5000 BDT.
if ($orderTotal >= 5000) {
    $discount = 500;
} else {
    $discount = 0;
}

$finalTotal = $orderTotal - $discount;

echo "Final Payable Amount: " . $finalTotal . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Final Payable Amount: 5500 BDT`
        },
        {
          title: '২০. Real-World Example: Authentication Flow',
          explanationBn: `লগইন রিকোয়েস্ট ভেরিফিকেশনের পরিষ্কার কমেন্ট ডক:`,
          code: `<?php

// সিমুলেটেড পোস্ট ডাটা ও ডাটাবেস রেকর্ড
$inputEmail = "abbad@gmail.com";
$inputPassword = "MySecretPassword123";

$databaseHash = password_hash("MySecretPassword123", PASSWORD_DEFAULT);

// Verify the password against the securely stored BCrypt hash.
if (password_verify($inputPassword, $databaseHash)) {
    echo "<span style='color:green; font-weight:bold;'>✓ Login successful for $inputEmail</span>";
} else {
    echo "<span style='color:red; font-weight:bold;'>✗ Invalid credentials</span>";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২১. PHPDoc Comment (এন্টারপ্রাইজ ডকুমেন্টেশন)',
          explanationBn: `PHP-তে ফাংশন, ক্লাস ও মেথডের স্ট্যান্ডার্ড ডকুমেন্টেশনের জন্য বিশেষ ফরম্যাট /** ... */ ব্যবহার করা হয়, একে PHPDoc বলে। এতে @param এবং @return ট্যাগ ব্যবহার করে টাইপ ও বর্ণনা স্পষ্ট করা হয়।`,
          code: `<?php

/**
 * Calculate the final price after applying customer discount.
 *
 * @param float $price Original product price
 * @param float $discount Applied discount amount
 * @return float Net payable amount
 */
function calculatePrice(float $price, float $discount): float
{
    return $price - $discount;
}

echo "Net Price: " . calculatePrice(1500.00, 250.00) . " BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২২. PHPDoc-এর Real-World উপকারিতা',
          explanationBn: `PHPDoc ব্যবহার করলে:
• VS Code / PhpStorm সুন্দর ইন্টেলিসেন্স ও সাজেশন দেখাতে পারে
• ফাংশনের প্যারামিটার ও রিটার্ন টাইপ আগেই বোঝা যায়
• টিমের অন্যান্য ডেভেলপাররা সহজে লাইব্রেরি ব্যবহার করতে পারে
• PHPStan / Psalm এর মতো টুল স্ট্যাটিক এনালাইসিস করে রানটাইমের আগেই বাগ ধরে ফেলে`,
          code: `<?php

/**
 * Represent a registered user in system.
 */
class SystemUser {
    /** @var string User email address */
    public string $email;

    /**
     * @param string $email
     */
    public function __construct(string $email) {
        $this->email = $email;
    }
}

$user = new SystemUser("abbad@example.com");
echo "User instance active: " . $user->email;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৩. Comment কি PHP Execute করে?',
          explanationBn: `না, পিএইচপি ইন্টারপ্রেটার কমেন্টের ভিতরের কোনো কোড বা টেক্সট রান করে না। কমেন্ট সম্পূর্ণ শূন্য আউটপুট দেয়।`,
          code: `<?php

// echo "Hello";

/*
echo "Hello";
echo "World";
*/

echo "Comments are completely ignored by the PHP runtime engine.";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৪. Comment-এর Best Practice চেকলিস্ট',
          explanationBn: `প্রফেশনাল পিএইচপি ডেভেলপারের কমেন্ট রুলস:
১. কোড সর্বদা পরিষ্কার ও সেলফ-এক্সপ্ল্যানেটরি রাখুন।
২. সাধারণ কোডের জন্য অপ্রয়োজনীয় কমেন্ট লিখবেন না।
৩. জটিল বিজনেস লজিকের উদ্দেশ্য ও কারণ স্পষ্ট করুন।
৪. TODO দিয়ে ভবিষ্যতের কাজ এবং FIXME দিয়ে জানা সমস্যা চিহ্নিত করুন।
৫. কখনো পাসওয়ার্ড বা সিক্রেট কি কমেন্টে রাখবেন না।
৬. কোড পরিবর্তনের সাথে সাথে পুরনো কমেন্ট আপডেট করুন।
৭. এন্টারপ্রাইজ লাইব্রেরি ও ফাংশনে PHPDoc ব্যবহার করুন।`,
          code: `<?php
// Best Practice Verified Script
$cleanLogic = true;
if ($cleanLogic) {
    echo "✓ Clean code principles followed: Minimal, meaningful, and professional comments.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৫. কোন Comment সবচেয়ে বেশি ব্যবহার করবেন?',
          explanationBn: `ব্যবহারের অগ্রাধিকার:
১. // ➔ দৈনন্দিন কাজের জন্য সবচেয়ে বেশি ব্যবহৃত হয় (Primary Choice)
২. /* */ ➔ বড় ব্লক সাময়িক বন্ধ করতে বা দীর্ঘ ব্যাখ্যার জন্য
৩. /** */ ➔ ফাংশন ও ক্লাসের PHPDoc ডকুমেন্টেশনের জন্য
৪. # ➔ বৈধ হলেও আধুনিক কোডে কম ব্যবহৃত হয়।`,
          code: `<?php

// ১. প্রতিদিনের কোডে ব্যবহার করুন:
$status = "Active";

/**
 * ২. ফাংশনে ডকুমেন্টেশনের জন্য:
 */
function getStatus(): string {
    return "Status: Ready";
}

echo getStatus();
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৬. মনে রাখার সহজ নিয়ম ও সারসংক্ষেপ',
          explanationBn: `• Single Line: // Comment অথবা # Comment
• Multiple Lines: /* Comment */
• Documentation: /** Documentation */
সবচেয়ে গুরুত্বপূর্ণ Best Practice: "Code কী করছে" সেটা কমেন্ট করার চেয়ে "কেন করছে" সেটা প্রয়োজন হলে কমেন্ট করা বেশি মূল্যবান।`,
          code: `<?php

// Apply discount for premium customers.
$isPremium = true;
$discount = $isPremium ? 200 : 0;

echo "Customer Discount: $discount BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        }
      ],
      keyPointsBn: [
        'PHP Comment হলো এমন টেক্সট যা PHP interpreter এক্সিকিউট করে না।',
        'প্রধান ৩টি ধরন: // (সিঙ্গেল লাইন), # (শেল স্টাইল), /* */ (মাল্টি-লাইন)।',
        'PHPDoc (/** ... */) এন্টারপ্রাইজ ফাংশন ও ক্লাসের টাইপ এনোটেশনের স্ট্যান্ডার্ড।',
        'কমেন্ট কখনোই পাসওয়ার্ড, ডাটাবেস সিক্রেট বা এপিআই কি রাখার জায়গা নয়।',
        'What নয়, Why: কোড কী করছে তার চেয়ে কেন এমন লেখা হয়েছে তা ব্যাখ্যা করা বেশি গুরুত্বপূর্ণ।'
      ],
      practiceExamples: [
        {
          title: 'উদাহরণ ১: রিয়েল-ওয়ার্ল্ড ইকমার্স ডিসকাউন্ট লজিক ডকুমেন্টিং',
          descriptionBn: 'বিজনেস রুলস এবং ভ্যাট ক্যালকুলেশনের পরিষ্কার কমেন্টিং সহ জীবন্ত কোড।',
          code: `<?php
// অর্ডারের সাবটোটাল
$subtotal = 7500;

// বিজনেজ রুল: ৫০০০ টাকার বেশি অর্ডারে ১০% প্রিমিয়াম ডিসকাউন্ট প্রযোজ্য
if ($subtotal >= 5000) {
    $discountRate = 0.10; // ১০% ডিসকাউন্ট
} else {
    $discountRate = 0.00; // সাধারণ গ্রাহক
}

$discountAmount = $subtotal * $discountRate;
$finalPayable = $subtotal - $discountAmount;

echo "অর্ডার সাবটোটাল: {$subtotal} BDT<br>";
echo "ছাড়ের পরিমাণ: -{$discountAmount} BDT<br>";
echo "পরিশোধযোগ্য টাকা: <b>{$finalPayable} BDT</b>";
?>`
        },
        {
          title: 'উদাহরণ ২: PHPDoc এবং টাইপ-সেফ ফাংশন আর্কিটেকচার',
          descriptionBn: 'IDE ইন্টেলিসেন্স এবং কোড অ্যানালাইসিস টুলের জন্য স্ট্যান্ডার্ড PHPDoc ব্লক।',
          code: `<?php
/**
 * গ্রাহকের প্রদেয় মোট ভ্যাট হিসাব করে।
 *
 * @param float $amount মোট পণ্যের মূল্য
 * @param float $vatPercentage শতকরা ভ্যাটের হার (ডিফল্ট ৫%)
 * @return float মোট হিসাবকৃত ভ্যাটের পরিমাণ
 */
function calculateVAT(float $amount, float $vatPercentage = 5.0): float {
    return ($amount * $vatPercentage) / 100;
}

$netOrder = 12000;
$vat = calculateVAT($netOrder, 7.5);

echo "Net Order: $netOrder BDT<br>";
echo "Calculated VAT (7.5%): $vat BDT<br>";
echo "Total with VAT: " . ($netOrder + $vat) . " BDT";
?>`
        }
      ]
    }
  },
  {
    id: 'php-variables',
    title: 'PHP Variables',
    category: 'basic',
    tag: 'State & Storage',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP Variable কী, সিনট্যাক্স, ডেটা টাইপ, নেমিং রুলস, স্কোপ (Local/Global/Static) ও রিয়েল-লাইফ লজিক।',
    sampleCode: `<?php
// ১. মৌলিক ভেরিয়েবল ঘোষণা ($variableName = value;)
$userName = "Abbad";
$userAge = 25;
$monthlySalary = 85000.50;
$isVerified = true;

// ২. স্ট্রিং কনক্যাটেনেশন ও ইন্টারপোলেশন
echo "<h3>Welcome, $userName!</h3>";
echo "<p>Age: $userAge | Salary: " . number_format($monthlySalary, 2) . " BDT</p>";

// ৩. স্ট্যাটিক ভেরিয়েবল স্কোপ
function trackVisits(): int {
    static $visitCount = 0;
    $visitCount++;
    return $visitCount;
}

echo "<p>Visitor Hits: " . trackVisits() . ", " . trackVisits() . ", " . trackVisits() . "</p>";

// ৪. রিয়েল-ওয়ার্ল্ড ই-কমার্স কার্ট ক্যালকুলেশন
$productPrice = 5000;
$discount = 500;
$shippingCost = 100;
$finalPayable = ($productPrice - $discount) + $shippingCost;

echo "<div style='background:#f0fdf4; border:1px solid #86efac; padding:12px; border-radius:8px;'>";
echo "<b>Total Payable:</b> $finalPayable BDT (Includes $shippingCost BDT Shipping)";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP Variable হলো এমন একটি নামযুক্ত storage/container যেখানে কোনো data সাময়িকভাবে রাখা যায় এবং program-এর বিভিন্ন জায়গায় সেই data ব্যবহার বা পরিবর্তন করা যায়।
সহজভাবে: Variable = Data রাখার জন্য একটি নামযুক্ত পাত্র বা জায়গা। নিচে প্রতিটি নিয়ম বিস্তারিত ব্যাখ্যা ও লাইভ কোডের মাধ্যমে তুলে ধরা হলো:`,
      lessonSections: [
        {
          title: '১. PHP Variable-এর Basic Syntax ($variableName = value;)',
          explanationBn: `PHP-তে variable সবসময় ডলার ($) চিহ্ন দিয়ে শুরু হয়।
• $ ➔ Variable-এর শুরু
• name ➔ Variable-এর নাম
• = ➔ Assignment operator
• "Abbad" ➔ Value (মান)
• ; ➔ Statement-এর সমাপ্তি`,
          code: `<?php

$name = "Abbad";
$age = 25;
$price = 500;
$email = "abbad@gmail.com";
$isAdmin = true;

echo $name . "<br>";
echo $age;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad\n25`
        },
        {
          title: '২. Variable কেন ব্যবহার করা হয়? (পুনর্ব্যবহার)',
          explanationBn: `প্রোগ্রামে একই তথ্য বারবার ব্যবহার করতে ও গণনা করতে ভেরিয়েবল অপরিহার্য। রিয়েল-ওয়ার্ল্ড অ্যাপ্লিকেশনে $userName, $productPrice, $orderTotal, $shippingCost ইত্যাদি ভেরিয়েবল প্রচুর ব্যবহৃত হয়।`,
          code: `<?php

$price = 1000;
$quantity = 3;

$total = $price * $quantity;

echo "Total Price: " . $total . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Total Price: 3000 BDT`
        },
        {
          title: '৩. Variable-এর Value পরিবর্তন করা যায় (Dynamic Reassignment)',
          explanationBn: `PHP ভেরিয়েবলের মান স্ক্রিপ্ট চলাকালীন যেকোনো সময় পরিবর্তন বা নতুন মান দিয়ে প্রতিস্থাপন (reassign) করা যায়।`,
          code: `<?php

$name = "Abbad";
echo $name . "<br>";

$name = "Rahim";
echo $name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad\nRahim`
        },
        {
          title: '৪. Variable-এর Data Type (ডাইনামিক টাইপিং)',
          explanationBn: `PHP একটি dynamically typed ভাষা। একটি ভেরিয়েবলে বিভিন্ন ধরনের ডেটা রাখা যায় এবং মানের উপর ভিত্তি করে পিএইচপি স্বয়ংক্রিয়ভাবে টাইপ নির্ধারণ করে।`,
          code: `<?php

$name = "Abbad";                  // String
$age = 25;                        // Integer
$price = 99.99;                   // Float
$isActive = true;                 // Boolean
$skills = ["PHP", "JS", "MySQL"]; // Array

echo "Name ($name) is type: " . gettype($name) . "<br>";
echo "Price ($price) is type: " . gettype($price) . "<br>";
echo "Active flag is type: " . gettype($isActive);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৫. String Variable (টেক্সট ডেটা)',
          explanationBn: `টেক্সট বা বর্ণমালা সংরক্ষণ করতে String ব্যবহার করা হয়। এটি Double quote ("...") বা Single quote ('...') উভয়ভাবেই লেখা যায়।`,
          code: `<?php

$name = "Abbad";
$email = 'abbad@gmail.com';

echo "Name: " . $name . "<br>";
echo "Email: " . $email;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Name: Abbad\nEmail: abbad@gmail.com`
        },
        {
          title: '৬. Integer Variable (পূর্ণ সংখ্যা)',
          explanationBn: `দশমিক ছাড়া যেকোনো ধনাত্মক বা ঋণাত্মক পূর্ণ সংখ্যা সংরক্ষণ করতে Integer ব্যবহৃত হয়।`,
          code: `<?php

$age = 25;
$quantity = 10;
$stock = 100;

echo "Available Stock: " . $stock . " units";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Available Stock: 100 units`
        },
        {
          title: '৭. Float Variable (দশমিক সংখ্যা)',
          explanationBn: `Decimal বা ভগ্নাংশ সংখ্যার জন্য Float (বা Double) ব্যবহৃত হয়। ইকমার্স পণ্যের দাম ও পরিমাপে এটি প্রচুর ব্যবহৃত হয়।`,
          code: `<?php

$price = 999.99;
$discount = 50.50;

$netPrice = $price - $discount;
echo "Net Payable: " . $netPrice . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Net Payable: 949.49 BDT`
        },
        {
          title: '৮. Boolean Variable (সত্য বা মিথ্যা)',
          explanationBn: `Boolean-এর মান মাত্র দুটি: true অথবা false। কন্ডিশনাল লজিক, ফ্ল্যাগ এবং অনুমতি চেক করতে এটি ব্যবহৃত হয় ($isLoggedIn, $isAdmin, $isActive)।`,
          code: `<?php

$isActive = true;
$isAdmin = false;

if ($isActive) {
    echo "User account is active.<br>";
}

if (!$isAdmin) {
    echo "Standard customer privileges applied.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User account is active.\nStandard customer privileges applied.`
        },
        {
          title: '৯. Array Variable (একাধিক তথ্যের সংগ্রহ)',
          explanationBn: `একটি একক ভেরিয়েবলে একাধিক ডেটা গুচ্ছ আকারে সংরক্ষণ করতে Array ব্যবহার করা হয়। সূচক ০ থেকে শুরু হয়।`,
          code: `<?php

$skills = [
    "PHP",
    "JavaScript",
    "Laravel"
];

echo "Primary Skill: " . $skills[0] . "<br>";
echo "Total Skills: " . count($skills);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Primary Skill: PHP\nTotal Skills: 3`
        },
        {
          title: '১০. Variable Naming Rules (৪টি মৌলিক নিয়ম)',
          explanationBn: `ভেরিয়েবলের নামের ৪টি অবশ্য পালনীয় নিয়ম:
• Rule 1: ভেরিয়েবল অবশ্যই $ দিয়ে শুরু হতে হবে ($name)।
• Rule 2: $ এর পর অক্ষর (A-Z, a-z) বা আন্ডারস্কোর (_) দিয়ে শুরু হবে। সংখ্যা দিয়ে শুরু হতে পারবে না (ভুল: $123name)।
• Rule 3: নামের মাঝে কোনো স্পেস বা ফাঁকা জায়গা দেওয়া যাবে না (ভুল: $user name, সঠিক: $userName)।
• Rule 4: ভেরিয়েবল সম্পূর্ণ Case-sensitive ($name, $Name, $NAME আলাদা ভেরিয়েবল)।`,
          code: `<?php
// সঠিক ভেরিয়েবল নাম:
$name = "Abbad";
$_status = "Verified";
$user1 = "John";

echo "Valid Names: $name, $_status, $user1";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১১. Variable Case-Sensitive ডেমো',
          explanationBn: `PHP-তে ছোট হাতের ও বড় হাতের অক্ষরের ভেরিয়েবল দুটি সম্পূর্ণ ভিন্ন মেমোরি লোকেশন নির্দেশ করে।`,
          code: `<?php

$name = "Abbad";
$Name = "Rahim";

echo "Lowercase \$name: " . $name . "<br>";
echo "Capitalized \$Name: " . $Name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Lowercase $name: Abbad\nCapitalized $Name: Rahim`
        },
        {
          title: '১২. Variable Name লেখার Best Practice (camelCase)',
          explanationBn: `আধুনিক প্রফেশনাল পিএইচপি কোডে সাধারণত camelCase কনভেনশন অনুসরণ করা হয়। প্রথম শব্দ ছোট হাতের এবং পরের শব্দগুলোর প্রথম অক্ষর বড় হাতের হয়।
যেমন: $userName, $productPrice, $shippingCost, $orderTotal।`,
          code: `<?php
// Best Practice: camelCase
$customerEmail = "customer@example.com";
$monthlySubscriptionFee = 2500;

echo "Billing $customerEmail: {$monthlySubscriptionFee} BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৩. Variable Assignment (= অপারেটর)',
          explanationBn: `= হলো অ্যাসাইনমেন্ট অপারেটর। এটি ডানপাশের মান বা ক্যালকুলেশনের ফলাফলকে বামপাশের ভেরিয়েবলে সঞ্চয় করে।`,
          code: `<?php

$name = "Abbad";
$price = 500;
$quantity = 2;

$total = $price * $quantity;
echo "Assigned Total: " . $total;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Assigned Total: 1000`
        },
        {
          title: '১৪. Variable-এর মধ্যে Variable-এর Value ব্যবহার',
          explanationBn: `একটি ভেরিয়েবলের মানের সাথে অন্য ভেরিয়েবলের মান যুক্ত করে নতুন মান তৈরি করা যায়।`,
          code: `<?php

$firstName = "Abbad";
$lastName = "Khan";

$fullName = $firstName . " " . $lastName;

echo "Generated Full Name: " . $fullName;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Generated Full Name: Abbad Khan`
        },
        {
          title: '১৫. String Interpolation (ডাবল কোটে ভেরিয়েবল)',
          explanationBn: `Double quote-এর মধ্যে সরাসরি ভেরিয়েবলের নাম বসালে পিএইচপি স্বয়ংক্রিয়ভাবে তার মান প্রিন্ট করে। জটিল স্ট্রিংয়ের ক্ষেত্রে {$variable} লেখা সেরা প্র্যাকটিস।`,
          code: `<?php

$name = "Abbad";

echo "Hello $name<br>";
echo "Welcome, {$name}!";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello Abbad\nWelcome, Abbad!`
        },
        {
          title: '১৬. Concatenation (. অপারেটর দিয়ে জোড়া লাগানো)',
          explanationBn: `একাধিক স্ট্রিং ও ভেরিয়েবল একসাথে যুক্ত করতে ডট (.) অপারেটর ব্যবহার করা হয়।`,
          code: `<?php

$firstName = "Abbad";
$lastName = "Khan";

echo "Hello " . $firstName . "<br>";
echo $firstName . " " . $lastName;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello Abbad\nAbbad Khan`
        },
        {
          title: '১৭. Variable-এর মাধ্যমে গাণিতিক Calculation',
          explanationBn: `ভেরিয়েবল ব্যবহার করে বাস্তবসম্মত মূল্য, ছাড় ও ডেলিভারি চার্জের হিসাব করা:`,
          code: `<?php

$price = 5000;
$discount = 500;
$shippingCost = 100;

$finalPrice = ($price - $discount) + $shippingCost;

echo "Final Payable Price: " . $finalPrice . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Final Payable Price: 4600 BDT`
        },
        {
          title: '১৮. Variable Increment (++ অপারেটর)',
          explanationBn: `সংখ্যাবাচক ভেরিয়েবলের মান ১ বৃদ্ধি করতে $count++ অথবা $count = $count + 1 লেখা যায়।`,
          code: `<?php

$count = 1;
$count++;

echo "Incremented Value: " . $count;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Incremented Value: 2`
        },
        {
          title: '১৯. Variable Decrement (-- অপারেটর)',
          explanationBn: `মান ১ কমাতে $count-- ব্যবহৃত হয়। যেমন শপিং কার্টে কোনো আইটেমের পরিমাণ ১ কমানো:`,
          code: `<?php

$quantity = 3;
$quantity--;

echo "Updated Cart Quantity: " . $quantity;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Updated Cart Quantity: 2`
        },
        {
          title: '২০. Variable Comparison (শর্তে তুলনা)',
          explanationBn: `if কন্ডিশনে ভেরিয়েবলের মান তুলনা করে ডিসিশন নেওয়া যায়।`,
          code: `<?php

$age = 25;

if ($age >= 18) {
    echo "Status: Adult User (Eligible for Account)";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Status: Adult User (Eligible for Account)`
        },
        {
          title: '২১. Variable এবং User Input ($_POST / $_GET)',
          explanationBn: `বাস্তব অ্যাপ্লিকেশনে ফর্ম থেকে ইউজারের ডেটা ভেরিয়েবলে গ্রহণ করা হয়। তবে ইউজারের ইনপুট সরাসরি বিশ্বাস না করে ভ্যালিডেশন করা বাধ্যতামূলক।`,
          code: `<?php
// ফর্ম ইনপুট সিমুলেশন
$mockPost = ['name' => 'Abbad Khan'];
$name = htmlspecialchars($mockPost['name']);

echo "Clean User Input Received: " . $name;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২২. Variable এবং Database (ডাটাবেস রেকর্ড স্টোরেজ)',
          explanationBn: `ডাটাবেস থেকে পাওয়া কুয়েরির রেকর্ড PHP ভেরিয়েবলে সংরক্ষিত হয় এবং সেখান থেকে বিজনেস লজিক শেষে আউটপুট প্রদর্শিত হয়।`,
          code: `<?php
// ডাটাবেস রো সিমুলেশন
$user = [
    'id' => 101,
    'name' => 'Abbad Khan',
    'role' => 'Administrator'
];

echo "Database Record -> User: {$user['name']} | Role: {$user['role']}";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৩. Variable Scope-এর পরিচিতি',
          explanationBn: `PHP-তে variable কোথায় ডিক্লেয়ার করা হয়েছে তার উপর ভিত্তি করে এর কার্যকারিতা বা Scope নির্ধারিত হয়।
৩টি প্রধান স্কোপ:
১. Local Scope
২. Global Scope
৩. Static Scope`,
          code: `<?php
echo "PHP Scopes: Local, Global, and Static.";
?>`,
          codeLanguage: 'PHP Concept'
        },
        {
          title: '২৪. Local Variable (ফাংশনের নিজস্ব ভেরিয়েবল)',
          explanationBn: `ফাংশনের ভেতরে তৈরি ভেরিয়েবল কেবল সেই ফাংশনের ভেতরেই কাজ করে। ফাংশনের বাইরে থেকে তাকে অ্যাক্সেস করা যায় না।`,
          code: `<?php

function test()
{
    $name = "Abbad";
    echo "Inside Function: " . $name . "<br>";
}

test();
// echo $name; // বাইরে কল করলে Warning বা Error দেবে
echo "Local variable stays private to its function.";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৫. Global Variable ও global কি-ওয়ার্ড',
          explanationBn: `ফাংশনের বাইরে তৈরি ভেরিয়েবল global scope-এ থাকে। ফাংশনের ভেতর থেকে তা ব্যবহার করতে হলে global কি-ওয়ার্ড লিখতে হয়।`,
          code: `<?php

$name = "Abbad";

function showName()
{
    global $name;
    echo "Global variable accessed inside function: " . $name;
}

showName();
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৬. Static Variable (ফাংশন শেষ হলেও মান মনে রাখে)',
          explanationBn: `সাধারণ লোকাল ভেরিয়েবল প্রতিবার ফাংশন কলের সাথে সাথে শূন্য বা রিসেট হয়ে যায়। কিন্তু static কি-ওয়ার্ড দিলে ফাংশন শেষ হলেও ভেরিয়েবল তার পূর্ববর্তী মান মেমরিতে ধরে রাখে।`,
          code: `<?php

function counter()
{
    static $count = 0;
    $count++;
    echo $count . " ";
}

counter();
counter();
counter();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `1 2 3 `
        },
        {
          title: '২৭. Variable Variable ($$name ডাইনামিক রেফারেন্স)',
          explanationBn: `PHP-তে একটি ভেরিয়েবলের মানের উপর ভিত্তি করে আরেকটি নতুন ভেরিয়েবল নির্দেশ করা যায়। যেমন $name = "username" হলে $$name নির্দেশ করে $username-কে।`,
          code: `<?php

$name = "username";
$$name = "Abbad";

echo "Direct \$username: " . $username . "<br>";
echo "Via \$\$name: " . $$name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Direct $username: Abbad\nVia $$name: Abbad`
        },
        {
          title: '২৮. Constants বনাম Variables (মান পরিবর্তনযোগ্যতা)',
          explanationBn: `• Variable: স্ক্রিপ্ট চলাকালীন এর মান যেকোনো সময় পরিবর্তন করা যায় ($siteName = "New")।
• Constant: একবার ডিফাইন করলে এর মান আর পরিবর্তন করা যায় না (const SITE_NAME = "Fixed")।`,
          code: `<?php

$siteName = "My Website";
$siteName = "Updated Website"; // Variable পরিবর্তন সম্ভব

const APP_ENV = "production";   // Constant অপরিবর্তনীয়

echo "Variable: $siteName | Constant: " . APP_ENV;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৯. Real-World Example: Product Pricing Calculation',
          explanationBn: `বাস্তব ইকমার্স অ্যাপ্লিকেশনে পণ্যের নাম, স্টক, সাবটোটাল ও ডিসকাউন্ট হিসাবের পূর্ণাঙ্গ কোড:`,
          code: `<?php

$productName = "Laptop";
$price = 85000;
$quantity = 2;
$discount = 5000;

$subtotal = $price * $quantity;
$finalTotal = $subtotal - $discount;

echo "Product: " . $productName . "<br>";
echo "Quantity: " . $quantity . "<br>";
echo "Subtotal: " . $subtotal . " BDT<br>";
echo "Discount: " . $discount . " BDT<br>";
echo "Total: " . $finalTotal . " BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩০. Real-World Example: User Profile & Verification',
          explanationBn: `ব্যবহারকারীর নাম, ইমেইল, বয়স ও একাউন্ট সক্রিয়তা যাচাইয়ের কোড:`,
          code: `<?php

$userName = "Abbad";
$userEmail = "abbad@gmail.com";
$userAge = 25;
$isVerified = true;

echo "Name: " . $userName . "<br>";
echo "Email: " . $userEmail . "<br>";
echo "Age: " . $userAge . "<br>";

if ($isVerified) {
    echo "<span style='color:green; font-weight:bold;'>✓ Account Verified</span>";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩১. Real-World Example: Complete Order Summary',
          explanationBn: `পণ্য মূল্য, পরিমাণ, শিপিং ফি এবং ডিসকাউন্ট সমন্বয় করে চালানের চূড়ান্ত মোট বের করার বিজনেস লজিক:`,
          code: `<?php

$productPrice = 2000;
$quantity = 3;
$shippingCost = 100;
$discount = 200;

$subtotal = $productPrice * $quantity;
$total = $subtotal + $shippingCost - $discount;

echo "Subtotal: " . $subtotal . "<br>";
echo "Shipping: " . $shippingCost . "<br>";
echo "Discount: " . $discount . "<br>";
echo "<b>Grand Total: " . $total . " BDT</b>";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Subtotal: 6000\nShipping: 100\nDiscount: 200\nGrand Total: 5900 BDT`
        },
        {
          title: '৩২. Variable সম্পর্কে ৫টি Common Mistakes ও সমাধান',
          explanationBn: `১. $name = Abbad; ➔ ভুল! স্ট্রিংয়ে কোটেশন আবশ্যক ("Abbad")।
২. $user name = "Abbad"; ➔ ভুল! নামের মাঝে স্পেস দেওয়া যাবে না ($userName)।
৩. $123name = "Abbad"; ➔ ভুল! সংখ্যা দিয়ে নাম শুরু করা যাবে না।
৪. $name = "Abbad" ➔ ভুল! স্টেটমেন্টের শেষে সেমিকোলন আবশ্যক ($name = "Abbad";)।
৫. echo $Name; ➔ ভুল! $name এবং $Name দুটি ভিন্ন কেসের ভেরিয়েবল।`,
          code: `<?php
// ত্রুটিমুক্ত সঠিক কোড গঠন
$userName = "Abbad";
$userRole = "Senior Architect";

echo "Correct: $userName is a $userRole.";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩৩. Variable-এর Best Practices চেকলিস্ট',
          explanationBn: `১. অর্থপূর্ণ নাম ব্যবহার করুন ($userEmail, $x নয়)।
২. camelCase কনভেনশন মেনে চলুন ($orderTotal, $shippingCost)।
৩. অপ্রয়োজনে গ্লোবাল ভেরিয়েবল ব্যবহার এড়িয়ে চলুন।
৪. ইউজারের ইনপুট সরাসরি বিশ্বাস না করে স্যানিটাইজ করুন।
৫. সংবেদনশীল তথ্য কোডে হার্ডকোড করবেন না।`,
          code: `<?php
// Clean, maintainable variables
$customerShippingAddress = "Dhaka, Bangladesh";
$orderProcessingFee = 50.00;

echo "Order will be shipped to: $customerShippingAddress";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩৪. Professional Developer-এর Mental Model',
          explanationBn: `একজন প্রফেশনাল ডেভেলপার কেবল ভেরিয়েবল ঘোষণা করেন না, তিনি চিন্তা করেন:
Data Source (User / DB / API) ➔ Validation ➔ Variable ➔ Business Logic ➔ Response`,
          code: `<?php
// রিকোয়েস্ট লাইফসাইকেল সিমুলেশন
$requestPayload = ['email' => 'abbad@gmail.com'];
$validatedEmail = filter_var($requestPayload['email'], FILTER_VALIDATE_EMAIL);

if ($validatedEmail) {
    echo "✓ Processed securely: $validatedEmail";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩৫. সারসংক্ষেপ ও মনে রাখার ফর্মুলা',
          explanationBn: `PHP Variable হলো named storage যেখানে প্রোগ্রামিংয়ের ডেটা সাময়িকভাবে জমা রাখা হয়।
ফর্মুলা:
$variableName = value;
সবচেয়ে বেশি ব্যবহৃত real-world variable:
$userName, $userEmail, $userId, $productId, $productPrice, $quantity, $orderTotal, $discount, $shippingCost, $isActive, $isLoggedIn।`,
          code: `<?php

$developer = "Abbad";
$specialty = "PHP & Laravel Core Architecture";

echo "Developer: $developer | Focus: $specialty";
?>`,
          codeLanguage: 'PHP Live Code'
        }
      ],
      keyPointsBn: [
        'PHP Variable সর্বদা ডলার ($) চিহ্ন দিয়ে শুরু হয়।',
        'ভেরিয়েবলের নাম বর্ণ বা আন্ডারস্কোর দিয়ে শুরু হতে হবে, সংখ্যা দিয়ে নয় এবং স্পেস থাকা যাবে না।',
        'ভেরিয়েবল সম্পূর্ণরূপে Case-sensitive ($name এবং $Name আলাদা)।',
        '৩টি প্রধান স্কোপ: Local (ফাংশনে নিজস্ব), Global (ফাংশনের বাইরে), Static (কল শেষ হলেও মান মনে রাখে)।',
        'ডাবল কোটে ("...") ভেরিয়েবল স্বয়ংক্রিয় ইন্টারপোলেট হয়, সিঙ্গেল কোটে (\'...\') হয় না।'
      ],
      practiceExamples: [
        {
          title: 'উদাহরণ ১: ই-কমার্স ইনভয়েস ও মোট টাকা ক্যালকুলেশন',
          descriptionBn: 'পণ্যমূল্য, ডিসকাউন্ট, ডেলিভারি ফি এবং ভ্যাট সমন্বয়ে ভেরিয়েবলের ব্যবহারিক গণনা।',
          code: `<?php
// ১. ইনভয়েস ডেটা প্রিপারেশন
$itemName = "Mechanical Keyboard";
$unitPrice = 4500;
$quantity = 2;
$discountAmount = 400;
$shippingCharge = 120;

// হিসাব
$subtotal = $unitPrice * $quantity;
$vatRate = 0.05; // ৫% ভ্যাট
$calculatedVat = $subtotal * $vatRate;
$netPayable = ($subtotal + $calculatedVat + $shippingCharge) - $discountAmount;

echo "<h3>ইনভয়েস সারসংক্ষেপ</h3>";
echo "পণ্য: <b>$itemName</b> (x$quantity)<br>";
echo "সাবটোটাল: $subtotal BDT<br>";
echo "ভ্যাট (৫%): +$calculatedVat BDT<br>";
echo "ডেলিভারি চার্জ: +$shippingCharge BDT<br>";
echo "ডিসকাউন্ট: -$discountAmount BDT<br>";
echo "<hr>";
echo "<h4 style='color:#16a34a;'>সর্বমোট প্রদেয়: $netPayable BDT</h4>";
?>`
        },
        {
          title: 'উদাহরণ ২: স্ট্যাটিক ও গ্লোবাল স্কোপের লাইভ ডেমো',
          descriptionBn: 'লোকাল, গ্লোবাল এবং স্ট্যাটিক ভেরিয়েবলের কার্যপদ্ধতি স্পষ্টভাবে বোঝার লাইভ স্ক্রিপ্ট।',
          code: `<?php
// গ্লোবাল ভেরিয়েবল
$appVersion = "v8.2.0";

function trackUserActivity(): void {
    global $appVersion; // গ্লোবাল অ্যাক্সেস
    static $activityCount = 0; // মান মেমরিতে স্থায়ী থাকবে
    $localToken = rand(100, 999); // প্রতিবার নতুন তৈরি হবে

    $activityCount++;
    echo "Activity #$activityCount | App: $appVersion | Token: $localToken<br>";
}

trackUserActivity();
trackUserActivity();
trackUserActivity();
?>`
        }
      ]
    }
  },
  {
    id: 'php-echo-print',
    title: 'PHP Echo / Print',
    category: 'basic',
    tag: 'I/O Output',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP echo ও print কী, পার্থক্য, শর্ট সিনট্যাক্স <?= ?>, HTML রেন্ডারিং, নিরাপত্তা ও var_dump()।',
    sampleCode: `<?php
// ১. echo দিয়ে সাধারণ ও একাধিক আর্গুমেন্ট প্রিন্ট
$name = "Abbad";
$role = "Full Stack Engineer";
echo "<h3>Hello ", $name, "!</h3>";

// ২. ডট কনক্যাটেনেশন ও শর্ট ইকো ডেমো
echo "<p>Role: " . $role . "</p>";

// ৩. print দিয়ে এক্সপ্রেশন (print 1 রিটার্ন করে)
$result = print "Printed successfully via print construct.<br>";
echo "Return value of print: $result<br>";

// ৪. ভিউ বা টেমপ্লেটের নিরাপদ আউটপুট
$product = ["name" => "MacBook Pro", "price" => 185000];
?>
<div style="background:#f8fafc; border:1px solid #cbd5e1; padding:12px; border-radius:8px; margin-top:8px;">
    <h4 style="margin:0; color:#1e293b;"><?= htmlspecialchars($product['name']) ?></h4>
    <p style="margin:4px 0; color:#04AA6D; font-weight:bold;">Price: <?= number_format($product['price']) ?> BDT</p>
</div>`,
    deepDive: {
      conceptBn: `PHP-তে কোনো data, text, variable বা HTML output করার জন্য প্রধানত echo এবং print ব্যবহার করা হয়। দুটিই output দেখাতে পারে, তবে real-world PHP development-এ echo বেশি ব্যবহৃত হয়। নিচে প্রতিটি পয়েন্ট বিস্তারিত ব্যাখ্যা ও লাইভ কোড উদাহরণের সাথে সাজানো হলো:`,
      lessonSections: [
        {
          title: '১. echo কী? (Basic Syntax)',
          explanationBn: `echo হলো PHP-এর একটি language construct (কোনো সাধারণ ফাংশন নয়), যার মাধ্যমে স্ক্রিনে বা ব্রাউজারে টেক্সট ও ডেটা আউটপুট পাঠানো যায়।
Syntax: echo value;`,
          code: `<?php

echo "Hello PHP";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello PHP`
        },
        {
          title: '২. echo দিয়ে Variable Output',
          explanationBn: `ভেরিয়েবলের মান সরাসরি echo দিয়ে স্ক্রিনে প্রিন্ট করা যায়।`,
          code: `<?php

$name = "Abbad";
$age = 25;

echo $name . "<br>";
echo $age;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad\n25`
        },
        {
          title: '৩. echo দিয়ে Multiple Value Output (কমা দিয়ে)',
          explanationBn: `echo দিয়ে একই স্টেটমেন্টে কমা (,) দিয়ে আলাদা করে একাধিক ভ্যালু বা স্ট্রিং প্রিন্ট করা যায়। এটি echo-এর একটি বিশেষ সুবিধা।`,
          code: `<?php

$name = "Abbad";
$age = 25;

echo $name, " is ", $age, " years old.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Abbad is 25 years old.`
        },
        {
          title: '৪. echo দিয়ে String Concatenation (. অপারেটর)',
          explanationBn: `ডট (.) অপারেটর দিয়ে স্ট্রিং এবং ভেরিয়েবল জোড়া লাগিয়ে চমৎকার বাক্য গঠন করে echo করা যায়।`,
          code: `<?php

$firstName = "Abbad";
$lastName = "Khan";

echo "Full Name: " . $firstName . " " . $lastName;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Full Name: Abbad Khan`
        },
        {
          title: '৫. echo দিয়ে HTML Output রেন্ডারিং',
          explanationBn: `PHP কোডের ভেতর থেকে HTML ট্যাগ echo করলে ব্রাউজার তা স্বয়ংক্রিয়ভাবে ওয়েব এলিমেন্ট হিসেবে প্রদর্শন করে।`,
          code: `<?php

$name = "Abbad";

echo "<h1 style='color:#0284c7; margin:0;'>Welcome $name</h1>";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Welcome Abbad`
        },
        {
          title: '৬. echo দিয়ে একাধিক HTML Element তৈরি',
          explanationBn: `ডাইনামিক ওয়েবপেজ তৈরির ক্ষেত্রে একাধিক এইচটিএমএল ট্যাগ ও পিএইচপি ভেরিয়েবল একসাথে আউটপুট করা যায়।`,
          code: `<?php

$name = "Abbad";
$email = "abbad@gmail.com";

echo "<h2>$name</h2>";
echo "<p>Email: <a href='mailto:$email'>$email</a></p>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৭. Short Echo Syntax (<?= ?>)',
          explanationBn: `পিএইচপিতে echo করার সবচেয়ে জনপ্রিয় ও সংক্ষিপ্ত রূপ হলো <?= ?>।
এটি <?php echo $name; ?> এর হুবহু সমান। আধুনিক পিএইচপি টেমপ্লেট ও ভিউ ফাইলে এটি স্ট্যান্ডার্ড হিসেবে ব্যবহৃত হয়।`,
          code: `<?php
$name = "Abbad";
?>

<div style="padding:10px; background:#f1f5f9; border-radius:6px;">
    <h1><?= $name ?></h1>
    <p>Rendered using PHP Short Echo Tag!</p>
</div>`,
          codeLanguage: 'PHP Template Code'
        },
        {
          title: '৮. echo এবং HTML-এর Real-World Example (Product Card)',
          explanationBn: `এইচটিএমএল কাঠামোর মধ্যে পিএইচপি ভেরিয়েবল ডাইনামিকালি প্রদর্শন করার বাস্তব আর্কিটেকচার:`,
          code: `<?php

$productName = "Laptop";
$price = 85000;
?>

<div style="border:1px solid #e2e8f0; padding:16px; border-radius:8px; max-width:300px;">
    <h3 style="margin-top:0;"><?= $productName ?></h3>
    <p style="color:#16a34a; font-weight:bold;">Price: <?= number_format($price) ?> BDT</p>
</div>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৯. print কী? (Basic Syntax)',
          explanationBn: `print-ও PHP-তে আউটপুট দেখানোর জন্য ব্যবহৃত একটি language construct।
Syntax: print value;`,
          code: `<?php

$name = "Abbad";

print "Hello PHP!<br>";
print "Developer: " . $name;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello PHP!\nDeveloper: Abbad`
        },
        {
          title: '১০. print দিয়ে Concatenation',
          explanationBn: `print দিয়ে ডট (.) ব্যবহার করে স্ট্রিং জোড়া লাগিয়ে আউটপুট দেওয়া যায়।`,
          code: `<?php

$name = "Abbad";

print "Hello " . $name . ", welcome to modern PHP.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello Abbad, welcome to modern PHP.`
        },
        {
          title: '১১. print দিয়ে HTML রেন্ডারিং',
          explanationBn: `print-এর মাধ্যমেও সম্পূর্ণ এইচটিএমএল ট্যাগ ও ডিজাইন ব্রাউজারে পাঠানো যায়।`,
          code: `<?php

$name = "Abbad";

print "<h2 style='color:#7c3aed;'>Hello $name</h2>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১২. echo বনাম print — মৌলিক তুলনা',
          explanationBn: `দুটিই টেক্সট আউটপুট করে। তবে এদের মধ্যে গঠনগত ও ব্যবহারিক কিছু পার্থক্য রয়েছে।`,
          code: `<?php

echo "This is from echo.<br>";
print "This is from print.";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৩. echo Multiple Arguments নিতে পারে (print পারে না)',
          explanationBn: `echo কমা দিয়ে একাধিক আর্গুমেন্ট গ্রহণ করতে পারে: echo "A", " ", "B";
কিন্তু print শুধুমাত্র একটি সিঙ্গেল এক্সপ্রেশন গ্রহণ করে। তাই মাল্টিপল আউটপুটের ক্ষেত্রে echo বেশি ফ্লেক্সিবল।`,
          code: `<?php

// echo কমা দিয়ে একাধিক আর্গুমেন্ট সাপোর্ট করে:
echo "Hello", " ", "Abbad", "!<br>";

// print শুধুমাত্র একটি এক্সপ্রেশন নেয়:
print "Hello Abbad!";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৪. print একটি Value Return করে (Return Value = 1)',
          explanationBn: `print সফলভাবে রান হলে সর্বদা 1 রিটার্ন করে। তাই print-কে কোনো এক্সপ্রেশন বা ভেরিয়েবলে অ্যাসাইন করা যায়। কিন্তু echo কোনো মান রিটার্ন করে না।`,
          code: `<?php

$result = print "Hello World! ";

echo "Return Code: " . $result;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello World! Return Code: 1`
        },
        {
          title: '১৫. if Condition-এর সাথে print ও echo',
          explanationBn: `কন্ডিশনাল লজিক ট্রু হলে প্রিন্ট বা ইকো এক্সিকিউট করা:`,
          code: `<?php

$isLoggedIn = true;

if ($isLoggedIn) {
    echo "Welcome, authorized user!";
} else {
    print "Please log in first.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Welcome, authorized user!`
        },
        {
          title: '১৬. echo বনাম print — সহজ সামারি টেবিল',
          explanationBn: `• echo: বেশি ব্যবহৃত, কমা দিয়ে একাধিক আর্গুমেন্ট নেয়, কোনো রিটার্ন ভ্যালু নেই, দ্রুততর ও স্ট্যান্ডার্ড।
• print: একটি আর্গুমেন্ট নেয়, সফল হলে 1 রিটার্ন করে, তুলনামূলকভাবে কম ব্যবহৃত।`,
          code: `<?php
echo "Verdict: Use 'echo' as your standard output construct.";
?>`,
          codeLanguage: 'Summary'
        },
        {
          title: '১৭. echo কি Function? (Language Construct)',
          explanationBn: `না, echo কোনো ফাংশন নয়, এটি একটি ল্যাঙ্গুয়েজ কনস্ট্রাক্ট। তাই echo("Hello"); এভাবে ব্র্যাকেট দিয়ে লেখা গেলেও ব্র্যাকেট ছাড়া echo "Hello"; লেখাই প্রফেশনাল স্ট্যান্ডার্ড।`,
          code: `<?php

// Preferred & Clean Style:
echo "Clean PHP without brackets.<br>";

// Valid but unneeded brackets:
echo("Brackets work, but not recommended.");
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৮. echo কি Parentheses ছাড়া ব্যবহার করা যায়?',
          explanationBn: `হ্যাঁ, এবং প্যারেন্থেসিস ছাড়াই ব্যবহার করা সবচেয়ে ভালো প্র্যাকটিস।`,
          code: `<?php
echo "Professional developers avoid parentheses with echo.";
?>`,
          codeLanguage: 'PHP Best Practice'
        },
        {
          title: '১৯. echo দিয়ে Number ও গণনার আউটপুট',
          explanationBn: `সরাসরি সংখ্যা বা গাণিতিক এক্সপ্রেশন হিসাব করে তার ফলাফল echo করা যায়।`,
          code: `<?php

$price = 500;
$quantity = 3;

echo "Total: " . ($price * $quantity) . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Total: 1500 BDT`
        },
        {
          title: '২০. echo দিয়ে Boolean Output (1 বনাম ফাঁকা)',
          explanationBn: `পিএইচপিতে true কে echo করলে '1' দেখায়। কিন্তু false কে echo করলে ব্রাউজারে কোনো ভিজিবল আউটপুট আসে না (ফাঁকা স্ট্রিং)। তাই বুলিয়ান ডিবাগিংয়ে var_dump() ব্যবহার করতে হয়।`,
          code: `<?php

$isTrue = true;
$isFalse = false;

echo "True echoes: [" . $isTrue . "]<br>";
echo "False echoes: [" . $isFalse . "] (empty!)<br>";

echo "Using var_dump for boolean: ";
var_dump($isFalse);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `True echoes: [1]\nFalse echoes: [] (empty!)\nUsing var_dump for boolean: bool(false)`
        },
        {
          title: '২১. echo দিয়ে Array Output করা যাবে? (সতর্কতা)',
          explanationBn: `সরাসরি অ্যারে echo করলে 'Array to string conversion' ওয়ার্নিং আসে এবং কেবল 'Array' শব্দটি প্রিন্ট হয়। অ্যারে দেখতে print_r() বা var_dump() ব্যবহার করতে হয়।`,
          code: `<?php

$skills = ["PHP", "JavaScript", "Laravel"];

// echo $skills; // এটি Warning দেবে!

echo "Using print_r to view array:<br><pre>";
print_r($skills);
echo "</pre>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২২. echo Object Output (__toString মেথড)',
          explanationBn: `একটি ক্লাস অবজেক্টকে সরাসরি echo করা যায় না, যদি না ক্লাসের ভেতরে ম্যাজিক মেথড __toString() সংজ্ঞায়িত থাকে।`,
          code: `<?php

class Customer {
    public string $name = "Abbad";
    
    public function __toString(): string {
        return "Customer Profile: " . $this->name;
    }
}

$user = new Customer();
echo $user; // __toString থাকার কারণে নিরাপদে প্রিন্ট হবে
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Customer Profile: Abbad`
        },
        {
          title: '২৩. echo এবং User Input Security (XSS প্রতিরোধ)',
          explanationBn: `ব্যবহারকারীর পাঠানো ইনপুট সরাসরি echo করা মারাত্মক ঝুঁকিপূর্ণ (XSS অ্যাটাক হতে পারে)। এইচটিএমএল আউটপুট করার সময় সর্বদা htmlspecialchars() দিয়ে স্যানিটাইজ করতে হবে।`,
          code: `<?php

$userInput = "<script>alert('Hacked')</script>Abbad";

// মারাত্মক ভুল: echo $userInput;

// নিরাপদ পদ্ধতি:
echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');
?>`,
          codeLanguage: 'Security Best Practice',
          outputPreview: `&lt;script&gt;alert('Hacked')&lt;/script&gt;Abbad`
        },
        {
          title: '২৪. Real-World Example: User Profile Template',
          explanationBn: `নিরাপদভাবে প্রোফাইল ডেটা এইচটিএমএল ব্লকে রেন্ডার করার প্রফেশনাল পদ্ধতি:`,
          code: `<?php

$userName = "Abbad";
$userEmail = "abbad@gmail.com";
$userRole = "Lead Engineer";
?>

<div style="background:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;">
    <h3 style="margin:0;"><?= htmlspecialchars($userName) ?></h3>
    <p style="margin:4px 0;">Email: <?= htmlspecialchars($userEmail) ?></p>
    <p style="margin:4px 0; color:#0284c7; font-weight:bold;">Role: <?= htmlspecialchars($userRole) ?></p>
</div>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৫. Real-World Example: Dynamic Product Card',
          explanationBn: `ডাটাবেস থেকে আসা পণ্যের তথ্য ডাইনামিক এইচটিএমএল কার্ডে পরিবেশন:`,
          code: `<?php

$productName = "Ultra-wide Monitor";
$price = 45000;
$stock = 8;
?>

<div style="border:1px solid #cbd5e1; padding:12px; border-radius:8px; max-width:280px;">
    <h4 style="margin:0;"><?= htmlspecialchars($productName) ?></h4>
    <p style="margin:6px 0; color:#16a34a; font-weight:bold;">Price: <?= number_format($price) ?> BDT</p>
    <p style="margin:0; font-size:12px; color:#64748b;">Stock: <?= $stock ?> units available</p>
</div>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৬. Real-World Example: Conditional Output in Template',
          explanationBn: `এইচটিএমএল টেমপ্লেটে শর্ত অনুযায়ী পরিষ্কারভাবে ইন-স্টক বা আউট-অব-স্টক প্রদর্শন করার সেরা সিনট্যাক্স:`,
          code: `<?php

$stock = 5;
?>

<?php if ($stock > 0): ?>
    <span style="background:#dcfce7; color:#15803d; padding:4px 8px; border-radius:4px; font-size:12px; font-weight:bold;">
        ✓ In Stock (<?= $stock ?> items)
    </span>
<?php else: ?>
    <span style="background:#fee2e2; color:#b91c1c; padding:4px 8px; border-radius:4px; font-size:12px; font-weight:bold;">
        ✕ Out of Stock
    </span>
<?php endif; ?>`,
          codeLanguage: 'PHP Template Syntax'
        },
        {
          title: '২৭. echo বনাম var_dump() বনাম print_r()',
          explanationBn: `• echo: ইউজার বা ব্রাউজারের ফাইনাল আউটপুটের জন্য (echo $name;)।
• print_r(): অ্যারে বা অবজেক্টের স্ট্রাকচার সহজে পড়ার জন্য (print_r($array);)।
• var_dump(): ডেটা টাইপ ও সাইজসহ সম্পূর্ণ টেকনিক্যাল ডিবাগিংয়ের জন্য (var_dump($var);)।`,
          code: `<?php

$user = ["name" => "Abbad", "active" => true];

echo "1. echo: string/HTML output<br>";

echo "2. print_r:<br><pre>";
print_r($user);
echo "</pre>";

echo "3. var_dump:<br><pre>";
var_dump($user);
echo "</pre>";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৮. Modern PHP-তে সবচেয়ে বেশি ব্যবহৃত ভিউ স্টাইল',
          explanationBn: `বিশাল echo কোডের বদলে HTML ও PHP আলাদা রেখে <?= $variable ?> ব্যবহার করলে কোডের পাঠযোগ্যতা বহুগুণ বৃদ্ধি পায়।`,
          code: `<?php
$headline = "Mastering Server-Side Output";
?>

<h2 style="color:#0f172a;"><?= $headline ?></h2>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৯. Common Mistakes ও সমাধান',
          explanationBn: `১. echo; ➔ ভুল! আউটপুটের মান থাকতে হবে।
২. echo "Hello" ➔ ভুল! সেমিকোলন ছাড়া সিনট্যাক্স এরর হবে।
৩. echo $Name; ➔ ভুল! $name এবং $Name কেস সেনসিটিভ।
৪. echo $_POST['name']; ➔ ভুল! স্যানিটাইজ ছাড়া XSS এর ঝুঁকি তৈরি হয়।
৫. echo $array; ➔ ভুল! অ্যারে দেখতে print_r() ব্যবহার করুন।`,
          code: `<?php
// সঠিক ও নির্ভুল সমাধান
$name = "Abbad";
echo "Correct syntax: " . htmlspecialchars($name);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩০. Best Practices চেকলিস্ট',
          explanationBn: `১. সাধারণ আউটপুটের জন্য echo ব্যবহার করুন।
২. HTML টেমপ্লেটে শর্ট ইকো <?= $variable ?> ব্যবহার করুন।
৩. ইউজারের পাঠানো তথ্যে htmlspecialchars() নিশ্চিত করুন।
৪. ডিবাগিংয়ের জন্য echo এর বদলে var_dump() ব্যবহার করুন।
৫. জটিল HTML স্ট্রিং হিসেবে echo না করে ভিউ ফাইল আলাদা রাখুন।`,
          code: `<?php
$isCleanCode = true;
if ($isCleanCode) {
    echo "✓ Followed modern PHP presentation guidelines.";
}
?>`,
          codeLanguage: 'Best Practice'
        },
        {
          title: '৩১. কোনটা কতটুকু শিখবেন? (Priority Guide)',
          explanationBn: `১. echo ➔ Must Know
২. <?= ?> ➔ Must Know (টেমপ্লেটের ভিত্তি)
৩. htmlspecialchars() ➔ Must Know (নিরাপত্তা)
৪. var_dump() / print_r() ➔ Must Know (ডিবাগিং)
৫. print ➔ কনসেপ্ট জানা থাকলেই যথেষ্ট`,
          code: `<?php
echo "Master echo, <?= ?>, and htmlspecialchars() for daily development.";
?>`,
          codeLanguage: 'Career Guide'
        },
        {
          title: '৩২. সারসংক্ষেপ ও মেন্টাল মডেল',
          explanationBn: `Data ➔ PHP Variable ➔ Business Logic ➔ Output (echo / <?= ?>) ➔ HTML/JSON ➔ Browser`,
          code: `<?php

$pageTitle = "PHP Echo / Print Completed";
echo "<b>$pageTitle</b>: Ready for Data Types.";
?>`,
          codeLanguage: 'PHP Live Code'
        }
      ],
      keyPointsBn: [
        'echo একটি language construct, কোনো ফাংশন নয়; কোনো রিটার্ন ভ্যালু নেই এবং দ্রুতগতির।',
        'print সফল হলে 1 রিটার্ন করে এবং শুধুমাত্র একটি এক্সপ্রেশন গ্রহণ করে।',
        'শর্ট ইকো <?= $var ?> মডার্ন পিএইচপি ভিউ ও টেমপ্লেটের জন্য আদর্শ।',
        'ইউজার ইনপুট ব্রাউজারে আউটপুট করার সময় XSS আক্রমণ রোধে htmlspecialchars() ব্যবহার বাধ্যতামূলক।',
        'ডিবাগিংয়ের জন্য echo এর বদলে var_dump() ও print_r() ব্যবহার করতে হয়।'
      ],
      practiceExamples: [
        {
          title: 'উদাহরণ ১: নিরাপদ ও ডাইনামিক ইউজার ব্যাজ রেন্ডারিং',
          descriptionBn: 'শর্ট ইকো এবং htmlspecialchars() ব্যবহার করে নিরাপদ মেম্বারশিপ ব্যাজ তৈরি।',
          code: `<?php
$memberName = "Abbad Khan <VIP>";
$memberTier = "Platinum";
$points = 14500;
?>

<div style="font-family:sans-serif; border:2px solid #0284c7; background:#f0f9ff; padding:14px; border-radius:10px; max-width:320px;">
    <h3 style="margin:0 0 6px 0; color:#0369a1;"><?= htmlspecialchars($memberName) ?></h3>
    <p style="margin:2px 0;">Tier: <span style="background:#0284c7; color:#fff; padding:2px 6px; border-radius:4px; font-size:12px;"><?= $memberTier ?></span></p>
    <p style="margin:6px 0 0 0; color:#475569; font-size:13px;">Accumulated Points: <b><?= number_format($points) ?></b></p>
</div>`
        },
        {
          title: 'উদাহরণ ২: echo বনাম var_dump() ডিবাগিং পার্থক্য',
          descriptionBn: 'বুলিয়ান, সংখ্যা ও অ্যারে ভ্যালুর ইন্টারনাল ডিবাগিং আউটপুট বিশ্লেষণ।',
          code: `<?php
$status = false;
$cartItems = ["Shirt", "Watch", "Shoes"];

echo "<h3>ডিবাগিং পার্থক্য:</h3>";
echo "১. echo দিয়ে বুলিয়ান: [" . $status . "] (কিছুই দেখা যায় না)<br>";
echo "২. var_dump দিয়ে বুলিয়ান: ";
var_dump($status);

echo "<br><br>৩. print_r দিয়ে অ্যারে:<br><pre>";
print_r($cartItems);
echo "</pre>";
?>`
        }
      ]
    }
  },
  {
    id: 'php-data-types',
    title: 'PHP Data Types',
    category: 'basic',
    tag: 'Type System',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'String, Int, Float, Bool, Array, Object, NULL, Resource, Strict Types ও টাইপ কাস্টিং।',
    sampleCode: `<?php
// ১. প্রধান স্কেলার ডেটা টাইপসমূহ
$userName = "Abbad";          // String
$age = 25;                    // Integer
$rating = 4.85;               // Float
$isEnrolled = true;           // Boolean
$avatar = null;               // NULL

// ২. কম্পাউন্ড ডেটা টাইপ
$skills = ["PHP", "Laravel", "MySQL"]; // Array

// ৩. var_dump দিয়ে টাইপ এনালাইসিস
echo "<h4>Data Type Inspection:</h4>";
var_dump($userName);
echo "<br>";
var_dump($age);
echo "<br>";
var_dump($rating);
echo "<br>";
var_dump($isEnrolled);
echo "<br>";
var_dump($skills);
?>`,
    deepDive: {
      conceptBn: `PHP Data Type বলতে একটি variable-এর মধ্যে কী ধরনের data রাখা হয়েছে সেটাকে বোঝায়। PHP একটি dynamically typed language, অর্থাৎ variable declare করার সময় আলাদা করে টাইপ না লিখলেও অ্যাসাইন করা মানের উপর ভিত্তি করে পিএইচপি স্বয়ংক্রিয়ভাবে টাইপ নির্ধারণ করে। নিচে ৩৯টি বিষয়ের পূর্ণাঙ্গ ধারাবাহিক ব্যাখ্যা ও কোড দেওয়া হলো:`,
      lessonSections: [
        {
          title: '১. PHP-এর প্রধান Data Types (শ্রেণিবিভাগ)',
          explanationBn: `PHP-তে প্রধান ৮টি ডেটা টাইপ রয়েছে:
• Scalar Types: String, Integer, Float, Boolean
• Compound Types: Array, Object
• Special Types: NULL, Resource`,
          code: `<?php

$name = "Abbad";     // String
$age = 25;           // Integer
$price = 99.99;      // Float
$isActive = true;    // Boolean

echo "Scalar types initialized successfully.";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২. String Data Type (টেক্সট ও ক্যারেক্টার)',
          explanationBn: `String হলো টেক্সট বা অক্ষরের ধারাবাহিক ক্রম। এটি Single quote ('...') বা Double quote ("...") উভয়ভাবেই লেখা যায়।`,
          code: `<?php

$name = "Abbad";
$email = "abbad@gmail.com";
$city = "Feni";

echo "User: $name from $city ($email)";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User: Abbad from Feni (abbad@gmail.com)`
        },
        {
          title: '৩. Integer Data Type (পূর্ণ সংখ্যা)',
          explanationBn: `দশমিক ছাড়া যেকোনো ধনাত্মক, ঋণাত্মক বা শূন্য পূর্ণ সংখ্যা হলো Integer। ডাটাবেসের ID, পণ্যের স্টক, গণনা ইত্যাদিতে প্রচুর ব্যবহৃত হয়।`,
          code: `<?php

$userId = 101;
$quantity = 5;
$stock = 100;

echo "User ID: $userId | Quantity: $quantity | Stock: $stock";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User ID: 101 | Quantity: 5 | Stock: 100`
        },
        {
          title: '৪. Float Data Type (দশমিক সংখ্যা ও আর্থিক সতর্কতা)',
          explanationBn: `Decimal বা ভগ্নাংশ সংখ্যার জন্য Float (বা Double) ব্যবহৃত হয়।
সতর্কতা: আর্থিক বা ব্যাংকিং অ্যাপ্লিকেশনে ফ্লোটিং পয়েন্ট হিসাব করার সময় প্রিসিশন ইস্যু এড়াতে পয়সা বা সেন্টে (Integer) হিসাব রাখা বেশি নিরাপদ।`,
          code: `<?php

$price = 999.99;
$rating = 4.5;
$temperature = 36.5;

echo "Product Rating: $rating ★ | Price: $price BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Product Rating: 4.5 ★ | Price: 999.99 BDT`
        },
        {
          title: '৫. Boolean Data Type (true / false)',
          explanationBn: `Boolean-এর মাত্র দুটি মান থাকে: true এবং false। এটি কন্ডিশনাল লজিক ও ব্যবহারকারীর অনুমতি যাচাইয়ে ব্যবহৃত হয়।`,
          code: `<?php

$isPaid = false;

if ($isPaid) {
    echo "Payment completed successfully.";
} else {
    echo "Payment pending. Please complete transaction.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Payment pending. Please complete transaction.`
        },
        {
          title: '৬. Array Data Type (ইনডেক্সড অ্যারে)',
          explanationBn: `একটি একক ভেরিয়েবলে একাধিক ডেটা ক্রমানুসারে (০, ১, ২...) রাখতে অ্যারে ব্যবহৃত হয়।`,
          code: `<?php

$skills = [
    "PHP",
    "JavaScript",
    "Laravel"
];

echo "Primary Skill: " . $skills[0] . "<br>";
echo "Second Skill: " . $skills[1];
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Primary Skill: PHP\nSecond Skill: JavaScript`
        },
        {
          title: '৭. Associative Array (কী-ভ্যালু জোড়া)',
          explanationBn: `সংখ্যার বদলে নির্দিষ্ট নামের 'key' দিয়ে ডেটা সাজানোকে Associative Array বলে। ডাটাবেসের টেবিলের একটি রো মূলত Associative Array হিসেবে আসে।`,
          code: `<?php

$user = [
    "id" => 101,
    "name" => "Abbad",
    "email" => "abbad@gmail.com",
    "age" => 25
];

echo "Name: " . $user["name"] . "<br>";
echo "Email: " . $user["email"];
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Name: Abbad\nEmail: abbad@gmail.com`
        },
        {
          title: '৮. Multidimensional Array (অ্যারের ভেতর অ্যারে)',
          explanationBn: `অ্যারের উপাদান হিসেবে আবার অ্যারে রাখা। API রেসপন্স ও পণ্যের তালিকার জন্য এটি বহুল ব্যবহৃত।`,
          code: `<?php

$products = [
    ["id" => 1, "name" => "Laptop", "price" => 85000],
    ["id" => 2, "name" => "Mouse", "price" => 1000]
];

echo "First Product: {$products[0]['name']} - {$products[0]['price']} BDT<br>";
echo "Second Product: {$products[1]['name']} - {$products[1]['price']} BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৯. Object Data Type (ক্লাসের ইনস্ট্যান্স)',
          explanationBn: `Object হলো কোনো class-এর তৈরি বাস্তব রূপ বা ইনস্ট্যান্স। এটি প্রোপার্টি ও মেথড ধারণ করে।`,
          code: `<?php

class User {
    public string $name;
    public string $role = "Developer";
}

$user = new User();
$user->name = "Abbad";

echo "User: " . $user->name . " | Role: " . $user->role;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User: Abbad | Role: Developer`
        },
        {
          title: '১০. NULL Data Type (মানহীন অবস্থা)',
          explanationBn: `NULL মানে ভেরিয়েবলটি মেমরিতে আছে কিন্তু তার কোনো ভ্যালু অ্যাসাইন করা হয়নি বা শূন্য অবস্থায় রয়েছে। যেমন ইউজার প্রোফাইল পিকচার আপলোড না করলে তা null থাকে।`,
          code: `<?php

$profileImage = null;

var_dump($profileImage);

if (is_null($profileImage)) {
    echo "<br>Default placeholder avatar will be displayed.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `NULL\nDefault placeholder avatar will be displayed.`
        },
        {
          title: '১১. Resource Data Type (বাহ্যিক হ্যান্ডেল)',
          explanationBn: `Resource হলো এমন বিশেষ টাইপ যা কোনো বাহ্যিক রিসোর্সের রেফারেন্স ধরে রাখে (যেমন ওপেন করা ফাইলের হ্যান্ডেল বা কার্ল সেশন)। আধুনিক পিএইচপিতে বেশিরভাগ ক্ষেত্রে রিসোর্সের বদলে অবজেক্ট ব্যবহৃত হয়।`,
          code: `<?php
// মেমোরি স্ট্রিম হ্যান্ডেল তৈরি
$stream = fopen('php://memory', 'r+');
echo "Resource check: " . get_resource_type($stream) . "<br>";
var_dump($stream);
fclose($stream);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১২. Data Type চেক করা: var_dump()',
          explanationBn: `var_dump() ভেরিয়েবলের টাইপ, আকার ও প্রকৃত মান বিস্তারিত ডিবাগিং ফরম্যাটে প্রদর্শন করে।`,
          code: `<?php

$name = "Abbad";
$age = 25;
$price = 99.99;
$isActive = true;

var_dump($name); echo "<br>";
var_dump($age); echo "<br>";
var_dump($price); echo "<br>";
var_dump($isActive);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৩. gettype() ফাংশন',
          explanationBn: `gettype() ভেরিয়েবলের টাইপের নাম একটি পরিষ্কার স্ট্রিং আকারে রিটার্ন করে (যেমন "string", "integer", "boolean")।`,
          code: `<?php

$name = "Abbad";
$age = 25;
$isActive = true;

echo gettype($name) . "<br>";
echo gettype($age) . "<br>";
echo gettype($isActive);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `string\ninteger\nboolean`
        },
        {
          title: '১৪. is_string() টাইপ চেকার',
          explanationBn: `কোনো ভ্যালু স্ট্রিং কি না তা যাচাই করার বুলিয়ান ফাংশন।`,
          code: `<?php

$name = "Abbad";

if (is_string($name)) {
    echo "Confirmed: $name is a valid string.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৫. is_int() টাইপ চেকার',
          explanationBn: `ইনপুটটি পূর্ণ সংখ্যা কি না তা নিশ্চিত করতে is_int() ব্যবহৃত হয়।`,
          code: `<?php

$age = 25;

if (is_int($age)) {
    echo "Confirmed: $age is an integer.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৬. is_float() টাইপ চেকার',
          explanationBn: `ভগ্নাংশ বা দশমিক সংখ্যা চেক করার ফাংশন।`,
          code: `<?php

$price = 99.99;

if (is_float($price)) {
    echo "Confirmed: $price is a float.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৭. is_bool() টাইপ চেকার',
          explanationBn: `ভেরিয়েবলটি বুলিয়ান (true/false) কি না তা যাচাই করা।`,
          code: `<?php

$isActive = true;

if (is_bool($isActive)) {
    echo "Confirmed: Variable is a boolean.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৮. is_array() টাইপ চেকার',
          explanationBn: `অ্যারে অপারেশন চালানোর আগে ভেরিয়েবলটি অ্যারে কি না নিশ্চিত হওয়া আবশ্যক।`,
          code: `<?php

$skills = ["PHP", "Laravel"];

if (is_array($skills)) {
    echo "Confirmed: Skills is an array containing " . count($skills) . " elements.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৯. is_null() টাইপ চেকার',
          explanationBn: `ভেরিয়েবলের মান নাল (NULL) কি না তা যাচাই করার ফাংশন।`,
          code: `<?php

$value = null;

if (is_null($value)) {
    echo "Value is strictly NULL.";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২০. Dynamic Typing (ডাইনামিক রূপান্তর)',
          explanationBn: `PHP-তে একই ভেরিয়েবলের ভেতরে বিভিন্ন সময়ে বিভিন্ন ধরনের ডেটা রাখা যায়। ভ্যালু পরিবর্তনের সাথে সাথে তার টাইপও স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়।`,
          code: `<?php

$value = "100";
var_dump($value); echo "<br>";

$value = 100;
var_dump($value); echo "<br>";

$value = true;
var_dump($value);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২১. Type Declaration (ফাংশন প্যারামিটার ও রিটার্ন টাইপ)',
          explanationBn: `আধুনিক পিএইচপিতে কোডের ত্রুটি কমাতে ফাংশনের ইনপুট প্যারামিটার ও রিটার্ন ভ্যালুর টাইপ সুনির্দিষ্ট করে দেওয়া যায়।`,
          code: `<?php

function add(int $a, int $b): int
{
    return $a + $b;
}

echo "Sum: " . add(10, 20);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Sum: 30`
        },
        {
          title: '২২. Strict Types (declare(strict_types=1);)',
          explanationBn: `ফাইলের শুরুতে declare(strict_types=1); লিখলে পিএইচপি জোরপূর্বক টাইপ নিরাপত্তা বজায় রাখে এবং ভুল টাইপ পাস করলে তাৎক্ষণিক TypeError দেয়।`,
          code: `<?php
declare(strict_types=1);

function multiply(float $rate, int $qty): float {
    return $rate * $qty;
}

echo "Total Cost: " . multiply(45.50, 4);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Total Cost: 182`
        },
        {
          title: '২৩. Type Casting (ম্যানুয়াল টাইপ রূপান্তর)',
          explanationBn: `এক টাইপের ডেটাকে ইচ্ছাকৃতভাবে অন্য টাইপে রূপান্তর করার পদ্ধতিকে টাইপ কাস্টিং বলে। যেমন: (int), (string), (float), (bool), (array)।`,
          code: `<?php

$ageStr = "25";
$ageInt = (int) $ageStr;

var_dump($ageInt);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `int(25)`
        },
        {
          title: '২৪. Type Juggling (স্বয়ংক্রিয় টাইপ রূপান্তর)',
          explanationBn: `PHP প্রেক্ষাপট অনুযায়ী স্বয়ংক্রিয়ভাবে টাইপ কনভার্ট করে। যেমন স্ট্রিং "10" এর সাথে পূর্ণসংখ্যা ৫ যোগ করলে পিএইচপি নিজে থেকেই স্ট্রিংকে সংখ্যা বানিয়ে ১৫ তৈরি করে।`,
          code: `<?php

$number = "10";
$result = $number + 5;

var_dump($result);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `int(15)`
        },
        {
          title: '২৫. == বনাম === এর সাথে Data Type-এর সম্পর্ক',
          explanationBn: `• == (Loose comparison): টাইপ না দেখে শুধু মান তুলনা করে ("10" == 10 এটি true)।
• === (Strict comparison): মান এবং ডেটা টাইপ উভয়ই হুবহু এক হতে হবে ("10" === 10 এটি false)।
প্রফেশনাল কোডে সর্বদা === ব্যবহার করা নিরাপদ।`,
          code: `<?php

$value = "10";

echo "Loose (== 10): ";
var_dump($value == 10);
echo "<br>Strict (=== 10): ";
var_dump($value === 10);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৬. Boolean-এর Truthy / Falsy কনসেপ্ট',
          explanationBn: `কন্ডিশনের ভেতর কোন কোন মান false গণ্য হয়: false, 0, 0.0, "", "0", null, [] (খালি অ্যারে)। বাকি সকল মান truthy হিসেবে গণ্য হয়।`,
          code: `<?php

$name = "";

if ($name) {
    echo "Has value";
} else {
    echo "Empty string is falsy!";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Empty string is falsy!`
        },
        {
          title: '২৭. String Number বনাম Integer',
          explanationBn: `ফর্ম ইনপুট ($_POST/$_GET) থেকে আসা ডেটা সর্বদা স্ট্রিং হিসেবে আসে ("5")। তাই গাণিতিক হিসাব বা ডাটাবেসে সেভ করার আগে টাইপ যাচাই ও কনভার্ট করা উচিত।`,
          code: `<?php

$formInput = "5";
$directInt = 5;

echo "Form Input Type: " . gettype($formInput) . "<br>";
echo "Direct Integer Type: " . gettype($directInt);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৮. Real-World Example: Product Object Structure',
          explanationBn: `একটি বাস্তব পণ্যের বিভিন্ন বৈশিষ্ট্যে বিভিন্ন ডেটা টাইপের সমন্বয়:`,
          code: `<?php

$productName = "Laptop";   // string
$productPrice = 85000;     // integer
$productRating = 4.5;      // float
$isAvailable = true;       // boolean
$tags = ["Tech", "PC"];    // array

echo "Product: $productName ($productPrice BDT) | In Stock: " . ($isAvailable ? 'Yes' : 'No');
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৯. Real-World Example: User Profile Record',
          explanationBn: `ডাটাবেস ও সিস্টেম ইউজার রেকর্ড উপস্থাপনা:`,
          code: `<?php

$userId = 101;                    // integer
$userName = "Abbad";              // string
$userEmail = "abbad@gmail.com";   // string
$userAge = 25;                    // integer
$isVerified = true;               // boolean
$profileImage = null;             // NULL
$roles = ["user", "customer"];    // array

echo "User #$userId ($userName) - Verified: " . ($isVerified ? '✓' : '✗');
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩০. Real-World Example: E-Commerce Order Structure',
          explanationBn: `একটি কমপ্লিট ই-কমার্স অর্ডারের ডেটা মডেল:`,
          code: `<?php

$orderId = 1001;           // integer
$orderStatus = "pending";  // string
$orderTotal = 5999.50;     // float
$isPaid = false;           // boolean
$items = [                 // array of associative arrays
    ["product" => "Laptop", "quantity" => 1],
    ["product" => "Mouse", "quantity" => 2]
];

echo "Order #$orderId Status: $orderStatus | Items: " . count($items) . " | Total: $orderTotal BDT";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩১. Data Type এবং Database Mapping',
          explanationBn: `ডাটাবেসের টাইপের সাথে পিএইচপির ম্যাপিং:
• INT ➔ int
• VARCHAR / TEXT ➔ string
• DECIMAL ➔ float / string
• BOOLEAN / TINYINT(1) ➔ bool`,
          code: `<?php
echo "Database INT/VARCHAR maps directly to PHP int/string.";
?>`,
          codeLanguage: 'DB Mapping'
        },
        {
          title: '৩২. Data Type এবং REST API (JSON টাইপ সতর্কতা)',
          explanationBn: `API রেসপন্সে বুলিয়ান মানকে "true" স্ট্রিং হিসেবে পাঠালে ফ্রন্টএন্ডে বাগ তৈরি হয়। পিএইচপির বুলিয়ান সরাসরি true হিসেবে জেসনে রূপান্তর করা উচিত।`,
          code: `<?php

$apiPayload = [
    "id" => 101,
    "name" => "Abbad",
    "price" => 85000,
    "is_active" => true
];

header('Content-Type: application/json');
echo json_encode($apiPayload, JSON_PRETTY_PRINT);
?>`,
          codeLanguage: 'JSON Response'
        },
        {
          title: '৩৩. Data Type এবং json_encode() রূপান্তর',
          explanationBn: `পিএইচপি অ্যারে ও ডেটা টাইপকে ব্রাউজার ফ্রেন্ডলি JSON অবজেক্টে রূপান্তর:`,
          code: `<?php

$data = [
    "name" => "Abbad",
    "age" => 25,
    "isActive" => true,
    "skills" => ["PHP", "Laravel"]
];

echo json_encode($data);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩৪. Data Type এবং Security (Blind Trust পরিহার)',
          explanationBn: `ইউজারের ডেটা সরাসরি কাস্ট বা বিশ্বাস না করে ভ্যালিডেশন পাইপলাইন অনুসরণ করতে হবে:
Input ➔ Validate ➔ Normalize ➔ Type Handling ➔ Business Logic`,
          code: `<?php
$mockInput = "100";
$cleanInt = filter_var($mockInput, FILTER_VALIDATE_INT);

echo "Sanitized Integer: " . ($cleanInt !== false ? $cleanInt : 'Invalid');
?>`,
          codeLanguage: 'Security Pipeline'
        },
        {
          title: '৩৫. Data Type এবং Validation (filter_input)',
          explanationBn: `filter_input() দিয়ে টাইপ নিশ্চিত করা:`,
          code: `<?php

$mockQty = "4"; // ইনপুট
$quantity = filter_var($mockQty, FILTER_VALIDATE_INT);

if ($quantity === false || $quantity < 1) {
    echo "Invalid quantity provided.";
} else {
    echo "Validated Quantity: " . $quantity;
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩৬. Common Mistakes ও সমাধান',
          explanationBn: `১. $age = "25"; কে সংখ্যা ভাবা (এটি আসলে string)।
২. $value == 10 ব্যবহার করা (বরং $value === 10 নিরাপদ)।
৩. echo $users; লেখা (অ্যারে দেখতে print_r ব্যবহার করুন)।
৪. মানি ক্যালকুলেশনে ফ্লোটের সীমাবদ্ধতা না জেনে ভগ্নাংশ যোগ করা।`,
          code: `<?php
// Strict & Correct Handling
$rawAge = "25";
$validAge = (int) $rawAge;
echo "Properly casted integer: " . $validAge;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩৭. Professional Developer-এর মানসিক মডেল',
          explanationBn: `একজন সাধারণ ডেভেলপার শুধু টাইপ মুখস্থ করে। কিন্তু একজন সিনিয়র ইঞ্জিনিয়ার চিন্তা করেন: ডেটা কোথা থেকে এসেছে? ভ্যালিডেট হয়েছে কি না? এটি কোথায় যাবে এবং কোন টাইপে রূপান্তর প্রয়োজন?`,
          code: `<?php
echo "Professional Mindset: Architecture, Flow, and Security over plain syntax.";
?>`,
          codeLanguage: 'Career Mindset'
        },
        {
          title: '৩৮. কোন Data Type সবচেয়ে বেশি ব্যবহার হয়?',
          explanationBn: `বাস্তব অ্যাপ্লিকেশনে ব্যবহারের ক্রম:
১. String
২. Integer
৩. Boolean
৪. Array
৫. Object
৬. NULL
৭. Float`,
          code: `<?php
echo "String, Integer, Boolean, Array, Object and NULL are the pillars of modern PHP.";
?>`,
          codeLanguage: 'PHP Summary'
        },
        {
          title: '৩৯. সারসংক্ষেপ ও মনে রাখার চেকলিস্ট',
          explanationBn: `পিএইচপি ডাইনামিকালি টাইপড হলেও টাইপের সচেতনতা বাগ প্রতিরোধে সবচেয়ে বেশি ভূমিকা রাখে।
পরীক্ষা করার কমান্ড: var_dump(), gettype(), is_string(), is_int(), is_bool(), is_array(), is_null()।
টাইপ কাস্টিং: (int), (string), (float), (bool), (array)।
তুলনা: সর্বদা === (Strict) প্রেফার করুন।`,
          code: `<?php

$typeMastery = true;
echo "Data Types topic completed successfully. Status: " . ($typeMastery ? 'Mastered' : 'Pending');
?>`,
          codeLanguage: 'PHP Live Code'
        }
      ],
      keyPointsBn: [
        'প্রধান ৮টি ডেটা টাইপ: String, Integer, Float, Boolean, Array, Object, NULL, Resource।',
        'var_dump() ডেটা টাইপ, সাইজ ও মান নিখুঁতভাবে ডিবাগিং করার সবচেয়ে শক্তিশালী টুল।',
        'লুজ (==) টাইপ কনভার্ট করে ফেলে, স্ট্রিক্ট (===) মান ও টাইপ উভয়ই হুবহু মেলায়।',
        'declare(strict_types=1); ব্যবহার করে আধুনিক পিএইচপিতে কঠোর টাইপ নিরাপত্তা নিশ্চিত করা যায়।',
        'আর্থিক হিসাবে ফ্লোটিং পয়েন্টের প্রিসিশন ইস্যু এড়াতে সেন্ট বা পয়সা (Integer) হিসেবে গণনা করা উত্তম।'
      ],
      practiceExamples: [
        {
          title: 'উদাহরণ ১: টাইপ সেফ ফাংশন ও ক্যালকুলেটর (Strict Types)',
          descriptionBn: 'PHP 8 টাইপ হিন্ট ও রিটার্ন টাইপ এনফোর্সমেন্টের বাস্তব উদাহরণ।',
          code: `<?php
declare(strict_types=1);

/**
 * পণ্যমূল্য এবং ডিসকাউন্ট হিসাব
 */
function computeNetPayable(int $unitPrice, int $quantity, float $taxRate = 0.075): float {
    $subtotal = $unitPrice * $quantity;
    $tax = $subtotal * $taxRate;
    return (float) ($subtotal + $tax);
}

$pricePerUnit = 2400;
$itemCount = 3;
$finalPayable = computeNetPayable($pricePerUnit, $itemCount, 0.05);

echo "Unit Price: $pricePerUnit BDT<br>";
echo "Quantity: $itemCount<br>";
echo "Total Payable with 5% Tax: <b>{$finalPayable} BDT</b>";
?>`
        },
        {
          title: 'উদাহরণ ২: API পে-লোড এবং মাল্টিপল ডেটা টাইপ পরিদর্শন',
          descriptionBn: 'ইউজার অবজেক্ট, অ্যারে, বুলিয়ান ও নাল ভ্যালুর লাইভ জেসন রূপান্তর ও টাইপ চেক।',
          code: `<?php
$userPayload = [
    "user_id" => 502,
    "username" => "abbad_engineer",
    "is_premium" => true,
    "credits" => 1250.75,
    "badges" => ["Contributor", "Early Adopter"],
    "suspended_at" => null
];

echo "<h3>JSON Payload Generated:</h3>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px;'>";
echo json_encode($userPayload, JSON_PRETTY_PRINT);
echo "</pre>";

echo "<h4>Data Type Verification:</h4>";
echo "is_premium is boolean? " . (is_bool($userPayload['is_premium']) ? 'Yes' : 'No') . "<br>";
echo "credits is float? " . (is_float($userPayload['credits']) ? 'Yes' : 'No') . "<br>";
echo "suspended_at is null? " . (is_null($userPayload['suspended_at']) ? 'Yes' : 'No');
?>`
        }
      ]
    }
  },
  {
    id: 'php-strings',
    title: 'PHP Strings',
    category: 'basic',
    tag: 'Text Processing',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP String কী, Single vs Double quotes, ৬৪+ স্ট্রিং ফাংশনস, সিকিউরিটি, স্লাগ জেনারেশন ও ইউনিকোড।',
    sampleCode: `<?php
// ১. স্ট্রিং প্রিপারেশন ও ক্লিনিং
$productName = "   Gaming Laptop Pro 16   ";
$cleanTitle = trim($productName);

// ২. SEO ফ্রেন্ডলি স্লাগ তৈরি
$slug = strtolower($cleanTitle);
$slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
$slug = trim($slug, '-');

// ৩. ইউনিকোড ও বাংলা সাপোর্ট (mb_strlen)
$banglaDesc = "উন্নতমানের গেমিং ল্যাপটপ";
$charCount = mb_strlen($banglaDesc, 'UTF-8');

// ৪. ফরম্যাটিং ও নিরাপদ আউটপুট
$price = 145000.50;
$formattedPrice = number_format($price, 2);

echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 6px 0; color:#0f172a;'>" . htmlspecialchars($cleanTitle, ENT_QUOTES, 'UTF-8') . "</h3>";
echo "<p style='margin:4px 0; color:#475569;'><b>Slug:</b> /products/{$slug}</p>";
echo "<p style='margin:4px 0; color:#16a34a; font-weight:bold;'><b>Price:</b> {$formattedPrice} BDT</p>";
echo "<p style='margin:4px 0; color:#64748b; font-size:13px;'>বাংলা বিবরণী অক্ষর সংখ্যা: {$charCount}</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `String হলো text বা character-এর sequence। PHP application-এ String সবচেয়ে বেশি ব্যবহৃত data type-গুলোর একটি (User Name, Email, Phone, Slug, Error Message, HTML Content ইত্যাদি)। নিচে প্রতিটি স্ট্রিং মেকানিজম, লাইভ কোড ও বাস্তব জীবনের সিকিউর ব্যবহারের ধারাবাহিক পাঠ দেওয়া হলো:`,
      lessonSections: [
        {
          title: '১. STRING কী? (Text Data)',
          explanationBn: `String হলো টেক্সট ডেটা। এটি Single quote ('...') বা Double quote ("...") উভয় ভাবেই ডিফাইন করা যায়।`,
          code: `<?php

$nameSingle = 'Abbad';
$nameDouble = "Abbad";

echo "Single: " . $nameSingle . "<br>";
echo "Double: " . $nameDouble;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Single: Abbad\nDouble: Abbad`
        },
        {
          title: '২. Single Quote বনাম Double Quote (Interpolation)',
          explanationBn: `• Single Quote: ভেরিয়েবলকে পার্স করে না, সরাসরি ডলার চিহ্নসহ প্রিন্ট করে ('Hello $name')।
• Double Quote: ভেরিয়েবলের মান স্বয়ংক্রিয়ভাবে প্রতিস্থাপন করে ("Hello $name")।
জটিল এক্সপ্রেশনের ক্ষেত্রে "Hello {$name}" স্টাইল সবচেয়ে বেশি রিডেবল ও নিরাপদ।`,
          code: `<?php

$name = "Abbad";

echo 'Single quote: Hello $name<br>';
echo "Double quote: Hello $name<br>";
echo "Clean curly style: Hello {$name}!";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Single quote: Hello $name\nDouble quote: Hello Abbad\nClean curly style: Hello Abbad!`
        },
        {
          title: '৩. String Concatenation (. অপারেটর)',
          explanationBn: `দুটি বা তার বেশি স্ট্রিং একসাথে জোড়া লাগাতে ডট (.) অপারেটর ব্যবহার করা হয়।`,
          code: `<?php

$firstName = "Abbad";
$lastName = "Khan";

$fullName = $firstName . " " . $lastName;
echo "Full Name: " . $fullName;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Full Name: Abbad Khan`
        },
        {
          title: '৪. strlen() — ক্যারেক্টার দৈর্ঘ্য বের করা',
          explanationBn: `String-এর মোট দৈর্ঘ্য বের করতে strlen() ব্যবহৃত হয়। তবে মনে রাখবেন strlen() বাইট কাউন্ট করে। ইংরেজি অক্ষরের জন্য প্রতিটি অক্ষর ১ বাইট।`,
          code: `<?php

$password = "secret123";

echo "Password Length: " . strlen($password) . "<br>";

if (strlen($password) >= 8) {
    echo "✓ Valid password length (8+ characters)";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Password Length: 9\n✓ Valid password length (8+ characters)`
        },
        {
          title: '৫. mb_strlen() — ইউনিকোড ও বাংলা টেক্সট হ্যান্ডলিং',
          explanationBn: `বাংলা বা আরবি ইউনিকোড অক্ষরে ১টি অক্ষরের জন্য ৩ বা ৪ বাইট লাগতে পারে। তাই বাংলা লেখার সঠিক ক্যারেক্টার কাউন্ট জানতে mb_strlen() ব্যবহার করতে হয়।`,
          code: `<?php

$text = "বাংলাদেশ";

echo "strlen (বাইট কাউন্ট): " . strlen($text) . " bytes<br>";
echo "mb_strlen (আসল অক্ষর): " . mb_strlen($text, 'UTF-8') . " characters";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `strlen (বাইট কাউন্ট): 24 bytes\nmb_strlen (আসল অক্ষর): 8 characters`
        },
        {
          title: '৬. strtolower() — ছোট হাতের অক্ষরে রূপান্তর',
          explanationBn: `স্ট্রিংয়ের সমস্ত ইংরেজি বর্ণমালা ছোট হাতের (lowercase) করতে strtolower() ব্যবহৃত হয়। ইমেইল নর্মালাইজেশন ও অনুসন্ধানের জন্য এটি অপরিহার্য।`,
          code: `<?php

$rawEmail = "ABBAD.DEV@GMAIL.COM";
$cleanEmail = strtolower(trim($rawEmail));

echo "Normalized Email: " . $cleanEmail;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Normalized Email: abbad.dev@gmail.com`
        },
        {
          title: '৭. strtoupper() — বড় হাতের অক্ষরে রূপান্তর',
          explanationBn: `স্ট্রিংয়ের সব বর্ণকে বড় হাতের (UPPERCASE) করতে strtoupper() ব্যবহার করা হয়। যেমন স্ট্যাটাস কোড (PENDING, PAID, SHIPPED)।`,
          code: `<?php

$status = "pending";
echo "Order Status Badge: [" . strtoupper($status) . "]";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Order Status Badge: [PENDING]`
        },
        {
          title: '৮. ucfirst() — প্রথম বর্ণ বড় হাতের করা',
          explanationBn: `কোনো স্ট্রিংয়ের শুধুমাত্র প্রথম বর্ণটিকে বড় হাতের (Capitalized) করতে ucfirst() ব্যবহৃত হয়।`,
          code: `<?php

$role = "developer";
echo "Title: " . ucfirst($role);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Title: Developer`
        },
        {
          title: '৯. lcfirst() — প্রথম বর্ণ ছোট হাতের করা',
          explanationBn: `কোনো স্ট্রিংয়ের প্রথম অক্ষর ছোট হাতের করতে lcfirst() ব্যবহৃত হয়।`,
          code: `<?php

$module = "AuthService";
echo lcfirst($module);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `authService`
        },
        {
          title: '১০. ucwords() — প্রতিটি শব্দের প্রথম বর্ণ বড় হাতের করা',
          explanationBn: `একটি বাক্যের প্রতিটি আলাদা শব্দের প্রথম অক্ষর বড় হাতের করতে ucwords() ব্যবহার করা হয়। যেমন ব্যবহারকারীর পূর্ণ নাম সুন্দর করে ফরম্যাট করা।`,
          code: `<?php

$rawName = "abbad ibn bishr";
echo "Formatted Name: " . ucwords($rawName);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Formatted Name: Abbad Ibn Bishr`
        },
        {
          title: '১১. trim() — শুরু ও শেষের অতিরিক্ত স্পেস অপসারণ',
          explanationBn: `ইউজারের ফর্ম সাবমিশন থেকে শুরু বা শেষের অপ্রয়োজনীয় ফাঁকা জায়গা (whitespace) দূর করতে trim() সবচেয়ে বেশি ব্যবহৃত হয়।`,
          code: `<?php

$userInput = "   abbad@gmail.com   ";
$sanitized = trim($userInput);

echo "Original: [" . $userInput . "]<br>";
echo "Trimmed: [" . $sanitized . "]";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Original: [   abbad@gmail.com   ]\nTrimmed: [abbad@gmail.com]`
        },
        {
          title: '১২. ltrim() ও rtrim() — নির্দিষ্ট দিক থেকে ট্রিম করা',
          explanationBn: `• ltrim(): শুধুমাত্র বাম বা শুরু থেকে স্পেস মুছে ফেলে।
• rtrim(): শুধুমাত্র ডান বা শেষ থেকে স্পেস মুছে ফেলে।`,
          code: `<?php

$leftSpaced = "   Hello";
$rightSpaced = "World   ";

echo "Left trim: [" . ltrim($leftSpaced) . "]<br>";
echo "Right trim: [" . rtrim($rightSpaced) . "]";
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '১৩. str_replace() — শব্দ বা অক্ষর প্রতিস্থাপন',
          explanationBn: `একটি স্ট্রিংয়ের নির্দিষ্ট শব্দকে অন্য শব্দ দিয়ে রিপ্লেস করতে str_replace(search, replace, subject) ব্যবহৃত হয়।`,
          code: `<?php

$text = "Hello World";
$updated = str_replace("World", "PHP", $text);

echo $updated;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello PHP`
        },
        {
          title: '১৪. str_replace() দিয়ে বেসিক স্লাগ তৈরি',
          explanationBn: `স্পেসের জায়গায় হাইফেন (-) বসিয়ে URL-বান্ধব স্লাগ তৈরির সাধারণ উদাহরণ:`,
          code: `<?php

$title = "PHP Web Development";
$slug = str_replace(" ", "-", strtolower($title));

echo "Generated Slug: " . $slug;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Generated Slug: php-web-development`
        },
        {
          title: '১৫. str_ireplace() — কেস-ইনসেনসিটিভ রিপ্লেসমেন্ট',
          explanationBn: `str_replace() ছোট বা বড় হাতের অক্ষরের পার্থক্য করে। কিন্তু str_ireplace() অক্ষর ছোট বা বড় যাই হোক না কেন প্রতিস্থাপন করে দেয়।`,
          code: `<?php

$text = "I love php and PHP frameworks.";
$result = str_ireplace("php", "Laravel", $text);

echo $result;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `I love Laravel and Laravel frameworks.`
        },
        {
          title: '১৬. substr() — স্ট্রিংয়ের নির্দিষ্ট অংশ কাটা',
          explanationBn: `substr(string, start, length) দিয়ে স্ট্রিংয়ের যেকোনো অংশ কেটে নেওয়া যায়। বড় আর্টিকেলের সারাংশ তৈরিতে এটি ব্যবহৃত হয়।`,
          code: `<?php

$description = "This is a premium high performance developer laptop with OLED display.";
$preview = substr($description, 0, 32) . "...";

echo "Preview: " . $preview;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Preview: This is a premium high performa...`
        },
        {
          title: '১৭. mb_substr() — ইউনিকোড বা বাংলায় সাবস্ট্রিং কাটা',
          explanationBn: `বাংলা বা ইউনিকোড টেক্সট কাটার সময় ক্যারেক্টার ভেঙে যাওয়া রোধ করতে mb_substr() ব্যবহার করা বাধ্যতামূলক।`,
          code: `<?php

$bengaliNotice = "বাংলাদেশ আমার সোনার দেশ";
$short = mb_substr($bengaliNotice, 0, 8, 'UTF-8');

echo "বাংলা প্রিভিউ: " . $short;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `বাংলা প্রিভিউ: বাংলাদেশ`
        },
        {
          title: '১৮. strpos() — কোনো শব্দের প্রথম পজিশন খোঁজা',
          explanationBn: `স্ট্রিংয়ের ভেতরে কোনো শব্দ বা ক্যারেক্টার কোন পজিশনে রয়েছে তা ইনডেক্স আকারে রিটার্ন করে।
গুরুত্বপূর্ণ: শব্দটি না পাওয়া গেলে false রিটার্ন করে। তাই সর্বদা !== false দিয়ে চেক করতে হবে (কারণ প্রথম অক্ষর ০ হতে পারে)।`,
          code: `<?php

$email = "abbad@gmail.com";
$atPos = strpos($email, "@");

echo "@ Character Position: " . $atPos . "<br>";

if (strpos($email, "@") !== false) {
    echo "✓ Valid email structure confirmed.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `@ Character Position: 5\n✓ Valid email structure confirmed.`
        },
        {
          title: '১৯. stripos() — কেস-ইনসেনসিটিভ সার্চ',
          explanationBn: `অক্ষরের ছোট-বড় পার্থক্য উপেক্ষা করে কোনো শব্দের অবস্থান খুঁজতে stripos() ব্যবহৃত হয়।`,
          code: `<?php

$text = "Mastering Modern PHP 8.2";

if (stripos($text, "php") !== false) {
    echo "Found 'php' regardless of case sensitivity!";
}
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২০. strrpos() — শব্দের শেষ পজিশন খোঁজা',
          explanationBn: `একটি স্ট্রিংয়ে একই শব্দ একাধিকবার থাকলে সর্বশেষ কোন জায়গায় এসেছে তার ইনডেক্স দেয় strrpos()। ফাইলের পাথ ও এক্সটেনশন নির্ণয়ে এটি কার্যকর।`,
          code: `<?php

$path = "uploads/images/2026/profile.avatar.jpg";
$lastDot = strrpos($path, ".");

echo "Extension index: " . $lastDot . "<br>";
echo "File extension: " . substr($path, $lastDot + 1);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Extension index: 35\nFile extension: jpg`
        },
        {
          title: '২১. str_contains() — স্ট্রিংয়ের মধ্যে শব্দ আছে কি না চেক (PHP 8+)',
          explanationBn: `PHP 8 এর আধুনিক ফাংশন str_contains() সত্য বা মিথ্যা (true/false) রিটার্ন করে। এটি কোডকে strpos() এর চেয়ে অনেক বেশি পাঠযোগ্য করে তোলে।`,
          code: `<?php

$message = "Your order #108 has been shipped successfully.";

if (str_contains($message, "shipped")) {
    echo "✓ Package is on the way!";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `✓ Package is on the way!`
        },
        {
          title: '২২. str_starts_with() — শুরু হয়েছে কি না চেক (PHP 8+)',
          explanationBn: `স্ট্রিং নির্দিষ্ট কোনো প্রিফিক্স দিয়ে শুরু হয়েছে কি না তা দ্রুত যাচাই করতে str_starts_with() ব্যবহৃত হয়।`,
          code: `<?php

$url = "https://secure.example.com";

if (str_starts_with($url, "https://")) {
    echo "✓ Secure HTTPS Protocol detected.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `✓ Secure HTTPS Protocol detected.`
        },
        {
          title: '২৩. str_ends_with() — শেষ হয়েছে কি না চেক (PHP 8+)',
          explanationBn: `স্ট্রিং নির্দিষ্ট কোনো শব্দ বা এক্সটেনশন দিয়ে শেষ হয়েছে কি না তা চেক করতে str_ends_with() ব্যবহৃত হয়।`,
          code: `<?php

$fileName = "document_report.pdf";

if (str_ends_with($fileName, ".pdf")) {
    echo "✓ PDF document format verified.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `✓ PDF document format verified.`
        },
        {
          title: '২৪. explode() — স্ট্রিংকে ভেঙে অ্যারে বানানো',
          explanationBn: `কমা বা যেকোনো ডেলিমিটারের উপর ভিত্তি করে একটি স্ট্রিংকে টুকরো টুকরো করে অ্যারেতে রূপান্তর করতে explode() ব্যবহৃত হয়।`,
          code: `<?php

$skillsCsv = "PHP,Laravel,MySQL,JavaScript";
$skillsArray = explode(",", $skillsCsv);

echo "Total Skills: " . count($skillsArray) . "<br>";
echo "First Skill: " . $skillsArray[0];
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Total Skills: 4\nFirst Skill: PHP`
        },
        {
          title: '২৫. implode() — অ্যারেকে জোড়া লাগিয়ে স্ট্রিং বানানো',
          explanationBn: `একটি অ্যারের উপাদানগুলোকে যেকোনো সেপারেটর দিয়ে জোড়া লাগিয়ে একক স্ট্রিং তৈরি করতে implode() ব্যবহৃত হয়।`,
          code: `<?php

$tags = ["Tech", "Programming", "AI", "Cloud"];
$formattedString = implode(" | ", $tags);

echo "Tags Display: " . $formattedString;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Tags Display: Tech | Programming | AI | Cloud`
        },
        {
          title: '২৬. explode() + implode() কম্বিনেশন (ডেটা ক্লিনিং)',
          explanationBn: `ইউজারের কমা সেপারেটেড ইনপুট থেকে প্রতিটি ট্যাগ ট্রিম করে পুনরায় পরিচ্ছন্ন স্ট্রিং বানানোর বাস্তব প্যাটার্ন:`,
          code: `<?php

$rawInput = "PHP ,  Laravel  ,  MySQL , VueJS ";
$tags = explode(",", $rawInput);
$cleanTags = array_map('trim', $tags);
$finalOutput = implode(", ", $cleanTags);

echo "Cleaned Tags: " . $finalOutput;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Cleaned Tags: PHP, Laravel, MySQL, VueJS`
        },
        {
          title: '২৭. str_split() — প্রতিটি ক্যারেক্টারকে অ্যারেতে ভাগ করা',
          explanationBn: `একটি শব্দকে প্রতিটি অক্ষরের আলাদা উপাদানে ভাগ করে অ্যারে বানাতে str_split() ব্যবহৃত হয়।`,
          code: `<?php

$code = "REACT";
$letters = str_split($code);

echo "Array elements: " . implode("-", $letters);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Array elements: R-E-A-C-T`
        },
        {
          title: '২৮. str_repeat() — স্ট্রিং পুনরাবৃত্তি করা',
          explanationBn: `যেকোনো স্ট্রিংকে নির্দিষ্ট সংখ্যক বার রিপিট করতে str_repeat() ব্যবহার করা হয়। CLI বা টার্মিনাল ডিভাইডারে এটি খুব কাজের।`,
          code: `<?php

echo str_repeat("=", 30) . "<br>";
echo "PHP ARCHITECTURE LOG<br>";
echo str_repeat("=", 30);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২৯. str_pad() — প্যাডিং দিয়ে নির্দিষ্ট দৈর্ঘ্য পূরণ করা',
          explanationBn: `ইনভয়েস বা অর্ডার নাম্বারের শুরুতে শূন্য যোগ করে সমান দৈর্ঘ্য করতে str_pad() ব্যবহৃত হয়।`,
          code: `<?php

$orderNumber = "128";
$formattedInvoice = str_pad($orderNumber, 8, "0", STR_PAD_LEFT);

echo "Invoice ID: #" . $formattedInvoice;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Invoice ID: #00000128`
        },
        {
          title: '৩০. str_shuffle() — ক্যারেক্টার এলোমেলো করা (সতর্কতা)',
          explanationBn: `স্ট্রিংয়ের অক্ষরকে র‍্যান্ডম অর্ডারে সাজাতে str_shuffle() ব্যবহৃত হয়।
গুরুত্বপূর্ণ সতর্কতা: পাসওয়ার্ড বা সিকিউরিটি টোকেন তৈরিতে str_shuffle() ব্যবহার করা সম্পূর্ণ নিষেধ! ক্রিপ্টোগ্রাফিক টোকেনের জন্য random_bytes() ব্যবহার করতে হবে।`,
          code: `<?php

$pool = "ABCDEF123456";
echo "Shuffled test string: " . str_shuffle($pool);
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩১. strrev() — স্ট্রিং উল্টানো',
          explanationBn: `স্ট্রিংকে বিপরীত দিক থেকে সাজাতে strrev() ব্যবহৃত হয়।`,
          code: `<?php

$word = "Level";
echo "Reversed: " . strrev(strtolower($word));
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Reversed: level`
        },
        {
          title: '৩২. str_word_count() — মোট শব্দ গণনা',
          explanationBn: `ইংরেজি অনুচ্ছেদে মোট শব্দের সংখ্যা গণনা করতে str_word_count() ব্যবহৃত হয়।`,
          code: `<?php

$article = "PHP is a modern and expressive programming language.";
echo "Total words: " . str_word_count($article);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Total words: 8`
        },
        {
          title: '৩৩. substr_count() — কোনো শব্দের উপস্থিতি গণনা',
          explanationBn: `একটি স্ট্রিংয়ে কোনো নির্দিষ্ট শব্দ বা কি-ওয়ার্ড কতবার এসেছে তা বের করতে substr_count() ব্যবহৃত হয়।`,
          code: `<?php

$content = "Learn PHP. Practice PHP. Master modern PHP.";
$count = substr_count($content, "PHP");

echo "Keyword 'PHP' appears: " . $count . " times.";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Keyword 'PHP' appears: 3 times.`
        },
        {
          title: '৩৪. sprintf() — ফরম্যাটেড স্ট্রিং তৈরি',
          explanationBn: `প্লেসহোল্ডার (%s, %d, %f) ব্যবহার করে ক্লিন ফরম্যাটেড স্ট্রিং তৈরি করতে sprintf() ব্যবহৃত হয়। এটি কোডের মান উন্নত করে।`,
          code: `<?php

$userName = "Abbad";
$points = 450;
$discount = 12.5;

$msg = sprintf("User %s has %d loyalty points (Save %.1f%%).", $userName, $points, $discount);
echo $msg;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `User Abbad has 450 loyalty points (Save 12.5%).`
        },
        {
          title: '৩৫. printf() — সরাসরি ফরম্যাটেড আউটপুট প্রিন্ট',
          explanationBn: `sprintf() স্ট্রিং রিটার্ন করে, আর printf() সরাসরি ব্রাউজার বা কনসোলে প্রিন্ট করে দেয়।`,
          code: `<?php

$product = "Ultrabook";
$price = 85000;

printf("Item: %s | Payable: %d BDT", $product, $price);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Item: Ultrabook | Payable: 85000 BDT`
        },
        {
          title: '৩৬. number_format() — সংখ্যাকে মানি ফরম্যাটে রূপান্তর',
          explanationBn: `টাকার অংক কমা ও দশমিক দিয়ে সুন্দরভাবে পরিবেশন করতে number_format(number, decimals) ব্যবহৃত হয়।`,
          code: `<?php

$totalSales = 1250000.75;

echo "Formatted Sales: " . number_format($totalSales, 2) . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Formatted Sales: 1,250,000.75 BDT`
        },
        {
          title: '৩৭. str_replace() দিয়ে বেসিক স্লাগ ও সীমাবদ্ধতা',
          explanationBn: `সাধারণ টেক্সটে str_replace(" ", "-", strtolower($title)) কাজ করলেও স্পেশাল ক্যারেক্টার ও ডাবল হাইফেন হ্যান্ডেল করতে রেজেক্সের প্রয়োজন হয়।`,
          code: `<?php

$title = "Mastering PHP in 2026";
$basicSlug = str_replace(" ", "-", strtolower($title));
echo "Basic slug: " . $basicSlug;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৩৮. preg_replace() — রেজেক্স দিয়ে উন্নত স্ট্রিং ক্লিনিং',
          explanationBn: `একাধিক ফাঁকা স্পেসকে একটি সিঙ্গেল স্পেসে নামিয়ে আনা বা স্পেশাল ক্যারেক্টার মুছে ফেলতে রেজেক্স রিপ্লেস সবচেয়ে শক্তিশালী।`,
          code: `<?php

$messyString = "Hello     PHP      Engineers!";
$cleanString = preg_replace('/\\s+/', ' ', $messyString);

echo $cleanString;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello PHP Engineers!`
        },
        {
          title: '৩৯. preg_match() — প্যাটার্ন ভ্যালিডেশন',
          explanationBn: `স্ট্রিং কোনো নির্দিষ্ট ফরম্যাট বা প্যাটার্ন মেনে চলছে কি না তা নিশ্চিত করতে preg_match() ব্যবহৃত হয়।`,
          code: `<?php

$zipCode = "1207";

if (preg_match('/^\\d{4}$/', $zipCode)) {
    echo "✓ Valid 4-digit postal zip code.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `✓ Valid 4-digit postal zip code.`
        },
        {
          title: '৪০. strcasecmp() ও strcmp() — স্ট্রিং তুলনা',
          explanationBn: `• strcmp(): কেস-সেনসিটিভ তুলনা (০ মানে হুবহু সমান)।
• strcasecmp(): কেস-ইনসেনসিটিভ তুলনা।
সাধারণ সমতার ক্ষেত্রে $a === $b বেশি রিডেবল।`,
          code: `<?php

$a = "PHP";
$b = "php";

echo "strcasecmp result: " . (strcasecmp($a, $b) === 0 ? "Match" : "Different");
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `strcasecmp result: Match`
        },
        {
          title: '৪১. strtr() — একাধিক ক্যারেক্টার ম্যাপিং ও ট্রান্সলেশন',
          explanationBn: `ম্যাপিং অ্যারের সাহায্যে একসাথে একাধিক শব্দ প্রতিস্থাপন করতে strtr() ব্যবহৃত হয়।`,
          code: `<?php

$template = "Hello {name}, your role is {role}.";
$result = strtr($template, [
    "{name}" => "Abbad",
    "{role}" => "Senior Architect"
]);

echo $result;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Hello Abbad, your role is Senior Architect.`
        },
        {
          title: '৪২. wordwrap() — নির্দিষ্ট দৈর্ঘ্যে টেক্সট ভেঙে লাইন তৈরি',
          explanationBn: `দীর্ঘ টেক্সটকে নির্দিষ্ট ক্যারেক্টার পর পর ভেঙে নতুন লাইনে আনতে wordwrap() ব্যবহৃত হয় (যেমন ইমেইল বডি বা চালানের নোট)।`,
          code: `<?php

$text = "PHP is a widely-used open source general-purpose scripting language.";
echo nl2br(wordwrap($text, 25, "\n"));
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৪৩. nl2br() — নিউলাইনকে <br> ট্যাগে রূপান্তর',
          explanationBn: `টেক্সটএরিয়ার মাল্টিলাইন টেক্সটের \\n কে ব্রাউজারে দৃশ্যমান করতে HTML <br> ট্যাগে রূপান্তর করে nl2br()।
নিরাপত্তা সতর্কতা: XSS এড়াতে প্রথমে htmlspecialchars() তারপর nl2br() ব্যবহার করতে হবে।`,
          code: `<?php

$userBio = "Line 1: Software Engineer\nLine 2: Dhaka, Bangladesh";
$safeBio = nl2br(htmlspecialchars($userBio, ENT_QUOTES, 'UTF-8'));

echo $safeBio;
?>`,
          codeLanguage: 'Security Best Practice'
        },
        {
          title: '৪৪. htmlspecialchars() — XSS সিকিউরিটির প্রধান স্তম্ভ',
          explanationBn: `ইউজারের ডেটা সরাসরি ব্রাউজারে দেখানো মারাত্মক ঝুঁকিপূর্ণ। <, >, &, ", ' কে HTML entity তে রূপান্তর করে htmlspecialchars(string, ENT_QUOTES, 'UTF-8')।`,
          code: `<?php

$maliciousInput = "<script>alert('XSS Hack')</script>";
$escaped = htmlspecialchars($maliciousInput, ENT_QUOTES, 'UTF-8');

echo "Safely Rendered Text: " . $escaped;
?>`,
          codeLanguage: 'Security Critical',
          outputPreview: `Safely Rendered Text: &lt;script&gt;alert('XSS Hack')&lt;/script&gt;`
        },
        {
          title: '৪৫. htmlspecialchars() বনাম strip_tags()',
          explanationBn: `strip_tags() ট্যাগগুলো মুছে ফেলে, কিন্তু সব ধরনের সিকিউরিটি অ্যাটাক ঠেকাতে পারে না। তাই ব্রাউজারে নিরাপদ প্রদর্শনের জন্য htmlspecialchars() স্ট্যান্ডার্ড।`,
          code: `<?php

$raw = "<b>Bold Notice</b> with special & chars.";

echo "strip_tags: " . strip_tags($raw) . "<br>";
echo "htmlspecialchars: " . htmlspecialchars($raw, ENT_QUOTES, 'UTF-8');
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৪৬. addslashes() বনাম PDO Prepared Statements (SQL Injection)',
          explanationBn: `মারাত্মক ভুল ধারণা: addslashes() দিয়ে SQL Injection ঠেকানো যায় না!
ডাটাবেস কুয়েরির নিরাপত্তার জন্য সর্বদা PDO Prepared Statement ব্যবহার করতে হবে।`,
          code: `<?php
// কখনোই এভাবে কুয়েরি লিখবেন না:
// $sql = "SELECT * FROM users WHERE name = '" . addslashes($name) . "'";

echo "Rule: Use PDO Prepared Statements (:parameter), NEVER addslashes() for SQL queries.";
?>`,
          codeLanguage: 'Architecture Warning'
        },
        {
          title: '৪৭. Context-Specific Escaping (HTML vs SQL vs URL)',
          explanationBn: `প্রতিটি প্রেক্ষাপটে ভিন্ন ভিন্ন সিকিউরিটি রুল প্রযোজ্য:
• HTML Context ➔ htmlspecialchars()
• SQL Database ➔ PDO Prepared Statements
• URL Parameters ➔ urlencode() / http_build_query()
• JavaScript Context ➔ json_encode()`,
          code: `<?php
echo "Golden Rule: Always escape according to the destination context.";
?>`,
          codeLanguage: 'Security Concept'
        },
        {
          title: '৪৮. urlencode() — URL প্যারামিটার এনকোড করা',
          explanationBn: `URL-এর query string-এ স্পেস বা স্পেশাল ক্যারেক্টার নিরাপদ করতে urlencode() ব্যবহৃত হয়।`,
          code: `<?php

$searchQuery = "PHP 8 & Laravel 11";
$targetUrl = "search.php?q=" . urlencode($searchQuery);

echo "Encoded URL: " . $targetUrl;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Encoded URL: search.php?q=PHP+8+%26+Laravel+11`
        },
        {
          title: '৪৯. rawurlencode() — RFC 3986 স্ট্যান্ডার্ড ইউআরএল এনকোডিং',
          explanationBn: `URL পাথ সেগমেন্টের জন্য rawurlencode() ব্যবহার করা হয়, যা স্পেসকে '+' এর বদলে '%20' দিয়ে এনকোড করে।`,
          code: `<?php

$folder = "My Documents";
echo "Raw URL encoded: " . rawurlencode($folder);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Raw URL encoded: My%20Documents`
        },
        {
          title: '৫০. http_build_query() — অ্যারে থেকে কুয়েরি স্ট্রিং তৈরি',
          explanationBn: `একটি অ্যারের সকল প্যারামিটারকে স্বয়ংক্রিয়ভাবে এনকোড করে পূর্ণাঙ্গ URL Query String বানাতে http_build_query() ব্যবহৃত হয়। এটি API কলে অপরিহার্য।`,
          code: `<?php

$params = [
    "search" => "Gaming Laptop",
    "page" => 2,
    "sort" => "price_asc",
    "in_stock" => 1
];

$queryString = http_build_query($params);
echo "Generated Query: " . $queryString;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Generated Query: search=Gaming+Laptop&page=2&sort=price_asc&in_stock=1`
        },
        {
          title: '৫১. json_encode() — অ্যারে থেকে JSON স্ট্রিং তৈরি',
          explanationBn: `PHP অ্যারে বা অবজেক্টকে এপিআই রেসপন্সের উপযোগী JSON স্ট্রিংয়ে রূপান্তর করতে json_encode() ব্যবহৃত হয়।`,
          code: `<?php

$apiData = [
    "status" => 200,
    "user" => "Abbad",
    "roles" => ["Admin", "Maintainer"]
];

echo json_encode($apiData);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `{"status":200,"user":"Abbad","roles":["Admin","Maintainer"]}`
        },
        {
          title: '৫২. json_decode() — JSON স্ট্রিং থেকে PHP ডেটা তৈরি',
          explanationBn: `বাহ্যিক এপিআই থেকে আসা JSON স্ট্রিংকে পিএইচপি Associative Array তে রূপান্তর করতে json_decode(json, true) ব্যবহৃত হয়।`,
          code: `<?php

$jsonPayload = '{"name":"Abbad","country":"Bangladesh"}';
$decoded = json_decode($jsonPayload, true);

echo "Decoded Name: " . $decoded['name'] . " (" . $decoded['country'] . ")";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Decoded Name: Abbad (Bangladesh)`
        },
        {
          title: '৫৩. পাসওয়ার্ডে String Function-এর ভুল ব্যবহার পরিহার',
          explanationBn: `পাসওয়ার্ড স্টোরেজের ক্ষেত্রে সাধারণ স্ট্রিং বা md5/sha1 ব্যবহার করা মারাত্মক অপরাধ। সর্বদা password_hash() এবং ভেরিফিকেশনে password_verify() ব্যবহার করুন।`,
          code: `<?php

$plainPassword = "SecurePassword#2026";
$hashed = password_hash($plainPassword, PASSWORD_BCRYPT);

echo "Secure BCrypt Hash: " . substr($hashed, 0, 30) . "...<br>";
echo "Verification: " . (password_verify($plainPassword, $hashed) ? "✓ Validated" : "✕ Failed");
?>`,
          codeLanguage: 'Security Best Practice'
        },
        {
          title: '৫৪. সিকিউর র্যান্ডম টোকেন জেনারেশন (random_bytes)',
          explanationBn: `str_shuffle() বা md5(time()) প্রেডিক্টেবল হওয়ায় টোকেনে তা ব্যবহার করা নিষিদ্ধ। ক্রিপ্টোগ্রাফিকালি সিকিউর টোকেন তৈরিতে bin2hex(random_bytes(32)) ব্যবহার করুন।`,
          code: `<?php

$secureToken = bin2hex(random_bytes(24));
echo "Cryptographically Secure API Token:<br><code>" . $secureToken . "</code>";
?>`,
          codeLanguage: 'Security Critical'
        },
        {
          title: '৫৫. String Functions — রিয়েল ওয়ার্ল্ড অগ্রাধিকার তালিকা',
          explanationBn: `• Must Know (দৈনিক ব্যবহার): strlen, mb_strlen, trim, strtolower, strtoupper, str_replace, substr, mb_substr, strpos, str_contains, str_starts_with, str_ends_with, explode, implode, sprintf, htmlspecialchars, number_format।
• Very Important (API ও সিকিউরিটি): preg_replace, preg_match, http_build_query, json_encode, json_decode, urlencode।`,
          code: `<?php
echo "Focus on the core 16 functions first to build 90% of real-world features.";
?>`,
          codeLanguage: 'Career Guide'
        },
        {
          title: '৫৬. রিয়েল-লাইফ প্যাটার্ন: ইউজার রেজিস্ট্রেশন ভ্যালিডেশন',
          explanationBn: `ব্যবহারকারীর নাম ট্রিম করা, ইমেইল লোয়ারকেসে রূপান্তর ও পাসওয়ার্ডের দৈর্ঘ্য যাচাইয়ের পূর্ণাঙ্গ সিকিউর কোড:`,
          code: `<?php

$mockPost = [
    'name' => '   Abbad Khan   ',
    'email' => '  Abbad.Dev@Gmail.Com  ',
    'password' => 'superSecretPassword'
];

$name = trim($mockPost['name']);
$email = strtolower(trim($mockPost['email']));
$password = $mockPost['password'];

if (mb_strlen($name) < 3) {
    echo "Error: Name is too short.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Error: Invalid email address.";
} elseif (strlen($password) < 8) {
    echo "Error: Password must be at least 8 characters.";
} else {
    echo "✓ Registration Data Clean & Valid: {$name} ({$email})";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `✓ Registration Data Clean & Valid: Abbad Khan (abbad.dev@gmail.com)`
        },
        {
          title: '৫৭. রিয়েল-লাইফ প্যাটার্ন: প্রফেশনাল SEO স্লাগ জেনারেটর',
          explanationBn: `যেকোনো টাইটেল থেকে স্পেশাল ক্যারেক্টার ও ডাবল হাইফেন দূর করে পারফেক্ট URL Slug তৈরি:`,
          code: `<?php

$title = "  PHP 8.2 & Modern Web Architecture: Complete Guide!  ";

$slug = strtolower(trim($title));
$slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
$slug = trim($slug, '-');

echo "Clean SEO URL Slug: " . $slug;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Clean SEO URL Slug: php-8-2-modern-web-architecture-complete-guide`
        },
        {
          title: '৫৮. রিয়েল-লাইফ প্যাটার্ন: কমা-সেপারেটেড ট্যাগ প্রসেসিং',
          explanationBn: `ইউজারের দেওয়া ট্যাগ স্ট্রিংকে ক্লিন করে অ্যারে তৈরি এবং পুনরায় সুন্দরভাবে ভিউতে দেখানো:`,
          code: `<?php

$tagsInput = "PHP,  FullStack,  , Cloud Engine, AI   ";

$tags = explode(",", $tagsInput);
$tags = array_map('trim', $tags);
$tags = array_filter($tags); // খালি উপাদান বাদ দেওয়া

echo "Processed Clean Tags: " . implode(", ", $tags);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Processed Clean Tags: PHP, FullStack, Cloud Engine, AI`
        },
        {
          title: '৫৯. একসাথে একাধিক স্ট্রিং ফাংশনের বাস্তব প্রয়োগ (Product Card)',
          explanationBn: `ইনপুট ক্লিনিং, স্লাগ জেনারেশন, ট্যাগ প্রসেসিং, প্রাইস ফরম্যাটিং ও এক্সএসএস প্রোটেকশনের যৌথ সমন্বয়:`,
          code: `<?php

$rawTitle = "   Ultra-Gaming Desktop PC 2026   ";
$rawTags = "Gaming, RGB, Core i9, RTX 4090";
$price = 245000;

// ১. ক্লিন
$title = trim($rawTitle);
$slug = trim(preg_replace('/[^a-z0-9]+/', '-', strtolower($title)), '-');

// ২. ট্যাগস
$tags = array_map('trim', explode(',', $rawTags));

// ৩. নিরাপদ ডিসপ্লে
$safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
$formattedPrice = number_format($price, 2);

echo "<h3>{$safeTitle}</h3>";
echo "URL: /item/{$slug}<br>";
echo "Price: <b>{$formattedPrice} BDT</b><br>";
echo "Tags: " . htmlspecialchars(implode(" • ", $tags), ENT_QUOTES, 'UTF-8');
?>`,
          codeLanguage: 'PHP Full Pipeline'
        },
        {
          title: '৬০. স্ট্রিং ফাংশন চিটশিট (সারসংক্ষেপ)',
          explanationBn: `• ক্লিনিং: trim(), ltrim(), rtrim()
• কেস: strtolower(), strtoupper(), ucfirst(), ucwords()
• সার্চ: str_contains(), str_starts_with(), strpos()
• অংশ কাটা: substr(), mb_substr()
• স্প্লিট/মার্জ: explode(), implode()
• ফরম্যাটিং: sprintf(), number_format()
• নিরাপত্তা: htmlspecialchars(), password_hash()`,
          code: `<?php
echo "Master the string pipeline: Clean -> Validate -> Transform -> Escape -> Output.";
?>`,
          codeLanguage: 'Cheat Sheet'
        }
      ],
      keyPointsBn: [
        'বাংলা ও ইউনিকোড টেক্সট কাউন্ট ও সাবস্ট্রিংয়ের ক্ষেত্রে সাধারণ ফাংশনের বদলে mb_strlen() ও mb_substr() ব্যবহার বাধ্যতামূলক।',
        'PHP 8-এর আধুনিক স্ট্রিং ফাংশন str_contains(), str_starts_with() ও str_ends_with() কোডের পাঠযোগ্যতা নাটকীয়ভাবে বাড়িয়ে দেয়।',
        'HTML আউটপুটে XSS প্রতিরোধে htmlspecialchars(string, ENT_QUOTES, \'UTF-8\') ব্যবহার অপরিহার্য।',
        'পাসওয়ার্ড হ্যাশিংয়ের জন্য সাধারণ স্ট্রিং বা md5 নয়, password_hash() ও password_verify() ব্যবহার করতে হবে।',
        'টোকেন তৈরিতে str_shuffle() এর বদলে cryptographically secure random_bytes() ব্যবহার করতে হবে।'
      ],
      practiceExamples: [
        {
          title: 'উদাহরণ ১: সম্পূর্ণ ই-কমার্স প্রোডাক্ট স্লাগ ও ক্লিন পাইপলাইন',
          descriptionBn: 'পণ্যমূল্য, ইউনিকোড ক্যাপশন এবং রেজেক্স দিয়ে ক্লিন স্লাগ জেনারেশনের বাস্তব উদাহরণ।',
          code: `<?php
$rawTitle = "  Samsung 4K OLED TV (65-inch) @Special Offer!  ";
$price = 185000.75;
$banglaSubtitle = "অতুলনীয় পিকচার কোয়ালিটি";

// স্লাগ তৈরি
$slug = strtolower(trim($rawTitle));
$slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
$slug = trim($slug, '-');

// ইউনিকোড ক্যারেক্টার দৈর্ঘ্য
$banglaLength = mb_strlen($banglaSubtitle, 'UTF-8');

echo "<h3>Product Listing Engine</h3>";
echo "Original: " . htmlspecialchars($rawTitle, ENT_QUOTES, 'UTF-8') . "<br>";
echo "Canonical Slug: <code>/products/" . $slug . "</code><br>";
echo "Payable: <b>" . number_format($price, 2) . " BDT</b><br>";
echo "বাংলা সাবটাইটেল অক্ষর: " . $banglaLength . " টি";
?>`
        },
        {
          title: 'উদাহরণ ২: নিরাপদ API কোয়েরি স্ট্রিং ও জেসন রেসপন্স প্রস্তুতকারক',
          descriptionBn: 'http_build_query ও json_encode এর সাহায্যে সুরক্ষিত প্যারামিটার প্রসেসিং।',
          code: `<?php
$filterPayload = [
    "keyword" => "Mechanical Keyboard",
    "category" => "Peripherals",
    "price_max" => 12000,
    "page" => 1
];

// ১. নিরাপদ Query String তৈরি
$urlQuery = http_build_query($filterPayload);

// ২. JSON রেসপন্স সিমুলেশন
$apiResponse = [
    "success" => true,
    "query_used" => $urlQuery,
    "total_found" => 14,
    "timestamp" => date("Y-m-d H:i:s")
];

echo "<h4>Generated URL Query:</h4>";
echo "<pre style='background:#f1f5f9; padding:8px; border-radius:4px;'>" . htmlspecialchars($urlQuery) . "</pre>";

echo "<h4>JSON Response:</h4>";
echo "<pre style='background:#0f172a; color:#38bdf8; padding:10px; border-radius:6px;'>";
echo json_encode($apiResponse, JSON_PRETTY_PRINT);
echo "</pre>";
?>`
        }
      ]
    }
  },
  {
    id: 'php-numbers',
    title: 'PHP Numbers',
    category: 'basic',
    tag: 'Math & Primitives',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Integer ও Float, Numeric String, Type Checks, Operators, Type Casting, Input Validation এবং Float Precision।',
    sampleCode: `<?php
// ১. ইনপুট ডেটা (ফর্ম বা এপিআই থেকে প্রাপ্ত Numeric String)
$rawQuantity = "4";
$unitPrice = 1250.75; // Float

// ২. Input Validation & Casting Pipeline (Input -> Validate -> Convert -> Use)
if (filter_var($rawQuantity, FILTER_VALIDATE_INT) === false) {
    die("Invalid quantity specified.");
}
$quantity = (int) $rawQuantity;

// ৩. Range Validation (১ থেকে ১০ এর মধ্যে হতে হবে)
if ($quantity < 1 || $quantity > 10) {
    die("Quantity must be between 1 and 10.");
}

// ৪. ক্যালকুলেশন ও কম্পাউন্ড অ্যাসাইনমেন্ট
$subtotal = $unitPrice * $quantity;
$vatRate = 0.05; // ৫% ভ্যাট
$tax = $subtotal * $vatRate;

$totalPayable = $subtotal;
$totalPayable += $tax; // Compound Assignment

// ৫. আউটপুট ও টাইপ ভেরিফিকেশন
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 8px 0; color:#0f172a;'>Order Financial Calculation</h3>";
echo "<p style='margin:4px 0;'><b>Quantity:</b> {$quantity} (Type: " . gettype($quantity) . ")</p>";
echo "<p style='margin:4px 0;'><b>Unit Price:</b> " . number_format($unitPrice, 2) . " BDT (Type: " . gettype($unitPrice) . ")</p>";
echo "<p style='margin:4px 0;'><b>Subtotal:</b> " . number_format($subtotal, 2) . " BDT</p>";
echo "<p style='margin:4px 0;'><b>VAT (5%):</b> " . number_format($tax, 2) . " BDT</p>";
echo "<hr style='border:0; border-top:1px solid #cbd5e1; margin:10px 0;'>";
echo "<p style='margin:4px 0; color:#16a34a; font-size:18px;'><b>Total Payable:</b> " . number_format($totalPayable, 2) . " BDT</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP-তে সংখ্যা মূলত দুই ধরনের: Decimal ছাড়া পূর্ণসংখ্যা (Integer) এবং Decimal যুক্ত ভগ্নাংশ (Float)। বাস্তব প্রজেক্টে ই-কমার্স কার্ট, স্টক ইনভেন্টরি, পেমেন্ট গেটওয়ে, ডিসকাউন্ট ও পেজিনেশন তৈরিতে সংখ্যা অপরিহার্য। তবে ফর্ম বা API থেকে আসা সংখ্যা সাধারণত Numeric String ("100") হিসেবে আসে, যা সরাসরি ব্যবহারে বাগ তৈরি করতে পারে। তাই সর্বদা স্ট্যান্ডার্ড নিয়ম মানতে হয়: Input ➔ Validate ➔ Convert ➔ Use। (উল্লেখ্য: round, ceil, floor, abs, min, max, sqrt ইত্যাদি বিল্ট-ইন গাণিতিক ফাংশনগুলো আলাদা "PHP Math Functions" টপিকে আলোচনা করা হয়েছে)।`,
      lessonSections: [
        {
          title: '১. Integer — দশমিক ছাড়া পূর্ণ সংখ্যা',
          explanationBn: `Integer হলো যেকোনো ডেসিমাল বা ভগ্নাংশহীন ধনাত্মক অথবা ঋণাত্মক পূর্ণসংখ্যা। যেমন: বয়স, পণ্যের পরিমাণ (quantity), স্টক ব্যালেন্স ইত্যাদি।`,
          code: `<?php

$age = 25;
$quantity = 10;
$stock = 100;
$balance = -500;

var_dump($age);
echo "<br>";
var_dump($balance);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `int(25)\nint(-500)`
        },
        {
          title: '২. Float — দশমিক যুক্ত সংখ্যা (Floating Point)',
          explanationBn: `Float (বা Double) হলো দশমিক বা ফ্র্যাকশন যুক্ত সংখ্যা। যেমন: পণ্যের মূল্য ($price = 99.99), গ্রাহকের রেটিং ($rating = 4.5), বা ওজন ($weight = 2.75)।`,
          code: `<?php

$price = 99.99;
$rating = 4.5;
$weight = 2.75;

var_dump($price);
echo "<br>";
var_dump($rating);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `float(99.99)\nfloat(4.5)`
        },
        {
          title: '৩. Positive, Negative & Zero (ধনাত্মক, ঋণাত্মক ও শূন্য)',
          explanationBn: `সংখ্যার চিহ্নের ওপর ভিত্তি করে পিএইচপি ধনাত্মক (+), ঋণাত্মক (-) এবং শূন্য (0) হিসেবে মেমরিতে ধারণ করে। শূন্যকে পূর্ণসংখ্যা হিসেবে গণ্য করা হয়।`,
          code: `<?php

$positive = 100;
$negative = -100;
$zero = 0;

echo "Positive: {$positive}<br>";
echo "Negative: {$negative}<br>";
echo "Zero: {$zero}";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Positive: 100\nNegative: -100\nZero: 0`
        },
        {
          title: '৪. Number Type Check (is_int, is_float, is_numeric)',
          explanationBn: `মানটি কোন ধরনের সংখ্যা তা যাচাই করার জন্য পিএইচপিতে ৩টি প্রধান ফাংশন রয়েছে:
• is_int($val) — ভ্যালুটি পিওর Integer কি না।
• is_float($val) — ভ্যালুটি Float কি না।
• is_numeric($val) — ভ্যালুটি সংখ্যা বা সংখ্যার মতো স্ট্রিং (Numeric String) কি না।`,
          code: `<?php

$intVal = 100;
$strVal = "100";
$textVal = "Hello";

echo "is_int(100): ";
var_dump(is_int($intVal));
echo "<br>is_int('100'): ";
var_dump(is_int($strVal));
echo "<br>is_numeric('100'): ";
var_dump(is_numeric($strVal));
echo "<br>is_numeric('Hello'): ";
var_dump(is_numeric($textVal));
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `is_int(100): bool(true)\nis_int('100'): bool(false)\nis_numeric('100'): bool(true)\nis_numeric('Hello'): bool(false)`
        },
        {
          title: '৫. Numeric String — ফর্ম ও এপিআইয়ের বড় বাস্তবতা',
          explanationBn: `HTML ফর্ম ($_POST / $_GET) বা API রিকোয়েস্ট থেকে যেকোনো সংখ্যা সবসময় String হিসেবে সার্ভারে পৌঁছায়।
100 ➔ Integer
"100" ➔ String
কিন্তু যেহেতু "100" এর ভেতর শুধু সংখ্যা রয়েছে, একে বলা হয় "Numeric String"।`,
          code: `<?php

$value = "100";

var_dump($value);
echo "<br>";

if (is_numeric($value)) {
    echo "It is a valid numeric string!";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `string(3) "100"\nIt is a valid numeric string!`
        },
        {
          title: '৬. Number Operators (গাণিতিক অপারেটরসমূহ)',
          explanationBn: `সংখ্যা গণনার জন্য মূল ৬টি গাণিতিক অপারেটর:
• $a + $b (যোগ / Addition)
• $a - $b (বিয়োগ / Subtraction)
• $a * $b (গুণ / Multiplication)
• $a / $b (ভাগ / Division)
• $a % $b (ভাগশেষ / Modulus)
• $a ** $b (ঘাত / Exponentiation বা Power)`,
          code: `<?php

$a = 10;
$b = 3;

echo "Addition: " . ($a + $b) . "<br>";
echo "Subtraction: " . ($a - $b) . "<br>";
echo "Multiplication: " . ($a * $b) . "<br>";
echo "Division: " . ($a / $b) . "<br>";
echo "Remainder (Modulus): " . ($a % $b) . "<br>";
echo "Power (2 ** 3): " . (2 ** 3);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Addition: 13\nSubtraction: 7\nMultiplication: 30\nDivision: 3.3333333333333\nRemainder (Modulus): 1\nPower (2 ** 3): 8`
        },
        {
          title: '৭. Increment ও Decrement (++, --)',
          explanationBn: `কাউন্টার বাড়ানো বা কমানোর জন্য ইনক্রিমেন্ট ও ডিক্রিমেন্ট অপারেটর ব্যবহৃত হয়:
• $count++ (১ বৃদ্ধি করে)
• $count-- (১ হ্রাস করে)`,
          code: `<?php

$count = 10;
$count++;
echo "After increment: {$count}<br>";

$count--;
echo "After decrement: {$count}";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `After increment: 11\nAfter decrement: 10`
        },
        {
          title: '৮. Compound Assignment Operators (সংক্ষিপ্ত অ্যাসাইনমেন্ট)',
          explanationBn: `ভেরিয়েবলের বর্তমান মানের সাথে দ্রুত গণনা করে পুনরায় সেই ভেরিয়েবলেই মান সেট করার শর্টকাট:
• $total += 100 ($total = $total + 100)
• $total -= 50 ($total = $total - 50)
• $total *= 2 ($total = $total * 2)
• $total /= 2 ($total = $total / 2)`,
          code: `<?php

$stock = 100;
// ১০ টি পণ্য বিক্রি হলো
$stock -= 10;

echo "Remaining stock: " . $stock;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Remaining stock: 90`
        },
        {
          title: '৯. == বনাম === (Loose vs Strict Comparison)',
          explanationBn: `সংখ্যার সমতা যাচাইয়ে == বনাম === এর পার্থক্য বোঝা অত্যন্ত গুরুত্বপূর্ণ:
• $number == $string ➔ true (কারণ পিএইচপি টাইপ কনভার্ট করে শুধু মান তুলনা করে)
• $number === $string ➔ false (কারণ মান এবং ডেটা টাইপ দুটোই চেক করে)`,
          code: `<?php

$number = 100;
$string = "100";

echo "== Comparison (Loose): ";
var_dump($number == $string);

echo "<br>=== Comparison (Strict): ";
var_dump($number === $string);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `== Comparison (Loose): bool(true)\n=== Comparison (Strict): bool(false)`
        },
        {
          title: '১০. Type Casting (এক্সপ্লিসিট রূপান্তর)',
          explanationBn: `Numeric String-কে সরাসরি নিরাপদ Integer বা Float-এ রূপান্তর করতে কাস্টিং ব্যবহার করা হয়:
• (int) $value ➔ পূর্ণসংখ্যায় রূপান্তর
• (float) $value ➔ দশমিকে রূপান্তর`,
          code: `<?php

$rawInt = "100";
$intConverted = (int) $rawInt;

$rawFloat = "99.50";
$floatConverted = (float) $rawFloat;

var_dump($intConverted);
echo "<br>";
var_dump($floatConverted);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `int(100)\nfloat(99.5)`
        },
        {
          title: '১১. User Input Validation — রিয়েল-ওয়ার্ল্ড সিকিউর পাইপলাইন',
          explanationBn: `বাস্তব প্রজেক্টে ইউজারের ইনপুট কখনো সরাসরি গণনায় বা কুয়েরিতে ব্যবহার করবেন না।
আদর্শ সিকিউর ফ্লো:
Input ➔ Validate ➔ Convert ➔ Use`,
          code: `<?php

// ফর্ম থেকে আসা সিমুলেটেড ইনপুট
$quantityInput = "5";

if (filter_var($quantityInput, FILTER_VALIDATE_INT) === false) {
    die("Invalid quantity specified.");
}

$quantity = (int) $quantityInput;
echo "✓ Validated & Converted Quantity: " . $quantity;
?>`,
          codeLanguage: 'Security Best Practice',
          outputPreview: `✓ Validated & Converted Quantity: 5`
        },
        {
          title: '১২. Range Validation (সীমা যাচাই)',
          explanationBn: `ব্যবহারকারী যেন অযৌক্তিক সংখ্যা (যেমন ঋণাত্মক বা অত্যধিক বড় সংখ্যা) ইনপুট না দেয়, সেজন্য রেঞ্জ বা সীমা যাচাই করা আবশ্যক।`,
          code: `<?php

$quantity = (int) "8";

if ($quantity < 1 || $quantity > 10) {
    echo "Error: Quantity must be between 1 and 10.";
} else {
    echo "✓ Quantity {$quantity} is within acceptable order range (1 - 10).";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `✓ Quantity 8 is within acceptable order range (1 - 10).`
        },
        {
          title: '১৩. Float Precision — আর্থিক লেনদেনে ফ্লোটের সীমাবদ্ধতা',
          explanationBn: `কম্পিউটারের বাইনারি আর্কিটেকচারের কারণে Float-এর দশমিক ক্যালকুলেশন সবসময় গাণিতিকভাবে ১০০% নির্ভুল (Exact) নাও হতে পারে।
যেমন: 0.1 + 0.2 বাস্তবে 0.30000000000000004 হতে পারে!
সতর্কতা: Money বা Payment-এর ক্ষেত্রে ফ্লোট ব্যবহারে সতর্ক থাকুন।
প্রফেশনাল সমাধান:
১. ডাটাবেসে DECIMAL(10,2) ব্যবহার করা।
২. অথবা অ্যাপ্লিকেশনে পয়সা বা সেন্টে (যেমন ১০০ টাকা = ১০,০০০ পয়সা) Integer হিসেবে হিসাব রাখা।`,
          code: `<?php

$a = 0.1;
$b = 0.2;
$result = $a + $b;

echo "0.1 + 0.2 = " . $result . "<br>";
echo "Is (0.1 + 0.2 === 0.3)? ";
var_dump($result === 0.3); // ফ্লোটের প্রিসিশন সমস্যার কারণে false হতে পারে!
?>`,
          codeLanguage: 'Architecture Rule',
          outputPreview: `0.1 + 0.2 = 0.3\nIs (0.1 + 0.2 === 0.3)? bool(false)`
        },
        {
          title: '১৪. Integer Limit (সর্বোচ্চ ও সর্বনিম্ন সীমা)',
          explanationBn: `পিএইচপিতে ইন্টিজারের নির্দিষ্ট লিমিট থাকে।
64-bit সিস্টেমে PHP_INT_MAX হলো ৯ কোয়াড্রিলিয়নের বেশি। কোনো সংখ্যা এই সীমা অতিক্রম করলে পিএইচপি তা স্বয়ংক্রিয়ভাবে Float-এ রূপান্তর করে ফেলে।`,
          code: `<?php

echo "Maximum 64-bit Integer: " . PHP_INT_MAX . "<br>";
echo "Minimum 64-bit Integer: " . PHP_INT_MIN . "<br>";

$overflow = PHP_INT_MAX + 1;
echo "Type after overflow: " . gettype($overflow);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Maximum 64-bit Integer: 9223372036854775807\nMinimum 64-bit Integer: -9223372036854775808\nType after overflow: double`
        },
        {
          title: '১৫. Numbers Topic-এর MUST KNOW ও সারসংক্ষেপ',
          explanationBn: `নাম্বারস টপিকের প্রধান মূলনীতিসমূহ:
• Integer ও Float এর পার্থক্য মনে রাখা।
• ফর্ম বা এপিআইয়ের ইনপুট স্ট্রিং হলে is_numeric() ও filter_var() দিয়ে যাচাই করা।
• সমতা যাচাইয়ে == পরিহার করে সর্বদা === ব্যবহার করা।
• টাকার হিসাবে ফ্লোট এড়িয়ে সেন্ট/পয়সায় Integer বা DECIMAL(10,2) ব্যবহার করা।
(নোট: round, ceil, floor, abs, min, max, sqrt ইত্যাদি আলাদা "PHP Math Functions" টপিকে রয়েছে)।`,
          code: `<?php
echo "Core Pipeline: Input -> Validate -> Convert -> Calculate -> Secure Output.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'PHP-তে সংখ্যা মূলত দুই প্রকার: পূর্ণসংখ্যা (Integer) এবং ভগ্নাংশ/দশমিক (Float)।',
        'ফর্ম বা API থেকে পাঠানো সংখ্যা সবসময় Numeric String ("100") হিসেবে আসে, যা ব্যবহারের আগে filter_var() ও (int) কাস্টিং করা উচিত।',
        'সমতা যাচাইয়ে সর্বদা === ব্যবহার করুন, কারণ "100" == 100 ট্রু হলেও এদের মেমরি ও ডেটাটাইপ সম্পূর্ণ ভিন্ন।',
        'ফ্লোটিং পয়েন্ট সমতা (0.1 + 0.2 === 0.3) নির্ভরযোগ্য নয়; আর্থিক হিসাবের ক্ষেত্রে ডাটাবেসে DECIMAL বা সব লেনদেন সেন্ট/পয়সায় (Integer) রাখা প্রফেশনাল স্ট্যান্ডার্ড।',
        'গাণিতিক বিল্ট-ইন ফাংশনসমূহ (round, ceil, floor, abs, min, max, sqrt) আলাদা "PHP Math Functions" টপিকের অন্তর্ভুক্ত।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ ১: ই-কমার্স শপিং কার্ট ও কোয়ান্টিটি ইনপুট ভ্যালিডেশন',
          descriptionBn: 'ইউজারের ইনপুট ভ্যালিডেশন, রেঞ্জ যাচাই এবং ভ্যাটসহ মোট বিল প্রস্তুতের পূর্ণাঙ্গ কোড।',
          code: `<?php
$userInput = "3"; // সিমুলেটেড $_POST['quantity']
$itemPrice = 2500.00;

// ১. ভ্যালিডেশন
if (!filter_var($userInput, FILTER_VALIDATE_INT)) {
    die("Invalid quantity!");
}

$qty = (int) $userInput;

// ২. রেঞ্জ ভ্যালিডেশন (১ থেকে ৫ এর বেশি কেনা যাবে না)
if ($qty < 1 || $qty > 5) {
    die("You can order between 1 and 5 items only.");
}

// ৩. হিসাব
$subtotal = $itemPrice * $qty;
$shipping = 120.00;
$grandTotal = $subtotal + $shipping;

echo "<h3>Invoice Summary</h3>";
echo "Quantity: {$qty}<br>";
echo "Subtotal: " . number_format($subtotal, 2) . " BDT<br>";
echo "Shipping: " . number_format($shipping, 2) . " BDT<br>";
echo "<b>Grand Total: " . number_format($grandTotal, 2) . " BDT</b>";
?>`
        },
        {
          title: 'বাস্তব উদাহরণ ২: স্টক ইনভেন্টরি হ্রাস ও কম্পাউন্ড অ্যাসাইনমেন্ট',
          descriptionBn: 'পণ্যের বিক্রয় সম্পন্ন হলে ইনভেন্টরি স্টক মাইনাস করা এবং সতর্কবার্তা প্রদর্শন।',
          code: `<?php
$inventoryStock = 45;
$soldQuantity = 12;

// বিক্রির পর স্টক হ্রাস (Compound Assignment)
$inventoryStock -= $soldQuantity;

echo "Sold Items: {$soldQuantity}<br>";
echo "Updated Stock Available: {$inventoryStock}<br>";

if ($inventoryStock < 10) {
    echo "<span style='color:red;'>Warning: Low Stock Alert!</span>";
} else {
    echo "<span style='color:green;'>Stock is healthy.</span>";
}
?>`
        }
      ]
    }
  },
  {
    id: 'php-casting',
    title: 'PHP Casting',
    category: 'basic',
    tag: 'Type Conversion',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'টাইপ কাস্টিং: (int), (float), (string), (bool), (array), (object), Juggling এবং Casting ≠ Validation।',
    sampleCode: `<?php
// ১. ফর্ম বা এপিআই থেকে প্রাপ্ত ইনপুট
$rawQuantity = "5";
$rawPrice = "1250.75";
$rawIsAvailable = "1";

// ২. কাস্টিংয়ের পূর্বে সঠিক ভ্যালিডেশন (Casting != Validation)
if (filter_var($rawQuantity, FILTER_VALIDATE_INT) === false) {
    die("Invalid quantity supplied.");
}

// ৩. এক্সপ্লিসিট টাইপ কাস্টিং
$quantity = (int) $rawQuantity;       // string -> int
$price = (float) $rawPrice;           // string -> float
$isAvailable = (bool) $rawIsAvailable; // string -> bool

// ৪. কাস্ট করা মান দিয়ে হিসাব
$subtotal = $price * $quantity;

// ৫. Array থেকে Object-এ কাস্টিং
$productInfo = [
    'title' => 'Ergonomic Desk Chair',
    'sku' => 'SKU-CHAIR-99'
];
$productObj = (object) $productInfo;

echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 8px 0; color:#0f172a;'>" . htmlspecialchars($productObj->title) . " (SKU: {$productObj->sku})</h3>";
echo "<p style='margin:4px 0;'><b>Quantity:</b> {$quantity} (Type: " . gettype($quantity) . ")</p>";
echo "<p style='margin:4px 0;'><b>Unit Price:</b> " . number_format($price, 2) . " BDT (Type: " . gettype($price) . ")</p>";
echo "<p style='margin:4px 0;'><b>In Stock:</b> " . ($isAvailable ? "✓ Available" : "✕ Out of Stock") . " (Type: " . gettype($isAvailable) . ")</p>";
echo "<hr style='border:0; border-top:1px solid #cbd5e1; margin:10px 0;'>";
echo "<p style='margin:4px 0; color:#16a34a; font-size:18px;'><b>Total Calculated:</b> " . number_format($subtotal, 2) . " BDT</p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Type Casting মানে হলো একটি ডেটা টাইপকে ইচ্ছাকৃতভাবে (Explicitly) অন্য ডেটা টাইপে রূপান্তর করা। ওয়েব অ্যাপ্লিকেশনে ফর্ম ($_POST/$_GET) বা রেস্ট এপিআই থেকে আসা ডেটা সাধারণত স্ট্রিং হিসেবে আসে। সঠিক হিসাব ও স্ট্রিক্ট টাইপিং নিশ্চিত করতে ডেভেলপার নিজেই নির্দিষ্ট সিনট্যাক্স দিয়ে টাইপ কাস্ট করে নেন। তবে মনে রাখতে হবে: "CASTING IS NOT VALIDATION"—কাস্টিং কখনো ভ্যালিডেশনের বিকল্প নয়। প্রোডাকশনে সর্বদা নিয়ম মানতে হবে: Input ➔ Validate ➔ Cast ➔ Process।`,
      lessonSections: [
        {
          title: '১. Integer Casting — পূর্ণসংখ্যায় রূপান্তর (int)',
          explanationBn: `স্ট্রিং বা অন্য কোনো মানকে পূর্ণসংখ্যায় (Integer) রূপান্তর করতে ভেরিয়েবলের আগে (int) বা (integer) বসাতে হয়।`,
          code: `<?php

$value = "100";
$result = (int) $value;

var_dump($result);
echo "<br>Type: " . gettype($result);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `int(100)\nType: integer`
        },
        {
          title: '২. Float Casting — ডেসিমাল সংখ্যায় রূপান্তর (float)',
          explanationBn: `স্ট্রিংকে দশমিকে রূপান্তর করতে (float), (double) বা (real) ব্যবহার করা হয়। যেমন পণ্যের মূল্য বা ডিসকাউন্ট শতাংশ।`,
          code: `<?php

$value = "99.50";
$result = (float) $value;

var_dump($result);
echo "<br>Value: {$result}";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `float(99.5)\nValue: 99.5`
        },
        {
          title: '৩. String Casting — সংখ্যা থেকে টেক্সটে রূপান্তর (string)',
          explanationBn: `ইন্টিজার বা ফ্লোটকে স্ট্রিংয়ে রূপান্তর করতে (string) ব্যবহার করা হয়। যেমন কোনো আইডি বা কোড স্ট্রিং মেথডে পাঠানো।`,
          code: `<?php

$value = 100;
$result = (string) $value;

var_dump($result);
echo "<br>Length: " . strlen($result);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `string(3) "100"\nLength: 3`
        },
        {
          title: '৪. Boolean Casting — ট্রু বা ফলসে রূপান্তর (bool)',
          explanationBn: `যেকোনো মানকে সত্য (true) বা মিথ্যা (false) এ রূপান্তর করতে (bool) বা (boolean) ব্যবহৃত হয়।
সাধারণ নিয়ম:
• 0, 0.0, "", "0", null, [] ➔ false
• বাকি সবকিছু (যেমন 1, -5, "abc", [1]) ➔ true`,
          code: `<?php

var_dump((bool) 1);      // bool(true)
echo "<br>";
var_dump((bool) 0);      // bool(false)
echo "<br>";
var_dump((bool) "");     // bool(false)
echo "<br>";
var_dump((bool) "abc");  // bool(true)
echo "<br>";
var_dump((bool) null);   // bool(false)
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `bool(true)\nbool(false)\nbool(false)\nbool(true)\nbool(false)`
        },
        {
          title: '৫. Array Casting — অ্যারিতে রূপান্তর (array)',
          explanationBn: `একটি স্কেলার মানকে (array) দিয়ে কাস্ট করলে সেই মানটি নিয়ে ১টি উপাদানের ইন্ডেক্সড অ্যারে তৈরি হয়। তবে অবজেক্টকে অ্যারিতে কাস্ট করে কী-ভ্যালু জোড়ায় রূপান্তর করার ক্ষেত্রে এটি বেশি কাজের।`,
          code: `<?php

$scalar = "Hello PHP";
$arr = (array) $scalar;

print_r($arr);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Array\n(\n    [0] => Hello PHP\n)`
        },
        {
          title: '৬. Object Casting — অ্যারে থেকে অবজেক্টে রূপান্তর (object)',
          explanationBn: `অ্যাসোসিয়েটিভ অ্যারেকে সরাসরি stdClass অবজেক্টে রূপান্তর করতে (object) ব্যবহার করা হয়। এতে অ্যারের কীগুলো অবজেক্ট প্রোপার্টিতে ($obj->key) পরিণত হয়।`,
          code: `<?php

$array = [
    "name" => "Abbad",
    "role" => "Software Engineer",
    "experience" => 4
];

$userObj = (object) $array;

echo "Name: " . $userObj->name . "<br>";
echo "Role: " . $userObj->role;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Name: Abbad\nRole: Software Engineer`
        },
        {
          title: '৭. Numeric String → Number (বাস্তব ফর্ম প্রসেসিং)',
          explanationBn: `ফর্ম বা API থেকে পাঠানো ডেটা টেক্সট হলেও (int) বা (float) কাস্টিংয়ের মাধ্যমে সহজেই গাণিতিক অপারেশন চালানো যায়।`,
          code: `<?php

$userInput = "2500";
$price = (int) $userInput;

$total = $price + 500;
echo "Total Payable: " . $total . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Total Payable: 3000 BDT`
        },
        {
          title: '৮. Float → Integer সতর্কতা (রাউন্ডিং নয়, ট্রাঙ্কেশন!)',
          explanationBn: `⚠️ মারাত্মক সতর্কতা: (int) কোনো রাউন্ডিং (round) করে না! এটি দশমিকের পরের সব অংশ সরাসরি কেটে ফেলে (Truncation)। তাই 99.99 কাস্ট করলে ৯৯ হবে, ১০০ নয়!`,
          code: `<?php

$price = 99.99;
$intPrice = (int) $price;

echo "Original: {$price}<br>";
echo "(int) Cast: {$intPrice}<br>";
echo "round(): " . round($price);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Original: 99.99\n(int) Cast: 99\nround(): 100`
        },
        {
          title: '৯. Integer → Float রূপান্তর',
          explanationBn: `পূর্ণসংখ্যাকে দশমিকে রূপান্তর করতে (float) ব্যবহৃত হয়।`,
          code: `<?php

$number = 100;
$result = (float) $number;

var_dump($result);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `float(100)`
        },
        {
          title: '১০. String Conversion-এর বড় বিপদ ("100abc" বনাম "abc100")',
          explanationBn: `স্ট্রিংয়ের শুরুতে সংখ্যা থাকলে পিএইচপি সেই অংশটুকু ইন্টিজার বানায়। কিন্তু শুরুতে কোনো বর্ণ থাকলে ফলাফল ০ (শূন্য) হয়ে যায়!
• "100abc" ➔ (int) ➔ 100
• "abc100" ➔ (int) ➔ 0
এ কারণেই ইউজার ইনপুট সরাসরি কাস্ট করার আগে ফিল্টার/ভ্যালিডেট করা আবশ্যক।`,
          code: `<?php

$val1 = "100abc";
$val2 = "abc100";

echo "'100abc' cast to int: " . (int) $val1 . "<br>";
echo "'abc100' cast to int: " . (int) $val2;
?>`,
          codeLanguage: 'Security Warning',
          outputPreview: `'100abc' cast to int: 100\n'abc100' cast to int: 0`
        },
        {
          title: '১১. Type Casting বনাম Type Juggling (পার্থক্য)',
          explanationBn: `• Type Casting (Explicit): ডেভেলপার নিজে সচেতনভাবে টাইপ পরিবর্তন করেন (যেমন: (int) $val)।
• Type Juggling (Implicit): পিএইচপি কনটেক্সটের ওপর নির্ভর করে স্বয়ংক্রিয়ভাবে টাইপ পরিবর্তন করে নেয় (যেমন: "10" + 5 = 15)।`,
          code: `<?php

// Type Casting (Explicit)
$str = "100";
$casted = (int) $str;

// Type Juggling (Implicit)
$a = "10";
$b = 5;
$sum = $a + $b; // পিএইচপি নিজে "10" কে ইন্টিজার বানিয়েছে

echo "Explicit Cast: {$casted} (" . gettype($casted) . ")<br>";
echo "Implicit Juggling Sum: {$sum} (" . gettype($sum) . ")";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Explicit Cast: 100 (integer)\nImplicit Juggling Sum: 15 (integer)`
        },
        {
          title: '১২. Casting বনাম Validation (সবচেয়ে গুরুত্বপূর্ণ নিয়ম)',
          explanationBn: `শুধুমাত্র $id = (int) $_GET['id']; লিখলেই সিকিউরিটি নিশ্চিত হয় না! কারণ ইউজারের ইনপুট যদি ভুল বা টেক্সট ("abc") হয়, তাহলে (int) কাস্ট করে ০ বানিয়ে ফেলবে এবং ০ আইডি দিয়ে ডেটাবেসে কুয়েরি চালাবে!
• Casting = ডেটা টাইপ পরিবর্তন।
• Validation = ডেটার মান সঠিক এবং যৌক্তিক কি না তা যাচাই।
তাই আগে filter_var() বা filter_input() দিয়ে যাচাই করুন, তারপর কাস্ট করুন।`,
          code: `<?php

$rawGetId = "invalid_id_text";

// ভুল পদ্ধতি:
// $id = (int) $rawGetId; // হয়ে যাবে 0

// সঠিক নিরাপদ পদ্ধতি:
$id = filter_var($rawGetId, FILTER_VALIDATE_INT);

if ($id === false) {
    echo "Validation Failed: Invalid ID supplied!";
} else {
    echo "ID is valid: " . (int) $id;
}
?>`,
          codeLanguage: 'Security Critical',
          outputPreview: `Validation Failed: Invalid ID supplied!`
        },
        {
          title: '১৩. রিয়েল-লাইফ শপিং কার্ট ইনপুট পাইপলাইন',
          explanationBn: `বাস্তব প্রজেক্টের গোল্ডেন পাইপলাইন:
Input ➔ Validate ➔ Cast ➔ Calculate ➔ Use`,
          code: `<?php

$postQuantity = "4";

// ১. Validate
if (filter_var($postQuantity, FILTER_VALIDATE_INT) === false) {
    die("Invalid quantity!");
}

// ২. Cast
$quantity = (int) $postQuantity;

// ৩. Range Check
if ($quantity < 1 || $quantity > 10) {
    die("Quantity out of range (1-10)!");
}

// ৪. Calculate
$unitPrice = 500;
$total = $unitPrice * $quantity;

echo "✓ Processed Order: {$quantity} items | Total: {$total} BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `✓ Processed Order: 4 items | Total: 2000 BDT`
        },
        {
          title: '১৪. কাস্টিং চিটশিট ও সিনট্যাক্স সামারি',
          explanationBn: `• (int), (integer) ➔ Integer
• (float), (double) ➔ Float
• (string) ➔ String
• (bool), (boolean) ➔ Boolean
• (array) ➔ Array
• (object) ➔ Object`,
          code: `<?php
echo "Core Rules: (int), (float), (string), (bool) are everyday tools. Always remember: CASTING != VALIDATION!";
?>`,
          codeLanguage: 'Cheat Sheet'
        }
      ],
      keyPointsBn: [
        'Type Casting হলো এক্সপ্লিসিটলি ডেটা টাইপ পরিবর্তন করা: (int), (float), (string), (bool), (array), (object)।',
        '(int) কোনো রাউন্ডিং করে না, বরং দশমিকের অংশ কেটে ফেলে (99.99 কাস্ট করলে ৯৯ হয়)।',
        'স্ট্রিংয়ের শুরুতে টেক্সট থাকলে (int)"abc100" এর ফলাফল ০ হয়ে যায়, তাই সরাসরি কাস্টের ওপর ভরসা না করে আগে ভ্যালিডেশন জরুরি।',
        'CASTING IS NOT VALIDATION: কাস্টিং টাইপ বদলায়, কিন্তু মান সঠিক কি না তা পরীক্ষা করতে পারে না।',
        'প্রোডাকশন ফ্লো: Input -> Validate -> Cast -> Calculate -> Use।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ ১: পেজিনেশন কুয়েরি প্যারামিটার স্যানিটাইজেশন',
          descriptionBn: 'URL থেকে আসা page প্যারামিটার ভ্যালিডেট ও (int) কাস্ট করে ডাটাবেস অফসেট নির্ধারণ।',
          code: `<?php
$rawPage = "3"; // $_GET['page']

if (!filter_var($rawPage, FILTER_VALIDATE_INT) || (int)$rawPage < 1) {
    $page = 1; // ডিফল্ট পৃষ্ঠা
} else {
    $page = (int) $rawPage;
}

$perPage = 15;
$offset = ($page - 1) * $perPage;

echo "Current Page: {$page}<br>";
echo "Database SQL: LIMIT {$perPage} OFFSET {$offset}";
?>`
        },
        {
          title: 'বাস্তব উদাহরণ ২: API জেসন রেসপন্সকে অবজেক্টে রূপান্তর',
          descriptionBn: 'অ্যারে ডেটাকে (object) কাস্ট করে ক্লিন অবজেক্ট ও্যারো সিনট্যাক্সে ($obj->property) ব্রাউজারে উপস্থাপন।',
          code: `<?php
$apiPayload = [
    'userId' => 101,
    'userName' => 'abbad_dev',
    'isActive' => '1',
    'balance' => '450.75'
];

$user = (object) [
    'id' => (int) $apiPayload['userId'],
    'name' => (string) $apiPayload['userName'],
    'active' => (bool) $apiPayload['isActive'],
    'balance' => (float) $apiPayload['balance']
];

echo "User #{$user->id}: {$user->name}<br>";
echo "Status: " . ($user->active ? 'Active' : 'Banned') . "<br>";
echo "Balance: " . number_format($user->balance, 2) . " BDT";
?>`
        }
      ]
    }
  },
  {
    id: 'php-math',
    title: 'PHP Math',
    category: 'basic',
    tag: 'Calculations',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'round, ceil, floor, abs, min, max, sqrt, pow, intdiv, random_int, Discount, VAT, Profit ও Money Rules।',
    sampleCode: `<?php
// ১. পণ্য মূল্য ও ডিসকাউন্ট হিসাব
$originalPrice = 2500.00;
$discountPercent = 15; // ১৫% ডিসকাউন্ট
$discountAmount = ($originalPrice * $discountPercent) / 100;
$afterDiscount = $originalPrice - $discountAmount;

// ২. ভ্যাট ও ট্যাক্স হিসাব (৫% ভ্যাট)
$vatPercent = 5;
$vatAmount = ($afterDiscount * $vatPercent) / 100;
$totalPayable = $afterDiscount + $vatAmount;

// ৩. শিপিং প্যাকেজিং সিলিং (ceil) ও পেজিনেশন (intdiv)
$totalItems = 28;
$itemsPerPage = 10;
$totalPages = ceil($totalItems / $itemsPerPage); // ৩ পৃষ্ঠা

// ৪. ক্রিপ্টোগ্রাফিক্যালি নিরাপদ OTP জেনারেশন
$secureOtp = random_int(100000, 999999);

// ৫. ডিসপ্লে আউটপুট (number_format)
echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 10px 0; color:#0f172a;'>E-Commerce Checkout Math</h3>";
echo "<p style='margin:3px 0;'>Original Price: " . number_format($originalPrice, 2) . " BDT</p>";
echo "<p style='margin:3px 0; color:#dc2626;'>Discount (15%): -" . number_format($discountAmount, 2) . " BDT</p>";
echo "<p style='margin:3px 0;'>After Discount: " . number_format($afterDiscount, 2) . " BDT</p>";
echo "<p style='margin:3px 0;'>VAT (5%): +" . number_format($vatAmount, 2) . " BDT</p>";
echo "<hr style='border:0; border-top:1px solid #cbd5e1; margin:8px 0;'>";
echo "<p style='margin:3px 0; color:#16a34a; font-size:18px;'><b>Final Payable: " . number_format($totalPayable, 2) . " BDT</b></p>";
echo "<p style='margin:8px 0 0 0; color:#64748b; font-size:13px;'>Pagination: {$totalPages} pages for {$totalItems} items | Verification OTP: <b>{$secureOtp}</b></p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP-এর Math Functions দিয়ে বাস্তব জীবনে গাণিতিক হিসাব-নিকাশ, রাউন্ডিং, র্যান্ডম ওটিপি কোড জেনারেশন, লাভ-ক্ষতি, পারসেন্টেজ, ভ্যাট ও কার্ট মূল্য নির্ধারণ করা হয়। পূর্ববর্তী "Numbers" টপিকে আমরা সংখ্যার বেসিক টাইপ শিখেছি, আর এই টপিকে আমরা বাস্তব জীবনের সকল ম্যাথ ও ক্যালকুলেশন সম্পর্কিত ফাংশন এবং প্রফেশনাল ফাইন্যান্সিয়াল নিয়মাবলি শিখব।`,
      lessonSections: [
        {
          title: '১. round() — দশমিক সংখ্যা কাছাকাছি পূর্ণসংখ্যায় নেওয়া',
          explanationBn: `round() ডেসিমাল সংখ্যাকে সবচেয়ে নিকটবর্তী পূর্ণসংখ্যায় রূপান্তর করে (০.৫ বা তার বেশি হলে উপরে, অন্যথায় নিচে)। দ্বিতীয় প্যারামিটারে দশমিকের পর কত ঘর পর্যন্ত রাউন্ড করতে হবে তাও বলে দেওয়া যায়।`,
          code: `<?php

echo "round(4.6): " . round(4.6) . "<br>";
echo "round(4.4): " . round(4.4) . "<br>";
echo "round(4.5): " . round(4.5) . "<br>";

// নির্দিষ্ট দশমিক ঘর (প্রাইস ও রেটিংয়ে খুব ব্যবহৃত)
$rating = 4.6782;
echo "Rating (2 decimals): " . round($rating, 2);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `round(4.6): 5\nround(4.4): 4\nround(4.5): 5\nRating (2 decimals): 4.68`
        },
        {
          title: '২. ceil() — সর্বদা উপরের পূর্ণসংখ্যায় রূপান্তর (Ceiling)',
          explanationBn: `ceil() সংখ্যাকে সবসময় তার পরবর্তী পূর্ণসংখ্যায় (Upper integer) বাড়িয়ে দেয়।
রিয়েল-ওয়ার্ল্ড ব্যবহার: পেজিনেশন (Pagination) এবং কুরিয়ার/শিপিং পার্সেল ওজন ক্যালকুলেশন। যেমন ৪.১ কেজি হলে ৫ কেজির পার্সেল রেট ধরা হয়।`,
          code: `<?php

echo "ceil(4.1): " . ceil(4.1) . "<br>";
echo "ceil(4.9): " . ceil(4.9) . "<br>";

// পেজিনেশন রিয়েল-লাইফ উদাহরণ
$totalArticles = 45;
$perPage = 10;
$pagesRequired = ceil($totalArticles / $perPage);

echo "Total Pages Needed: " . $pagesRequired;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `ceil(4.1): 5\nceil(4.9): 5\nTotal Pages Needed: 5`
        },
        {
          title: '৩. floor() — সর্বদা নিচের পূর্ণসংখ্যায় রূপান্তর (Floor)',
          explanationBn: `floor() সংখ্যাকে সবসময় তার পূর্ববর্তী পূর্ণসংখ্যায় (Lower integer) নামিয়ে দেয়। যেমন ৪.৯ হলেও তা ৪ হয়ে যাবে।`,
          code: `<?php

echo "floor(4.9): " . floor(4.9) . "<br>";
echo "floor(4.1): " . floor(4.1) . "<br>";

// লেভেল বা পূর্ণ পয়েন্ট হিসাব
$points = 18.75;
echo "Full Completed Levels: " . floor($points);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `floor(4.9): 4\nfloor(4.1): 4\nFull Completed Levels: 18`
        },
        {
          title: '৪. abs() — পরম মান বা অ্যাবসোলিউট ভ্যালু (Negative to Positive)',
          explanationBn: `abs() যেকোনো ঋণাত্মক সংখ্যাকে স্বয়ংক্রিয়ভাবে ধনাত্মক মানে রূপান্তর করে।
রিয়েল-ওয়ার্ল্ড ব্যবহার: দুটি মানের ব্যবধান (Difference), দূরত্ব (Distance) বা ব্যালেন্স তারতম্য বের করতে।`,
          code: `<?php

$actualScore = 80;
$targetScore = 100;
$difference = abs($actualScore - $targetScore);

echo "Score Difference: " . $difference . " points<br>";
echo "abs(-50): " . abs(-50);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Score Difference: 20 points\nabs(-50): 50`
        },
        {
          title: '৫. min() — সর্বনিম্ন মান বের করা',
          explanationBn: `প্রদত্ত সংখ্যাগুলোর মধ্য থেকে অথবা একটি অ্যারের ভেতর থেকে সবচেয়ে ছোট মানটি বের করতে min() ব্যবহৃত হয়। যেমন সর্বনিম্ন পণ্যের মূল্য বা সর্বনিম্ন তাপমাত্রা।`,
          code: `<?php

echo "Smallest: " . min(10, 5, 20, 3) . "<br>";

$prices = [120, 80, 150, 90, 45];
echo "Lowest Price in Catalog: " . min($prices) . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Smallest: 3\nLowest Price in Catalog: 45 BDT`
        },
        {
          title: '৬. max() — সর্বোচ্চ মান বের করা',
          explanationBn: `প্রদত্ত সংখ্যাগুলো বা অ্যারের উপাদানসমূহের মধ্যে সবচেয়ে বড় মানটি বের করতে max() ব্যবহৃত হয়। যেমন টপ রেটেড স্কোর বা সর্বোচ্চ দর।`,
          code: `<?php

echo "Largest: " . max(10, 5, 20, 3) . "<br>";

$bids = [12000, 18500, 24000, 15000];
echo "Highest Bid: " . max($bids) . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Largest: 20\nHighest Bid: 24000 BDT`
        },
        {
          title: '৭. sqrt() — বর্গমূল বের করা',
          explanationBn: `কোনো সংখ্যার Square Root বা বর্গমূল বের করতে sqrt() ফাংশন ব্যবহৃত হয়।`,
          code: `<?php

echo "sqrt(25): " . sqrt(25) . "<br>";
echo "sqrt(144): " . sqrt(144);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `sqrt(25): 5\nsqrt(144): 12`
        },
        {
          title: '৮. pow() ও ** অপারেটর — ঘাত বা পাওয়ার হিসাব',
          explanationBn: `পাওয়ার ক্যালকুলেশনে pow($base, $exp) অথবা আধুনিক পিএইচপিতে ** অপারেটর ব্যবহার করা যায় (যেমন ২ এর পাওয়ার ৩ = ৮)।`,
          code: `<?php

echo "pow(2, 3): " . pow(2, 3) . "<br>";
echo "Modern 2 ** 3: " . (2 ** 3) . "<br>";
echo "5 ** 2 (Square of 5): " . (5 ** 2);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `pow(2, 3): 8\nModern 2 ** 3: 8\n5 ** 2 (Square of 5): 25`
        },
        {
          title: '৯. intdiv() — ইন্টিজার ডিভিশন (ভাগফল পূর্ণসংখ্যায় রাখা)',
          explanationBn: `intdiv($dividend, $divisor) ভাগের পর দশমিক অংশ ফেলে দিয়ে শুধুমাত্র পূর্ণাঙ্গ ভাগফলটি রিটার্ন করে।
রিয়েল-ওয়ার্ল্ড ব্যবহার: আইটেম গ্রুপ করা, সম্পূর্ণ কার্টন/বাক্স গণনা (যেমন ৭টি পণ্য ৩ জনের মধ্যে সমানভাবে দিলে প্রত্যেকে ২টি করে পাবে)।`,
          code: `<?php

$items = 10;
$boxCapacity = 3;

$fullBoxes = intdiv($items, $boxCapacity);
$leftovers = $items % $boxCapacity;

echo "Normal Division: " . (10 / 3) . "<br>";
echo "intdiv (Full Boxes): " . $fullBoxes . "<br>";
echo "Remaining items (Modulus %): " . $leftovers;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Normal Division: 3.3333333333333\nintdiv (Full Boxes): 3\nRemaining items (Modulus %): 1`
        },
        {
          title: '১০. fmod() — দশমিক সংখ্যার ভাগশেষ (Float Remainder)',
          explanationBn: `সাধারণ মডিউলাস % অপারেটর পূর্ণসংখ্যার জন্য কাজ করে। কিন্তু ফ্লোটিং পয়েন্ট সংখ্যার ভাগশেষ বের করতে fmod() ব্যবহার করতে হয়।`,
          code: `<?php

$val = 10.5;
$divisor = 3;

echo "fmod(10.5, 3): " . fmod($val, $divisor);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `fmod(10.5, 3): 1.5`
        },
        {
          title: '১১. rand() বনাম random_int() (সিকিউরিটি সতর্কতা)',
          explanationBn: `• rand() — সাধারণ ছদ্ম-র্যান্ডম সংখ্যা তৈরি করে (গেমের ডাইস বা ডামি ডেটায় প্রযোজ্য)।
⚠️ সিকিউরিটি সতর্কতা: ওটিপি, পাসওয়ার্ড রিসেট, এপিআই টোকেন বা আর্থিক কাজে rand() ব্যবহার করা নিষিদ্ধ।
• random_int() — ক্রিপ্টোগ্রাফিক্যালি নিরাপদ (CSPRNG) র্যান্ডম ইন্টিজার তৈরি করে।`,
          code: `<?php

// সাধারণ কাজের জন্য
echo "Casual rand(1, 100): " . rand(1, 100) . "<br>";

// সিকিউর ওটিপি কোড (রিয়েল ওয়ার্ল্ড ওটিপি)
$secureOtp = random_int(100000, 999999);
echo "Cryptographically Secure 6-digit OTP: <b>" . $secureOtp . "</b>";
?>`,
          codeLanguage: 'Security Best Practice'
        },
        {
          title: '১২. random_bytes() — ক্রিপ্টোগ্রাফিক বাইট ও টোকেন',
          explanationBn: `পাসওয়ার্ড রিসেট লিংক, সেশন আইডি বা এপিআই সিক্রেট কি তৈরিতে random_bytes() ব্যবহার করা হয়। bin2hex() দিয়ে একে পাঠযোগ্য হেক্সাডেসিমাল স্ট্রিংয়ে রূপান্তর করা হয়।`,
          code: `<?php

$tokenBytes = random_bytes(16);
$token = bin2hex($tokenBytes);

echo "Secure Hex Token (32 chars):<br><code>" . $token . "</code>";
?>`,
          codeLanguage: 'Security Critical'
        },
        {
          title: '১৩. number_format() — সংখ্যা সুন্দরভাবে ডিসপ্লে করা',
          explanationBn: `number_format($number, $decimals) টাকাপয়সা বা বড় সংখ্যাকে কমা ও ডেসিমাল পয়েন্ট দিয়ে ব্যবহারকারীর সামনে ফুটিয়ে তোলে।
⚠️ গুরুত্বপূর্ণ নিয়ম: এটি কোনো ক্যালকুলেশন ফাংশন নয়! গণনার কাজ সম্পন্ন করার পর শুধুমাত্র আউটপুটের সময় এটি কল করবেন।`,
          code: `<?php

$rawTotal = 1250000.567;
$displayPrice = number_format($rawTotal, 2);

echo "Raw Number: " . $rawTotal . "<br>";
echo "Formatted for Display: " . $displayPrice . " BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Raw Number: 1250000.567\nFormatted for Display: 1,250,000.57 BDT`
        },
        {
          title: '১৪. M_PI — পাই (π) গাণিতিক ধ্রুবক',
          explanationBn: `বৃত্তের ক্ষেত্রফল বা ত্রিকোণমিতিক গণনার জন্য বিল্ট-ইন ধ্রুবক M_PI (অথবা pi() ফাংশন) ব্যবহৃত হয়।`,
          code: `<?php

echo "Value of M_PI: " . M_PI . "<br>";

// ব্যাসার্ধ r = 7 হলে বৃত্তের ক্ষেত্রফল (π * r^2)
$r = 7;
$area = M_PI * ($r ** 2);
echo "Circle Area (r=7): " . round($area, 2);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Value of M_PI: 3.1415926535898\nCircle Area (r=7): 153.94`
        },
        {
          title: '১৫. Percentage Calculation — ডিসকাউন্ট হিসাবের বাস্তব কৌশল',
          explanationBn: `ই-কমার্সে পণ্যের উপর ছাড় বা ডিসকাউন্ট নির্ধারণের রিয়েল-লাইফ গাণিতিক সূত্র:
$discountAmount = ($price * $discountPercent) / 100;
$finalPrice = $price - $discountAmount;`,
          code: `<?php

$price = 2000;
$discountPercent = 15; // ১৫% ছাড়

$discountAmount = ($price * $discountPercent) / 100;
$finalPrice = $price - $discountAmount;

echo "Original Price: {$price} BDT<br>";
echo "Discount Amount: -{$discountAmount} BDT<br>";
echo "Payable After Discount: {$finalPrice} BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Original Price: 2000 BDT\nDiscount Amount: -300 BDT\nPayable After Discount: 1700 BDT`
        },
        {
          title: '১৬. VAT / Tax Calculation — ভ্যাট যুক্ত করার সূত্র',
          explanationBn: `পণ্যের মূল্যের সাথে নির্দিষ্ট হারে ভ্যাট বা কর যুক্ত করার স্ট্যান্ডার্ড ফর্মুলা:
$vatAmount = ($price * $vatPercent) / 100;
$total = $price + $vatAmount;`,
          code: `<?php

$price = 1000;
$vatPercent = 15; // ১৫% সরকারি ভ্যাট

$vatAmount = ($price * $vatPercent) / 100;
$total = $price + $vatAmount;

echo "Base Price: {$price} BDT<br>";
echo "VAT (15%): +{$vatAmount} BDT<br>";
echo "Total with VAT: {$total} BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Base Price: 1000 BDT\nVAT (15%): +150 BDT\nTotal with VAT: 1150 BDT`
        },
        {
          title: '১৭. Profit & Margin Calculation — লাভ-ক্ষতির অংক',
          explanationBn: `ক্রয়মূল্য ও বিক্রয়মূল্য থেকে নিট লাভ এবং শতকরা লাভের মার্জিন (Profit Margin %) বের করার কোড:`,
          code: `<?php

$buyPrice = 800;
$sellPrice = 1000;

$profit = $sellPrice - $buyPrice;
$marginPercent = ($profit / $buyPrice) * 100;

echo "Net Profit: {$profit} BDT<br>";
echo "Profit Margin: " . round($marginPercent, 2) . "%";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Net Profit: 200 BDT\nProfit Margin: 25%`
        },
        {
          title: '১৮. Discount + VAT Combined — সম্মিলিত ই-কমার্স ইনভয়েস ক্যালকুলেশন',
          explanationBn: `বাস্তব চেকআউটে প্রথমে মূল দাম থেকে ডিসকাউন্ট বাদ যায়, এবং ডিসকাউন্টকৃত মূল্যের উপর ভ্যাট হিসাব করা হয়।`,
          code: `<?php

$price = 2000;
$discount = 10; // ১০% ডিসকাউন্ট
$vat = 5;       // ৫% ভ্যাট

$discountAmount = ($price * $discount) / 100;
$afterDiscount = $price - $discountAmount;

$vatAmount = ($afterDiscount * $vat) / 100;
$grandTotal = $afterDiscount + $vatAmount;

echo "Original: {$price} BDT<br>";
echo "After 10% Discount: {$afterDiscount} BDT<br>";
echo "5% VAT on Discounted Amount: {$vatAmount} BDT<br>";
echo "<b>Grand Total: {$grandTotal} BDT</b>";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Original: 2000 BDT\nAfter 10% Discount: 1800 BDT\n5% VAT on Discounted Amount: 90 BDT\nGrand Total: 1890 BDT`
        },
        {
          title: '১৯. Important Money Rule — Float এর সীমাবদ্ধতা ও প্রফেশনাল সমাধান',
          explanationBn: `কম্পিউটারের বাইনারি রূপান্তরের কারণে 0.1 + 0.2 সবসময় নির্ভুল 0.3 নাও হতে পারে (0.30000000000000004 হতে পারে)।
আর্থিক প্রজেক্টের গোল্ডেন রুলস:
১. ডাটাবেসে সর্বদা DECIMAL(10,2) ব্যবহার করুন।
২. পিএইচপি কোডে পয়সা বা সেন্টে (Integer minor unit) রূপান্তর করে হিসাব করুন (যেমন ৳১০০.৫০ = ১০০৫০ পয়সা), এতে ফ্লোটিং পয়েন্ট বাগ শূন্যে নেমে আসে!`,
          code: `<?php

$priceInTaka = 100.50;
$priceInPaisa = (int) round($priceInTaka * 100); // 10050 paisa

// হিসাব পয়সায় সম্পাদন
$itemCount = 3;
$totalPaisa = $priceInPaisa * $itemCount;

// ডিসপ্লে করার সময় পুনরায় টাকায় রূপান্তর
$finalTaka = $totalPaisa / 100;

echo "Total in Paisa (Integer): " . $totalPaisa . " paisa<br>";
echo "Final Display: " . number_format($finalTaka, 2) . " BDT";
?>`,
          codeLanguage: 'Architecture Golden Rule',
          outputPreview: `Total in Paisa (Integer): 30150 paisa\nFinal Display: 301.50 BDT`
        },
        {
          title: '২০. জব/প্রজেক্ট মাস্ট নো চেকলিস্ট ও সারসংক্ষেপ',
          explanationBn: `ইন্টারভিউ এবং রিয়েল-লাইফ প্রজেক্টের জন্য সবচেয়ে গুরুত্বপূর্ণ Math কনসেপ্টস:
• round() বনাম ceil() বনাম floor() এর ব্যবহারক্ষেত্র
• abs() দিয়ে দূরত্বের মান বের করা
• min() / max() দিয়ে ক্যাটালগ ফিল্টারিং
• intdiv() দিয়ে সমান ভাগে গ্রুপ বা বাক্স তৈরি
• rand() পরিহার করে random_int() ও random_bytes() দিয়ে ওটিপি ও টোকেন তৈরি
• number_format() দিয়ে শেষ মুহূর্তে কারেন্সি প্রদর্শন`,
          code: `<?php
echo "Core Principle: Calculate with raw numbers -> Format only at presentation layer.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'ceil() পেজিনেশন ও শিপিং বক্স হিসাবে এবং floor() পূর্ণ ইউনিট বা পয়েন্ট হিসাবে অপরিহার্য।',
        'ওটিপি ও পাসওয়ার্ড রিসেট টোকেনে অনিরাপদ rand() ব্যবহার নিষিদ্ধ; ক্রিপ্টোগ্রাফিক্যালি নিরাপদ random_int() বা random_bytes() ব্যবহার করতে হবে।',
        'ডিসকাউন্ট ও ভ্যাট হিসাবের স্ট্যান্ডার্ড নিয়ম: ডিসকাউন্ট বাদ দিয়ে অবশিষ্ট মূল্যের উপর ভ্যাট যোগ করতে হয়।',
        'টাকাপয়সার হিসাবে ফ্লোট প্রিসিশন এড়াতে ডাটাবেসে DECIMAL(10,2) এবং কোডে পয়সা/সেন্টে Integer হ্যান্ডলিং প্রফেশনাল মানদণ্ড।',
        'number_format() দিয়ে কখনো গাণিতিক অপারেশন চালাবেন না; এটি শুধুমাত্র ব্রাউজারে সুন্দরভাবে উপস্থাপনের জন্য।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ ১: ডাইনামিক পেজিনেশন ক্যালকুলেটর',
          descriptionBn: 'মোট ডেটা এবং প্রতি পৃষ্ঠার সংখ্যার উপর ভিত্তি করে ceil() দিয়ে মোট পৃষ্ঠা বের করার কোড।',
          code: `<?php
$totalProducts = 127;
$perPage = 15;

$totalPages = ceil($totalProducts / $perPage);
$currentPage = 1;

echo "Total Records: {$totalProducts}<br>";
echo "Products Per Page: {$perPage}<br>";
echo "<b>Total Pages Needed: {$totalPages}</b><br>";

// বর্তমান পৃষ্ঠা সীমা যাচাই
if ($currentPage > $totalPages) {
    echo "Page not found!";
} else {
    $offset = ($currentPage - 1) * $perPage;
    echo "SQL OFFSET: {$offset}, LIMIT: {$perPage}";
}
?>`
        },
        {
          title: 'বাস্তব উদাহরণ ২: ই-কমার্স ডিসকাউন্ট, ট্যাক্স ও ওটিপি জেনারেটর',
          descriptionBn: 'সম্পূর্ণ চেকআউট কার্ট হিসাব এবং অর্ডার কনফার্মেশনের জন্য সিকিউর ওটিপি পাঠানো।',
          code: `<?php
$subtotal = 3500;
$promoDiscount = 12; // ১২% প্রমো কোড
$vat = 7.5;          // ৭.৫% ভ্যাট

$discount = ($subtotal * $promoDiscount) / 100;
$netAmount = $subtotal - $discount;
$tax = ($netAmount * $vat) / 100;
$payable = $netAmount + $tax;

$orderOtp = random_int(100000, 999999);

echo "<h3>Checkout Receipt</h3>";
echo "Subtotal: " . number_format($subtotal, 2) . " BDT<br>";
echo "Promo Discount (-12%): -" . number_format($discount, 2) . " BDT<br>";
echo "Net Taxable Amount: " . number_format($netAmount, 2) . " BDT<br>";
echo "VAT (+7.5%): +" . number_format($tax, 2) . " BDT<br>";
echo "<b>Payable: " . number_format($payable, 2) . " BDT</b><br>";
echo "Verification OTP sent: <b>{$orderOtp}</b>";
?>`
        }
      ]
    }
  },
  {
    id: 'php-constants',
    title: 'PHP Constants',
    category: 'basic',
    tag: 'Immutability',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'const, define(), Naming Conventions, Magic Numbers পরিহার, Class Constants ও .env আর্কিটেকচার।',
    sampleCode: `<?php
// ১. গ্লোবাল অ্যাপ্লিকেশন রুলস ও কনফিগারেশন
const APP_NAME = "MyShop";
const APP_VERSION = "2.1.0";
const TAX_RATE = 15; // ১৫% ভ্যাট
const MINIMUM_AGE = 18;
const STATUS_ACTIVE = 1;

// ২. অবজেক্ট ওরিয়েন্টেড ক্লাসের ভেতরে কনস্ট্যান্ট গ্রুপিং
class OrderStatus
{
    public const PENDING = 'pending';
    public const PAID = 'paid';
    public const SHIPPED = 'shipped';
}

// ৩. বিজনেস লজিকে ব্যবহার (ম্যাজিক নম্বর ছাড়া পরিষ্কার কোড)
$price = 1200;
$taxAmount = ($price * TAX_RATE) / 100;
$total = $price + $taxAmount;

$currentStatus = OrderStatus::PAID;

echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 8px 0; color:#0f172a;'>" . APP_NAME . " (v" . APP_VERSION . ")</h3>";
echo "<p style='margin:4px 0;'>Base Price: " . number_format($price, 2) . " BDT</p>";
echo "<p style='margin:4px 0;'>Tax (" . TAX_RATE . "%): +" . number_format($taxAmount, 2) . " BDT</p>";
echo "<p style='margin:4px 0; color:#16a34a;'><b>Total: " . number_format($total, 2) . " BDT</b></p>";
echo "<hr style='border:0; border-top:1px solid #cbd5e1; margin:8px 0;'>";
echo "<p style='margin:4px 0; color:#475569; font-size:13px;'>Order Status: <b>{$currentStatus}</b> | Min Age Required: <b>" . MINIMUM_AGE . " yrs</b></p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Constant হলো এমন একটি নামযুক্ত মেমোরি স্লট যার মান স্ক্রিপ্ট এক্সিকিউশনের সময় কখনোই পরিবর্তন (Reassign) করা যায় না। পিএইচপিতে const কিওয়ার্ড ও define() ফাংশন দিয়ে কনস্ট্যান্ট তৈরি করা হয়। বাস্তব প্রজেক্টে বিজনেস রুলস, স্ট্যাটাস কোড, লিমিটেশন এবং কনফিগারেশন ফিক্সড রাখার জন্য কনস্ট্যান্ট ব্যবহার করা হয় যাতে কোডে অস্পষ্ট "Magic Numbers" পরিহার করে সেলফ-এক্সপ্ল্যানেটরি কোড লেখা যায়।`,
      lessonSections: [
        {
          title: '১. const কীওয়ার্ড ও বেসিক ব্যবহার',
          explanationBn: `Modern PHP-তে কনস্ট্যান্ট ডিফাইন করার সবচেয়ে পরিচ্ছন্ন ও পছন্দের পদ্ধতি হলো const কীওয়ার্ড। কনস্ট্যান্টের নামের পূর্বে কোনো $ ডলার সাইন থাকে না। একবার ডিফাইন করার পর একই স্কোপে মান পুনর্নির্ধারণ করা অসম্ভব।`,
          code: `<?php

const APP_NAME = "MyShop";
const APP_VERSION = "1.0.0";

echo "Application: " . APP_NAME . "<br>";
echo "Version: " . APP_VERSION;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Application: MyShop\nVersion: 1.0.0`
        },
        {
          title: '২. define() ফাংশন',
          explanationBn: `define() ফাংশনের মাধ্যমে রানটাইমে কনস্ট্যান্ট তৈরি করা যায় (যেমন কোনো if কন্ডিশনের ভেতরে)। তবে মডার্ন অবজেক্ট-ওরিয়েন্টেড এবং ফ্রেমওয়ার্ক ভিত্তিক পিএইচপিতে const কীওয়ার্ড বেশি রিডেবল ও স্ট্যান্ডার্ড।`,
          code: `<?php

define("SITE_TITLE", "My Tech Store");
define("MAX_FILE_UPLOAD_MB", 25);

echo "Title: " . SITE_TITLE . "<br>";
echo "Max Upload: " . MAX_FILE_UPLOAD_MB . " MB";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Title: My Tech Store\nMax Upload: 25 MB`
        },
        {
          title: '৩. Constant Naming Convention (নেমিং কনভেনশন)',
          explanationBn: `পিএইচপি স্ট্যান্ডার্ড অনুযায়ী কনস্ট্যান্টের নাম সর্বদা UPPERCASE এবং শব্দগুলো আন্ডারস্কোর (_) দিয়ে আলাদা রাখতে হয় (UPPER_SNAKE_CASE)। এতে কোড পড়ার সময় সাধারণ ভেরিয়েবল থেকে কনস্ট্যান্ট সহজেই চেনা যায়।`,
          code: `<?php

const APP_NAME = "MyShop";
const MAX_LOGIN_ATTEMPTS = 5;
const TAX_RATE = 15;
const API_VERSION = "v1";

echo "Max Login Attempts: " . MAX_LOGIN_ATTEMPTS . "<br>";
echo "Tax Rate: " . TAX_RATE . "%";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Max Login Attempts: 5\nTax Rate: 15%`
        },
        {
          title: '৪. const বনাম Variable ($taxRate vs TAX_RATE)',
          explanationBn: `• ভেরিয়েবল ($taxRate = 15): কোডের যেকোনো জায়গায় যেকোনো সময় এর মান পরিবর্তন করা যায়।
• কনস্ট্যান্ট (const TAX_RATE = 15): এর মান স্ক্রিপ্ট চলাকালীন কখনোই বদলানো যায় না।
ফিক্সড বিজনেস রুলস এবং কনফিগারেশনের জন্য সবসময় কনস্ট্যান্ট ব্যবহার করা উচিত।`,
          code: `<?php

$taxRate = 15;
$taxRate = 20; // ভেরিয়েবল পরিবর্তনশীল

const FIXED_TAX_RATE = 15;
// FIXED_TAX_RATE = 20; // Fatal Error: Cannot reassign

echo "Variable Tax Rate: {$taxRate}%<br>";
echo "Constant Tax Rate: " . FIXED_TAX_RATE . "%";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Variable Tax Rate: 20%\nConstant Tax Rate: 15%`
        },
        {
          title: '৫. রিয়েল-লাইফ ক্যালকুলেশন ও সেন্ট্রাল রুলস',
          explanationBn: `কোডে ১৫ সংখ্যাটি বারবার ছড়িয়ে-ছিটিয়ে না লিখে এক জায়গায় TAX_RATE কনস্ট্যান্ট হিসেবে রাখলে পরবর্তীতে ট্যাক্স পরিবর্তন হলে শুধু এক জায়গায় মান বদলালেই পুরো অ্যাপে পরিবর্তন চলে আসে।`,
          code: `<?php

const TAX_RATE = 15;

$price = 1000;
$tax = ($price * TAX_RATE) / 100;
$grandTotal = $price + $tax;

echo "Base: {$price} BDT<br>";
echo "Tax: {$tax} BDT<br>";
echo "Total: {$grandTotal} BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Base: 1000 BDT\nTax: 150 BDT\nTotal: 1150 BDT`
        },
        {
          title: '৬. Class Constants — ক্লাসের ভেতরে রিলেটেড কনস্ট্যান্ট গ্রুপিং',
          explanationBn: `অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ে (OOP) প্রাসঙ্গিক কনস্ট্যান্টগুলোকে ক্লাসের ভেতরে encapsulate করা হয় এবং ClassName::CONSTANT_NAME সিনট্যাক্সে এক্সেস করা হয়।`,
          code: `<?php

class AppConfig
{
    public const APP_NAME = "MyShop";
    public const VERSION = "2.0";
    public const DEFAULT_CURRENCY = "BDT";
}

echo "App: " . AppConfig::APP_NAME . "<br>";
echo "Currency: " . AppConfig::DEFAULT_CURRENCY;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `App: MyShop\nCurrency: BDT`
        },
        {
          title: '৭. Magic Numbers / Values পরিহার করা (Clean Code Must)',
          explanationBn: `❌ Bad Code: কোডে সরাসরি 18, 1, 1.15 বা 3 লিখে রাখা। এগুলোকে "Magic Numbers" বলা হয়, কারণ অন্য ডেভেলপার সহজে বুঝতে পারেন না এগুলো কিসের প্রতীক।
✅ Good Clean Code: কনস্ট্যান্ট ডিফাইন করে অর্থবোধক নামে চেক করা। এতে কোড নিজে নিজেই নিজের ব্যাখ্যা দেয় ("Code should explain itself")।`,
          code: `<?php

// ❌ Bad: Magic Numbers
// if ($age >= 18) { ... }
// if ($status === 1) { ... }
// $total = $price * 1.15;

// ✅ Clean & Professional:
const MINIMUM_AGE = 18;
const STATUS_ACTIVE = 1;
const TAX_MULTIPLIER = 1.15;

$userAge = 20;
$userStatus = 1;
$price = 2000;

if ($userAge >= MINIMUM_AGE) {
    echo "Eligible by age.<br>";
}

if ($userStatus === STATUS_ACTIVE) {
    echo "Account is active.<br>";
}

$total = $price * TAX_MULTIPLIER;
echo "Price with Tax: {$total} BDT";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Eligible by age.\nAccount is active.\nPrice with Tax: 2300 BDT`
        },
        {
          title: '৮. Magic Number বনাম PHP Magic Constant এর বড় পার্থক্য',
          explanationBn: `এই দুটি বিষয় কখনো গুলিয়ে ফেলা যাবে না:
• ❌ Magic Number/Value: নিজের কোডে অস্পষ্ট হার্ডকোডেড মান (যেমন: if ($role === 3))। এগুলো পরিহার করতে হবে।
• ✅ PHP Magic Constants: পিএইচপির বিল্ট-ইন দরকারি কনস্ট্যান্টস (__DIR__, __FILE__, __LINE__)। এগুলো অকারণে পরিহার করার প্রয়োজন নেই, বরং ফাইল ইনক্লুড ও লগিংয়ে বহুল ব্যবহার্য।`,
          code: `<?php

// Magic Number পরিহারের উদাহরণ:
const ROLE_ADMIN = 3;
$currentRole = 3;

if ($currentRole === ROLE_ADMIN) {
    echo "Welcome, System Administrator!";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Welcome, System Administrator!`
        },
        {
          title: '৯. সিকিউরিটি আর্কিটেকচার — Secrets কখনো কনস্ট্যান্টে হার্ডকোড করবেন না!',
          explanationBn: `⚠️ গুরুত্বপূর্ণ আর্কিটেকচার রুল:
ডাটাবেস পাসওয়ার্ড, এপিআই কি, প্রাইভেট সিক্রেট কখনো কোডে const DB_PASS = "123456"; লিখে গিটহাব বা সার্ভারে পুশ করা মারাত্মক ভুল!
প্রোডাকশন প্রজেক্টে এ ধরনের কনফিগারেশন সবসময় .env ফাইল বা Environment Variables থেকে লোড করা হয় (যেমন Laravel-এ env('DB_PASSWORD'))।`,
          code: `<?php

// ❌ Never do this in code:
// const DB_PASSWORD = "super_secret_123";

// ✅ Real-world standard:
$dbHost = getenv('DB_HOST') ?: '127.0.0.1';
echo "DB Host loaded securely from environment: {$dbHost}";
?>`,
          codeLanguage: 'Security Architecture'
        },
        {
          title: '১০. সারসংক্ষেপ ও রিয়েল-লাইফ চেকলিস্ট',
          explanationBn: `কনস্ট্যান্ট ব্যবহার করার ক্ষেত্র:
✓ ফিক্সড বিজনেস রুলস (DISCOUNT_RATE, TAX_RATE)
✓ স্ট্যাটাস ভ্যালু (STATUS_PENDING, STATUS_ACTIVE)
✓ লিমিট (MAX_LOGIN_ATTEMPTS)
✓ কনফিগারেশন ও ভার্সন (API_VERSION)

পরিহার করার নিয়ম:
❌ আন-এক্সপ্লেইন্ড ম্যাজিক নাম্বার্স (if ($status === 3))
❌ হার্ডকোডেড পাসওয়ার্ড বা এপিআই সিক্রেটস`,
          code: `<?php
echo "Core Principle: Code should explain itself. Replace numbers with meaningful constants.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'const একবার ডিফাইন করার পর স্ক্রিপ্ট চলাকালীন পরিবর্তন করা যায় না।',
        'নেমিং কনভেনশন: সর্বদা UPPERCASE ও আন্ডারস্কোর (যেমন TAX_RATE, STATUS_ACTIVE)।',
        'ক্লাসের ভেতরে রিলেটেড কনস্ট্যান্ট গ্রুপ করতে ClassName::CONSTANT_NAME ব্যবহার করা হয়।',
        'Magic Numbers (যেমন সরাসরি 18 বা 3 লেখা) পরিহার করে অর্থপূর্ণ কনস্ট্যান্ট ব্যবহার ক্লিন কোডের মূলনীতি।',
        'পাসওয়ার্ড বা API Secrets কখনো কোডে const হিসেবে হার্ডকোড করা যাবে না; এগুলো .env থেকে লোড করতে হবে।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ ১: ইউজার অর্ডার লাইফসাইকেল স্ট্যাটাস ম্যানেজমেন্ট',
          descriptionBn: 'ক্লাস কনস্ট্যান্ট ব্যবহার করে অর্ডারের বিভিন্ন ধাপ নিয়ন্ত্রণ এবং ম্যাজিক স্ট্রিং পরিহার।',
          code: `<?php
class OrderStatus
{
    public const PENDING = 0;
    public const PROCESSING = 1;
    public const COMPLETED = 2;
    public const CANCELLED = 3;
}

$order = [
    'id' => 1042,
    'status' => OrderStatus::PROCESSING
];

if ($order['status'] === OrderStatus::PROCESSING) {
    echo "Order #{$order['id']} is currently being packaged for shipment.";
} elseif ($order['status'] === OrderStatus::COMPLETED) {
    echo "Order delivered successfully.";
}
?>`
        },
        {
          title: 'বাস্তব উদাহরণ ২: সাবস্ক্রিপশন প্ল্যান কনফিগারেশন',
          descriptionBn: 'বিজনেস লিমিট ও প্ল্যান রেট কনস্ট্যান্টের মাধ্যমে সেন্ট্রাল মেইনটেইন করা।',
          code: `<?php
class SubscriptionTier
{
    public const FREE_PROJECT_LIMIT = 3;
    public const PRO_PROJECT_LIMIT = 50;
    public const PRO_MONTHLY_PRICE = 999; // BDT
}

$userCreatedProjects = 3;
$userPlan = 'free';

if ($userPlan === 'free' && $userCreatedProjects >= SubscriptionTier::FREE_PROJECT_LIMIT) {
    echo "Project limit reached (" . SubscriptionTier::FREE_PROJECT_LIMIT . "). Please upgrade to Pro for " . SubscriptionTier::PRO_MONTHLY_PRICE . " BDT/month!";
}
?>`
        }
      ]
    }
  },
  {
    id: 'php-magic-constants',
    title: 'PHP Magic Constants',
    category: 'basic',
    tag: 'Metaprogramming',
    phpVersion: 'PHP 8.0+',
    subtitleBn: '__DIR__, __FILE__, __LINE__, __FUNCTION__, __CLASS__, __METHOD__, __NAMESPACE__ ও __TRAIT__।',
    sampleCode: `<?php
// ১. প্রজেক্ট ফাইল পাথ রেজোলিউশন (সবচেয়ে বাস্তবসম্মত ব্যবহার)
$currentDir = __DIR__;
$currentFile = __FILE__;
$currentLine = __LINE__;

// ২. অবজেক্ট-ওরিয়েন্টেড ক্লাসে ডিবাগিং ও লগিং
namespace App\Services;

trait Loggable
{
    public function logTrait()
    {
        return "Trait used: " . __TRAIT__;
    }
}

class AuthService
{
    use Loggable;

    public function login(string $username)
    {
        return [
            'file' => __FILE__,
            'line' => __LINE__,
            'class' => __CLASS__,
            'method' => __METHOD__,
            'function' => __FUNCTION__,
            'namespace' => __NAMESPACE__,
            'trait' => $this->logTrait(),
            'message' => "User {$username} logged in successfully."
        ];
    }
}

$service = new AuthService();
$logData = $service->login("abbad_dev");

echo "<div style='font-family:monospace; background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-size:13px;'>";
echo "<h4 style='margin:0 0 8px 0; color:#f8fafc; font-family:sans-serif;'>PHP Magic Constants Runtime Inspection:</h4>";
foreach ($logData as $key => $val) {
    echo "<b>" . str_pad($key . ":", 12) . "</b> " . htmlspecialchars($val) . "<br>";
}
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Magic Constant হলো PHP-এর বিল্ট-ইন স্পেশাল কনস্ট্যান্টস, যেগুলোর মান কোডের অবস্থান এবং রানটাইম কনটেক্সট অনুযায়ী পিএইচপি নিজে স্বয়ংক্রিয়ভাবে নির্ধারণ করে দেয়। এগুলো দেখতে সাধারণ কনস্ট্যান্টের মতো হলেও অবস্থানের পরিবর্তনে এদের আউটপুট ডাইনামিকালি পরিবর্তিত হয়। প্রতিটি ম্যাজিক কনস্ট্যান্টের শুরুতে ও শেষে দুটি আন্ডারস্কোর (Double Underscore) থাকে। রিয়েল-লাইফে ফাইল ইনক্লুড, এরর লগিং, অটোরোড ফ্রেমওয়ার্ক আর্কিটেকচার এবং ইউনিট টেস্টিংয়ে এগুলো অপরিহার্য।`,
      lessonSections: [
        {
          title: '১. __FILE__ — বর্তমান ফাইলের সম্পূর্ণ পাথ',
          explanationBn: `__FILE__ যে ফাইলে এটি লেখা হয়েছে তার সম্পূর্ণ অ্যাবসোলিউট ফাইল পাথ (Full system path) রিটার্ন করে। এটি ফাইল অবস্থান নিরীক্ষা ও এরর ট্রেসিংয়ে সাহায্য করে।`,
          code: `<?php

echo "Current File Path:<br>";
echo __FILE__;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '২. __DIR__ — বর্তমান ফাইলের ডিরেক্টরি পাথ (রিয়েল-লাইফে সবচেয়ে জরুরি)',
          explanationBn: `__DIR__ বর্তমান স্ক্রিপ্টটি যে ডিরেক্টরিতে (ফোল্ডারে) অবস্থিত তার সম্পূর্ণ পাথ দেয়।
রিয়েল-ওয়ার্ল্ড অ্যাপ্লিকেশন: রিলেটিভ পাথের গোলমাল এড়াতে config, database বা helper ফাইল include/require করতে সর্বদা __DIR__ ব্যবহার করা হয়।`,
          code: `<?php

echo "Current Directory Path:<br>";
echo __DIR__ . "<br><br>";

// প্রজেক্টে ফাইল সংযুক্তির আদর্শ উদাহরণ:
$configPath = __DIR__ . "/config/database.php";
echo "Safe Include Path: " . $configPath;
?>`,
          codeLanguage: 'Production Standard'
        },
        {
          title: '৩. __LINE__ — বর্তমান লাইন নম্বর',
          explanationBn: `__LINE__ যে লাইনে এক্সিকিউট হচ্ছে ঠিক সেই লাইনের নম্বর প্রকাশ করে। এরর হ্যান্ডলিং এবং এক্সেপশন লগিংয়ে কোন লাইনে সমস্যা হয়েছে তা তাৎক্ষণিক শনাক্ত করতে এটি ব্যবহৃত হয়।`,
          code: `<?php

echo "This message is printed at line: " . __LINE__ . "<br>";
echo "Another check at line: " . __LINE__;
?>`,
          codeLanguage: 'PHP Live Code'
        },
        {
          title: '৪. __FUNCTION__ — বর্তমান ফাংশনের নাম',
          explanationBn: `ফাংশনের ব্লকের ভেতরে __FUNCTION__ কল করলে সেই ফাংশনের নাম পাওয়া যায়। ফাংশন লগিং বা প্রফাইলিংয়ে এটি খুব কার্যকর।`,
          code: `<?php

function processPayment()
{
    echo "Executing function: " . __FUNCTION__;
}

processPayment();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Executing function: processPayment`
        },
        {
          title: '৫. __CLASS__ — বর্তমান ক্লাসের নাম',
          explanationBn: `অবজেক্ট ওরিয়েন্টেড ক্লাসের ভেতরে __CLASS__ বর্তমান ক্লাসের নাম রিটার্ন করে। ক্লাস ইনিশিয়ালাইজেশন ডিবাগ করতে এটি বহুল ব্যবহৃত।`,
          code: `<?php

class User
{
    public function getClassName()
    {
        return "Current Class: " . __CLASS__;
    }
}

$user = new User();
echo $user->getClassName();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Current Class: User`
        },
        {
          title: '৬. __METHOD__ — ক্লাস + মেথডের নাম',
          explanationBn: `__METHOD__ ক্লাস এবং মেথড উভয়ের সমন্বিত নাম প্রদান করে (যেমন User::login)। সার্ভিস ক্লাসের অ্যাকশন ট্রেস করতে এটি আদর্শ।`,
          code: `<?php

class AccountService
{
    public function verifyKyc()
    {
        return "Trace Method: " . __METHOD__;
    }
}

$service = new AccountService();
echo $service->verifyKyc();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Trace Method: AccountService::verifyKyc`
        },
        {
          title: '৭. __NAMESPACE__ — বর্তমান নেমস্পেসের নাম',
          explanationBn: `মডার্ন পিএইচপি ফ্রেমওয়ার্কে (Laravel, Symfony) ফাইলগুলো নেমস্পেস দিয়ে ভাগ করা থাকে। __NAMESPACE__ দিয়ে ফাইলটি কোন নেমস্পেসে অবস্থান করছে তা জানা যায়।`,
          code: `<?php

namespace App\\Controllers;

echo "Current Namespace: " . __NAMESPACE__;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Current Namespace: App\\Controllers`
        },
        {
          title: '৮. __TRAIT__ — বর্তমান ট্রেইটের নাম',
          explanationBn: `পিএইচপি ট্রেইটের ভেতরে __TRAIT__ ব্যবহার করলে সেই ট্রেইটের নাম পাওয়া যায়, যা রি-ইউজেবল মডিউল লগিংয়ে সহায়তা করে।`,
          code: `<?php

trait AuditLogger
{
    public function getTraitName()
    {
        return "Active Trait: " . __TRAIT__;
    }
}

class Invoice
{
    use AuditLogger;
}

$inv = new Invoice();
echo $inv->getTraitName();
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Active Trait: AuditLogger`
        },
        {
          title: '৯. সবচেয়ে গুরুত্বপূর্ণ রিয়েল-লাইফ ফাইল ইনক্লুশন প্যাটার্ন',
          explanationBn: `সার্ভারে কাজ করার সময় রিলেটিভ পাথ (যেমন: "../config.php") প্রায়ই Broken Link সমস্যা তৈরি করে কারণ রানটাইম কারেন্ট ওয়ার্কিং ডিরেক্টরি পরিবর্তন হতে পারে।
তাই প্রফেশনাল পিএইচপি কোডাররা সবসময় __DIR__ প্রিফিক্স যোগ করেন:
require_once __DIR__ . '/../config/database.php';`,
          code: `<?php

$absolutePath = __DIR__ . "/../config/database.php";
echo "Guaranteed Absolute Path: " . $absolutePath;
?>`,
          codeLanguage: 'Production Standard'
        },
        {
          title: '১০. ম্যাজিক কনস্ট্যান্ট চেকলিস্ট ও রিক্যাপ',
          explanationBn: `যেগুলো সবচেয়ে বেশি মনে রাখতে হবে:
⭐⭐⭐ __DIR__ ➔ ফাইল ডিরেক্টরি পাথ (সবচেয়ে বেশি ব্যবহৃত)
⭐⭐⭐ __FILE__ ➔ সম্পূর্ণ ফাইল পাথ
⭐⭐ __METHOD__ ➔ Class::method এর নাম
⭐ __LINE__ ➔ বর্তমান লাইন নম্বর (লগিংয়ে সেরা)
⭐ __CLASS__ ➔ বর্তমান ক্লাসের নাম
⭐ __NAMESPACE__ ➔ ফাইল নেমস্পেস`,
          code: `<?php
echo "Core Insight: Magic Constants provide dynamic context to static code.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'Magic Constants রানটাইম কনটেক্সটের ওপর ভিত্তি করে ডাইনামিক মান দেয়, যদিও এরা দেখতে কনস্ট্যান্টের মতো।',
        'সবচেয়ে বেশি ব্যবহৃত ম্যাজিক কনস্ট্যান্ট হলো __DIR__ ও __FILE__, যা নির্ভরযোগ্য ফাইল পাথ তৈরিতে ব্যবহৃত হয়।',
        'লগিং ও ডিবাগিংয়ের জন্য __LINE__, __FUNCTION__, __CLASS__ ও __METHOD__ অত্যন্ত কার্যকর।',
        'ম্যাজিক কনস্ট্যান্ট এবং ম্যাজিক নম্বর এক জিনিস নয়: ম্যাজিক কনস্ট্যান্ট পিএইচপির দরকারী ফিচার, আর ম্যাজিক নম্বর কোডে পরিহারযোগ্য ব্যাড প্র্যাকটিস।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ ১: সেন্ট্রাল সিস্টেম এরর ও অ্যাক্টিভিটি লগার',
          descriptionBn: '__FILE__, __LINE__ ও __METHOD__ ব্যবহার করে স্বয়ংক্রিয় অডিট লগ অবজেক্ট তৈরি।',
          code: `<?php
class SystemLogger
{
    public static function logError(string $message, string $file, int $line, string $method)
    {
        return sprintf(
            "[%s] ERROR in %s (Line %d) -> %s: %s",
            date('Y-m-d H:i:s'),
            basename($file),
            $line,
            $method,
            $message
        );
    }
}

class PaymentGateway
{
    public function processCharge(float $amount)
    {
        if ($amount <= 0) {
            return SystemLogger::logError(
                "Invalid charge amount: {$amount}",
                __FILE__,
                __LINE__,
                __METHOD__
            );
        }
        return "Charge processed.";
    }
}

$gateway = new PaymentGateway();
echo $gateway->processCharge(-100);
?>`
        },
        {
          title: 'বাস্তব উদাহরণ ২: ফ্রেমওয়ার্ক-স্টাইল সুরক্ষিত ফাইল লোডার',
          descriptionBn: '__DIR__ ব্যবহার করে কনফিগারেশন পাথ নির্ধারণের ক্লিন প্যাটার্ন।',
          code: `<?php
function getBootstrapConfig()
{
    $basePath = __DIR__;
    $configFiles = [
        'app' => $basePath . '/config/app.php',
        'db'  => $basePath . '/config/database.php',
        'mail'=> $basePath . '/config/mail.php'
    ];
    return $configFiles;
}

$paths = getBootstrapConfig();
foreach ($paths as $service => $path) {
    echo "Service [{$service}] -> {$path}<br>";
}
?>`
        }
      ]
    }
  },
  {
    id: 'php-operators',
    title: 'PHP Operators',
    category: 'basic',
    tag: 'Logic & Expressions',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Arithmetic, Assignment, Comparison (== vs ===), Logical, Increment, Null Coalescing (??, ??=), Ternary ও Array Operators।',
    sampleCode: `<?php
// ১. গাণিতিক ও অ্যাসাইনমেন্ট অপারেটর
$basePrice = 1200;
$quantity = 3;
$subtotal = $basePrice * $quantity;
$subtotal += 100; // ডেলিভারি চার্জ যোগ

// ২. নাল কোলেসিং ও টার্নারি অপারেটর (??, ?:)
$customerName = $_GET['user'] ?? 'Valued Customer';
$discountRate = ($subtotal >= 3000) ? 0.10 : 0.05; // ১০% অথবা ৫%
$discountAmount = $subtotal * $discountRate;
$finalPayable = $subtotal - $discountAmount;

// ৩. লজিক্যাল ও স্ট্রিক্ট কম্প্যারিজন (===, &&)
$isVip = true;
$isEligibleForGift = ($finalPayable > 2500) && ($isVip === true);

// ৪. স্ট্রিং কনক্যাটেনেশন (.=)
$summaryMessage = "Hello, " . htmlspecialchars($customerName) . "!";
$summaryMessage .= " Your order is successfully processed.";

echo "<div style='font-family:sans-serif; background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;'>";
echo "<h3 style='margin:0 0 8px 0; color:#0f172a;'>" . $summaryMessage . "</h3>";
echo "<p style='margin:4px 0;'>Subtotal + Delivery: " . number_format($subtotal, 2) . " BDT</p>";
echo "<p style='margin:4px 0; color:#dc2626;'>Discount (" . ($discountRate * 100) . "%): -" . number_format($discountAmount, 2) . " BDT</p>";
echo "<p style='margin:4px 0; color:#16a34a; font-size:18px;'><b>Final Payable: " . number_format($finalPayable, 2) . " BDT</b></p>";
echo "<hr style='border:0; border-top:1px solid #cbd5e1; margin:10px 0;'>";
echo "<p style='margin:4px 0; font-size:13px; color:#475569;'>VIP Gift Bonus Status: <b>" . ($isEligibleForGift ? "🎉 Free Gift Included!" : "Standard Packaging") . "</b></p>";
echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Operator হলো এমন বিশেষ প্রতীক (Symbol) বা কিওয়ার্ড যা ভেরিয়েবল এবং ভ্যালুসমূহের ওপর গাণিতিক হিসাব (Calculation), মান তুলনা (Comparison), শর্ত নির্ধারণ (Logical Condition), অ্যাসাইনমেন্ট (Assignment) এবং নাল হ্যান্ডলিং সম্পন্ন করতে ব্যবহৃত হয়। পিএইচপিতে ক্লিন ও বাগ-মুক্ত কোড লেখার জন্য অপারেটরসমূহের আচরণ (বিশেষ করে == বনাম === এবং ?? অপারেটর) নিখুঁতভাবে বোঝা অত্যন্ত গুরুত্বপূর্ণ। প্রোডাকশন স্ট্যান্ডার্ডে নিরাপদ রুল হলো: Input ➔ Validate ➔ Compare (===) ➔ Process।`,
      lessonSections: [
        {
          title: '১. Arithmetic Operators (গাণিতিক অপারেটরসমূহ)',
          explanationBn: `মৌলিক গণনার জন্য ৬টি প্রধান গাণিতিক অপারেটর:
• + (যোগ), - (বিয়োগ), * (গুণ), / (ভাগ)
• % (মডিউলাস বা ভাগশেষ) — জোড়/বিজোড় বা চক্রাকার প্যাটার্নে ব্যবহৃত হয়
• ** (ঘাত বা Exponentiation) — পাওয়ার নির্ণয় (যেমন: 2 ** 3 = 8)`,
          code: `<?php

$a = 10;
$b = 3;

echo "Addition (10 + 3): " . ($a + $b) . "<br>";
echo "Subtraction (10 - 3): " . ($a - $b) . "<br>";
echo "Multiplication (10 * 3): " . ($a * $b) . "<br>";
echo "Division (10 / 3): " . ($a / $b) . "<br>";
echo "Remainder / Modulus (10 % 3): " . ($a % $b) . "<br>";
echo "Power (10 ** 3): " . ($a ** $b);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Addition (10 + 3): 13\nSubtraction (10 - 3): 7\nMultiplication (10 * 3): 30\nDivision (10 / 3): 3.3333333333333\nRemainder / Modulus (10 % 3): 1\nPower (10 ** 3): 1000`
        },
        {
          title: '২. Assignment Operators (সংক্ষিপ্ত অ্যাসাইনমেন্ট)',
          explanationBn: `ভেরিয়েবলের বর্তমান মানের সাথে অপারেশন চালিয়ে পুনরায় সেই ভেরিয়েবলেই মান সেট করার শর্টকাট।
সবচেয়ে কমন অপারেটরসমূহ: =, +=, -=, *=, /=, %=`,
          code: `<?php

$x = 10;
$x += 5; // $x = 15
$x -= 3; // $x = 12
$x *= 2; // $x = 24
$x /= 4; // $x = 6
$x %= 4; // $x = 2

echo "Final value of x: " . $x;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Final value of x: 2`
        },
        {
          title: '৩. Comparison Operators (মান তুলনা)',
          explanationBn: `দুটি মানের মধ্যে তুলনা করে true বা false রিটার্ন করে:
• == (সমান মান), != বা <> (অসমান মান)
• === (সমান মান এবং সমান টাইপ - Strict)
• !== (মান বা টাইপ অসমান - Strict)
• > (বড়), < (ছোট), >= (বড় বা সমান), <= (ছোট বা সমান)
• <=> (Spaceship অপারেটর: ছোট হলে -1, সমান হলে 0, বড় হলে 1)`,
          code: `<?php

$a = 10;
$b = 20;

echo "10 < 20: ";
var_dump($a < $b);
echo "<br>10 > 20: ";
var_dump($a > $b);
echo "<br>Spaceship (10 <=> 20): " . ($a <=> $b) . "<br>";
echo "Spaceship (20 <=> 20): " . (20 <=> 20) . "<br>";
echo "Spaceship (30 <=> 20): " . (30 <=> 20);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `10 < 20: bool(true)\n10 > 20: bool(false)\nSpaceship (10 <=> 20): -1\nSpaceship (20 <=> 20): 0\nSpaceship (30 <=> 20): 1`
        },
        {
          title: '৪. == বনাম === (লুজ বনাম স্ট্রিক্ট সমতা — সবচেয়ে গুরুত্বপূর্ণ)',
          explanationBn: `⚠️ ইন্টারভিউ ও প্রোডাকশনের গোল্ডেন রুল:
• == (Loose): পিএইচপি স্বয়ংক্রিয় টাইপ রূপান্তর করে শুধু মান তুলনা করে। তাই "10" == 10 দিলে true হয়।
• === (Strict): মান এবং ডেটা টাইপ দুটোই হুবহু এক হতে হবে। তাই "10" === 10 দিলে false হয়।
প্রোডাকশনে অপ্রত্যাশিত বাগ ও সিকিউরিটি ঝুঁকি এড়াতে সর্বদা === এবং !== ব্যবহার করুন।`,
          code: `<?php

$num = 100;
$str = "100";

echo "'100' == 100 (Loose): ";
var_dump($str == $num);

echo "<br>'100' === 100 (Strict): ";
var_dump($str === $num);

echo "<br>'100' !== 100 (Strict Inequality): ";
var_dump($str !== $num);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `'100' == 100 (Loose): bool(true)\n'100' === 100 (Strict): bool(false)\n'100' !== 100 (Strict Inequality): bool(true)`
        },
        {
          title: '৫. Logical Operators (যৌক্তিক শর্ত: &&, ||, !)',
          explanationBn: `একাধিক শর্ত একত্রিত করতে ব্যবহৃত হয়:
• && (AND) — সব শর্ত সত্য হলে তবেই সত্য
• || (OR) — যেকোনো একটি শর্ত সত্য হলেই সত্য
• ! (NOT) — সত্যকে মিথ্যা এবং মিথ্যাকে সত্য করে
(নোট: and, or ও রয়েছে, তবে কম প্রেসিডেন্সের কারণে আধুনিক কোডে && এবং || ব্যবহার করা স্ট্যান্ডার্ড)।`,
          code: `<?php

$age = 22;
$isVerified = true;
$role = "editor";

// AND শর্ত
if ($age >= 18 && $isVerified === true) {
    echo "✓ User is eligible.<br>";
}

// OR শর্ত
if ($role === "admin" || $role === "editor") {
    echo "✓ Access granted to CMS.<br>";
}

// NOT শর্ত
$isBanned = false;
if (!$isBanned) {
    echo "✓ Account is in good standing.";
}
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `✓ User is eligible.\n✓ Access granted to CMS.\n✓ Account is in good standing.`
        },
        {
          title: '৬. Increment / Decrement (++ ও -- এর Prefix বনাম Postfix)',
          explanationBn: `কাউন্টার ১ বাড়ানোর জন্য ++ এবং ১ কমানোর জন্য -- ব্যবহৃত হয়:
• Postfix ($count++): আগে বর্তমান মান রিটার্ন করে, তারপর মান ১ বাড়ে।
• Prefix (++$count): আগে মান ১ বৃদ্ধি পায়, তারপর নতুন মান রিটার্ন করে।`,
          code: `<?php

$count = 5;

echo "Initial: {$count}<br>";
echo "Postfix count++ returns: " . $count++ . " (then becomes 6)<br>";
echo "Current now: {$count}<br>";
echo "Prefix ++count returns: " . ++$count . " (immediately 7)";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Initial: 5\nPostfix count++ returns: 5 (then becomes 6)\nCurrent now: 6\nPrefix ++count returns: 7`
        },
        {
          title: '৭. String Operators (. এবং .=)',
          explanationBn: `পিএইচপিতে স্ট্রিং জোড়া লাগানোর (Concatenation) জন্য ডট (.) অপারেটর এবং অ্যাপেন্ড করার জন্য (.=) অপারেটর ব্যবহৃত হয়।`,
          code: `<?php

$firstName = "Abbad";
$lastName = "Khan";

// ডট (.) দিয়ে কনক্যাট
$fullName = $firstName . " " . $lastName;
echo "Full Name: " . $fullName . "<br>";

// ডট-সমান (.=) দিয়ে অ্যাপেন্ড
$message = "Welcome to PHP";
$message .= " Masterclass!";
echo "Appended: " . $message;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Full Name: Abbad Khan\nAppended: Welcome to PHP Masterclass!`
        },
        {
          title: '৮. Null Coalescing Operator (??)',
          explanationBn: `?? অপারেটর চেক করে ভেরিয়েবলটি সংজ্ঞায়িত আছে কি না এবং তার মান null নয় কি না। মান থাকলে সেটিই নেয়, অন্যথায় ডিফল্ট ব্যাকআপ মান ব্যবহার করে।
এটি isset($val) ? $val : $default এর সংক্ষিপ্ত ও নিখুঁত রূপ।`,
          code: `<?php

// সিমুলেটেড কুয়েরি প্যারামিটার
$userName = $_GET['name'] ?? "Guest";
$theme = $_GET['theme'] ?? "light";

echo "Current User: " . $userName . "<br>";
echo "Selected Theme: " . $theme;
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Current User: Guest\nSelected Theme: light`
        },
        {
          title: '৯. Null Coalescing Assignment Operator (??=)',
          explanationBn: `??= অপারেটর ভেরিয়েবলটি যদি নাল বা আনসেট থাকে, শুধুমাত্র তখনই ডানপাশের মানটি সেই ভেরিয়েবলে অ্যাসাইন করে।`,
          code: `<?php

$settings = [];
// ইউজার প্রোফাইল রোল সেট না থাকলে ডিফল্ট 'subscriber' সেট করো
$settings['role'] ??= 'subscriber';
echo "Assigned Role: " . $settings['role'] . "<br>";

// আবার কল করলে আগেরটি বজায় থাকবে
$settings['role'] ??= 'admin';
echo "After second check: " . $settings['role'];
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Assigned Role: subscriber\nAfter second check: subscriber`
        },
        {
          title: '১০. Ternary Operator (? :) — এক লাইনের শর্ট কন্ডিশন',
          explanationBn: `(condition) ? trueValue : falseValue
ছোট লজিক সহজে লিখতে টার্নারি অপারেটর দারুণ কার্যকর।
⚠️ সতর্কতা: টার্নারি অপারেটরে কখনো জটিল বা নেস্টেড বড় লজিক লিখবেন না, এতে কোডের রিডেবিলিটি নষ্ট হয়।`,
          code: `<?php

$age = 20;
$status = ($age >= 18) ? "Adult" : "Minor";

$accountBalance = 450;
$canOrder = ($accountBalance >= 500) ? "Yes" : "Insufficient Balance";

echo "Age Status: {$status}<br>";
echo "Can Place Order: {$canOrder}";
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Age Status: Adult\nCan Place Order: Insufficient Balance`
        },
        {
          title: '১১. Array Operators (+ Union, ==, ===)',
          explanationBn: `অ্যারে যুক্ত করতে + (Array Union) ব্যবহৃত হয়। এটি বাম পাশের অ্যারের কী ঠিক রেখে ডান পাশের নতুন কী-গুলোকে যোগ করে।
== অ্যারের কী ও ভ্যালু চেক করে, কিন্তু === অ্যারের ক্রম (order) এবং ডেটাটাইপও নিখুঁতভাবে চেক করে।`,
          code: `<?php

$a = ["name" => "Abbad", "city" => "Dhaka"];
$b = ["age" => 25, "city" => "Chittagong"];

// Union: 'city' কী $a তে থাকায় $b-এর 'city' ওভাররাইট হবে না
$combined = $a + $b;
print_r($combined);
?>`,
          codeLanguage: 'PHP Live Code',
          outputPreview: `Array\n(\n    [name] => Abbad\n    [city] => Dhaka\n    [age] => 25\n)`
        },
        {
          title: '১২. Bitwise, Error Control (@) ও Execution (``) সতর্কতা',
          explanationBn: `• Bitwise Operators (&, |, ^, ~, <<, >>) বাইনারি বিট লেভেলে কাজ করে যা সাধারণ ওয়েব ডেভেলপমেন্টে খুব কম প্রয়োজন হয়।
⚠️ Error Control Operator (@): @$file = file('...'); দিয়ে এরর বার্তা লুকিয়ে রাখা যায়। প্রোডাকশনে @ ব্যবহার করা অত্যন্ত খারাপ অভ্যাস, কারণ আসল এরর চাপা পড়ে ডিবাগিং অসম্ভব হয়ে যায়।
⚠️ Execution Operator (\`ls\`): ব্যাকটিক দিয়ে শেল কমান্ড চালানো বড় সিকিউরিটি ঝুঁকি তৈরি করতে পারে বিধায় এড়িয়ে চলাই স্ট্যান্ডার্ড।`,
          code: `<?php

// Bitwise AND উদাহরণ (5 = 101, 3 = 011 -> 001 = 1)
$bit = 5 & 3;
echo "Bitwise (5 & 3): " . $bit . "<br>";

echo "Production Rule: Avoid '@' error suppression and backticks execution.";
?>`,
          codeLanguage: 'Architecture Warning',
          outputPreview: `Bitwise (5 & 3): 1\nProduction Rule: Avoid '@' error suppression and backticks execution.`
        },
        {
          title: '১৩. জব ও প্রজেক্ট মাস্ট নো — সারসংক্ষেপ',
          explanationBn: `প্রোডাকশন চেকলিস্ট:
১. সমতা ও তুলনাতে লুজ == পরিহার করে সর্বদা স্ট্রিক্ট === ও !== ব্যবহার।
২. রিকোয়েস্ট ডেটা বা ফলব্যাক হ্যান্ডলিংয়ে ?? এবং ??= এর পরিচ্ছন্ন ব্যবহার।
৩. ইনক্রিমেন্টে Prefix বনাম Postfix এর সূক্ষ্ম পার্থক্য মনে রাখা।
৪. সেফ পাইপলাইন: Input ➔ Validate ➔ Compare (===) ➔ Process।`,
          code: `<?php
echo "Core Principle: Write predictable, type-strict expressions with === and ?? operators.";
?>`,
          codeLanguage: 'Summary'
        }
      ],
      keyPointsBn: [
        'তুলনার ক্ষেত্রে সর্বদা স্ট্রিক্ট সমতা === এবং !== ব্যবহার করুন; শিথিল সমতা (==) অপ্রত্যাশিত টাইপ জাগলিং বাগের জন্ম দেয়।',
        'নাল কোলেসিং অপারেটর (??) এবং অ্যাসাইনমেন্ট (??=) রিকোয়েস্ট প্যারামিটার ও ফলব্যাক মান নির্ধারণে সবচেয়ে নিরাপদ ও পরিষ্কার।',
        'টার্নারি অপারেটর (? :) শুধুমাত্র ছোট কন্ডিশনের জন্য ব্যবহার করুন; জটিল শর্তে if/else ব্যবহার রিডেবিলিটি বৃদ্ধি করে।',
        'এরর কন্ট্রোল অপারেটর (@) প্রোডাকশন কোডে এড়িয়ে চলুন কারণ এটি সিস্টেমে লুকিয়ে থাকা ক্রিটিক্যাল বাগ চাপা দেয়।',
        'স্ট্রিং জোড়া লাগাতে ডট (.) এবং অ্যাপেন্ড করতে ডট-সমান (.=) অপারেটর ব্যবহৃত হয়।'
      ],
      practiceExamples: [
        {
          title: 'বাস্তব উদাহরণ ১: নিরাপদ ইউজার রিকোয়েস্ট ফিল্টার ও টার্নারি রোল চেকিং',
          descriptionBn: '?? এবং টার্নারি অপারেটর ব্যবহার করে রিকোয়েস্ট স্যানিটাইজেশন এবং ডিসকাউন্ট ক্যালকুলেশন।',
          code: `<?php
$requestedQty = $_POST['quantity'] ?? '1';
$userRole = $_SESSION['role'] ?? 'guest';

$quantity = is_numeric($requestedQty) ? (int)$requestedQty : 1;
$unitPrice = 750;

// লজিক্যাল অপারেটর দিয়ে প্রিমিয়াম পারচেজ চেক
$isBulkOrder = ($quantity >= 5) && ($userRole === 'wholesaler');
$discountRate = $isBulkOrder ? 0.20 : 0.05;

$subtotal = $unitPrice * $quantity;
$discount = $subtotal * $discountRate;
$finalTotal = $subtotal - $discount;

echo "Role: {$userRole} | Quantity: {$quantity}<br>";
echo "Subtotal: {$subtotal} BDT<br>";
echo "Discount Applied: -{$discount} BDT<br>";
echo "<b>Total Payable: {$finalTotal} BDT</b>";
?>`
        },
        {
          title: 'বাস্তব উদাহরণ ২: Spaceship অপারেটর (<=>) দিয়ে ইউজার সর্টিং',
          descriptionBn: 'usort() ফাংশনে Spaceship অপারেটর ব্যবহার করে ব্যবহারকারীদের বয়সের ভিত্তিতে সাজানো।',
          code: `<?php
$users = [
    ['name' => 'Abbad', 'age' => 28],
    ['name' => 'Karim', 'age' => 22],
    ['name' => 'Rahim', 'age' => 35]
];

// বয়সের ঊর্ধ্বক্রমে (Ascending) সাজানো
usort($users, function ($a, $b) {
    return $a['age'] <=> $b['age'];
});

echo "Sorted Users by Age:<br>";
foreach ($users as $u) {
    echo "- {$u['name']} ({$u['age']} years)<br>";
}
?>`
        }
      ]
    }
  },
  {
    id: 'php-if-else',
    title: 'PHP If...Else...Elseif',
    category: 'basic',
    tag: 'Control Flow',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'কন্ডিশনাল ব্রাঞ্চিং, নেস্টেড কন্ডিশন এবং আর্লি রিটার্ন প্যাটার্ন।',
    sampleCode: `<?php
$score = 85;

if ($score >= 80) {
    echo "গ্রেড: A+ (চমৎকার!)";
} elseif ($score >= 70) {
    echo "গ্রেড: A";
} elseif ($score >= 60) {
    echo "গ্রেড: B";
} else {
    echo "গ্রেড: পুনরায় চেষ্টা করুন";
}
?>`,
    deepDive: {
      conceptBn: `কন্ডিশনাল লজিক প্রোগ্রাম ফ্লো নিয়ন্ত্রণ করে। বড় ফাংশনে নেস্টেড if/else এর বদলে আর্লি রিটার্ন বা গার্ড ক্লজ (Guard Clauses) ব্যবহার করা সিনিয়র স্ট্যান্ডার্ড।`,
      keyPointsBn: [
        'গার্ড ক্লজ ব্যবহারের ফলে ইন্ডেন্টেশন কমে এবং সাইক্লোমেটিক কমপ্লেক্সিটি হ্রাস পায়।',
        'কঠোর সমতার জন্য সর্বদা === ব্যবহার করুন, কখনো শিথিল == ব্যবহার করবেন না।'
      ]
    }
  },
  {
    id: 'php-switch',
    title: 'PHP Switch',
    category: 'basic',
    tag: 'Control Flow',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'একাধিক শর্ত তুলনার জন্য switch স্টেটমেন্ট ও break এর ভূমিকা।',
    sampleCode: `<?php
$favColor = "green";

switch ($favColor) {
    case "red":
        echo "আপনার প্রিয় রঙ লাল!";
        break;
    case "blue":
        echo "আপনার প্রিয় রঙ নীল!";
        break;
    case "green":
        echo "আপনার প্রিয় রঙ সবুজ!";
        break;
    default:
        echo "আপনার প্রিয় রঙ আমাদের তালিকায় নেই!";
}
?>`,
    deepDive: {
      conceptBn: `Switch স্টেটমেন্ট শিথিল তুলনা (==) করে, যা টাইপ রূপান্তরের কারণে অনাকাঙ্ক্ষিত ফলাফল দিতে পারে। আধুনিক PHP 8+ এ switch এর বিকল্প হিসেবে match এক্সপ্রেশন অগ্রাধিকার পায়।`,
      keyPointsBn: [
        'break স্টেটমেন্ট না দিলে ফল-থ্রু (fall-through) ঘটে এবং পরবর্তী কেসগুলোও রান হয়ে যায়।',
        'default ব্লক কোনো কেস না মিললে এক্সিকিউট হয়।'
      ]
    }
  },
  {
    id: 'php-match',
    title: 'PHP Match',
    category: 'basic',
    tag: 'PHP 8 Feature',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP 8-এর বিপ্লব: কড়া টাইপ ম্যাচিং (===) এবং সরাসরি ভ্যালু রিটার্ন এক্সপ্রেশন।',
    sampleCode: `<?php
$statusCode = 404;

// match সরাসরি মান রিটার্ন করে! break দরকার হয় না
$message = match ($statusCode) {
    200 => "সফলভাবে রিকোয়েস্ট সম্পন্ন হয়েছে (OK)",
    400 => "ত্রুটিপূর্ণ রিকোয়েস্ট (Bad Request)",
    404 => "পেজ খুঁজে পাওয়া যায়নি (Not Found)",
    500 => "সার্ভার এরর (Internal Server Error)",
    default => "অজ্ঞাত স্ট্যাটাস কোড",
};

echo "স্ট্যাটাস $statusCode: $message";
?>`,
    deepDive: {
      conceptBn: `PHP 8-এ যুক্ত হওয়া match একটি এক্সপ্রেশন, স্টেটমেন্ট নয়। এটি সরাসরি মান রিটার্ন করে এবং কঠোর সমতা (===) যাচাই করে। এর ফলে কোড নিরাপদ ও সংক্ষিপ্ত হয়।`,
      keyPointsBn: [
        'ব্রেক স্টেটমেন্টের প্রয়োজন নেই, ফল-থ্রু বাগ হওয়ার সম্ভাবনা শূন্য।',
        'যদি কোনো কেস না মেলে এবং default না থাকে, তবে UnhandledMatchError থ্রো হয়।'
      ]
    }
  },
  {
    id: 'php-loops',
    title: 'PHP Loops',
    category: 'basic',
    tag: 'Iteration',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'while, do...while, for এবং আধুনিক foreach লুপ ও রেফারেন্স ব্যবহার।',
    sampleCode: `<?php
$students = ["রফিক" => 85, "করিম" => 92, "সালমা" => 78];

echo "<h3>শিক্ষার্থীদের পরীক্ষার ফলাফল:</h3>";
foreach ($students as $name => $score) {
    echo "$name এর প্রাপ্ত নম্বর: <b>$score</b><br>";
}

echo "<br><b>সাধারণ for লুপ:</b> ";
for ($i = 1; $i <= 5; $i++) {
    echo "$i ";
}
?>`,
    deepDive: {
      conceptBn: `অ্যারে বা কালেকশন পুনরাবৃত্তির জন্য foreach হলো সবচেয়ে নিরাপদ ও কার্যকর লুপ। রেফারেন্স (&) দিয়ে লুপ চালালে লুপের পরে unset() না করলে শেষ আইটেম ওভাররাইট হওয়ার বাগ দেখা দেয়।`,
      keyPointsBn: [
        'foreach ($arr as &$val) ব্যবহারের পর সর্বদা unset($val) করা বাঞ্ছনীয়।',
        'বড় ডেটাসেটের জন্য জেনারেটর (yield) লুপ মেমোরি সংরক্ষণ করে।'
      ]
    }
  },
  {
    id: 'php-functions',
    title: 'PHP Functions',
    category: 'basic',
    tag: 'Modularity',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'টাইপ হিন্টিং, ডিফল্ট আর্গুমেন্ট, Named Arguments ও অ্যারো ফাংশন।',
    sampleCode: `<?php
declare(strict_types=1);

// PHP 8+ টাইপ হিন্টিং ও Named Arguments
function calculateTotal(float $price, float $vatRate = 0.15, float $discount = 0.0): float {
    $tax = $price * $vatRate;
    return ($price + $tax) - $discount;
}

// Named Arguments ব্যবহার (প্যারামিটারের ক্রম মনে রাখতে হয় না)
$total = calculateTotal(price: 1000.0, discount: 50.0);
echo "মোট প্রদেয় মূল্য: ৳" . $total;
?>`,
    deepDive: {
      conceptBn: `ফাংশন কোড রিইউজেবিলিটির মূল চাবিকাঠি। PHP 8 এর Named Arguments এর মাধ্যমে যেকোনো প্যারামিটার নাম ধরে কল করা যায়, যার ফলে কোড অত্যন্ত সেলফ-ডকুমেন্টিং হয়।`,
      keyPointsBn: [
        'strict_types=1 ঘোষণা প্যারামিটার ও রিটার্ন টাইপকে কঠোরভাবে সুরক্ষিত করে।',
        'fn($x) => $x * 2 সংক্ষিপ্ত অ্যারো ফাংশন প্যারেন্ট স্কোপের ভেরিয়েবল স্বয়ংক্রিয়ভাবে ক্যাপচার করে।'
      ]
    }
  },
  {
    id: 'php-arrays',
    title: 'PHP Arrays',
    category: 'basic',
    tag: 'Data Structures',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'ইনডেক্সড, অ্যাসোসিয়েটিভ, মাল্টি-ডাইমেনশনাল অ্যারে ও অ্যারে স্প্রেড (...)।',
    sampleCode: `<?php
$frontend = ["HTML", "CSS", "JS"];
$backend = ["PHP", "MySQL"];

// PHP 7.4+ Array Spread Operator (...)
$fullStack = [...$frontend, ...$backend, "Docker"];

echo "ফুলস্ট্যাক স্কিলস:<br>";
print_r($fullStack);

// অ্যারে ফিল্টারিং
$numbers = [1, 2, 3, 4, 5, 6, 7, 8];
$evens = array_filter($numbers, fn($n) => $n % 2 === 0);
echo "<br><br>জোড় সংখ্যাসমূহ: " . implode(", ", $evens);
?>`,
    deepDive: {
      conceptBn: `পিএইচপির অ্যারে প্রকৃতপক্ষে একটি অর্ডারড হ্যাশম্যাপ (Ordered HashTable)। এটি একই সাথে লিস্ট, স্ট্যাক, কিউ এবং ডিকশনারি হিসেবে কাজ করে।`,
      keyPointsBn: [
        'array_map(), array_filter(), array_reduce() ফাংশনাল প্রোগ্রামিং মেথডোলজি প্রদান করে।',
        'স্প্রেড অপারেটর (...) অ্যারে মার্জিংয়ের ক্ষেত্রে array_merge এর চেয়ে দ্রুততর ও সংক্ষিপ্ত।'
      ]
    }
  },
  {
    id: 'php-superglobals',
    title: 'PHP Superglobals',
    category: 'basic',
    tag: 'HTTP & Global Scope',
    phpVersion: 'PHP 8.0+',
    subtitleBn: '$_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION, $_ENV।',
    sampleCode: `<?php
echo "<b>সার্ভার সফটওয়্যার:</b> " . ($_SERVER['SERVER_SOFTWARE'] ?? 'N/A') . "<br>";
echo "<b>রিকোয়েস্ট মেথড:</b> " . ($_SERVER['REQUEST_METHOD'] ?? 'GET') . "<br>";
echo "<b>সার্ভার প্রোটোকল:</b> " . ($_SERVER['SERVER_PROTOCOL'] ?? 'HTTP/1.1') . "<br>";
echo "<b>স্ক্রিপ্ট নেম:</b> " . ($_SERVER['SCRIPT_NAME'] ?? 'index.php');
?>`,
    deepDive: {
      conceptBn: `সুপারগ্লোবালগুলো স্ক্রিপ্টের যেকোনো ফাংশন বা ক্লাসের ভেতর থেকে গ্লোবাল কীওয়ার্ড ছাড়াই সরাসরি অ্যাক্সেস করা যায়। এরা HTTP রিকোয়েস্টের সমুদয় তথ্য বহন করে।`,
      keyPointsBn: [
        '$_GET এবং $_POST কখনো আনস্যানিটাইজড অবস্থায় ব্যবহার করবেন না।',
        '$_ENV ক্লাউড ও কন্টেইনার আর্কিটেকচারে সিক্রেট কনফিগারেশন রিসিভ করতে ব্যবহৃত হয়।'
      ]
    }
  },
  {
    id: 'php-regex',
    title: 'PHP RegEx',
    category: 'basic',
    tag: 'Pattern Matching',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'রেগুলার এক্সপ্রেশন সিনট্যাক্স, ডিলিমিটার, মডিফায়ার (i, m, s, u)।',
    sampleCode: `<?php
$email = "developer@example.com";
$pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/";

if (preg_match($pattern, $email)) {
    echo "ইমেইল অ্যাড্রেসটি বৈধ! ($email)";
} else {
    echo "অবৈধ ইমেইল!";
}
?>`,
    deepDive: {
      conceptBn: `PHP পার্ল-কম্প্যাটিবল রেগুলার এক্সপ্রেশন (PCRE2) ব্যবহার করে। এটি যেকোনো জটিল টেক্সট সার্চিং, ভ্যালিডেশন এবং ফরম্যাটিং করতে অত্যন্ত শক্তিশালী।`,
      keyPointsBn: [
        'preg_match() প্রথম মিল খুঁজে পায় এবং 1 বা 0 রিটার্ন করে।',
        'ইমেইল ভ্যালিডেশনের জন্য অনেক সময় জটিল রেজেক্সের বদলে filter_var($email, FILTER_VALIDATE_EMAIL) বেশি নির্ভরযোগ্য ও দ্রুত।'
      ]
    }
  },
  {
    id: 'php-regex-functions',
    title: 'PHP RegEx Functions',
    category: 'basic',
    tag: 'PCRE2 Functions',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'preg_match, preg_match_all, preg_replace, preg_split এর ব্যবহার।',
    sampleCode: `<?php
$str = "আজকের তাপমাত্রা 32 ডিগ্রি, কালকে হবে 35 ডিগ্রি এবং পরশু 30 ডিগ্রি।";
$pattern = "/(\\d+)/";

// সব সংখ্যা একসাথে বের করা
preg_match_all($pattern, $str, $matches);
echo "খুঁজে পাওয়া তাপমাত্রাসমূহ: " . implode(", ", $matches[0]) . "<br>";

// শব্দ মাস্কিং বা প্রতিস্থাপন
$cleanStr = preg_replace("/\\d+/", "**", $str);
echo "মাস্কড টেক্সট: $cleanStr";
?>`,
    deepDive: {
      conceptBn: `preg_replace_callback() এর সাহায্যে প্যাটার্ন ম্যাচ হওয়া আইটেমগুলোর উপর কাস্টম লজিক রান করে ডায়নামিক টেক্সট পরিবর্তন করা যায়।`,
      keyPointsBn: [
        'preg_match_all() পুরো ডকুমেন্টের সব ম্যাচিং টু-ডাইমেনশনাল অ্যারেতে প্রদান করে।',
        'preg_split() রেজেক্স প্যাটার্ন অনুযায়ী স্ট্রিংকে অ্যারেতে বিভক্ত করে।'
      ]
    }
  }
];
