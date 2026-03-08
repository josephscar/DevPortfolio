import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function About() {

  const profileImages = [
    "/hero-halftone.png",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % profileImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + profileImages.length) % profileImages.length);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="pt-24 container mx-auto px-4 pb-20 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-sans text-6xl font-extrabold tracking-tighter mb-8 text-foreground uppercase text-center">
            ABOUT <span className="text-accent-cyan">ME</span>
          </h1>

          <div className="flex flex-col gap-12 mb-20">
            {/* Enlarged Carousel Section */}
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="aspect-video md:aspect-[21/9] card-sci-fi overflow-hidden relative border-none group cursor-pointer">
                <div className="absolute inset-0 bg-transparent opacity-10 z-10" />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={profileImages[currentImage]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover grayscale contrast-125 border-b-2 border-accent-cyan"
                    alt={`Profile ${currentImage + 1}`}
                  />
                </AnimatePresence>

                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={prevImage}
                    className="p-2 bg-background/80 border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 bg-background/80 border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {profileImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 transition-all ${idx === currentImage ? 'w-8 bg-accent-cyan' : 'w-4 bg-muted-foreground/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 font-mono text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              <p>
                I'm a gameplay engineer obsessed with new ideas and innovative AI systems. I believe that the difference between a good game and a great one lies in the milliseconds of input latency, the subtle screen shake, and the perfect frame-freeze on impact.
              </p>
              <p>
                With over 5 years of experience in Unity and Unreal, I bridge the gap between technical implementation and creative vision. I don't just write code; I craft experiences.
              </p>
              <div className="text-sm">In my free time, I am an avid reader of sci-fi novels and enjoy the occasional double black diamond on my skis. Of course, I also play more video games than I should.</div>
            </div>
          </div>

        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
