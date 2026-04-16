"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  name: string;
  image: string;
  text: string;
}

const row1: Testimonial[] = [
  { name: "Billy", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face", text: "The provider was great. She listened to my needs and explained everything clearly. Felt cared for throughout." },
  { name: "Terika", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face", text: "Knowledgeable and helpful. Answered every question and made me feel confident in this decision." },
  { name: "Jamie", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face", text: "Easy to navigate and the questions were straight to the point. Really felt heard along the way." },
  { name: "Jacqueline", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face", text: "Slowly and surely reaching my goals with BioFusion. The whole experience has been very positive." },
  { name: "Diana", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face", text: "Friendly and caring staff. Quick replies whenever I reach out. Highly recommend." },
  { name: "Donna", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&h=120&fit=crop&crop=face", text: "The physician was very knowledgeable and ready to answer all my concerns. A wonderful experience." },
];

const row2: Testimonial[] = [
  { name: "Terri", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face", text: "Losing weight without a crazy diet, without cardio. I feel in control of my health for the first time." },
  { name: "Alexandra", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face", text: "Quick and concise. Treated professionally and given the chance to ask anything. Great service." },
  { name: "Greg", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face", text: "I was ready to give up. This changed everything. Dieting days are over thanks to BioFusion." },
  { name: "Lou-Ann", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face", text: "Doctors and staff have been very professional and prompt with any questions I have." },
  { name: "Elizabeth", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face", text: "Kind, informative clinician with a clear understanding of expectations and what was needed." },
  { name: "Dan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face", text: "Knowledgeable and friendly. Answered every question I had. Excited for this journey." },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.27l-3.52 1.58.67-3.93L1.3 5.14l3.94-.57L7 1z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_12px_rgba(15,58,95,0.06)] border border-[#EFF2F6] w-[340px] shrink-0 mr-4">
      <div className="flex items-center gap-3 mb-4">
        <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-[14px]">{t.name}</p>
          <Stars />
        </div>
      </div>
      <p className="text-ink-muted text-[13.5px] leading-relaxed">
        &ldquo;{t.text}&rdquo;
      </p>
    </div>
  );
}

function PhotoCard({ src }: { src: string }) {
  return (
    <div className="rounded-[20px] overflow-hidden w-[260px] shrink-0 mr-4 aspect-[4/5]">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

const photos = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop",
];

export default function TestimonialCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 bg-[#FAFBFD] overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center px-6 mb-20 max-w-3xl mx-auto"
      >
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-muted mb-5">
          Those who chose BioFusion
        </p>
        <h2
          className="font-semibold leading-[1.1] tracking-tight mb-6"
          style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}
        >
          There&apos;s a reason people are{" "}
          <span className="font-italic-accent text-brand">raving about us.</span>
        </h2>
        <p className="text-ink-muted text-[15px] leading-relaxed max-w-xl mx-auto">
          Join the multitude of people who have trusted BioFusion to help change
          their lives, achieving significant health improvements along the way.
        </p>
      </motion.div>

      {/* Row 1 - left */}
      <div className="mb-5">
        <div className="marquee-left flex w-max">
          {[...row1, ...row1].map((t, i) => (
            <div key={i} className="flex">
              <Card t={t} />
              {i % 4 === 2 && <PhotoCard src={photos[i % photos.length]} />}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - right */}
      <div>
        <div className="marquee-right flex w-max">
          {[...row2, ...row2].map((t, i) => (
            <div key={i} className="flex">
              {i % 4 === 1 && <PhotoCard src={photos[(i + 1) % photos.length]} />}
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
