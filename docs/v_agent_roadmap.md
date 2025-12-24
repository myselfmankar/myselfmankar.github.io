# Roadmap: V-Agent (AI Portfolio Assistant)

This document outlines the plan for integrating a premium, AI-powered assistant into the portfolio to showcase AI development skills.

## 🎯 Objective
Create a "V-Agent" that acts as a personalized recruiter/navigator, answering questions about Vaishnav's skills, projects, and professional background using live AI context.

## 🎨 Design Aesthetic (Mockup Approved)
- **Visuals**: Glassmorphism (frosted glass) with neon purple/cyan glows.
- **Micro-Animations**: Pulsing "AGENT ONLINE" status and floating entry/exit.
- **Interface**: Terminal-style input (`> Awaiting command...`) to maintain a developer-centric feel.
- **Reference**: See `docs/ai_assistant_mockup.png` (Planned).

## 🛠️ Implementation Strategy

### Phase 1: Frontend Component
- **Assets**: `assets/js/v-agent.js` and `assets/css/v-agent.css`.
- **Logic**: A standalone widget that can be toggled on any page.
- **Context**: Automatically pulls data from `_config.yml` and `_data/` to provide the AI with the user's latest info.

### Phase 2: The "Static Brain" (Global Scope)
- **Security**: 100% Secure. Gemini API Key is stored only in **GitHub Secrets**.
- **Build-Time Inference**: A GitHub Action runs a script during every deployment.
- **Global Data Fetching**: The Action fetches data from **all your public repositories**, not just the portfolio.
- **Workflow**:
  1. Action feeds your `_data/`, `resume.markdown`, and **all repo READMEs** to Gemini.
  2. Gemini generates a structured `global_knowledge_base.json` covering your entire dev ecosystem.
  3. Action saves this to the main domain's assets.

### Phase 3: Interactive Component & Automation
- **Interactive Engine**: Frontend component uses a fast search/logic engine (like Fuse.js) to query the pre-generated "AI brain" instantly.
- **Latest Project Automation**: A GitHub Action fetches GitHub API data to update `_data/latest_project.yml` with fresh stats.

### Phase 4: Global Intelligence Hub (Cross-Project)
- **CDN-Style Deployment**: You can import the assistant into any other repository's GitHub Pages with a single `<script>` tag pointing to your main domain.
- **Context Awareness**: The script detects the URL it's running on and provides project-specific insights while inter-relating them to your other work.
- **Universal State**: Maintains a consistent personality and visitor "memory" across your entire GitHub Pages network.

## 📈 Future Possibilities
- **Easter Eggs**: Secret commands (e.g., `git checkout hobby`) to reveal personal interests.
- **Micro-Dialogue**: Small, personalized responses for specific recruiter keywords.
- **Direct Lead Gen**: Allowing recruiters to leave their email directly in the chat widget.

---
*Updated on: 2025-12-21*
