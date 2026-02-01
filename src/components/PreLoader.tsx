import { useEffect, useState } from 'react';

const PreLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div
            className="absolute inset-0 flex items-center justify-center animate-pulse"
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          >
            <div className="bg-[#f5f5f0] p-4 rounded-2xl shadow-2xl">
              <img
                src="/Uni-logo2.png"
                alt="Universal Affordable Housing"
                className="w-48 h-auto"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))',
                }}
              />
            </div>
          </div>

          <div className="absolute inset-0 animate-spin-slow">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
                strokeDasharray="565"
                strokeDashoffset={565 - (progress * 5.65)}
                className="transition-all duration-300"
                opacity="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#50C878"
                strokeWidth="2"
                strokeDasharray="502"
                strokeDashoffset={502 - (progress * 5.02)}
                className="transition-all duration-300"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        <div
          className="text-2xl font-serif text-[#FFD700] mb-4 transition-opacity duration-500"
          style={{ opacity: progress > 50 ? 1 : 0 }}
        >
          Universal Affordable Housing
        </div>

        <div
          className="text-sm text-gray-400 transition-opacity duration-500"
          style={{ opacity: progress > 70 ? 1 : 0 }}
        >
          Building Dreams, Defining Futures
        </div>

        <div className="w-64 h-1 mx-auto mt-8 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FFD700] via-[#50C878] to-[#0F52BA] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
