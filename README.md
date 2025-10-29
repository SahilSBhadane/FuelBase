# 📸 SnapCal

### Smart Calorie Tracking Made Simple

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)]()
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)]()
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)]()

**🚧 Currently in Active Development**

---

## 🎯 What is SnapCal?

SnapCal is a **mobile-first calorie tracking web application** that makes nutrition monitoring effortless. Snap a photo of your meal, and let AI-powered analysis handle the rest. No more manual searching through food databases or guessing portion sizes.

### The Problem We're Solving

Traditional calorie tracking apps are:
- ❌ Time-consuming (5-10 minutes per meal)
- ❌ Tedious (searching through endless food databases)
- ❌ Inaccurate (guessing portions and ingredients)
- ❌ Not sustainable (90% of users quit within a month)

### Our Solution

SnapCal makes tracking:
- ✅ **Fast** - 10 seconds per meal
- ✅ **Easy** - Just take a photo
- ✅ **Accurate** - AI-powered food recognition
- ✅ **Sustainable** - Low friction = high compliance

---

## 🚀 Features

### Current (MVP - In Development)

- 📸 **Photo Upload** - Snap and upload meal photos
- ✏️ **Manual Entry** - Add meals without photos
- 📊 **Daily Tracking** - Real-time calorie counter with progress bar
- 📅 **Meal History** - View all your logged meals
- 🎯 **Goal Setting** - Set and track daily calorie targets
- 👤 **User Authentication** - Secure login and signup
- 📱 **Mobile-First Design** - Optimized for phones and tablets
- 🌙 **Clean Interface** - Minimalist, distraction-free UI

### Coming Soon (V2)

- 🤖 **AI Food Recognition** - Automatic calorie estimation from photos
- 📈 **Advanced Analytics** - Weekly/monthly trends and insights
- 🍎 **Macro Tracking** - Protein, carbs, and fat breakdown
- 🔔 **Smart Reminders** - Never forget to log a meal
- 📤 **Data Export** - Download your nutrition data
- 🏆 **Streaks & Achievements** - Gamification for consistency
- 🍽️ **Meal Suggestions** - AI-powered recommendations based on goals

### Future (V3)

- 🔮 **Predictive Insights** - ML-powered nutrition coaching
- 📸 **Recipe Scanner** - Extract nutrition from recipe photos
- 🤝 **Social Features** - Share progress with friends
- ⌚ **Wearable Integration** - Sync with fitness trackers
- 🌍 **Offline Mode** - Track meals without internet
- 🎨 **Custom Themes** - Personalize your experience

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts
- **Form Handling:** React Hook Form + Zod

### Backend
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage (meal images)
- **API:** Next.js API Routes (Serverless)

### AI/ML (Coming Soon)
- **Food Recognition:** Calorie Mama API (Phase 1)
- **Custom Model:** TensorFlow.js (Phase 2)
- **Image Processing:** Sharp, Canvas API

### DevOps
- **Hosting:** Vercel (Frontend + API)
- **CI/CD:** Vercel Auto-deploy
- **Version Control:** Git + GitHub
- **Environment:** Node.js 18+

---

