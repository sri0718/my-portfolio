// ============================================================
//  SITE CONTENT — edit your bio, education, social links and
//  other text here. Everything on this file is plain text.
// ============================================================

export const site = {
  // --- Identity -------------------------------------------------
  name: 'Sri Varshini',
  role: 'B.Tech AI & ML Student | Artist | Photographer',
  tagline: 'Between Code, Canvas & Camera.',
  subtitle: 'An AI & ML student exploring the world through drawing, art and photography.',
  altTagline: 'Learning through code. Creating through art. Seeing through a camera.',
  philosophy: 'Art is not just a hobby; it is also a career.',

  // --- Education (shown on the About page and in the footer) ---------
  education: {
    degree: 'B.Tech',
    field: 'Artificial Intelligence & Machine Learning',
    shortField: 'AI & ML',
    year: '2nd Year',
    institution: '', // optional — e.g. 'Your College Name'. Leave '' to hide it.
  },

  // --- Home: "Three Ways I See the World" -----------------------
  threeWays: [
    { name: 'Art', text: 'Turning observation into lines, shadows and form.', to: '/art' },
    { name: 'Photography', text: 'Capturing moments, light and details that might otherwise disappear.', to: '/photography' },
    { name: 'AI & ML', text: 'Learning to understand patterns, systems and technology.', to: '/about' },
  ],

  // --- Home: Code x Canvas x Camera ----------------------------
  triad: {
    code: { word: 'Code', items: ['Logic', 'Technology', 'AI', 'Problem Solving'] },
    canvas: { word: 'Canvas', items: ['Drawing', 'Creativity', 'Expression', 'Observation'] },
    camera: { word: 'Camera', items: ['Light', 'Composition', 'Moments', 'Storytelling'] },
  },

  // --- About page -----------------------------------------------
  about: {
    portrait: '/images/about/portrait.jpg', // upload your photo with exactly this name (until then a "coming soon" frame is shown)
    kicker: 'Artist & Photography Enthusiast',
    paragraphs: [
      "I'm a second-year B.Tech student specialising in Artificial Intelligence & Machine Learning. A lot of my time goes into algorithms, data and the logic behind intelligent systems.",
      'There is another side of me that has always been drawn to paper, pencils and light. I draw in graphite and charcoal, sketch portraits, experiment with digital art, and use photography to hold on to the details and moments that make me stop and look twice.',
      'Studying AI & ML trains me to think logically and look for patterns. Art and photography let me use the same curiosity differently — to observe closely, interpret, and express what I see.',
      "I'm still learning, still experimenting, and building this portfolio as I go.",
    ],
    contrast: {
      left: { label: 'Logic', text: 'AI & ML develops structured, logical thinking — breaking a problem into parts and finding the pattern inside it.' },
      right: { label: 'Observation', text: 'Art and photography let me explore observation, creativity and visual expression — slowing down and really seeing.' },
    },
    study: { title: 'What I Study', items: ['Artificial Intelligence & Machine Learning'] },
    create: { title: 'What I Create', items: ['Graphite', 'Charcoal', 'Pencil', 'Digital Art'] },
    capture: { title: 'What I Capture', items: ['Photography', 'Light', 'Nature', 'People', 'Details', 'Everyday moments'] },
  },

  // --- Photography page: "Things I Notice." ---------------------
  notice: {
    title: 'Things I Notice.',
    lead: "Sometimes I don't take photographs because something is extraordinary. I take them because a particular light, shadow, expression or moment makes me stop.",
    paragraphs: [
      'For me, photography is a way of paying attention. It is less about the camera and more about noticing — the way afternoon light lands on a wall, the shape a shadow makes, the second an expression changes.',
      "I'm still learning: how to frame, when to wait, what to leave out. These pages are a visual journal of that learning, not a portfolio of finished work.",
    ],
    notes: [
      { title: 'Light', text: 'How it falls, bends and changes a plain surface.' },
      { title: 'Shadow', text: 'The quiet shapes that give a frame its depth.' },
      { title: 'Expression', text: 'The small human moments between poses.' },
      { title: 'Detail', text: 'Things that are easy to walk past.' },
    ],
  },

  // --- Creative Journey timeline (edit freely) -------------------
  journey: [
    { tag: 'Study', phase: 'B.Tech Journey', label: 'AI & ML studies', text: 'Learning how machines learn — and building a way of thinking around logic, data and patterns.' },
    { tag: 'Art', phase: 'Art Journey', label: 'Developing drawing and sketching skills', text: 'Practising graphite, charcoal and pencil, studying portraits, and slowly finding a personal style.' },
    { tag: 'Photography', phase: 'Photography Journey', label: 'Exploring photography and visual storytelling', text: 'Learning to notice light, composition and small moments, one frame at a time.' },
    { tag: 'Present', phase: 'Present', label: 'Building a personal creative portfolio', text: 'Bringing code, canvas and camera together in one place — and continuing to learn.' },
  ],

  // --- Contact --------------------------------------------------
  contact: {
    heading: "Let's Create, Capture & Connect.",
    intro: 'If you would like to talk about art, photography, AI or just say hello, I would love to hear from you.',
    email: 'sree0718@gmail.com',
    // Optional: paste a Formspree (or similar) endpoint to receive form messages
    // directly, e.g. 'https://formspree.io/f/xxxxxxx'. Leave '' to open the
    // visitor's email app (mailto) instead.
    formEndpoint: '',
    socials: [
      { label: 'Instagram', handle: '@sree.art01234', url: 'https://www.instagram.com/sree.art01234/' },
      // To add more later, copy a line, e.g.
      // { label: 'Behance', handle: 'behance.net/yourname', url: 'https://www.behance.net/yourname' },
    ],
  },
}
