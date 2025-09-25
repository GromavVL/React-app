import React, { useState, useEffect} from "react";

function ClickerCounter() {
  const [clickCount, setClickCount] = useState(0);

  const hendlerClick = () => {
    setClickCount(clickCount => clickCount + 1)
  };

  useEffect(() => {
    document.title = clickCount;
  }, [clickCount]);

  useEffect(() => {
    document.body.addEventListener('click', hendlerClick);
    return () => {
        document.body.removeEventListener('click', hendlerClick)
    };
  }, [])
  return <div>{clickCount}</div>;
}

export default ClickerCounter;