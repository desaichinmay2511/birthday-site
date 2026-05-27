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

  // PASSWORD SCREEN
  const [locked, setLocked] = useState(true)
  const [password, setPassword] = useState("")
  const [passError, setPassError] = useState("")

  // MAIN STATES
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [page, setPage] = useState(1)
  const [journeyStep, setJourneyStep] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const [chaosMode, setChaosMode] = useState(false)
  const [showHiddenEnding, setShowHiddenEnding] = useState(false)

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  })

  const wrongReplies = [
    "Wrong answer detected 🚨",
    "Friendship revoked 😭",
    "Suspicious behavior.",
    "Try again genius.",
    "Access denied.",
    "That’s embarrassing honestly.",
  ]

  // LOADING
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // CURSOR GLOW
  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  // HIDDEN ENDING
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHiddenEnding(true)
    }, 45000)

    return () => clearTimeout(timer)
  }, [])

  // TOAST
  useEffect(() => {
    toast("Achievement unlocked: Best Human ❤️")
  }, [])

  // BEST FRIEND CHECK
  const checkName = () => {
    if (name === "Chinmay" || name === "chinmay") {

      setSuccess(true)
      setError("")

      toast.success("Access granted ✨")

      setTimeout(() => {
        setPage(2)
      }, 2000)

    } else {

      const random =
        wrongReplies[
          Math.floor(Math.random() * wrongReplies.length)
        ]

      setError(random)

      toast.error("Incorrect human detected 🚨")
    }
  }

  // PASSWORD SCREEN
  if (locked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">

        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[90%] max-w-md text-center z-10">

          <div className="text-6xl mb-6">
            🔐
          </div>

          <h1 className="text-white text-4xl font-bold mb-4">
            Enter Password
          </h1>

          <p className="text-zinc-300 mb-6">
            Hint: It’s the name of her home 🏡
          </p>

          <input
            type="text"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Enter password..."
            className="w-full p-4 rounded-2xl bg-black/40 border border-pink-500/30 text-white outline-none mb-4"
          />

          <button
            onClick={() => {
              if (
                password === "SANSAR" ||
                password === "sansar"
              ) {

                toast.success("Access unlocked ❤️")

                setLocked(false)

              } else {

                setPassError(
                  "Wrong password 😭"
                )

                toast.error("Access denied 🚨")
              }
            }}
            className="w-full bg-pink-500 hover:bg-pink-600 transition-all text-white py-4 rounded-2xl font-semibold"
          >
            Unlock
          </button>

          {passError && (
            <p className="text-pink-400 mt-4">
              {passError}
            </p>
          )}

          <button
            onClick={() =>
              toast("💡 Think about her home 🏡")
            }
            className="mt-5 text-zinc-400 underline"
          >
            Need another hint?
          </button>

        </div>
      </div>
    )
  }

  // LOADING SCREEN
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

      {/* CURSOR */}
      <motion.div
        animate={{
          x: cursor.x - 20,
          y: cursor.y - 20,
        }}
        className="fixed w-10 h-10 rounded-full bg-pink-500/30 blur-xl pointer-events-none z-50"
      />

      {/* CONFETTI */}
      {showConfetti && <Confetti />}

      {/* MUSIC */}
      {musicOn && (
        <audio autoPlay loop>
          <source
            src="/music.mp3"
            type="audio/mp3"
          />
        </audio>
      )}

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* FLOATING STARS */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration:
                Math.random() * 3 + 2,
              repeat: Infinity,
            }}
            className="absolute bg-white rounded-full"
            style={{
              width:
                Math.random() * 4 + "px",
              height:
                Math.random() * 4 + "px",
              top:
                Math.random() * 100 + "%",
              left:
                Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* BUTTONS */}
      <button
        onClick={() =>
          setMusicOn(!musicOn)
        }
        className="absolute top-5 right-5 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl text-white flex items-center gap-3"
      >
        {musicOn ? (
          <FaMusic />
        ) : (
          <FaVolumeMute />
        )}
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

                <div className="text-7xl mb-6">
                  ✨
                </div>

                <h1 className="text-white text-4xl font-bold mb-3">
                  Who is your best friend? 😭
                </h1>

                <p className="text-zinc-300 mb-8">
                  Choose wisely.
                </p>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
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

      </AnimatePresence>

      {/* HIDDEN ENDING */}
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