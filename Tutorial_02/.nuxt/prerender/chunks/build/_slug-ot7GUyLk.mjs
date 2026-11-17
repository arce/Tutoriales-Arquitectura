import { resolveComponent, useSSRContext } from 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/h3/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/ufo/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unified/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/remark-parse/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/remark-rehype/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/defu/dist/defu.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/remark-gfm/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/rehype-external-links/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/rehype-raw/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/detab/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/scule/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/hast-util-to-string/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/github-slugger/index.js';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/destr/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/hookable/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/klona/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unctx/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/pathe/dist/index.mjs';
import 'file:///Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_content = resolveComponent("nuxt-content");
  _push(`<article${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_nuxt_content, { document: _ctx.article }, null, _parent));
  _push(`</article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/_slug.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug as default };
//# sourceMappingURL=_slug-ot7GUyLk.mjs.map
