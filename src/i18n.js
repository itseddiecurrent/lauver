/**
 * Lauver.ai — i18n module
 * Supports EN ↔ ZH switching via data-i18n / data-i18n-ph / data-i18n-html attributes.
 * Language preference is stored in localStorage.
 */

// ── Translation dictionary ───────────────────────────────
const T = {
  en: {
    /* ── Shared / Nav ── */
    'nav.about':       'About',
    'nav.features':    'Features',
    'nav.compare':     'Compare',
    'nav.signin':      'Sign In',
    'nav.home':        '← Home',
    'nav.signout':     'Sign Out',
    'lang.btn':        '中文',

    /* ── Index: Hero ── */
    'hero.pill':       'AI-Powered Athletic Community · Now in Beta',
    'hero.h1':         'Find<br>Your<br><span class="accent">Pack.</span>',
    'hero.sub':        'Track every stride, climb, and sprint. Then let AI do what no fitness app has done before — find the athletes, partners, and communities that actually fit your life.',
    'hero.cta1':       'Get Early Access →',
    'hero.cta2':       'Try the App →',
    'hero.tag.run':    '🏃 Running',
    'hero.tag.cycle':  '🚴 Cycling',
    'hero.tag.swim':   '🏊 Swimming',
    'hero.tag.climb':  '🧗 Climbing',
    'hero.tag.hike':   '🥾 Hiking',
    'hero.tag.ski':    '⛷️ Skiing',
    'hero.tag.gym':    '🏋️ Gym',
    'hero.tag.yoga':   '🧘 Yoga',
    'hero.tag.more':   '+42 more →',
    'hero.b1.val':     'Multi-Sport Ready',
    'hero.b1.lbl':     'Runs, rides, climbs, swims, and more',
    'hero.b2.val':     'Community First',
    'hero.b2.lbl':     'Find training partners and local groups',
    'hero.b3.val':     'Privacy Controlled',
    'hero.b3.lbl':     'You choose what to share and with whom',
    'hero.s1.num':     'Real Workouts',
    'hero.s1.lbl':     'Track sessions across every sport you do',
    'hero.s2.num':     'Smart Matching',
    'hero.s2.lbl':     'Connections based on goals, schedule, and style',
    'hero.s3.num':     'Beta Access',
    'hero.s3.lbl':     'Early members shape the product with feedback',
    'hero.s4.num':     'Built Together',
    'hero.s4.lbl':     'Designed for people who train better in a pack',

    /* ── Index: About ── */
    'about.label':     'About Lauver.ai',
    'about.title':     'Fitness Is<br>Better Together.',
    'about.p1':        'Lauver.ai was built on one truth every serious athlete knows: the best sessions happen when you have someone beside you. But finding that person — or that community — has always been harder than it should be.',
    'about.p2':        'We took the activity tracking depth you already rely on and layered it with something new: AI that actually understands who you are as an athlete, then builds the connections around that.',
    'about.p3':        'Whether you\'re a solo trail runner hunting for a weekend crew, a city cyclist chasing group rides, a beginner who needs accountability, or an outdoor obsessive who wants to explore with people who get it — Lauver finds your people.',
    'about.01.h':      'Track Everything',
    'about.01.p':      'Log runs, rides, climbs, swims, and 50+ sports with GPS precision. Auto-detection, route mapping, and performance analysis all built in.',
    'about.02.h':      'Match Your People',
    'about.02.p':      'AI-powered partner matching based on sport, location, schedule, pace, and vibe. Not random suggestions — people who genuinely fit.',
    'about.03.h':      'Belong to Something',
    'about.03.p':      'Discover local clubs, virtual groups, and event communities. Join organized group workouts. Build bonds that outlast any single activity.',

    /* ── Index: Features ── */
    'feat.label':      'How It Works',
    'feat.title':      'Three Steps to<br>Your Athletic Life.',
    'feat.1.h':        'Record Activities',
    'feat.1.p':        'Track runs, rides, hikes, swims, and 50+ sports with GPS precision. Auto-detection, route mapping, and performance analysis all built in.',
    'feat.2.h':        'AI Matching Engine',
    'feat.2.p':        'Analyzes pace, schedule, location, sport mix, and personality signals to surface athletes you\'d genuinely want to train beside. Smart, not random.',
    'feat.3.h':        'Community Discovery',
    'feat.3.p':        'Local groups and virtual clubs organized by sport, skill level, and energy. RSVP to organized sessions or start your own crew from scratch.',
    'feat.4.h':        'Performance Intelligence',
    'feat.4.p':        'AI coach insights on training load, recovery, and progression. Know when to push harder and when to pull back — before your body forces the decision.',
    'feat.5.h':        'Route Discovery',
    'feat.5.p':        'Crowdsourced route recommendations from real athletes nearby. Find the best trails, tracks, and outdoor spots your city is hiding from you.',
    'feat.6.h':        'Challenges & Goals',
    'feat.6.p':        'Join community challenges or set personal goals with accountability partners. Compete, motivate, and celebrate — across any distance or discipline.',

    /* ── Index: Compare ── */
    'cmp.label':       'Platform Comparison',
    'cmp.title':       'Why Lauver<br>Changes Everything.',
    'cmp.sub':         'See how we stack up against the platforms athletes have been making do with — until now.',
    'cmp.t1.title':    'Feature Comparison',
    'cmp.t2.title':    'Pricing & Value',
    'cmp.t3.title':    'Who Is It For?',

    /* ── Index: Match ── */
    'match.label':     'AI-Powered Matching',
    'match.title':     'Not Random.<br>Not Manual.<br>Actually Right.',
    'match.sub':       'Our matching engine considers pace compatibility, schedule alignment, sport overlap, location proximity, and training goals — then surfaces the people and communities most likely to stick.<br><br>No swiping through noise. No cold-emailing strangers. Just the right people showing up when you need them.',
    'match.cta':       'Get Early Access →',
    'match.sarah.name':    'Sarah K.',
    'match.sarah.sub':     'Trail runner · 5:30/mi · NYC',
    'match.marcus.name':   'Marcus T.',
    'match.marcus.sub':    'Cyclist + hiker · Weekend warrior',
    'match.crew.name':     'Central Park Crew',
    'match.crew.sub':      '24 members · Tue + Sat mornings',

    /* ── Index: Contact ── */
    'contact.label':   'Get In Touch',
    'contact.title':   'Join the<br>Movement.',
    'contact.desc':    'We\'re building something athletes have needed for a long time. If you want early access, want to partner, or just want to say hi — we read every message.',
    'contact.loc':     'San Francisco, CA (and wherever you run)',
    'contact.social':  '@lauver.ai on all platforms',
    'contact.name.lbl':    'Name',
    'contact.email.lbl':   'Email',
    'contact.role.lbl':    'I\'m a…',
    'contact.role.ph':     'Select your role',
    'contact.role.o1':     'Athlete looking for early access',
    'contact.role.o2':     'Running / cycling club organizer',
    'contact.role.o3':     'Brand or partnership inquiry',
    'contact.role.o4':     'Press / media',
    'contact.role.o5':     'Investor',
    'contact.role.o6':     'Just curious',
    'contact.msg.lbl':     'Message',
    'contact.msg.ph':      'Tell us about your sport, your goals, or what you\'d love to see in Lauver...',
    'contact.btn':         'Send It →',
    'contact.success':     '✓ Message sent! We\'ll be in touch soon.',
    'contact.name.ph':     'Your name',
    'contact.email.ph':    'your@email.com',

    /* ── Index: Footer ── */
    'footer.about':    'About',
    'footer.features': 'Features',
    'footer.compare':  'Compare',
    'footer.contact':  'Contact',
    'footer.copy':     '© 2025 Lauver.ai — Built for athletes who move together.',

    /* ── Login page ── */
    'login.tab.in':        'Sign In',
    'login.tab.up':        'Create Account',
    'login.brand.h1.1':    'Find Your',
    'login.brand.h1.2':    'Pack.',
    'login.brand.sub':     'Track activities, match with athletes, and build the community that keeps you going.',
    'login.brand.back':    '← Back to home',
    'login.pill.run':      '🏃 Running',
    'login.pill.cycle':    '🚴 Cycling',
    'login.pill.climb':    '🧗 Climbing',
    'login.pill.swim':     '🏊 Swimming',
    'login.pill.hike':     '🥾 Hiking',
    'login.pill.more':     '+45 more',
    'login.google':        'Continue with Google',
    'login.divider':       'or continue with email',
    'login.name.lbl':      'Full Name',
    'login.name.ph':       'Jane Smith',
    'login.email.lbl':     'Email',
    'login.email.ph':      'you@example.com',
    'login.pass.lbl':      'Password',
    'login.pass.ph':       '••••••••',
    'login.btn.in':        'Sign In',
    'login.btn.up':        'Create Account',
    'login.switch.in':     'Don\'t have an account? ',
    'login.switch.in.a':   'Sign up',
    'login.switch.up':     'Already have an account? ',
    'login.switch.up.a':   'Sign in',

    /* ── Dashboard page ── */
    'dash.greeting':       'Welcome back, athlete',
    'dash.loading':        'Loading…',
    'dash.section.build':  'Your Pack is Being Built',
    'dash.feat.ai.t':      'AI Matching',
    'dash.feat.ai.d':      'Smart partner and community matching based on your sports, schedule, and pace.',
    'dash.feat.track.t':   'Activity Tracking',
    'dash.feat.track.d':   'GPS-powered logging for 50+ sports. Runs, rides, climbs, swims — all in one place.',
    'dash.feat.feed.t':    'Community Feed',
    'dash.feat.feed.d':    'A social feed that actually makes sense — organized by sport, not algorithm noise.',
    'dash.feat.route.t':   'Route Discovery',
    'dash.feat.route.d':   'Crowdsourced routes from real athletes near you. Find the trails others aren\'t sharing.',
    'dash.feat.chal.t':    'Challenges',
    'dash.feat.chal.d':    'Join community challenges or create personal goals with accountability partners.',
    'dash.feat.perf.t':    'Performance AI',
    'dash.feat.perf.d':    'Training load, recovery signals, and progression insights from your own data.',
    'dash.waitlist.h':     'You\'re on the early access list',
    'dash.waitlist.p':     'We\'ll notify you as soon as your features are ready. You\'re one of the first.',
    'dash.waitlist.btn':   '🔥 Early Access Secured',

    /* ── App: Sidebar ── */
    'app.sec.main':        'Main',
    'app.sec.sync':        'Sync',
    'app.sec.community':   'Community',
    'app.sec.account':     'Account',
    'app.nav.dashboard':   'Dashboard',
    'app.nav.activities':  'Activities',
    'app.nav.sync':        'Connect Apps',
    'app.nav.community':   'Community',
    'app.nav.match':       'Find Athletes',
    'app.nav.profile':     'My Profile',
    'app.user.status':     '🔥 Early Access',
    'app.back':            '← Back to Home',
    'app.log':             '+ Log Activity',

    /* ── App: Dashboard ── */
    'app.dash.title':      'Dashboard',
    'app.dash.s1.lbl':     'This Week',
    'app.dash.s1.sub':     'activities',
    'app.dash.s1.delta':   '↑ 1 from last week',
    'app.dash.s2.lbl':     'Distance',
    'app.dash.s2.sub':     'km this week',
    'app.dash.s2.delta':   '↑ 8.3 km',
    'app.dash.s3.lbl':     'Active Time',
    'app.dash.s3.sub':     'this week',
    'app.dash.s3.delta':   '↓ 12 min',
    'app.dash.s4.lbl':     'Matches',
    'app.dash.s4.sub':     'complete profile to unlock',
    'app.dash.s4.delta':   'profile incomplete',
    'app.dash.chart':      'Weekly Activity',
    'app.dash.recent':     'Recent Activities',
    'app.dash.quickstats': 'Quick Stats',
    'app.dash.month':      'Month Total',
    'app.dash.community':  'Community',
    'app.dash.comm.text':  '3 new posts from athletes near you.',
    'app.dash.comm.link':  'View feed →',
    'app.dash.profile.lbl':'Profile',
    'app.dash.prof.text':  '40% complete — finish to unlock athlete matching.',
    'app.dash.prof.link':  'Complete profile →',
    'app.dash.a1.name':    'Morning Run — Riverside Trail',
    'app.dash.a1.meta':    'Today, 6:42 am · Running',
    'app.dash.a2.name':    'Evening Ride — City Loop',
    'app.dash.a2.meta':    'Yesterday · Cycling',
    'app.dash.a3.name':    'Bouldering Session — The Cave',
    'app.dash.a3.meta':    '2 days ago · Climbing',
    'app.chart.mon':       'Mon',
    'app.chart.tue':       'Tue',
    'app.chart.wed':       'Wed',
    'app.chart.thu':       'Thu',
    'app.chart.fri':       'Fri',
    'app.chart.sat':       'Sat',
    'app.chart.sun':       'Sun',

    /* ── App: Activities ── */
    'app.act.title':       'Activities',
    'app.act.s1.lbl':      'Total Activities',
    'app.act.s1.sub':      'all time',
    'app.act.s2.lbl':      'Total Distance',
    'app.act.s2.sub':      'km all time',
    'app.act.s3.lbl':      'Longest Activity',
    'app.act.s3.sub':      'km — Half Marathon',
    'app.act.s4.lbl':      'Best Pace',
    'app.act.s4.sub':      'min/km',
    'app.act.chart':       'Distance by Week',
    'app.act.head':        'All Activities',
    'app.act.f.all':       'All',
    'app.act.chart.w1':    'W1',
    'app.act.chart.w2':    'W2',
    'app.act.chart.w3':    'W3',
    'app.act.chart.w4':    'W4',
    'app.act.a1.name':     'Morning Run — Riverside Trail',
    'app.act.a1.meta':     'Today · Running · Avg pace 5:05/km · 312 kcal',
    'app.act.a2.name':     'Evening Ride — City Loop',
    'app.act.a2.meta':     'Yesterday · Cycling · Avg 23.7 km/h · 480 kcal',
    'app.act.a3.name':     'Bouldering Session — The Cave',
    'app.act.a3.meta':     '2 days ago · Climbing · V3–V5',
    'app.act.a4.name':     'Lap Swim — Municipal Pool',
    'app.act.a4.meta':     '3 days ago · Swimming · 50m pool',
    'app.act.a5.name':     'Trail Hike — North Ridge',
    'app.act.a5.meta':     '5 days ago · Hiking · 640m elevation',
    'app.act.dist.lbl':    'distance',
    'app.act.time.lbl':    'time',
    'app.act.bpm.lbl':     'bpm avg',
    'app.act.routes.lbl':  'routes',

    /* ── App: Sync ── */
    'app.sync.title':      'Connect Apps',
    'app.sync.head':       'Connected Apps',
    'app.sync.sub':        'Sync your fitness data automatically. Connect your devices and apps to pull in activities without manual logging.',
    'app.sync.apple.name': 'Apple Health',
    'app.sync.apple.desc': 'Sync workouts, heart rate, and activity data directly from your iPhone or Apple Watch.',
    'app.sync.apple.conn': 'Connected · Last sync 4 min ago',
    'app.sync.garmin.name':'Garmin Connect',
    'app.sync.garmin.desc':'Import runs, rides, swims, and training plans from Garmin devices and the Garmin Connect platform.',
    'app.sync.strava.name':'Strava',
    'app.sync.strava.desc':'Pull your existing Strava activities and kudos history into Lauver automatically.',
    'app.sync.fitbit.name':'Fitbit',
    'app.sync.fitbit.desc':'Sync steps, sleep, heart rate, and workout data from your Fitbit tracker.',
    'app.sync.wahoo.name': 'Wahoo',
    'app.sync.wahoo.desc': 'Connect ELEMNT bike computers and KICKR smart trainers for power data and structured workouts.',
    'app.sync.polar.name': 'Polar Flow',
    'app.sync.polar.desc': 'Import training data, sleep tracking, and recovery scores from Polar devices.',
    'app.sync.disconn':    'Not connected',
    'app.sync.btn.conn':   'Connect',
    'app.sync.btn.disc':   'Disconnect',
    'app.sync.hist':       'Sync History',
    'app.sync.h1.name':    'Apple Health — Activities imported',
    'app.sync.h1.meta':    'Today, 9:15 am · 3 new workouts synced',
    'app.sync.h2.name':    'Apple Health — Health data update',
    'app.sync.h2.meta':    'Yesterday, 11:30 pm · Heart rate + steps',

    /* ── App: Community ── */
    'app.comm.title':      'Community',
    'app.comm.compose.ph': 'What\'s your latest achievement?',
    'app.comm.act.photo':  '📷 Photo',
    'app.comm.act.route':  '📍 Route',
    'app.comm.act.act':    '🏃 Activity',
    'app.comm.act.goal':   '🎯 Goal',
    'app.comm.p1.name':    'Marco Oliveira',
    'app.comm.p1.time':    '2 hours ago · 🏃 Running',
    'app.comm.p1.body':    'Just hit a new 10K PR — 43:21! The Riverside Trail is absolutely perfect this time of year. Anyone else running this weekend? Would love to find a pacer for Sunday\'s long run 🔥',
    'app.comm.p1.act.name':'Morning Run — Riverside Trail',
    'app.comm.p1.act.stat':'10.0 km · 43:21 · Avg pace 4:20/km',
    'app.comm.p2.name':    'Sofia Chen',
    'app.comm.p2.time':    '5 hours ago · 🧗 Climbing',
    'app.comm.p2.body':    'Finally sent that V6 I\'ve been projecting for 3 weeks!! Technique over strength every time. Huge thanks to the Cave crew for the beta 🤜',
    'app.comm.p3.name':    'Alex Ramos',
    'app.comm.p3.time':    'Yesterday · 🚴 Cycling',
    'app.comm.p3.body':    'Organizing a group ride this Saturday — North Shore loop, ~60km with 800m elevation. Intermediate pace, all welcome. Drop a comment if you\'re in 🚴',
    'app.comm.p3.act.name':'North Shore Loop — Route Preview',
    'app.comm.p3.act.stat':'60 km · 800m elevation · Intermediate',
    'app.comm.react':      '🔥 React',
    'app.comm.comment':    '💬 Comment',
    'app.comm.share':      '↗ Share',
    'app.comm.comment5':   '💬 Comment (5)',
    'app.comm.comment14':  '💬 Comment (14)',
    'app.comm.comment7':   '💬 Comment (7)',
    'app.comm.w.groups':   'Suggested Groups',
    'app.comm.g1.name':    'City Runners Club',
    'app.comm.g1.mem':     '2,841 members',
    'app.comm.g2.name':    'Climbing Community',
    'app.comm.g2.mem':     '1,203 members',
    'app.comm.g3.name':    'Weekend Cyclists',
    'app.comm.g3.mem':     '988 members',
    'app.comm.g4.name':    'Trail Hikers Network',
    'app.comm.g4.mem':     '3,112 members',
    'app.comm.join':       'Join',
    'app.comm.w.nearby':   'Nearby Athletes',
    'app.comm.n1.name':    'Lena Park',
    'app.comm.n1.sub':     'Runner · 0.8 km away',
    'app.comm.n2.name':    'Tom Nguyen',
    'app.comm.n2.sub':     'Cyclist · 1.2 km away',
    'app.comm.n3.name':    'Rina Sato',
    'app.comm.n3.sub':     'Climber · 2.1 km away',
    'app.comm.find.more':  'Find more athletes →',
    'app.comm.w.events':   'Upcoming Events',
    'app.comm.e1.name':    'City 10K Race',
    'app.comm.e1.sub':     'Sat Apr 5 · 500 going',
    'app.comm.e2.name':    'Sunday Group Ride',
    'app.comm.e2.sub':     'Sun Apr 6 · 18 going',
    'app.comm.e3.name':    'Bouldering Comp',
    'app.comm.e3.sub':     'Sat Apr 12 · 72 going',

    /* ── App: Match ── */
    'app.match.title':     'Find Athletes',
    'app.match.gate.icon': '🔒',
    'app.match.gate.h':    'Unlock Athlete Matching',
    'app.match.gate.sub':  'Complete your profile to start finding training partners who match your sports, pace, and schedule.',
    'app.match.c1.done':   'Account created',
    'app.match.c2.done':   'Email verified',
    'app.match.c3.todo':   'Profile photo uploaded',
    'app.match.c4.todo':   'Sports & skill level set',
    'app.match.c5.todo':   'Location & availability filled in',
    'app.match.complete':  'Complete My Profile',
    'app.match.preview':   'or',
    'app.match.preview.a': 'preview matching (demo)',
    'app.match.head':      'Find Your Training Partner',
    'app.match.sub':       '8 athletes near you match your sports',
    'app.match.filters':   'Match Filters',
    'app.match.f.sports':  'Sports',
    'app.match.f.dist':    'Max Distance',
    'app.match.f.skill':   'Skill Level',
    'app.match.f.avail':   'Availability',
    'app.match.range1':    '1 km',
    'app.match.range2':    '10 km',
    'app.match.range3':    '50 km',
    'app.match.f.beg':     'Beginner',
    'app.match.f.int':     'Intermediate',
    'app.match.f.adv':     'Advanced',
    'app.match.f.wknd':    'Weekends',
    'app.match.f.wkdy':    'Weekdays',
    'app.match.f.morn':    'Mornings',
    'app.match.f.eve':     'Evenings',
    'app.match.yours':     'Your Matches',
    'app.match.yours.sub': 'Complete your profile to see mutual matches.',
    'app.card.marco.name': 'Marco Oliveira',
    'app.card.marco.loc':  '📍 0.6 km away · 29',
    'app.card.priya.name': 'Priya Mehta',
    'app.card.priya.loc':  '📍 1.8 km away · 31',
    'app.card.chris.name': 'Chris Park',
    'app.card.chris.loc':  '📍 2.4 km away · 28',

    /* ── App: Profile ── */
    'app.prof.title':      'My Profile',
    'app.prof.upload':     'Upload photo',
    'app.prof.prog.lbl':   'Profile Complete',
    'app.prof.c.account':  'Account created',
    'app.prof.c.email':    'Email verified',
    'app.prof.c.photo':    'Profile photo',
    'app.prof.c.sports':   'Sports selected',
    'app.prof.c.loc':      'Location set',
    'app.prof.c.bio':      'Bio written',
    'app.prof.c.avail':    'Availability set',
    'app.prof.lock.msg':   '🔒 Complete 100% to unlock athlete matching',
    'app.prof.s1.title':   'Basic Info',
    'app.prof.fname':      'First Name',
    'app.prof.lname':      'Last Name',
    'app.prof.age':        'Age',
    'app.prof.gender':     'Gender',
    'app.prof.gender.ph':  'Select…',
    'app.prof.gender.f':   'Female',
    'app.prof.gender.m':   'Male',
    'app.prof.gender.nb':  'Non-binary',
    'app.prof.gender.ns':  'Prefer not to say',
    'app.prof.bio':        'Bio',
    'app.prof.bio.ph':     'Tell athletes about yourself — your experience, goals, what you\'re looking for in a training partner…',
    'app.prof.s2.title':   'Location & Availability',
    'app.prof.city':       'City',
    'app.prof.city.ph':    'San Francisco',
    'app.prof.radius':     'Search Radius',
    'app.prof.avail':      'Availability',
    'app.prof.av1':        'Early Mornings',
    'app.prof.av2':        'Mornings',
    'app.prof.av3':        'Evenings',
    'app.prof.av4':        'Weekends',
    'app.prof.av5':        'Flexible',
    'app.prof.s3.title':   'Sports & Skill Level',
    'app.prof.sports.lbl': 'Your Sports',
    'app.prof.skill':      'Overall Skill Level',
    'app.prof.looking':    'Looking For',
    'app.prof.look.o1':    'Training Partner',
    'app.prof.look.o2':    'Group & Partners',
    'app.prof.look.o3':    'Running Buddy',
    'app.prof.look.o4':    'Coach / Mentor',
    'app.prof.skill.beg':  'Beginner',
    'app.prof.skill.int':  'Intermediate',
    'app.prof.skill.adv':  'Advanced',
    'app.prof.skill.elite':'Elite / Competitive',
    'app.prof.s4.title':   'Identity Verification',
    'app.prof.verify.h':   'Verify your identity',
    'app.prof.verify.p':   'Required to enable athlete matching. Upload a government ID or use selfie verification.',
    'app.prof.verify.btn': 'Verify Now',
    'app.prof.publish':    'Publish Profile & Unlock Matching →',
    'app.prof.saving':     'Saving…',
    'app.prof.saved':      '✅ Profile Published!',
  },

  zh: {
    /* ── Shared / Nav ── */
    'nav.about':       '关于',
    'nav.features':    '功能',
    'nav.compare':     '对比',
    'nav.signin':      '登录',
    'nav.home':        '← 首页',
    'nav.signout':     '退出登录',
    'lang.btn':        'English',

    /* ── Index: Hero ── */
    'hero.pill':       'AI 驱动的运动社区 · 公测中',
    'hero.h1':         '找到<br>你的<br><span class="accent">战队。</span>',
    'hero.sub':        '记录每一步奔跑、攀登与冲刺。让 AI 做健身应用从未做到的事——找到真正融入你生活的运动伙伴、训练搭档和圈子。',
    'hero.cta1':       '立即申请早期访问 →',
    'hero.cta2':       '体验应用 →',
    'hero.tag.run':    '🏃 跑步',
    'hero.tag.cycle':  '🚴 骑行',
    'hero.tag.swim':   '🏊 游泳',
    'hero.tag.climb':  '🧗 攀岩',
    'hero.tag.hike':   '🥾 登山',
    'hero.tag.ski':    '⛷️ 滑雪',
    'hero.tag.gym':    '🏋️ 健身',
    'hero.tag.yoga':   '🧘 瑜伽',
    'hero.tag.more':   '+42 项运动 →',
    'hero.b1.val':     '多运动支持',
    'hero.b1.lbl':     '跑步、骑行、攀岩、游泳等多种运动',
    'hero.b2.val':     '社区优先',
    'hero.b2.lbl':     '找到训练伙伴和本地运动团体',
    'hero.b3.val':     '隐私可控',
    'hero.b3.lbl':     '你决定分享什么，与谁分享',
    'hero.s1.num':     '真实训练数据',
    'hero.s1.lbl':     '记录你参与的每一项运动',
    'hero.s2.num':     '智能匹配',
    'hero.s2.lbl':     '基于目标、时间和风格建立连接',
    'hero.s3.num':     '公测资格',
    'hero.s3.lbl':     '早期成员用反馈共同打磨产品',
    'hero.s4.num':     '共同构建',
    'hero.s4.lbl':     '为那些在团队中训练更好的人而设计',

    /* ── Index: About ── */
    'about.label':     '关于 Lauver.ai',
    'about.title':     '运动，<br>因你而精彩。',
    'about.p1':        'Lauver.ai 诞生于每位认真运动员都深知的真理：最好的训练，发生在有人陪伴的时候。但找到那个人——或那个圈子——一直比它应该的更难。',
    'about.p2':        '我们将你已经依赖的运动追踪深度与全新的东西结合：真正理解你作为运动员身份的 AI，然后围绕这一点建立连接。',
    'about.p3':        '无论你是寻找周末队友的越野跑者、追逐集体骑行的城市单车人、需要督促的新手，还是想与志同道合者一起探索户外的热爱者——Lauver 帮你找到你的人。',
    'about.01.h':      '记录一切',
    'about.01.p':      '精准 GPS 记录跑步、骑行、攀岩、游泳及 50+ 种运动。自动识别、路线绘制与表现分析，一应俱全。',
    'about.02.h':      '匹配同行者',
    'about.02.p':      'AI 驱动的伙伴匹配，基于运动项目、位置、时间、配速和风格。不是随机推荐——而是真正合拍的人。',
    'about.03.h':      '找到归属',
    'about.03.p':      '发现本地俱乐部、线上团体和赛事社区。参加有组织的集体训练。建立超越单次运动的深厚情谊。',

    /* ── Index: Features ── */
    'feat.label':      '如何运作',
    'feat.title':      '三步，<br>开启你的运动人生。',
    'feat.1.h':        '记录运动',
    'feat.1.p':        '精准 GPS 追踪跑步、骑行、登山、游泳及 50+ 种运动。自动识别、路线绘制与表现分析，全部内置。',
    'feat.2.h':        'AI 匹配引擎',
    'feat.2.p':        '分析配速、时间安排、位置、运动组合和个性信号，为你呈现真正想与之并肩训练的运动员。智能，而非随机。',
    'feat.3.h':        '社区发现',
    'feat.3.p':        '按运动项目、水平和活力组织的本地团体和线上俱乐部。报名参加有组织的训练，或从零开始组建你的团队。',
    'feat.4.h':        '表现智能',
    'feat.4.p':        'AI 教练对训练负荷、恢复和进阶的洞察。在你的身体被迫做出决定之前，知道何时该更努力、何时该适当休息。',
    'feat.5.h':        '路线探索',
    'feat.5.p':        '来自附近真实运动员的路线推荐。找到你的城市正在隐藏的最佳步道、赛道和户外场所。',
    'feat.6.h':        '挑战与目标',
    'feat.6.p':        '加入社区挑战或与责任伙伴设定个人目标。跨越任何距离或项目，共同竞争、激励和庆祝。',

    /* ── Index: Compare ── */
    'cmp.label':       '平台对比',
    'cmp.title':       '为什么 Lauver<br>改变一切。',
    'cmp.sub':         '了解我们与运动员们一直凑合使用的平台相比如何——直到现在。',
    'cmp.t1.title':    '功能对比',
    'cmp.t2.title':    '价格与价值',
    'cmp.t3.title':    '适合谁？',

    /* ── Index: Match ── */
    'match.label':     'AI 智能匹配',
    'match.title':     '不随机。<br>不费力。<br>就是对的人。',
    'match.sub':       '我们的匹配引擎综合考量配速兼容性、时间安排、运动重叠、位置距离和训练目标——然后呈现最可能持续的人脉和社区。<br><br>无需刷屏。无需向陌生人发冷邮件。就是在你需要的时候，对的人自然出现。',
    'match.cta':       '立即申请早期访问 →',
    'match.sarah.name':    '小雨 K.',
    'match.sarah.sub':     '越野跑者 · 5:30/km · 上海',
    'match.marcus.name':   '浩然 T.',
    'match.marcus.sub':    '骑行 + 登山 · 周末战士',
    'match.crew.name':     '滨江跑团',
    'match.crew.sub':      '24 位成员 · 周二 + 周六早晨',

    /* ── Index: Contact ── */
    'contact.label':   '联系我们',
    'contact.title':   '加入<br>运动浪潮。',
    'contact.desc':    '我们正在构建运动员长期需要的东西。如果你想获得早期访问、希望合作，或只是想打个招呼——我们阅读每一条留言。',
    'contact.loc':     '旧金山（以及你奔跑的每一个地方）',
    'contact.social':  '各平台 @lauver.ai',
    'contact.name.lbl':    '姓名',
    'contact.email.lbl':   '邮箱',
    'contact.role.lbl':    '我是…',
    'contact.role.ph':     '请选择',
    'contact.role.o1':     '寻求早期访问的运动员',
    'contact.role.o2':     '跑步 / 骑行俱乐部组织者',
    'contact.role.o3':     '品牌合作咨询',
    'contact.role.o4':     '媒体 / 新闻',
    'contact.role.o5':     '投资者',
    'contact.role.o6':     '只是好奇',
    'contact.msg.lbl':     '留言',
    'contact.msg.ph':      '告诉我们你的运动项目、目标，或你希望在 Lauver 看到什么…',
    'contact.btn':         '发送 →',
    'contact.success':     '✓ 已发送！我们会尽快回复。',
    'contact.name.ph':     '你的姓名',
    'contact.email.ph':    'your@email.com',

    /* ── Index: Footer ── */
    'footer.about':    '关于',
    'footer.features': '功能',
    'footer.compare':  '对比',
    'footer.contact':  '联系',
    'footer.copy':     '© 2025 Lauver.ai — 为共同前行的运动员而生。',

    /* ── Login page ── */
    'login.tab.in':        '登录',
    'login.tab.up':        '创建账户',
    'login.brand.h1.1':    '找到你的',
    'login.brand.h1.2':    '战队。',
    'login.brand.sub':     '追踪运动、匹配运动员，建立让你持续前行的社区。',
    'login.brand.back':    '← 返回首页',
    'login.pill.run':      '🏃 跑步',
    'login.pill.cycle':    '🚴 骑行',
    'login.pill.climb':    '🧗 攀岩',
    'login.pill.swim':     '🏊 游泳',
    'login.pill.hike':     '🥾 登山',
    'login.pill.more':     '+45 种运动',
    'login.google':        '使用 Google 继续',
    'login.divider':       '或使用邮箱继续',
    'login.name.lbl':      '姓名',
    'login.name.ph':       '张三',
    'login.email.lbl':     '邮箱',
    'login.email.ph':      'you@example.com',
    'login.pass.lbl':      '密码',
    'login.pass.ph':       '••••••••',
    'login.btn.in':        '登录',
    'login.btn.up':        '创建账户',
    'login.switch.in':     '还没有账户？',
    'login.switch.in.a':   '立即注册',
    'login.switch.up':     '已有账户？',
    'login.switch.up.a':   '去登录',

    /* ── Dashboard page ── */
    'dash.greeting':       '欢迎回来，运动员',
    'dash.loading':        '加载中…',
    'dash.section.build':  '正在为你构建战队',
    'dash.feat.ai.t':      'AI 智能匹配',
    'dash.feat.ai.d':      '基于运动项目、时间安排和配速的智能伙伴与社区匹配。',
    'dash.feat.track.t':   '运动追踪',
    'dash.feat.track.d':   'GPS 驱动的 50+ 种运动记录。跑步、骑行、攀岩、游泳——全部一处搞定。',
    'dash.feat.feed.t':    '运动社区',
    'dash.feat.feed.d':    '真正有意义的社交动态——按运动项目整理，而非算法噪音。',
    'dash.feat.route.t':   '路线探索',
    'dash.feat.route.d':   '来自附近真实运动员的众包路线。找到别人不轻易分享的步道。',
    'dash.feat.chal.t':    '挑战赛',
    'dash.feat.chal.d':    '加入社区挑战或与责任伙伴创建个人目标。',
    'dash.feat.perf.t':    '表现分析 AI',
    'dash.feat.perf.d':    '来自你自身数据的训练负荷、恢复信号和进阶洞察。',
    'dash.waitlist.h':     '你已加入早期访问名单',
    'dash.waitlist.p':     '功能就绪时我们会第一时间通知你。你是最早的那批人之一。',
    'dash.waitlist.btn':   '🔥 早期访问已锁定',

    /* ── App: Sidebar ── */
    'app.sec.main':        '主页',
    'app.sec.sync':        '数据同步',
    'app.sec.community':   '社区',
    'app.sec.account':     '账户',
    'app.nav.dashboard':   '首页',
    'app.nav.activities':  '运动记录',
    'app.nav.sync':        '同步设备',
    'app.nav.community':   '运动社区',
    'app.nav.match':       '寻找伙伴',
    'app.nav.profile':     '我的档案',
    'app.user.status':     '🔥 早期访问',
    'app.back':            '← 返回首页',
    'app.log':             '+ 记录运动',

    /* ── App: Dashboard ── */
    'app.dash.title':      '首页',
    'app.dash.s1.lbl':     '本周',
    'app.dash.s1.sub':     '次运动',
    'app.dash.s1.delta':   '↑ 比上周多 1 次',
    'app.dash.s2.lbl':     '总距离',
    'app.dash.s2.sub':     '公里（本周）',
    'app.dash.s2.delta':   '↑ 8.3 公里',
    'app.dash.s3.lbl':     '运动时长',
    'app.dash.s3.sub':     '本周',
    'app.dash.s3.delta':   '↓ 12 分钟',
    'app.dash.s4.lbl':     '匹配数',
    'app.dash.s4.sub':     '完善档案以解锁',
    'app.dash.s4.delta':   '档案未完善',
    'app.dash.chart':      '本周运动',
    'app.dash.recent':     '近期运动',
    'app.dash.quickstats': '快速统计',
    'app.dash.month':      '本月合计',
    'app.dash.community':  '社区动态',
    'app.dash.comm.text':  '附近运动员发布了 3 条新动态。',
    'app.dash.comm.link':  '查看动态 →',
    'app.dash.profile.lbl':'我的档案',
    'app.dash.prof.text':  '已完成 40%——完善档案以解锁运动员匹配。',
    'app.dash.prof.link':  '完善档案 →',
    'app.dash.a1.name':    '清晨跑步 — 滨江步道',
    'app.dash.a1.meta':    '今天 上午 6:42 · 跑步',
    'app.dash.a2.name':    '傍晚骑行 — 城市环线',
    'app.dash.a2.meta':    '昨天 · 骑行',
    'app.dash.a3.name':    '抱石训练 — 岩馆',
    'app.dash.a3.meta':    '2 天前 · 攀岩',
    'app.chart.mon':       '周一',
    'app.chart.tue':       '周二',
    'app.chart.wed':       '周三',
    'app.chart.thu':       '周四',
    'app.chart.fri':       '周五',
    'app.chart.sat':       '周六',
    'app.chart.sun':       '周日',

    /* ── App: Activities ── */
    'app.act.title':       '运动记录',
    'app.act.s1.lbl':      '累计运动',
    'app.act.s1.sub':      '次（全部）',
    'app.act.s2.lbl':      '累计距离',
    'app.act.s2.sub':      '公里（全部）',
    'app.act.s3.lbl':      '最长一次',
    'app.act.s3.sub':      '公里 — 半程马拉松',
    'app.act.s4.lbl':      '最佳配速',
    'app.act.s4.sub':      '分钟/公里',
    'app.act.chart':       '每周距离',
    'app.act.head':        '全部运动记录',
    'app.act.f.all':       '全部',
    'app.act.chart.w1':    '第1周',
    'app.act.chart.w2':    '第2周',
    'app.act.chart.w3':    '第3周',
    'app.act.chart.w4':    '第4周',
    'app.act.a1.name':     '清晨跑步 — 滨江步道',
    'app.act.a1.meta':     '今天 · 跑步 · 均速 5:05/公里 · 312 千卡',
    'app.act.a2.name':     '傍晚骑行 — 城市环线',
    'app.act.a2.meta':     '昨天 · 骑行 · 均速 23.7 公里/小时 · 480 千卡',
    'app.act.a3.name':     '抱石训练 — 岩馆',
    'app.act.a3.meta':     '2天前 · 攀岩 · V3–V5',
    'app.act.a4.name':     '池泳训练 — 市游泳馆',
    'app.act.a4.meta':     '3天前 · 游泳 · 50米泳池',
    'app.act.a5.name':     '山地徒步 — 北岭',
    'app.act.a5.meta':     '5天前 · 徒步 · 爬升 640 米',
    'app.act.dist.lbl':    '距离',
    'app.act.time.lbl':    '时长',
    'app.act.bpm.lbl':     '均心率',
    'app.act.routes.lbl':  '条路线',

    /* ── App: Sync ── */
    'app.sync.title':      '同步设备',
    'app.sync.head':       '已连接应用',
    'app.sync.sub':        '自动同步运动数据。连接你的设备和应用，无需手动记录，自动导入运动。',
    'app.sync.apple.name': 'Apple Health',
    'app.sync.apple.desc': '直接从 iPhone 或 Apple Watch 同步锻炼、心率和运动数据。',
    'app.sync.apple.conn': '已连接 · 4 分钟前同步',
    'app.sync.garmin.name':'Garmin Connect',
    'app.sync.garmin.desc':'从 Garmin 设备和 Garmin Connect 平台导入跑步、骑行、游泳和训练计划。',
    'app.sync.strava.name':'Strava',
    'app.sync.strava.desc':'自动将你现有的 Strava 运动记录和点赞历史导入 Lauver。',
    'app.sync.fitbit.name':'Fitbit',
    'app.sync.fitbit.desc':'从 Fitbit 追踪器同步步数、睡眠、心率和锻炼数据。',
    'app.sync.wahoo.name': 'Wahoo',
    'app.sync.wahoo.desc': '连接 ELEMNT 码表和 KICKR 智能骑台，获取功率数据和结构化训练。',
    'app.sync.polar.name': 'Polar Flow',
    'app.sync.polar.desc': '从 Polar 设备导入训练数据、睡眠追踪和恢复评分。',
    'app.sync.disconn':    '未连接',
    'app.sync.btn.conn':   '连接',
    'app.sync.btn.disc':   '断开连接',
    'app.sync.hist':       '同步历史',
    'app.sync.h1.name':    'Apple Health — 运动已导入',
    'app.sync.h1.meta':    '今天 上午 9:15 · 3 次新锻炼已同步',
    'app.sync.h2.name':    'Apple Health — 健康数据更新',
    'app.sync.h2.meta':    '昨天 晚上 11:30 · 心率 + 步数',

    /* ── App: Community ── */
    'app.comm.title':      '运动社区',
    'app.comm.compose.ph': '分享你最新的运动成就？',
    'app.comm.act.photo':  '📷 图片',
    'app.comm.act.route':  '📍 路线',
    'app.comm.act.act':    '🏃 运动',
    'app.comm.act.goal':   '🎯 目标',
    'app.comm.p1.name':    '陈浩',
    'app.comm.p1.time':    '2 小时前 · 🏃 跑步',
    'app.comm.p1.body':    '创造了 10 公里新纪录——43:21！滨江步道这个季节真的太棒了。这周末有人一起跑吗？想找个配速员陪跑周日的长距离 🔥',
    'app.comm.p1.act.name':'清晨跑步 — 滨江步道',
    'app.comm.p1.act.stat':'10.0 公里 · 43:21 · 均速 4:20/公里',
    'app.comm.p2.name':    '张思菲',
    'app.comm.p2.time':    '5 小时前 · 🧗 攀岩',
    'app.comm.p2.body':    '终于完成了练了 3 周的 V6！技术永远胜过力量。感谢岩馆的小伙伴们的 beta 指点 🤜',
    'app.comm.p3.name':    '王明',
    'app.comm.p3.time':    '昨天 · 🚴 骑行',
    'app.comm.p3.body':    '组织本周六团骑——北岸环线，约 60 公里，爬升 800 米。中等强度，欢迎所有人。感兴趣的留言报名 🚴',
    'app.comm.p3.act.name':'北岸环线 — 路线预览',
    'app.comm.p3.act.stat':'60 公里 · 800 米爬升 · 中等强度',
    'app.comm.react':      '🔥 点赞',
    'app.comm.comment':    '💬 评论',
    'app.comm.share':      '↗ 分享',
    'app.comm.comment5':   '💬 评论 (5)',
    'app.comm.comment14':  '💬 评论 (14)',
    'app.comm.comment7':   '💬 评论 (7)',
    'app.comm.w.groups':   '推荐团队',
    'app.comm.g1.name':    '城市跑团',
    'app.comm.g1.mem':     '2,841 位成员',
    'app.comm.g2.name':    '攀岩社区',
    'app.comm.g2.mem':     '1,203 位成员',
    'app.comm.g3.name':    '周末骑行团',
    'app.comm.g3.mem':     '988 位成员',
    'app.comm.g4.name':    '户外徒步圈',
    'app.comm.g4.mem':     '3,112 位成员',
    'app.comm.join':       '加入',
    'app.comm.w.nearby':   '附近运动员',
    'app.comm.n1.name':    '林小雨',
    'app.comm.n1.sub':     '跑步 · 距你 0.8 公里',
    'app.comm.n2.name':    '阮明涛',
    'app.comm.n2.sub':     '骑行 · 距你 1.2 公里',
    'app.comm.n3.name':    '佐藤玲',
    'app.comm.n3.sub':     '攀岩 · 距你 2.1 公里',
    'app.comm.find.more':  '发现更多运动员 →',
    'app.comm.w.events':   '即将举行的活动',
    'app.comm.e1.name':    '城市 10 公里赛',
    'app.comm.e1.sub':     '4月5日 周六 · 500 人参与',
    'app.comm.e2.name':    '周日集体骑行',
    'app.comm.e2.sub':     '4月6日 周日 · 18 人参与',
    'app.comm.e3.name':    '抱石赛',
    'app.comm.e3.sub':     '4月12日 周六 · 72 人参与',

    /* ── App: Match ── */
    'app.match.title':     '寻找伙伴',
    'app.match.gate.icon': '🔒',
    'app.match.gate.h':    '解锁运动员匹配',
    'app.match.gate.sub':  '完善你的档案，开始寻找与你运动项目、配速和时间安排匹配的训练伙伴。',
    'app.match.c1.done':   '账户已创建',
    'app.match.c2.done':   '邮箱已验证',
    'app.match.c3.todo':   '上传头像',
    'app.match.c4.todo':   '设置运动项目和水平',
    'app.match.c5.todo':   '填写位置和可用时间',
    'app.match.complete':  '完善我的档案',
    'app.match.preview':   '或',
    'app.match.preview.a': '预览匹配（演示模式）',
    'app.match.head':      '寻找你的训练伙伴',
    'app.match.sub':       '附近 8 位运动员与你的项目匹配',
    'app.match.filters':   '匹配筛选',
    'app.match.f.sports':  '运动项目',
    'app.match.f.dist':    '最大距离',
    'app.match.f.skill':   '运动水平',
    'app.match.f.avail':   '可用时间',
    'app.match.range1':    '1 公里',
    'app.match.range2':    '10 公里',
    'app.match.range3':    '50 公里',
    'app.match.f.beg':     '新手',
    'app.match.f.int':     '中级',
    'app.match.f.adv':     '高级',
    'app.match.f.wknd':    '周末',
    'app.match.f.wkdy':    '工作日',
    'app.match.f.morn':    '早晨',
    'app.match.f.eve':     '傍晚',
    'app.match.yours':     '我的匹配',
    'app.match.yours.sub': '完善档案后查看互相匹配的结果。',
    'app.card.marco.name': '陈浩',
    'app.card.marco.loc':  '📍 距你 0.6 公里 · 29 岁',
    'app.card.priya.name': '李雅馨',
    'app.card.priya.loc':  '📍 距你 1.8 公里 · 31 岁',
    'app.card.chris.name': '朴宇成',
    'app.card.chris.loc':  '📍 距你 2.4 公里 · 28 岁',

    /* ── App: Profile ── */
    'app.prof.title':      '我的档案',
    'app.prof.upload':     '上传头像',
    'app.prof.prog.lbl':   '档案完整度',
    'app.prof.c.account':  '账户已创建',
    'app.prof.c.email':    '邮箱已验证',
    'app.prof.c.photo':    '上传头像',
    'app.prof.c.sports':   '选择运动项目',
    'app.prof.c.loc':      '设置位置',
    'app.prof.c.bio':      '填写简介',
    'app.prof.c.avail':    '设置可用时间',
    'app.prof.lock.msg':   '🔒 完成 100% 以解锁运动员匹配',
    'app.prof.s1.title':   '基本信息',
    'app.prof.fname':      '名字',
    'app.prof.lname':      '姓氏',
    'app.prof.age':        '年龄',
    'app.prof.gender':     '性别',
    'app.prof.gender.ph':  '请选择…',
    'app.prof.gender.f':   '女性',
    'app.prof.gender.m':   '男性',
    'app.prof.gender.nb':  '非二元性别',
    'app.prof.gender.ns':  '不愿透露',
    'app.prof.bio':        '个人简介',
    'app.prof.bio.ph':     '向其他运动员介绍自己——你的经历、目标以及你在寻找什么样的训练伙伴…',
    'app.prof.s2.title':   '位置与时间',
    'app.prof.city':       '城市',
    'app.prof.city.ph':    '上海',
    'app.prof.radius':     '搜索半径',
    'app.prof.avail':      '可用时间',
    'app.prof.av1':        '清晨',
    'app.prof.av2':        '上午',
    'app.prof.av3':        '傍晚',
    'app.prof.av4':        '周末',
    'app.prof.av5':        '时间灵活',
    'app.prof.s3.title':   '运动项目与水平',
    'app.prof.sports.lbl': '你的运动',
    'app.prof.skill':      '综合运动水平',
    'app.prof.looking':    '寻找类型',
    'app.prof.look.o1':    '训练伙伴',
    'app.prof.look.o2':    '团队与伙伴',
    'app.prof.look.o3':    '跑步搭档',
    'app.prof.look.o4':    '教练 / 导师',
    'app.prof.skill.beg':  '新手',
    'app.prof.skill.int':  '中级',
    'app.prof.skill.adv':  '高级',
    'app.prof.skill.elite':'精英 / 竞技',
    'app.prof.s4.title':   '身份验证',
    'app.prof.verify.h':   '验证你的身份',
    'app.prof.verify.p':   '开启运动员匹配前必须完成。上传政府颁发的证件或使用自拍验证。',
    'app.prof.verify.btn': '立即验证',
    'app.prof.publish':    '发布档案并解锁匹配 →',
    'app.prof.saving':     '保存中…',
    'app.prof.saved':      '✅ 档案已发布！',
  },
};

