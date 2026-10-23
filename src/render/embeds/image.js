import { attrs } from '../html.js';

// {{image mobs/wraith.png caption="A wraith at night" align=right width=240 pixelated=true}}
export default {
  positional: 'src',
  render(props, h) {
    if (!props.src) h.fail('needs "src", an image path under assets/');
    const align = props.align ?? 'center';
    if (!['left', 'right', 'center'].includes(align)) h.fail('align must be left, right or center');
    const img = `<img${attrs({
      src: h.asset(props.src),
      alt: props.alt ?? props.caption ?? '',
      loading: 'lazy',
      class: props.pixelated ? 'pixelated' : null,
      width: props.width ?? null,
    })}>`;
    return `<figure class="embed-image align-${align}">${img}${props.caption ? `<figcaption>${h.inline(String(props.caption))}</figcaption>` : ''}</figure>\n`;
  },
};
