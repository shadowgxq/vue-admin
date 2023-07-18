import { App, Component } from "vue";

export type WithInstall<T> = T & {
    install(app: App): void
}

export const withInstall = <T extends Component>(component: T, alias?: string) => {
    (component as Record<string, unknown>).install = (app: App) => {
        const compName = alias || component.name
        if (!compName) return;
        app.component(compName, component);
        if (alias) {
            app.config.globalProperties[alias] = component;
        }
    };
    return component as WithInstall<T>;
};
