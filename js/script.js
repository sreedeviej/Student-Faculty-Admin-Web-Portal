const people = [
  {
    name: "Dr. Meera Nair",
    role: "Faculty",
    title: "Professor, Data Science",
    skills: ["Machine Learning", "Research", "Mentorship"],
    bio: "Guides final-year projects, research papers, and hackathon teams.",
    about: "Faculty mentor for AI research, Smart India Hackathon teams, and final-year capstone projects.",
    stats: { connections: 842, posts: 38, helped: 124 },
    highlights: ["Published 18 research papers", "Mentored 6 national hackathon finalist teams", "Runs weekly AI clinic"]
  },
  {
    name: "Arjun Menon",
    role: "Alumni",
    title: "SDE 2 at Amazon",
    skills: ["DSA", "System Design", "Referrals"],
    bio: "Helps students prepare for product company interviews.",
    about: "Campus alumnus who mentors students for DSA, resume building, and product-company interviews.",
    stats: { connections: 1260, posts: 52, helped: 219 },
    highlights: ["Cleared Amazon SDE hiring loop", "Hosts Sunday DSA office hours", "Shared 40+ referral tips"]
  },
  {
    name: "Aditi Sharma",
    role: "Student",
    title: "CSE Sem 5",
    skills: ["React", "Cloud", "Open Source"],
    bio: "Building campus tools and preparing for internships.",
    about: "Frontend developer, cloud learner, and coding club volunteer focused on useful campus products.",
    stats: { connections: 378, posts: 24, helped: 31 },
    highlights: ["AWS Cloud Practitioner certified", "Built hostel complaint tracker", "Open-source contributor"]
  },
  {
    name: "Prof. Anand Rao",
    role: "Faculty",
    title: "Training and Placement Coordinator",
    skills: ["Aptitude", "Placement", "Communication"],
    bio: "Shares company drives, mock interviews, and placement strategy.",
    about: "Placement coordinator helping students plan company preparation, mock interviews, and communication practice.",
    stats: { connections: 940, posts: 61, helped: 300 },
    highlights: ["Organized 42 campus drives", "Runs aptitude sprint batches", "Maintains company preparation roadmaps"]
  },
  {
    name: "Nisha Verma",
    role: "Alumni",
    title: "Data Analyst at TCS",
    skills: ["SQL", "Power BI", "Career Guidance"],
    bio: "Mentors juniors for service company hiring and analytics roles.",
    about: "Alumni mentor for analytics portfolios, SQL practice, Power BI dashboards, and TCS NQT strategy.",
    stats: { connections: 690, posts: 29, helped: 88 },
    highlights: ["Built sales analytics dashboards", "Guides TCS NQT preparation", "Reviews student data portfolios"]
  },
  {
    name: "Kabir Singh",
    role: "Student",
    title: "ECE Sem 7",
    skills: ["GATE", "Embedded", "IoT"],
    bio: "Runs peer sessions for GATE preparation and electronics projects.",
    about: "ECE senior coordinating GATE preparation pods and hands-on embedded systems project groups.",
    stats: { connections: 422, posts: 18, helped: 47 },
    highlights: ["Leads weekly GATE problem solving", "Built IoT energy meter prototype", "Embedded systems club volunteer"]
  },
  {
    name: "Riya Kapoor",
    role: "Student",
    title: "IT Sem 3",
    skills: ["Python", "DBMS", "UI Design"],
    bio: "Shares handwritten notes and builds beginner-friendly project resources.",
    about: "IT student helping juniors with Python basics, database notes, and clean UI project ideas.",
    stats: { connections: 286, posts: 19, helped: 42 },
    highlights: ["Uploaded DBMS handwritten notes", "Built a library management mini project", "Design club volunteer"]
  },
  {
    name: "Dev Patel",
    role: "Student",
    title: "CSE Sem 7",
    skills: ["DSA", "Java", "Spring Boot"],
    bio: "Preparing for product companies and mentoring juniors in DSA.",
    about: "Senior student focused on Java backend development, coding interviews, and placement preparation.",
    stats: { connections: 512, posts: 33, helped: 76 },
    highlights: ["Solved 450 DSA problems", "Built placement tracker API", "Runs Java practice sessions"]
  },
  {
    name: "Sara Khan",
    role: "Student",
    title: "CSE Sem 5",
    skills: ["Cybersecurity", "Linux", "Networking"],
    bio: "Active in cybersecurity club and CTF practice groups.",
    about: "Cybersecurity learner exploring Linux hardening, web security, and beginner CTF challenges.",
    stats: { connections: 341, posts: 21, helped: 35 },
    highlights: ["Won internal CTF challenge", "Shared Linux command notes", "Started web security reading group"]
  },
  {
    name: "Dr. Vikram Sethi",
    role: "Faculty",
    title: "Associate Professor, Cybersecurity",
    skills: ["Network Security", "Cryptography", "Ethical Hacking"],
    bio: "Mentors cybersecurity projects and guides students for research-oriented careers.",
    about: "Faculty mentor for network security labs, ethical hacking workshops, and student research papers.",
    stats: { connections: 718, posts: 44, helped: 131 },
    highlights: ["Conducted 12 security workshops", "Guided 20+ cybersecurity projects", "Runs weekly lab doubt sessions"]
  },
  {
    name: "Dr. Priya Iyer",
    role: "Faculty",
    title: "Professor, Mathematics",
    skills: ["Aptitude", "Discrete Maths", "GATE Maths"],
    bio: "Helps students with aptitude, engineering mathematics, and GATE preparation.",
    about: "Mathematics faculty focused on placement aptitude, discrete structures, and competitive exam preparation.",
    stats: { connections: 654, posts: 27, helped: 170 },
    highlights: ["Created GATE maths worksheet set", "Runs aptitude booster sessions", "Mentors CDS maths aspirants"]
  },
  {
    name: "Manav Bansal",
    role: "Alumni",
    title: "Scientist Trainee at DRDO",
    skills: ["Research", "Electronics", "Technical Interviews"],
    bio: "Guides students interested in DRDO, ISRO, and research careers.",
    about: "Alumnus supporting students with research preparation, technical interviews, and public-sector engineering roles.",
    stats: { connections: 602, posts: 25, helped: 93 },
    highlights: ["Cleared DRDO technical interview", "Shares research reading plans", "Mentors electronics students"]
  },
  {
    name: "Kavya Reddy",
    role: "Alumni",
    title: "Product Analyst at Accenture",
    skills: ["Business Analysis", "Excel", "Communication"],
    bio: "Helps students prepare for Accenture, consulting roles, and business case interviews.",
    about: "Alumni mentor for Accenture placement preparation, case study thinking, and communication rounds.",
    stats: { connections: 734, posts: 36, helped: 115 },
    highlights: ["Cracked Accenture campus hiring", "Shared HR round playbook", "Reviews project presentation decks"]
  },
  {
    name: "Lt. Sariga Santhosh",
    role: "Alumni",
    title: "Indian Army Officer",
    skills: ["SSB", "Leadership", "Defence Prep"],
    bio: "Mentors SSB and CDS aspirants through group tasks, interview prep, and routine planning.",
    about: "Alumnus helping defence aspirants prepare for SSB screening, psychology, GTO, and personal interviews.",
    stats: { connections: 890, posts: 41, helped: 204 },
    highlights: ["Cleared SSB in first attempt", "Runs Sunday SSB practice circle", "Guides CDS interview preparation"]
  }
];

