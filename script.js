var DEPARTMENTS = [
  { id: "all", name: "All entries" },
  { id: "work", name: "Work" },
  { id: "process", name: "Process" },
  { id: "role", name: "Role" },
  { id: "management", name: "Management" },
  { id: "experience", name: "Experience" },
  { id: "design", name: "Design" },
  { id: "development", name: "Development" },
  { id: "advertising", name: "Advertising" }
];

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function skill(dept, group, name, kind, subgroup, tag) {
  return {
    id: dept + "-" + slug(name),
    dept: dept,
    group: group,
    subgroup: subgroup,
    kind: kind,
    name: name,
    tags: [tag || kind]
  };
}

function skills(dept, group, names, kind) {
  var subgroup = kind === "Tool" ? "Tools" : "Skills";
  return names.map(function (name) {
    return skill(dept, group, name, kind, subgroup);
  });
}

var entries = [
  {
    id: "caesars",
    dept: "work",
    group: "Work",
    subgroup: "Product Design",
    kind: "Project",
    name: "Caesars Sportsbook",
    tags: ["UX", "Product Design"],
    blocks: [
      { type: "img", src: "images/caesars-24.png" },
      { type: "img", src: "images/caesars-29.png" },
      { type: "img", src: "images/caesars-25.png" },
      { type: "pair", srcs: ["images/caesars-30.png", "images/caesars-34.png"] },
      { type: "p", text: "UX and Product Design for the Caesars Sportsbook Betting Platform." },
      { type: "p", text: "Conducted ongoing research and testing to identify key goals and pain points, reduced friction by fixing issues, increased engagement by implementing improvements. Introduced new revenue generating features, maintained existing products, and modernized legacy systems with little-to-no downtime." },
      { type: "h", text: "Microbetting \"Revolutionizes\" Live Betting" },
      { type: "img", src: "images/caesars-41.png" },
      { type: "p", text: "\"Caesars recently launched FireBets, an AI powered microbetting feature that delivers rapid, in-game wagering options, from the next pitch in baseball to momentum plays in football, bringing a RedZone-style experience directly to the app. Leveraging real-time data and seamless UX integration, this innovation significantly enhances live engagement and positions Caesars as a leader in fast-paced sports betting.\"" },
      { type: "link", href: "https://www.oddstrader.com/news/caesars-revolutionizes-live-betting-fire-bets/", label: "OddsTrader — FireBets" },
      { type: "stats", items: [
        { value: "15%", label: "of Live Wagering" },
        { value: "6%", label: "Sportsbook Revenue", note: "$50.76M in 2025" }
      ] }
    ]
  },
  {
    id: "mavs",
    dept: "work",
    group: "Work",
    subgroup: "Brand",
    kind: "Project",
    name: "Dallas Mavs Clubhouse",
    tags: ["Brand", "Sports"],
    blocks: [{ type: "img", src: "images/mavs-6.png" }]
  },
  {
    id: "steelseries",
    dept: "work",
    group: "Work",
    subgroup: "Product Design",
    kind: "Project",
    name: "SteelSeries",
    tags: ["Product", "Platform"],
    blocks: [
      { type: "img", src: "images/steelseries-22.png" },
      { type: "img", src: "images/steelseries-21.png" },
      { type: "h", text: "The 'World's Best' High-End Gaming Platform" },
      { type: "p", text: "The results of creating a digital platform for SteelSeries cannot be denied. Supporting up to 6 million monthly active installs in 2021. SteelSeries \"GG\" platform is the perfect tech companion, converting enthusiasts to hardware owners. 15% of acquired users converted to buying hardware within 90 days." },
      { type: "stats", items: [
        { value: "6.6M", label: "Active Installs" },
        { value: "650k", label: "Monthly Visitors" },
        { value: "15%", label: "Bought Hardware", note: "Within 90 Days" },
        { value: "+20%", label: "Account Creations" }
      ] }
    ]
  },
  {
    id: "discord",
    dept: "work",
    group: "Work",
    subgroup: "Campaigns",
    kind: "Project",
    name: "Discord Promo Collaboration",
    tags: ["Partnership", "Promo"],
    blocks: [
      { type: "p", text: "900,000+ Nitro claims in the first month of the promotion. 650,000+ unique visitors clicking through to Discord, resulting in over 290,000 downloads within the first month. Ongoing average weekly requests up to 450,000." },
      { type: "stats", items: [
        { value: "900k", label: "Promos Claimed" },
        { value: "450k", label: "Claims", note: "3 Months Post Launch" }
      ] }
    ]
  },
  {
    id: "pandora",
    dept: "work",
    group: "Work",
    subgroup: "Campaigns",
    kind: "Project",
    name: "Pandora Jewelry",
    tags: ["Display Ads", "Rich Media"],
    blocks: [
      { type: "stats", items: [
        { value: "$2M", label: "Revenue", note: "During Six-Week Campaign" },
        { value: "$17", label: "ROAS", note: "Return on Ad Spend" },
        { value: "12x", label: "Revenue Goal", note: "12x Cyber Monday Goal" },
        { value: "1.5x", label: "Revenue Goal", note: "1.5x Black Friday Goal" }
      ] }
    ]
  },
  skill("work", "Work", "J. Crew", "Project", "Brand", "Retail"),
  skill("work", "Work", "Crate & Barrel", "Project", "Campaigns", "Email"),
  {
    id: "grubhub",
    dept: "work",
    group: "Work",
    subgroup: "Product Design",
    kind: "Project",
    name: "Grubhub",
    tags: ["Personalization"]
  },
  skill("work", "Work", "Tribute Tea Co", "Project", "Brand", "Brand"),
  skill("work", "Work", "Hefty", "Project", "Campaigns", "Amazon Ads"),
  skill("work", "Work", "Ghurka", "Project", "Brand", "Luxury"),
  skill("work", "Work", "Sears Home & Outlet", "Project", "Campaigns", "Pinterest"),
  skill("work", "Work", "Atkins", "Project", "Campaigns", "Social")
];

