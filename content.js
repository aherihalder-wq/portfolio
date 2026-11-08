/* ==========================================================================
   YOUR PORTFOLIO CONTENT. Edit this file only; the website updates itself.

   HOW TO...
   - Change your email or social links:  edit ME below.
   - Edit a project:                       change the text inside its { ... } block.
   - Add a project:                        copy one whole { ... } block, paste it
                                           after the last one (keep the comma
                                           between blocks), give it a new "id".
   - Remove a project:                     delete its whole { ... } block.
   - Reorder projects:                     move the blocks up or down.
   - Add an image:                         put the file in assets/img/ and write
                                           its path, e.g. "assets/img/new.jpg".
   - Hide something:                       leave it empty: "" or [].

   Rules: keep text inside "double quotes", and put a comma after every line
   and every block except the last one in a list.
   ========================================================================== */

const ME = {
  name: "Aheri Halder",
  title: "Product Designer",
  email: "aheridesign@gmail.com",
  emailSubject: "Hiring enquiry from your portfolio",
  photo: "assets/img/aheri.jpg",

  // When you scroll, your photo card travels down and flips over to show this photo
  // in the "What I do" section. Use an upright photo.
  photoBack: "assets/img/aheri-presenting.jpg",

  // Your "worlds". Projects go into a world by their "group": "industrial", "uiux" or "electronics".
  worlds: {
    industrial:   { name: "Product Design",       line: "Physical products shaped around real bodies and real places." },
    uiux:         { name: "UI/UX Design",         line: "Apps and services built from research, flows and tested screens." },
    electronics:  { name: "Phygital Lab",         line: "Where hardware, code and play meet: objects that sense, think and respond." },
    illustration: { name: "Digital Illustration", line: "A different side of my work. Step through to another world." }
  },

  // Top of the page: the two big words around your photo
  heroTop: "Product",
  heroBottom: "Designer.",
  heroSub: "Designing products, interactions and meaningful experiences.",
  available: "Open to internships",   // text in the small pill at the top
  headline: "I design objects and the interfaces that run them.",
  intro: "Beds for rural maternal care, projector controls for classrooms, an app that tracks student spending, a board game run by a microcontroller. I start with the people who use these things and build until the whole system works.",

  // About me section
  aboutLead: "Hi, I'm Aheri. I'm a product design student who works where physical products and digital interfaces meet.",
  aboutText: "I like problems where an object, a screen and the people around them all have to work together: a bed that an ASHA worker can deliver and set up, a projector you can control without climbing on a chair, a board game whose rules live inside an ESP32. I start with research (surveys, interviews, sitting in the actual chairs) and I test ideas by building them.",
  // "What I do" list: [name, description, picture shown beside it]
  services: [
    ["Product Design", "Products shaped around real bodies and real places: sketching, CAD and rendering, ergonomics, prototyping and costing.", "assets/img/aheri-sketchbook.jpg"],
    ["UI/UX Design", "Research-led apps and interfaces, from surveys and personas to user flows, wireframes and tested screens.", "assets/img/do-uiux.jpg"],
    ["User Research", "Surveys, interviews, field visits, journey maps and personas that decide what is worth building.", "assets/img/maathri-research.jpg"],
    ["Prototyping & Electronics", "Physical prototypes and working electronics with Arduino and ESP32, plus React Native for apps.", "assets/img/do-electronics.jpg"],
    ["Digital Illustration", "Hand-drawn characters, patterns and everyday Indian scenes, digitised for games, cards and brands.", "assets/img/do-illustration.jpg"]
  ],

  // Last section
  hireTitle: "Have an internship or project in mind?",
  hireText: "I'm open to internships and freelance work in product, industrial and interaction design. Send me a line and I'll reply.",

  // "handle" is the account ID shown as text in About me and on your ID card
  socials: [
    { name: "LinkedIn",  handle: "in/aheri-halder-419018394", url: "https://www.linkedin.com/in/aheri-halder-419018394" },
    { name: "Instagram", handle: "@aheri_designstudio",       url: "https://www.instagram.com/aheri_designstudio" },   // add qr: "assets/img/instagram-qr.svg" to show the QR card again
    { name: "YouTube",   handle: "@aherihalder",              url: "https://www.youtube.com/@aherihalder" }
  ],

  // Your resume ID card (opens when someone clicks your photo in About me).
  // Anything left empty is hidden on the card.
  resume: {
    idNo: "AH · 2026 · PD",
    location: "",            // left empty on purpose (not shown)
    education: [             // ["Course", "College / school", "Years"]
      ["Bachelor of Product Design, Healthcare minor", "Anant National University", "2024 – 28"],
      ["Class 12, Computer Science", "St. Mary's Convent School", ""]
    ],
    experience: [            // ["Role", "Where", "When", "What you did (optional)"]
      ["Design Intern", "Banao", "May – Jul 2024", "Design system for Tagsen"],
      ["Freelance Designer", "", "", ""]
    ],
    certifications: ["Python", "LLMs", "UI/UX Design"],
    languages: ["Hindi", "Bengali", "English"],
    interests: ["Illustration", "Sketching", "Animation"],
    pdf: ""                  // a PDF resume to download, e.g. "assets/Aheri-Halder-Resume.pdf"
  }
};

/* Software you use, shown as app icons (no text) just before "Let's work together".
   Names come from the built-in icon set: photoshop, illustrator, affinity, figma, procreate,
   solidworks, autocad, blender, python, androidstudio, claudecode, cursor, llm.
   "|" adds a small divider. To add a tool that isn't built in, use
   { name: "Rhino", img: "assets/icons/rhino.png" }  (a square app-icon picture). */
const TOOLS = [
  "photoshop", "illustrator", "affinity", "figma", "procreate", "|",
  "solidworks", "autocad", "blender", "|",
  "python", "androidstudio", "claudecode", "cursor", "llm"
];

/* Your digital illustrations, shown on illustration.html (the "other world").
   Empty for now, so that page shows empty frames and "coming soon".
   Add one like this:
   { title: "Chai Stall", img: "assets/illustrations/chai.jpg", note: "Procreate, 2026" },
*/
const ILLUSTRATIONS = [
];

