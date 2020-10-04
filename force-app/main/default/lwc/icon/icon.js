import { LightningElement, api } from 'lwc';

export default class IconLwc extends LightningElement {
    @api name;
    @api customClass;
    @api size;
    @api alternativeText;

    get iconUrl() {
        var str = this.name.split(':');
        return `${window.location.origin}/_slds/icons/${str[0]}-sprite/svg/symbols.svg#${str[1]}`;
    }

    get iconStyle() {
        return `slds-icon_container ${this.customClass}`;
    }

    get iconSize() {
        var style = '';
        switch (this.size.toLowerCase()) {
            case "xx-small":
                style = " slds-icon_xx-small ";
                break;
            case "x-small":
                style = " slds-icon_x-small ";
                break;
            case "small":
                style = " slds-icon_small ";
                break;
            case "large":
                style = " slds-icon_large ";
                break;
        }
        return ` slds-icon ${style} slds-icon-text-default`;
    }
}