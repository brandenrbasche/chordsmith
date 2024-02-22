import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const Synth = ({ selectedKey }) => {
  const synth = new Tone.MembraneSynth().toDestination();
  const synthTypes = ['DuoSynth', 'MonoSynth', 'PolySynth', 'FMSynth', 'AMSynth', 'MetalSynth', 'NoiseSynth', 'PluckSynth', 'MembraneSynth'];
  const synthTiles = [];
  const [playing, setPlaying] = useState(false);
  const [playbackTextClass, setPlaybackTextClass] = useState('playback-text-enabled');
  const [speed, setSpeed] = useState(768);
  const [reverb, setReverb] = useState(false);
  const [synthType, setSynthType] = useState('MembraneSynth');

  const notes = selectedKey.notes;
  const octaves = [1, 2, 3, 4, 5, 6];
  const patternVariations = [
    'up',
    'down',
    'upDown',
    'downUp',
    'alternateUp',
    'alternateDown',
    'random',
    'randomWalk',
    'randomOnce'
  ];

  const randomPatternIndex = Math.floor(Math.random() * 8);

  const notesArr = notes.split(', ').map(note => {
    const random = Math.floor(Math.random() * 5);
    return note + octaves[random];
  });

  const synthPattern = new Tone.Pattern(function(time, note) {
    synth.triggerAttackRelease(note, '32n', time);
  }, notesArr, patternVariations[randomPatternIndex]);

  // Initialize Transport properties:
  Tone.Transport.bpm.value = 140;
  Tone.Transport.Time = '1n';
  Tone.Transport.PPQ = speed;
  Tone.Loop.interval = '32n';

  useEffect(() => {
    synthPattern.start();
    Tone.Transport.start();
    setPlaying(true);
  }, []);

  const handleRange = (e) => {
    console.log('speed changed');
    Tone.Transport.stop();
    setSpeed(e.target.value);
    Tone.Transport.PPQ = speed;
    Tone.Transport.start();
  };

  const handlePauseClick = () => {
    if (playing) {
      setPlaying(false);
      setPlaybackTextClass('playback-text-disabled');
      Tone.Transport.pause();
    } else {
      setPlaying(true);
      setPlaybackTextClass('playback-text-enabled');
      Tone.Transport.start();
    }
  };

  const toggleReverb = () => {
    console.log('toggle reverb hit');
    setReverb(true);
    synth.connect(reverbFx).toDestination();
  };

  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 100],
    ['white', 'black']
  );

  return (
    <div className='synth-container'>
      <div className="music-details">
        <h1 className='details-header'>{selectedKey.emotions}</h1>
        <p className='key-text'>Musical key: {selectedKey.name}</p>
      </div>

      <div className="synth-controls">
        <motion.div whileHover={{scale: 1.1}} transition={{type: 'spring', stiffness: 400, damping: 10 }} className='playback-container' onClick={() => handlePauseClick()}>
          {
            playing
              ? <svg className='pause-btn playback-btn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
              : <svg className='play-btn playback-btn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          }
          <p className={playbackTextClass}>{playing ? 'Playing' : 'Paused'}</p>
        </motion.div>

        <div className="speed-range-container">
          <label htmlFor='speed'>Speed: </label>
          <motion.input style={{x}} whileHover={{scale: 1.1}} className='speed-slider'  id='speed' type='range' min='100' max='2000' value={speed} onChange={((e) => handleRange(e))} />
        </div>
      </div>
    </div>
    
  );
};
