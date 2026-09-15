import { CodeExecutionResult } from '../types';
import { getPhpInterpreter } from './phpInterpreter';

export type EngineStatus = 'uninitialized' | 'initializing' | 'ready' | 'error';

let currentStatus: EngineStatus = 'ready';
let statusMessage: string = 'PHP 8.2 (ইঞ্জিন সক্রিয়)';
const statusListeners = new Set<(status: EngineStatus, message?: string) => void>();

export function subscribeEngineStatus(callback: (status: EngineStatus, message?: string) => void) {
  statusListeners.add(callback);
  callback(currentStatus, statusMessage);
  return () => {
    statusListeners.delete(callback);
  };
}

export function updateStatus(status: EngineStatus, message?: string) {
  currentStatus = status;
  statusMessage = message || (status === 'ready' ? 'PHP 8.2 (ইঞ্জিন সক্রিয়)' : '');
  statusListeners.forEach((cb) => cb(status, statusMessage));
}

export async function runPhpCode(code: string): Promise<CodeExecutionResult> {
  const startTime = performance.now();

  try {
    const interpreter = getPhpInterpreter();
    const result = interpreter.run(code);
    const durationMs = Math.round(performance.now() - startTime);

    const stdout = (result.stdout || '').trim();
    const stderr = (result.stderr || '').trim();
    const exitCode = result.exitCode ?? 0;

    return {
      stdout: stdout || (exitCode === 0 ? '(কোনো টেক্সট আউটপুট তৈরি হয়নি, এক্সিকিউশন সফল)' : ''),
      stderr: stderr,
      exitCode,
      durationMs,
      renderedHtml: stdout || '',
      isError: exitCode !== 0 || !!stderr,
    };
  } catch (err: any) {
    const durationMs = Math.round(performance.now() - startTime);
    const errorMsg = `PHP Fatal error: ${err?.message || 'Unknown error'}`;

    return {
      stdout: '',
      stderr: errorMsg,
      exitCode: 1,
      durationMs,
      renderedHtml: `<div style="color: #ef4444; font-family: monospace; padding: 12px; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px;">${errorMsg}</div>`,
      isError: true,
    };
  }
}

