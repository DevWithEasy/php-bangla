import { TopicItem } from '../types';

export const BASIC_TOPICS: TopicItem[] = [
  {
    id: 'php-home',
    title: 'PHP HOME',
    category: 'basic',
    tag: 'Overview',
    phpVersion: 'PHP 8.2+',
    subtitleBn: 'সহজ পদ্ধতিতে পিএইচপির পরিচিতি, স্ক্রিপ্ট এক্সিকিউশন ও আধুনিক এন্টারপ্রাইজ ব্যাকএন্ড ইকোসিস্টেম।',
    sampleCode: `<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!<br>";
echo "PHP Version: " . phpversion() . "<br>";
echo "Current Time: " . date("Y-m-d H:i:s");
?>

</body>
</html>`,
    deepDive: {
      conceptBn: `PHP (Hypertext Preprocessor) হলো বিশ্বের অন্যতম জনপ্রিয় ওপেন-সোর্স সার্ভার-সাইড স্ক্রিপ্টিং ভাষা। ইন্টারনেটের প্রায় ৭৭% ওয়েব অ্যাপ্লিকেশন (যেমন: WordPress, Wikipedia, Slack-এর ব্যাকএন্ড, Laravel ইত্যাদি) পিএইচপি ব্যবহার করে। পিএইচপি কোড সার্ভারে এক্সিকিউট হয় এবং ফলাফল ব্রাউজারে প্লেইন HTML আকারে ফেরত পাঠায়।`,
      keyPointsBn: [
        'PHP কোড সার্ভার সাইডে ইন্টারপ্রেট হয়ে ক্লায়েন্টে সাধারণ HTML আকারে প্রদর্শিত হয়।',
        'PHP 8.x-এ নতুন সংযোজন: JIT (Just-In-Time) কম্পাইলার, Union Types, Attributes এবং Match Expression।',
        'এই অ্যাপে ব্রাউজারের ভেতর সরাসরি WebAssembly দ্বারা সংকলিত অফিসিয়াল PHP 8.2 ইঞ্জিন রান হচ্ছে।'
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
    subtitleBn: 'ইনস্টলেশন ছাড়াই ব্রাউজারে WebAssembly দিয়ে পিএইচপি চালনা ও লোকাল সেটআপ।',
    sampleCode: `<?php
echo "<h3>PHP 8 Runtime Status:</h3>";
echo "<b>PHP Version:</b> " . phpversion() . "<br>";
echo "<b>Server SAPI:</b> " . php_sapi_name() . "<br>";
echo "<b>Zend Version:</b> " . zend_version() . "<br>";
echo "<b>Memory Limit:</b> " . ini_get('memory_limit') . "<br>";
?>`,
    deepDive: {
      conceptBn: `সাধারণত পিএইচপি চালাতে Apache/Nginx ও PHP রানটাইম প্রয়োজন হয়। কিন্তু এই অ্যাপে আমরা ইন-ব্রাউজার WebAssembly ইন্টিগ্রেট করেছি, যাতে কোনো সফটওয়্যার ছাড়াই রিয়েল Zend Engine রান করা সম্ভব হয়।`,
      keyPointsBn: [
        'লোকাল ডেভেলপমেন্টের জন্য PHP 8.2 CLI, Docker অথবা Laravel Herd/Valet সর্বোত্তম পদ্ধতি।',
        'প্রোডাকশনে PHP-FPM (FastCGI Process Manager) এবং Nginx রিভার্স প্রক্সি সবচেয়ে জনপ্রিয় আর্কিটেকচার।'
      ]
    }
  },
  {
    id: 'php-syntax',
    title: 'PHP Syntax',
    category: 'basic',
    tag: 'Language Basics',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'পিএইচপি ট্যাগ, সেমিকোলন, স্টেটমেন্ট ও কেস-সেনসিটিভিটির সুনির্দিষ্ট নিয়মাবলী।',
    sampleCode: `<?php
// ১. পিএইচপি স্টেটমেন্ট অবশ্যই সেমিকোলন দিয়ে শেষ হতে হবে
$greeting = "Hello from PHP 8!";
echo $greeting . "<br>";

// ২. কীওয়ার্ডগুলো কেস-সেনসিটিভ নয়
ECHO "This works too!<br>";

// ৩. কিন্তু ভেরিয়েবল নাম অবশ্যই কেস-সেনসিটিভ!
$color = "লাল";
$COLOR = "নীল";
echo "color: $color, COLOR: $COLOR";
?>`,
    deepDive: {
      conceptBn: `পিএইচপি স্ক্রিপ্ট শুরু হয় <?php ট্যাগ দিয়ে। যদি ফাইলে শুধুমাত্র পিএইচপি কোড থাকে, তবে সমাপনী ট্যাগ ?> বাদ দেওয়া PSR-12 স্ট্যান্ডার্ড অনুযায়ী সুপারিশ করা হয়, যাতে অপ্রয়োজনীয় হোয়াইটস্পেস কুকি ও হেডার পাঠানো ব্যাহত না করে।`,
      keyPointsBn: [
        'পিএইচপিতে কি-ওয়ার্ড (if, else, echo, while) কেস-সেনসিটিভ নয়, কিন্তু সব ভেরিয়েবল ($name বনাম $NAME) কেস-সেনসিটিভ।',
        'সব স্টেটমেন্ট অবশ্যই সেমিকোলন (;) দিয়ে শেষ করতে হবে।'
      ]
    }
  },
  {
    id: 'php-comments',
    title: 'PHP Comments',
    category: 'basic',
    tag: 'Documentation',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'সিঙ্গেল লাইন, মাল্টি-লাইন কমেন্ট এবং এন্টারপ্রাইজ PHPDoc স্ট্যান্ডার্ড।',
    sampleCode: `<?php
// সিঙ্গেল লাইন কমেন্ট
# শেল স্টাইল কমেন্ট

/*
 * মাল্টি-লাইন কমেন্ট
 */

/**
 * এন্টারপ্রাইজ PHPDoc স্ট্যান্ডার্ড (PHPStan / Psalm স্ট্যাটিক এনালাইসিস)
 * 
 * @param int $amountInCents পয়সায় মোট টাকা
 * @param string $currency কারেন্সি সিম্বল
 * @return string ফরম্যাটেড কারেন্সি
 */
function formatCurrency(int $amountInCents, string $currency = "BDT"): string {
    return $currency . " " . number_format($amountInCents / 100, 2);
}

echo formatCurrency(250050);
?>`,
    deepDive: {
      conceptBn: `কমেন্ট শুধু কোড বোঝার জন্য নয়, আধুনিক এন্টারপ্রাইজে PHPDoc ব্যবহার করে PHPStan ও Psalm-এর মাধ্যমে স্ট্যাটিক টাইপ এনালাইসিস করে বাগ ধরা হয় কোড রান হওয়ার আগেই।`,
      keyPointsBn: [
        '// এবং # একক লাইনের কমেন্ট তৈরি করে।',
        '/** ... */ PHPDoc ফরম্যাট টাইপ এনোটেশন এবং IDE অটো-কমপ্লিশনের ভিত্তি।'
      ]
    }
  },
  {
    id: 'php-variables',
    title: 'PHP Variables',
    category: 'basic',
    tag: 'State & Scope',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'ভেরিয়েবলের নাম্বারিং নিয়ম, লোকাল, গ্লোবাল এবং স্ট্যাটিক ভেরিয়েবল স্কোপ।',
    sampleCode: `<?php
$text = "PHP Mastery";
$counter = 10;

// স্ট্যাটিক ভেরিয়েবল ফাংশন শেষ হলেও মান মনে রাখে
function trackVisits(): int {
    static $visits = 0;
    $visits++;
    return $visits;
}

echo "ভিজিট ১: " . trackVisits() . "<br>";
echo "ভিজিট ২: " . trackVisits() . "<br>";
echo "ভিজিট ৩: " . trackVisits() . "<br>";
?>`,
    deepDive: {
      conceptBn: `পিএইচপিতে ভেরিয়েবল $ দিয়ে শুরু হয়। ভেরিয়েবলের ৩টি প্রধান স্কোপ রয়েছে: Local, Global এবং Static। গ্লোবাল ভেরিয়েবল ফাংশনের ভেতরে সরাসরি কাজ করে না, যা ডেটা লিকেজ রোধ করে।`,
      keyPointsBn: [
        'ভেরিয়েবলের নাম বর্ণ বা আন্ডারস্কোর দিয়ে শুরু হতে হয়, সংখ্যা দিয়ে শুরু হতে পারে না।',
        'static ভেরিয়েবল ফাংশন কল শেষ হলেও এর পূর্ববর্তী মান মেমরিতে ধরে রাখে।'
      ]
    }
  },
  {
    id: 'php-echo-print',
    title: 'PHP Echo / Print',
    category: 'basic',
    tag: 'I/O Output',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'echo বনাম print-এর পারফরম্যান্স পার্থক্য এবং টেকনিক্যাল রিটার্ন ভ্যালু।',
    sampleCode: `<?php
echo "<h2>echo ব্যবহার</h2>";
echo "একসাথে ", "একাধিক ", "প্যারামিটার ", "নেয়!<br>";

$returnValue = print "print ব্যবহার (রিটার্ন ভ্যালু দেয় 1)<br>";
echo "print এর রিটার্ন মান: " . $returnValue;
?>`,
    deepDive: {
      conceptBn: `echo কোনো ভ্যালু রিটার্ন করে না, আর print সবসময় 1 রিটার্ন করে (তাই এটি এক্সপ্রেশনের মাঝে ব্যবহার করা যায়)। পারফরম্যান্স বিবেচনায় echo কিছুটা দ্রুততর কারণ এর কোনো রিটার্ন ওভারহেড নেই।`,
      keyPointsBn: [
        'echo একাধিক আর্গুমেন্ট কমা দিয়ে গ্রহণ করতে পারে, print শুধুমাত্র একটি আর্গুমেন্ট গ্রহণ করে।',
        'আধুনিক কোডে প্রিন্ট ও ইকো সাধারণত টেমপ্লেট ফাইলে ব্যবহার হয়, API তৈরিতে json_encode() ব্যবহার করা হয়।'
      ]
    }
  },
  {
    id: 'php-data-types',
    title: 'PHP Data Types',
    category: 'basic',
    tag: 'Types',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'স্কেলার, কম্পাউন্ড ও স্পেশাল টাইপস এবং PHP 8-এর স্ট্রং টাইপিং সুবিধা।',
    sampleCode: `<?php
$str = "Hello";        // String
$int = 42;             // Integer
$flt = 3.1416;         // Float
$bool = true;          // Boolean
$arr = [1, 2, "three"]; // Array
$nullVal = null;       // NULL

var_dump($str);
echo "<br>";
var_dump($int);
echo "<br>";
var_dump($arr);
?>`,
    deepDive: {
      conceptBn: `PHP মূলত ডায়নামিক টাইপড ভাষা, কিন্তু PHP 7 ও 8 থেকে স্কেলার টাইপ ডিক্লারেশন এবং declare(strict_types=1); যোগ করা হয়েছে। এর ফলে জাভা বা সি# এর মতো টাইপ সেফ কোড লেখা সম্ভব।`,
      keyPointsBn: [
        'স্কেলার টাইপ: string, int, float, bool',
        'কম্পাউন্ড টাইপ: array, object, callable, iterable',
        'স্পেশাল টাইপ: null, resource'
      ]
    }
  },
  {
    id: 'php-strings',
    title: 'PHP Strings',
    category: 'basic',
    tag: 'Text Processing',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'স্ট্রিং ফাংশন, ইউনিকোড/বাংলা হ্যান্ডলিং (mbstring) এবং হেরডক (Heredoc)।',
    sampleCode: `<?php
$txt = "PHP Web Development";

echo "দৈর্ঘ্য: " . strlen($txt) . "<br>";
echo "শব্দ প্রতিস্থাপন: " . str_replace("Development", "Mastery", $txt) . "<br>";

// বাংলা ইউনিকোড স্ট্রিং হ্যান্ডলিং
$bangla = "বাংলা পিএইচপি";
echo "সাধারণ strlen (বাইট সংখ্যা): " . strlen($bangla) . "<br>";
echo "নিরাপদ mb_strlen (আসল ক্যারেক্টার সংখ্যা): " . mb_strlen($bangla, 'UTF-8');
?>`,
    deepDive: {
      conceptBn: `বাংলা বা অন্যান্য মাল্টিবাইট ক্যারেক্টারের ক্ষেত্রে সাধারণ strlen ব্যবহার করলে ভুল ফলাফল পাওয়া যায় কারণ ইউনিকোড হরফে এক একটি অক্ষরে ২ থেকে ৪ বাইট পর্যন্ত জায়গা লাগে। সবসময় mb_* ফাংশন ব্যবহার করতে হবে।`,
      keyPointsBn: [
        'mb_strlen(), mb_substr(), mb_strpos() ইউনিকোড সেফ অপারেশনের জন্য অপরিহার্য।',
        'ডাবল কোটে ভেরিয়েবল ইন্টারপোলেশন কাজ করে ("$x"), সিঙ্গেল কোটে হুবহু স্ট্রিং হিসেবে গণ্য হয় (\'$x\')।'
      ]
    }
  },
  {
    id: 'php-numbers',
    title: 'PHP Numbers',
    category: 'basic',
    tag: 'Math & Primitives',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Integers, Floats, Number Strings এবং রিডেবিলিটির জন্য আন্ডারস্কোর নোটেশন।',
    sampleCode: `<?php
$million = 1_000_000; // PHP 7.4+ আন্ডারস্কোর নিউমেরিক লিটারেল
$price = 450.75;
$numStr = "99.5";

echo "মিলিয়ন রিডেবল: $million<br>";
echo "is_int check: " . (is_int($million) ? 'হ্যাঁ' : 'না') . "<br>";
echo "is_numeric check: " . (is_numeric($numStr) ? 'হ্যাঁ' : 'না') . "<br>";
?>`,
    deepDive: {
      conceptBn: `PHP নিউমেরিক স্ট্রিংকে স্বয়ংক্রিয়ভাবে সংখ্যায় কনভার্ট করে গাণিতিক অপারেশন চালাতে পারে। কোটি টাকার লেনদেনে ফ্লোটের সূক্ষ্ম নির্ভুলতার জন্য BCMath এক্সটেনশন ব্যবহার করা হয়।`,
      keyPointsBn: [
        'আন্ডারস্কোর নিউমেরিক লিটারেল (1_000_000) কোডের পাঠযোগ্যতা নাটকীয়ভাবে বাড়িয়ে দেয়।',
        'ফ্লোটিং পয়েন্ট সমতা যাচাইয়ে কখনোই সরাসরি $a == $b ব্যবহার করবেন না।'
      ]
    }
  },
  {
    id: 'php-casting',
    title: 'PHP Casting',
    category: 'basic',
    tag: 'Type Conversion',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'এক্সপ্লিসিট টাইপ কাস্টিং: (int), (string), (bool), (array), (object)।',
    sampleCode: `<?php
$rawNumber = "125.80 taka";
$castInt = (int)$rawNumber;
$castFloat = (float)$rawNumber;
$castBool = (bool)"false"; // মনে রাখবেন: যেকোনো নন-খালি স্ট্রিং ট্রু!

echo "আসল স্ট্রিং: '$rawNumber'<br>";
echo "(int) কাস্টিং: $castInt<br>";
echo "(float) কাস্টিং: $castFloat<br>";
var_dump($castBool);
?>`,
    deepDive: {
      conceptBn: `এক্সপ্লিসিট কাস্টিং অনিচ্ছাকৃত টাইপ জাগলিং বাগ প্রতিহত করতে সহায়তা করে। টাইপ কাস্টিং এর মাধ্যমে রানটাইমে অপ্রত্যাশিত ডেটাটাইপের হাত থেকে কোড নিরাপদ থাকে।`,
      keyPointsBn: [
        '(int) বা (integer) স্ট্রিংয়ের শুরুর সংখ্যাগুলোকে ইন্টিজারে রূপান্তর করে।',
        '(bool) কাস্টিংয়ের সময় "0", "", null, 0 বাদে বাকি সবকিছু true রিটার্ন করে।'
      ]
    }
  },
  {
    id: 'php-math',
    title: 'PHP Math',
    category: 'basic',
    tag: 'Calculations',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'ম্যাথ ফাংশন: min, max, round, abs, sqrt, rand এবং সিকিউর র‍্যান্ডম।',
    sampleCode: `<?php
echo "পাই (PI) মান: " . pi() . "<br>";
echo "সর্বোচ্চ (Max): " . max(5, 20, 100, 45) . "<br>";
echo "বর্গমূল sqrt(144): " . sqrt(144) . "<br>";
echo "রাউন্ড 4.67: " . round(4.67) . "<br>";
echo "ক্রিপ্টোগ্রাফিক নিরাপদ র‍্যান্ডম বাইটস (hex): " . bin2hex(random_bytes(4));
?>`,
    deepDive: {
      conceptBn: `পাসওয়ার্ড রিসেট টোকেন, ওটিপি বা ক্রিপ্টোগ্রাফিক কাজের জন্য সাধারণ rand() ব্যবহার না করে সবসময় CSPRNG সমর্থিত random_int() বা random_bytes() ব্যবহার করতে হবে।`,
      keyPointsBn: [
        'min() এবং max() অ্যারে বা একাধিক মানের মধ্যে ক্ষুদ্রতম ও বৃহত্তম মান খুঁজে বের করে।',
        'random_int($min, $max) ক্রিপ্টোগ্রাফিক্যালি নিরাপদ র‍্যান্ডম সংখ্যা তৈরি করে।'
      ]
    }
  },
  {
    id: 'php-constants',
    title: 'PHP Constants',
    category: 'basic',
    tag: 'Immutability',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'define() বনাম const কীওয়ার্ড, গ্লোবাল স্কোপ এবং কেস-সেনসিটিভিটি।',
    sampleCode: `<?php
// ১. define ফাংশন (রানটাইমে ডিফাইন হয়)
define("SITE_NAME", "আমার ই-কমার্স");

// ২. const কীওয়ার্ড (কম্পাইল টাইমে ডিফাইন হয়)
const API_VERSION = "2.5.0";

echo "সাইট: " . SITE_NAME . "<br>";
echo "ভার্সন: " . API_VERSION;
?>`,
    deepDive: {
      conceptBn: `কনস্ট্যান্টের আগে কোনো $ সাইন থাকে না। একবার ডিফাইন করা হলে স্ক্রিপ্টের যেকোনো জায়গা থেকে অপরিবর্তনীয়ভাবে এক্সেস করা যায়।`,
      keyPointsBn: [
        'const কম্পাইল টাইমে নির্ধারিত হয় বিধায় দ্রুততর, এবং এটি ক্লাসের ভেতরেও ব্যবহারযোগ্য।',
        'define() কন্ডিশনাল বা ফাংশনের ভেতর রানটাইমে কনস্ট্যান্ট তৈরি করতে পারে।'
      ]
    }
  },
  {
    id: 'php-magic-constants',
    title: 'PHP Magic Constants',
    category: 'basic',
    tag: 'Metaprogramming',
    phpVersion: 'PHP 8.0+',
    subtitleBn: '__LINE__, __FILE__, __DIR__, __FUNCTION__, __CLASS__, __METHOD__।',
    sampleCode: `<?php
echo "বর্তমান লাইন নম্বর: " . __LINE__ . "<br>";
echo "বর্তমান ফাইল: " . __FILE__ . "<br>";
echo "বর্তমান ডিরেক্টরি: " . __DIR__ . "<br>";

function debugHelper() {
    return "কল করা হয়েছে ফাংশন: " . __FUNCTION__;
}
echo debugHelper();
?>`,
    deepDive: {
      conceptBn: `ম্যাজিক কনস্ট্যান্টগুলো স্ক্রিপ্টের অবস্থানের উপর ভিত্তি করে মান পরিবর্তন করে। এগুলো ডিবাগিং, লগিং এবং ফ্রেমওয়ার্ক রাউটিংয়ে বহুল ব্যবহৃত।`,
      keyPointsBn: [
        '__DIR__ ফাইল পাথ ইনক্লুড করতে সবচেয়ে বেশি ব্যবহৃত হয়।',
        '__CLASS__ এবং __METHOD__ লগিং সিস্টেমে ত্রুটির অবস্থান শনাক্ত করতে সাহায্য করে।'
      ]
    }
  },
  {
    id: 'php-operators',
    title: 'PHP Operators',
    category: 'basic',
    tag: 'Logic & Expressions',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Arithmetic, Spaceship Operator (<=>), Null Coalescing (??), Ternary।',
    sampleCode: `<?php
$a = 15;
$b = 4;

echo "মডুলাস (ভাগশেষ): " . ($a % $b) . "<br>";
echo "ঘাত (Exponentiation 2 ** 4): " . (2 ** 4) . "<br>";

// Spaceship Operator (<=>) PHP 7+
echo "Spaceship (15 <=> 4): " . ($a <=> $b) . " (বাম পাশ বড় হলে 1)<br>";

// Null Coalescing Operator (??)
$username = $_GET['user'] ?? 'Guest User';
echo "ইউজার নাম: $username";
?>`,
    deepDive: {
      conceptBn: `মডার্ন পিএইচপিতে ?? অপারেটর কোডকে অনেক বেশি ক্লিন করে এবং আনডিফাইন্ড ইনডেক্স নোটিশ থেকে রক্ষা করে। Spaceship (<=>) সর্টিং ফাংশনকে সহজ করে।`,
      keyPointsBn: [
        'Spaceship অপারেটর a <=> b এর মান: a < b হলে -1, a == b হলে 0, a > b হলে 1।',
        '?? অপারেটর isset($x) ? $x : $default এর সংক্ষেপ।'
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
