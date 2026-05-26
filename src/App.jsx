import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti"
import { FaMusic, FaVolumeMute } from "react-icons/fa"
import photo1 from "./assets/photo1.png"
import photo2 from "./assets/photo2.png"
import photo3 from "./assets/photo3.png"
import photo4 from "./assets/photo4.png"
export default function App() {
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [page, setPage] = useState(1)
  const [journeyStep, setJourneyStep] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const [chaosMode, setChaosMode] = useState(false)

  const wrongReplies = [
    "Wrong answer detected 🚨",
    "Friendship revoked 😭",
    "Suspicious behavior.",
    "Try again genius.",
    "Access denied.",
    "That’s embarrassing honestly.",
  ]

  const checkName = () => {
    if (name === "Chinmay" || name === "chinmay") {
      setSuccess(true)
      setError("")

      setTimeout(() => {
        setPage(2)
      }, 2000)
    } else {
      const random =
        wrongReplies[Math.floor(Math.random() * wrongReplies.length)]

      setError(random)
    }
  }

  return (
    <div
      className={`min-h-screen overflow-hidden flex items-center justify-center relative transition-all duration-700 ${
        chaosMode
          ? "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"
          : "bg-black"
      }`}
    >
      {showConfetti && <Confetti />}

      {/* Music */}
      {musicOn && (
        <audio autoPlay loop>
          <source src="/music.mp3" type="audio/mp3" />
        </audio>
      )}

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + "px",
              height: Math.random() * 4 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              opacity: 0,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-pink-400 text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Music Toggle */}
      <button
        onClick={() => setMusicOn(!musicOn)}
        className="absolute top-5 right-5 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl text-white flex items-center gap-3"
      >
        {musicOn ? <FaMusic /> : <FaVolumeMute />}
        {musicOn ? "Music On" : "Music Off"}
      </button>

      {/* Chaos Mode */}
      <button
        onClick={() => setChaosMode(!chaosMode)}
        className="absolute top-5 left-5 z-50 bg-pink-500 px-5 py-3 rounded-2xl text-white"
      >
        Chaos Mode 😭
      </button>

      <AnimatePresence mode="wait">

        {/* PAGE 1 */}
        {page === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 w-[90%] max-w-md text-center shadow-2xl z-10"
          >
            {!success ? (
              <>
                <div className="text-6xl mb-4">✨</div>

                <h1 className="text-white text-4xl font-bold mb-3">
                  Who is your best friend? 
                </h1>

                <p className="text-zinc-300 mb-8">
                  Choose wisely.
                </p>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name..."
                  className="w-full p-4 rounded-2xl bg-black/40 border border-pink-500/30 text-white outline-none mb-4"
                />

                <button
                  onClick={checkName}
                  className="w-full bg-pink-500 hover:bg-pink-600 transition-all text-white py-4 rounded-2xl font-semibold shadow-lg shadow-pink-500/30"
                >
                  Submit
                </button>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-pink-400 mt-4"
                  >
                    {error}
                  </motion.p>
                )}

                <p className="text-zinc-500 text-sm mt-6">
                  professionally handmade with overthinking
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h1 className="text-5xl font-bold text-pink-400 mb-4">
                  Correct ❤️
                </h1>

                <p className="text-zinc-300 text-lg">
                  Access granted to birthday chaos ✨
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* PAGE 2 */}
        {page === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center z-10"
          >
            <motion.div
              onClick={() => setPage(3)}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-9xl mb-6 cursor-pointer"
            >
              🎁
            </motion.div>

            <h1 className="text-5xl font-bold text-white mb-4">
              Someone left you
              <span className="text-pink-400"> something special</span>
            </h1>

            <p className="text-zinc-400 text-lg">
              Tap the gift ✨
            </p>

            <div className="mt-10 text-zinc-500 animate-pulse">
              Loading birthday chaos...
            </div>
          </motion.div>
        )}

        {/* PAGE 3 */}
        {page === 3 && (
          <motion.div
            key="page3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center z-10 px-6 max-w-3xl"
          >

            {journeyStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-7xl mb-6">🌙</div>

                <h1 className="text-6xl font-bold text-white mb-6">
                  Hey you... ✨
                </h1>

                <button
                  onClick={() => setJourneyStep(2)}
                  className="bg-pink-500 px-8 py-4 rounded-2xl text-white"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {journeyStep === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h1 className="text-5xl font-bold text-white mb-6">
                  Today isn’t just another day.
                </h1>

                <p className="text-zinc-400 text-xl mb-8">
                  Because someone really special was born today ❤️
                </p>

                <button
                  onClick={() => setJourneyStep(3)}
                  className="bg-pink-500 px-8 py-4 rounded-2xl text-white"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {journeyStep === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <img
  src={photo1}
  className="rounded-3xl h-40 w-full object-contain bg-white/10 scale-110"
/>

<img
  src={photo2}
  className="rounded-3xl h-40 w-full object-contain bg-white/10"
/>

<img
  src={photo3}
  className="rounded-3xl h-40 w-full object-cover"
/>

<img
  src={photo4}
  className="rounded-3xl h-40 w-full object-contain bg-white/10"
/>
                </div>

                <h1 className="text-5xl font-bold text-pink-400 mb-4">
                  Some people make life lighter
                </h1>

                <p className="text-zinc-300 text-xl mb-8">
                  just by existing ✨
                </p>

                <button
                  onClick={() => setJourneyStep(4)}
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold"
                >
                  One more thing →
                </button>
              </motion.div>
            )}

            {journeyStep === 4 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="text-7xl mb-6 animate-bounce">
                  🎂
                </div>

                <h1 className="text-7xl font-bold text-white mb-6">
                  Happy Birthday ❤️
                </h1>

                <p className="text-zinc-300 text-2xl max-w-xl mx-auto mb-8">
                  Thank you for being part of my life.
                </p>

                <button
                  onClick={() => setShowConfetti(true)}
                  className="bg-pink-500 px-8 py-4 rounded-2xl text-white"
                >
                  Celebrate 🎉
                </button>

                <div className="mt-10 text-zinc-500">
                  100% emotionally coded 😭
                </div>

                <div className="mt-4 text-pink-400 animate-pulse">
                  You deserve the world ✨
                </div>

                <button
                  onClick={() => {
                    setJourneyStep(1)
                    setPage(1)
                    setSuccess(false)
                    setName("")
                    setShowConfetti(false)
                  }}
                  className="mt-10 border border-white/20 px-8 py-4 rounded-2xl text-white"
                >
                  Replay the chaos ✨
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}