// ── Comparison table content ─────────────────────────────
// Replaces entire table body content per language (too complex for per-cell data-i18n)
const TABLE_BODIES = {
  en: {
    'table-features': `
      <tr><td>GPS Activity Tracking</td><td class="hi"><span class="yes">✓</span> 50+ sports</td><td><span class="yes">✓</span> ~20 types</td><td><span class="part">~</span> Run-focused</td><td><span class="no">✗</span></td></tr>
      <tr><td>AI Partner Matching</td><td class="hi"><span class="yes">✓</span> Smart AI</td><td><span class="no">✗</span></td><td><span class="no">✗</span></td><td><span class="no">✗</span></td></tr>
      <tr><td>Community Discovery</td><td class="hi"><span class="yes">✓</span> AI-curated</td><td><span class="part">~</span> Basic clubs</td><td><span class="no">✗</span></td><td><span class="yes">✓</span> Manual only</td></tr>
      <tr><td>Exercise Partner Finding</td><td class="hi"><span class="yes">✓</span> Core feature</td><td><span class="no">✗</span></td><td><span class="no">✗</span></td><td><span class="part">~</span> Basic</td></tr>
      <tr><td>Multi-Sport Social Feed</td><td class="hi"><span class="yes">✓</span> All disciplines</td><td><span class="part">~</span> Silo'd by sport</td><td><span class="no">✗</span></td><td><span class="part">~</span> Event-only</td></tr>
      <tr><td>AI Performance Coach</td><td class="hi"><span class="yes">✓</span> Built-in, free</td><td><span class="part">~</span> Paid tier only</td><td><span class="part">~</span> Very limited</td><td><span class="no">✗</span></td></tr>
      <tr><td>Route Discovery</td><td class="hi"><span class="yes">✓</span> Smart + social</td><td><span class="yes">✓</span> Good</td><td><span class="part">~</span> Basic</td><td><span class="no">✗</span></td></tr>
      <tr><td>Indoor + Outdoor</td><td class="hi"><span class="yes">✓</span> Both fully</td><td><span class="yes">✓</span> Both</td><td><span class="part">~</span> Mostly outdoor</td><td><span class="no">✗</span></td></tr>
      <tr><td>Real-Time Group Coordination</td><td class="hi"><span class="yes">✓</span> Built-in</td><td><span class="no">✗</span></td><td><span class="no">✗</span></td><td><span class="part">~</span> Via 3rd party</td></tr>
      <tr><td>Cross-Sport Communities</td><td class="hi"><span class="yes">✓</span> All sports</td><td><span class="no">✗</span></td><td><span class="no">✗</span></td><td><span class="yes">✓</span> If group exists</td></tr>`,
    'table-pricing': `
      <tr><td>Free Tier Includes</td><td class="hi">Tracking + matching + communities</td><td>Basic tracking only</td><td>Running only</td><td>Join groups (limited)</td></tr>
      <tr><td>Premium Price / month</td><td class="hi">$7.99 (early access)</td><td>$11.99</td><td>Free (limited)</td><td>$9.99 organizer fee</td></tr>
      <tr><td>AI Features in Free</td><td class="hi"><span class="yes">✓</span> Yes</td><td><span class="no">✗</span> No</td><td><span class="no">✗</span> No</td><td><span class="no">✗</span> No</td></tr>
      <tr><td>Community Features in Free</td><td class="hi"><span class="yes">✓</span> Full access</td><td><span class="no">✗</span> Locked</td><td><span class="no">✗</span> N/A</td><td><span class="part">~</span> View only</td></tr>
      <tr><td>Partner Matching in Free</td><td class="hi"><span class="yes">✓</span> Core feature</td><td><span class="no">✗</span> Doesn't exist</td><td><span class="no">✗</span> Doesn't exist</td><td><span class="no">✗</span> Doesn't exist</td></tr>`,
    'table-whoisitfor': `
      <tr><td>Solo runner wanting community</td><td class="hi"><span class="yes">✓</span> Perfect fit</td><td><span class="part">~</span> Possible</td><td><span class="part">~</span> Limited</td><td><span class="part">~</span> Possible</td></tr>
      <tr><td>Multi-sport athlete</td><td class="hi"><span class="yes">✓</span> Perfect fit</td><td><span class="yes">✓</span> Good</td><td><span class="no">✗</span> Run only</td><td><span class="no">✗</span></td></tr>
      <tr><td>Beginner seeking accountability</td><td class="hi"><span class="yes">✓</span> AI matches mentors</td><td><span class="no">✗</span></td><td><span class="part">~</span> Guided runs only</td><td><span class="part">~</span> Manual search</td></tr>
      <tr><td>Club / team organizer</td><td class="hi"><span class="yes">✓</span> Built-in tools</td><td><span class="part">~</span> Basic</td><td><span class="no">✗</span></td><td><span class="yes">✓</span> Good</td></tr>
      <tr><td>Outdoor / adventure athlete</td><td class="hi"><span class="yes">✓</span> Perfect fit</td><td><span class="part">~</span> Partial</td><td><span class="no">✗</span></td><td><span class="part">~</span> Via groups</td></tr>`,
  },
  zh: {
    'table-features': `
      <tr><td>GPS 运动追踪</td><td class="hi"><span class="yes">✓</span> 50+ 种运动</td><td><span class="yes">✓</span> 约 20 种</td><td><span class="part">~</span> 仅跑步</td><td><span class="no">✗</span></td></tr>
      <tr><td>AI 伙伴匹配</td><td class="hi"><span class="yes">✓</span> 智能 AI</td><td><span class="no">✗</span></td><td><span class="no">✗</span></td><td><span class="no">✗</span></td></tr>
      <tr><td>社区发现</td><td class="hi"><span class="yes">✓</span> AI 精选</td><td><span class="part">~</span> 基础俱乐部</td><td><span class="no">✗</span></td><td><span class="yes">✓</span> 仅手动</td></tr>
      <tr><td>训练伙伴查找</td><td class="hi"><span class="yes">✓</span> 核心功能</td><td><span class="no">✗</span></td><td><span class="no">✗</span></td><td><span class="part">~</span> 基础</td></tr>
      <tr><td>多运动社交动态</td><td class="hi"><span class="yes">✓</span> 全项目</td><td><span class="part">~</span> 按运动区隔</td><td><span class="no">✗</span></td><td><span class="part">~</span> 仅活动</td></tr>
      <tr><td>AI 表现教练</td><td class="hi"><span class="yes">✓</span> 内置免费</td><td><span class="part">~</span> 仅付费版</td><td><span class="part">~</span> 非常有限</td><td><span class="no">✗</span></td></tr>
      <tr><td>路线探索</td><td class="hi"><span class="yes">✓</span> 智能+社交</td><td><span class="yes">✓</span> 较好</td><td><span class="part">~</span> 基础</td><td><span class="no">✗</span></td></tr>
      <tr><td>室内 + 室外</td><td class="hi"><span class="yes">✓</span> 全面支持</td><td><span class="yes">✓</span> 两者</td><td><span class="part">~</span> 主要户外</td><td><span class="no">✗</span></td></tr>
      <tr><td>实时团队协调</td><td class="hi"><span class="yes">✓</span> 内置</td><td><span class="no">✗</span></td><td><span class="no">✗</span></td><td><span class="part">~</span> 第三方</td></tr>
      <tr><td>跨运动社区</td><td class="hi"><span class="yes">✓</span> 全运动</td><td><span class="no">✗</span></td><td><span class="no">✗</span></td><td><span class="yes">✓</span> 若群组存在</td></tr>`,
    'table-pricing': `
      <tr><td>免费版包含</td><td class="hi">追踪 + 匹配 + 社区</td><td>仅基础追踪</td><td>仅跑步</td><td>加入群组（受限）</td></tr>
      <tr><td>高级版价格/月</td><td class="hi">¥57.99（早期访问）</td><td>¥86.99</td><td>免费（受限）</td><td>¥71.99 组织者费</td></tr>
      <tr><td>免费版 AI 功能</td><td class="hi"><span class="yes">✓</span> 有</td><td><span class="no">✗</span> 无</td><td><span class="no">✗</span> 无</td><td><span class="no">✗</span> 无</td></tr>
      <tr><td>免费版社区功能</td><td class="hi"><span class="yes">✓</span> 完全开放</td><td><span class="no">✗</span> 已锁定</td><td><span class="no">✗</span> 不适用</td><td><span class="part">~</span> 仅浏览</td></tr>
      <tr><td>免费版伙伴匹配</td><td class="hi"><span class="yes">✓</span> 核心功能</td><td><span class="no">✗</span> 不存在</td><td><span class="no">✗</span> 不存在</td><td><span class="no">✗</span> 不存在</td></tr>`,
    'table-whoisitfor': `
      <tr><td>寻找社区的独自跑者</td><td class="hi"><span class="yes">✓</span> 完美契合</td><td><span class="part">~</span> 有可能</td><td><span class="part">~</span> 有限</td><td><span class="part">~</span> 有可能</td></tr>
      <tr><td>多运动爱好者</td><td class="hi"><span class="yes">✓</span> 完美契合</td><td><span class="yes">✓</span> 较好</td><td><span class="no">✗</span> 仅跑步</td><td><span class="no">✗</span></td></tr>
      <tr><td>寻求督促的新手</td><td class="hi"><span class="yes">✓</span> AI 匹配导师</td><td><span class="no">✗</span></td><td><span class="part">~</span> 仅引导跑</td><td><span class="part">~</span> 手动搜索</td></tr>
      <tr><td>俱乐部 / 团队组织者</td><td class="hi"><span class="yes">✓</span> 内置工具</td><td><span class="part">~</span> 基础</td><td><span class="no">✗</span></td><td><span class="yes">✓</span> 较好</td></tr>
      <tr><td>户外 / 探险运动员</td><td class="hi"><span class="yes">✓</span> 完美契合</td><td><span class="part">~</span> 部分支持</td><td><span class="no">✗</span></td><td><span class="part">~</span> 通过群组</td></tr>`,
  },
};

