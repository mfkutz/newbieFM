import { motion } from "framer-motion";
function App() {
  return (
    <div className="flex justify-center h-screen items-center ">
      <motion.main
        className="wrapper mx-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <header>
          <h1>Join our community</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p className="pt-[9px]">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </header>
        <footer className="flex shadow-xl rounded-lg flex-wrap lg:flex-nowrap">
          <div className="left w-full ">
            <h3> Monthly Subscription</h3>
            <div className="flex items-center gap-3 pt-2">
              <div className="text-white text-[32px] font-bold">$29</div>
              <p className="text-gray-300 font-light">per month</p>
            </div>
            <p className="text-white">Full access for less than $1 a day</p>
            <button className="rounded-md py-3 text-white mt-6 shadow-lg">
              Sign Up
            </button>
          </div>
          <div className="right w-full ">
            <h3>Why Us</h3>
            <p className="text-white text-[14px] mt-4 font-light ">
              Tutorials by industry experts <br /> Peer &amp; expert code review{" "}
              <br />
              Coding exercises <br /> Access to our GitHub repos <br />{" "}
              Community forum <br />
              Flashcard decks <br /> New videos every week
            </p>
          </div>
        </footer>
      </motion.main>
    </div>
  );
}

export default App;
