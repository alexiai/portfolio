import type { FeaturedProject } from "./types"

/**
 * The four featured case studies.
 * Copy comes from the brief — nothing here is invented. Fields that were not provided
 * (e.g. tech for the three websites, results for Miorița and BunnyBuddy) are left out on purpose.
 *
 * To add a screenshot: save it as src/assets/projects/<id>/<slot>.png (or .jpg/.webp/.svg).
 * It is picked up automatically — no code change needed.
 */
export const featuredProjects: FeaturedProject[] = [
  {
    id: "miorita",
    number: "01",
    title: "Miorița",
    subtitle: "Bringing Romanian folklore to life through a digital experience.",
    categories: ["Brand storytelling", "Web design", "Frontend development"],
    kind: "website",
    theme: "miorita",
    boardNote: "a storybook for a restaurant",
    context: [
      "Miorița is a traditional Moldovan restaurant in Bacău, Romania. It has been well known in the local community for many years, but it did not have a dedicated website.",
      "I wanted to create a digital presence that could introduce the restaurant to a younger audience while celebrating its Romanian cultural identity.",
    ],
    challenge: [
      "The main challenge was to translate the atmosphere of a traditional Romanian restaurant into a modern website without making it look outdated, generic or overly decorative.",
      "I also wanted to make essential information, particularly the menu, easy to explore.",
    ],
    approach: [
      "I built the visual direction around Romanian folklore, traditional motifs and cultural storytelling.",
      "Rather than creating a conventional restaurant landing page, I wanted browsing to feel like opening a storybook.",
    ],
    decisions: [
      {
        title: "Folklore as the starting point",
        text: "A distinctive colour palette, decorative elements, expressive typography and carefully composed layouts all grow out of Romanian folklore and traditional motifs.",
      },
      {
        title: "A storybook, not a landing page",
        text: "Browsing is meant to feel like opening a storybook, instead of scrolling a standard restaurant page.",
      },
      {
        title: "A menu with the feel of a book",
        text: "The menu has a book-like presentation, which keeps the most practical information easy to explore.",
      },
      {
        title: "A gallery for atmosphere",
        text: "The interactive gallery gives a visual introduction to the restaurant's atmosphere.",
      },
    ],
    contribution: [
      "I designed and developed the complete responsive website, including its visual identity, navigation, menu and interactive gallery.",
      "The project involved both the creative direction and the technical implementation.",
    ],
    live: "https://miorita-bacau.netlify.app/",
    hero: { slot: "hero", label: "Photography from the Miorița homepage", frame: "plain", ratio: "16 / 10" },
    gallery: [
      { slot: "menu-spread", ratio: "1811 / 1217", label: "The cookbook menu open to soups and daily dishes", caption: "The cookbook menu open to soups and daily dishes" },
      { slot: "gallery", ratio: "2000 / 1023", label: "Interactive gallery of dishes and Moldovan traditions", caption: "Interactive gallery of dishes and Moldovan traditions" },
      { slot: "motifs", ratio: "2000 / 901", label: "Folk embroidery and typography", caption: "Folk embroidery and typography" },
      { slot: "mobile", ratio: "490 / 1063", label: "Miorița on mobile", caption: "Miorița on mobile" },
    ],
  },
  {
    id: "dulce",
    number: "02",
    title: "Dulce by Romina",
    subtitle: "From scattered social media posts to a simpler way of discovering and ordering.",
    categories: ["Small business", "Ordering experience", "Web development"],
    kind: "website",
    theme: "dulce",
    boardNote: "from Facebook posts to a catalogue",
    context: [
      "Dulce by Romina is a small local bakery and patisserie in Bacău.",
      "Before the website, customers discovered products mainly through Facebook posts and placed orders through WhatsApp. This was familiar for the owner, but inconvenient for customers who had to scroll through social media to find specific cakes and products.",
    ],
    challenge: [
      "There was no centralised product catalogue.",
      "Customers had difficulty discovering products, while the owner received orders without the clarity and structure of a dedicated ordering interface.",
    ],
    approach: [
      "I wanted to preserve the familiar, personal character of the business while making the ordering experience more organised.",
      "Rather than forcing an entirely new order-management system, I designed the website around the owner's existing workflow.",
    ],
    decisions: [
      {
        title: "A catalogue instead of a feed",
        text: "Clear categories and dedicated product presentations let customers browse available products without searching through social media posts.",
      },
      {
        title: "Keep WhatsApp as the final step",
        text: "The owner was already comfortable managing orders there, so WhatsApp stays the last communication channel and nothing about her routine has to change.",
      },
      {
        title: "A structured way to order",
        text: "Customers select products and submit their order through a structured process, so requests arrive clearer than a free-form message.",
      },
    ],
    contribution: [
      "I designed and developed the responsive website, product catalogue and ordering flow.",
      "Customers can select products and submit orders through a structured process that reaches the owner via WhatsApp.",
    ],
    result: [
      "Customers have an easier way to discover products and place orders, while the owner receives clearer and more organised requests without changing her familiar communication method.",
    ],
    live: "https://dulcebyromina.netlify.app/",
    hero: { slot: "homepage", ratio: "2000 / 1019", label: "Dulce by Romina homepage screenshot" },
    gallery: [
      { slot: "whole-cakes", ratio: "2000 / 1088", label: "Whole cakes and portion sizes", caption: "Whole cakes and portion sizes" },
      { slot: "pastries", ratio: "2000 / 1046", label: "Individual pastries and gift boxes", caption: "Individual pastries and gift boxes" },
      { slot: "pickup", ratio: "2000 / 1059", label: "Cart and pickup scheduling", caption: "Cart and pickup scheduling" },
      { slot: "event-request", ratio: "2000 / 828", label: "Candy bar and custom cake enquiries", caption: "Candy bar and custom cake enquiries" },
    ],
  },
  {
    id: "salon-emma",
    number: "03",
    title: "Salon Emma",
    subtitle: "Giving an established bridal salon a digital presence worthy of its collection.",
    categories: ["Website redesign", "Information architecture", "UI design"],
    kind: "website",
    theme: "emma",
    boardNote: "quiet, elegant, considered",
    context: [
      "Salon Emma is a bridal and occasion-wear salon offering wedding dresses, men's formalwear and accessories.",
      "The existing website functioned primarily as a catalogue, but its visual presentation and organisation no longer reflected the quality and aesthetic of the salon's more recent collections.",
    ],
    challenge: [
      "While exploring the salon's online presence, I noticed a significant contrast between its outdated website and the much more polished photography and visual identity presented on Instagram.",
      "The men's section was particularly difficult to navigate, with products lacking a clear and consistent structure.",
      "I wanted to modernise the experience without losing the catalogue functionality customers were already familiar with.",
    ],
    approach: [
      "I rethought the information architecture, reorganising the product categories and giving particular attention to the men's section.",
      "The visual language was designed to feel elegant and premium, with enough space for the dresses and collections to remain the focus.",
    ],
    decisions: [
      {
        title: "Restructure before restyling",
        text: "The product categories were reorganised first, with the men's section getting a clear and consistent structure.",
      },
      {
        title: "Borrow from the Instagram polish",
        text: "The salon's more recent visual content guided the new direction, bringing contemporary photography into a cleaner and more cohesive presentation.",
      },
      {
        title: "Let the collection lead",
        text: "A restrained, premium visual language leaves enough space for the dresses and collections to remain the focus.",
      },
      {
        title: "Keep what customers already know",
        text: "The catalogue experience customers were familiar with is preserved, just better organised.",
      },
    ],
    contribution: [
      "I redesigned and rebuilt the website, including its navigation, catalogue structure, responsive layouts and visual presentation.",
    ],
    result: [
      "A more cohesive digital presence that better reflects the salon's current identity, makes collections easier to explore and preserves the familiar catalogue experience.",
    ],
    live: "https://salonemma.netlify.app/",
    hero: { slot: "homepage", ratio: "2000 / 1028", label: "Salon Emma homepage screenshot" },
    gallery: [
      { slot: "bridal", ratio: "2000 / 1018", label: "Bridal gowns and accessories", caption: "Bridal gowns and accessories" },
      { slot: "groom", ratio: "2000 / 1022", label: "Groom’s suits, shoes and accessories", caption: "Groom’s suits, shoes and accessories" },
      { slot: "occasion-dresses", ratio: "2000 / 1017", label: "Evening and cocktail dresses", caption: "Evening and cocktail dresses" },
      { slot: "suits", ratio: "2000 / 1028", label: "Occasion suits and menswear", caption: "Occasion suits and menswear" },
      { slot: "appointment", ratio: "2000 / 1029", label: "Booking an in-salon fitting", caption: "Booking an in-salon fitting" },
      { slot: "tailoring", ratio: "2000 / 1007", label: "The made-to-measure process", caption: "The made-to-measure process" },
      { slot: "construction", ratio: "2000 / 1007", label: "How a suit jacket is constructed", caption: "How a suit jacket is constructed" },
      { slot: "mobile", ratio: "487 / 995", label: "Salon Emma on mobile", caption: "Salon Emma on mobile" },
    ],
  },
  {
    id: "bunnybuddy",
    number: "04",
    title: "BunnyBuddy",
    subtitle: "A little more joy in managing money.",
    categories: ["Product design", "Mobile development", "AI features"],
    kind: "app",
    theme: "bunny",
    boardNote: "a budgeting app with bunnies",
    context: [
      "I wanted to build a budgeting application that makes personal finance feel less intimidating and more engaging.",
      "BunnyBuddy is a personal finance and budgeting app. The bunny characters are part of its visual identity.",
    ],
    challenge: [
      "The application needed to combine several expense-tracking methods, flexible budgeting, financial insights and gamification without making the interface overwhelming.",
    ],
    approach: [
      "I independently developed the product concept and its complete visual identity from scratch, including the original bunny characters, illustrations, icons and gamification system.",
    ],
    decisions: [
      {
        title: "Friendly, not intimidating",
        text: "Original bunny characters, illustrations and icons give money management a warmer face.",
      },
      {
        title: "Play as a motivator",
        text: "A carrot-themed gamification system uses challenges, points, badges and trophies, with playful terminology such as Bunnyspense for expenses.",
      },
      {
        title: "Many ways to log an expense",
        text: "Manual entry, a chatbot, a voice assistant, receipt scanning and a card-transaction import flow (built, awaiting bank API access).",
      },
      {
        title: "Budgets that fit different habits",
        text: "Weekly, biweekly and monthly budgets, with multiple income sources and spending categories.",
      },
    ],
    contribution: [
      "I independently designed and implemented the entire application, including its interface, original visual assets, budgeting functionality, expense-processing workflows and gamification system.",
      "The project combines product thinking, visual design, mobile development and AI integrations.",
    ],
    features: [
      { title: "Manual entry", text: "Add an expense by hand, sorted into spending categories." },
      { title: "Chatbot", text: "A Romanian-English chatbot for recording expenses." },
      { title: "Voice assistant", text: "A bilingual voice assistant for logging expenses." },
      { title: "Receipt scanning", text: "OCR receipt scanning to capture an expense from a photo." },
      {
        title: "Card import",
        text: "A bank card transaction import flow.",
        status: "Implemented — awaiting bank API access",
      },
    ],
    tech: ["React Native", "TypeScript", "Expo", "Firebase", "Tesseract.js"],
    github: "https://github.com/alexiai/licenta-budget-app",
    demo: "https://drive.google.com/drive/folders/1zD9nYU2fS9u6U8J6LleyPth1kbmpWRdg?dmr=1&ec=wgc-drive-hero-goto",
    hero: { slot: "hero", label: "BunnyBuddy screen overview", frame: "plain", ratio: "16 / 10" },
    gallery: [
      { slot: "screen-list", label: "Transaction list", frame: "phone", ratio: "9 / 19", caption: "Expense list" },
      { slot: "screen-ai", label: "Smart Bunny Assistant tips", frame: "phone", ratio: "9 / 19", caption: "Smart tips" },
      { slot: "screen-bank", label: "Bank connection list", frame: "phone", ratio: "9 / 19", caption: "Bank connections" },
      { slot: "screen-budget", label: "Budget overview screen", frame: "phone", ratio: "9 / 19", caption: "Budgets" },
      { slot: "screen-charts", label: "Category chart screen", frame: "phone", ratio: "9 / 19", caption: "Category charts" },
      { slot: "screen-calendar", label: "Calendar view of expenses", frame: "phone", ratio: "9 / 19", caption: "Calendar" },
      { slot: "screen-gamification", label: "Challenges, points, badges and trophies", frame: "phone", ratio: "9 / 19", caption: "Gamification" },
      { slot: "screen-chat", label: "Chatbot expense entry", frame: "phone", ratio: "9 / 19", caption: "Chatbot" },
      { slot: "screen-scan", label: "Receipt scanning", frame: "phone", ratio: "9 / 19", caption: "Receipt scan" },
    ],
  },
]
