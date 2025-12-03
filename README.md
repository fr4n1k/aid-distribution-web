# Aid Distribution Dashboard

A comprehensive web application for monitoring and managing humanitarian aid distributions across multiple regions. Built with Next.js, TypeScript, and following SOLID principles and Clean Code practices.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Design Patterns](#design-patterns)
- [Assumptions and Trade-offs](#assumptions-and-trade-offs)

## Features

### Distribution List Page

- Tabular view of all aid distributions
- Filter by Region and Status
- Pagination support (10 items per page)
- View detailed information for each distribution

### Distribution Details Page

- Complete information about a specific distribution
- Region, Date, Status, Aid Type, Delivery Channel
- Total beneficiaries count
- List of individual beneficiaries

### Charts & Analytics Page

- **Pie Chart**: Distribution of aid by status (Planned, In Progress, Completed, Cancelled)
- **Line Chart**: Number of distributions over time (monthly aggregation)
- Summary statistics cards

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Charts**: ApexCharts + react-apexcharts
- **API Mocking**: MSW (Mock Service Worker)
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint

## Architecture

### Container/Presentation Pattern

**Presentation Components** ([src/components/presentation/](src/components/presentation/))

- Pure UI components that receive data via props
- No API calls, no business logic
- Highly reusable and testable
- Examples: `DistributionTable`, `DistributionFilters`, `Pagination`

**Container Components** ([src/components/containers/](src/components/containers/))

- Manage state and side effects
- Fetch data using custom hooks
- Handle user interactions and business logic
- Pass data down to presentational components
- Examples: `DistributionListContainer`, `DistributionDetailContainer`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd web
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run Jest tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate test coverage report
```

## Testing

The project includes comprehensive tests for components and hooks using Jest and React Testing Library.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage

- **Unit Tests**: Presentational components (DistributionTable, DistributionFilters)
- **Integration Tests**: Custom hooks (useChartData)
- **Coverage**: Focus on business logic and UI interactions

## Assumptions and Trade-offs

### Assumptions

1. **Data Volume**: Assumed moderate data volume suitable for client-side pagination
2. **Real-time Updates**: Not required; data is fetched on page load
3. **Authentication**: Not implemented (out of scope for this challenge)
4. **Mobile Responsive**: Web UI is responsive; separate React Native app not included in this repository
5. **Browser Support**: Modern browsers with ES2017+ support

### Trade-offs

1. **MSW vs Backend**

   - ✅ Faster development, no backend setup needed
   - ❌ Not suitable for production without a real API

2. **Client-side Pagination**

   - ✅ Simple implementation, good for moderate datasets
   - ❌ Not scalable for large datasets (server-side pagination would be better)

3. **ApexCharts**

   - ✅ Feature-rich, good documentation
   - ❌ Larger bundle size compared to lightweight alternatives

4. **All Data in Charts**

   - ✅ Shows complete picture of operations
   - ❌ May need optimization for very large datasets

5. **No State Management Library**

   - ✅ Simpler architecture, less boilerplate
   - ❌ Custom hooks pattern might not scale for very complex state

### Future Enhancements

- Server-side pagination and filtering
- Real-time updates with WebSockets
- Export functionality (CSV, PDF)
- Advanced filtering (date ranges, aid types)
- User authentication and authorization
- Internationalization (i18n)
- Dark mode support
- Performance optimizations (virtual scrolling, lazy loading)

## License

This project was created as part of a coding challenge for Aidonic.
