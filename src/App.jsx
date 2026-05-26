import { useState, useEffect } from "react"
import {
  motion,
  AnimatePresence,
} from "framer-motion"

import Confetti from "react-confetti"

import {
  FaMusic,
  FaVolumeMute,
  FaPlay,
} from "react-icons/fa"

import { TypeAnimation } from "react-type-animation"

import toast, { Toaster } from "react-hot-toast"

import photo1 from "./assets/photo1.png"
import photo2 from "./assets/photo2.png"
import photo3 from "./assets/photo3.png"
import photo4 from "./assets/photo4.png"

export default function App() {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [page, setPage] = useState(1)
  const [journeyStep, setJourneyStep] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const [chaosMode, setChaosMode] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [showHiddenEnding, setShowHiddenEnding] = useState(false)

  const wrongReplies = [
    "Wrong answer detected 🚨",
    "Friendship revoked 😭",
    "Suspicious behavior.",
    "Try again genius.",
    "Access denied.",
    "That’s embarrassing honestly.",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () =>
      window.removeEventListener("mousemove", moveCursor)
  }, [])

  useEffect(() => {
    const hiddenTimer = setTimeout(() => {
      setShowHiddenEnding(true)
    }, 45000)

    return () => clearTimeout(hiddenTimer)
  }, [])

  useEffect(() => {
    toast("Achievement unlocked: Best Human ❤️")
  }, [])

  const checkName = () => {
    if (name === "Chinmay" || name === "chinmay") {
      setSuccess(true)
      setError("")

      toast.success("Access granted 😭")

      setTimeout(() => {
        setPage(2)
      }, 2000)
    } else {
      const random =
        wrongReplies[Math.floor(Math.random() * wrongReplies.length)]

      setError(random)

      toast.error("Incorrect human detected 🚨")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white flex-col">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-7xl mb-10"
        >
          ✨
        </motion.div>

        <TypeAnimation
          sequence={[
            "Loading friendship...",
            1500,
            "Generating happiness...",
            1500,
            "Too much chaos detected...",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-3xl font-bold text-pink-400"
        />
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen overflow-hidden flex items-center justify-center relative transition-all duration-700 ${
        chaosMode
          ? "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"
          : "bg-black"
      }`}
    >
      <Toaster />

      {/* Cursor Glow */}
      <motion.div
        animate={{
          x: cursor.x - 20,
          y: cursor.y - 20,
        }}
        className="fixed w-10 h-10 rounded-full bg-pink-500/30 blur-xl pointer-events-none z-50"
      />

      {showConfetti && <Confetti />}

      {/* Music */}
      {musicOn && (
        <audio autoPlay loop>
          <source src="/music.mp3" type="audio/mp3" />
        </audio>
      )}

      {/* Background */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
            }}
            className="absolute bg-white rounded-full"
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
        {[...Array(20)].map((_, i) => (
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
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-pink-400 text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={() => setMusicOn(!musicOn)}
        className="absolute top-5 right-5 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl text-white flex items-center gap-3"
      >
        {musicOn ? <FaMusic /> : <FaVolumeMute />}
      </button>

      <button
        onClick={() => {
          setChaosMode(!chaosMode)

          toast("CHAOS MODE ACTIVATED 😭")
        }}
        className="absolute top-5 left-5 z-50 bg-pink-500 px-5 py-3 rounded-2xl text-white"
      >
        Chaos Mode 😭
      </button>

      <AnimatePresence mode="wait">

        {/* PAGE 1 */}
        {page === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 w-[90%] max-w-md text-center shadow-2xl z-10"
          >
            {!success ? (
              <>
                <div className="text-7xl mb-6">✨</div>

                <h1 className="text-white text-4xl font-bold mb-3">
                  Who is your best friend? 😭
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
                  className="w-full bg-pink-500 hover:bg-pink-600 transition-all text-white py-4 rounded-2xl font-semibold"
                >
                  Submit
                </button>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-pink-400 mt-4"
                  >
                    {error}
                  </motion.p>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h1 className="text-5xl font-bold text-pink-400 mb-4">
                  Correct ❤️
                </h1>

                <p className="text-zinc-300">
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
            className="text-center z-10"
          >
            <motion.div
              onClick={() => setPage(3)}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-9xl cursor-pointer mb-6"
            >
              🎁
            </motion.div>

            <h1 className="text-5xl text-white font-bold">
              Tap the gift ✨
            </h1>
          </motion.div>
        )}

        {/* PAGE 3 */}
        {page === 3 && (
          <motion.div
            key="page3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center z-10 max-w-5xl px-6"
          >

            {/* CHAT */}
            {journeyStep === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md mx-auto text-left">

                  <div className="mb-4 bg-pink-500/30 p-3 rounded-2xl text-white">
                    hey 😭
                  </div>

                  <div className="mb-4 bg-white/10 p-3 rounded-2xl text-white">
                    what happened
                  </div>

                  <div className="mb-4 bg-pink-500/30 p-3 rounded-2xl text-white">
                    today is special
                  </div>

                  <div className="mb-4 bg-white/10 p-3 rounded-2xl text-white">
                    why 👀
                  </div>

                  <div className="bg-pink-500/30 p-3 rounded-2xl text-white">
                    because YOU exist ❤️
                  </div>
                </div>

                <button
                  onClick={() => setJourneyStep(2)}
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {/* VOICE NOTE */}
            {journeyStep === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-5xl font-bold text-white mb-10">
                  One more thing 🎙️
                </h1>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md mx-auto">

                  <audio controls className="w-full">
                    <source src="/voice.mp3" type="audio/mp3" />
                  </audio>

                </div>

                <button
                  onClick={() => setJourneyStep(3)}
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {/* SYSTEM ANALYSIS */}
            {journeyStep === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-5xl font-bold text-white mb-10">
                  AI Emotional Analysis 🤖
                </h1>

                <div className="space-y-6 max-w-xl mx-auto">

                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Kindness</span>
                      <span>100%</span>
                    </div>

                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className="h-full bg-pink-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Drama</span>
                      <span>94%</span>
                    </div>

                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        className="h-full bg-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Importance Level</span>
                      <span>∞</span>
                    </div>

                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>

                </div>

                <button
                  onClick={() => setJourneyStep(4)}
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {/* MEMORY WALL */}
            {journeyStep === 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-5xl font-bold text-white mb-10">
                  Memory Wall 📸
                </h1>

                <div className="grid grid-cols-2 gap-5">

                  <img
                    src={photo1}
                    className="rounded-3xl rotate-[-3deg] hover:scale-105 transition-all duration-500 shadow-2xl"
                  />

                  <img
                    src={photo2}
                    className="rounded-3xl rotate-[4deg] hover:scale-105 transition-all duration-500 shadow-2xl"
                  />

                  <img
                    src={photo3}
                    className="rounded-3xl rotate-[2deg] hover:scale-105 transition-all duration-500 shadow-2xl"
                  />

                  <img
                    src={photo4}
                    className="rounded-3xl rotate-[-4deg] hover:scale-105 transition-all duration-500 shadow-2xl"
                  />

                </div>

                <button
                  onClick={() => {
                    setJourneyStep(5)
                    setShowConfetti(true)
                  }}
                  className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-bold"
                >
                  Final Surprise →
                </button>
              </motion.div>
            )}

            {/* FINAL */}
            {journeyStep === 5 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="text-8xl mb-6 animate-bounce">
                  🎂
                </div>

                <TypeAnimation
                  sequence={[
                    "Happy Birthday Sangeeeeeetha 🎼❤️",
                    1000,
                    "You matter to me  more than you realize.",
                    1000,
                    "Thank you for existing for me✨",
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={0}
                  className="text-6xl font-bold text-white leading-tight"
                />

                <div className="mt-10 text-zinc-400 text-xl">
                  100% emotionally coded 
                </div>

                <button
                  onClick={() => {
                    setPage(1)
                    setJourneyStep(1)
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

      {/* Hidden Ending */}
      {showHiddenEnding && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-10 text-center text-pink-400"
        >
          <p className="text-2xl">
            still here? ❤️
          </p>

          <p className="text-zinc-400 mt-2">
            yeah... you really matter
          </p>
        </motion.div>
      )}
    </div>
  )
}