import { _ as __nuxt_component_0 } from "./nuxt-link-BxyBcsFZ.js";
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/hookable/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unctx/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/radix3/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/defu/dist/defu.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseA",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: props.href,
        target: props.target
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProseA-CL_XJOY3.js.map
