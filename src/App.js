import React, {useEffect, useRef, useState} from "react";
import './App.css';
import WordCloudView from './WordCloudView';

const App = () => {
  const defaultTxt = "Nutanix Word Cloud Assignment";
  const [data, setData] = useState(defaultTxt);
  const txtInput = useRef();

  function onSubmit() {
    setData(txtInput?.current?.value || defaultTxt)
  }

  return (
    <div className="app">
      <div className='top-input-panel'>
        <textarea placeholder={defaultTxt} ref={txtInput} />
        <button className='submit-button' onClick={onSubmit}>Submit</button>
        <button className='button-as-link' onClick={() => setData(defaultTxt)}>Click here for default text</button>
      </div>
      <div className='panel-body'>
        <text>Nutanix Assignment</text>
        <WordCloudView data={data}/>
      </div>
    </div>
  );
}

export default App;
