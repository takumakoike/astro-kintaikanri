/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BD0m_WHa.mjs';
import 'kleur/colors';
import { d as db, U as Users, $ as $$Layout } from '../chunks/_astro_db_BuZY34UA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await db.select().from(Users);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/staffregister">スタッフ登録</a> ` })}`;
}, "/Users/koiketakuma/Documents/GitHub/astro-kintaikanri/astro@latest/src/pages/index.astro", void 0);

const $$file = "/Users/koiketakuma/Documents/GitHub/astro-kintaikanri/astro@latest/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
