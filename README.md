# CAT Cutoffs - Marks vs Percentile Visualization

An interactive web application to visualize CAT (Common Admission Test) examination marks vs percentile data from 2017 to 2024. This tool helps students and aspirants understand the relationship between raw scores and percentiles across different years and exam sections.

**Note**: The data presented is based on scaled scores and analyses from various coaching institutes and experts, as the IIMs do not officially release this detailed breakdown. These figures can vary slightly depending on the difficulty level of the paper each year.

## Features

- **Year Selection**: Browse CAT data from 2017 to 2024
- **Section-wise Analysis**: Analyze performance across different CAT sections:
  - **Overall**: Complete test performance
  - **VARC**: Verbal Ability & Reading Comprehension
  - **LRDI**: Logical Reasoning & Data Interpretation (formerly DILR)
  - **QA**: Quantitative Ability
  - **All Sections**: Compare individual sections (VARC, LRDI, QA) on a single chart
- **Interactive Charts**: Hover over data points for detailed information
- **Real CAT Data**: Based on actual exam performance analyses from 2017-2024
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Charts update dynamically based on user selections

## Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Build Tool**: Vite
- **Visualization**: Chart.js
- **Styling**: Modern CSS with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (version 20.19.0 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Usage

1. **Select Year**: Use the year dropdown to choose which CAT year's data you want to view (2017-2023)
2. **Select Section**: Choose which section to analyze:
   - **Overall**: View complete test performance
   - **VARC**: Focus on Verbal Ability & Reading Comprehension
   - **LRDI**: Analyze Logical Reasoning & Data Interpretation
   - **QA**: Examine Quantitative Ability performance
   - **All Sections**: Compare VARC, LRDI, and QA sections on one chart (excludes overall)
3. **Analyze Data**: The chart will display marks vs percentile relationship for your selection
4. **Hover for Details**: Move your mouse over data points to see exact values and section information

## Data Structure

The application uses real CAT examination data organized by year and section. The data structure in `src/main.js` follows this format:

```javascript
const catData = {
  2023: {
    all: {
      overall: [
        { marks: 100, percentile: 99.9 },
        { marks: 85, percentile: 99.5 },
        // ... more data points
      ],
      varc: [
        { marks: 48, percentile: 99.9 },
        { marks: 44, percentile: 99.5 },
        // ... more data points
      ],
      lrdi: [ /* LRDI data */ ],
      qa: [ /* QA data */ ]
    }
  },
  // ... other years from 2017-2023
}
```

### Section Information:
- **Overall**: Total scaled score across all sections
- **VARC**: Verbal Ability & Reading Comprehension
- **LRDI**: Logical Reasoning & Data Interpretation (formerly called DILR)
- **QA**: Quantitative Ability

### Data Source:
The data is based on scaled scores and analyses from various coaching institutes and CAT preparation experts, as official percentile breakdowns are not released by IIMs.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This application uses sample data for demonstration purposes. For official CAT cutoffs and percentile data, please refer to the official IIM websites and CAT conducting body announcements.

## Support

For questions or issues, please create an issue in the repository or contact the development team.
