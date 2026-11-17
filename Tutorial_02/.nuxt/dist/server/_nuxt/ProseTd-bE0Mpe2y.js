import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<td${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</td>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseTd = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProseTd as default
};
//# sourceMappingURL=ProseTd-bE0Mpe2y.js.map
