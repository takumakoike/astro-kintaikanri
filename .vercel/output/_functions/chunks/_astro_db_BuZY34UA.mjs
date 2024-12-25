import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_BD0m_WHa.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/koiketakuma/Documents/GitHub/astro-kintaikanri/astro@latest/src/layouts/Layout.astro", void 0);

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://free-killer-shrike-takumakoike.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN
});
const Users = asDrizzleTable("Users", { "columns": { "userId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userId", "collection": "Users", "primaryKey": true } }, "userName": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userName", "collection": "Users", "primaryKey": false, "optional": true } }, "userOccupation": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userOccupation", "collection": "Users", "primaryKey": false, "optional": true } }, "userEmproyeeType": { "type": "text", "schema": { "unique": false, "deprecated": true, "name": "userEmproyeeType", "collection": "Users", "primaryKey": false, "optional": true } }, "userEmployeeType": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userEmployeeType", "collection": "Users", "primaryKey": false, "optional": true } } }, "deprecated": false, "indexes": {} }, false);
asDrizzleTable("Works", { "columns": { "workerId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "workerId", "collection": "Works", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userId", "collection": "Users", "primaryKey": true } } } }, "workYear": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "workYear", "collection": "Works", "primaryKey": false, "optional": true } }, "workMonth": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "workMonth", "collection": "Works", "primaryKey": false, "optional": true } }, "workDate": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "workDate", "collection": "Works", "primaryKey": false, "optional": true } }, "workDetail": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "workDetail", "collection": "Works", "primaryKey": false, "optional": true } }, "workStartTime": { "type": "date", "schema": { "optional": true, "unique": false, "deprecated": false, "name": "workStartTime", "collection": "Works" } }, "workEndTime": { "type": "date", "schema": { "optional": true, "unique": false, "deprecated": false, "name": "workEndTime", "collection": "Works" } }, "workOverReason": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "workOverReason", "collection": "Works", "primaryKey": false, "optional": true } }, "workOverTime": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "workOverTime", "collection": "Works", "primaryKey": false, "optional": true } } }, "deprecated": false, "indexes": {} }, false);

export { $$Layout as $, Users as U, db as d };