const achievements = [
  {
    author: "Riya Kapoor",
    role: "Student",
    text: "Uploaded my handwritten DBMS normalization notes. These helped me revise 1NF, 2NF, 3NF, and BCNF quickly before internals.",
    stats: "156 likes | 39 saves",
    type: "Handwritten Notes",
    media: "notes"
  },
  {
    author: "Sara Khan",
    role: "Student",
    text: "Completed the Google Cybersecurity certificate and added my project report on phishing awareness for campus users.",
    stats: "141 likes | 22 comments",
    type: "Certification",
    media: "certificate"
  },
  {
    author: "Dev Patel",
    role: "Student",
    text: "Pushed a new placement tracker dashboard with student progress, company rounds, and mock interview notes.",
    stats: "119 likes | 17 comments",
    type: "Project Update",
    media: "project"
  },
  {
    author: "Aditi Sharma",
    role: "Student",
    text: "Completed the AWS Cloud Practitioner certification and published notes for juniors preparing for cloud fundamentals.",
    stats: "128 likes | 24 comments",
    type: "Certification",
    media: "certificate"
  },
  {
    author: "Arjun Menon",
    role: "Alumni",
    text: "Hosting a resume review session for students targeting Amazon, Microsoft, TCS, and Accenture roles this weekend.",
    stats: "92 likes | 31 students interested",
    type: "Career Update"
  },
  {
    author: "Dr. Meera Nair",
    role: "Faculty",
    text: "Our AI club team qualified for the Smart India Hackathon internal round with a campus safety analytics idea.",
    stats: "211 likes | 17 comments",
    type: "Project Update",
    media: "project"
  },
  {
    author: "Nisha Verma",
    role: "Alumni",
    text: "Shared a Power BI dashboard template for students working on analytics portfolio projects.",
    stats: "76 likes | 14 saves",
    type: "Project Update",
    media: "project"
  }
];

