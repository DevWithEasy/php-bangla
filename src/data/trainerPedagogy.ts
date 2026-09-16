import { TopicItem, PedagogicalDetails, PresentationSlide } from '../types';

/**
 * 20+ Years Senior PHP Trainer & Principal Architect Knowledge Base
 * Hand-crafted masterclass pedagogy, real-world mental models, interview Q&A,
 * common beginner traps, and interactive classroom presentation slides.
 */

interface TopicPedagogyOverrides {
  trainerMetaphorBn: string;
  beginnerSteps: { step: number; title: string; explanationBn: string; codePiece?: string }[];
  trainerSecretsBn: string[];
  commonGotchasBn: string[];
  interviewQuestions: { questionBn: string; answerBn: string; seniorTipBn: string }[];
  studentChallenge: { title: string; taskBn: string; hintBn: string; starterCode: string; solutionCode: string };
  customSlides?: PresentationSlide[];
}

const SPECIFIC_PEDAGOGY: Record<string, TopicPedagogyOverrides> = {
  'php-home': {
    trainerMetaphorBn:
      'PHP-কে কল্পনা করুন একটি অত্যন্ত ব্যস্ত রেস্তোরাঁর ভেতরের প্রধান শেফ (Chef) হিসেবে। ক্লায়েন্ট (ব্রাউজার) হলো কাস্টমার যে মেন্যু দেখে অর্ডার পাঠায় (HTTP Request)। ওয়েব সার্ভার হলো ওয়েটার, আর পিএইচপি রান্নাঘরে বসে কাঁচা ডাটা রান্না করে একটি পরিপূর্ণ গরম খাবার (HTML Response) তৈরি করে সার্ভ করে। কাস্টমার কিন্তু রান্নাঘরের চুলা বা মশলা (PHP সোর্স কোড) দেখতে পায় না, শুধু প্লেটে পরিবেশন করা খাবার (HTML) দেখতে পায়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'সার্ভার-সাইড এক্সিকিউশন বুঝুন',
        explanationBn: 'ব্রাউজার সরাসরি পিএইচপি বোঝে না। ব্রাউজারকে পিএইচপি কোড রান করে পাওয়া এইচটিএমএল আউটপুট পাঠাতে হয়।'
      },
      {
        step: 2,
        title: 'ট্যাগ সিনট্যাক্স <?php ... ?> এর গুরুত্ব',
        explanationBn: 'ওয়েব সার্ভার যখন ফাইলের ভেতর <?php দেখে, তখন সে জেন্ড ইঞ্জিনকে কল করে। যেখানে ?> দেখে সেখানে সাধারণ টেক্সট রেন্ডারিং শুরু করে।'
      },
      {
        step: 3,
        title: 'echo ও সেমিকোলন (;)',
        explanationBn: 'প্রতিটি পিএইচপি স্টেটমেন্টের শেষে সেমিকোলন অবশ্যই দিতে হবে। এটি বাক্যের দাড়ি বা ফুলস্টপের মতো নির্দেশ করে যে নির্দেশটি শেষ হয়েছে।'
      }
    ],
    trainerSecretsBn: [
      '২০ বছরের অভিজ্ঞতা থেকে বলছি: নতুনরা প্রায়ই HTML এবং PHP মিশ্রিত করে এক ফাইলে বিশাল স্প্যাগেটি কোড বানিয়ে ফেলে। আধুনিক পিএইচপিতে আমরা MVC বা টেমপ্লেট ইঞ্জিন (Twig/Blade) ব্যবহার করে লজিক আর ভিউ ১০০% আলাদা রাখি।',
      'পিএইচপির পিওর কোড ফাইলের শেষে কখনই সমাপনী ট্যাগ (?>) ব্যবহার করবেন না। সমাপনী ট্যাগের পরে অনিচ্ছাকৃত স্পেস থাকলে "Headers already sent" এরর তৈরি হয়।',
      'PHP 8.2+ ইঞ্জিন এখন জাভা বা গো-এর মতো স্ট্রংলি টাইপড ফিচারে সমৃদ্ধ। শুরু থেকেই টাইপ ডিক্লেয়ারেশন অভ্যাস করুন।'
    ],
    commonGotchasBn: [
      'লাইন শেষে সেমিকোলন (;) দিতে ভুলে যাওয়া — এটি বিগিনারদের ৯০% সিনট্যাক্স এররের কারণ।',
      'ভেরিয়েবলের নামের আগে ডলার সাইন ($) দিতে ভুলে যাওয়া।',
      'HTTP হেডারের আগে কোনো echo বা ফাঁকা স্পেস প্রিন্ট করে ফেলা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'PHP কী এবং বাস্তব বিশ্বে এটি মূলত কোথায় কোথায় ব্যবহার হয়?',
        answerBn: 'PHP হলো একটি জনপ্রিয় Server-Side Programming Language, যা মূলত Web Development ও Backend Development-এর জন্য ব্যবহৃত হয়। এটি দিয়ে Dynamic Website, Web Application (ERP, CRM, POS), E-commerce (WooCommerce/Magento), User Auth (RBAC), Database-driven Apps (MySQL, PostgreSQL), REST API (React/Flutter ব্যাকএন্ড), File Handling এবং Laravel ও WordPress পরিচালিত প্ল্যাটফর্ম তৈরি ও মেইনটেইন করা হয়।',
        seniorTipBn: 'ভাইভায় ইন্টারভিউয়ারকে বলবেন: একজন PHP Developer মূলত ক্লায়েন্ট রিকোয়েস্ট রিসিভ করে ডাটাবেস/বিজনেস লজিক প্রসেসিং শেষে নিরাপদ HTML বা JSON রেসপন্স ব্রাউজার বা মোবাইল অ্যাপে পাঠায়।'
      },
      {
        questionBn: 'PHP-এর সাধারণ আর্কিটেকচার ফ্লো কীভাবে কাজ করে?',
        answerBn: 'User ➔ Browser ➔ HTTP Request ➔ PHP Application ➔ Database / File / External API ➔ PHP Processing ➔ HTML / JSON Response ➔ Browser।',
        seniorTipBn: 'ইন্টারভিউতে বলুন যে পিএইচপি সোর্স কোড ক্লায়েন্ট ব্রাউজারে কখনই সরাসরি দৃশ্যমান হয় না, ক্লায়েন্ট কেবল রানটাইম প্রসেসড আউটপুট গ্রহণ করে।'
      },
      {
        questionBn: 'PHP 8-এ JIT (Just-In-Time) কম্পাইলার আসার সুবিধা কী?',
        answerBn: 'JIT অপকোডকে সরাসরি CPU মেশিনের কোডে রূপান্তর করে মেমরিতে রাখে, যার ফলে ভারী ক্যালকুলেশন ও CPU-ইনটেনসিভ টাস্ক পূর্বের তুলনায় বহুগুণ দ্রুত সম্পন্ন হয়।',
        seniorTipBn: 'স্মার্টলি বলবেন: ওয়েব আইও বা ডাটাবেস বাউন্ড কাজের চেয়ে গাণিতিক হিসাব ও ডাটা প্রসেসিংয়ে JIT সবচেয়ে বেশি পারফরম্যান্স বুস্ট দেয়।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ ১: আপনার প্রথম ডায়নামিক পিএইচপি ব্যানার',
      taskBn: 'ডানপাশের এডিটরে আপনার নাম, বর্তমান সাল এবং পিএইচপির সংস্করণ প্রিন্ট করে একটি সুন্দর এইচটিএমএল কার্ড আউটপুট তৈরি করুন।',
      hintBn: 'date("Y") এবং phpversion() ফাংশন ব্যবহার করুন।',
      starterCode: `<?php
// এখানে আপনার কোড লিখুন
$developerName = "রহিম";
echo "স্বাগতম, " . $developerName;
?>`,
      solutionCode: `<?php
$developerName = "সোহেল রানা";
$currentYear = date("Y");
$phpVer = phpversion();

echo "<div style='font-family:sans-serif; padding:16px; border:2px solid #04AA6D; border-radius:8px;'>";
echo "<h2>প্রফেশনাল PHP ট্রেইনিং ড্যাশবোর্ড</h2>";
echo "<p>ডেভেলপারের নাম: <b>$developerName</b></p>";
echo "<p>সাল: <b>$currentYear</b> | ইঞ্জিন: <b>PHP $phpVer</b></p>";
echo "</div>";
?>`
    }
  },

  'php-install': {
    trainerMetaphorBn:
      'PHP হলো একটি পাওয়ারফুল ইঞ্জিন, কিন্তু এটি শুধু তৈরি করা গাড়ি ছাড়া চলতে পারে না। একটি পূর্ণাঙ্গ গাড়ি তৈরি করতে ইঞ্জিন (PHP), রোড ও ট্রাফিক কন্ট্রোলার (Apache Web Server) এবং তেল ও কার্গো বক্স (MySQL Database) লাগে। XAMPP হলো একটি অল-ইন-ওয়ান প্যাকেজ যা আপনাকে পুরো গাড়িটি এক ক্লিকেই রেডি করে দেয়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'PHP Runtime ও XAMPP ইন্সটলেশন',
        explanationBn: 'XAMPP ডাউনলোড করে ইন্সটল করুন। এটি C:\\xampp ডিরেক্টরিতে Apache, PHP ও MySQL একসাথে সেটআপ করে।'
      },
      {
        step: 2,
        title: 'Environment Variable (PATH) সেট করা',
        explanationBn: '"php is not recognized" সমস্যা হলে Windows PATH-এ C:\\xampp\\php পাথ যোগ করুন এবং কমান্ড প্রম্পটে "php -v" দিয়ে ভেরিফাই করুন।'
      },
      {
        step: 3,
        title: 'htdocs এবং প্রথম প্রজেক্ট রান',
        explanationBn: 'C:\\xampp\\htdocs\\hello.php ফাইলে কোড লিখে XAMPP Control Panel-এ Apache স্টার্ট করে ব্রাউজারে http://localhost/hello.php ভিজিট করুন।'
      }
    ],
    trainerSecretsBn: [
      'প্রফেশনাল টিপ: বড় প্রজেক্ট বা Laravel ডেভেলপমেন্টে Docker অথবা Laravel Herd/Valet ও Composer ব্যবহার করা বেশি জনপ্রিয় ও ক্লিন।',
      'প্রোডাকশনে কখনো XAMPP ব্যবহার করবেন না; প্রোডাকশন সার্ভারে সর্বদা Ubuntu/Debian-এ Nginx + PHP-FPM অথবা কন্টেইনারাইজড ক্লাউড রান ব্যবহার করা হয়।',
      'টার্মিনালে নিয়মিত php -m (extensions) এবং php --ini (কনফিগারেশন লোকেশন) চেক করার অভ্যাস তৈরি করুন।'
    ],
    commonGotchasBn: [
      'ভুল ডিরেক্টরি: htdocs-এর বাইরে কোড রাখলে Apache সার্ভার ব্রাউজার থেকে তা এক্সেস করতে পারে না।',
      'পোর্ট কনফ্লিক্ট: Skype বা অন্য কোনো সফটওয়্যার পোর্ট ৮০ বা ৪৪৩ ব্লক করে রাখলে Apache স্টার্ট হতে ব্যর্থ হয়।',
      'Windows-এ PATH সেট না করে টার্মিনাল রিস্টার্ট না করা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'ব্রাউজার থেকে যখন http://localhost/hello.php রিকোয়েস্ট পাঠানো হয়, ব্যাকএন্ডে কী কী ঘটে?',
        answerBn: '১. ব্রাউজার লোকালহোস্টের ৮০ পোর্টে HTTP রিকোয়েস্ট পাঠায়। ২. Apache সার্ভার রিকোয়েস্ট গ্রহণ করে C:\\xampp\\htdocs\\hello.php ফাইলটি লোকেট করে। ৩. ফাইলের এক্সটেনশন .php হওয়ায় Apache এটি PHP ইন্টারপ্রেটারকে এক্সিকিউট করতে দেয়। ৪. PHP ইঞ্জিন কোড রান করে বিশুদ্ধ HTML/টেক্সট আউটপুট তৈরি করে Apache-কে ফেরত দেয়। ৫. Apache সেই রেসপন্স ব্রাউজারে পাঠায়।',
        seniorTipBn: 'ভাইভায় এই ফ্লো-টি ধাপে ধাপে বলতে পারলে ইন্টারভিউয়ার বুঝবেন আপনার ক্লায়েন্ট-সার্ভার আর্কিটেকচারের স্পষ্ট ধারণা রয়েছে।'
      },
      {
        questionBn: 'PHP CLI এবং PHP-FPM / Apache মডিউলের মধ্যে পার্থক্য কী?',
        answerBn: 'CLI (Command Line Interface) ব্যবহৃত হয় টার্মিনাল স্ক্রিপ্ট, ব্যাকগ্রাউন্ড ক্রন জব ও অটোমেশন চালানোর জন্য। আর PHP-FPM বা Web Server Module ব্যবহৃত হয় ওয়েব ব্রাউজারের ইনকামিং HTTP রিকোয়েস্ট হ্যান্ডেল করে রেসপন্স দেওয়ার জন্য।',
        seniorTipBn: 'CLI-এর max_execution_time ডিফল্টভাবে আনলিমিটেড (0) থাকে, কিন্তু ওয়েব সার্ভার রিকোয়েস্টে সাধারণত ৩০ বা ৬০ সেকেন্ড লিমিট থাকে।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: পিএইচপি রানটাইম এনভায়রনমেন্ট চেক',
      taskBn: 'ডানপাশের এডিটরে আপনার পিএইচপি ভার্সন, মেমোরি লিমিট ও বর্তমান টাইমজোন প্রিন্ট করে একটি সুন্দর স্ট্যাটাস তৈরি করুন।',
      hintBn: 'phpversion(), ini_get("memory_limit"), date_default_timezone_get() ফাংশন ব্যবহার করুন।',
      starterCode: `<?php
// এখানে রানটাইম ইনফো তৈরি করুন
echo "PHP Version: " . phpversion();
?>`,
      solutionCode: `<?php
echo "<div style='font-family:sans-serif; padding:12px; background:#f0fdf4; border:1px solid #86efac; border-radius:6px;'>";
echo "<h4>PHP Environment Status</h4>";
echo "<p>Version: <b>" . phpversion() . "</b></p>";
echo "<p>Memory Limit: <b>" . ini_get('memory_limit') . "</b></p>";
echo "<p>Timezone: <b>" . date_default_timezone_get() . "</b></p>";
echo "</div>";
?>`
    }
  },

  'php-syntax': {
    trainerMetaphorBn:
      'PHP Syntax হলো ভাষার ব্যাকরণ। যেমন বাংলায় বাক্য শেষে "দাঁড়ি" দিতে হয়, PHP-তে তেমনি স্টেটমেন্ট শেষে সেমিকোলন (;) দিতে হয়। আর ভেরিয়েবলের সামনে ডলার ($) চিহ্ন হলো তার পরিচয়পত্র—ডলার দেখলেই পিএইচপি ইঞ্জিন বুঝে নেয় এটি একটি ভেরিয়েবল মেমোরি বক্স।',
    beginnerSteps: [
      {
        step: 1,
        title: 'ওপেনিং ট্যাগ ও সেমিকোলন',
        explanationBn: 'সবসময় <?php দিয়ে স্ক্রিপ্ট শুরু করুন এবং প্রতি স্টেটমেন্টের শেষে সেমিকোলন (;) নিশ্চিত করুন।'
      },
      {
        step: 2,
        title: 'ভেরিয়েবল ডিক্লারেশন ও কেস সেনসিটিভিটি',
        explanationBn: 'ভেরিয়েবল সর্বদা $ দিয়ে শুরু হয়। মনে রাখবেন $name এবং $Name দুটি সম্পূর্ণ ভিন্ন ভেরিয়েবল।'
      },
      {
        step: 3,
        title: 'echo এবং String Concatenation',
        explanationBn: 'আউটপুটের জন্য echo ব্যবহার করুন এবং স্ট্রিং বা ভেরিয়েবল জোড়া লাগাতে ডট (.) অপারেটর ব্যবহার করুন।'
      }
    ],
    trainerSecretsBn: [
      'PSR-12 কোডিং স্ট্যান্ডার্ড: পিউর পিএইচপি ফাইলে কখনো সমাপনী ?> ট্যাগ দেবেন না। এটি হেডার ও সেশন এরর রোধ করে।',
      'ডাবল কোটেশন ("...") ভেরিয়েবল ইন্টারপোলেট করে দ্রুত টেমপ্লেটিংয়ে সাহায্য করে, কিন্তু ফিক্সড টেক্সটের জন্য সিঙ্গেল কোট (\'...\') সামান্য হলেও বেশি পারফরম্যান্ট।',
      'Short echo tag <?= $val ?> টেমপ্লেট ভিউতে কোড অনেক ক্লিন রাখে।'
    ],
    commonGotchasBn: [
      'সেমিকোলন বাদ দেওয়া (PHP Parse error: syntax error, unexpected token)।',
      'স্ট্রিং কোটেশনের ম্যাচিং ভুল (যেমন সিঙ্গেল কোট শুরু করে ডাবল কোটে শেষ করা)।',
      'কেস সেনসিটিভিটি ভুলে গিয়ে $myVar ডিফাইন করে $myvar দিয়ে রিড করার চেষ্টা করা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'PHP-তে ভেরিয়েবল নাম এবং ফাংশন নামের কেস-সেনসিটিভিটির মধ্যে পার্থক্য কী?',
        answerBn: 'PHP-তে ভেরিয়েবল নাম ($user vs $User) শতভাগ কেস-সেনসিটিভ। কিন্তু ফাংশন নাম, ক্লাস মেথড এবং বিল্ট-ইন কি-ওয়ার্ড (echo, if, while) কেস-ইনসেনসিটিভ। তবে বেস্ট প্র্যাকটিস হলো সর্বদা সব জায়গায় সামঞ্জস্যপূর্ণ সঠিক কেস মেনে চলা।',
        seniorTipBn: 'PSR-12 স্ট্যান্ডার্ড অনুযায়ী মেথড বা ফাংশন সবসময় camelCase এবং ক্লাস নাম PascalCase মেনে চলা উচিত।'
      },
      {
        questionBn: 'পিউর PHP স্ক্রিপ্ট ফাইলে ক্লোজিং ট্যাগ ?> না দেওয়া কেন স্ট্যান্ডার্ড নিয়ম?',
        answerBn: 'ক্লোজিং ট্যাগ ?> দেওয়ার পর যদি ফাইলে কোনো অনিচ্ছাকৃত ফাঁকা লাইন বা স্পেস (trailing whitespace) থেকে যায়, তবে পিএইচপি ইঞ্জিন তা ব্রাউজারে আউটপুট হিসেবে পাঠিয়ে দেয়। এর ফলে পরবর্তীতে header(), session_start() বা setcookie() কল করলে "Headers already sent" এরর ঘটে। তাই ক্লোজিং ট্যাগ বাদ দেওয়া আন্তর্জাতিক স্ট্যান্ডার্ড।',
        seniorTipBn: 'ইন্টারভিউতে "Headers already sent" সমস্যাটির সমাধান হিসেবে ক্লোজিং ট্যাগ বাদ দেওয়া উল্লেখ করলে প্রফেশনাল অভিজ্ঞতা প্রকাশ পায়।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: ডাইনামিক প্রোডাক্ট রিসিপ্ট তৈরি',
      taskBn: 'প্রোডাক্টের নাম, দাম, পরিমাণ ভেরিয়েবল তৈরি করে মোট বিল হিসাব করুন এবং echo দিয়ে ফরম্যাটেড এইচটিএমএল আউটপুট দিন।',
      hintBn: '$total = $price * $quantity; এবং <?= $total ?> বা ডাবল কোট ব্যবহার করুন।',
      starterCode: `<?php
// এখানে প্রোডাক্ট রিসিপ্ট সিনট্যাক্স লিখুন
$item = "কীবোর্ড";
$price = 1200;
$qty = 2;
?>`,
      solutionCode: `<?php
$item = "মেকানিক্যাল কীবোর্ড";
$price = 2500;
$qty = 2;
$total = $price * $qty;

echo "<div style='font-family:sans-serif; padding:14px; border:1px solid #cbd5e1; border-radius:8px;'>";
echo "<h3 style='margin:0 0 8px 0; color:#0f172a;'>পণ্য চালান রসিদ</h3>";
echo "<p>পণ্য: <b>$item</b></p>";
echo "<p>একক মূল্য: <b>$price ৳</b> | পরিমাণ: <b>$qty</b></p>";
echo "<p style='color:#16a34a; font-size:16px;'>সর্বমোট মূল্য: <b>$total ৳</b></p>";
echo "</div>";
?>`
    }
  },

  'php-variables': {
    trainerMetaphorBn:
      'ভেরিয়েবলকে কল্পনা করুন আপনার পড়ার টেবিলের ওপর রাখা কয়েকটি লেবেল লাগানো স্টোরেজ বক্স (Storage Box) হিসেবে। একটি বক্সের গায়ে লিখলেন "$studentName" আর ভেতরে রাখলেন চিরকুট যাতে লেখা "সালমা"। আরেকটি বক্সের নাম দিলেন "$totalScore" আর ভেতরে রাখলেন নম্বর "৯২"। যখনই আপনি "$studentName" বলবেন, পিএইচপি ইঞ্জিন দ্রুত সেই বক্সে হাত দিয়ে ভেতরের মানটি বের করে এনে আপনাকে দেবে। বক্সের ভেতরের মান আপনি চাইলেই মুছে নতুন মান রাখতে পারেন, তাই এর নাম "Variable" (পরিবর্তনশীল)।',
    beginnerSteps: [
      {
        step: 1,
        title: '$ চিহ্ন ও নামকরণের নিয়ম',
        explanationBn: 'PHP-তে প্রতিটি ভেরিয়েবল ডলার ($) চিহ্ন দিয়ে শুরু হয়। নামের প্রথম অক্ষর অবশ্যই কোনো বর্ণ (letter) বা আন্ডারস্কোর (_) হতে হবে; কোনো সংখ্যা দিয়ে শুরু করা যাবে না।',
        codePiece: '$validName = "OK"; // সঠিক\n// $1invalid = "Error"; // ভুল!'
      },
      {
        step: 2,
        title: 'কেস-সেন্সিটিভিটি (Case Sensitivity)',
        explanationBn: 'ভেরিয়েবল নাম কেস-সেন্সিটিভ। অর্থাৎ $color এবং $Color দুটি সম্পূর্ণ আলাদা মেমরি লোকেশন নির্দেশ করে।'
      },
      {
        step: 3,
        title: 'ভেরিয়েবলের স্কোপ (Scope)',
        explanationBn: 'ফাংশনের ভেতরে ডিক্লেয়ার করা ভেরিয়েবল লোকাল (Local Scope), আর বাইরে ডিক্লেয়ার করা ভেরিয়েবল গ্লোবাল (Global Scope)। পিএইচপিতে ফাংশনের ভেতর সরাসরি বাইরের গ্লোবাল ভ্যারিয়েবল পাওয়া যায় না।'
      }
    ],
    trainerSecretsBn: [
      'সিনিয়রদের পরামর্শ: কখনই শর্টকাট এক-অক্ষরের নাম (যেমন $a, $b, $x) দেবেন না। কোড রিডাবিলিটিই একজন জুনিয়র আর সিনিয়র ডেভেলপারকে আলাদা করে। $userMonthlySubscriptionFee-এর মতো সেলফ-এক্সপ্ল্যানেটরি নাম দিন।',
      'PHP লুজলি টাইপড ভাষা হওয়ায় ভেরিয়েবলে যেকোনো সময় টাইপ বদলে ফেলা যায়, কিন্তু পিএইচপি ৮-এ আমরা strict_types=1 ব্যবহার করি যাতে টাইপিং বাগ তৈরি না হয়।',
      'গ্লোবাল ভেরিয়েবল ($GLOBALS বা global $var) ব্যবহার সম্পূর্ণ পরিহার করুন। এটি স্প্যাগেটি কোড তৈরি করে এবং বাগ ট্রেস করা অসম্ভব করে তোলে।'
    ],
    commonGotchasBn: [
      'ভুল নাম ব্যবহার: $user-name (হাইফেন পিএইচপিতে বিয়োগ অপারেটর হিসেবে কাজ করে!)। সর্বদা ক্যামেলকেস ($userName) বা স্নেককেস ($user_name) ব্যবহার করুন।',
      'মান অ্যাসাইন না করে আন-ইনিশিয়ালাইজড ভেরিয়েবল রিড করা (PHP Warning: Undefined variable)।',
      'ফাংশনের ভেতরে বাইরের ভ্যারিয়েবল সরাসরি এক্সেস করার চেষ্টা করা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'PHP-তে ভেরিয়েবল স্কোপ কয় প্রকার এবং static ভেরিয়েবল কীভাবে কাজ করে?',
        answerBn: 'প্রধানত ৩ প্রকার: Local, Global এবং Static। Static ভেরিয়েবল ফাংশনের ভেতরে ডিক্লেয়ার করা হলেও ফাংশনের এক্সিকিউশন শেষে মেমরি থেকে মুছে যায় না; পরবর্তী কলে তার পূর্ববর্তী মান ধরে রাখে।',
        seniorTipBn: 'কাউন্টার বা মেমোইজেশন প্যাটার্নে কীভাবে static $cache ভেরিয়েবল কাজে লাগানো যায় তার উদাহরণ দিন।'
      },
      {
        questionBn: 'PHP 8.2-এ ডাইনামিক প্রপার্টি ক্রিয়েশন বন্ধ করার কারণ কী?',
        answerBn: 'পূর্বে ক্লাসে টাইপো বা অনিচ্ছাকৃত ভ্যারিয়েবল লিখলে পিএইচপি স্বয়ংক্রিয়ভাবে তা তৈরি করত, যা গভীর রানটাইম বাগের সৃষ্টি করত। 8.2+ এ টাইপ সেফটি নিশ্চিত করতে এটি ডিস্যাবল করা হয়েছে।',
        seniorTipBn: 'এটি অবজেক্ট-ওরিয়েন্টেড ডিজাইনের ডিসিপ্লিন বজায় রাখতে অত্যন্ত গুরুত্বপূর্ণ।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: ই-কমার্স ইনভয়েস ক্যালকুলেটর ভেরিয়েবল',
      taskBn: 'তিনটি ভেরিয়েবল তৈরি করুন: পণ্যের দাম, ভ্যাট শতকরা হার (১৫%) এবং ডেলিভারি চার্জ। মোট প্রদেয় টাকা হিসাব করে একটি মানসম্মত চালানের আকারে প্রিন্ট করুন।',
      hintBn: '$total = $price + ($price * ($vatPercent / 100)) + $deliveryCharge;',
      starterCode: `<?php
// পণ্যের ইনভয়েস ভেরিয়েবল তৈরি করুন
$productName = "স্মার্টফোন";
$price = 15000;
$vatRate = 15;
$delivery = 120;

// ক্যালকুলেশন কোড এখানে লিখুন
?>`,
      solutionCode: `<?php
$productName = "স্মার্টফোন";
$price = 15000;
$vatRate = 15;
$delivery = 120;

$vatAmount = $price * ($vatRate / 100);
$totalPayable = $price + $vatAmount + $delivery;

echo "<h3>অনলাইন ইনভয়েস বিবরণী</h3>";
echo "পণ্য: <b>$productName</b><br>";
echo "মূল দাম: ৳" . number_format($price, 2) . "<br>";
echo "ভ্যাট ({$vatRate}%): ৳" . number_format($vatAmount, 2) . "<br>";
echo "ডেলিভারি চার্জ: ৳" . number_format($delivery, 2) . "<hr>";
echo "<b>সর্বমোট প্রদেয়: ৳" . number_format($totalPayable, 2) . "</b>";
?>`
    }
  },

  'php-loops': {
    trainerMetaphorBn:
      'লুপকে কল্পনা করুন একটি কারখানার রোবোটিক অ্যাসেম্বলি লাইনের মতো। ধরুন আপনার কাছে ১০০টি চকলেট বক্স আছে এবং প্রতিটিতে একটি করে এক্সপায়ারি ডেট স্ট্যাম্প মারতে হবে। যদি লুপ না থাকত, তবে আপনাকে ১০০ বার একই কোড কপি-পেস্ট করে লিখতে হতো! লুপ দিয়ে আপনি রোবটকে বলেন: "যতক্ষণ ট্রেতে চকলেট বক্স থাকবে, একটি করে তোলো, স্ট্যাম্প মারো, এবং পরেরটিতে যাও।" কাজ শেষ হলে সে নিজে থেকেই থেমে যাবে।',
    beginnerSteps: [
      {
        step: 1,
        title: 'লুপের ৩টি প্রধান শর্ত (Start, Condition, Step)',
        explanationBn: 'প্রতিটি লুপের ১. শুরুর মান (Initialization), ২. চলার শর্ত (Condition) এবং ৩. ধাপ পরিবর্তনের নিয়ম (Increment/Decrement) থাকতে হয়।'
      },
      {
        step: 2,
        title: 'কোন লুপ কখন ব্যবহার করবেন?',
        explanationBn: 'নির্দিষ্ট সংখ্যক বার ঘোরার জন্য "for" লুপ; শর্ত সাপেক্ষে পুনরাবৃত্তির জন্য "while" লুপ; আর অ্যারে বা ডাটাবেস রেকর্ডের ওপর কাজ করার জন্য চোখ বন্ধ করে "foreach" লুপ সবচেয়ে নিরাপদ।'
      },
      {
        step: 3,
        title: 'break ও continue এর সঠিক ব্যবহার',
        explanationBn: 'break লুপকে তাৎক্ষণিক বন্ধ করে দেয়, আর continue বর্তমান ইটারেশন বাদ দিয়ে পরবর্তী ইটারেশনে চলে যায়।'
      }
    ],
    trainerSecretsBn: [
      '২০ বছরের গোল্ডেন রুল: কখনোই লুপের শর্তের ভেতরে count($arr) বা sizeof($arr) কল করবেন না! প্রতিবার লুপ ঘোরার সময় পিএইচপি নতুন করে অ্যারে সাইজ গুনে, যা ১ লক্ষ ডাটার ক্ষেত্রে আপনার সার্ভারকে স্লো করে দেবে। সাইজ আগে ভ্যারিয়েবলে স্টোর করুন অথবা সরাসরি foreach ব্যবহার করুন।',
      'ইনফিনিট লুপ (Infinite Loop) মেমরি ক্র্যাশ ঘটায়। সর্বদা নিশ্চিত করুন যে লুপের টার্মিনেশন কন্ডিশন কোনো এক সময় false হবেই।'
    ],
    commonGotchasBn: [
      'লুপের ভেতরে ভ্যারিয়েবল ইনক্রিমেন্ট ($i++) লিখতে ভুলে যাওয়া, যার ফলে ব্রাউজার হ্যাং হয়ে যায়।',
      'অফ-বাই-ওয়ান এরর: $i <= count($arr) লেখার কারণে শেষ ইনডেক্সে "Undefined array key" এরর আসা।',
      'নেস্টেড লুপের ভেতরে একই ভ্যারিয়েবল নাম (যেমন উভয় লুপে $i) ব্যবহার করে ফেলা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'PHP-তে foreach লুপ কীভাবে অভ্যন্তরীণভাবে কাজ করে এবং এটি কেন for লুপের চেয়ে উত্তম?',
        answerBn: 'foreach সরাসরি ইন্টারনাল অ্যারে পয়েন্টার কপি করে আইটারেট করে। এতে ইনডেক্স মিসম্যাচ বা আউট-অব-বাউন্ড এরর হয় না এবং অ্যাসোসিয়েটিভ অ্যারে বা অবজেক্টে অনায়াসে কি-ভ্যালু পেয়ারে ডাটা রিড করা যায়।',
        seniorTipBn: 'অ্যারের আইটেম সরাসরি মডিফাই করতে চাইলে reference (&) ব্যবহারের কথা উল্লেখ করুন, যেমন foreach ($arr as &$item)।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: শিক্ষার্থীদের গ্রেড রিপোর্ট প্রসেসিং',
      taskBn: 'একটি অ্যাসোসিয়েটিভ অ্যারেতে ৫ জন শিক্ষার্থীর নাম ও নম্বর দেওয়া আছে। foreach লুপ ব্যবহার করে যারা ৮০ বা তার বেশি পেয়েছে তাদের "A+" এবং বাকিদের "Passed" হিসেবে একটি সুন্দর টেবিল আকারে দেখান।',
      hintBn: 'foreach ($students as $name => $marks) { if ($marks >= 80) ... }',
      starterCode: `<?php
$students = [
    "আরিফ" => 85,
    "নাজমুল" => 72,
    "সাদিয়া" => 91,
    "তানভীর" => 65,
    "রোকসানা" => 88
];

// আপনার লুপ লজিক লিখুন
?>`,
      solutionCode: `<?php
$students = [
    "আরিফ" => 85,
    "নাজমুল" => 72,
    "সাদিয়া" => 91,
    "তানভীর" => 65,
    "রোকসানা" => 88
];

echo "<table border='1' cellpadding='8' style='border-collapse:collapse; width:100%; font-family:sans-serif;'>";
echo "<tr style='background:#f1f5f9;'><th>নাম</th><th>প্রাপ্ত নম্বর</th><th>গ্রেড মূল্যায়ন</th></tr>";

foreach ($students as $name => $score) {
    $grade = $score >= 80 ? "<span style='color:green; font-weight:bold;'>A+ (চমৎকার)</span>" : "<span style='color:#0369a1;'>Passed</span>";
    echo "<tr><td>$name</td><td>$score</td><td>$grade</td></tr>";
}
echo "</table>";
?>`
    }
  },

  'php-functions': {
    trainerMetaphorBn:
      'ফাংশনকে কল্পনা করুন একটি আধুনিক জুসার বা কফি মেশিনের মতো। মেশিনের ভেতরে ফল বা কফি বিন দেন (এগুলো হলো Parameters / Arguments), মেশিনটি ভেতরে প্রসেসিং করে (Function Body), এবং সবশেষে একটি কাঁচের গ্লাসে তাজা জুস বা কফি ঢেলে দেয় (Return Value)। আপনাকে বারবার জুস বানানোর জন্য হাত দিয়ে ঘষাঘষি করতে হয় না, শুধু বোতাম চাপলেই (Function Call) তৈরি ফল পেয়ে যান। একই কাজ বারবার না করে কোড রিইউজ করার এটাই সেরা উপায়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'ফাংশন ডিক্লেয়ার ও কল করার নিয়ম',
        explanationBn: 'function কীওয়ার্ড দিয়ে নাম দিয়ে শুরু করতে হয়, প্রথম ব্র্যাকেটে প্যারামিটার দিতে হয় এবং সেকেন্ড ব্র্যাকেটে { লজিক } লিখতে হয়।'
      },
      {
        step: 2,
        title: 'রিটার্ন (return) বনাম সরাসরি প্রিন্ট (echo)',
        explanationBn: 'প্রফেশনাল ফাংশন কখনো সরাসরি echo করে না; সে ফলাফল return করে। ফলে সেই ফলাফল আপনি ডাটাবেসে সেভ করতে পারেন, ইমেইল করতে পারেন বা স্ক্রিনে দেখাতে পারেন।'
      },
      {
        step: 3,
        title: 'PHP 8 টাইপ হিন্টিং ও রিটার্ন টাইপ',
        explanationBn: 'ফাংশনের প্যারামিটারে টাইপ (int, float, string) এবং কোলন দিয়ে রিটার্ন টাইপ (: float) লিখে দিলে বাগ ৯০% কমে যায়।'
      }
    ],
    trainerSecretsBn: [
      'Single Responsibility Principle (SRP): একটি ফাংশন কেবল একটি নির্দিষ্ট কাজই করবে। একটি ফাংশন দিয়ে ব্যবহারকারী রেজিস্টার করা, পাসওয়ার্ড হ্যাশ করা, মেইল পাঠানো এবং ডাটাবেস সেভ করা—সব একসাথে করা চরম ব্যাড প্র্যাকটিস।',
      'PHP 8 Named Arguments ব্যবহার করুন। যেমন calculateTax(amount: 5000, rate: 15) লিখলে আর্গুমেন্টের ক্রম মনে রাখার কোনো ঝামেলা থাকে না।'
    ],
    commonGotchasBn: [
      'রিটার্ন টাইপ উল্লেখ করার পরেও ফাংশন থেকে কিছু রিটার্ন না করা (TypeError)।',
      'ফাংশনের ভেতরে গ্লোবাল স্টেট পরিবর্তন করা (Side Effects)।',
      '১০-১২টি প্যারামিটার পাস করা। ৩টির বেশি প্যারামিটার লাগলে একটি DTO বা ক্লাস ব্যবহার করুন।'
    ],
    interviewQuestions: [
      {
        questionBn: 'PHP-তে Pass by Value এবং Pass by Reference (&) এর মধ্যে পার্থক্য কী?',
        answerBn: 'Pass by Value তে ভ্যারিয়েবলের একটি কপি পাঠানো হয়, ফলে ফাংশনের ভেতরের পরিবর্তনে মূল ভ্যারিয়েবল প্রভাবিত হয় না। Pass by Reference (&) এ মেমোরি এড্রেস পাঠানো হয়, ফলে ফাংশনে পরিবর্তন করলে মূল ভ্যারিয়েবলও পরিবর্তিত হয়।',
        seniorTipBn: 'আধুনিক পিএইচপিতে রেফারেন্স ব্যবহারের প্রয়োজনীয়তা অনেক কমে গেছে কারণ অবজেক্ট স্বয়ংক্রিয়ভাবে রেফারেন্স-লাইক আচরণ করে।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: বিকাশ ও ক্যাশ-আউট ফি ক্যালকুলেটর ফাংশন',
      taskBn: 'একটি টাইপ-হিন্টেড ফাংশন লিখুন calculateCashoutFee(float $amount, float $rate = 1.75): float যা ক্যাশআউট চার্জ হিসাব করে ফেরত দেবে।',
      hintBn: 'ফাংশনটি float রিটার্ন করবে এবং ডিফল্ট রেট ১.৭৫% থাকবে।',
      starterCode: `<?php
// এখানে আপনার ফাংশনটি ডিফাইন করুন

// টেস্ট কল
$fee = calculateCashoutFee(5000.0);
echo "৫,০০০ টাকা ক্যাশ-আউটে ফি: ৳" . $fee;
?>`,
      solutionCode: `<?php
declare(strict_types=1);

function calculateCashoutFee(float $amount, float $rate = 1.75): float {
    if ($amount <= 0) {
        return 0.0;
    }
    return round(($amount * $rate) / 100, 2);
}

$withdraw = 5000.0;
$fee = calculateCashoutFee($withdraw);
$totalDeduction = $withdraw + $fee;

echo "<h3>বিকাশ ক্যাশআউট স্টেটমেন্ট:</h3>";
echo "উত্তোলনের পরিমাণ: ৳" . number_format($withdraw, 2) . "<br>";
echo "ক্যাশআউট চার্জ (১.৭৫%): ৳" . number_format($fee, 2) . "<br>";
echo "অ্যাকাউন্ট থেকে সর্বমোট কর্তন: <b>৳" . number_format($totalDeduction, 2) . "</b>";
?>`
    }
  },

  'php-oop-classes': {
    trainerMetaphorBn:
      'ক্লাস ও অবজেক্টকে কল্পনা করুন একটি ইঞ্জিনিয়ারিং ব্লুপ্রিন্ট (Architectural Blueprint) এবং সেই ব্লুপ্রিন্ট থেকে তৈরি বাস্তব বাড়ির মতো। "বাড়ি তৈরির নকশা" কিন্তু নিজে কোনো বাড়ি নয়; নকশায় কেবল বলা থাকে কয়টি ঘর থাকবে, জানালা কোথায় হবে। এটিই হলো Class। আর সেই নকশা দেখে ইঞ্জিনিয়ার যখন ইট-সিমেন্ট দিয়ে ৩টি আলাদা বাড়ি তৈরি করেন (যেমন: বাড়ি-১, বাড়ি-২, বাড়ি-৩), তখন প্রতিটি বাস্তব বাড়িই হলো একেকটি Object। প্রতি বাড়ির রঙ বা মালিকের নাম আলাদা হতে পারে, কিন্তু কাঠামোগত নিয়ম একই থাকে।',
    beginnerSteps: [
      {
        step: 1,
        title: 'Class ডিক্লেয়ার ও প্রপার্টি',
        explanationBn: 'class কীওয়ার্ড দিয়ে ক্লাসের নাম ক্যাপিটাল অক্ষরে (PascalCase) শুরু করতে হয়। ক্লাসের ভেতরের ভ্যারিয়েবলকে বলা হয় Property।'
      },
      {
        step: 2,
        title: 'Method ও $this সিউডো-ভ্যারিয়েবল',
        explanationBn: 'ক্লাসের ভেতরের ফাংশনকে Method বলা হয়। অবজেক্টের নিজস্ব প্রপার্টি এক্সেস করতে $this->propertyName ব্যবহার করা হয়।'
      },
      {
        step: 3,
        title: 'অবজেক্ট ইনস্ট্যানশিয়েট (new)',
        explanationBn: '$car = new Car(); দিয়ে মেমরিতে ক্লাসের একটি জীবন্ত ইনস্ট্যান্স তৈরি করা হয়।'
      }
    ],
    trainerSecretsBn: [
      'PHP 8 Constructor Property Promotion ব্যবহার করুন। এতে কনস্ট্রাক্টরের ব্র্যাকেটের ভেতরেই প্রপার্টি ডিক্লেয়ার ও ইনিশিয়ালাইজ একসাথে হয়ে যায়, ৫ লাইনের বয়লারপ্লেট কোড ১ লাইনে নেমে আসে!',
      'সর্বদা Encapsulation মেনে চলুন। প্রপার্টি কখনোই public রাখবেন না; এগুলোকে private বা protected রাখুন এবং Getter/Setter মেথড দিয়ে নিয়ন্ত্রিত এক্সেস দিন।'
    ],
    commonGotchasBn: [
      '$this ব্যবহারের সময় ডলার সাইন ডাবল দেওয়া (যেমন: $this->$name লেখা ভুল; সঠিক হলো $this->name)।',
      'প্রপার্টি টাইপ ডিক্লেয়ার না করা, যার ফলে রানটাইমে স্ট্রিংয়ের জায়গায় অ্যারে ঢুকে ক্র্যাশ করে।'
    ],
    interviewQuestions: [
      {
        questionBn: 'OOP এর ৪টি মূল স্তম্ভ কী কী এবং পিএইচপিতে এগুলো কীভাবে বাস্তবায়িত হয়?',
        answerBn: '১. Encapsulation (ডাটা প্রাইভেট রাখা), ২. Abstraction (জটিলতা লুকিয়ে সহজ ইন্টারফেস দেওয়া), ৩. Inheritance (extends দিয়ে কোড রিইউজ), ৪. Polymorphism (ইন্টারফেস বা মেথড ওভাররাইড)।',
        seniorTipBn: 'প্রতিটি স্তম্ভের একটি করে বাস্তবমুখী পিএইচপি উদাহরণ এক লাইনে দিতে পারা ভালো ইম্প্রেশন তৈরি করে।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: ব্যাংক একাউন্ট ক্লাস তৈরি',
      taskBn: 'একটি BankAccount ক্লাস তৈরি করুন যার private $balance থাকবে। deposit($amount) এবং getBalance() মেথড যোগ করে টাকা জমা ও ব্যালেন্স চেক টেস্ট করুন।',
      hintBn: 'private float $balance প্রপার্টি ব্যবহার করুন এবং নেগেটিভ টাকা ডিপোজিট প্রতিরোধ করুন।',
      starterCode: `<?php
class BankAccount {
    // এখানে প্রপার্টি ও মেথড লিখুন
}

$myAcc = new BankAccount();
// টেস্ট করুন
?>`,
      solutionCode: `<?php
declare(strict_types=1);

class BankAccount {
    public function __construct(
        public readonly string $accountHolder,
        private float $balance = 0.0
    ) {}

    public function deposit(float $amount): bool {
        if ($amount <= 0) {
            echo "ত্রুটি: জমার পরিমাণ অবশ্যই শূন্যের চেয়ে বেশি হতে হবে!<br>";
            return false;
        }
        $this->balance += $amount;
        echo "৳" . number_format($amount, 2) . " সফলভাবে জমা হয়েছে।<br>";
        return true;
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$account = new BankAccount(accountHolder: "হাসান মাহমুদ", balance: 1000.0);
echo "গ্রাহকের নাম: " . $account->accountHolder . "<br>";
$account->deposit(2500.0);
echo "বর্তমান মোট স্থিতি: <b>৳" . number_format($account->getBalance(), 2) . "</b>";
?>`
    }
  },

  'php-mysql-prepared': {
    trainerMetaphorBn:
      'PDO Prepared Statements-কে কল্পনা করুন একটি এয়ারপোর্টের অত্যন্ত কড়া হাই-সিকিউরিটি স্ক্যানিং গেটের মতো। জুনিয়রদের সাধারণ কোয়েরি হলো এমন যে কেউ ব্যাগের ভেতর সরাসরি বোমা (SQL Injection কোড) নিয়ে বিমানে উঠে পড়তে পারে। আর Prepared Statement হলো: বিমান কর্তৃপক্ষ আগেই নির্দিষ্ট আকারের প্লাস্টিকের বাক্স ঠিক করে রেখেছে (Template)। আপনি যাই দিন না কেন, পিএইচপি ইঞ্জিন তাকে শুধুমাত্র নিরীহ টেক্সট ডাটা হিসেবেই বিবেচনা করবে, কোনো অবস্থাতেই তাকে এক্সিকিউটেবল কমান্ড হিসেবে চালাবে না। ফলে এসকিউএল ইনজেকশন অসম্ভব হয়ে যায়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'কখনোই কুয়েরির ভেতর ভ্যারিয়েবল সরাসরি জুড়বেন না',
        explanationBn: 'WHERE email = \'$email\' এভাবে স্ট্রিং কনক্যাটেনেশন করাই এসকিউএল ইনজেকশনের মূল উৎস।'
      },
      {
        step: 2,
        title: 'প্লেসহোল্ডার (:name অথবা ?) ব্যবহার করুন',
        explanationBn: 'ডাটাবেস ইঞ্জিনের কাছে খালি টেমপ্লেট পাঠাতে হয় যাতে ডাটাবেস কুয়েরি প্ল্যান আগে থেকেই কম্পাইল করে রাখে।'
      },
      {
        step: 3,
        title: 'execute([$params]) দিয়ে সুরক্ষিত ডাটা পাস করুন',
        explanationBn: 'ডাটা আলাদাভাবে পাঠানো হয়, ফলে ড্রপ টেবিল বা মেলিশিয়াস কোড থাকলে তা কোয়েরির স্ট্রাকচার ভাঙতে পারে না।'
      }
    ],
    trainerSecretsBn: [
      '২০ বছর ধরে যত হ্যাকড ওয়েবসাইট ঠিক করেছি, তার ৮০% ছিল কাঁচা SQL কুয়েরিতে কনক্যাটেনেশনের কারণে। প্রোডাকশন কোডে কখনোই কাঁচা কুয়েরি লিখবেন না।',
      'PDO-তে সর্বদা PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION এবং PDO::ATTR_EMULATE_PREPARES => false কনফিগার করুন।'
    ],
    commonGotchasBn: [
      'LIKE কুয়েরিতে ওয়াইল্ডকার্ড ভুলভাবে প্লেসহোল্ডারের ভেতর ঢুকিয়ে দেওয়া। সঠিক উপায় হলো $param = "%" . $searchTerm . "%" তৈরি করে পাঠানো।',
      'Prepared statement ব্যবহার করেও টেবিল নেম বা কলাম নেম ডাইনামিকালি ভ্যারিয়েবল থেকে বসানো। কলাম নেম কখনো বাইন্ড করা যায় না, এজন্য হোয়াইটলিস্ট ভ্যালিডেশন লাগে।'
    ],
    interviewQuestions: [
      {
        questionBn: 'SQL Injection কী এবং Prepared Statements কীভাবে এটি ১০০% প্রতিহত করে?',
        answerBn: 'SQL Injection হলো ইউজারের ইনপুটের মাধ্যমে ডাটাবেস কোয়েরির মূল সিনট্যাক্স ম্যানিপুলেট করা। Prepared Statement-এ কোয়েরির সিনট্যাক্স আগে কম্পাইল হয় এবং ইউজারের ইনপুট আলাদা প্যারামিটার হিসেবে ট্রান্সমিট হয়, ফলে ইনপুটকে কোনোভাবেই এক্সিকিউটেবল কমান্ড হিসেবে গণ্য করা হয় না।',
        seniorTipBn: 'ভাইভায় বলবেন: "Data and Code are strictly separated at the database protocol level."'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: সুরক্ষিত লগইন প্রমাণীকরণ লজিক',
      taskBn: 'একটি সুরক্ষিত ইউজার অথেনটিকেশন ফাংশন ডিজাইন করুন যা PDO Prepared Statement ও password_verify() এর নিয়ম প্রদর্শন করবে।',
      hintBn: 'SELECT password_hash FROM users WHERE email = :email কুয়েরি তৈরি করুন।',
      starterCode: `<?php
// সুরক্ষিত কুয়েরি ড্রাফট করুন
?>`,
      solutionCode: `<?php
// পিএইচপি সুরক্ষিত লগইন আর্কিটেকচার
function authenticateUserSimulated(string $inputEmail, string $inputPassword): string {
    // সিমুলেটেড ডাটাবেস রেকর্ড
    $userRecord = [
        'id' => 101,
        'email' => 'student@techacademy.edu',
        'password_hash' => password_hash('SecretPass@123', PASSWORD_BCRYPT)
    ];

    // স্টেপ ১: প্লেসহোল্ডার সহ কুয়েরি প্ল্যান
    $sql = "SELECT id, email, password_hash FROM users WHERE email = :email LIMIT 1";
    echo "<b>১. কম্পাইল্ড কুয়েরি স্ট্রাকচার:</b> <code>$sql</code><br>";

    // স্টেপ ২: ইনপুট যাচাই
    if ($inputEmail === $userRecord['email'] && password_verify($inputPassword, $userRecord['password_hash'])) {
        return "<span style='color:green;'>লগইন সফল! নিরাপদ সেশন তৈরি করা হয়েছে।</span>";
    }

    return "<span style='color:red;'>ইমেইল বা পাসওয়ার্ড সঠিক নয়!</span>";
}

echo authenticateUserSimulated('student@techacademy.edu', 'SecretPass@123');
?>`
    }
  },

  'php-form-handling': {
    trainerMetaphorBn:
      'HTTP Form Handling-কে কল্পনা করুন একটি সরকারি ডাকঘরের (Post Office) সাথে। GET মেথড হলো একটি উন্মুক্ত পোস্টকার্ড—রাস্তার যেকোনো মানুষ (বা ব্রাউজার হিস্ট্রি ও প্রক্সি সার্ভার) পোস্টকার্ডে লেখা গোপন তথ্য পড়ে ফেলতে পারে। আর POST মেথড হলো সিলগালা করা একটি সুরক্ষিত খাম (Envelope)—যার ভেতরের তথ্য বাইরে থেকে দেখা যায় না এবং শুধুমাত্র নির্দিষ্ট প্রাপক (সার্ভার) খাম খুলে দেখতে পায়। সংবেদনশীল তথ্য পাঠাতে সর্বদা সিলগালা খাম (POST) ব্যবহার করতে হয়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'HTML Form মেথড নির্ধারণ (GET vs POST)',
        explanationBn: 'সার্চ বা পেজিংয়ের জন্য method="GET" এবং পাসওয়ার্ড, ডাটাবেস পরিবর্তন বা ফাইল আপলোডের জন্য method="POST" ব্যবহার করুন।'
      },
      {
        step: 2,
        title: '$_SERVER["REQUEST_METHOD"] ভেরিফিকেশন',
        explanationBn: 'সরাসরি পেজ লোড ও ফর্ম সাবমিশনের পার্থক্য বুঝতে if ($_SERVER["REQUEST_METHOD"] === "POST") চেক করুন।'
      },
      {
        step: 3,
        title: '$_POST থেকে নিরাপদে ডেটা রিড ও স্যানিটাইজ করা',
        explanationBn: 'নাল কোলেসিং ($val = $_POST["field"] ?? "") এবং htmlspecialchars() দিয়ে ডেটা রিসিভ করুন।'
      }
    ],
    trainerSecretsBn: [
      '২০ বছরের অভিজ্ঞতা থেকে বলছি: কখনো $_REQUEST ব্যবহার করবেন না। এটি মেথড অস্পষ্ট রাখে এবং সিকিউরিটি দুর্বলতা বাড়ায়।',
      'প্রোডাকশন ফর্মে সর্বদা CSRF Token এবং HTTPS বাধ্যতামূলক করবেন যাতে ম্যান-ইন-দ্য-মিডল অ্যাটাক প্রতিহত হয়।'
    ],
    commonGotchasBn: [
      'মেথড চেক না করে সরাসরি $_POST["field"] এক্সেস করায় "Undefined array key" ওয়ার্নিং আসা।',
      'লগইন বা পাসওয়ার্ড চেঞ্জ ফর্মে ভুল করে method="GET" রেখে দেওয়া।'
    ],
    interviewQuestions: [
      {
        questionBn: 'GET এবং POST মেথডের মধ্যে প্রযুক্তিগত পার্থক্য কী?',
        answerBn: 'GET রিকোয়েস্টে ডেটা URL কুয়েরি স্ট্রিংয়ে পাস হয়, ব্রাউজার হিস্ট্রিতে জমা থাকে এবং ক্যারেক্টার সাইজ লিমিট (~২KB) থাকে। POST রিকোয়েস্টে ডেটা HTTP Request Body-তে থাকে, ব্রাউজার হিস্ট্রিতে দৃশ্যমান হয় না এবং বড় ডেটা বা ফাইল আপলোড করা যায়।',
        seniorTipBn: 'ইন্টারভিউতে যোগ করবেন: "GET requests must be idempotent (safe to repeat), whereas POST requests represent state-changing operations."'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: সুরক্ষিত রিকোয়েস্ট মেথড ডিটেক্টর',
      taskBn: 'একটি পিএইচপি স্ক্রিপ্ট লিখুন যা চেক করবে রিকোয়েস্টটি POST নাকি GET এবং সে অনুযায়ী উপযুক্ত মেসেজ প্রিন্ট করবে।',
      hintBn: '$_SERVER["REQUEST_METHOD"] ব্যবহার করুন।',
      starterCode: `<?php
// রিকোয়েস্ট মেথড চেক লজিক লিখুন
?>`,
      solutionCode: `<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user = htmlspecialchars($_POST["username"] ?? "Guest", ENT_QUOTES, "UTF-8");
    echo "POST রিকোয়েস্টে প্রাপ্ত ইউজার: <b>$user</b>";
} else {
    echo "ব্রাউজারে সরাসরি GET মেথডে পেজ লোড হয়েছে।";
}
?>`
    }
  },

  'php-form-validation': {
    trainerMetaphorBn:
      'Form Validation-কে কল্পনা করুন একটি আন্তর্জাতিক বিমানবন্দরের ইমিগ্রেশন ও মেটাল ডিটেক্টরের মতো। আপনি বাইরে থেকে যতই ভালো কাপড় পরে আসুন না কেন (Client-side HTML5 validation), ইমিগ্রেশন অফিসার (PHP Server-side Validation) প্রতিটি পাসপোর্ট ও ব্যাগ স্ক্যান করবেই। কোনো হ্যাকার যদি ব্রাউজারের মেটাল ডিটেক্টর বাইপাস করে অবৈধ অস্ত্র (<script> XSS পেলোড) নিয়ে ঢুকে পড়তে চায়, তবে সার্ভার-সাইড স্যানিটাইজার তাকে ধরে ফেলে নিষ্ক্রিয় (HTML Entity) করে দেয়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'ইউজার ইনপুটের অতিরিক্ত স্পেস মুছতে trim() ব্যবহার করুন',
        explanationBn: 'ইনপুটের শুরুতে ও শেষে অসাবধানতাবশত দেওয়া স্পেস বা ট্যাব দূর করে।'
      },
      {
        step: 2,
        title: 'অপ্রয়োজনীয় ব্যাকস্ল্যাশ মুছতে stripslashes() ব্যবহার করুন',
        explanationBn: 'এস্কেপড ক্যারেক্টারগুলো স্বাভাবিক ফর্মে রূপান্তর করে।'
      },
      {
        step: 3,
        title: 'XSS প্রতিরোধে htmlspecialchars() এনফোর্স করুন',
        explanationBn: '<script> বা HTML ট্যাগকে &lt;script&gt; তে রূপান্তর করে ব্রাউজার স্ক্রিপ্ট এক্সিকিউশন বন্ধ করে।'
      }
    ],
    trainerSecretsBn: [
      'সুবর্ণ নিয়ম: Never Trust User Input! ক্লায়েন্ট-সাইড ভ্যালিডেশন কেবল ইউজার সুবিধার জন্য, নিরাপত্তার জন্য সার্ভার-সাইড ভ্যালিডেশনই একমাত্র ভরসা।',
      'ডাটাবেসে সেভ করার সময় কাঁচা htmlspecialchars ডাটা সেভ না করে স্ট্রিং ক্লিন করে সেভ করুন এবং ভিউতে রেন্ডার করার সময় htmlspecialchars() দিয়ে এস্কেপ করুন।'
    ],
    commonGotchasBn: [
      '$_SERVER["PHP_SELF"] ফর্মে ব্যবহারের সময় htmlspecialchars() না দেওয়ায় XSS এর সুযোগ তৈরি হওয়া।',
      'HTML5 required এট্রিবিউট দিয়েই সিকিউরিটি নিশ্চিত হয়েছে মনে করে সার্ভার-সাইড চেক বাদ দেওয়া।'
    ],
    interviewQuestions: [
      {
        questionBn: 'XSS (Cross-Site Scripting) কী এবং PHP-তে এটি কীভাবে ঠেকানো যায়?',
        answerBn: 'XSS হলো এমন এক ধরনের সাইবার আক্রমণ যেখানে আক্রমণকারী ফর্মে ক্ষতিকর জাভাস্ক্রিপ্ট কোড সাবমিট করে অন্য ব্যবহারকারীর সেশন কুকি চুরি বা ব্রাউজার ম্যানিপুলেট করে। পিএইচপিতে আউটপুট রেন্ডার করার সময় htmlspecialchars($data, ENT_QUOTES, "UTF-8") ব্যবহার করে এটি পুরোপুরি ঠেকানো যায়।',
        seniorTipBn: 'ইন্টারভিউতে বলবেন: "Context-aware output encoding is the primary defense against XSS."'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: ইনপুট স্যানিটাইজার ফাংশন টেস্ট',
      taskBn: 'একটি test_input() ফাংশন তৈরি করুন যা trim(), stripslashes() ও htmlspecialchars() প্রয়োগ করে একটি ক্ষতিকর স্ক্রিপ্ট ট্যাগকে সেফ টেক্সটে রূপান্তর করবে।',
      hintBn: 'ENT_QUOTES ও "UTF-8" ফ্ল্যাগ ব্যবহার করুন।',
      starterCode: `<?php
// স্যানিটাইজার ফাংশন লিখুন
?>`,
      solutionCode: `<?php
function test_input(string $data): string {
    return htmlspecialchars(stripslashes(trim($data)), ENT_QUOTES, 'UTF-8');
}

$raw = "  <script>alert('hack');</script>  ";
echo "নিরাপদ টেক্সট: " . test_input($raw);
?>`
    }
  },

  'php-form-required': {
    trainerMetaphorBn:
      'Required Field Validation-কে কল্পনা করুন একটি ব্যাংক চেক বই লেখার সাথে। আপনি যদি টাকার অংক বা স্বাক্ষরের জায়গা ফাঁকা রেখে জমা দেন, তবে ব্যাংক ক্যাশিয়ার চেকটি গ্রহণ না করে লাল কালির দাগ দিয়ে আপনাকে ফেরত দেবে। একইভাবে পিএইচপিতে আবশ্যক তথ্য ছাড়া সাবমিট করা ডেটা ডাটাবেসে সেভ না করে ফর্মে কোন কোন ফিল্ডে ভুল হয়েছে তা লাল রঙে স্পষ্ট হাইলাইট করে ইউজারকে সতর্ক করতে হয়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'empty(trim($val)) দিয়ে ফাঁকা ইনপুট ডিটেক্ট করুন',
        explanationBn: 'শুধু স্পেস চাপলেও যেন ইনপুটটি ফাঁকা হিসেবে ধরা পড়ে তা নিশ্চিত করুন।'
      },
      {
        step: 2,
        title: 'সেন্ট্রালাইজড এরর অ্যারে ($errors) ম্যানেজ করুন',
        explanationBn: 'প্রতিটি ফিল্ডের এরর মেসেজ সুনির্দিষ্ট কি-তে সংরক্ষণ করুন ($errors["email"])।'
      },
      {
        step: 3,
        title: 'Form Repopulation নিশ্চিত করুন',
        explanationBn: 'ভুল হলে ইউজার যেন তার টাইপ করা আগের সঠিক ফিল্ডগুলো আবার টাইপ করতে বাধ্য না হয়।'
      }
    ],
    trainerSecretsBn: [
      'কখনোই empty($field) এর ওপর অন্ধভাবে ভরসা করবেন না যদি ইনপুট সংখ্যা "0" হতে পারে, কারণ empty("0") পিএইচপিতে ট্রু রিটার্ন করে! স্ট্রিং ফিল্ডে trim($val) === "" চেক করা বেশি নিরাপদ।',
      'প্রোডাকশন ফর্মে ক্লায়েন্ট যেন একাধিকবার দ্রুত সাবমিট করে সার্ভার জ্যাম করতে না পারে সেজন্য সাবমিট বাটনে লোডিং স্টেট দিন।'
    ],
    commonGotchasBn: [
      'ইনপুটে কেবল স্পেস ("   ") থাকলে empty() বাইপাস হয়ে যাওয়া (trim না করার কারণে)।',
      'ভ্যালিডেশন ফেইল হলে ইউজারের ইতিপূর্বে পূরণকৃত ফর্ম ফাঁকা করে ফেলা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'PHP-তে isset() এবং empty() এর মধ্যে সূক্ষ্ম পার্থক্য কী?',
        answerBn: 'isset() কেবল চেক করে ভ্যারিয়েবলটি ডিক্লেয়ার করা হয়েছে কিনা এবং এর মান null নয় কিনা। আর empty() চেক করে ভ্যারিয়েবলটি আনসেট অথবা ফলসি মান (যেমন: "", 0, "0", null, false, []) ধারণ করে কিনা।',
        seniorTipBn: 'ইন্টারভিউতে উল্লেখ করবেন: "empty() treats string \'0\' as empty, which can be an edge-case bug for numeric quantity inputs."'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: মাল্টি-ফিল্ড রিকোয়ার্ড ভ্যালিডেটর',
      taskBn: 'একটি সিমুলেটেড ফর্মের নাম ও ইমেইল ফাঁকা কিনা পরীক্ষা করে একটি এরর অ্যারে তৈরি করুন এবং স্ট্যাটাস প্রিন্ট করুন।',
      hintBn: 'empty(trim($val)) দিয়ে চেক করুন।',
      starterCode: `<?php
// রিকোয়ার্ড ফিল্ড লজিক লিখুন
?>`,
      solutionCode: `<?php
$postData = ['name' => '', 'email' => 'student@gmail.com'];
$errors = [];

if (empty(trim($postData['name'] ?? ''))) {
    $errors['name'] = 'নাম প্রদান করা বাধ্যতামূলক!';
}
if (empty(trim($postData['email'] ?? ''))) {
    $errors['email'] = 'ইমেইল প্রদান করা বাধ্যতামূলক!';
}

if (!empty($errors)) {
    echo "<span style='color:red;'>ফর্মটিতে " . count($errors) . "টি ভুল পাওয়া গেছে!</span>";
} else {
    echo "<span style='color:green;'>সব রিকোয়ার্ড ফিল্ড সঠিক আছে।</span>";
}
?>`
    }
  },

  'php-form-url-email': {
    trainerMetaphorBn:
      'Email ও URL Validation-কে কল্পনা করুন একটি আন্তর্জাতিক পার্সেল ডেলিভারি ঠিকানার পোস্টাল কোড চেকারের সাথে। কোনো ঠিকানায় যদি @ সাইন না থাকে বা ডোমেইন এক্সটেনশন মিসিং থাকে, তবে ডাক বিভাগের সিস্টেম পার্সেলটি গ্রহণ করে না। PHP-র filter_var() এবং RegEx হলো সেই স্বয়ংক্রিয় রোবট যা প্রতিটি অক্ষর ও ফরম্যাট যাচাই করে আন্তর্জাতিক স্ট্যান্ডার্ড নিশ্চিত করে।',
    beginnerSteps: [
      {
        step: 1,
        title: 'filter_var($email, FILTER_VALIDATE_EMAIL)',
        explanationBn: 'RFC কমপ্লায়েন্ট ইমেইল ফরম্যাট যাচাই করে।'
      },
      {
        step: 2,
        title: 'filter_var($url, FILTER_VALIDATE_URL)',
        explanationBn: 'বৈধ প্রোটোকল ও ওয়েব ইউআরএল লিঙ্ক নিশ্চিত করে।'
      },
      {
        step: 3,
        title: 'preg_match() দিয়ে নামের বর্ণমালা রেজেক্স প্যাটার্ন',
        explanationBn: '/^[a-zA-Z-\' ]*$/ দিয়ে নামে শুধুমাত্র বর্ণমালা, স্পেস ও হাইফেন অনুমোদন করুন।'
      }
    ],
    trainerSecretsBn: [
      'FILTER_VALIDATE_URL ডিফল্টভাবে javascript://alert(1) বা file:///etc/passwd কেও ইউআরএল হিসেবে বৈধ গণ্য করতে পারে। তাই প্রোডাকশনে সর্বদা preg_match("/^https?:\\/\\//i", $url) দিয়ে HTTP/HTTPS নিশ্চিত করবেন।',
      'প্রোডাকশন ইমেইল ভ্যালিডেশনে সিনট্যাক্স চেকের পর ডোমেইনের DNS MX রেকর্ড (checkdnsrr($domain, "MX")) যাচাই করা একটি উচ্চমানের কৌশল।'
    ],
    commonGotchasBn: [
      'দুর্বল রেজেক্স লিখে আন্তর্জাতিক বা হাইফেনেটেড নাম (যেমন Mary-Jane O\'Connor) রিজেক্ট করে ফেলা।',
      'ইমেইল ফিল্টার করার আগে trim() না করে হোয়াইটস্পেসের কারণে ভ্যালিডেশন ফেইল করানো।'
    ],
    interviewQuestions: [
      {
        questionBn: 'PHP-তে filter_var() ব্যবহারের সুবিধা কী?',
        answerBn: 'filter_var() হলো পিএইচপির অত্যন্ত দ্রুতগতিসম্পন্ন সি-লেভেল বিল্ট-ইন ফিল্টারিং এপিআই। এটি জটিল রেগুলার এক্সপ্রেশন না লিখেও ইমেইল, আইপি অ্যাড্রেস, ইউআরএল, ইন্টিজার এবং বুলিয়ান ডেটা অত্যন্ত নির্ভুলভাবে ভ্যালিডেট ও স্যানিটাইজ করে।',
        seniorTipBn: 'ইন্টারভিউতে FILTER_SANITIZE_* এবং FILTER_VALIDATE_* এর পার্থক্য স্পষ্ট করে বুঝিয়ে বলবেন।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: ইমেইল ও ইউআরএল ভ্যালিডেশন গেটওয়ে',
      taskBn: 'একটি ইমেইল ও একটি ওয়েবসাইট ইউআরএল ভ্যালিড কিনা তা filter_var দিয়ে পরীক্ষা করে ফলাফল টেবিল আকারে দেখান।',
      hintBn: 'FILTER_VALIDATE_EMAIL ও FILTER_VALIDATE_URL ব্যবহার করুন।',
      starterCode: `<?php
// ভ্যালিডেশন টেস্ট কোড লিখুন
?>`,
      solutionCode: `<?php
$email = "test.dev@company.com";
$website = "https://myportfolio.io";

$emailValid = filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
$urlValid = filter_var($website, FILTER_VALIDATE_URL) !== false;

echo "ইমেইল ভ্যালিডিটি: " . ($emailValid ? "<b style='color:green;'>Valid</b>" : "<b style='color:red;'>Invalid</b>") . "<br>";
echo "URL ভ্যালিডিটি: " . ($urlValid ? "<b style='color:green;'>Valid</b>" : "<b style='color:red;'>Invalid</b>");
?>`
    }
  },

  'php-form-complete': {
    trainerMetaphorBn:
      'Complete Form Architecture-কে কল্পনা করুন একটি রকেট উৎক্ষেপণের ফাইনাল কাউন্টডাউন চেকলিস্টের মতো। জ্বালানি ট্যাঙ্ক (Text Input), নেভিগেশন সুইচ (Radio/Dropdown), সিস্টেম সেন্সর (Checkboxes), সুরক্ষা শিল্ড (CSRF & Sanitization) এবং গ্রাউন্ড কন্ট্রোল ডিরেকশন (PRG Redirect)—সবগুলো টেস্ট ১০০% সফল (Green) হলেই কেবল রকেট মহাকাশে উড়াল দেয় (ডাটাবেসে সেভ হয়)। কোনো একটিতে সমস্যা থাকলে কাউন্টডাউন পজ করে ইঞ্জিনিয়ারকে সুনির্দিষ্ট ত্রুটি জানানো হয়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'মাল্টিপল ইনপুট টাইপ ম্যানেজমেন্ট',
        explanationBn: 'Text, Email, URL, Radio Button, Select Dropdown, Checkbox Array ও Textarea হ্যান্ডেল করুন।'
      },
      {
        step: 2,
        title: 'Post-Back State Preservation (Repopulation)',
        explanationBn: 'ইনপুটে value="", রেডিওতে checked এবং সিলেক্ট অপশনে selected ডায়নামিকালি সেট করুন।'
      },
      {
        step: 3,
        title: 'Post-Redirect-Get (PRG) প্যাটার্ন বাস্তবায়ন',
        explanationBn: 'সফল সাবমিশনের পর header("Location: success.php"); দিয়ে ব্রাউজার রিফ্রেশ ডুপ্লিকেট সাবমিশন রোধ করুন।'
      }
    ],
    trainerSecretsBn: [
      '২০ বছরের সিনিয়র আর্কিটেক্ট নীতি: ফর্ম সাবমিশনের পর কখনোই সরাসরি একই রিকোয়েস্টে Success HTML রেন্ডার করবেন না। সবসময় PRG (Post-Redirect-Get) প্যাটার্ন ব্যবহার করবেন Flash Session মেসেজ সহ।',
      'বট বা স্প্যাম সাবমিশন রোধ করতে একটি অদৃশ্য HoneyPot ইনপুট ফিল্ড (style="display:none") রাখুন; বটরা এটি পূরণ করলেই রিকোয়েস্ট সাইলেন্টলি ড্রপ করে দিন।'
    ],
    commonGotchasBn: [
      'ফর্ম সাবমিট হওয়ার পর ব্রাউজারে F5 চাপলে ডাটাবেসে একই রেকর্ড ডাবল ইনসার্ট হওয়া (PRG প্যাটার্ন না মানায়)।',
      'মাল্টিপল চেকবক্সের নামের শেষে ব্র্যাকেট না দেওয়া (name="skills" এর বদলে name="skills[]" দিতে হবে)।'
    ],
    interviewQuestions: [
      {
        questionBn: 'Post-Redirect-Get (PRG) প্যাটার্ন কী এবং কেন এটি ফর্ম হ্যান্ডলিংয়ে অপরিহার্য?',
        answerBn: 'PRG হলো একটি ওয়েব ডেভেলপমেন্ট ডিজাইন প্যাটার্ন। ইউজার যখন POST ফর্মে ডাটা পাঠায় এবং সার্ভারে তা সফলভাবে প্রসেস হয়, তখন সার্ভার সরাসরি HTML রেন্ডার না করে 302/303 হেডার দিয়ে একটি GET পেজে (যেমন Dashboard বা Success পেজ) রিডাইরেক্ট করে। এর ফলে ইউজার ব্রাউজার রিফ্রেশ (F5) চাপলেও পুনরায় POST রিকোয়েস্ট যায় না এবং ডুপ্লিকেট ট্রানজ্যাকশন রোধ হয়।',
        seniorTipBn: 'ভাইভায় এটি উল্লেখ করলে ইন্টারভিউয়ার বুঝতে পারবেন আপনার রিয়েল-ওয়ার্ল্ড ওয়েব আর্কিটেকচারের গভীর অভিজ্ঞতা রয়েছে।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: ড্রপডাউন ও চেকবক্স সহ মিনি রেজিস্ট্রেশন ফর্ম',
      taskBn: 'একটি ফর্ম তৈরি করুন যেখানে শহরের ড্রপডাউন এবং স্কিল চেকবক্স থাকবে এবং সাবমিশনের পর নির্বাচিত মানগুলো সামারি আকারে প্রিন্ট হবে।',
      hintBn: 'name="skills[]" এবং selected/checked কন্ডিশন ব্যবহার করুন।',
      starterCode: `<?php
// মিনি ফর্ম ও ডাটা ডিসপ্লে কোড লিখুন
?>`,
      solutionCode: `<?php
$selectedCity = "Dhaka";
$skills = ["PHP", "MySQL"];

echo "<div style='font-family:sans-serif; padding:15px; border:1px solid #334155; border-radius:8px;'>";
echo "<h4>নির্বাচিত তথ্য সামারি:</h4>";
echo "শহর: <b>$selectedCity</b><br>";
echo "স্কিলসমূহ: <b>" . implode(", ", $skills) . "</b>";
echo "</div>";
?>`
    }
  },

  'ajax-intro': {
    trainerMetaphorBn:
      'AJAX কে কল্পনা করুন একটি রেস্তোরাঁর স্মার্ট ওয়েটারের সাথে। ট্র্যাডিশনাল ওয়েব হলো এমন এক রেস্তোরাঁ যেখানে আপনি ১ কাপ চা চাইতে গেলেও পুরো ডাইনিং রুমের সব চেয়ার-টেবিল খালি করে নতুন করে সাজিয়ে নিয়ে আসে! আর AJAX হলো সেই চটপটে ওয়েটার যে আপনার টেবিলে বসে থাকা অবস্থাতেই কিচেন (PHP সার্ভার) থেকে নিঃশব্দে শুধু চা এনে টেবিলে সার্ভ করে যায়।',
    beginnerSteps: [
      {
        step: 1,
        title: 'অ্যাসিঙ্ক্রোনাস কমিউনিকেশনের সুবিধা বুঝুন',
        explanationBn: 'পেজ স্ক্রল বা স্টেট না হারিয়ে ব্যাকগ্রাউন্ডে নেটওয়ার্ক রিকোয়েস্ট পরিচালনা।'
      },
      {
        step: 2,
        title: 'fetch() ও Promises হ্যান্ডলিং',
        explanationBn: 'জাভাস্ক্রিপ্ট থেকে ব্যাকএন্ড এপিআই কল করা এবং রেসপন্স রিসিভ করা।'
      },
      {
        step: 3,
        title: 'DOM আপডেট ও লোডিং ইন্ডিকেটর',
        explanationBn: 'ব্যবহারকারীকে ভিজ্যুয়াল লোডিং স্পিনার ও তাৎক্ষণিক ফিডব্যাক প্রদান।'
      }
    ],
    trainerSecretsBn: [
      'AJAX রিকোয়েস্টে কখনোই অতিরিক্ত ভারী এইচটিএমএল রিটার্ন করবেন না, সর্বদা কম্প্যাক্ট JSON রিটার্ন করুন এবং ক্লায়েন্টে টেমপ্লেট রেন্ডার করুন।',
      'প্রোডাকশনে একাধিক দ্রুত ক্লিক আটকাতে সাবমিট বাটনে debounce বা disabled স্টেট নিশ্চিত করুন।'
    ],
    commonGotchasBn: [
      'CORS (Cross-Origin Resource Sharing) এরর এড়িয়ে যাওয়া যখন ক্লায়েন্ট ও ব্যাকএন্ড আলাদা পোর্টে চলে।',
      'HTTP Status Code 500/404 এর ক্ষেত্রে ক্লায়েন্টে এরর হ্যান্ডলার (catch/reject) না রাখা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'AJAX-এ Asynchronous শব্দের আসল অর্থ কী?',
        answerBn: 'Asynchronous মানে হলো ব্রাউজার যখন সার্ভারে ডেটা রিকোয়েস্ট পাঠায়, তখন ব্রাউজারের মেইন ইউজার ইন্টারফেস থ্রেড ফ্রিজ বা ব্লক হয় না। ইউজার পেজে অন্যান্য কাজ চালিয়ে যেতে পারেন, আর ব্যাকগ্রাউন্ডে ডেটা আসামাত্র ইভেন্ট লুপের মাধ্যমে UI আপডেট হয়।',
        seniorTipBn: 'ইন্টারভিউতে Event Loop ও Non-blocking I/O এর সাথে তুলনা করে উত্তর দিন।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: সিম্পল AJAX JSON রেসপন্ডার',
      taskBn: 'PHP দিয়ে একটি JSON এপিআই রেসপন্স তৈরি করুন যা বর্তমান সার্ভার টাইম ও একটি সাকসেস মেসেজ রিটার্ন করবে।',
      hintBn: 'json_encode() এবং header() ব্যবহার করুন।',
      starterCode: `<?php
// JSON রেসপন্স স্ক্রিপ্ট লিখুন
?>`,
      solutionCode: `<?php
$data = [
    'success' => true,
    'serverTime' => date('H:i:s'),
    'message' => 'AJAX Connection OK'
];
echo json_encode($data, JSON_PRETTY_PRINT);
?>`
    }
  },

  'ajax-php': {
    trainerMetaphorBn:
      'PHP AJAX হ্যান্ডলারকে কল্পনা করুন একটি ব্যাংকের স্পেশাল ক্যাশ ডিপোজিট ড্রপবক্সের মতো। সাধারণ কাস্টমাররা লাইনে দাঁড়িয়ে কাউন্টারে স্লিপ দেয় (Traditional Form), আর AJAX ইউজাররা অটোমেটিক কিয়স্কে ডিজিটালি কার্ড সোয়াইপ করে তাৎক্ষণিক রিসিট নিয়ে যায়। PHP স্ক্রিপ্টটি সেই কিয়স্কের কোর ব্যাংকিং এপিআই ইঞ্জিন।',
    beginnerSteps: [
      {
        step: 1,
        title: 'file_get_contents("php://input") বোঝা',
        explanationBn: 'জাভাস্ক্রিপ্ট থেকে পাঠানো কাঁচা JSON পে-লোড রিড করার একমাত্র নিরাপদ মাধ্যম।'
      },
      {
        step: 2,
        title: 'json_decode($json, true) দিয়ে পার্সিং',
        explanationBn: 'জেসনকে পিএইচপি অ্যাসোসিয়েটিভ অ্যারেতে রূপান্তর।'
      },
      {
        step: 3,
        title: 'সঠিক HTTP স্ট্যাটাস কোড প্রদান',
        explanationBn: 'http_response_code(200 / 400 / 422) দিয়ে ক্লায়েন্টকে নির্ভুল স্ট্যাটাস জানানো।'
      }
    ],
    trainerSecretsBn: [
      'JSON_UNESCAPED_UNICODE ফ্ল্যাগ ছাড়া json_encode ব্যবহার করলে বাংলা বা যেকোনো ইউনিকোড ফন্ট \u0985 কোড হিসেবে ক্লায়েন্টে যায় যা ব্যান্ডউইথ নষ্ট করে।',
      'রেসপন্স জেনারেটের পর সবসময় exit; কল করুন, যাতে কোনো ইনক্লুডেড ফাইল থেকে অবাঞ্ছিত হোয়াইটস্পেস বা এইচটিএমএল ঢুকে JSON নষ্ট না করে।'
    ],
    commonGotchasBn: [
      'fetch(..., {body: JSON.stringify()}) পাঠালে $_POST দিয়ে ধরার চেষ্টা করা ($_POST তখন ফাঁকা থাকে)।',
      'PHP Warning/Notice অন থাকলে JSON আউটপুটের আগে ওয়ার্নিং টেক্সট প্রিন্ট হয়ে ক্লায়েন্টের JSON.parse ক্র্যাশ করা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'AJAX POST রিকোয়েস্টে $_POST অ্যারে কেন মাঝে মাঝে ফাঁকা থাকে?',
        answerBn: 'যখন ক্লায়েন্ট Content-Type: application/json দিয়ে কাঁচা JSON স্ট্রিং পাঠায়, PHP নিজে থেকে সেটিকে $_POST এ রূপান্তর করে না। $_POST শুধুমাত্র application/x-www-form-urlencoded অথবা multipart/form-data হলে পপুলেট হয়। JSON বডি রিড করতে file_get_contents("php://input") ব্যবহার করতে হয়।',
        seniorTipBn: 'এই প্রশ্নে অনেক ইন্টারভিউয়ার পরীক্ষার্থীর ডেটা স্ট্রিম ও HTTP বডি বোঝার গভীরতা যাচাই করেন।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: ইনকামিং JSON প্রসেসর',
      taskBn: 'একটি ইনকামিং JSON স্ট্রিং পার্স করে ইউজারের রোল ভ্যালিডেট করুন এবং রেসপন্স তৈরি করুন।',
      hintBn: 'json_decode() ব্যবহার করুন।',
      starterCode: `<?php
$rawJson = '{"username":"admin","role":"superadmin"}';
// JSON পার্স করে আউটপুট দিন
?>`,
      solutionCode: `<?php
$rawJson = '{"username":"admin","role":"superadmin"}';
$payload = json_decode($rawJson, true);

if (isset($payload['role']) && $payload['role'] === 'superadmin') {
    echo "অ্যাক্সেস অনুমোদিত: " . htmlspecialchars($payload['username']);
} else {
    echo "অননুমোদিত অ্যাক্সেস!";
}
?>`
    }
  },

  'ajax-database': {
    trainerMetaphorBn:
      'AJAX Database ইন্টিগ্রেশন হলো একটি লাইব্রেরির ডিজিটাল ক্যাটালগ কার্ড স্ক্যানারের মতো। আপনি নির্দিষ্ট কোনো ক্যাটাগরি বা বইয়ের নামের কার্ড সোয়াইপ করার সাথে সাথে পেছনের অটোমেটিক রোবোটিক আর্ম (PDO Prepared Query) ঠিক সেই বইটি শেলফ থেকে এনে টেবিলে হাজির করে, আপনাকে পুরো লাইব্রেরি হেঁটে খুঁজতে হয় না।',
    beginnerSteps: [
      {
        step: 1,
        title: 'ইভেন্ট লিসেনারে প্যারামিটার সংগ্রহ',
        explanationBn: 'ড্রপডাউন নির্বাচন বা আইডি থেকে প্যারামিটার তৈরি।'
      },
      {
        step: 2,
        title: 'PDO Prepared Statement এ বাইন্ডিং',
        explanationBn: 'SQL Injection চিরতরে বন্ধ করতে প্লেসহোল্ডার ব্যবহার।'
      },
      {
        step: 3,
        title: 'ডায়নামিক টেবিল রেন্ডারিং',
        explanationBn: 'ক্লায়েন্টে টেবিল রো বা কার্ডে ডেটা ইনসার্ট করা।'
      }
    ],
    trainerSecretsBn: [
      'AJAX ডাটাবেস এন্ডপয়েন্টে সবসময় SELECT * পরিহার করুন; শুধুমাত্র UI-তে প্রদর্শনের জন্য প্রয়োজনীয় কলামগুলো উল্লেখ করুন।',
      'প্রয়োজনীয় ক্ষেত্রে ডাটাবেস লেভেলে কলামে ইনডেক্সিং (INDEX) নিশ্চিত করুন যাতে রিয়েলটাইম ফিল্টারে সার্ভার ল্যাগ না করে।'
    ],
    commonGotchasBn: [
      'GET রিকোয়েস্টে আসা আইডি সরাসরি কুয়েরিতে বসিয়ে SQL Injection ঝুঁকিতে পড়া।',
      'ডাটাবেস কানেকশন ফেইল হলে পুরো ডাটাবেস এরর মেসেজ ও ক্রেডেনশিয়ালস ক্লায়েন্টে এক্সপোজ করে ফেলা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'AJAX ডাটাবেস কুয়েরির নিরাপত্তা কিভাবে নিশ্চিত করবেন?',
        answerBn: '১. ইনপুট টাইপ কাস্টিং ও ভ্যালিডেশন (যেমন filter_var FILTER_VALIDATE_INT), ২. শতভাগ ক্ষেত্রে PDO Prepared Statement প্লেসহোল্ডার ব্যবহার, ৩. জেনেরিক এরর হ্যান্ডলিং ও ৪. রেট লিমিটিং প্রয়োগ করে।',
        seniorTipBn: 'ভাইভায় বলুন: "Never trust client parameters in AJAX endpoints; treat them as hostile public inputs."'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: প্যারামিটারাইজড ডাটাবেস ফিল্টার সিমুলেশন',
      taskBn: 'একটি প্রোডাক্ট অ্যারে থেকে নির্দিষ্ট ক্যাটাগরির প্রোডাক্ট ফিল্টার করে একটি HTML টেবিল রেন্ডার করুন।',
      hintBn: 'array_filter() দিয়ে ফিল্টার করুন।',
      starterCode: `<?php
$products = [
  ['name' => 'Mouse', 'cat' => 'electronics'],
  ['name' => 'Book', 'cat' => 'stationery']
];
$target = 'electronics';
// ফিল্টার করে প্রিন্ট করুন
?>`,
      solutionCode: `<?php
$products = [
  ['name' => 'Mouse', 'cat' => 'electronics'],
  ['name' => 'Book', 'cat' => 'stationery']
];
$target = 'electronics';

$filtered = array_filter($products, fn($p) => $p['cat'] === $target);
foreach ($filtered as $item) {
    echo "পণ্য: " . htmlspecialchars($item['name']) . "<br>";
}
?>`
    }
  },

  'ajax-xml': {
    trainerMetaphorBn:
      'XML কে কল্পনা করুন প্রাচীন সিলমোহরযুক্ত অফিসিয়াল রাজকীয় চিঠির সাথে। চিঠিটি অনেক নিয়মকানুন ও ভারী খামে মোড়ানো (Tags), যা খুলতে কিছুটা সময় লাগে কিন্তু এর ফরম্যাট ও প্রোটোকল অত্যন্ত সুনির্দিষ্ট। বিপরীতে JSON হলো আধুনিক দ্রুতগতির হোয়াটসঅ্যাপ মেসেজ। এন্টারপ্রাইজ সিস্টেম ও লিগ্যাসি ব্যাংকিং প্রোটোকলে এখনও XML চিঠির কদর রয়েছে।',
    beginnerSteps: [
      {
        step: 1,
        title: 'XML ডকুমেন্টের গঠন বোঝা',
        explanationBn: 'রুট এলিমেন্ট, চাইল্ড নোড ও অ্যাট্রিবিউটের সমন্বয়।'
      },
      {
        step: 2,
        title: 'PHP SimpleXMLElement ব্যবহার',
        explanationBn: 'পিএইচপিতে সহজ পদ্ধতিতে XML নোড তৈরি ও ম্যানিপুলেশন।'
      },
      {
        step: 3,
        title: 'Content-Type: text/xml হেডার সেট করা',
        explanationBn: 'ব্রাউজারকে জানানো যে রেসপন্সটি একটি XML ডকুমেন্ট।'
      }
    ],
    trainerSecretsBn: [
      'SimpleXML এ নোড টেক্সট যোগ করার সময় স্পেশাল ক্যারেক্টার (&, <, >) থাকলে স্বয়ংক্রিয়ভাবে বা htmlspecialchars দিয়ে এস্কেপ করুন, অন্যথায় XML পার্সিং ফেইল করবে।',
      'ক্লায়েন্ট থেকে এক্সএমএল আপলোড নেওয়ার সময় XXE (XML External Entity) অ্যাটাক বন্ধে libxml_disable_entity_loader(true) এনফোর্স করুন।'
    ],
    commonGotchasBn: [
      'Content-Type হেডার না দিয়ে প্লেইন টেক্সট হিসেবে XML পাঠানো, ফলে ক্লায়েন্টে responseXML নাল হয়ে যাওয়া।',
      'XML রুট এলিমেন্ট একাধিক বানিয়ে Malformed XML তৈরি করা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'আধুনিক ওয়েব আর্কিটেকচারে XML এর পরিবর্তে JSON কেন প্রাধান্য পেয়েছে?',
        answerBn: 'JSON অনেক বেশি কম্প্যাক্ট ও লাইটওয়েট (কোনো ক্লোজিং ট্যাগ নেই), জাভাস্ক্রিপ্ট নেটিভলি সরাসরি JSON.parse() দিয়ে দ্রুত অবজেক্টে রূপান্তর করতে পারে এবং নেটওয়ার্ক ব্যান্ডউইথ ৫০-৭০% কম খরচ করে।',
        seniorTipBn: 'ইন্টারভিউতে উল্লেখ করবেন: তবে SOAP ও ব্যাংকিং লিগ্যাসি সিস্টেমে স্কিমা ভ্যালিডেশনের জন্য XML এখনও প্রাসঙ্গিক।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: SimpleXML নোড জেনারেটর',
      taskBn: 'SimpleXMLElement দিয়ে একটি বুক ক্যাটালগের XML তৈরি করে স্ট্রিং আকারে আউটপুট দিন।',
      hintBn: 'new SimpleXMLElement() এবং addChild() ব্যবহার করুন।',
      starterCode: `<?php
// SimpleXML কোড লিখুন
?>`,
      solutionCode: `<?php
$xml = new SimpleXMLElement('<catalog/>');
$book = $xml->addChild('book');
$book->addChild('title', 'Mastering PHP');
$book->addChild('price', '29.99');
echo htmlspecialchars($xml->asXML());
?>`
    }
  },

  'ajax-live-search': {
    trainerMetaphorBn:
      'Live Search কে কল্পনা করুন একটি অভিধানের ইনডেক্স বুথের সাথে। আপনি যখন দ্রুত ‘P-H-P’ টাইপ করছেন, বুথটি আপনার প্রতি আঙুলের নড়াচড়ায় দৌড় না দিয়ে আপনার টাইপিং থামার জন্য এক পলক (৩০০ মিলিসেকেন্ড ডিবৌন্স) অপেক্ষা করে এবং তারপর একবারে নিখুঁত পাতাটি খুলে আপনার সামনে মেলে ধরে। এতে সহকারী (ডাটাবেস) ক্লান্ত হয় না।',
    beginnerSteps: [
      {
        step: 1,
        title: 'কিবোর্ড ইভেন্ট (keyup/input)',
        explanationBn: 'ইউজার টাইপ করার সাথে সাথে ইনপুট ভ্যালু ট্র্যাকিং।'
      },
      {
        step: 2,
        title: 'ডিবৌন্সিং (Debounce 300ms) কৌশল',
        explanationBn: 'অপ্রয়োজনীয় কুয়েরি বন্যা ঠেকিয়ে সার্ভারকে সুরক্ষিত রাখা।'
      },
      {
        step: 3,
        title: 'SQL LIKE ও LIMIT সহ কুয়েরি এক্সিকিউশন',
        explanationBn: 'পারফরম্যান্ট ও ফাস্ট সার্চ রেজাল্ট ড্রপডাউন প্রদর্শন।'
      }
    ],
    trainerSecretsBn: [
      'কখনোই ১ ক্যারেক্টারের জন্য ডাটাবেস সার্চ ট্রিগার করবেন না; মিনিমাম ২ বা ৩ ক্যারেক্টার হলে তবেই AJAX রিকোয়েস্ট পাঠান।',
      'প্রোডাকশন ই-কমার্সে ডাটাবেসের ওপর চাপ কমাতে ঘনঘন সার্চ হওয়া কি-ওয়ার্ডগুলো Redis বা Memcached-এ ক্যাশ করে রাখুন।'
    ],
    commonGotchasBn: [
      'ডিবৌন্স ছাড়া প্রতি কি-স্ট্রোকে রিকোয়েস্ট পাঠানো, ফলে ১০০০ ইউজারের টাইপিংয়ে সার্ভার ক্র্যাশ করা।',
      'সার্চ রেজাল্টে LIMIT না দেওয়া, ফলে ১ লক্ষ রো লোড হয়ে ব্রাউজার হ্যাং করা।'
    ],
    interviewQuestions: [
      {
        questionBn: 'লাইভ সার্চে Debouncing এবং Throttling এর মধ্যে পার্থক্য কী?',
        answerBn: 'Debouncing হলো ইভেন্ট ঘটার পর একটি নির্দিষ্ট সময় পর্যন্ত অপেক্ষা করা এবং ব্যবহারকারী থামা পর্যন্ত ফাংশন এক্সিকিউশন স্থগিত রাখা (টাইপিং এর জন্য সেরা)। আর Throttling হলো একটি নির্দিষ্ট সময় পর পর (যেমন প্রতি ৫০০ms এ একবার) বাধ্যতামূলকভাবে ফাংশন রান করানো (উইন্ডো স্ক্রল বা রিসাইজের জন্য সেরা)।',
        seniorTipBn: 'ইন্টারভিউতে ফ্রন্টএন্ড-ব্যাকএন্ড পারফরম্যান্স অপ্টিমাইজেশনের একটি প্রিয় প্রশ্ন এটি।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: লাইভ সার্চ ফিল্টারিং লজিক',
      taskBn: 'একটি ফ্রুটস অ্যারে থেকে ইনপুট স্ট্রিং অনুযায়ী ম্যাচিং ফ্রুটস খুঁজে বের করে প্রিন্ট করুন।',
      hintBn: 'stripos() বা str_contains() ব্যবহার করুন।',
      starterCode: `<?php
$fruits = ['Apple', 'Banana', 'Mango', 'Avocado', 'Pineapple'];
$search = 'an';
// ফিল্টার করে প্রিন্ট করুন
?>`,
      solutionCode: `<?php
$fruits = ['Apple', 'Banana', 'Mango', 'Avocado', 'Pineapple'];
$search = 'an';

foreach ($fruits as $fruit) {
    if (stripos($fruit, $search) !== false) {
        echo "ম্যাচ: " . htmlspecialchars($fruit) . "<br>";
    }
}
?>`
    }
  },

  'ajax-poll': {
    trainerMetaphorBn:
      'AJAX Poll হলো একটি ডিজিটাল লাইভ স্টেডিয়াম স্ক্রিনের মতো। যখন দশ হাজার দর্শক তাদের সিটের রিমোট বোতামে চাপ দেয়, সেন্ট্রাল সার্ভার প্রতিটি বোতামের চাপ এক নিমিষে গুনে নিয়ে বিশাল পর্দায় প্রতিটি খেলোয়াড়ের রেটিং বার ও পার্সেন্টেজ গ্রাফ তাৎক্ষণিক বড় বা ছোট করে দেখায়, পুরো স্ক্রিন বন্ধ করে আবার অন করার কোনো প্রয়োজন হয় না।',
    beginnerSteps: [
      {
        step: 1,
        title: 'ভোট অপশন নির্বাচন ও ক্লিক ইভেন্ট',
        explanationBn: 'রেডিও বাটন বা বাটনে ক্লিকে AJAX রিকোয়েস্ট ট্রিগার।'
      },
      {
        step: 2,
        title: 'অ্যাটমিক ডাটাবেস ইনক্রিমেন্ট (votes = votes + 1)',
        explanationBn: 'কনকারেন্সি ও রেস কন্ডিশন সেফ আপডেট পরিচালনা।'
      },
      {
        step: 3,
        title: 'শতাংশ ক্যালকুলেশন ও প্রোগ্রেস বার অ্যানিমেশন',
        explanationBn: 'মোট ভোটের সাপেক্ষে প্রতিটি অপশনের পার্সেন্টেজ প্রদর্শন।'
      }
    ],
    trainerSecretsBn: [
      'ভোট গণনার ক্ষেত্রে কোডে আগে SELECT করে পরে যোগ করে UPDATE করবেন না (Race Condition)। সরাসরি SQL-এ `votes = votes + 1` লিখুন।',
      'ব্যবহারকারী যাতে পেজ রিফ্রেশ করে আবার ভোট দিতে না পারে সেজন্য সেশন, কুকি এবং প্রয়োজনে আইপি/ইউজারআইডি ট্র্যাকিং নিশ্চিত করুন।'
    ],
    commonGotchasBn: [
      'মোট ভোট শূন্য (Total = 0) থাকলে ডিভিশন বাই জিরো (Division by zero error) ক্র্যাশ হওয়া।',
      'ভোট বাটনে বারবার ক্লিক আটকাতে ডিসেবল স্টেট না দেওয়া।'
    ],
    interviewQuestions: [
      {
        questionBn: 'হাই-কনকারেন্সি পোলিং সিস্টেমে Race Condition কিভাবে সমাধান করবেন?',
        answerBn: '১. ডাটাবেসে অ্যাটমিক আপডেট কোয়েরি (UPDATE poll SET votes = votes + 1 WHERE id = ?) ব্যবহার করে, ২. ডাটাবেস ট্রানজ্যাকশন ও রো-লেভেল লকিং (SELECT FOR UPDATE) নিশ্চিত করে, অথবা ৩. অতি উচ্চ ট্রাফিকের ক্ষেত্রে Redis-এর INCR কমান্ড ব্যবহার করে মেমোরিতে ভোট গণনা করে পরে ডাটাবেসে সিঙ্ক করার মাধ্যমে।',
        seniorTipBn: 'আর্কিটেকচারাল ভাইভায় Redis Atomic INCR এর উল্লেখ আপনাকে সেরা ক্যান্ডিডেট হিসেবে তুলে ধরবে।'
      }
    ],
    studentChallenge: {
      title: 'ল্যাব চ্যালেঞ্জ: পোল পার্সেন্টেজ ক্যালকুলেটর',
      taskBn: 'চারটি অপশনের ভোট সংখ্যা থেকে মোট ভোট ও প্রতিটি অপশনের সঠিক শতকরা হার নির্ণয় করে প্রিন্ট করুন।',
      hintBn: 'array_sum() এবং round(($votes / $total) * 100, 1) ব্যবহার করুন।',
      starterCode: `<?php
$poll = ['PHP' => 50, 'JS' => 30, 'Python' => 20];
// পার্সেন্টেজ ক্যালকুলেট করুন
?>`,
      solutionCode: `<?php
$poll = ['PHP' => 50, 'JS' => 30, 'Python' => 20];
$total = array_sum($poll);

foreach ($poll as $opt => $count) {
    $pct = $total > 0 ? round(($count / $total) * 100, 1) : 0;
    echo "$opt: $pct% ($count ভোট)<br>";
}
?>`
    }
  }
};

