const skillDescriptions={
"Python":"Used as the primary backend language for application logic, data processing, integrations, and Django development.",
"Django":"Used to structure server-side web applications around URLs, views, models, templates, authentication, and reusable application components.",
"Django ORM":"Used to work with relational application data through Django models, relationships, migrations, and query operations.",
"Django REST Framework":"A Django toolkit used for building structured REST APIs and handling serialized application data.",
"Authentication":"Implemented user registration and login flows so application features can be tied to authenticated users.",
"Role-Based Access":"Used to control access to application functionality based on user roles and permissions.",
"Session Management":"Used Django's session system to maintain authenticated user state across requests.",
"CSRF Protection":"Django's built-in protection used to reduce cross-site request forgery risk for state-changing requests.",
"REST APIs":"Used HTTP-based API endpoints to connect application functionality and exchange structured data.",
"Business Logic":"Server-side rules that determine how application data and user actions are processed.",
"PostgreSQL":"A relational database used for structured application data and a technology currently being developed further.",
"MySQL":"Relational database technology used in web-development work for structured application data.",
"SQLite":"Lightweight relational database used during development and for smaller Django application setups.",
"Database Schema Design":"Planning models, fields, relationships, and constraints so application data has a usable structure.",
"Relationships":"Connecting related database records through relational model relationships.",
"Queries":"Retrieving and filtering application data through database operations and ORM querysets.",
"Migrations":"Django's mechanism for tracking and applying changes to database schemas.",
"Data Validation":"Checking incoming or stored data against expected formats and application rules.",
"HTML5":"Semantic markup used to structure web pages and Django-rendered interfaces.",
"CSS3":"Used for layout, responsive styling, visual hierarchy, interaction states, and animation.",
"JavaScript":"Used for browser-side interaction, dynamic UI behavior, and communicating with APIs where required.",
"Bootstrap":"A frontend toolkit used for responsive layouts and common interface components.",
"Responsive Design":"Designing interfaces that remain usable across desktop, tablet, and mobile screen sizes.",
"Django Templates":"Server-rendered HTML templates used to connect application data with user-facing pages.",
"DOM Interaction":"Browser-side manipulation and event handling for interactive interface behavior.",
"Form Validation":"Checking submitted values before processing them to improve data quality and user feedback.",
"JSON":"Structured data format commonly used when exchanging information through REST APIs.",
"API Consumption":"Connecting a frontend or application component to external or internal API endpoints.",
"Payment Integration":"Connecting application checkout flows to an online payment service.",
"Razorpay":"Payment service integrated into Greenbasket's online purchasing workflow.",
"Request / Response":"The fundamental web cycle where a client sends a request and the server processes and returns a response.",
"Third-Party Services":"External services connected to an application to provide functionality beyond the core Django codebase.",
"Git":"Version control used to track source-code changes and manage development history.",
"GitHub":"Remote code hosting and collaboration platform used with Git repositories.",
"Linux":"Operating system environment used for development, command-line work, and backend tooling.",
"VS Code":"Code editor used for development and project work.",
"Virtual Environments":"Python environments used to isolate project dependencies.",
"Debugging":"Tracing application behavior and errors to identify and correct implementation problems.",
"Environment Variables":"Configuration values kept outside source code for environment-specific settings and secrets.",
"Deployment Basics":"Foundational understanding of preparing an application to run outside the local development environment.",
"Docker":"Container technology currently being developed to better understand reproducible application environments.",
"Advanced Django":"Further development of Django architecture, reusable components, and backend patterns.",
"API Design":"Currently developing stronger approaches to structuring API resources, contracts, and responses.",
"Backend Architecture":"Currently developing a deeper understanding of how backend components should be separated and connected.",
"Testing":"Currently developing testing practices for verifying application behavior and reducing regressions."
};

document.querySelectorAll(".cap-col button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".cap-col button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const name=btn.dataset.skill, detail=document.querySelector(".skill-detail");
    detail.querySelector("span").textContent=name.toUpperCase();
    detail.querySelector("strong").textContent=skillDescriptions[name]?"TECHNICAL NOTE":"CAPABILITY";
    detail.querySelector("p").textContent=skillDescriptions[name]||"Used as part of the development workflow described on this portfolio.";
  });
});

