import { motion } from "framer-motion";

const AnimatedBackground = ({ weatherType }) => {
  const renderOverlay = () => {
    switch (weatherType) {
      case "Clear":
        return (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute right-20 top-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"
          />
        );

      case "Clouds":
        return (
          <>
            <motion.div
              animate={{ x: [-50, 50, -50] }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              className="absolute top-20 left-10 h-40 w-72 rounded-full bg-white/10 blur-3xl"
            />

            <motion.div
              animate={{ x: [50, -50, 50] }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              className="absolute bottom-20 right-20 h-52 w-80 rounded-full bg-white/10 blur-3xl"
            />
          </>
        );

      case "Rain":
        return (
          <motion.div
            animate={{
              y: [-20, 20],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-gradient-to-b from-sky-400/5 to-transparent"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {renderOverlay()}
    </div>
  );
};

export default AnimatedBackground;