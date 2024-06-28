import React, { useState, useEffect, useRef } from 'react';

const UseRefV3: React.FC = () => {
  const [score, setScore] = useState(0);
  const prevScoreRef = useRef<number>();

  useEffect(() => {
    prevScoreRef.current = score;
  }, [score]);

  const prevScore = prevScoreRef.current;

  return (
    <div>
      <p>Current score: {score}</p>
      <p>Previous score: {prevScore}</p>

      <button onClick={() => setScore(score +(Math.floor(Math.random() * 10) ) )}>Aléatoire</button>
    </div>
  );
}

export default UseRefV3;