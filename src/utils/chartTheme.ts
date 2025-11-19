/**
 * Shared Chart.js theme configuration
 * Ensures all charts use consistent theming aligned with the site's design system
 */

/**
 * Get Chart.js theme configuration based on current theme
 */
export function getChartTheme() {
  // Get computed styles to access CSS variables
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  
  // Helper to get RGB value from CSS variable
  const getRGB = (varName: string): string => {
    const value = computedStyle.getPropertyValue(varName).trim();
    return `rgb(${value})`;
  };
  
  // Helper to get RGBA value from CSS variable
  const getRGBA = (varName: string, alpha: number): string => {
    const value = computedStyle.getPropertyValue(varName).trim();
    return `rgba(${value}, ${alpha})`;
  };

  return {
    // Colors
    text: getRGB('--color-text'),
    textMuted: getRGB('--color-text-muted'),
    border: getRGB('--color-border'),
    bg: getRGB('--color-bg'),
    bgAlt: getRGB('--color-bg-alt'),
    accent: getRGB('--color-accent'),
    primary: getRGB('--color-primary'),
    success: getRGB('--color-success'),
    warning: getRGB('--color-warning'),
    error: getRGB('--color-error'),
    highlight: getRGB('--color-highlight'),
    
    // Dataset color palette (using theme colors with varying opacity)
    datasetColors: [
      { 
        border: getRGB('--color-accent'), 
        background: getRGBA('--color-accent', 0.6) 
      },
      { 
        border: getRGB('--color-primary'), 
        background: getRGBA('--color-primary', 0.6) 
      },
      { 
        border: getRGB('--color-success'), 
        background: getRGBA('--color-success', 0.6) 
      },
      { 
        border: getRGB('--color-warning'), 
        background: getRGBA('--color-warning', 0.6) 
      },
      { 
        border: getRGB('--color-highlight'), 
        background: getRGBA('--color-highlight', 0.6) 
      },
    ],
  };
}

/**
 * Get default Chart.js options with consistent theming
 */
export function getChartOptions(config: {
  yAxisLabel?: string;
  xAxisLabel?: string;
  showLegend?: boolean;
  stacked?: boolean;
  beginAtZero?: boolean;
  xAxisRotation?: { max?: number; min?: number };
} = {}) {
  const theme = getChartTheme();
  
  const {
    yAxisLabel = '',
    xAxisLabel = '',
    showLegend = true,
    stacked = false,
    beginAtZero = true,
    xAxisRotation = { max: 45, min: 0 },
  } = config;

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top' as const,
        labels: {
          color: theme.text,
          usePointStyle: true,
          padding: 15,
          font: {
            family: 'Open Sans, system-ui, sans-serif',
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: theme.bgAlt,
        titleColor: theme.text,
        bodyColor: theme.text,
        borderColor: theme.border,
        borderWidth: 1,
        padding: 12,
        titleFont: {
          family: 'Open Sans, system-ui, sans-serif',
          size: 13,
          weight: '600',
        },
        bodyFont: {
          family: 'Open Sans, system-ui, sans-serif',
          size: 12,
        },
        cornerRadius: 6,
        displayColors: true,
      },
    },
    scales: {
      x: {
        stacked: stacked,
        ticks: {
          color: theme.textMuted,
          maxRotation: xAxisRotation.max ?? 45,
          minRotation: xAxisRotation.min ?? 0,
          font: {
            family: 'Open Sans, system-ui, sans-serif',
            size: 11,
          },
        },
        grid: {
          color: theme.border,
          drawBorder: true,
          borderColor: theme.border,
        },
        title: {
          display: !!xAxisLabel,
          text: xAxisLabel,
          color: theme.textMuted,
          font: {
            family: 'Open Sans, system-ui, sans-serif',
            size: 12,
            weight: '500',
          },
          padding: { top: 10, bottom: 0 },
        },
      },
      y: {
        beginAtZero: beginAtZero,
        stacked: stacked,
        ticks: {
          color: theme.textMuted,
          font: {
            family: 'Open Sans, system-ui, sans-serif',
            size: 11,
          },
        },
        grid: {
          color: theme.border,
          drawBorder: true,
          borderColor: theme.border,
        },
        title: {
          display: !!yAxisLabel,
          text: yAxisLabel,
          color: theme.textMuted,
          font: {
            family: 'Open Sans, system-ui, sans-serif',
            size: 12,
            weight: '500',
          },
          padding: { top: 0, bottom: 10 },
        },
      },
    },
  };
}

/**
 * Apply theme colors to a dataset, cycling through the color palette
 */
export function applyDatasetTheme(
  dataset: any,
  index: number,
  defaultColors?: { border?: string; background?: string }
) {
  const theme = getChartTheme();
  const colorIndex = index % theme.datasetColors.length;
  const themeColor = theme.datasetColors[colorIndex];

  return {
    ...dataset,
    borderColor: dataset.borderColor || defaultColors?.border || themeColor.border,
    backgroundColor: dataset.backgroundColor || defaultColors?.background || themeColor.background,
    borderWidth: dataset.borderWidth ?? 2,
  };
}

