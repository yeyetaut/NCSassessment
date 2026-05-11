<div align="center">
    <h1>🤖 Awesome Gemini CLI Subagents</h1>
    <p><strong>A curated collection of 128 specialized AI assistants for Gemini CLI</strong></p>
    <br />
</div>

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Subagent Count](https://img.shields.io/badge/subagents-128-blue?style=flat-square)
[![Last Update](https://img.shields.io/github/last-commit/ankitmundada/awesome-gemini-cli-subagents?label=Last%20update&style=flat-square)](https://github.com/ankitmundada/awesome-gemini-cli-subagents)
[![GitHub Stars](https://img.shields.io/github/stars/ankitmundada/awesome-gemini-cli-subagents?style=social)](https://github.com/ankitmundada/awesome-gemini-cli-subagents/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ankitmundada/awesome-gemini-cli-subagents?style=social)](https://github.com/ankitmundada/awesome-gemini-cli-subagents/network/members)

</div>

<br />

# Awesome Gemini CLI Subagents

This repository serves as the definitive collection of Gemini CLI subagents, specialized AI assitants designed for specific development tasks.

## ⚠️ Experimental Feature

Sub-agents in Gemini CLI are currently experimental. You must enable them in your `settings.json`:

```json
{
  "experimental": {
    "enableAgents": true
  }
}
```

**Warning**: Sub-agents currently operate in "YOLO mode", meaning they may execute tools without individual user confirmation for each step. Review agent permissions carefully.

## Installation

### Option 1: Manual Installation (Recommended)

1. Clone this repository
2. Copy desired agent files to:
   - `~/.gemini/agents/` for global access
   - `.gemini/agents/` for project-specific use
3. Customize based on your project requirements

### Option 2: Interactive Installer

```bash
git clone https://github.com/ankitmundada/awesome-gemini-cli-subagents.git
cd awesome-gemini-cli-subagents
./install-agents.sh
```

This interactive script lets you browse categories, select agents, and install/uninstall them with a single command.

### Option 3: Standalone Installer (no clone required)

```bash
curl -sO https://raw.githubusercontent.com/ankitmundada/awesome-gemini-cli-subagents/main/install-agents.sh
chmod +x install-agents.sh
./install-agents.sh
```

Downloads agents directly from GitHub without cloning the repository. Requires `curl`.

### Option 4: Agent Installer (use Gemini CLI to install agents)

```bash
curl -s https://raw.githubusercontent.com/ankitmundada/awesome-gemini-cli-subagents/main/categories/09-meta-orchestration/agent-installer.md -o ~/.gemini/agents/agent-installer.md
```

Then in Gemini CLI: "Use the agent-installer to show me available categories" or "Find PHP agents and install php-pro globally".

## 📚 Categories

### [01. Core Development](categories/01-core-development/)

Essential development subagents for everyday coding tasks.

- [**api-designer**](categories/01-core-development/api-designer.md) - REST and GraphQL API architect
- [**backend-developer**](categories/01-core-development/backend-developer.md) - Server-side expert for scalable APIs
- [**electron-pro**](categories/01-core-development/electron-pro.md) - Desktop application expert
- [**frontend-developer**](categories/01-core-development/frontend-developer.md) - UI/UX specialist for React, Vue, and Angular
- [**fullstack-developer**](categories/01-core-development/fullstack-developer.md) - End-to-end feature development
- [**graphql-architect**](categories/01-core-development/graphql-architect.md) - GraphQL schema and federation expert
- [**microservices-architect**](categories/01-core-development/microservices-architect.md) - Distributed systems designer
- [**mobile-developer**](categories/01-core-development/mobile-developer.md) - Cross-platform mobile specialist
- [**ui-designer**](categories/01-core-development/ui-designer.md) - Visual design and interaction specialist
- [**websocket-engineer**](categories/01-core-development/websocket-engineer.md) - Real-time communication specialist
- [**wordpress-master**](categories/08-business-product/wordpress-master.md) - WordPress development and optimization expert

### [02. Language Specialists](categories/02-language-specialists/)

Language-specific experts with deep framework knowledge.

- [**typescript-pro**](categories/02-language-specialists/typescript-pro.md) - TypeScript specialist
- [**sql-pro**](categories/02-language-specialists/sql-pro.md) - Database query expert
- [**swift-expert**](categories/02-language-specialists/swift-expert.md) - iOS and macOS specialist
- [**vue-expert**](categories/02-language-specialists/vue-expert.md) - Vue 3 Composition API expert
- [**angular-architect**](categories/02-language-specialists/angular-architect.md) - Angular 15+ enterprise patterns expert
- [**cpp-pro**](categories/02-language-specialists/cpp-pro.md) - C++ performance expert
- [**csharp-developer**](categories/02-language-specialists/csharp-developer.md) - .NET ecosystem specialist
- [**django-developer**](categories/02-language-specialists/django-developer.md) - Django 4+ web development expert
- [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.md) - .NET 8 cross-platform specialist
- [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.md) - .NET Framework legacy enterprise specialist
- [**elixir-expert**](categories/02-language-specialists/elixir-expert.md) - Elixir and OTP fault-tolerant systems expert
- [**flutter-expert**](categories/02-language-specialists/flutter-expert.md) - Flutter 3+ cross-platform mobile expert
- [**golang-pro**](categories/02-language-specialists/golang-pro.md) - Go concurrency specialist
- [**java-architect**](categories/02-language-specialists/java-architect.md) - Enterprise Java expert
- [**javascript-pro**](categories/02-language-specialists/javascript-pro.md) - JavaScript development expert
- [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.md) - Windows PowerShell 5.1 and full .NET Framework automation specialist
- [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.md) - Cross-platform PowerShell 7+ automation and modern .NET specialist
- [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.md) - Modern JVM language expert
- [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.md) - Laravel 10+ PHP framework expert
- [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.md) - Next.js 14+ full-stack specialist
- [**php-pro**](categories/02-language-specialists/php-pro.md) - PHP web development expert
- [**python-pro**](categories/02-language-specialists/python-pro.md) - Python ecosystem master
- [**rails-expert**](categories/02-language-specialists/rails-expert.md) - Rails 8.1 rapid development expert
- [**react-specialist**](categories/02-language-specialists/react-specialist.md) - React 18+ modern patterns expert
- [**rust-engineer**](categories/02-language-specialists/rust-engineer.md) - Systems programming expert
- [**spring-boot-engineer**](categories/02-language-specialists/spring-boot-engineer.md) - Spring Boot 3+ microservices expert

### [03. Infrastructure](categories/03-infrastructure/)

DevOps, cloud, and deployment specialists.

- [**azure-infra-engineer**](categories/03-infrastructure/azure-infra-engineer.md) - Azure infrastructure and Az PowerShell automation expert
- [**cloud-architect**](categories/03-infrastructure/cloud-architect.md) - AWS/GCP/Azure specialist
- [**database-administrator**](categories/03-infrastructure/database-administrator.md) - Database management expert
- [**deployment-engineer**](categories/03-infrastructure/deployment-engineer.md) - Deployment automation specialist
- [**devops-engineer**](categories/03-infrastructure/devops-engineer.md) - CI/CD and automation expert
- [**devops-incident-responder**](categories/03-infrastructure/devops-incident-responder.md) - DevOps incident management
- [**incident-responder**](categories/03-infrastructure/incident-responder.md) - System incident response expert
- [**kubernetes-specialist**](categories/03-infrastructure/kubernetes-specialist.md) - Container orchestration master
- [**network-engineer**](categories/03-infrastructure/network-engineer.md) - Network infrastructure specialist
- [**platform-engineer**](categories/03-infrastructure/platform-engineer.md) - Platform architecture expert
- [**security-engineer**](categories/03-infrastructure/security-engineer.md) - Infrastructure security specialist
- [**sre-engineer**](categories/03-infrastructure/sre-engineer.md) - Site reliability engineering expert
- [**terraform-engineer**](categories/03-infrastructure/terraform-engineer.md) - Infrastructure as Code expert
- [**windows-infra-admin**](categories/03-infrastructure/windows-infra-admin.md) - Active Directory, DNS, DHCP, and GPO automation specialist

### [04. Quality & Security](categories/04-quality-security/)

Testing, security, and code quality experts.

- [**accessibility-tester**](categories/04-quality-security/accessibility-tester.md) - A11y compliance expert
- [**ad-security-reviewer**](categories/04-quality-security/ad-security-reviewer.md) - Active Directory security and GPO audit specialist
- [**architect-reviewer**](categories/04-quality-security/architect-reviewer.md) - Architecture review specialist
- [**chaos-engineer**](categories/04-quality-security/chaos-engineer.md) - System resilience testing expert
- [**code-reviewer**](categories/04-quality-security/code-reviewer.md) - Code quality guardian
- [**compliance-auditor**](categories/04-quality-security/compliance-auditor.md) - Regulatory compliance expert
- [**debugger**](categories/04-quality-security/debugger.md) - Advanced debugging specialist
- [**error-detective**](categories/04-quality-security/error-detective.md) - Error analysis and resolution expert
- [**penetration-tester**](categories/04-quality-security/penetration-tester.md) - Ethical hacking specialist
- [**performance-engineer**](categories/04-quality-security/performance-engineer.md) - Performance optimization expert
- [**powershell-security-hardening**](categories/04-quality-security/powershell-security-hardening.md) - PowerShell security hardening and compliance specialist
- [**qa-expert**](categories/04-quality-security/qa-expert.md) - Test automation specialist
- [**security-auditor**](categories/04-quality-security/security-auditor.md) - Security vulnerability expert
- [**test-automator**](categories/04-quality-security/test-automator.md) - Test automation framework expert

### [05. Data & AI](categories/05-data-ai/)

Data engineering, ML, and AI specialists.

- [**ai-engineer**](categories/05-data-ai/ai-engineer.md) - AI system design and deployment expert
- [**data-analyst**](categories/05-data-ai/data-analyst.md) - Data insights and visualization specialist
- [**data-engineer**](categories/05-data-ai/data-engineer.md) - Data pipeline architect
- [**data-scientist**](categories/05-data-ai/data-scientist.md) - Analytics and insights expert
- [**database-optimizer**](categories/05-data-ai/database-optimizer.md) - Database performance specialist
- [**llm-architect**](categories/05-data-ai/llm-architect.md) - Large language model architect
- [**machine-learning-engineer**](categories/05-data-ai/machine-learning-engineer.md) - Machine learning systems expert
- [**ml-engineer**](categories/05-data-ai/ml-engineer.md) - Machine learning specialist
- [**mlops-engineer**](categories/05-data-ai/mlops-engineer.md) - MLOps and model deployment expert
- [**nlp-engineer**](categories/05-data-ai/nlp-engineer.md) - Natural language processing expert
- [**postgres-pro**](categories/05-data-ai/postgres-pro.md) - PostgreSQL database expert
- [**prompt-engineer**](categories/05-data-ai/prompt-engineer.md) - Prompt optimization specialist

### [06. Developer Experience](categories/06-developer-experience/)

Tooling and developer productivity experts.

- [**build-engineer**](categories/06-developer-experience/build-engineer.md) - Build system specialist
- [**cli-developer**](categories/06-developer-experience/cli-developer.md) - Command-line tool creator
- [**dependency-manager**](categories/06-developer-experience/dependency-manager.md) - Package and dependency specialist
- [**documentation-engineer**](categories/06-developer-experience/documentation-engineer.md) - Technical documentation expert
- [**dx-optimizer**](categories/06-developer-experience/dx-optimizer.md) - Developer experience optimization specialist
- [**git-workflow-manager**](categories/06-developer-experience/git-workflow-manager.md) - Git workflow and branching expert
- [**legacy-modernizer**](categories/06-developer-experience/legacy-modernizer.md) - Legacy code modernization specialist
- [**mcp-developer**](categories/06-developer-experience/mcp-developer.md) - Model Context Protocol specialist
- [**powershell-ui-architect**](categories/06-developer-experience/powershell-ui-architect.md) - PowerShell UI/UX specialist for WinForms, WPF, Metro frameworks, and TUIs
- [**powershell-module-architect**](categories/06-developer-experience/powershell-module-architect.md) - PowerShell module and profile architecture specialist
- [**refactoring-specialist**](categories/06-developer-experience/refactoring-specialist.md) - Code refactoring expert
- [**slack-expert**](categories/06-developer-experience/slack-expert.md) - Slack platform and @slack/bolt specialist
- [**tooling-engineer**](categories/06-developer-experience/tooling-engineer.md) - Developer tooling specialist

### [07. Specialized Domains](categories/07-specialized-domains/)

Domain-specific technology experts.

- [**api-documenter**](categories/07-specialized-domains/api-documenter.md) - API documentation specialist
- [**blockchain-developer**](categories/07-specialized-domains/blockchain-developer.md) - Web3 and crypto specialist
- [**embedded-systems**](categories/07-specialized-domains/embedded-systems.md) - Embedded and real-time systems expert
- [**fintech-engineer**](categories/07-specialized-domains/fintech-engineer.md) - Financial technology specialist
- [**game-developer**](categories/07-specialized-domains/game-developer.md) - Game development expert
- [**iot-engineer**](categories/07-specialized-domains/iot-engineer.md) - IoT systems developer
- [**m365-admin**](categories/07-specialized-domains/m365-admin.md) - Microsoft 365, Exchange Online, Teams, and SharePoint administration specialist
- [**mobile-app-developer**](categories/07-specialized-domains/mobile-app-developer.md) - Mobile application specialist
- [**payment-integration**](categories/07-specialized-domains/payment-integration.md) - Payment systems expert
- [**quant-analyst**](categories/07-specialized-domains/quant-analyst.md) - Quantitative analysis specialist
- [**risk-manager**](categories/07-specialized-domains/risk-manager.md) - Risk assessment and management expert
- [**seo-specialist**](categories/07-specialized-domains/seo-specialist.md) - Search engine optimization expert

### [08. Business & Product](categories/08-business-product/)

Product management and business analysis.

- [**business-analyst**](categories/08-business-product/business-analyst.md) - Requirements specialist
- [**content-marketer**](categories/08-business-product/content-marketer.md) - Content marketing specialist
- [**customer-success-manager**](categories/08-business-product/customer-success-manager.md) - Customer success expert
- [**legal-advisor**](categories/08-business-product/legal-advisor.md) - Legal and compliance specialist
- [**product-manager**](categories/08-business-product/product-manager.md) - Product strategy expert
- [**project-manager**](categories/08-business-product/project-manager.md) - Project management specialist
- [**sales-engineer**](categories/08-business-product/sales-engineer.md) - Technical sales expert
- [**scrum-master**](categories/08-business-product/scrum-master.md) - Agile methodology expert
- [**technical-writer**](categories/08-business-product/technical-writer.md) - Technical documentation specialist
- [**ux-researcher**](categories/08-business-product/ux-researcher.md) - User research expert

### [09. Meta & Orchestration](categories/09-meta-orchestration/)

Agent coordination and meta-programming.

- [**agent-installer**](categories/09-meta-orchestration/agent-installer.md) - Browse and install agents from this repository via GitHub
- [**agent-organizer**](categories/09-meta-orchestration/agent-organizer.md) - Multi-agent coordinator
- [**context-manager**](categories/09-meta-orchestration/context-manager.md) - Context optimization expert
- [**error-coordinator**](categories/09-meta-orchestration/error-coordinator.md) - Error handling and recovery specialist
- [**it-ops-orchestrator**](categories/09-meta-orchestration/it-ops-orchestrator.md) - IT operations workflow orchestration specialist
- [**knowledge-synthesizer**](categories/09-meta-orchestration/knowledge-synthesizer.md) - Knowledge aggregation expert
- [**multi-agent-coordinator**](categories/09-meta-orchestration/multi-agent-coordinator.md) - Advanced multi-agent orchestration
- [**performance-monitor**](categories/09-meta-orchestration/performance-monitor.md) - Agent performance optimization
- [**pied-piper**](https://github.com/sathish316/pied-piper/) - Orchestrate Team of AI Subagents for repetitive SDLC workflows
- [**task-distributor**](categories/09-meta-orchestration/task-distributor.md) - Task allocation specialist
- [**workflow-orchestrator**](categories/09-meta-orchestration/workflow-orchestrator.md) - Complex workflow automation

### [10. Research & Analysis](categories/10-research-analysis/)

Research, search, and analysis specialists.

- [**research-analyst**](categories/10-research-analysis/research-analyst.md) - Comprehensive research specialist
- [**search-specialist**](categories/10-research-analysis/search-specialist.md) - Advanced information retrieval expert
- [**trend-analyst**](categories/10-research-analysis/trend-analyst.md) - Emerging trends and forecasting expert
- [**competitive-analyst**](categories/10-research-analysis/competitive-analyst.md) - Competitive intelligence specialist
- [**market-researcher**](categories/10-research-analysis/market-researcher.md) - Market analysis and consumer insights
- [**data-researcher**](categories/10-research-analysis/data-researcher.md) - Data discovery and analysis expert

## 🤖 Understanding Subagents

Subagents are specialized AI assistants that enhance Gemini CLI's capabilities by providing task-specific expertise. They act as dedicated helpers that Gemini CLI can call upon when encountering particular types of work.

### What Makes Subagents Special?

**Independent Context Windows**  
Every subagent operates within its own isolated context space, preventing cross-contamination between different tasks and maintaining clarity in the primary conversation thread.

**Domain-Specific Intelligence**  
Subagents come equipped with carefully crafted instructions tailored to their area of expertise, resulting in superior performance on specialized tasks.

**Shared Across Projects**  
After creating a subagent, you can utilize it throughout various projects and distribute it among team members to ensure consistent development practices.

**Granular Tool Permissions**  
You can configure each subagent with specific tool access rights, enabling fine-grained control over which capabilities are available for different task types.

### Core Advantages

- **Memory Efficiency**: Isolated contexts prevent the main conversation from becoming cluttered with task-specific details
- **Enhanced Accuracy**: Specialized prompts and configurations lead to better results in specific domains
- **Workflow Consistency**: Team-wide subagent sharing ensures uniform approaches to common tasks
- **Security Control**: Tool access can be restricted based on subagent type and purpose

### Getting Started with Subagents

**1. Access the Subagent Manager**

```bash
/agents
```

**2. Create Your Subagent**

- Choose between project-specific or global subagents
- Let Gemini generate an initial version, then refine it to your needs
- Provide detailed descriptions of the subagent's purpose and activation triggers
- Configure tool access (leave empty to inherit all available tools)
- Customize the system prompt using the built-in editor (press `e`)

**3. Deploy and Utilize**
Your subagent becomes immediately available. Gemini CLI will automatically engage it when suitable, or you can explicitly request its help:

```
> Have the code-reviewer subagent analyze my latest commits
```

### Subagent Storage Locations

| Type              | Path                | Availability         | Precedence |
| ----------------- | ------------------- | -------------------- | ---------- |
| Project Subagents | `.gemini/agents/`   | Current project only | Higher     |
| Global Subagents  | `~/.gemini/agents/` | All projects         | Lower      |

Note: When naming conflicts occur, project-specific subagents override global ones.

## 📖 Subagent Structure

Each subagent follows a standardized template:

```yaml
---
name: subagent-name
description: When this agent should be invoked
kind: local
tools:
  - read_file
  - write_file
  - run_shell_command
  - search_file_content
model: gemini-3-pro-preview
temperature: 0.1
max_turns: 20
---

You are a [role description and expertise areas]...

[Agent-specific checklists, patterns, and guidelines]...

## Communication Protocol
Inter-agent communication specifications...

## Development Workflow
Structured implementation phases...
```

**Temperature Settings**: All agents use task-optimized temperature values (0.05-0.55) based on their role:

- **Code Generation** (0.1): Deterministic, reliable code
- **Debugging** (0.05): Most precise error detection
- **Architecture** (0.35): Balanced exploration + constraints
- **Research** (0.45): Exploratory analysis
- See [TEMPERATURE_OPTIMIZATION_SUMMARY.md](TEMPERATURE_OPTIMIZATION_SUMMARY.md) for details

### Tool Assignment Philosophy

### Smart Model Routing

Each subagent includes a `model` field that automatically routes it to the right Gemini model — balancing quality and cost:

| Model                    | When It's Used                                                          | Examples                                                     |
| ------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------ |
| `gemini-3-pro-preview`   | Deep reasoning — architecture reviews, security audits, financial logic | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
| `gemini-3-pro-preview`   | Everyday coding — writing, debugging, refactoring                       | `python-pro`, `backend-developer`, `devops-engineer`         |
| `gemini-3-flash-preview` | Quick tasks — docs, search, dependency checks                           | `documentation-engineer`, `seo-specialist`, `build-engineer` |

You can override any agent's model by editing the `model` field in its frontmatter. Set `model: inherit` to use whatever model your main conversation is using.

### Tool Assignment Philosophy

Each subagent's `tools` field specifies Gemini CLI built-in tools, optimized for their role:

- **Read-only agents** (reviewers, auditors): `read_file, search_file_content` - analyze without modifying
- **Research agents** (analysts, researchers): `read_file, search_file_content, web_fetch, web_search` - gather information
- **Code writers** (developers, engineers): `read_file, write_file, run_shell_command, search_file_content` - create and execute
- **Documentation agents** (writers, documenters): `read_file, write_file, search_file_content, web_fetch, web_search` - document with research

Each agent has minimal necessary permissions. You can extend agents by adding MCP servers or external tools to the `tools` field.

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- Submit new subagents via PR
- Improve existing definitions
- Report issues and bugs

## Contributor ♥️ Thanks

![Contributors](https://contrib.rocks/image?repo=ankitmundada/awesome-gemini-cli-subagents&max=500&columns=20&anon=1)

## 📄 License

MIT License - see [LICENSE](LICENSE)

This repository is a curated collection of subagent definitions contributed by both the maintainers and the community. All subagents are provided "as is" without warranty. We do not audit or guarantee the security or correctness of any subagent. Review before use, the maintainers accept no liability for any issues arising from their use.

If you find an issue with a listed subagent or want your contribution removed, please [open an issue](https://github.com/ankitmundada/awesome-gemini-cli-subagents/issues) and we'll address it promptly.
