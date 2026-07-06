try { process.loadEnvFile(); } catch (e) { /* ignore if .env is missing */ }
const fs = require("fs");

const CITY = "Pune";
// Pune coordinates: Lat 18.5204, Lon 73.8567
const LAT = "18.5204";
const LON = "73.8567";

const GITHUB_USERNAME = "myselfmankar";

// Get day in IST (Asia/Kolkata)
const dayOptions = { timeZone: "Asia/Kolkata", weekday: "long" };
const dayFormatter = new Intl.DateTimeFormat("en-US", dayOptions);
const today = dayFormatter.format(new Date());

// Greeting in IST (Asia/Kolkata)
const options = { timeZone: "Asia/Kolkata", hour: "numeric", hour12: false };
const formatter = new Intl.DateTimeFormat("en-US", options);
const hour = parseInt(formatter.format(new Date()), 10);
const greeting =
    hour < 12 ? "Good morning" :
        hour < 18 ? "Good afternoon" :
            "Good evening";

function getWeatherCodeCondition(code) {
    if (code === 0) return "sunny";
    if (code <= 3) return "cloudy";
    if (code === 45 || code === 48) return "foggy";
    if (code >= 51 && code <= 55) return "drizzling";
    if (code >= 61 && code <= 65) return "rainy";
    if (code >= 80 && code <= 82) return "showery";
    if (code === 95) return "thunderstorm";
    return "pleasant";
}

async function getWeather() {
    try {
        // Using Open-Meteo which is keyless and free
        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code`
        );
        const data = await res.json();
        
        if (data && data.current) {
            const temp = Math.round(data.current.temperature_2m);
            const condition = getWeatherCodeCondition(data.current.weather_code);
            return { temp, condition };
        }
    } catch (e) {
        console.warn("Failed to fetch weather from Open-Meteo, falling back:", e.message);
    }
    return { temp: 28, condition: "pleasant" };
}

async function getGithubStats(token, username) {
    const fallback = { total: 316, thisWeek: 3, lastWeek: 5 };
    if (!token) {
        console.log("No GITHUB_TOKEN environment variable found. Using fallback stats.");
        return fallback;
    }
    
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    try {
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `bearer ${token}`,
                "Content-Type": "application/json",
                "User-Agent": "node-fetch"
            },
            body: JSON.stringify({
                query,
                variables: { username }
            })
        });
        const result = await response.json();
        
        if (result.errors) {
            console.warn("GraphQL Errors:", result.errors);
        }
        
        if (result.data && result.data.user) {
            const calendar = result.data.user.contributionsCollection.contributionCalendar;
            const total = calendar.totalContributions;
            
            // Extract last 7 days of contributions
            const allDays = calendar.weeks.flatMap(w => w.contributionDays);
            const last7Days = allDays.slice(-7);
            const previous7Days = allDays.slice(-14, -7);
            
            const currentYear = new Date().getFullYear().toString();
            const thisYear = allDays
                .filter(day => day.date.startsWith(currentYear))
                .reduce((sum, day) => sum + day.contributionCount, 0);
            
            const thisWeek = last7Days.reduce((sum, day) => sum + day.contributionCount, 0);
            const lastWeek = previous7Days.reduce((sum, day) => sum + day.contributionCount, 0);
            
            console.log(`Fetched stats for ${username}: ThisYear=${thisYear}, ThisWeek=${thisWeek}, LastWeek=${lastWeek}`);
            return { total: thisYear, thisWeek, lastWeek };
        }
    } catch (e) {
        console.warn("Failed to fetch GitHub stats, falling back:", e.message);
    }
    return fallback;
}

function getFunnyComment(weekCount, weather) {
    const temp = weather && weather.temp ? weather.temp : 25;
    const condition = weather && weather.condition ? weather.condition.toLowerCase() : "";
    
    if (weekCount === 0) {
        if (condition.includes("rain") || condition.includes("shower") || condition.includes("drizzle")) {
            return "Taking a break from code to enjoy the Pune rain! ☔";
        }
        return "I'm probably offline touching grass, building a life, or debugging in a cave.";
    } else if (weekCount < 4) {
        if (temp > 35) {
            return `It's ${temp}°C out there! Taking it easy while avoiding the heat.`;
        }
        return "I'm likely deep in systems design (or chasing sunsets in Pune).";
    } else if (weekCount < 12) {
        if (condition.includes("cloud") || condition.includes("overcast")) {
            return "Cloudy days are perfect for staying in and shipping high-performance code! ☁️";
        }
        return "I'm steadily shipping high-performance updates and refactoring code!";
    } else {
        if (condition.includes("clear") || condition.includes("sunny")) {
            return "Clear skies and green squares! Pushing code like there's no tomorrow. ☀️";
        }
        return "I'm in absolute beast mode! Pushing code like there's no tomorrow.";
    }
}

