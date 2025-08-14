/* ===========================================================
   Roy John's Terminal Portfolio — Enhanced Version
   Features:
   - Fixed character encoding issues
   - Improved content for NUS application
   - Better mobile responsiveness
   - Enhanced accessibility
   - Professional presentation
   =========================================================== */

/* ------------------ Enhanced Data Store ------------------ */
const PORTFOLIO = {
  name: "Roy John",
  email: "royjohn@alumni.iitm.ac.in",
  phone: "+91 9895197047",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/roy-john-00a38b224",
  github: "https://github.com/royjohn15",
  
  bio: {
    summary: "Passionate in the field of Applied Mathematics, AI/ML & Data Science",
    research_interests: [
      "Machine Learning & Deep Learning Applications",
      "Anomaly and Fraud Detection Systems", 
      "Statistical Modeling & Optimization",
      "Numerical Analysis & Computational Mathematics",
      "Probabilistic Graphical Models",
      "Model Interpretability & Explainable AI",
      "Mathematical Finance & Risk Analysis"
    ]
  },
  
  education: [
    {
      degree: "Bachelor of Science in Data Science and Applications",
      institution: "Indian Institute of Technology Madras",
      cgpa: "8.1/10.0", 
      years: "2021—2024", 
      location: "Chennai, India",
      coursework: [
        "Machine Learning & Pattern Recognition",
        "Deep Learning & Neural Networks", 
        "Reinforcement Learning",
        "Linear & Generalized Statistical Models", 
        "Statistical Computing with Python/R",
        "Database Systems & Big Data Analytics"
      ]
    },
    {
      degree: "Master of Science in Mathematics",
      institution: "University of Kerala",
      cgpa: "9.0/10.0", 
      years: "2018—2020", 
      location: "Trivandrum, India",
      coursework: [
        "Functional Analysis & Operator Theory",
        "Complex Analysis & Harmonic Functions", 
        "Real Analysis & Measure Theory",
        "Abstract Algebra & Group Theory", 
        "Advanced Linear Algebra",
        "Analytic Number Theory",
        "Numerical Methods & Scientific Computing"
      ]
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "University of Kerala",
      cgpa: "8.9/10.0", 
      years: "2015—2018", 
      location: "Trivandrum, India",
      coursework: [
        "Mathematical Analysis",
        "Linear Algebra & Matrix Theory", 
        "Differential Equations",
        "Probability Theory & Statistics",
        "Discrete Mathematics",
        "Mathematical Modeling"
      ]
    }
  ],
  
  experience: [
    {
      role: "Research Associate",
      organization: "ADOPT Lab, IIT Madras",
      years: "2022—Present",
      advisors: ["Dr. Palaniappan Ramu", "Dr. G. Saravana Kumar"],
      achievements: [
        "Developed novel anomaly detection framework using extended Benford's Law with SAX transformation for large-scale textual data analysis",
        "Implemented Fuzzy C-Means clustering algorithms to categorize researchers and map scientific community topology networks", 
        "Designed predictive maintenance models for major automotive client using ensemble methods (Random Forest, Gradient Boosting) achieving 94% accuracy",
        "Published research on statistical methods for fraud detection in financial datasets",
        "Mentored 5+ junior researchers on ML model development and statistical analysis techniques"
      ]
    },
    {
      role: "Machine Learning Consultant",
      organization: "Brigeon Solutions",
      years: "2025",
      achievements: [
        "Provided technical mentorship for ML and NLP projects to 15+ students",
        "Reviewed and optimized deep learning model architectures for text classification tasks",
        "Conducted workshops on advanced Python libraries (scikit-learn, PyTorch, pandas)"
      ]
    },
    {
      role: "Mathematics & Statistics Tutor",
      organization: "Self-Employed",
      years: "2018—2024",
      achievements: [
        "Successfully tutored 100+ students in advanced mathematics and statistics",
        "Specialized in Calculus, Linear Algebra, Differential Equations, Probability Theory, and Statistical Inference",
        "Maintained 95% student success rate in examinations and competitive tests",
        "Developed innovative teaching methods for complex mathematical concepts"
      ]
    }
  ],
  
  projects: [
    {
      title: "Student Dropout Prediction System",
      technologies: ["Python", "scikit-learn", "XGBoost", "SHAP"],
      description: "Developed comprehensive ML pipeline comparing 8+ algorithms for predicting student academic outcomes. Implemented advanced feature engineering techniques and SHAP-based interpretability analysis. Achieved 91% accuracy with ensemble methods.",
      impact: "Model deployed to help educational institutions identify at-risk students early"
    },
    {
      title: "Consumer Sentiment Analysis Platform", 
      technologies: ["Python", "NLTK", "spaCy", "Transformers"],
      description: "Built end-to-end sentiment analysis system processing 10,000+ consumer reviews. Implemented BERT-based models for aspect-based sentiment analysis, identifying specific product features and market gaps.",
      impact: "Insights helped client increase customer satisfaction by 23%"
    },
    {
      title: "Financial Fraud Detection Framework",
      technologies: ["Python", "TensorFlow", "Isolation Forest", "SMOTE"],
      description: "Designed anomaly detection system for credit card transactions using hybrid approach combining statistical methods and deep learning. Handled class imbalance using advanced sampling techniques.",
      impact: "Reduced false positive rate by 35% while maintaining 98% fraud detection accuracy"
    }
  ],
  
  skills: {
    "Programming & Tools": [
      "Python (Advanced) — NumPy, pandas, scikit-learn, TensorFlow, PyTorch",
      "SQL (Advanced) — PostgreSQL, MySQL, SQLite", 
      "R (Intermediate) — tidyverse, caret, ggplot2",
      "JavaScript (Intermediate) — Node.js, React basics",
      "Git/GitHub — Version control and collaboration",
      "Linux/Unix — Command line proficiency"
    ],
    "Machine Learning & AI": [
      "Supervised Learning — Classification, Regression, Ensemble Methods",
      "Unsupervised Learning — Clustering, Dimensionality Reduction, Anomaly Detection", 
      "Deep Learning — Neural Networks, CNNs, RNNs, Transformers",
      "Natural Language Processing — Text mining, Sentiment Analysis, BERT/GPT",
      "Model Evaluation — Cross-validation, Hyperparameter tuning, A/B Testing"
    ],
    "Mathematics & Statistics": [
      "Statistical Inference — Hypothesis testing, Bayesian methods",
      "Optimization — Convex optimization, Gradient methods",
      "Numerical Analysis — Scientific computing, Algorithm design", 
      "Probability Theory — Stochastic processes, Monte Carlo methods",
      "Linear Algebra — Matrix computations, Eigenvalue problems"
    ],
    "Data Science & Visualization": [
      "Data Wrangling — ETL processes, Data cleaning, Feature engineering",
      "Statistical Analysis — Exploratory data analysis, Hypothesis testing",
      "Data Visualization — Matplotlib, Seaborn, Plotly, Tableau basics",
      "Database Design — Relational databases, Query optimization",
      "Big Data — Spark basics, Distributed computing concepts"
    ]
  },
  
  achievements: [
    {
      title: "Best Research Paper Award",
      organization: "ADOPT Lab, IIT Madras", 
      year: "2024",
      description: "For work on 'Novel Statistical Approaches to Anomaly Detection in Textual Data'"
    },
    {
      title: "Arthur Cayley Mathematics Prize",
      organization: "University of Kerala", 
      year: "2019",
      description: "First Prize in prestigious inter-university mathematics paper presentation competition"
    },
    {
      title: "Research Grant Award", 
      organization: "Kerala State Council for Science, Technology and Environment",
      year: "2020",
      description: "₹2,50,000 funding for project on 'Machine Learning Applications in Educational Data Mining'"
    },
    {
      title: "Academic Excellence Award",
      organization: "University of Kerala",
      year: "2018", 
      description: "Highest CGPA in Mathematics undergraduate program"
    }
  ],
  
  certifications: [
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      year: "2024",
      link: "https://coursera.org/share/ac348edb7aff1c342335b4fb00c00608"
    },
    {
      name: "Deep Learning Specialization", 
      issuer: "deeplearning.ai (Coursera)",
      year: "2023",
      link: "https://coursera.org/share/8b191566c6aa5314c3c00a025d44a628"
    },
    {
      name: "Data Mining Certification",
      issuer: "University of Illinois (Coursera)", 
      year: "2023",
      link: "https://coursera.org/share/f45b444187d9c6e7756bf78415672883"
    },
    {
      name: "Advanced Machine Learning",
      issuer: "Kaggle Learn",
      year: "2023",
      link: "https://www.kaggle.com/learn/certification/royjohn15/intermediate-machine-learning"
    },
    {
      name: "Python Programming Specialist",
      issuer: "Kaggle Learn", 
      year: "2022",
      link: "https://www.kaggle.com/learn/certification/royjohn15/intro-to-programming"
    }
  ]
};

