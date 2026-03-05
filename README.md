# ShoppyGlobe E-Commerce Application

A modern e-commerce web application built with React, Redux, and Vite.

## Github-Link - https://github.com/Prateek-saraswat/ShoppyGlobe-E-commerce

## Features

- **Product Listing** - Browse products fetched from DummyJSON API
- **Product Details** - View detailed product information
- **Shopping Cart** - Add/remove products, adjust quantities
- **Checkout** - Complete your order with billing details
- **Search** - Filter products by title or description
- **Responsive Design** - Works on all screen sizes

## Tech Stack

- **Frontend**: React 19, Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **API**: DummyJSON

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx       # Navigation header
│   ├── ProductItem.jsx  # Product card
│   ├── ProductsList.jsx # Product listing
│   └── CartItem.jsx    # Cart item
├── pages/               # Page components
│   ├── Home.jsx        # Home page
│   ├── ProductDetails.jsx # Product details
│   ├── CartPage.jsx    # Shopping cart
│   ├── CheckoutPage.jsx # Checkout
│   └── NotFound.jsx    # 404 page
├── redux/               # Redux state management
│   ├── store.js        # Redux store
│   ├── cartSlice.js    # Cart state
│   ├── SearchSlice.js  # Search state
│   └── Selectors.js    # Redux selectors
├── hooks/               # Custom hooks
│   └── useFetchProduct.js # Data fetching
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Routes

- `/` - Home (Product List)
- `/products/:id` - Product Details
- `/cart` - Shopping Cart
- `/checkout` - Checkout