[
  ["Discovery", "Documentation · Business Opportunity · Stakeholder Communication · Known Challenges · Assumption Gathering · Decision Tracking", "Deliverable: Initial Project Brief"],
  ["Research", "User Interviews · Stakeholder Interviews · Data Analysis · Competitive Research · Workflow Analysis · Feedback Loops", "Deliverable: Research Findings & Insights"],
  ["Synthesis & Goal Definition", "Validate Assumptions · Define Problems · Identify Opportunities · Prioritize Needs · Establish KPIs · Scope Management", "Deliverable: Validated Project Brief & Requirements"],
  ["Strategy & Ideation", "Solution Exploration · Feature Prioritization · User Flows · Concepts · Wireframes", "Deliverable: Solution Direction & Prototypes"],
  ["Design & Development", "High-Fidelity UI · Design Systems · Specifications · Engineering Collaboration · Implementation", "Deliverable: Implemented Product / Feature"],
  ["Testing & Validation", "Usability Testing · Accessibility · QA · UAT · Iteration", "Deliverable: Validated, Release-Ready Product"],
  ["Launch & Optimization", "Release · KPI Monitoring · User Feedback · Performance Analysis · Future Improvements", "Deliverable: Performance Insights & Iteration Roadmap"]
].forEach(function (step) {
  entries.push({
    id: "process-" + slug(step[0]),
    dept: "process",
    group: "Process",
    kind: "Process",
    name: step[0],
    tags: ["Process"],
    blocks: [
      { type: "p", text: step[1] },
      { type: "note", text: step[2] }
    ]
  });
});

[
  "Front-End Developer",
  "Graphic Designer",
  "Interaction Designer",
  "Product Designer",
  "Product/Project Manager (PM)",
  "Scrum Master",
  "User Experience Designer",
  "User Experience Researcher"
].forEach(function (name) {
  entries.push(skill("role", "Role", name, "Skill", "Practice", "Role"));
});

[
  "Community of Practice (COP) Member",
  "Requirements Area (RA) Member",
  "Team Player of the Month"
].forEach(function (name) {
  entries.push(skill("role", "Role", name, "Skill", "Acknowledgements", "Acknowledgement"));
});

