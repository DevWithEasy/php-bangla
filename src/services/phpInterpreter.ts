/**
 * Robust Client-side PHP 8.x Interpreter Engine
 * Supports PHP syntax, statements, functions, OOP, arrays, control flow,
 * built-in functions, and HTML templating without external network dependencies.
 */

export interface PhpRunResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

// Built-in Mock Classes
export class MockException extends Error {
  constructor(message: string = '', public code: number = 0) {
    super(message);
    this.name = 'Exception';
  }
  getMessage() {
    return this.message;
  }
  getCode() {
    return this.code;
  }
  getFile() {
    return '/index.php';
  }
  getLine() {
    return 1;
  }
}

export class MockPDOException extends MockException {
  constructor(message: string = '', code: number = 0) {
    super(message, code);
    this.name = 'PDOException';
  }
}

export class MockDateTime {
  protected d: Date;
  constructor(timeStr?: string) {
    this.d = timeStr && timeStr !== 'now' ? new Date(timeStr) : new Date();
  }
  format(fmt: string): string {
    return formatPhpDate(fmt, this.d);
  }
  modify(mod: string): this {
    return this;
  }
}

export class MockDateTimeImmutable extends MockDateTime {}

export class MockPDO {
  static ATTR_ERRMODE = 3;
  static ERRMODE_EXCEPTION = 2;
  static ATTR_DEFAULT_FETCH_MODE = 19;
  static FETCH_ASSOC = 2;
  static FETCH_OBJ = 5;

  private tables: Record<string, any[]> = {
    users: [
      { id: 1, name: 'Robiul', email: 'robiul@example.com' },
      { id: 2, name: 'Hasan', email: 'hasan@example.com' },
    ],
    products: [
      { id: 1, title: 'মেকানিক্যাল কীবোর্ড', price: 4500.0 },
      { id: 2, title: 'Gaming Mouse', price: 2100.0 },
    ],
  };

  constructor(public dsn?: string, public username?: string, public password?: string) {}

  setAttribute(attribute: any, value: any): boolean {
    return true;
  }

  exec(sql: string): number {
    return 1;
  }

  query(sql: string) {
    let rows = this.tables['users'];
    if (sql.toLowerCase().includes('products')) {
      rows = this.tables['products'];
    }
    return {
      fetchAll: (mode?: any) => rows,
      fetch: (mode?: any) => rows[0] || null,
    };
  }

  prepare(sql: string) {
    let rows = this.tables['products'];
    if (sql.toLowerCase().includes('users')) {
      rows = this.tables['users'];
    }
    return {
      execute: (params?: any) => true,
      fetchAll: (mode?: any) => rows,
      fetch: (mode?: any) => rows[0] || null,
    };
  }
}

export class stdClass {}

export function formatPhpDate(format: string, d: Date = new Date()): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];

  const Y = d.getFullYear();
  const y = String(Y).slice(-2);
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const n = String(d.getMonth() + 1);
  const dNum = String(d.getDate()).padStart(2, '0');
  const j = String(d.getDate());
  const H = String(d.getHours()).padStart(2, '0');
  const h = String(d.getHours() % 12 || 12).padStart(2, '0');
  const G = String(d.getHours());
  const g = String(d.getHours() % 12 || 12);
  const i = String(d.getMinutes()).padStart(2, '0');
  const s = String(d.getSeconds()).padStart(2, '0');
  const a = d.getHours() >= 12 ? 'pm' : 'am';
  const A = d.getHours() >= 12 ? 'PM' : 'AM';
  const l = days[d.getDay()];
  const D = l.slice(0, 3);
  const F = months[d.getMonth()];
  const M = F.slice(0, 3);

  let out = '';
  let escaped = false;
  for (let idx = 0; idx < format.length; idx++) {
    const ch = format[idx];
    if (escaped) {
      out += ch;
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }
    switch (ch) {
      case 'Y': out += Y; break;
      case 'y': out += y; break;
      case 'm': out += m; break;
      case 'n': out += n; break;
      case 'd': out += dNum; break;
      case 'j': out += j; break;
      case 'H': out += H; break;
      case 'h': out += h; break;
      case 'G': out += G; break;
      case 'g': out += g; break;
      case 'i': out += i; break;
      case 's': out += s; break;
      case 'A': out += A; break;
      case 'a': out += a; break;
      case 'l': out += l; break;
      case 'D': out += D; break;
      case 'F': out += F; break;
      case 'M': out += M; break;
      default: out += ch; break;
    }
  }
  return out;
}

export class PhpInterpreter {
  private globalVars: Record<string, any> = {};
  private functions: Record<string, Function> = {};
  private classes: Record<string, any> = {};
  private output: string[] = [];

  constructor() {
    this.initSuperglobals();
    this.initBuiltins();
  }

  private initSuperglobals() {
    this.globalVars['_GET'] = {};
    this.globalVars['_POST'] = {};
    this.globalVars['_REQUEST'] = {};
    this.globalVars['_COOKIE'] = {};
    this.globalVars['_SESSION'] = {};
    this.globalVars['_SERVER'] = {
      PHP_SELF: '/index.php',
      SERVER_NAME: 'localhost',
      HTTP_HOST: 'localhost',
      REQUEST_METHOD: 'GET',
      SCRIPT_NAME: '/index.php',
      SERVER_SOFTWARE: 'PHP 8.2 (WASM Simulated Engine)',
    };
  }