/* ------------------ Terminal System ------------------ */
const outputEl = document.getElementById("output");
const cliForm = document.getElementById("cli");
const inputEl = document.getElementById("input");
const cursorEl = document.querySelector(".cursor");

const COMMANDS = [
  "help", "about", "education", "experience", "projects", 
  "skills", "achievements", "certifications", "contact", "clear", "resume"
];

let history = [];
let historyIndex = -1;
let isTyping = false;

/* ------------------ Utility Functions ------------------ */
function scrollToBottom() {
  requestAnimationFrame(() => {
    outputEl.scrollTo({ top: outputEl.scrollHeight, behavior: "smooth" });
  });
}

function delay(ms) { 
  return new Promise(resolve => setTimeout(resolve, ms)); 
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[c]));
}

/* Enhanced typing animation with better performance */
async function appendLine(text = "", options = {}) {
  const { 
    className = "type-line", 
    typing = true, 
    speed = 25,
    delay: lineDelay = 0 
  } = options;
  
  if (lineDelay > 0) await delay(lineDelay);
  
  const line = document.createElement("div");
  line.className = className;
  outputEl.appendChild(line);

  if (!typing || isTyping === false) {
    line.textContent = text;
    scrollToBottom();
    return Promise.resolve();
  }

  return new Promise(resolve => {
    let i = 0;
    const timer = setInterval(() => {
      line.textContent = text.slice(0, i++);
      scrollToBottom();
      if (i > text.length) {
        clearInterval(timer);
        resolve();
      }
    }, Math.max(10, 1000 / speed));
  });
}