## 🏗️ Architecture
```
┌─────────────────┐
│   User Device   │ → Mobile/Desktop browser
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Next.js (SSR)  │ → Server-side rendering + API routes
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│    Supabase     │ → Database, Auth, Storage
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  External APIs  │ → Food recognition (future)
└─────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SahilSBhadane/snapcal.git
cd snapcal
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create `.env.local` in the root directory:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Set up database**

Run the SQL scripts in `supabase/migrations/` in your Supabase SQL Editor

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📱 Usage

### For End Users

1. **Sign up** with your email
2. **Set your daily calorie goal**
3. **Add meals** by:
   - Taking a photo (AI analysis coming soon)
   - Manual entry with name and calories
4. **Track progress** on your dashboard
5. **View history** to see past meals

### For Developers
```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:push      # Push schema changes
npm run db:reset     # Reset database
```

---

## 📊 Project Status

**Current Phase:** MVP Development (Week 2/4)

**Completed:**
- ✅ Project setup and architecture
- ✅ Database schema design
- ✅ Authentication system
- ✅ Basic UI components
- ✅ Landing page

**In Progress:**
- 🔨 Dashboard implementation
- 🔨 Meal logging functionality
- 🔨 Daily statistics
- 🔨 Profile management

**Next Up:**
- ⏳ Image upload handling
- ⏳ Charts and analytics
- ⏳ PWA implementation
- ⏳ API integration (food recognition)

---

## 🎯 Roadmap

### Phase 1: MVP (Weeks 1-4) - Current
- Core calorie tracking functionality
- User authentication
- Manual meal entry
- Basic analytics

### Phase 2: AI Integration (Weeks 5-8)
- Food recognition API integration
- Automatic calorie estimation
- Improved accuracy with user feedback
- Image preprocessing pipeline

### Phase 3: Advanced Features (Weeks 9-12)
- Macro tracking (protein, carbs, fats)
- Weekly/monthly reports
- Goal recommendations
- Social features

### Phase 4: Scale & Optimize (Weeks 13+)
- Custom ML model training
- Performance optimization
- Mobile app (React Native)
- Premium features

---

## 🤝 Contributing

Contributions are welcome! This is an active project and we're always looking to improve.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind utility classes (avoid custom CSS)
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 🐛 Known Issues & Limitations

### Current Limitations (MVP Phase)
- Manual calorie entry only (AI coming soon)
- No offline support yet
- Limited to daily tracking (no weekly/monthly views)
- No data export functionality

### Planned Fixes
- [ ] Add image upload with preview
- [ ] Implement better error handling
- [ ] Add loading states for async operations
- [ ] Improve mobile responsiveness on very small screens

Report bugs by opening an issue on GitHub!

---

## 📈 Performance

**Target Metrics:**
- Lighthouse Score: 95+ (Performance)
- Time to Interactive: < 2s
- First Contentful Paint: < 1s
- Core Web Vitals: All green

**Current Status:** Optimizing (will update after deployment)

---

## 🔐 Security & Privacy

- 🔒 **Authentication:** Supabase Auth with JWT tokens
- 🛡️ **Data Protection:** Row Level Security (RLS) policies
- 🔐 **Secure Storage:** Encrypted at rest
- 🚫 **No Data Selling:** Your data stays yours
- 📧 **Email Verification:** Required for signup

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sahil Bhadane**
- GitHub: [@SahilSBhadane](https://github.com/SahilSBhadane)
- LinkedIn: [linkedin.com/in/sahil-bhadane](https://www.linkedin.com/in/sahil-bhadane)
- Email: sahilbhadane04@gmail.com

**Student at:** Vellore Institute of Technology, Chennai  
**Specialization:** Computer Science with AI & Machine Learning

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For seamless deployment
- **Supabase** - For the backend infrastructure
- **Shadcn** - For beautiful UI components
- **Open Source Community** - For inspiration and tools

---

## 📞 Contact & Support

- 🐛 **Bug Reports:** Open an issue on GitHub
- 💡 **Feature Requests:** Start a discussion on GitHub
- 📧 **Email:** sahilbhadane04@gmail.com
- 💬 **Feedback:** Always welcome!

---

## 📸 Screenshots

_Coming soon! The app is currently in active development._

---

## 🌟 Show Your Support

If you find this project interesting or useful:
- ⭐ Star this repository
- 🍴 Fork it for your own experiments
- 📢 Share it with others
- 🤝 Contribute to make it better

---

<div align="center">

### ⚡ "Track smarter, live better"

**Built with ❤️ by a student who got tired of manual calorie counting**

![Profile Views](https://komarev.com/ghpvc/?username=SahilSBhadane&color=blueviolet&style=flat-square)

</div>
