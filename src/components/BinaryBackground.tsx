'use client';
import { useEffect, useState } from 'react';

export default function BinaryBackground() {
  const [digits, setDigits] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const digitElements: JSX.Element[] = [];
    for (let i = 0; i < 150; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 4 + Math.random() * 4;

      digitElements.push(
        <span
          key={i}
          className="binary-digit"
          style={{
            left: `${left}vw`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          {Math.round(Math.random())}
        </span>
      );
    }
    setDigits(digitElements);
  }, []);

  return <div className="binary-background z-0">{digits}</div>;
}