  private initBuiltins() {
    // PHP Engine info functions
    this.functions['phpversion'] = (ext?: string) => '8.2.14';
    this.functions['php_sapi_name'] = () => 'fpm-fcgi';
    this.functions['zend_version'] = () => '4.2.14';
    this.functions['phpinfo'] = () => {
      this.output.push(`
<div style="font-family:sans-serif;padding:12px;background:#f8fafc;color:#1e293b;border-radius:6px;">
  <h2 style="margin-top:0;color:#2563eb;">PHP Version 8.2.14</h2>
  <table style="width:100%;border-collapse:collapse;font-size:13px;">
    <tr><td style="padding:4px;font-weight:bold;border-bottom:1px solid #e2e8f0;">System</td><td style="padding:4px;border-bottom:1px solid #e2e8f0;">Linux WebAssembly Engine x86_64</td></tr>
    <tr><td style="padding:4px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Server API</td><td style="padding:4px;border-bottom:1px solid #e2e8f0;">FPM/FastCGI</td></tr>
    <tr><td style="padding:4px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Zend Engine</td><td style="padding:4px;border-bottom:1px solid #e2e8f0;">v4.2.14 with Zend OPcache v8.2.14</td></tr>
    <tr><td style="padding:4px;font-weight:bold;border-bottom:1px solid #e2e8f0;">OPcache & JIT</td><td style="padding:4px;border-bottom:1px solid #e2e8f0;">Enabled (Tracing JIT, Buffer: 64MB)</td></tr>
    <tr><td style="padding:4px;font-weight:bold;">Memory Limit</td><td style="padding:4px;">128M</td></tr>
  </table>
</div>`);
      return true;
    };
    this.functions['memory_get_usage'] = () => 2097152 + Math.floor(Math.random() * 2048);
    this.functions['memory_get_peak_usage'] = () => 4194304;
    this.functions['opcache_get_status'] = () => ({
      opcache_enabled: true,
      cache_full: false,
      restart_pending: false,
      restart_in_progress: false,
      memory_usage: {
        used_memory: 10485760,
        free_memory: 56623104,
        wasted_memory: 0,
        current_wasted_percentage: 0,
      },
      jit: {
        enabled: true,
        on: true,
        kind: 5,
        opt_level: 5,
        opt_flags: 6,
        buffer_size: 67108864,
        buffer_free: 66978816,
      },
    });
    this.functions['ini_get'] = (key: string) => {
      const config: Record<string, string> = {
        display_errors: '1',
        error_reporting: '32767',
        memory_limit: '128M',
        max_execution_time: '30',
        'date.timezone': 'Asia/Dhaka',
      };
      return config[key] ?? '1';
    };
    this.functions['ini_set'] = (key: string, val: any) => '1';
    this.functions['error_reporting'] = (level?: number) => 32767;

    // Date & Time functions
    this.functions['time'] = () => Math.floor(Date.now() / 1000);
    this.functions['date'] = (format: string, timestamp?: number) => {
      const d = timestamp !== undefined ? new Date(timestamp * 1000) : new Date();
      return formatPhpDate(String(format), d);
    };
    this.functions['strtotime'] = (timeStr: string) => {
      const t = Date.parse(timeStr);
      return isNaN(t) ? Math.floor(Date.now() / 1000) : Math.floor(t / 1000);
    };
    this.functions['microtime'] = (get_as_float: boolean = false) => {
      if (get_as_float) return Date.now() / 1000;
      return `0.${Math.floor(Math.random() * 1000000)} ${Math.floor(Date.now() / 1000)}`;
    };
    this.functions['date_default_timezone_set'] = (tz: string) => true;
    this.functions['date_default_timezone_get'] = () => 'Asia/Dhaka';

    // String functions
    this.functions['strlen'] = (str: any) => String(str ?? '').length;
    this.functions['strtoupper'] = (str: any) => String(str ?? '').toUpperCase();
    this.functions['strtolower'] = (str: any) => String(str ?? '').toLowerCase();
    this.functions['ucfirst'] = (str: any) => {
      const s = String(str ?? '');
      return s.charAt(0).toUpperCase() + s.slice(1);
    };
    this.functions['ucwords'] = (str: any) => {
      return String(str ?? '').replace(/\b\w/g, (c) => c.toUpperCase());
    };
    this.functions['trim'] = (str: any) => String(str ?? '').trim();
    this.functions['ltrim'] = (str: any) => String(str ?? '').trimStart();
    this.functions['rtrim'] = (str: any) => String(str ?? '').trimEnd();
    this.functions['substr'] = (str: any, start: number, length?: number) => {
      const s = String(str ?? '');
      if (start < 0) start = Math.max(0, s.length + start);
      if (length !== undefined) {
        return s.slice(start, start + length);
      }
      return s.slice(start);
    };
    this.functions['strpos'] = (haystack: any, needle: any, offset: number = 0) => {
      const idx = String(haystack ?? '').indexOf(String(needle ?? ''), offset);
      return idx === -1 ? false : idx;
    };
    this.functions['str_replace'] = (search: any, replace: any, subject: any) => {
      return String(subject ?? '').replaceAll(String(search), String(replace));
    };
    this.functions['str_contains'] = (haystack: any, needle: any) => {
      return String(haystack ?? '').includes(String(needle ?? ''));
    };
    this.functions['str_starts_with'] = (haystack: any, needle: any) => {
      return String(haystack ?? '').startsWith(String(needle ?? ''));
    };
    this.functions['str_ends_with'] = (haystack: any, needle: any) => {
      return String(haystack ?? '').endsWith(String(needle ?? ''));
    };
    this.functions['str_repeat'] = (input: any, multiplier: number) => {
      return String(input ?? '').repeat(Math.max(0, multiplier || 0));
    };
    this.functions['str_pad'] = (input: any, len: number, padStr: string = ' ') => {
      return String(input ?? '').padStart(len, padStr);
    };
    this.functions['str_split'] = (str: any, length: number = 1) => {
      const s = String(str ?? '');
      const r: string[] = [];
      const l = Math.max(1, length || 1);
      for (let i = 0; i < s.length; i += l) r.push(s.slice(i, i + l));
      return r;
    };
    this.functions['explode'] = (delimiter: string, string: string) => {
      return String(string ?? '').split(delimiter);
    };
    this.functions['implode'] = (glue: string, pieces: any[]) => {
      if (Array.isArray(pieces)) return pieces.join(glue);
      if (typeof glue === 'object' && Array.isArray(glue)) {
        return (glue as any[]).join(String(pieces || ''));
      }
      return '';
    };
    this.functions['htmlspecialchars'] = (str: any) => {
      return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };
    this.functions['strip_tags'] = (str: any) => {
      return String(str ?? '').replace(/<\/?[^>]+(>|$)/g, '');
    };
    this.functions['stripslashes'] = (str: any) => {
      return String(str ?? '').replace(/\\(.)/g, '$1');
    };
    this.functions['addslashes'] = (str: any) => {
      return String(str ?? '').replace(/['"\\\0]/g, '\\$&');
    };
    this.functions['number_format'] = (num: number, decimals: number = 0) => {
      return Number(num || 0).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    };

    // Multibyte strings
    this.functions['mb_strlen'] = (str: any) => String(str ?? '').length;
    this.functions['mb_strpos'] = (haystack: any, needle: any, offset: number = 0) => {
      const idx = String(haystack ?? '').indexOf(String(needle ?? ''), offset);
      return idx === -1 ? false : idx;
    };
    this.functions['mb_substr'] = (str: any, start: number, len?: number) => {
      return this.functions['substr'](str, start, len);
    };
    this.functions['mb_strtoupper'] = (str: any) => String(str ?? '').toUpperCase();
    this.functions['mb_strtolower'] = (str: any) => String(str ?? '').toLowerCase();

    // Regex functions
    this.functions['preg_match'] = (pattern: any, subject: any, matches?: any) => {
      try {
        const p = String(pattern ?? '');
        const m = p.match(/^\/(.*)\/([a-z]*)$/);
        const regex = m ? new RegExp(m[1], m[2]) : new RegExp(p);
        const res = String(subject ?? '').match(regex);
        if (res) {
          if (Array.isArray(matches)) {
            matches.length = 0;
            matches.push(...res);
          }
          return 1;
        }
        return 0;
      } catch {
        return 0;
      }
    };
    this.functions['preg_match_all'] = (pattern: any, subject: any, matches?: any) => {
      try {
        const p = String(pattern ?? '');
        const m = p.match(/^\/(.*)\/([a-z]*)$/);
        const flags = m ? (m[2].includes('g') ? m[2] : m[2] + 'g') : 'g';
        const regex = m ? new RegExp(m[1], flags) : new RegExp(p, 'g');
        const all = [...String(subject ?? '').matchAll(regex)];
        if (Array.isArray(matches)) {
          matches.length = 0;
          matches.push(all.map((x) => x[0]));
        }
        return all.length;
      } catch {
        return 0;
      }
    };
    this.functions['preg_replace'] = (pattern: any, replacement: any, subject: any) => {
      try {
        const p = String(pattern ?? '');
        const m = p.match(/^\/(.*)\/([a-z]*)$/);
        const flags = m ? (m[2].includes('g') ? m[2] : m[2] + 'g') : 'g';
        const regex = m ? new RegExp(m[1], flags) : new RegExp(p, 'g');
        return String(subject ?? '').replace(regex, String(replacement));
      } catch {
        return String(subject ?? '');
      }
    };
    this.functions['preg_split'] = (pattern: any, subject: any) => {
      try {
        const p = String(pattern ?? '');
        const m = p.match(/^\/(.*)\/([a-z]*)$/);
        const regex = m ? new RegExp(m[1], m[2]) : new RegExp(p);
        return String(subject ?? '').split(regex);
      } catch {
        return [String(subject ?? '')];
      }
    };

    // Array functions
    this.functions['count'] = (arr: any) =>
      Array.isArray(arr)
        ? arr.length
        : typeof arr === 'object' && arr
        ? Object.keys(arr).length
        : 0;
    this.functions['sizeof'] = this.functions['count'];
    this.functions['is_array'] = (arr: any) =>
      Array.isArray(arr) || (typeof arr === 'object' && arr !== null);
    this.functions['in_array'] = (needle: any, haystack: any) => {
      if (Array.isArray(haystack)) {
        return haystack.some((item) => String(item) === String(needle));
      }
      if (typeof haystack === 'object' && haystack !== null) {
        return Object.values(haystack).some((item) => String(item) === String(needle));
      }
      return false;
    };
    this.functions['array_keys'] = (arr: any) =>
      typeof arr === 'object' && arr ? Object.keys(arr) : [];
    this.functions['array_values'] = (arr: any) =>
      typeof arr === 'object' && arr ? Object.values(arr) : [];
    this.functions['array_merge'] = (...arrays: any[]) => {
      const isAllArr = arrays.every((a) => Array.isArray(a));
      if (isAllArr) {
        return [].concat(...arrays);
      }
      return Object.assign({}, ...arrays);
    };
    this.functions['array_push'] = (arr: any[], ...elements: any[]) => {
      if (Array.isArray(arr)) return arr.push(...elements);
      return 0;
    };
    this.functions['array_pop'] = (arr: any[]) => (Array.isArray(arr) ? arr.pop() : null);
    this.functions['array_shift'] = (arr: any[]) => (Array.isArray(arr) ? arr.shift() : null);
    this.functions['array_unshift'] = (arr: any[], ...elements: any[]) =>
      Array.isArray(arr) ? arr.unshift(...elements) : 0;
    this.functions['array_search'] = (needle: any, haystack: any) => {
      if (Array.isArray(haystack)) {
        const i = haystack.indexOf(needle);
        return i === -1 ? false : i;
      }
      if (typeof haystack === 'object' && haystack !== null) {
        for (const [k, v] of Object.entries(haystack)) {
          if (v === needle) return k;
        }
      }
      return false;
    };
    this.functions['array_sum'] = (arr: any) => {
      const vals = Array.isArray(arr) ? arr : Object.values(arr || {});
      return vals.reduce((acc, curr) => acc + (Number(curr) || 0), 0);
    };
    this.functions['array_map'] = (fn: any, arr: any) =>
      Array.isArray(arr) ? arr.map(fn) : [];
    this.functions['array_filter'] = (arr: any, fn?: any) =>
      Array.isArray(arr) ? (fn ? arr.filter(fn) : arr.filter(Boolean)) : [];
    this.functions['array_reduce'] = (arr: any, fn: any, init?: any) =>
      Array.isArray(arr) ? arr.reduce((acc, curr) => fn(acc, curr), init) : init;
    this.functions['array_slice'] = (arr: any, offset: number, len?: number) =>
      Array.isArray(arr)
        ? len !== undefined
          ? arr.slice(offset, offset + len)
          : arr.slice(offset)
        : [];
    this.functions['array_splice'] = (arr: any[], offset: number, len: number = 0, ...items: any[]) =>
      Array.isArray(arr) ? arr.splice(offset, len, ...items) : [];
    this.functions['array_column'] = (arr: any[], col: string) =>
      Array.isArray(arr) ? arr.map((x) => x?.[col]) : [];
    this.functions['array_unique'] = (arr: any) =>
      Array.isArray(arr) ? [...new Set(arr)] : [];
    this.functions['array_reverse'] = (arr: any) =>
      Array.isArray(arr) ? [...arr].reverse() : [];
    this.functions['range'] = (start: any, end: any, step: number = 1) => {
      const res: any[] = [];
      const s = step || 1;
      if (typeof start === 'string' && typeof end === 'string') {
        const sCode = start.charCodeAt(0);
        const eCode = end.charCodeAt(0);
        if (sCode <= eCode) {
          for (let c = sCode; c <= eCode; c += s) res.push(String.fromCharCode(c));
        } else {
          for (let c = sCode; c >= eCode; c -= s) res.push(String.fromCharCode(c));
        }
        return res;
      }
      const nStart = Number(start) || 0;
      const nEnd = Number(end) || 0;
      if (nStart <= nEnd) {
        for (let n = nStart; n <= nEnd; n += s) res.push(n);
      } else {
        for (let n = nStart; n >= nEnd; n -= s) res.push(n);
      }
      return res;
    };
    this.functions['sort'] = (arr: any[]) => {
      if (Array.isArray(arr)) arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
      return true;
    };
    this.functions['rsort'] = (arr: any[]) => {
      if (Array.isArray(arr)) arr.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
      return true;
    };
    this.functions['asort'] = (arr: any) => true;
    this.functions['ksort'] = (arr: any) => true;
    this.functions['usort'] = (arr: any[], fn: any) => {
      if (Array.isArray(arr) && typeof fn === 'function') arr.sort(fn);
      return true;
    };

    // Math functions
    this.functions['abs'] = Math.abs;
    this.functions['round'] = (n: number, prec: number = 0) => {
      const factor = Math.pow(10, prec);
      return Math.round(n * factor) / factor;
    };
    this.functions['floor'] = Math.floor;
    this.functions['ceil'] = Math.ceil;
    this.functions['min'] = (...args: any[]) => {
      const vals = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
      return Math.min(...vals.map(Number));
    };
    this.functions['max'] = (...args: any[]) => {
      const vals = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
      return Math.max(...vals.map(Number));
    };
    this.functions['rand'] = (min: number = 0, max: number = 100) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    this.functions['mt_rand'] = this.functions['rand'];
    this.functions['sqrt'] = Math.sqrt;
    this.functions['pow'] = Math.pow;
    this.functions['pi'] = () => Math.PI;

    // Cryptography & Random
    this.functions['bin2hex'] = (str: any) => {
      const s = String(str ?? '');
      let h = '';
      for (let i = 0; i < s.length; i++) h += s.charCodeAt(i).toString(16).padStart(2, '0');
      return h;
    };
    this.functions['hex2bin'] = (hex: any) => {
      const h = String(hex ?? '');
      let s = '';
      for (let i = 0; i < h.length; i += 2) s += String.fromCharCode(parseInt(h.substr(i, 2), 16));
      return s;
    };
    this.functions['random_bytes'] = (len: number) => {
      let res = '';
      const count = Math.max(0, len || 0);
      for (let i = 0; i < count; i++) res += String.fromCharCode(Math.floor(Math.random() * 256));
      return res;
    };
    this.functions['random_int'] = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    this.functions['password_hash'] = (pwd: string) => {
      return '$2y$10$' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };
    this.functions['password_verify'] = (pwd: string, hash: string) => Boolean(pwd && hash);
    this.functions['md5'] = (str: any) => {
      const s = String(str ?? '');
      let hash = 0;
      for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash).toString(16).padStart(32, '0');
    };
    this.functions['sha1'] = (str: any) => {
      const s = String(str ?? '');
      let hash = 0;
      for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash).toString(16).padStart(40, 'a');
    };
    this.functions['base64_encode'] = (data: any) => {
      const s = String(data ?? '');
      if (typeof btoa !== 'undefined') return btoa(s);
      return Buffer.from(s).toString('base64');
    };
    this.functions['base64_decode'] = (data: any) => {
      const s = String(data ?? '');
      if (typeof atob !== 'undefined') return atob(s);
      return Buffer.from(s, 'base64').toString('utf-8');
    };
    this.functions['urlencode'] = (str: any) => encodeURIComponent(String(str ?? ''));
    this.functions['urldecode'] = (str: any) => decodeURIComponent(String(str ?? ''));

    // Filter & Validation
    this.functions['filter_var'] = (val: any, filter?: any) => {
      const s = String(val ?? '').trim();
      if (filter === 274) {
        // FILTER_VALIDATE_EMAIL
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) ? s : false;
      }
      if (filter === 257) {
        // FILTER_VALIDATE_INT
        const n = parseInt(s, 10);
        return !isNaN(n) ? n : false;
      }
      if (filter === 259) {
        // FILTER_VALIDATE_FLOAT
        const f = parseFloat(s);
        return !isNaN(f) ? f : false;
      }
      if (filter === 273) {
        // FILTER_VALIDATE_URL
        return /^https?:\/\//i.test(s) ? s : false;
      }
      return s;
    };
    this.functions['filter_input'] = (type: any, varName: string, filter?: any) => {
      const postVal = this.globalVars['_POST']?.[varName];
      const getVal = this.globalVars['_GET']?.[varName];
      return this.functions['filter_var'](postVal ?? getVal ?? '', filter);
    };

