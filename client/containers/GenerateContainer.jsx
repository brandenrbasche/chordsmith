import React, { useState, useEffect } from 'react';
import KeywordsSelector from '../components/KeywordsSelector.jsx';
import { Synth } from '../components/Synth.jsx';

export default function GenerateContainer() {
  const [selectedKeywords, setSelectedKeywords] = useState('');
  const [allKeywords, setAllKeywords] = useState([]);
  const [selectedKey, setSelectedKey] = useState({});
  const keywords = [];

  const getAllKeywords = async () => {
    fetch('../generate/keywords', { method: 'GET' })
      .then(res =>  res.json())
      .then(data => {
        data.forEach(word => {
          keywords.push(<div key={word} className={'word-cell'} onClick={() => handleKeywordSelect(word)}>{word}</div>);
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
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getAllKeywords();
  }, []);

  return (
    <div className='generate-container'>
      <KeywordsSelector 
        allKeywords={allKeywords}
        selectedKeywords={selectedKeywords}
        setSelectedKeywords={setSelectedKeywords}
        handleKeywordSelect={handleKeywordSelect}
      />
      {
        (selectedKey) ? <Synth selectedKey={selectedKey} /> : <></>
      }
    </div>
  );
}