const helpPosts = [
  {
    title: "Need help with DBMS normalization",
    author: "Rohit, CSE Sem 3",
    body: "I understand 1NF and 2NF but get confused while decomposing into 3NF. Can someone explain with university database examples?",
    tags: ["DBMS", "Sem 3", "Faculty help"],
    votes: 18,
    replies: [
      { author: "Dr. Meera Nair", text: "Start by listing functional dependencies, then remove partial and transitive dependencies one at a time." },
      { author: "Aditi Sharma", text: "I can share my library database notes. The examples are simple and exam-focused." }
    ]
  },
  {
    title: "Operating Systems deadlock doubt",
    author: "Priya, IT Sem 4",
    body: "Looking for a simple explanation of Banker's Algorithm before tomorrow's class test.",
    tags: ["OS", "Exam", "Peer learning"],
    votes: 27,
    replies: [
      { author: "Kabir Singh", text: "Think of it like checking whether every process can safely finish with available resources." }
    ]
  },
  {
    title: "Mini project team needed",
    author: "Kabir, ECE Sem 7",
    body: "Need two students interested in IoT and cloud dashboards for a smart energy meter prototype.",
    tags: ["Project", "IoT", "Cloud"],
    votes: 11,
    replies: [
      { author: "Aditi Sharma", text: "I can help with the React dashboard and Firebase hosting." }
    ]
  }
];

const events = [
  {
    name: "Campus Innovation Hackathon",
    date: "May 08, 2026",
    location: "Innovation Lab",
    detail: "24-hour hackathon for AI, fintech, health-tech, and campus automation ideas."
  },
  {
    name: "Accenture Cracking Session",
    date: "May 12, 2026",
    location: "Seminar Hall 2",
    detail: "Aptitude, communication, coding round, and interview practice with placed seniors."
  },
  {
    name: "Alumni Career Mixer",
    date: "May 18, 2026",
    location: "Auditorium",
    detail: "Meet alumni from Amazon, TCS, Infosys, startups, civil services, and higher studies."
  },
  {
    name: "GATE 2027 Roadmap Talk",
    date: "May 22, 2026",
    location: "Room C-304",
    detail: "Subject planning, test series strategy, and weekly group study slots."
  }
];

