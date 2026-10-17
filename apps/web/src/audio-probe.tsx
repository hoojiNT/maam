import { useState } from "react";

export function AudioProbe() {
  const [status, setStatus] = useState("idle");

  async function onStart() {
    const { resumeAudioContext } = await import("@maam/audio");
    const state = await resumeAudioContext();
    setStatus(state);
  }

  return (
    <button type="button" onClick={() => void onStart()}>
      Audio: {status}
    </button>
  );
}
