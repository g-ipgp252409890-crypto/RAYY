// Audio engine using the user's provided voice recordings:
// Success: "Ye! Anda berjaya!" (/assets/aistudio/WhatsApp_Audio_2026-11-01_at_10.42.30_AM_b1eeebea.ogg)
// Wrong: "Cuba lagi." (/assets/aistudio/WhatsApp_Audio_2026-11-01_at_10.42.30_AM__1__6cd172ef.ogg)

export const SUCCESS_AUDIO_PATH = '/assets/aistudio/WhatsApp_Audio_2026-11-01_at_10.42.30_AM_b1eeebea.ogg';
export const WRONG_AUDIO_PATH = '/assets/aistudio/WhatsApp_Audio_2026-11-01_at_10.42.30_AM__1__6cd172ef.ogg';

// Audio instance caches for instant responsive playback
let successAudio: HTMLAudioElement | null = null;
let wrongAudio: HTMLAudioElement | null = null;

function getSuccessAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;
  if (!successAudio) {
    successAudio = new Audio(SUCCESS_AUDIO_PATH);
    successAudio.preload = 'auto';
  }
  return successAudio;
}

function getWrongAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;
  if (!wrongAudio) {
    wrongAudio = new Audio(WRONG_AUDIO_PATH);
    wrongAudio.preload = 'auto';
  }
  return wrongAudio;
}

// Web Audio API Synth for complimentary Arcade / Sparkle Sound Effects
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioCtx) {
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play cheerful victory chime sound effect (C5 -> E5 -> G5 -> C6)
 */
export function playChimeCorrect() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const startTime = ctx.currentTime;

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime + i * 0.08);

      gain.gain.setValueAtTime(0.001, startTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.18, startTime + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + i * 0.08 + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime + i * 0.08);
      osc.stop(startTime + i * 0.08 + 0.3);
    });
  } catch (err) {
    console.debug('Audio synth error:', err);
  }
}

/**
 * Play gentle bounce sound effect for wrong answer
 */
export function playChimeWrong() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const startTime = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(360, startTime);
    osc.frequency.exponentialRampToValueAtTime(220, startTime + 0.25);

    gain.gain.setValueAtTime(0.18, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.36);
  } catch (err) {
    console.debug('Audio synth error:', err);
  }
}

// Global listener for UI notification toast
export interface KidVoiceEventDetail {
  type: 'correct' | 'wrong';
  text: string;
}

type KidVoiceListener = (detail: KidVoiceEventDetail) => void;
const listeners: Set<KidVoiceListener> = new Set();

export function onKidVoiceEvent(listener: KidVoiceListener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notifyListeners(detail: KidVoiceEventDetail) {
  listeners.forEach((fn) => fn(detail));
}

/**
 * Play user's provided voice: "Ye! Anda berjaya!" + celebratory chime sound effect
 */
export function playKidVoiceCorrect() {
  // 1. Play sound effect
  playChimeCorrect();

  // 2. Play exact user-provided audio recording
  try {
    const audio = getSuccessAudio();
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((err) => {
        console.debug('Audio playback error (handled):', err);
      });
    }
  } catch (e) {
    console.debug('Audio error:', e);
  }

  // 3. Notify visual banner
  notifyListeners({
    type: 'correct',
    text: 'Ye! Anda berjaya!',
  });
}

/**
 * Play user's provided voice: "Cuba lagi." + gentle bounce sound effect
 */
export function playKidVoiceWrong() {
  // 1. Play sound effect
  playChimeWrong();

  // 2. Play exact user-provided audio recording
  try {
    const audio = getWrongAudio();
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((err) => {
        console.debug('Audio playback error (handled):', err);
      });
    }
  } catch (e) {
    console.debug('Audio error:', e);
  }

  // 3. Notify visual banner
  notifyListeners({
    type: 'wrong',
    text: 'Cuba lagi.',
  });
}
