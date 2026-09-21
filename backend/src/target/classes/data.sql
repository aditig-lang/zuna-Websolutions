-- ============================================================
-- Zuna Web Solutions — Seed Data
-- Loaded on startup in dev (H2). Mirrors existing frontend data.
-- ============================================================

-- ── Blog Posts ──────────────────────────────────────────────
INSERT INTO blog_posts (title, category, published_date, author, excerpt, read_time, content, published)
VALUES
(
  'Why City Businesses Need a Premium Web Presence',
  'Digital Strategy',
  '2026-07-05',
  'Aditi Gupta',
  'Traditional brick-and-mortar showrooms in cities like Varanasi, Lucknow, and Patna are realizing the limits of physical footprint. Explore how building a high-speed digital storefront elevates credibility and helps capture regional demand.',
  '4 min read',
  'In the rapidly growing economy of Indian cities, consumer behavior has shifted dramatically. With cheap mobile internet and high smartphone penetration, customer discovery now happens online first.

Yet, many local businesses still rely on basic business listings or poorly optimized social media pages. A premium, custom-coded website does something social media cannot: it establishes corporate trust and absolute ownership.

For a local manufacturing plant in Varanasi, a high-end web presence opens up national and global B2B partnerships. For a retail showroom in Indore, it turns local walk-ins into predictable online orders. Investing in UI/UX and custom engineering isn''t just for global brands anymore—it is the differentiator that sets regional leaders apart.',
  true
),
(
  'Moving Beyond WordPress: The React.js Advantage for Local SMBs',
  'Engineering',
  '2026-06-28',
  'Aditi Gupta',
  'Most local web agencies offer generic, slow WordPress templates. Here is a deep dive into why React.js and Vite single-page applications deliver better loading speeds, security, and conversion rates.',
  '5 min read',
  'When looking to build a website, most business owners are pitched standard WordPress templates. While cheap and fast to spin up, these template sites suffer from bloat, slow load times, and security vulnerabilities.

In India, where mobile networks can sometimes be unstable outside metro hubs, loading speed is critical. A delay of 3 seconds can double your bounce rate.

React.js solves this by generating static, pre-rendered code that loads instantaneously. By bundling with modern tools like Vite, we strip out unnecessary database queries. A React website runs like a native app—animations are fluid, pages transition instantly, and there is no database for hackers to compromise directly.',
  true
),
(
  'Local SEO Checklist: Getting Your Business Found on Google Search',
  'SEO & Growth',
  '2026-06-15',
  'Aditi Gupta',
  'Want to rank first when someone searches for your service locally? Here is a simple, actionable SEO checklist tailored specifically for regional Indian businesses.',
  '3 min read',
  'Search Engine Optimization (SEO) is not a black box. For local businesses, ranking on Page 1 is the single most cost-effective way to generate inquiries. Here is a basic roadmap to get started:

1. Optimize for Mobile: More than 85% of local searches happen on mobile phones. Make sure your text is legible and buttons are easy to tap.
2. Embed Schema Markup: Tell search engines exactly who you are, what you sell, your operating hours, and your location coordinates.
3. Vernacular Search Terms: People search differently. Including regional search patterns (e.g., ''best fabric manufacturers in Varanasi'' rather than just ''fabrics online'') can capture high-intent buyers.
4. Optimize Core Web Vitals: Google explicitly favors fast-loading sites. High speed directly equals higher rankings.',
  true
);

