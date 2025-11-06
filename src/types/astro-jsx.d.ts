/// <reference types="astro/client" />

declare global {
	namespace JSX {
		interface IntrinsicElements extends import('astro/jsx').JSX.IntrinsicElements {}
	}
}

export {};