/* Fields for each project
   id        short name, letters/numbers/hyphens only
   group     "industrial" (Product Design), "uiux" (UI/UX Design) or "electronics" (Phygital Lab)
   status    "" for finished, or something like "In progress"
   title     project name
   kind      short label, e.g. "Product Design · Healthcare"
   one       one-sentence summary (shown on cards)
   img       cover image
   tags      small labels
   team      e.g. "With Shreya Sawant" or "Solo project" ("" to hide)
   specs     key facts as ["Label", "Value"] pairs
   overview  2-3 sentences that open the case study
   problem   the problem or How-Might-We
   forWhom   who you are designing for            } shown in the highlighted
   why       why you chose this solution          } "1 · Problem & Design Thinking" panel
   process   [["Research", "..."], ["Ideate", "..."], ["Prototype", "..."], ["Test", "..."], ["Refine", "..."]]
   outcome   the final product in one or two sentences   } "2 · Design Process & Final Outcome" panel
   outcomeImg picture of the final product                }
   story     the case study, one block per step:
             { h: "Heading", text: "Paragraph", points: ["bullet", ...], imgs: ["path", ...], cap: "caption under the pictures" }
             every part except h is optional
   links     buttons like ["View full project", "https://..."]
*/
const PROJECTS = [

  /* ---------------------------------------------------------------- MAAThri */
  {
    id: "maathri",
    group: "industrial",
    status: "",
    title: "MAAThri",
    kind: "Product Design · Healthcare",
    one: "A foldable, tilting bed that helps pregnant women in rural India sleep safely on their left side.",
    img: "assets/img/maathri.jpg",
    tags: ["Field research", "CAD", "Service system", "Costing"],
    team: "With Shreya Sawant",
    specs: [
      ["Size", "1900 × 900 × 500 mm"],
      ["Frame", "Mild steel, hollow tube"],
      ["Cost", "≈ ₹2,000 per bed"],
      ["Users", "Mothers, ASHA workers"]
    ],
    overview: "MAAThri, “nurturing the womb, empowering the mother”, is a low-cost bed for pregnant women in rural India. It tilts gently so the mother rests on her left side, the position doctors recommend in late pregnancy. The bed is lent out through the public health system, so one bed can serve many mothers.",
    problem: "How might we help with a sleep support solution for pregnant women in rural areas, so that it improves maternal well-being in low-resource settings?",
    // 1 · Problem & Design Thinking
    forWhom: "Pregnant women in rural India, and the ASHA workers who deliver, set up and collect the bed.",
    why: "Doctors told us side-lying is essential, but pillows slip and ordinary beds stay flat. A controlled tilt solves the medical problem with no electricity and no extra parts. Lending it through ASHA workers makes it affordable for a whole village, not just one family.",
    // 2 · Design Process & Final Outcome  (steps: Research, Ideate, Prototype, Test, Refine; leave out any you didn't do)
    process: [
      ["Research", "Stakeholder map, on-site doctor interviews, a survey, an empathy map and a pregnancy-simulator sleep trial."],
      ["Ideate", "Must/should/could feature priorities, tilt and support sketches, and a system map for lending and reuse."],
      ["Prototype", "CAD model of a mild-steel bed with removable tilt grips, folding hinges and colour-coded legs."],
      ["Test", "Checked every feature against the sleep-trial findings and doctor insights, and costed every part."],
      ["Refine", "Added grip storage inside the frame and colour coding so set-up is always right, and made it fold for transport."]
    ],
    outcome: "A ₹2,000 folding bed (1900 × 900 × 500 mm) that tilts the mother onto her left side, with a lend, return, clean and reuse system run through ASHA workers.",
    outcomeImg: "assets/img/maathri-cad.jpg",
    story: [
      {
        h: "Why the left side matters",
        text: "The inferior vena cava, the body's largest vein, runs along the right side of the spine and carries blood from the lower body back to the heart. When a pregnant woman lies flat on her back, the heavy uterus presses backwards onto this vein and can reduce blood flow to her heart and to the baby. The pressure comes from gravity, so the answer is to change the angle of the body, not to add more pillows.",
        points: [
          "Vena cava sits on the right of the spine; the uterus is a heavy mass in front of it",
          "Compression happens when the uterus falls backwards, not sideways",
          "Side-lying, especially on the left, keeps the weight off the vein"
        ],
        imgs: ["assets/img/cs/maathri-06.jpg", "assets/img/cs/maathri-07.jpg"],
        cap: "Understanding the anatomy first decided the main feature of the bed: a controlled tilt."
      },
      {
        h: "Who is involved",
        text: "A bed for rural mothers is never used by the mother alone. We mapped everyone who would touch it, from the family at home to the health workers who would deliver it and the state department that would pay for it.",
        points: [
          "Primary: pregnant women, ASHA workers, auxiliary nurse midwives",
          "Supporting: family members, Anganwadi workers, ASHA facilitators",
          "System: state health department, self-help groups that could manufacture it, local transport"
        ],
        imgs: ["assets/img/cs/maathri-09.jpg"]
      },
      {
        h: "What we learned in the field",
        text: "Interviews and surveys showed that a medical-looking bed would simply not be used. The product had to fit into how rural homes already sleep, store and clean things.",
        points: [
          "Social: sleep decisions are often made by the husband or mother-in-law, and sleeping spaces are shared",
          "Cultural: chatai, gadda and charpai are the normal beds; floor sleeping is common; bedding is folded away in the day",
          "Hygiene: the product is reused, so it must be washable; sun-drying and wiping are the usual ways to clean",
          "Economic: a community or rental model works better than ownership; it must be durable and low-maintenance"
        ],
        imgs: ["assets/img/cs/maathri-08.jpg"]
      },
      {
        h: "Listening to mothers and doctors",
        text: "We interviewed doctors on site and ran a survey on how women currently support themselves at night: blankets, regular pillows or nothing at all. An empathy map captured what mothers say, think and feel. Doctors confirmed the size of the problem.",
        points: [
          "92% of doctors said side-lying posture is essential",
          "90% see back and pelvic pain as widespread",
          "89% see a need for affordable, modular support",
          "84% said extra pillows don't work, and 76% said floor sleeping makes discomfort worse for rural women"
        ],
        imgs: ["assets/img/cs/maathri-10.jpg", "assets/img/cs/maathri-18.jpg"],
        cap: "Empathy map and doctor insights."
      },
      {
        h: "Living it: a simulated pregnancy sleep trial",
        text: "To feel the problem ourselves, we wore a pregnancy simulator and tried to lie down, sleep and get up from ordinary beds.",
        points: [
          "Flat surfaces failed to support the weight of the belly, which felt unstable",
          "Getting in and out needed a lot of upper-body effort and strained the back and arms",
          "The body naturally rolled to the side for safety; lying flat was hard to tolerate",
          "No edge support meant a constant fear of falling, which stopped natural movement in sleep"
        ],
        imgs: ["assets/img/cs/maathri-16.jpg", "assets/img/cs/maathri-17.jpg"]
      },
      {
        h: "Designing the system around the bed",
        text: "A bed alone doesn't reach a village. We designed the whole journey: the government owns the beds, they are kept at the gram panchayat or health sub-centre, an ASHA worker identifies a mother who needs one, and it is lent to her for a fixed period.",
        points: [
          "Identify, allocate and dispatch through the ASHA worker",
          "Carry it home folded, set it up in minutes, use it through late pregnancy",
          "ASHA checks comfort during visits",
          "Return, clean, check and repair, store, and lend to the next mother"
        ],
        imgs: ["assets/img/cs/maathri-14.jpg", "assets/img/cs/maathri-15.jpg"],
        cap: "System map and the ideal task flow."
      },
      {
        h: "Deciding what matters most",
        text: "All the findings were sorted into must-have, should-have and could-have features so the design stayed simple and affordable.",
        points: [
          "Must: low height and wide base, adjustable backrest (15–30°), handles for standing up, hip and knee support, anti-slip feet, washable cover, non-medical look, tilt to the left",
          "Should: reclined feeding posture, clip-on baby space, compact folding, moisture-resistant core",
          "Could: earthy, homely colours and replaceable modular parts"
        ],
        imgs: ["assets/img/cs/maathri-20.jpg"]
      },
      {
        h: "The design",
        text: "MAAThri is a simple mild-steel bed, 1900 × 900 × 500 mm, made from hollow tubes and a perforated sheet so any small workshop can build it.",
        points: [
          "Safe tilting: taller grips slide onto the three right-side legs, so the bed leans gently and the mother rests on her left",
          "Flexible slanting: the same grips can go on the head or foot legs to raise the upper body or the feet",
          "Easy storage: spare grips live in holes inside the frame, so they never get lost",
          "Colour coding: right-side legs and their grips are dark blue, so an ASHA worker always sets it up correctly",
          "Portable: piano hinges let it fold flat for carrying on a rickshaw",
          "Handles for getting in and out, and space beside it for a baby cradle after birth"
        ],
        imgs: ["assets/img/maathri-cad.jpg", "assets/img/cs/maathri-24.jpg", "assets/img/cs/maathri-29.jpg", "assets/img/cs/maathri-30.jpg"]
      },
      {
        h: "What it costs",
        text: "We costed every part so the bed could realistically be bought by a state health programme.",
        points: [
          "Raw materials (tubes, sheet, brackets): about ₹1,220",
          "Cutting, bending and welding: about ₹420",
          "Paint, fasteners, handling and transport: about ₹310",
          "Total: about ₹1,950, rounded to ₹2,000 per bed"
        ],
        imgs: ["assets/img/cs/maathri-32.jpg"]
      },
      {
        h: "In use, and after",
        text: "After the pregnancy, the bed goes back into the system and is reused by the next mother. It also works beyond pregnancy, for example for recovery or for elderly family members.",
        imgs: ["assets/img/cs/maathri-36.jpg", "assets/img/cs/maathri-37.jpg"]
      }
    ],
    links: []
  },

  /* ---------------------------------------------------------------- GRATEO */
  {
    id: "grateo",
    group: "industrial",
    status: "",
    title: "GRATEO",
    kind: "Product Design · Kitchen",
    one: "An effortless dry fruit slicer that grates in both directions, designed from a study of how people cut nuts at home.",
    img: "assets/img/grateo-wide.jpg",
    tags: ["User study", "Mechanism", "Ergonomics"],
    team: "",
    specs: [
      ["Product", "Dry fruit slicer"],
      ["Action", "Bi-directional grating"],
      ["Research", "Users, stakeholders, benchmarking"]
    ],
    overview: "GRATEO is a hand-held dry fruit slicer. Most slicers only cut when you twist them one way, so half of every movement is wasted and the wrist works hard. GRATEO cuts in both directions, so slicing is faster and easier on the hand.",
    problem: "Slicing dry fruits by hand is slow and fiddly, and existing slicers only work in one direction. How might a slicer be safer, more efficient and easier on the hand?",
    // 1 · Problem & Design Thinking
    forWhom: "Home cooks who slice dry fruits often, including older users with less grip strength.",
    why: "Existing slicers only cut on one direction of the twist, so half of every movement is wasted. Cutting in both directions halves the effort and the time with the same simple hand action.",
    // 2 · Design Process & Final Outcome  (steps: Research, Ideate, Prototype, Test, Refine; leave out any you didn't do)
    process: [
      ["Research", "History of slicing tools, a user behaviour study, stakeholder mapping and competitive benchmarking."],
      ["Ideate", "Analysed the mechanism, interaction and body strain of existing slicers to find the wasted effort."],
      ["Prototype", "Designed a bi-directional grating mechanism, its parts and final renders."]
    ],
    outcome: "GRATEO: a compact slicer that grates on both the forward and the return twist and collects the slices in its container.",
    outcomeImg: "assets/img/grateo.jpg",
    story: [
      {
        h: "Research and user study",
        text: "The project started with a study of how people slice dry fruits today, from knives to specialised kitchen gadgets.",
        points: [
          "History of slicing tools: manual knives, specialised kitchen tools, mechanised hand-held devices, compact multi-function products",
          "Typical and atypical ways people slice dry fruits at home",
          "User behaviour analysis and stakeholder mapping",
          "Competitive benchmarking of knives, graters and choppers on effort, safety, output and cleaning"
        ]
      },
      {
        h: "Studying existing slicers",
        text: "We took apart the mechanism of a typical twist slicer and studied how the hand and wrist work while using it.",
        points: [
          "Mechanism: a one-direction twist drives the blades",
          "Interaction: repeated twisting with a firm grip",
          "Body strain: the wrist and fingers take most of the load"
        ]
      },
      {
        h: "The design",
        text: "GRATEO uses a mechanism that grates on both the forward and the return twist, with a container that collects the slices.",
        imgs: ["assets/img/grateo.jpg"]
      }
    ],
    links: []
  },

  /* ---------------------------------------------------------------- Projector */
  {
    id: "projector",
    group: "industrial",
    status: "",
    title: "Classroom Projector Interaction",
    kind: "Product Design + UI/UX",
    one: "An ID-card-activated control system that makes a ceiling projector easy to find, reach and use.",
    img: "assets/img/projector.jpg",
    tags: ["Ergonomics", "Cognitive load", "UI design", "Prototype"],
    team: "With Anirudh Shukla, Aeshwa Patel and Charmi Javeri",
    specs: [
      ["Users studied", "50th & 75th percentile"],
      ["Workload test", "NASA-TLX, 9 tasks"],
      ["Brands compared", "5"],
      ["UI rounds", "2 iterations"]
    ],
    overview: "Every classroom has a ceiling projector, and almost everyone struggles with it. The switches are too high, the buttons look alike, and nothing tells you whether the projector has heard you. We kept the projector and redesigned how people control it: an ID card starts the session, a laptop control panel does the work, and a wall unit with big keys and a small screen gives clear feedback.",
    problem: "How might we make projector controls easier to find, reach and understand, while giving clear feedback when something goes wrong?",
    // 1 · Problem & Design Thinking
    forWhom: "Students and staff who use classroom projectors, especially first-time users and shorter users who can't reach the controls.",
    why: "Nobody needed a new projector. They needed to reach the controls, recognise them and know the projector had responded. Moving control to the laptop solves reach, the ID card removes the “which switch?” guesswork, and the LCD confirms every action.",
    // 2 · Design Process & Final Outcome  (steps: Research, Ideate, Prototype, Test, Refine; leave out any you didn't do)
    process: [
      ["Research", "Task-flow observation by body height, 4 user profiles, a NASA-TLX workload test on 9 tasks and a 5-brand competitor study."],
      ["Ideate", "Turned pain points into principles (Hick's law, Fitts' law, feedback, error recovery), then sketched layouts and the card-slot idea."],
      ["Prototype", "A physical wall unit with tactile keys and an LCD, a laptop control console, a storyboard and an animation."],
      ["Test", "Users found the laptop interface easier, the LCD feedback clear and the ID card set-up simpler."],
      ["Refine", "Two interface iterations to a calmer console, and an HDMI backup because the system relies on Wi-Fi."]
    ],
    outcome: "An ID-card-activated projector control system: a laptop console over Wi-Fi, plus a wall unit with big tactile keys and an LCD that confirms every action.",
    outcomeImg: "assets/img/projector-concept.jpg",
    // A video shown right after the two panels. For a Google Drive video, keep the sharing on
    // "Anyone with the link" and use the link ending in /preview. Remove this line for no video.
    video: { title: "See it working", note: "The full interaction, from inserting the ID card to controlling the projector, as an animation.", src: "https://drive.google.com/file/d/1ou3CaU7yUCeHYks9YarTM22cZBSLSSb6/preview", link: "https://drive.google.com/file/d/1ou3CaU7yUCeHYks9YarTM22cZBSLSSb6/view" },
    story: [
      {
        h: "Why the projector",
        text: "Using a projector is a chain of small steps: find the right switch, turn it on, pull down the screen, connect the laptop, fix the input, and do it all in reverse at the end. Each step has a physical and a mental cost. We listed nine design problems.",
        points: [
          "Accessibility: controls are mounted too high",
          "Recognition and consistency: switches and buttons are unlabeled and differ between rooms",
          "Feedback: no sign the projector has started or received a command",
          "Connectivity and error recovery: HDMI and blank-screen problems need outside help",
          "Cognitive load, physical effort and dependence on a lost remote"
        ],
        imgs: ["assets/img/cs/projector-04.jpg"]
      },
      {
        h: "Watching people use it",
        text: "We observed the full task flow with a taller user (75th percentile) and an average-height user (50th percentile). Shorter users had to stretch, stand on a chair or use a stick to reach the controls.",
        imgs: ["assets/img/cs/projector-05.jpg", "assets/img/cs/projector-06.jpg"],
        cap: "Task flow across body heights, and one of four user profiles."
      },
      {
        h: "Measuring the effort",
        text: "Users rated nine tasks with the NASA-TLX workload test, which scores mental, physical and time pressure, effort, performance and frustration.",
        points: [
          "Tasks: find the power switch, switch on, press power, pull down the screen, connect HDMI, power off, raise the screen, wrap the cable, switch off at the wall",
          "Connecting HDMI and finding the right switch caused the most frustration",
          "Physical demand peaked for pulling the screen and reaching the ceiling unit"
        ],
        imgs: ["assets/img/cs/projector-11.jpg", "assets/img/cs/projector-12.jpg"]
      },
      {
        h: "Key findings",
        points: [
          "Users struggle to reach the controls, especially shorter users",
          "Many are unsure which switch does what, and first-timers depend on others",
          "The projector takes several seconds to respond, with no visible feedback",
          "Layouts differ between classrooms, so experience doesn't transfer",
          "Everyone wanted a more accessible, understandable and independent way to use it"
        ],
        imgs: ["assets/img/cs/projector-10.jpg"]
      },
      {
        h: "Competitors and principles",
        text: "We compared Epson, BenQ, ViewSonic, Sony and Panasonic on control access, button recognition, feedback, connectivity and error recovery. Then we turned the pain points into design principles from cognitive ergonomics.",
        points: [
          "Hick's law and recognition over recall: fewer, clearly labelled choices",
          "Fitts' law and affordance: big targets within easy reach",
          "Error prevention and recovery for connection problems",
          "Visibility of system status and instant feedback (Doherty threshold)"
        ],
        imgs: ["assets/img/cs/projector-15.jpg", "assets/img/cs/projector-17.jpg"]
      },
      {
        h: "The concept",
        text: "Instead of redesigning the projector, we focused on the physical controls and the feedback around them.",
        points: [
          "Staff insert their college ID card into a wall slot to start a session",
          "Their laptop connects to a control panel over the college Wi-Fi",
          "From the laptop they raise or lower the screen, choose the source, set volume and adjust the picture",
          "A wall unit with large tactile keys and an LCD works as a backup and shows every action",
          "To finish, they disconnect and take their card back"
        ],
        imgs: ["assets/img/cs/projector-19.jpg", "assets/img/projector-concept.jpg"],
        cap: "Early sketches and the final system."
      },
      {
        h: "The interface",
        text: "The laptop console shows everything at a glance: lamp life, input source, audio, connection status and a screen slider. Two rounds of iteration made it calmer and quicker to use.",
        imgs: ["assets/img/projector-ui.jpg", "assets/img/cs/projector-29.jpg", "assets/img/cs/projector-30.jpg"]
      },
      {
        h: "Physical keys with feedback",
        text: "A small LCD sits above the keys and confirms every press, so users always know whether the projector received the command. The keys are only needed when the laptop can't be used.",
        imgs: ["assets/img/cs/projector-23.jpg"]
      },
      {
        h: "Prototype and testing",
        text: "We built a physical prototype of the wall unit and the console, storyboarded the whole interaction and made an animation of it. Users said the laptop interface made the projector easier to operate, the LCD made it clear whether a button worked, and the ID card made setup feel simpler. Because the system depends on stable Wi-Fi, we kept an HDMI connection as a backup.",
        imgs: ["assets/img/cs/projector-28.jpg", "assets/img/cs/projector-26.jpg", "assets/img/projector.jpg"]
      }
    ],
    links: []
  },

  /* ---------------------------------------------------------------- Posture */
  {
    id: "posture",
    group: "industrial",
    status: "",
    title: "Posture Ergonomics",
    kind: "Product Design · Ergonomics",
    one: "An add-on back support that improves posture on the existing Learning Commons chairs.",
    img: "assets/img/posture.jpg",
    tags: ["Posture study", "Anthropometry", "Prototype"],
    team: "Group project",
    specs: [
      ["Data", "5th–95th percentile"],
      ["Method", "Marker-based posture readings"],
      ["Approach", "Add-on, not a redesign"]
    ],
    overview: "Students sit on the Learning Commons chairs for hours, but the chairs give almost no support to the lower back. Replacing every chair wasn't possible, so we designed a back support that attaches to the existing chair and fixes the posture problem.",
    problem: "Students slouch on chairs that give no lumbar support. Could a simple add-on fix that without replacing the chairs?",
    // 1 · Problem & Design Thinking
    forWhom: "Students who sit for hours on the Learning Commons chairs.",
    why: "Replacing every chair wasn't practical. An add-on support fixes the missing lumbar support for a fraction of the cost and works on the chairs that already exist.",
    // 2 · Design Process & Final Outcome  (steps: Research, Ideate, Prototype, Test, Refine; leave out any you didn't do)
    process: [
      ["Research", "Ergonomics study, posture observation across campus, marker-based posture readings and Indian anthropometric data."],
      ["Ideate", "Sketches of detachable back supports sized for the 5th–95th percentile range."],
      ["Prototype", "Hands-on prototypes through material exploration and form testing."],
      ["Test", "Tested on the real chair: better posture, less slouching and better back alignment."],
      ["Refine", "Adjusted the form from comfort feedback and extended the support up the whole back."]
    ],
    outcome: "An attachable, curved back support with cushioning that follows the spine, made for the existing Learning Commons chair.",
    outcomeImg: "assets/img/posture.jpg",
    story: [
      {
        h: "What makes a chair ergonomic",
        text: "Good posture on a chair depends on four things: lumbar support, the right seat height, enough seat depth and a supportive backrest. Together they keep the spine aligned and prevent fatigue and long-term pain.",
        imgs: ["assets/img/cs/posture-03.jpg"]
      },
      {
        h: "Observing how people sit",
        text: "We observed students in different seating places across campus.",
        points: [
          "Slouching was the most common posture",
          "Necks pushed forward towards screens",
          "Weight unevenly spread across the seat",
          "Back support, where it existed, was rarely used"
        ],
        imgs: ["assets/img/cs/posture-04.jpg"]
      },
      {
        h: "The Learning Commons chair",
        text: "We chose the Learning Commons chair because it is used so widely. It gives minimal lower back support, pushes users into a slouch, and its material isn't comfortable for long sitting.",
        imgs: ["assets/img/cs/posture-05.jpg"]
      },
      {
        h: "Posture readings",
        text: "We placed visual markers on the body and photographed students while they worked, to read the angles of the spine, arms and legs.",
        points: [
          "Too much curvature in the lower spine",
          "No lumbar support, leading to slouching",
          "Arms placed badly because the table height didn't match",
          "Legs in unnatural positions, without proper grounding"
        ],
        imgs: ["assets/img/posture-readings.jpg"]
      },
      {
        h: "Using Indian body data",
        text: "We used Indian anthropometric data to size the support, taking the range from the 5th percentile female to the 95th percentile male for the lower back. The lower lumbar region became the key area of intervention, and the support was shaped as an arc that follows the natural curve of the spine.",
        imgs: ["assets/img/cs/posture-07.jpg"]
      },
      {
        h: "Concepts and prototype",
        text: "We explored several detachable supports in sketches, then built and tested them with real material and comfort feedback.",
        points: [
          "Attachable to the existing chair, without changing it",
          "Flexible structure that adapts to the chair",
          "Focused support for the lower back",
          "Lightweight and quick to attach"
        ],
        imgs: ["assets/img/cs/posture-08.jpg", "assets/img/cs/posture-09.jpg"]
      },
      {
        h: "Final design",
        text: "The final support extends the backrest all the way up, with enough cushioning to rest the back and a curve that follows the spine. Tested in real use, it improved sitting posture, reduced slouching and gave better back alignment.",
        imgs: ["assets/img/posture.jpg"]
      }
    ],
    links: []
  },

  /* ---------------------------------------------------------------- Budget Buddy */
  {
    id: "budgetbuddy",
    group: "uiux",
    status: "",
    title: "Budget Buddy",
    kind: "UI/UX · Mobile app",
    one: "A money tracker for students that logs UPI payments automatically and remembers who owes you.",
    img: "assets/img/budgetbuddy.jpg",
    tags: ["UX research", "App design", "React Native"],
    team: "Solo project",
    specs: [
      ["Survey", "44 students"],
      ["Interviews", "4"],
      ["Competitors", "6 apps"],
      ["SMS parser", "31 / 31 tests pass"]
    ],
    overview: "Budget Buddy is a friendly money tracker that does the remembering for students. It reads bank payment SMS on the phone, turns them into expenses with one tap, shows how much budget is left, and keeps track of money lent to friends. I researched, designed and built it myself, and it runs on Android.",
    problem: "“I only know I am overspending after my account balance drops.” Students track money by looking back at bank history, not ahead.",
    // 1 · Problem & Design Thinking
    forWhom: "College students on a monthly allowance (hostellers, PG residents and day scholars) who pay almost everything by UPI.",
    why: "Students already get a bank SMS for every UPI payment, but nobody reads them. Turning those SMS into one-tap expenses removes manual logging, the main reason people give up on budgeting apps. And none of 6 competitor apps tracked money lent to friends.",
    // 2 · Design Process & Final Outcome  (steps: Research, Ideate, Prototype, Test, Refine; leave out any you didn't do)
    process: [
      ["Research", "Literature review, a survey of 44 students, 4 interviews, affinity mapping and 6 competitor apps."],
      ["Ideate", "UX canvas, 3 personas, card sorting into must/should/could, and user flows."],
      ["Prototype", "Two wireframe rounds, then a working Android app in React Native with a Kotlin SMS module."],
      ["Test", "16 Android test builds on a real phone; the SMS parser passes 31 of 31 test messages."],
      ["Refine", "Swapped OTP for email and Google sign-in, made “money left” the main number, and added Buddy for first-time users."]
    ],
    outcome: "A working Android app: automatic UPI tracking with Accept or Deny, a money-left dashboard, a lend tracker, savings goals, and Buddy, who answers in English and Hinglish.",
    outcomeImg: "assets/img/cs/budgetbuddy-23.jpg",
    // Clickable app prototype shown at the end of the case study.
    // Each screen has tap areas ("hot") in % of the screen: x, y, width, height, and which screen it opens ("to").
    prototype: {
      title: "Try the app prototype",
      note: "Tap around the real screens: the bell, the Buddy face, the tabs and the close button all work.",
      link: ["Download the APK on GitHub", "https://github.com/aherihalder-wq/budget-buddy"],
      screens: [
        { id: "dashboard", name: "Dashboard", img: "assets/img/proto/dashboard.jpg", hot: [
          { x: 85, y: 2, w: 13, h: 6, to: "notifications", label: "Notifications" },
          { x: 3, y: 81, w: 15, h: 7, to: "buddy", label: "Ask Buddy" },
          { x: 55, y: 91, w: 21, h: 8, to: "analytics", label: "Analytics" } ] },
        { id: "buddy", name: "Buddy", img: "assets/img/proto/buddy.jpg", hot: [
          { x: 86, y: 41, w: 12, h: 6, to: "dashboard", label: "Close Buddy" } ] },
        { id: "analytics", name: "Analytics", img: "assets/img/proto/analytics.jpg", hot: [
          { x: 2, y: 91, w: 24, h: 8, to: "dashboard", label: "Dashboard" },
          { x: 85, y: 1, w: 13, h: 6, to: "notifications", label: "Notifications" },
          { x: 2, y: 76, w: 16, h: 8, to: "buddy", label: "Ask Buddy" } ] },
        { id: "notifications", name: "Notifications", img: "assets/img/proto/notifications.jpg", hot: [
          { x: 2, y: 1, w: 14, h: 6, to: "dashboard", label: "Back" },
          { x: 85, y: 1, w: 13, h: 6, to: "dashboard", label: "Back" },
          { x: 2, y: 89, w: 16, h: 9, to: "buddy", label: "Ask Buddy" } ] }
      ]
    },
    story: [
      {
        h: "The problem in numbers",
        text: "A survey of 44 students showed that money slips away in small UPI payments that nobody writes down.",
        points: [
          "55% only check their bank or UPI history",
          "59% overspend on non-essentials, and 52% spend the most on food",
          "82% go over their budget at least once a month",
          "Only 4.5% use a budgeting app"
        ],
        imgs: ["assets/img/cs/budgetbuddy-03.jpg", "assets/img/cs/budgetbuddy-10.jpg"]
      },
      {
        h: "Mapping the whole problem",
        text: "Before drawing any screen, I mapped problems, users, motives, fears, alternatives and solutions on one UX canvas. The biggest fears were running out of money before month-end, privacy risks from reading SMS, complex setup, and the awkwardness of asking friends to repay.",
        imgs: ["assets/img/cs/budgetbuddy-05.jpg"]
      },
      {
        h: "Listening first",
        text: "Five research papers on student money habits, UPI use and why people stop logging expenses, then interviews with four students aged 19 to 22: a hosteller, a day scholar, an intern and a student who lends money often.",
        points: [
          "“I remember big expenses but forget tea, snacks and cab payments.”",
          "“I check bank history instead of using budgeting apps.”",
          "“Sometimes I lend money to friends and completely forget about it.”"
        ],
        imgs: ["assets/img/cs/budgetbuddy-08.jpg", "assets/img/cs/budgetbuddy-11.jpg"],
        cap: "What students told us, and the features they rated highest (77% would use an app like this)."
      },
      {
        h: "Making sense of it",
        text: "Research notes were grouped by affinity mapping into five clusters, which became five insights.",
        points: [
          "Students prefer low-effort or automatic tracking over manual logging",
          "They need simple visual guidance to stay within a monthly budget",
          "They want goal-based saving, not just expense tracking",
          "They need clear spending insights and timely reminders before overspending",
          "Existing budgeting apps feel complex and aren't made for students"
        ],
        imgs: ["assets/img/cs/budgetbuddy-12.jpg", "assets/img/cs/budgetbuddy-13.jpg"]
      },
      {
        h: "From insight to design decision",
        text: "Every feature answers something students said.",
        points: [
          "Manual logging gets forgotten → bank SMS detected automatically; the student taps Accept or Deny",
          "Overspending is noticed too late → the dashboard leads with money left, plus an alert at 80%",
          "Lent money is forgotten → a lend tracker with reminders",
          "Saving needs a target → savings goals with progress",
          "Existing apps feel complex → calm design and Buddy, a helper who speaks English and Hinglish"
        ],
        imgs: ["assets/img/cs/budgetbuddy-14.jpg"]
      },
      {
        h: "The gap in the market",
        text: "I compared six money apps (Walnut, Money Manager, Monefy, Wallet by BudgetBakers, Ivy Wallet and Fold Money) feature by feature. None of them let students track money lent to friends.",
        imgs: ["assets/img/cs/budgetbuddy-15.jpg", "assets/img/cs/budgetbuddy-16.jpg"]
      },
      {
        h: "Who it's for",
        text: "Three personas guided every screen: Rohit, a hosteller on a fixed allowance who forgets small daily expenses; Riya, who shares a PG and juggles rent and several payment apps; and Karan, who commutes from home on pocket money and spends heavily on food delivery and outings. Card sorting then split features into must-have, should-have and could-have.",
        imgs: ["assets/img/cs/budgetbuddy-17.jpg", "assets/img/cs/budgetbuddy-18.jpg"]
      },
      {
        h: "Flows and iterations",
        text: "I mapped sign-up, SMS permission, budget setup and the overspending path, then designed in three rounds.",
        points: [
          "Round 1 wireframes: OTP login and a busy dashboard with too many widgets",
          "Round 2: one number leads, money left, with shorter onboarding and a calmer dashboard",
          "Final build: email and Google sign-in, a calm violet theme, and Buddy to guide first-time users"
        ],
        imgs: ["assets/img/cs/budgetbuddy-20.jpg", "assets/img/cs/budgetbuddy-21.jpg", "assets/img/cs/budgetbuddy-22.jpg"]
      },
      {
        h: "The finished app",
        text: "A payment SMS arrives, the amount and merchant are spotted, a notification appears, and the student taps Accept or Deny. The budget left updates instantly. Buddy answers questions like “kitna bacha?” with real numbers and can log “spent 50 on tea” in one line.",
        points: [
          "Dashboard, analytics with a monthly PDF report, sorted notifications",
          "Lend tracker, savings goals, friendly reminders at most once a day",
          "10 currencies, custom month start, dark mode and app lock"
        ],
        imgs: ["assets/img/cs/budgetbuddy-23.jpg", "assets/img/cs/budgetbuddy-24.jpg", "assets/img/budgetbuddy-app.jpg"]
      },
      {
        h: "Building it for real",
        text: "The app is one TypeScript codebase in React Native and Expo, with a Kotlin module for reading SMS, on-phone storage and Firebase sign-in and backup. Testing on a real phone surfaced problems the preview never showed.",
        points: [
          "Release build crashed at start: fixed build settings that removed background-task code",
          "SMS permission was blocked: installed over USB with permission granted",
          "Bank SMS not detected: rewrote the parser until 31 of 31 test messages passed",
          "Private by design: no account means data never leaves the phone, and only bank payment SMS are read"
        ],
        imgs: ["assets/img/cs/budgetbuddy-26.jpg", "assets/img/cs/budgetbuddy-27.jpg", "assets/img/cs/budgetbuddy-28.jpg"]
      },
      {
        h: "What I learned, and what's next",
        points: [
          "Automation needs a human check: Accept and Deny made SMS tracking feel trustworthy, not creepy",
          "Test on a real phone early: the hardest problems only appeared on a device",
          "Platform rules shape design: Android's SMS rules decided how the app can be installed",
          "Next: a Google Play closed test with 12 testers, more banks' SMS formats, and shared budgets for roommates"
        ],
        imgs: ["assets/img/cs/budgetbuddy-30.jpg", "assets/img/cs/budgetbuddy-31.jpg"]
      }
    ],
    links: [
      ["Code and APK on GitHub", "https://github.com/aherihalder-wq/budget-buddy"]
    ]
  },

  /* ---------------------------------------------------------------- First Five Minutes */
  {
    id: "firstfive",
    group: "uiux",
    status: "In progress",
    title: "First Five Minutes",
    kind: "UI/UX · Service",
    one: "Helping untrained bystanders take the right first steps in a public cardiac emergency.",
    img: "assets/img/firstfive.jpg",
    tags: ["Research", "Personas", "Journey mapping", "IA"],
    team: "Solo project",
    specs: [
      ["Critical window", "4–6 minutes"],
      ["Personas", "4"],
      ["Insights", "7"],
      ["Stage", "Research and concept"]
    ],
    overview: "When someone collapses in a street, a station or a market, the first five minutes decide whether they survive. Ambulances usually arrive later, and the people nearby rarely act. This project is designing a service, an app and a public first-aid pod, that helps an untrained bystander do the right thing in those minutes.",
    problem: "How might we empower untrained bystanders to take correct first-aid action during the critical first five minutes?",
    // 1 · Problem & Design Thinking
    forWhom: "Untrained bystanders in public places: students, office workers, parents and street vendors with basic phones.",
    why: "People don't freeze because they don't care. They freeze because they don't know what to do and fear doing it wrong. Step-by-step guidance in the moment, plus a public first-aid pod that works even without the app, gives anyone the confidence to act inside the survival window.",
    // 2 · Design Process & Final Outcome  (steps: Research, Ideate, Prototype, Test, Refine; leave out any you didn't do)
    process: [
      ["Research", "CPR survival window, why bystanders hesitate, the Good Samaritan Law, and 7 insights."],
      ["Ideate", "4 personas, a minute-by-minute journey map, a point of view, app information architecture and the 3-layer Pod."],
      ["Prototype", "Next: wireframes for the emergency flow and a physical pod prototype."]
    ],
    outcome: "In progress: a defined service concept (an emergency guidance app and a public first-aid Pod) ready for wireframing and prototyping.",
    outcomeImg: "assets/img/cs/firstfive-19.jpg",
    story: [
      {
        h: "Choosing the emergency",
        text: "I first looked at many kinds of public emergencies (road accidents, sudden collapse, violence, safety, natural disasters) and the places they happen, then focused on sudden cardiac arrest, where bystander action matters most.",
        imgs: ["assets/img/cs/firstfive-04.jpg"]
      },
      {
        h: "The survival window",
        text: "Treatment for cardiac arrest has to start right away. Brain damage can begin after about four minutes without oxygen, and survival drops sharply after eight to ten minutes without CPR.",
        points: [
          "CPR should start within 4–6 minutes of collapse",
          "Immediate CPR can double or triple the chance of survival",
          "Advanced life support should follow within 10–12 minutes, but ambulances often arrive after the window"
        ],
        imgs: ["assets/img/cs/firstfive-05.jpg"]
      },
      {
        h: "Why people hesitate",
        text: "People don't stay back because they don't care. They stay back because they are afraid of doing something wrong.",
        points: [
          "Fear of causing more harm",
          "Legal and procedural hassles",
          "Safety and hygiene concerns",
          "The bystander effect: everyone waits for someone else",
          "No training and no confidence"
        ],
        imgs: ["assets/img/cs/firstfive-06.jpg", "assets/img/cs/firstfive-07.jpg"],
        cap: "India's Good Samaritan Law (Section 134A of the Motor Vehicles Act) protects people who help, but few know about it."
      },
      {
        h: "Seven insights",
        points: [
          "People hesitate not because they don't care, but because they are afraid of doing something wrong",
          "The first responder is almost always an untrained civilian",
          "The survival gap lies between collapse and ambulance arrival",
          "People need real-time guidance in the moment, not prior training",
          "Fear of legal or social consequences is stronger than the instinct to help",
          "Most bystanders try to call an ambulance first, but lack clarity on how to assess the person",
          "In the first moments, bystanders try basic help but lack structured guidance, leading to confusion and delay"
        ],
        imgs: ["assets/img/cs/firstfive-09.jpg", "assets/img/cs/firstfive-10.jpg"]
      },
      {
        h: "Four people in the crowd",
        text: "Personas cover very different bystanders: Rohan, a 21-year-old design student at a metro station; Bhavya, 25, in an office canteen; Bhairavi, 42, a marketing manager walking with her daughter; and Ramesh, 45, a street vendor with a basic phone who mainly calls.",
        imgs: ["assets/img/firstfive-persona.jpg", "assets/img/cs/firstfive-12.jpg", "assets/img/cs/firstfive-13.jpg", "assets/img/cs/firstfive-14.jpg"]
      },
      {
        h: "The journey, minute by minute",
        text: "A journey map follows Rohan from witnessing the collapse through panic, deciding, seeking help and using the app until help arrives, tracking his actions, thoughts, emotions and stress at each step.",
        imgs: ["assets/img/firstfive.jpg"]
      },
      {
        h: "Point of view",
        text: "Haygriv, a 21-year-old design student, needs a way to know exactly what to do instantly during a public medical emergency, because panic and the fear of doing something wrong cause him to freeze and take no action.",
        imgs: ["assets/img/cs/firstfive-17.jpg"]
      },
      {
        h: "App structure",
        text: "The information architecture keeps the emergency path one tap from home: Emergency → what you can see → symptoms → first aid → pod → help arriving → “you did great”. Signing up is a gentle nudge after the emergency, never a barrier before it.",
        imgs: ["assets/img/cs/firstfive-18.jpg"]
      },
      {
        h: "The Pod",
        text: "Pods are public first-aid boxes, like AED boxes but made affordable and suited to India, with three layers so they work for everyone.",
        points: [
          "Layer 1, mechanical: a simple pull latch that anyone can open, no technology needed",
          "Layer 2, accountability: opening it sends an automatic SMS with time and location, over a basic network",
          "Layer 3, digital (optional): app users get notified and build a “lives saved” profile"
        ],
        imgs: ["assets/img/cs/firstfive-19.jpg", "assets/img/cs/firstfive-20.jpg"]
      },
      {
        h: "Next steps",
        text: "The research and concept are done. Next: wireframes and screens for the emergency flow, and a physical prototype of the pod."
      }
    ],
    links: []
  },

  /* ---------------------------------------------------------------- The Indian Jhamela */
  {
    id: "jhamela",
    group: "electronics",
    status: "",
    title: "The Indian Jhamela",
    kind: "Interactive game · ESP32",
    one: "A board game about everyday Indian chaos, run by a tap-card station that hands out tasks.",
    img: "assets/img/jhamela-poster.jpg",
    tags: ["ESP32", "NFC", "Illustration", "Game design"],
    team: "",
    specs: [
      ["Board", "6 magnetic sections"],
      ["Controller", "ESP32 + 3.5\" TFT"],
      ["Input", "PN532 NFC cards"],
      ["Tasks", "103"]
    ],
    overview: "The Indian Jhamela is a hybrid board game inspired by the daily hustle of Indian life: traffic, detours, chaos and the people around us. Players move around a hexagonal board, tap cards on an electronic Tap Station to get funny tasks, mess with each other's progress, and try to finish with the fewest steps.",
    problem: "How can a board game turn the humour and unpredictability of everyday Indian life into its actual mechanics, not just its decoration?",
    // 1 · Problem & Design Thinking
    forWhom: "Friends and families who play board games together, and anyone who knows the everyday Indian “jhamela”.",
    why: "We wanted Indian culture inside the rules, not only in the artwork. A Tap Station gives every turn a surprise task, lets players pass tasks to each other and keeps score automatically, which a printed board alone can't do.",
    // 2 · Design Process & Final Outcome  (steps: Research, Ideate, Prototype, Test, Refine; leave out any you didn't do)
    process: [
      ["Research", "Everyday Indian situations, and how board games create social interaction and replay value."],
      ["Ideate", "Rules built on “fewest steps wins”, special cards, and sketch iterations of the Tap Station form."],
      ["Prototype", "Built the Tap Station with an ESP32, a TFT screen and an NFC reader; hand-drew and digitised the board and cards."],
      ["Refine", "Simplified the Tap Station from bulky forms to one compact angled housing with an inclined screen and tap area."]
    ],
    outcome: "A playable hybrid board game: a 6-part magnetic board, tokens, NFC cards and a working Tap Station with 103 tasks.",
    outcomeImg: "assets/img/jhamela-poster.jpg",
    story: [
      {
        h: "Why this game",
        text: "Traditional Indian games show our heritage, but contemporary Indian life (traffic, delays, social chaos) has its own humour. We wanted to move beyond using Indian culture as decoration and build it into how the game works. The core rule, finishing with the fewest steps, comes from our everyday habit of looking for shortcuts.",
        imgs: ["assets/img/cs/jhamela-02.jpg", "assets/img/cs/jhamela-05.jpg"]
      },
      {
        h: "The brief",
        text: "A physical, modular board combined with player identification, task generation, challenges and digitally triggered chance events.",
        points: [
          "Cultural: translate everyday Indian experiences into gameplay",
          "Social: encourage face-to-face play and interaction between players",
          "Mechanics: tasks, scoring, chance and player intervention as separate but linked systems",
          "Physical–digital: a Tap Station and card inputs trigger tasks and events",
          "Modular: a hexagonal board of six magnetic triangles; replayable and easy to learn"
        ],
        imgs: ["assets/img/cs/jhamela-03.jpg"]
      },
      {
        h: "Designing the Tap Station",
        text: "The Tap Station is the brain of the game. Sketch iterations explored its geometry, screen orientation, surface angle and where the parts sit, removing bulky forms and clutter until it became one compact, angled housing.",
        points: [
          "Inclined screen: easy to read tasks and scores from a seated position",
          "Inclined tap area: a clear, easy zone to tap cards",
          "Accessible switch: one press confirms a task, a long press ends the game"
        ],
        imgs: ["assets/img/cs/jhamela-06.jpg", "assets/img/cs/jhamela-07.jpg", "assets/img/cs/jhamela-08.jpg"]
      },
      {
        h: "Visual identity",
        text: "Every illustration on the board and cards was hand-drawn and then digitised, inspired by Indian culture, traditional patterns and everyday desi life: auto-rickshaws, chai, mirchi, jamun and kesar.",
        imgs: ["assets/img/cs/jhamela-09.jpg", "assets/img/cs/jhamela-11.jpg", "assets/img/cs/jhamela-12.jpg"]
      },
      {
        h: "How it plays",
        points: [
          "Roll the dice and move your token",
          "Tap your Player ID card on the Tap Station to get a task, then do it",
          "Press the switch to confirm; only task outcomes change your step score, not the dice",
          "Jhamela card: four times a game, pass a task to another player",
          "Mauke Pe Chauka card: land on a chance space and trigger a random event",
          "Reach END with the lowest step score to win"
        ],
        imgs: ["assets/img/cs/jhamela-13.jpg", "assets/img/cs/jhamela-14.jpg", "assets/img/cs/jhamela-15.jpg"]
      },
      {
        h: "Electronics",
        text: "The Tap Station runs on an ESP32-WROOM-32E board with a built-in 3.5-inch TFT screen. A PN532 NFC reader identifies cards, a push button gives short-press and long-press input, and USB-C powers and programs it.",
        imgs: ["assets/img/cs/jhamela-17.jpg", "assets/img/cs/jhamela-20.jpg"],
        cap: "Components and the circuit diagram."
      },
      {
        h: "Software",
        text: "The game logic is written in C++ with the Arduino framework. The main loop checks for card taps, works out who tapped, picks one of 103 tasks or a special event, updates scores and refreshes the screen, then shows a final scoreboard.",
        points: [
          "System start-up → card detection → player or card identification",
          "Task and movement processing → display and score update",
          "Game completion and final scoreboard"
        ],
        imgs: ["assets/img/cs/jhamela-19.jpg"]
      },
      {
        h: "The final game",
        imgs: ["assets/img/cs/jhamela-23.jpg"]
      }
    ],
    links: []
  }
];
