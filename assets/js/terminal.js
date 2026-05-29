document.addEventListener("DOMContentLoaded", function() {
    const terminalInput = document.getElementById("terminal-input");
    const terminalBody = document.getElementById("terminal-body");
    const terminalContainer = document.querySelector(".terminal-container");

    if (!terminalInput || !terminalBody) return;

    // Focus input on terminal click
    if (terminalContainer) {
        terminalContainer.addEventListener("click", () => {
            terminalInput.focus();
        });
    }

    const commands = {
        help: `
            <div class="cmd-help">
                <p><span class="highlight">about</span> - Brief bio about me</p>
                <p><span class="highlight">skills</span> - My technical skills and stack</p>
                <p><span class="highlight">projects</span> - Showcase of engineered projects</p>
                <p><span class="highlight">experience</span> - Internships & engineering history</p>
                <p><span class="highlight">contact</span> - How to get in touch</p>
                <p><span class="highlight">clear</span> - Clear the terminal output</p>
            </div>
        `,
        about: `
            <p>Computer Engineering student at Pune Institute of Computer Technology (PICT, 2027).</p>
            <p>Specializing in <span class="highlight">backend systems, distributed IoT architectures, and performance engineering</span>.</p>
            <p>Adept at building low-latency microservices, telemetry ingestion pipelines, and integrating AI workflows to accelerate development speed.</p>
        `,
        skills: `
            <div class="cmd-skills">
                <p><span class="cat">Languages:</span> Rust, Go, Python, C++, SQL, TypeScript, JavaScript</p>
                <p><span class="cat">Frameworks:</span> FastAPI, React, Next.js, LangChain, ZeroMQ, gRPC</p>
                <p><span class="cat">Cloud & Tools:</span> AWS, Docker, Git, TimescaleDB, PostgreSQL, Redis, Firebase, OpenTelemetry (OTLP)</p>
                <p><span class="cat">Concepts:</span> DSA, Operating Systems (OS), DBMS, Computer Networks, Concurrency, System Design</p>
            </div>
        `,
        projects: `
            <div class="cmd-projects">
                <p><span class="highlight">1. FieldPulse (Industrial IoT Backend)</span></p>
                <p class="desc">Go, gRPC, TimescaleDB, Redis, MQTT, OpenTelemetry (OTLP).</p>
                <p class="desc">Distributed telemetry ingestion backend. Optimized DB storage by 90% via time-partitioning & compression.</p>
                <br>
                <p><span class="highlight">2. PhotoSeek (Intelligent Asset Management)</span></p>
                <p class="desc">React, FastAPI, PostgreSQL, Google Gemini, Docker.</p>
                <p class="desc">Local-first Google Photos alternative with NLP search and Text-to-SQL query generation.</p>
                <p class="desc"><a href="/digital-asset-management/" style="color: #0ea5e9; text-decoration: underline;">Open Project Page & Architecture</a></p>
            </div>
        `,
        experience: `
            <div class="cmd-exp">
                <p><span class="highlight">Backend & Systems Engineer Intern @ Golain</span> (May 2026 - Present)</p>
                <p class="desc">Engineered Rust-based OCPP EV proxy gateway, ZMQ messaging, and local telemetry cache using Sled DB.</p>
                <br>
                <p><span class="highlight">AI Developer Intern @ Banao.tech</span> (Aug 2025 - May 2026)</p>
                <p class="desc">Engineered backend components for AI-driven video generation pipeline; serverless AWS Lambda telemetry.</p>
            </div>
        `,
        contact: `
            <div class="cmd-contact">
                <p><span class="cat">Email:</span> <a href="mailto:vaishnav.mankar04@gmail.com" class="link">vaishnav.mankar04@gmail.com</a></p>
                <p><span class="cat">LinkedIn:</span> <a href="https://linkedin.com/in/vaishnav-mankar" target="_blank" class="link">vaishnav-mankar</a></p>
                <p><span class="cat">GitHub:</span> <a href="https://github.com/myselfmankar" target="_blank" class="link">myselfmankar</a></p>
                <p><span class="cat">Phone:</span> +91 8668746433</p>
            </div>
        `
    };

    let commandHistory = [];
    let historyIndex = -1;

    terminalInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const input = terminalInput.value.trim();
            const inputLower = input.toLowerCase();
            terminalInput.value = "";

            if (input === "") return;

            // Save to history
            commandHistory.push(input);
            historyIndex = commandHistory.length;

            // Create command echo
            const echoLine = document.createElement("div");
            echoLine.className = "terminal-line user-echo";
            echoLine.innerHTML = `<span class="terminal-prompt">vaishnav@pict:~$</span> ${escapeHTML(input)}`;
            terminalBody.appendChild(echoLine);

            // Execute command
            const outputLine = document.createElement("div");
            outputLine.className = "terminal-line output";

            if (inputLower === "clear") {
                terminalBody.innerHTML = "";
            } else if (commands.hasOwnProperty(inputLower)) {
                outputLine.innerHTML = commands[inputLower];
                terminalBody.appendChild(outputLine);
            } else {
                outputLine.innerHTML = `<span class="error">Command not found: ${escapeHTML(input)}. Type 'help' for a list of commands.</span>`;
                terminalBody.appendChild(outputLine);
            }

            // Scroll to bottom
            terminalBody.scrollTop = terminalBody.scrollHeight;
        } else if (event.key === "ArrowUp") {
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
            }
            event.preventDefault();
        } else if (event.key === "ArrowDown") {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = "";
            }
            event.preventDefault();
        }
    });

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});