// Estimate width for SVG text clipping
function estimateTextWidth(text, fontSize = 20) {
    return Math.max(40, text.length * (fontSize * 0.58));
}

function createTypingDots(id, x, y, start, duration = 1.2) {
    return `
    <g opacity="0">
      <animate attributeName="opacity" values="0;1;1;0"
        keyTimes="0;0.05;0.95;1"
        dur="${duration}s"
        begin="${start}s; loop.begin + ${start}s"
        fill="freeze"/>

      <g transform="translate(${x}, ${y})">
        <rect x="0" y="0" rx="22" ry="22" width="90" height="50" class="typing-bubble"/>

        <circle cx="25" cy="25" r="5" class="typing-dot">
          <animate attributeName="opacity" values="0.25;1;0.25"
            dur="0.9s" begin="${start}s; loop.begin + ${start}s" repeatCount="indefinite"/>
        </circle>

        <circle cx="45" cy="25" r="5" class="typing-dot">
          <animate attributeName="opacity" values="0.25;1;0.25"
            dur="0.9s" begin="${start + 0.15}s; loop.begin + ${start + 0.15}s" repeatCount="indefinite"/>
        </circle>

        <circle cx="65" cy="25" r="5" class="typing-dot">
          <animate attributeName="opacity" values="0.25;1;0.25"
            dur="0.9s" begin="${start + 0.3}s; loop.begin + ${start + 0.3}s" repeatCount="indefinite"/>
        </circle>
      </g>
    </g>
  `;
}

function createMessageBubble({ id, x, y, width, height, lines, start }) {
    const bubbleDuration = 0.35;
    let defs = "";
    let texts = "";

    lines.forEach((line, i) => {
        const lineY = 38 + i * 30;
        const revealStart = start + 0.35 + i * 0.8;
        const revealDur = 0.9;
        const clipWidth = Math.min(width - 40, estimateTextWidth(line));

        defs += `
      <clipPath id="clip-${id}-${i}">
        <rect x="20" y="${lineY - 18}" width="0" height="26">
          <animate attributeName="width"
            from="0"
            to="${clipWidth}"
            dur="${revealDur}s"
            begin="${revealStart}s; loop.begin + ${revealStart}s"
            fill="freeze"/>
          <animate attributeName="width"
            to="0"
            dur="0.01s"
            begin="loop.begin"
            fill="freeze"/>
        </rect>
      </clipPath>
    `;

        texts += `
      <text x="20" y="${lineY}" class="text" clip-path="url(#clip-${id}-${i})">${line}</text>
    `;
    });

    const bubble = `
    <g opacity="0" transform="translate(${x}, ${y})">
      <animate attributeName="opacity"
        from="0" to="1"
        dur="${bubbleDuration}s"
        begin="${start}s; loop.begin + ${start}s"
        fill="freeze"/>
      <animate attributeName="opacity"
        to="0"
        dur="0.01s"
        begin="loop.begin"
        fill="freeze"/>
        
      <g transform="scale(0.85)">
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.85;1.06;1"
          keyTimes="0;0.6;1"
          dur="${bubbleDuration}s"
          begin="${start}s; loop.begin + ${start}s"
          fill="freeze"/>

        <rect x="0" y="0" rx="22" ry="22" width="${width}" height="${height}" class="bubble"/>
        ${texts}
      </g>
    </g>
  `;

    return { defs, bubble };
}

