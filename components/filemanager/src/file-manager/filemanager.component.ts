import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { FileManager } from '@syncfusion/ej2-filemanager';


export const properties: string[] = ['ajaxSettings', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'toolbarSettings', 'uploadSettings', 'view', 'width', 'beforeFileLoad', 'beforeFileOpen', 'beforeSend', 'created', 'destroyed', 'fileSelect', 'menuClick', 'menuOpen', 'onError', 'onSuccess', 'toolbarClick'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS FileManager Component.
 * ```vue
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class FileManagerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new FileManager({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public disableToolbarItems(items: string[]): void {
        return this.ej2Instances.disableToolbarItems(items);
    }

    public enableToolbarItems(items: string[]): void {
        return this.ej2Instances.enableToolbarItems(items);
    }

    public refreshFiles(): void {
        return this.ej2Instances.refreshFiles();
    }
}

export const FileManagerPlugin = {
    name: 'ejs-filemanager',
    install(Vue: any) {
        Vue.component(FileManagerPlugin.name, FileManagerComponent);

    }
}