const archDescriptions={
"CLIENT":"The user-facing layer: Django templates and browser-side JavaScript initiate interactions and present returned data.",
"DJANGO APPLICATION":"The central application layer where URL routing, views, authentication, business rules, and feature modules are connected.",
"DATA + SERVICES":"The persistence and integration layer, covering relational data and external services used by the application.",
"Authentication":"Handles registration, login, sessions, and access control for user-facing functionality.",
"Product Catalog":"Provides structured product information and browsing functionality from application data.",
"Cart & Orders":"Connects shopping actions to cart and order-related application workflows.",
"Recommendation Engine":"Uses similarity-based matching to help users discover relevant products.",
"Payment Integration":"Connects checkout functionality to Razorpay's online payment workflow.",
"Recipe Assistant":"Provides an AI-assisted recipe-related utility as part of the grocery application."
};
document.querySelectorAll("[data-arch]").forEach(node=>{
  node.addEventListener("click",()=>{
    document.querySelectorAll("[data-arch]").forEach(n=>n.classList.remove("active"));
    node.classList.add("active");
    const key=node.dataset.arch, panel=document.querySelector(".arch-detail");
    panel.querySelector("small").textContent=key.toUpperCase();
    panel.querySelector("strong").textContent=archDescriptions[key]?"MODULE ROLE":"ARCHITECTURE NODE";
    panel.querySelector("p").textContent=archDescriptions[key]||"This layer connects one part of the application to another.";
  });
});

const cases={
"AUTHENTICATION":{problem:"The application needs to distinguish users and protect functionality that should not be available to every visitor.",implementation:"Django authentication and session handling provide user identity, while role-based access rules are used where different application capabilities require different access.",tech:"Python, Django, sessions, authentication, role-based access.",concepts:"Request authentication, sessions, permissions, access control.",challenges:"Keeping user state and access decisions consistent across application flows.",learned:"How authentication becomes part of the application architecture rather than an isolated login page."},
"PRODUCT DISCOVERY":{problem:"Users need to browse structured grocery information rather than interacting with static pages.",implementation:"Product information is represented as database-backed application data and surfaced through Django-driven browsing flows.",tech:"Python, Django, ORM, relational database, templates.",concepts:"Models, relationships, queries, server-rendered views.",challenges:"Keeping product information organized so multiple application features can use the same data.",learned:"How a database model can become the foundation for several user-facing features."},
"AI RECOMMENDATIONS":{problem:"A grocery catalog can contain products that are difficult for users to discover manually.",implementation:"Greenbasket uses similarity-based matching to identify products with relevant structured attributes and support recommendations.",tech:"Python, BERT, Cosine Similarity, application data.",concepts:"Text representation, similarity, matching, recommendation logic.",challenges:"Turning product information into data that can be compared meaningfully.",learned:"How an AI-assisted feature can be connected to conventional application data and user flows."},
"PAYMENT FLOW":{problem:"An online grocery application needs a path from cart activity to a payment workflow.",implementation:"Razorpay is integrated into the purchasing flow so checkout can connect the application to an online payment service.",tech:"Django, JavaScript, Razorpay, request/response flow.",concepts:"Payment integration, external services, checkout flow.",challenges:"Connecting an external service to an application's own order flow without treating payment as a separate feature.",learned:"How third-party services fit into a larger backend-driven workflow."},
"RECIPE ASSISTANT":{problem:"A grocery platform can provide more value when product usage is connected to recipe ideas.",implementation:"An AI-assisted recipe feature is included as a utility within the broader grocery application.",tech:"Python, Django, AI-assisted functionality.",concepts:"Feature integration, user input, application services.",challenges:"Keeping an AI-assisted utility relevant to the application's core grocery context.",learned:"How a secondary AI feature can be integrated without replacing the application's main business logic."},
"DATABASE DESIGN":{problem:"Users, products, carts, orders, and other application entities need to share consistent relationships.",implementation:"Django models and relational database structures connect the main entities used throughout the application.",tech:"Django ORM, relational database, models, migrations.",concepts:"Entities, relationships, schema changes, queries.",challenges:"Designing data relationships that support multiple workflows instead of a single page.",learned:"Why database structure has a direct impact on how easily backend features can be built."}
};
const dialog=document.getElementById("case-dialog");
document.querySelectorAll(".case-card").forEach((card,i)=>{
  card.addEventListener("click",()=>{
    const key=card.dataset.case,d=cases[key];
    document.getElementById("dialog-title").textContent=key.replaceAll(" "," ");
    document.getElementById("dialog-index").textContent=String(i+1).padStart(2,"0");
    document.getElementById("dialog-problem").textContent=d.problem;
    document.getElementById("dialog-implementation").textContent=d.implementation;
    document.getElementById("dialog-tech").textContent=d.tech;
    document.getElementById("dialog-concepts").textContent=d.concepts;
    document.getElementById("dialog-challenges").textContent=d.challenges;
    document.getElementById("dialog-learned").textContent=d.learned;
    dialog.showModal();
  });
});
document.querySelector(".dialog-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});

const mobile=document.querySelector(".mobile-nav"), toggle=document.querySelector(".menu-toggle");
toggle.addEventListener("click",()=>{mobile.classList.add("open");mobile.setAttribute("aria-hidden","false");toggle.setAttribute("aria-expanded","true")});
document.querySelector(".menu-close").addEventListener("click",closeMobile);
document.querySelectorAll(".mobile-nav a").forEach(a=>a.addEventListener("click",closeMobile));
function closeMobile(){mobile.classList.remove("open");mobile.setAttribute("aria-hidden","true");toggle.setAttribute("aria-expanded","false")}

const progress=document.querySelector(".page-progress span");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/max*100)+"%";
},{passive:true});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");revealObserver.unobserve(entry.target)}})
},{threshold:.08});
document.querySelectorAll(".reveal,.phase,.case-card,.timeline-item,.fact").forEach((el,i)=>{
  if(!el.classList.contains("reveal"))el.classList.add("reveal");
  el.style.transitionDelay=(i%5)*55+"ms";
  revealObserver.observe(el);
});

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{
  if(window.matchMedia("(pointer:fine)").matches){
    glow.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
    document.querySelectorAll(".tech-wordfield span").forEach((s,i)=>{
      const r=s.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);
      if(Math.hypot(dx,dy)<170)s.style.opacity=".45";else s.style.opacity="";
    });
  }
},{passive:true});

