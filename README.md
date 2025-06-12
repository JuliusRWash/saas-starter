# Isla Agent Platform

Build and deploy intelligent AI agents for your organization. A powerful, scalable, and intuitive agent management platform built with **Next.js** featuring modern authentication, team management, and beautiful UI animations.

**Demo: [https://isla-agent-platform.vercel.app/](https://isla-agent-platform.vercel.app/)**

## Features

- 🤖 **AI Agent Management**: Create, configure, and deploy intelligent agents
- 🎨 **Beautiful UI**: Modern design with gradient effects and smooth animations
- 👥 **Team Collaboration**: Multi-tenant architecture with role-based access control
- 🔐 **Secure Authentication**: Email/password authentication with JWT tokens
- 💳 **Subscription Management**: Stripe integration for premium features
- 📊 **Analytics Dashboard**: Track agent performance and usage metrics
- 🌙 **Dark Mode Support**: Comprehensive theming with brand-consistent colors
- ⚡ **Real-time Updates**: Live agent status and conversation management

## Design System

The platform features a comprehensive design system with:

- **Brand Colors**: Blue and teal gradient palette
- **Typography**: Plus Jakarta Sans font family
- **Animations**: Hover effects, gradient transitions, and smooth interactions
- **Components**: Radix UI -based components with custom styling

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom animations
- **UI Components**: [Radix UI](https://www.radix-ui.com/) with custom theming
- **Payments**: [Stripe](https://stripe.com/) for subscription management
- **Authentication**: JWT-based with secure cookie storage

## Getting Started

```bash
git clone https://github.com/your-username/isla-agent-platform
cd isla-agent-platform
pnpm install
```

## Running Locally

[Install](https://docs.stripe.com/stripe-cli) and log in to your Stripe account:

```bash
stripe login
```

Use the included setup script to create your `.env` file:

```bash
pnpm db:setup
```

Run the database migrations and seed the database with a default user and team:

```bash
pnpm db:migrate
pnpm db:seed
```

This will create the following test user and organization:

- User: `test@test.com`
- Password: `admin123`

You can also create new users through the `/sign-up` route.

Finally, run the Next.js development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the platform in action.

For Stripe webhook testing (subscription events):

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Testing Payments

To test Stripe subscriptions, use these test card details:

- Card Number: `4242 4242 4242 4242`
- Expiration: Any future date
- CVC: Any 3-digit number

## Agent Platform Features

### Agent Management
- Create and configure AI agents with custom instructions
- Assign agent types (Support, Analytics, Sales, etc.)
- Real-time status monitoring (online/offline)
- Agent embedding for websites

### Knowledge Management
- Upload documents and files for agent training
- FAQ management system
- URL-based knowledge sources
- Conversation history and analytics

### Team Collaboration
- Multi-tenant organization structure
- Role-based permissions (Owner, Manager, Viewer)
- Team member invitation system
- Activity logging and audit trails

## Going to Production

### Set up a production Stripe webhook

1. Create a new webhook in your Stripe Dashboard
2. Set endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select events: `checkout.session.completed`, `customer.subscription.updated`

### Deploy to Vercel

1. Push code to GitHub repository
2. Connect to [Vercel](https://vercel.com/) and deploy
3. Configure environment variables:

```bash
BASE_URL=https://yourdomain.com
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
POSTGRES_URL=postgresql://...
AUTH_SECRET=your-random-secret
```

## Customization

The platform's design system can be customized by modifying:

- **Colors**: Update CSS variables in `app/globals.css`
- **Animations**: Modify utility classes for different effects
- **Typography**: Change font imports in `app/layout.tsx`
- **Components**: Extend Radix UI components in `components/ui/`

## Contributing

We welcome contributions! Please read our contributing guidelines and submit pull requests for any improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
