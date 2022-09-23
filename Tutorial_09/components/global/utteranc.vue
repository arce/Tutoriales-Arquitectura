<template>
</template>
<script>

export default {
  layout: "default",

  head: {
    script: [
      {
        src: 'https://utteranc.es/client.js',
        repo: "arce/arquitectura-comentarios",
        'issue-term': "pathname",
        label: "comments",
        theme: "github-light",
        crossorigin: "anonymous",
        body: true,
        async: true
      }
    ]
  },

};
</script>