# ⚡ Fuelbase

### Your Nutrition Database. Track Smarter, Live Better.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)]()
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)]()
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)]()

**🚧 Currently in Active Development**

---

## 🎯 What is Fuelbase?

Fuelbase is a **mobile-first nutrition tracking platform** that treats your meals like data—because good health starts with good information. Snap a photo of your meal, and let AI-powered analysis build your personal nutrition database.

Think of it as your body's fuel management system.

### The Problem We're Solving

Traditional calorie tracking is broken:
- ❌ Takes 5-10 minutes per meal (nobody has time)
- ❌ Endless food databases with inconsistent data
- ❌ Guesswork on portions and ingredients
- ❌ 90% quit rate within the first month

### Our Solution

Fuelbase makes nutrition tracking:
- ✅ **Fast** - Log meals in 10 seconds
- ✅ **Smart** - AI-powered food recognition
- ✅ **Accurate** - Database-quality nutrition data
- ✅ **Sustainable** - Low friction, high compliance

---

## 🚀 Features

### Current (MVP - In Development)

- 📸 **Photo Upload** - Snap and upload meal photos
- ✏️ **Manual Entry** - Quick add meals without photos
- 📊 **Real-Time Tracking** - Live calorie counter with visual progress
- 📅 **Meal Database** - Personal history of all logged meals
- 🎯 **Goal Management** - Set and track daily calorie targets
- 👤 **Secure Authentication** - Email-based login and signup
- 📱 **Mobile-First UI** - Optimized for on-the-go tracking
- 🎨 **Clean Interface** - Minimalist, distraction-free design

### Coming Soon (V2)

- 🤖 **AI Food Recognition** - Automatic calorie estimation from photos
- 📈 **Analytics Dashboard** - Weekly/monthly trends and insights
- 🍎 **Macro Breakdown** - Protein, carbs, and fat tracking
- 🔔 **Smart Notifications** - Intelligent meal reminders
- 📤 **Data Export** - CSV/JSON export of your nutrition data
- 🏆 **Streak Tracking** - Build consistency with daily streaks
- 🎨 **Visual Reports** - Beautiful charts and graphs

### Future (V3)

- 🔮 **Predictive Insights** - ML-powered nutrition coaching
- 📖 **Recipe Scanner** - Extract nutrition from recipe photos
- 🤝 **Community Features** - Share progress, get motivated
- ⌚ **Wearable Sync** - Integration with fitness trackers
- 🌍 **Offline Mode** - Track without internet connection
- 🎯 **Custom Themes** - Personalize your experience
- 🏋️ **Workout Integration** - Connect calories burned with intake

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod validation
- **State:** React Hooks + Context API

### Backend
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth (JWT-based)
- **Storage:** Supabase Storage (meal images)
- **API:** Next.js API Routes (Serverless Functions)
- **Real-time:** Supabase Realtime subscriptions

### AI/ML (Coming Soon)
- **Food Recognition:** Calorie Mama API (Phase 1)
- **Custom Model:** TensorFlow.js (Phase 2)
- **Image Processing:** Sharp, Canvas API
- **ML Pipeline:** Python + FastAPI (backend service)

### DevOps & Deployment
- **Hosting:** Vercel (Frontend + API)
- **CI/CD:** Vercel Auto-deploy on push
- **Version Control:** Git + GitHub
- **Environment:** Node.js 18+
- **Package Manager:** npm

---

## 🏗️ Architecture
```
┌─────────────────────┐
│   User Device       │ → Progressive Web App
│  (Mobile/Desktop)   │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│   Next.js (SSR)     │ → Server-side rendering
│   + API Routes      │ → Serverless functions
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│    Supabase         │ → PostgreSQL Database
│  - Auth (JWT)       │ → Row Level Security
│  - Storage          │ → Image hosting
│  - Realtime         │ → Live updates
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  External APIs      │ → Food recognition (future)
│  - Calorie Mama     │
│  - Custom ML Model  │
└─────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Supabase account (free tier available)
- Git installed

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/SahilSBhadane/fuelbase.git
cd fuelbase
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional (for future AI features)
CALORIE_MAMA_API_KEY=your_api_key_here
```

4. **Set up the database**

- Go to your Supabase project dashboard
- Navigate to SQL Editor
- Run the migration scripts from `supabase/migrations/`
- This creates the necessary tables and security policies

5. **Run the development server**
```bash
npm run dev
```

6. **Open in browser**
```
http://localhost:3000
```

The app should now be running locally! 🎉

---

## 📱 Usage

### For End Users

1. **Create an account**
   - Sign up with your email
   - Verify your email (check spam folder)

2. **Set your goals**
   - Enter your daily calorie target
   - Customize your profile settings

3. **Start tracking**
   - **Option A:** Take a photo of your meal (AI analysis coming soon)
   - **Option B:** Manually enter meal name and calories

