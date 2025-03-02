import { useEffect } from "react";

const HideElement = () => {
  useEffect(() => {
    const hideWuiSelect = setInterval(() => {
      document.querySelectorAll("w3m-modal").forEach((modal) => {
        const shadowRoot = modal.shadowRoot;
        if (shadowRoot) {
          const w3mHeader = shadowRoot.querySelector("w3m-header");
          if (w3mHeader?.shadowRoot) {
            const wuiSelect = w3mHeader.shadowRoot.querySelector("wui-select");
            if (wuiSelect) {
              console.log("Removing <wui-select> from DOM...");
              wuiSelect.remove(); // Permanently remove the element
            }
          }
        }
      });
    }, 100); // Keep checking every 500ms

    return () => clearInterval(hideWuiSelect);
  }, []);

  return null;
};

export default HideElement;