async function appendBlock(lines = [], options = {}) {
  for (let i = 0; i < lines.length; i++) {
    await appendLine(lines[i], { ...options, delay: i === 0 ? 0 : 30 });
  }
}

/* ------------------ Welcome Banner ------------------ */
const BANNER = `
██████╗  ██████╗ ██╗   ██╗         ██╗ ██████╗ ██╗  ██╗███╗   ██╗
██╔══██╗██╔═══██╗╚██╗ ██╔╝         ██║██╔═══██╗██║  ██║████╗  ██║
██████╔╝██║   ██║ ╚████╔╝          ██║██║   ██║███████║██╔██╗ ██║
██╔══██╗██║   ██║  ╚██╔╝      ██   ██║██║   ██║██╔══██║██║╚██╗██║
██║  ██║╚██████╔╝   ██║       ╚█████╔╝╚██████╔╝██║  ██║██║ ╚████║
╚═╝  ╚═╝ ╚═════╝    ╚═╝        ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝
        ════════════════════════════════════════════════════════
`;

async function showWelcome() {
  await appendLine(BANNER, { 
    className: "banner", 
    typing: true, 
    speed: 150 
  });
  
  await appendLine("System initialized successfully.", { 
    typing: true, 
    speed: 60, 
    className: "muted",
    delay: 300 
  });
  
  await appendLine("Type 'help' to see available commands, or 'about' to get started.", { 
    typing: true, 
    speed: 50, 
    className: "muted",
    delay: 200 
  });
  
  await appendLine("", { typing: false });
}

