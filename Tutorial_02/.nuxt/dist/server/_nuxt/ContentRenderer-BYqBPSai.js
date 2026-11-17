import { defineComponent, useSlots, h, watch, useSSRContext } from "vue";
import _sfc_main$1 from "./ContentRendererMarkdown-DIh1sB43.js";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/destr/dist/index.mjs";
import "scule";
import "property-information";
import "./node-yHY0X6Y7.js";
import "vue/server-renderer";
import "./preview-Cf-iGrFq.js";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/h3/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/klona/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/hookable/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/radix3/dist/index.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/defu/dist/defu.mjs";
import "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_02/node_modules/ufo/dist/index.mjs";
const _sfc_main = defineComponent({
  name: "ContentRenderer",
  props: {
    /**
     * The document to render.
     */
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    watch(
      () => props.excerpt,
      (newExcerpt) => {
        if (newExcerpt && !props.value?.excerpt) {
          console.warn(`No excerpt found for document content/${props?.value?._path}.${props?.value?._extension}!`);
          console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
        }
      },
      {
        immediate: true
      }
    );
  },
  /**
   * Content empty fallback
   * @slot empty
   */
  render(ctx) {
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    const markdownAST = excerpt ? value?.excerpt : value?.body;
    if (!markdownAST?.children?.length && slots?.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    }
    if (slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    if (markdownAST?.type === "root" && markdownAST?.children?.length) {
      return h(
        _sfc_main$1,
        {
          value,
          excerpt,
          tag,
          ...this.$attrs
        }
      );
    }
    return h(
      "pre",
      null,
      JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2)
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContentRenderer-BYqBPSai.js.map
