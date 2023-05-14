import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  title: "Shen Biomed",
  projectId: "v2kpcd6h",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
