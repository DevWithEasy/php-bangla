import { TopicItem } from '../types';

export const FORMS_TOPICS: TopicItem[] = [
  {
    id: 'php-form-handling',
    title: 'PHP Form Handling',
    category: 'forms',
    tag: 'GET vs POST & Request Lifecycle',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'HTML Form থেকে ডেটা গ্রহণ, GET বনাম POST মেথড, $_SERVER["REQUEST_METHOD"], স্যানিটাইজেশন, Prepared Statement ও গোল্ডেন ফ্লো।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Form Handling — Request Lifecycle Explorer</h2>";

// সিমুলেটেড ফর্ম সাবমিশন ডেটা (Simulating incoming POST payload)
$simulatedMethod = "POST";
$mockPost = [
    'name'  => 'Mohammad Abbad',
    'email' => 'abbad.dev@example.com',
    'role'  => 'Full Stack Engineer'
];

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>১. Form Handling Lifecycle (Golden Flow)</h4>";
echo "<div style='background:#1e293b; padding:12px; border-radius:8px; font-family:monospace; font-size:13px; color:#38bdf8; margin-bottom:16px;'>";
echo "HTML Form ➔ User Input ➔ PHP (\$_POST / \$_GET) ➔ Validation ➔ Normalize ➔ Prepared Statement ➔ Database ➔ Response";
echo "</div>";

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>২. POST Request Processing</h4>";
if ($simulatedMethod === 'POST') {
    // ১. Receive
    $name  = trim($mockPost['name'] ?? '');
    $email = trim($mockPost['email'] ?? '');
    $role  = trim($mockPost['role'] ?? '');

    // ২. Validate
    $errors = [];
    if ($name === '') {
        $errors[] = "Name is required";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }

    if (empty($errors)) {
        // ৩. Process / Database (Simulating Prepared Statement)
        echo "<p style='color:#4ade80; margin:0 0 10px 0;'>✅ <b>Registration Successful!</b></p>";
        echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
        echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>Field</th><th style='padding:6px; text-align:left;'>Sanitized Output (htmlspecialchars)</th></tr>";
        echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Name</td><td style='padding:6px; color:#38bdf8;'><b>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</b></td></tr>";
        echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Email</td><td style='padding:6px; color:#4ade80;'>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</td></tr>";
        echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Role</td><td style='padding:6px; color:#fbbf24;'>" . htmlspecialchars($role, ENT_QUOTES, 'UTF-8') . "</td></tr>";
        echo "</table>";
    }
}

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>৩. GET বনাম POST ব্যবহারের সুনির্দিষ্ট নিয়ম</h4>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>মেথড</th><th style='padding:6px; text-align:left;'>কখন ব্যবহার করবেন?</th><th style='padding:6px; text-align:left;'>বৈশিষ্ট্য</th></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px; color:#38bdf8;'><b>POST</b></td><td style='padding:6px;'>Registration, Login, Profile Update, Order, Password Change, DB Insert/Update</td><td style='padding:6px; color:#4ade80;'>HTTP Request Body-তে ডাটা যায়, অদৃশ্য ও নিরাপদ</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px; color:#fbbf24;'><b>GET</b></td><td style='padding:6px;'>Search, Filter, Pagination, Public URL-based data</td><td style='padding:6px; color:#fbbf24;'>URL Query String-এ ডাটা যায়, বুকমার্ক করা যায়</td></tr>";
echo "</table>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `HTML Form থেকে user-এর data PHP-তে নেওয়া, validate করা এবং প্রয়োজন অনুযায়ী process/database-এ save করার process-কে Form Handling বলে। \n\n🎯 গোল্ডেন ফ্লো:\nHTML Form ➔ User Input ➔ PHP (\$_POST / \$_GET) ➔ Validation ➔ Normalize ➔ Process ➔ Database ➔ Response`,
      lessonSections: [
        {
          title: '১. Basic HTML Form এবং `name` attribute',
          explanationBn: `HTML Form থেকে ইউজারের ডাটা গ্রহণ করার জন্য form ট্যাগ ও input ফিল্ড ব্যবহৃত হয়। \`name\` attribute খুব গুরুত্বপূর্ণ কারণ PHP এই name দিয়েই সুপারগ্লোবাল অ্যারের ভেতরে ভ্যালু পায় ($_POST['name'])।`,
          code: `<!-- HTML Form Markup & PHP Integration -->
<form method="POST" action="process.php">
    <div style="margin-bottom:10px;">
        <label>নাম (Name):</label><br>
        <input type="text" name="name" placeholder="আপনার নাম লিখুন">
    </div>

    <div style="margin-bottom:10px;">
        <label>ইমেইল (Email):</label><br>
        <input type="email" name="email" placeholder="example@mail.com">
    </div>

    <button type="submit">রেজিস্ট্রেশন করুন</button>
</form>`,
          codeLanguage: 'HTML Form & PHP',
          outputPreview: `[HTML Form Layout Loaded]\n• input[name="name"] (Text Field)\n• input[name="email"] (Email Field)\n• button[type="submit"] (Submit Button)\nForm Target: process.php via HTTP POST`,
          noteBn: 'ফর্মের প্রতিটি ইনপুট ফিল্ডে অবশ্যই ইউনিক `name` attribute থাকতে হবে; name না দিলে PHP সুপারগ্লোবালে কোনো ভ্যালু পাওয়া যায় না।'
        },
        {
          title: '২. PHP দিয়ে POST ও GET Data গ্রহণ',
          explanationBn: `$_SERVER['REQUEST_METHOD'] দিয়ে রিকোয়েস্টের ধরন চেক করে superglobal array ($_POST বা $_GET) থেকে ডাটা সংগ্রহ করা হয়। নাল কোলেসিং অপারেটর (??) ব্যবহার করে আনডিফাইন্ড কি এরর এড়ানো হয়।`,
          code: `<?php
// রিকোয়েস্ট মেথড যাচাই
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name  = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');

    echo "নাম: " . htmlspecialchars($name) . "<br>";
    echo "ইমেইল: " . htmlspecialchars($email);
} else {
    // GET রিকোয়েস্ট (যেমন: সার্চ ফর্ম)
    $search = trim($_GET['search'] ?? 'PHP Tutorial');
    echo "সার্চ কিওয়ার্ড: " . htmlspecialchars($search);
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `সার্চ কিওয়ার্ড: PHP Tutorial`,
          noteBn: 'সরাসরি $_POST["name"] না লিখে `trim($_POST["name"] ?? "")` লিখলে পিএইচপিতে আনডিফাইন্ড কি ওয়ার্নিং তৈরি হয় না এবং ফাঁকা স্পেস ক্লিন হয়।'
        },
        {
          title: '৩. POST বনাম GET — কখন কোনটি ব্যবহার করবেন?',
          explanationBn: `• POST: সেনসিটিভ ডাটা (লগইন, পাসওয়ার্ড, পেমেন্ট, রেজিস্ট্রেশন) এবং ডাটাবেসে নতুন তথ্য সংরক্ষণের জন্য।
• GET: পাবলিক ডাটা অনুসন্ধান (সার্চ, ফিল্টারিং, পেজিনেশন) যাতে ইউআরএল শেয়ার ও বুকমার্ক করা যায়।`,
          code: `<?php
// ১. GET মেথডে সার্চ কুয়েরি হ্যান্ডলিং (URL Shareable)
$searchQuery = trim($_GET['q'] ?? 'Laravel Architecture');
echo "Searching catalog for: " . htmlspecialchars($searchQuery) . "<br>";

// ২. POST মেথডে সিকিউর অর্ডার সাবমিশন (Sensitive Data)
$orderId = 10842;
$amount = 3500;
echo "Secure POST Order #{$orderId} Processed: {$amount} BDT";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Searching catalog for: Laravel Architecture\nSecure POST Order #10842 Processed: 3500 BDT`,
          noteBn: 'পাসওয়ার্ড বা ক্রেডিট কার্ডের মতো কোনো সংবেদনশীল তথ্য কখনোই GET মেথডে পাঠানো যাবে না।'
        },
        {
          title: '৪. XSS Protection ও Database Security (Prepared Statement)',
          explanationBn: `• XSS Protection: ইউজার ইনপুট ব্রাউজারে প্রদর্শন করার সময় htmlspecialchars() দিয়ে HTML ট্যাগ নিষ্ক্রিয় করতে হয়।
• Database Security: ডাটাবেস কোয়েরির জন্য সরাসরি ভেরিয়েবল না বসিয়ে PDO Prepared Statement ব্যবহার আবশ্যক।`,
          code: `<?php
// ১. XSS প্রটেকশন (আউটপুট স্যানিটাইজেশন)
$userInput = "<script>alert('Hacked!');</script>";
$safeOutput = htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');
echo "নিরাপদ আউটপুট: " . $safeOutput . "<br>";

// ২. Prepared Statement দিয়ে SQL ইনজেকশন রোধ
$userName = "Abbad";
$userEmail = "abbad@example.com";
$sql = "INSERT INTO users (name, email) VALUES (?, ?)";
echo "SQL Query Template: " . $sql . "<br>";
echo "Executing with bound parameters: ['{$userName}', '{$userEmail}']";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `নিরাপদ আউটপুট: &lt;script&gt;alert('Hacked!');&lt;/script&gt;\nSQL Query Template: INSERT INTO users (name, email) VALUES (?, ?)\nExecuting with bound parameters: ['Abbad', 'abbad@example.com']`,
          noteBn: 'ইনপুট নেওয়ার সময় htmlspecialchars করবেন না; ডাটাবেসে খাঁটি ডাটা সেভ করুন এবং কেবল ব্রাউজারে প্রিন্ট করার সময় htmlspecialchars ব্যবহার করুন।'
        }
      ],
      keyPointsBn: [
        'কখনো user input-কে সরাসরি trust করবেন না (All User Input is Untrusted)',
        'GET ➔ Search / Filter / Pagination / URL Data',
        'POST ➔ Create / Update / Sensitive form actions (Login, Password, Payments)',
        'Prepared Statement ➔ SQL Injection protection এর জন্য আবশ্যক',
        'htmlspecialchars(..., ENT_QUOTES, "UTF-8") ➔ HTML output-এর XSS protection'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: Real-World Form Flow & Registration Handler',
          descriptionBn: 'Receive ➔ Validate ➔ Database (Prepared Statement) এর সম্পূর্ণ কোড।',
          code: `<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 1. Receive
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');

    // 2. Validate
    if ($name === '') {
        die("Name is required");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email");
    }

    // 3. Database (Prepared Statement)
    // $stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    // $stmt->execute([$name, $email]);

    echo "Registration successful for: " . htmlspecialchars($name);
} else {
    echo "Ready to receive POST request";
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: রিকোয়েস্ট মেথড চেক ছাড়া ইনপুট নেওয়া এবং সরাসরি SQL-এ বসানো
$name = $_POST['name'];
$email = $_GET['email']; // ভুল মেথড
$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
$db->query($sql);`,
        juniorProblems: [
          'Undefined array key ওয়ার্নিং আসবে যদি ফর্ম সাবমিট না হয়ে পেজ লোড হয়।',
          'SQL Injection এর শিকার হয়ে পুরো ডাটাবেস ড্রপ বা হ্যাক হতে পারে।',
          'XSS স্ক্রিপ্ট রান হয়ে ইউজারের কুকি ও তথ্য চুরি হতে পারে।'
        ],
        seniorCode: `// ✅ সিনিয়র: রিকোয়েস্ট চেক, ভ্যালিডেশন ও PDO Prepared Statement
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');

    if ($name === '') {
        $error = "Name is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email format";
    } else {
        $stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
        $stmt->execute([$name, $email]);
        echo "Registration successful";
    }
}`,
        seniorBenefits: [
          '১০০% টাইপ-সেফ ও নোটিশ-ফ্রি এক্সিকিউশন।',
          'SQL Injection ও XSS থেকে শতভাগ সুরক্ষিত।'
        ],
        architectAdvice: 'প্রোডাকশনে সব POST ফর্মে একটি ইউনিক CSRF Token সেশন এবং হিডেন ইনপুটে রাখুন এবং সাবমিশনে hash_equals() দিয়ে যাচাই করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'FETCH_R (global $_SERVER)',
          'FETCH_DIM_R ("REQUEST_METHOD")',
          'IS_IDENTICAL ("POST")',
          'JMPZ (branching)'
        ],
        cStructOrMemory: `sapi_module.read_post() -> php_stream_read -> zend_hash_str_add(&PG(http_globals)[TRACK_VARS_POST], ...)`,
        explanationBn: `PHP-FPM যখন POST রিকোয়েস্ট পায়, php://input স্ট্রিম পার্স করে জেন্ড হ্যাশটেবিল তৈরি করে $_POST সুপারগ্লোবালে বাইন্ড করে।`
      },
      security: {
        vulnerabilityType: 'SQL Injection & XSS via Form Data',
        attackVectorBn: 'ফর্মে \' OR \'1\'=\'1 অথবা <script>alert(1)</script> পাঠিয়ে ডাটাবেস বা ব্রাউজার ম্যানিপুলেট করা।',
        preventionRuleBn: 'ডাটাবেসের জন্য Prepared Statements এবং ভিউ আউটপুটের জন্য htmlspecialchars(..., ENT_QUOTES, "UTF-8") ব্যবহার করুন।'
      }
    }
  },
  {
    id: 'php-form-validation',
    title: 'PHP Form Validation',
    category: 'forms',
    tag: 'Validation Rules & Data Integrity',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Required, Email, Integer, Range, Password, Confirm Password, Multiple Error Array এবং Client vs Server-side ভ্যালিডেশন।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Form Validation Engine & Rules</h2>";

// টেস্ট ইনপুট ডেটাসেট (Simulating Registration Form Submission)
$mockPost = [
    'name'             => '   Abbad Hossain   ',
    'email'            => 'abbad.dev@example.com',
    'age'              => '25',
    'password'         => 'SecretPass123',
    'confirm_password' => 'SecretPass123'
];

$errors = [];

// ১. Required Validation
$name = trim($mockPost['name'] ?? '');
if ($name === '') {
    $errors['name'] = "Name is required";
}

// ২. Email Validation
$email = trim($mockPost['email'] ?? '');
if ($email === '') {
    $errors['email'] = "Email is required";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = "Invalid email format";
}

// ৩. Integer & Range Validation
$ageRaw = $mockPost['age'] ?? null;
$age = filter_var($ageRaw, FILTER_VALIDATE_INT);
if ($age === false) {
    $errors['age'] = "Invalid age (must be an integer)";
} elseif ($age < 18 || $age > 100) {
    $errors['age'] = "Age must be between 18 and 100";
}

// ৪. Password Validation (Min length & match)
$password = $mockPost['password'] ?? '';
$confirm  = $mockPost['confirm_password'] ?? '';

if (strlen($password) < 8) {
    $errors['password'] = "Password must be at least 8 characters";
}
if ($password !== $confirm) {
    $errors['confirm_password'] = "Passwords do not match";
}

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>ভ্যালিডেশন রেজাল্ট ও স্টেট:</h4>";
if (empty($errors)) {
    echo "<div style='background:#064e3b; border:1px solid #059669; padding:12px; border-radius:8px; margin-bottom:12px;'>";
    echo "<p style='color:#4ade80; margin:0;'>🎉 <b>সকল ভ্যালিডেশন সফলভাবে উত্তীর্ণ হয়েছে!</b> (Ready for Database Insert)</p>";
    echo "</div>";

    echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
    echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>Rule Name</th><th style='padding:6px; text-align:left;'>Value</th><th style='padding:6px; text-align:left;'>Status</th></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Name (Required + Trim)</td><td style='padding:6px; color:#38bdf8;'>$name</td><td style='padding:6px; color:#4ade80;'>✅ Valid</td></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Email (FILTER_VALIDATE_EMAIL)</td><td style='padding:6px; color:#38bdf8;'>$email</td><td style='padding:6px; color:#4ade80;'>✅ Valid</td></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Age (FILTER_VALIDATE_INT: 18-100)</td><td style='padding:6px; color:#38bdf8;'>$age</td><td style='padding:6px; color:#4ade80;'>✅ Valid</td></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Password (Length >= 8 & Match)</td><td style='padding:6px; color:#38bdf8;'>********</td><td style='padding:6px; color:#4ade80;'>✅ Valid</td></tr>";
    echo "</table>";
} else {
    echo "<div style='background:#451a03; border:1px solid #b45309; padding:12px; border-radius:8px;'>";
    echo "<p style='color:#f87171; margin:0 0 6px 0;'><b>ফর্মটিতে ভুল পাওয়া গেছে:</b></p>";
    foreach ($errors as $field => $err) {
        echo "<span style='color:#fbbf24; font-size:13px;'>• $field: $err</span><br>";
    }
    echo "</div>";
}

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `User Form-এ সঠিক data দিয়েছে কিনা check করাই Form Validation।\n\n🎯 Validation Flow:\nUser Input ➔ Validate ➔ [Valid: Process / Database] | [Invalid: Display Errors]\n\n⚠️ Client-side (HTML/JS) Validation ইউজার এক্সপেরিয়েন্সের জন্য; আর PHP Server-side Validation হলো সিকিউরিটি ও ডাটা ইন্টিগ্রিটির চূড়ান্ত প্রতিরক্ষা।`,
      lessonSections: [
        {
          title: '১. রুলস ১: Required ও Email ভ্যালিডেশন',
          explanationBn: `Required ফিল্ড ফাঁকা থাকলে এরর অ্যারেতে মেসেজ যোগ করা হয়। ইমেইল চেকের জন্য FILTER_VALIDATE_EMAIL ব্যবহার করা হয় যা RFC স্ট্যান্ডার্ড অনুযায়ী ইমেইল ফরম্যাট যাচাই করে।`,
          code: `<?php
$errors = [];

// নাম ভ্যালিডেশন
$name = trim($_POST['name'] ?? '');
if ($name === '') {
    $errors['name'] = "Name is required";
}

// ইমেইল ভ্যালিডেশন
$email = trim($_POST['email'] ?? '');
if ($email === '') {
    $errors['email'] = "Email is required";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = "Invalid email format";
}

print_r($errors);
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Array\n(\n    [name] => Name is required\n    [email] => Email is required\n)`,
          noteBn: 'ইমেইল ভ্যালিডেশনে কখনোই স্যানিটাইজার (FILTER_SANITIZE_EMAIL) দিয়ে ভ্যালিডেশন রিপ্লেস করবেন না।'
        },
        {
          title: '২. রুলস ২: Integer & Range ভ্যালিডেশন',
          explanationBn: `ইউজার ইনপুট ইন্টিজার কিনা তা FILTER_VALIDATE_INT দিয়ে চেক করা হয় এবং লজিক্যাল অপারেটর (< বা >) দিয়ে নির্ধারিত বয়স বা রেঞ্জ সীমাবদ্ধ করা হয়।`,
          code: `<?php
$ageInput = "25";
$age = filter_var($ageInput, FILTER_VALIDATE_INT);

if ($age === false) {
    echo "ত্রুটি: বয়স অবশ্যই পূর্ণসংখ্যা (Integer) হতে হবে।";
} elseif ($age < 18 || $age > 100) {
    echo "ত্রুটি: বয়স ১৮ থেকে ১০০ এর মধ্যে হতে হবে।";
} else {
    echo "✓ বয়স বৈধ: " . $age . " বছর";
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `✓ বয়স বৈধ: 25 বছর`,
          noteBn: 'filter_var() রিটার্ন করে ইন্টিজার মান অথবা false; তাই স্ট্রিক্ট চেকিং (=== false) আবশ্যক।'
        },
        {
          title: '৩. রুলস ৩: Password & Confirm Password ভ্যালিডেশন',
          explanationBn: `পাসওয়ার্ডের ন্যূনতম দৈর্ঘ্য strlen() দিয়ে এবং কনফার্ম পাসওয়ার্ডের সাথে হুবহু মিল (===) দিয়ে ভ্যালিডেট করা হয়।`,
          code: `<?php
$password = "SecretPass123";
$confirm  = "SecretPass123";
$errors = [];

if (strlen($password) < 8) {
    $errors['password'] = "Password must be at least 8 characters";
}

if ($password !== $confirm) {
    $errors['confirm'] = "Passwords do not match";
}

if (empty($errors)) {
    echo "✓ পাসওয়ার্ড শক্তিশালী এবং উভয় পাসওয়ার্ড মিলেছে!";
} else {
    print_r($errors);
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `✓ পাসওয়ার্ড শক্তিশালী এবং উভয় পাসওয়ার্ড মিলেছে!`,
          noteBn: 'পাসওয়ার্ড কখনোই ডাটাবেসে প্লেইন টেক্সট রাখবেন না; ভ্যালিডেশন পাসের পর password_hash() করুন।'
        },
        {
          title: '৪. Validation বনাম Sanitization বনাম Escaping',
          explanationBn: `• Validation: Data সঠিক ফরম্যাটে আছে কিনা check করে (যেমন filter_var($email, FILTER_VALIDATE_EMAIL))।
• Sanitization: Data clean/normalize করার চেষ্টা করে।
• Escaping: htmlspecialchars($name) হলো HTML আউটপুট এস্কেপিং, এটি কোনো ভ্যালিডেশন নয়।`,
          code: `<?php
// ১. Validation
$rawEmail = "user@example.com";
$isValid = filter_var($rawEmail, FILTER_VALIDATE_EMAIL) !== false;

// ২. Sanitization
$cleanName = strip_tags("<b>Abbad</b>");

// ৩. Escaping (Output encoding)
$escaped = htmlspecialchars("<script>alert(1)</script>", ENT_QUOTES, 'UTF-8');

echo "Validation Result: " . ($isValid ? "Valid" : "Invalid") . "<br>";
echo "Sanitized Text: " . $cleanName . "<br>";
echo "Escaped Output: " . $escaped;
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `Validation Result: Valid\nSanitized Text: Abbad\nEscaped Output: &lt;script&gt;alert(1)&lt;/script&gt;`,
          noteBn: 'ডাটাবেসের জন্য Prepared Statements এবং ভিউ আউটপুটের জন্য htmlspecialchars() ব্যবহার করুন।'
        }
      ],
      keyPointsBn: [
        'সব User Input untrusted — সার্ভার-সাইড ভ্যালিডেশন বাধ্যতামূলক',
        'ভ্যালিডেশন ক্রম: Required ➔ Type ➔ Format ➔ Range ➔ Business Rules',
        'Email ➔ FILTER_VALIDATE_EMAIL, Integer ➔ FILTER_VALIDATE_INT',
        'Password কখনো plain text ডাটাবেসে রাখবেন না (password_hash ব্যবহার করুন)',
        'Database-এর জন্য Prepared Statement এবং Output-এর জন্য htmlspecialchars ব্যবহার করুন'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: Multiple Validation + Database Flow',
          descriptionBn: 'একাধিক এরর একসাথে ধরে ডাটাবেসে সেভ করার স্ট্যান্ডার্ড প্যাটার্ন।',
          code: `<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errors = [];

    $name     = trim($_POST['name'] ?? '');
    $email    = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    // Validation
    if ($name === '') {
        $errors['name'] = 'Name is required';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email';
    }

    if (strlen($password) < 8) {
        $errors['password'] = 'Password must be at least 8 characters';
    }

    // Database
    if (empty($errors)) {
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        // $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
        // $stmt->execute([$name, $email, $passwordHash]);
        echo "User registered successfully: " . htmlspecialchars($name);
    }
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: শুধু জাভাস্ক্রিপ্ট বা HTML required এর ওপর নির্ভর করা
$name = $_POST['name'];
$age  = $_POST['age']; // ইউজার টেক্সট বা নেগেটিভ নাম্বার দিলে ক্র্যাশ
$pass = $_POST['password']; // প্লেইন টেক্সট সেভ`,
        juniorProblems: [
          'Postman বা cURL দিয়ে রিকোয়েস্ট পাঠালে ক্লায়েন্ট-সাইড ভ্যালিডেশন কোনো কাজেই আসবে না।',
          'অ্যাজ ফিল্ডে ক্ষতিকর স্ট্রিং ঢুকে ডাটাবেস এরর তৈরি করবে।',
          'প্লেইন টেক্সট পাসওয়ার্ড ডাটাবেস লিক হলে মারাত্মক বিপর্যয় ঘটবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: মাল্টিপল সেন্ট্রালাইজড এরর অ্যারে ও টাইপ/রেঞ্জ ভ্যালিডেশন
$errors = [];
$name = trim($_POST['name'] ?? '');
$age  = filter_var($_POST['age'] ?? null, FILTER_VALIDATE_INT);
$pass = $_POST['password'] ?? '';

if ($name === '') $errors['name'] = 'Name is required';
if ($age === false || $age < 18 || $age > 100) $errors['age'] = 'Valid age between 18-100 is required';
if (strlen($pass) < 8) $errors['password'] = 'Password minimum 8 chars';

if (empty($errors)) {
    $hash = password_hash($pass, PASSWORD_DEFAULT);
    // PDO Insert...
}`,
        seniorBenefits: [
          'সম্পূর্ণ রোবাস্ট ডাটা ইন্টিগ্রিটি।',
          'সবগুলো এরর একসাথে ইউজার ইন্টারফেসে ফেরত পাঠানো যায়।'
        ],
        architectAdvice: 'পাসওয়ার্ড পলিসির জন্য কমপক্ষে একটি আপারকেস, একটি লোয়ারকেস, একটি সংখ্যা ও একটি স্পেশাল ক্যারেক্টার চেক করতে রেজেক্স ও Zxcvbn স্ট্রেন্থ স্কোরিং ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (php_filter_var)',
          'FETCH_CONSTANT (FILTER_VALIDATE_INT)',
          'IS_SMALLER / IS_GREATER (range comparisons)'
        ],
        explanationBn: `FILTER_VALIDATE_INT জেন্ড সি-মডিউলে স্ট্রিংটিকে strtol() দিয়ে পার্স করে ইন্টিজার বাউন্ডারি চেক করে।`
      },
      security: {
        vulnerabilityType: 'Client-Side Validation Bypass & Data Corruption',
        attackVectorBn: 'ক্লায়েন্ট-সাইড JS ডিজেবল করে সরাসরি অবৈধ, ঋণাত্মক বা ক্ষতিকর ডেটা সার্ভারে পোস্ট করা।',
        preventionRuleBn: 'সার্ভার-সাইডে Required ➔ Type ➔ Format ➔ Range ➔ Business Rules ক্রমানুসারে পূর্ণাঙ্গ ভ্যালিডেশন নিশ্চিত করুন।'
      }
    }
  },
  {
    id: 'php-form-required',
    title: 'PHP Form Required',
    category: 'forms',
    tag: 'Required Fields & Error State',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'বাধ্যতামূলক ফিল্ড ভ্যালিডেশন, $errors অ্যারে, trim(), Required + Email এবং ডাটাবেস NOT NULL কনস্ট্রেইন্ট।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Form Required Fields Architecture</h2>";

// সিমুলেটেড পোস্ট সাবমিশন
$mockSubmission = [
    'name'  => '', // ফাঁকা ইনপুট
    'email' => 'abbad@example.com',
    'phone' => '01712345678'
];

$errors = [];

// ১. একাধিক Required Field চেক
$name  = trim($mockSubmission['name'] ?? '');
$email = trim($mockSubmission['email'] ?? '');
$phone = trim($mockSubmission['phone'] ?? '');

if ($name === '') {
    $errors['name'] = 'Name is required';
}

if ($email === '') {
    $errors['email'] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email';
}

if ($phone === '') {
    $errors['phone'] = 'Phone is required';
}

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>১. Required Validation ফলাফল:</h4>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>Field</th><th style='padding:6px; text-align:left;'>Value</th><th style='padding:6px; text-align:left;'>Validation State</th></tr>";

echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Name *</td><td style='padding:6px; color:#94a3b8;'><i>[Empty]</i></td><td style='padding:6px; color:#f43f5e;'>❌ " . ($errors['name'] ?? '') . "</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Email *</td><td style='padding:6px; color:#4ade80;'>$email</td><td style='padding:6px; color:#4ade80;'>✅ Valid</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Phone *</td><td style='padding:6px; color:#4ade80;'>$phone</td><td style='padding:6px; color:#4ade80;'>✅ Valid</td></tr>";
echo "</table>";

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>২. গুরুত্বপূর্ণ তুলনা (HTML vs PHP Required):</h4>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>লেয়ার</th><th style='padding:6px; text-align:left;'>কোড</th><th style='padding:6px; text-align:left;'>উদ্দেশ্য</th></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px; color:#38bdf8;'>HTML (Browser)</td><td style='padding:6px;'><code>&lt;input required&gt;</code></td><td style='padding:6px;'>User Experience (UX) - ব্রাউজার প্রম্পট</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px; color:#4ade80;'>PHP (Server)</td><td style='padding:6px;'><code>if (\$name === '')</code></td><td style='padding:6px;'>Server-side Security & Data Integrity (বাইপাস অসম্ভব)</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px; color:#fbbf24;'>Database (SQL)</td><td style='padding:6px;'><code>NOT NULL</code></td><td style='padding:6px;'>Database Level Constraint (চূড়ান্ত ব্যাকস্টপ)</td></tr>";
echo "</table>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Form-এর কোনো field অবশ্যই পূরণ করতে হবে—এটাই Required Field (যেমন: Name, Email, Password, Phone)। HTML required এট্রিবিউট ব্রাউজার-লেভেল ভ্যালিডেশন দেয় যা সহজেই বাইপাস করা সম্ভব। তাই PHP সার্ভার-সাইডে if ($val === '') চেক করা আবশ্যক।`,
      lessonSections: [
        {
          title: '১. HTML required বনাম PHP Required',
          explanationBn: `HTML required অ্যাট্রিবিউট ক্লায়েন্ট ব্রাউজারে ইউজার প্রম্পট দেখায়, কিন্তু cURL বা ডেভটুল দিয়ে তা বাইপাস করা যায়। তাই পিএইচপিতে \`if ($val === '')\` দিয়ে সার্ভার-সাইড নিরাপত্তা সুনিশ্চিত করা হয়।`,
          code: `<?php
// ক্লায়েন্ট সাবমিশন সিমুলেশন
$rawName = "   "; // ইউজার কেবল স্পেস দিল
$name = trim($rawName);

if ($name === '') {
    echo "⚠️ এরর: নাম ফিল্ডটি পূরণ করা বাধ্যতামূলক (Required)!";
} else {
    echo "✓ নাম সঠিকভাবে পূরণ হয়েছে: " . htmlspecialchars($name);
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `⚠️ এরর: নাম ফিল্ডটি পূরণ করা বাধ্যতামূলক (Required)!`,
          noteBn: 'সবসময় trim() করার পর $str === "" চেক করুন যাতে হোয়াইটস্পেস বাইপাস বন্ধ থাকে।'
        },
        {
          title: '২. একাধিক Required ফিল্ড ও সেন্ট্রালাইজড $errors অ্যারে',
          explanationBn: `বড় ফর্মে প্রতিটি বাধ্যতামূলক ফিল্ড আলাদা আলাদা চাবির অধীনে $errors অ্যারেতে স্টোর করা হয় যাতে ভিউতে নির্দিষ্ট ইনপুটের নিচে লাল রঙে এরর দেখানো যায়।`,
          code: `<?php
$postData = [
    'name'  => 'Abbad',
    'email' => '',
    'phone' => ''
];

$errors = [];

$name  = trim($postData['name'] ?? '');
$email = trim($postData['email'] ?? '');
$phone = trim($postData['phone'] ?? '');

if ($name === '')  $errors['name']  = 'Name is required';
if ($email === '') $errors['email'] = 'Email is required';
if ($phone === '') $errors['phone'] = 'Phone is required';

echo "মোট ভুল ফিল্ড: " . count($errors) . "টি<br>";
foreach ($errors as $field => $msg) {
    echo "• [{$field}]: {$msg}<br>";
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `মোট ভুল ফিল্ড: 2টি\n• [email]: Email is required\n• [phone]: Phone is required`,
          noteBn: 'সেন্ট্রালাইজড $errors অ্যারে ব্যবহার করলে একবারে সব ফিল্ডের এরর স্টেট ইউজারের সামনে তুলে ধরা যায়।'
        },
        {
          title: '৩. Required + Format ভ্যালিডেশনের আদর্শ ক্রম',
          explanationBn: `আগে চেক করতে হবে ফিল্ডটি ফাঁকা কিনা (Required), এরপর ফাঁকা না হলে তার ফরম্যাট (Email/Phone/Regex) যাচাই করতে হবে।`,
          code: `<?php
$email = trim($_POST['email'] ?? 'abbad.dev@example.com');
$error = null;

if ($email === '') {
    $error = "Email is required";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error = "Invalid email format";
}

if ($error) {
    echo "ভ্যালিডেশন ফেইল্ড: " . $error;
} else {
    echo "✓ ইমেইল ভ্যালিডেশন সফল: " . htmlspecialchars($email);
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `✓ ইমেইল ভ্যালিডেশন সফল: abbad.dev@example.com`,
          noteBn: 'যদি আগে Format চেক করা হয় তবে ফাঁকা ইনপুটেও "Invalid format" এরর আসতে পারে যা বিভ্রান্তিকর।'
        },
        {
          title: '৪. Database Level NOT NULL কনস্ট্রেইন্ট',
          explanationBn: `অ্যাপ্লিকেশনে ত্রুটি বা অনিচ্ছাকৃত বাগ থাকলেও ডাটাবেসের ইন্টিগ্রিটি অক্ষুণ্ণ রাখতে মাইগ্রেশন স্কিমাতে 'NOT NULL' কনস্ট্রেইন্ট বজায় রাখা হয়।`,
          code: `<?php
// স্কিমা ডেফিনেশন
$sqlSchema = "CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);";

echo "<pre style='color:#38bdf8; font-size:12px; margin:0;'>{$sqlSchema}</pre>";
?>`,
          codeLanguage: 'SQL / PDO Query',
          outputPreview: `CREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);`,
          noteBn: 'অ্যাপ্লিকেশন লেভেল ভ্যালিডেশন ও ডাটাবেস লেভেল কনস্ট্রেইন্ট একসাথে ডিফেন্স-ইন-ডেপথ সিকিউরিটি নিশ্চিত করে।'
        }
      ],
      keyPointsBn: [
        'HTML required = User Experience, PHP if ($val === \'\') = Server Security',
        'সর্বদা trim() করে ফাঁকা স্ট্রিং চেক করুন যাতে হোয়াইটস্পেস বাইপাস না হয়',
        'ভ্যালিডেশন ক্রম: আগে Required চেক, তারপর Format চেক',
        'ডাটাবেস টেবিলে গুরুত্বপূর্ণ ফিল্ডে NOT NULL কনস্ট্রেইন্ট বজায় রাখুন'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: Required Validation + Database Insert',
          descriptionBn: 'আবশ্যক ফিল্ড ভ্যালিডেট করে PDO Prepared Statement এ ডাটাবেসে ইনসার্ট।',
          code: `<?php
$errors = [];

$name = trim($_POST['name'] ?? 'Abbad');
$email = trim($_POST['email'] ?? 'abbad@gmail.com');

if ($name === '') {
    $errors['name'] = 'Name is required';
}

if ($email === '') {
    $errors['email'] = 'Email is required';
}

if (!$errors) {
    echo "Validation Successful for: {$name} ({$email})";
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: শুধু isset() চেক করা (স্পেস দিলে পাস হয়ে যায়)
if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $db->query("INSERT INTO users (name) VALUES ('$name')");
}`,
        juniorProblems: [
          'ইউজার স্পেস ("   ") সাবমিট করলে ফাঁকা নাম ডাটাবেসে সেভ হয়ে যাবে।',
          'কোনো এরর অ্যারে না থাকায় ইউজার কোনো সুনির্দিষ্ট মেসেজ দেখতে পায় না।'
        ],
        seniorCode: `// ✅ সিনিয়র: trim() ও স্ট্রিক্ট এম্পটি চেক সহ সেন্ট্রালাইজড এরর
$errors = [];
$name = trim($_POST['name'] ?? '');

if ($name === '') {
    $errors['name'] = 'Name is required';
}

if (empty($errors)) {
    $stmt = $pdo->prepare("INSERT INTO users (name) VALUES (?)");
    $stmt->execute([$name]);
}`,
        seniorBenefits: [
          'হোয়াইটস্পেস বাইপাস সম্পূর্ণরূপে বন্ধ।',
          'ডাটাবেস কনস্ট্রেইন্ট ভায়োলেশন থেকে ১০০% সুরক্ষিত।'
        ],
        architectAdvice: 'ডাটাবেস স্কিমা ডিজাইন করার সময় ইউজারের নাম, ইমেইল এবং পাসওয়ার্ড কলামে বাধ্যতামূলকভাবে NOT NULL কনস্ট্রেইন্ট যোগ করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (php_trim)',
          'IS_IDENTICAL (comparing with "")',
          'JMPZ (branching to error state)'
        ],
        explanationBn: `PHP 8-এ $str === '' স্ট্রিং কম্প্যারিজন সরাসরি C-লেভেলের zend_string এর len === 0 ফিল্ড চেক করে যা সর্বোচ্চ দ্রুতগতির।`
      },
      security: {
        vulnerabilityType: 'Database Null Constraint Violation',
        attackVectorBn: 'ফাঁকা ফিল্ড পাঠিয়ে ডাটাবেসের NOT NULL এরর ট্রিগার করে সেনসিটিভ কুয়েরি স্ট্রাকচার এক্সপোজ করা।',
        preventionRuleBn: 'সার্ভার-সাইডে trim($field) === "" ভ্যালিডেট করার পর তবেই কুয়েরি চালান।'
      }
    }
  },
  {
    id: 'php-form-url-email',
    title: 'PHP Form URL/E-mail',
    category: 'forms',
    tag: 'Email, URL & Scheme Validation',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'FILTER_VALIDATE_EMAIL, FILTER_VALIDATE_URL, HTTP/HTTPS স্কিম নিশ্চিতকরণ (parse_url) এবং স্যানিটাইজেশন সতর্কতা।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Validate E-mail & URL Engine</h2>";

// টেস্ট ইনপুট
$mockPost = [
    'email'   => 'abbad.dev@gmail.com',
    'website' => 'https://abbad.dev'
];

$errors = [];

// ১. Email Validation (Required + Format)
$email = trim($mockPost['email'] ?? '');
if ($email === '') {
    $errors['email'] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email';
}

// ২. URL Validation (Required + Format + HTTP/HTTPS Scheme)
$url = trim($mockPost['website'] ?? '');
if ($url === '') {
    $errors['website'] = 'Website is required';
} elseif (!filter_var($url, FILTER_VALIDATE_URL)) {
    $errors['website'] = 'Invalid URL';
} else {
    // HTTP/HTTPS স্কিম নিশ্চিত করা ⭐
    $scheme = parse_url($url, PHP_URL_SCHEME);
    if (!in_array($scheme, ['http', 'https'], true)) {
        $errors['website'] = 'Only HTTP/HTTPS URLs are allowed';
    }
}

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>ভ্যালিডেশন রেজাল্ট:</h4>";
if (empty($errors)) {
    echo "<p style='color:#4ade80; margin:0 0 10px 0;'>✅ <b>Email ও URL উভয়ই সম্পূর্ণ সঠিক ও নিরাপদ!</b></p>";
    echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
    echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>Type</th><th style='padding:6px; text-align:left;'>Validated Value</th><th style='padding:6px; text-align:left;'>Validation Method</th></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Email</td><td style='padding:6px; color:#38bdf8;'>$email</td><td style='padding:6px; color:#4ade80;'>FILTER_VALIDATE_EMAIL</td></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>URL</td><td style='padding:6px; color:#38bdf8;'>$url</td><td style='padding:6px; color:#4ade80;'>FILTER_VALIDATE_URL + Scheme Check</td></tr>";
    echo "</table>";
} else {
    echo "<div style='background:#451a03; padding:10px; border-radius:6px;'>";
    foreach ($errors as $f => $err) {
        echo "<span style='color:#f87171;'>❌ $f: $err</span><br>";
    }
    echo "</div>";
}

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>⚠️ অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা সতর্কতা:</h4>";
echo "<div style='background:#1e293b; padding:12px; border-radius:8px; font-size:13px; color:#fbbf24; border-left:4px solid #f59e0b;'>";
echo "❌ <code>FILTER_SANITIZE_EMAIL</code> বা <code>FILTER_SANITIZE_URL</code> দিয়ে Validation কখনো রিপ্লেস করবেন না!<br>";
echo "কারণ স্যানিটাইজার ভুল ইমেইল থেকে অবৈধ ক্যারেক্টার কেটে ফেলে সেটিকে 'ভ্যালিড' বানিয়ে ফেলতে পারে যা ইউজারের মূল উদ্দেশ্যের বিপরীত। সর্বদা <code>FILTER_VALIDATE_*</code> ব্যবহার করুন।";
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `ইমেইল ও ওয়েবসাইট ইউআরএল ভ্যালিডেশনের জন্য PHP-তে filter_var() এবং ফিল্টার কনস্ট্যান্ট (FILTER_VALIDATE_EMAIL ও FILTER_VALIDATE_URL) ব্যবহৃত হয়।\n\n🎯 Real-world Flow:\nReceive ➔ trim() ➔ Required Check ➔ Format Validation ➔ Scheme/Business Rules ➔ Prepared Statement ➔ Database`,
      lessonSections: [
        {
          title: '১. Email Validation (Required + Format)',
          explanationBn: `ইমেইল ভ্যালিডেশনের জন্য প্রথমে trim() দিয়ে স্পেস কেটে নেওয়া হয়, তারপর Required চেক করা হয় এবং সর্বশেষে FILTER_VALIDATE_EMAIL দিয়ে ফরম্যাট যাচাই করা হয়।`,
          code: `<?php
$emailInput = "abbad.dev@gmail.com";
$email = trim($emailInput);

if ($email === '') {
    echo "Error: Email is required";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Error: Invalid email format";
} else {
    echo "✓ ইমেইল সম্পূর্ণ সঠিক: " . htmlspecialchars($email);
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `✓ ইমেইল সম্পূর্ণ সঠিক: abbad.dev@gmail.com`,
          noteBn: 'আগে empty check → তারপর format check করার নিয়ম মেনে চলুন।'
        },
        {
          title: '২. URL Validation ও HTTP/HTTPS নিশ্চিত করা ⭐',
          explanationBn: `FILTER_VALIDATE_URL ইউআরএল সিনট্যাক্স চেক করে, কিন্তু অ্যাপ্লিকেশন সুরক্ষার জন্য parse_url() দিয়ে স্কিম (http বা https) চেক করা অত্যন্ত জরুরি।`,
          code: `<?php
$websiteInput = "https://example.com/api";
$url = trim($websiteInput);

if (!filter_var($url, FILTER_VALIDATE_URL)) {
    echo "Error: Invalid URL syntax";
} else {
    $scheme = parse_url($url, PHP_URL_SCHEME);
    if (!in_array($scheme, ['http', 'https'], true)) {
        echo "Error: Only HTTP/HTTPS protocols are allowed";
    } else {
        echo "✓ নিরাপদ ওয়েবসাইট ইউআরএল: " . htmlspecialchars($url);
    }
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `✓ নিরাপদ ওয়েবসাইট ইউআরএল: https://example.com/api`,
          noteBn: 'javascript: বা data: জাতীয় বিপজ্জনক স্কিম ঠেকাতে স্কিম হোয়াইটলিস্টিং বাধ্যতামূলক।'
        },
        {
          title: '৩. HTML5 Input Types বনাম PHP Validation',
          explanationBn: `HTML5 এর type="email" ও type="url" ব্রাউজার-লেভেল UX দেয়। কিন্তু নিরাপত্তা বজায় রাখতে সার্ভার-সাইডে পিএইচপি ভ্যালিডেশন সর্বদা সক্রিয় থাকতে হবে।`,
          code: `<!-- HTML5 Form Controls -->
<form method="POST">
    <label>ইমেইল:</label>
    <input type="email" name="email" required placeholder="name@domain.com"><br>

    <label>ওয়েবসাইট:</label>
    <input type="url" name="website" required placeholder="https://example.com"><br>

    <button type="submit">জমা দিন</button>
</form>`,
          codeLanguage: 'HTML Form & PHP',
          outputPreview: `[HTML5 Controls Rendered]\n• input[type="email"] with browser-native regex validation\n• input[type="url"] requiring http/https protocol prefix`,
          noteBn: 'ব্রাউজার ভ্যালিডেশন ক্লায়েন্ট বন্ধ করতে পারে, তাই সার্ভার-সাইড ভ্যালিডেশনই চূড়ান্ত নির্ভরতা।'
        },
        {
          title: '৪. স্যানিটাইজেশন ফিল্টার নিয়ে সতর্কতা ⚠️',
          explanationBn: `FILTER_SANITIZE_EMAIL বা FILTER_SANITIZE_URL দিয়ে ভ্যালিডেশন রিপ্লেস করবেন না। স্যানিটাইজার ভুল ক্যারেক্টার মুছে ফেলে, কিন্তু ভুল ইমেইল যে ভুল তা নির্দেশ করতে পারে না।`,
          code: `<?php
// ভুল উদাহরণ (Dangerous):
$badEmail = "invalid email@@test..com";
$sanitized = filter_var($badEmail, FILTER_SANITIZE_EMAIL);

echo "মূল ইনপুট: " . $badEmail . "<br>";
echo "স্যানিটাইজড: " . $sanitized . "<br>";
echo "⚠️ স্যানিটাইজেশনের ফলে ভুল ডেটা সাইন-ইন হয়ে যেতে পারে।";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `মূল ইনপুট: invalid email@@test..com\nস্যানিটাইজড: invalidemail@@test..com\n⚠️ স্যানিটাইজেশনের ফলে ভুল ডেটা সাইন-ইন হয়ে যেতে পারে।`,
          noteBn: 'ভ্যালিডেশনের জন্য সর্বদা FILTER_VALIDATE_EMAIL ও FILTER_VALIDATE_URL ব্যবহার করুন।'
        }
      ],
      keyPointsBn: [
        'Email ➔ filter_var($email, FILTER_VALIDATE_EMAIL)',
        'URL ➔ filter_var($url, FILTER_VALIDATE_URL)',
        'HTTP/HTTPS স্কিম নিশ্চিত করতে parse_url($url, PHP_URL_SCHEME) ব্যবহার করুন',
        'FILTER_SANITIZE_* দিয়ে ভ্যালিডেশন রিপ্লেস করবেন না',
        'Browser validation = UX, PHP validation = Server-side protection'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: Real-World Email & Website Validation',
          descriptionBn: 'মাল্টিপল এরর অ্যারে সহ ইমেইল ও ওয়েবসাইট ভ্যালিডেশন।',
          code: `<?php
$errors = [];

$email = trim($_POST['email'] ?? 'abbad@dev.io');
$url   = trim($_POST['website'] ?? 'https://abbad.dev');

if ($email === '') {
    $errors['email'] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email';
}

if ($url === '') {
    $errors['website'] = 'Website is required';
} elseif (!filter_var($url, FILTER_VALIDATE_URL)) {
    $errors['website'] = 'Invalid URL';
}

if (!$errors) {
    echo "✓ Email and Website are completely valid!";
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: দুর্বল strpos দিয়ে @ খোঁজা অথবা স্যানিটাইজার দিয়ে ভ্যালিডেশন ভাবা
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
// ভ্যালিডেশন ছাড়াই সেভ
saveToDb($email);`,
        juniorProblems: [
          'user@.com বা অবৈধ ফরম্যাটও সেভ হয়ে যাবে।',
          'javascript:alert(1) টাইপের ক্ষতিকর ইউআরএল ওপেন রিডাইরেক্ট ঝুঁকি তৈরি করে।'
        ],
        seniorCode: `// ✅ সিনিয়র: ভ্যালিডেশন + স্কিম চেক
$url = trim($_POST['website'] ?? '');
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    $errors['url'] = 'Invalid URL';
} else {
    $scheme = parse_url($url, PHP_URL_SCHEME);
    if (!in_array($scheme, ['http', 'https'], true)) {
        $errors['url'] = 'Only HTTP/HTTPS allowed';
    }
}`,
        seniorBenefits: [
          'RFC কমপ্লায়েন্ট শতভাগ নিখুঁত ইমেইল ও ইউআরএল ভ্যালিডেশন।',
          'SSRF ও Open Redirect আক্রমণ প্রতিহত হয়।'
        ],
        architectAdvice: 'ইউআরএল ফিল্ডে ইউজারের প্রোফাইল ওয়েবসাইট নেওয়ার সময় javascript: বা data: স্কিম আটকাতে সর্বদা parse_url() স্কিম হোয়াইটলিস্ট করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (php_filter_var)',
          'FETCH_CONSTANT (FILTER_VALIDATE_EMAIL)',
          'INIT_FCALL (php_parse_url)'
        ],
        explanationBn: `FILTER_VALIDATE_EMAIL সি-লেভেলে জেন্ড রেজেক্স ও RFC 822 স্টেট মেশিন দিয়ে ইমেইলের লোকাল পার্ট ও ডোমেইন পার্ট বিশ্লেষণ করে।`
      },
      security: {
        vulnerabilityType: 'SSRF & Open Redirect via Malicious Schemes',
        attackVectorBn: 'ফর্মে javascript:// বা file:/// লিঙ্ক ইনজেক্ট করে ব্রাউজারে কোড এক্সিকিউট বা সার্ভার ইন্টারনাল ফাইল রিড করা।',
        preventionRuleBn: 'FILTER_VALIDATE_URL এর সাথে সাথে শুধুমাত্র http এবং https স্কিম অনুমোদন করুন।'
      }
    }
  },
  {
    id: 'php-form-complete',
    title: 'PHP Complete Form Example',
    category: 'forms',
    tag: 'Registration, Password Hash & Repopulation',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'HTML Form, $_POST, Required, Email, Password Hash, Error Display, Old Input Repopulation, PRG ও Production চেকলিস্ট।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Complete Registration Form Architecture</h2>";

$errors = [];
$name = $email = "";
$isSuccess = false;

// সিমুলেটেড ইনকামিং POST রিকোয়েস্ট
$simulatedSubmission = [
    'name'     => 'Mohammad Abbad',
    'email'    => 'abbad.dev@example.com',
    'password' => 'SecurePass@2026'
];

// ১. Receive
$name     = trim($simulatedSubmission['name'] ?? '');
$email    = trim($simulatedSubmission['email'] ?? '');
$password = $simulatedSubmission['password'] ?? '';

// ২. Required Validation
if ($name === '') {
    $errors['name'] = 'Name is required';
}
if ($email === '') {
    $errors['email'] = 'Email is required';
}
if ($password === '') {
    $errors['password'] = 'Password is required';
}

// ৩. Email Validation
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email';
}

// ৪. Password Validation
if ($password !== '' && strlen($password) < 8) {
    $errors['password'] = 'Password must be at least 8 characters';
}

// ৫. Database Persistence (Password Hashing + PDO Prepared Statement)
if (!$errors) {
    $isSuccess = true;
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    echo "<div style='background:#064e3b; border:1px solid #059669; padding:12px; border-radius:8px; margin-bottom:16px;'>";
    echo "<h3 style='color:#34d399; margin:0 0 4px 0;'>🎉 Registration Successful!</h3>";
    echo "<p style='margin:0; font-size:13px; color:#a7f3d0;'>Password নিরাপদে <b>password_hash()</b> দিয়ে এনক্রিপ্ট করা হয়েছে এবং PDO Prepared Statement দিয়ে ডাটাবেসে সেভ হয়েছে।</p>";
    echo "</div>";

    echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
    echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>Database Column</th><th style='padding:6px; text-align:left;'>Saved Value</th></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>name</td><td style='padding:6px; color:#38bdf8;'><b>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</b></td></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>email</td><td style='padding:6px; color:#4ade80;'>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</td></tr>";
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>password_hash (Bcrypt)</td><td style='padding:6px; font-family:monospace; color:#fbbf24; font-size:11px; word-break:break-all;'>$passwordHash</td></tr>";
    echo "</table>";
}

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>Complete Form Flow:</h4>";
echo "<div style='background:#1e293b; padding:12px; border-radius:8px; font-family:monospace; font-size:12px; color:#38bdf8;'>";
echo "Form ➔ POST Request ➔ Receive Data ➔ trim() ➔ Required Check ➔ Email/Password Validation ➔ Errors? (YES: Show Errors | NO: password_hash() ➔ Prepared Statement ➔ Database ➔ Success)";
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `একটি রিয়েল-ওয়ার্ল্ড রেজিস্ট্রেশন ফর্মে HTML Form, \$_POST, Required Validation, Email Validation, Password Validation, Error Display, Old Input Repopulation, Password Hashing ও Database Insert একসাথে কাজ করে।\n\n🎯 Complete Pattern:\nReceive ➔ Validate ➔ Process ➔ Database ➔ Response\n\n🔥 পাসওয়ার্ড কখনো plain text ডাটাবেসে সেভ করবেন না (password_hash দিয়ে সেভ এবং password_verify দিয়ে লগইন চেক করবেন)।`,
      lessonSections: [
        {
          title: '১. Full Self-Processing HTML Form Structure',
          explanationBn: `একই ফাইলে ফর্ম ডিসপ্লে ও POST রিকোয়েস্ট প্রসেস করার ক্লিন স্ট্রাকচার।`,
          code: `<!-- Self Processing Registration Form -->
<form method="POST" action="">
    <div style="margin-bottom:8px;">
        <label>Name:</label><br>
        <input type="text" name="name" placeholder="Full Name">
    </div>

    <div style="margin-bottom:8px;">
        <label>Email:</label><br>
        <input type="email" name="email" placeholder="email@domain.com">
    </div>

    <div style="margin-bottom:8px;">
        <label>Password:</label><br>
        <input type="password" name="password" placeholder="Min 8 chars">
    </div>

    <button type="submit">Create Account</button>
</form>`,
          codeLanguage: 'HTML Form & PHP',
          outputPreview: `[Registration Form Rendered]\nAction: Self (action="")\nMethod: POST\nFields: name, email, password`,
          noteBn: 'action="" দিলে সাবমিশন একই স্ক্রিপ্টে আসে যা সেলফ-হ্যান্ডলিং ফর্মের স্ট্যান্ডার্ড।'
        },
        {
          title: '২. PHP Form Handling, Validation & Password Hash',
          explanationBn: `সার্ভার-সাইডে ইনপুট গ্রহণ, ট্রিম, এরর চেকিং ও Bcrypt পাসওয়ার্ড হ্যাশিং।`,
          code: `<?php
$errors = [];
$name = "Mohammad Abbad";
$email = "abbad.dev@gmail.com";
$password = "SecretPass@2026";

if ($name === '') $errors['name'] = 'Name is required';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Invalid email';
if (strlen($password) < 8) $errors['password'] = 'Password must be at least 8 characters';

if (empty($errors)) {
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    echo "✓ ভ্যালিডেশন সফল!<br>";
    echo "Generated Hash: " . substr($passwordHash, 0, 30) . "...<br>";
    echo "Ready for: INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)";
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `✓ ভ্যালিডেশন সফল!\nGenerated Hash: $2y$10$e8w3Yw3Zq1u7v9p0k2j...\nReady for: INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)`,
          noteBn: 'password_hash() প্রতিবার ইউনিক সল্ট স্বয়ংক্রিয়ভাবে তৈরি করে।'
        },
        {
          title: '৩. Error Display ও Old Input Repopulation (Value Preservation)',
          explanationBn: `ইউজার ভুল করলে তার টাইপ করা নাম ও ইমেইল যাতে মুছে না যায় তার জন্য value অ্যাট্রিবিউটে htmlspecialchars() সহ ভ্যালু প্রিন্ট করা হয়।`,
          code: `<?php
$oldName = "Abbad";
$oldEmail = "wrong-email-format";
$errorEmail = "Invalid email format";
?>

<div style="font-family:sans-serif; background:#f8fafc; padding:12px; border:1px solid #cbd5e1; border-radius:8px;">
    <p>Name: <input type="text" value="<?= htmlspecialchars($oldName) ?>"></p>
    <p>Email: <input type="text" value="<?= htmlspecialchars($oldEmail) ?>"></p>
    <p style="color:#ef4444; font-size:12px; margin:0;">⚠ <?= $errorEmail ?></p>
</div>`,
          codeLanguage: 'HTML Form & PHP',
          outputPreview: `Name: [Abbad] (Preserved)\nEmail: [wrong-email-format] (Preserved)\n⚠ Invalid email format`,
          noteBn: 'নিরাপত্তা স্বার্থে পাসওয়ার্ড ফিল্ডে কখনো Old Value রিপপুলেট করবেন না।'
        },
        {
          title: '৪. Production-Ready এন্টারপ্রাইজ চেকলিস্ট ও PRG প্যাটার্ন',
          explanationBn: `প্রোডাকশন ফর্মে সাবমিশনের পর ডুপ্লিকেট রিকোয়েস্ট ঠেকাতে Post/Redirect/Get (PRG) প্যাটার্ন এবং সেশন ফ্ল্যাশ মেসেজ ব্যবহার করা হয়।`,
          code: `<?php
// সফল সাবমিশনের পর PRG Pattern
$registrationSuccessful = true;

if ($registrationSuccessful) {
    // header("Location: /dashboard.php?registered=1");
    // exit;
    echo "HTTP/1.1 302 Found<br>";
    echo "Location: /dashboard.php?success=1<br>";
    echo "✓ ব্রাউজার রিফ্রেশ চাপলেও দ্বিতীয়বার ফর্ম সাবমিট হবে না (PRG Pattern Active)।";
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `HTTP/1.1 302 Found\nLocation: /dashboard.php?success=1\n✓ ব্রাউজার রিফ্রেশ চাপলেও দ্বিতীয়বার ফর্ম সাবমিট হবে না (PRG Pattern Active)।`,
          noteBn: 'PRG প্যাটার্ন ব্যবহার করলে ব্রাউজারের "Confirm Form Resubmission" পপআপ সম্পূর্ণ বন্ধ হয়।'
        }
      ],
      keyPointsBn: [
        'Complete PHP Form Pattern: Receive ➔ Validate ➔ Process ➔ Database ➔ Response',
        'পাসওয়ার্ড ডাটাবেসে সেভ করতে password_hash($pass, PASSWORD_DEFAULT) এবং ভেরিফাই করতে password_verify()',
        'SQL-এর জন্য PDO Prepared Statement এবং HTML output-এর জন্য context অনুযায়ী escaping',
        'ভুল হলে ব্যবহারকারীর আগের ইনপুট ফিরিয়ে দিতে value="<?= htmlspecialchars($name ?? \'\') ?>" ব্যবহার করুন',
        'সফল সাবমিশনের পর ডুপ্লিকেট সাবমিশন এড়াতে PRG (Post/Redirect/Get) প্যাটার্ন অনুসরণ করুন'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: Full Self-Processing Registration Form With Errors & Old Inputs',
          descriptionBn: 'একটি পূর্ণাঙ্গ সেলফ-হ্যান্ডলিং পিএইচপি রেজিস্ট্রেশন ফর্ম।',
          code: `<?php
$errors = [];
$name = $email = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($name === '') $errors['name'] = 'Name is required';
    if ($email === '') $errors['email'] = 'Email is required';
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Invalid email';
    if (strlen($password) < 8) $errors['password'] = 'Password must be at least 8 characters';

    if (!$errors) {
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        $success = "Registration successful!";
    }
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: প্লেইন টেক্সট পাসওয়ার্ড সেভ ও কোনো এরর হ্যান্ডলিংহীন কোড
if ($_POST) {
    $sql = "INSERT INTO users (name, email, password) 
            VALUES ('" . $_POST['name'] . "', '" . $_POST['email'] . "', '" . $_POST['password'] . "')";
    $db->query($sql);
    echo "Done";
}`,
        juniorProblems: [
          'পাসওয়ার্ড প্লেইন টেক্সটে সেভ থাকায় ডাটাবেস লিক হলে সব ইউজারের পাসওয়ার্ড চুরি হবে।',
          'SQL Injection ও XSS এর জন্য অ্যাপ্লিকেশন সম্পূর্ণ অরক্ষিত।',
          'ইউজার ভুল করলে কোনো এরর মেসেজ পাবে না এবং সব ইনপুট হারিয়ে যাবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: ভ্যালিডেশন, পাসওয়ার্ড হ্যাশিং, পিডিও প্রিপেয়ার্ড স্টেটমেন্ট ও পিআরজি প্যাটার্ন
$errors = [];
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$pass = $_POST['password'] ?? '';

if ($name === '') $errors['name'] = 'Name is required';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Invalid email';
if (strlen($pass) < 8) $errors['password'] = 'Password must be at least 8 characters';

if (empty($errors)) {
    $hash = password_hash($pass, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $hash]);
    header("Location: /login.php?registered=1");
    exit();
}`,
        seniorBenefits: [
          'Bcrypt/Argon2id দিয়ে পাসওয়ার্ড সুরক্ষিত।',
          'SQL Injection অসম্ভব এবং ডুপ্লিকেট সাবমিশন রোধ হয়।'
        ],
        architectAdvice: 'পাসওয়ার্ড হ্যাশিংয়ে কখনো md5() বা sha1() ব্যবহার করবেন না; সর্বদা password_hash($password, PASSWORD_DEFAULT) বা PASSWORD_ARGON2ID ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (password_hash)',
          'FETCH_CONSTANT (PASSWORD_DEFAULT)',
          'DO_FCALL -> php_password_hash()'
        ],
        explanationBn: `password_hash() ফাংশনটি জেন্ড ইঞ্জিনের বিল্ট-ইন ক্রিপ্টোগ্রাফিক র্যান্ডম সল্ট জেনারেটর ব্যবহার করে প্রতিটি পাসওয়ার্ডের জন্য ইউনিক সল্ট তৈরি করে এবং স্লো কস্টিং ফ্যাক্টর সহ হ্যাশ রিটার্ন করে।`
      },
      security: {
        vulnerabilityType: 'Plaintext Password Storage & SQL Injection',
        attackVectorBn: 'ডাটাবেসে প্লেইন টেক্সট পাসওয়ার্ড রেখে দেওয়া অথবা দুর্বল হ্যাশ (md5/sha1) ব্যবহার করা যা রেইনবো টেবিল দিয়ে তাৎক্ষণিক ক্র্যাক করা যায়।',
        preventionRuleBn: 'বাধ্যতামূলকভাবে password_hash() ব্যবহার করুন এবং ডাটাবেস অপারেশনের জন্য PDO Prepared Statement প্রয়োগ করুন।'
      }
    }
  }
];
