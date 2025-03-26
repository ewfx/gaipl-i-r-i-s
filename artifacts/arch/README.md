![image](https://github.com/user-attachments/assets/32121540-b9ee-44d2-b1b2-93663b9c3628)

---

## 🔷 **Layer 1: User Interaction**

- **UI (User Interface):**  
  The primary access point where users interact with the system via web or desktop applications.

- **AI ChatBot:**  
  Natural language interface that allows users to ask questions, raise issues, or execute actions conversationally.

---

## **Layer 2: Intelligence & Context Management**

- **Agentic AI:**  
  The central AI engine that:
  - Understands user intent.
  - Maintains contextual awareness.
  - Orchestrates actions across various platform tools.
  - Leverages telemetry and knowledge to drive proactive support.

- **KED (Knowledge Extraction & Discovery):**  
  Assists the Agentic AI by:
  - Extracting insights from documents, codebases, or logs.
  - Enriching conversations with relevant contextual data.

---

## **Layer 3: Integrated Systems & Tools**

This layer contains all enterprise tools and platforms integrated into the IPE using:

###  **Model Context Protocol (MCP)**
A powerful protocol that:
- Maintains operational context across different systems.
- Facilitates intelligent data exchange between Agentic AI and backend tools.
- Enables fine-grained task delegation and tracking.

| MCP Integration | Connected System   |
|-----------------|--------------------|
| MCP             | JIRA (ticketing & issue tracking) |
| MCP             | ServiceNow (ITSM workflows)       |
| MCP             | CI/CD Tools (DevOps automation)   |
| MCP             | GitHub (version control & code analysis) |

---

### **API Integrations**
Used for systems where MCP is not directly employed, still enabling secure and contextual interactions:

| API Integration | Connected Tool     |
|-----------------|--------------------|
| API             | Linborg Tool (likely observability or infra-related) |
| API             | AVI (App Virtualization Infrastructure)              |
| API             | MQ (Message Queue system like IBM MQ or RabbitMQ)    |

---

##  **Summary Flow**
1. **User submits a query/task via UI →**
2. **AI ChatBot processes the natural language →**
3. **Agentic AI determines context, leverages KED if needed →**
4. **Contextual task routed via MCP/API to relevant system →**
5. **Results and insights returned to the user via AI ChatBot.**

