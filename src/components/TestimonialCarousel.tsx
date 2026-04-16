"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  name: string;
  image: string;
  text: string;
  rating: number;
}

const row1: Testimonial[] = [
  {
    name: "Billy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "The provider was great! She listened to my needs and provided details of the meds and any issues that I should be aware of. Very professional and thorough.",
    rating: 5,
  },
  {
    name: "Terika",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "The provider was knowledgeable and helpful. She answered all my questions and made me feel as if this was the right decision for me.",
    rating: 5,
  },
  {
    name: "Jamie",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "The questions are to the point and easy to navigate. I'm able to voice my concerns if needed and ask questions along the way.",
    rating: 5,
  },
  {
    name: "Jacqueline",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    text: "My experience is very positive. I am doing very well. Slowly and surely reaching my goals with BioFusion's help. Thank you!",
    rating: 5,
  },
  {
    name: "Diana",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
    text: "The staff has been so friendly and caring. I didn't expect that! If I call, I get an immediate answer. Highly recommend.",
    rating: 5,
  },
  {
    name: "Donna",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    text: "The physician was very knowledgeable and ready to answer all my concerns. She even told me about future options. Wonderful experience!",
    rating: 5,
  },
];

const row2: Testimonial[] = [
  {
    name: "Terri",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    text: "Losing weight without a crazy diet, without cardio... it just felt like magic. I was a snacker, but now I feel in control of my health.",
    rating: 5,
  },
  {
    name: "Alexandra",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    text: "Everything was quick and concise. I was treated professionally and given the opportunity to ask questions. Great service!",
    rating: 5,
  },
  {
    name: "Greg",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "I was ready to give up. Wow. I would pay 10x as much if I had to. Dieting days are over. Thanks to BioFusion for changing my life.",
    rating: 5,
  },
  {
    name: "Lou-Ann",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    text: "BioFusion doctors and staff have been very professional and prompt with any questions I have and their support has been outstanding.",
    rating: 5,
  },
  {
    name: "Elizabeth",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    text: "My clinician was kind, informative, gave a clear understanding of expectations, what was needed and how to proceed. Excellent care!",
    rating: 5,
  },
  {
    name: "Dan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "The doctor was very knowledgeable and very friendly. She answered any questions I had. Very excited for this journey!",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.27l-3.52 1.58.67-3.93L1.3 5.14l3.94-.57L7 1z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 w-[320px] shrink-0 mx-2">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={t.image}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{t.name}</p>
          <Stars count={t.rating} />
        </div>
      </div>
      <p className="text-muted text-xs leading-relaxed line-clamp-4">
        &ldquo;{t.text}&rdquo;
      </p>
    </div>
  );
}

function ReviewImageCard() {
  return (
    <div className="bg-brand/10 rounded-2xl w-[200px] shrink-0 mx-2 aspect-[3/4] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=280&fit=crop"
        alt="Customer review"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function TestimonialCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center px-6 mb-12"
      >
        <h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">
          Those who chose BioFusion
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          There&apos;s a reason people are{" "}
          <span className="text-brand font-accent italic">
            raving about us.
          </span>
        </h3>
        <p className="text-muted text-sm mt-4 max-w-2xl mx-auto">
          Join the multitude of people who have trusted BioFusion to help change
          their lives, achieving significant health improvements along the way.
        </p>
      </motion.div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-4">
        <div className="animate-scroll-left flex w-max">
          {[...row1, ...row1].map((t, i) => (
            <div key={i} className="flex items-stretch">
              <TestimonialCard t={t} />
              {i % 3 === 1 && <ReviewImageCard />}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative">
        <div className="animate-scroll-right flex w-max">
          {[...row2, ...row2].map((t, i) => (
            <div key={i} className="flex items-stretch">
              <TestimonialCard t={t} />
              {i % 3 === 2 && <ReviewImageCard />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
