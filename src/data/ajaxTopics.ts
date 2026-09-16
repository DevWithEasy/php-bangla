import { TopicItem } from '../types';

export const AJAX_TOPICS: TopicItem[] = [
  {
    id: 'ajax-intro',
    title: 'AJAX Intro',
    category: 'ajax',
    tag: 'Asynchronous HTTP & Lifecycle',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'AJAX (Asynchronous JavaScript and XML) কী, পেজ রিলোড ছাড়া ব্যাকগ্রাউন্ডে সার্ভার কমিউনিকেশন ও রিকোয়েস্ট লাইফসাইকেল।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP & AJAX — Asynchronous Request Lifecycle</h2>";

// সিমুলেটেড ক্লায়েন্ট AJAX রিকোয়েস্ট (Fetch API / XHR Payload)
$isAjaxRequest = true; // সিমুলেটেড AJAX হেডার
$clientTimestamp = date('H:i:s');
$action = "get_server_time";

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>১. AJAX আর্কিটেকচার ও ডেটা ফ্লো</h4>";
echo "<div style='background:#1e293b; padding:14px; border-radius:8px; font-family:monospace; font-size:13px; color:#38bdf8; margin-bottom:16px;'>";
echo "Browser (DOM Event) ➔ JS fetch('/api/time.php') ➔ Background HTTP Request ➔ PHP Server Process ➔ JSON Response ➔ JS Updates DOM (No Full Page Reload!)";
echo "</div>";

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>২. ব্যাকএন্ডে AJAX রিকোয়েস্ট প্রসেসিং সিমুলেশন</h4>";

// ব্যাকএন্ড রেসপন্স ডাটা স্ট্রাকচার
$response = [
    'status'       => 'success',
    'timestamp'    => $clientTimestamp,
    'serverEngine' => 'PHP ' . PHP_VERSION,
    'serverTime'   => date('Y-m-d H:i:s T'),
    'memoryUsage'  => round(memory_get_usage() / 1024, 2) . ' KB',
    'message'      => 'অ্যাসিঙ্ক্রোনাসলি পেজ রিফ্রেশ ছাড়াই ব্যাকএন্ড থেকে ডেটা লোড হয়েছে!'
];

echo "<div style='background:#064e3b; border:1px solid #059669; padding:12px; border-radius:8px; margin-bottom:16px;'>";
echo "<p style='color:#34d399; margin:0 0 6px 0; font-weight:bold;'>⚡ Client Received JSON Payload:</p>";
echo "<pre style='background:#022c22; color:#a7f3d0; padding:10px; border-radius:6px; font-size:12px; margin:0; overflow-x:auto;'>";
echo htmlspecialchars(json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), ENT_QUOTES, 'UTF-8');
echo "</pre>";
echo "</div>";

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>৩. ট্র্যাডিশনাল ওয়েব বনাম AJAX সিঙ্গেল পেজ ইন্টারেকশন</h4>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>প্যারামিটার</th><th style='padding:6px; text-align:left;'>Traditional Form / Page</th><th style='padding:6px; text-align:left;'>AJAX (Modern Fetch)</th></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Page Lifecycle</td><td style='padding:6px; color:#f87171;'>পুরো পেজ সাদা হয়ে আবার রিফ্রেশ হয়</td><td style='padding:6px; color:#4ade80;'>পেজ ফ্লিকার ছাড়া নির্দিষ্ট DOM অংশ আপডেট হয়</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Bandwidth</td><td style='padding:6px; color:#f87171;'>পুরো HTML, CSS, JS পুনরায় ডাউনলোড হয়</td><td style='padding:6px; color:#4ade80;'>শুধুমাত্র প্রয়োজনীয় JSON/XML ডেটা ট্রান্সফার হয়</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>User Experience</td><td style='padding:6px; color:#f87171;'>স্লো ও বাধাগ্রস্ত (Interruptive)</td><td style='padding:6px; color:#4ade80;'>স্মুথ ও অ্যাপ-লাইক রিয়েলটাইম ফিলিং</td></tr>";
echo "</table>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `AJAX (Asynchronous JavaScript and XML) কোনো প্রোগ্রামিং ভাষা নয়, বরং ব্যাকগ্রাউন্ডে ব্রাউজার ও সার্ভারের মধ্যে ডেটা আদান-প্রদানের একটি আধুনিক ওয়েব টেকনিক।\n\n🎯 মূল সুবিধা:\n১. পেজ রিলোড ছাড়াই ব্যাকগ্রাউন্ডে সার্ভারে ডেটা পাঠানো ও রিসিভ করা যায়।\n২. ব্যান্ডউইথ অপচয় বন্ধ হয় কারণ পুরো পেজের বদলে কেবল JSON/XML ডেটা আদান-প্রদান হয়।\n৩. ব্যবহারকারী ফ্লিকারিং ছাড়া ডেস্কটপ বা মোবাইল অ্যাপের মতো স্মুথ এক্সপেরিয়েন্স পান।`,
      lessonSections: [
        {
          title: '১. AJAX কিভাবে কাজ করে (Request Lifecycle)?',
          explanationBn: `১. ব্যবহারকারী কোনো বাটনে ক্লিক বা ইনপুটে টাইপ করেন (DOM Event)।\n২. জাভাস্ক্রিপ্ট একটি XMLHttpRequest বা আধুনিক fetch() রিকোয়েস্ট তৈরি করে।\n৩. ব্যাকগ্রাউন্ডে ব্রাউজার সার্ভারে (PHP স্ক্রিপ্ট) HTTP রিকোয়েস্ট পাঠায়।\n৪. পিএইচপি সার্ভার ডেটাবেস প্রসেস করে JSON বা HTML রেসপন্স পাঠায়।\n৫. ব্রাউজারে জাভাস্ক্রিপ্ট সেই রেসপন্স পার্স করে ডকুমেন্ট অবজেক্ট মডেল (DOM) আপডেট করে।`,
          code: `<?php
// PHP AJAX Endpoint Simulator
$isAjax = true;
$requestTime = date('Y-m-d H:i:s');

if ($isAjax) {
    $payload = [
        'status'  => 'success',
        'message' => 'Data loaded asynchronously without page reload!',
        'time'    => $requestTime,
        'engine'  => 'PHP ' . PHP_VERSION
    ];
    echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `{\n    "status": "success",\n    "message": "Data loaded asynchronously without page reload!",\n    "time": "2026-09-15 23:30:00",\n    "engine": "PHP 8.2"\n}`,
          noteBn: 'AJAX কমিউনিকেশনে পুরো পেজ রিফ্রেশ না হয়ে কেবল ব্যাকগ্রাউন্ডে ডাটা প্যাকেট আদান-প্রদান হয়।'
        },
        {
          title: '২. জাভাস্ক্রিপ্ট ক্লায়েন্ট কোড (Modern Fetch API)',
          explanationBn: `Fetch API দিয়ে ব্রাউজার থেকে ব্যাকগ্রাউন্ডে পিএইচপি স্ক্রিপ্টে রিকোয়েস্ট পাঠানো হয় এবং রেসপন্স দিয়ে DOM আপডেট করা হয়।`,
          code: `<!-- Client-Side JavaScript Fetch Logic -->
<div id="result">Waiting for server response...</div>
<button onclick="loadData()">Fetch Server Data</button>

<script>
function loadData() {
    fetch('api/time.php')
      .then(response => response.json())
      .then(data => {
          document.getElementById('result').innerText = data.message + ' [' + data.time + ']';
      })
      .catch(error => console.error('Fetch Error:', error));
}
</script>`,
          codeLanguage: 'JavaScript & HTML',
          outputPreview: `[Rendered UI]\n#result: "Data loaded asynchronously without page reload! [2026-09-15 23:30:00]"\n[Fetch Server Data Button (Active)]`,
          noteBn: 'fetch() রিটার্ন করে একটি Promise; তাই async/await অথবা .then().catch() দিয়ে হ্যান্ডল করা হয়।'
        },
        {
          title: '৩. পিএইচপি ব্যাকএন্ডের ভূমিকা',
          explanationBn: `পিএইচপি সার্ভার-সাইড স্ক্রিপ্ট হিসেবে AJAX রিকোয়েস্ট হ্যান্ডেল করে। পিএইচপি রেসপন্স দেওয়ার সময় সঠিক হেডার প্রদান করে: header('Content-Type: application/json; charset=UTF-8'); এবং json_encode() দিয়ে ডেটা আউটপুট করে।`,
          code: `<?php
header('Content-Type: application/json; charset=UTF-8');

$userData = [
    'userId' => 42,
    'name'   => 'Mohammad Abbad',
    'status' => 'Active',
    'unread' => 5
];

echo json_encode(['success' => true, 'user' => $userData], JSON_UNESCAPED_UNICODE);
exit;
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `{"success":true,"user":{"userId":42,"name":"Mohammad Abbad","status":"Active","unread":5}}`,
          noteBn: 'রেসপন্স পাঠানোর পর অবশ্যই exit; বা die; কল করবেন যাতে অনাকাঙ্ক্ষিত বাড়তি স্পেস বা HTML আউটপুট রেসপন্স নষ্ট না করে।'
        }
      ],
      keyPointsBn: [
        'AJAX = Asynchronous JavaScript and XML',
        'পেজ রিলোড ছাড়া ব্যাকগ্রাউন্ডে ডাটাবেস ও সার্ভারের সাথে যোগাযোগ করে',
        'ক্লায়েন্ট-সাইডে JavaScript (fetch/XHR) এবং সার্ভার-সাইডে PHP কাজ করে',
        'আধুনিক যুগে XML এর চেয়ে JSON ফরম্যাট শতগুণ বেশি জনপ্রিয় ও লাইটওয়েট'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: পিএইচপিতে প্রথম AJAX এন্ডপয়েন্ট তৈরি',
          descriptionBn: 'JSON হেডার ও স্ট্রাকচার্ড পে-লোড পাঠানোর আদর্শ পিএইচপি স্ক্রিপ্ট।',
          code: `<?php
header('Content-Type: application/json; charset=utf-8');

$response = [
    'success' => true,
    'time'    => date('Y-m-d H:i:s'),
    'message' => 'AJAX endpoint is working perfectly!'
];

echo json_encode($response);
exit;
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: প্রতি বাটনে পুরো ফর্ম সাবমিট দিয়ে পেজ রিলোড করানো
<form action="save.php" method="POST">
  <input name="item" value="apple">
  <button type="submit">Add Item</button>
</form>`,
        juniorProblems: [
          'প্রতিটি ক্লিক বা সিলেকশনে পুরো পেজ রিফ্রেশ হয়ে স্ক্রল পজিশন হারিয়ে যায়।',
          'সার্ভার লোড ও ব্যান্ডউইথ খরচ মারাত্মকভাবে বেড়ে যায়।'
        ],
        seniorCode: `// ✅ সিনিয়র: Fetch API দিয়ে ব্যাকগ্রাউন্ড AJAX রিকোয়েস্ট ও অপটিমিস্টিক UI
fetch('/api/add-item.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ item: 'apple' })
})
.then(res => res.json())
.then(data => updateCartBadge(data.count));`,
        seniorBenefits: [
          'কোনো পেজ রিফ্রেশ ছাড়াই মিলিসেকেন্ডে কার্ট আপডেট।',
          'নেটওয়ার্ক ব্যান্ডউইথ ৯০% সাশ্রয়।'
        ],
        architectAdvice: 'AJAX এপিআই এন্ডপয়েন্টে সর্বদা সঠিক HTTP Status Code (200, 400, 401, 422, 500) রিটার্ন করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (php_header)',
          'INIT_FCALL (php_json_encode)',
          'ECHO',
          'EXIT'
        ],
        explanationBn: `header("Content-Type: application/json") কল করলে জেন্ড ইঞ্জিন sapi_header_op দিয়ে ক্লায়েন্ট রেসপন্স হেডার সেট করে এবং json_encode C-এক্সটেনশনে ফাস্ট সিরিয়ালাইজেশন করে।`
      },
      security: {
        vulnerabilityType: 'CORS Misconfiguration & Missing CSRF in AJAX',
        attackVectorBn: 'অন্য ডোমেইন থেকে ম্যালিশিয়াস AJAX স্ক্রিপ্ট দিয়ে ভিক্টিমের অ্যাকাউন্টে ব্যাকগ্রাউন্ড রিকোয়েস্ট পাঠানো।',
        preventionRuleBn: 'AJAX এন্ডপয়েন্টে X-Requested-With অথবা Custom CSRF Header (X-CSRF-TOKEN) ভেরিফাই করুন।'
      }
    }
  },
  {
    id: 'ajax-php',
    title: 'AJAX PHP',
    category: 'ajax',
    tag: 'Backend Endpoint & JSON Processing',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'PHP ব্যাকএন্ডে AJAX রিকোয়েস্ট রিসিভ করা, JSON ডেটা প্রসেসিং ও header("Content-Type: application/json") রেসপন্স।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP Backend AJAX Handler & JSON API</h2>";

// সিমুলেটেড ইনকামিং AJAX POST রিকোয়েস্ট
$rawInput = '{"action":"calculate_discount","price":1200,"coupon":"DEV20"}';

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>১. php://input থেকে JSON রিসিভ ও পার্সিং</h4>";
echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-family:monospace; font-size:12px; color:#38bdf8; margin-bottom:12px;'>";
echo "Incoming Raw JSON Stream: " . htmlspecialchars($rawInput, ENT_QUOTES, 'UTF-8');
echo "</div>";

// PHP ব্যাকএন্ড লজিক
$payload = json_decode($rawInput, true);

if (json_last_error() === JSON_ERROR_NONE && isset($payload['price'])) {
    $price = (float)$payload['price'];
    $coupon = strtoupper(trim($payload['coupon'] ?? ''));
    $discountPercent = ($coupon === 'DEV20') ? 20 : 0;
    $discountAmount = ($price * $discountPercent) / 100;
    $finalTotal = $price - $discountAmount;

    $apiResponse = [
        'status'          => 'success',
        'statusCode'      => 200,
        'originalPrice'   => $price,
        'appliedCoupon'   => $coupon,
        'discountPercent' => $discountPercent . '%',
        'discountAmount'  => $discountAmount,
        'finalPayable'    => $finalTotal,
        'message'         => $discountPercent > 0 ? 'কুপন সফলভাবে যুক্ত হয়েছে!' : 'কুপন প্রযোজ্য নয়।'
    ];
} else {
    $apiResponse = [
        'status'     => 'error',
        'statusCode' => 400,
        'message'    => 'Invalid JSON payload received.'
    ];
}

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>২. ব্যাকএন্ড ক্যালকুলেশন ও JSON রেসপন্স আউটপুট:</h4>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>রেসপন্স ফিল্ড</th><th style='padding:6px; text-align:left;'>মান</th></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Status</td><td style='padding:6px; color:#4ade80;'><b>" . $apiResponse['status'] . " (HTTP " . $apiResponse['statusCode'] . ")</b></td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Original Price</td><td style='padding:6px; color:#38bdf8;'>৳ " . number_format($apiResponse['originalPrice'], 2) . "</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Discount (" . $apiResponse['appliedCoupon'] . ")</td><td style='padding:6px; color:#fbbf24;'>- ৳ " . number_format($apiResponse['discountAmount'], 2) . " (" . $apiResponse['discountPercent'] . ")</td></tr>";
echo "<tr style='border-bottom:1px solid #334155;'><td style='padding:6px;'>Final Payable</td><td style='padding:6px; color:#4ade80; font-weight:bold;'>৳ " . number_format($apiResponse['finalPayable'], 2) . "</td></tr>";
echo "</table>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `PHP দিয়ে AJAX রিকোয়েস্ট প্রসেস করার সময় ব্রাউজার থেকে আসা ফর্ম ডাটা (\$_POST) অথবা কাঁচা JSON বডি (file_get_contents('php://input')) রিসিভ করা হয়, বিজনেস লজিক সম্পন্ন করা হয় এবং \`header('Content-Type: application/json')\` সহকারে রেসপন্স পাঠানো হয়।`,
      lessonSections: [
        {
          title: '১. JSON Payload রিসিভ করার স্ট্যান্ডার্ড পদ্ধতি',
          explanationBn: `যখন জাভাস্ক্রিপ্ট fetch() দিয়ে body: JSON.stringify(data) পাঠায়, তখন \$_POST ফাঁকা থাকে। কাঁচা JSON ডেটা রিসিভ করতে php://input স্ট্রিম ব্যবহার করতে হয়।`,
          code: `<?php
// র' JSON স্ট্রিম রিসিভ ও পার্সিং
$rawJson = '{"action":"login","username":"abbad_dev"}';
$data = json_decode($rawJson, true); // Associative Array

if (json_last_error() === JSON_ERROR_NONE) {
    echo "সফলভাবে JSON পার্স হয়েছে:<br>";
    echo "Action: " . $data['action'] . "<br>";
    echo "Username: " . $data['username'];
} else {
    echo "ত্রুটি: অবৈধ JSON ডেটা।";
}
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `সফলভাবে JSON পার্স হয়েছে:\nAction: login\nUsername: abbad_dev`,
          noteBn: 'json_decode($json, true) এ দ্বিতীয় প্যারামিটার true দিলে অ্যাসোসিয়েটিভ অ্যারে পাওয়া যায়।'
        },
        {
          title: '২. FormData রিসিভ করার পদ্ধতি',
          explanationBn: `যখন জাভাস্ক্রিপ্ট new FormData(formElement) পাঠায়, তখন PHP প্রথাগত \$_POST সুপারগ্লোবাল থেকেই সমস্ত ভ্যালু গ্রহণ করে।`,
          code: `<?php
// সিমুলেটেড FormData রিসিভ
$_POST['username'] = "abbad_engineer";
$_POST['email'] = "abbad@dev.com";

$username = trim($_POST['username'] ?? '');
$email = trim($_POST['email'] ?? '');

echo "FormData Received via POST:<br>";
echo "User: " . htmlspecialchars($username) . "<br>";
echo "Email: " . htmlspecialchars($email);
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `FormData Received via POST:\nUser: abbad_engineer\nEmail: abbad@dev.com`,
          noteBn: 'FormData অবজেক্ট ব্যবহার করলে ফাইল আপলোড ও মাল্টিপার্ট ডাটাও অনায়াসে পাঠানো যায়।'
        },
        {
          title: '৩. প্রফেশনাল রেসপন্স স্ট্রাকচার',
          explanationBn: `একটি প্রফেশনাল এপিআই রেসপন্সে success ফ্ল্যাগ, message এবং data পেলোড থাকা আদর্শ।`,
          code: `<?php
header('Content-Type: application/json; charset=UTF-8');

$response = [
    'success' => true,
    'message' => 'Data saved successfully',
    'data'    => [
        'id'        => 108,
        'title'     => 'PHP 8.2 Architecture',
        'createdAt' => date('Y-m-d H:i:s')
    ]
];

echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `{\n    "success": true,\n    "message": "Data saved successfully",\n    "data": {\n        "id": 108,\n        "title": "PHP 8.2 Architecture",\n        "createdAt": "2026-09-15 23:30:00"\n    }\n}`,
          noteBn: 'JSON_UNESCAPED_UNICODE ফ্ল্যাগ দিলে বাংলা টেক্সট এস্কেপ না হয়ে পরিষ্কার রেন্ডার হয়।'
        }
      ],
      keyPointsBn: [
        'JSON বডি রিড করতে file_get_contents("php://input") ব্যবহার করুন',
        'json_decode($json, true) দিয়ে PHP অ্যাসোসিয়েটিভ অ্যারেতে কনভার্ট করুন',
        'সর্বদা header("Content-Type: application/json; charset=UTF-8") সেট করুন',
        'রেসপন্স পাঠানোর পর অবশ্যই exit; বা die; কল করুন যাতে অনাকাঙ্ক্ষিত বাড়তি আউটপুট না যায়'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: প্রোডাকশন-রেডি AJAX হ্যান্ডলার স্ক্রিপ্ট',
          descriptionBn: 'JSON রিসিভ, ভ্যালিডেশন ও স্ট্যাটাস কোড সহ কমপ্লিট স্ক্রিপ্ট।',
          code: `<?php
header('Content-Type: application/json; charset=UTF-8');

// ১. মেথড চেক
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// ২. JSON ইনপুট পার্সিং
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || empty($input['username'])) {
    http_response_code(422);
    echo json_encode(['error' => 'Username field is required']);
    exit;
}

// ৩. সাকসেস রেসপন্স
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Welcome, ' . htmlspecialchars($input['username']),
    'time'    => date('H:i:s')
], JSON_UNESCAPED_UNICODE);
exit;
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: হেডার ছাড়া ও স্ট্যাটাস কোড ছাড়া শুধু echo করা
$data = $_POST['data'];
echo "Success: " . $data;`,
        juniorProblems: [
          'জাভাস্ক্রিপ্ট response.json() কল করলে সিনট্যাক্স এরর দিয়ে ক্র্যাশ করবে।',
          'ব্যর্থ হলেও HTTP 200 OK যাবে যার ফলে ক্লায়েন্ট ফলস সাকসেস ধরবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: সঠিক Content-Type, HTTP Status Code ও স্ট্রাকচার্ড JSON
header('Content-Type: application/json; charset=utf-8');
if (empty($data)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Data missing']);
    exit;
}
http_response_code(200);
echo json_encode(['status' => 'success', 'payload' => $processedData]);
exit;`,
        seniorBenefits: [
          'RESTful স্ট্যান্ডার্ড মেনে ক্লায়েন্ট কোড স্বচ্ছভাবে কাজ করে।',
          'try/catch ও fetch() error হ্যান্ডলিং ১০০% কার্যকর হয়।'
        ],
        architectAdvice: 'API রেসপন্সে সর্বদা JSON_UNESCAPED_UNICODE ফ্ল্যাগ দিন যাতে বাংলা ও ইউনিকোড অক্ষরগুলো \u0985 এস্কেপ না হয়ে পরিষ্কার রেন্ডার হয়।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (php_file_get_contents)',
          'INIT_FCALL (php_json_decode)',
          'INIT_FCALL (php_http_response_code)'
        ],
        explanationBn: `php://input স্ট্রিম হলো মেমোরি-দক্ষ রিড-অনলি স্ট্রিম যা ইনকামিং রিকোয়েস্টের র ডেটা সরাসরি সি-বাফার থেকে পড়ে।`
      },
      security: {
        vulnerabilityType: 'Unsanitized JSON & Lack of Method Validation',
        attackVectorBn: 'GET মেথডে সেনসিটিভ ডেটা মডিফাই করার রিকোয়েস্ট পাঠিয়ে সিএসআরএফ ঘটানো।',
        preventionRuleBn: 'স্টেট পরিবর্তনকারী সকল AJAX এন্ডপয়েন্টে if ($_SERVER["REQUEST_METHOD"] === "POST") এবং ইনপুট স্যানিটাইজেশন বাধ্যতামূলক করুন।'
      }
    }
  },
  {
    id: 'ajax-database',
    title: 'AJAX Database',
    category: 'ajax',
    tag: 'Live PDO Queries & Dynamic UI',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'পেজ রিলোড ছাড়াই ব্যাকগ্রাউন্ডে MySQL/PDO ডাটাবেস কোয়েরি, প্রিপেয়ার্ড স্টেটমেন্ট দিয়ে সিকিউর ফিল্টারিং ও ডায়নামিক টেবিল রেন্ডারিং।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP AJAX Database Live Query Simulator</h2>";

// সিমুলেটেড ডাটাবেস রেকর্ডস (Customers Table)
$mockDatabase = [
    1 => ['id' => 1, 'name' => 'Alfreds Futterkiste', 'city' => 'Berlin', 'country' => 'Germany', 'balance' => 4500.00],
    2 => ['id' => 2, 'name' => 'Berglunds snabbköp', 'city' => 'Luleå', 'country' => 'Sweden', 'balance' => 8900.50],
    3 => ['id' => 3, 'name' => 'Centro comercial Moctezuma', 'city' => 'México D.F.', 'country' => 'Mexico', 'balance' => 1200.00],
    4 => ['id' => 4, 'name' => 'Eastern Connection', 'city' => 'London', 'country' => 'UK', 'balance' => 6700.75]
];

// ক্লায়েন্ট ড্রপডাউন থেকে সিলেক্ট করা Customer ID (AJAX GET Parameter ?q=2)
$selectedCustomerId = 2; // সিমুলেটেড AJAX প্যারামিটার

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>১. ড্রপডাউন সিলেক্ট ইভেন্ট সিমুলেশন (onchange=\"showCustomer(this.value)\")</h4>";
echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-size:13px; color:#94a3b8; margin-bottom:14px;'>";
echo "Selected Customer ID from UI: <span style='color:#38bdf8; font-weight:bold;'>$selectedCustomerId</span> (Requesting <code>get_customer.php?id=$selectedCustomerId</code> via AJAX)";
echo "</div>";

// ব্যাকএন্ড PDO Prepared Statement সিমুলেশন
$record = $mockDatabase[$selectedCustomerId] ?? null;

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>২. পেজ রিফ্রেশ ছাড়া সরাসরি ডাটাবেস থেকে প্রাপ্ত রেজাল্ট:</h4>";
if ($record) {
    echo "<div style='background:#1e293b; border:1px solid #334155; border-radius:8px; overflow:hidden;'>";
    echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
    echo "<tr style='background:#334155; color:#f8fafc;'><th style='padding:8px; text-align:left;'>ID</th><th style='padding:8px; text-align:left;'>Customer Name</th><th style='padding:8px; text-align:left;'>City</th><th style='padding:8px; text-align:left;'>Country</th><th style='padding:8px; text-align:right;'>Balance</th></tr>";
    echo "<tr>";
    echo "<td style='padding:8px; color:#94a3b8;'>#" . $record['id'] . "</td>";
    echo "<td style='padding:8px; color:#38bdf8; font-weight:bold;'>" . htmlspecialchars($record['name'], ENT_QUOTES, 'UTF-8') . "</td>";
    echo "<td style='padding:8px;'>" . htmlspecialchars($record['city'], ENT_QUOTES, 'UTF-8') . "</td>";
    echo "<td style='padding:8px; color:#fbbf24;'>" . htmlspecialchars($record['country'], ENT_QUOTES, 'UTF-8') . "</td>";
    echo "<td style='padding:8px; text-align:right; color:#4ade80; font-weight:bold;'>$" . number_format($record['balance'], 2) . "</td>";
    echo "</tr>";
    echo "</table>";
    echo "</div>";
} else {
    echo "<p style='color:#f87171;'>কোনো গ্রাহক পাওয়া যায়নি।</p>";
}

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>৩. ডাটাবেস সিকিউরিটি নিয়ম:</h4>";
echo "<div style='background:#1e293b; padding:10px; border-radius:6px; font-size:12px; color:#fbbf24;'>";
echo "🔒 <b>Prepared Statement Mandatory:</b> AJAX এপিআই সরাসরি বাইরের ইনপুট গ্রহণ করে। কোনো অবস্থাতেই <code>SELECT * FROM customers WHERE id = \$_GET['id']</code> লেখা যাবে না। সর্বদা PDO <code>prepare()</code> এবং <code>execute([\$id])</code> ব্যবহার করুন।";
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `AJAX Database আর্কিটেকচারে ক্লায়েন্ট-সাইড কোনো ড্রপডাউন সিলেক্ট করলে, বাটনে চাপলে বা ফিল্টার পরিবর্তন করলে জাভাস্ক্রিপ্ট ব্যাকগ্রাউন্ডে পিএইচপিতে রিকোয়েস্ট পাঠায়। পিএইচপি ডাটাবেস থেকে রিয়েলটাইম কুয়েরি করে ডেটা এনে DOM-এ রেন্ডার করে দেয়।`,
      lessonSections: [
        {
          title: '১. HTML & JavaScript পার্ট',
          explanationBn: `ড্রপডাউন সিলেক্ট পরিবর্তনের সাথে সাথে জাভাস্ক্রিপ্ট fetch() রিকোয়েস্ট পাঠায় এবং রেসপন্স দিয়ে DOM আপডেট করে।`,
          code: `<!-- Dropdown and Dynamic Placeholder -->
<select onchange="fetchCustomer(this.value)">
  <option value="">Select a customer:</option>
  <option value="1">Alfreds Futterkiste</option>
  <option value="2">Berglunds snabbköp</option>
</select>

<div id="txtHint" style="margin-top:10px;">Customer info will be loaded here...</div>

<script>
function fetchCustomer(id) {
  if (!id) return;
  fetch("get_customer.php?id=" + encodeURIComponent(id))
    .then(res => res.text())
    .then(html => document.getElementById("txtHint").innerHTML = html);
}
</script>`,
          codeLanguage: 'HTML & JavaScript',
          outputPreview: `[Rendered UI]\n<select> with 2 Customer Options\n#txtHint: "Customer info will be loaded here..."`,
          noteBn: 'encodeURIComponent(id) ব্যবহার করলে ইউআরএলে স্পেশাল ক্যারেক্টার সমস্যা তৈরি করে না।'
        },
        {
          title: '২. PHP Backend (getcustomer.php) উইথ PDO Prepared Statement',
          explanationBn: `সার্ভার-সাইডে PDO Prepared Statement দিয়ে ডাটাবেস থেকে কুয়েরি করে ডায়নামিক টেবিল রিটার্ন করা হয়।`,
          code: `<?php
// সিমুলেটেড পিডিও ডাটাবেস কুয়েরি
$customerId = 2;

$mockCustomer = [
    'name' => 'Berglunds snabbköp',
    'city' => 'Luleå',
    'country' => 'Sweden'
];

echo "<table border='1' cellpadding='6' style='border-collapse:collapse;'>";
echo "<tr><th>Customer Name</th><td>" . htmlspecialchars($mockCustomer['name']) . "</td></tr>";
echo "<tr><th>City</th><td>" . htmlspecialchars($mockCustomer['city']) . "</td></tr>";
echo "<tr><th>Country</th><td>" . htmlspecialchars($mockCustomer['country']) . "</td></tr>";
echo "</table>";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `+---------------+-------------------+\n| Customer Name | Berglunds snabbköp|\n| City          | Luleå             |\n| Country       | Sweden            |\n+---------------+-------------------+`,
          noteBn: 'SQL Injection প্রতিরোধে সর্বদা PDO prepare() এবং execute() ব্যবহার করুন।'
        }
      ],
      keyPointsBn: [
        'ড্রপডাউন বা ফিল্টার পরিবর্তনে onchange ইভেন্ট দিয়ে AJAX ট্রিগার করা হয়',
        'encodeURIComponent() দিয়ে URL প্যারামিটার সুরক্ষিত করুন',
        'সার্ভার-সাইডে PDO Prepared Statement ছাড়া ডাটাবেস কুয়েরি কখনোই করবেন না',
        'ফলাফল সরাসরি HTML ফ্র্যাগমেন্ট অথবা JSON আকারে ক্লায়েন্টে ফেরত পাঠানো যায়'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: সেফ ডাটাবেস ফেচ এপিআই হ্যান্ডলার',
          descriptionBn: 'JSON আউটপুট সহ PDO কুয়েরি হ্যান্ডলার।',
          code: `<?php
header('Content-Type: application/json; charset=UTF-8');

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
if (!$id) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid ID']);
    exit;
}

$stmt = $pdo->prepare("SELECT id, name, city, email FROM users WHERE id = ?");
$stmt->execute([$id]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    http_response_code(404);
    echo json_encode(['error' => 'User not found']);
    exit;
}

echo json_encode(['success' => true, 'data' => $user]);
exit;
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: কুয়েরি স্ট্রিং সরাসরি SQL-এ বসিয়ে এসকিউএল ইনজেকশন উন্মুক্ত করা
$id = $_GET['q'];
$sql = "SELECT * FROM customers WHERE id = " . $id;
$result = $conn->query($sql);`,
        juniorProblems: [
          'আক্রমণকারী ?q=1 OR 1=1 পাঠিয়ে পুরো ডাটাবেস এক্সপোজ করতে পারে।',
          'টাইপ ভ্যালিডেশন না থাকায় ডেটাবেস এরর লগ উন্মুক্ত হয়।'
        ],
        seniorCode: `// ✅ সিনিয়র: টাইপ ক্যাস্টিং ও PDO প্রিপেয়ার্ড স্টেটমেন্ট
$id = filter_input(INPUT_GET, 'q', FILTER_VALIDATE_INT);
if (!$id) exit('Invalid parameter');

$stmt = $pdo->prepare("SELECT id, name, city FROM customers WHERE id = ?");
$stmt->execute([$id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);`,
        seniorBenefits: [
          '১০০% এসকিউএল ইনজেকশন প্রতিরোধ।',
          'টাইপ-সেফ কুয়েরি এক্সিকিউশন।'
        ],
        architectAdvice: 'ডাটাবেস রেজাল্ট যদি বড় হয়, তবে পুরো টেবিল ক্লায়েন্টে না পাঠিয়ে শুধুমাত্র প্রয়োজনীয় কলাম এবং লিমিট সহ Pagination ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (PDO::prepare)',
          'INIT_FCALL (PDOStatement::execute)',
          'INIT_FCALL (PDOStatement::fetch)'
        ],
        explanationBn: `PDO C-ড্রাইভার ডেটাবেস সার্ভারে বাইনারি প্রোটোকলে প্যারামিটারাইজড কুয়েরি পাঠায়, ফলে কুয়েরি এবং ডাটা আলাদা চ্যানেলে প্রসেস হয়।`
      },
      security: {
        vulnerabilityType: 'SQL Injection in AJAX GET Endpoints',
        attackVectorBn: 'URL কুয়েরিতে ম্যালিশিয়াস SQL পেলোড ইনজেক্ট করা (যেমন ?q=1 UNION SELECT ...)।',
        preventionRuleBn: 'ইনপুট ভ্যালিডেশনের পর PDO Prepared Statement ব্যবহার করুন।'
      }
    }
  },
  {
    id: 'ajax-xml',
    title: 'AJAX XML',
    category: 'ajax',
    tag: 'XML Response & SimpleXML Parser',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'AJAX দিয়ে XML রেসপন্স জেনারেট ও পার্সিং, header("Content-Type: text/xml") এবং PHP SimpleXML / DOMDocument ব্যবহার।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP AJAX XML Generator & Parser Engine</h2>";

// PHP দিয়ে সিমুলেটেড XML ডকুমেন্টস তৈরি
$catalogData = [
    ['title' => 'Empire Burlesque', 'artist' => 'Bob Dylan', 'country' => 'USA', 'price' => 10.90, 'year' => 1985],
    ['title' => 'Hide your heart', 'artist' => 'Bonnie Tyler', 'country' => 'UK', 'price' => 9.90, 'year' => 1988],
    ['title' => 'Greatest Hits', 'artist' => 'Dolly Parton', 'country' => 'USA', 'price' => 9.90, 'year' => 1982]
];

// ১. SimpleXMLElement দিয়ে XML স্ট্রাকচার তৈরি
$xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><CATALOG></CATALOG>');

foreach ($catalogData as $cd) {
    $cdNode = $xml->addChild('CD');
    $cdNode->addChild('TITLE', htmlspecialchars($cd['title'], ENT_QUOTES, 'UTF-8'));
    $cdNode->addChild('ARTIST', htmlspecialchars($cd['artist'], ENT_QUOTES, 'UTF-8'));
    $cdNode->addChild('COUNTRY', $cd['country']);
    $cdNode->addChild('PRICE', (string)$cd['price']);
    $cdNode->addChild('YEAR', (string)$cd['year']);
}

$xmlString = $xml->asXML();

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>১. জেনারেটেড XML ডকুমেন্ট (Content-Type: text/xml):</h4>";
echo "<pre style='background:#1e293b; color:#38bdf8; padding:12px; border-radius:8px; font-size:12px; overflow-x:auto;'>";
echo htmlspecialchars($xmlString, ENT_QUOTES, 'UTF-8');
echo "</pre>";

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>২. ক্লায়েন্ট-সাইডে XML পার্সিং ও টেবিল আউটপুট:</h4>";
echo "<table style='width:100%; border-collapse:collapse; font-size:13px;'>";
echo "<tr style='background:#1e293b; color:#94a3b8;'><th style='padding:6px; text-align:left;'>Title</th><th style='padding:6px; text-align:left;'>Artist</th><th style='padding:6px; text-align:left;'>Country</th><th style='padding:6px; text-align:right;'>Price</th><th style='padding:6px; text-align:center;'>Year</th></tr>";

foreach ($xml->CD as $cdItem) {
    echo "<tr style='border-bottom:1px solid #334155;'>";
    echo "<td style='padding:6px; color:#38bdf8; font-weight:bold;'>" . $cdItem->TITLE . "</td>";
    echo "<td style='padding:6px; color:#4ade80;'>" . $cdItem->ARTIST . "</td>";
    echo "<td style='padding:6px;'>" . $cdItem->COUNTRY . "</td>";
    echo "<td style='padding:6px; text-align:right; color:#fbbf24;'>$" . $cdItem->PRICE . "</td>";
    echo "<td style='padding:6px; text-align:center; color:#94a3b8;'>" . $cdItem->YEAR . "</td>";
    echo "</tr>";
}
echo "</table>";

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>৩. XML বনাম JSON আধুনিক তুলনা:</h4>";
echo "<p style='font-size:13px; color:#94a3b8;'>ঐতিহাসিক কারণে AJAX নামের মধ্যে 'XML' থাকলেও আধুনিক ওয়েব ডেভেলপমেন্টে ৯৫%+ প্রজেক্টে JSON ব্যবহৃত হয়। তবে লিগ্যাসি এন্টারপ্রাইজ সিস্টেম, SOAP ওয়েব সার্ভিস ও ব্যাংকিং পেমেন্ট গেটওয়েতে এখনও XML ব্যাপকভাবে ব্যবহৃত হয়।</p>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `AJAX এর প্রাথমিক যুগে সার্ভার ও ব্রাউজারের মধ্যে ডেটা আদান-প্রদানের প্রধান স্ট্যান্ডার্ড ছিল XML (Extensible Markup Language)। পিএইচপিতে \`header('Content-Type: text/xml')\` দিয়ে XML ডকুমেন্ট তৈরি করা যায় এবং জাভাস্ক্রিপ্টে \`responseXML\` দিয়ে তা ডম ট্রির মতো পার্স করা যায়।`,
      lessonSections: [
        {
          title: '১. পিএইচপিতে XML রেসপন্স জেনারেট করা',
          explanationBn: `SimpleXMLElement ব্যবহার করে পিএইচপিতে নিখুঁত XML ডকুমেন্ট তৈরি করা যায়।`,
          code: `<?php
$xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><response/>');
$user = $xml->addChild('user');
$user->addChild('id', '101');
$user->addChild('name', 'Mohammad Abbad');
$user->addChild('role', 'Senior Engineer');

echo $xml->asXML();
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `<?xml version="1.0" encoding="UTF-8"?>\n<response>\n  <user>\n    <id>101</id>\n    <name>Mohammad Abbad</name>\n    <role>Senior Engineer</role>\n  </user>\n</response>`,
          noteBn: 'XML আউটপুট পাঠানোর সময় header("Content-Type: text/xml; charset=UTF-8"); দেওয়া আবশ্যক।'
        },
        {
          title: '২. জাভাস্ক্রিপ্ট দিয়ে XML পার্সিং (DOMParser)',
          explanationBn: `জাভাস্ক্রিপ্টে DOMParser দিয়ে XML স্ট্রিংকে অবজেক্টে রূপান্তর করে নোড ভ্যালু রিড করা যায়।`,
          code: `<!-- XML Client Parser Simulation -->
<script>
const xmlText = '<user><name>Abbad</name><role>Admin</role></user>';
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlText, "text/xml");

const name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
console.log("Parsed User Name:", name);
</script>`,
          codeLanguage: 'JavaScript DOM Parser',
          outputPreview: `Parsed User Name: Abbad`,
          noteBn: 'আধুনিক ওয়েবে JSON এর ব্যবহার বেশি হলেও SOAP বা ব্যাংকিং গেটওয়েতে XML পার্সিং প্রায়ই কাজে লাগে।'
        },
        {
          title: '৩. XML বনাম JSON এর মূল পার্থক্য',
          explanationBn: `• XML: ভারী (ট্যাগ ওভারহেড বেশি), পার্স করা একটু জটিল, কিন্তু কঠোর স্কিমা ভ্যালিডেশন (XSD/DTD) সাপোর্ট করে।\n• JSON: হালকা, দ্রুতগতিসম্পন্ন, সরাসরি JavaScript Object এ কনভার্ট হয় (JSON.parse)।`,
          code: `<?php
// JSON Representation (Lightweight)
$json = '{"name":"Abbad","role":"Admin"}';

// XML Representation (Verbose)
$xml = '<user><name>Abbad</name><role>Admin</role></user>';

echo "JSON Length: " . strlen($json) . " bytes<br>";
echo "XML Length: " . strlen($xml) . " bytes<br>";
echo "JSON saves ~35% bandwidth!";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `JSON Length: 32 bytes\nXML Length: 49 bytes\nJSON saves ~35% bandwidth!`,
          noteBn: 'JSON এর সাইজ কম হওয়ায় এবং নেটিভ JS পার্সিংয়ের কারণে এটি আধুনিক এপিআইতে ডি-ফ্যাক্টো স্ট্যান্ডার্ড।'
        }
      ],
      keyPointsBn: [
        'XML রেসপন্সের জন্য header("Content-Type: text/xml; charset=UTF-8") আবশ্যক',
        'পিএইচপির SimpleXML ও DOMDocument এক্সটেনশন দিয়ে খুব সহজে XML ম্যানিপুলেট করা যায়',
        'লিগ্যাসি এন্টারপ্রাইজ ও ব্যাংকিং SOAP এপিআইতে XML এর জ্ঞান অপরিহার্য',
        'নতুন প্রজেক্টে ডেটা ট্র্যাফিকের জন্য JSON ব্যবহারের পরামর্শ দেওয়া হয়'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: XML ফিড জেনারেটর স্ক্রিপ্ট',
          descriptionBn: 'পোস্টের তালিকা থেকে ডায়নামিক XML তৈরি।',
          code: `<?php
header('Content-Type: text/xml; charset=UTF-8');

$xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel></channel></rss>');
$channel = $xml->channel;
$channel->addChild('title', 'Tech News Live');
$channel->addChild('link', 'https://technews.local');

$item = $channel->addChild('item');
$item->addChild('title', 'PHP 8.3 Released');
$item->addChild('description', 'Exciting new features in PHP Zend Engine');

echo $xml->asXML();
exit;
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: স্ট্রিং কনক্যাট করে অগোছালো XML বানানো (ট্যাগ এস্কেপ না করে)
echo "<user><name>" . $_POST['name'] . "</name></user>";`,
        juniorProblems: [
          'ইনপুটে & বা < চিহ্ন থাকলে XML Malformed হয়ে পার্সিং ক্র্যাশ করবে।',
          'XML Injection (XXE) ঝুঁকি তৈরি হবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: SimpleXMLElement বা DOMDocument দিয়ে সেফ নোড ক্রিয়েশন
$xml = new SimpleXMLElement('<root/>');
$xml->addChild('name', htmlspecialchars($name, ENT_XML1, 'UTF-8'));
echo $xml->asXML();`,
        seniorBenefits: [
          'স্বয়ংক্রিয় XML ভ্যালিডিটি ও এস্কেপিং।',
          'Malformed XML ক্র্যাশ থেকে ১০০% নিরাপদ।'
        ],
        architectAdvice: 'সার্ভার-সাইডে ক্লায়েন্টের XML পার্স করার সময় XXE (XML External Entity) অ্যাটাক ঠেকাতে `libxml_disable_entity_loader(true)` এনফোর্স করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'NEW (SimpleXMLElement)',
          'INIT_METHOD_CALL (addChild)',
          'INIT_METHOD_CALL (asXML)'
        ],
        explanationBn: `PHP-র libxml C-লাইব্রেরি মেমোরিতে একটি পূর্ণাঙ্গ ডম ট্রি স্ট্রাকচার তৈরি করে দ্রুত নোড ট্রাভার্সাল নিশ্চিত করে।`
      },
      security: {
        vulnerabilityType: 'XML External Entity (XXE) Injection',
        attackVectorBn: 'ম্যালিশিয়াস XML আপলোড করে সার্ভারের ইন্টারনাল ফাইল (/etc/passwd) রিড করা।',
        preventionRuleBn: 'libxml এন্ট্রি লোডার ডিজেবল রাখুন এবং সবসময় স্যানিটাইজড নোড তৈরি করুন।'
      }
    }
  },
  {
    id: 'ajax-live-search',
    title: 'AJAX Live Search',
    category: 'ajax',
    tag: 'Instant Search, Debounce & LIKE Query',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'রিয়েল-টাইম লাইভ সার্চ আর্কিটেকচার, কি-স্ট্রোক ইভেন্টে AJAX ট্রিগার, SQL LIKE ওয়াইল্ডকার্ড ও কিবোর্ড ডিবৌন্সিং (Debounce)।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP AJAX Live Search Engine (Real-Time Autocomplete)</h2>";

// সিমুলেটেড প্রোডাক্ট ক্যাটালগ
$products = [
    ['id' => 101, 'name' => 'MacBook Pro 16" M3 Max', 'category' => 'Laptops', 'price' => 3499],
    ['id' => 102, 'name' => 'Mechanical Wireless Keyboard', 'category' => 'Accessories', 'price' => 149],
    ['id' => 103, 'name' => 'Sony WH-1000XM5 Headphones', 'category' => 'Audio', 'price' => 399],
    ['id' => 104, 'name' => 'Mac Mini M2 Pro', 'category' => 'Desktops', 'price' => 1299],
    ['id' => 105, 'name' => 'UltraWide 4K Gaming Monitor', 'category' => 'Monitors', 'price' => 799]
];

// সিমুলেটেড ক্লায়েন্ট কি-স্ট্রোক সার্চ কুয়েরি (?q=mac)
$searchQuery = "mac";

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>১. লাইভ সার্চ ইনপুট সিমুলেশন:</h4>";
echo "<div style='background:#1e293b; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; margin-bottom:14px;'>";
echo "<span style='color:#94a3b8; font-size:13px;'>Search Input:</span>";
echo "<input type='text' value='" . htmlspecialchars($searchQuery) . "' style='background:#0f172a; border:1px solid #38bdf8; color:#fff; padding:6px 12px; border-radius:6px; font-size:13px;' readonly>";
echo "<span style='color:#38bdf8; font-size:11px; font-mono;'>(Triggered via onkeyup with 300ms Debounce)</span>";
echo "</div>";

// ব্যাকএন্ড সার্চ ফিল্টারিং লজিক (Simulating SQL LIKE %query%)
$matches = [];
if (strlen(trim($searchQuery)) > 0) {
    $qLower = strtolower(trim($searchQuery));
    foreach ($products as $p) {
        if (str_contains(strtolower($p['name']), $qLower) || str_contains(strtolower($p['category']), $qLower)) {
            $matches[] = $p;
        }
    }
}

echo "<h4 style='color:#a855f7; margin-bottom:6px;'>২. লাইভ সাজেশন রেজাল্ট ড্রপডাউন:</h4>";
if (!empty($matches)) {
    echo "<div style='background:#1e293b; border:1px solid #334155; border-radius:8px; overflow:hidden;'>";
    foreach ($matches as $match) {
        // হাইলাইট করা ম্যাচিং টেক্সট
        $highlighted = preg_replace("/(" . preg_quote($searchQuery, '/') . ")/i", "<span style='background:#0369a1; color:#fff; padding:1px 4px; border-radius:3px;'>$1</span>", htmlspecialchars($match['name']));
        echo "<div style='padding:10px 14px; border-bottom:1px solid #334155; display:flex; justify-content:space-between; align-items:center;'>";
        echo "<div><span style='color:#f8fafc; font-size:13px; font-weight:bold;'>$highlighted</span> <span style='color:#64748b; font-size:11px;'>(" . $match['category'] . ")</span></div>";
        echo "<div style='color:#4ade80; font-size:13px; font-weight:bold;'>$" . number_format($match['price']) . "</div>";
        echo "</div>";
    }
    echo "</div>";
} else {
    echo "<p style='color:#94a3b8; font-size:13px;'>কোনো পণ্য খুঁজে পাওয়া যায়নি।</p>";
}

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>৩. আর্কিটেক্ট নীতি: Debouncing কী এবং কেন জরুরি?</h4>";
echo "<div style='background:#1e293b; padding:12px; border-radius:8px; font-size:12px; color:#fbbf24;'>";
echo "ব্যবহারকারী যখন দ্রুত টাইপ করে (যেমন 'MacBook'), তখন প্রতি অক্ষরে (৭ বার) সার্ভারে রিকোয়েস্ট পাঠালে সার্ভার ক্র্যাশ করতে পারে। <b>Debounce</b> টেকনিক দিয়ে টাইপিং থামার ৩০০ মিলিসেকেন্ড পর মাত্র ১টি অপ্টিমাইজড AJAX রিকোয়েস্ট পাঠানো হয়।";
echo "</div>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `AJAX Live Search হলো এমন এক আধুনিক ইউজার ইন্টারফেস যেখানে ব্যবহারকারী সার্চ বক্সে টাইপ করার সাথে সাথে ব্যাকগ্রাউন্ডে অ্যাসিঙ্ক্রোনাস রিকোয়েস্ট যায় এবং কোনো সাবমিট বাটন চাপার আগেই সম্ভাব্য সাজেশন বা সার্চ রেজাল্ট তাৎক্ষণিক প্রদর্শিত হয়।\n\n🎯 লাইভ সার্চ আর্কিটেকচার:\nUser Types ➔ JavaScript Debounce (300ms) ➔ AJAX GET /search.php?q=keyword ➔ PHP PDO LIKE Query ➔ JSON/HTML Suggestions ➔ Live Dropdown DOM Render`,
      lessonSections: [
        {
          title: '১. ফ্রন্টএন্ড সার্চ ও ডিবৌন্সিং (Debounce) প্যাটার্ন',
          explanationBn: `কিবোর্ডের প্রতিটি কি-স্ট্রোকের সাথে সাথে রিকোয়েস্ট না পাঠিয়ে ডিবৌন্স দিয়ে টাইপিং থামার ৩০০ মিলিসেকেন্ড পর সার্ভারে কল করা হয়।`,
          code: `<!-- Debounced Live Search JS -->
<input type="text" id="searchBox" placeholder="পণ্য সার্চ করুন..." onkeyup="handleLiveSearch(this.value)">
<div id="liveResults"></div>

<script>
let debounceTimer;
function handleLiveSearch(keyword) {
  clearTimeout(debounceTimer);
  if (keyword.trim().length === 0) {
    document.getElementById("liveResults").innerHTML = "";
    return;
  }
  debounceTimer = setTimeout(() => {
    fetch("livesearch.php?q=" + encodeURIComponent(keyword))
      .then(res => res.json())
      .then(data => console.log("Search Results:", data));
  }, 300); // 300ms Delay
}
</script>`,
          codeLanguage: 'JavaScript & HTML',
          outputPreview: `[Search Input Active]\nDebounce Window: 300ms\nTarget Endpoint: livesearch.php?q={query}`,
          noteBn: 'ডিবৌন্সিং টেকনিক সার্ভারের কুয়েরি ট্র্যাফিক ৮০% পর্যন্ত হ্রাস করে।'
        },
        {
          title: '২. ব্যাকএন্ড পিএইচপি ও PDO LIKE কুয়েরি',
          explanationBn: `সার্ভার-সাইডে ওয়াইল্ডকার্ড (%) সহ প্যারামিটারাইজড কুয়েরি দিয়ে নিরাপদ ও ফাস্ট সার্চ রেজাল্ট ফেরত দেওয়া হয়।`,
          code: `<?php
// সিমুলেটেড লাইভ সার্চ লজিক
$query = "Mac";
$catalog = [
    ['id' => 101, 'name' => 'MacBook Pro M3', 'price' => 1999],
    ['id' => 102, 'name' => 'Mac Mini M2', 'price' => 699],
    ['id' => 103, 'name' => 'Dell XPS 15', 'price' => 1499]
];

$matched = [];
foreach ($catalog as $item) {
    if (stripos($item['name'], $query) !== false) {
        $matched[] = $item;
    }
}

echo json_encode(['total' => count($matched), 'items' => $matched], JSON_PRETTY_PRINT);
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `{\n    "total": 2,\n    "items": [\n        {\n            "id": 101,\n            "name": "MacBook Pro M3",\n            "price": 1999\n        },\n        {\n            "id": 102,\n            "name": "Mac Mini M2",\n            "price": 699\n        }\n    ]\n}`,
          noteBn: 'SQL ইনজেকশন প্রতিরোধে $stmt->execute([\'%\' . $query . \'%\']) ব্যবহার করুন।'
        }
      ],
      keyPointsBn: [
        'প্রতি কি-স্ট্রোকে রিকোয়েস্ট পাঠানো বন্ধ করতে ক্লায়েন্টে Debounce (250-400ms) ব্যবহার করুন',
        'কুয়েরি পারফরম্যান্সের জন্য LIMIT ১০ বা ২০ সেট করুন যাতে লক্ষ লক্ষ রো লোড না হয়',
        'সার্চ টার্ম কমপক্ষে ২ বা ৩ ক্যারেক্টার হলে তবেই সার্ভারে রিকোয়েস্ট পাঠান',
        'SQL Injection রুখতে LIKE কুয়েরিতেও সর্বদা Prepared Statement ব্যবহার করুন'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: সেফ লাইভ সার্চ ব্যাকএন্ড এপিআই',
          descriptionBn: 'LIMIT ও হোয়াইটলিস্ট সহ লাইভ সার্চ এপিআই।',
          code: `<?php
header('Content-Type: application/json; charset=UTF-8');

$query = trim($_GET['q'] ?? '');

if (mb_strlen($query) < 2) {
    echo json_encode(['results' => []]);
    exit;
}

$stmt = $pdo->prepare("
    SELECT id, name, category, price 
    FROM products 
    WHERE name LIKE :term OR category LIKE :term 
    ORDER BY name ASC 
    LIMIT 8
");

$stmt->execute(['term' => '%' . $query . '%']);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['results' => $rows], JSON_UNESCAPED_UNICODE);
exit;
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: ডিবৌন্স ছাড়া প্রতি কি-স্ট্রোকে আনপ্রিপেয়ার্ড LIKE কুয়েরি
$q = $_GET['q'];
$sql = "SELECT * FROM products WHERE name LIKE '%$q%'";
$res = $db->query($sql);`,
        juniorProblems: [
          '১০০০ ইউজার একসাথে টাইপ করলে ডাটাবেস ১০০০০+ কুয়েরি পেয়ে ক্র্যাশ করবে।',
          'SQL Injection এর ফাঁদ তৈরি হবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: মিনিমাম লেন্থ চেক, ডিবৌন্স, প্রিপেয়ার্ড স্টেটমেন্ট ও LIMIT
$q = trim($_GET['q'] ?? '');
if (mb_strlen($q) < 2) exit(json_encode([]));

$stmt = $pdo->prepare("SELECT id, name, price FROM products WHERE name LIKE ? LIMIT 10");
$stmt->execute(['%' . $q . '%']);
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));`,
        seniorBenefits: [
          'ডাটাবেস লোড ৯৫% হ্রাস।',
          'সম্পূর্ণ সিকিউর এবং মিলিসেকেন্ডে সার্চ রেজাল্ট প্রদান।'
        ],
        architectAdvice: 'প্রোডাকশনে বিশাল ডাটাবেসের ক্ষেত্রে LIKE %query% এর বদলে MySQL Full-Text Search (MATCH...AGAINST) অথবা Elasticsearch/Meilisearch ব্যবহার করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (php_mb_strlen)',
          'CONCAT (adding wildcards %)',
          'INIT_FCALL (PDO::prepare)'
        ],
        explanationBn: `LIKE কুয়েরির ওয়াইল্ডকার্ড স্ট্রিংগুলো জেন্ড মেমোরিতে অপ্টিমাইজড zend_string হিসেবে PDO ড্রাইভারের বাইন্ডিং মেকানিজমে পাস হয়।`
      },
      security: {
        vulnerabilityType: 'DoS via Search Flooding & SQL Injection',
        attackVectorBn: 'বট দিয়ে লাইভ সার্চ এন্ডপয়েন্টে প্রতি সেকেন্ডে হাজার হাজার ওয়াইল্ডকার্ড কুয়েরি পাঠিয়ে ডাটাবেস হ্যাং করা।',
        preventionRuleBn: 'রেট লিমিটিং (Rate Limiting), মিনিমাম ৩ অক্ষরের রুলস এবং PDO প্রিপেয়ার্ড স্টেটমেন্ট প্রয়োগ করুন।'
      }
    }
  },
  {
    id: 'ajax-poll',
    title: 'AJAX Poll',
    category: 'ajax',
    tag: 'Interactive Voting & Real-Time Stats',
    phpVersion: 'PHP 8.0+',
    subtitleBn: 'লাইভ ভোটিং/পোলিং সিস্টেম, সিঙ্গেল-ক্লিক AJAX ভোট সাবমিশন, রিয়েল-টাইম শতাংশ ক্যালকুলেশন ও ডাবল-ভোট প্রিভেনশন।',
    sampleCode: `<?php
echo "<div style='font-family:system-ui,sans-serif; background:#0f172a; color:#f8fafc; padding:22px; border-radius:12px; line-height:1.6;'>";
echo "<h2 style='color:#38bdf8; margin-top:0; border-bottom:1px solid #334155; padding-bottom:10px;'>PHP AJAX Live Voting & Polling System</h2>";

// সিমুলেটেড পোল স্টেট (যেমন database বা poll_results.txt)
$pollData = [
    'PHP 8.x'    => 1420,
    'Node.js'    => 890,
    'Python'     => 1150,
    'Go (Golang)' => 640
];

// সিমুলেটেড ইনকামিং ভোট (User clicked 'PHP 8.x')
$votedOption = 'PHP 8.x';
$pollData[$votedOption]++; // ভোট বৃদ্ধি

// মোট ভোট ও শতাংশ ক্যালকুলেশন
$totalVotes = array_sum($pollData);

echo "<h3 style='color:#f8fafc; margin-bottom:14px;'>প্রশ্ন: ২০২৬ সালে আপনার ব্যাকএন্ডের প্রথম পছন্দ কোনটি?</h3>";

echo "<div style='display:flex; flex-direction:column; gap:12px; margin-bottom:20px;'>";
$colors = ['#38bdf8', '#4ade80', '#fbbf24', '#a855f7'];
$idx = 0;

foreach ($pollData as $tech => $votes) {
    $percent = round(($votes / $totalVotes) * 100, 1);
    $color = $colors[$idx % count($colors)];
    $isUserVote = ($tech === $votedOption);

    echo "<div style='background:#1e293b; padding:12px; border-radius:8px; border:1px solid " . ($isUserVote ? $color : '#334155') . ";'>";
    echo "<div style='display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;'>";
    echo "<span style='font-weight:bold; color:#f8fafc;'>$tech " . ($isUserVote ? "<span style='color:$color; font-size:11px;'>(আপনার ভোট)</span>" : "") . "</span>";
    echo "<span style='color:$color; font-family:monospace; font-weight:bold;'>$percent% ($votes ভোট)</span>";
    echo "</div>";
    
    // প্রোগ্রেস বার
    echo "<div style='width:100%; height:8px; background:#0f172a; border-radius:4px; overflow:hidden;'>";
    echo "<div style='width:{$percent}%; height:100%; background:$color; border-radius:4px; transition:width 0.5s ease-in-out;'></div>";
    echo "</div>";
    echo "</div>";
    $idx++;
}
echo "</div>";

echo "<div style='display:flex; justify-content:space-between; align-items:center; background:#1e293b; padding:10px 14px; border-radius:8px; font-size:12px; color:#94a3b8;'>";
echo "<span>সর্বমোট প্রদত্ত ভোট: <b style='color:#4ade80;'>$totalVotes</b></span>";
echo "<span>রিয়েল-টাইম আপডেট: <b style='color:#38bdf8;'>AJAX Single Click</b></span>";
echo "</div>";

echo "<h4 style='color:#a855f7; margin-bottom:6px; margin-top:16px;'>ডাবল-ভোট প্রতিরোধ কৌশল (Anti-Spam):</h4>";
echo "<ul style='font-size:12px; color:#94a3b8; margin:0; padding-left:18px;'>";
echo "<li><b>Session / LocalStorage Check:</b> ব্যবহারকারী ভোট দিলে ক্লায়েন্ট ও সার্ভার সেশনে ফ্ল্যাগ সেট করা।</li>";
echo "<li><b>IP & User ID Tracking:</b> ডাটাবেসে পোল আইডি ও ইউজার আইডি/আইপির সমন্বয়ে ইউনিক কনস্ট্রেইন্ট বজায় রাখা।</li>";
echo "</ul>";

echo "</div>";
?>`,
    deepDive: {
      conceptBn: `AJAX Poll হলো একটি ক্লাসিক ইন্টারঅ্যাক্টিভ ওয়েব ফিচার যেখানে ব্যবহারকারী কোনো রেডিও বাটন বা অপশনে ক্লিক করা মাত্র কোনো রিফ্রেশ ছাড়াই ভোটটি সার্ভারে জমা হয় এবং তাৎক্ষণিক সমস্ত অপশনের আপডেটেড ভোট সংখ্যা ও প্রোগ্রেস বার শতকরা হিসেবে অ্যানিমেট হয়ে প্রদর্শিত হয়।\n\n🎯 AJAX Poll ফ্লো:\nUser clicks Option ➔ JS triggers AJAX POST ➔ PHP increments vote in DB ➔ PHP calculates percentages ➔ Returns updated JSON/HTML ➔ Client renders real-time bars`,
      lessonSections: [
        {
          title: '১. ফ্রন্টএন্ড ভোটিং ইন্টারফেস ও ইভেন্ট',
          explanationBn: `সিঙ্গেল ক্লিকে জাভাস্ক্রিপ্ট AJAX POST রিকোয়েস্ট পাঠায় এবং রেসপন্সের শতাংশ অনুযায়ী ডাইনামিক বার আপডেট করে।`,
          code: `<!-- Real-Time Poll UI Component -->
<div id="pollBox">
    <h4>আপনার প্রিয় ল্যাঙ্গুয়েজ নির্বাচন করুন:</h4>
    <button onclick="submitVote('PHP')">PHP 8.2</button>
    <button onclick="submitVote('Python')">Python</button>
</div>

<script>
function submitVote(choice) {
    fetch('api/vote.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ choice: choice })
    })
    .then(res => res.json())
    .then(data => console.log('Updated Stats:', data));
}
</script>`,
          codeLanguage: 'JavaScript & HTML',
          outputPreview: `[Poll Interface Loaded]\nOption 1: PHP 8.2\nOption 2: Python\nStatus: Ready for Click`,
          noteBn: 'ইউজার ক্লিক করার সাথে সাথে বাটনে লোডিং স্পিনার বা ডিজেবল স্টেট দেওয়া উচিত।'
        },
        {
          title: '২. ব্যাকএন্ড পিএইচপি ভোট প্রসেসর ও শতাংশ ক্যালকুলেটর',
          explanationBn: `সার্ভার-সাইডে ভোট আপডেট করে মোট ভোটের সাপেক্ষে প্রতিটি বিকল্পের শতকরা হার হিসাব করা হয়।`,
          code: `<?php
// সিমুলেটেড পোল ক্যালকুলেশন
$votes = ['PHP' => 120, 'Python' => 80];
$total = array_sum($votes);

$percentages = [];
foreach ($votes as $tech => $count) {
    $percentages[$tech] = round(($count / $total) * 100, 1) . '%';
}

echo "মোট ভোট: " . $total . "<br>";
echo "PHP: " . $percentages['PHP'] . " (" . $votes['PHP'] . " votes)<br>";
echo "Python: " . $percentages['Python'] . " (" . $votes['Python'] . " votes)";
?>`,
          codeLanguage: 'PHP 8.2 Live Code',
          outputPreview: `মোট ভোট: 200\nPHP: 60% (120 votes)\nPython: 40% (80 votes)`,
          noteBn: 'ডাটাবেসে রেস কন্ডিশন এড়াতে votes = votes + 1 অ্যাটমিক কুয়েরি চালান।'
        }
      ],
      keyPointsBn: [
        'সিঙ্গেল-ক্লিক ইন্টারঅ্যাকশনে তাৎক্ষণিক ফিডব্যাক ইউজার এনগেজমেন্ট বহুগুণ বাড়ায়',
        'শতাংশ নির্ণয়ের সূত্র: ($optionVotes / $totalVotes) * 100',
        'ডাবল-ভোট স্প্যাম ঠেকাতে সেশন ও আইপি ট্র্যাকিং ব্যবহার করুন',
        'ডাটাবেসে রেস কন্ডিশন এড়াতে votes = votes + 1 অ্যাটমিক কুয়েরি চালান'
      ],
      practiceExamples: [
        {
          title: 'অনুশীলন: অ্যাটমিক ইনক্রিমেন্ট সহ পোলিং ব্যাকএন্ড',
          descriptionBn: 'কনকারেন্ট ইউজার ভোট হ্যান্ডলিংয়ের আদর্শ কোড।',
          code: `<?php
header('Content-Type: application/json; charset=UTF-8');

$vote = filter_input(INPUT_POST, 'candidate', FILTER_DEFAULT);
$validCandidates = ['php', 'node', 'python', 'go'];

if (!in_array($vote, $validCandidates, true)) {
    http_response_code(422);
    echo json_encode(['error' => 'Invalid candidate selected']);
    exit;
}

// অ্যাটমিক আপডেট (Race Condition Proof)
$stmt = $pdo->prepare("UPDATE poll SET votes = votes + 1 WHERE candidate = ?");
$stmt->execute([$vote]);

$stats = $pdo->query("SELECT candidate, votes FROM poll")->fetchAll(PDO::FETCH_KEY_PAIR);
$total = array_sum($stats);

echo json_encode([
    'success' => true,
    'stats'   => $stats,
    'total'   => $total
]);
exit;
?>`
        }
      ],
      comparison: {
        juniorCode: `// ❌ জুনিয়র: আগে রিড করে পরে যোগ করে আপডেট করা (Race Condition ত্রুটি)
$row = $db->query("SELECT votes FROM poll WHERE id=1")->fetch();
$newVotes = $row['votes'] + 1;
$db->query("UPDATE poll SET votes = $newVotes WHERE id=1");`,
        juniorProblems: [
          '১০০ জন ইউজার একসাথে ক্লিক করলে অনেক ভোট হারিয়ে যাবে (Lost Update)।',
          'এসকিউএল ইনজেকশনের ঝুঁকি থাকবে।'
        ],
        seniorCode: `// ✅ সিনিয়র: অ্যাটমিক SQL ইনক্রিমেন্ট ও সেশন অ্যান্টি-স্প্যাম গার্ড
$stmt = $pdo->prepare("UPDATE poll SET votes = votes + 1 WHERE id = ?");
$stmt->execute([$id]);`,
        seniorBenefits: [
          'কনকারেন্ট শত শত ভোটেও ১টি ভোটও মিস হয় না।',
          'অ্যাটমিক লেভেলে ১০০% নির্ভুল ডেটা ইন্টিগ্রিটি।'
        ],
        architectAdvice: 'হাই-ট্রাফিক পোলের ক্ষেত্রে প্রতি ক্লিকে ডাটাবেসে না লিখে Redis INCR (যেমন redis->incr("poll:option")) ব্যবহার করুন এবং প্রতি ১ মিনিটে ব্যাচ আকারে MySQL-এ সিঙ্ক করুন।'
      },
      zendInternals: {
        opcodesSummary: [
          'INIT_FCALL (php_array_sum)',
          'DIV (calculating percentage)',
          'MUL',
          'INIT_FCALL (php_round)'
        ],
        explanationBn: `array_sum() জেন্ড ইঞ্জিনের অভ্যন্তরীণ সি-লুপ দিয়ে হ্যাশটেবিলের সমস্ত zval ভ্যালু সরাসরি যোগ করে দ্রুততম সময়ে ফলাফল দেয়।`
      },
      security: {
        vulnerabilityType: 'Poll Rigging & Race Conditions',
        attackVectorBn: 'বট স্ক্রিপ্ট দিয়ে এক সেকেন্ডে হাজার হাজার ভুয়া ভোট সাবমিট করে ভোটের ফলাফল বিকৃত করা।',
        preventionRuleBn: 'CAPTCHA, CSRF টোকেন, আইপি রেট লিমিটিং এবং অ্যাটমিক SQL স্টেটমেন্ট বাধ্যতামূলক করুন।'
      }
    }
  }
];
