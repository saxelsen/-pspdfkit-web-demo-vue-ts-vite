<template>
  <div class="pdf-container"></div>
</template>

<script setup lang="ts">
import PSPDFKit, { Instance } from "pspdfkit";
import { onMounted, onBeforeUnmount } from "vue";

const emit = defineEmits(["document-loaded"]);

async function loadPSPDFKit(): Promise<Instance> {
  PSPDFKit.unload(".pdf-container");
  return PSPDFKit.load({
    document: "/example.pdf",
    container: ".pdf-container",
  });
}

onMounted(() => {
  loadPSPDFKit().then(() => {
    emit("document-loaded");
  });
});

onBeforeUnmount(() => {
  PSPDFKit.unload(".pdf-container");
});
</script>


<style scoped>
.pdf-container {
  height: 100vh;
}
</style>
