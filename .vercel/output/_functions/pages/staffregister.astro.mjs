/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BD0m_WHa.mjs';
import 'kleur/colors';
import { d as db, U as Users, $ as $$Layout } from '../chunks/_astro_db_BuZY34UA.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Staffregister = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Staffregister;
  let staffCount = 1;
  let users;
  users = await db.select().from(Users);
  staffCount += users.length;
  staffCount = staffCount.toString();
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const userId = formData.get("staffid")?.toString() ?? staffCount.toString();
    const userName = formData.get("staffname")?.toString() ?? "";
    const userOccupation = formData.get("staffoccupation")?.toString() ?? "";
    const userEmployeeType = formData.get("staffemptype")?.toString() ?? "full-worker";
    if (userName && userOccupation) {
      await db.insert(Users).values({
        userId,
        userName,
        userOccupation,
        userEmployeeType
      });
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-gr27zl52": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-gr27zl52>スタッフ登録ページ</h1> <form action="" method="POST" enctype="multipart/form-data" data-astro-cid-gr27zl52> <div class="form_staffId" data-astro-cid-gr27zl52> <label for="staffid" data-astro-cid-gr27zl52>スタッフID</label> <input type="text" id="staffid" name="staffid"${addAttribute(staffCount, "placeholder")}${addAttribute(staffCount, "value")} disabled data-astro-cid-gr27zl52> </div> <div class="form_staffName" data-astro-cid-gr27zl52> <label for="staffname" data-astro-cid-gr27zl52>スタッフ氏名</label> <input type="text" id="staffname" name="staffname" data-astro-cid-gr27zl52> </div> <div class="form_staffOccupation" data-astro-cid-gr27zl52> <label for="staffoccumpation" data-astro-cid-gr27zl52>職種</label> <input type="text" id="staffoccupation" name="staffoccupation" data-astro-cid-gr27zl52> </div> <div class="form_staffEmpType" data-astro-cid-gr27zl52> <label for="staffemptype" data-astro-cid-gr27zl52>雇用形態</label> <select name="staffemptype" id="staffemptype" data-astro-cid-gr27zl52> <option value="full-worker" data-astro-cid-gr27zl52>正社員</option> <option value="partTime-worker" data-astro-cid-gr27zl52>パートタイマー</option> <option value="other-worker" data-astro-cid-gr27zl52>その他</option> </select> </div> <button type="submit" data-astro-cid-gr27zl52>登録</button> </form> ` })} `;
}, "/Users/koiketakuma/Documents/GitHub/astro-kintaikanri/astro@latest/src/pages/staffregister.astro", void 0);

const $$file = "/Users/koiketakuma/Documents/GitHub/astro-kintaikanri/astro@latest/src/pages/staffregister.astro";
const $$url = "/staffregister";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Staffregister,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
