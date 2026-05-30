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

  const [complimentIndex, setComplimentIndex] = useState(0)
  const [showIncomingCall, setShowIncomingCall] = useState(false)
  const [heartPos, setHeartPos] = useState({ x: 40, y: 40 })
  const [heartCaught, setHeartCaught] = useState(false)

  const wrongReplies = [
    "Wrong answer detected 🚨",
    "Friendship revoked 😭",
    "Suspicious behavior.",
    "Try again genius.",
    "Access denied.",
    "That’s embarrassing honestly.",
  ]

  const compliments = [
    "You are illegally adorable.",
    "You make bad days easier.",
    "Main character energy detected.",
    "Your existence deserves a standing ovation.",
    "Certified comfort person.",
    "Too precious for this planet.",
    "Limited edition human.",
    "You are basically emotional WiFi.",
  ]

  const stats = [
    ["Laughs Shared", "999+"],
    ["Roasts Survived", "500+"],
    ["Random Memories", "∞"],
    ["Drama Level", "Iconic"],
    ["Importance Level", "♾️"],
  ]

  const moveHeart = () => {
    setHeartPos({
      x: Math.random() * 75,
      y: Math.random() * 65,
    })
  }

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

  const resetEverything = () => {
    setPage(1)
    setJourneyStep(1)
    setSuccess(false)
    setName("")
    setError("")
    setShowConfetti(false)
    setShowHiddenEnding(false)
    setNoButtonPos({ x: 0, y: 0 })
    setHeartCaught(false)
    setShowIncomingCall(false)
    setComplimentIndex(0)
  }

  if (!timeUnlocked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white overflow-hidden relative px-4">
        <Toaster />

        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-16 right-10 text-7xl drop-shadow-[0_0_40px_rgba(255,255,255,0.6)]"
        >
          🌙
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-10 rounded-3xl text-center z-10 max-w-lg shadow-2xl"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-7xl mb-6"
          >
            🎁
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Birthday Surprise Loading...
          </h1>

          <p className="text-zinc-300 mb-10 text-xl">
            Come back on May 31 at 12:00 AM ❤️
          </p>

          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {[
              ["Days", countdown.days],
              ["Hours", countdown.hours],
              ["Minutes", countdown.minutes],
              ["Seconds", countdown.seconds],
            ].map(([label, value]) => (
              <div key={label} className="bg-white/10 rounded-2xl p-3 md:p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold">{value}</div>
                <div className="text-zinc-400 text-xs md:text-sm">{label}</div>
              </div>
            ))}
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
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative px-4">
        <Toaster />

        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-12 right-8 text-7xl"
        >
          🌙
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[90%] max-w-md text-center z-10 shadow-2xl shadow-pink-500/20"
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
            className="w-full bg-pink-500 hover:bg-pink-600 transition-all text-white py-4 rounded-2xl font-semibold shadow-lg shadow-pink-500/30"
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
      <div className="min-h-screen bg-black flex items-center justify-center text-white flex-col px-4">
        <Toaster />

        <motion.div
          animate={{ rotate: 360, scale: [1, 1.15, 1] }}
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
      className={`min-h-[100dvh] overflow-hidden flex items-center justify-center relative transition-all duration-700 px-4 ${
        chaosMode
          ? "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"
          : "bg-black"
      }`}
    >
      <Toaster />

      <motion.div
        animate={{ x: cursor.x - 20, y: cursor.y - 20 }}
        className="fixed w-10 h-10 rounded-full bg-pink-500/30 blur-xl pointer-events-none z-50 hidden md:block"
      />

      {showConfetti && <Confetti />}

      {musicOn && (
        <audio autoPlay loop>
          <source src="/music.mp3" type="audio/mp3" />
        </audio>
      )}

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[520px] h-[520px] bg-pink-500/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-12 right-8 text-7xl md:text-8xl z-0"
      >
        🌙
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["🎂", "✨", "💖", "🎁", "🌸", "💫"].map((emoji, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: `${10 + i * 15}%`, opacity: 0 }}
            animate={{ y: "-15vh", opacity: [0, 1, 0] }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            className="absolute text-2xl md:text-3xl"
          >
            {emoji}
          </motion.div>
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
        className="absolute top-5 left-5 z-50 bg-pink-500 px-5 py-3 rounded-2xl text-white shadow-lg shadow-pink-500/30"
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
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 w-[90%] max-w-md text-center shadow-2xl shadow-pink-500/20 z-10"
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
                  className="w-full bg-pink-500 hover:bg-pink-600 transition-all text-white py-4 rounded-2xl font-semibold shadow-lg shadow-pink-500/30"
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
              className="text-9xl cursor-pointer mb-6 drop-shadow-[0_0_35px_rgba(236,72,153,0.7)]"
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
            className="text-center z-10 max-w-5xl px-2 md:px-6 w-full"
          >
            {journeyStep === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md mx-auto text-left border border-white/10 shadow-2xl shadow-pink-500/10">
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
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white shadow-lg shadow-pink-500/30"
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

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md mx-auto border border-white/10 shadow-2xl shadow-pink-500/10">
                  <audio controls className="w-full">
                    <source src="/voice.mp3" type="audio/mp3" />
                  </audio>
                </div>

                <button
                  onClick={() => setJourneyStep(3)}
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white shadow-lg shadow-pink-500/30"
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
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white shadow-lg shadow-pink-500/30"
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

    <div className="grid grid-cols-2 gap-4">
      {[photo1, photo2, photo3, photo4].map((photo, index) => (
        <div
          key={index}
          className="bg-white/5 p-2 rounded-3xl shadow-2xl"
        >
          <img
            src={photo}
            className="rounded-2xl h-56 w-full object-contain bg-black/20"
          />

          <p className="text-pink-200 mt-2 text-center text-sm">
            {["Looks elegant and classy in saree", "Best BRO for the best SIS", "A Good Polaroid", "Too precious"][index]}
          </p>
        </div>
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
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white font-bold shadow-lg shadow-pink-500/30"
                >
                  One last question →
                </button>
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
                      setTimeout(() => setJourneyStep(7), 1200)
                    }}
                    className="absolute left-4 md:left-8 top-16 bg-pink-500 hover:bg-pink-600 text-white px-6 md:px-8 py-4 rounded-2xl font-bold shadow-lg shadow-pink-500/30"
                  >
                    Yes, obviously 😌❤️
                  </button>

                  <motion.button
                    animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
                    className="absolute right-4 md:right-8 top-16 bg-white/10 border border-white/20 text-white px-6 md:px-8 py-4 rounded-2xl font-bold"
                  >
                    No, very bad 😭
                  </motion.button>
                </div>
              </motion.div>
            )}

            {journeyStep === 7 && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-5xl font-bold text-white mb-8">Friendship Stats 📈</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {stats.map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                    >
                      <div className="text-4xl font-bold text-pink-400">{value}</div>
                      <div className="text-zinc-300 mt-2">{label}</div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => setJourneyStep(8)}
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white font-bold"
                >
                  Generate one more thing →
                </button>
              </motion.div>
            )}

            {journeyStep === 8 && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <h1 className="text-5xl font-bold text-white mb-8">Random Compliment Generator 🎲</h1>

                <motion.div
                  key={complimentIndex}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 max-w-xl mx-auto text-3xl text-pink-200 shadow-2xl"
                >
                  {compliments[complimentIndex]}
                </motion.div>

                <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
                  <button
                    onClick={() => {
                      setComplimentIndex((prev) => (prev + 1) % compliments.length)
                      toast("+100 affection unlocked ❤️")
                    }}
                    className="bg-pink-500 px-8 py-4 rounded-2xl text-white font-bold"
                  >
                    Generate Fact
                  </button>

                  <button
                    onClick={() => {
                      setShowIncomingCall(true)
                      setJourneyStep(9)
                    }}
                    className="bg-white text-black px-8 py-4 rounded-2xl font-bold"
                  >
                    Next surprise →
                  </button>
                </div>
              </motion.div>
            )}

            {journeyStep === 9 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-5xl font-bold text-white mb-10">Incoming Call 📱</h1>

                {showIncomingCall && (
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-md mx-auto"
                  >
                    <div className="text-7xl mb-4">📞</div>
                    <p className="text-zinc-400">Incoming Call From</p>
                    <h2 className="text-3xl font-bold text-pink-400 mt-2">Birthday Department</h2>

                    <div className="flex gap-4 justify-center mt-8">
                      <button
                        onClick={() => {
                          setShowIncomingCall(false)
                          toast.success("Official notice: You're amazing ❤️")
                        }}
                        className="bg-green-500 px-6 py-3 rounded-2xl text-white font-bold"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() => toast("You cannot reject birthday love 😭")}
                        className="bg-red-500 px-6 py-3 rounded-2xl text-white font-bold"
                      >
                        Reject
                      </button>
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={() => setJourneyStep(10)}
                  className="mt-10 bg-pink-500 px-8 py-4 rounded-2xl text-white font-bold"
                >
                  Catch the heart →
                </button>
              </motion.div>
            )}

            {journeyStep === 10 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative min-h-[520px]">
                <h1 className="text-5xl font-bold text-white mb-4">Catch the Heart ❤️</h1>
                <p className="text-zinc-400 mb-8">Tap/click the heart to unlock bonus affection.</p>

                {!heartCaught ? (
                  <motion.button
                    animate={{ left: `${heartPos.x}%`, top: `${heartPos.y}%` }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                    onMouseEnter={moveHeart}
                    onClick={() => {
                      setHeartCaught(true)
                      setShowConfetti(true)
                      toast.success("+999 affection unlocked ❤️")
                    }}
                    className="absolute text-6xl"
                  >
                    ❤️
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 max-w-md mx-auto"
                  >
                    <div className="text-7xl mb-4">🏆</div>
                    <h2 className="text-3xl font-bold text-pink-400">Heart Caught!</h2>
                    <p className="text-zinc-300 mt-3">Bonus affection unlocked permanently.</p>

                    <button
                      onClick={() => setJourneyStep(11)}
                      className="mt-8 bg-pink-500 px-8 py-4 rounded-2xl text-white font-bold"
                    >
                      Final ranking →
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {journeyStep === 11 && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-5xl font-bold text-white mb-8">Best People Leaderboard 🏆</h1>

                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-md mx-auto text-left space-y-5">
                  <div className="text-2xl text-pink-300 font-bold">#1 → Sangeetha ❤️</div>
                  <div className="text-xl text-zinc-400">#2 → Nobody</div>
                  <div className="text-xl text-zinc-500">#3 → Still nobody</div>
                </div>

                <button
                  onClick={() => setJourneyStep(12)}
                  className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-bold"
                >
                  Roll credits →
                </button>
              </motion.div>
            )}

            {journeyStep === 12 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden h-[520px]">
                <h1 className="text-5xl font-bold text-white mb-8">Birthday Movie Credits 🎞️</h1>

                <motion.div
                  initial={{ y: 420 }}
                  animate={{ y: -520 }}
                  transition={{ duration: 18, ease: "linear" }}
                  className="text-center space-y-8 text-white"
                >
                  <div>
                    <p className="text-zinc-400">Directed by</p>
                    <p className="text-3xl font-bold text-pink-400">Chinmay</p>
                  </div>

                  <div>
                    <p className="text-zinc-400">Written by</p>
                    <p className="text-3xl font-bold">Sleep Deprivation</p>
                  </div>

                  <div>
                    <p className="text-zinc-400">Emotional Damage</p>
                    <p className="text-3xl font-bold">Unlimited</p>
                  </div>

                  <div>
                    <p className="text-zinc-400">Special Thanks</p>
                    <p className="text-3xl font-bold text-pink-400">Sangeetha ❤️</p>
                  </div>

                  <div>
                    <p className="text-zinc-400">Final Message</p>
                    <p className="text-3xl font-bold">chinmay's Besssst Friiieennnd</p>
                  </div>
                </motion.div>

                <button
                  onClick={resetEverything}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 border border-white/20 px-8 py-4 rounded-2xl text-white"
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