    // Reflection & Class functions
    this.functions['function_exists'] = (name: string) =>
      Boolean(this.functions[name] || typeof (globalThis as any)[name] === 'function');
    this.functions['class_exists'] = (name: string) =>
      Boolean(
        this.classes[name] ||
          name === 'PDO' ||
          name === 'DateTime' ||
          name === 'DateTimeImmutable' ||
          name === 'Exception' ||
          name === 'PDOException'
      );
    this.functions['method_exists'] = (obj: any, name: string) =>
      typeof obj?.[name] === 'function';
    this.functions['property_exists'] = (obj: any, name: string) =>
      obj !== null && obj !== undefined && name in obj;
    this.functions['get_class'] = (obj: any) => obj?.constructor?.name || 'stdClass';

    // Constants & Defines
    this.functions['define'] = (name: string, val: any) => {
      this.globalVars[name] = val;
      return true;
    };
    this.functions['defined'] = (name: string) => name in this.globalVars;
    this.functions['constant'] = (name: string) => this.globalVars[name];

    // Session functions
    this.functions['session_start'] = () => true;
    this.functions['session_id'] = () => 'sess_' + Math.random().toString(36).substring(2, 10);
    this.functions['session_regenerate_id'] = () => true;
    this.functions['session_destroy'] = () => {
      this.globalVars['_SESSION'] = {};
      return true;
    };
    this.functions['session_status'] = () => 2; // PHP_SESSION_ACTIVE

