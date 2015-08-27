import localForage from "localforage";
import React from "react";
import Tone from "tone";

const time = 1;

const synth = new Tone.PolySynth().toMaster();
synth.triggerAttack(["C4"]);
synth.triggerRelease(["C4"], 1);

let notes = [
{
  type: "attack",
  notes: ["C4"]
},
{
  type: "release",
  notes: ["C4"],
  duration: 1
}
];