4. **Monitor progress**
   - View your daily calorie intake
   - Check your meal history
   - Track your streaks

5. **Stay consistent**
   - Log meals throughout the day
   - Review your weekly trends
   - Adjust goals as needed

### For Developers
```bash
# Development
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
npm run type-check   # Run TypeScript compiler check

# Database (Supabase)
npm run db:types     # Generate TypeScript types from database
npm run db:reset     # Reset database (caution: deletes data)
```

---

## 📊 Project Status

**Current Phase:** MVP Development

### Completed ✅
- Project architecture and setup
- Database schema design
- Authentication flow (signup/login)
- UI component library setup
- Landing page design
- Basic routing structure

### In Progress 🔨
- Dashboard implementation
- Meal logging functionality
- Daily statistics calculator
- User profile management
- Image upload system

### Up Next ⏳
- Charts and data visualization
- Meal history with filters
- PWA implementation (installable app)
- API integration for food recognition
- Responsive design polish

---

## 🗺️ Development Roadmap

### Phase 1: MVP Foundation (Weeks 1-4) - **Current**
**Goal:** Core tracking functionality

- [x] Project setup and architecture
- [x] User authentication system
- [x] Database schema and migrations
- [ ] Manual meal entry
- [ ] Daily calorie tracking
- [ ] Basic profile management
- [ ] Responsive mobile design

**Target:** Functional calorie tracker

---

### Phase 2: AI Integration (Weeks 5-8)
**Goal:** Smart food recognition

- [ ] External API integration (Calorie Mama)
- [ ] Image upload and preprocessing
- [ ] Automatic calorie estimation
- [ ] Confidence scoring for predictions
- [ ] User feedback loop for accuracy
- [ ] Fallback to manual entry

**Target:** AI-powered meal logging

---

### Phase 3: Analytics & Insights (Weeks 9-12)
**Goal:** Data-driven insights

- [ ] Macro tracking (protein, carbs, fats)
- [ ] Weekly/monthly reports
- [ ] Trend analysis and charts
- [ ] Goal recommendations
- [ ] Progress photos comparison
- [ ] Export functionality (CSV/PDF)

**Target:** Comprehensive nutrition dashboard

---

### Phase 4: Scale & Polish (Weeks 13-16)
**Goal:** Production-ready platform

- [ ] Custom ML model training
- [ ] Performance optimization
- [ ] Advanced caching strategies
- [ ] Error monitoring (Sentry)
- [ ] Analytics (PostHog/Mixpanel)
- [ ] A/B testing framework

**Target:** Scalable, polished product

---

### Phase 5: Community & Growth (Weeks 17+)
**Goal:** User engagement

- [ ] Social features (share meals)
- [ ] Community challenges
- [ ] Mobile app (React Native)
- [ ] Premium features/subscription
- [ ] Recipe database
- [ ] Meal planning tools

**Target:** Platform with network effects

---

## 🤝 Contributing

Contributions are welcome! Fuelbase is an open-source project built by developers who believe nutrition tracking should be accessible to everyone.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
```bash
   git checkout -b feature/amazing-feature
```
3. **Make your changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation
4. **Commit with meaningful messages**
```bash
   git commit -m 'feat: add meal search functionality'
```
5. **Push to your branch**
```bash
   git push origin feature/amazing-feature
```
6. **Open a Pull Request**
   - Describe what you changed
   - Link any related issues
   - Add screenshots for UI changes

### Contribution Guidelines

**Code Style:**
- Use TypeScript for type safety
- Follow Prettier formatting (runs on commit)
- Use Tailwind utility classes (avoid custom CSS)
- Write descriptive variable names
- Comment complex logic

**Commit Messages:**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code formatting
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Areas to Contribute:**
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Test coverage
- 🌐 Internationalization

---

## 🐛 Known Issues & Limitations

### Current Limitations (MVP Phase)
- ⚠️ Manual calorie entry only (AI coming in Phase 2)
- ⚠️ No offline support yet
- ⚠️ Limited to daily view (no weekly/monthly yet)
- ⚠️ No data export functionality
- ⚠️ Basic macro tracking (no micronutrients)

### Planned Fixes
- [ ] Add image upload with preview
- [ ] Implement comprehensive error handling
- [ ] Add loading states for all async operations
- [ ] Improve mobile responsiveness on small screens
- [ ] Add keyboard shortcuts for power users
- [ ] Implement undo/redo for meal entries