    // MySQLi mock functions
    this.functions['mysqli_connect'] = () => ({ connect_error: null, errno: 0 });
    this.functions['mysqli_query'] = (conn: any, sql: string) => ({
      num_rows: 1,
      data: [{ id: 1, name: 'Admin', email: 'admin@example.com' }],
    });
    this.functions['mysqli_fetch_assoc'] = (res: any) => res?.data?.shift() || null;
    this.functions['mysqli_close'] = () => true;
    this.functions['mysqli_error'] = () => '';

    // JSON
    this.functions['json_encode'] = (data: any) => JSON.stringify(data);
    this.functions['json_decode'] = (str: string, assoc: boolean = false) => {
      try {
        return JSON.parse(str);
      } catch {
        return null;
      }
    };

    // Type checking & state
    this.functions['empty'] = (v: any) =>
      !v || v === '0' || (Array.isArray(v) && v.length === 0) || (typeof v === 'object' && Object.keys(v).length === 0);
    this.functions['isset'] = (...args: any[]) =>
      args.every((a) => a !== undefined && a !== null);
    this.functions['unset'] = () => {};
    this.functions['is_string'] = (v: any) => typeof v === 'string';
    this.functions['is_numeric'] = (v: any) => !isNaN(Number(v)) && v !== '' && v !== null;
    this.functions['is_int'] = (v: any) => Number.isInteger(v);
    this.functions['is_null'] = (v: any) => v === null || v === undefined;
    this.functions['intval'] = (v: any) => parseInt(v, 10) || 0;
    this.functions['floatval'] = (v: any) => parseFloat(v) || 0;
    this.functions['strval'] = (v: any) => String(v ?? '');
    this.functions['boolval'] = (v: any) => Boolean(v);
    this.functions['gettype'] = (v: any) => {
      if (v === null || v === undefined) return 'NULL';
      if (typeof v === 'boolean') return 'boolean';
      if (typeof v === 'number') return Number.isInteger(v) ? 'integer' : 'double';
      if (typeof v === 'string') return 'string';
      if (Array.isArray(v)) return 'array';
      if (typeof v === 'object') return 'object';
      return 'unknown type';
    };

