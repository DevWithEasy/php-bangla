import { TopicItem } from '../types';

export const FORMS_TOPICS: TopicItem[] = [
  {
    id: 'php-form-handling',
    title: 'PHP Form Handling',
    category: 'forms',
    tag: 'GET vs POST',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'HTTP GET বনাম POST রিকোয়েস্ট, ফর্ম সাবমিশন এবং ডাটা রিসিভিং।',
    sampleCode: `<?php
// রিকোয়েস্ট মেথড চেক
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['username'] ?? '', ENT_QUOTES, 'UTF-8');
    echo "স্বাগতম, " . $name . "! (POST মেথডে প্রাপ্ত)";
} else {
    echo "সরাসরি ব্রাউজারে পেজ লোড হয়েছে (GET মেথড)।";
}
?>`,
    deepDive: {
      conceptBn: `GET মেথডে ডাটা URL কুয়েরি স্ট্রিংয়ে পাস হয় যা বুকমার্ক বা সার্চের জন্য উপযোগী কিন্তু পাসওয়ার্ড বা গোপন তথ্যের জন্য অনিরাপদ। সংবেদনশীল ও ডাটাবেস পরিবর্তনকারী অপারেশনের জন্য সর্বদা POST মেথড ব্যবহার করা আবশ্যক।`,
      keyPointsBn: [
        'GET রিকোয়েস্টের সাইজ লিমিট থাকে এবং ব্রাউজার হিস্ট্রিতে ডাটা সেভ থাকে।',
        'POST রিকোয়েস্টের বডিতে ডাটা এনকোড হয়ে যায়, যা বড় ফাইল আপলোড ও ক্রেডেনশিয়ালস পাঠানোর জন্য আদর্শ।'
      ],
      security: {
        vulnerabilityType: 'Cross-Site Request Forgery (CSRF)',
        attackVectorBn: 'ব্যবহারকারী অন্য সাইটে লগইন থাকা অবস্থায় ক্ষতিকর লিঙ্ক ক্লিক করালে তার পক্ষে সাবমিশন হয়ে যেতে পারে।',
        preventionRuleBn: 'প্রতিটি POST ফর্মে ইউনিক সিআরএফ টোকেন (CSRF Token) যুক্ত করুন এবং সার্ভারে মিলিয়ে নিন।'
      }
    }
  },
  {
    id: 'php-form-validation',
    title: 'PHP Form Validation',
    category: 'forms',
    tag: 'Sanitization',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'সার্ভার-সাইড ভ্যালিডেশন, ট্রিম, স্ট্রিপস্ল্যাশ ও ডেটা স্যানিটাইজেশন।',
    sampleCode: `<?php
function cleanInput(string $data): string {
    $data = trim($data);
    $data = stripslashes($data);
    return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
}

$raw = "  <script>alert('hack')</script> Robiul  ";
$clean = cleanInput($raw);
echo "মূল ইনপুট: " . htmlspecialchars($raw) . "<br>";
echo "স্যানিটাইজড আউটপুট: " . $clean;
?>`,
    deepDive: {
      conceptBn: `ক্লায়েন্ট-সাইড ভ্যালিডেশন (JS/HTML5) ব্যবহারকারীকে তাৎক্ষণিক প্রতিক্রিয়া দেয়, কিন্তু হ্যাকাররা সহজেই তা বাইপাস করতে পারে। তাই সার্ভার-সাইড ভ্যালিডেশন হলো নিরাপত্তার একমাত্র শেষ প্রতিরক্ষা প্রাচীর।`,
      keyPointsBn: [
        'কখনোই অপরিশোধিত ইউজারের ডাটা ট্রাস্ট করবেন না (Never trust user input)।',
        'filter_var() এবং filter_input() পিএইচপির বিল্ট-ইন ফিল্টারিং মেকানিজম প্রদান করে।'
      ]
    }
  },
  {
    id: 'php-form-required',
    title: 'PHP Form Required Fields',
    category: 'forms',
    tag: 'Validation Errors',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'বাধ্যতামূলক ফিল্ডের ত্রুটি হ্যান্ডলিং এবং ব্যবহারকারীকে পরিষ্কার এরর মেসেজ প্রদর্শন।',
    sampleCode: `<?php
$nameErr = $emailErr = "";
$name = $email = "";

// কাল্পনিক ইনপুট ডাটা
$inputName = "";
$inputEmail = "invalid-email";

if (empty($inputName)) {
    $nameErr = "নামের ফিল্ডটি অবশ্যই পূরণ করতে হবে!";
}

if (!filter_var($inputEmail, FILTER_VALIDATE_EMAIL)) {
    $emailErr = "সঠিক ইমেইল ঠিকানা প্রদান করুন!";
}

echo "এরর মেসেজ সমূহ:<br>";
echo "<span style='color:red;'>$nameErr</span><br>";
echo "<span style='color:red;'>$emailErr</span>";
?>`,
    deepDive: {
      conceptBn: `বাধ্যতামূলক ফিল্ডের ক্ষেত্রে empty() চেক ও ফিল্টার ফাংশন ব্যবহার করে নির্দিষ্ট এরর অ্যারে তৈরি করা হয়। ভ্যালিডেশন ব্যর্থ হলে ইনপুটগুলো পুনরায় ফর্মে রি-পপুলেট করে এরর হাইলাইট করা উচিত।`,
      keyPointsBn: [
        'এররগুলো কি-ভ্যালু পেয়ারে অ্যারেতে সংরক্ষণ করা প্রফেশনাল আর্কিটেকচার।',
        'এন্টারপ্রাইজ ফর্মে ভ্যালিডেশন লজিক ডেডিকেটেড রিকোয়েস্ট ক্লাসে (যেমন Laravel FormRequest) আলাদা রাখা হয়।'
      ]
    }
  }
];