### Known Bugs
- None reported yet (we're in early development!)

**Found a bug?** Please [open an issue](https://github.com/SahilSBhadane/fuelbase/issues) with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 📈 Performance Targets

### Lighthouse Scores (Goals)
- **Performance:** 95+ 🎯
- **Accessibility:** 100 ♿
- **Best Practices:** 95+ ✅
- **SEO:** 100 🔍

### Core Web Vitals (Goals)
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### App Metrics
- **Time to Interactive:** < 2s
- **First Contentful Paint:** < 1s
- **Bundle Size:** < 200KB (JS)

**Current Status:** In optimization (metrics TBD after deployment)

---

## 🔐 Security & Privacy

### Security Measures
- 🔒 **Authentication:** Supabase Auth with JWT tokens
- 🛡️ **Data Protection:** Row Level Security (RLS) policies
- 🔐 **Encryption:** Data encrypted at rest and in transit
- 🚫 **API Protection:** Rate limiting on all endpoints
- 📧 **Email Verification:** Required for account activation
- 🔑 **Password Requirements:** Minimum 6 characters

### Privacy Commitments
- ✅ **No Data Selling:** Your data is never sold to third parties
- ✅ **Data Ownership:** You own your nutrition data
- ✅ **Export Anytime:** Download your data whenever you want
- ✅ **Account Deletion:** Permanent deletion available
- ✅ **Transparent:** Open source = auditable code

### Compliance
- GDPR-ready architecture
- Privacy policy (coming soon)
- Terms of service (coming soon)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for full details.

### What This Means:
- ✅ Free to use, modify, and distribute
- ✅ Can be used commercially
- ✅ Can be used privately
- ✅ Must include original copyright notice
- ❌ No warranty provided

---

## 👨‍💻 Author

**Sahil Bhadane**  
CS Student @ VIT Chennai | AI/ML Specialization

- 🐙 GitHub: [@SahilSBhadane](https://github.com/SahilSBhadane)
- 💼 LinkedIn: [linkedin.com/in/sahil-bhadane](https://www.linkedin.com/in/sahil-bhadane)
- 📧 Email: sahilbhadane04@gmail.com
- 📍 Based in: Nashik, Maharashtra, India

### About the Creator
Built by a student who got tired of complicated calorie tracking apps. Fuelbase started as a personal project to learn full-stack development and grew into a platform that could help thousands track their nutrition effortlessly.

**Tech Background:**
- Intern @ Fox Solutions (AGV Systems, Database Architecture)
- Freelance Developer (Web Dev, Marketing Automation)
- Focus: AI/ML, Full-Stack Development, Computer Vision

---

## 🙏 Acknowledgments

### Open Source Heroes
- **Next.js Team** - For the incredible React framework
- **Vercel** - For seamless deployment and hosting
- **Supabase** - For the backend-as-a-service platform
- **Shadcn** - For beautiful, accessible UI components
- **Tailwind Labs** - For utility-first CSS

### Inspiration
- MyFitnessPal - Showed the need for better UX
- Notion - For clean, intuitive interface design
- Linear - For project management inspiration
- Supabase - For the "base" naming pattern

### Community
- All future contributors
- Early testers and feedback providers
- The open-source community

---

## 📞 Contact & Support

### Get Help
- 🐛 **Bug Reports:** [Open an issue](https://github.com/SahilSBhadane/fuelbase/issues)
- 💡 **Feature Requests:** [Start a discussion](https://github.com/SahilSBhadane/fuelbase/discussions)
- 📧 **Direct Contact:** sahilbhadane04@gmail.com
- 💬 **General Questions:** Use GitHub Discussions

### Stay Updated
- ⭐ Star this repo for updates
- 👀 Watch releases for new versions
- 🍴 Fork to experiment with your own features

---

## 📸 Screenshots

_Coming soon! The app is currently in active development. Check back in a few weeks for UI previews._

**Want early access?** Star the repo and follow development updates!

---

## 🌟 Show Your Support

If Fuelbase resonates with you:

- ⭐ **Star this repository** - Helps with visibility
- 🍴 **Fork and experiment** - Build your own features
- 📢 **Share with friends** - Spread the word
- 🤝 **Contribute code** - Make it better together
- 💬 **Provide feedback** - Your input shapes the product
- 🐛 **Report bugs** - Help improve quality

Every bit of support helps build a better nutrition tracking platform!

---

## 💭 Philosophy

> "Your body is a database. Every meal is a data point. Good health starts with good information."

Fuelbase believes that:
- 🎯 **Simplicity wins** - Less friction = more consistency
- 📊 **Data empowers** - Information drives better decisions
- 🤖 **AI assists** - Technology should reduce manual work
- 🌍 **Open is better** - Transparency builds trust
- 💪 **Health is wealth** - Nutrition tracking shouldn't be a chore

---

<div align="center">

## ⚡ Built Different

**Fuelbase isn't just another calorie tracker. It's your personal nutrition database.**

Track smarter. Live better. Build consistency.

---

### 🚀 From Student Project to Production Platform

*Started: October 2024 | Status: Active Development | Vision: Help 10,000+ people track nutrition effortlessly*

---

![Profile Views](https://komarev.com/ghpvc/?username=SahilSBhadane-fuelbase&color=blueviolet&style=flat-square)

**Made with ❤️ and lots of ☕ by Sahil Bhadane**

</div>