const groups = [
  { name: "GATE Preparation 2027", topic: "CSE, ECE, EE", members: 184, joined: false },
  { name: "UPSC Campus Circle", topic: "Current affairs and answer writing", members: 96, joined: false },
  { name: "Accenture Cracking Squad", topic: "Aptitude and mock interviews", members: 241, joined: true },
  { name: "TCS NQT Practice", topic: "Coding, reasoning, verbal", members: 310, joined: false },
  { name: "Amazon Interview Prep", topic: "DSA and system design", members: 128, joined: false },
  { name: "Cloud Enthusiasts", topic: "AWS, Azure, DevOps", members: 173, joined: true },
  { name: "SSB Interview Prep", topic: "Screening, psychology, GTO, personal interview", members: 142, joined: false },
  { name: "CDS Defence Aspirants", topic: "English, GK, maths, physical preparation", members: 118, joined: false },
  { name: "DRDO Research Circle", topic: "Engineering concepts, research papers, technical interviews", members: 87, joined: false },
  { name: "ISRO Mission Prep", topic: "Aerospace, electronics, mechanical, computer science", members: 104, joined: false }
];

const attendance = [
  { sem: "Semester 1", percent: 88 },
  { sem: "Semester 2", percent: 81 },
  { sem: "Semester 3", percent: 86 },
  { sem: "Semester 4", percent: 79 },
  { sem: "Semester 5", percent: 84 }
];

const results = [
  { sem: "Semester 1", sgpa: "8.12", status: "Pass" },
  { sem: "Semester 2", sgpa: "8.34", status: "Pass" },
  { sem: "Semester 3", sgpa: "8.61", status: "Pass" },
  { sem: "Semester 4", sgpa: "8.28", status: "Pass" },
  { sem: "Semester 5", sgpa: "8.70", status: "Published" }
];

const chats = {
  "Dr. Meera Nair": [
    { from: "them", text: "Share your project abstract today. I will review the research scope." },
    { from: "me", text: "Thank you ma'am, I will send the first draft by 6 PM." }
  ],
  "Arjun Menon": [
    { from: "them", text: "For Amazon prep, solve arrays, trees, graphs, and two DP patterns first." },
    { from: "me", text: "Can I send my resume after updating the projects section?" }
  ],
  "Prof. Anand Rao": [
    { from: "them", text: "Mock interview slots open tomorrow. Book early if you want placement feedback." }
  ],
  "Nisha Verma": [
    { from: "them", text: "Build one SQL + Power BI project with real business questions. That helps a lot in TCS interviews." }
  ],
  "Riya Kapoor": [
    { from: "them", text: "I uploaded DBMS handwritten notes in the feed. Check the normalization page first." }
  ],
  "Dev Patel": [
    { from: "them", text: "Join the Java DSA group tonight. We are solving tree problems." }
  ],
  "Sara Khan": [
    { from: "them", text: "The cybersecurity club is doing a beginner CTF practice round this Friday." }
  ],
  "Dr. Vikram Sethi": [
    { from: "them", text: "For your security project, add threat model and testing screenshots in the report." }
  ],
  "Dr. Priya Iyer": [
    { from: "them", text: "Revise probability and linear algebra before the GATE maths practice test." }
  ],
  "Manav Bansal": [
    { from: "them", text: "For DRDO prep, strengthen core engineering subjects and read recent project abstracts." }
  ],
  "Kavya Reddy": [
    { from: "them", text: "For Accenture, practice explaining your project in a business-friendly way." }
  ],
  "Lt. Sariga Santhosh": [
    { from: "them", text: "For SSB, maintain a daily current affairs notebook and practice story narration." }
  ]
};

let activeChat = "Dr. Meera Nair";
let pendingPostImage = "";

document.addEventListener("change", (event) => {
  if (event.target.id !== "postImage") {
    return;
  }

  const file = event.target.files[0];

  if (!file) {
    pendingPostImage = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    pendingPostImage = reader.result;
  };
  reader.readAsDataURL(file);
});

