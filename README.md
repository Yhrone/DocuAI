# DucoAi

DucoAi is an intelligent document collaboration platform that leverages AI to streamline document creation, editing, and management. With advanced natural language processing capabilities, DucoAi helps teams work more efficiently with their documents.


## Features

- **AI-Powered Document Analysis**: Extract key insights and summaries automatically
- **Smart Collaboration**: Real-time editing with contextual AI suggestions
- **Document Management**: Organize and search across your entire document library
- **Version Control**: Track changes and maintain document history
- **Custom Templates**: Create and use templates for consistent document creation
- **Integrations**: Connect with popular tools like Google Drive, Dropbox, and Notion
- **Security**: Enterprise-grade encryption and access controls

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Shadcn UI
- **Backend**: tRPC, Prisma, PostgreSQL
- **Authentication**: Clerk
- **AI/ML**: OpenAI API, Pinecone for vector embeddings
- **File Storage**: Uploadthing
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- OpenAI API key
- Clerk account for authentication
- Pinecone account for vector database
- Uploadthing account for file uploads

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Yhrone/ducoai.git
cd ducoai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Fill in your environment variables in `.env.local`:
```
# Database
DATABASE_URL=your_postgresql_connection_string

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Pinecone
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENVIRONMENT=your_pinecone_environment
PINECONE_INDEX=your_pinecone_index

# Uploadthing
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# App URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
# or
yarn dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
ducoai/
├── src/                # Source files
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── lib/            # Utility functions and shared libraries
│   ├── server/         # tRPC server and API routes
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── prisma/             # Prisma schema and migrations
├── public/             # Static files
└── scripts/            # Build and deployment scripts
```

## Key Components

### Document Processing

DucoAi processes documents through several stages:
1. **Upload & Analysis**: Documents are securely uploaded and analyzed for content and structure
2. **Vectorization**: Key content is converted to vector embeddings for semantic search
3. **Indexing**: Documents are indexed for quick retrieval and cross-referencing

### AI Features

- **Content Generation**: Create high-quality document drafts based on simple prompts
- **Summarization**: Get concise summaries of long documents
- **Semantic Search**: Find relevant documents based on natural language queries
- **Suggestions**: Receive intelligent writing suggestions while editing

## API Reference

DucoAi provides a comprehensive API built with tRPC. Full documentation is available in the application dashboard under the Developer section.

Example usage:

```typescript
// Creating a new document
const newDocument = await api.documents.create({
  title: "Project Proposal",
  content: "This is a draft proposal for the new project.",
  folderId: "folder-uuid"
});

// Generating AI suggestions
const suggestions = await api.ai.generateSuggestions({
  documentId: "doc-uuid",
  context: "Need to expand the introduction section."
});
```


## Contributing

We welcome contributions to DucoAi! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


Built with 💡 by the DucoAi Team