entries = entries.concat(
  skills("management", "Management", [
    "Acceptance Criteria", "Account Management", "Backlog Refinement", "Capacity Planning",
    "Communications", "Content Marketing", "Cross-Company Coordination", "Cross-Team Coordination",
    "Defining Requirements", "End-to-End", "Event Tracking", "Global/Distributed Teams",
    "Go-to-market Strategy", "KPI", "Product Integration", "Product Positioning",
    "Product Requirements (PRD)", "Product Roadmapping", "RACI", "Release Criteria/Management",
    "Reporting", "Sprint Planning", "Stakeholder Management", "Support Escalation Triage",
    "Teamwide Initiatives", "Technical Writing", "User Stories"
  ], "Skill"),
  skills("management", "Management", [
    "ChatGPT", "Claude", "Confluence", "DeepSeek", "Gemini/Notebook", "Jira", "Notion", "Perplexity"
  ], "Tool"),
  skills("experience", "Experience", [
    "A/B Testing", "Analytics", "Competitive Research", "Conversion Rate Optimization",
    "Customer Experience/Service (CX)", "Data Analysis", "Data Informed Decisions", "End User Testing",
    "Feedback", "Field Testing", "Lean UX", "Market Research", "Multi Device Strategy",
    "Personalization", "Product Usage Monitoring", "Prototyping", "Quality Assurance (QA)",
    "Stakeholder Interview", "Surveys", "Usability Metrics", "Usability Testing",
    "User Acceptance Testing (UAT)", "User Consensus", "User Experience Testing", "User Flows",
    "User Interviews", "User Journey", "User Persona", "User Research", "UX Writing/Content Design",
    "Voice of Customer", "Website Optimization", "Wireframing"
  ], "Skill"),
  skills("experience", "Experience", [
    "Adobe Analytics", "FigJam", "FullStory", "Google Analytics", "Laws of UX", "Power BI"
  ], "Tool"),
  skills("design", "Design", [
    "Accessibility Design", "ADA", "Aesthetic", "Art Direction", "Branding", "Campaign Design",
    "Concept Design", "Creative Design", "Creative Direction", "Dashboard Creation", "Design Systems",
    "Digital Illustration", "Digital Image Processing", "Human Centered Design", "Interaction Design",
    "Model Context Protocol (MCP)", "Patented Layouts", "Photo Editing", "Photo Production", "Rebrand",
    "Responsive Design", "SaaS", "Sustainable Design", "User Centered Design (UCD)",
    "User Interface (UI)", "WCAG 2.2", "Web Design"
  ], "Skill"),
  skills("design", "Design", [
    "Adobe Creative Cloud", "ANT Design", "Blender", "Bridge", "Comfy UI", "Figma", "Figma Make",
    "Figma Motion", "Illustrator", "InDesign", "Material Design", "Meshy", "Midjourney", "Photoshop", "Rive"
  ], "Tool"),
  skills("development", "Development", [
    "Agile", "CI/CD", "CSS", "Desktop Application", "HTML", "Information Architecture (IA)",
    "JavaScript", "Python", "React", "Responsive", "Technical Implementation", "TypeScript"
  ], "Skill"),
  skills("development", "Development", [
    "Antigravity", "Copilot", "Cursor", "Docker", "Git", "GitHub", "GitLab", "Hugging Face",
    "Opencode", "Shopify", "Tailwind CSS", "VS Code"
  ], "Tool"),
  skills("advertising", "Advertising", [
    "Advertising", "Brand Awareness", "Brand Partnerships", "Campaign Management",
    "Community Engagement", "Digital Communication", "Digital Marketing", "Digital Media",
    "Display Advertising", "eCommerce", "Email Campaign", "HTML 5 Advertising", "Keyword Research",
    "Marketing Strategy", "Media Production", "Native Marketing", "Paid Media", "Paid Search",
    "Paid Social", "Promotional Design", "Retail", "Retargeting", "Rich Media", "Search Ads", "SEO",
    "Shop In Ad", "Social Media", "Targeted Mail Campaign", "Themed Posts", "Timed Posts",
    "Weekly Promotions", "YouTube Integration"
  ], "Skill"),
  skills("advertising", "Advertising", [
    "Amazon Ads", "Amazon Pages", "Facebook Ads", "Google Ad Exchange (AdX)", "Google Ad Manager",
    "Google Ads", "Google AdSense", "Google AdWords", "Google Manager Account (MCC)", "Google MCM",
    "Pinterest"
  ], "Tool")
);