async function generate() {
    const weatherPromise = getWeather();
    const token = process.env.GITHUB_TOKEN;
    const statsPromise = getGithubStats(token, GITHUB_USERNAME);
    
    const [weather, stats] = await Promise.all([weatherPromise, statsPromise]);
    const { temp, condition } = weather;
    const { total, thisWeek, lastWeek } = stats;
    
    const funnyComment = getFunnyComment(thisWeek, weather);

    const messages = [
        {
            id: "m1",
            x: 20,
            y: 20,
            width: 320,
            height: 60,
            lines: ["Hi, I'm Vaishnav Mankar"]
        },
        {
            id: "m2",
            x: 20,
            y: 100,
            width: 760,
            height: 90,
            lines: [
                `${greeting}!`,
                `I am from Pune, India where it is ${temp}°C and ${condition} today.`
            ]
        },
        {
            id: "m3",
            x: 20,
            y: 210,
            width: 860,
            height: 90,
            lines: [
                "I'm a Computer Engineering student at PICT interested in",
                "high-performance systems engineering, distributed IoT, and AI."
            ]
        },
        {
            id: "m4",
            x: 20,
            y: 320,
            width: 850,
            height: 120,
            lines: [
                `Pushed ${thisWeek} commits this week, ${lastWeek} last week,`,
                `and ${total} commits this year.`,
                `${funnyComment}`
            ]
        },
        {
            id: "m5",
            x: 20,
            y: 460, // shifted down to accommodate taller m4 bubble
            width: 530,
            height: 60,
            lines: [`Have a great ${today}! 🚀`]
        }
    ];

    let defs = "";
    let content = "";
    let currentTime = 0;

    for (const msg of messages) {
        const typingStart = currentTime;
        const messageStart = typingStart + 1.2;

        content += createTypingDots(msg.id, msg.x, msg.y + 5, typingStart, 1.2);

        const { defs: bubbleDefs, bubble } = createMessageBubble({
            ...msg,
            start: messageStart
        });

        defs += bubbleDefs;
        content += bubble;

        currentTime += msg.lines.length === 1 ? 2.8 : msg.lines.length === 2 ? 3.8 : 4.8;
    }

    const totalDuration = currentTime + 2;

    const svg = `
<svg width="950" height="660" viewBox="0 0 950 660" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${defs}
  </defs>

  <style>
    .bg {
      fill: transparent;
    }

    .bubble {
      fill: #27272a;
      filter: drop-shadow(0px 6px 18px rgba(0,0,0,0.4));
    }

    .typing-bubble {
      fill: #3f3f46;
      filter: drop-shadow(0px 4px 10px rgba(0,0,0,0.3));
    }

    .text {
      fill: #f4f4f5;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.2px;
    }

    .typing-dot {
      fill: #d4d4d8;
    }
  </style>

  <rect width="100%" height="100%" class="bg">
    <!-- loop reset element -->
    <animate id="loop" attributeName="opacity" dur="${totalDuration}s" begin="0s; loop.end" />
  </rect>
  ${content}
</svg>
`;

    // Ensure the output assets folder exists
    if (!fs.existsSync("assets")) {
        fs.mkdirSync("assets");
    }
    fs.writeFileSync("assets/about-me.svg", svg.trim());
    console.log("Successfully generated assets/about-me.svg!");
}

generate().catch(err => {
    console.error("Error generating SVG:", err.message);
    process.exit(1);
});