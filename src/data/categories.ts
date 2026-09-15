import { CategoryMeta, TopicCategory } from '../types';

export const CATEGORIES: Record<TopicCategory, CategoryMeta> = {
  basic: {
    id: 'basic',
    nameBn: 'পিএইচপি বেসিক্স (W3Schools Core)',
    nameEn: 'PHP Tutorial (Core)',
    badge: 'Core',
    description: 'সিনট্যাক্স, ভেরিয়েবল, ডেটা টাইপ, কন্ট্রোল স্ট্রাকচার ও ফাংশন'
  },
  forms: {
    id: 'forms',
    nameBn: 'ফর্ম ও ইনপুট হ্যান্ডলিং',
    nameEn: 'PHP Forms',
    badge: 'Forms',
    description: 'GET/POST রিকোয়েস্ট, ভ্যালিডেশন ও সিকিউর ইনপুট হ্যান্ডলিং'
  },
  advanced: {
    id: 'advanced',
    nameBn: 'অ্যাডভান্সড স্ক্রিপ্টিং ও ফাইলস',
    nameEn: 'PHP Advanced',
    badge: 'Advanced',
    description: 'ফাইল আই/ও, সেশন, কুকিজ, ডেট/টাইম ও এক্সেপশন হ্যান্ডলিং'
  },
  oop: {
    id: 'oop',
    nameBn: 'অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)',
    nameEn: 'PHP OOP',
    badge: 'OOP',
    description: 'ক্লাস, অবজেক্ট, ইনহেরিটেন্স, ইন্টারফেস, ট্রেইট ও নেমস্পেস'
  },
  mysql: {
    id: 'mysql',
    nameBn: 'ডাটাবেস ও PDO সিকিউরিটি',
    nameEn: 'PHP & MySQL (PDO)',
    badge: 'Database',
    description: 'MySQL ডাটাবেস অপারেশন, প্রিপেয়ার্ড স্টেটমেন্ট ও এসকিউএলআই ডিফেন্স'
  },
  architect: {
    id: 'architect',
    nameBn: '২০ বছরের এন্টারপ্রাইজ আর্কিটেক্ট ডাইভস',
    nameEn: 'Enterprise Architecture',
    badge: 'Senior 20y',
    description: 'জেন্ড ইঞ্জিন ইন্টারনালস, Zval মেমোরি, JIT ও হাই-লোড আর্কিটেকচার'
  }
};
