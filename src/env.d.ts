/// <reference path="../.astro/types.d.ts" />
interface Alpine {
    data(name: string, data: object): void;
    start(): void;
    // Puedes añadir más propiedades de Alpine aquí si las usas
}
declare var Alpine: Alpine;

// 2. Extendemos la interfaz 'Window' para incluir nuestra propiedad personalizada.
interface Window {
    tutorialStepsData?: Array<{
        title: string;
        content: string;
        selector: string | null;
    }>;
}