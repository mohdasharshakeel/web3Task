// src/App.jsx
import AnimatedLine from './components/AnimatedLine';
import { useLineAnimation } from './hooks/useLineAnimation';
import TextAnimate from './customs/Text';

function App() {
  const { isPaused, handleStart, handleStop } = useLineAnimation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 px-4 bg-[#f5f5f7] text-gray-900 text-center relative">

      {/* 🪄 Top Staggered Text */}
      <TextAnimate />

      {/* ⬇️ Extra spacer before the animated line */}
      <div className="h-40" /> {/* 👈🏽 160px space */}

      {/* 🎬 Animated Line */}
      <AnimatedLine isPaused={isPaused} />

      {/* 🎮 Control Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-20 z-50">
        <button
          onClick={handleStart}
          className="px-6 py-3 border border-gray-700 bg-black hover:bg-gray-800 rounded-xl text-lg font-semibold transition 
                     text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          Start Animation
        </button>
        <button
          onClick={handleStop}
          className="px-6 py-3 border border-gray-700 bg-gray-300 hover:bg-gray-400 rounded-xl text-lg font-semibold transition 
                     text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          Stop Animation
        </button>
      </div>
    </div>
  );
}

export default App;
