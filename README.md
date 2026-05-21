# Websites Deals 🚀

Ready-made website templates for quick client delivery. Pick a template, deploy it, customize it, ship it.

## Quick Start

```bash
# List all categories
./deploy list

# List templates in a category
./deploy list Portfolio_Websites

# Deploy a template to your project
./deploy deploy Portfolio_Websites/portfolio-1 ~/my-new-project

# Preview a template locally
./deploy serve Portfolio_Websites/portfolio-1

# Create a new blank template
./deploy new Portfolio_Websites my-new-template
```

## Categories

| # | Category | Description |
|---|----------|-------------|
| 1 | Portfolio_Websites | Personal & freelancer portfolios |
| 2 | Landing-Page-Kits | Modular landing page components |
| 3 | Landing-Pages | Full landing page templates |
| 4 | Business-Websites | Small to medium business sites |
| 5 | E-commerce_Websites | Online store templates |
| 6 | Dashboard-Admin | Admin dashboards & control panels |
| 7 | Restaurant-Websites | Restaurant & cafe sites |
| 8 | Hotel-Websites | Hotel & hospitality sites |
| 9 | Real-Estate-Websites | Property & real estate sites |
| 10 | Gym-Websites | Fitness & gym sites |
| 11 | Healthcare-Websites | Medical & healthcare sites |
| 12 | Booking-Websites | Appointment & reservation systems |
| 13 | Car-Rental-Websites | Vehicle rental sites |
| 14 | Travel-Websites | Travel & tourism sites |
| 15 | Event-Websites | Event & conference sites |
| 16 | Church-Websites | Church & religious organization sites |
| 17 | Worship-Streaming | Worship streaming platforms |
| 18 | NGO-Websites | Non-profit & charity sites |
| 19 | Construction-Websites | Construction & contractor sites |
| 20 | Law-Firm-Websites | Legal & law firm sites |
| 21 | Education-Platforms | E-learning & education platforms |
| 22 | School_Websites | School & university sites |
| 23 | News-Websites | News & magazine sites |
| 24 | Blog-Websites (via News) | Blog & content sites |
| 25 | Sports-Websites | Sports club & league sites |
| 26 | Food-Delivery | Food ordering & delivery platforms |
| 27 | Chat-Applications | Real-time chat apps |
| 28 | Social-Media-Websites | Social network platforms |
| 29 | Forum-Websites | Discussion forums & communities |
| 30 | Video-sharing_Websites | Video sharing & streaming |
| 31 | Streaming-Websites | Media streaming platforms |
| 32 | Subscription-Websites | Membership & subscription sites |
| 33 | SaaS-Platforms | Software-as-a-Service templates |
| 34 | CRM-Systems | Customer relationship management |
| 35 | ERP-Systems | Enterprise resource planning |
| 36 | POS-Systems | Point of sale systems |
| 37 | Inventory-Systems | Inventory management |
| 38 | systems-Management_Websites | System management tools |
| 39 | Finance-Websites | Financial services & fintech |
| 40 | Crypto-Websites | Cryptocurrency & blockchain |
| 41 | AI-Agents | AI agent interfaces |
| 42 | AI-Websites | AI-powered website templates |
| 43 | Job-Board-Websites | Job listing & recruitment |
| 44 | Freelance-Platforms | Freelancer marketplace |
| 45 | Marketplace-Websites | Multi-vendor marketplaces |
| 46 | Dating-Websites | Dating platform templates |
| 47 | Logistics-Websites | Supply chain & logistics |
| 48 | Dating-Websites | Dating platform templates |

## Template Structure

Every template follows this structure:

```
category-name/
  template-name/
    index.html      # Main HTML file
    style.css       # Styles
    script.js       # JavaScript
    README.md       # Template description & instructions
    assets/         # (optional) Images, icons, fonts
```

## Tech Stack

All templates use **vanilla HTML, CSS, and JavaScript** — no build tools or frameworks required. This makes them:

- **Instant to deploy** — just serve the folder
- **Easy to customize** — open any file and edit
- **Lightweight** — no npm install needed
- **Portable** — works with any static host

## Tips

1. **Preview before deploying**: `./deploy serve <category>/<template>` opens on port 8080
2. **Customize branding**: Search for "BrandName" in the template and replace with your client's name
3. **Add a backend**: Each template is frontend-only — pair with your preferred backend (Node, Python, PHP, etc.)
4. **Create your own**: `./deploy new <category> <name>` scaffolds a blank template
