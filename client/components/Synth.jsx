import React, { useEffect } from 'react';
import * as Tone from 'tone';

export const Synth = ({ selectedKey }) => {
  const synth = new Tone.Synth().toDestination();
  const notes = selectedKey.notes;
//   const notesArr = notes.split(', ');
  console.log('notes: ', notes);


  const playNote = (note, duration = '8n') => {
    synth.triggerAttackRelease(note, duration);
  };

  Tone.Transport.start();

  return (
    <div className='synth-container'>
        synth works!
    </div>
  )
}