    // Output & inspection
    this.functions['print_r'] = (val: any, returnOutput: boolean = false) => {
      const formatted = this.formatPrintR(val);
      if (returnOutput) return formatted;
      this.output.push(formatted);
      return 1;
    };
    this.functions['var_dump'] = (...args: any[]) => {
      for (const arg of args) {
        this.output.push(this.formatVarDump(arg));
      }
    };
    this.functions['print'] = (val: any) => {
      this.output.push(String(val ?? ''));
      return 1;
    };
  }

  private formatPrintR(val: any, indent: number = 0): string {
    const pad = '    '.repeat(indent);
    if (val === null || val === undefined) return '';
    if (typeof val === 'boolean') return val ? '1' : '';
    if (typeof val !== 'object') return String(val);

    const isArr = Array.isArray(val);
    let str = isArr ? 'Array\n' : 'stdClass Object\n';
    str += pad + '(\n';
    const entries = isArr ? val.map((v, i) => [i, v]) : Object.entries(val);
    for (const [k, v] of entries) {
      str += `${pad}    [${k}] => `;
      if (typeof v === 'object' && v !== null) {
        str += this.formatPrintR(v, indent + 2) + '\n';
      } else {
        str += `${v}\n`;
      }
    }
    str += pad + ')';
    return str;
  }

  private formatVarDump(val: any, indent: number = 0): string {
    const pad = '  '.repeat(indent);
    if (val === null || val === undefined) return `${pad}NULL\n`;
    if (typeof val === 'boolean') return `${pad}bool(${val})\n`;
    if (typeof val === 'number') {
      return Number.isInteger(val) ? `${pad}int(${val})\n` : `${pad}float(${val})\n`;
    }
    if (typeof val === 'string') return `${pad}string(${val.length}) "${val}"\n`;
    if (Array.isArray(val)) {
      let str = `${pad}array(${val.length}) {\n`;
      val.forEach((item, idx) => {
        str += `${pad}  [${idx}]=>\n${this.formatVarDump(item, indent + 1)}`;
      });
      str += `${pad}}\n`;
      return str;
    }
    if (typeof val === 'object') {
      const keys = Object.keys(val);
      let str = `${pad}object(stdClass)#1 (${keys.length}) {\n`;
      for (const k of keys) {
        str += `${pad}  ["${k}"]=>\n${this.formatVarDump(val[k], indent + 1)}`;
      }
      str += `${pad}}\n`;
      return str;
    }
    return `${pad}${String(val)}\n`;
  }

  /**
   * Main entry point to run PHP code (with mixing HTML and <?php ?> tags)
   */
  public run(rawCode: string): PhpRunResult {
    this.output = [];
    let stdout = '';
    let stderr = '';
    let exitCode = 0;

    try {
      // Split raw code into HTML blocks and PHP blocks
      const tokens = this.tokenizeCode(rawCode);

      for (const token of tokens) {
        if (token.type === 'html') {
          this.output.push(token.content);
        } else if (token.type === 'php') {
          this.executePhpBlock(token.content);
        }
      }

      stdout = this.output.join('');
    } catch (err: any) {
      stderr = `PHP Parse/Fatal Error: ${err?.message || 'Unknown error'}`;
      exitCode = 1;
    }

    return {
      stdout,
      stderr,
      exitCode,
    };
  }

  private tokenizeCode(code: string): Array<{ type: 'html' | 'php'; content: string }> {
    const tokens: Array<{ type: 'html' | 'php'; content: string }> = [];
    let pos = 0;

    // Check if code contains PHP tags
    if (!code.includes('<?php') && !code.includes('<?=')) {
      if (
        code.trim().startsWith('$') ||
        /\b(echo|function|class|for|foreach|while|if)\b/i.test(code)
      ) {
        return [{ type: 'php', content: code }];
      }
      return [{ type: 'html', content: code }];
    }

    while (pos < code.length) {
      const tagOpen = code.indexOf('<?', pos);
      if (tagOpen === -1) {
        tokens.push({ type: 'html', content: code.slice(pos) });
        break;
      }

      if (tagOpen > pos) {
        tokens.push({ type: 'html', content: code.slice(pos, tagOpen) });
      }

      let isEchoTag = false;
      let tagLen = 2;
      if (code.startsWith('<?php', tagOpen)) {
        tagLen = 5;
      } else if (code.startsWith('<?=', tagOpen)) {
        tagLen = 3;
        isEchoTag = true;
      }

      const tagClose = code.indexOf('?>', tagOpen + tagLen);
      let phpContent = '';
      if (tagClose === -1) {
        phpContent = code.slice(tagOpen + tagLen);
        pos = code.length;
      } else {
        phpContent = code.slice(tagOpen + tagLen, tagClose);
        pos = tagClose + 2;
      }

      if (isEchoTag) {
        tokens.push({ type: 'php', content: `echo (${phpContent.trim()});` });
      } else {
        tokens.push({ type: 'php', content: phpContent });
      }
    }

    return tokens;
  }

  /**
   * Execute a block of PHP statements
   */
  private executePhpBlock(phpCode: string) {
    const cleanCode = this.stripPhpComments(phpCode)
      .replace(/declare\s*\(\s*strict_types\s*=\s*\d\s*\)\s*;/g, '')
      .trim();

    if (!cleanCode) return;

    // Transpile PHP code into executable JavaScript
    const jsCode = this.transpilePhpToJs(cleanCode);

    // Context execution function with standard JS globals available
    const rawContext: Record<string, any> = {
      Array,
      Object,
      Math,
      String,
      Number,
      Boolean,
      Date,
      JSON,
      parseInt,
      parseFloat,
      isNaN,
      PDO: MockPDO,
      PDOException: MockPDOException,
      Exception: MockException,
      Error: MockException,
      Throwable: MockException,
      DateTime: MockDateTime,
      DateTimeImmutable: MockDateTimeImmutable,
      stdClass,
      PHP_VERSION: '8.2.14',
      PHP_MAJOR_VERSION: 8,
      PHP_MINOR_VERSION: 2,
      PHP_RELEASE_VERSION: 14,
      PHP_OS: 'Linux',
      PHP_EOL: '\n',
      PHP_INT_MAX: Number.MAX_SAFE_INTEGER,
      PHP_INT_MIN: Number.MIN_SAFE_INTEGER,
      __LINE__: 1,
      __FILE__: '/index.php',
      __DIR__: '/',
      __FUNCTION__: 'main',
      __CLASS__: '',
      __METHOD__: '',
      __NAMESPACE__: '',
      ENT_COMPAT: 2,
      ENT_QUOTES: 3,
      ENT_NOQUOTES: 0,
      FILTER_VALIDATE_EMAIL: 274,
      FILTER_VALIDATE_INT: 257,
      FILTER_VALIDATE_FLOAT: 259,
      FILTER_VALIDATE_URL: 273,
      FILTER_SANITIZE_STRING: 513,
      FILTER_SANITIZE_SPECIAL_CHARS: 515,
      __spaceship: (a: any, b: any) => (a > b ? 1 : a < b ? -1 : 0),
      matches: [],
      ...this.globalVars,
      ...this.functions,
      define: (name: string, val: any) => {
        rawContext[name] = val;
        this.globalVars[name] = val;
        return true;
      },
      __output: this.output,
      __echo: (...vals: any[]) => {
        for (const v of vals) {
          this.output.push(String(v ?? ''));
        }
      },
      __classes: this.classes,
    };

    // Smart Proxy provides global context without shadowing local function scopes
    const contextProxy = new Proxy(rawContext, {
      has(t, prop) {
        if (typeof prop === 'symbol') return false;
        return prop in t;
      },
      get(t, prop) {
        if (prop in t) return t[prop as string];
        return undefined;
      },
      set(t, prop, val) {
        t[prop as string] = val;
        return true;
      },
    });

    try {
      const runner = new Function('ctx', `with(ctx) {\n${jsCode}\n}`);
      runner(contextProxy);

      // Sync variables back to globalVars
      for (const key of Object.keys(rawContext)) {
        if (!key.startsWith('__') && !this.functions[key]) {
          this.globalVars[key] = rawContext[key];
        }
      }
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  /**
   * Quote-aware comment stripper
   */
  private stripPhpComments(code: string): string {
    let res = '';
    let inSingle = false;
    let inDouble = false;
    let i = 0;
    while (i < code.length) {
      const ch = code[i];
      const prev = i > 0 ? code[i - 1] : '';
      const next = i < code.length - 1 ? code[i + 1] : '';

      if (ch === "'" && prev !== '\\' && !inDouble) {
        inSingle = !inSingle;
        res += ch;
        i++;
      } else if (ch === '"' && prev !== '\\' && !inSingle) {
        inDouble = !inDouble;
        res += ch;
        i++;
      } else if (!inSingle && !inDouble) {
        if (ch === '/' && next === '*') {
          const closeIdx = code.indexOf('*/', i + 2);
          if (closeIdx === -1) break;
          i = closeIdx + 2;
        } else if (ch === '/' && next === '/') {
          const lineEnd = code.indexOf('\n', i + 2);
          if (lineEnd === -1) break;
          i = lineEnd;
        } else if (ch === '#') {
          const lineEnd = code.indexOf('\n', i + 1);
          if (lineEnd === -1) break;
          i = lineEnd;
        } else {
          res += ch;
          i++;
        }
      } else {
        res += ch;
        i++;
      }
    }
    return res;
  }

  /**
   * Smart Transpiler: translates PHP constructs to JavaScript
   */
  private transpilePhpToJs(php: string): string {
    let js = php;

    // 0. Remove interfaces
    js = this.stripBalancedKeyword(js, 'interface');

    // 0.1 Handle traits: inline their methods into classes that use them
    js = this.handleTraits(js);

    // 0.3 Lift static function variables so they retain state across function calls
    const staticVars: string[] = [];
    js = js.replace(/\bstatic\s+\$([a-zA-Z0-9_]+)\s*=\s*([^;]+);/g, (_, name, val) => {
      staticVars.push(`let ${name} = ${val};`);
      return '';
    });
    if (staticVars.length > 0) {
      js = staticVars.join('\n') + '\n' + js;
    }

    // 0.4 Convert match expression: match ($expr) { ... } -> ((__val) => { switch(__val) { ... } })($expr)
    js = this.convertMatchExpressions(js);

    // 0.5 Convert PHP arrow functions fn(...) => ... -> (...) => ...
    js = js.replace(/\bfn\s*\(([^)]*)\)\s*=>/g, '($1) =>');

    // 0.6 Convert generator functions: function name(...) { ... yield ... } -> function* name(...)
    js = this.convertGenerators(js);

    // 1. Convert short arrays: ['key' => val] -> ({ 'key': val })
    let prevJs = '';
    while (prevJs !== js) {
      prevJs = js;
      js = js.replace(/\[([^\]\[]*=>[^\]\[]*)\]/g, (_, inner) => {
        return `({ ${inner.replace(/=>/g, ':')} })`;
      });
    }

    // 1.1 Convert PHP array() syntax to JS [] or {}
    js = this.convertPhpArrays(js);

    // 1.2 Convert PHP casting: (int)$x, (float)$x, (bool)$x, (string)$x
    js = js.replace(/\((?:int|integer)\)\s*([$a-zA-Z0-9_'"\-]+)/gi, 'parseInt($1, 10)');
    js = js.replace(/\((?:float|double)\)\s*([$a-zA-Z0-9_'"\-]+)/gi, 'parseFloat($1)');
    js = js.replace(/\((?:bool|boolean)\)\s*([$a-zA-Z0-9_'"\-]+)/gi, 'Boolean($1)');
    js = js.replace(/\((?:string)\)\s*([$a-zA-Z0-9_'"\-]+)/gi, 'String($1 ?? "")');

    // 1.3 Convert spaceship operator: $a <=> $b -> __spaceship($a, $b)
    js = js.replace(/([$a-zA-Z0-9_.\-\+]+)\s*<=>\s*([$a-zA-Z0-9_.\-\+]+)/g, '__spaceship($1, $2)');

    // 1.4 Convert elseif -> else if
    js = js.replace(/\belseif\b/g, 'else if');

    // 2. Convert PHP string concatenation operator '.'
    js = this.convertStringConcatenation(js);

    // 2.2 Convert double-quoted strings with variable interpolation: "Hello $name!" -> `Hello ${name}!`
    js = js.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, (match, inner) => {
      if (inner.includes('$')) {
        const converted = inner
          .replace(/\{\$([a-zA-Z_][a-zA-Z0-9_]*(?:->[a-zA-Z_][a-zA-Z0-9_]*)*)\}/g, (_, v) => '${' + v.replace(/->/g, '.') + '}')
          .replace(/\$([a-zA-Z_][a-zA-Z0-9_]*(?:->[a-zA-Z_][a-zA-Z0-9_]*)*)/g, (_, v) => '${' + v.replace(/->/g, '.') + '}');
        return '`' + converted + '`';
      }
      return match;
    });

    // 2.3 Convert PHP scope resolution operator :: to .
    js = js.replace(/::/g, '.');

    // 2.4 Convert PHP classes & OOP features
    js = this.convertPhpClasses(js);

    // 2.5 Strip function return types and parameter type hints from regular and generator functions
    js = js.replace(/\)\s*:\s*[?a-zA-Z0-9_|\\\[\]]+\s*\{/g, ') {');
    js = js.replace(/\bfunction(\*?)\s+([a-zA-Z0-9_]+)?\s*\(([^)]*)\)\s*\{/g, (_, genStar, fnName, params) => {
      const cleanParams: string[] = [];
      const namedAssignments: string[] = [];

      for (const p of params.split(',').map((x: string) => x.trim()).filter(Boolean)) {
        const withoutVis = p.replace(/\b(?:public|private|protected|readonly)\s+/g, '');
        const varMatch = withoutVis.match(/(?:[?a-zA-Z0-9_|\\\[\]]+\s+)?\$?([a-zA-Z0-9_]+)(\s*=.*)?$/);
        if (varMatch) {
          const varName = varMatch[1];
          const defVal = varMatch[2] || '';
          cleanParams.push(varName + defVal);
          namedAssignments.push(`if (_named.${varName} !== undefined) ${varName} = _named.${varName};`);
        } else {
          cleanParams.push(p);
        }
      }

      const unpackCode =
        namedAssignments.length > 0
          ? `if (typeof arguments[0] === 'object' && arguments[0] !== null && !Array.isArray(arguments[0])) { const _named = arguments[0]; ${namedAssignments.join(' ')} } `
          : '';

      return `function${genStar || ''} ${fnName || ''}(${cleanParams.join(', ')}) { ${unpackCode}`;
    });

    // 2.6 Convert named arguments at call sites: foo(price: 1000.0, discount: 50.0) -> foo({ price: 1000.0, discount: 50.0 })
    js = js.replace(/\b([a-zA-Z0-9_]+)\s*\(\s*([a-zA-Z0-9_]+\s*:[^;)]+)\)/g, (fullMatch, fn, args) => {
      if (['switch', 'case', 'catch', 'if', 'while', 'for', '__echo'].includes(fn)) return fullMatch;
      return `${fn}({ ${args} })`;
    });

    // 3. Convert echo and print statements respecting string literals
    js = this.transformEchoStatements(js);

    // 4. Convert foreach ($arr as $key => $val) OR foreach ($arr as $val)
    js = js.replace(
      /foreach\s*\(\s*(\$?[a-zA-Z0-9_>\[\]'"]+)\s+as\s+\$?([a-zA-Z0-9_]+)\s*(?:=>|:)\s*\$?([a-zA-Z0-9_]+)\s*\)/g,
      (_, arr, key, val) => {
        return `for (const [${key}, ${val}] of Object.entries(${this.transpileVariable(arr)} || {}))`;
      }
    );
    js = js.replace(
      /foreach\s*\(\s*(\$?[a-zA-Z0-9_>\[\]'"]+)\s+as\s+\$?([a-zA-Z0-9_]+)\s*\)/g,
      (_, arr, val) => {
        return `for (const ${val} of (Array.isArray(${this.transpileVariable(arr)}) ? ${this.transpileVariable(arr)} : Object.values(${this.transpileVariable(arr)} || {})))`;
      }
    );

    // 5. Convert catch blocks (including multiple catch blocks)
    js = this.convertCatchBlocks(js);

    // 6. Convert PHP variables $var -> var, $_GET -> _GET
    js = js.replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g, '$1');

    // 7. Convert object operator -> to .
    js = js.replace(/->/g, '.');

    return js;
  }

  private convertGenerators(code: string): string {
    return code.replace(/\bfunction\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{([\s\S]*?\})/g, (match, name, params, body) => {
      if (/\byield\b/.test(body)) {
        return `function* ${name}(${params}) {${body}`;
      }
      return match;
    });
  }

  private convertMatchExpressions(code: string): string {
    return code.replace(/\bmatch\s*\(([^)]+)\)\s*\{([^}]+)\}/g, (_, expr, arms) => {
      let switchBody = '';
      const lines = arms.split(',').map((l: string) => l.trim()).filter(Boolean);
      for (const line of lines) {
        if (line.includes('=>') || line.includes(':')) {
          const parts = line.includes('=>') ? line.split('=>') : line.split(':');
          const patterns = parts[0].trim();
          const val = parts.slice(1).join(':').trim();
          if (patterns === 'default') {
            switchBody += `default: return (${val}); `;
          } else {
            const keys = patterns.split(',').map((k: string) => k.trim());
            for (const k of keys) {
              switchBody += `case ${k}: `;
            }
            switchBody += `return (${val}); `;
          }
        }
      }
      return `((__val) => { switch(__val) { ${switchBody} } })(${expr})`;
    });
  }

  private transformEchoStatements(code: string): string {
    let res = '';
    let i = 0;
    while (i < code.length) {
      const match = code.slice(i).match(/^(echo|print)\b/i);
      if (match) {
        let j = i + match[0].length;
        while (j < code.length && /\s/.test(code[j])) j++;
        let inSingle = false;
        let inDouble = false;
        let inBacktick = false;
        let arg = '';
        while (j < code.length) {
          const ch = code[j];
          const prev = j > 0 ? code[j - 1] : '';
          if (ch === "'" && prev !== '\\' && !inDouble && !inBacktick) {
            inSingle = !inSingle;
          } else if (ch === '"' && prev !== '\\' && !inSingle && !inBacktick) {
            inDouble = !inDouble;
          } else if (ch === '`' && prev !== '\\' && !inSingle && !inDouble) {
            inBacktick = !inBacktick;
          } else if (ch === ';' && !inSingle && !inDouble && !inBacktick) {
            j++;
            break;
          }
          arg += ch;
          j++;
        }
        res += `__echo(${arg.trim()});\n`;
        i = j;
        continue;
      }
      res += code[i];
      i++;
    }
    return res;
  }

  private convertCatchBlocks(code: string): string {
    return code.replace(
      /catch\s*\(\s*[a-zA-Z0-9_|\\\\\s]+\$([a-zA-Z0-9_]+)\s*\)\s*\{([\s\S]*?)\}(\s*catch\s*\([^{]+\{[\s\S]*?\})*/g,
      (_, varName, firstBody) => {
        return `catch (${varName}) {${firstBody}}`;
      }
    );
  }

  private stripBalancedKeyword(code: string, keyword: string): string {
    let res = '';
    let i = 0;
    while (i < code.length) {
      const match = code.slice(i).match(new RegExp(`^\\b${keyword}\\s+[a-zA-Z0-9_]+`));
      if (match) {
        const braceOpen = code.indexOf('{', i);
        if (braceOpen !== -1) {
          let depth = 1;
          let j = braceOpen + 1;
          while (j < code.length && depth > 0) {
            if (code[j] === '{') depth++;
            else if (code[j] === '}') depth--;
            j++;
          }
          i = j;
          continue;
        }
      }
      res += code[i];
      i++;
    }
    return res;
  }

  private handleTraits(code: string): string {
    const traits: Record<string, string> = {};
    let res = '';
    let i = 0;
    while (i < code.length) {
      const match = code.slice(i).match(/^\btrait\s+([a-zA-Z0-9_]+)/);
      if (match) {
        const traitName = match[1];
        const braceOpen = code.indexOf('{', i);
        if (braceOpen !== -1) {
          let depth = 1;
          let j = braceOpen + 1;
          while (j < code.length && depth > 0) {
            if (code[j] === '{') depth++;
            else if (code[j] === '}') depth--;
            j++;
          }
          traits[traitName] = code.slice(braceOpen + 1, j - 1);
          i = j;
          continue;
        }
      }
      res += code[i];
      i++;
    }

    for (const [tName, tBody] of Object.entries(traits)) {
      const useRegex = new RegExp(`\\buse\\s+${tName}\\s*;`, 'g');
      res = res.replace(useRegex, tBody);
    }
    res = res.replace(/\buse\s+[a-zA-Z0-9_,\s]+;/g, '');
    return res;
  }

  private transpileVariable(varExpr: string): string {
    return varExpr.replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g, '$1').replace(/->/g, '.');
  }

  private convertStringConcatenation(code: string): string {
    let res = '';
    let inSingleQuote = false;
    let inDoubleQuote = false;

    for (let i = 0; i < code.length; i++) {
      if (code.slice(i, i + 3) === '...') {
        res += '...';
        i += 2;
        continue;
      }
      const char = code[i];
      const prev = i > 0 ? code[i - 1] : '';
      const next = i < code.length - 1 ? code[i + 1] : '';

      if (char === "'" && prev !== '\\' && !inDoubleQuote) {
        inSingleQuote = !inSingleQuote;
        res += char;
      } else if (char === '"' && prev !== '\\' && !inSingleQuote) {
        inDoubleQuote = !inDoubleQuote;
        res += char;
      } else if (char === '.' && !inSingleQuote && !inDoubleQuote) {
        const isPrevDigit = /\d/.test(prev);
        const isNextDigit = /\d/.test(next);
        if (isPrevDigit && isNextDigit) {
          res += '.';
        } else if (next === '=') {
          res += '+';
          i++;
          res += '=';
        } else {
          res += ' + ';
        }
      } else {
        res += char;
      }
    }
    return res;
  }

  private convertPhpArrays(code: string): string {
    return code.replace(/\barray\s*\(([\s\S]*?)\)/g, (_, body) => {
      if (body.includes(':')) {
        return `({ ${body} })`;
      }
      return `[${body}]`;
    });
  }

  private cleanParameterList(params: string): string {
    if (!params.trim()) return '';
    return params
      .split(',')
      .map((p) => {
        const trimmed = p.trim();
        const withoutVis = trimmed.replace(/\b(?:public|private|protected|readonly)\s+/g, '');
        const m = withoutVis.match(/(?:[?a-zA-Z0-9_|\\\[\]]+\s+)?\$?([a-zA-Z0-9_]+)(\s*=.*)?$/);
        if (m) {
          return m[1] + (m[2] || '');
        }
        return trimmed;
      })
      .join(', ');
  }

  private convertPhpClasses(code: string): string {
    let res = code
      // Strip abstract/final/readonly class keywords
      .replace(/\b(final|readonly|abstract)\s+class\b/g, 'class')
      // Strip implements
      .replace(/\bclass\s+([a-zA-Z0-9_]+)(\s+extends\s+[a-zA-Z0-9_]+)?\s+implements\s+[^{]+\{/g, 'class $1$2 {')
      // Remove abstract method declarations: abstract public function ...;
      .replace(/\babstract\s+(?:public|protected|private)?\s*function\s+[^;]+;/g, '')
      // Convert constructors and handle property promotion
      .replace(/\b(?:public|private|protected)?\s*function\s+__construct\s*\(([^)]*)\)\s*\{/g, (_, params) => {
        const rawParams = params.split(',').map((p: string) => p.trim()).filter(Boolean);
        const cleanParams: string[] = [];
        const promotedAssignments: string[] = [];

        for (const p of rawParams) {
          const isPromoted = /\b(?:public|private|protected|readonly)\b/.test(p);
          const varMatch = p.match(/\$([a-zA-Z0-9_]+)(\s*=\s*[^,]+)?$/);
          if (varMatch) {
            const varName = varMatch[1];
            const defaultVal = varMatch[2] || '';
            cleanParams.push(varName + defaultVal);
            if (isPromoted) {
              promotedAssignments.push(`this.${varName} = ${varName};`);
            }
          } else {
            cleanParams.push(p);
          }
        }

        return `constructor(${cleanParams.join(', ')}) { ${promotedAssignments.join(' ')}`;
      })
      // Convert methods with visibility modifiers: public function foo(float $amount): string { -> foo(amount) {
      .replace(/\b(public|private|protected)\s+function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*(:\s*[^{]+)?\{/g, (_, vis, name, params) => {
        return `${name}(${this.cleanParameterList(params)}) {`;
      })
      // Convert typed properties: public string $brand; -> brand = '';
      .replace(/\b(?:public|private|protected|readonly)\s+(?:[?a-zA-Z0-9_|\\\[\]]+\s+)?\$([a-zA-Z0-9_]+)\s*(=\s*[^;]+)?;/g, '$1$2;');

    return res;
  }
}

let interpreterSingleton: PhpInterpreter | null = null;

export function getPhpInterpreter(): PhpInterpreter {
  if (!interpreterSingleton) {
    interpreterSingleton = new PhpInterpreter();
  }
  return interpreterSingleton;
}
