document.addEventListener("DOMContentLoaded", function() {
  const t = document.querySelectorAll(".busy-on");
  t.forEach(function(t) {
    t.addEventListener("click", function() {
      this.setAttribute("data-busy", "true")
    })
  })
});
jQuery(document).ready(function(e) {
  e(".woocommerce-error li:contains('You cannot add another')").parent().remove(), e(".woocommerce-message").each(function() {
    e(this).text().includes("has been added to your cart") && (e(this).addClass("success").find("a.button").remove(), e(this).wrapInner("<span></span>"))
  }), e("body").on("click", ".remove-item", function(t) {
    t.preventDefault();
    let o = e(this);
    o.closest("li.x-div").addClass("removing"), setTimeout(() => e("#cart-row").addClass("updating"), 500), setTimeout(() => window.location.href = o.attr("href"), 600)
  }), e("body").on("click", ".remove-coupon, .restore-item", function(t) {
    t.preventDefault(), e("#cart-row").addClass("updating"), setTimeout(() => window.location.href = e(this).attr("href"), 100)
  }), window.location.href.includes("removed_item=1") && setTimeout(() => e("[data-x-toggle-hash='stickz_side_cart']").click(), 1e3)
});
document.addEventListener("DOMContentLoaded", function() {
  const t3 = document.querySelectorAll(".busy-temp");
  t3.forEach(function(t3) {
    t3.addEventListener("click", function() {
      this.setAttribute("data-busy", "true");
      this.disabled = true;
      setTimeout(() => {
        this.removeAttribute("data-busy");
        this.disabled = false
      }, 2e3)
    })
  })
});