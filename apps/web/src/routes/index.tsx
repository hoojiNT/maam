import { createFileRoute } from "@tanstack/react-router";
import { midiToNoteName } from "@maam/music-core";
import { AudioProbe } from "../audio-probe";

const DEMO_MIDI = 60;

export const Route = createFileRoute("/")({
  loader: () => ({
    midi: DEMO_MIDI,
    noteName: midiToNoteName(DEMO_MIDI),
  }),
  component: Home,
});

function Home() {
  const { midi, noteName } = Route.useLoaderData();

  return (
    <main>
      <h1>Mã Âm</h1>
      <p>
        MIDI {midi} → {noteName}
      </p>
      <AudioProbe />
    </main>
  );
}
