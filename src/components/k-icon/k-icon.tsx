import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'k-icon',
    styleUrl: 'k-icon.css',
    shadow: true,
})
export class KIcon {
    @Prop() name = 'menu';
    @Prop() label?: string;

    render() {
        const maskImage = `var(--icon-${this.name})`;

        const style = {
            'mask-image': maskImage,
            '-webkit-mask-image': maskImage,
        };

        return (
            <i
                class="icon"
                style={style}
                {...(this.label
                    ? { role: 'img', 'aria-label': this.label }
                    : { 'aria-hidden': 'true' })}
            />
        );
    }
}