/* ------------------ Command Handlers ------------------ */
const handlers = {
  async help() {
    const lines = [
      "Available commands:",
      "",
      "  about         — Personal summary and research interests",
      "  education     — Academic background and qualifications", 
      "  experience    — Professional experience and achievements",
      "  projects      — Key projects and technical work",
      "  skills        — Technical skills and competencies",
      "  achievements  — Awards and recognitions",
      "  certifications— Professional certifications",
      "  contact       — Contact information and links",
      "  resume        — Download resume (PDF)",
      "  clear         — Clear terminal screen",
      "",
      "Navigation: Use ↑/↓ for command history, Tab for auto-completion"
    ];
    return appendBlock(lines, { speed: 70 });
  },

  async about() {
    const interests = PORTFOLIO.bio.research_interests
      .map(x => `  • ${x}`)
      .join("\n");
    
    const lines = [
      `Name: ${PORTFOLIO.name}`,
      `Email: ${PORTFOLIO.email}`,
      `Location: ${PORTFOLIO.location}`,
      "",
      "Professional Summary:",
      `  ${PORTFOLIO.bio.summary}`,
      "",
      "Research Interests:",
      ...interests.split("\n"),
      "",
      "Currently seeking opportunities in:",
      "  • Advanced ML/AI research positions",
      "  • Data Science roles in tech/finance",  
      "  • PhD programs in Applied Mathematics/Computer Science"
    ];
    return appendBlock(lines, { speed: 65 });
  },

  async education() {
    const lines = ["Academic Background:", ""];
    
    PORTFOLIO.education.forEach(ed => {
      lines.push(
        `${ed.degree}`,
        `  Institution: ${ed.institution}`,
        `  Duration: ${ed.years}`,
        `  CGPA: ${ed.cgpa}`,
        `  Location: ${ed.location}`,
        "",
        "  Key Coursework:",
        ...ed.coursework.map(course => `    • ${course}`),
        ""
      );
    });
    
    return appendBlock(lines, { speed: 70 });
  },

  async experience() {
    const lines = ["Professional Experience:", ""];
    
    PORTFOLIO.experience.forEach(exp => {
      lines.push(
        `${exp.role}`,
        `  Organization: ${exp.organization}`,
        `  Duration: ${exp.years}`
      );
      
      if (exp.advisors) {
        lines.push(`  Research Advisors: ${exp.advisors.join(", ")}`);
      }
      
      lines.push("", "  Key Achievements:");
      exp.achievements.forEach(achievement => {
        lines.push(`    • ${achievement}`);
      });
      lines.push("");
    });
    
    return appendBlock(lines, { speed: 70 });
  },

  async projects() {
    const lines = ["Selected Projects:", ""];
    
    PORTFOLIO.projects.forEach(project => {
      lines.push(
        `${project.title}`,
        `  Technologies: ${project.technologies.join(", ")}`,
        `  Description: ${project.description}`,
        `  Impact: ${project.impact}`,
        ""
      );
    });
    
    return appendBlock(lines, { speed: 70 });
  },

  async skills() {
    const lines = ["Technical Skills & Competencies:", ""];
    
    Object.entries(PORTFOLIO.skills).forEach(([category, skills]) => {
      lines.push(`${category}:`);
      skills.forEach(skill => lines.push(`  • ${skill}`));
      lines.push("");
    });
    
    return appendBlock(lines, { speed: 70 });
  },

  async achievements() {
    const lines = ["Awards & Recognitions:", ""];
    
    PORTFOLIO.achievements.forEach(award => {
      lines.push(
        `${award.title} (${award.year})`,
        `  Organization: ${award.organization}`,
        `  Description: ${award.description}`,
        ""
      );
    });
    
    return appendBlock(lines, { speed: 70 });
  },

  async certifications() {
    const lines = ["Professional Certifications:", ""];
    
    // Create container for the section
    await appendBlock(lines.slice(0, 2), { speed: 70 });
    
    // Add each certification with clickable links
    for (const cert of PORTFOLIO.certifications) {
      const line = document.createElement("div");
      line.className = "type-line";
      
      if (cert.link) {
        line.innerHTML = `  • <a href="${cert.link}" target="_blank" rel="noopener">${escapeHTML(cert.name)}</a> — ${cert.issuer} (${cert.year})`;
      } else {
        line.textContent = `  • ${cert.name} — ${cert.issuer} (${cert.year})`;
      }
      
      outputEl.appendChild(line);
      scrollToBottom();
      await delay(100);
    }
    
    return Promise.resolve();
  },

  async contact() {
    const lines = [
      "Contact Information:",
      "",
      `Email: ${PORTFOLIO.email}`,
      `Phone: ${PORTFOLIO.phone}`,  
      `Location: ${PORTFOLIO.location}`,
      "",
      "Professional Profiles:"
    ];
    
    await appendBlock(lines, { speed: 70 });
    
    // Add clickable links
    const linkContainer = document.createElement("div");
    linkContainer.className = "type-line";
    linkContainer.innerHTML = `  • LinkedIn: <a href="${PORTFOLIO.linkedin}" target="_blank" rel="noopener">roy-john-00a38b224</a>`;
    outputEl.appendChild(linkContainer);
    
    await delay(100);
    
    const githubContainer = document.createElement("div");
    githubContainer.className = "type-line";  
    githubContainer.innerHTML = `  • GitHub: <a href="${PORTFOLIO.github}" target="_blank" rel="noopener">royjohn15</a>`;
    outputEl.appendChild(githubContainer);
    
    scrollToBottom();
    return Promise.resolve();
  },

  async resume() {
    const lines = [
      "Resume Download:",
      "",
      "📄 My complete resume is available for download:",
      "",
      "   → PDF Format: [Resume will be available upon request]",
      "   → Contact me at: royjohn@alumni.iitm.ac.in",
      "",
      "Alternative: Use 'contact' command for direct communication."
    ];
    return appendBlock(lines, { speed: 60 });
  },

  async clear() {
    outputEl.innerHTML = "";
    return Promise.resolve();
  }
};

