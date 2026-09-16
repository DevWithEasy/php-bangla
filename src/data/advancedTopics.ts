import { TopicItem } from '../types';

export const ADVANCED_TOPICS: TopicItem[] = [
  {
    id: 'php-date-time',
    title: 'PHP Date and Time',
    category: 'advanced',
    tag: 'DateTime & Timezone',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'DateTime, DateTimeImmutable, Timezone (Asia/Dhaka vs UTC), DateInterval, Date Diff, Formatting এবং Real-World Best Practices।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Date & Time Complete Real-World Playground</h2>";

// ১. Current Date & Time (Procedural date)
echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. Current Date & Time (date function)</h4>";
date_default_timezone_set("Asia/Dhaka");
echo "Current Full DateTime: <code style='color:#4ade80;'>" . date("Y-m-d H:i:s") . "</code><br>";
echo "Current Date Only (Y-m-d): <code style='color:#4ade80;'>" . date("Y-m-d") . "</code><br>";
echo "Current Time Only (H:i:s): <code style='color:#4ade80;'>" . date("H:i:s") . "</code><br>";

// ২. DateTime Class ও নির্দিষ্ট Date
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. DateTime Class & Specific Date Creation</h4>";
$date = new DateTime();
echo "DateTime Object Now: <code style='color:#38bdf8;'>" . $date->format("Y-m-d H:i:s") . "</code><br>";

$xmas = new DateTime("2026-12-25");
echo "Specific Date (d M Y): <code style='color:#38bdf8;'>" . $xmas->format("d M Y") . "</code><br>";

// ৩. Timezone Management (Asia/Dhaka vs UTC)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. Timezone Management & Conversion</h4>";
$tzDhaka = new DateTimeZone("Asia/Dhaka");
$dhakaDate = new DateTime("now", $tzDhaka);
echo "Dhaka Time (Asia/Dhaka): <code style='color:#fbbf24;'>" . $dhakaDate->format("Y-m-d H:i:s e") . "</code><br>";

// UTC তে পরিবর্তন
$utcDate = new DateTime("now", new DateTimeZone("UTC"));
echo "Server UTC Time: <code style='color:#94a3b8;'>" . $utcDate->format("Y-m-d H:i:s e") . "</code><br>";
$utcDate->setTimezone(new DateTimeZone("Asia/Dhaka"));
echo "Converted to User TZ (Dhaka): <code style='color:#fbbf24;'>" . $utcDate->format("Y-m-d H:i:s e") . "</code><br>";

// ৪. Date Modify & Calculations
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. Date Modify (+7 days, -2 days, +1 month)</h4>";
$calcDate = new DateTime("2026-09-16");
$calcDate->modify("+7 days");
echo "2026-09-16 + 7 days = <code style='color:#4ade80;'>" . $calcDate->format("Y-m-d") . "</code><br>";
$calcDate->modify("+1 month");
echo "+ 1 month = <code style='color:#4ade80;'>" . $calcDate->format("Y-m-d") . "</code><br>";
$calcDate->modify("-2 days");
echo "- 2 days = <code style='color:#4ade80;'>" . $calcDate->format("Y-m-d") . "</code><br>";

// ৫. DateInterval & Difference (diff)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৫. DateInterval & Difference Between Dates</h4>";
$start = new DateTime("2026-09-01");
$end = new DateTime("2026-09-16");
$diff = $start->diff($end);
echo "Start: 2026-09-01, End: 2026-09-16<br>";
echo "Total Difference (Days): <b style='color:#f43f5e;'>" . $diff->days . " days</b> (Y: {$diff->y}, M: {$diff->m}, D: {$diff->d}, H: {$diff->h}, M: {$diff->i}, S: {$diff->s})<br>";

// ৬. Date Comparison
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৬. Date Comparison (<, >, ==)</h4>";
$d1 = new DateTime("2026-09-10");
$d2 = new DateTime("2026-09-20");
if ($d1 < $d2) {
    echo "Result: <span style='color:#38bdf8;'>Date 1 (2026-09-10) is EARLIER than Date 2 (2026-09-20)</span><br>";
}

// ৭. Create From Format (API / User Input Parsing)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৭. DateTime::createFromFormat</h4>";
$userDate = "16/09/2026";
$parsedDate = DateTime::createFromFormat("d/m/Y", $userDate);
echo "User Input: {$userDate} &rarr; Standard DB Format: <code style='color:#4ade80;'>" . $parsedDate->format("Y-m-d") . "</code><br>";

// ৮. Unix Timestamp
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৮. Unix Timestamp</h4>";
$ts = time();
echo "Current Unix Epoch: <code style='color:#e2e8f0;'>{$ts}</code><br>";
$fromTs = new DateTime("@1758000000");
$fromTs->setTimezone(new DateTimeZone("Asia/Dhaka"));
echo "From Timestamp @1758000000 (Dhaka Time): <code style='color:#38bdf8;'>" . $fromTs->format("Y-m-d H:i:s") . "</code><br>";

// ৯. DateTime vs DateTimeImmutable
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৯. DateTime vs DateTimeImmutable (Crucial)</h4>";
$immOriginal = new DateTimeImmutable("2026-09-16");
$immModified = $immOriginal->modify("+7 days");
echo "Original Immutable Object: <code style='color:#fbbf24;'>" . $immOriginal->format("Y-m-d") . "</code> (অপরিবর্তিত)<br>";
echo "Returned New Object: <code style='color:#4ade80;'>" . $immModified->format("Y-m-d") . "</code><br>";

// ১০. Real-World E-commerce / Subscription Simulation
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>১০. Real-World E-commerce & Subscription Flow</h4>";
$orderDate = new DateTimeImmutable();
$deliveryDate = $orderDate->modify("+3 days");
$subscriptionStart = new DateTimeImmutable();
$subscriptionExpiry = $subscriptionStart->modify("+30 days");

echo "🛒 Order Placed: <b>" . $orderDate->format("Y-m-d H:i") . "</b> | 🚚 Est. Delivery: <b style='color:#38bdf8;'>" . $deliveryDate->format("d M, Y (l)") . "</b><br>";
echo "💳 Pro Subscription Active: <b>" . $subscriptionStart->format("Y-m-d") . "</b> | ⏳ Expiry: <b style='color:#f43f5e;'>" . $subscriptionExpiry->format("Y-m-d") . "</b><br>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP-তে Date & Time হ্যান্ডেল করার জন্য সবচেয়ে নির্ভরযোগ্য এবং আধুনিক ক্লাস হলো DateTime এবং DateTimeImmutable। বড় এবং রিয়েল-ওয়ার্ল্ড প্রজেক্টে ডেটাবেজে UTC ফরম্যাটে টাইমস্ট্যাম্প সংরক্ষণ করা এবং অ্যাপ্লিকেশনে টাইমজোন-অ্যাওয়ার ক্যালকুলেশন করে ইউজারের টাইমজোনে (যেমন: Asia/Dhaka) প্রদর্শন করাই হলো ইন্ডাস্ট্রির গোল্ডেন স্ট্যান্ডার্ড।`,
      lessonSections: [
        {
          title: '১. Current Date & Time (Procedural date function)',
          explanationBn: `PHP-র মৌলিক date() ফাংশন দিয়ে নির্দিষ্ট ফরম্যাটে বর্তমান তারিখ ও সময় স্ট্রিং আকারে নেওয়া যায়। সাধারণ ফরম্যাট টোকেনসমূহ: Y (৪ ডিজিটের বছর), m (মাস 01-12), d (দিন 01-31), H (২৪-ঘণ্টা 00-23), i (মিনিট 00-59), s (সেকেন্ড 00-59)।`,
          code: `echo date("Y-m-d H:i:s"); // 2026-09-16 08:30:45
echo date("Y-m-d");       // 2026-09-16
echo date("H:i:s");       // 08:30:45`,
          outputPreview: `2026-09-16 08:30:45\n2026-09-16\n08:30:45`,
          noteBn: `date() ফাংশন সার্ভারের ডিফল্ট টাইমজোনের ওপর নির্ভর করে। তাই সঠিক ফলাফল পেতে প্রথমে date_default_timezone_set() বা DateTime ক্লাস ব্যবহার করা উচিত।`
        },
        {
          title: '২. DateTime Class ও নির্দিষ্ট Date তৈরি',
          explanationBn: `DateTime ক্লাস দিয়ে তারিখ ও সময় অবজেক্ট-ওরিয়েন্টেড উপায়ে হ্যান্ডেল করা হয়। আর্গুমেন্ট না দিলে এটি বর্তমান সময় নেয়, অথবা নির্দিষ্ট স্ট্রিং পাস করে যেকোনো তারিখ তৈরি করা যায়।`,
          code: `$date = new DateTime();
echo $date->format("Y-m-d H:i:s");

$customDate = new DateTime("2026-12-25");
echo $customDate->format("d M Y"); // 25 Dec 2026`,
          outputPreview: `2026-09-16 08:30:45\n25 Dec 2026`
        },
        {
          title: '৩. Timezone ও Timezone পরিবর্তন (Asia/Dhaka vs UTC)',
          explanationBn: `প্রোডাকশন প্রজেক্টে টাইমজোন অত্যন্ত সংবেদনশীল বিষয়। DateTimeZone ক্লাসের মাধ্যমে নির্দিষ্ট টাইমজোন (যেমন: Asia/Dhaka, UTC) নির্ধারণ ও অবজেক্টের টাইমজোন রূপান্তর করা যায়।`,
          code: `// ঢাকা টাইমজোনে ডেট তৈরি
$timezone = new DateTimeZone("Asia/Dhaka");
$date = new DateTime("now", $timezone);
echo $date->format("Y-m-d H:i:s");

// সার্ভার UTC থেকে ইউজারের টাইমজোনে কনভার্ট
$serverDate = new DateTime("now", new DateTimeZone("UTC"));
$serverDate->setTimezone(new DateTimeZone("Asia/Dhaka"));
echo $serverDate->format("Y-m-d H:i:s");`,
          outputPreview: `2026-09-16 14:30:45\n2026-09-16 14:30:45`,
          noteBn: `বেস্ট প্র্যাকটিস: ডেটাবেজে সর্বদা UTC সংরক্ষণ করবেন এবং ইউজারের সামনে প্রদর্শনের সময় তার নিজস্ব টাইমজোনে রূপান্তর করবেন।`
        },
        {
          title: '৪. Date Modify (তারিখ যোগ/বিয়োগ)',
          explanationBn: `modify() মেথডের মাধ্যমে খুব সহজে ইংরেজি বাক্যাংশ যেমন "+7 days", "+1 month", "-2 days", "+3 hours" ব্যবহার করে তারিখ পরিবর্তন করা যায়। অর্ডার ডেলিভারি, সাবস্ক্রিপশন মেয়াদ ও ট্রায়াল পিরিয়ড গণনায় এটি বহুল ব্যবহৃত।`,
          code: `$date = new DateTime();
$date->modify("+7 days");
echo $date->format("Y-m-d");

$date->modify("+1 month");
$date->modify("-2 days");
$date->modify("+3 hours");`,
          outputPreview: `2026-09-23`
        },
        {
          title: '৫. DateInterval ও দুই ডেটের পার্থক্য (diff)',
          explanationBn: `দুটি DateTime অবজেক্টের মধ্যকার ব্যবধান নির্ণয় করতে diff() মেথড ব্যবহৃত হয়। এটি একটি DateInterval অবজেক্ট রিটার্ন করে যাতে days, y, m, d, h, i, s প্রোপার্টিগুলো থাকে।`,
          code: `$start = new DateTime("2026-09-01");
$end   = new DateTime("2026-09-16");

$diff = $start->diff($end);
echo "মোট দিন: " . $diff->days; // 15
echo "বছর: {$diff->y}, মাস: {$diff->m}, দিন: {$diff->d}";`,
          outputPreview: `মোট দিন: 15\nবছর: 0, মাস: 0, দিন: 15`
        },
        {
          title: '৬. Date তুলনা (Comparison)',
          explanationBn: `PHP-তে দুটি DateTime অবজেক্টকে সরাসরি স্ট্যান্ডার্ড কম্প্যারিজন অপারেটর (<, >, ==, <=, >=, <=>) দিয়ে তুলনা করা যায়।`,
          code: `$date1 = new DateTime("2026-09-10");
$date2 = new DateTime("2026-09-20");

if ($date1 < $date2) {
    echo "Date 1 is earlier";
}`,
          outputPreview: `Date 1 is earlier`
        },
        {
          title: '৭. Date Create From Format (কাস্টম ইনপুট পার্সিং)',
          explanationBn: `ইউজার ফর্ম বা এক্সটার্নাল থার্ড-পার্টি API থেকে আসা বিভিন্ন ফরম্যাটের তারিখ (যেমন: "16/09/2026" বা "09-16-2026") নিরাপদভাবে পার্স করতে DateTime::createFromFormat() অপরিহার্য।`,
          code: `$userDate = "16/09/2026";
$date = DateTime::createFromFormat("d/m/Y", $userDate);

echo $date->format("Y-m-d"); // 2026-09-16`,
          outputPreview: `2026-09-16`
        },
        {
          title: '৮. Unix Timestamp রূপান্তর',
          explanationBn: `Timestamp হলো 1 January 1970 (Unix Epoch) থেকে অতিবাহিত মোট সেকেন্ড। time() দিয়ে বর্তমান টাইমস্ট্যাম্প পাওয়া যায়, getTimestamp() দিয়ে অবজেক্ট থেকে বের করা যায় এবং @ প্রিফিক্স দিয়ে সরাসরি অবজেক্ট তৈরি করা যায়।`,
          code: `echo time(); // e.g. 1758000000

$date = new DateTime();
echo $date->getTimestamp();

// Timestamp থেকে DateTime অবজেক্ট
$dateFromTs = new DateTime("@1758000000");`,
          outputPreview: `1758000000\n1758000000`
        },
        {
          title: '৯. Date Formatting চিটশিট',
          explanationBn: `format() মেথডে ব্যবহৃত বহুল জনপ্রিয় ফরম্যাট টোকেন: Y-m-d (ডাটাবেজ স্ট্যান্ডার্ড), d/m/Y (ইউজার ফ্রেন্ডলি ডিসপ্লে), d M, Y (16 Sep, 2026), l, d F Y (Wednesday, 16 September 2026), Y-m-d H:i:s (পূর্ণ ডেট-টাইম)।`,
          code: `$date = new DateTime();
echo $date->format("d/m/Y") . "\\n";
echo $date->format("d M, Y") . "\\n";
echo $date->format("l, d F Y") . "\\n";
echo $date->format("Y-m-d H:i:s");`,
          outputPreview: `16/09/2026\n16 Sep, 2026\nWednesday, 16 September 2026\n2026-09-16 08:30:45`
        },
        {
          title: '১০. DateTime vs DateTimeImmutable (গুরুত্বপূর্ণ ⭐⭐⭐)',
          explanationBn: `DateTime অবজেক্ট মিউটেবল (সরাসরি পরিবর্তন হয়ে যায়), যা বড় অ্যাপ্লিকেশনে বাগ তৈরি করে। অপরপক্ষে DateTimeImmutable অবজেক্ট পরিবর্তন হয় না, এটি প্রতিবার ক্যালকুলেশনে একটি সম্পূর্ণ নতুন অবজেক্ট রিটার্ন করে।`,
          code: `$date = new DateTimeImmutable("2026-09-16");
$newDate = $date->modify("+7 days");

echo $date->format("Y-m-d");    // 2026-09-16 (অপরিবর্তিত!)
echo $newDate->format("Y-m-d"); // 2026-09-23`,
          outputPreview: `2026-09-16\n2026-09-23`,
          noteBn: `লারাবেল বা আধুনিক যে কোনো পিএইচপি প্রজেক্টে সবসময় DateTimeImmutable ব্যবহার করা উচিত।`
        },
        {
          title: '১১. Real-World ই-কমার্স ও সাবস্ক্রিপশন বাস্তব উদাহরণ',
          explanationBn: `অর্ডার বুকিংয়ের পর ৩ দিন পরে ডেলিভারি ডেট নির্ধারণ এবং ট্রায়াল বা সাবস্ক্রিপশনের ৩০ দিনের মেয়াদ হিসাব করার বাস্তব চিত্র।`,
          code: `// Order Delivery Calculation
$orderDate = new DateTimeImmutable();
$deliveryDate = $orderDate->modify("+3 days");

echo "অর্ডার ডেট: " . $orderDate->format("Y-m-d") . "\\n";
echo "ডেলিভারি ডেট: " . $deliveryDate->format("Y-m-d") . "\\n";

// Subscription Expiry Calculation
$start = new DateTimeImmutable();
$expiry = $start->modify("+30 days");
echo "সাবস্ক্রিপশন শেষ: " . $expiry->format("Y-m-d");`,
          outputPreview: `অর্ডার ডেট: 2026-09-16\nডেলিভারি ডেট: 2026-09-19\nসাবস্ক্রিপশন শেষ: 2026-10-16`
        },
        {
          title: '১২. Database Date/Time ও আর্কিটেকচারাল বেস্ট প্র্যাকটিস',
          explanationBn: `ডাটাবেজে সাধারণত DATETIME বা TIMESTAMP কলাম থাকে (যেমন: '2026-09-16 08:30:45')। আর্কিটেকচারাল গোল্ডেন রুল: ১. Database: সর্বদা UTC-তে সংরক্ষণ করুন। ২. Application: Timezone-aware DateTime ব্যবহার করুন। ৩. UI / Display: ইউজারের নির্দিষ্ট টাইমজোনে কনভার্ট করে দেখান।`,
          code: `// ডাটাবেজে সেভ করার প্রস্তুতি
$date = new DateTimeImmutable("now", new DateTimeZone("UTC"));
$dbDate = $date->format("Y-m-d H:i:s"); // Save to DB in UTC

// ইউজারকে দেখানোর সময়
$userViewDate = $date->setTimezone(new DateTimeZone("Asia/Dhaka"));
$displayDate = $userViewDate->format("d M Y, h:i A"); // 16 Sep 2026, 02:30 PM`,
          outputPreview: `DB: 2026-09-16 08:30:45 UTC\nUI: 16 Sep 2026, 02:30 PM (Asia/Dhaka)`
        }
      ],
      keyPointsBn: [
        'date() দ্রুত স্ট্রিং ফরম্যাটের জন্য, কিন্তু টাইমজোন ও জটিল গণনায় DateTime/DateTimeImmutable আবশ্যক।',
        'DateTime মিউটেবল এবং রেফারেন্সে পরিবর্তন ঘটে; বড় অ্যাপ্লিকেশনে DateTimeImmutable ব্যবহার নিরাপদ।',
        'Timezone ম্যানেজমেন্টে DateTimeZone("Asia/Dhaka") বা UTC ব্যবহার করা হয়।',
        'modify("+7 days", "-1 month", "+3 hours") দিয়ে সহজ ও দ্রুত তারিখ যোগ-বিয়োগ করা যায়।',
        'diff() দিয়ে দুটি ডেটের ব্যবধান (DateInterval) বের করা যায় ($diff->days, $diff->y, $diff->m, $diff->d)।',
        'createFromFormat() দিয়ে ইউজার বা এপিআই-এর কাস্টম ডেট স্ট্রিং নিরাপদে অবজেক্টে রূপান্তর করা যায়।',
        'ডাটাবেজ স্ট্যান্ডার্ড: ডাটাবেজে সংরক্ষণ করুন UTC-তে, অ্যাপ্লিকেশনে টাইমজোন হ্যান্ডেল করুন এবং ইউআই-তে ইউজারের নিজস্ব টাইমজোনে রূপান্তর করে দেখান।'
      ],
      practiceExamples: [
        {
          title: 'ইন্টারঅ্যাক্টিভ বয়স ক্যালকুলেটর (Age Calculator)',
          descriptionBn: 'জন্মতারিখ থেকে বর্তমান বয়স (বছর, মাস, দিন) নিখুঁতভাবে বের করার স্ক্রিপ্ট।',
          code: `<?php
$birthDate = new DateTimeImmutable("1998-05-24");
$today = new DateTimeImmutable();
$age = $birthDate->diff($today);

echo "বয়স: {$age->y} বছর, {$age->m} মাস এবং {$age->d} দিন (মোট দিন: {$age->days} দিন)।";
?>`
        },
        {
          title: 'টাইমজোন কনভার্টার (Global Meeting Scheduler)',
          descriptionBn: 'নিউ ইয়র্ক সময়ের মিটিংকে বাংলাদেশ (ঢাকা) সময়ে রূপান্তর।',
          code: `<?php
$nyMeeting = new DateTimeImmutable("2026-10-15 10:00:00", new DateTimeZone("America/New_York"));
$dhakaMeeting = $nyMeeting->setTimezone(new DateTimeZone("Asia/Dhaka"));

echo "New York Time: " . $nyMeeting->format("d M Y, h:i A (e)") . "\\n";
echo "Dhaka Time: " . $dhakaMeeting->format("d M Y, h:i A (e)");
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র অ্যাপ্রোচ: স্ট্রিং বা মিউটেবল DateTime এবং টাইমজোন অবহেলা
$orderDate = new DateTime(); // সার্ভারের টাইমজোনের উপর ব্লাইন্ড নির্ভরতা
$deliveryDate = $orderDate->modify("+3 days"); // $orderDate নিজেও চেঞ্জ হয়ে গেছে!

// স্ট্রিং ম্যানিপুলেশন দিয়ে ডেট ক্যালকুলেশন
$tomorrow = date("Y-m-d", time() + 86400); // লিপ সেকেন্ড বা ডেলাইট সেভিংসে ব্রেক করবে
$dbDate = date("Y-m-d H:i:s"); // লোকাল টাইমে ডিবিতে সেভ করায় টাইমজোন কনফ্লিক্ট`,
        juniorProblems: [
          'DateTime মিউটেবল হওয়ায় modify() মূল অবজেক্টের মান পরিবর্তন করে দেয়, ফলে ডেলিভারি ডেট এবং অর্ডার ডেট একই হয়ে যায়।',
          'সার্ভার টাইমজোনের ওপর নির্ভর করায় গ্লোবাল ইউজারদের জন্য সময় ভুল দেখায়।',
          'time() + 86400 এর মতো ম্যাজিক সেকেন্ড যোগ করার ফলে Daylight Saving Time (DST) ও লিপ সেকেন্ডে সময় ভুল হয়।',
          'ডেটাবেজে লোকাল টাইম সেভ করায় ডাটা মাইগ্রেশন ও গ্লোবাল রিপোর্টিংয়ে বিশৃঙ্খলা তৈরি হয়।'
        ],
        seniorCode: `//  সিনিয়র অ্যাপ্রোচ: DateTimeImmutable, UTC ডাটাবেজ এবং ইউজারের টাইমজোন কনভার্সন
$orderDate = new DateTimeImmutable("now", new DateTimeZone("UTC"));
$deliveryDate = $orderDate->modify("+3 days"); // $orderDate অক্ষত থাকবে

// ডাটাবেজে সেভ হচ্ছে স্ট্যান্ডার্ড UTC
$dbRecord = $orderDate->format("Y-m-d H:i:s");

// ইউজারের জন্য ঢাকায় কনভার্ট করে প্রদর্শন
$userTimezone = new DateTimeZone("Asia/Dhaka");
$userViewDate = $orderDate->setTimezone($userTimezone);
echo "Order Date (Local): " . $userViewDate->format("d M Y, h:i A");`,
        seniorBenefits: [
          'DateTimeImmutable ডেটার ইমিউটেবিলিটি বজায় রাখে এবং সাইড-ইফেক্ট রোধ করে।',
          'ডাটাবেজে UTC স্টোর করায় সিস্টেম যেকোনো দেশের ইউজারের জন্য স্কেলেবল থাকে।',
          'DateTimeZone দিয়ে DST এবং টাইমজোন অটোমেটিক হ্যান্ডেল হয়, কোনো ম্যানুয়াল সেকেন্ড যোগ-বিয়োগের প্রয়োজন হয় না।'
        ],
        architectAdvice: 'কখনোই time() + (days * 86400) বা strtotime() এর ওপর মিশন-ক্রিটিক্যাল লজিক তৈরি করবেন না। সবসময় DateTimeImmutable এবং DateTimeZone ব্যবহার করুন। ডাটাবেজে অলওয়েজ UTC টাইমস্ট্যাম্প সেভ করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (new DateTimeImmutable)',
          'DO_FCALL -> timelib_time_ctor()',
          'FETCH_OBJ_R / EXT_STMT -> format() via timelib_date_format()'
        ],
        cStructOrMemory: `struct _php_date_obj {
    timelib_time *time;
    timelib_tzinfo *tz_info;
    zval *props;
    zend_object std;
};`,
        explanationBn: `পিএইচপির ইন্টারনাল Zend Engine-এ Derick Rethans এর বিখ্যাত 'timelib' C-লাইব্রেরি ব্যবহৃত হয়। যখন new DateTime() বা DateTimeImmutable কল করা হয়, তখন C লেভেলে timelib_time স্ট্রাকচার তৈরি হয় যা বছর, মাস, দিন, সেকেন্ড এবং timelib_tzinfo (টাইমজোন ডাটাবেজ) পয়েন্টার সংরক্ষণ করে। DateTimeImmutable এর ক্ষেত্রে modify() মেথড কল করলে timelib_time_clone() এক্সিকিউট হয়ে সম্পূর্ণ নতুন জেন্ড অবজেক্ট রিটার্ন করে।`
      },
      security: {
        vulnerabilityType: 'Unvalidated Date Parsing & Timezone Inconsistency',
        attackVectorBn: 'ইউজারের থেকে আসা ডেট ইনপুট (যেমন ট্রায়াল শেষ বা কুপন মেয়াদ) সরাসরি স্ট্রিং কনক্যাট বা new DateTime($_POST["date"]) এ কোনো ফরম্যাট ভ্যালিডেশন ছাড়া দিলে অপ্রত্যাশিত ডেট পার্সিং বা লজিক বাইপাস হতে পারে।',
        preventionRuleBn: 'সর্বদা DateTime::createFromFormat("Y-m-d", $input) ব্যবহার করুন এবং $date !== false নিশ্চিত করার পাশাপাশি getLastErrors()["warning_count"] === 0 পরীক্ষা করুন।',
        safeCodeSnippet: `function parseUserDateSafe(string $inputDate): ?DateTimeImmutable {
    $format = "d/m/Y";
    $date = DateTimeImmutable::createFromFormat($format, $inputDate);
    $errors = DateTimeImmutable::getLastErrors();
    
    if (!$date || ($errors && ($errors['warning_count'] > 0 || $errors['error_count'] > 0))) {
        return null; // ইনভ্যালিড ডেট
    }
    return $date;
}`
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'DateTime হলো একটি ডিজিটাল ঘড়ি যার সাথে ক্যালেন্ডার যুক্ত। DateTimeImmutable হলো টাইম-মেশিনের এমন ক্যামেরা যা অতীতে পরিবর্তন না করে প্রতিটি হিসাবের জন্য নতুন ছবি (নতুন অবজেক্ট) তৈরি করে দেয়।',
      beginnerSteps: [
        {
          step: 1,
          title: 'Current Date ও Time দেখা',
          explanationBn: 'date("Y-m-d H:i:s") দিয়ে বর্তমান সময় দেখুন।',
          codePiece: 'echo date("Y-m-d H:i:s");'
        },
        {
          step: 2,
          title: 'DateTime অবজেক্ট তৈরি',
          explanationBn: 'new DateTime() দিয়ে অবজেক্ট তৈরি করুন এবং format() দিয়ে ফরম্যাট করুন।',
          codePiece: '$d = new DateTime(); echo $d->format("d M Y");'
        },
        {
          step: 3,
          title: 'টাইমজোন যুক্ত করা',
          explanationBn: 'DateTimeZone("Asia/Dhaka") দিয়ে লোকাল টাইমজোন নির্ধারণ করুন।',
          codePiece: '$d = new DateTime("now", new DateTimeZone("Asia/Dhaka"));'
        },
        {
          step: 4,
          title: 'তারিখ যোগ বা বিয়োগ করা',
          explanationBn: 'modify() দিয়ে ৭ দিন বা ১ মাস এগিয়ে নিন।',
          codePiece: '$future = $d->modify("+7 days");'
        },
        {
          step: 5,
          title: 'পার্থক্য (diff) বের করা',
          explanationBn: 'diff() দিয়ে দুটি ডেটের মধ্যবর্তী দিন সংখ্যা বের করুন।',
          codePiece: '$diff = $date1->diff($date2); echo $diff->days;'
        }
      ],
      trainerSecretsBn: [
        'ইমিউটেবল অভ্যাস: প্রজেক্টে শুরু থেকেই new DateTimeImmutable() লেখার অভ্যাস করুন।',
        'ডেটাবেজ নীতি: ডেটাবেজের সাথে কথা বলার সময় সবসময় UTC ব্যবহার করুন।',
        'createFromFormat এর পর getLastErrors() চেক করা সিনিয়র ডেভেলপারদের অন্যতম প্রধান স্বাক্ষর।'
      ],
      commonGotchasBn: [
        'ভুল: $orderDate->modify("+3 days") লিখলে DateTime এর ক্ষেত্রে মূল $orderDate নিজেও বদলে যায়।',
        'ভুল: date("Y-m-d", strtotime("+1 month")) দিয়ে ৩১ জানুয়ারি থেকে ১ মাস যোগ করলে ২৮/২৯ ফেব্রুয়ারির বদলে ২/৩ মার্চ চলে আসতে পারে।',
        'ভুল: সার্ভারের লোকাল টাইমে ডাটাবেজে স্টোর করলে বিভিন্ন রিজিয়নের ইউজারদের টাইমিং নষ্ট হয়ে যায়।'
      ],
      interviewQuestions: [
        {
          questionBn: 'DateTime এবং DateTimeImmutable এর মধ্যে মূল পার্থক্য কী এবং কোনটি কেন ব্যবহার করা উচিত?',
          answerBn: 'DateTime হলো মিউটেবল—modify() বা setTimezone() কল করলে মূল অবজেক্ট পরিবর্তিত হয়ে যায়। DateTimeImmutable হলো ইমিউটেবল—যেকোনো পরিবর্তনে এটি নতুন অবজেক্ট রিটার্ন করে এবং মূল অবজেক্টকে অক্ষত রাখে। সাইড-ইফেক্ট এবং বাগমুক্ত কোডের জন্য DateTimeImmutable ব্যবহার করা উচিত।',
          seniorTipBn: 'ইন্টারভিউতে বলুন যে PSR এবং আধুনিক ফ্রেমওয়ার্ক (যেমন Laravel Carbon v3 / Symfony) ডিফল্ট হিসেবে ইমিউটেবিলিটিকে স্ট্যান্ডার্ড হিসেবে গ্রহণ করেছে।'
        },
        {
          questionBn: 'ডাটাবেজে ডেট-টাইম সংরক্ষণের ক্ষেত্রে বেস্ট প্র্যাকটিস কী?',
          answerBn: 'ডাটাবেজে সবসময় UTC টাইমজোনে DATETIME বা TIMESTAMP ফরম্যাটে (Y-m-d H:i:s) ডেটা সেভ করতে হয়। অ্যাপ্লিকেশন লজিক টাইমজোন-অ্যাওয়ার হবে এবং ইউজারকে দেখানোর সময় ইউজারের নির্দিষ্ট টাইমজোনে কনভার্ট করা হবে।',
          seniorTipBn: 'Database -> UTC, Application -> Timezone Aware, UI -> User Timezone—এই ৩টি লেয়ার স্পষ্টভাবে উল্লেখ করুন।'
        }
      ],
      studentChallenge: {
        title: 'সাবস্ক্রিপশন এক্সপায়ারি ও রিমেইনিং ডেজ ট্র্যাকার',
        taskBn: 'DateTimeImmutable ব্যবহার করে একটি সাবস্ক্রিপশনের শুরুর তারিখ থেকে ৪৫ দিনের মেয়াদ নির্ধারণ করুন এবং আজ থেকে মেয়াদ শেষ হতে কত দিন বাকি আছে তা হিসাব করে দেখান।',
        hintBn: 'modify("+45 days") দিয়ে মেয়াদ নির্ধারণ করুন এবং $today->diff($expiryDate) দিয়ে $diff->days প্রিন্ট করুন।',
        starterCode: `<?php
$subscriptionStart = new DateTimeImmutable("2026-09-01");
// ৪৫ দিন মেয়াদ যোগ করুন এবং রিমেইনিং দিন বের করুন
`,
        solutionCode: `<?php
$subscriptionStart = new DateTimeImmutable("2026-09-01");
$expiryDate = $subscriptionStart->modify("+45 days");

$today = new DateTimeImmutable("2026-09-16");
$diff = $today->diff($expiryDate);

echo "সাবস্ক্রিপশন শুরু: " . $subscriptionStart->format("Y-m-d") . "<br>";
echo "মেয়াদ শেষ হবে: " . $expiryDate->format("Y-m-d") . "<br>";
echo "বাকি আছে: " . $diff->days . " দিন!";
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Date & Time Architecture',
          subtitle: 'From Procedural date() to Modern DateTimeImmutable',
          bulletPoints: [
            'date() function for quick formatted strings',
            'DateTime vs DateTimeImmutable (Mutable vs Immutable)',
            'Timezone control with DateTimeZone (Asia/Dhaka & UTC)',
            'Date arithmetic with modify() and intervals with diff()'
          ],
          trainerSpeechNotes: 'Welcome to modern PHP Date & Time. Understanding immutability and timezones is essential for building production-ready apps.',
          analogyOrHighlight: 'DateTimeImmutable is like a timestamp camera—it creates new snapshots without modifying the past.'
        },
        {
          slideNumber: 2,
          title: 'Database & Production Best Practices',
          subtitle: 'The 3-Tier Timezone Rule',
          bulletPoints: [
            'Database Layer: Always store timestamps in UTC',
            'Application Layer: Timezone-aware objects with DateTimeImmutable',
            'Presentation Layer: Format to the user local timezone on render',
            'Use DateTime::createFromFormat() to parse external inputs safely'
          ],
          trainerSpeechNotes: 'Never store local time in the database. Follow the UTC-everywhere golden rule to support global users seamlessly.',
          analogyOrHighlight: 'UTC in DB + Local TZ in UI = Flawless global time handling.'
        }
      ]
    }
  },
  {
    id: 'php-include',
    title: 'PHP Include & Require',
    category: 'advanced',
    tag: 'File Inclusion & Modular Architecture',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'include, require, include_once, require_once, __DIR__ পাথ রেজোলিউশন, ভ্যারিয়েবল স্কোপ ও Composer অটোলোডিং।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Include & Require Live Modular System</h2>";

// ১. ভার্চুয়াল মডিউল তৈরি (মেমরি ফাইলে)
file_put_contents("config.php", '<?php return ["appName" => "PHP Mastery", "db" => "mysql_db", "version" => "8.3"];');
file_put_contents("helpers.php", '<?php function formatPrice($n) { return "৳" . number_format($n, 2); }');
file_put_contents("header.php", '<div style="background:#1e293b; padding:12px; border-radius:6px; margin-bottom:12px; border-left:4px solid #38bdf8;"><h3>🌐 Header Component Loaded</h3></div>');
file_put_contents("footer.php", '<div style="background:#1e293b; padding:10px; border-radius:6px; margin-top:15px; border-left:4px solid #a855f7;"><small>© 2026 PHP Mastery Inc. All Rights Reserved.</small></div>');

// ২. require_once দিয়ে Critical Config লোড (Array Return Pattern)
echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. require_once দিয়ে Config Array লোড</h4>";
$config = require_once __DIR__ . "/config.php";
echo "App Name: <b style='color:#38bdf8;'>" . $config["appName"] . "</b> | DB: <code style='color:#4ade80;'>" . $config["db"] . "</code><br>";

// ৩. Helper Functions ফাইল লোড
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. Helpers Functions লোড ও রি-ডিক্লেয়ারেশন সেফটি (_once)</h4>";
require_once __DIR__ . "/helpers.php";
require_once __DIR__ . "/helpers.php"; // _once থাকার কারণে কোনো Fatal Error হবে না!
echo "Price Format Call: <b style='color:#fbbf24;'>" . formatPrice(15250.75) . "</b><br>";

// ৪. include দিয়ে UI Components (Header / Footer) লোড
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. include দিয়ে UI Components রেন্ডার</h4>";
include __DIR__ . "/header.php";
echo "<p style='margin:10px 0;'>📄 <b>Main Content Area:</b> স্বাগতম হোম পেইজে! মডিউলার আর্কিটেকচারে কোড সহজে মেইনটেইন করা যায়।</p>";
include __DIR__ . "/includes_missing_banner.php"; // ফাইল না থাকলেও স্ক্রিপ্ট চালু থাকবে (Warning দেয়)
include __DIR__ . "/footer.php";

// ৫. Variable Scope ডেমো
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. Variable Scope Inheritance ডেমো</h4>";
$userName = "Abbad";
file_put_contents("scope_test.php", '<?php echo "<div style=\'color:#4ade80;\'>Hello, {$userName}! (Accessed from included file scope)</div>";');
include __DIR__ . "/scope_test.php";

// ক্লিনআপ
unlink("config.php");
unlink("helpers.php");
unlink("header.php");
unlink("footer.php");
unlink("scope_test.php");

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP-তে include এবং require স্টেটমেন্টের মাধ্যমে একটি ফাইলের কোড অন্য ফাইলে যুক্ত (import/load) করা যায়। এটি দিয়ে কনফিগারেশন, ডাটাবেজ কানেকশন, ফাংশন লাইব্রেরি ও UI কম্পোনেন্ট আলাদা মডিউলে ভাগ করে রাখা হয়। require ফাইলে সমস্যা হলে এক্সিকিউশন সাথে সাথে বন্ধ করে দেয় (Fatal Error), আর include কেবল Warning দিয়ে স্ক্রিপ্ট চালু রাখে।`,
      lessonSections: [
        {
          title: '১. include বনাম require এর মূল পার্থক্য ⭐⭐⭐',
          explanationBn: `include: নির্দিষ্ট ফাইল পাওয়া না গেলে E_WARNING দেয় কিন্তু স্ক্রিপ্ট চালু রাখে (অপশনাল UI কম্পোনেন্টের জন্য)। require: ফাইল না পাওয়া গেলে E_COMPILE_ERROR (Fatal Error) দিয়ে স্ক্রিপ্ট সম্পূর্ণ বন্ধ করে দেয় (ডাটাবেজ বা কোর কনফিগারেশনের জন্য)।`,
          code: `// Optional file
include "banner.php"; // missing হলেও বাকি পেজ চলবে

// Critical file
require "config.php"; // missing হলে স্ক্রিপ্ট সাথে সাথে স্টপ হবে`,
          outputPreview: `Warning: include(banner.php): Failed to open stream...`
        },
        {
          title: '২. include_once এবং require_once কেন ব্যবহার করবেন?',
          explanationBn: `যদি একই ফাংশন বা ক্লাস থাকা ফাইল দুবার require করা হয়, তাহলে PHP 'Cannot redeclare function' বা 'Cannot declare class' ফ্যাটাল এরর দিয়ে ক্র্যাশ করে। _once ভ্যারিয়েন্ট নিশ্চিত করে যে ফাইলটি পুরো এক্সিকিউশনে কেবল একবারই মেমরিতে লোড হবে।`,
          code: `require_once __DIR__ . "/functions.php";
require_once __DIR__ . "/functions.php"; // নিরাপদ, রি-লোড হবে না`,
          noteBn: `প্রোডাকশন প্রজেক্টে হেল্পার ও কনফিগারেশন ফাইলের জন্য সর্বদা require_once ব্যবহার করা উত্তম।`
        },
        {
          title: '৩. __DIR__ ম্যাজিক কনস্ট্যান্টের গুরুত্ব ⭐⭐⭐',
          explanationBn: `রিলেটিভ পাথ (যেমন "config.php" বা "../config.php") কারেন্ট ওয়ার্কিং ডিরেক্টরির ওপর নির্ভর করায় সাব-ফোল্ডার বা CLI থেকে স্ক্রিপ্ট চালালে ফাইল মিসিং এরর দেয়। __DIR__ ব্যবহার করলে ফাইল যে ডিরেক্টরিতে রয়েছে তার পরম (Absolute) পাথ পাওয়া যায়।`,
          code: `//  বেস্ট প্র্যাকটিস:
require_once __DIR__ . "/config/database.php";`,
          outputPreview: `Loaded: /var/www/app/config/database.php`
        },
        {
          title: '৪. Return Value Pattern (Modern Config Array)',
          explanationBn: `PHP ফাইলে সরাসরি অ্যারে বা কনফিগ ডেটা return করা যায়। index ফাইলে require কল করে সরাসরি সেই রিটার্ন ভ্যালু ভ্যারিয়েবলে অ্যাসাইন করা যায়। লারাভেল এবং সিম্ফনিতে এই প্যাটার্ন স্ট্যান্ডার্ড।`,
          code: `// config.php
return [
    'host' => 'localhost',
    'database' => 'shop_db',
    'user' => 'root'
];

// index.php
$config = require __DIR__ . '/config.php';
echo $config['database']; // shop_db`,
          outputPreview: `shop_db`
        },
        {
          title: '৫. Variable Scope ও Hidden Dependency',
          explanationBn: `যে স্কোপ থেকে include করা হয়, ইনক্লুডেড ফাইলটি সেই স্কোপের ভ্যারিয়েবল সরাসরি অ্যাক্সেস করতে পারে। তবে অতিরিক্ত গ্লোবাল ভ্যারিয়েবলের ওপর নির্ভরতা কোড রিফ্যাক্টরিং জটিল করে।`,
          code: `$name = "Abbad";
include "profile.php"; // profile.php তে $name দৃশ্যমান হবে`
        },
        {
          title: '৬. Security: LFI (Local File Inclusion) প্রতিরোধ ⚠️',
          explanationBn: `ইউজারের URL প্যারামিটার থেকে সরাসরি include ($_GET['page'] . '.php') করা মারাত্মক নিরাপত্তা ত্রুটি। অ্যাটাকার '../etc/passwd' বা সেনসিটিভ ফাইল ইনক্লুড করতে পারে। সর্বদা হোয়াইটলিস্ট অ্যারে ব্যবহার করুন।`,
          code: `// ❌ অত্যন্ত বিপজ্জনক
include $_GET['page'] . '.php';

//  নিরাপদ হোয়াইটলিস্ট প্যাটার্ন
$allowedPages = [
    'home' => 'home.php',
    'about' => 'about.php',
    'contact' => 'contact.php'
];

$page = $_GET['page'] ?? 'home';
if (isset($allowedPages[$page])) {
    include __DIR__ . '/views/' . $allowedPages[$page];
} else {
    http_response_code(404);
    echo "Page not found";
}`
        },
        {
          title: '৭. Modern PHP & Composer Autoloading Perspective',
          explanationBn: `আধুনিক PHP প্রজেক্ট ও Laravel-এ প্রতিটি ক্লাসের জন্য ম্যানুয়ালি require_once লিখতে হয় না। Composer PSR-4 Autoloader ব্যবহার করে নেমস্পেস ও ফাইলপাথ স্বয়ংক্রিয়ভাবে লোড করে।`,
          code: `// composer.json
// "autoload": { "psr-4": { "App\\\\": "src/" } }

require_once __DIR__ . '/vendor/autoload.php';

use App\\Models\\User;
$user = new User(); // অটোমেটিক src/Models/User.php লোড হবে`
        }
      ],
      keyPointsBn: [
        'Critical ফাইল (Database, Core Config) এর জন্য require_once ব্যবহার করুন।',
        'Optional UI কম্পোনেন্ট (Banner, Widget) এর জন্য include ব্যবহার করুন।',
        'পাথ কনফ্লিক্ট এড়াতে সর্বদা __DIR__ ব্যবহার করুন (যেমন: require_once __DIR__ . "/file.php")।',
        'রি-ডিক্লেয়ারেশন এরর প্রতিরোধে ফাংশন ও ক্লাস লোড করার জন্য _once ভ্যারিয়েন্ট আবশ্যক।',
        'ইউজার ইনপুট দিয়ে ডাইনামিক include করার সময় অবশ্যই Whitelist ভ্যালিডেশন করুন (LFI প্রতিরোধ)।',
        'আধুনিক পিএইচপিতে ম্যানুয়াল require-এর বদলে Composer PSR-4 Autoloading স্ট্যান্ডার্ড।'
      ],
      practiceExamples: [
        {
          title: 'নিরাপদ মডিউলার রাউটার আর্কিটেকচার',
          descriptionBn: 'হোয়াইটলিস্ট ভ্যালিডেশন এবং __DIR__ ব্যবহার করে ফ্রন্ট কন্ট্রোলার তৈরি।',
          code: `<?php
$routes = [
    '/' => 'home.php',
    '/products' => 'products.php',
    '/cart' => 'cart.php'
];

$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$file = $routes[$uri] ?? '404.php';

if (file_exists(__DIR__ . "/views/" . $file)) {
    require_once __DIR__ . "/views/" . $file;
} else {
    echo "View not found";
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: রিলেটিভ পাথ, include দিয়ে ডাটাবেজ লোড ও ডাইনামিক LFI ঝুঁকি
include "config.php"; // ফাইল না পেলেও স্ক্রিপ্ট চালু থেকে পরবর্তী লাইনে ক্র্যাশ করবে
include "helpers.php"; 
include "helpers.php"; // Fatal error: Cannot redeclare function!

// ডাইনামিক LFI ঝুকি
$view = $_GET['view'];
include $view . ".php";`,
        juniorProblems: [
          'include "config.php" ব্যবহারের ফলে কনফিগ মিসিং হলেও স্ক্রিপ্ট চলতে গিয়ে ডাটাবেজ কুয়েরি লাইনে মারাত্মক এরর তৈরি করে।',
          'রিলেটিভ পাথের কারণে ভিন্ন ফোল্ডার থেকে ফাইল কল করলে 404 পাথ এরর দেয়।',
          'helpers.php দুবার লোড হয়ে ফাংশন রি-ডিক্লেয়ারেশন ফ্যাটাল এরর ঘটে।',
          'ডাইনামিক ইনক্লুশনে LFI ভালনারেবিলিটি তৈরি হয়।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: require_once, __DIR__, হোয়াইটলিস্ট ও কনফিগ রিটার্ন
$config = require_once __DIR__ . "/config/app.php";
require_once __DIR__ . "/helpers/formatters.php";

$allowedViews = [
    'dashboard' => 'views/dashboard.php',
    'settings' => 'views/settings.php'
];

$viewKey = $_GET['view'] ?? 'dashboard';
$viewFile = $allowedViews[$viewKey] ?? 'views/404.php';

include_once __DIR__ . "/" . $viewFile;`,
        seniorBenefits: [
          '__DIR__ ব্যবহারের ফলে পাথ সবসময় এবসলিউট ও নিরাপদ থাকে।',
          'require_once এর ফলে ডুপ্লিকেট লোডিং এবং ফাংশন ডিক্লেয়ারেশন কনফ্লিক্ট শূন্যে নেমে আসে।',
          'হোয়াইটলিস্ট ম্যাপিং সিস্টেমকে LFI অ্যাটাক থেকে সম্পূর্ণ নিরাপদ রাখে।'
        ],
        architectAdvice: 'প্রোডাকশনে ম্যানুয়াল include ফাইলের পরিমাণ ন্যূনতম রাখুন। বিজনেস লজিক এবং ক্লাসের জন্য Composer PSR-4 অটোলোডিং ব্যবহার করুন এবং কনফিগ ফাইলের জন্য রিটার্ন অ্যারে প্যাটার্ন ফলো করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'ZEND_INCLUDE_OR_EVAL (type: ZEND_REQUIRE_ONCE / ZEND_INCLUDE)',
          'zend_compile_file() -> Compiles AST into op_array',
          'EG(included_files) hash table check for _once'
        ],
        explanationBn: `Zend Engine-এ যখন require_once এক্সিকিউট হয়, ইঞ্জিন প্রথমে 'EG(included_files)' নামক ইন্টারনাল হ্যাশ টেবিলে চেক করে ফাইলটির রিয়েলপাথ ইতোমধ্যে রেজিস্টার্ড আছে কিনা। যদি থাকে, ইঞ্জিন সরাসরি নো-অপ (NO-OP) রিটার্ন করে। না থাকলে zend_compile_file() এর মাধ্যমে অপকোড কম্পাইল করে মূল অপকোড অ্যারেতে ইনজেক্ট করে।`
      },
      security: {
        vulnerabilityType: 'Local File Inclusion (LFI) & Remote File Inclusion (RFI)',
        attackVectorBn: 'include $_GET["page"] এর মাধ্যমে অ্যাটাকার "../../../../etc/passwd" অথবা "data://text/plain;base64,..." ব্যবহার করে আরবিট্রারি কোড এক্সিকিউট করতে পারে।',
        preventionRuleBn: 'কখনোই ক্লায়েন্ট ইনপুট দিয়ে সরাসরি ফাইল পাথ কনক্যাট করবেন না। অলওয়েজ স্ট্যাটিক হোয়াইটলিস্ট বা basename() স্যানিটাইজেশন নিশ্চিত করুন। allow_url_include = Off কনফিগার করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'require হলো ভবনের মূল পিলার—এটা মিসিং হলে পুরো বিল্ডিং ধসে পড়বে (ফ্যাটাল এরর)। include হলো রুমের ডেকোরেশন বা ব্যানার—এটা মিসিং হলেও বিল্ডিং দাঁড়িয়ে থাকবে (ওয়ার্নিং)।',
      beginnerSteps: [
        {
          step: 1,
          title: 'include বনাম require বুঝুন',
          explanationBn: 'অপশনাল ফাইলের জন্য include এবং আবশ্যক ফাইলের জন্য require ব্যবহার করুন।'
        },
        {
          step: 2,
          title: '_once এর নিরাপত্তা',
          explanationBn: 'একই ফাইল বারংবার লোড হয়ে যাতে ফাংশন কনফ্লিক্ট না হয় সেজন্য require_once ও include_once ব্যবহার করুন।'
        },
        {
          step: 3,
          title: '__DIR__ পাথ ব্যবহার করুন',
          explanationBn: 'সবসময় require_once __DIR__ . "/path/to/file.php" লিখুন।'
        }
      ],
      trainerSecretsBn: [
        'কনফিগ ফাইল থেকে সরাসরি return [ ... ]; ব্যবহার করুন এবং ভ্যারিয়েবলে রিসিভ করুন।',
        'Composer vendor/autoload.php ব্যবহার করে ম্যানুয়াল require থেকে মুক্ত থাকুন।'
      ],
      commonGotchasBn: [
        'ভুল: রিলেটিভ পাথ ব্যবহার করে সাব-ফোল্ডার থেকে রান করলে ফাইল পায় না।',
        'ভুল: require এর বদলে include দিলে ডাটাবেজ ফেইল করলে অ্যাপ পরবর্তী লাইনে ক্র্যাশ করে বিভ্রান্তি বাড়ায়।'
      ],
      interviewQuestions: [
        {
          questionBn: 'include এবং require এর মধ্যে পার্থক্য কী? কোনটি কখন ব্যবহার করবেন?',
          answerBn: 'include ফাইল না পেলে Warning দেয় এবং স্ক্রিপ্ট চালু রাখে, আর require ফাইল না পেলে Fatal Error দিয়ে সাথে সাথে স্ক্রিপ্ট থামিয়ে দেয়। ডাটাবেজ, কনফিগ বা কোর ক্লাসের মতো ক্রিটিক্যাল ডিপেন্ডেন্সির জন্য require এবং ব্যানার, অপশনাল উইজেটের জন্য include ব্যবহার করা হয়।',
          seniorTipBn: '_once ভ্যারিয়েন্টের EG(included_files) হ্যাশটেবিল চেকিং এবং কম্পোজার অটোলোডিংয়ের রেফারেন্স দিলে ইন্টারভিউয়ার মুগ্ধ হবেন।'
        }
      ],
      studentChallenge: {
        title: 'নিরাপদ লেআউট সিস্টেম তৈরি',
        taskBn: '__DIR__ এবং require_once ও include ব্যবহার করে একটি হেডার, ফুটার এবং কনফিগ অ্যারে লোড করার স্ক্রিপ্ট লিখুন।',
        hintBn: 'require_once __DIR__ . "/config.php" এবং include __DIR__ . "/header.php" ব্যবহার করুন।',
        starterCode: `<?php
// কনফিগ ও লেআউট মডিউল তৈরি ও লোড করুন
`,
        solutionCode: `<?php
$config = ['siteTitle' => 'My PHP App'];
echo "Header Loaded: " . $config['siteTitle'] . "<br>";
echo "Main Body Content<br>";
echo "Footer Loaded";
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Modular System: Include & Require',
          subtitle: 'Building Scalable Codebases',
          bulletPoints: [
            'include: Non-critical files (Warning on failure)',
            'require: Mission-critical dependencies (Fatal Error on failure)',
            '_once variants prevent function redeclaration errors',
            'Always use __DIR__ for absolute path safety'
          ],
          trainerSpeechNotes: 'Never use raw relative paths. __DIR__ ensures your code works across any environment or CLI invocation.',
          analogyOrHighlight: 'require = Foundation Pillars | include = Interior Decor'
        }
      ]
    }
  },
  {
    id: 'php-file-handling',
    title: 'PHP File Handling',
    category: 'advanced',
    tag: 'Filesystem, CSV, JSON & Storage',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'file_exists(), file_get_contents(), file_put_contents(), CSV ইমপোর্ট/এক্সপোর্ট, JSON স্টোরেজ, unlink() ও সিকিউর ফাইল ম্যানেজমেন্ট।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Complete File Handling Sandbox</h2>";

// ১. ফাইল তৈরি ও অস্তিত্ব পরীক্ষা
echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. File Exists & Simple Write</h4>";
$docPath = "app_demo.txt";
file_put_contents($docPath, "Hello from PHP File System!\nLearning File Handling.\n");

if (file_exists($docPath)) {
    echo "Status: <span style='color:#4ade80;'>✓ File exists</span><br>";
    echo "Size: <code style='color:#38bdf8;'>" . filesize($docPath) . " bytes</code><br>";
    echo "Last Modified: <code style='color:#fbbf24;'>" . date("Y-m-d H:i:s", filemtime($docPath)) . "</code><br>";
}

// ২. Append ও Read
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. Append Mode (FILE_APPEND) & Read</h4>";
file_put_contents($docPath, "Appended timestamp: " . date("H:i:s") . "\n", FILE_APPEND | LOCK_EX);
$content = file_get_contents($docPath);
echo "<pre style='background:#1e293b; padding:10px; border-radius:6px; color:#94a3b8; margin:5px 0;'>" . htmlspecialchars($content) . "</pre>";

// ৩. Real-World CSV Write & Read (Products Export/Import)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. Real-World CSV Processing (fputcsv / fgetcsv)</h4>";
$csvFile = "products.csv";
$csvHandle = fopen($csvFile, "w");
fputcsv($csvHandle, ["Product", "Price", "Stock"]);
fputcsv($csvHandle, ["Mechanical Keyboard", 3500, 12]);
fputcsv($csvHandle, ["Wireless Mouse", 1200, 45]);
fputcsv($csvHandle, ["USB-C Hub", 1850, 20]);
fclose($csvHandle);

// Read CSV
echo "<table style='width:100%; border-collapse:collapse; background:#1e293b; border-radius:6px; overflow:hidden; font-size:14px;'>";
echo "<tr style='background:#334155; color:#38bdf8; text-align:left;'><th style='padding:8px;'>পণ্য</th><th style='padding:8px;'>মূল্য</th><th style='padding:8px;'>স্টক</th></tr>";
$readHandle = fopen($csvFile, "r");
$headerSkipped = false;
while (($row = fgetcsv($readHandle)) !== false) {
    if (!$headerSkipped) { $headerSkipped = true; continue; }
    echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:8px; color:#f8fafc;'>{$row[0]}</td><td style='padding:8px; color:#4ade80;'>৳" . number_format($row[1], 2) . "</td><td style='padding:8px; color:#fbbf24;'>{$row[2]} pcs</td></tr>";
}
fclose($readHandle);
echo "</table>";

// ৪. JSON File Handling (User State / Config)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. JSON File Storage (json_encode / json_decode)</h4>";
$jsonPath = "user_settings.json";
$userData = [
    "user" => "Abbad",
    "theme" => "dark",
    "permissions" => ["read", "write", "upload"],
    "lastLogin" => date("Y-m-d H:i:s")
];
file_put_contents($jsonPath, json_encode($userData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
$retrieved = json_decode(file_get_contents($jsonPath), true);
echo "Retrieved User: <b style='color:#38bdf8;'>" . $retrieved["user"] . "</b> | Role permissions: <code style='color:#4ade80;'>" . implode(", ", $retrieved["permissions"]) . "</code><br>";

// ৫. Rename / Move & Unlink (Cleanup)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৫. Rename & Safe Deletion (unlink)</h4>";
rename($docPath, "archived_demo.txt");
if (file_exists("archived_demo.txt")) {
    echo "File renamed successfully to archived_demo.txt<br>";
    unlink("archived_demo.txt");
    unlink($csvFile);
    unlink($jsonPath);
    echo "All temporary demo files safely unlinked (deleted).<br>";
}

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP দিয়ে সার্ভার ফাইল সিস্টেমে ফাইল তৈরি (Create), পড়া (Read), লেখা (Write), আপডেট (Update), ডিলিট (Delete) এবং ফরম্যাটিং (CSV/JSON) সম্পন্ন করা যায়। ছোট ও মাঝারি ফাইলের ক্ষেত্রে file_get_contents() এবং file_put_contents() সবচেয়ে দ্রুত ও সুবিধাজনক। বড় ফাইলের ক্ষেত্রে fopen() স্ট্রিম দিয়ে লাইন-বাই-লাইন প্রসেস করা হয় মেমরি এক্সহশন এড়াতে।`,
      lessonSections: [
        {
          title: '১. ফাইল উপস্থিতি ও মেটাডাটা চেক (file_exists, filesize, filemtime)',
          explanationBn: `ফাইল রিড বা ডিলিটের পূর্বে file_exists() দিয়ে অস্তিত্ব চেক করা আবশ্যক। filesize() মোট বাইট প্রদান করে এবং filemtime() সর্বশেষ পরিবর্তনের Unix টাইমস্ট্যাম্প প্রদান করে।`,
          code: `if (file_exists("data.txt")) {
    echo "সাইজ: " . filesize("data.txt") . " bytes\\n";
    echo "মডিফাইড: " . date("Y-m-d H:i:s", filemtime("data.txt"));
}`,
          outputPreview: `সাইজ: 45 bytes\nমডিফাইড: 2026-09-16 08:45:10`
        },
        {
          title: '২. file_put_contents() ও file_get_contents() ⭐⭐⭐',
          explanationBn: `ফাইল তৈরি বা ওভাররাইট করতে file_put_contents($path, $content) ব্যবহৃত হয়। অ্যাপেন্ড করতে FILE_APPEND ফ্ল্যাগ এবং কনকারেন্ট রাইট সেফটির জন্য LOCK_EX ব্যবহার করা হয়। একবারে পুরো ফাইল পড়তে file_get_contents() সবচেয়ে জনপ্রিয়।`,
          code: `// Write / Overwrite
file_put_contents("data.txt", "Hello PHP\\n");

// Append with Lock
file_put_contents("data.txt", "New line\\n", FILE_APPEND | LOCK_EX);

// Read
$content = file_get_contents("data.txt");
echo $content;`,
          outputPreview: `Hello PHP\nNew line`
        },
        {
          title: '৩. CSV ফাইল হ্যান্ডলিং (fputcsv / fgetcsv) ⭐⭐⭐',
          explanationBn: `ই-কমার্স ও বিজনেস রিপোর্টে CSV ইমপোর্ট-এক্সপোর্টের জন্য fgetcsv() ও fputcsv() ব্যবহৃত হয়। এটি স্বয়ংক্রিয়ভাবে কমা, কোটেশন ও নিউলাইন নিরাপদে ফরম্যাট করে।`,
          code: `// Write CSV
$fp = fopen("products.csv", "w");
fputcsv($fp, ["Mouse", 500]);
fputcsv($fp, ["Keyboard", 1200]);
fclose($fp);

// Read CSV
$fp = fopen("products.csv", "r");
while (($row = fgetcsv($fp)) !== false) {
    echo "Name: {$row[0]}, Price: {$row[1]}\\n";
}
fclose($fp);`,
          outputPreview: `Name: Mouse, Price: 500\nName: Keyboard, Price: 1200`
        },
        {
          title: '৪. JSON ফাইল হ্যান্ডলিং (json_encode / json_decode)',
          explanationBn: `ডাটা অ্যারে ফাইল সিস্টেমে সেভ করতে json_encode() এবং রিড করে পিএইচপি অ্যারেতে রূপান্তর করতে json_decode($data, true) ব্যবহার করা হয়।`,
          code: `$data = ["name" => "Abbad", "age" => 25];
file_put_contents("user.json", json_encode($data, JSON_PRETTY_PRINT));

$decoded = json_decode(file_get_contents("user.json"), true);
echo $decoded["name"]; // Abbad`,
          outputPreview: `Abbad`
        },
        {
          title: '৫. ফাইল রিনেম, মুভ ও ডিলিট (rename, unlink)',
          explanationBn: `unlink($path) দিয়ে ফাইল পার্মানেন্ট ডিলিট করা হয়। rename($old, $new) দিয়ে ফাইলের নাম পরিবর্তন বা অন্য ডিরেক্টরিতে স্থানান্তর করা যায়।`,
          code: `if (file_exists("old.txt")) {
    rename("old.txt", "storage/new.txt"); // Rename & Move
}

if (file_exists("temp.txt")) {
    unlink("temp.txt"); // Delete
}`
        },
        {
          title: '৬. ডিরেক্টরি তৈরি ও ভ্যালিডেশন (mkdir, is_dir, is_file)',
          explanationBn: `ডিরেক্টরি না থাকলে রিকার্সিভ মোডে তৈরি করতে mkdir($dir, 0755, true) ব্যবহার করা হয়। is_dir() ডিরেক্টরি এবং is_file() সাধারণ ফাইল কিনা তা যাচাই করে।`,
          code: `if (!is_dir("uploads/reports")) {
    mkdir("uploads/reports", 0755, true); // true = recursive parent creation
}`
        },
        {
          title: '৭. File Upload এবং Path Security ⚠️⭐⭐⭐',
          explanationBn: `ইউজার আপলোডেড ফাইল কখনোই সরাসরি $_FILES["name"] পাথে সেভ করবেন না। random_bytes() দিয়ে ইউনিক নাম দিন, finfo দিয়ে MIME টাইপ ভ্যালিডেট করুন এবং move_uploaded_file() ব্যবহার করুন।`,
          code: `$extension = strtolower(pathinfo($_FILES['img']['name'], PATHINFO_EXTENSION));
$allowed = ['jpg', 'jpeg', 'png', 'webp'];

if (in_array($extension, $allowed, true) && $_FILES['img']['size'] <= 2 * 1024 * 1024) {
    $safeName = bin2hex(random_bytes(16)) . '.' . $extension;
    move_uploaded_file($_FILES['img']['tmp_name'], "uploads/" . $safeName);
}`
        }
      ],
      keyPointsBn: [
        'ছোট ফাইল রিড-রাইটের জন্য file_get_contents() ও file_put_contents() সেরা।',
        'বড় ফাইল বা স্ট্রিমের জন্য fopen() + fgets() / fread() ব্যবহার করুন মেমরি সেভ করতে।',
        'লগ ফাইলে একাধিক রাইটার কনফ্লিক্ট এড়াতে FILE_APPEND | LOCK_EX ফ্ল্যাগ ব্যবহার করুন।',
        'CSV প্রসেসিংয়ে fgetcsv() এবং fputcsv() ব্যবহার করা ইন্ডাস্ট্রির স্ট্যান্ডার্ড।',
        'ফাইল ডিলিট করতে unlink() এবং স্থানান্তরে rename() ব্যবহৃত হয়।',
        'ইউজার ইনপুটের ফাইলপাথ অন্ধভাবে বিশ্বাস করবেন না; পাথ ট্রাভার্সাল ঠেকাতে হোয়াইটলিস্ট ও basename() ব্যবহার করুন।'
      ],
      practiceExamples: [
        {
          title: 'অটোমেটেড ডেইলি লগ রোটেশন সিস্টেম',
          descriptionBn: 'তারিখ অনুযায়ী স্বয়ংক্রিয় লগ ফাইল তৈরি ও মেসেজ অ্যাপেন্ড।',
          code: `<?php
function logEvent(string $message): void {
    $logDir = __DIR__ . "/storage/logs";
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }
    $logFile = $logDir . "/app-" . date("Y-m-d") . ".log";
    $entry = "[" . date("Y-m-d H:i:s") . "] " . $message . PHP_EOL;
    file_put_contents($logFile, $entry, FILE_APPEND | LOCK_EX);
}

logEvent("User logged in successfully: ID #1042");
echo "Logged successfully!";
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: মেমরি লোড ও অসংরক্ষিত ইউজার ফাইলনেম
$data = file_get_contents($_GET['file']); // Path traversal: ../../etc/passwd!
$csv = explode("\\n", $data); // বড় ফাইলে মেমরি ওভারফ্লো (Fatal Error)

// ইউজারের আপলোড করা ফাইলনেম সরাসরি ব্যবহার
move_uploaded_file($_FILES['img']['tmp_name'], "uploads/" . $_FILES['img']['name']);`,
        juniorProblems: [
          '$_GET["file"] সরাসরি দেওয়ায় অ্যাটাকার পাথ ট্রাভার্সাল চালিয়ে সার্ভারের কনফিগারেশন ফাইল পড়তে পারে।',
          'বড় CSV ফাইলে file_get_contents() দিয়ে মেমরি লিমিট (memory_limit) অতিক্রম করে ক্র্যাশ করে।',
          'ইউজারের দেওয়া নাম সরাসরি সেভ করায় শেল স্ক্রিপ্ট (shell.php) আপলোড হয়ে সার্ভার হ্যাক হতে পারে।'
        ],
        seniorCode: `//  সিনিয়র অ্যাপ্রোচ: হোয়াইটলিস্ট, স্ট্রিম হ্যান্ডলার ও র্যান্ডম ইউনিক নাম
$safeDir = realpath(__DIR__ . "/storage/public");
$userFile = basename($_GET['file'] ?? 'default.txt');
$targetPath = $safeDir . DIRECTORY_SEPARATOR . $userFile;

// স্ট্রিম দিয়ে লাইন বাই লাইন মেমরি সেফ রিড
if (file_exists($targetPath) && str_starts_with(realpath($targetPath), $safeDir)) {
    $handle = fopen($targetPath, 'r');
    while (($line = fgets($handle)) !== false) {
        // Process chunk safely
    }
    fclose($handle);
}`,
        seniorBenefits: [
          'realpath() ও str_starts_with() দিয়ে পাথ ট্রাভার্সাল শতভাগ ব্লক হয়।',
          'স্ট্রিম প্রসেসিংয়ের ফলে ১০০ মেগাবাইট বা ১ জিবি ফাইলও মাত্র কয়েক কিলোবাইট মেমরিতে প্রসেস করা যায়।',
          'bin2hex(random_bytes(16)) দিয়ে ফাইল রিনেম করায় ডুপ্লিকেট ও এক্সিকিউটেবল অ্যাটাক প্রতিরোধ হয়।'
        ],
        architectAdvice: 'স্টোরেজ ফোল্ডারকে সবসময় ওয়েব রুট (public_html) এর বাইরে রাখুন। ইউজারকে সরাসরি ফাইলের স্ট্যাটিক ইউআরএল না দিয়ে কন্ট্রোলারের মাধ্যমে স্ট্রিম বা ক্লাউড স্টোরেজ (S3/GCS) সাইনড ইউআরএল দিয়ে ডাউনলোড করান।'
      },
      zendInternals: {
        opcodesSummary: [
          'DO_FCALL -> php_strm_open_wrapper_ex()',
          'php_stream_read() / php_stream_write() with OS File Descriptor',
          'flock() system call for LOCK_EX'
        ],
        explanationBn: `PHP-র ফাইল অপারেশন মূলত Zend Engine-এর শক্তিশালী 'PHP Streams API' এর ওপর নির্মিত। যখন file_get_contents() বা fopen() কল করা হয়, সি লেভেলে 'php_stream' স্ট্রাকচার তৈরি হয় যা অপারেটিং সিস্টেমের ফাইল ডেসক্রিপ্টর (fd), রিড/রাইট বাফার এবং প্রোটোকল র‍্যাপার (file://, php://, http://) হ্যান্ডেল করে। LOCK_EX দিলে ইঞ্জিন সরাসরি কার্নেলের flock() সিস্টেম কল ইনভোক করে এক্সক্লুসিভ লক নিশ্চিত করে।`
      },
      security: {
        vulnerabilityType: 'Arbitrary File Overwrite & Path Traversal (CWE-22)',
        attackVectorBn: 'ফাইলনেমে "../../" বা নাল বাইট (%00) পাস করে অ্যাটাকার /etc/passwd বা .env ফাইল ওভাররাইট বা রিড করতে পারে।',
        preventionRuleBn: 'ফাইল পাথে সর্বদা basename() ব্যবহার করুন, realpath() দিয়ে অনুমোদিত স্টোরেজ ডিরেক্টরির বাইরে যাওয়া ব্লক করুন এবং আপলোডেড ফাইলে এক্সিকিউট পারমিশন বন্ধ (chmod 0644) রাখুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'file_get_contents() হলো পুরো খবরের কাগজ এক নিঃশ্বাসে পড়া। আর fopen()+fgets() হলো এক লাইন এক লাইন করে পড়া যাতে মাথা ভারী (মেমরি ফুল) না হয়ে যায়।',
      beginnerSteps: [
        {
          step: 1,
          title: 'file_exists ও সাইজ চেক',
          explanationBn: 'ফাইল পড়ার আগে file_exists() দিয়ে চেক করুন।'
        },
        {
          step: 2,
          title: 'সহজ রিড ও রাইট',
          explanationBn: 'file_put_contents() দিয়ে লিখুন এবং file_get_contents() দিয়ে পড়ুন।'
        },
        {
          step: 3,
          title: 'CSV ও JSON হ্যান্ডলিং',
          explanationBn: 'টেবুলার ডেটার জন্য fgetcsv() এবং অবজেক্টের জন্য json_encode/decode ব্যবহার করুন।'
        }
      ],
      trainerSecretsBn: [
        'লগ ফাইলে সবসময় FILE_APPEND | LOCK_EX ফ্ল্যাগ ব্যবহার করুন।',
        'বড় CSV ফাইল প্রসেসে fgets() বা fgetcsv() মেমরি এক্সহশন ঠেকায়।'
      ],
      commonGotchasBn: [
        'ভুল: FILE_APPEND ছাড়া file_put_contents() দিলে আগের সব ডেটা মুছে যায়।',
        'ভুল: fclose() না করলে ব্যাকগ্রাউন্ডে রিসোর্স লিক হয়ে সার্ভার স্লো হতে পারে।'
      ],
      interviewQuestions: [
        {
          questionBn: 'file_get_contents() এবং fopen() এর মধ্যে প্রধান পার্থক্য কী?',
          answerBn: 'file_get_contents() পুরো ফাইলকে একবারে মেমরিতে লোড করে স্ট্রিং রিটার্ন করে, যা ছোট ফাইলের জন্য দ্রুত। কিন্তু ২০+ মেগাবাইটের বড় ফাইলে fopen() ও fgets()/fread() দিয়ে স্ট্রিম আকারে অল্প মেমরি ব্যবহার করে চাঙ্ক প্রসেসিং করতে হয়।',
          seniorTipBn: 'PHP Streams API এবং memory_limit এক্সহশন এড়ানোর কথা উল্লেখ করলে ইন্টারভিউয়ারের আস্থা বহুগুণ বাড়বে।'
        }
      ],
      studentChallenge: {
        title: 'CSV এক্সপোর্ট ও সামারি ক্যালকুলেটর',
        taskBn: 'PHP দিয়ে ৩ জন কর্মচারীর নাম ও বেতনের একটি CSV ফাইল তৈরি করুন, তারপর তা পড়ে মোট কত টাকা বেতন দিতে হবে তা হিসাব করে স্ক্রিনে দেখান।',
        hintBn: 'fputcsv() দিয়ে লিখুন, তারপর fopen("...", "r") এবং fgetcsv() দিয়ে পড়ে যোগফল বের করুন।',
        starterCode: `<?php
// কর্মচারীদের বেতন দিয়ে CSV তৈরি ও মোট যোগফল নির্ণয় করুন
`,
        solutionCode: `<?php
$file = "payroll.csv";
$fp = fopen($file, "w");
fputcsv($fp, ["Name", "Salary"]);
fputcsv($fp, ["Rahim", 45000]);
fputcsv($fp, ["Karim", 55000]);
fputcsv($fp, ["Fatima", 60000]);
fclose($fp);

$fp = fopen($file, "r");
$total = 0;
$header = true;
while (($row = fgetcsv($fp)) !== false) {
    if ($header) { $header = false; continue; }
    $total += (float)$row[1];
}
fclose($fp);
unlink($file);

echo "মোট বেতন বিল: ৳" . number_format($total, 2);
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP File Handling Architecture',
          subtitle: 'From Local Storage to Enterprise Data Streams',
          bulletPoints: [
            'file_put_contents & file_get_contents for rapid I/O',
            'CSV Streaming with fgetcsv() & fputcsv()',
            'JSON state persistence with JSON_PRETTY_PRINT',
            'Safe deletion with unlink() and concurrency locking with LOCK_EX'
          ],
          trainerSpeechNotes: 'File handling is foundational for log management, CSV data pipelines, and export generation in enterprise apps.',
          analogyOrHighlight: 'file_get_contents = Instant snapshot | fopen = Continuous stream pipeline'
        }
      ]
    }
  },
  {
    id: 'php-file-open-read',
    title: 'PHP File Open & Read',
    category: 'advanced',
    tag: 'File Streams & Buffering',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'fopen() হ্যান্ডলার, "r", "r+" মোড, fgets() লাইন রিড, fread() বাফার, feof(), fclose() এবং সার্ভার লগ ফিল্টারিং।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP File Open & Read (Stream Architecture)</h2>";

// ১. ডেমো লগ ফাইল প্রস্তুত
$logFile = "server_activity.log";
file_put_contents($logFile, "[2026-09-16 10:00:01] INFO: User #101 Login success\n[2026-09-16 10:02:15] ERROR: Database connection timeout on node-2\n[2026-09-16 10:05:40] WARNING: Memory usage reached 85%\n[2026-09-16 10:08:12] ERROR: Payment gateway unhandled 504 gateway timeout\n[2026-09-16 10:10:00] INFO: User #102 Order placed successfully\n");

// ২. fopen() দিয়ে হ্যান্ডলার তৈরি ও এরর হ্যান্ডলিং
echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. fopen() Stream Handle & Error Handling</h4>";
$handle = fopen($logFile, "r");
if ($handle === false) {
    echo "<span style='color:#f43f5e;'>❌ Failed to open file!</span><br>";
} else {
    echo "Stream Resource: <code style='color:#4ade80;'>stream handle active (" . get_resource_type($handle) . ")</code><br>";
    
    // ৩. fgets() দিয়ে সিঙ্গেল লাইন রিড
    echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. fgets() - First Single Line</h4>";
    $firstLine = fgets($handle);
    echo "Line 1: <code style='color:#38bdf8;'>" . htmlspecialchars($firstLine) . "</code><br>";
    
    // ৪. feof() ও while লুপ দিয়ে পুরো ফাইল লাইন বাই লাইন রিড এবং ERROR ফিল্টার
    echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. Real-World Log Stream Processing (ERROR Filter)</h4>";
    echo "<div style='background:#1e293b; padding:12px; border-radius:6px; font-family:monospace; font-size:13px;'>";
    $errorCount = 0;
    while (($line = fgets($handle)) !== false) {
        if (str_contains($line, "ERROR")) {
            $errorCount++;
            echo "<div style='color:#f43f5e; padding:2px 0;'>🚨 " . htmlspecialchars($line) . "</div>";
        } elseif (str_contains($line, "WARNING")) {
            echo "<div style='color:#fbbf24; padding:2px 0;'>⚠️ " . htmlspecialchars($line) . "</div>";
        }
    }
    echo "</div>";
    echo "Total Critical Errors Detected: <b style='color:#f43f5e;'>{$errorCount}</b><br>";
    
    // ৫. fclose() রিসোর্স বন্ধ করা
    fclose($handle);
    echo "<small style='color:#94a3b8;'>✓ File stream successfully closed with fclose().</small><br>";
}

// ৬. fread() দিয়ে নির্দিষ্ট বাইট রিড
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. fread() - Specific Byte Chunk Reading</h4>";
$fp = fopen($logFile, "r");
if ($fp) {
    $chunk = fread($fp, 50); // প্রথম ৫০ বাইট
    echo "First 50 Bytes Chunk: <code style='color:#fbbf24;'>" . htmlspecialchars($chunk) . "...</code><br>";
    fclose($fp);
}

// ক্লিনআপ
unlink($logFile);

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP-তে বড় ফাইল যেমন লগ ফাইল, সিস্টেম ডাটা ডাম্প বা বড় CSV মেমরি বাঁচিয়ে পড়ার জন্য fopen(), fgets(), fread() এবং fclose() এর স্ট্রিম পাইপলাইন ব্যবহৃত হয়। এটি পুরো ফাইলকে একবারে র‍্যামে না এনে কার্নেল বাফার থেকে লাইন বা নির্দিষ্ট বাইট অনুযায়ী চাঙ্ক আকারে প্রসেস করে।`,
      lessonSections: [
        {
          title: '১. fopen() এবং Read Mode "r" ⭐⭐⭐',
          explanationBn: `fopen("filename", "r") ফাইলটিকে রিড-অনলি মোডে খোলে এবং একটি ফাইল পয়েন্টার (Resource stream) রিটার্ন করে। ফাইলটি আগে থেকেই বিদ্যমান থাকতে হবে, অন্যথায় এটি false রিটার্ন করে।`,
          code: `$file = fopen("data.txt", "r");
if ($file === false) {
    die("Unable to open file!");
}`,
          noteBn: `প্রোডাকশন কোডে সবসময় $file === false চেক করে এরর হ্যান্ডল করা আবশ্যক।`
        },
        {
          title: '২. fgets() দিয়ে এক লাইন এবং সম্পূর্ণ ফাইল লাইন-বাই-লাইন পড়া ⭐⭐⭐',
          explanationBn: `fgets() একবারে ঠিক একটি লাইন (নিউলাইন ক্যারেক্টার \\n পর্যন্ত) পড়ে। while (($line = fgets($file)) !== false) প্যাটার্নটি মেমরি বাঁচিয়ে জিগাবাইট আকারের ফাইল পড়ার স্ট্যান্ডার্ড।`,
          code: `$file = fopen("app.log", "r");
while (($line = fgets($file)) !== false) {
    echo $line;
}
fclose($file);`,
          outputPreview: `[2026-09-16 10:00:01] INFO: App started`
        },
        {
          title: '৩. fread() এবং নির্দিষ্ট বাইট রিড',
          explanationBn: `নির্দিষ্ট সাইজের বাইট পড়তে fread($handle, $length) ব্যবহৃত হয়। হেডারের মেটাডাটা বা ফিক্সড-উইডথ বাইনারি ফাইল প্রসেসিংয়ে এটি ব্যবহার করা হয়।`,
          code: `$file = fopen("data.txt", "r");
$chunk = fread($file, 100); // ১০০ বাইট
fclose($file);`,
          outputPreview: `First 100 bytes...`
        },
        {
          title: '৪. feof() ও ফাইল সমাপ্তি চেক',
          explanationBn: `feof() ফাইল পয়েন্টার ফাইলের শেষ প্রান্তে (End of File) পৌঁছেছে কিনা তা boolean রিটার্ন করে।`,
          code: `$file = fopen("data.txt", "r");
while (!feof($file)) {
    $line = fgets($file);
    if ($line !== false) echo $line;
}
fclose($file);`
        },
        {
          title: '৫. Real-World Log Filter Example ⭐⭐⭐',
          explanationBn: `সার্ভার বা অ্যাপ্লিকেশন লগে ক্র্যাশ ডিবাগ করার জন্য str_contains() দিয়ে নির্দিষ্ট কি-ওয়ার্ড ফিল্টার করা হয়।`,
          code: `$log = fopen("production.log", "r");
while (($line = fgets($log)) !== false) {
    if (str_contains($line, "FATAL_ERROR") || str_contains($line, "EXCEPTION")) {
        echo "Alert: " . $line;
    }
}
fclose($log);`
        },
        {
          title: '৬. ফাইল ওপেন মোডসমূহের পূর্ণাঙ্গ চিটশিট ⭐⭐⭐',
          explanationBn: `"r": শুধু পড়া (শুরু থেকে)। "r+": পড়া ও লেখা। "w": লেখার জন্য খোলা (বিদ্যমান ডাটা মুছে দেয় বা ওভাররাইট করে)। "w+": পড়া ও লেখা (ওভাররাইট)। "a": অ্যাপেন্ড (ফাইলের শেষে যোগ)। "a+": পড়া ও অ্যাপেন্ড। "x": এক্সক্লুসিভ ক্রিয়েট (আগে থাকলে ফেইল)।`,
          code: `// সতর্কবার্তা: "w" মোড দিলে পূর্বের সমস্ত ডাটা মুছে যায়!
$danger = fopen("data.txt", "w"); // Truncates immediately!`
        },
        {
          title: '৭. fclose() এবং রিসোর্স রিলিজ',
          explanationBn: `ফাইল রিড শেষে fclose($handle) কল না করলে সিস্টেম ফাইল ডেসক্রিপ্টর ওপেন থাকে, যা কনকারেন্ট ট্রাফিকে "Too many open files" এরর তৈরি করতে পারে।`,
          code: `fclose($file); // Always release OS file handle`
        }
      ],
      keyPointsBn: [
        'OPEN -> READ -> CLOSE হলো ফাইল আই/ও এর মূল আর্কিটেকচারাল সাইকেল।',
        'বড় ফাইলে memory_limit এক্সহশন এড়াতে fgets() দিয়ে স্ট্রিম রিড করুন।',
        'রিসোর্স লিক প্রতিরোধে প্রতিটি fopen() এর বিপরীতে নিশ্চিতভাবে fclose() কল করুন।',
        '"r" মোডে ফাইল না থাকলে ফেইল করে, তাই খোলার পর false চেক করুন।',
        '"w" মোড ফাইল ট্রাঙ্কেটিং (ডাটা মুছে ফেলা) ঘটায়, তাই সতর্কতা অবলম্বন করুন।'
      ],
      practiceExamples: [
        {
          title: 'লার্জ ফাইল লাইন ও ওয়ার্ড কাউন্টার',
          descriptionBn: 'মেমরি অপ্টিমাইজড উপায়ে ফাইলের মোট লাইন ও শব্দ সংখ্যা গণনা।',
          code: `<?php
$handle = fopen("sample.txt", "r");
$lines = 0;
$words = 0;

if ($handle) {
    while (($line = fgets($handle)) !== false) {
        $lines++;
        $words += str_word_count($line);
    }
    fclose($handle);
}
echo "Lines: {$lines}, Words: {$words}";
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: 500MB ফাইলে file_get_contents ও fclose() মিস করা
$allLogs = file_get_contents("huge_500mb_log.txt"); // Fatal Error: Allowed memory exhausted!
$lines = explode("\\n", $allLogs);

$handle = fopen("data.txt", "r");
$data = fread($handle, 100);
// fclose($handle) দেওয়া হয়নি! (Resource leak)`,
        juniorProblems: [
          'বড় ফাইলে file_get_contents() দিলে 128MB/256MB মেমরি লিমিট পার হয়ে স্ক্রিপ্ট ফ্যাটাল এরর দিয়ে ক্র্যাশ করে।',
          'fclose() না দেওয়ায় ফাইল ডেসক্রিপ্টর লক থাকে এবং ওএস রিসোর্স নষ্ট হয়।'
        ],
        seniorCode: `//  সিনিয়র অ্যাপ্রোচ: বাফারড স্ট্রিম রিডিং ও ডিফেন্সিভ রিসোর্স ম্যানেজমেন্ট
$filePath = __DIR__ . "/storage/logs/app.log";
if (file_exists($filePath) && is_readable($filePath)) {
    $handle = fopen($filePath, "r");
    if ($handle) {
        try {
            while (($line = fgets($handle)) !== false) {
                if (str_contains($line, "CRITICAL")) {
                    // Process critical line without storing whole file in RAM
                }
            }
        } finally {
            fclose($handle); // সর্বদা রিসোর্স রিলিজ নিশ্চিত
        }
    }
}`,
        seniorBenefits: [
          '১ জিবি ফাইল রিড করতেও মেমরি মাত্র কয়েক কিলোবাইটে সীমাবদ্ধ থাকে।',
          'try ... finally ব্লকে fclose() নিশ্চিত করায় এক্সেপশন ঘটলেও রিসোর্স লিক হয় না।'
        ],
        architectAdvice: 'কখনোই সার্ভার লগ বা ডাটা ডাম্প পুরোটা স্ট্রিং আকারে মেমরিতে নেবেন না। সবসময় fopen() স্ট্রিম বা পিএইচপি ৮ এর Generator/yield ফাংশন ব্যবহার করে মেমরি-এফিসিয়েন্ট পাইপলাইন তৈরি করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'DO_FCALL -> php_stream_fopen()',
          'php_stream_get_line() using internal 8KB buffer',
          'php_stream_free() via fclose'
        ],
        explanationBn: `Zend Engine-এ fopen() একটি 'php_stream' অবজেক্ট বরাদ্দ করে যার ভেতরে ডিফল্ট ৮ কিলোবাইটের রিড বাফার (read buffer) থাকে। fgets() কল করলে পিএইচপি সিস্টেম কল (sys_read) কমিয়ে নিজস্ব মেমরি বাফার থেকে নিউলাইন ক্যারেক্টার পর্যন্ত ডাটা রিটার্ন করে, যা আই/ও পারফরম্যান্সকে বহুগুণ দ্রুত করে।`
      },
      security: {
        vulnerabilityType: 'Unclosed File Descriptors & Denial of Service',
        attackVectorBn: 'বারংবার ফাইল ওপেন করে fclose() না করলে অপারেটিং সিস্টেমের ulimit (সর্বোচ্চ ওপেন ফাইল লিমিট) নিঃশেষ হয়ে সার্ভার অন্যান্য রিকোয়েস্ট একসেপ্ট করা বন্ধ করে দেয়।',
        preventionRuleBn: 'সর্বদা fclose() নিশ্চিত করুন অথবা try-finally ব্লক ব্যবহার করুন। ইউজারের পাথ সরাসরি fopen এ দেওয়া বন্ধ করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'fopen() হলো পানির পাইপলাইনের চাবি অন করা, fgets() হলো প্রতি গ্লাস পানি নেওয়া, আর fclose() হলো কাজ শেষে চাবি বন্ধ করা যাতে পানি উপচে পড়ে ক্ষতি না হয়।',
      beginnerSteps: [
        {
          step: 1,
          title: 'fopen দিয়ে ফাইল ওপেন',
          explanationBn: '$fp = fopen("data.txt", "r") দিয়ে রিড মোডে ফাইল খুলুন।'
        },
        {
          step: 2,
          title: 'fgets দিয়ে লাইন রিড',
          explanationBn: 'while(($line = fgets($fp)) !== false) দিয়ে প্রতিটি লাইন পড়ুন।'
        },
        {
          step: 3,
          title: 'fclose দিয়ে বন্ধ',
          explanationBn: 'কাজ শেষ হলে fclose($fp) দিয়ে ফাইল বন্ধ করুন।'
        }
      ],
      trainerSecretsBn: [
        'মনে রাখবেন: OPEN -> READ -> CLOSE এই ৩টি ধাপ সবসময় একসাথে চলে।',
        'বড় ফাইলে মেমরি ক্র্যাশ ঠেকাতে fgets() এর কোনো বিকল্প নেই।'
      ],
      commonGotchasBn: [
        'ভুল: $file = fopen("data.txt", "w") দিলে ফাইলের পুরোনো সব ডাটা শূন্য হয়ে যায়।',
        'ভুল: fgets() লুপে false এর বদলে feof() ব্যবহার করে অতিরিক্ত ফাঁকা লাইন প্রিন্ট করা।'
      ],
      interviewQuestions: [
        {
          questionBn: 'বড় ফাইল প্রসেসিংয়ে file_get_contents এর চেয়ে fopen + fgets কেন বেশি কার্যকর?',
          answerBn: 'file_get_contents পুরো ফাইলকে র‍্যাম মেমরিতে আনে যা মেমরি লিমিট (memory_limit) অতিক্রম করে ফ্যাটাল এরর দিতে পারে। অপরপক্ষে fopen + fgets লাইন ধরে ধরে চাঙ্ক বাফারিং করে, ফলে ফাইল যতই বড় হোক মেমরি ব্যবহার প্রায় অপরিবর্তিত ও স্থিতিশীল থাকে।',
          seniorTipBn: '৮কেবি ইন্টারনাল স্ট্রিম বাফার এবং মেমরি কনস্ট্যান্ট O(1) কমপ্লেক্সিটির কথা উল্লেখ করুন।'
        }
      ],
      studentChallenge: {
        title: 'লগ এরর কাউন্টার স্ক্রিপ্ট',
        taskBn: 'একটি লগ ফাইল থেকে fopen ও fgets ব্যবহার করে কতটি "ERROR" শব্দ রয়েছে তা কাউন্ট করে প্রিন্ট করুন।',
        hintBn: 'str_contains($line, "ERROR") চেক করে কাউন্টার বাড়ান।',
        starterCode: `<?php
// fopen ও fgets দিয়ে ERROR লাইনগুলো কাউন্ট করুন
`,
        solutionCode: `<?php
$sampleLog = "error_test.log";
file_put_contents($sampleLog, "INFO: Start\nERROR: Failed step 1\nINFO: Step 2\nERROR: Failed step 3\n");

$fp = fopen($sampleLog, "r");
$count = 0;
while (($line = fgets($fp)) !== false) {
    if (str_contains($line, "ERROR")) {
        $count++;
    }
}
fclose($fp);
unlink($sampleLog);

echo "মোট এরর পাওয়া গেছে: {$count} টি";
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Stream I/O: Open & Read',
          subtitle: 'High-Performance Line-by-Line Buffering',
          bulletPoints: [
            'fopen() resource pointer initialization with "r" mode',
            'fgets() memory-safe line reading in while loops',
            'fread() for fixed-size binary and chunk reading',
            'Mandatory fclose() to prevent OS file descriptor leaks'
          ],
          trainerSpeechNotes: 'Stream-based file I/O is the foundation of high-throughput data processing in PHP.',
          analogyOrHighlight: 'fopen = Open Tap | fgets = Sip | fclose = Close Tap'
        }
      ]
    }
  },
  {
    id: 'php-file-create-write',
    title: 'PHP File Create & Write',
    category: 'advanced',
    tag: 'File Writing & Atomic Storage',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'fopen() রাইট মোড ("w", "a", "x"), fwrite(), file_put_contents(), FILE_APPEND, LOCK_EX কনকারেন্সি ও অ্যাটমিক ফাইল রাইটিং।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP File Create & Write Architecture</h2>";

// ১. "w" মোডে নতুন ফাইল তৈরি ও ওভাররাইট
$docFile = "invoice_report.txt";
$handle = fopen($docFile, "w");
if ($handle) {
    fwrite($handle, "=== INVOICE SUMMARY ===\n");
    fwrite($handle, "Customer: Abbad Tech Solutions\n");
    fwrite($handle, "Invoice Date: " . date("Y-m-d H:i:s") . "\n");
    fclose($handle);
}
echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. fopen('w') & fwrite() Output</h4>";
echo "<pre style='background:#1e293b; padding:10px; border-radius:6px; color:#38bdf8; margin:5px 0;'>" . htmlspecialchars(file_get_contents($docFile)) . "</pre>";

// ২. "a" মোডে অ্যাপেন্ড (Append)
$appendHandle = fopen($docFile, "a");
if ($appendHandle) {
    fwrite($appendHandle, "-----------------------\n");
    fwrite($appendHandle, "Total Payable: ৳45,500.00\n");
    fwrite($appendHandle, "Status: PAID (Bkash TrxID: TRX98124)\n");
    fclose($appendHandle);
}
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. fopen('a') Append Mode Result</h4>";
echo "<pre style='background:#1e293b; padding:10px; border-radius:6px; color:#4ade80; margin:5px 0;'>" . htmlspecialchars(file_get_contents($docFile)) . "</pre>";

// ৩. Modern file_put_contents with LOCK_EX & FILE_APPEND
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. Modern file_put_contents (Atomic & Concurrent Safe)</h4>";
$auditLog = "audit_trail.log";
file_put_contents($auditLog, "[" . date("H:i:s") . "] Event: User payment verified\n", FILE_APPEND | LOCK_EX);
file_put_contents($auditLog, "[" . date("H:i:s") . "] Event: Receipt emailed\n", FILE_APPEND | LOCK_EX);
echo "<pre style='background:#1e293b; padding:10px; border-radius:6px; color:#fbbf24; margin:5px 0;'>" . htmlspecialchars(file_get_contents($auditLog)) . "</pre>";

// ৪. "x" মোড (Safe Exclusive Create - ফাইল আগে থাকলে ত্রুটি এড়ানো)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. fopen('x') Exclusive Mode Safety</h4>";
$uniqueLock = "deployment.lock";
$lockHandle = @fopen($uniqueLock, "x");
if ($lockHandle) {
    fwrite($lockHandle, "Process PID: " . getmypid());
    fclose($lockHandle);
    echo "✓ Lock file created successfully.<br>";
    
    // দ্বিতীয়বার x মোডে খুললে এটি ফেইল করবে (রেস কন্ডিশন প্রতিরোধ)
    $secondTry = @fopen($uniqueLock, "x");
    if ($secondTry === false) {
        echo "<span style='color:#f43f5e;'>✓ Expected behavior: fopen('x') safely rejected duplicate creation because file already exists!</span><br>";
    }
    unlink($uniqueLock);
}

// ক্লিনআপ
unlink($docFile);
unlink($auditLog);

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP-তে ফাইলে নতুন ডাটা লেখা, ওভাররাইট করা বা অ্যাপেন্ড করার জন্য fwrite() ও file_put_contents() ব্যবহৃত হয়। fopen-এ "w" মোড দিলে পূর্ববর্তী ডাটা মুছে নতুন করে শুরু করে, "a" মোড ফাইলের শেষে অ্যাপেন্ড করে এবং "x" মোড ফাইল পূর্বে বিদ্যমান না থাকলে কেবল তখনই নতুন ফাইল সৃষ্টি করে (রেস কন্ডিশন ও লক ফাইল তৈরিতে উপযোগী)।`,
      lessonSections: [
        {
          title: '১. fopen() এ "w" বনাম "a" মোডের তফাত ⭐⭐⭐',
          explanationBn: `"w" (Write): ফাইল না থাকলে তৈরি করে, থাকলে ভেতরের পূর্বের সমস্ত কনটেন্ট তাৎক্ষণিক মুছে ফেলে (truncate to 0 length)। "a" (Append): ফাইল না থাকলে তৈরি করে, থাকলে বিদ্যমান ডাটার পর থেকে লেখা শুরু করে।`,
          code: `// Overwrite
$fp = fopen("output.txt", "w");
fwrite($fp, "New header content\\n");
fclose($fp);

// Append
$fp = fopen("output.txt", "a");
fwrite($fp, "Appended line\\n");
fclose($fp);`,
          outputPreview: `New header content\nAppended line`
        },
        {
          title: '২. "x" মোড: Exclusive File Creation ⭐⭐⭐',
          explanationBn: `"x" বা "x+" মোড এক্সক্লুসিভ ফাইল ক্রিয়েশনে ব্যবহৃত হয়। ফাইলটি আগে থেকে থাকলে fopen() সাথে সাথে false এবং E_WARNING দেয়। সার্ভার ডেপ্লয়মেন্ট লক বা ক্রন-জব ডুপ্লিকেশন আটকাতে এটি আদর্শ।`,
          code: `$lock = @fopen("task.lock", "x");
if ($lock === false) {
    die("আরেকটি প্রসেস ইতোমধ্যে চালু রয়েছে!");
}
fwrite($lock, "running");
fclose($lock);`
        },
        {
          title: '৩. file_put_contents() এবং এর শক্তিশালী ফ্ল্যাগসমূহ ⭐⭐⭐',
          explanationBn: `file_put_contents($path, $data, $flags) ফাংশনটি fopen -> fwrite -> fclose ধাপগুলোকে এক লাইনে সম্পন্ন করে। FILE_APPEND দিলে অ্যাপেন্ড হয় এবং LOCK_EX দিলে লেখার সময় ওএস লেভেলে এক্সক্লুসিভ লক নিশ্চিত করে।`,
          code: `// Best Practice for Log & Cache Write
file_put_contents(
    "app.log",
    "User Action: " . $action . PHP_EOL,
    FILE_APPEND | LOCK_EX
);`,
          noteBn: `উচ্চ ট্রাফিকের সাইটে LOCK_EX ছাড়া ফাইলে একসাথে একাধিক রিকোয়েস্ট লিখলে ফাইল করাপ্ট (Corrupted) হতে পারে।`
        },
        {
          title: '৪. Atomic File Writing Pattern (Enterprise Standard) ⭐⭐⭐',
          explanationBn: `সরাসরি টার্গেট ফাইলে লেখার সময় সার্ভার ক্র্যাশ বা পাওয়ার কাট হলে ফাইলটি অর্ধেক লেখা অবস্থায় নষ্ট হতে পারে। সিনিয়র ইঞ্জিনিয়াররা প্রথমে একটি অস্থায়ী (temp) ফাইলে লিখে পরে rename() করেন, কারণ অপারেটিং সিস্টেমে rename() একটি অ্যাটমিক (Atomic) অপারেশন।`,
          code: `function atomicWrite(string $filePath, string $data): bool {
    $tempFile = $filePath . '.' . uniqid('tmp_', true);
    if (file_put_contents($tempFile, $data, LOCK_EX) === false) {
        return false;
    }
    return rename($tempFile, $filePath); // Atomic replacement
}`
        },
        {
          title: '৫. CSV ও JSON ফাইল তৈরি',
          explanationBn: `টেবুলার এক্সপোর্টের জন্য fputcsv() এবং স্ট্রাকচার্ড ডাটা স্টোরেজের জন্য json_encode() ব্যবহার করা হয়।`,
          code: `// JSON Export
$config = ['app' => 'E-Commerce', 'debug' => false];
file_put_contents('config.json', json_encode($config, JSON_PRETTY_PRINT));

// CSV Export
$fp = fopen('orders.csv', 'w');
fputcsv($fp, ['Order ID', 'Customer', 'Amount']);
fputcsv($fp, ['#1001', 'Abbad', 2500]);
fclose($fp);`
        },
        {
          title: '৬. পারমিশন ও ডিরেক্টরি সিকিউরিটি (chmod, chown)',
          explanationBn: `ফাইল তৈরি করার পর সেনসিটিভ ডাটা থাকলে পারমিশন 0644 (রিড/রাইট ওনার, রিড আদার্স) বা 0600 (কেবল ওনার) সেট করতে chmod() ব্যবহৃত হয়।`,
          code: `file_put_contents("secret.key", $privateKey);
chmod("secret.key", 0600); // Only current system user can read/write`
        }
      ],
      keyPointsBn: [
        '"w" মোড পূর্বের কনটেন্ট সম্পূর্ণ মুছে দেয়, তাই সচেতনভাবে ব্যবহার করুন।',
        '"a" মোড লগিং ও ডাটা সংরক্ষণে নতুন রেকর্ড যুক্ত করতে পারফেক্ট।',
        '"x" মোড ডুপ্লিকেট ফাইল ক্রিয়েশন ও রেস কন্ডিশন প্রতিরোধ করে।',
        'উচ্চ কনকারেন্সিতে ফাইল করাপশন ঠেকাতে সর্বদা LOCK_EX ফ্ল্যাগ ব্যবহার করুন।',
        'ক্রিটিক্যাল ফাইল ও ক্যাশ আপডেটের জন্য টেম্প-ফাইল + rename() অ্যাটমিক প্যাটার্ন অনুসরণ করুন।'
      ],
      practiceExamples: [
        {
          title: 'নিরাপদ অ্যাটমিক কনফিগ আপডেটার',
          descriptionBn: 'অ্যাটমিক ফাইল রাইট প্যাটার্ন ব্যবহার করে কনফিগ সেভ।',
          code: `<?php
$configFile = __DIR__ . "/settings.json";
$newSettings = [
    "maintenance_mode" => false,
    "api_version" => "v2.1",
    "updated_at" => date("Y-m-d H:i:s")
];

$tempFile = $configFile . ".tmp." . bin2hex(random_bytes(8));
file_put_contents($tempFile, json_encode($newSettings, JSON_PRETTY_PRINT), LOCK_EX);
rename($tempFile, $configFile);

echo "Settings saved atomically!";
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: সরাসরি "w" মোডে রাইট ও লক ছাড়া কনকারেন্ট রিকোয়েস্ট
$file = fopen("orders.txt", "w"); // কনকারেন্ট রিকোয়েস্টে পূর্ববর্তী অর্ডার মুছে যায়!
fwrite($file, $orderData);
// লক নেই, পাওয়ার কাট হলে ফাইল করাপ্ট হবে`,
        juniorProblems: [
          '"w" মোড ভুলক্রমে দেওয়ায় পূর্বের সমস্ত ডাটা মুছে এক লাইনে পরিণত হয়।',
          'LOCK_EX না থাকায় একসাথে ১০ জন ইউজার লগিন করলে লগ ফাইল ক্ষতিগ্রস্ত বা ফাঁকা হয়ে যায়।',
          'অ্যাটমিক রাইট না করায় ডাটা সেভের মাঝপথে স্ক্রিপ্ট ক্র্যাশ করলে ফাইল করাপ্ট হয়।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: অ্যাটমিক রাইট ও লক সহ কনকারেন্সি সেফটি
function safeAppendLog(string $path, string $message): void {
    $entry = sprintf("[%s] %s%s", date('c'), $message, PHP_EOL);
    file_put_contents($path, $entry, FILE_APPEND | LOCK_EX);
}

function safeWriteConfig(string $targetPath, array $data): bool {
    $tempPath = $targetPath . '.' . bin2hex(random_bytes(6)) . '.tmp';
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR);
    
    if (file_put_contents($tempPath, $json, LOCK_EX) === false) {
        return false;
    }
    return rename($tempPath, $targetPath);
}`,
        seniorBenefits: [
          'LOCK_EX ফ্ল্যাগ থাকায় কনকারেন্ট মাল্টিপল রিকোয়েস্ট কিউ মেনে নিরাপদে ফাইলে অ্যাপেন্ড হয়।',
          'টেম্প ফাইল এবং rename() এর ফলে ইউজার কখনোই আংশিক বা ভাঙা কনফিগ পড়ে না (100% Zero Downtime / Atomic Read)।'
        ],
        architectAdvice: 'প্রোডাকশনে ফাইল রাইট অপারেশন সবসময় ন্যূনতম রাখুন এবং লগিংয়ের জন্য Monolog বা সেন্ট্রালাইজড স্টোরেজ ব্যবহার করুন। কনফিগারেশন ফাইল ডিরেক্টরিকে ওয়েব রুটের বাইরে রাখুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'DO_FCALL -> php_stream_write()',
          'php_stream_flush() buffer flush to OS kernel',
          'VFS / POSIX rename() system call'
        ],
        explanationBn: `PHP-র fwrite() সরাসরি হার্ডডিস্কে লেখে না; এটি পিএইচপির ইন্টারনাল স্ট্যাটিক বাফারে ডাটা রাখে এবং নির্দিষ্ট বাইট পূর্ণ হলে বা fclose() কল হলে 'php_stream_flush()' সিস্টেম কলের মাধ্যমে ওএস কার্নেল পেজ ক্যাশে (Kernel Page Cache) ডাটা পুশ করে। rename() কলটি POSIX কার্নেলে একটি নন-ব্লকিং অ্যাটমিক পয়েন্টার সোয়াপ পরিচালনা করে।`
      },
      security: {
        vulnerabilityType: 'Race Conditions & Concurrent File Corruption',
        attackVectorBn: 'ফাইল লকিং ছাড়া একাধিক প্রসেস একই সাথে ফাইলে লিখলে ডাটা করাপ্ট বা ওভাররাইট হয়ে বিজনেস ট্রানজেকশন ডেটা নষ্ট হতে পারে।',
        preventionRuleBn: 'লগ ও স্টেট সংরক্ষণে FILE_APPEND এর সাথে LOCK_EX ব্যবহার করুন। ইউনিক টাস্ক রান নিশ্চিত করতে "x" মোড ফাইল পয়েন্টার লক তৈরি করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: '"w" মোড হলো ব্ল্যাকবোর্ড ডাস্টার দিয়ে সব মুছে নতুন করে লেখা, "a" মোড হলো ব্ল্যাকবোর্ডের নিচে নতুন লাইন যোগ করা, আর "x" মোড হলো নিশ্চিত হওয়া যে বোর্ডে কোনো লেখা নেই, কেবল তবেই চক দিয়ে লেখা শুরু করা।',
      beginnerSteps: [
        {
          step: 1,
          title: 'মোড নির্বাচন করুন',
          explanationBn: 'নতুন/মুছে ফেলার জন্য "w", শেষে যোগ করার জন্য "a" এবং সেফ ক্রিয়েশনে "x" মোড বেছে নিন।'
        },
        {
          step: 2,
          title: 'file_put_contents দিয়ে সংক্ষেপণ',
          explanationBn: 'file_put_contents("file.txt", "data", FILE_APPEND | LOCK_EX) ব্যবহার করুন।'
        },
        {
          step: 3,
          title: 'অ্যাটমিক সেভ বুঝুন',
          explanationBn: 'আগে temp ফাইলে লিখে পরে rename() করলে ডাটা নষ্ট হয় না।'
        }
      ],
      trainerSecretsBn: [
        'লগ ফাইলে সবসময় FILE_APPEND | LOCK_EX ফ্ল্যাগ একসাথে ব্যবহার করবেন।',
        'ক্রন জব ডুপ্লিকেট হওয়া ঠেকাতে @fopen("job.lock", "x") এক অনবদ্য ট্রিক।'
      ],
      commonGotchasBn: [
        'ভুল: লগ ফাইলে ভুল করে "w" মোড দিলে পূর্বের সমস্ত সার্ভার লগ স্থায়ীভাবে মুছে যায়।',
        'ভুল: LOCK_EX ছাড়া হাই-ট্রাফিকে ফাইল লিখলে ফাঁকা বা ভাঙা ফাইল তৈরি হয়।'
      ],
      interviewQuestions: [
        {
          questionBn: 'file_put_contents এ LOCK_EX কেন ব্যবহার করা হয়? অ্যাটমিক ফাইল রাইট কী?',
          answerBn: 'LOCK_EX অপারেটিং সিস্টেম লেভেলে এক্সক্লুসিভ লক নিশ্চিত করে যাতে কনকারেন্ট একাধিক প্রসেস একই সময়ে লিখে ফাইল করাপ্ট না করে। অ্যাটমিক ফাইল রাইট হলো প্রথমে একটি টেম্প ফাইলে ডাটা লিখে পরে rename() করা, যাতে পাওয়ার ফেইলিউর বা ক্র্যাশের সময়ও ফাইল কখনোই আংশিক বা ভাঙা অবস্থায় না থাকে।',
          seniorTipBn: 'POSIX rename() সিস্টেম কলের অ্যাটোমিসিটি এবং রেস কন্ডিশন প্রতিরোধের কথা ব্যাখ্যা করুন।'
        }
      ],
      studentChallenge: {
        title: 'অডিট লগ রাইটার তৈরি',
        taskBn: 'FILE_APPEND এবং LOCK_EX ব্যবহার করে একটি audit.log ফাইলে টাইমস্ট্যাম্প সহ দুটি ভিন্ন ইভেন্ট লগ করুন এবং ফাইলটি প্রিন্ট করুন।',
        hintBn: 'file_put_contents("audit.log", "[" . date("H:i:s") . "] " . $event . "\\n", FILE_APPEND | LOCK_EX) ব্যবহার করুন।',
        starterCode: `<?php
// টাইমস্ট্যাম্প সহ audit.log ফাইলে ডাটা অ্যাপেন্ড করুন
`,
        solutionCode: `<?php
$logFile = "audit_challenge.log";
file_put_contents($logFile, "[" . date("Y-m-d H:i:s") . "] Event: Password Changed\n", FILE_APPEND | LOCK_EX);
file_put_contents($logFile, "[" . date("Y-m-d H:i:s") . "] Event: 2FA Enabled\n", FILE_APPEND | LOCK_EX);

echo nl2br(file_get_contents($logFile));
unlink($logFile);
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP File Create & Write Pipeline',
          subtitle: 'Concurrency, Locking & Atomic Operations',
          bulletPoints: [
            'fopen("w") for complete overwrite vs fopen("a") for appending',
            'fopen("x") for race-condition-free exclusive creation',
            'file_put_contents with FILE_APPEND | LOCK_EX',
            'Atomic write pattern using temporary file + POSIX rename()'
          ],
          trainerSpeechNotes: 'Writing files safely under high-concurrency requires explicit locking and atomic rename techniques.',
          analogyOrHighlight: '"w" = Wipe & Write | "a" = Append to End | "x" = Create Only If Missing'
        }
      ]
    }
  },
  {
    id: 'php-file-upload',
    title: 'PHP File Upload',
    category: 'advanced',
    tag: 'Multipart Upload & File Security',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'enctype="multipart/form-data", $_FILES সুপারগ্লোবাল, MIME টাইপ (finfo), random_bytes() রিনেম, move_uploaded_file() ও সিকিউরিটি চেকলিস্ট।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Secure File Upload Pipeline</h2>";

// ১. ডেমো আপলোড ফাইল মেমরিতে প্রস্তুতকরণ (সিমুলেশন)
$uploadDir = __DIR__ . "/demo_uploads/";
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// ২. মক \$_FILES অবজেক্ট ও প্রসেসিং
$mockUploadedFile = [
    "name" => "my_profile_avatar (1).PNG",
    "type" => "image/png",
    "tmp_name" => $uploadDir . "tmp_raw_blob.png",
    "error" => UPLOAD_ERR_OK,
    "size" => 1024 * 350 // 350 KB
];

// অস্থায়ী ফাইল তৈরি
file_put_contents($mockUploadedFile["tmp_name"], "\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR" . str_repeat("\x00", 100));

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. \$_FILES অ্যারে স্ট্রাকচার পরিদর্শন</h4>";
echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-size:13px; font-family:monospace; color:#94a3b8;'>";
echo "Original Name: <span style='color:#f8fafc;'>{$mockUploadedFile['name']}</span><br>";
echo "Reported Type: <span style='color:#38bdf8;'>{$mockUploadedFile['type']}</span><br>";
echo "Temp Path: <span style='color:#fbbf24;'>{$mockUploadedFile['tmp_name']}</span><br>";
echo "Size: <span style='color:#4ade80;'>" . round($mockUploadedFile['size'] / 1024, 2) . " KB</span><br>";
echo "Error Code: <span style='color:#38bdf8;'>UPLOAD_ERR_OK (0)</span>";
echo "</div>";

// ৩. সিকিউর ভ্যালিডেশন স্টেপস
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. এন্টারপ্রাইজ ভ্যালিডেশন ও সিকিউর রিনেমিং</h4>";
$errors = [];
$maxBytes = 2 * 1024 * 1024; // 2MB

// Step A: Error code check
if ($mockUploadedFile["error"] !== UPLOAD_ERR_OK) {
    $errors[] = "Upload failed with error code: " . $mockUploadedFile["error"];
}

// Step B: Size validation
if ($mockUploadedFile["size"] > $maxBytes) {
    $errors[] = "File size exceeds 2MB limit.";
}

// Step C: MIME Type Validation via finfo
$finfo = new finfo(FILEINFO_MIME_TYPE);
$detectedMime = $finfo->file($mockUploadedFile["tmp_name"]);

$allowedMimes = [
    "image/jpeg" => "jpg",
    "image/png"  => "png",
    "image/webp" => "webp"
];

if (!isset($allowedMimes[$detectedMime])) {
    $errors[] = "Disallowed MIME type: " . $detectedMime;
}

if (empty($errors)) {
    // Step D: Cryptographically Secure Random Filename
    $safeExtension = $allowedMimes[$detectedMime];
    $safeFileName = bin2hex(random_bytes(16)) . "." . $safeExtension;
    $targetDestination = $uploadDir . $safeFileName;

    // Step E: Move file (using rename in CLI demo, move_uploaded_file in HTTP POST)
    rename($mockUploadedFile["tmp_name"], $targetDestination);

    echo "<div style='background:#064e3b; border-left:4px solid #10b981; padding:12px; border-radius:6px; margin-top:10px;'>";
    echo "<b style='color:#34d399;'>✓ File Uploaded & Sanitized Successfully!</b><br>";
    echo "Sanitized Path: <code style='color:#f8fafc;'>storage/uploads/{$safeFileName}</code><br>";
    echo "Verified MIME: <code style='color:#a7f3d0;'>{$detectedMime}</code> | Safe Ext: <code style='color:#a7f3d0;'>.{$safeExtension}</code><br>";
    echo "<small style='color:#6ee7b7;'>Database Saved Record: ['file_name' => '{$safeFileName}', 'mime' => '{$detectedMime}', 'size' => {$mockUploadedFile['size']}]</small>";
    echo "</div>";

    // ক্লিনআপ
    unlink($targetDestination);
} else {
    echo "<div style='color:#f43f5e;'>Upload Errors: " . implode(", ", $errors) . "</div>";
}

if (is_dir($uploadDir)) rmdir($uploadDir);

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP-তে ক্লায়েন্ট কম্পিউটার থেকে সার্ভারে ফাইল আপলোড করতে HTML ফর্মের enctype="multipart/form-data" ব্যবহার করা হয়। আপলোডকৃত ফাইল সার্ভারের টেম্পোরারি ডিরেক্টরিতে জমা হয় এবং $_FILES সুপারগ্লোবালে মেটাডাটা পাওয়া যায়। নিরাপত্তা নিশ্চিত করতে ফাইল সাইজ, সার্ভার-সাইড MIME টাইপ (finfo) এবং ক্রিপ্টোগ্রাফিক র্যান্ডম নাম (random_bytes) তৈরি করে move_uploaded_file() দিয়ে পার্মানেন্ট স্টোরেজে মুভ করা আবশ্যক।`,
      lessonSections: [
        {
          title: '১. HTML ফর্ম ও multipart/form-data ⭐⭐⭐',
          explanationBn: `ফাইল আপলোডের জন্য HTML ফর্মে মেথড POST এবং enctype="multipart/form-data" দেওয়া বাধ্যতামূলক। এটি ব্রাউজারকে নির্দেশ দেয় ফাইলটিকে সাধারণ টেক্সট হিসেবে না পাঠিয়ে বাইনারি মাল্টিপার্ট স্ট্রিমে রূপান্তর করতে।`,
          code: `<form method="POST" action="upload.php" enctype="multipart/form-data">
    <input type="file" name="avatar" accept="image/*">
    <button type="submit">Upload Profile Picture</button>
</form>`,
          noteBn: `enctype ছাড়া ফর্ম সাবমিট করলে $_FILES সুপারগ্লোবাল সম্পূর্ণ খালি (empty) থাকবে।`
        },
        {
          title: '২. $_FILES সুপারগ্লোবালের ৫টি কোর কী (Key) ⭐⭐⭐',
          explanationBn: `$_FILES["input_name"] একটি অ্যাসোসিয়েটিভ অ্যারে প্রদান করে: 'name' (ক্লায়েন্টের মূল ফাইলনেম), 'type' (ব্রাউজার প্রেরিত আন-ট্রাস্টেড টাইপ), 'tmp_name' (সার্ভারের অস্থায়ী পাথ), 'error' (স্ট্যাটাস কোড), এবং 'size' (বাইটে ফাইলের মোট সাইজ)।`,
          code: `$file = $_FILES["avatar"];
$clientName = $file["name"];     // "profile.png"
$browserType = $file["type"];    // "image/png" (Do not trust!)
$tempLocation = $file["tmp_name"]; // "/tmp/phpYzdq"
$errorCode = $file["error"];       // UPLOAD_ERR_OK (0)
$byteSize = $file["size"];         // 154200 bytes`,
          outputPreview: `Array ( [name] => profile.png [error] => 0 [size] => 154200 )`
        },
        {
          title: '৩. আপলোড এরর কোড চেকিং (Upload Error Constants)',
          explanationBn: `ফাইল প্রসেস করার আগেই $file["error"] === UPLOAD_ERR_OK নিশ্চিত করতে হবে। UPLOAD_ERR_INI_SIZE মানে php.ini এর upload_max_filesize পার হয়েছে, UPLOAD_ERR_NO_FILE মানে কোনো ফাইল নির্বাচন করা হয়নি।`,
          code: `if ($file['error'] !== UPLOAD_ERR_OK) {
    switch ($file['error']) {
        case UPLOAD_ERR_INI_SIZE: die("php.ini সাইজ লিমিট অতিক্রম করেছে");
        case UPLOAD_ERR_NO_FILE: die("কোনো ফাইল সিলেক্ট করা হয়নি");
        default: die("ফাইল আপলোড ব্যর্থ হয়েছে");
    }
}`
        },
        {
          title: '৪. MIME Type ভ্যালিডেশন (finfo) বনাম ক্লায়েন্ট এক্সটেনশন ⭐⭐⭐',
          explanationBn: `অ্যাটাকার একটি পিএইচপি ফাইলকে .jpg লিখে পাঠালে বা ব্রাউজার হেডার পরিবর্তন করলে $_FILES["type"] সহজেই স্পুফ (Spoof) করা যায়। তাই PHP-র 'finfo' এক্সটেনশন দিয়ে ফাইলের ভেতরের বাইনারি ম্যাজিক বাইট রিড করে আসল MIME টাইপ যাচাই করতে হয়।`,
          code: `$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file($file['tmp_name']);

$allowedMimes = [
    'image/jpeg' => 'jpg',
    'image/png'  => 'png',
    'image/webp' => 'webp',
    'application/pdf' => 'pdf'
];

if (!isset($allowedMimes[$mime])) {
    die("অননুমোদিত ফাইল ফরম্যাট: " . htmlspecialchars($mime));
}
$safeExtension = $allowedMimes[$mime];`,
          outputPreview: `MIME: image/jpeg -> Safe Ext: jpg`
        },
        {
          title: '৫. ক্রিপ্টোগ্রাফিক র্যান্ডম নাম ও ডিরেক্টরি সেফটি ⭐⭐⭐',
          explanationBn: `ক্লায়েন্টের দেওয়া নাম সরাসরি সেভ করলে পাথ ট্রাভার্সাল (../../), স্পেশাল ক্যারেক্টার ও ফাইল ওভাররাইটের ঝুঁকি থাকে। bin2hex(random_bytes(16)) দিয়ে ৩২ অক্ষরের ইউনিক হেক্স নাম জেনারেট করুন।`,
          code: `$randomName = bin2hex(random_bytes(16)) . '.' . $safeExtension;
$uploadDirectory = __DIR__ . '/storage/uploads/';

if (!is_dir($uploadDirectory)) {
    mkdir($uploadDirectory, 0755, true);
}

$destination = $uploadDirectory . $randomName;
move_uploaded_file($file['tmp_name'], $destination);`,
          outputPreview: `Saved: 4a8f9b2c8e1d5a7f9b0c2e4a6d8f1e3c.png`
        },
        {
          title: '৬. Multiple Files Upload প্রসেসিং ⭐⭐⭐',
          explanationBn: `HTML ফর্মে <input type="file" name="photos[]" multiple> দিলে PHP $_FILES["photos"] অ্যারেকে বহুমাত্রিক করে। লুপ চালিয়ে প্রতিটি ফাইল আলাদা ভ্যালিডেট করতে হয়।`,
          code: `if (isset($_FILES['photos'])) {
    foreach ($_FILES['photos']['tmp_name'] as $idx => $tmpPath) {
        if ($_FILES['photos']['error'][$idx] === UPLOAD_ERR_OK) {
            $name = $_FILES['photos']['name'][$idx];
            $size = $_FILES['photos']['size'][$idx];
            // Validate & move_uploaded_file($tmpPath, ...)
        }
    }
}`
        },
        {
          title: '৭. ডাটাবেজ আর্কিটেকচার: ফাইল বনাম মেটাডাটা',
          explanationBn: `ডাটাবেজের টেবিলে ফাইলের সম্পূর্ণ বাইনারি BLOB না রেখে ডিস্ক/ক্লাউড স্টোরেজে ফাইল রাখুন এবং ডাটাবেজে কেবল ফাইলের পাথ ও মেটাডাটা সংরক্ষণ করুন।`,
          code: `// Database Table Structure:
// id | user_id | file_name | file_path | mime_type | file_size | created_at
$stmt = $pdo->prepare("INSERT INTO uploads (file_name, file_path, mime_type, file_size) VALUES (?, ?, ?, ?)");
$stmt->execute([$randomName, "uploads/" . $randomName, $mime, $file['size']]);`
        }
      ],
      keyPointsBn: [
        'ফর্মের মেথড POST এবং enctype="multipart/form-data" নিশ্চিত করুন।',
        'ক্লায়েন্টের নাম ($file["name"]) কখনোই সরাসরি ফাইল সিস্টেমে সেভ করবেন না।',
        'finfo(FILEINFO_MIME_TYPE) দিয়ে সার্ভার সাইডে আসল MIME টাইপ যাচাই করুন।',
        'ফাইলের নাম রিনেম করতে bin2hex(random_bytes(16)) ব্যবহার করুন।',
        'ফাইল স্থানান্তরে rename() এর বদলে সর্বদা move_uploaded_file() ব্যবহার করুন।',
        'ডাটাবেজে ফাইলের বাইনারি কনটেন্ট না রেখে কেবল স্টোরেজ পাথ ও মেটাডাটা রাখুন।'
      ],
      practiceExamples: [
        {
          title: 'ফুল-ফাংশনাল ইমেজ আপলোড কন্ট্রোলার',
          descriptionBn: 'সাইজ, টাইপ, ডিরেক্টরি পারমিশন ও রিনেম সহ প্রোডাকশন আপলোডার।',
          code: `<?php
function handleAvatarUpload(array $file): array {
    if ($file['error'] !== UPLOAD_ERR_OK) {
        return ['success' => false, 'error' => 'Upload error code: ' . $file['error']];
    }
    if ($file['size'] > 3 * 1024 * 1024) {
        return ['success' => false, 'error' => 'Max allowed size is 3MB'];
    }
    
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']);
    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
    
    if (!isset($allowed[$mime])) {
        return ['success' => false, 'error' => 'Only JPG, PNG and WEBP allowed'];
    }
    
    $newName = bin2hex(random_bytes(16)) . '.' . $allowed[$mime];
    $target = __DIR__ . '/uploads/' . $newName;
    
    if (move_uploaded_file($file['tmp_name'], $target)) {
        return ['success' => true, 'filename' => $newName, 'mime' => $mime];
    }
    return ['success' => false, 'error' => 'Failed to move file'];
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: এক্সটেনশন চেক ও ক্লায়েন্ট ফাইলের নাম সরাসরি সেভ
$name = $_FILES['avatar']['name'];
$ext = pathinfo($name, PATHINFO_EXTENSION);

if ($ext == 'jpg' || $ext == 'png') {
    // shell.php.jpg বা ../../etc/passwd অ্যাটাক সম্ভব!
    move_uploaded_file($_FILES['avatar']['tmp_name'], "uploads/" . $name);
}`,
        juniorProblems: [
          'শুধুমাত্র এক্সটেনশন চেক করায় অ্যাটাকার পিএইচপি শেলকে .jpg বানিয়ে আপলোড করতে পারে।',
          'ক্লায়েন্টের নাম সরাসরি সেভ করায় পাথ ট্রাভার্সাল (../../) ও ফাইল ওভাররাইট ঝুঁকি তৈরি হয়।',
          'MIME টাইপ ও সাইজ লিমিট ভ্যালিডেশন না থাকায় সার্ভার ডিনায়াল অফ সার্ভিস (DoS) হতে পারে।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: finfo MIME ভ্যালিডেশন ও ক্রিপ্টোগ্রাফিক রিনেমিং
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file($_FILES['avatar']['tmp_name']);

$mimeMap = [
    'image/jpeg' => 'jpg',
    'image/png'  => 'png',
    'image/webp' => 'webp'
];

if (isset($mimeMap[$mime]) && $_FILES['avatar']['size'] <= 2097152) {
    $safeName = bin2hex(random_bytes(16)) . '.' . $mimeMap[$mime];
    $dest = __DIR__ . '/storage/uploads/' . $safeName;
    
    if (move_uploaded_file($_FILES['avatar']['tmp_name'], $dest)) {
        // Saved safely to isolated storage
    }
}`,
        seniorBenefits: [
          'finfo দিয়ে ফাইলের বাইনারি সিগনেচার যাচাই হওয়ায় ম্যালিশিয়াস স্ক্রিপ্ট আপলোড অসম্ভব।',
          'random_bytes(16) নিশ্চিত করে কোনো ফাইল ওভাররাইট বা প্রেডিক্ট করা সম্ভব নয়।',
          'নিরাপদ স্টোরেজ ফোল্ডারে ফাইল সেভ করে ওয়েব রুটের বাইরে রাখা হয়।'
        ],
        architectAdvice: 'আপলোডেড ফাইল স্টোরেজ ফোল্ডারে .htaccess দিয়ে পিএইচপি এক্সিকিউশন (php_flag engine off) বন্ধ রাখুন অথবা ফাইল সরাসরি AWS S3 / Cloudflare R2 এর মতো অবজেক্ট স্টোরেজে আপলোড করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'rfc1867.c -> SAPI multipart parser',
          'php_check_uploaded_file() validates temporary inode',
          'DO_FCALL -> move_uploaded_file()'
        ],
        explanationBn: `PHP রিকোয়েস্ট পাওয়ার সাথে সাথে C লেভেলে rfc1867.c মাল্টিপার্ট পার্সার দিয়ে স্ট্রিম রিসিভ করে এবং ওএস টেম্প ফোল্ডারে ফাইল রেখে একটি ইন্টারনাল হ্যাশ টেবিলে 'is_uploaded_file' রেজিস্ট্রি মার্ক করে। move_uploaded_file() ফাংশনটি ওএস লেভেলে চেক করে যে ফাইলটি সত্যিই এই HTTP রিকোয়েস্টে আপলোড হয়েছে কিনা, যা লোকাল ফাইল সোয়াপিং অ্যাটাক প্রতিরোধ করে।`
      },
      security: {
        vulnerabilityType: 'Unrestricted File Upload & Remote Code Execution (RCE)',
        attackVectorBn: 'অ্যাটাকার `.php.jpg` বা ফেইক MIME হেডার পাঠিয়ে একটি ব্যাকডোর ওয়েবশেল (Webshell) আপলোড করে সার্ভারের রুট এক্সেস নিতে পারে।',
        preventionRuleBn: 'কখনোই ক্লায়েন্ট হেডার বিশ্বাস করবেন না। finfo ব্যবহার করুন, র্যান্ডম এক্সটেনশন দিন এবং স্টোরেজ ডিরেক্টরিতে স্ক্রিপ্ট এক্সিকিউশন পারমিশন নিষিদ্ধ করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'ফাইল আপলোড হলো কাস্টমসের মতো। প্যাসেঞ্জারের ব্যাগের ওপর "মিষ্টি" লেখা থাকলেও (ফাইলনেম), স্ক্যানার দিয়ে (finfo) ভেতরে ড্রাগস বা অস্ত্র আছে কিনা চেক করে তবেই দেশের ভেতরে প্রবেশাধিকার দিতে হবে।',
      beginnerSteps: [
        {
          step: 1,
          title: 'ফর্ম ও multipart সেট',
          explanationBn: 'HTML ফর্মে enctype="multipart/form-data" যোগ করুন।'
        },
        {
          step: 2,
          title: 'finfo দিয়ে MIME ভ্যালিডেশন',
          explanationBn: 'finfo(FILEINFO_MIME_TYPE) দিয়ে ফাইলের আসল ফরম্যাট বের করুন।'
        },
        {
          step: 3,
          title: 'র্যান্ডম নামে move',
          explanationBn: 'random_bytes() দিয়ে নাম তৈরি করে move_uploaded_file() কল করুন।'
        }
      ],
      trainerSecretsBn: [
        'সবসময় মনে রাখবেন: VALIDATE -> RENAME -> MOVE -> SAVE METADATA।',
        '$_FILES["file"]["type"] ক্লায়েন্ট থেকে আসে, তাই এটি কখনোই সিকিউরিটিতে বিশ্বাস করবেন না।'
      ],
      commonGotchasBn: [
        'ভুল: ফর্মে enctype="multipart/form-data" দিতে ভুলে গেলে $_FILES খালি আসে।',
        'ভুল: move_uploaded_file() এর বদলে rename() ব্যবহার করলে আপলোড ভ্যালিডেশন বাইপাস হতে পারে।'
      ],
      interviewQuestions: [
        {
          questionBn: '$_FILES["file"]["type"] এবং finfo এর মধ্যে পার্থক্য কী? কেন finfo ব্যবহার করা উচিত?',
          answerBn: '$_FILES["file"]["type"] ক্লায়েন্ট ব্রাউজারের পাঠানো Content-Type হেডারের ওপর নির্ভর করে, যা পোস্টম্যান বা স্ক্রিপ্ট দিয়ে সহজেই ম্যানিপুলেট করা যায়। অপরদিকে finfo ফাইলের প্রথম কয়েকটি ম্যাজিক বাইট (Magic Bytes) স্ক্যান করে আসল MIME টাইপ নির্ধারণ করে, যা শতভাগ নিরাপদ।',
          seniorTipBn: 'move_uploaded_file এর ইন্টারনাল rfc1867 চেকিং ও RCE প্রতিরোধের কৌশল উল্লেখ করুন।'
        }
      ],
      studentChallenge: {
        title: 'নিরাপদ পিডিএফ ও ইমেজ আপলোডার ফাংশন',
        taskBn: 'একটি ফাংশন লিখুন যা ফাইল সাইজ ২MB এর নিচে কিনা এবং MIME টাইপ শুধুমাত্র image/jpeg, image/png অথবা application/pdf কিনা তা যাচাই করে র্যান্ডম নামে সেভ করবে।',
        hintBn: 'finfo এবং bin2hex(random_bytes(16)) ব্যবহার করুন।',
        starterCode: `<?php
// নিরাপদ আপলোড ভ্যালিডেটর কোড লিখুন
`,
        solutionCode: `<?php
function validateAndUpload(array $file): string {
    if ($file['error'] !== UPLOAD_ERR_OK) throw new Exception("Upload error");
    if ($file['size'] > 2 * 1024 * 1024) throw new Exception("File too large");
    
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']);
    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'application/pdf' => 'pdf'];
    
    if (!isset($allowed[$mime])) throw new Exception("Invalid MIME type");
    
    $safeName = bin2hex(random_bytes(16)) . '.' . $allowed[$mime];
    return "Saved as: " . $safeName;
}
echo "Upload validator compiled!";
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Secure File Upload Architecture',
          subtitle: 'Defense-in-Depth for Multipart Storage',
          bulletPoints: [
            'enctype="multipart/form-data" required on HTML forms',
            'Deep inspection with finfo(FILEINFO_MIME_TYPE)',
            'Cryptographic file renaming with random_bytes(16)',
            'move_uploaded_file() to prevent local file substitution'
          ],
          trainerSpeechNotes: 'Never trust user filenames or client-sent headers. Always inspect the byte payload with finfo.',
          analogyOrHighlight: 'Rule: VALIDATE -> RENAME -> MOVE -> SAVE METADATA'
        }
      ]
    }
  },
  {
    id: 'php-cookies',
    title: 'PHP Cookies',
    category: 'advanced',
    tag: 'Client State & Security Flags',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'setcookie(), $_COOKIE সুপারগ্লোবাল, Expiry ক্যালকুলেশন, HttpOnly, Secure, SameSite ফ্ল্যাগ ও Remember Me টোকেন আর্কিটেকচার।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Cookies & Security Architecture</h2>";

// ১. ডেমো কুকি স্টেট সিমুলেশন
$_COOKIE["app_theme"] = "dark";
$_COOKIE["user_lang"] = "bn";
$_COOKIE["remember_token"] = "tok_" . bin2hex(random_bytes(16));

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. \$_COOKIE সুপারগ্লোবাল থেকে ডেটা রিড ও স্যানিটাইজেশন</h4>";
$theme = $_COOKIE["app_theme"] ?? "light";
$lang = $_COOKIE["user_lang"] ?? "en";
$remember = $_COOKIE["remember_token"] ?? null;

echo "Selected Theme: <b style='color:#38bdf8;'>" . htmlspecialchars($theme) . "</b><br>";
echo "Preferred Language: <b style='color:#4ade80;'>" . htmlspecialchars($lang) . "</b><br>";
echo "Remember Token (Hashed in DB): <code style='color:#fbbf24;'>" . htmlspecialchars(substr($remember, 0, 16)) . "...</code><br>";

// ২. Modern setcookie() Options Array সিনট্যাক্স
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. Modern setcookie() Configuration (PHP 7.3+)</h4>";
$cookieConfig = [
    "name" => "app_theme",
    "value" => "dark",
    "options" => [
        "expires" => time() + (86400 * 30), // ৩০ দিন
        "path" => "/",
        "domain" => "example.com",
        "secure" => true,      // কেবল HTTPS এ সেন্ড হবে
        "httponly" => true,    // JavaScript/XSS এক্সেস বন্ধ
        "samesite" => "Lax"    // CSRF প্রটেকশন
    ]
];

echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-family:monospace; font-size:13px; color:#94a3b8;'>";
echo "setcookie(\"<span style='color:#38bdf8;'>{$cookieConfig['name']}</span>\", \"<span style='color:#4ade80;'>{$cookieConfig['value']}</span>\", [<br>";
foreach ($cookieConfig['options'] as $optKey => $optVal) {
    $valStr = is_bool($optVal) ? ($optVal ? 'true' : 'false') : (is_numeric($optVal) ? $optVal : "\"{$optVal}\"");
    echo "&nbsp;&nbsp;\"{$optKey}\" => <span style='color:#fbbf24;'>{$valStr}</span>,<br>";
}
echo "]);";
echo "</div>";

// ৩. কুকি ডিলিটেশন মেকানিজম
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. কুকি ডিলিট করার টেকনিক (Past Expiry)</h4>";
echo "<p style='margin:5px 0; color:#cbd5e1;'>কুকি রিমুভ করতে অতীত সময়ের এক্সপায়ারি (যেমন: <code>time() - 3600</code>) দিতে হয়:</p>";
echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-family:monospace; font-size:13px; color:#f43f5e;'>";
echo "setcookie(\"remember_token\", \"\", [<br>&nbsp;&nbsp;\"expires\" => time() - 3600,<br>&nbsp;&nbsp;\"path\" => \"/\"<br>]);";
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Cookie হলো ব্যবহারকারীর ব্রাউজারে সংরক্ষিত ছোট টেক্সট ডেটা (সর্বোচ্চ ৪KB)। সার্ভার HTTP Response Headers (Set-Cookie) এর মাধ্যমে ব্রাউজারে কুকি পাঠায় এবং পরবর্তী প্রতি রিকোয়েস্টে ব্রাউজার স্বয়ংক্রিয়ভাবে সেই কুকি সার্ভারে ফেরত পাঠায়। Theme সেটিংস, ভাষা পছন্দ এবং 'Remember Me' টোকেন সংরক্ষণে এটি বহুল ব্যবহৃত।`,
      lessonSections: [
        {
          title: '১. setcookie() এর বেসিক ব্যবহার ও এক্সপায়ারি ক্যালকুলেশন ⭐⭐⭐',
          explanationBn: `setcookie("name", "value", $expire) দিয়ে কুকি সেট করা হয়। time() + 3600 দিলে ১ ঘণ্টা, time() + 86400 দিলে ১ দিন এবং time() + (86400 * 30) দিলে ৩০ দিন কুকি কার্যকর থাকে।`,
          code: `// ১ ঘণ্টার জন্য কুকি সেট
setcookie("username", "Abbad", time() + 3600);

// কুকি রিড
$user = $_COOKIE["username"] ?? "Guest";
echo htmlspecialchars($user);`,
          outputPreview: `Abbad`
        },
        {
          title: '২. Modern Options Array সিনট্যাক্স (PHP 7.3+) ⭐⭐⭐',
          explanationBn: `আধুনিক পিএইচপিতে প্যারামিটারের বিশাল তালিকার বদলে অপশন অ্যারে পাস করা যায় যা কোড রিডিবিলিটি বাড়ায় এবং SameSite সাপোর্ট নিশ্চিত করে।`,
          code: `setcookie("theme", "dark", [
    "expires" => time() + (86400 * 30),
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Lax"
]);`,
          outputPreview: `Set-Cookie: theme=dark; expires=...; Max-Age=2592000; path=/; secure; HttpOnly; SameSite=Lax`
        },
        {
          title: '৩. গুরুত্বপূর্ণ সিকিউরিটি ফ্ল্যাগসমূহ (HttpOnly, Secure, SameSite) ⭐⭐⭐⭐⭐',
          explanationBn: `httponly: JavaScript (document.cookie) দিয়ে কুকি পড়া ব্লক করে XSS অ্যাটাকে সেশন চুরি ঠেকায়। secure: শুধুমাত্র HTTPS এনক্রিপ্টেড চ্যানেলে কুকি ট্রাফিকের অনুমতি দেয়। samesite: 'Lax' বা 'Strict' সেট করে ক্রস-সাইট CSRF আক্রমণ প্রতিরোধ করে।`,
          code: `// এন্টারপ্রাইজ সিকিউরিটি কনফিগারেশন
[
    "secure" => true,      // HTTPS Required
    "httponly" => true,    // Blocks JavaScript Access (Anti-XSS)
    "samesite" => "Strict" // Blocks Cross-Site Cookie Sharing (Anti-CSRF)
]`
        },
        {
          title: '৪. Headers Already Sent এরর ও আউটপুট রুলস ⚠️',
          explanationBn: `setcookie() ফাংশনটি HTTP Response Header পাঠায়। তাই কোনো echo, HTML ট্যাগ বা স্পেস আউটপুট হওয়ার আগেই setcookie() কল করতে হবে, অন্যথায় "Headers already sent" এরর দিয়ে স্ক্রিপ্ট ক্র্যাশ করবে।`,
          code: `//  সঠিক
setcookie("lang", "bn");
echo "Hello World";

// ❌ ভুল (Fatal/Warning)
echo "Hello World";
setcookie("lang", "bn"); // Error: Cannot modify header information!`
        },
        {
          title: '৫. কুকি ডিলিটেশন টেকনিক',
          explanationBn: `ব্রাউজার থেকে কুকি মুছতে খালি ভ্যালু এবং বর্তমান সময়ের চেয়ে পুরোনো টাইমস্ট্যাম্প (যেমন time() - 3600) পাঠাতে হয়।`,
          code: `setcookie("remember_token", "", [
    "expires" => time() - 3600,
    "path" => "/"
]);`
        },
        {
          title: '৬. "Remember Me" প্রোডাকশন আর্কিটেকচার ⭐⭐⭐⭐⭐',
          explanationBn: `কুকিতে কখনোই সরাসরি user_id বা পাসওয়ার্ড রাখবেন না কারণ ইউজার ব্রাউজারে কুকি ভ্যালু পরিবর্তন করতে পারে। র্যান্ডম ক্রিপ্টোগ্রাফিক টোকেন তৈরি করুন, ডাটাবেজে তার SHA-256 হ্যাশ সেভ করুন এবং কুকিতে র্যান্ডম টোকেন পাঠান।`,
          code: `// 1. Generate Secure Token on Login
$rawToken = bin2hex(random_bytes(32));
$hashedToken = hash('sha256', $rawToken);

// 2. Save $hashedToken in DB linked to user ID
// 3. Set $rawToken in HttpOnly Cookie
setcookie("remember_token", $rawToken, [
    "expires" => time() + (86400 * 30),
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Lax"
]);`
        },
        {
          title: '৭. Cookie বনাম Session পার্থক্য',
          explanationBn: `Cookie ক্লায়েন্ট ব্রাউজারে সংরক্ষিত থাকে (User-modifiable), আর Session এর আসল ডাটা সার্ভার মেমরি/ডিস্কে থাকে। তাই লগিন অথেনটিকেশনের জন্য Session এবং দীর্ঘমেয়াদী পছন্দের জন্য Cookie উপযুক্ত।`,
          code: `// Cookie (Client)
$_COOKIE["theme"] = "dark";

// Session (Server)
$_SESSION["auth_user_id"] = 1042;`
        }
      ],
      keyPointsBn: [
        'setcookie() অবশ্যই যেকোনো HTML বা echo আউটপুটের পূর্বে কল করতে হবে।',
        'কুকিতে পাসওয়ার্ড, ক্রেডিট কার্ড বা সেনসিটিভ ডেটা রাখা সম্পূর্ণ নিষিদ্ধ।',
        'XSS প্রতিরোধে httponly => true এবং HTTPS এর জন্য secure => true দিন।',
        'CSRF প্রতিরোধে samesite => "Lax" বা "Strict" ব্যবহার করুন।',
        'কুকি ডিলিট করতে এক্সপায়ারি past time (time() - 3600) সেট করুন।',
        '$_COOKIE থেকে পাওয়া যেকোনো ডাটা HTML এ প্রিন্ট করার সময় htmlspecialchars() করুন।'
      ],
      practiceExamples: [
        {
          title: 'নিরাপদ থিম সুইচিং কন্ট্রোলার',
          descriptionBn: 'হোয়াইটলিস্ট ভ্যালিডেশন সহ ইউজার থিম কুকিতে সেভ ও রিড।',
          code: `<?php
$allowedThemes = ['light', 'dark', 'emerald'];
$theme = $_COOKIE['theme'] ?? 'dark';

if (!in_array($theme, $allowedThemes, true)) {
    $theme = 'dark';
}

if (isset($_GET['set_theme']) && in_array($_GET['set_theme'], $allowedThemes, true)) {
    $theme = $_GET['set_theme'];
    setcookie('theme', $theme, [
        'expires' => time() + (86400 * 30),
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
}
echo "Active Theme: " . htmlspecialchars($theme);
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: সরাসরি ইউজার আইডি ও পাসওয়ার্ড কুকিতে রাখা
setcookie("user_id", "42");
setcookie("password", "mypass123"); // মারাত্মক নিরাপত্তা ঝুঁকি!

// রিড করার সময় সরাসরি বিশ্বাস করা
$loggedInUser = $_COOKIE["user_id"]; // ইউজার DevTools দিয়ে 42 পরিবর্তন করে 1 (Admin) বানাতে পারে!`,
        juniorProblems: [
          'কুকিতে পাসওয়ার্ড প্লেইন টেক্সটে সেভ করায় ক্লায়েন্ট পিসি থেকে চুরি হতে পারে।',
          'user_id ক্লায়েন্ট সাইডে থাকায় যে কেউ ব্রাউজার ইন্সপেক্ট করে আইডি পরিবর্তন করে অন্য কারো অ্যাকাউন্টে প্রবেশ করতে পারে (Privilege Escalation)।',
          'HttpOnly ফ্ল্যাগ না থাকায় XSS অ্যাটাকে জাভাস্ক্রিপ্ট দিয়ে কুকি হাইজ্যাক করা যায়।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: র্যান্ডম টোকেন ও সিকিউরিটি ফ্ল্যাগ সহ Remember Me
$token = bin2hex(random_bytes(32));
$tokenHash = hash('sha256', $token);

// ডাটাবেজে $tokenHash সেভ করা হয়
// ব্রাউজারে নিরাপদ অপশন সহ কুকি প্রেরণ
setcookie("remember_device", $token, [
    "expires" => time() + (86400 * 30),
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Strict"
]);`,
        seniorBenefits: [
          'র্যান্ডম টোকেন ব্যবহার করায় কোনো ইউজার আইডি বা সেনসিটিভ তথ্য উন্মোচিত হয় না।',
          'HttpOnly থাকায় ক্ষতিকর জাভাস্ক্রিপ্ট কুকি অ্যাক্সেস করতে পারে না।',
          'SameSite: Strict থাকায় থার্ড পার্টি সাইট থেকে কোনো CSRF রিকোয়েস্টে কুকি পাঠানো হয় না।'
        ],
        architectAdvice: 'কুকিকে কেবল স্টেটলেস প্রেফারেন্স (যেমন থিম বা ভাষা) এবং ক্রিপ্টোগ্রাফিক র্যান্ডম রিমেম্বার টোকেনের জন্য ব্যবহার করুন। সমস্ত ট্রানজেকশনাল ও ইউজার অথেনটিকেশন স্টেট সার্ভার সাইড সেশনে রাখুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'DO_FCALL -> php_setcookie()',
          'sapi_add_header_ex() writes Set-Cookie to SAPI header table',
          'php_request_shutdown() cleans output buffers'
        ],
        explanationBn: `setcookie() যখন এক্সিকিউট হয়, পিএইচপি ইন্টারনাল C ফাংশন 'php_setcookie()' কল করে যা ওয়েব সার্ভার ইন্টারফেসের (SAPI) হেডার লিংকলিস্টে 'Set-Cookie: ...' স্ট্রিং যোগ করে। যদি আউটপুট বাফারে ইতোমধ্যে বডি ডাটা সেন্ট হয়ে গিয়ে থাকে, SAPI হেডার রিজেক্ট করে "Headers already sent" এরর রেইজ করে।`
      },
      security: {
        vulnerabilityType: 'Session Hijacking, Insecure Direct Object Reference (IDOR) & XSS Cookie Theft',
        attackVectorBn: 'HttpOnly না থাকলে ম্যালিশিয়াস স্ক্রিপ্ট `document.cookie` পড়ে হ্যাকারের সার্ভারে পাঠাতে পারে; আর ক্লায়েন্ট সাইড user_id কুকি সহজে এডিট করে প্রিভিলেজ এসকেলেশন করা যায়।',
        preventionRuleBn: 'কখনোই কুকিতে প্রাইমারি কি (ID) বা পাসওয়ার্ড রাখবেন না। সর্বদা HttpOnly=true, Secure=true এবং SameSite=Lax/Strict কনফিগার করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'কুকি হলো পার্কিং লটের টোকেন। টোকেনে আপনার গাড়ির আসল ব্লুপ্রিন্ট বা ইঞ্জিন থাকে না, শুধু একটি ইউনিক নাম্বার থাকে যা গার্ডের খাতার সাথে মিলিয়ে আপনার পরিচয় যাচাই করা হয়।',
      beginnerSteps: [
        {
          step: 1,
          title: 'হেডারের আগে কল করুন',
          explanationBn: 'যেকোনো echo বা HTML লেখার আগেই setcookie() কল করুন।'
        },
        {
          step: 2,
          title: 'অপশন অ্যারে ব্যবহার',
          explanationBn: 'expires, path, secure, httponly ও samesite অপশন পাস করুন।'
        },
        {
          step: 3,
          title: 'মুছতে past time দিন',
          explanationBn: 'time() - 3600 দিলে ব্রাউজার কুকি মুছে দেয়।'
        }
      ],
      trainerSecretsBn: [
        'setcookie() কল করার সাথে সাথে $_COOKIE তে ডাটা আসে না; এটি পরবর্তী রিকোয়েস্টে ব্রাউজার থেকে আসে।',
        'কুকি আউটপুট করার সময় সর্বদা htmlspecialchars() দিয়ে স্যানিটাইজ করুন।'
      ],
      commonGotchasBn: [
        'ভুল: echo এর পর setcookie দিলে "Headers already sent" এরর আসে।',
        'ভুল: একই রিকোয়েস্টে setcookie() করে সাথে সাথে $_COOKIE রিড করার চেষ্টা করা।'
      ],
      interviewQuestions: [
        {
          questionBn: 'HttpOnly এবং SameSite ফ্ল্যাগের কাজ কী? কেন এগুলো অপরিহার্য?',
          answerBn: 'HttpOnly ফ্ল্যাগ জাভাস্ক্রিপ্ট (document.cookie) দিয়ে কুকি রিড করা বন্ধ করে XSS কুকি চুরি ঠেকায়। আর SameSite ফ্ল্যাগ (Lax/Strict) ক্রস-সাইট রিকোয়েস্টে ব্রাউজারকে কুকি পাঠানো থেকে বিরত রেখে CSRF (Cross-Site Request Forgery) আক্রমণ প্রতিহত করে।',
          seniorTipBn: 'হেডার্স অলরেডি সেন্টের মূল কারণ ও আউটপুট বাফারিং (ob_start) এর ভূমিকা ব্যাখ্যা করুন।'
        }
      ],
      studentChallenge: {
        title: 'সিকিউর প্রিফারেন্স কুকি মেকার',
        taskBn: 'PHP 7.3+ অপশন অ্যারে সিনট্যাক্স ব্যবহার করে "user_currency" নামের একটি কুকি তৈরি করুন যা ৬০ দিনের জন্য বৈধ থাকবে এবং HttpOnly ও Secure ফ্ল্যাগ চালু থাকবে।',
        hintBn: 'time() + (86400 * 60) এবং ["httponly" => true, "secure" => true] ব্যবহার করুন।',
        starterCode: `<?php
// ৬০ দিনের কারেন্সি কুকি সেট করার কোড লিখুন
`,
        solutionCode: `<?php
setcookie("user_currency", "BDT", [
    "expires" => time() + (86400 * 60),
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Lax"
]);
echo "Currency preference cookie configured!";
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Cookies & Secure Client State',
          subtitle: 'Safe Storage, Lifecycle & Security Headers',
          bulletPoints: [
            'setcookie() must be sent before any HTTP body output',
            'Modern Options Array Syntax (PHP 7.3+)',
            'Crucial Security: HttpOnly (anti-XSS) & SameSite (anti-CSRF)',
            'Deletion pattern via past timestamps (time() - 3600)'
          ],
          trainerSpeechNotes: 'Never store plain identifiers or passwords in cookies. Store cryptographic random tokens and verify them on the server.',
          analogyOrHighlight: 'Cookie = Parking Token | Never store the actual car inside the token'
        }
      ]
    }
  },
  {
    id: 'php-sessions',
    title: 'PHP Sessions',
    category: 'advanced',
    tag: 'Server-Side State & Authentication',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'session_start(), $_SESSION সুপারগ্লোবাল, session_regenerate_id(), ফ্ল্যাশ মেসেজ, অথেনটিকেশন গার্ড ও সিকিউর লগআউট আর্কিটেকচার।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Enterprise Session & Auth Engine</h2>";

// ১. সেশন শুরু (সিমুলেশন ও কনফিগারেশন)
if (session_status() === PHP_SESSION_NONE) {
    // সিকিউর সেশন কনফিগারেশন
    ini_set('session.cookie_httponly', '1');
    ini_set('session.use_only_cookies', '1');
    session_start();
}

// ২. মক লগিন অ্যাকশন ও সেশন আইডি রিজেনারেশন (Session Fixation প্রতিরোধ)
$mockUser = [
    "id" => 1042,
    "name" => "Abbad",
    "email" => "abbad@example.com",
    "role" => "admin"
];

// সেশন রিজেনারেট (লগিনের সময় আইডি পরিবর্তন)
session_regenerate_id(true);

$_SESSION["auth_user"] = [
    "id" => $mockUser["id"],
    "name" => $mockUser["name"],
    "role" => $mockUser["role"],
    "logged_in_at" => date("Y-m-d H:i:s")
];

// ৩. Flash Message সেট (একবার দেখিয়ে মুছে ফেলা)
$_SESSION["_flash"]["success"] = "Welcome back, " . $mockUser["name"] . "! Login successful.";

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. Active Session State Inspection</h4>";
echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-family:monospace; font-size:13px;'>";
echo "Session ID (PHPSESSID): <span style='color:#38bdf8;'>" . session_id() . "</span><br>";
echo "Auth User ID: <span style='color:#4ade80;'>" . $_SESSION["auth_user"]["id"] . "</span><br>";
echo "User Role: <span style='color:#fbbf24;'>" . $_SESSION["auth_user"]["role"] . "</span><br>";
echo "Logged In At: <span style='color:#94a3b8;'>" . $_SESSION["auth_user"]["logged_in_at"] . "</span>";
echo "</div>";

// ৪. Flash Message রেন্ডার ও আনসেট
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. Flash Message Lifecycle</h4>";
if (isset($_SESSION["_flash"]["success"])) {
    echo "<div style='background:#064e3b; border-left:4px solid #10b981; padding:10px; border-radius:6px; color:#34d399;'>";
    echo "🔔 <b>Flash Alert:</b> " . htmlspecialchars($_SESSION["_flash"]["success"]);
    echo "</div>";
    unset($_SESSION["_flash"]["success"]); // তাৎক্ষণিক ডিলিট
    echo "<small style='color:#94a3b8;'>✓ Flash message displayed and immediately unset from \$_SESSION.</small><br>";
}

// ৫. Role-Based Authorization Guard ডেমো
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. Role-Based Access Control (RBAC) Guard</h4>";
$requiredRole = "admin";
$currentRole = $_SESSION["auth_user"]["role"] ?? "guest";

if ($currentRole === $requiredRole) {
    echo "<span style='color:#34d399;'>✓ Access Granted to Admin Dashboard Area.</span><br>";
} else {
    echo "<span style='color:#f43f5e;'>❌ 403 Forbidden: Insufficient permissions!</span><br>";
}

// ৬. শপিং কার্ট সেশন স্ট্রাকচার
$_SESSION["cart"] = [
    ["sku" => "KB-90", "item" => "Mechanical Keyboard", "qty" => 1, "price" => 3500],
    ["sku" => "MS-12", "item" => "Wireless Mouse", "qty" => 2, "price" => 1200]
];
$cartTotal = array_reduce($_SESSION["cart"], fn($carry, $i) => $carry + ($i["qty"] * $i["price"]), 0);
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. Shopping Cart in Session</h4>";
echo "Cart Items: <b style='color:#38bdf8;'>" . count($_SESSION["cart"]) . " items</b> | Total Value: <b style='color:#4ade80;'>৳" . number_format($cartTotal, 2) . "</b><br>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Session হলো একটি সার্ভার-সাইড স্টেট ম্যানেজমেন্ট মেকানিজম যা একাধিক HTTP রিকোয়েস্টের মধ্যে ইউজারের অথেনটিকেশন স্টেট, কার্ট ডেটা বা ফ্ল্যাশ মেসেজ মেমরিতে ধরে রাখে। ব্রাউজারে কেবল একটি ক্রিপ্টোগ্রাফিক সেশন আইডি কুকি (PHPSESSID) থাকে এবং সমস্ত সংবেদনশীল ডেটা সার্ভারের সুরক্ষিত স্টোরেজে সংরক্ষিত থাকে।`,
      lessonSections: [
        {
          title: '১. session_start() এবং লাইফসাইকেল ⭐⭐⭐',
          explanationBn: `যেকোনো সেশন ডাটা রিড বা রাইট করার পূর্বে পেজের একেবারে শুরুতে session_start() কল করতে হবে। এটি ব্রাউজার থেকে আসা PHPSESSID কুকি চেক করে সার্ভারে থাকা সংশ্লিষ্ট ডাটা $_SESSION সুপারগ্লোবালে আনপ্যাক করে।`,
          code: `session_start();

$_SESSION["user_id"] = 1042;
$_SESSION["role"] = "admin";

echo "User ID: " . $_SESSION["user_id"];`,
          outputPreview: `User ID: 1042`
        },
        {
          title: '২. Session কীভাবে কাজ করে (Architecture Flow) ⭐⭐⭐⭐⭐',
          explanationBn: `১. ব্রাউজার রিকোয়েস্ট পাঠায় -> ২. পিএইচপি PHPSESSID কুকি রিড করে -> ৩. সার্ভার /tmp বা রেডিস থেকে ফাইলের ডাটা পড়ে -> ৪. $_SESSION অ্যারে লোড হয় -> ৫. স্ক্রিপ্ট শেষে পিএইচপি ডাটা অটোমেটিক ফাইলে সেভ করে।`,
          code: `// Browser: Cookie: PHPSESSID=4a8f9b2c8e1...
// Server: /tmp/sess_4a8f9b2c8e1... -> serialized array data`
        },
        {
          title: '৩. session_regenerate_id(true) ও Session Fixation প্রতিরোধ ⭐⭐⭐⭐⭐',
          explanationBn: `লগিন সফল হওয়ার সাথে সাথে session_regenerate_id(true) কল করা আবশ্যক। এটি পুরোনো সেশন আইডি ধ্বংস করে সম্পূর্ণ নতুন আইডি জেনারেট করে, ফলে অ্যাটাকারের পূর্বনির্ধারিত সেশন ফিক্সেশন আক্রমণ ১০০% ব্যর্থ হয়।`,
          code: `// Login verification success:
if (password_verify($password, $user['password_hash'])) {
    session_regenerate_id(true); //  Regenerate & delete old session file
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['role'] = $user['role'];
}`
        },
        {
          title: '৪. ফ্ল্যাশ মেসেজ প্যাটার্ন (Flash Messages) ⭐⭐⭐',
          explanationBn: `এক পেজ থেকে রিডাইরেক্ট করে অন্য পেজে একবারের জন্য সফল বার্তা দেখাতে ফ্ল্যাশ মেসেজ ব্যবহৃত হয়। মেসেজ প্রিন্ট করার পরপরই unset($_SESSION['flash']) দিয়ে তা মুছে ফেলতে হয়।`,
          code: `// Page 1 (Submit):
$_SESSION['flash_msg'] = "Order successfully created!";
header("Location: dashboard.php");
exit;

// Page 2 (Dashboard):
if (isset($_SESSION['flash_msg'])) {
    echo "<div class='alert'>" . htmlspecialchars($_SESSION['flash_msg']) . "</div>";
    unset($_SESSION['flash_msg']); // Display and delete
}`
        },
        {
          title: '৫. অথেনটিকেশন ও অথরাইজেশন গার্ড (Auth & RBAC Middleware)',
          explanationBn: `Authentication চেক করে ইউজার লগইন করা আছে কিনা, আর Authorization চেক করে ইউজারের নির্দিষ্ট পেজে প্রবেশের অনুমতি (Role) আছে কিনা।`,
          code: `session_start();

// Auth Guard
if (!isset($_SESSION['user_id'])) {
    header("Location: /login.php");
    exit;
}

// RBAC Guard
if (($_SESSION['role'] ?? '') !== 'admin') {
    http_response_code(403);
    die("Access Denied: Admin privileges required.");
}`
        },
        {
          title: '৬. সম্পূর্ণ ও নিরাপদ লগআউট প্যাটার্ন (Secure Logout) ⭐⭐⭐⭐⭐',
          explanationBn: `নিরাপদ লগআউটের জন্য ৩টি ধাপ অনুসরণ করতে হয়: ১. $_SESSION = [] দিয়ে মেমরি খালি করা, ২. সেশন কুকি ব্রাউজার থেকে এক্সপায়ার করা, ৩. session_destroy() দিয়ে সার্ভার ফাইল মুছে ফেলা।`,
          code: `session_start();
$_SESSION = [];

if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
}

session_destroy();
header("Location: /login.php");
exit;`
        },
        {
          title: '৭. সেশনে কী রাখা উচিত আর কী রাখা উচিত নয়? ⭐⭐⭐',
          explanationBn: `সেশনে শুধুমাত্র user_id, role, নাম ও CSRF টোকেন রাখুন। কখনো প্লেইন পাসওয়ার্ড, বিশাল ডাটাবেজ কোয়েরি রেজাল্ট বা বড় ফাইল সেশনে রাখবেন না কারণ এটি সার্ভার মেমরি অপচয় করে।`,
          code: `//  উত্তম:
$_SESSION['user_id'] = 1042;
$_SESSION['role'] = 'manager';

// ❌ ভুল:
$_SESSION['all_products'] = $hugeArrayOf10000Rows;
$_SESSION['password'] = $plainPassword;`
        }
      ],
      keyPointsBn: [
        'প্রতিটি পেজের শুরুতে অবশ্যই session_start() কল করতে হবে।',
        'লগিনের সাথে সাথে session_regenerate_id(true) কল করা বাধ্যতামূলক (Session Fixation প্রতিরোধ)।',
        'সেশনে কখনো পাসওয়ার্ড বা বিশাল অবজেক্ট ডাটা রাখবেন না।',
        'এককালীন নোটিফিকেশনের জন্য ফ্ল্যাশ মেসেজ প্যাটার্ন (প্রিন্ট শেষে unset) ব্যবহার করুন।',
        'লগআউটের সময় সেশন ডাটা খালি করার পাশাপাশি সেশন কুকিও এক্সপায়ার করুন।',
        'প্রটেক্টেড রুটে ইউজার আইডি এবং রোলের কঠোর ভ্যালিডেশন নিশ্চিত করুন।'
      ],
      practiceExamples: [
        {
          title: 'কমপ্লিট অথেনটিকেশন মিডলওয়্যার সিস্টেম',
          descriptionBn: 'লগিন গার্ড ও রোল চেকিং সহ রিইউজেবল ফাংশন।',
          code: `<?php
function requireAuth(): array {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    if (!isset($_SESSION['user_id'])) {
        header("Location: /login.php");
        exit;
    }
    return [
        'id' => $_SESSION['user_id'],
        'role' => $_SESSION['role'] ?? 'user'
    ];
}

function requireAdmin(): void {
    $user = requireAuth();
    if ($user['role'] !== 'admin') {
        http_response_code(403);
        die("403 Forbidden - Admin access only.");
    }
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: session_regenerate_id ছাড়া লগিন ও অসম্পূর্ণ লগআউট
session_start();
// লগিনের সময় আইডি চেঞ্জ নেই (Session Fixation ঝুঁকি)
$_SESSION['logged_in'] = true;
$_SESSION['password'] = $userPassword; // পাসওয়ার্ড সেভ করা হয়েছে!

// লগআউট ফাইলে:
session_destroy(); // কুকি রিমুভ হয়নি, $_SESSION মেমরিতে রয়ে গেছে`,
        juniorProblems: [
          'session_regenerate_id(true) না থাকায় অ্যাটাকার ভিকটিমের সেশন হাইজ্যাক করতে পারে।',
          'সেশনে পাসওয়ার্ড রাখার কারণে মেমরি ডাম্প থেকে ডাটা লিক হওয়ার মারাত্মক ঝুঁকি তৈরি হয়।',
          'লগআউটে শুধু session_destroy() দেওয়ায় বর্তমান রিকোয়েস্টে $_SESSION ভ্যারিয়েবল মেমরিতে থেকে যায়।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: আইডেন্টিটি গার্ড, সেশন রিজেনারেশন ও সিকিউর লগআউট
function loginUser(array $user): void {
    if (session_status() === PHP_SESSION_NONE) session_start();
    session_regenerate_id(true); // Atomic ID swap
    $_SESSION['auth_user_id'] = $user['id'];
    $_SESSION['auth_role'] = $user['role'];
    $_SESSION['last_activity'] = time();
}

function logoutUser(): void {
    if (session_status() === PHP_SESSION_NONE) session_start();
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $p = session_get_cookie_params();
        setcookie(session_name(), '', time() - 86400, $p['path'], $p['domain'], $p['secure'], $p['httponly']);
    }
    session_destroy();
}`,
        seniorBenefits: [
          'session_regenerate_id(true) ফিক্সেশন অ্যাটাক সম্পূর্ণ বন্ধ করে।',
          'সেশনে কেবল ন্যূনতম আইডেন্টিফায়ার সংরক্ষিত থাকে।',
          'সম্পূর্ণ মেমরি ও কুকি ক্লিনিং নিশ্চিত করে কোনো ইউজার স্টেট অবশিষ্ট থাকে না।'
        ],
        architectAdvice: 'হাই-স্কেল ডিস্ট্রিবিউটেড ক্লাউড অ্যাপ্লিকেশনে পিএইচপির ডিফল্ট ডিস্ক ফাইল সেশনের বদলে Redis বা Memcached সেশন ড্রাইভার (session.save_handler = redis) ব্যবহার করুন যাতে লোড ব্যালেন্সারের পেছনে সব সার্ভার একই সেশন ডাটা শেয়ার করতে পারে।'
      },
      zendInternals: {
        opcodesSummary: [
          'DO_FCALL -> php_session_start()',
          'PS(mod)->open() and PS(mod)->read() serializer unpacking',
          'php_session_flush() on script termination'
        ],
        explanationBn: `session_start() কল হলে Zend Engine 'PS(mod)->read()' হ্যান্ডলার ইনভোক করে যা ডিস্ক বা রেডিস থেকে সিরিয়ালাইজড স্ট্রিং রিড করে এবং পিএইচপির ইন্টারনাল 'php_unserialize' ফাংশন দিয়ে $_SESSION হ্যাশ টেবিলে লোড করে। স্ক্রিপ্ট এক্সিকিউশন শেষে অটোমেটিক 'php_session_flush()' ট্রিগার হয়ে পরিবর্তিত ডাটা পুনরায় ডিস্কে সিরিয়ালাইজ করে স্টোর করে।`
      },
      security: {
        vulnerabilityType: 'Session Fixation, Session Hijacking & Privilege Escalation',
        attackVectorBn: 'অ্যাটাকার ভিকটিমকে একটি নির্দিষ্ট PHPSESSID সহ লিংক পাঠিয়ে লগিন করায়; লগিনের পর আইডি পরিবর্তন না হলে অ্যাটাকার সেই আইডি দিয়ে ইউজারের অ্যাকাউন্টে ঢুকে পড়ে।',
        preventionRuleBn: 'লগিনের পরপরই session_regenerate_id(true) কল করুন। session.cookie_httponly ও session.cookie_secure চালু রাখুন এবং সেশন ডাটার ওপর ভিত্তি করে কঠোর রোল অথরাইজেশন নিশ্চিত করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'Session হলো ব্যাংকের লকার রুমের মতো। আপনার হাতে শুধু লকারের চাবি (PHPSESSID) থাকে, আর আসল সম্পদ (টাকা/স্টেট) ব্যাংকের সুরক্ষিত ভল্টের ভেতর (সার্ভার মেমরি) থাকে।',
      beginnerSteps: [
        {
          step: 1,
          title: 'session_start() কল করুন',
          explanationBn: 'প্রতিটি পেজের সবার উপরে session_start() দিন।'
        },
        {
          step: 2,
          title: '$_SESSION ব্যবহার করুন',
          explanationBn: '$_SESSION["user_id"] দিয়ে ডাটা সেট ও রিড করুন।'
        },
        {
          step: 3,
          title: 'লগিনে regenerate করুন',
          explanationBn: 'লগিন সফল হলে session_regenerate_id(true) দিন।'
        }
      ],
      trainerSecretsBn: [
        'সবসময় মনে রাখবেন: Cookie = ক্লায়েন্ট সাইড, Session = সার্ভার সাইড।',
        'লগআউটের সময় $_SESSION = [] এবং সেশন কুকি ডিলিট করা কখনোই ভুলবেন না।'
      ],
      commonGotchasBn: [
        'ভুল: session_start() না লিখে $_SESSION অ্যাক্সেস করার চেষ্টা করা।',
        'ভুল: লগিনের পর session_regenerate_id(true) না দেওয়া।'
      ],
      interviewQuestions: [
        {
          questionBn: 'Session Fixation আক্রমণ কী এবং এটি কীভাবে প্রতিরোধ করা যায়?',
          answerBn: 'সেশন ফিক্সেশন হলো এমন একটি আক্রমণ যেখানে অ্যাটাকার ইউজারকে পূর্বনির্ধারিত সেশন আইডি দিয়ে লগিন করায়। ইউজার লগিন করলে যদি একই সেশন আইডি বহাল থাকে তবে অ্যাটাকারও লগিন এক্সেস পেয়ে যায়। এটি প্রতিরোধে লগিন সফল হওয়ার সাথে সাথেই session_regenerate_id(true) কল করে পুরোনো আইডি মুছে নতুন আইডি ইস্যু করতে হয়।',
          seniorTipBn: 'সেশন কুকি প্যারামিটার (HttpOnly, Secure, SameSite) এবং রেডিস সেশন স্টোরেজের আর্কিটেকচার উল্লেখ করুন।'
        }
      ],
      studentChallenge: {
        title: 'লগিন স্টেট গার্ড ও রোল চেকার তৈরি',
        taskBn: 'একটি ফাংশন লিখুন যা সেশন চেক করবে: ইউজার লগিন না থাকলে false রিটার্ন করবে, আর লগিন থাকলে তার রোল যদি "editor" বা "admin" হয় তবে true রিটার্ন করবে।',
        hintBn: 'isset($_SESSION["user_id"]) এবং in_array($_SESSION["role"], ["editor", "admin"]) চেক করুন।',
        starterCode: `<?php
// রোল ও লগিন চেকিং ফাংশন লিখুন
`,
        solutionCode: `<?php
function canEditContent(): bool {
    if (session_status() === PHP_SESSION_NONE) session_start();
    if (!isset($_SESSION['user_id'])) return false;
    
    $role = $_SESSION['role'] ?? 'guest';
    return in_array($role, ['editor', 'admin'], true);
}
$_SESSION['user_id'] = 5;
$_SESSION['role'] = 'editor';
echo canEditContent() ? "Access Granted: Can Edit" : "Access Denied";
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Enterprise Session Management',
          subtitle: 'Authentication, Authorization & Session Hardening',
          bulletPoints: [
            'session_start() lifecycle and $_SESSION superglobal',
            'session_regenerate_id(true) to mitigate Session Fixation',
            'Flash Message UX pattern with immediate unset()',
            'Rock-solid logout flow (Memory cleanup + Cookie expiry + session_destroy)'
          ],
          trainerSpeechNotes: 'Never store plain credentials in sessions. Store minimum identifiers and regenerate the session ID on every authentication state transition.',
          analogyOrHighlight: 'Session = Bank Locker Vault | PHPSESSID = The Key in Your Pocket'
        }
      ]
    }
  },
  {
    id: 'php-filters',
    title: 'PHP Filters',
    category: 'advanced',
    tag: 'Validation & Sanitization Core',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Validate vs Sanitize, filter_var(), filter_input(), FILTER_VALIDATE_EMAIL/INT/URL/IP/BOOLEAN ও আউটপুট সিকিউরিটি।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Input Filtering & Validation Engine</h2>";

// ১. আন-ট্রাস্টেড ডেমো ইউজার ইনপুট
$rawInputs = [
    "email" => "user.dev+test@example.com",
    "age"   => "28",
    "url"   => "https://google.com/search?q=php",
    "ip"    => "192.168.1.50",
    "is_pro"=> "yes"
];

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. কোর ভ্যালিডেশন ফিল্টার্স (filter_var)</h4>";

// ইমেইল ভ্যালিডেশন
$email = filter_var($rawInputs["email"], FILTER_VALIDATE_EMAIL);
echo "Email Validation: " . ($email ? "<span style='color:#4ade80;'>✓ Valid ({$email})</span>" : "<span style='color:#f43f5e;'>✗ Invalid</span>") . "<br>";

// ইন্টিজার ভ্যালিডেশন ও রেঞ্জ চেকিং (১৮-৬০ বছর)
$age = filter_var($rawInputs["age"], FILTER_VALIDATE_INT, [
    "options" => ["min_range" => 18, "max_range" => 60]
]);
echo "Age (18-60): " . ($age !== false ? "<span style='color:#4ade80;'>✓ Valid ({$age} years)</span>" : "<span style='color:#f43f5e;'>✗ Out of range</span>") . "<br>";

// URL ভ্যালিডেশন
$url = filter_var($rawInputs["url"], FILTER_VALIDATE_URL);
echo "URL Validation: " . ($url ? "<span style='color:#4ade80;'>✓ Valid ({$url})</span>" : "<span style='color:#f43f5e;'>✗ Invalid URL</span>") . "<br>";

// IP অ্যাড্রেস ভ্যালিডেশন (IPv4)
$ip = filter_var($rawInputs["ip"], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4);
echo "IPv4 Check: " . ($ip ? "<span style='color:#4ade80;'>✓ Valid IP ({$ip})</span>" : "<span style='color:#f43f5e;'>✗ Invalid IP</span>") . "<br>";

// বুলিয়ান ভ্যালিডেশন (FILTER_NULL_ON_FAILURE)
$isPro = filter_var($rawInputs["is_pro"], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
echo "Boolean (yes/no/1/0): " . ($isPro === true ? "<span style='color:#38bdf8;'>✓ True (Pro Member)</span>" : "<span style='color:#94a3b8;'>False/Null</span>") . "<br>";

echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. স্যানিটাইজেশন বনাম ভ্যালিডেশন ও আউটপুট এস্কেপিং</h4>";
$dirtyInput = "<script>alert('xss')</script>user@domain.com";
$sanitizedEmail = filter_var($dirtyInput, FILTER_SANITIZE_EMAIL);
$isSanitizedValid = filter_var($sanitizedEmail, FILTER_VALIDATE_EMAIL);

echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-size:13px; font-family:monospace; color:#cbd5e1;'>";
echo "Raw Input: <span style='color:#f43f5e;'>" . htmlspecialchars($dirtyInput) . "</span><br>";
echo "After FILTER_SANITIZE_EMAIL: <span style='color:#fbbf24;'>{$sanitizedEmail}</span><br>";
echo "IsValid After Clean: " . ($isSanitizedValid ? "<b style='color:#4ade80;'>YES</b>" : "<b style='color:#f43f5e;'>NO</b>") . "<br>";
echo "Safe HTML Output: <span style='color:#38bdf8;'>" . htmlspecialchars($sanitizedEmail, ENT_QUOTES, 'UTF-8') . "</span>";
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP Filters হলো ব্রাউজার বা API থেকে আসা অনির্ভরযোগ্য ইনপুট (Untrusted Input) ভ্যালিডেট ও স্যানিটাইজ করার স্ট্যান্ডার্ড ইঞ্জিন। Validation (সঠিক ফরম্যাট কিনা যাচাই) এবং Sanitization (অবাঞ্ছিত ক্যারেক্টার ক্লিন করা) এর মাধ্যমে ইনপুট প্রসেসিং নিশ্চিত করা হয়। তবে মনে রাখতে হবে: Filter শুধুমাত্র ইনপুট যাচাইয়ের জন্য, XSS প্রতিরোধের জন্য Output Escaping (htmlspecialchars) এবং SQL Injection এর জন্য PDO Prepared Statement ব্যবহার করা বাধ্যতামূলক।`,
      lessonSections: [
        {
          title: '১. Validate বনাম Sanitize এর মৌলিক পার্থক্য ⭐⭐⭐⭐⭐',
          explanationBn: `Validation ডেটা বৈধ ফরম্যাটে আছে কিনা তা যাচাই করে সত্য/মিথ্যা দেয়। Sanitization ডেটা থেকে ক্ষতিকর বা অবাঞ্ছিত ক্যারেক্টার মুছে ক্লিন করার চেষ্টা করে। স্যানিটাইজ করলেই ডেটা বৈধ হয়ে যায় না, স্যানিটাইজেশনের পরও ভ্যালিডেশন করা প্রয়োজন হতে পারে।`,
          code: `// Validation: ফরম্যাট ঠিক আছে?
$isValidEmail = filter_var("admin@test.com", FILTER_VALIDATE_EMAIL); // returns "admin@test.com" or false

// Sanitization: ক্ষতিকর অংশ রিমুভ করা
$cleanEmail = filter_var("admin(test)@test.com", FILTER_SANITIZE_EMAIL); // "admintest@test.com"`
        },
        {
          title: '২. filter_var() ও কোর ভ্যালিডেশন ফিল্টার্স ⭐⭐⭐⭐⭐',
          explanationBn: `সবচেয়ে বহুল ব্যবহৃত ফাংশন হলো filter_var($var, $filter, $options)। ইমেইল, পূর্ণসংখ্যা, ইউআরএল ও আইপি অ্যাড্রেসের জন্য বিল্ট-ইন ফিল্টার কনস্ট্যান্ট রয়েছে।`,
          code: `// ইমেইল ভ্যালিডেশন
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("অবৈধ ইমেইল অ্যাড্রেস");
}

// ইন্টিজার ভ্যালিডেশন (অবশ্যই === false চেক করতে হবে)
if (filter_var($age, FILTER_VALIDATE_INT) === false) {
    die("অবৈধ বয়স");
}`
        },
        {
          title: '৩. Integer Range Validation (অপশন অ্যারে) ⭐⭐⭐',
          explanationBn: `পূর্ণসংখ্যার মান নির্দিষ্ট রেঞ্জের (যেমন ১৮ থেকে ৬০) মধ্যে আছে কিনা তা options অ্যারেতে min_range ও max_range দিয়ে এক লাইনে যাচাই করা যায়।`,
          code: `$age = filter_var($inputAge, FILTER_VALIDATE_INT, [
    "options" => [
        "min_range" => 18,
        "max_range" => 60
    ]
]);

if ($age === false) {
    die("বয়স অবশ্যই ১৮ থেকে ৬০ এর মধ্যে হতে হবে।");
}`
        },
        {
          title: '৪. URL ও IP অ্যাড্রেস ভ্যালিডেশন',
          explanationBn: `FILTER_VALIDATE_URL দিয়ে ওয়েব লিংক এবং FILTER_VALIDATE_IP দিয়ে ক্লায়েন্টের আইপি অ্যাড্রেস ভ্যালিডেট করা যায়। ফ্ল্যাগ হিসেবে FILTER_FLAG_IPV4 বা FILTER_FLAG_IPV6 দেওয়া যায়।`,
          code: `$url = filter_var($_POST['website'], FILTER_VALIDATE_URL);
$ip = filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4);`
        },
        {
          title: '৫. Boolean ভ্যালিডেশন ও FILTER_NULL_ON_FAILURE',
          explanationBn: `"1", "true", "on", "yes" কে true এবং "0", "false", "off", "no" কে false এ কনভার্ট করে। অবৈধ স্ট্রিংয়ের জন্য null পেতে FILTER_NULL_ON_FAILURE ফ্ল্যাগ ব্যবহার করা হয়।`,
          code: `$isActive = filter_var($_POST['agree'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
if ($isActive === null) {
    die("অনুগ্রহ করে Yes অথবা No সিলেক্ট করুন।");
}`
        },
        {
          title: '৬. filter_input() সুপারগ্লোবাল বাইন্ডিং ⭐⭐⭐⭐⭐',
          explanationBn: `$_POST["email"] সরাসরি এক্সেস করার বদলে filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL) ব্যবহার করলে ভ্যারিয়েবলটি আন-ডিফাইন্ড থাকলেও কোনো নোটিস ছাড়া সরাসরি ভ্যালিডেট হয়।`,
          code: `$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$page = filter_input(INPUT_GET, 'page', FILTER_VALIDATE_INT) ?: 1;

if ($email === false) {
    die("Invalid email input");
}`
        },
        {
          title: '৭. ফিল্টার সিকিউরিটি রুলস (Filter ≠ XSS ≠ SQL Injection) ⚠️',
          explanationBn: `Filter শুধুমাত্র ইনপুট ডেটার টাইপ ও ফরম্যাট নিশ্চিত করে। এটি কখনোই HTML আউটপুটে XSS প্রতিরোধ করে না (তার জন্য htmlspecialchars প্রয়োজন) এবং SQL Injection প্রতিরোধ করে না (তার জন্য PDO Prepared Statement প্রয়োজন)।`,
          code: `// 1. Input Validation:
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

// 2. Database Protection:
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);

// 3. Output Protection:
echo htmlspecialchars($email, ENT_QUOTES, 'UTF-8');`
        }
      ],
      keyPointsBn: [
        'ভ্যালিডেশন ব্যর্থ হলে filter_var() false প্রদান করে (ইন্টিজারের 0 ও false আলাদা করতে === false চেক করুন)।',
        'সুপারগ্লোবাল থেকে নিরাপদ ইনপুট নিতে filter_input(INPUT_POST, ...) ব্যবহার করুন।',
        'FILTER_SANITIZE_STRING আধুনিক পিএইচপিতে ডিপ্রিকেটেড; আউটপুট এস্কেপিংয়ে htmlspecialchars() ব্যবহার করুন।',
        'টাইপ কাস্টিং (int)$age করার আগে সর্বদা filter_var() দিয়ে ভ্যালিডেট করে নিন।',
        'ইনপুট ফিল্টারিং কখনোই PDO Prepared Statements এর বিকল্প নয়।'
      ],
      practiceExamples: [
        {
          title: 'রেজিস্ট্রেশন ফর্ম ইনপুট ভ্যালিডেটর',
          descriptionBn: 'ইমেইল, বয়স এবং ওয়েবসাইট ভ্যালিডেশন সহ ক্লিন ইনপুট প্রসেসিং।',
          code: `<?php
function validateRegistration(array $post): array {
    $email = filter_var($post['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $age = filter_var($post['age'] ?? '', FILTER_VALIDATE_INT, [
        'options' => ['min_range' => 18, 'max_range' => 70]
    ]);
    $website = filter_var($post['website'] ?? '', FILTER_VALIDATE_URL);

    $errors = [];
    if (!$email) $errors[] = "সঠিক ইমেইল দিন।";
    if ($age === false) $errors[] = "বয়স ১৮ থেকে ৭০ এর মধ্যে হতে হবে।";
    if ($post['website'] && !$website) $errors[] = "সঠিক ওয়েবসাইট URL দিন।";

    return [
        'valid' => empty($errors),
        'errors' => $errors,
        'data' => compact('email', 'age', 'website')
    ];
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: সরাসরি কাস্টিং ও ইনপুট ফিল্টার ছাড়াই ডাটাবেজে পাঠানো
$email = $_POST['email'];
$age = (int)$_POST['age']; // 'abc' দিলে 0 হয়ে যায়!

// কোনো ভ্যালিডেশন ছাড়া সরাসরি কুয়েরিতে জোড়া লাগানো
$sql = "INSERT INTO users (email, age) VALUES ('$email', $age)";`,
        juniorProblems: [
          '(int) কাস্টিং ভুল স্ট্রিংকে ০ বানিয়ে দেয়, যা ভুল ডেটা ডাটাবেজে সেভ করে।',
          'ইমেইল ফরম্যাট চেক না করায় ফেক বা ভাঙা স্ট্রিং ডাটাবেজে জমা হয়।',
          'SQL ইনজেকশন ও XSS এর জন্য পুরো সিস্টেম অরক্ষিত থাকে।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: filter_input ও Prepared Statement
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$age = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 18, 'max_range' => 100]
]);

if ($email === false || $age === false) {
    http_response_code(422);
    die("Validation Error: Invalid email or age.");
}

$stmt = $pdo->prepare("INSERT INTO users (email, age) VALUES (?, ?)");
$stmt->execute([$email, $age]);`,
        seniorBenefits: [
          'filter_input স্বয়ংক্রিয়ভাবে সুপারগ্লোবালের অস্তিত্ব ও টাইপ যাচাই করে।',
          'রেঞ্জ ভ্যালিডেশন নিশ্চিত করে কোনো অবাস্তব মান প্রবেশ করতে পারবে না।',
          'Prepared Statement ব্যবহারে SQL ইনজেকশন ঝুঁকি শূন্য।'
        ],
        architectAdvice: 'ইনপুট গ্রহণ করার পর: Validate -> Normalize/Cast -> Business Logic -> Parameterized Query -> Escaped Output - এই ৫টি ধাপের শৃঙ্খলা কঠোরভাবে বজায় রাখুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'ext/filter/filter.c -> php_filter_var()',
          'php_filter_validate_email() uses RFC 5322 state machine regex',
          'DO_FCALL -> filter_var'
        ],
        explanationBn: `PHP এর ext/filter সি-এক্সটেনশন অপটিমাইজড পার্সার ব্যবহার করে। যেমন FILTER_VALIDATE_EMAIL ব্যাকএন্ডে সি-লেভেলে একটি দ্রুতগামী RFC 5322 কমপ্লায়েন্ট স্টেট মেশিন এক্সিকিউট করে, যা ইউজারল্যান্ডে লেখা জটিল রেজেক্সের চেয়ে বহুগুণ দ্রুত মেমরি পার্স করে।`
      },
      security: {
        vulnerabilityType: 'Input Pollution, Bypass Validation & Unsafe Casting',
        attackVectorBn: 'ইনপুট ভ্যালিডেশন ছাড়া কাস্টিং করলে বা ফিল্টারের বদলে রেজেক্স মিসকনফিগার করলে অ্যাটাকার বাউন্ডারি ভ্যালু বাইপাস করে মেমরি ও ডেটাবেজ দূষিত করতে পারে।',
        preventionRuleBn: 'সর্বদা filter_var ও filter_input এর মাধ্যমে কঠোর টাইপ ও রেঞ্জ ভ্যালিডেশন প্রয়োগ করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'Filter হলো এয়ারপোর্টের সিকিউরিটি স্ক্যানারের মতো। স্ক্যানার (Validate) চেক করে আপনার সাথে বিপজ্জনক কোনো আইটেম আছে কিনা। যদি থাকে তবে পুরো এন্ট্রি রিজেক্ট করে দেওয়া হয়।',
      beginnerSteps: [
        {
          step: 1,
          title: 'filter_var কল করুন',
          explanationBn: 'filter_var($input, FILTER_VALIDATE_EMAIL) দিয়ে চেক করুন।'
        },
        {
          step: 2,
          title: '=== false চেক করুন',
          explanationBn: 'ইন্টিজার ভ্যালিডেশনে 0 ভ্যালিড ভ্যালু হতে পারে, তাই $age === false চেক করুন।'
        },
        {
          step: 3,
          title: 'filter_input ব্যবহার করুন',
          explanationBn: '$_POST/$_GET এর বদলে filter_input(INPUT_POST, ...) দিয়ে সরাসরি ভ্যালিডেট করুন।'
        }
      ],
      trainerSecretsBn: [
        'মনে রাখবেন: FILTER_VALIDATE_EMAIL শুধুমাত্র সিনট্যাক্স চেক করে, ইমেইলটি সত্যিই অস্তিত্বশীল কিনা তা নয়।',
        'Sanitization ডেটা ভ্যালিড প্রমাণ করে না; ক্লিন করার পর আবারও ভ্যালিডেট করুন।'
      ],
      commonGotchasBn: [
        'ভুল: if (!filter_var($age, FILTER_VALIDATE_INT)) লেখা - কারণ বয়স 0 হলে এটি ভুলভাবে ইনভ্যালিড ধরবে। সঠিক: === false।',
        'ভুল: ফিল্টার করলেই ডেটাবেজে সরাসরি ভ্যারিয়েবল পাঠিয়ে দেওয়া।'
      ],
      interviewQuestions: [
        {
          questionBn: 'filter_var($val, FILTER_VALIDATE_INT) এ কেন === false দিয়ে তুলনা করা উচিত?',
          answerBn: 'কারণ যদি ইনপুট মান "0" বা 0 হয়, তবে ফিল্টার ভ্যালিড ইন্টিজার হিসেবে 0 রিটার্ন করবে। যদি ঢিলেঢালা if (!$result) দিয়ে চেক করা হয়, তবে পিএইচপিতে 0 ফালসি (falsy) হওয়ায় সঠিক ইনপুটকেও অবৈধ মনে হবে। তাই কঠোর টাইপ চেকিং === false ব্যবহার করা আবশ্যক।',
          seniorTipBn: 'FILTER_NULL_ON_FAILURE ফ্ল্যাগ ও filter_input_array ব্যবহারের সুবিধা উল্লেখ করুন।'
        }
      ],
      studentChallenge: {
        title: 'এন্টারপ্রাইজ ইমেইল ও এজ ভ্যালিডেটর',
        taskBn: 'একটি ফাংশন তৈরি করুন যা একটি ইমেইল এবং বয়স (১৮-৫০) গ্রহণ করে ভ্যালিডেট করবে এবং উভয়টি বৈধ হলে true অন্যথায় false দেবে।',
        hintBn: 'filter_var এবং options অ্যারেতে min_range ও max_range ব্যবহার করুন।',
        starterCode: `<?php
// ইমেইল ও বয়স ভ্যালিডেশন ফাংশন লিখুন
`,
        solutionCode: `<?php
function isValidUser(string $email, mixed $age): bool {
    $validEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
    $validAge = filter_var($age, FILTER_VALIDATE_INT, [
        "options" => ["min_range" => 18, "max_range" => 50]
    ]);
    return ($validEmail !== false && $validAge !== false);
}
echo isValidUser("dev@php.net", 25) ? "Valid User Profile" : "Invalid Input";
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Input Filtering & Validation',
          subtitle: 'Type-Safe Data Processing & Perimeter Defense',
          bulletPoints: [
            'Validate checks format correctness; Sanitize strips characters',
            'filter_var() with FILTER_VALIDATE_EMAIL, INT, URL, IP',
            'Strict integer check with === false to prevent falsy 0 bugs',
            'filter_input() to safely read from superglobals without notices'
          ],
          trainerSpeechNotes: 'Never trust user input. Validate first, cast safely, and sanitize outputs.',
          analogyOrHighlight: 'Rule: Validate Input -> Parameterize Query -> Escape Output'
        }
      ]
    }
  },
  {
    id: 'php-filters-advanced',
    title: 'PHP Filters Advanced',
    category: 'advanced',
    tag: 'Bulk Filtering & Security Flags',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'filter_input_array(), FILTER_REQUIRE_ARRAY, FILTER_REQUIRE_SCALAR, স্কিম চেকিং ও কাস্টম বিজনেস রুলস।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Advanced Filtering & Array Pipelines</h2>";

// ১. মাল্টিপল ইনপুট একসাথে প্রসেসিং (filter_var_array)
$formData = [
    "user_email" => "lead_architect@enterprise.org",
    "experience" => "12",
    "portfolio"  => "https://github.com/php-architect",
    "selected_ids" => ["101", "204", "309"]
];

$validationSchema = [
    "user_email" => FILTER_VALIDATE_EMAIL,
    "experience" => [
        "filter" => FILTER_VALIDATE_INT,
        "options" => ["min_range" => 1, "max_range" => 50]
    ],
    "portfolio" => FILTER_VALIDATE_URL,
    "selected_ids" => [
        "filter" => FILTER_VALIDATE_INT,
        "flags"  => FILTER_REQUIRE_ARRAY
    ]
];

$validatedData = filter_var_array($formData, $validationSchema);

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. বাল্ক স্কিমা ভ্যালিডেশন (filter_var_array)</h4>";
echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-size:13px; font-family:monospace;'>";
foreach ($validatedData as $field => $val) {
    if (is_array($val)) {
        echo "<span style='color:#38bdf8;'>{$field}:</span> <span style='color:#4ade80;'>[" . implode(", ", $val) . "]</span><br>";
    } else {
        $status = ($val !== false) ? "<span style='color:#4ade80;'>✓ {$val}</span>" : "<span style='color:#f43f5e;'>✗ Invalid</span>";
        echo "<span style='color:#38bdf8;'>{$field}:</span> {$status}<br>";
    }
}
echo "</div>";

// ২. Array Pollution Defense (FILTER_REQUIRE_SCALAR)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. Array Pollution প্রতিরোধ (FILTER_REQUIRE_SCALAR)</h4>";
$suspiciousInput = ["hacked_array_payload" => ["admin" => 1]];

// অ্যাটাকার যদি id[]=1 পাঠায় যখন আমরা সিঙ্গেল স্কেলার আশা করি
$safeScalarCheck = filter_var($suspiciousInput["hacked_array_payload"], FILTER_VALIDATE_INT, FILTER_REQUIRE_SCALAR);
echo "Array Injection Detection: " . ($safeScalarCheck === false ? "<span style='color:#34d399;'>✓ Blocked Non-Scalar Payload</span>" : "Vulnerable") . "<br>";

// ৩. কাস্টম বিজনেস ভ্যালিডেশন (Business Rules Layer)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. ফিল্টার পরবর্তী বিজনেস রুলস (Domain Constraints)</h4>";
$corporateEmail = $validatedData["user_email"];
$isEnterpriseDomain = str_ends_with($corporateEmail, "@enterprise.org");

echo "<div style='background:#064e3b; border-left:4px solid #10b981; padding:10px; border-radius:6px; margin-top:8px;'>";
echo "Syntax Check: <b style='color:#34d399;'>PASS</b> (RFC Valid)<br>";
echo "Domain Rule (@enterprise.org): " . ($isEnterpriseDomain ? "<b style='color:#34d399;'>APPROVED</b>" : "<b style='color:#f43f5e;'>REJECTED</b>") . "<br>";
echo "<small style='color:#a7f3d0;'>Passed to Service Layer for Authentication Token Generation.</small>";
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Advanced Filtering এ filter_input_array() ও filter_var_array() এর মাধ্যমে একাধিক ইনপুট ফিল্ডকে ডিক্লারেটিভ স্কিমার সাহায্যে একসাথে ভ্যালিডেট করা হয়। এছাড়া FILTER_REQUIRE_SCALAR দিয়ে অ্যারে ইনজেকশন ডিফেন্স, FILTER_REQUIRE_ARRAY দিয়ে বাল্ক আইডি ভ্যালিডেশন এবং ফিল্টার-পরবর্তী ডোমেইন স্পেসিফিক বিজনেস রুলস প্রয়োগ করা হয়।`,
      lessonSections: [
        {
          title: '১. filter_input_array() দিয়ে বাল্ক ফর্ম ভ্যালিডেশন ⭐⭐⭐⭐',
          explanationBn: `এক ডজন ফিল্ড আলাদা আলাদা ভ্যালিডেট করার বদলে একটি কনফিগারেশন অ্যারে ডিফাইন করে filter_input_array(INPUT_POST, $schema) দিয়ে একবারে ক্লিন ও ভ্যালিড ডাটা পাওয়া যায়।`,
          code: `$rules = [
    'email' => FILTER_VALIDATE_EMAIL,
    'age'   => [
        'filter' => FILTER_VALIDATE_INT,
        'options' => ['min_range' => 18, 'max_range' => 65]
    ],
    'website' => FILTER_VALIDATE_URL
];

$data = filter_input_array(INPUT_POST, $rules);
if (in_array(false, $data, true)) {
    die("ফর্মে ভুল তথ্য প্রদান করা হয়েছে।");
}`
        },
        {
          title: '২. FILTER_REQUIRE_SCALAR দিয়ে Array Pollution প্রতিরোধ ⭐⭐⭐',
          explanationBn: `অ্যাটাকার যখন সাধারণ ইনপুটের জায়গায় $_POST['user_id'] = [1, 2] জাতীয় অ্যারে পাঠিয়ে পিএইচপির টাইপ হ্যান্ডলিং ক্র্যাশ করাতে চায়, তখন FILTER_REQUIRE_SCALAR নিশ্চিত করে যে ইনপুটটি কোনো অ্যারে নয়, শুধুই একটি সিঙ্গেল ভ্যালু।`,
          code: `$id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT, [
    'flags' => FILTER_REQUIRE_SCALAR
]);
if ($id === false) die("অবৈধ ইনপুট: স্কেলার মান প্রয়োজন।");`
        },
        {
          title: '৩. FILTER_REQUIRE_ARRAY দিয়ে বাল্ক আইডি ভ্যালিডেশন ⭐⭐⭐⭐',
          explanationBn: `বাল্ক ডিলিট বা মাল্টি-সিলেক্ট ফর্মে যখন array পাঠানো হয় (<input name="ids[]">), তখন FILTER_REQUIRE_ARRAY দিয়ে অ্যারে গ্রহণ করে প্রতিটি উপাদানকে লুপের মাধ্যমে টাইপ-সেফ ইন্টিজারে যাচাই করতে হয়।`,
          code: `$rawIds = filter_input(INPUT_POST, 'ids', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);

