declare module 'feather-icons' {
  interface FeatherIcon {
    toSvg(options?: {
      width?: number;
      height?: number;
      'stroke-width'?: number;
      class?: string;
    }): string;
  }

  interface FeatherIcons {
    icons: {
      [key: string]: FeatherIcon;
    };
  }

  const feather: FeatherIcons;
  export default feather;
} 