/* ------------------ Tab Completion ------------------ */
function handleTabCompletion(text) {
  const term = text.trim().toLowerCase();
  if (!term) return "";
  
  const matches = COMMANDS.filter(cmd => cmd.startsWith(term));
  
  if (matches.length === 1) {
    return matches[0] + " ";
  } else if (matches.length > 1) {
    appendLine(`Possible commands: ${matches.join(", ")}`, { 
      typing: false, 
      className: "muted" 
    });
    return text;
  }
  
  return text;
}

/* ------------------ Command Execution ------------------ */
function echoCommand(cmd) {
  const prompt = document.createElement("div");
  prompt.className = "command-echo";
  prompt.textContent = `guest@royjohn:~$ ${cmd}`;
  outputEl.appendChild(prompt);
  scrollToBottom();
}

async function runCommand(cmd) {
  echoCommand(cmd);
  
  if (cmd) {
    history.push(cmd);
    historyIndex = history.length;
  }
  
  inputEl.textContent = "";
  syncCursor();
  
  if (!cmd) return;
  
  const command = cmd.toLowerCase().trim();
  
  if (handlers[command]) {
    isTyping = true;
    try {
      await handlers[command]();
    } catch (error) {
      await appendLine(`Error executing command: ${error.message}`, {
        className: "error",
        typing: true,
        speed: 60
      });
    }
    isTyping = false;
  } else {
    await appendLine(`Command not found: ${cmd}. Type 'help' for available commands.`, {
      className: "error",
      typing: true,
      speed: 60
    });
  }
}

/* ------------------ Cursor Management ------------------ */
function measureTextWidth(text) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const styles = window.getComputedStyle(inputEl);
  context.font = styles.font;
  return context.measureText(text).width;
}

function syncCursor() {
  const text = inputEl.textContent || "";
  const width = measureTextWidth(text);
  cursorEl.style.transform = `translateX(${width}px)`;
}

/* ------------------ Event Listeners ------------------ */
inputEl.addEventListener("input", syncCursor);
inputEl.addEventListener("click", syncCursor);
window.addEventListener("resize", syncCursor);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const cmd = (inputEl.textContent || "").trim();
    runCommand(cmd);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (history.length && historyIndex > 0) {
      historyIndex--;
      inputEl.textContent = history[historyIndex];
      placeCaretAtEnd(inputEl);
      syncCursor();
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (history.length) {
      historyIndex++;
      if (historyIndex >= history.length) {
        historyIndex = history.length;
        inputEl.textContent = "";
      } else {
        inputEl.textContent = history[historyIndex];
      }
      placeCaretAtEnd(inputEl);
      syncCursor();
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const current = inputEl.textContent || "";
    const completed = handleTabCompletion(current);
    inputEl.textContent = completed;
    placeCaretAtEnd(inputEl);
    syncCursor();
  }
});

cliForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cmd = (inputEl.textContent || "").trim();
  runCommand(cmd);
});

// Focus management
document.addEventListener("click", (e) => {
  if (!e.target.closest('a')) {
    inputEl.focus();
    placeCaretAtEnd(inputEl);
    syncCursor();
  }
});

function placeCaretAtEnd(el) {
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

/* ------------------ Initialization ------------------ */
(async function init() {
  // Prevent zoom on mobile
  document.addEventListener("touchstart", () => {}, { passive: true });
  
  // Show welcome message
  await showWelcome();
  
  // Auto-run about command for demonstration (optional)
  // await delay(1000);
  // await runCommand("about");
  
  // Focus input
  placeCaretAtEnd(inputEl);
  syncCursor();
  
  // Add keyboard shortcut hints for mobile users
  if ('ontouchstart' in window) {
    await delay(2000);
    await appendLine("💡 Tip: Tap anywhere to focus the input field", {
      className: "muted",
      typing: true,
      speed: 40
    });
  }
})();