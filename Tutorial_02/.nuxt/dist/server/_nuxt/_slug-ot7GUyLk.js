import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/hookable/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unctx/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/radix3/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/defu/dist/defu.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/ufo/dist/index.mjs";
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
export {
  _slug as default
};
//# sourceMappingURL=_slug-ot7GUyLk.js.map
