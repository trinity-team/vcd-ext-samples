export class PluginRegistration {
    label: string;
    root: string;
    module: string;

    constructor(root: string, module: string, label: string) {
        this.root = root;
        this.module = module;
        this.label = label;
    }

    get path(): string {
        return this.module.split("#")[1];
    }
};

export const PLUGINS: PluginRegistration[] = [
  new PluginRegistration('src/plugins/rubrik-vcd-extension/src', 'main/rubrik.module#RubrikModule', 'Rubrik Plugin')
];