/**
 * Auto-generates high-caliber, context-aware pedagogical material for any topic
 * ensuring all 40 topics have a pristine 20-year masterclass lecture experience.
 */
export function getTopicPedagogy(topic: TopicItem): PedagogicalDetails {
  const specific = SPECIFIC_PEDAGOGY[topic.id];

  const defaultMetaphor = `টপিক "${topic.title}" কে বাস্তব জীবনের একটি সুনির্দিষ্ট কন্ট্রাক্ট বা প্রসেসর হিসেবে কল্পনা করুন। সফটওয়্যার ইঞ্জিনিয়ারিংয়ে যখন আমরা ${topic.tag.toLowerCase()} নিয়ে কাজ করি, তখন উদ্দেশ্য থাকে ডাটাকে সুনির্দিষ্ট নিয়মে পরিচালনা করা যাতে কোনো অপ্রত্যাশিত রানটাইম ব্যতিক্রম সৃষ্টি না হয়।`;

  const defaultBeginnerSteps = [
    {
      step: 1,
      title: `মৌলিক ভূমিকা ও উদ্দেশ্য (${topic.tag})`,
      explanationBn: `প্রথমে জানুন এই ফিচারটি পিএইচপিতে কেন আনা হয়েছে এবং কোন বাস্তব সমস্যা সমাধানের জন্য আপনি এটি প্রজেক্টে লিখবেন।`
    },
    {
      step: 2,
      title: 'সিনট্যাক্স ও কোড এক্সিকিউশন ফ্লো',
      explanationBn: `কীওয়ার্ড এবং অপারেটরগুলো কীভাবে কাজ করে তা লক্ষ্য করুন। ডানপাশের এডিটরে কোড রান করে লাইভ আউটপুট দেখুন।`
    },
    {
      step: 3,
      title: 'প্রোডাকশন গ্রেড ব্যবহার বিধি',
      explanationBn: `কোড কেবল কাজ করলেই চলবে না; মেমোরি দক্ষতা ও নিরাপত্তা নিশ্চিত করে আধুনিক PHP 8.2+ স্ট্যান্ডার্ডে কোড লিখুন।`
    }
  ];

  const defaultSecrets = [
    `২০ বছরের অভিজ্ঞতা থেকে বলছি: "${topic.title}" ব্যবহারের সময় সর্বদা ডেটার টাইপ ও বাউন্ডারি কন্ডিশনগুলো কঠোরভাবে ভ্যালিডেট করুন।`,
    'কোড লেখার সময় মনে রাখবেন—কোড একবার লেখা হয় কিন্তু সহকর্মীদের দ্বারা শতাধিক বার পঠিত হয়। তাই ক্লিন কোড ও কমেন্টিং বজায় রাখুন।',
    'কখনোই অপরীক্ষিত অনুমান (Assumptions) এর ওপর ভরসা করবেন না; সর্বদা টেস্ট-কেস লিখে যাচাই করুন।'
  ];

  const defaultGotchas = [
    'সিনট্যাক্স বা ভ্যারিয়েবল স্কোপ ভুল করা এবং এরর রিপোর্টিং বন্ধ রাখা।',
    'ইনপুট ভ্যালিডেশন ছাড়া ডাটা প্রসেস করতে গিয়ে ক্র্যাশ বা নিরাপত্তা ঝুঁকিতে পড়া।',
    'পুরনো PHP 5/7 এর ব্যাকওয়ার্ড কোড কপি-পেস্ট করে আধুনিক পিএইচপিতে রান করা।'
  ];

  const defaultInterview = [
    {
      questionBn: `সফটওয়্যার ইন্টারভিউতে "${topic.title}" নিয়ে সিনিয়ররা সাধারণত কী জানতে চান?`,
      answerBn: `ইন্টারভিউয়ার মূলত দেখতে চান আপনি শুধু মুখস্থ সিনট্যাক্স জানেন নাকি এর পেছনের আর্কিটেকচারাল কারণ, পারফরম্যান্স ইমপ্যাক্ট এবং নিরাপত্তা ঝুঁকি অনুধাবন করতে পারেন।`,
      seniorTipBn: `বাস্তব প্রজেক্টের অভিজ্ঞতা বা কোনো সমস্যার সমাধানে এটি কীভাবে কাজে লাগিয়েছিলেন তা উল্লেখ করবেন।`
    }
  ];

  const defaultChallenge = {
    title: `হ্যান্ডস-অন ল্যাব প্র্যাকটিস: ${topic.title}`,
    taskBn: `ডানদিকের এডিটরে এই টপিকের স্যাম্পল কোডটি লোড করুন। এরপর নিজের মতো করে নতুন ভ্যারিয়েবল বা শর্ত যোগ করে আউটপুট পরিবর্তন করে রান করুন।`,
    hintBn: 'এডিটরের উপরের "Run PHP Code" বাটনে ক্লিক করে ফলাফল দেখুন।',
    starterCode: topic.sampleCode,
    solutionCode: topic.sampleCode
  };

  // Build high-impact presentation slides from topic details & all lesson sections / examples
  const metaphorText = specific?.trainerMetaphorBn || defaultMetaphor;
  const steps = specific?.beginnerSteps || defaultBeginnerSteps;
  const secrets = specific?.trainerSecretsBn || defaultSecrets;
  const gotchas = specific?.commonGotchasBn || defaultGotchas;
  const interview = specific?.interviewQuestions || defaultInterview;
  const challenge = specific?.studentChallenge || defaultChallenge;

  let slides: PresentationSlide[] = [];
  const lessonSections = topic.deepDive?.lessonSections || [];

  if (lessonSections.length > 0) {
    // 1. Topic Overview Slide
    slides.push({
      slideNumber: 1,
      title: `${topic.title}: মূল বিষয়বস্তু ও ওভারভিউ`,
      subtitle: `${topic.subtitleBn} [${topic.phpVersion}] • মোট ${lessonSections.length}টি পাঠ ও কোড উদাহরণ`,
      bulletPoints: [
        `ক্যাটাগরি: ${topic.category.toUpperCase()} • ট্যাগ: ${topic.tag}`,
        `টপিক পরিচিতি: ${topic.subtitleBn}`,
        `সম্পূর্ণ মডিউলে অন্তর্ভুক্ত: ${lessonSections.length}টি বিস্তারিত লেসন সেকশন ও কোড উদাহরণ`,
        'পরবর্তী স্লাইডগুলোতে প্রতিটি উদাহরণের থিওরি, কোড ও আউটপুট বিশ্লেষণ রয়েছে।'
      ],
      explanationBn: topic.deepDive?.conceptBn || '',
      codeSnippet: topic.sampleCode,
      trainerSpeechNotes: `${topic.title} টপিকের ওভারভিউ। এই মডিউলে মোট ${lessonSections.length}টি বাস্তব উদাহরণ ও কোড সেকশন রয়েছে যা ধারাবাহিকভাবে পরবর্তী স্লাইডগুলোতে সাজানো হয়েছে।`,
      analogyOrHighlight: metaphorText
    });

    // 2. Each Lesson Section / Example Block becomes its own dedicated Slide
    lessonSections.forEach((sec, idx) => {
      slides.push({
        slideNumber: slides.length + 1,
        title: sec.title || `${topic.title} — সেকশন ${idx + 1}`,
        subtitle: `${topic.title} • পাঠ ও কোড উদাহরণ (${idx + 1}/${lessonSections.length})`,
        bulletPoints: [],
        explanationBn: sec.explanationBn,
        codeSnippet: sec.code,
        codeLanguage: sec.codeLanguage || 'PHP 8.2 Live Code',
        outputPreview: sec.outputPreview,
        noteBn: sec.noteBn,
        trainerSpeechNotes: `এই স্লাইডে "${sec.title || topic.title}" এর কনসেপ্ট ও আউটপুট দেখানো হয়েছে। প্রয়োজনে কোডটি এডিটরে পাঠিয়ে রান করে পরীক্ষা করুন।`
      });
    });

    // 3. Best Practices & Gotchas Slide
    slides.push({
      slideNumber: slides.length + 1,
      title: `${topic.title} — বেস্ট প্র্যাকটিস ও পরিহার্য ভুল`,
      subtitle: 'প্রোডাকশন-গ্রেড কোডিং নিয়ম ও বাগ প্রতিরোধ',
      bulletPoints: [
        `বেস্ট প্র্যাকটিস: ${secrets[0] || 'কোড রিডাবিলিটি ও স্ট্যান্ডার্ড সিনট্যাক্স মেনে চলুন।'}`,
        `বেস্ট প্র্যাকটিস: ${secrets[1] || 'সঠিক টাইপ ডিক্লারেশন ও ভ্যালিডেশন নিশ্চিত করুন।'}`,
        `সতর্কতা: ${gotchas[0] || 'সিনট্যাক্স ও আন-ইনিশিয়ালাইজড ভেরিয়েবলের ভুল পরিহার করুন।'}`,
        `সতর্কতা: ${gotchas[1] || 'নিরাপত্তা ও এক্সেপশন হ্যান্ডলিং সঠিকভাবে করুন।'}`
      ],
      trainerSpeechNotes: 'বাস্তব প্রজেক্টে বাগ কমানো ও সিকিউরিটি নিশ্চিত করার জন্য এই বেস্ট প্র্যাকটিসগুলো মেনে চলুন।'
    });

    // 4. Comparison slide if exists
    if (topic.deepDive?.comparison) {
      slides.push({
        slideNumber: slides.length + 1,
        title: `${topic.title} — জুনিয়র বনাম সিনিয়র সলিউশন`,
        subtitle: 'এন্টারপ্রাইজ ক্লিন কোড আর্কিটেকচার ও কোড রিভিউ',
        bulletPoints: [
          `জুনিয়র অ্যান্টি-প্যাটার্ন: ${topic.deepDive.comparison.juniorProblems[0] || 'তাৎক্ষণিক কাজ চালানোর জন্য অপরিকল্পিত কোড যা স্কেল করে না।'}`,
          `সিনিয়র স্ট্যান্ডার্ড: ${topic.deepDive.comparison.seniorBenefits[0] || 'টাইপ-সেফ, টেস্টেবল, ক্লিন এবং সুরক্ষিত আর্কিটেকচারাল প্যাটার্ন।'}`,
          `আর্কিটেকচারাল গাইডলাইন: ${topic.deepDive.comparison.architectAdvice || 'দীর্ঘমেয়াদী সফটওয়্যার মেইনটেন্যান্স ও পারফরম্যান্স।'}`
        ],
        codeSnippet: topic.deepDive.comparison.seniorCode,
        trainerSpeechNotes: 'কোম্পানি এবং বড় প্রজেক্টে স্কেলেবিলিটি নিশ্চিত করতে সর্বদা এই সিনিয়র স্ট্যান্ডার্ড কোড অনুসরণ করা হয়।'
      });
    }
  } else {
    // Fallback if no lessonSections
    slides = [
      {
        slideNumber: 1,
        title: `${topic.title}: মূল কনসেপ্ট ও পরিচিতি`,
        subtitle: `${topic.subtitleBn} [${topic.phpVersion}]`,
        bulletPoints: [
          `টপিক উদ্দেশ্য: ${topic.subtitleBn}`,
          `ধাপ ১: ${steps[0]?.title || 'মূল ধারণা'} — ${steps[0]?.explanationBn || ''}`,
          `ধাপ ২: ${steps[1]?.title || 'ব্যবহার'} — ${steps[1]?.explanationBn || ''}`,
          `ধাপ ৩: ${steps[2]?.title || 'কার্যকারিতা'} — ${steps[2]?.explanationBn || ''}`
        ],
        explanationBn: topic.deepDive?.conceptBn,
        trainerSpeechNotes: `${topic.title} এর মূল উদ্দেশ্য এবং মেমরিতে বা রানটাইমে এটি কীভাবে কাজ করে তা পরিষ্কারভাবে বোঝা অত্যন্ত জরুরি।`,
        analogyOrHighlight: metaphorText
      },
      {
        slideNumber: 2,
        title: `${topic.title} — সিনট্যাক্স ও কোড এক্সিকিউশন`,
        subtitle: 'কোড স্ট্রাকচার, কী-ওয়ার্ড ও লাইভ রানটাইম আউটপুট',
        bulletPoints: [
          `টপিক ক্যাটাগরি ও পরিবেশ: ${topic.category.toUpperCase()} • ${topic.phpVersion}`,
          'স্টেটমেন্ট স্ট্রাকচার ও সঠিক টাইপ ডিক্লারেশন',
          'নিচের কোডটি সরাসরি ব্রাউজারে রান করে তাৎক্ষণিক আউটপুট পর্যবেক্ষণ করুন'
        ],
        codeSnippet: topic.sampleCode,
        trainerSpeechNotes: 'কোডের প্রতিটি স্টেটমেন্ট লক্ষ্য করুন। ভেরিয়েবল ও ফাংশন কল কীভাবে আউটপুট উৎপন্ন করছে তা এডিটরে লোড করে পরীক্ষা করুন।'
      },
      {
        slideNumber: 3,
        title: `${topic.title} — বেস্ট প্র্যাকটিস ও পরিহার্য ভুল`,
        subtitle: 'প্রোডাকশন-গ্রেড কোডিং নিয়ম ও সাধারণ ভুলের সমাধান',
        bulletPoints: [
          `বেস্ট প্র্যাকটিস: ${secrets[0] || 'কোড রিডাবিলিটি ও স্ট্যান্ডার্ড সিনট্যাক্স মেনে চলুন।'}`,
          `বেস্ট প্র্যাকটিস: ${secrets[1] || 'সঠিক টাইপ ডিক্লারেশন ও ভ্যালিডেশন নিশ্চিত করুন।'}`,
          `সতর্কতা: ${gotchas[0] || 'সিনট্যাক্স ও আন-ইনিশিয়ালাইজড ভেরিয়েবলের ভুল পরিহার করুন।'}`,
          `সতর্কতা: ${gotchas[1] || 'নিরাপত্তা ও এক্সেপশন হ্যান্ডলিং সঠিকভাবে করুন।'}`
        ],
        trainerSpeechNotes: 'বাস্তব প্রজেক্টে বাগ কমানো ও সিকিউরিটি নিশ্চিত করার জন্য এই বেস্ট প্র্যাকটিসগুলো অত্যন্ত গুরুত্বপূর্ণ।'
      }
    ];

    if (topic.deepDive?.comparison) {
      slides.push({
        slideNumber: 4,
        title: `${topic.title} — জুনিয়র বনাম সিনিয়র সলিউশন`,
        subtitle: 'এন্টারপ্রাইজ ক্লিন কোড আর্কিটেকচার ও কোড রিভিউ',
        bulletPoints: [
          `জুনিয়র অ্যান্টি-প্যাটার্ন: ${topic.deepDive.comparison.juniorProblems[0] || 'তাৎক্ষণিক কাজ চালানোর জন্য অপরিকল্পিত কোড যা স্কেল করে না।'}`,
          `সিনিয়র স্ট্যান্ডার্ড: ${topic.deepDive.comparison.seniorBenefits[0] || 'টাইপ-সেফ, টেস্টেবল, ক্লিন এবং সুরক্ষিত আর্কিটেকচারাল প্যাটার্ন।'}`,
          `আর্কিটেকচারাল গাইডলাইন: ${topic.deepDive.comparison.architectAdvice || 'দীর্ঘমেয়াদী সফটওয়্যার মেইনটেন্যান্স ও পারফরম্যান্স।'}`
        ],
        codeSnippet: topic.deepDive.comparison.seniorCode,
        trainerSpeechNotes: 'কোম্পানি এবং বড় প্রজেক্টে স্কেলেবিলিটি ও মেইনটেইনেবিলিটি নিশ্চিত করতে সর্বদা এই সিনিয়র স্ট্যান্ডার্ড কোড অনুসরণ করা হয়।'
      });
    }
  }

  return {
    trainerMetaphorBn: metaphorText,
    beginnerSteps: steps,
    trainerSecretsBn: secrets,
    commonGotchasBn: gotchas,
    interviewQuestions: interview,
    studentChallenge: challenge,
    slides: specific?.customSlides || slides
  };
}
