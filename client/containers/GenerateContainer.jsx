import React, { useState, useEffect } from 'react';
import KeywordsSelector from '../components/KeywordsSelector.jsx';
import { Synth } from '../components/Synth.jsx';
import { motion, transform } from 'framer-motion';

export default function GenerateContainer() {
  const [selectedKeywords, setSelectedKeywords] = useState('');
  const [allKeywords, setAllKeywords] = useState([]);
  const [selectedKey, setSelectedKey] = useState({});
  const [showSynth, setShowSynth] = useState(false);
  const keywords = [];

  const getAllKeywords = async () => {
    fetch('../generate/keywords', { method: 'GET' })
      .then(res =>  res.json())
      .then(data => {
        data.forEach(word => {
          keywords.push(<motion.div 
            whileHover={{scale: .97, color: '#32FF17'}} 
            transition={{type: 'spring', stiffness: 400, damping: 20}} 
            key={word} className={'word-cell'} 
            onClick={() => handleKeywordSelect(word)}>
            {word}
          </motion.div>);
        });
        setAllKeywords(keywords);
      })
      .catch(err => {
        console.error('There was an error fetching keyword data: ', err);
      });
  };

  const handleKeywordSelect = (words) => {
    const body = {
      emotions: words
    };

    fetch('../generate/keywords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        setSelectedKey(data[0]);
        setShowSynth(true);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getAllKeywords();
  }, []);

  return (
    <div className='generate-container'>
      {
        (!showSynth) ? 
          <KeywordsSelector 
            allKeywords={allKeywords}
            selectedKeywords={selectedKeywords}
            setSelectedKeywords={setSelectedKeywords}
            handleKeywordSelect={handleKeywordSelect}
          />
          : <Synth selectedKey={selectedKey} />
      }
    </div>
  );
}
