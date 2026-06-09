import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'k-button',
    styleUrl: 'k-button.css',
    shadow: true,
})
export class KButton {
    @Prop() label = 'Button';
    @Prop() icon = 'menu';
    @Prop() type: 'button' | 'submit' = 'button';

    render() {
        return (
            <button class="root" type={this.type}>
                <k-icon name={this.icon}></k-icon>
                <span class="label">{this.label}</span>
            </button>
        );
    }
}