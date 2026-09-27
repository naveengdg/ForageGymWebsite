export const gymData = {
  brand: {
    name: "FORGE FITNESS",
    shortName: "FORGE",
    tagline: "Build strength. Build discipline. Build yourself.",
    subtagline: "Strength training, expert coaching and a community built to help you train with purpose.",
    established: "2024",
  },
  
  contact: {
    address: "12 Performance Avenue",
    city: "Bargur, Tamil Nadu",
    postalCode: "635104",
    fullAddress: "12 Performance Avenue, Bargur, Tamil Nadu 635104",
    phone: "+91 90000 00000",
    phoneDisplay: "+91 90000 00000",
    email: "hello@forgefitness.example",
    whatsapp: "919000000000",
    whatsappMessage: "Hi Forge Fitness! I would like to book my 1st day visit and inquire about membership.",
    hours: [
      { days: "Monday – Saturday", time: "5:30 AM – 10:00 PM" },
      { days: "Sunday", time: "6:00 AM – 12:00 PM" }
    ],
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com"
    }
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Programs", href: "#programs" },
    { label: "Why Us", href: "#why-us" },
    { label: "Trainers", href: "#trainers" },
    { label: "Membership", href: "#membership" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  valueStrip: [
    {
      title: "Expert Coaching",
      description: "Guided programming & continuous technique refinement",
      iconName: "ShieldCheck",
    },
    {
      title: "Modern Equipment",
      description: "Olympic barbells, calibrated plates & isolation biomechanics",
      iconName: "Dumbbell",
    },
    {
      title: "Structured Programs",
      description: "Periodized plans mapped to progressive overload",
      iconName: "Target",
    },
    {
      title: "Supportive Community",
      description: "A focused environment with zero judgment & maximum drive",
      iconName: "Users",
    },
  ],

  programs: [
    {
      id: "strength-training",
      title: "Strength Training",
      category: "Foundation",
      description: "Build foundational power, improve lift technique, and develop consistent compound movement habits.",
      focus: ["Squat, Bench, Deadlift mastery", "Progressive overload tracking", "Central nervous system adaptation"],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      intensity: "High",
      duration: "60 mins",
    },
    {
      id: "muscle-building",
      title: "Muscle Building",
      category: "Hypertrophy",
      description: "Structured resistance training designed around scientific volume, mechanical tension, and symmetry.",
      focus: ["Targeted muscle group splits", "Time-under-tension protocols", "Metabolic conditioning & pump"],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
      intensity: "Moderate-High",
      duration: "50-75 mins",
    },
    {
      id: "fat-loss",
      title: "Fat Loss & Conditioning",
      category: "Metabolic",
      description: "Training-focused high-output routines designed to elevate VO2 max and support sustainable recomposition.",
      focus: ["High-density functional intervals", "EPOC metabolic elevation", "Heart-rate zone conditioning"],
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
      intensity: "High",
      duration: "45 mins",
    },
    {
      id: "functional-fitness",
      title: "Functional Fitness",
      category: "Mobility & Agility",
      description: "Improve athletic movement patterns, joint mobility, core stability, and everyday physical performance.",
      focus: ["Kettlebell & landmine work", "Thoracic mobility & balance", "Dynamic athletic agility"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      intensity: "Moderate",
      duration: "50 mins",
    },
    {
      id: "personal-training",
      title: "Personal Training",
      category: "1-on-1 Dedicated",
      description: "Custom tailored 1-on-1 coaching with individualized biomechanical guidance, accountability, and metric review.",
      focus: ["Full mobility & postural audit", "Precision custom roadmap", "Weekly progress adjustments"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
      intensity: "Customized",
      duration: "60 mins",
    },
    {
      id: "group-training",
      title: "Group Training",
      category: "Community Energy",
      description: "High-energy collective sessions designed around shared accountability, team drive, and energetic music.",
      focus: ["Station rotation circuits", "Partner challenges & pacing", "Electric team momentum"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      intensity: "High",
      duration: "45 mins",
    },
  ],

  featuredProgram: {
    badge: "Signature System",
    title: "MORE THAN A WORKOUT",
    subtitle: "Training becomes different when you have a plan, a coach and a community pushing you forward.",
    description: "At Forge Fitness, we strip away random exercises and guesswork. You enter the gym with a defined blueprint, dialed-in coaching, and an environment engineered to extract your true physical capacity.",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      {
        title: "Structured Workouts",
        description: "Zero wandering between machines. Every set, rep, and tempo is calculated for clear adaptation."
      },
      {
        title: "Coaching Guidance",
        description: "Real-time form critique to safeguard your joints while maximizing neural output."
      },
      {
        title: "Progress Tracking",
        description: "Objective strength and work capacity benchmarks measured week over week."
      },
      {
        title: "Community Accountability",
        description: "An uplifting culture where people know your name and celebrate your PRs."
      }
    ]
  },

  whyChooseUs: {
    heading: "WHY TRAIN WITH US?",
    subheading: "Built from the ground up for purposeful training, measurable progress, and lasting consistency.",
    features: [
      {
        icon: "Compass",
        title: "Train With Purpose",
        description: "Every session has a clear physiological reason behind it. No filler workouts, no mindless routines.",
        accent: "01"
      },
      {
        icon: "ShieldAlert",
        title: "Expert Guidance",
        description: "Learn proper lifting technique and biomechanics so you train with lifelong confidence and resilience.",
        accent: "02"
      },
      {
        icon: "TrendingUp",
        title: "Progress That You Can See",
        description: "Track your training volume, compound lift PRs, and attendance through transparent benchmarks.",
        accent: "03"
      },
      {
        icon: "Flame",
        title: "A Community That Shows Up",
        description: "Train alongside disciplined individuals who show up early, cheer your milestones, and respect the iron.",
        accent: "04"
      }
    ]
  },

  trainers: [
    {
      id: "arjun-mehta",
      name: "Arjun Mehta",
      role: "Strength & Conditioning Coach",
      specialty: "Powerlifting & Barbell Mechanics",
      experience: "8+ Years Coaching",
      bio: "Specializes in biomechanical efficiency, compound lifts, and periodized strength development for athletes and working professionals.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
      tags: ["Barbell", "Hypertrophy", "Mobility"],
      socials: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: "maya-kapoor",
      name: "Maya Kapoor",
      role: "Functional Fitness Coach",
      specialty: "Athletic Conditioning & Agility",
      experience: "6+ Years Coaching",
      bio: "Expert in kettlebell dynamics, core stability, and high-intensity metabolic conditioning designed to enhance everyday stamina.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
      tags: ["HIIT", "Movement", "Kettlebell"],
      socials: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: "rohan-verma",
      name: "Rohan Verma",
      role: "Personal Training Coach",
      specialty: "Body Recomposition & Posture",
      experience: "7+ Years Coaching",
      bio: "Focuses on progressive overload systems, sustainable lifestyle habits, and injury-prevention protocols for lifelong strength.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
      tags: ["Fat Loss", "Longevity", "1-on-1"],
      socials: {
        instagram: "#",
        linkedin: "#"
      }
    }
  ],

  memberships: [
    {
      id: "starter",
      name: "STARTER",
      price: "₹999",
      billing: "per month",
      description: "Essential foundation for independent lifters seeking top-grade gym floor access.",
      popular: false,
      ctaText: "GET STARTED",
      features: [
        "Full gym floor access",
        "Free weights & cardio zone",
        "Modern locker & shower access",
        "Initial equipment orientation",
        "Forge mobile app companion"
      ],
      notIncluded: [
        "Group training classes",
        "Monthly fitness assessment",
        "1-on-1 personal coaching"
      ]
    },
    {
      id: "performance",
      name: "PERFORMANCE",
      price: "₹1,499",
      billing: "per month",
      badge: "MOST POPULAR",
      description: "Our complete community training package for ambitious fitness enthusiasts.",
      popular: true,
      ctaText: "CHOOSE PERFORMANCE",
      features: [
        "Full gym floor access (unlimited)",
        "All unlimited group training sessions",
        "Monthly fitness & posture assessment",
        "Structured periodized workout plan",
        "Locker, sauna & recovery zone access",
        "Trainer floor guidance & form tips"
      ],
      notIncluded: [
        "Dedicated weekly 1-on-1 coaching"
      ]
    },
    {
      id: "elite",
      name: "ELITE",
      price: "₹2,499",
      billing: "per month",
      badge: "ULTIMATE EXPERIENCE",
      description: "High-touch 1-on-1 mentorship, precision tracking, and maximum accountability.",
      popular: false,
      ctaText: "GO ELITE",
      features: [
        "All Performance tier inclusions",
        "4x 1-on-1 Personal Training sessions/mo",
        "Customized nutrition & macro roadmaps",
        "Bi-weekly body composition scans",
        "Priority locker & towel service",
        "Direct WhatsApp trainer support access"
      ],
      notIncluded: []
    }
  ],

  comparisonFeatures: [
    { name: "Gym floor & free weights", starter: true, performance: true, elite: true },
    { name: "Locker & amenity access", starter: true, performance: true, elite: true },
    { name: "Group training classes", starter: false, performance: true, elite: true },
    { name: "Trainer floor guidance", starter: false, performance: true, elite: true },
    { name: "Monthly fitness assessment", starter: false, performance: true, elite: true },
    { name: "Personal training sessions", starter: false, performance: false, elite: true },
    { name: "Customized nutrition framework", starter: false, performance: false, elite: true },
    { name: "Direct coach WhatsApp check-ins", starter: false, performance: false, elite: true },
  ],

  transformations: [
    {
      id: "strength-journey",
      title: "Strength Progression",
      label: "MEMBER JOURNEY",
      timeline: "6 Months Periodized Training",
      focus: "Squat & Deadlift Proficiency",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
      quote: "Learned how to lift with proper technique. My compound lifts doubled, and chronic lower back stiffness completely vanished.",
      stats: [
        { label: "Deadlift", value: "+45 kg PR" },
        { label: "Attendance", value: "96% Logged" },
        { label: "Core Stability", value: "Significant" }
      ]
    },
    {
      id: "consistency-journey",
      title: "Consistency Milestone",
      label: "MEMBER JOURNEY",
      timeline: "9 Months Periodized Routine",
      focus: "Body Composition & Energy",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      quote: "From skipping workouts every week to training 4 mornings regularly before work. The supportive energy here changes your mindset.",
      stats: [
        { label: "Workouts", value: "140+ Sessions" },
        { label: "Resting Heart Rate", value: "-12 BPM" },
        { label: "Energy Level", value: "Sustained" }
      ]
    },
    {
      id: "fitness-journey",
      title: "Athletic Conditioning",
      label: "MEMBER JOURNEY",
      timeline: "5 Months Functional Training",
      focus: "Stamina, Agility & Mobility",
      image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=800&q=80",
      quote: "Functional fitness restored my shoulder and hip mobility. I feel light on my feet, agile, and noticeably more resilient.",
      stats: [
        { label: "VO2 Max", value: "+18% Benchmark" },
        { label: "Sprint Speed", value: "Noticeable" },
        { label: "Joint Mobility", value: "Pain-Free" }
      ]
    }
  ],

  progressMetrics: [
    {
      title: "Strength Development",
      description: "Calculated compound progression across barbell squats, presses, and pulls.",
      percentage: 88,
      indicator: "+32% Average Lift Load",
      color: "from-lime-400 to-emerald-400"
    },
    {
      title: "Training Consistency",
      description: "Habit formation tracking that rewards unbroken workout streaks.",
      percentage: 92,
      indicator: "4.2 Sessions / Week Average",
      color: "from-lime-400 to-yellow-400"
    },
    {
      title: "Work Capacity & VO2",
      description: "Pacing and interval conditioning for cardiovascular longevity.",
      percentage: 84,
      indicator: "Recovery Time Halved",
      color: "from-emerald-400 to-cyan-400"
    },
    {
      title: "Mobility & Recovery",
      description: "Joint ranges of motion and posture balance scored over time.",
      percentage: 79,
      indicator: "Full Thoracic & Hip Rotation",
      color: "from-cyan-400 to-lime-400"
    }
  ],

  testimonials: [
    {
      id: "test-1",
      quote: "The biggest difference was having a place where I actually wanted to show up and train. The coaching is sharp, respectful, and never gimmicky.",
      author: "Vikram S.",
      role: "Active Member",
      program: "Performance Member • 10 Months",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-2",
      quote: "As a working mother, my hours are tight. Forge helped me prioritize 45 high-impact minutes with clean programming that gives me all-day stamina.",
      author: "Pooja R.",
      role: "Active Member",
      program: "Functional Fitness • 7 Months",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-3",
      quote: "Everything from the barbell knurling to the lighting screams serious training. No fluff, just dedicated coaches who care about your form.",
      author: "Karthik N.",
      role: "Active Member",
      program: "Strength Member • 1 Year",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ],

  gallery: [
    {
      title: "Heavy Strength Zone",
      area: "Olympic Platforms & Eleiko Racks",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
      span: "col-span-12 md:col-span-8 md:row-span-2"
    },
    {
      title: "Functional Turf Area",
      area: "Prowler Sleds & Kettlebells",
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80",
      span: "col-span-12 md:col-span-4"
    },
    {
      title: "Conditioning & Cardio Deck",
      area: "Rowers, SkiErgs & Curved Treadmills",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
      span: "col-span-12 md:col-span-4"
    },
    {
      title: "Free Weights & Dumbbells",
      area: "Dumbbells 2.5kg to 50kg Pairings",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      span: "col-span-12 md:col-span-4"
    },
    {
      title: "Recovery & Lounge",
      area: "Post-workout Shake Bar & Mobility Mat",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      span: "col-span-12 md:col-span-8"
    }
  ],

  dailyExperience: {
    heading: "SHOW UP. TRAIN HARD. LEAVE STRONGER.",
    subheading: "A frictionless training rhythm built to make discipline your daily natural state.",
    steps: [
      {
        step: "01",
        title: "Arrive",
        description: "Seamless check-in, dedicated lockers, and an energetic gym atmosphere ready to welcome you.",
        iconName: "DoorOpen"
      },
      {
        step: "02",
        title: "Warm Up",
        description: "Dynamic mobility protocols to activate key stabilizers and prime your nervous system.",
        iconName: "Flame"
      },
      {
        step: "03",
        title: "Train",
        description: "Execute your structured program with calibrated weights, coach cues, and focused intensity.",
        iconName: "Dumbbell"
      },
      {
        step: "04",
        title: "Track Progress",
        description: "Log your weights, reps, and sets to ensure clear progressive overload for next week.",
        iconName: "ClipboardCheck"
      },
      {
        step: "05",
        title: "Recover",
        description: "Foam rolling, targeted stretching, and hydration to initiate swift muscular regeneration.",
        iconName: "HeartPulse"
      },
      {
        step: "06",
        title: "Repeat",
        description: "Consistency creates transformation. Walk out with elevated energy and return with purpose.",
        iconName: "Repeat"
      }
    ]
  },

  faqs: [
    {
      question: "What membership should I choose?",
      answer: "If you are an independent lifter who already knows their routine, the Starter plan gives you complete gym floor access. If you want structured group classes, coach guidance, and monthly body assessments, Performance is our most popular option. For dedicated 1-on-1 personal coaching, choose Elite."
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes. Our Elite membership includes dedicated 1-on-1 personal training sessions. You can also book individual personal training packages with our certified coaches based on your specific biomechanical and strength goals."
    },
    {
      question: "Can beginners join?",
      answer: "Absolutely. Over 40% of our community started with zero prior gym experience. Every new member receives an initial equipment orientation and technique guidance to build safety, form, and confidence from day one."
    },
    {
      question: "Do you offer group classes?",
      answer: "Yes, our Performance and Elite tiers include access to high-energy group training classes covering Functional Conditioning, Strength Foundation, and Athletic Circuit training."
    },
    {
      question: "Do I need to bring my own equipment?",
      answer: "No, all training equipment, Olympic barbells, kettlebells, resistance bands, and foam rollers are fully provided. You only need clean indoor training shoes, athletic gym attire, and a personal water bottle."
    },
    {
      question: "Can I visit the gym before joining?",
      answer: "Yes, we encourage prospective members to visit during staffed operating hours. You can take a guided walkthrough of our lifting floor, inspect the equipment, and speak with our coaches."
    },
    {
      question: "Do you offer trial sessions?",
      answer: "Yes! You can fill out our 'Start Your Journey' form right on this page to claim a complimentary 1-day guest pass and training walkthrough."
    },
    {
      question: "What are the gym opening hours?",
      answer: "We are open Monday through Saturday from 5:30 AM to 10:00 PM, and on Sundays from 6:00 AM to 12:00 PM. Early morning and late evening slots accommodate busy professional schedules."
    },
    {
      question: "How do I join?",
      answer: "You can submit your details in the registration form below, reach out via WhatsApp button, or visit our front desk directly to complete quick digital onboarding."
    }
  ],

  formOptions: {
    goals: [
      "Build Muscle",
      "Lose Fat",
      "Improve Strength",
      "Improve Fitness",
      "General Health",
      "Other"
    ],
    experience: [
      "Beginner",
      "Intermediate",
      "Advanced"
    ],
    preferredTraining: [
      "Gym Membership",
      "Personal Training",
      "Group Training",
      "Not Sure"
    ]
  }
};