function login() {
  const user = document.getElementById("username").value.trim();

  if (!user) {
    alert("Enter your name to continue");
    return;
  }

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("appPage").classList.remove("hidden");
  document.getElementById("userDisplay").innerText = user;
  document.getElementById("userAvatar").innerText = initials(user);
  renderAll();
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function switchView(view) {
  const titles = {
    home: "Home Feed",
    network: "People Network",
    help: "Academic Help",
    dashboard: "Dashboard",
    events: "Events and Hackathons",
    groups: "Campus Groups",
    messages: "Messages"
  };

  document.querySelectorAll(".view").forEach((item) => item.classList.remove("active"));
  document.getElementById(`${view}View`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
  document.querySelector(`[data-view="${view}"]`).classList.add("active");
  document.getElementById("viewTitle").innerText = titles[view];
}

function renderAll() {
  renderAchievements();
  renderPeople();
  renderHelp();
  renderEvents();
  renderGroups();
  renderDashboard();
  renderChats();
  renderPreviews();
}

function renderAchievements() {
  const feed = document.getElementById("achievementFeed");
  feed.innerHTML = achievements.map((post) => `
    <article class="post">
      <div class="post-head">
        <span class="avatar">${initials(post.author)}</span>
        <div>
          <h4>${post.author}</h4>
          <span class="meta">${post.role} | Campus achievement update</span>
        </div>
      </div>
      <p>${post.text}</p>
      ${renderPostMedia(post)}
      <div class="post-actions">
        <button type="button">Like</button>
        <button type="button">Comment</button>
        <button type="button">Save</button>
        <span class="pill">${post.stats}</span>
      </div>
    </article>
  `).join("");
}

function renderPostMedia(post) {
  if (post.image) {
    return `
      <div class="post-media">
        <span class="media-label">${post.type || "Photo Update"}</span>
        <img src="${post.image}" alt="${post.type || "Campus post"}">
      </div>
    `;
  }

  if (post.media === "notes") {
    return `
      <div class="post-media">
        <span class="media-label">${post.type}</span>
        <div class="fake-media notes">
          <strong>DBMS Normalization Notes</strong>
          <p>Functional dependencies, 1NF, 2NF, 3NF, BCNF examples and quick revision points.</p>
        </div>
      </div>
    `;
  }

  if (post.media === "certificate") {
    return `
      <div class="post-media">
        <span class="media-label">${post.type}</span>
        <div class="fake-media certificate">
          <div>
            <strong>Certificate of Completion</strong>
            <p>Verified learning milestone shared on SmartCampus</p>
          </div>
        </div>
      </div>
    `;
  }

  if (post.media === "project") {
    return `
      <div class="post-media">
        <span class="media-label">${post.type}</span>
        <div class="fake-media project">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  return "";
}

function addAchievement() {
  const input = document.getElementById("achievementInput");
  const type = document.getElementById("postType").value;
  const fileInput = document.getElementById("postImage");
  const text = input.value.trim();

  if (!text) {
    alert("Write something to post");
    return;
  }

  achievements.unshift({
    author: document.getElementById("userDisplay").innerText,
    role: "Student",
    text,
    stats: "0 likes | just now",
    type,
    image: pendingPostImage
  });
  input.value = "";
  fileInput.value = "";
  pendingPostImage = "";
  renderAchievements();
}

function renderPeople() {
  const query = (document.getElementById("peopleSearch")?.value || "").toLowerCase();
  const role = document.getElementById("roleFilter")?.value || "All";
  const filtered = people.filter((person) => {
    const searchable = `${person.name} ${person.role} ${person.title} ${person.skills.join(" ")}`.toLowerCase();
    return searchable.includes(query) && (role === "All" || person.role === role);
  });

  document.getElementById("peopleGrid").innerHTML = filtered.map((person) => `
    <article class="profile-card">
      <div class="profile-top">
        <span class="avatar">${initials(person.name)}</span>
        <div>
          <h3>${person.name}</h3>
          <span class="meta">${person.role} | ${person.title}</span>
        </div>
      </div>
      <p>${person.bio}</p>
      <div class="tag-list">${person.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
      <div class="profile-actions">
        <button class="connect-btn" type="button" onclick="openProfileModal('${person.name}')">View Profile</button>
        <button class="connect-btn" type="button" onclick="messagePerson('${person.name}')">Message</button>
      </div>
    </article>
  `).join("");
}

function renderHelp() {
  document.getElementById("helpFeed").innerHTML = helpPosts.map((post) => {
    const originalIndex = helpPosts.indexOf(post);

    return `
    <article class="help-card">
      <div class="help-head">
        <div>
          <h3>${post.title}</h3>
          <span class="meta">${post.author} | ${post.replies.length} replies</span>
        </div>
      </div>
      <p>${post.body}</p>
      <div class="tag-list">${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="reply-list">
        ${post.replies.map((reply) => `
          <div class="reply">
            <strong>${reply.author}</strong>
            <span>${reply.text}</span>
          </div>
        `).join("")}
      </div>
      <div class="reply-box">
        <input type="text" id="replyInput${originalIndex}" placeholder="Reply with an answer or resource">
        <button type="button" onclick="addReply(${originalIndex})">Reply</button>
      </div>
      <button class="upvote-btn" type="button" onclick="upvoteHelp(${originalIndex})">Upvote | ${post.votes}</button>
    </article>
  `;
  }).join("");
}

function addHelpPost() {
  const title = document.getElementById("helpTitle").value.trim();
  const body = document.getElementById("helpBody").value.trim();

  if (!title || !body) {
    alert("Add both title and problem details");
    return;
  }

  helpPosts.unshift({
    title,
    author: `${document.getElementById("userDisplay").innerText}, CSE Sem 5`,
    body,
    tags: ["New", "Academic help"],
    votes: 0,
    replies: []
  });
  document.getElementById("helpTitle").value = "";
  document.getElementById("helpBody").value = "";
  renderHelp();
}

function addReply(index) {
  const input = document.getElementById(`replyInput${index}`);
  const text = input.value.trim();

  if (!text) {
    return;
  }

  helpPosts[index].replies.push({
    author: document.getElementById("userDisplay").innerText,
    text
  });
  renderHelp();
}

function upvoteHelp(index) {
  helpPosts[index].votes += 1;
  renderHelp();
}

function renderEvents() {
  const markup = events.map((event) => `
    <article class="event-card">
      <span class="event-date">${event.date}</span>
      <h3>${event.name}</h3>
      <span class="meta">${event.location}</span>
      <p>${event.detail}</p>
      <button class="join-btn" type="button">Register Interest</button>
    </article>
  `).join("");

  document.getElementById("eventGrid").innerHTML = markup;
}

function renderGroups() {
  document.getElementById("groupGrid").innerHTML = groups.map((group, index) => `
    <article class="group-card">
      <h3>${group.name}</h3>
      <span class="meta">${group.members} members</span>
      <p>${group.topic}</p>
      <button class="join-btn" type="button" onclick="toggleGroup(${index})">${group.joined ? "Joined" : "Join Group"}</button>
    </article>
  `).join("");
}

function toggleGroup(index) {
  groups[index].joined = !groups[index].joined;
  groups[index].members += groups[index].joined ? 1 : -1;
  renderGroups();
}

function createGroup() {
  const name = document.getElementById("groupName").value.trim();
  const topic = document.getElementById("groupTopic").value.trim();

  if (!name || !topic) {
    alert("Add group name and topic");
    return;
  }

  groups.unshift({ name, topic, members: 1, joined: true });
  document.getElementById("groupName").value = "";
  document.getElementById("groupTopic").value = "";
  renderGroups();
}

function renderDashboard() {
  document.getElementById("attendanceList").innerHTML = attendance.map((item) => `
    <div class="progress-item">
      <div class="result-row"><strong>${item.sem}</strong><span>${item.percent}%</span></div>
      <div class="progress-line"><span style="width: ${item.percent}%"></span></div>
    </div>
  `).join("");

  document.getElementById("resultList").innerHTML = results.map((item) => `
    <div class="result-row">
      <strong>${item.sem}</strong>
      <span>SGPA ${item.sgpa} | ${item.status}</span>
    </div>
  `).join("");
}

function openEditProfile() {
  const user = document.getElementById("userDisplay").innerText;

  document.getElementById("dashboardModalContent").innerHTML = `
    <div class="modal-hero">
      <h2 id="dashboardModalTitle">Edit Profile</h2>
      <p>Update your SmartCampus profile details</p>
    </div>
    <div class="modal-body">
      <div class="form-grid">
        <label>
          Full Name
          <input type="text" value="${user}">
        </label>
        <label>
          Headline
          <input type="text" value="B.Tech CSE, Sem 5 | Cloud and Web Development">
        </label>
        <label>
          Skills
          <input type="text" value="React, JavaScript, AWS, DBMS, DSA">
        </label>
        <label>
          About
          <textarea>Student developer building campus products, preparing for placements, and contributing to coding club projects.</textarea>
        </label>
        <button class="connect-btn" type="button" onclick="closeDashboardModal()">Save Profile</button>
      </div>
      <aside class="stack-list">
        <div class="profile-stat"><strong>84%</strong><span class="meta">Attendance</span></div>
        <div class="profile-stat"><strong>8.41</strong><span class="meta">CGPA</span></div>
        <div class="profile-stat"><strong>5</strong><span class="meta">Active groups</span></div>
      </aside>
    </div>
  `;
  document.getElementById("dashboardModal").classList.remove("hidden");
}

function viewResume() {
  const user = document.getElementById("userDisplay").innerText;

  document.getElementById("dashboardModalContent").innerHTML = `
    <div class="resume-preview">
      <div class="resume-header">
        <h2 id="dashboardModalTitle">${user}</h2>
        <p class="meta">B.Tech Computer Science | Sem 5 | SmartCampus Profile Resume</p>
      </div>
      <div class="resume-grid">
        <div>
          <section class="modal-section">
            <h4>Summary</h4>
            <p>Student developer focused on full-stack web apps, cloud basics, academic tools, and placement preparation.</p>
          </section>
          <section class="modal-section">
            <h4>Projects</h4>
            <div class="timeline">
              <div class="timeline-item">SmartCampus ERP Social Portal - campus network with groups, chat, events, doubts, and dashboard.</div>
              <div class="timeline-item">Hostel Complaint Tracker - issue logging and admin status workflow.</div>
            </div>
          </section>
          <section class="modal-section">
            <h4>Achievements</h4>
            <div class="timeline">
              <div class="timeline-item">AWS Cloud Practitioner learning track completed.</div>
              <div class="timeline-item">Qualified for internal hackathon round with campus automation idea.</div>
            </div>
          </section>
        </div>
        <aside class="stack-list">
          <div class="profile-stat"><strong>8.41</strong><span class="meta">CGPA</span></div>
          <div class="profile-stat"><strong>112</strong><span class="meta">Credits</span></div>
          <div class="tag-list">
            <span class="tag">React</span>
            <span class="tag">JavaScript</span>
            <span class="tag">AWS</span>
            <span class="tag">DBMS</span>
            <span class="tag">DSA</span>
          </div>
        </aside>
      </div>
    </div>
  `;
  document.getElementById("dashboardModal").classList.remove("hidden");
}

function closeDashboardModal(event) {
  if (event && event.target.id !== "dashboardModal") {
    return;
  }

  document.getElementById("dashboardModal").classList.add("hidden");
}

function openProfileModal(name) {
  const person = people.find((item) => item.name === name);

  if (!person) {
    return;
  }

  document.getElementById("profileModalContent").innerHTML = `
    <div class="modal-hero">
      <div class="modal-identity">
        <span class="avatar">${initials(person.name)}</span>
        <div>
          <h2 id="modalName">${person.name}</h2>
          <p>${person.role} | ${person.title}</p>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div>
        <section class="modal-section">
          <h4>About</h4>
          <p>${person.about}</p>
        </section>
        <section class="modal-section">
          <h4>Highlights</h4>
          <div class="timeline">
            ${person.highlights.map((item) => `<div class="timeline-item">${item}</div>`).join("")}
          </div>
        </section>
        <section class="modal-section">
          <h4>Skills</h4>
          <div class="tag-list">${person.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
        </section>
      </div>
      <aside class="stack-list">
        <div class="profile-stat"><strong>${person.stats.connections}</strong><span class="meta">Connections</span></div>
        <div class="profile-stat"><strong>${person.stats.posts}</strong><span class="meta">Posts</span></div>
        <div class="profile-stat"><strong>${person.stats.helped}</strong><span class="meta">Students helped</span></div>
        <button class="connect-btn" type="button" onclick="messagePerson('${person.name}')">Message</button>
      </aside>
    </div>
  `;
  document.getElementById("profileModal").classList.remove("hidden");
}

function closeProfileModal(event) {
  if (event && event.target.id !== "profileModal") {
    return;
  }

  document.getElementById("profileModal").classList.add("hidden");
}

function renderChats() {
  const query = (document.getElementById("messageSearch")?.value || "").toLowerCase();
  const names = Object.keys(chats).filter((name) => {
    const person = people.find((item) => item.name === name);
    const messages = chats[name].map((message) => message.text).join(" ");
    const searchable = `${name} ${person?.role || ""} ${person?.title || ""} ${messages}`.toLowerCase();
    return searchable.includes(query);
  });

  document.getElementById("chatPeople").innerHTML = names.map((name) => `
    <button class="chat-person ${name === activeChat ? "active" : ""}" type="button" onclick="openChat('${name}')">
      <span class="avatar">${initials(name)}</span>
      <span><strong>${name}</strong><br><small>${people.find((p) => p.name === name)?.role || "Mentor"}</small></span>
    </button>
  `).join("") || `<div class="empty-state">No conversations found</div>`;

  if (!names.includes(activeChat) && names.length > 0) {
    activeChat = names[0];
  }

  renderChatWindow();
}

function openChat(name) {
  activeChat = name;
  renderChats();
}

function messagePerson(name) {
  if (!chats[name]) {
    chats[name] = [
      { from: "them", text: "Hi, happy to connect. Send your question or goal here." }
    ];
  }

  activeChat = name;
  closeProfileModal();
  switchView("messages");
  renderChats();
}

function renderChatWindow() {
  const person = people.find((item) => item.name === activeChat);
  document.getElementById("chatHeader").innerHTML = `
    <span class="avatar">${initials(activeChat)}</span>
    <div><strong>${activeChat}</strong><br><small>${person?.title || "Campus member"}</small></div>
  `;
  document.getElementById("chatMessages").innerHTML = chats[activeChat].map((message) => `
    <div class="bubble ${message.from === "me" ? "me" : ""}">${message.text}</div>
  `).join("");
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();

  if (!text) {
    return;
  }

  chats[activeChat].push({ from: "me", text });
  input.value = "";
  renderChatWindow();
}

function renderPreviews() {
  document.getElementById("eventPreview").innerHTML = events.slice(0, 3).map((event) => `
    <div class="person-row">
      <span class="avatar">${event.date.slice(4, 6)}</span>
      <div><strong>${event.name}</strong><br><small>${event.location}</small></div>
    </div>
  `).join("");

  document.getElementById("connectionPreview").innerHTML = people.slice(0, 4).map((person) => `
    <div class="person-row">
      <span class="avatar">${initials(person.name)}</span>
      <div><strong>${person.name}</strong><br><small>${person.title}</small></div>
    </div>
  `).join("");
}