entries.forEach(function (entry, index) { entry.order = index; });

var GROUP_ORDER = ["Work", "Process", "Role", "Management", "Experience", "Design", "Development", "Advertising"];
var SUB_ORDER = ["Product Design", "Brand", "Campaigns", "Practice", "Acknowledgements", "Skills", "Tools"];

var byId = new Map(entries.map(function (entry) { return [entry.id, entry]; }));
var currentDept = "all";

function pad(count) {
  return String(count).padStart(3, "0");
}

function deptCount(id) {
  if (id === "all") return entries.length;
  return entries.filter(function (entry) { return entry.dept === id; }).length;
}

function visibleEntries() {
  var query = document.getElementById("search").value.trim().toLowerCase();
  var kind = document.getElementById("kind").value;
  return entries.filter(function (entry) {
    if (currentDept !== "all" && entry.dept !== currentDept) return false;
    if (kind !== "all" && entry.kind !== kind) return false;
    if (!query) return true;
    var haystack = (entry.name + " " + entry.group + " " + (entry.subgroup || "") + " " + entry.tags.join(" ")).toLowerCase();
    return haystack.indexOf(query) !== -1;
  }).sort(function (a, b) {
    var group = GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group);
    if (group) return group;
    var sub = SUB_ORDER.indexOf(a.subgroup || "") - SUB_ORDER.indexOf(b.subgroup || "");
    if (sub) return sub;
    return a.order - b.order;
  });
}

function tagList(tags) {
  var shown = tags.slice(0, 2);
  var extra = tags.length - shown.length;
  var wrap = document.createElement("span");
  wrap.className = "tags";
  shown.forEach(function (tag) {
    var pill = document.createElement("span");
    pill.className = "tag";
    pill.textContent = tag;
    wrap.appendChild(pill);
  });
  if (extra > 0) {
    var more = document.createElement("span");
    more.className = "tag";
    more.textContent = "+" + extra + " more";
    wrap.appendChild(more);
  }
  return wrap;
}

function row(entry) {
  var item = document.createElement("article");
  item.className = "item";
  item.dataset.id = entry.id;
  var expandable = !!(entry.blocks && entry.blocks.length);
  var main = document.createElement(expandable ? "button" : "div");
  main.className = "item-main";
  if (expandable) {
    main.type = "button";
    main.setAttribute("aria-expanded", "false");
    main.setAttribute("aria-controls", "detail-" + entry.id);
  }
  var name = document.createElement("span");
  name.className = "item-name";
  name.textContent = entry.name;
  var dots = document.createElement("span");
  dots.className = "dots";
  dots.setAttribute("aria-hidden", "true");
  main.appendChild(name);
  main.appendChild(dots);
  main.appendChild(tagList(entry.tags));
  item.appendChild(main);
  return item;
}

function figure(src, name) {
  var frame = document.createElement("figure");
  frame.className = "figure";
  var img = document.createElement("img");
  img.src = src;
  img.alt = name;
  img.loading = "lazy";
  img.decoding = "async";
  frame.appendChild(img);
  return frame;
}

function renderDetail(entry) {
  var detail = document.createElement("div");
  detail.className = "detail";
  detail.id = "detail-" + entry.id;
  entry.blocks.forEach(function (block) {
    if (block.type === "p" || block.type === "note") {
      var p = document.createElement("p");
      if (block.type === "note") p.className = "note";
      p.textContent = block.text;
      detail.appendChild(p);
    } else if (block.type === "h") {
      var h = document.createElement("h3");
      h.textContent = block.text;
      detail.appendChild(h);
    } else if (block.type === "link") {
      var a = document.createElement("a");
      a.href = block.href;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = block.label;
      detail.appendChild(a);
    } else if (block.type === "img") {
      detail.appendChild(figure(block.src, entry.name));
    } else if (block.type === "pair") {
      var pair = document.createElement("div");
      pair.className = "pair";
      block.srcs.forEach(function (src) { pair.appendChild(figure(src, entry.name)); });
      detail.appendChild(pair);
    } else if (block.type === "stats") {
      var stats = document.createElement("div");
      stats.className = "stats";
      block.items.forEach(function (stat) {
        var card = document.createElement("div");
        card.className = "stat";
        var value = document.createElement("b");
        value.textContent = stat.value;
        var label = document.createElement("span");
        label.textContent = stat.label;
        card.appendChild(value);
        card.appendChild(label);
        if (stat.note) {
          var note = document.createElement("small");
          note.textContent = stat.note;
          card.appendChild(note);
        }
        stats.appendChild(card);
      });
      detail.appendChild(stats);
    }
  });
  return detail;
}

