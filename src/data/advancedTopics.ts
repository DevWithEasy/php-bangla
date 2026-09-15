import { TopicItem } from '../types';

export const ADVANCED_TOPICS: TopicItem[] = [
  {
    id: 'php-date-time',
    title: 'PHP Date and Time',
    category: 'advanced',
    tag: 'DateTimeImmutable',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'ডেট ফরম্যাটিং, টাইমজোন সেট করা এবং আধুনিক DateTimeImmutable অবজেক্ট।',
    sampleCode: `<?php
// টাইমজোন সেট করা
date_default_timezone_set("Asia/Dhaka");

echo "বর্তমান সময় (ঢাকা): " . date("d M Y, h:i:s A") . "<br>";

// আধুনিক DateTimeImmutable ক্লাস ব্যবহার
$now = new DateTimeImmutable();
$nextWeek = $now->modify('+7 days');

echo "আজকের তারিখ: " . $now->format('Y-m-d') . "<br>";
echo "আগামী সপ্তাহের তারিখ: " . $nextWeek->format('Y-m-d');
?>`,
    deepDive: {
      conceptBn: `ঐতিহ্যবাহী DateTime অবজেক্ট মিউটেবল (পরিবর্তনশীল), যা বড় সিস্টেমে এক জায়গায় পরিবর্তন করলে অন্য রেফারেন্সেও পরিবর্তিত হয়ে ক্ষতিকর সাইড-ইফেক্ট সৃষ্টি করত। তাই PHP 5.5+ থেকে DateTimeImmutable ব্যবহার বাধ্যতামূলক আর্কিটেকচারাল গাইডলাইন।`,
      keyPointsBn: [
        'DateTimeImmutable মেথড কল করলে মূল অবজেক্ট অবিকৃত থাকে এবং নতুন কপি রিটার্ন করে।',
        'সার্ভার ডাটাবেসে সর্বদা UTC ফরম্যাটে সময় সংরক্ষণ করুন এবং ডিসপ্লেতে ইউজারের লোকাল টাইমজোনে কনভার্ট করুন।'
      ]
    }
  },
  {
    id: 'php-include-require',
    title: 'PHP Include & Require',
    category: 'advanced',
    tag: 'File Inclusion',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'include বনাম require, include_once, require_once এবং PSR-4 অটোলোডিং।',
    sampleCode: `<?php
// require_once ফাইল না পেলে ফ্যাটাল এরর দিয়ে স্ক্রিপ্ট থামিয়ে দেয়
// include ফাইল না পেলে শুধু ওয়ার্নিং দেয় কিন্তু স্ক্রিপ্ট চালু রাখে

echo "<h3>অটোলোডিং (Autoloading) স্ট্যান্ডার্ড:</h3>";
echo "মডার্ন অ্যাপে শত শত require ফাইলের বদলে Composer PSR-4 অটোলোডার ব্যবহার করা হয়:<br>";
echo "<code>require_once __DIR__ . '/vendor/autoload.php';</code>";
?>`,
    deepDive: {
      conceptBn: `require বনাম include এর মূল পার্থক্য হলো ব্যর্থতার প্রতিক্রিয়া: যদি ফাইল খুঁজে না পাওয়া যায়, include শুধুমাত্র E_WARNING জারি করে পরবর্তী লাইনগুলো চালাতে থাকে, কিন্তু require অবিলম্বে E_COMPILE_ERROR দিয়ে পুরো এক্সিকিউশন থামিয়ে দেয়।`,
      keyPointsBn: [
        'কনফিগারেশন, ক্লাস এবং ডাটাবেস সংযোগের মতো অপরিহার্য ফাইলে সর্বদা require_once ব্যবহার করুন।',
        'মডার্ন কোডবেসে শত শত ম্যানুয়াল require_once পরিহার করে Composer PSR-4 Autoloading ব্যবহার করা হয়।'
      ]
    }
  },
  {
    id: 'php-cookies-sessions',
    title: 'PHP Cookies & Sessions',
    category: 'advanced',
    tag: 'State & Security',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'কুকিজ বনাম সেশন, HttpOnly, SameSite সিকিউরিটি ফ্ল্যাগ ও সেশন হাইজ্যাকিং রোধ।',
    sampleCode: `<?php
// সুরক্ষিত সেশন কনফিগারেশন
ini_set('session.cookie_httponly', '1');
ini_set('session.cookie_samesite', 'Strict');

session_start();

$_SESSION['user_id'] = 101;
$_SESSION['role'] = 'architect';

echo "সেশন শুরু হয়েছে!<br>";
echo "ইউজার আইডি: " . $_SESSION['user_id'] . "<br>";
echo "রোল: " . $_SESSION['role'] . "<br>";
echo "সেশন আইডি: " . session_id();
?>`,
    deepDive: {
      conceptBn: `কুকি ক্লায়েন্টের ব্রাউজারে সংরক্ষিত থাকে, আর সেশনের আসল ডাটা সার্ভার সাইডে থাকে এবং ক্লায়েন্টে কেবল একটি এলোমেলো session_id কুকি হিসেবে পাঠানো হয়। ফলে সেশন অনেক বেশি নিরাপদ।`,
      keyPointsBn: [
        'HttpOnly ফ্ল্যাগ জাভাস্ক্রিপ্টকে (document.cookie) কুকি পড়তে বাধা দিয়ে XSS সেশন চুরি ঠেকায়।',
        'লগইন করার পরপরই session_regenerate_id(true) কল করা উচিত সেশন ফিক্সেশন আক্রমণ প্রতিরোধ করতে।'
      ]
    }
  },
  {
    id: 'php-exceptions',
    title: 'PHP Exceptions & Errors',
    category: 'advanced',
    tag: 'Try-Catch-Finally',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'try, catch, finally, কাস্টম এক্সেপশন ও PHP 7/8 এর Throwable হায়ারার্কি।',
    sampleCode: `<?php
class InsufficientBalanceException extends Exception {}

function transferMoney(int $balance, int $amount): int {
    if ($amount > $balance) {
        throw new InsufficientBalanceException("ব্যালেন্স অপর্যাপ্ত! বর্তমান ব্যালেন্স: ৳$balance");
    }
    return $balance - $amount;
}

try {
    $remaining = transferMoney(500, 1000);
    echo "লেনদেন সফল! বাকি: $remaining";
} catch (InsufficientBalanceException $e) {
    echo "কাস্টম এরর ধরা পড়েছে: " . $e->getMessage() . "<br>";
} catch (Throwable $e) {
    echo "অন্যান্য সিস্টেমে ত্রুটি: " . $e->getMessage();
} finally {
    echo "<br><b>লেনদেন সেশন সম্পন্ন।</b>";
}
?>`,
    deepDive: {
      conceptBn: `PHP 7 থেকে অধিকাংশ ইন্টারনাল ফ্যাটাল এররকে Error অবজেক্টে রূপান্তরিত করা হয়েছে। Exception এবং Error উভয়ই সাধারণ Throwable ইন্টারফেস ইমপ্লিমেন্ট করে, তাই catch (Throwable $e) দিয়ে যেকোনো অপ্রত্যাশীত ক্র্যাশ নিরাপদে সামলানো যায়।`,
      keyPointsBn: [
        'কখনোই খালি catch ব্লকে ত্রুটি চেপে রাখবেন না (Silent failure anti-pattern)।',
        'finally ব্লক ট্রাই ব্লকে এরর হোক বা না হোক সর্বদা এক্সিকিউট হয়, যা রিসোর্স বা ডাটাবেস কানেকশন ক্লোজ করার জন্য আদর্শ।'
      ]
    }
  }
];
