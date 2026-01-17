This is a personal site but I'm open to collaborations. It's bootstraped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

## Getting Started with Agents

This project can be extended with AI agents to enhance functionality and automation. Here's how to get started:

### What are Agents?

Agents are autonomous systems that can perform tasks, make decisions, and interact with your application. In the context of web development, agents can:

- Automate repetitive tasks
- Process and analyze data
- Interact with APIs and services
- Provide intelligent responses to user queries
- Handle complex workflows

### Setting Up Agents

1. **Install Dependencies**

   If you plan to use AI-powered agents, you may need additional packages:

   ```bash
   npm install openai
   # or
   npm install @anthropic-ai/sdk
   # or other AI SDKs as needed
   ```

2. **Environment Variables**

   Create a `.env.local` file in the root directory:

   ```env
   OPENAI_API_KEY=your_api_key_here
   # or
   ANTHROPIC_API_KEY=your_api_key_here
   ```

3. **Create Agent Utilities**

   Agents typically live in utility files or API routes. You can create:

   - `src/lib/agents/` - For agent utilities and configurations
   - `src/app/api/agents/` - For agent API endpoints

4. **Basic Agent Example**

   Here's a simple agent structure you can use:

   ```typescript
   // src/lib/agents/base-agent.ts
   export class BaseAgent {
     async execute(task: string): Promise<any> {
       // Agent logic here
     }
   }
   ```

### Agent Patterns

- **API Route Agents**: Handle server-side agent logic in Next.js API routes
- **Client-Side Agents**: Use React hooks and context for client-side agent interactions
- **Background Agents**: Use server actions or cron jobs for scheduled agent tasks

### Best Practices

- Keep agents focused on specific tasks
- Handle errors gracefully
- Implement rate limiting for API calls
- Use TypeScript for type safety
- Test agents thoroughly before deployment

## Deployment

CI/CD pipelines use Vercel.

## License

MIT License