-- ── Portfolio Projects ───────────────────────────────────────
INSERT INTO portfolio_projects (title, category, tag, image_url, demo_url, description, display_order, visible)
VALUES
(
  'Luxe Fashion Hub',
  'E-Commerce',
  'E-COMMERCE',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDT49puxsYe-RVIeIMmnzXkJI4xmPhpparJMhlK3YjByYmnnkOeDt66J23VemA1pIfnE610IyjhcWLHlz7mmeeZk1oEDCvyES6ZL1Uc_84tI1Gf-h1IIFVT9v2f3LJfK8BT_eTnDlYizJpOr4_5N3XK9U4HxyMy8mQfGmuCiVVGZqJG4EamBX2dHgno5IVYGbTt0i7F52E-ASPwxq3SLw2PsJx81ZcLDBtEc-pZz8VvtBU8oI3ZwZQRMA',
  NULL,
  'Full-stack e-commerce storefront with UPI integration and dynamic product catalog.',
  1,
  true
),
(
  'Nova SaaS Dashboard',
  'SaaS',
  'SAAS PLATFORM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCwl0whiiNWQioEP56gbYWZGIYyGSz_ds9GN8OJw2WXMrIYanjCGn4O0CV5Be4njBC-Gb9OY8min9NK_uG-viIXy20S3Y3KRWAxCppn-KzoSgmS_99bRfCnKe7IJzqd3su6FPJla40GzQKu9FeB5XhV7LLReC_xRW3T-YDldKJVSMg0Siyk4b0NPWGcam5YSHp3FPtF7O_69L75t0bIqTXRs-Uws6Mi9LT8W55BfqghbuoZWMlJGbB1Bg',
  NULL,
  'Analytics and management dashboard built for B2B SaaS clients.',
  2,
  true
),
(
  'Vault Web3 Wallet',
  'Web3',
  'WEB3 / CRYPTO',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB37s3vrAM9-C9fFViy-PG888xqB1mqmDylCkUvLbk4WBrWFbIKQoWebfAr5IGZFIPqLAadyOaPgIRwW79WARmppCCD1CqOmiMDqGAnqc7H29ATKjPjfeDkmhPhBCEJPkMCowqqxrr1t1427-xZ446UobkX3MGymBaOFb5vxzvrTz7EmQ3fRCXJ0VaO_LiI7H-_FOpvRJoEuKcKhFYphNxzBCvFGqSFnU2wTkMnSXSGg2Sa1_CcAVNHeg',
  NULL,
  'Decentralised Web3 wallet interface with modern glassmorphic UI design.',
  3,
  true
),
(
  'Horizon Real Estate',
  'Custom Dev',
  'REAL ESTATE',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAzAu1sf9DSm_xdSpmmQ5Uj3I1ttDNIFWyKkb14lh0y4UQBEyoyNtZdAU1MXQxLDU12XRLE_yzQsF7c2jmnpwylrgYblkuNQl0sBSh3X7wQq9oksrAT5zPI6_8dmYbAedu4SEolDurwqajhUVYumd6gS-chQfo6HyIaUw5NvV59hPIhwrszZHr2dYL8ZHZ8Rjs-RBDZoqH_ixjE61pE1sqf3NiaHlepGZnFE9qRkrtmU_QM-X4__lNfeg',
  NULL,
  'Custom real estate listing and lead capture platform.',
  4,
  true
);

-- ── Pricing Plans ────────────────────────────────────────────
INSERT INTO pricing_plans (name, tier, price, button_text, popular, features_raw, display_order)
VALUES
  ('Startup',    'Growth',  '₹5,000',  'Start Now',        false, 'Custom 5-Page Website|Responsive Design|Basic SEO Optimization', 1),
  ('Business',   'Premium', '₹15,000', 'Choose Business',  true,  'Up to 15 Pages|Advanced Animations|CMS Integration|E-commerce Ready', 2),
  ('Enterprise', 'Scale',   '₹25,000', 'Contact Sales',    false, 'Unlimited Scalability|24/7 Dedicated Support|White-glove Service', 3);

-- ── Service Items ────────────────────────────────────────────
INSERT INTO service_items (icon, color, bg, title, description, features_raw, featured, display_order)
VALUES
(
  'code',
  CONCAT('var(', '--color-primary)'),
  'rgba(120, 220, 218, 0.1)',
  'Bespoke Web Development',
  'Fast-loading React & Vite websites engineered for Indian mobile networks. Perfect for local businesses in Varanasi, Lucknow, Kanpur and Tier 2 cities wanting a premium digital edge.',
  'React.js Single Page Apps|UPI & Razorpay Integration|Mobile-First & 4G Optimized',
  false,
  1
),
(
  'storefront',
  CONCAT('var(', '--color-tertiary)'),
  'rgba(199, 199, 255, 0.1)',
  'E-Commerce Storefronts',
  'Convert your offline showroom into an online powerhouse. We build secure, UPI-ready e-commerce portals tailored for Indian retail businesses and manufacturers.',
  'UPI, Paytm, NetBanking|Dynamic Product Catalogs|WhatsApp Order Integration',
  true,
  2
),
(
  'auto_awesome',
  CONCAT('var(', '--color-secondary)'),
  'rgba(178, 200, 232, 0.1)',
  'Brand & UI/UX Design',
  'Stand out in a crowded local market. Our glassmorphic UI designs create the "WOW" factor your customers will remember, building trust from the first click.',
  'Logo & Brand Identity|UI/UX Prototyping|Social Media Kit',
  false,
  3
);
