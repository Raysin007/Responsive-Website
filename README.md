# Fashion Landing Page

This project is a responsive landing page for a men's urban fashion brand, featuring fresh arrivals of 2026. It showcases products like jackets, boots, and jeans with interactive quantity selectors, a hero section, FAQ accordion, and footer.[1][2]

## Features
- Fixed navbar with hamburger menu for mobile, product category dropdowns, and icons for search, account, cart.
- Hero banner promoting "Fresh Arrivals of 2026" with "Shop Now" CTA.
- Product cards for Men's Blue Varsity Jacket, Boots, and Denim Jeans ($79.99 each), including 5-star ratings, +/- quantity buttons, and Buy buttons.[2]
- Expandable FAQ section using radio inputs and CSS transitions.
- Responsive design adapting for screens under 876px, 1082px, etc., with mobile-first hamburger menu.[1]
- Interactive JavaScript for increment/decrement quantity (max 10, min 0).[3]

## Tech Stack
- HTML5 for structure.
- CSS3 with custom styles, Bootstrap 5.3 for utilities, Google Fonts (Bebas Neue, Raleway, Poppins), Font Awesome icons.[2][1]
- Vanilla JavaScript for quantity controls.[3]

## File Structure
| File | Description |
|------|-------------|
| `index.html` | Main page with navbar, hero, products, FAQ, footer.[2] |
| `style.css` | Custom styles for layout, animations, responsiveness.[1] |
| `script.js` | Handles +/- buttons for product quantities.[3] |
| `assets/` | Folder for images (logo.jpg, euro model.jpg, jacket1.jpg, boots.jpg, pants.jpg) and other resources (not included).[2] |

## Setup & Deployment
1. Clone the repo: `git clone <your-repo-url>`.
2. Add missing `assets/` folder with referenced images.
3. Open `index.html` in a browser or deploy to Netlify/Vercel.
4. For local server: Use Live Server in VS Code.[2]

## Known Issues & Todos
- Placeholder Lorem ipsum in FAQs; replace with real content.
- Buy buttons and links are non-functional; add backend for e-commerce.
- Ensure all assets paths are correct (e.g., `assets/` spelling).[2]
- Test quantity JS across browsers.

