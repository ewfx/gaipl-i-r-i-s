# IPE Console - Intelligent Platform Environment

A comprehensive platform engineering solution that combines incident management, monitoring, and AI-powered assistance. Built with Next.js, Tailwind CSS, and advanced integrations for modern DevOps teams.

## Key Features

### Platform Management
- Real-time incident tracking and management
- Advanced system telemetry and monitoring
- Service dependency visualization
- AI-powered recommendations
- Comprehensive search capabilities

### Integrations
- OpenShift Container Platform integration
- GitHub Enterprise connectivity
- Jira Service Management integration
- LLM-powered analytics
- Real-time data synchronization

### AI Assistant
- Natural language interaction
- Predictive analytics
- Automated troubleshooting
- Knowledge base integration
- Context-aware support

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ipe-console.git
cd ipe-console
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Configure your environment variables:
# - OPENSHIFT_API_URL
# - GITHUB_TOKEN
# - JIRA_API_KEY
# - LLM_API_KEY
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser

## Tech Stack

### Frontend
- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component system
- **Lucide Icons** - Modern icon system
- **TypeScript** - Type safety

### Backend Integrations
- **OpenShift API** - Container platform management
- **GitHub API** - Code repository integration
- **Jira API** - Issue tracking
- **LLM API** - AI assistance

## Project Structure

```
src/
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── IPEConsole/      # Main console components
│   │   ├── Incidents/   # Incident management
│   │   ├── Telemetry/   # System monitoring
│   │   ├── Assistant/   # AI assistant
│   │   └── index.tsx    # Main component
│   └── ui/              # Shared UI components
├── services/            # API integration services
├── types/               # TypeScript definitions
└── utils/               # Utility functions
```

## Configuration

### Required Environment Variables
- `OPENSHIFT_API_URL` - OpenShift cluster API endpoint
- `OPENSHIFT_TOKEN` - OpenShift authentication token
- `GITHUB_TOKEN` - GitHub personal access token
- `JIRA_API_KEY` - Jira API authentication key
- `LLM_API_KEY` - Language model API key

### Optional Configuration
- `TELEMETRY_INTERVAL` - Monitoring refresh rate
- `LOG_LEVEL` - Application logging level
- `CACHE_DURATION` - Data cache duration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments
Naresh krishna Vemuri
Pavani Racham
Kanaparthi Sujith
Somanapalli, Vaikumar
Chappa Vijaya Durga
