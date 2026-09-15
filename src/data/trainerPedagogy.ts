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

  // Build high-impact presentation slides for classroom / projector lecture
  const metaphorText = specific?.trainerMetaphorBn || defaultMetaphor;
  const steps = specific?.beginnerSteps || defaultBeginnerSteps;
  const secrets = specific?.trainerSecretsBn || defaultSecrets;
  const gotchas = specific?.commonGotchasBn || defaultGotchas;
  const interview = specific?.interviewQuestions || defaultInterview;
  const challenge = specific?.studentChallenge || defaultChallenge;

  const slides: PresentationSlide[] = [
    {
      slideNumber: 1,
      title: `মাস্টারক্লাস পরিচিতি: ${topic.title}`,
      subtitle: `${topic.subtitleBn} [${topic.phpVersion}]`,
      bulletPoints: [
        `টপিক ক্যাটাগরি: ${topic.category.toUpperCase()} • ট্যাগ: ${topic.tag}`,
        'বাস্তব জীবনের রূপক ও মানসিক মডেল (Mental Model)',
        'ক্লাসরুম লেকচার: কনসেপ্ট থেকে এন্টারপ্রাইজ প্রোডাকশন আর্কিটেকচার',
        'হ্যান্ডস-অন লাইভ কোডিং ও ইনস্ট্যান্ট ব্রাউজার রানার'
      ],
      trainerSpeechNotes: `স্বাগতম প্রিয় শিক্ষার্থীরা! আমি আপনাদের ২০ বছরের অভিজ্ঞতার আলোকে আজ ${topic.title} এর আদ্যোপান্ত শেখাব। কোনো মুখস্থ বিদ্যা নয়, আমরা বাস্তব উদাহরণ দিয়ে শিখব যাতে সারাজীবন মনে থাকে।`,
      analogyOrHighlight: metaphorText
    },
    {
      slideNumber: 2,
      title: 'বিগিনার ধাপে ধাপে শেখার গাইড (Step-by-Step)',
      subtitle: 'একটি শক্তিশালী ফাউন্ডেশন গড়ে তোলার ৩টি ধাপ',
      bulletPoints: steps.map((s) => `ধাপ ${s.step}: ${s.title} — ${s.explanationBn}`),
      trainerSpeechNotes: 'এই ধাপগুলো মনোযোগ দিয়ে লক্ষ্য করুন। প্রতিটি ধাপে আমরা প্রথমে থিওরি বুঝব, তারপর বাস্তবে প্রয়োগ করব।'
    },
    {
      slideNumber: 3,
      title: 'লাইভ কোড স্যাম্পল ও আর্কিটেকচারাল রান',
      subtitle: 'স্ক্রিনেই সরাসরি পিএইচপি এক্সিকিউশন দেখুন',
      bulletPoints: [
        'স্ট্যান্ডার্ড কোডিং ফরম্যাট ও টাইপ সেফটি',
        'ইনপুট থেকে আউটপুটের সরাসরি রূপান্তর',
        'রাইট সাইড ইন্টারেক্টিভ এডিটরে যেকোনো সময় পরিবর্তনযোগ্য'
      ],
      codeSnippet: topic.sampleCode,
      trainerSpeechNotes: 'স্ক্রিনে প্রদর্শিত কোডটি লক্ষ্য করুন। ডানপাশের এডিটরে এটি লোড করে রান করে দেখুন কীভাবে আউটপুট জেনারেট হচ্ছে।'
    },
    {
      slideNumber: 4,
      title: 'জুনিয়র বনাম ২০ বছরের সিনিয়র কোড রিভিউ',
      subtitle: 'কোম্পানিগুলো যে কারণে আপনাকে জুনিয়র থেকে সিনিয়র পদে প্রমোট করবে',
      bulletPoints: topic.deepDive.comparison
        ? [
            `জুনিয়র অ্যান্টি-প্যাটার্ন: ${topic.deepDive.comparison.juniorProblems[0] || 'টাইপ সেফটি ও স্কেলেবিলিটির অভাব'}`,
            `সিনিয়র স্ট্যান্ডার্ড সল্যুশন: ${topic.deepDive.comparison.seniorBenefits[0] || 'টাইপ সেফ, টেস্টেবল ও ক্লিন ডিজাইন'}`,
            `আর্কিটেকচারাল গাইডলাইন: ${topic.deepDive.comparison.architectAdvice || 'দীর্ঘমেয়াদী মেইনটেইনেবিলিটি ও পারফরম্যান্স'}`
          ]
        : [
            'জুনিয়র অ্যান্টি-প্যাটার্ন: তাৎক্ষণিক কাজ চালানোর জন্য অপরিকল্পিত কোড যা ভবিষ্যতে স্কেল করে না।',
            'সিনিয়র স্ট্যান্ডার্ড সল্যুশন: টাইপ-সেফ, টেস্টেবল, ক্লিন এবং সুরক্ষিত আর্কিটেকচারাল প্যাটার্ন।',
            'আর্কিটেকচারাল গাইডলাইন: কোড লেখার সময় সর্বদা দীর্ঘমেয়াদী সফটওয়্যার মেইনটেন্যান্স বিবেচনা করুন।'
          ],
      trainerSpeechNotes: 'ইন্ডাস্ট্রিতে শুধু কাজ হলেই হয় না। কোডটি ভবিষ্যতে বাগ-ফ্রি থাকবে কিনা এবং অন্য ডেভেলপাররা সহজে বুঝতে পারবে কিনা সেটাই আসল আর্কিটেকচার।'
    },
    {
      slideNumber: 5,
      title: '২০ বছরের অভিজ্ঞতার ট্রেইনার সিক্রেটস ও কমন ফাঁদ',
      subtitle: 'বাস্তব প্রজেক্টের অভিজ্ঞতা থেকে প্রাপ্ত সতর্কবার্তা',
      bulletPoints: [
        ...secrets.slice(0, 2).map((sec) => `প্রোডাকশন বেস্ট প্র্যাকটিস: ${sec}`),
        ...gotchas.slice(0, 2).map((g) => `সতর্কতা ও পরিহার্য ভুল: ${g}`)
      ],
      trainerSpeechNotes: 'এই ভুলগুলো আমি আমার ২০ বছরের ক্যারিয়ারে শত শত জুনিয়র ডেভেলপারকে করতে দেখেছি। আপনারা যেন এই ফাঁদে না পড়েন সেজন্যই এই সতর্কবার্তা।'
    },
    {
      slideNumber: 6,
      title: 'টেকনিক্যাল ইন্টারভিউ ও ভাইভা প্রস্তুতি',
      subtitle: 'শীর্ষস্থানীয় আইটি কোম্পানিতে এই টপিক থেকে যা জিজ্ঞাসা করা হয়',
      bulletPoints: [
        `ইন্টারভিউ প্রশ্ন: ${interview[0]?.questionBn || 'টপিকের মূল আর্কিটেকচারাল কনসেপ্ট'}`,
        `স্ট্যান্ডার্ড উত্তর: ${interview[0]?.answerBn || 'ক্লিন আর্কিটেকচার ও নিরাপত্তা ভিত্তিক ব্যাখ্যা'}`,
        `সিনিয়র আর্কিটেক্টের পরামর্শ: ${interview[0]?.seniorTipBn || 'বাস্তব প্রজেক্টের অভিজ্ঞতা ও সুরক্ষার প্রভাব তুলে ধরুন'}`
      ],
      trainerSpeechNotes: 'ভাইভা বোর্ডে কখনই শুধু মুখস্থ এক লাইনের সংজ্ঞা দেবেন না। সবসময় এর বাস্তবিক প্রভাব ও সুরক্ষার দিকটি তুলে ধরবেন।'
    },
    {
      slideNumber: 7,
      title: 'হ্যান্ডস-অন ল্যাব চ্যালেঞ্জ',
      subtitle: 'এবার আপনার পালা! নিজে কোড করে প্র্যাকটিস করুন',
      bulletPoints: [
        `টাস্ক: ${challenge.taskBn}`,
        `ইঙ্গিত (Hint): ${challenge.hintBn}`,
        'ডানপাশের এডিটরে কোড রান করে ফলাফল যাচাই করুন'
      ],
      codeSnippet: challenge.starterCode,
      trainerSpeechNotes: 'প্রোগ্রামিং শেখার একমাত্র মূলমন্ত্র হলো নিজের হাতে কোড লেখা। এখনই এডিটরে এই চ্যালেঞ্জটি সমাধান করুন!'
    }
  ];

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
