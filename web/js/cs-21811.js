const i5 = document.querySelectorAll(".l-menu-link");

    function e5() {
      if (0 === i5.length) return;
      let t = i5[0].classList.contains("x-active"),
        e = Array.from(i5).some(t => t.classList.contains("x-currently-active"));
      e || t ? e && t && i5[0].classList.remove("x-active") : i5[0].classList.add("x-active")
    }
    const n5 = new MutationObserver(t => {
      t.forEach(t => {
        "attributes" === t.type && "class" === t.attributeName && e5()
      })
    });
    i5.forEach(t => n5.observe(t, {
      attributes: !0
    })), e5();