$cleanIds = [];
if (is_array($rawIds)) {
    foreach ($rawIds as $rawId) {
        $validId = filter_var($rawId, FILTER_VALIDATE_INT);
        if ($validId !== false) $cleanIds[] = $validId;
    }
}`
        },
        {
          title: '৪. URL ভ্যালিডেশন ও HTTPS Scheme এনফোর্সমেন্ট',
          explanationBn: `FILTER_VALIDATE_URL সিনট্যাক্স চেক করলেও এটি http, ftp বা javascript: ও গ্রহণ করতে পারে। সিকিউর সিস্টেমে parse_url() দিয়ে স্কিম শুধু https কিনা তা নিশ্চিত করতে হয়।`,
          code: `$url = filter_var($_POST['url'], FILTER_VALIDATE_URL);
if ($url) {
    $scheme = parse_url($url, PHP_URL_SCHEME);
    if (strtolower($scheme) !== 'https') {
        die("শুধুমাত্র নিরাপদ HTTPS লিঙ্ক অনুমোদিত।");
    }
}`
        },
        {
          title: '৫. Filter বনাম Business Logic Layer ⭐⭐⭐⭐⭐',
          explanationBn: `PHP Filter শুধুমাত্র বেসিক ডেটা টাইপ যাচাই করে। কিন্তু "ইমেইলটি কি কোম্পানির ডোমেইনের?", "ইউজারনেমটি কি ইতোমধ্যে ডাটাবেজে আছে?" - এই ডোমেইন লজিকগুলো ফিল্টারের পরে বিজনেস সার্ভিস লেয়ারে যাচাই করতে হবে।`,
          code: `// Layer 1: Filter (Syntax)
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
if (!$email) die("ভুল ইমেইল ফরম্যাট");

