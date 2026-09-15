import { TopicItem } from '../types';

export const ARCHITECT_TOPICS: TopicItem[] = [
  {
    id: 'architect-zval-memory',
    title: 'Zval Internals & Copy-on-Write (COW)',
    category: 'architect',
    tag: 'Zend Internals',
    phpVersion: 'PHP 8.2+',
    subtitleBn: 'জেন্ড ইঞ্জিনের অভ্যন্তরীণ C-স্ট্রাক্ট `zval`, রেফারেন্স কাউন্টিং ও মেমোরি লাইফসাইকেল।',
    sampleCode: `<?php
// Copy-on-Write (COW) মেমোরি আর্কিটেকচার পর্যবেক্ষণ
$largeArray = range(1, 100_000);
$initialMem = memory_get_usage();

// ভ্যারিয়েবল কপি করা হলো, কিন্তু মেমোরি বাড়ে না! (একই zval পয়েন্ট করে)
$copiedArray = $largeArray;
$afterCopyMem = memory_get_usage();

echo "কপির পর অতিরিক্ত মেমোরি: " . ($afterCopyMem - $initialMem) . " bytes<br>";

// যখন কোনো মান পরিবর্তন (Write) করা হবে, তখনই মেমোরি ডুপ্লিকেট হবে
$copiedArray[0] = 999;
$afterWriteMem = memory_get_usage();

echo "পরিবর্তনের (Write) পর অতিরিক্ত মেমোরি: " . round(($afterWriteMem - $afterCopyMem) / 1024) . " KB";
?>`,
    deepDive: {
      conceptBn: `PHP 7-এ zval স্ট্রাকচারকে রিডিজাইন করে ১৬ বাইটে নামিয়ে আনা হয়েছে (PHP 5-এ ছিল ৪৮ বাইট)। এটি আধুনিক CPU ক্যাশের L1/L2 লাইনে সরাসরি ফিট হয়। Copy-on-Write (COW) কৌশলে পিএইচপি একটি বড় অ্যারে কপি করলেও যতক্ষণ না উপাদান পরিবর্তিত হচ্ছে, ততক্ষণ বাড়তি মেমোরি খরচ হয় না।`,
      keyPointsBn: [
        'zval (Zend Value) হলো C স্ট্রাকচার যাতে টাইপ ও ভ্যালু সংরক্ষিত থাকে।',
        'refcount বৃদ্ধি পেলে zval মেমোরিতে শেয়ার থাকে, ভ্যালু পরিবর্তিত হলে মেমোরি ক্লোন হয়।',
        'ইন্টার্নড স্ট্রিং (Interned Strings) যেমন ফাংশনের নাম বা ভ্যারিয়েবলের নাম গ্লোবালি একবারই মেমরিতে অ্যালোক হয়।'
      ],
      zendInternals: {
        cStructOrMemory: `struct _zval_struct {
    zend_value value; // 8 bytes union (lval, dval, counted, str, arr, obj)
    union {
        struct {
            zend_uchar type;
            zend_uchar type_flags;
            union { ... } u;
        } v;
        uint32_t type_info;
    } u1;
    union {
        uint32_t next;
        ...
    } u2;
};`,
        explanationBn: 'Zend Engine 8-এর zval স্ট্রাকচার মাত্র ১৬ বাইট মেমোরি দখল করে। সাধারণ int বা bool মানগুলো সরাসরি zval-এর ভেতর স্টোর থাকে, কোনো আলাদা মেমোরি পয়েন্টার অ্যালোকেশন ছাড়া!'
      }
    }
  },
  {
    id: 'architect-opcache-jit',
    title: 'OPcache & JIT Compilation Architecture',
    category: 'architect',
    tag: 'High Performance',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'Just-In-Time (JIT) কম্পাইলার, DynASM এবং CPU মেশিন কোড জেনারেশন।',
    sampleCode: `<?php
echo "<h3>OPcache ও JIT স্ট্যাটাস চেক:</h3>";

if (function_exists('opcache_get_status')) {
    $status = opcache_get_status(false);
    echo "OPcache এনাবল্ড: " . ($status['opcache_enabled'] ? 'হ্যাঁ' : 'না') . "<br>";
    if (isset($status['jit'])) {
        echo "JIT এনাবল্ড: " . ($status['jit']['enabled'] ? 'হ্যাঁ' : 'না') . "<br>";
        echo "JIT বাফার সাইজ: " . ($status['jit']['buffer_size'] ?? 0) . " bytes<br>";
    }
} else {
    echo "WebAssembly প্রিভিউতে OPcache সি-লেভেলে স্ট্যাটিকালি কম্পাইল্ড।";
}
?>`,
    deepDive: {
      conceptBn: `ঐতিহ্যগতভাবে পিএইচপির অপকোড Zend VM-এ ইন্টারপ্রেট হয়। PHP 8-এ যোগ হওয়া Tracing JIT রানটাইমে সবচেয়ে বেশি এক্সিকিউট হওয়া হট-কোড (Hot Code) শনাক্ত করে সরাসরি x86_64 বা ARM64 মেশিন কোডে কম্পাইল করে দেয়। ফলে গণনামূলক অ্যালগরিদম ও ডেটা প্রসেসিংয়ে পিএইচপি সি-ল্যাঙ্গুয়েজের কাছাকাছি গতি পায়।`,
      keyPointsBn: [
        'OPcache অপকোডকে রমে ক্যাশ করে ডিস্ক I/O এবং পার্সিং ওভারহেড সম্পূর্ণ বাদ দেয়।',
        'JIT মূলত হেভি কম্পিউটেশনাল (AI, ইমেজ প্রসেসিং, ফ্র্যাক্টাল, গেম লজিক) স্ক্রিপ্টে ৩-৫ গুণ গতি বৃদ্ধি করে।'
      ]
    }
  },
  {
    id: 'architect-generators-memory',
    title: 'Generators & Infinite Streams (yield)',
    category: 'architect',
    tag: 'Memory Optimization',
    phpVersion: 'PHP 8.0+',
    subtitleBn: '১০ লাখ রেকর্ডের মেমোরি অপ্টিমাইজেশন: অ্যারে বনাম yield জেনারেটরের মেমোরি পার্থক্য।',
    sampleCode: `<?php
// সাধারণ অ্যারে তৈরি করলে কয়েকশত মেগাবাইট মেমোরি নষ্ট হয়
// কিন্তু Generator (yield) মাত্র কয়েক কিলোবাইটে লক্ষ লক্ষ ডেটা স্ট্রিম করে!

function generateMillionNumbers(int $max) {
    for ($i = 1; $i <= $max; $i++) {
        yield $i; // এক্সিকিউশন পজ করে এক একটি মান ফেরত দেয়
    }
}

$startMem = memory_get_usage();
$generator = generateMillionNumbers(1_000_000);

echo "১০ লক্ষ সংখ্যার জেনারেটর প্রস্তুত!<br>";
echo "ব্যবহৃত মোট মেমোরি: " . round((memory_get_usage() - $startMem) / 1024, 2) . " KB মাত্র!<br>";

// প্রথম ৫টি সংখ্যা রিড করা
echo "প্রথম ৫টি সংখ্যা: ";
$count = 0;
foreach ($generator as $num) {
    echo "$num ";
    if (++$count >= 5) break;
}
?>`,
    deepDive: {
      conceptBn: `যখন আমরা ডেটাবেস থেকে ১০ লক্ষ সারি এক্সপোর্ট করি বা বড় CSV পার্স করি, সাধারণ অ্যারে সার্ভারের মেমরি এক্সহস্ট করে fatal error: Allowed memory size of ... exhausted দেয়। জেনারেটর ফাংশন মেমোরিতে পুরো লিস্ট না রেখে এক একটি আইটেম জেনারেট করে স্ট্রিম করে।`,
      keyPointsBn: [
        'yield স্টেটমেন্ট ফাংশনের অবস্থা ফ্রিজ করে রাখে এবং পরবর্তী iteration-এ সেখান থেকেই শুরু করে।',
        'Iterator ইন্টারফেসের সব সুবিধা কোনো জটিল ক্লাস কোড ছাড়াই পাওয়া যায়।'
      ]
    }
  }
];