// ── Font injection ───────────────────────────────────────
let _zhFontLoaded = false;
function ensureZhFont() {
  if (_zhFontLoaded) return;
  const link = document.createElement('link');
  link.rel  = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;900&display=swap';
  document.head.appendChild(link);
  _zhFontLoaded = true;
}

// ── CSS override injection ───────────────────────────────
const ZH_STYLE_ID = 'lauver-zh-override';
function injectZhStyle() {
  if (document.getElementById(ZH_STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = ZH_STYLE_ID;
  s.textContent = `
    html.lang-zh body,
    html.lang-zh body * {
      font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif !important;
      letter-spacing: 0em !important;
      text-transform: none !important;
    }
    html.lang-zh h1,
    html.lang-zh h2,
    html.lang-zh h3,
    html.lang-zh h4 {
      line-height: 1.3 !important;
    }
    html.lang-zh [class*="headline"],
    html.lang-zh [class*="title"],
    html.lang-zh [class*="section-title"] {
      line-height: 1.4 !important;
    }
  `;
  document.head.appendChild(s);
}
function removeZhStyle() {
  const el = document.getElementById(ZH_STYLE_ID);
  if (el) el.remove();
}

// ── Core translation apply ───────────────────────────────
function applyLang(lang) {
  const strings = T[lang] || T.en;

  // data-i18n — set textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key] !== undefined) el.textContent = strings[key];
  });

  // data-i18n-html — set innerHTML (for elements with embedded tags)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (strings[key] !== undefined) el.innerHTML = strings[key];
  });

  // data-i18n-ph — set placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (strings[key] !== undefined) el.placeholder = strings[key];
  });

  // Comparison tables — replace entire tbody
  document.querySelectorAll('[data-table]').forEach(tbody => {
    const tableKey = tbody.dataset.table;
    const body = TABLE_BODIES[lang]?.[tableKey] || TABLE_BODIES.en[tableKey];
    if (body) tbody.innerHTML = body;
  });

  // Font + CSS class
  if (lang === 'zh') {
    ensureZhFont();
    injectZhStyle();
    document.documentElement.classList.add('lang-zh');
    document.documentElement.lang = 'zh-CN';
  } else {
    removeZhStyle();
    document.documentElement.classList.remove('lang-zh');
    document.documentElement.lang = 'en';
  }

  // Update all toggle buttons
  const btnText = strings['lang.btn'];
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.textContent = btnText;
  });

  localStorage.setItem('lauver-lang', lang);
}

// ── Public API ───────────────────────────────────────────
export function getLang() {
  return localStorage.getItem('lauver-lang') || 'en';
}

export function toggleLang() {
  const next = getLang() === 'en' ? 'zh' : 'en';
  applyLang(next);
}

export function initI18n() {
  // Wire toggle buttons
  document.addEventListener('click', e => {
    if (e.target.closest('.lang-toggle-btn')) toggleLang();
  });

  // Apply saved language
  const saved = getLang();
  if (saved === 'zh') ensureZhFont();
  applyLang(saved);
}
