import React, { useEffect, useState } from 'react';

function KeywordsSelector({ allKeywords, selectedKeywords, handleKeywordSelect }) {
//     const handleClick = (word) => {
//     console.log('logging word: ', word);
//     handleKeywordSelect(word);
//   }
  
  return (
    <>
      <h3 className='keyword-selector-header'>How are you feeling?</h3>
      <div className='selector-container'>
        {allKeywords}
      </div>
    </>
  );
}

export default KeywordsSelector;