/* Custom cursor: a glossy yellow pebble that follows the mouse, squishes as it moves,
   and swells into a bigger pebble with a label over anything clickable.
   Used on every page. Only runs with a mouse; phones and tablets keep their normal touch.
   Change the pebble colour in PEBBLE below. */
(() => {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PEBBLE = { light: "#FBE38A", main: "#F2C84B", deep: "#D9A520", text: "#3A2A00" };

  // what the pebble says over each kind of element (first match wins)
  const LABELS = [
    ["[data-cursor]", ""],   // the element says its own label (e.g. tool icons show the app name)
    [".door", "Enter"],
    [".card, .window, .board, .frame:not(.empty)", "View"],
    [".hire-link, a[href^='mailto']", "Say hi"],
    [".social", "Visit"],
    [".back", "Back"],
    [".copy", "Copy"],
    [".x, #view-close", "Close"],
    ["summary", "Open"],
    ["a, button, [role='button']", "Click"]
  ];
  const INTERACTIVE = LABELS.map(l => l[0]).join(", ");

  const css = `
  body.cx-on, body.cx-on *{cursor:none !important}
  .cx{position:fixed; left:0; top:0; z-index:2147483000; pointer-events:none; will-change:transform}
  .cx.gone{opacity:0}
  .cx-peb{position:absolute; left:0; top:0; width:26px; height:22px; margin:-11px 0 0 -13px;
    border-radius:58% 42% 47% 53% / 55% 50% 50% 45%;
    background:
      radial-gradient(ellipse 46% 30% at 42% 26%, rgba(255,255,255,.95), rgba(255,255,255,.35) 55%, transparent 72%),
      radial-gradient(ellipse 18% 26% at 84% 34%, rgba(255,255,255,.75), transparent 70%),
      radial-gradient(ellipse at 40% 35%, ${PEBBLE.light}, ${PEBBLE.main} 55%, ${PEBBLE.deep} 100%);
    box-shadow:inset -2px -4px 6px rgba(150,95,0,.35), inset 2px 2px 4px rgba(255,255,255,.5), 0 6px 14px rgba(0,0,0,.35);
    transition:width .35s cubic-bezier(.3,1.5,.5,1), height .35s cubic-bezier(.3,1.5,.5,1), margin .35s cubic-bezier(.3,1.5,.5,1), border-radius .5s;
    display:grid; place-items:center; overflow:hidden}
  .cx-peb b{font:700 14px/1 Figtree, "Segoe UI", system-ui, sans-serif; color:${PEBBLE.text}; white-space:nowrap; opacity:0; transform:scale(.6); transition:opacity .2s, transform .3s}
  .cx.hover .cx-peb{width:92px; height:78px; margin:-39px 0 0 -46px; border-radius:56% 44% 50% 50% / 52% 46% 54% 48%}
  .cx.hover .cx-peb b{opacity:1; transform:none; transition-delay:.08s}
  .cx.long .cx-peb{width:128px; margin-left:-64px}
  .cx.down .cx-peb{width:20px; height:17px; margin:-8px 0 0 -10px}
  .cx.hover.down .cx-peb{width:80px; height:68px; margin:-34px 0 0 -40px}
  .cx-drop{position:fixed; left:0; top:0; z-index:2147482999; pointer-events:none; width:30px; height:26px; margin:-13px 0 0 -15px; border-radius:58% 42% 47% 53% / 55% 50% 50% 45%; border:2px solid ${PEBBLE.main}; animation:cxdrop .6s ease-out forwards}
  @keyframes cxdrop{to{scale:2.6; opacity:0}}`;
  const style = document.createElement("style"); style.textContent = css; document.head.appendChild(style);

  const el = document.createElement("div"); el.className = "cx gone"; el.setAttribute("aria-hidden", "true");
  el.innerHTML = `<div class="cx-peb"><b></b></div>`;
  document.body.appendChild(el);
  document.body.classList.add("cx-on");
  const peb = el.querySelector(".cx-peb"), label = peb.querySelector("b");

  let mx = -100, my = -100, x = -100, y = -100, vx = 0, vy = 0;
  addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY; el.classList.remove("gone");
    const t = e.target.closest ? e.target.closest(INTERACTIVE) : null;
    if (t) {
      let text = t.dataset.cursor || (LABELS.find(([s]) => s !== "[data-cursor]" && t.matches(s)) || [, "Click"])[1];
      if (t.tagName === "SUMMARY" && t.parentElement.open) text = "Close";
      label.textContent = text;
      el.classList.toggle("long", text.length > 8);
    }
    el.classList.toggle("hover", !!t);
  }, { passive: true });
  document.addEventListener("mouseleave", () => el.classList.add("gone"));
  addEventListener("mousedown", () => {
    el.classList.add("down");
    const d = document.createElement("span"); d.className = "cx-drop";
    d.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    document.body.appendChild(d); setTimeout(() => d.remove(), 650);
  });
  addEventListener("mouseup", () => el.classList.remove("down"));

  (function loop() {
    // a modal window sits above everything, so hand back the normal cursor while one is open
    const modal = !!document.querySelector("dialog[open]");
    document.body.classList.toggle("cx-on", !modal);
    el.style.display = modal ? "none" : "";
    const k = reduce ? 1 : 0.2;
    const nx = x + (mx - x) * k, ny = y + (my - y) * k;
    vx = nx - x; vy = ny - y; x = nx; y = ny;
    // squash and stretch in the direction of travel, like a soft pebble of jelly
    const speed = Math.min(Math.hypot(vx, vy), 40);
    const ang = Math.atan2(vy, vx) * 180 / Math.PI;
    const st = reduce ? 0 : speed / 40 * 0.45;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${ang}deg) scale(${1 + st}, ${1 - st * 0.6}) rotate(${-ang}deg)`;
    requestAnimationFrame(loop);
  })();
})();
