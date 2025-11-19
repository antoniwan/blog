/**
 * Shared Chart.js theme configuration
 * Provides consistent theming for all charts
 */

// Light mode color palette
const DATASET_COLORS_LIGHT = [
  { border: 'rgba(59, 130, 246, 0.8)', background: 'rgba(59, 130, 246, 0.5)' }, // Blue
  { border: 'rgba(220, 38, 38, 0.8)', background: 'rgba(220, 38, 38, 0.5)' }, // Red
  { border: 'rgba(34, 197, 94, 0.8)', background: 'rgba(34, 197, 94, 0.5)' }, // Green
  { border: 'rgba(245, 158, 11, 0.8)', background: 'rgba(245, 158, 11, 0.5)' }, // Amber
  { border: 'rgba(147, 51, 234, 0.8)', background: 'rgba(147, 51, 234, 0.5)' }, // Purple
  { border: 'rgba(236, 72, 153, 0.8)', background: 'rgba(236, 72, 153, 0.5)' }, // Pink
];

// Dark mode color palette - brighter for better visibility
const DATASET_COLORS_DARK = [
  { border: 'rgba(96, 165, 250, 1)', background: 'rgba(96, 165, 250, 0.6)' }, // Blue
  { border: 'rgba(248, 113, 113, 1)', background: 'rgba(248, 113, 113, 0.6)' }, // Red
  { border: 'rgba(74, 222, 128, 1)', background: 'rgba(74, 222, 128, 0.6)' }, // Green
  { border: 'rgba(251, 191, 36, 1)', background: 'rgba(251, 191, 36, 0.6)' }, // Amber
  { border: 'rgba(167, 139, 250, 1)', background: 'rgba(167, 139, 250, 0.6)' }, // Purple
  { border: 'rgba(244, 114, 182, 1)', background: 'rgba(244, 114, 182, 0.6)' }, // Pink
];

/**
 * Get Chart.js theme configuration based on current theme (light/dark mode)
 * This function is designed to be called from client-side scripts
 */
export function getChartTheme() {
  const isDark =
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

  return {
    text: isDark ? 'rgb(255, 255, 255)' : 'rgb(17, 24, 39)',
    textMuted: isDark ? 'rgb(200, 210, 220)' : 'rgb(107, 114, 128)',
    border: isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgb(209, 213, 219)',
    bgAlt: isDark ? 'rgb(20, 30, 50)' : 'rgb(249, 250, 251)',
    datasetColors: isDark ? DATASET_COLORS_DARK : DATASET_COLORS_LIGHT,
  };
}

/**
 * Get default Chart.js options with consistent theming
 */
export function getChartOptions(
  config: {
    yAxisLabel?: string;
    xAxisLabel?: string;
    showLegend?: boolean;
    stacked?: boolean;
    beginAtZero?: boolean;
    xAxisRotation?: { max?: number; min?: number };
  } = {},
) {
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
  defaultColors?: { border?: string; background?: string },
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
