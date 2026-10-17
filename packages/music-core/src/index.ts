import type { MidiNote, NoteName } from "@maam/types";

const NOTE_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const satisfies readonly NoteName[];

export function midiToNoteName(midi: MidiNote): NoteName {
  const index = ((Math.trunc(midi) % 12) + 12) % 12;
  return NOTE_NAMES[index] ?? "C";
}
