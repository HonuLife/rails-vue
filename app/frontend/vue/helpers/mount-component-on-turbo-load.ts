import { createApp, type Component } from "vue";

function mountComponentOnTurboLoad(
  component: Component,
  rootContainer = "#vue-app"
) {
  document.addEventListener("turbo:load", () => {
    createApp(component).mount(rootContainer);
  });
}

export { mountComponentOnTurboLoad };