// Layer 2: Business Rule (Domain)
if (!str_ends_with($email, "@mycompany.com")) {
    die("শুধুমাত্র অফিসিয়াল কোম্পানি ইমেইল দিয়ে রেজিস্টার করা যাবে।");
}`
        }
      ],
      keyPointsBn: [
        'filter_input_array() বড় ফর্মে বয়লারপ্লেট কোড অনেক কমিয়ে দেয়।',
        'FILTER_REQUIRE_SCALAR ব্যবহার করে অ্যারে ইনজেকশন ভলনারেবিলিটি ঠেকানো যায়।',
        'মানি ও ফাইন্যান্সিয়াল ডেটার জন্য Float ফিল্টারের বদলে ডেসিমাল/পয়সা ইন্টিজার ফরম্যাট প্রেফার করুন।',
        'ফিল্টার পাস করার পর বিজনেস স্পেসিফিক রুলস (যেমন ডোমেইন চেক) কার্যকর করুন।'
      ],
      practiceExamples: [
        {
          title: 'বাল্ক আইটেম ডিলিট ভ্যালিডেটর',
          descriptionBn: 'মাল্টিপল চেকবক্স আইডি ভ্যালিডেশন ও টাইপ কাস্টিং।',
          code: `<?php
function sanitizeDeleteBatch(array $postData): array {
    $ids = filter_var($postData['ids'] ?? [], FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);
    if (!is_array($ids) || empty($ids)) return [];

    $safeIds = [];
    foreach ($ids as $rawId) {
        $id = filter_var($rawId, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
        if ($id !== false) {
            $safeIds[] = $id;
        }
    }
    return $safeIds;
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: অ্যারে চেক ছাড়া foreach চালানো
$ids = $_POST['ids'];
// $ids যদি স্ট্রিং হয় বা খালি থাকে তবে Fatal Error হবে!
foreach ($ids as $id) {
    $pdo->query("DELETE FROM posts WHERE id = " . (int)$id);
}`,
        juniorProblems: [
          'ইনপুট অ্যারে কিনা যাচাই না করায় ক্র্যাশ বা ওয়ার্নিং তৈরি হয়।',
          'লুপের ভেতরে আন-প্যারামিটারাইজড কুয়েরি চালানোয় স্কেলেবিলিটি ও পারফরম্যান্স নষ্ট হয়।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: FILTER_REQUIRE_ARRAY ও ইন-কুয়েরি বাইন্ডিং
$ids = filter_input(INPUT_POST, 'ids', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);

if (is_array($ids) && !empty($ids)) {
    $validIds = array_filter(array_map(fn($id) => filter_var($id, FILTER_VALIDATE_INT), $ids));
    
    if (!empty($validIds)) {
        $placeholders = implode(',', array_fill(0, count($validIds), '?'));
        $stmt = $pdo->prepare("DELETE FROM posts WHERE id IN ($placeholders)");
        $stmt->execute($validIds);
    }
}`,
        seniorBenefits: [
          'FILTER_REQUIRE_ARRAY নিশ্চিত করে ইনপুট একটি নিরাপদ অ্যারে।',
          'array_filter ও array_map দিয়ে দ্রুত টাইপ-সেফ ইন্টিজারে রূপান্তর।',
          'Prepared Statement এর ইন-কুয়েরি এক্সেকিউশনে পারফেক্ট নিরাপত্তা।'
        ],
        architectAdvice: 'সবসময় ডিক্লারেটিভ স্কিমা দিয়ে ভ্যালিডেশন রুলস সেন্ট্রালাইজড রাখুন যাতে কন্ট্রোলার কোড পরিষ্কার ও সহজে টেস্টেবল থাকে।'
      },
      zendInternals: {
        opcodesSummary: [
          'DO_FCALL -> filter_input_array()',
          'zend_hash_get_current_data() iterate SAPI track vars',
          'RETURN_ARRAY'
        ],
        explanationBn: `filter_input_array() সি লেভেলে পিএইচপির SAPI সুপারগ্লোবাল হ্যাশ টেবিল সরাসরি ইটারেট করে। এতে ইউজারল্যান্ডে বারবার সুপারগ্লোবাল রিড করার ওভারহেড কমে এবং একক সি-ফাংশন কলে সম্পূর্ণ অ্যারে পার্সিং সম্পন্ন হয়।`
      },
      security: {
        vulnerabilityType: 'Array Parameter Pollution & Protocol Smuggling',
        attackVectorBn: 'অ্যাটাকার স্কেলার ফিল্ডে অ্যারে পাঠিয়ে (e.g. `token[]=x`) PHP ফাংশন ক্র্যাশ করায় অথবা `javascript:` স্কিম দিয়ে XSS লিঙ্ক ঢুকিয়ে দেয়।',
        preventionRuleBn: 'স্কেলারের জন্য FILTER_REQUIRE_SCALAR ব্যবহার করুন এবং URL এ https স্কিম কঠোরভাবে যাচাই করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'filter_input_array হলো এক্সপ্রেস লেনের মতো। প্রতিটা মালামাল আলাদা আলাদা না মেপে একটি স্বয়ংক্রিয় কনভেয়ার বেল্টে স্কিমা অনুযায়ী একবারে সব পার্সেল স্ক্যান করা হয়।',
      beginnerSteps: [
        {
          step: 1,
          title: 'স্কিমা অ্যারে তৈরি করুন',
          explanationBn: 'প্রতিটি ফিল্ডের জন্য কাঙ্ক্ষিত ফিল্টার নির্ধারণ করুন।'
        },
        {
          step: 2,
          title: 'filter_input_array কল করুন',
          explanationBn: 'এক কলে পুরো POST ডেটা ভ্যালিডেট করুন।'
        },
        {
          step: 3,
          title: 'ডোমেইন রুলস চেক করুন',
          explanationBn: 'সিনট্যাক্স ঠিক থাকলে কোম্পানির কাস্টম রুলস প্রয়োগ করুন।'
        }
      ],
      trainerSecretsBn: [
        'বড় ফর্মে filter_input_array() ব্যবহার করলে কোডের সাইজ ৫০% পর্যন্ত কমে যায়।',
        'FILTER_REQUIRE_ARRAY নিশ্চিত করে ক্লায়েন্ট সত্যিই চেকবক্স অ্যারে পাঠিয়েছে।'
      ],
      commonGotchasBn: [
        'ভুল: URL ফিল্টার করলেই https লিঙ্ক ধরে নেওয়া; http বা ftp ও পাস হতে পারে।'
      ],
      interviewQuestions: [
        {
          questionBn: 'FILTER_REQUIRE_SCALAR কেন সিকিউরিটিতে গুরুত্বপূর্ণ?',
          answerBn: 'পিএইচপিতে অনেক সময় ফাংশন স্ট্রিং প্রত্যাশা করে (যেমন strcmp)। অ্যাটাকার যদি ফর্ম প্যারামিটারে অ্যারে পাঠায় (e.g. password[]=admin), তবে ফাংশনটি NULL বা 0 রিটার্ন করে অথেনটিকেশন বাইপাস ঘটাতে পারে (Type Juggling)। FILTER_REQUIRE_SCALAR নিশ্চিত করে যে কোনো অবস্থাতেই অ্যারে ইনপুট গ্রহণ করা হবে না।',
          seniorTipBn: 'Type juggling অ্যাটাক ও PHP 8 এর টাইপ সেফটির সাথে এর সম্পর্ক ব্যাখ্যা করুন।'
        }
      ],
      studentChallenge: {
        title: 'বাল্ক ইউজার আইডি স্যানিটাইজার',
        taskBn: 'একটি ফাংশন লিখুন যা একটি আইডি অ্যারে থেকে শুধুমাত্র পজিটিভ ইন্টিজারগুলোকে ফিল্টার করে ইউনিক অ্যারে রিটার্ন করবে।',
        hintBn: 'array_map, filter_var এবং array_unique ব্যবহার করুন।',
        starterCode: `<?php
// বাল্ক আইডি স্যানিটাইজার কোড লিখুন
`,
        solutionCode: `<?php
function cleanUserIds(array $ids): array {
    $clean = [];
    foreach ($ids as $id) {
        $val = filter_var($id, FILTER_VALIDATE_INT, ["options" => ["min_range" => 1]]);
        if ($val !== false) $clean[] = $val;
    }
    return array_values(array_unique($clean));
}
$result = cleanUserIds(["10", "20", "invalid", "10", "-5", "30"]);
print_r($result);
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'Advanced Filtering & Array Pipelines',
          subtitle: 'Bulk Validation, Schema Mapping & Pollution Defense',
          bulletPoints: [
            'Declarative schema filtering via filter_input_array()',
            'FILTER_REQUIRE_SCALAR blocks Array Pollution & Type Juggling',
            'FILTER_REQUIRE_ARRAY handles bulk form submissions safely',
            'Always verify HTTPS scheme after FILTER_VALIDATE_URL'
          ],
          trainerSpeechNotes: 'Separate input syntax validation from business domain logic.',
          analogyOrHighlight: 'Schema Filtering = Automated Airport Conveyor Belt'
        }
      ]
    }
  },
  {
    id: 'php-callback-functions',
    title: 'PHP Callback Functions',
    category: 'advanced',
    tag: 'Functional Programming & Callbacks',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'callable টাইপ হিন্ট, Anonymous Functions (Closures), Arrow Functions (fn), array_map/filter/reduce ও মেথড কলব্যাক।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Functional Callbacks & Closures</h2>";

// ১. বেসিক ডেটা সেট
$products = [
    ["name" => "Mechanical Keyboard", "price" => 120, "category" => "Hardware"],
    ["name" => "PHP Mastery E-Book",  "price" => 45,  "category" => "Education"],
    ["name" => "USB-C Hub Multiport", "price" => 35,  "category" => "Hardware"],
    ["name" => "Cloud Hosting Plan",  "price" => 200, "category" => "Services"]
];

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. array_filter ও Arrow Functions (fn)</h4>";
// ৫০ ডলারের বেশি দামের প্রডাক্ট ফিল্টার
$expensiveProducts = array_filter($products, fn($p) => $p["price"] >= 50);
echo "Products >= $50: <span style='color:#4ade80;'>";
echo implode(", ", array_column($expensiveProducts, "name"));
echo "</span><br>";

echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. array_map দিয়ে ডিসকাউন্ট ও ট্রান্সফর্মেশন</h4>";
// ২০% ছাড় প্রয়োগ
$discounted = array_map(function ($item) {
    $discountPrice = $item["price"] * 0.80;
    return [
        "name" => $item["name"],
        "original" => $item["price"],
        "discounted" => $discountPrice
    ];
}, $products);

echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-family:monospace; font-size:13px;'>";
foreach ($discounted as $d) {
    echo "• {$d['name']}: <strike style='color:#94a3b8;'>\${$d['original']}</strike> -> <b style='color:#38bdf8;'>\${$d['discounted']}</b><br>";
}
echo "</div>";

echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. array_reduce দিয়ে মোট মূল্য হিসাব</h4>";
$totalCartValue = array_reduce($products, fn($carry, $p) => $carry + $p["price"], 0);
echo "Total Catalog Value: <b style='color:#fbbf24;'>\${$totalCartValue}</b><br>";

echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. Static & Object Method Callback সিনট্যাক্স</h4>";
class PriceFormatter {
    public static function formatUSD(float $amount): string {
        return "$" . number_format($amount, 2);
    }
}

// [ClassName::class, 'methodName'] কলব্যাক
$formattedPrices = array_map([PriceFormatter::class, "formatUSD"], array_column($products, "price"));
echo "Formatted via Class Callback: <code style='color:#34d399;'>[" . implode(", ", $formattedPrices) . "]</code>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Callback Function হলো এমন একটি ফাংশন যা অন্য কোনো ফাংশনের আর্গুমেন্ট (প্যারামিটার) হিসেবে পাস করা হয় এবং পরবর্তীতে প্রয়োজনমতো এক্সিকিউট করা হয়। PHP-তে ফাংশন নেম স্ট্রিং, অ্যানোনিমাস ফাংশন (Closure), অ্যারো ফাংশন (fn), অথবা অবজেক্ট/স্ট্যাটিক মেথড অ্যারে [Class::class, 'method'] কলব্যাক হিসেবে পাঠানো যায়। এটি Laravel Collections, ইভেন্ট ড্রাইভেন আর্কিটেকচার এবং ফাংশনাল পাইপলাইনের মূল ভিত্তি।`,
      lessonSections: [
        {
          title: '১. Basic Callback ও `callable` টাইপ হিন্ট ⭐⭐⭐',
          explanationBn: `প্যারামিটারে callable টাইপ ডিফাইন করলে PHP নিশ্চিত করে যে প্রেরিত আর্গুমেন্টটি একটি এক্সিকিউটেবল ফাংশন।`,
          code: `function processUser(string $name, callable $formatter): string {
    return $formatter($name);
}

function welcome(string $name): string {
    return "স্বাগতম, " . strtoupper($name) . "!";
}

echo processUser("Abbad", "welcome"); // Named callback`,
          outputPreview: `স্বাগতম, ABBAD!`
        },
        {
          title: '২. Anonymous Function (Closure) বনাম Arrow Function (fn) ⭐⭐⭐⭐⭐',
          explanationBn: `PHP 7.4+ এ প্রবর্তিত Arrow Function fn($x) => $x * 2 স্বয়ংক্রিয়ভাবে বাইরের ভ্যারিয়েবল বাইন্ড করে (use কীওয়ার্ড ছাড়াই) এবং এক লাইনের এক্সপ্রেশন রিটার্ন করে।`,
          code: `$multiplier = 3;

// ক্লাসিক ক্লোজার (use কিওয়ার্ড প্রয়োজন)
$classic = function ($n) use ($multiplier) {
    return $n * $multiplier;
};

// মডার্ন অ্যারো ফাংশন (বাইরের ভ্যারিয়েবল অটো ক্যাপচার হয়)
$arrow = fn($n) => $n * $multiplier;

echo $arrow(10); // 30`,
          outputPreview: `30`
        },
        {
          title: '৩. array_map() ট্রান্সফর্মেশন পাইপলাইন ⭐⭐⭐⭐⭐',
          explanationBn: `অ্যারের প্রতিটি উপাদানের ওপর কলব্যাক চালিয়ে একটি নতুন রূপান্তরিত অ্যারে রিটার্ন করে।`,
          code: `$prices = [100, 200, 300];
$withTax = array_map(fn($p) => $p * 1.15, $prices);
// [115, 230, 345]`
        },
        {
          title: '৪. array_filter() কন্ডিশনাল সিলেকশন ⭐⭐⭐⭐⭐',
          explanationBn: `কলব্যাকের সত্য/মিথ্যা রিটার্নের ওপর ভিত্তি করে উপাদানগুলো ফিল্টার করে। সত্য হলে উপাদানে থাকে, মিথ্যা হলে বাদ পড়ে।`,
          code: `$scores = [45, 80, 92, 33, 75];
$passed = array_filter($scores, fn($s) => $s >= 50);
// [80, 92, 75]`
        },
        {
          title: '৫. array_reduce() এগ্রিগেশন ⭐⭐⭐⭐',
          explanationBn: `অ্যারের সব উপাদানকে একটিমাত্র ফাইনাল ভ্যালুতে (যেমন মোট যোগফল বা স্ট্রাকচার্ড ম্যাপ) রূপান্তর করে।`,
          code: `$numbers = [10, 20, 30, 40];
$sum = array_reduce($numbers, fn($carry, $num) => $carry + $num, 0);
// 100`
        },
        {
          title: '৬. Object ও Static Method Callbacks ⭐⭐⭐⭐',
          explanationBn: `OOP আর্কিটেকচারে ক্লাসের মেথডকে কলব্যাক হিসেবে পাস করতে [ClassName::class, 'method'] অথবা [$instance, 'method'] অ্যারে সিনট্যাক্স ব্যবহার করা হয়।`,
          code: `class TaxEngine {
    public static function applyVAT(float $price): float {
        return $price * 1.05;
    }
}

$prices = [100, 200];
$finalPrices = array_map([TaxEngine::class, 'applyVAT'], $prices);`
        },
        {
          title: '৭. Laravel Collection ও রিয়েল-ওয়ার্ল্ড সংযোগ ⭐⭐⭐⭐⭐',
          explanationBn: `লারাভেলের মেথড চেইনিং (map, filter, reduce, each) মূলত পিএইচপি কলব্যাক এবং ক্লোজারের ওপর ভিত্তি করে তৈরি।`,
          code: `// Laravel Style:
// User::where('active', true)->get()->map(fn($u) => $u->name);`
        }
      ],
      keyPointsBn: [
        'ফাংশন প্যারামিটারে callable অথবা \\Closure টাইপ হিন্ট ব্যবহার করুন।',
        'সংক্ষিপ্ত এক লাইনের এক্সপ্রেশনের জন্য Arrow Function (fn) সবচেয়ে পরিষ্কার সিনট্যাক্স।',
        'অ্যারো ফাংশন বাইরের স্কোপের ভ্যারিয়েবল অটোম্যাটিকালি রিড-ওনলি রেফারেন্স ক্যাপচার করে।',
        'array_map অ্যারে ট্রান্সফর্ম করে, array_filter উপাদান ছাঁটাই করে, এবং array_reduce একক মানে সংক্ষেপ করে।',
        'ক্লাস মেথড কলব্যাকের জন্য [Class::class, "method"] হলো ইন্ডাস্ট্রি স্ট্যান্ডার্ড।'
      ],
      practiceExamples: [
        {
          title: 'কাস্টম ডিসকাউন্ট পাইপলাইন ইঞ্জিন',
          descriptionBn: 'পণ্য তালিকা ও কাস্টম ডিসকাউন্ট কলব্যাক দিয়ে ফাইনাল প্রাইস জেনারেশন।',
          code: `<?php
function calculateInvoice(array $items, callable $discountStrategy): array {
    return array_map(function ($item) use ($discountStrategy) {
        $finalPrice = $discountStrategy($item['price'], $item['category']);
        return [
            'name' => $item['name'],
            'original_price' => $item['price'],
            'final_price' => $finalPrice
        ];
    }, $items);
}

$catalog = [
    ['name' => 'Laptop', 'price' => 1000, 'category' => 'electronics'],
    ['name' => 'Book',   'price' => 50,   'category' => 'books']
];

// Electronics এ ১০% ছাড়, বইতে ২০% ছাড়
$customDiscount = fn($price, $cat) => ($cat === 'electronics') ? $price * 0.90 : $price * 0.80;

$invoice = calculateInvoice($catalog, $customDiscount);
print_r($invoice);
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: প্রতিবার হার্ডকোডেড foreach লুপ লেখা
$products = [100, 200, 300];
$discounted = [];

foreach ($products as $p) {
    if ($p > 150) {
        $discounted[] = $p * 0.9;
    }
}
// বিজনেস রুল পরিবর্তন হলে পুরো লুপ আবার ডুপ্লিকেট করতে হয়!`,
        juniorProblems: [
          'লজিক হার্ডকোডেড থাকায় কোড রিইউজেবল হয় না।',
          'অপ্রয়োজনীয় ইটারেশন ভ্যারিয়েবল মেমরি ও স্কোপ দূষিত করে।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: হায়ার-অর্ডার ফাংশনাল কম্পোজিশন
$products = [100, 200, 300];

// ডিক্লারেটিভ পাইপলাইন
$filterStrategy = fn(int $p): bool => $p > 150;
$discountStrategy = fn(int $p): float => $p * 0.9;

$result = array_map($discountStrategy, array_filter($products, $filterStrategy));`,
        seniorBenefits: [
          'ফাংশনগুলো ডিকাপল্ড এবং যেকোনো ডেটাসেটের সাথে রিইউজেবল।',
          'কোডের রিডিবিলিটি বহুগুণ বৃদ্ধি পায় এবং ইউনিট টেস্টিং অত্যন্ত সহজ হয়।'
        ],
        architectAdvice: 'ফাংশনকে ফার্স্ট-ক্লাস সিটিজেন হিসেবে ব্যবহার করুন। বড় লুপের পরিবর্তে ছোট ছোট পিওর ফাংশন কম্পোজিশনের মাধ্যমে ডেটা পাইপলাইন আর্কিটেকচার তৈরি করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'ZEND_DECLARE_LAMBDA_FUNCTION',
          'INIT_FCALL_BY_NAME / DO_FCALL',
          'zend_closure_bind() instance context'
        ],
        explanationBn: `পিএইচপির জেন্ড ইঞ্জিন ক্লোজার এবং অ্যারো ফাংশনকে ইন্টারনালি 'Closure' ক্লাসের ইন্সট্যান্স হিসেবে তৈরি করে। যখন array_map বা কাস্টম ফাংশনে কলব্যাক পাঠানো হয়, জেন্ড ইঞ্জিন 'zend_is_callable' মেকানিজম দিয়ে অপকোড লেভেলে মেথড সিগনেচার যাচাই করে এবং মেমরির ফাংশন পয়েন্টার ইনভোক করে।`
      },
      security: {
        vulnerabilityType: 'Arbitrary Function Execution (RCE via User-controlled Callbacks)',
        attackVectorBn: 'ইউজার ইনপুট থেকে সরাসরি ফাংশনের নাম নিয়ে `call_user_func($_GET["action"])` চালালে অ্যাটাকার `system` বা `exec` চালিয়ে সার্ভার হ্যাক করতে পারে।',
        preventionRuleBn: 'কখনোই ক্লায়েন্ট ইনপুটকে সরাসরি কলব্যাক হিসেবে এক্সিকিউট করবেন না। সর্বদা অনুমোদিত ফাংশনের হোয়াইটলিস্ট ব্যবহার করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'Callback হলো পিৎজা ডেলিভারির সময় দেওয়া বিশেষ নির্দেশনার মতো। আপনি শেফকে (ফাংশন) বলে দিচ্ছেন: "পিৎজাটা রেডি হলে কলিংবেল বাজানোর বদলে দরজায় নক (Callback) করবেন।"',
      beginnerSteps: [
        {
          step: 1,
          title: 'callable টাইপ হিন্ট লিখুন',
          explanationBn: 'ফাংশনে callable $callback প্যারামিটার নিন।'
        },
        {
          step: 2,
          title: 'Arrow Function (fn) ব্যবহার করুন',
          explanationBn: 'সংক্ষিপ্ত ক্যালকুলেশনের জন্য fn($x) => $x * 2 ব্যবহার করুন।'
        },
        {
          step: 3,
          title: 'array_map/filter চালান',
          explanationBn: 'অ্যারে ডেটা প্রসেসিংয়ে ফাংশনাল মেথড প্রয়োগ করুন।'
        }
      ],
      trainerSecretsBn: [
        'fn() সিনট্যাক্স শুধুমাত্র একক এক্সপ্রেশনের জন্য; একাধিক লাইনের জন্য ক্লাসিক function() {} ব্যবহার করুন।',
        'Static মেথড কলব্যাকের জন্য [MyClass::class, "method"] ব্যবহার করলে IDE রিফ্যাক্টরিং স্বয়ংক্রিয় কাজ করে।'
      ],
      commonGotchasBn: [
        'ভুল: array_filter এ কী (key) ইনডেক্স সংরক্ষিত থাকে; জিরো-বেসড সিকোয়েন্স পেতে array_values() কল করতে হয়।'
      ],
      interviewQuestions: [
        {
          questionBn: 'Closure এবং Arrow Function (fn) এর মধ্যে মূল পার্থক্য কী?',
          answerBn: 'PHP 7.4 এর Arrow Function (fn) হলো ক্লোজারের সংক্ষিপ্ত রূপ যা বাইরের স্কোপের ভ্যারিয়েবলগুলোকে স্বয়ংক্রিয়ভাবে (use কিওয়ার্ড ছাড়াই) বাই-ভ্যালু ক্যাপচার করে। তবে Arrow Function এ শুধুমাত্র একটিমাত্র এক্সপ্রেশন লেখা যায় এবং কোনো return কীওয়ার্ডের দরকার পড়ে না।',
          seniorTipBn: 'অ্যারো ফাংশনে বাইরের ভ্যারিয়েবল মিউটেশন (by-reference change) সম্ভব নয় তা উল্লেখ করুন।'
        }
      ],
      studentChallenge: {
        title: 'প্রোডাক্ট ক্যাটাগরি পাইপলাইন',
        taskBn: 'array_filter এবং array_map ব্যবহার করে একটি প্রোডাক্ট অ্যারে থেকে শুধুমাত্র "tech" ক্যাটাগরির প্রোডাক্টগুলোর দাম ১০% বৃদ্ধি করে নতুন দামের অ্যারে তৈরি করুন।',
        hintBn: 'array_filter(..., fn($p) => $p["cat"] === "tech") এবং array_map ব্যবহার করুন।',
        starterCode: `<?php
// প্রোডাক্ট ফিল্টার ও ম্যাপ পাইপলাইন লিখুন
`,
        solutionCode: `<?php
$inventory = [
    ["name" => "Phone", "cat" => "tech", "price" => 500],
    ["name" => "Shirt", "cat" => "apparel", "price" => 30],
    ["name" => "Tablet", "cat" => "tech", "price" => 300]
];

$techItems = array_filter($inventory, fn($i) => $i["cat"] === "tech");
$updatedPrices = array_map(fn($i) => ["name" => $i["name"], "price" => $i["price"] * 1.10], $techItems);

print_r(array_values($updatedPrices));
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Functional Programming & Callbacks',
          subtitle: 'Higher-Order Functions, Closures & Data Transformation',
          bulletPoints: [
            'callable type hints for clean and flexible function contracts',
            'Arrow Functions (fn) for auto-captured concise expressions',
            'Core trio: array_map (transform), array_filter (select), array_reduce (aggregate)',
            'OOP method callbacks via [Class::class, "method"] array syntax'
          ],
          trainerSpeechNotes: 'Callbacks unlock modular architecture and pave the way for modern Laravel Collections.',
          analogyOrHighlight: 'Callback = Special Delivery Instructions for the Chef'
        }
      ]
    }
  },
  {
    id: 'php-json',
    title: 'PHP JSON',
    category: 'advanced',
    tag: 'Data Exchange & REST APIs',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'json_encode(), json_decode(), JSON_THROW_ON_ERROR, JSON_UNESCAPED_UNICODE, php://input ও এন্টারপ্রাইজ REST API আর্কিটেকচার।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP JSON & REST API Data Exchange</h2>";

// ১. PHP Array -> JSON Encode (Unicode & Pretty Print)
$userData = [
    "user_id"   => 101,
    "full_name" => "আব্বাদ ইবনে বাশার",
    "role"      => "Lead Engineer",
    "is_active" => true,
    "skills"    => ["PHP 8.3", "Laravel", "MySQL", "REST APIs"],
    "settings"  => ["theme" => "dark", "notifications" => null]
];

$jsonOutput = json_encode($userData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. PHP Array → JSON String (json_encode)</h4>";
echo "<pre style='background:#1e293b; color:#38bdf8; padding:12px; border-radius:6px; font-size:12px; overflow-x:auto;'>";
echo htmlspecialchars($jsonOutput);
echo "</pre>";

// ২. JSON -> Associative Array vs Object
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. JSON Decoding (Array vs Object)</h4>";
$rawJson = '{"title":"PHP Architecture Mastery","author":"Abbad","price":120.50,"in_stock":true}';

$asArray  = json_decode($rawJson, true);  // Associative Array
$asObject = json_decode($rawJson, false); // stdClass Object

echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-size:13px; font-family:monospace;'>";
echo "As Array (\$data['title']): <span style='color:#4ade80;'>{$asArray['title']} (Price: \${$asArray['price']})</span><br>";
echo "As Object (\$obj->title): <span style='color:#f472b6;'>{$asObject->title} (In Stock: " . ($asObject->in_stock ? "Yes" : "No") . ")</span>";
echo "</div>";

// ৩. Modern Error Handling (JSON_THROW_ON_ERROR)
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৩. আধুনিক এক্সেপশন হ্যান্ডলিং (JSON_THROW_ON_ERROR)</h4>";
$invalidJson = '{"name": "Broken Payload", "missing_quote: 123}';

try {
    $parsed = json_decode($invalidJson, true, 512, JSON_THROW_ON_ERROR);
    echo "Success!";
} catch (JsonException $e) {
    echo "<div style='background:#450a0a; border-left:4px solid #ef4444; padding:8px 12px; border-radius:4px; font-size:13px; color:#fca5a5;'>";
    echo "<b>JsonException Caught:</b> " . htmlspecialchars($e->getMessage()) . "<br>";
    echo "<small style='color:#f87171;'>HTTP Response: 400 Bad Request sent to client.</small>";
    echo "</div>";
}

// ৪. REST API Envelope Response Simulation
echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>৪. এন্টারপ্রাইজ REST API Response Payload</h4>";
$apiResponse = [
    "success" => true,
    "status"  => 200,
    "message" => "ব্যবহারকারীর তথ্য সফলভাবে লোড হয়েছে",
    "data"    => [
        "id"       => $userData["user_id"],
        "name"     => $userData["full_name"],
        "role"     => $userData["role"]
    ],
    "meta"    => [
        "timestamp" => date("Y-m-d H:i:s"),
        "version"   => "v1.2"
    ]
];

echo "<pre style='background:#064e3b; color:#a7f3d0; padding:10px; border-radius:6px; font-size:12px;'>";
echo htmlspecialchars(json_encode($apiResponse, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
echo "</pre>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `JSON (JavaScript Object Notation) হলো আধুনিক ওয়েব অ্যাপ্লিকেশনে API, AJAX, মোবাইল অ্যাপস এবং ব্যাকএন্ড ডাটাবেজের মধ্যে ডেটা স্থানান্তরের আন্তর্জাতিক স্ট্যান্ডার্ড। পিএইচপিতে \`json_encode()\` এর মাধ্যমে পিএইচপি ডেটাকে JSON স্ট্রিংয়ে এবং \`json_decode()\` এর মাধ্যমে JSON স্ট্রিং থেকে পিএইচপি ডেটায় রূপান্তর করা হয়। মনে রাখবেন, JSON কোনো ডাটাবেজ নয়—এটি মূলত একটি ভাষা-নিরপেক্ষ ডেটা সিরিয়ালাইজেশন ফরম্যাট।`,
      lessonSections: [
        {
          title: '১. PHP Array → JSON (json_encode) ⭐⭐⭐',
          explanationBn: `পিএইচপি অ্যারে বা অবজেক্টকে ক্লায়েন্ট বা ফ্রন্টএন্ডে পাঠানোর জন্য json_encode() ব্যবহার করা হয়। এটি অ্যাসোসিয়েটিভ অ্যারেকে JSON অবজেক্ট ({}) এবং ইনডেক্সড অ্যারেকে JSON অ্যারেতে ([]) রূপান্তর করে।`,
          code: `$data = [
    "name" => "Abbad",
    "age"  => 25
];

$json = json_encode($data);
// Output: {"name":"Abbad","age":25}`
        },
        {
          title: '২. JSON → PHP Array বনাম Object (json_decode) ⭐⭐⭐⭐⭐',
          explanationBn: `json_decode($json, true) দিলে অ্যাসোসিয়েটিভ অ্যারে পাওয়া যায় ($data['name'])। দ্বিতীয় প্যারামিটার true না দিলে এটি পিএইচপির stdClass অবজেক্ট রিটার্ন করে ($data->name)। রিয়েল-ওয়ার্ল্ড ব্যাকএন্ডে অ্যারে ফরম্যাট (true) সবচেয়ে বেশি ব্যবহৃত হয়।`,
          code: `$json = '{"name":"Abbad","age":25}';

// ১. Associative Array (Second param = true)
$arrayData = json_decode($json, true);
echo $arrayData["name"]; // Abbad

// ২. stdClass Object (Default = false)
$objectData = json_decode($json);
echo $objectData->name; // Abbad`
        },
        {
          title: '৩. প্রয়োজনীয় JSON অপশনস ও ফ্ল্যাগসমূহ ⭐⭐⭐',
          explanationBn: `json_encode এবং decode এ একাধিক ফ্ল্যাগ বিটওয়াইজ OR (|) দিয়ে ব্যবহার করা যায়:
• JSON_PRETTY_PRINT: সুন্দর ও রিডেবল স্পেস/ইনডেন্টেশন সহ ফরম্যাট করে।
• JSON_UNESCAPED_UNICODE: বাংলা ও যেকোনো ইউনিকোড টেক্সট (\\u0986...) এর বদলে পরিষ্কার বাংলায় সংরক্ষণ করে।
• JSON_THROW_ON_ERROR: পার্সিং এরর হলে সাইলেন্ট ফেইলিউরের বদলে JsonException থ্রো করে।`,
          code: `$data = ["name" => "আব্বাদ", "city" => "ফেনী"];

// বাংলা টেক্সট ও সুন্দর ফরম্যাটিং
echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);`
        },
        {
          title: '৪. আধুনিক Error Handling (JSON_THROW_ON_ERROR) ⭐⭐⭐⭐',
          explanationBn: `পুরোনো পদ্ধতিতে json_last_error() দিয়ে চেক করতে হতো। PHP 7.3+ এ JSON_THROW_ON_ERROR ফ্ল্যাগ দিয়ে try-catch ব্লকে সরাসরি JsonException ক্যাচ করে ৪০০ ব্যাড রিকোয়েস্ট হ্যান্ডেল করা সবচেয়ে পরিচ্ছন্ন আর্কিটেকচার।`,
          code: `try {
    $data = json_decode($rawJson, true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON payload: " . $e->getMessage()
    ]);
    exit;
}`
        },
        {
          title: '৫. REST API Request Reading (php://input) ⭐⭐⭐⭐⭐',
          explanationBn: `Frontend (React/Vue/Fetch/Axios) বা Mobile App যখন POST/PUT মেথডে application/json ডেটা পাঠায়, তখন তা $_POST এ থাকে না। পিএইচপির র-ইনপুট স্ট্রিম php://input থেকে ফাইল হিসেবে পড়ে decode করতে হয়।`,
          code: `// REST API Controller Flow
$rawBody = file_get_contents("php://input");

try {
    $requestData = json_decode($rawBody, true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    http_response_code(400);
    exit(json_encode(["error" => "Malformed JSON body"]));
}

$email = filter_var($requestData["email"] ?? "", FILTER_VALIDATE_EMAIL);
if (!$email) {
    http_response_code(422);
    exit(json_encode(["error" => "Invalid email address"]));
}`
        },
        {
          title: '৬. এন্টারপ্রাইজ API Response ও HTTP Status Codes ⭐⭐⭐⭐⭐',
          explanationBn: `API রেসপন্স পাঠানোর আগে Content-Type হেডার সেট করতে হবে এবং সঠিক HTTP স্ট্যাটাস কোড (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 422 Unprocessable Entity, 500 Server Error) এনফোর্স করতে হবে।`,
          code: `header("Content-Type: application/json; charset=UTF-8");
http_response_code(200);

$response = [
    "success" => true,
    "message" => "User profile loaded successfully",
    "data" => [
        "id" => 10,
        "name" => "Abbad"
    ]
];

echo json_encode($response, JSON_UNESCAPED_UNICODE);
exit;`
        },
        {
          title: '৭. সেনসিটিভ ডেটা প্রটেকশন (Data Leak Defense) ⚠️',
          explanationBn: `ডাটাবেজের রো সরাসরি json_encode($user) করে ক্লায়েন্টে পাঠালে password_hash, stripe_id, secret_token লিক হয়ে যেতে পারে। সবসময় নির্দিষ্ট DTO বা হোয়াইটলিস্টেড ফিল্ডের অ্যারে তৈরি করে এনকোড করুন।`,
          code: `// ❌ বিপজ্জনক: সরাসরি পাসওয়ার্ড হ্যাশ সহ ইউজার এনকোড
// echo json_encode($userFromDatabase);

//  নিরাপদ: ডেটা ট্রান্সফার অবজেক্ট (DTO / Whitelist)
$safeResponse = [
    "id"    => $userFromDatabase["id"],
    "name"  => $userFromDatabase["name"],
    "email" => $userFromDatabase["email"]
];
echo json_encode($safeResponse);`
        },
        {
          title: '৮. JSON ফাইল তৈরি ও রিড করা',
          explanationBn: `কনফিগারেশন বা ক্যাশ সংরক্ষণের জন্য file_put_contents() দিয়ে JSON ফাইলে সেভ এবং file_get_contents() দিয়ে ফাইল থেকে রিড করে ডিকোড করা যায়।`,
          code: `$config = ["app_name" => "CoreAPI", "version" => "2.0"];
file_put_contents("config.json", json_encode($config, JSON_PRETTY_PRINT));

$savedConfig = json_decode(file_get_contents("config.json"), true);`
        }
      ],
      keyPointsBn: [
        'json_encode() পিএইচপি ডেটাকে JSON এ রূপান্তর করে, json_decode() JSON কে পিএইচপি ডেটায় আনে।',
        'API এর POST বডি পড়তে file_get_contents("php://input") ব্যবহার করতে হয়, $_POST কাজ করে না।',
        'বাংলা ও অন্যান্য ইউনিকোড অক্ষরের জন্য সর্বদা JSON_UNESCAPED_UNICODE ফ্ল্যাগ যুক্ত করুন।',
        'JSON ডিকোড করার সময় সবসময় JSON_THROW_ON_ERROR এবং try-catch ব্লক ব্যবহার করুন।',
        'API রেসপন্সের পূর্বে header("Content-Type: application/json") ও সঠিক http_response_code() নির্ধারণ করুন।'
      ],
      practiceExamples: [
        {
          title: 'নিরাপদ REST API ইউজার ক্রিয়েশন এন্ডপয়েন্ট',
          descriptionBn: 'php://input থেকে ডেটা গ্রহণ, JsonException হ্যান্ডলিং, ভ্যালিডেশন এবং ফরম্যাটেড JSON রেসপন্স।',
          code: `<?php
header("Content-Type: application/json; charset=UTF-8");

function handleCreateUserRequest(): void {
    $rawInput = file_get_contents("php://input");

    // ১. JSON পার্সিং
    try {
        $body = json_decode($rawInput, true, 512, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "ভুল JSON ফরম্যাট: " . $e->getMessage()
        ], JSON_UNESCAPED_UNICODE);
        return;
    }

    // ২. ফিল্ড ভ্যালিডেশন
    $name  = trim($body["name"] ?? "");
    $email = filter_var($body["email"] ?? "", FILTER_VALIDATE_EMAIL);

    if (empty($name) || !$email) {
        http_response_code(422);
        echo json_encode([
            "success" => false,
            "message" => "ভ্যালিডেশন এরর: নাম ও সঠিক ইমেইল বাধ্যতামূলক।"
        ], JSON_UNESCAPED_UNICODE);
        return;
    }

    // ৩. সফল রেসপন্স (201 Created)
    http_response_code(201);
    echo json_encode([
        "success" => true,
        "message" => "ইউজার সফলভাবে তৈরি হয়েছে।",
        "data" => [
            "id" => 501,
            "name" => $name,
            "email" => $email
        ]
    ], JSON_UNESCAPED_UNICODE);
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: সরাসরি $_POST পড়া, কোনো এরর চেক ছাড়া ডিকোড ও সেনসিটিভ ডেটা লিক
$raw = file_get_contents("php://input");
$data = json_decode($raw); // true না দেওয়ায় অবজেক্ট তৈরি

// ডাটাবেজের সম্পূর্ণ রো পাসওয়ার্ড সহ সরাসরি আউটপুট
$user = $db->query("SELECT * FROM users WHERE email = '{$data->email}'")->fetch();
echo json_encode($user);`,
        juniorProblems: [
          'json_decode ফেইল করলে নোটিস তৈরি হয় কিন্তু হ্যান্ডেল করা হয় না।',
          'ডাটাবেজ পাসওয়ার্ড হ্যাশ ও সিক্রেট টোকেন সরাসরি ক্লায়েন্টে লিক হয়ে যায়।',
          'Content-Type হেডার ও HTTP Status কোড অনুপস্থিত থাকায় ফ্রন্টএন্ডে ত্রুটি ধরা কঠিন হয়।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: Robust JSON Pipeline & DTO Output
header("Content-Type: application/json; charset=UTF-8");

try {
    $input = json_decode(file_get_contents("php://input"), true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Bad Request JSON"]);
    exit;
}

$email = filter_var($input["email"] ?? "", FILTER_VALIDATE_EMAIL);
if (!$email) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "Invalid Email"]);
    exit;
}

// শুধুমাত্র প্রয়োজনীয় ফিল্ড নিয়ে রেসপন্স জেনারেশন
$responsePayload = [
    "success" => true,
    "data" => [
        "id" => 10,
        "email" => $email,
        "created_at" => date("c")
    ]
];

http_response_code(200);
echo json_encode($responsePayload, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);`,
        seniorBenefits: [
          'JSON_THROW_ON_ERROR দিয়ে ক্র্যাশ-প্রুফ পার্সিং নিশ্চিত।',
          'DTO প্যাটার্নে শুধুমাত্র অনুমোদিত পাবলিক ফিল্ড আউটপুট দেওয়ায় জিরো ডেটা লিক।',
          'স্ট্যান্ডার্ড HTTP স্ট্যাটাস (400, 422, 200) ও Content-Type হেডার।'
        ],
        architectAdvice: 'API আর্কিটেকচারে সবসময় Request Payload -> DTO Validation -> Domain Service -> API Resource/Response Envelope পাইপলাইন অনুসরণ করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'ext/json/json.c -> php_json_encode()',
          'php_json_decode_ex() uses fast C SIMD/lexer scanner',
          'DO_FCALL -> json_encode'
        ],
        explanationBn: `PHP এর ext/json এক্সটেনশন সি-লেভেলে পার্সার ও সিরিয়ালাইজার ব্যবহার করে। json_encode() পিএইচপির জেন্ড ভ্যালু (zval) ট্রি ট্রাভার্স করে সরাসরি C স্ট্রিং বাফারে লেখে। ডিকোড করার সময় max_depth (ডিফল্ট ৫১২) স্ট্যাক ওভারফ্লো ও মেমরি এক্সহশন অ্যাটাক প্রতিহত করতে ব্যবহৃত হয়।`
      },
      security: {
        vulnerabilityType: 'Sensitive Data Exposure & JSON Bomb (Denial of Service)',
        attackVectorBn: 'অ্যাটাকার অতিরিক্ত নেস্টেড JSON স্ট্রাকচার ({a:{a:{...}}}) পাঠিয়ে মেমরি ক্র্যাশ ঘটাতে পারে অথবা ডেভেলপার অসাবধানতাবশত ডাটাবেজের `password_hash` ও `api_token` রেসপন্সে পাঠিয়ে দেয়।',
        preventionRuleBn: 'সর্বদা max_depth সীমাবদ্ধ রাখুন (ডিফল্ট ৫১২), JSON_THROW_ON_ERROR ব্যবহার করুন এবং রেসপন্সে হোয়াইটলিস্টেড DTO ফিল্ড ম্যাপ করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'JSON হলো আন্তর্জাতিক কুরিয়ার সার্ভিসের স্ট্যান্ডার্ড বক্সের মতো। আপনার দেশের পণ্য (PHP Array) অন্য দেশে (JavaScript/Mobile) পাঠাতে হলে কুরিয়ারের স্ট্যান্ডার্ড কার্টনে (json_encode) প্যাক করতে হবে, আর ক্লায়েন্ট তা গ্রহণ করে বক্স খুলে নিজের ভাষায় (json_decode) ব্যবহার করবে।',
      beginnerSteps: [
        {
          step: 1,
          title: 'json_encode দিয়ে স্ট্রিং তৈরি',
          explanationBn: 'json_encode($data, JSON_UNESCAPED_UNICODE) দিয়ে JSON স্ট্রিং তৈরি করুন।'
        },
        {
          step: 2,
          title: 'json_decode এ true দিন',
          explanationBn: 'json_decode($json, true) দিয়ে অ্যাসোসিয়েটিভ অ্যারেতে রূপান্তর করুন।'
        },
        {
          step: 3,
          title: 'php://input দিয়ে API বডি পড়ুন',
          explanationBn: 'file_get_contents("php://input") দিয়ে র-বডি গ্রহণ করুন।'
        }
      ],
      trainerSecretsBn: [
        'সবসময় JSON_UNESCAPED_UNICODE ব্যবহার করবেন, নয়তো বাংলা টেক্সট \\u0986\\u09ac... এর মতো হয়ে ডেটাবেজে মেমরি নষ্ট করবে।',
        'POST/PUT API তৈরি করার সময় $_POST এর আশায় বসে থাকবেন না, কারণ ফ্রন্টএন্ড থেকে Content-Type: application/json এলে পিএইচপি $_POST সুপারগ্লোবাল পূরণ করে না।'
      ],
      commonGotchasBn: [
        'ভুল: json_decode($json) দিয়ে $data["key"] এক্সেস করার চেষ্টা করা (ফলস্বরূপ Fatal Error)। সমাধান: true পাস করুন।',
        'ভুল: echo $user; সরাসরি অবজেক্ট প্রিন্ট করা। সমাধান: json_encode($user) ব্যবহার করুন।'
      ],
      interviewQuestions: [
        {
          questionBn: 'json_decode($json, true) এবং json_decode($json) এর মধ্যে পার্থক্য কী?',
          answerBn: 'দ্বিতীয় প্যারামিটার true দিলে json_decode() একটি পিএইচপি অ্যাসোসিয়েটিভ অ্যারে ($data["name"]) রিটার্ন করে। আর ডিফল্টভাবে (বা false দিলে) এটি একটি stdClass অবজেক্ট ($data->name) রিটার্ন করে। ব্যাকএন্ডে অ্যারে ফাংশনালিটি ব্যবহারের জন্য true দেওয়া সুবিধাজনক।',
          seniorTipBn: 'JSON_THROW_ON_ERROR এবং নেস্টিং ডেপথ লিমিটের সুবিধা উল্লেখ করুন।'
        }
      ],
      studentChallenge: {
        title: 'REST API রেসপন্স এনভেলপ জেনারেটর',
        taskBn: 'একটি ফাংশন লিখুন যা সফল ও ব্যর্থ উভয় ধরনের স্ট্যাটাস, মেসেজ এবং ডেটা নিয়ে একটি স্ট্যান্ডার্ড JSON API রেসপন্স এনকোড করে প্রিন্ট করবে।',
        hintBn: 'json_encode এবং JSON_UNESCAPED_UNICODE ব্যবহার করুন।',
        starterCode: `<?php
// API Response Envelope ফাংশন তৈরি করুন
`,
        solutionCode: `<?php
function sendJsonResponse(bool $success, string $message, array $data = [], int $statusCode = 200): void {
    http_response_code($statusCode);
    header("Content-Type: application/json; charset=UTF-8");
    
    $payload = [
        "success" => $success,
        "message" => $message,
        "data"    => $data,
        "meta"    => ["timestamp" => date("c")]
    ];
    
    echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}

sendJsonResponse(true, "ইউজার প্রোফাইল সফলভাবে পাওয়া গেছে।", ["id" => 10, "name" => "আব্বাদ"]);
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP JSON & REST API Data Pipelines',
          subtitle: 'Serialization, Unicode Defense & Request Decoding',
          bulletPoints: [
            'json_encode() converts PHP Array to JSON string',
            'json_decode($json, true) returns typed Associative Array',
            'Read raw JSON POST requests via file_get_contents("php://input")',
            'Always enable JSON_UNESCAPED_UNICODE for proper non-ASCII text',
            'Use JSON_THROW_ON_ERROR for modern robust exception handling'
          ],
          trainerSpeechNotes: 'JSON is the language of modern APIs. Never expose database models directly—always map to clean DTOs.',
          analogyOrHighlight: 'JSON = Universal Standardized Shipping Container for Web Data'
        }
      ]
    }
  },
  {
    id: 'php-exceptions',
    title: 'PHP Exceptions',
    category: 'advanced',
    tag: 'Robust Error Handling',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'try, catch, finally, throw, Custom Exceptions, Exception Chaining, Throwable হায়ারার্কি ও প্রোডাকশন এরর বাউন্ডারি।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:20px; border-radius:10px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Enterprise Exception Architecture</h2>";

// ১. ডোমেইন স্পেসিফিক কাস্টম এক্সেপশন ক্লাসেস
class InsufficientFundsException extends Exception {}
class AccountSuspendedException extends Exception {}

class BankAccount {
    public function __construct(
        private string $accountNumber,
        private float $balance,
        private bool $isSuspended = false
    ) {}

    public function withdraw(float $amount): float {
        if ($this->isSuspended) {
            throw new AccountSuspendedException("একাউন্ট {$this->accountNumber} সাময়িকভাবে স্থগিত করা হয়েছে।", 403);
        }

        if ($amount <= 0) {
            throw new InvalidArgumentException("উত্তোলনের পরিমাণ অবশ্যই ০ এর বেশি হতে হবে।", 400);
        }

        if ($amount > $this->balance) {
            throw new InsufficientFundsException("অপর্যাপ্ত ব্যালেন্স! বর্তমান ব্যালেন্স: \${$this->balance}, উত্তোলনের চেষ্টা: \${$amount}", 422);
        }

        $this->balance -= $amount;
        return $this->balance;
    }

    public function getBalance(): float { return $this->balance; }
}

echo "<h4 style='color:#a855f7; margin-bottom:5px;'>১. ট্রানজ্যাকশন এক্সেকশন ও মাল্টিপল ক্যাচ ব্লক</h4>";

$account = new BankAccount("AC-99081", 500.00);

// টেস্ট ট্রানজ্যাকশন
$withdrawalAttempts = [200.00, 450.00, -50.00];

foreach ($withdrawalAttempts as $attempt) {
    echo "<div style='background:#1e293b; padding:10px; border-radius:6px; margin-bottom:8px; font-size:13px;'>";
    echo "Attempting to withdraw: <b style='color:#38bdf8;'>\${$attempt}</b><br>";

    try {
        $remaining = $account->withdraw($attempt);
        echo "<span style='color:#4ade80;'>✓ উত্তোলন সফল! অবশিষ্ট ব্যালেন্স: \${$remaining}</span>";
    } catch (InsufficientFundsException $e) {
        echo "<span style='color:#f59e0b;'>⚠️ ডোমেইন ত্রুটি [Code {$e->getCode()}]: " . $e->getMessage() . "</span>";
    } catch (InvalidArgumentException $e) {
        echo "<span style='color:#f43f5e;'>❌ ইনপুট ত্রুটি: " . $e->getMessage() . "</span>";
    } catch (Throwable $e) {
        // গ্লোবাল ফলব্যাক ক্যাচ
        echo "<span style='color:#ef4444;'>❌ অপ্রত্যাশিত ত্রুটি: " . $e->getMessage() . "</span>";
    } finally {
        echo "<br><small style='color:#94a3b8;'>[Audit Log]: ট্রানজ্যাকশন চেষ্টা সম্পন্ন। একাউন্ট ব্যালেন্স: \${$account->getBalance()}</small>";
    }

    echo "</div>";
}

echo "<h4 style='color:#a855f7; margin-bottom:5px; margin-top:15px;'>২. এক্সেপশন চেইনিং (Exception Chaining with getPrevious())</h4>";

try {
    try {
        // লো-লেভেল ডাটাবেজ এরর সিমুলেশন
        throw new PDOException("Database connection timeout on replica-db-01", 2002);
    } catch (PDOException $dbError) {
        // হাই-লেভেল বিজনেস এক্সেপশনে রূপান্তর এবং মূল এরর চেইনিং
        throw new RuntimeException("User profile update failed due to internal storage outage", 500, $dbError);
    }
} catch (RuntimeException $topError) {
    echo "<div style='background:#3b0764; border-left:4px solid #c084fc; padding:10px; border-radius:6px; font-size:13px;'>";
    echo "<b>Top Exception:</b> <span style='color:#f3e8ff;'>" . $topError->getMessage() . "</span><br>";
    if ($prev = $topError->getPrevious()) {
        echo "<b>Original Root Cause:</b> <span style='color:#a855f7;'>" . get_class($prev) . " -> " . $prev->getMessage() . "</span>";
    }
    echo "</div>";
}

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `Exception হলো রানটাইমে কোনো অপ্রত্যাশিত বা ত্রুটিপূর্ণ পরিস্থিতি তৈরি হলে অ্যাপ্লিকেশনকে ক্র্যাশ না করিয়ে নিয়ন্ত্রিত উপায়ে (Controlled Flow) হ্যান্ডেল করার পিএইচপি ইঞ্জিন মেকানিজম। \`try\` ব্লকে ঝুঁকিপূর্ণ কোড চালানো হয়, কোনো ত্রুটি ঘটলে \`throw\` স্টেটমেন্টের মাধ্যমে এক্সেপশন ছোড়া হয়, \`catch\` ব্লকে তা ধরা হয় এবং \`finally\` ব্লক যেকোনো পরিস্থিতিতে (সফল বা ব্যর্থ) রিসোর্স ক্লিনআপের জন্য নির্বাহ হয়।`,
      lessonSections: [
        {
          title: '১. Core Exception Mechanism: try, throw, catch ⭐⭐⭐',
          explanationBn: `Exception এর বেসিক ফ্লো হলো: কোডে সমস্যা হলে throw new Exception("মেসেজ") করা, যা তাৎক্ষণিকভাবে স্বাভাবিক এক্সিকিউশন থামিয়ে নিকটতম catch ব্লকে জাম্প করে। $e->getMessage(), $e->getCode(), $e->getFile(), $e->getLine() এর মাধ্যমে ত্রুটির বিস্তারিত তথ্য পাওয়া যায়।`,
          code: `try {
    throw new Exception("পেমেন্ট গেটওয়ে রেসপন্স করছে না!", 5001);
} catch (Exception $e) {
    echo "ত্রুটি: " . $e->getMessage() . " (কোড: " . $e->getCode() . ")";
}`
        },
        {
          title: '২. finally ব্লক ও রিসোর্স ক্লিনআপ মেকানিজম ⭐⭐⭐⭐',
          explanationBn: `try ব্লকের কোড সফল হোক বা catch ব্লকে কোনো এক্সেপশন ধরা পড়ুক—finally ব্লক সর্বদা এক্সিকিউট হবে। ডাটাবেজ কানেকশন ক্লোজ করা, ফাইল হ্যান্ডেল বন্ধ করা বা অডিট ট্রেল লগ লেখার জন্য finally ব্লক ব্যবহৃত হয়।`,
          code: `$file = fopen("orders.log", "a");
try {
    // ঝুঁকিপূর্ণ ফাইল রাইট অপারেশন
    if (!fwrite($file, "New order #1001\\n")) {
        throw new RuntimeException("ফাইল রাইট ব্যর্থ হয়েছে");
    }
} catch (RuntimeException $e) {
    error_log($e->getMessage());
} finally {
    // ত্রুটি হোক বা না হোক ফাইল বন্ধ নিশ্চিত করা
    fclose($file);
}`
        },
        {
          title: '৩. Custom Domain Exceptions তৈরি করা ⭐⭐⭐⭐⭐',
          explanationBn: `রিয়েল-ওয়ার্ল্ড অ্যাপ্লিকেশনে সাধারণ Exception ব্যবহারের চেয়ে ডোমেইন-নির্দিষ্ট কাস্টম ক্লাস তৈরি করা উত্তম। এটি বিল্ট-ইন Exception ক্লাসকে extend করে তৈরি করা হয়।`,
          code: `class PaymentFailedException extends Exception {}
class OutOfStockException extends Exception {}

// সার্ভিস লেয়ারে ছোড়া:
if ($inventory <= 0) {
    throw new OutOfStockException("পণ্যটির স্টক শেষ হয়ে গেছে।");
}`
        },
        {
          title: '৪. Multiple Catch Blocks ও ক্যাচিং অর্ডার ⭐⭐⭐⭐',
          explanationBn: `একটি try ব্লকের পর একাধিক catch ব্লক রাখা যায়। নিয়ম হলো: স্পেসিফিক চাইল্ড এক্সেপশনগুলো (যেমন PaymentFailedException) আগে রাখতে হবে এবং ব্রড/জেনারেল Exception বা Throwable কে সর্বশেষে রাখতে হবে।`,
          code: `try {
    $order->process();
} catch (PaymentFailedException $e) {
    // শুধুমাত্র পেমেন্ট ফেইলিউরের স্পেসিফিক হ্যান্ডলিং
    alertUser("আপনার কার্ড রিজেক্ট হয়েছে।");
} catch (OutOfStockException $e) {
    // স্টক ফেইলিউর হ্যান্ডলিং
    alertUser("আইটেম স্টক আউট।");
} catch (Exception $e) {
    // অন্যান্য সকল সাধারণ ত্রুটি
    logGenericError($e);
}`
        },
        {
          title: '৫. Throwable ইন্টারফেস ও মডার্ন এরর হায়ারার্কি ⭐⭐⭐⭐⭐',
          explanationBn: `PHP 7+ এ Throwable হলো সর্বোচ্চ রুট ইন্টারফেস। এর নিচে দুটি প্রধান শাখা রয়েছে: Exception (ইউজারল্যান্ড এক্সেপশন) এবং Error (ইন্টারনাল ফ্যাটাল এরর যেমন TypeError, ParseError, ValueError)। কোনো ত্রুটি যেন অ্যাপ্লিকেশন ক্র্যাশ না করায়, তাই গ্লোবাল বাউন্ডারিতে catch (Throwable $e) ব্যবহার করা হয়।`,
          code: `try {
    $result = 100 / 0; // DivisionByZeroError (extends Error)
} catch (Throwable $e) {
    echo "যেকোনো Exception বা Error নিরাপদভাবে হ্যান্ডেল করা হয়েছে: " . $e->getMessage();
}`
        },
        {
          title: '৬. Exception Chaining ও Re-throw মেকানিজম ⭐⭐⭐⭐',
          explanationBn: `লো-লেভেল টেকনিক্যাল এররকে (যেমন PDOException) হাই-লেভেল বিজনেস এক্সেপশনে রূপান্তর করার সময় মূল কারণ অক্ষুণ্ণ রাখতে $previous আর্গুমেন্ট হিসেবে পাস করা হয় ($e->getPrevious())। এছাড়া এক্সেপশন লগ করে পুনরায় প্যারেন্ট লেয়ারে পাঠাতে throw $e; ব্যবহার করা হয়।`,
          code: `try {
    $db->execute();
} catch (PDOException $e) {
    error_log("DB Failure: " . $e->getMessage());
    // মূল PDOException কে চেইনিং করে বিজনেস এক্সেপশন তৈরি
    throw new OrderPlacementException("অর্ডার প্লেসমেন্ট সাময়িকভাবে ব্যর্থ হয়েছে।", 0, $e);
}`
        },
        {
          title: '৭. Return Value বনাম Exception (কখন কোনটি?) ⭐⭐⭐⭐',
          explanationBn: `গোল্ডেন রুল:
• Expected Condition (স্বাভাবিক সম্ভাব্য ফলাফল, যেমন সার্চে ইউজার না পাওয়া): Return null বা Return false ব্যবহার করুন।
• Exceptional Failure (অপ্রত্যাশিত বা সিস্টেম বিঘ্ন, যেমন ডাটাবেজ ডাউন বা পেমেন্ট এপিআই ফেইল): Exception throw করুন।`,
          code: `// স্বাভাবিক অবস্থা -> Return Type
function findUserByEmail(string $email): ?User {
    return $db->find($email) ?: null;
}

// ব্যতিক্রমী বিপর্যয় -> Throw Exception
function chargeCard(User $user, float $amount): void {
    if (!$paymentGateway->isOnline()) {
        throw new RuntimeException("পেমেন্ট গেটওয়ে সার্ভার ডাউন!");
    }
}`
        },
        {
          title: '৮. প্রোডাকশন এরর বাউন্ডারি ও সিকিউরিটি ⭐⭐⭐⭐⭐',
          explanationBn: `প্রোডাকশন পরিবেশে ব্যবহারকারীকে কখনোই Raw Stack Trace, ফাইলের পাথ বা ডাটাবেজ কুয়েরি দেখানো যাবে না। কন্ট্রোলার লেভেলে ত্রুটি ক্যাচ করে জেনেরিক মেসেজ রিটার্ন করতে হবে এবং সার্ভারের সুরক্ষিত ইন্টারনাল লগ ফাইলে বিস্তারিত ট্রেস সংরক্ষণ করতে হবে।`,
          code: `try {
    $orderService->checkout($cart);
} catch (Throwable $e) {
    // ১. সার্ভারে বিস্তারিত লগ সংরক্ষণ
    error_log("[CRITICAL] " . $e->getMessage() . " in " . $e->getFile() . ":" . $e->getLine());
    
    // ২. ক্লায়েন্টকে নিরাপদ ফ্রেন্ডলি বার্তা প্রদান
    http_response_code(500);
    echo json_encode(["error" => "সার্ভারে একটি সাময়িক সমস্যা হয়েছে। অনুগ্রহ করে কিছুক্ষণ পর চেষ্টা করুন।"]);
}`
        }
      ],
      keyPointsBn: [
        'try ব্লকে রিস্কি কোড রাখুন, throw দিয়ে এক্সেপশন ছুড়ুন এবং catch দিয়ে হ্যান্ডেল করুন।',
        'finally ব্লক এরর ঘটুক বা না ঘটুক রিসোর্স মুক্ত করার জন্য সর্বদা কার্যকর হয়।',
        'ডোমেইন নির্দিষ্ট সমস্যার জন্য কাস্টম Exception ক্লাস তৈরি করুন।',
        'PHP 7+ এ Exception এবং Error উভয়ই Throwable ইন্টারফেস বাস্তবায়ন করে।',
        'প্রোডাকশনে ব্যবহারকারীকে স্ট্যাক ট্রেস না দেখিয়ে জেনেরিক মেসেজ দিন এবং ইন্টারনাল লগে বিস্তারিত রেকর্ড করুন।'
      ],
      practiceExamples: [
        {
          title: 'এন্টারপ্রাইজ সার্ভিস-কন্ট্রোলার এক্সেপশন আর্কিটেকচার',
          descriptionBn: 'সার্ভিস লেয়ারে কাস্টম এক্সেপশন থ্রো এবং কন্ট্রোলার বাউন্ডারিতে স্ট্যাটাস কোড সহ ক্লিন হ্যান্ডলিং।',
          code: `<?php
class UserNotFoundException extends Exception {}
class ValidationException extends Exception {}

class UserService {
    public function getUserProfile(int $id): array {
        if ($id <= 0) {
            throw new ValidationException("আইডি অবশ্যই ধনাত্মক পূর্ণসংখ্যা হতে হবে।", 422);
        }

        $user = ["id" => 1, "name" => "Abbad"]; // Simulated DB lookup
        if ($id !== 1) {
            throw new UserNotFoundException("ইউজার আইডি #{$id} পাওয়া যায়নি।", 404);
        }

        return $user;
    }
}

// Controller Layer (Boundary)
function userController(int $userId): void {
    $service = new UserService();

    try {
        $user = $service->getUserProfile($userId);
        echo json_encode(["status" => "success", "data" => $user]);
    } catch (ValidationException $e) {
        http_response_code($e->getCode());
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    } catch (UserNotFoundException $e) {
        http_response_code($e->getCode());
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    } catch (Throwable $e) {
        error_log($e->getMessage());
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "ইন্টারনাল সার্ভার এরর"]);
    }
}
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র ভুল: খালি ক্যাচ ব্লক এবং প্রোডাকশনে ডাটাবেজ স্ট্যাক ট্রেস প্রদর্শন
try {
    $db->query("SELECT * FROM secret_orders WHERE user_id = " . $_GET['id']);
} catch (Exception $e) {
    // ১. খালি ক্যাচ - এরর সাইলেন্টলি গায়েব!
}

try {
    $payment->charge();
} catch (Exception $e) {
    // ২. প্রোডাকশন ইউজারকে ইন্টারনাল SQL ও সার্ভার পাথ উন্মুক্ত করে দেওয়া
    die("Database Error: " . $e->getMessage() . " in " . $e->getFile());
}`,
        juniorProblems: [
          'খালি ক্যাচ ব্লক থাকায় সিস্টেমের গুরুতর বাগ শনাক্ত করা অসম্ভব হয়ে পড়ে।',
          'ইউজার স্ক্রিনে ফাইলের ডিরেক্টরি পাথ ও SQL কুয়েরি ফাঁস হওয়ায় সিস্টেম হ্যাকিংয়ের মুখে পড়ে।'
        ],
        seniorCode: `//  সিনিয়র আর্কিটেকচার: Domain Exceptions, Safe Logging & Uniform Boundary
try {
    $paymentService->processOrder($orderId, $amount);
} catch (PaymentGatewayException $e) {
    // বিজনেস ডোমেইন ত্রুটি
    http_response_code(402);
    echo json_encode(["success" => false, "message" => "Payment transaction was declined."]);
} catch (Throwable $e) {
    // বিস্তারিত ইন্টারনাল সিস্টেম ত্রুটি সুরক্ষিত লগে লেখা
    error_log(sprintf(
        "[FATAL] %s in %s:%d | Trace: %s",
        $e->getMessage(),
        $e->getFile(),
        $e->getLine(),
        $e->getTraceAsString()
    ));

    http_response_code(500);
    echo json_encode(["success" => false, "message" => "An unexpected server error occurred."]);
}`,
        seniorBenefits: [
          'জিরো ইনফরমেশন ডিসক্লোজার: ইউজার কেবল নিরাপদ বার্তা দেখতে পায়।',
          'সার্ভার অ্যাডমিনদের ডিবাগিংয়ের জন্য সম্পূর্ণ স্ট্যাক ট্রেস লগে সংরক্ষিত থাকে।',
          'HTTP স্ট্যাটাস কোড (402, 500) ক্লায়েন্ট অ্যাপ্লিকেশনের সাথে নিখুঁতভাবে সিঙ্ক থাকে।'
        ],
        architectAdvice: 'কন্ট্রোলার বাউন্ডারির ভেতরে কখনোই unhandled exception পৌঁছাতে দেবেন না। সার্ভিস লেয়ার থেকে throw করুন, আর কন্ট্রোলার লেয়ারে catch করে লগ এবং রেসপন্স প্রস্তুত করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'ZEND_THROW -> sets EG(exception)',
          'zend_unwind_fcall_frames() cleans stack frames',
          'ZEND_CATCH -> inspects catch class type'
        ],
        explanationBn: `যখন পিএইচপিতে throw নির্দেশিকা চালানো হয়, জেন্ড ইঞ্জিন একটি ZEND_THROW অপকোড তৈরি করে এবং গ্লোবাল এক্সিকিউটর ` + 'EG(exception)' + ` পয়েন্টারে অবজেক্টটি সংযুক্ত করে। এরপর জেন্ড ইঞ্জিন স্ট্যাক ফ্রেমগুলো একে একে আনওয়াইন্ড (unwind) করে মিল থাকা ZEND_CATCH ব্লকে এক্সিকিউশন স্থানান্তর করে।`
      },
      security: {
        vulnerabilityType: 'Information Disclosure via Unhandled Stack Traces',
        attackVectorBn: 'কনফিগারেশন মিসম্যাচ বা অপ্রত্যাশিত ইনপুট পাঠিয়ে ডাটাবেজ এরর তৈরি করে স্ট্যাক ট্রেসের মাধ্যমে ডাটাবেজ ইউজারনেম, পাসওয়ার্ড ও ফাইল পাথ বের করে নেওয়া।',
        preventionRuleBn: 'প্রোডাকশন php.ini ফাইলে display_errors = Off রাখুন এবং সর্বদা টপ-লেভেল গ্লোবাল হ্যান্ডলার বা Throwable ক্যাচ বাউন্ডারি প্রয়োগ করুন।'
      }
    },
    pedagogy: {
      trainerMetaphorBn: 'Exception হ্যান্ডলিং হলো ভবনের ফায়ার অ্যালার্ম ও ইমার্জেন্সি রেসপন্স সিস্টেমের মতো। রান্নাঘরে আগুন লাগলে (Problem) অ্যালার্ম বেজে ওঠে (throw), ফায়ার ফাইটাররা এসে আগুন নিয়ন্ত্রণে আনে (catch), এবং আগুন নিভুক বা না নিভুক ইমার্জেন্সি দরজাগুলো সর্বদা আনলক (finally) রাখা হয়।',
      beginnerSteps: [
        {
          step: 1,
          title: 'try ব্লক দিয়ে কোড ঘিরুন',
          explanationBn: 'যে অপারেশনে ত্রুটি হতে পারে তা try { } ব্লকে রাখুন।'
        },
        {
          step: 2,
          title: 'throw দিয়ে ব্যতিক্রম তৈরি করুন',
          explanationBn: 'শর্ত পূরণ না হলে throw new Exception("বার্তা") লিখুন।'
        },
        {
          step: 3,
          title: 'catch ও finally যোগ করুন',
          explanationBn: 'ত্রুটি ধরতে catch এবং রিসোর্স বন্ধ করতে finally ব্যবহার করুন।'
        }
      ],
      trainerSecretsBn: [
        'কখনোই সাধারণ if/else লজিকের বিকল্প হিসেবে এক্সেপশন ব্যবহার করবেন না; এক্সেপশন তৈরি ও স্ট্যাক ট্রেস জেনারেশন মেমরি সাপেক্ষ।',
        'সবসময় catch (Exception $e) এর জায়গায় গ্লোবাল সেফটির জন্য catch (Throwable $e) ব্যবহার করার কথা ভাবুন।'
      ],
      commonGotchasBn: [
        'ভুল: catch ব্লকে কোড খালি রাখা (Empty catch); এতে বাগ লুকিয়ে থাকে।',
        'ভুল: চাইল্ড এক্সেপশনের আগে প্যারেন্ট Exception ক্লাস ক্যাচ করা (এতে চাইল্ড ক্যাচ ব্লক কখনোই কল হবে না)।'
      ],
      interviewQuestions: [
        {
          questionBn: 'Exception এবং Error এর মধ্যে মূল পার্থক্য কী এবং Throwable এর ভূমিকা কী?',
          answerBn: 'PHP 7+ এ Exception এবং Error দুটি আলাদা ক্লাস যা উভয়ই Throwable ইন্টারফেসকে ইমপ্লিমেন্ট করে। Exception সাধারণত ইউজারল্যান্ড বিজনেস লজিক বা রিকভারেবল সমস্যার জন্য ব্যবহৃত হয়। আর Error ইন্টারনাল ইঞ্জিন ফেইলিউর (যেমন TypeError, DivisionByZeroError) নির্দেশ করে। catch (Throwable $e) দিলে উভয় ধরনের সমস্যাই একক বাউন্ডারিতে ধরা সম্ভব।',
          seniorTipBn: 'Exception Chaining (getPrevious) এবং প্রোডাকশন লগিং স্ট্র্যাটেজির গুরুত্ব ব্যাখ্যা করুন।'
        }
      ],
      studentChallenge: {
        title: 'ব্যাংক একাউন্ট উইথড্রয়াল ভ্যালিডেটর',
        taskBn: 'একটি ফাংশন লিখুন যা ব্যালেন্স ও উত্তোলনের পরিমাণ গ্রহণ করে; পর্যাপ্ত টাকা না থাকলে InsufficientFundsException থ্রো করবে এবং ট্রানজ্যাকশন শেষে সর্বদা finally ব্লকে অডিট মেসেজ প্রিন্ট করবে।',
        hintBn: 'কাস্টম Exception ক্লাস তৈরি করুন এবং try-catch-finally ব্লক ব্যবহার করুন।',
        starterCode: `<?php
// কাস্টম এক্সেপশন ও উইথড্রয়াল ফাংশন তৈরি করুন
`,
        solutionCode: `<?php
class InsufficientFundsException extends Exception {}

function processWithdrawal(float $balance, float $amount): float {
    try {
        if ($amount > $balance) {
            throw new InsufficientFundsException("উত্তোলনের জন্য পর্যাপ্ত ব্যালেন্স নেই!");
        }
        $newBalance = $balance - $amount;
        echo "সফল উত্তোলন: \${$amount}\\n";
        return $newBalance;
    } catch (InsufficientFundsException $e) {
        echo "ত্রুটি: " . $e->getMessage() . "\\n";
        return $balance;
    } finally {
        echo "লেনদেন অনুসন্ধান সম্পন্ন।\\n";
    }
}

processWithdrawal(100.0, 150.0);
?>`
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PHP Enterprise Exception Architecture',
          subtitle: 'Controlled Flow, Custom Domains & Production Boundaries',
          bulletPoints: [
            'try (risky code), throw (trigger error), catch (handle error)',
            'finally block executes unconditionally for guaranteed resource cleanup',
            'Domain Custom Exceptions for clean and targeted error handling',
            'Throwable interface covers both user Exceptions and internal Errors',
            'Never display stack traces to users; log internally and return safe messages'
          ],
          trainerSpeechNotes: 'Exceptions are for exceptional failures, not normal if-else flow. Always establish a clear error boundary at the controller layer.',
          analogyOrHighlight: 'Exceptions = Building Fire Alarm & Controlled Emergency Dispatch'
        }
      ]
    }
  }
];

