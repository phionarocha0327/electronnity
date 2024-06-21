jQuery(document).ready(function(t) {
  function n() {
    var n = t("#billing_state"),
      i = n.closest(".validate-state");
    n.find("option").length > 1 ? i.attr("style", "") : i.attr("style", "display: none;")
  }
  t("#billing_country").change(function() {
    setTimeout(n, 50)
  }), n()
});
document.addEventListener("DOMContentLoaded", () => {
  const t = document.querySelectorAll(".password-show-button");
  t.forEach(e => {
    e.addEventListener("click", () => {
      const t = e.parentElement.querySelector('input[type="password"], input[type="text"]');
      const n = e.querySelector(".password-show-icon");
      const c = e.querySelector(".password-show-tooltip");
      if (t.type === "password") {
        t.type = "text";
        n.textContent = e.dataset.iconShow;
        c.textContent = "Hide password"
      } else {
        t.type = "password";
        n.textContent = e.dataset.iconHide;
        c.textContent = "Show password"
      }
    })
  })
});

function r4(t4) {
  const o4 = /[a-zA-Z]/.test(t4);
  const s4 = /\d/.test(t4);
  const n4 = t4.length >= 8;
  return o4 && s4 && n4
}
document.addEventListener("DOMContentLoaded", () => {
  const s4 = document.getElementById("password_1");
  const t4 = document.querySelector(".password-requirements");
  const n4 = t4.querySelector(".characters");
  const e4 = t4.querySelector(".letter");
  const c4 = t4.querySelector(".number");

  function d4(t4, o4) {
    const s4 = t4.querySelector(".requirements-icon");
    s4.textContent = o4 ? "" : "";
    s4.classList.toggle("valid", o4);
    s4.classList.toggle("not-valid", !o4)
  }
  s4.addEventListener("input", () => {
    const t4 = s4.value;
    const o4 = r4(t4);
    if (t4) {
      d4(n4, t4.length >= 8);
      d4(e4, /[a-zA-Z]/.test(t4));
      d4(c4, /\d/.test(t4))
    } else {
      [n4, e4, c4].forEach(t4 => {
        const o4 = t4.querySelector(".requirements-icon");
        o4.textContent = "";
        o4.classList.remove("valid", "not-valid")
      })
    }
    s4.setCustomValidity(o4 ? "" : "Password does not meet the requirements.")
  })
});