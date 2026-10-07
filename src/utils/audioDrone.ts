// Web Audio API ambient drone synthesizer for brutalist architectural atmosphere

class ArchitecturalAtmosphere {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private subOsc: OscillatorNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private isPlaying = false;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Master output gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      // Gentle fade-in over 3 seconds
      this.masterGain.gain.exponentialRampToValueAtTime(0.18, now + 3);
      this.masterGain.connect(this.ctx.destination);

      // Low-pass filter simulating monumental concrete reverberation
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(140, now);
      this.filterNode.Q.setValueAtTime(2.5, now);
      this.filterNode.connect(this.masterGain);

      // Sub drone (Fundamental ~ 43.65 Hz - F1 deep resonance)
      this.subOsc = this.ctx.createOscillator();
      this.subOsc.type = 'sine';
      this.subOsc.frequency.setValueAtTime(43.65, now);

      const subGain = this.ctx.createGain();
      subGain.gain.setValueAtTime(0.6, now);
      this.subOsc.connect(subGain);
      subGain.connect(this.filterNode);

      // Deep harmonic drone (C2 ~ 65.4 Hz)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'triangle';
      this.osc1.frequency.setValueAtTime(65.4, now);

      const osc1Gain = this.ctx.createGain();
      osc1Gain.gain.setValueAtTime(0.3, now);
      this.osc1.connect(osc1Gain);
      osc1Gain.connect(this.filterNode);

      // Detuned harmonic drone (C2 + 1.2 Hz subtle binaural beating)
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(66.6, now);

      const osc2Gain = this.ctx.createGain();
      osc2Gain.gain.setValueAtTime(0.2, now);
      this.osc2.connect(osc2Gain);
      osc2Gain.connect(this.filterNode);

      // Subtle atmospheric noise buffer (concrete room air)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.05;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(220, now);
      noiseFilter.Q.setValueAtTime(4.0, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.1, now);

      this.noiseNode.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      this.subOsc.start(now);
      this.osc1.start(now);
      this.osc2.start(now);
      this.noiseNode.start(now);

      this.isPlaying = true;
    } catch (e) {
      console.warn('Audio ambient initialization deferred', e);
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.isPlaying || !this.masterGain) return;

    const now = this.ctx.currentTime;
    try {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

      setTimeout(() => {
        try {
          this.subOsc?.stop();
          this.osc1?.stop();
          this.osc2?.stop();
          this.noiseNode?.stop();
          this.subOsc?.disconnect();
          this.osc1?.disconnect();
          this.osc2?.disconnect();
          this.noiseNode?.disconnect();
          this.masterGain?.disconnect();
        } catch {
          // ignore cleanup errors
        }
        this.isPlaying = false;
      }, 1600);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const ambientDrone = new ArchitecturalAtmosphere();
