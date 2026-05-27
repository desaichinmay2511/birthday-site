import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti"
import { FaMusic, FaVolumeMute } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import toast, { Toaster } from "react-hot-toast"

import photo1 from "./assets/photo1.png"
import photo2 from "./assets/photo2.png"
import photo3 from "./assets/photo3.png"
import photo4 from "./assets/photo4.png"

export default function App() {
  const [locked, setLocked] = useState(true)
  const [password, setPassword] = useState("")
  const [passError, setPassError] = useState("")
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [page, setPage] = useState(1)
  const [journeyStep, setJourneyStep] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const [chaosMode, setChaosMode] = useState(false)
  const [showHiddenEnding, setShowHiddenEnding] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [timeUnlocked, setTimeUnlocked] = useState(false)
  const [countdown, setCountdown] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})
  const wrongReplies = [
    "Wrong answer detected 🚨",
    "Friendship revoked 😭",
    "Suspicious behavior.",
    "Try again genius.",
    "Access denied.",
    "That’s embarrassing honestly.",
  ]

  useEffect(() => {
    const moveCursor = (e) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])
  useEffect(() => {
  const unlockDate = new Date("2026-05-31T00:00:00").getTime()
  const updateCountdown = () => {
    const now = new Date().getTime()
    const diff = unlockDate - now
    if (diff <= 0) {
      setTimeUnlocked(true)
      return
    }
    setCountdown({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    })
  }
  updateCountdown()
  const interval = setInterval(updateCountdown, 1000)
  return () => clearInterval(interval)
}, [])
  useEffect(() => {
    const timer = setTimeout(() => setShowHiddenEnding(true), 45000)
    return () => clearTimeout(timer)
  }, [])

  const unlockSite = () => {
    if (password.trim().toLowerCase() === "sansar") {
      setLocked(false)
      setLoading(true)
      toast.success("Access unlocked ❤️")

      setTimeout(() => {
        setLoading(false)
        toast("Achievement unlocked: Best Human ❤️")
      }, 3500)
    } else {
      setPassError("Wrong password 😭")
      toast.error("Access denied 🚨")
    }
  }

  const checkName = () => {
    if (name.trim().toLowerCase() === "chinmay") {
      setSuccess(true)
      setError("")
      setShowHiddenEnding(false)
      toast.success("Access granted ✨")

      setTimeout(() => {
        setSuccess(false)
        setPage(2)
      }, 1500)
    } else {
      const random = wrongReplies[Math.floor(Math.random() * wrongReplies.length)]
      setError(random)
      toast.error("Incorrect human detected 🚨")
    }
  }
  if (!timeUnlocked) {

  const unlockDate = new Date("2026-05-31T00:00:00")
  const now = new Date()

  const diff = unlockDate - now

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white overflow-hidden relative">

      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl text-center z-10 max-w-lg"
      >

        <div className="text-7xl mb-6">
          🎁
        </div>

        <h1 className="text-5xl font-bold mb-6">
          Birthday Surprise Loading...
        </h1>

        <p className="text-zinc-300 mb-10 text-xl">
          Come back on May 31 at 12:00 AM ❤️
        </p>

        <div className="grid grid-cols-4 gap-4">

          <div className="bg-white/10 rounded-2xl p-4">
  <div className="text-3xl font-bold">
    {countdown.days}
  </div>

  <div className="text-zinc-400">
    Days
  </div>
</div>

          <div className="bg-white/10 rounded-2xl p-4">
  <div className="text-3xl font-bold">
    {countdown.hours}
  </div>

  <div className="text-zinc-400">
    Minutes
  </div>
</div>

          <div className="bg-white/10 rounded-2xl p-4">
  <div className="text-3xl font-bold">
    {countdown.minutes}
  </div>

  <div className="text-zinc-400">
    Hours
  </div>
</div>

          <div className="bg-white/10 rounded-2xl p-4">
  <div className="text-3xl font-bold">
    {countdown.seconds}
  </div>

  <div className="text-zinc-400">
    Seconds
  </div>
</div>

        </div>

        <div className="mt-10 text-pink-400 animate-pulse">
          Something emotional is being prepared ✨
        </div>

      </motion.div>

    </div>
  )
}
  if (locked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
        <Toaster />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[90%] max-w-md text-center z-10"
        >
          <div className="text-6xl mb-6">🔐</div>

          <h1 className="text-white text-4xl font-bold mb-4">
            Enter Password
          </h1>

          <p className="text-zinc-300 mb-6">
            Hint: It’s the name of her home 🏡
          </p>

          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") unlockSite()
            }}
            placeholder="Enter password..."
            className="w-full p-4 rounded-2xl bg-black/40 border border-pink-500/30 text-white outline-none mb-4"
          />

          <button
            onClick={unlockSite}
            className="w-full bg-pink-500 hover:bg-pink-600 transition-all text-white py-4 rounded-2xl font-semibold"
          >
            Unlock
          </button>

          {passError && (
            <p className="text-pink-400 mt-4">{passError}</p>
          )}

          <button
            onClick={() => toast("💡 Think about her home 🏡")}
            className="mt-5 text-zinc-400 underline"
          >
            Need another hint?
          </button>
        </motion.div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white flex-col">
        <Toaster />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="text-7xl mb-10"
        >
          ✨
        </motion.div>

        <TypeAnimation
          sequence={[
            "Loading friendship...",
            1000,
            "Generating happiness...",
            1000,
            "Too much chaos detected...",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-3xl font-bold text-pink-400 text-center px-4"
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

      <motion.div
        animate={{ x: cursor.x - 20, y: cursor.y - 20 }}
        className="fixed w-10 h-10 rounded-full bg-pink-500/30 blur-xl pointer-events-none z-50"
      />

      {showConfetti && <Confetti />}

      {musicOn && (
        <audio autoPlay loop>
          <source src="/music.mp3" type="audio/mp3" />
        </audio>
      )}

      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
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

      <button
        onClick={() => setMusicOn(!musicOn)}
        className="absolute top-5 right-5 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl text-white"
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
        Chaos Mode
      </button>

      <AnimatePresence mode="wait">
        {page === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 w-[90%] max-w-md text-center shadow-2xl z-10"
          >
            {!success ? (
              <>
                <div className="text-7xl mb-6">✨</div>

                <h1 className="text-white text-4xl font-bold mb-3">
                  Who is your best friend? 😭
                </h1>

                <p className="text-zinc-300 mb-8">Choose wisely.</p>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") checkName()
                  }}
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
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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

        {page === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center z-10 px-6"
          >
            <motion.div
              onClick={() => setPage(3)}
              animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-9xl cursor-pointer mb-6"
            >
              🎁
            </motion.div>

            <h1 className="text-5xl text-white font-bold">Tap the gift ✨</h1>
          </motion.div>
        )}

        {page === 3 && (
          <motion.div
            key="page3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center z-10 max-w-5xl px-6"
          >
            {journeyStep === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md mx-auto text-left">
                  <div className="mb-4 bg-pink-500/30 p-3 rounded-2xl text-white">
                    hey
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

            {journeyStep === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-5xl font-bold text-white mb-10">
                  AI Emotional Analysis 🤖
                </h1>

                <div className="space-y-6 max-w-xl mx-auto">
                  {[
                    ["Kindness", "100%", "bg-pink-500"],
                    ["Drama", "94%", "bg-purple-500"],
                    ["Importance Level", "100%", "bg-blue-500"],
                  ].map(([label, value, color]) => (
                    <div key={label}>
                      <div className="flex justify-between text-white mb-2">
                        <span>{label}</span>
                        <span>{label === "Importance Level" ? "∞" : value}</span>
                      </div>
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: value }}
                          className={`h-full ${color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setJourneyStep(4)}
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {journeyStep === 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-5xl font-bold text-white mb-10">
                  Memory Wall 📸
                </h1>

                <div className="grid grid-cols-2 gap-5">
                  {[photo1, photo2, photo3, photo4].map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      className="rounded-3xl h-44 w-full object-cover object-center hover:scale-105 transition-all duration-500 shadow-2xl"
                    />
                  ))}
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

            {journeyStep === 5 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="text-8xl mb-6 animate-bounce">🎂</div>

                <TypeAnimation
                  sequence={[
                    "Happy Birthday Sangeeeeeetha 🎼❤️",
                    1000,
                    "You matter to me more than you realize.",
                    1000,
                    "Thank you for existing for me ✨",
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={0}
                  className="text-5xl md:text-6xl font-bold text-white leading-tight"
                />

                <div className="mt-10 text-zinc-400 text-xl">
                  100% emotionally coded
                </div>

                <button
                   onClick={() => {
                  setJourneyStep(6)
                   setShowConfetti(false)
                   }}
                   className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white font-bold"
                  >
                   One last question →
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
        {journeyStep === 6 && (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="relative min-h-[500px] flex flex-col items-center justify-center"
  >
    <div className="text-7xl mb-6">🤭</div>

    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Did you like this website?
    </h1>

    <p className="text-zinc-400 text-xl mb-10">
      Answer honestly... but carefully 😭
    </p>

    <div className="relative w-full max-w-md h-48">
      <button
        onClick={() => {
          toast.success("Correct answer obviously 😌❤️")
          setShowConfetti(true)
        }}
        className="absolute left-8 top-16 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-pink-500/30"
      >
        Yes, obviously 😌❤️
      </button>

      <motion.button
        animate={{
          x: noButtonPos.x,
          y: noButtonPos.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        onMouseEnter={() => {
          setNoButtonPos({
            x: Math.random() * 260 - 130,
            y: Math.random() * 160 - 80,
          })
          toast("No option is temporarily unavailable 😭")
        }}
        onTouchStart={() => {
          setNoButtonPos({
            x: Math.random() * 260 - 130,
            y: Math.random() * 160 - 80,
          })
          toast("Nice try 😭")
        }}
        className="absolute right-8 top-16 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold"
      >
        No, very bad 😭
      </motion.button>
    </div>

    <button
      onClick={() => {
        setPage(1)
        setJourneyStep(1)
        setSuccess(false)
        setName("")
        setError("")
        setShowConfetti(false)
        setShowHiddenEnding(false)
        setNoButtonPos({ x: 0, y: 0 })
      }}
      className="mt-8 border border-white/20 px-8 py-4 rounded-2xl text-white"
    >
      Replay the chaos ✨
    </button>
  </motion.div>
)}
      </AnimatePresence>

      {showHiddenEnding && page === 3 && journeyStep === 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-10 text-center text-pink-400"
        >
          <p className="text-2xl">still here? ❤️</p>
          <p className="text-zinc-400 mt-2">yeah... you really matter</p>
        </motion.div>
      )}
    </div>
  )
}