function closeOpen() {
  document.querySelectorAll(".item.is-open").forEach(function (item) {
    item.classList.remove("is-open");
    var button = item.querySelector("button");
    if (button) button.setAttribute("aria-expanded", "false");
    var detail = item.querySelector(".detail");
    if (detail) detail.remove();
  });
}

function renderList() {
  var list = document.getElementById("list");
  var items = visibleEntries();
  list.replaceChildren();
  var lastGroup = "";
  var lastSub = "";
  items.forEach(function (entry) {
    if (entry.group !== lastGroup) {
      var heading = document.createElement("h2");
      heading.className = "group-label";
      heading.textContent = entry.group;
      list.appendChild(heading);
      if (entry.group === "Process") {
        var note = document.createElement("p");
        note.className = "group-note";
        note.textContent = "Example process. The actual process changes depending on the nature of the project.";
        list.appendChild(note);
      }
      lastGroup = entry.group;
      lastSub = "";
    }
    if (entry.subgroup && entry.subgroup !== lastSub) {
      var sub = document.createElement("h3");
      sub.className = "subgroup-label";
      sub.textContent = entry.group + " / " + entry.subgroup;
      list.appendChild(sub);
      lastSub = entry.subgroup;
    }
    list.appendChild(row(entry));
  });
  if (!items.length) {
    var empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No matches.";
    list.appendChild(empty);
  } else {
    var end = document.createElement("p");
    end.className = "colophon";
    end.textContent = "Updated 2026. All rights reserved.";
    list.appendChild(end);
  }
  var status = document.getElementById("status");
  status.textContent = items.length + (items.length === 1 ? " entry" : " entries");
  list.scrollTop = 0;
}

function renderDepartments() {
  var nav = document.getElementById("depts");
  DEPARTMENTS.forEach(function (dept) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "dept" + (dept.id === currentDept ? " is-active" : "");
    button.dataset.dept = dept.id;
    if (dept.id === currentDept) button.setAttribute("aria-current", "true");
    var count = document.createElement("span");
    count.className = "dept-count";
    count.textContent = pad(deptCount(dept.id));
    var name = document.createElement("span");
    name.className = "dept-name";
    name.textContent = dept.name;
    button.appendChild(count);
    button.appendChild(name);
    nav.appendChild(button);
  });
}

function setDept(id) {
  currentDept = id;
  document.querySelectorAll(".dept").forEach(function (button) {
    var on = button.dataset.dept === id;
    button.classList.toggle("is-active", on);
    if (on) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  renderList();
}

document.getElementById("depts").addEventListener("click", function (event) {
  var button = event.target.closest(".dept");
  if (!button) return;
  setDept(button.dataset.dept);
});

document.getElementById("list").addEventListener("click", function (event) {
  var button = event.target.closest("button.item-main");
  if (!button) return;
  var item = button.closest(".item");
  var entry = byId.get(item.dataset.id);
  if (!entry || !entry.blocks) return;
  var open = item.classList.contains("is-open");
  closeOpen();
  if (open) return;
  item.classList.add("is-open");
  button.setAttribute("aria-expanded", "true");
  item.appendChild(renderDetail(entry));
});

document.getElementById("search").addEventListener("input", renderList);
document.getElementById("kind").addEventListener("change", renderList);

document.querySelector(".brand").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("search").value = "";
  document.getElementById("kind").value = "all";
  setDept("all");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeOpen();
});

renderDepartments();
renderList();
