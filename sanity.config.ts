"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("@/sanity/schemas");
const sanity_1 = require("sanity");
const desk_1 = require("sanity/desk");
const config = sanity_1.defineConfig({
    // projectId: "l7zm0ilc",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    title: 'AI Solutions',
    apiVersion: '2023-03-09',
    token: process.env.SANITY_API_TOKEN,
    basePath: 'http://localhost:3333/admin',
    plugins: [desk_1.deskTool()],
    schema: { types: schemas_1.default },
});
exports.default = config;
//# sourceMappingURL=sanity.config.js.map