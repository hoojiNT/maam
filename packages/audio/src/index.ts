/**
 * Client-only. Import from a browser event handler or useEffect.
 * Tone.js needs the Web Audio API and must not load during SSR.
 */
import type { MidiNote } from "@maam/types";
import * as Tone from "tone";

export async function resumeAudioContext(): Promise<string> {
  await Tone.start();
  return Tone.getContext().state;
}

export async function playMidiNote(midi: MidiNote): Promise<void> {
  await Tone.start();
  const synth = new Tone.Synth().toDestination();
  const frequency = 440 * 2 ** ((midi - 69) / 12);
  synth.triggerAttackRelease(frequency, "8n");
}