function updateClock(){
  const now=new Date(), t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).format(now);
  document.getElementById("utc-clock").textContent="IST · "+t;
}

updateClock();setInterval(updateClock,1000);

document.querySelectorAll(".desktop-nav a").forEach(link=>{
  const target=document.querySelector(link.getAttribute("href"));
  if(!target)return;
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll(".desktop-nav a").forEach(a=>a.classList.remove("active"));link.classList.add("active")}})
  },{rootMargin:"-35% 0px -55% 0px"});
  observer.observe(target);
});

const canvas = document.querySelector("#particleField");
const ctx = canvas.getContext("2d");

let particles = [];
let animationFrame;

function setup() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio, 2);

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  particles = Array.from({ length: 180 }, () => ({
    angle: Math.random() * Math.PI * 2,
    radius: Math.random() * Math.min(rect.width, rect.height) * 0.48,
    speed: (Math.random() * 0.002 + 0.0004) *
           (Math.random() > 0.5 ? 1 : -1),
    drift: Math.random() * 0.6 + 0.2,
    size: Math.random() * 1.5 + 0.3,
    phase: Math.random() * Math.PI * 2
  }));
}

function draw(time) {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;

  ctx.clearRect(0, 0, w, h);

  const cx = w * 0.52;
  const cy = h * 0.5;

  particles.forEach((p, i) => {
    p.angle += p.speed;

    const pulse =
      Math.sin(time * 0.001 + p.phase) * 18;

    const radius = p.radius + pulse;

    const x =
      cx +
      Math.cos(p.angle + Math.sin(time * 0.0003 + i)) *
      radius;

    const y =
      cy +
      Math.sin(p.angle) *
      radius *
      0.55;

    const alpha =
      0.12 +
      (Math.sin(time * 0.0015 + p.phase) + 1) * 0.12;

    ctx.beginPath();
    ctx.arc(x, y, p.size, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(90,169,255,${alpha})`;
    ctx.fill();

    // occasional brighter particles
    if (i % 13 === 0) {
      ctx.beginPath();
      ctx.arc(x, y, p.size * 2.5, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(180,220,255,${alpha * 0.18})`;
      ctx.fill();
    }
  });

  // subtle central glow
  const glow = ctx.createRadialGradient(
    cx, cy, 0,
    cx, cy, Math.min(w, h) * 0.45
  );

  glow.addColorStop(0, "rgba(90,169,255,0.08)");
  glow.addColorStop(0.45, "rgba(90,169,255,0.025)");
  glow.addColorStop(1, "rgba(90,169,255,0)");

  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  animationFrame = requestAnimationFrame(draw);
}


const observer = new ResizeObserver(() => {
  cancelAnimationFrame(animationFrame);
  setup();
  animationFrame = requestAnimationFrame(draw);
});

observer.observe(canvas);

setup();
animationFrame = requestAnimationFrame(draw);


document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("#heroTitle span");
  if (!el) return;

  const text = el.textContent;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  let timer;

  el.addEventListener("mouseenter", () => {
    clearInterval(timer);

    let iteration = 0;

    timer = setInterval(() => {
      el.textContent = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      iteration += 0.35;

      if (iteration >= text.length) {
        clearInterval(timer);
        el.textContent = text;
      }
    }, 40);
  });
});
