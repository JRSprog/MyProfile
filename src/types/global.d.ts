export {};

declare global {
  interface Window {
    particlesJS?: (elementId: string, config: Record<string, unknown>) => void;
  }
}
