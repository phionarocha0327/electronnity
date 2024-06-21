(() => {
    var Ii = Object.create;
    var ue = Object.defineProperty;
    var Pi = Object.getOwnPropertyDescriptor;
    var Mi = Object.getOwnPropertyNames;
    var Hi = Object.getPrototypeOf,
        zi = Object.prototype.hasOwnProperty;
    var $i = (t) => ue(t, "__esModule", { value: !0 });
    var Ri = (t, e) => () => (
            e || t((e = { exports: {} }).exports, e), e.exports
        ),
        Qe = (t, e) => {
            for (var n in e) ue(t, n, { get: e[n], enumerable: !0 });
        },
        _i = (t, e, n, r) => {
            if ((e && typeof e == "object") || typeof e == "function")
                for (let o of Mi(e))
                    !zi.call(t, o) &&
                        (n || o !== "default") &&
                        ue(t, o, {
                            get: () => e[o],
                            enumerable: !(r = Pi(e, o)) || r.enumerable,
                        });
            return t;
        },
        qi = (t, e) =>
            _i(
                $i(
                    ue(
                        t != null ? Ii(Hi(t)) : {},
                        "default",
                        !e && t && t.__esModule
                            ? { get: () => t.default, enumerable: !0 }
                            : { value: t, enumerable: !0 }
                    )
                ),
                t
            );
    var vr = Ri(() => {
        Array.prototype.flat ||
            Object.defineProperty(Array.prototype, "flat", {
                configurable: !0,
                value: function t() {
                    var e = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
                    return e
                        ? Array.prototype.reduce.call(
                              this,
                              function (n, r) {
                                  return (
                                      Array.isArray(r)
                                          ? n.push.apply(n, t.call(r, e - 1))
                                          : n.push(r),
                                      n
                                  );
                              },
                              []
                          )
                        : Array.prototype.slice.call(this);
                },
                writable: !0,
            }),
            Array.prototype.flatMap ||
                Object.defineProperty(Array.prototype, "flatMap", {
                    configurable: !0,
                    value: function (t) {
                        return Array.prototype.map
                            .apply(this, arguments)
                            .flat();
                    },
                    writable: !0,
                });
    });
    var Ln = {};
    Qe(Ln, {
        attach: () => b,
        debug: () => Qt,
        defineRivetArchetype: () => st,
        drive: () => Zt,
        registerAction: () => yt,
        registerBehavior: () => vt,
        registerEvent: () => F,
        registerInnate: () => Jt,
        registerMacro: () => Cn,
        registerObserver: () => et,
        store: () => J,
        util: () => S,
    });
    var S = {};
    Qe(S, {
        NON_PASSIVE_ARGS: () => Ft,
        PASSIVE_ARGS: () => H,
        SCROLLBAR_ACTIVE_VAR_NAME: () => Yt,
        SCROLLBAR_ACTIVE_VAR_STRING: () => gn,
        SCROLLBAR_VAR_NAME: () => hn,
        SCROLLBAR_VAR_STRING: () => Gs,
        absVector: () => Qi,
        addClass: () => ms,
        addVectors: () => Yi,
        animateToElement: () => Ys,
        animateTopOffset: () => Us,
        appendHtmlString: () => vs,
        balanceFromDifference: () => es,
        ceil: () => Fi,
        clamp: () => qt,
        clampVector: () => Ui,
        debounce: () => bt,
        defer: () => ns,
        dispatch: () => Cs,
        distanceInRange: () => Ze,
        divideVectors: () => Xi,
        doOnce: () => dn,
        elementAttributes: () => St,
        elementIndex: () => ys,
        elementIsVisibleInViewport: () => Ir,
        elementMeta: () => sn,
        ensureNumber: () => X,
        ensureString: () => _t,
        evaluateCondition: () => oa,
        expandElementValue: () => ht,
        farthest: () => xs,
        floor: () => Wi,
        fontCompress: () => Hs,
        forceOpaque: () => Zs,
        getCachedAttribute: () => Tt,
        getCachedJsonAttribute: () => Ls,
        getDurations: () => pn,
        getEasing: () => pt,
        getJsonAttrContent: () => en,
        getOuterHeight: () => Ss,
        getPrecisionLength: () => Ni,
        getPrecisionLengthWithCommas: () => Vi,
        getStateValue: () => zr,
        getTransitionDuration: () => Fs,
        getTransitionTimingMS: () => Ts,
        hasClass: () => Bt,
        intersect: () => Ds,
        isMobile: () => fn,
        isScalar: () => Di,
        lerp: () => ts,
        listener: () => tt,
        listenerPassive: () => G,
        lockMotion: () => Mr,
        makeAlternatingSynchronizer: () => Bs,
        makeDirectionalEasing: () => ps,
        makeElementWeakMap: () => Vt,
        makeFindClosest: () => rn,
        makeGetComputedFloatValues: () => Ms,
        makeGetComputedStyle: () => Ps,
        makeGetComputedStyles: () => un,
        makeMotionLockedUpdate: () => Hr,
        makeRafLoop: () => ye,
        makeSortByKey: () => Bi,
        makeStateSynchronizer: () => Lr,
        makeTreeWalker: () => pe,
        memoize: () => Xe,
        multiplyVectors: () => Ki,
        normalizeCondition: () => wn,
        normalizeTeardown: () => Nt,
        offsetFromTop: () => me,
        onLoad: () => U,
        onPageVisibilityChange: () => on,
        onPercentScrolled: () => Os,
        onResize: () => Gt,
        onResizeOrScan: () => ge,
        onScan: () => he,
        onScanLazy: () => Is,
        onScroll: () => an,
        onScrollOrResize: () => br,
        onScrollRaw: () => cn,
        onViewportChange: () => Sr,
        once: () => xr,
        oncePassive: () => Wt,
        parseHTML: () => nn,
        parseTime: () => mt,
        removeClass: () => hs,
        rivetDispatch: () => Es,
        rivetListener: () => As,
        round: () => dr,
        roundVector: () => Ji,
        runAnimation: () => Ks,
        scrollOffset: () => bs,
        scrollingDisable: () => js,
        scrollingEnable: () => Qs,
        siblings: () => yr,
        subtractVectors: () => Zi,
        teardown: () => Q,
        throttle: () => Ke,
        toggleClass: () => gs,
        triggerScan: () => ks,
        tween: () => Vs,
        unwrapHtmlTemplate: () => ws,
        updateStateKey: () => na,
        vectorsEq: () => ji,
        watchElementIsVisible: () => Js,
        waypoint: () => $s,
        wrapNumber: () => Je,
        wrapVector: () => Gi,
    });
    function X(t) {
        if (typeof t == "function") return X(t());
        if (typeof t == "number") return t;
        let e = Number.parseFloat(t);
        return Number.isNaN(e) ? 0 : e;
    }
    var _t = (t) =>
        typeof t == "function" ? _t(t()) : typeof t == "string" ? t : "";
    function Di(t) {
        var e = typeof t;
        return (
            e === "string" ||
            e === "number" ||
            e === "boolean" ||
            e === "symbol" ||
            t == null ||
            t instanceof Symbol ||
            t instanceof String ||
            t instanceof Number ||
            t instanceof Boolean
        );
    }
    var Bi = (t) => (e, n) => e[t] - n[t];
    var Fi = (t, e = 100) => Math.ceil(t * e) / e,
        Wi = (t, e = 100) => Math.floor(t * e) / e,
        dr = (t, e = 100) => Math.round((t + Number.EPSILON) * e) / e,
        Ni = (t) => {
            var e, n;
            return (n =
                (e = t.toString().split(/\./)[1]) == null
                    ? void 0
                    : e.length) != null
                ? n
                : 0;
        },
        Vi = (t) => {
            var e, n;
            return (n =
                (e = t.toString().split(/,/)[1]) == null ? void 0 : e.length) !=
                null
                ? n
                : 0;
        },
        Je = (t, e) => (e + t) % e,
        Gi = ([t, e], [n, r]) => [Je(t, n), Je([e, r])],
        qt = (t, e, n) => Math.min(Math.max(t, e), n),
        Ui = ([t, e], n, r) => [qt(t, n, r), qt(e, n, r)],
        Yi = ([t, e], [n, r]) => [t + n, e + r],
        ji = ([t, e], [n, r]) => t === n && e === r,
        Qi = (t) => t.map(Math.abs),
        Ji = (t, e) => t.map((n) => dr(n, e)),
        Zi = ([t, e], [n, r]) => [t - n, e - r],
        Ki = ([t, e], [n, r]) => [t * n, e * r],
        Xi = ([t, e], [n, r]) => [t / n, e / r],
        Ze = (t, e, n) => (t - e + n) % n,
        ts = (t, e, n) => t + n * (e - t),
        es = (t, e, n) => {
            let r = Ze(t, e, n),
                o = Ze(e, t, n);
            return r === o ? 0 : r > o ? -1 : 1;
        };
    function ns(t) {
        return setTimeout(t, 0);
    }
    function Ke(t, e, n = {}) {
        var r = !0,
            o = !0;
        return (
            (r = "leading" in n ? !!n.leading : r),
            (o = "trailing" in n ? !!n.trailing : o),
            bt(t, e, { leading: r, maxWait: e, trailing: o })
        );
    }
    function bt(t, e = 0, n = {}) {
        var r,
            o,
            i,
            s,
            a,
            c,
            u = 0,
            p = !1,
            f = !1,
            d = !0;
        (p = !!n.leading),
            (f = "maxWait" in n),
            (i = f ? Math.max(n.maxWait || 0, e) : i),
            (d = "trailing" in n ? !!n.trailing : d);
        function l(x) {
            var T = r,
                E = o;
            return (r = o = void 0), (u = x), (s = t.apply(E, T)), s;
        }
        function m(x) {
            return (u = x), (a = setTimeout(g, e)), p ? l(x) : s;
        }
        function h(x) {
            var T = x - c,
                E = x - u,
                q = e - T;
            return f ? Math.min(q, i - E) : q;
        }
        function y(x) {
            var T = x - c,
                E = x - u;
            return c === void 0 || T >= e || T < 0 || (f && E >= i);
        }
        function g() {
            var x = window.Date.now();
            if (y(x)) return v(x);
            a = setTimeout(g, h(x));
        }
        function v(x) {
            return (a = void 0), d && r ? l(x) : ((r = o = void 0), s);
        }
        function w() {
            a !== void 0 && clearTimeout(a), (u = 0), (r = c = o = a = void 0);
        }
        function C() {
            return a === void 0 ? s : v(window.Date.now());
        }
        function L() {
            var x = window.Date.now(),
                T = y(x);
            if (((r = arguments), (o = this), (c = x), T)) {
                if (a === void 0) return m(c), () => void w();
                if (f)
                    return (
                        clearTimeout(a),
                        (a = setTimeout(g, e)),
                        l(c),
                        () => void w()
                    );
            }
            return a === void 0 && (a = setTimeout(g, e)), () => void w();
        }
        return (L.cancel = w), (L.flush = C), L;
    }
    function Xe(t, e) {
        let n = new Map();
        return function (...r) {
            let o = e ? e.apply(this, r) : r[0];
            if (n.has(o)) return n.get(o);
            let i = t.apply(this, r);
            return n.set(o, i), i;
        };
    }
    var rs = 4,
        os = 0.001,
        is = 1e-7,
        ss = 10,
        Dt = 11,
        fe = 1 / (Dt - 1),
        as = typeof Float32Array == "function";
    function pr(t, e) {
        return 1 - 3 * e + 3 * t;
    }
    function mr(t, e) {
        return 3 * e - 6 * t;
    }
    function hr(t) {
        return 3 * t;
    }
    function de(t, e, n) {
        return ((pr(e, n) * t + mr(e, n)) * t + hr(e)) * t;
    }
    function gr(t, e, n) {
        return 3 * pr(e, n) * t * t + 2 * mr(e, n) * t + hr(e);
    }
    function cs(t, e, n, r, o) {
        var i,
            s,
            a = 0;
        do
            (s = e + (n - e) / 2),
                (i = de(s, r, o) - t),
                i > 0 ? (n = s) : (e = s);
        while (Math.abs(i) > is && ++a < ss);
        return s;
    }
    function ls(t, e, n, r) {
        for (var o = 0; o < rs; ++o) {
            var i = gr(e, n, r);
            if (i === 0) return e;
            var s = de(e, n, r) - t;
            e -= s / i;
        }
        return e;
    }
    function us(t) {
        return t;
    }
    function tn(t, e, n, r) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
        if (t === e && n === r) return us;
        for (
            var o = as ? new Float32Array(Dt) : new Array(Dt), i = 0;
            i < Dt;
            ++i
        )
            o[i] = de(i * fe, t, n);
        function s(a) {
            for (var c = 0, u = 1, p = Dt - 1; u !== p && o[u] <= a; ++u)
                c += fe;
            --u;
            var f = (a - o[u]) / (o[u + 1] - o[u]),
                d = c + f * fe,
                l = gr(d, t, n);
            return l >= os
                ? ls(a, d, t, n)
                : l === 0
                ? d
                : cs(a, c, c + fe, t, n);
        }
        return function (c) {
            return c === 0 || c === 1 ? c : de(s(c), e, r);
        };
    }
    var fs = (t) => {
            switch (t) {
                case "linear":
                    return "cubic-bezier(0.0, 0.0, 1.0, 1.0)";
                case "ease-in":
                    return "cubic-bezier(0.42, 0, 1.0, 1.0)";
                case "ease-out":
                    return "cubic-bezier(0, 0, 0.58, 1.0)";
                case "ease-in-out":
                    return "cubic-bezier(0.42, 0, 0.58, 1.0)";
                case "ease":
                default:
                    return "cubic-bezier(0.25, 0.1, 0.25, 1.0)";
            }
        },
        O = Xe((t) => {
            let e = fs(t);
            try {
                let [, n] = e.match(/cubic-bezier\((.*)\)/);
                return tn(...n.split(",").map((r) => Number(r.trim())));
            } catch {
                console.warn("unable to parse easing function", e);
            }
            return O("ease");
        }),
        ds = {
            easeInQuad: O("cubic-bezier(0.550, 0.085, 0.680, 0.530)"),
            easeInCubic: O("cubic-bezier(0.550, 0.055, 0.675, 0.190)"),
            easeInQuart: O("cubic-bezier(0.895, 0.030, 0.685, 0.220)"),
            easeInQuint: O("cubic-bezier(0.755, 0.050, 0.855, 0.060)"),
            easeInSine: O("cubic-bezier(0.470, 0.000, 0.745, 0.715)"),
            easeInExpo: O("cubic-bezier(0.950, 0.050, 0.795, 0.035)"),
            easeInCirc: O("cubic-bezier(0.600, 0.040, 0.980, 0.335)"),
            easeInBack: O("cubic-bezier(0.600, -0.280, 0.735, 0.045)"),
            easeOutQuad: O("cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            easeOutCubic: O("cubic-bezier(0.215, 0.610, 0.355, 1.000)"),
            easeOutQuart: O("cubic-bezier(0.165, 0.840, 0.440, 1.000)"),
            easeOutQuint: O("cubic-bezier(0.230, 1.000, 0.320, 1.000)"),
            easeOutSine: O("cubic-bezier(0.390, 0.575, 0.565, 1.000)"),
            easeOutExpo: O("cubic-bezier(0.190, 1.000, 0.220, 1.000)"),
            easeOutCirc: O("cubic-bezier(0.075, 0.820, 0.165, 1.000)"),
            easeOutBack: O("cubic-bezier(0.175, 0.885, 0.320, 1.275)"),
            easeInOutQuad: O("cubic-bezier(0.455, 0.030, 0.515, 0.955)"),
            easeInOutCubic: O("cubic-bezier(0.645, 0.045, 0.355, 1.000)"),
            easeInOutQuart: O("cubic-bezier(0.770, 0.000, 0.175, 1.000)"),
            easeInOutQuint: O("cubic-bezier(0.860, 0.000, 0.070, 1.000)"),
            easeInOutSine: O("cubic-bezier(0.445, 0.050, 0.550, 0.950)"),
            easeInOutExpo: O("cubic-bezier(1.000, 0.000, 0.000, 1.000)"),
            easeInOutCirc: O("cubic-bezier(0.785, 0.135, 0.150, 0.860)"),
            easeInOutBack: O("cubic-bezier(0.680, -0.550, 0.265, 1.550)"),
            materialStand: O("cubic-bezier(0.400, 0.000, 0.200, 1.000)"),
            materialDecel: O("cubic-bezier(0.000, 0.000, 0.200, 1.000)"),
            materialAccel: O("cubic-bezier(0.400, 0.000, 1.000, 1.000)"),
            materialSharp: O("cubic-bezier(0.400, 0.000, 0.600, 1.000)"),
        };
    function pt(t) {
        return ds[t] || O(t);
    }
    var ps = (t) => {
        let e = pt(t);
        return (n) => {
            let r = (-1 * n + 1) / 2,
                o = Math.min(1, Math.max(0, r));
            return (e(o) - 0.5) * 2;
        };
    };
    var Bt = (t, e) => {
            var n;
            return (n = t == null ? void 0 : t.classList) == null
                ? void 0
                : n.contains(e);
        },
        ms = (t, e) => {
            var n;
            return (n = t == null ? void 0 : t.classList) == null
                ? void 0
                : n.add(e);
        },
        hs = (t, e) => {
            var n;
            return (n = t == null ? void 0 : t.classList) == null
                ? void 0
                : n.remove(e);
        },
        gs = (t, e, n) => {
            var r;
            return (r = t == null ? void 0 : t.classList) == null
                ? void 0
                : r.toggle(e, n);
        };
    function ys(t) {
        if (!t) return -1;
        for (var e = 0; (t = t.previousElementSibling); ) e++;
        return e;
    }
    function en(t, e) {
        let n = t.getAttribute(e);
        if (n === null) return {};
        if (typeof n == "string")
            try {
                return JSON.parse(n);
            } catch {
                try {
                    return JSON.parse(n.replace(/&quot;/g, '"'));
                } catch {}
            }
        return n;
    }
    var nn = (t) => {
            let e = document.implementation.createHTMLDocument("");
            return (e.body.innerHTML = t), e.body.children;
        },
        vs = (t, e) => {
            Array.from(nn(e)).forEach((n) => {
                t.append(n);
            });
        },
        ws = (t) => {
            Array.from(nn(t.innerHTML)).forEach((e) => {
                t.insertAdjacentElement("afterend", e);
            }),
                t.remove();
        };
    function xs(t, e) {
        let n = t,
            r;
        for (; n && n.parentElement; )
            (n = n.parentElement.closest(e)), n && (r = n);
        return r;
    }
    var yr = (t) =>
            t && t.parentElement
                ? Array.from(t.parentElement.children).filter((e) => e !== t)
                : [],
        pe = (t, e) => (n) => {
            let r = new Set(),
                o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: () => NodeFilter.FILTER_ACCEPT,
                });
            for (; o.nextNode(); )
                if (t(o.currentNode)) {
                    if (e) return o.currentNode;
                    r.add(o.currentNode);
                }
            return e ? null : Array.from(r);
        },
        me = (t) =>
            t
                ? t.offsetParent
                    ? t.offsetTop + me(t.offsetParent)
                    : t.offsetTop
                : 0,
        bs = (t) => {
            let e = t.getBoundingClientRect(),
                { top: n, left: r, height: o } = e;
            return {
                top: n + window.scrollY,
                bottom: n + o + window.scrollY,
                left: r + window.scrollX,
            };
        },
        Ss = (t) => {
            var o;
            if (!t) return 0;
            let e = Math.max(t.scrollHeight, t.offsetHeight),
                n = (o = t.getAttribute("style")) != null ? o : "";
            (t.style.display = "block"),
                (t.style.position = "absolute"),
                (t.style.visibility = "hidden");
            let r = Math.max(0, e, t.scrollHeight, t.offsetHeight);
            return t.setAttribute("style", n), r;
        },
        rn = (t) => {
            let e = pe(t, !0),
                n = (o) => {
                    let i = o;
                    for (; i; ) {
                        if (t(i)) return i;
                        i = i.parentElement;
                    }
                },
                r = (o) => {
                    let i = o;
                    for (; i; ) {
                        let s;
                        if ((yr(i).find((a) => ((s = t(a) ? a : e(a)), s)), s))
                            return s;
                        i = i.parentElement;
                    }
                };
            return (o) => n(o) || r(o) || null;
        };
    function Ts(t) {
        if (!t) return 0;
        let n = window.getComputedStyle(t)["transition-duration"] || "";
        return parseFloat(n.replace("s", "")) * 1e3;
    }
    Promise.resolve().then(() => qi(vr()));
    var wr = "rvt",
        H = { passive: !0 },
        Ft = { passive: !1 };
    function As(t, e, n) {
        return tt(t, `${wr}-${e}`, n);
    }
    function Es(t, e) {
        t.dispatchEvent(new CustomEvent(`${wr}-${e}`));
    }
    function Cs(t, e, n = {}, r = !0) {
        t.dispatchEvent(new CustomEvent(e), { bubbles: r, detail: n });
    }
    function tt(t, e, n, r = {}) {
        return t
            ? (typeof r.passive == "undefined" && (r.passive = !1),
              t.addEventListener(e, n, r),
              () => void t.removeEventListener(e, n, r))
            : () => {};
    }
    function G(t, e, n) {
        return tt(t, e, n, H);
    }
    function U(t) {
        let e = () => void t();
        return document.readyState === "complete"
            ? (e(), () => {})
            : G(document, "readystatechange", function () {
                  document.readyState === "complete" && setTimeout(e, 0);
              });
    }
    function xr(t, e, n, r = Ft) {
        let o = function () {
            t.removeEventListener(e, o), n();
        };
        return (
            t.addEventListener(e, o, r), () => void t.removeEventListener(e, o)
        );
    }
    function Wt(t, e, n) {
        return xr(t, e, n, H);
    }
    var Nt = (t) =>
            (Array.isArray(t) ? t.map(Nt) : [t])
                .flat()
                .filter((e) => typeof e == "function"),
        Q = (t) => {
            let e = Nt(t);
            return () => e.forEach((n) => n());
        },
        on = (t, e) => (
            e && t(document.visibilityState === "visible"),
            Q([
                tt(window, "pagehide", () => {
                    t(!1);
                }),
                tt(window.document, "visibilitychange", () => {
                    t(document.visibilityState === "visible");
                }),
            ])
        );
    function D(t, e) {
        let n,
            r = null;
        return function (o) {
            if (n) {
                r = o;
                return;
            }
            n = setTimeout(function () {
                t(r), (n = null);
            }, e);
        };
    }
    var Vt = (t = {}) => {
            let e,
                n = () => {
                    e = new WeakMap();
                },
                r = (c) => e.has(c),
                o = (c) => e.delete(c),
                i = (c) => (e.has(c) ? e.get(c) : t),
                s = (c, u) => void e.set(c, u),
                a = (c, u) => void s(c, u(i(c)));
            return (
                n(),
                {
                    get: i,
                    del: o,
                    set: s,
                    has: r,
                    update: a,
                    reset: n,
                    cache: () => e,
                }
            );
        },
        sn = Vt(),
        St = Vt();
    function Tt(t, e) {
        return (
            St.has(t) || St.set(t, new Map()),
            St.get(t).has(e) || St.get(t).set(e, en(t, e)),
            St.get(t).get(e)
        );
    }
    function Ls(t, e) {
        if (!t) return {};
        let n = Tt(t, e);
        return typeof n == "object" ? n : {};
    }
    var ks = () => window.dispatchEvent(new CustomEvent("rvt-scan")),
        he = (t) => tt(window, "rvt-scan", () => t()),
        Gt = (t, e = !1) => {
            e && t();
            let n = D(t, 100);
            return Q([
                G(window, "resize", n, H),
                tt(screen.orientation, "change", n),
            ]);
        },
        an = (t, e = !1) => {
            e && t();
            let n = D(t, 40);
            return G(window, "scroll", n);
        },
        cn = (t, e = !1) => (e && t(), G(window, "scroll", t)),
        br = (t, e = !1) => Q([an(t, e), ge(t, e)]),
        ge = (t, e) => Q([he(t), Gt(t, e)]),
        Sr = (t, e) => Q([he(t), U(t), on(t, !1), Gt(t, e)]),
        Os = (t, e, n = !1) => {
            let r,
                o,
                i = br(() => {
                    let s = document.body.offsetHeight,
                        c =
                            1 -
                                (s - (window.scrollY + window.innerHeight)) /
                                    s >=
                            t;
                    c !== o && (e(c), c && n && ((r = !0), i()), (o = c));
                }, !0);
            return () => {
                r || i();
            };
        },
        Is = (t, { throttle: e = 50 } = {}) => {
            let n,
                o = Ke(
                    () => {
                        n = requestAnimationFrame(() => void t());
                    },
                    e,
                    { trailing: !0 }
                ),
                i = bt(o, 450);
            return [U(i), Gt(i), he(o), () => cancelAnimationFrame(n)];
        },
        ln,
        Tr;
    Sr(() => {
        (ln = new WeakMap()), (Tr = new WeakMap());
    }, !0);
    an(() => {
        Tr = new WeakMap();
    }, !0);
    var Ar = (t) => {
        let e = ln.get(t);
        return e || ((e = new WeakMap()), ln.set(t, e)), e;
    };
    function un(t, e) {
        let n = function (r) {
            let o = Ar(n).get(r);
            if (!o) {
                let i = getComputedStyle(r);
                (o = t.reduce(
                    (s, a) => (
                        (s[a] = typeof e == "function" ? e(i[a], a) : i[a]), s
                    ),
                    {}
                )),
                    Ar(n).set(r, o);
            }
            return o;
        };
        return n;
    }
    function Ps(t) {
        let e = un([t]);
        return (n) => e(n)[t];
    }
    function Ms(t) {
        return un(t, (e) => parseFloat(e));
    }
    function Hs(
        t,
        {
            c: e = 1,
            min: n = Number.NEGATIVE_INFINITY,
            max: r = Number.POSITIVE_INFINITY,
        }
    ) {
        let o = X(n),
            i = X(r);
        return Gt(() => {
            let s = qt(
                parseFloat(getComputedStyle(t, null).width) / (e * 10),
                o,
                i
            );
            t.style.setProperty("font-size", `${s}px`);
        }, !0);
    }
    var zs = "ontouchstart" in document.documentElement;
    function fn() {
        return window.innerWidth <= 978.98 && zs;
    }
    var Er = 0,
        At = {};
    function A(t) {
        if (!t) throw new Error("No options passed to Waypoint constructor");
        if (!t.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!t.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + Er),
            (this.options = A.Adapter.extend({}, A.defaults, t)),
            (this.element = this.options.element),
            (this.adapter = new A.Adapter(this.element)),
            (this.callback = t.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = A.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
            })),
            (this.context = A.Context.findOrCreateByElement(
                this.options.context
            )),
            A.offsetAliases[this.options.offset] &&
                (this.options.offset = A.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            (At[this.key] = this),
            (Er += 1);
    }
    A.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t);
    };
    A.prototype.trigger = function (t) {
        !this.enabled || (this.callback && this.callback.apply(this, t));
    };
    A.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete At[this.key];
    };
    A.prototype.disable = function () {
        return (this.enabled = !1), this;
    };
    A.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
    };
    A.prototype.next = function () {
        return this.group.next(this);
    };
    A.prototype.previous = function () {
        return this.group.previous(this);
    };
    A.invokeAll = function (t) {
        var e = [];
        for (var n in At) e.push(At[n]);
        for (var r = 0, o = e.length; r < o; r++) e[r][t]();
    };
    A.destroyAll = function () {
        A.invokeAll("destroy");
    };
    A.disableAll = function () {
        A.invokeAll("disable");
    };
    A.enableAll = function () {
        A.Context.refreshAll();
        for (var t in At) At[t].enabled = !0;
        return this;
    };
    A.refreshAll = function () {
        A.Context.refreshAll();
    };
    A.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
    };
    A.viewportWidth = function () {
        return document.documentElement.clientWidth;
    };
    A.adapters = [];
    A.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
    };
    A.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth();
        },
    };
    (function () {
        "use strict";
        var t = 0,
            e = {},
            n = window.onload;
        function r(o) {
            (this.element = o),
                (this.Adapter = A.Adapter),
                (this.adapter = new this.Adapter(o)),
                (this.key = "waypoint-context-" + t),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = {
                    x: this.adapter.scrollLeft(),
                    y: this.adapter.scrollTop(),
                }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (o.waypointContextKey = this.key),
                (e[o.waypointContextKey] = this),
                (t += 1),
                A.windowContext ||
                    ((A.windowContext = !0), (A.windowContext = new r(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        (r.prototype.add = function (o) {
            var i = o.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[i][o.key] = o), this.refresh();
        }),
            (r.prototype.checkEmpty = function () {
                var o = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    i = this.Adapter.isEmptyObject(this.waypoints.vertical),
                    s = this.element == this.element.window;
                o &&
                    i &&
                    !s &&
                    (this.adapter.off(".waypoints"), delete e[this.key]);
            }),
            (r.prototype.createThrottledResizeHandler = function () {
                var o = this;
                function i() {
                    o.handleResize(), (o.didResize = !1);
                }
                this.adapter.on("resize.waypoints", function () {
                    o.didResize ||
                        ((o.didResize = !0), requestAnimationFrame(i));
                });
            }),
            (r.prototype.createThrottledScrollHandler = function () {
                var o = this;
                function i() {
                    o.handleScroll(), (o.didScroll = !1);
                }
                this.adapter.on("scroll.waypoints", function () {
                    (!o.didScroll || A.isTouch) &&
                        ((o.didScroll = !0), requestAnimationFrame(i));
                });
            }),
            (r.prototype.handleResize = function () {
                A.Context.refreshAll();
            }),
            (r.prototype.handleScroll = function () {
                var o = {},
                    i = {
                        horizontal: {
                            newScroll: this.adapter.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                        },
                        vertical: {
                            newScroll: this.adapter.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                        },
                    };
                for (var s in i) {
                    var a = i[s],
                        c = a.newScroll > a.oldScroll,
                        u = c ? a.forward : a.backward;
                    for (var p in this.waypoints[s]) {
                        var f = this.waypoints[s][p];
                        if (f.triggerPoint !== null) {
                            var d = a.oldScroll < f.triggerPoint,
                                l = a.newScroll >= f.triggerPoint,
                                m = d && l,
                                h = !d && !l;
                            (m || h) &&
                                (f.queueTrigger(u), (o[f.group.id] = f.group));
                        }
                    }
                }
                for (var y in o) o[y].flushTriggers();
                this.oldScroll = {
                    x: i.horizontal.newScroll,
                    y: i.vertical.newScroll,
                };
            }),
            (r.prototype.innerHeight = function () {
                return this.element == this.element.window
                    ? A.viewportHeight()
                    : this.adapter.innerHeight();
            }),
            (r.prototype.remove = function (o) {
                delete this.waypoints[o.axis][o.key], this.checkEmpty();
            }),
            (r.prototype.innerWidth = function () {
                return this.element == this.element.window
                    ? A.viewportWidth()
                    : this.adapter.innerWidth();
            }),
            (r.prototype.destroy = function () {
                var o = [];
                for (var i in this.waypoints)
                    for (var s in this.waypoints[i])
                        o.push(this.waypoints[i][s]);
                for (var a = 0, c = o.length; a < c; a++) o[a].destroy();
            }),
            (r.prototype.refresh = function () {
                var o = this.element == this.element.window,
                    i = o ? void 0 : this.adapter.offset(),
                    s = {},
                    a;
                this.handleScroll(),
                    (a = {
                        horizontal: {
                            contextOffset: o ? 0 : i.left,
                            contextScroll: o ? 0 : this.oldScroll.x,
                            contextDimension: this.innerWidth(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left",
                        },
                        vertical: {
                            contextOffset: o ? 0 : i.top,
                            contextScroll: o ? 0 : this.oldScroll.y,
                            contextDimension: this.innerHeight(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top",
                        },
                    });
                for (var c in a) {
                    var u = a[c];
                    for (var p in this.waypoints[c]) {
                        var f = this.waypoints[c][p],
                            d = f.options.offset,
                            l = f.triggerPoint,
                            m = 0,
                            h = l == null,
                            y,
                            g,
                            v,
                            w,
                            C;
                        f.element !== f.element.window &&
                            (m = f.adapter.offset()[u.offsetProp]),
                            typeof d == "function"
                                ? (d = d.apply(f))
                                : typeof d == "string" &&
                                  ((d = parseFloat(d)),
                                  f.options.offset.indexOf("%") > -1 &&
                                      (d = Math.ceil(
                                          (u.contextDimension * d) / 100
                                      ))),
                            (y = u.contextScroll - u.contextOffset),
                            (f.triggerPoint = Math.floor(m + y - d)),
                            (g = l < u.oldScroll),
                            (v = f.triggerPoint >= u.oldScroll),
                            (w = g && v),
                            (C = !g && !v),
                            !h && w
                                ? (f.queueTrigger(u.backward),
                                  (s[f.group.id] = f.group))
                                : ((!h && C) ||
                                      (h && u.oldScroll >= f.triggerPoint)) &&
                                  (f.queueTrigger(u.forward),
                                  (s[f.group.id] = f.group));
                    }
                }
                return (
                    requestAnimationFrame(function () {
                        for (var L in s) s[L].flushTriggers();
                    }),
                    this
                );
            }),
            (r.findOrCreateByElement = function (o) {
                return r.findByElement(o) || new r(o);
            }),
            (r.refreshAll = function () {
                for (var o in e) e[o].refresh();
            }),
            (r.findByElement = function (o) {
                return e[o.waypointContextKey];
            }),
            (window.onload = function () {
                n && n(), r.refreshAll();
            }),
            (A.Context = r);
    })();
    (function () {
        "use strict";
        function t(o, i) {
            return o.triggerPoint - i.triggerPoint;
        }
        function e(o, i) {
            return i.triggerPoint - o.triggerPoint;
        }
        var n = { vertical: {}, horizontal: {} };
        function r(o) {
            (this.name = o.name),
                (this.axis = o.axis),
                (this.id = this.name + "-" + this.axis),
                (this.waypoints = []),
                this.clearTriggerQueues(),
                (n[this.axis][this.name] = this);
        }
        (r.prototype.add = function (o) {
            this.waypoints.push(o);
        }),
            (r.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (r.prototype.flushTriggers = function () {
                for (var o in this.triggerQueues) {
                    var i = this.triggerQueues[o],
                        s = o === "up" || o === "left";
                    i.sort(s ? e : t);
                    for (var a = 0, c = i.length; a < c; a += 1) {
                        var u = i[a];
                        (u.options.continuous || a === i.length - 1) &&
                            u.trigger([o]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (r.prototype.next = function (o) {
                this.waypoints.sort(t);
                var i = A.Adapter.inArray(o, this.waypoints),
                    s = i === this.waypoints.length - 1;
                return s ? null : this.waypoints[i + 1];
            }),
            (r.prototype.previous = function (o) {
                this.waypoints.sort(t);
                var i = A.Adapter.inArray(o, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (r.prototype.queueTrigger = function (o, i) {
                this.triggerQueues[i].push(o);
            }),
            (r.prototype.remove = function (o) {
                var i = A.Adapter.inArray(o, this.waypoints);
                i > -1 && this.waypoints.splice(i, 1);
            }),
            (r.prototype.first = function () {
                return this.waypoints[0];
            }),
            (r.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (r.findOrCreate = function (o) {
                return n[o.axis][o.name] || new r(o);
            }),
            (A.Group = r);
    })();
    (function () {
        "use strict";
        function t(r) {
            return r === r.window;
        }
        function e(r) {
            return t(r) ? r : r.defaultView;
        }
        function n(r) {
            (this.element = r), (this.handlers = {});
        }
        (n.prototype.innerHeight = function () {
            var r = t(this.element);
            return r ? this.element.innerHeight : this.element.clientHeight;
        }),
            (n.prototype.innerWidth = function () {
                var r = t(this.element);
                return r ? this.element.innerWidth : this.element.clientWidth;
            }),
            (n.prototype.off = function (r, o) {
                function i(d, l, m) {
                    for (var h = 0, y = l.length - 1; h < y; h++) {
                        var g = l[h];
                        (!m || m === g) && d.removeEventListener(g);
                    }
                }
                var s = r.split("."),
                    a = s[0],
                    c = s[1],
                    u = this.element;
                if (c && this.handlers[c] && a)
                    i(u, this.handlers[c][a], o), (this.handlers[c][a] = []);
                else if (a)
                    for (var p in this.handlers)
                        i(u, this.handlers[p][a] || [], o),
                            (this.handlers[p][a] = []);
                else if (c && this.handlers[c]) {
                    for (var f in this.handlers[c])
                        i(u, this.handlers[c][f], o);
                    this.handlers[c] = {};
                }
            }),
            (n.prototype.offset = function () {
                if (!this.element.ownerDocument) return null;
                var r = this.element.ownerDocument.documentElement,
                    o = e(this.element.ownerDocument),
                    i = { top: 0, left: 0 };
                return (
                    this.element.getBoundingClientRect &&
                        (i = this.element.getBoundingClientRect()),
                    {
                        top: i.top + o.pageYOffset - r.clientTop,
                        left: i.left + o.pageXOffset - r.clientLeft,
                    }
                );
            }),
            (n.prototype.on = function (r, o) {
                var i = r.split("."),
                    s = i[0],
                    a = i[1] || "__default",
                    c = (this.handlers[a] = this.handlers[a] || {}),
                    u = (c[s] = c[s] || []);
                u.push(o), this.element.addEventListener(s, o);
            }),
            (n.prototype.outerHeight = function (r) {
                var o = this.innerHeight(),
                    i;
                return (
                    r &&
                        !t(this.element) &&
                        ((i = window.getComputedStyle(this.element)),
                        (o += parseInt(i.marginTop, 10)),
                        (o += parseInt(i.marginBottom, 10))),
                    o
                );
            }),
            (n.prototype.outerWidth = function (r) {
                var o = this.innerWidth(),
                    i;
                return (
                    r &&
                        !t(this.element) &&
                        ((i = window.getComputedStyle(this.element)),
                        (o += parseInt(i.marginLeft, 10)),
                        (o += parseInt(i.marginRight, 10))),
                    o
                );
            }),
            (n.prototype.scrollLeft = function () {
                var r = e(this.element);
                return r ? r.pageXOffset : this.element.scrollLeft;
            }),
            (n.prototype.scrollTop = function () {
                var r = e(this.element);
                return r ? r.pageYOffset : this.element.scrollTop;
            }),
            (n.extend = function () {
                var r = Array.prototype.slice.call(arguments);
                function o(a, c) {
                    if (typeof a == "object" && typeof c == "object")
                        for (var u in c) c.hasOwnProperty(u) && (a[u] = c[u]);
                    return a;
                }
                for (var i = 1, s = r.length; i < s; i++) o(r[0], r[i]);
                return r[0];
            }),
            (n.inArray = function (r, o, i) {
                return o == null ? -1 : o.indexOf(r, i);
            }),
            (n.isEmptyObject = function (r) {
                for (var o in r) return !1;
                return !0;
            }),
            A.adapters.push({ name: "noframework", Adapter: n }),
            (A.Adapter = n);
    })();
    var Cr = A;
    function $s(t, e, n, r = !0) {
        let o = new Cr({
                element: t,
                handler: (...s) => {
                    e(...s), r && i();
                },
                offset: n,
            }),
            i = () => o && void o.destroy();
        return i;
    }
    var Ut = new Map(),
        Rs = ({
            threshold: t = 0.5,
            top: e = "0px",
            bottom: n = "0px",
        } = {}) => {
            let r = Number.parseFloat(t);
            return {
                key: `${e}:${n}:${r}`,
                options: {
                    root: null,
                    rootMargin: `${e} 0px ${n} 0px`,
                    _threshold: r,
                },
            };
        },
        _s = (t, e) =>
            new IntersectionObserver((n, r) => {
                let { subscribers: o } = Ut.get(t);
                n.forEach((i) => {
                    let s = o.get(i.target);
                    if (s) for (let a of s.values()) a(i);
                });
            }, e),
        qs = (t) => {
            let { key: e, options: n } = Rs(t);
            return (
                Ut.has(e) ||
                    Ut.set(e, {
                        observer: _s(e, n),
                        subscribers: new Map(),
                        key: e,
                    }),
                Ut.get(e)
            );
        },
        Ds = (t, e, n) => {
            if (typeof window.IntersectionObserver == "undefined")
                return function () {};
            let { observer: r, subscribers: o, key: i } = qs(n);
            return (
                o.has(t) || (o.set(t, new Set()), r.observe(t)),
                o.get(t).add(e),
                () => {
                    o.get(t).delete(e),
                        o.get(t).size <= 0 && (o.delete(t), r.unobserve(t)),
                        o.size <= 0 && (r.disconnect(), Ut.delete(i));
                }
            );
        };
    var Lr = (
            t,
            {
                pending: e = () => {},
                delay: n = 10,
                initialState: r = null,
            } = {}
        ) => {
            let o = r,
                i = r,
                s = [],
                a = !1,
                c = () => {
                    o !== i &&
                        ((a = !0),
                        e(!0),
                        (o = i),
                        t(
                            o,
                            (...p) => {
                                (a = !1), e(!1), (s = p), c();
                            },
                            ...s
                        ));
                },
                u = bt((p) => {
                    (i = p), a || c();
                }, n);
            return (
                (u.reset = () => {
                    (o = !1), (i = !1), (s = []);
                }),
                u
            );
        },
        Bs = (t, e, n) =>
            Lr(
                (r, o, i) => {
                    r && t(() => void o(e)), i && i(o);
                },
                { delay: n, initialState: !1 }
            ),
        dn = (t) => {
            let e = !1;
            return (...n) => {
                if (!e) return (e = !0), t(...n);
            };
        },
        mt = (t, e = 0) => {
            if (typeof t == "number") return t;
            let n = typeof t == "string" ? t : "",
                [, r, o = ""] = n.match(/(\d*.?\d+)(\w*)/) || [],
                i = parseFloat(r);
            return Number.isNaN(i) ? e : o.toLowerCase() === "s" ? i * 1e3 : i;
        };
    function Fs(t, e) {
        return mt(
            t &&
                window
                    .getComputedStyle(t)
                    .getPropertyValue("transition-duration"),
            e
        );
    }
    function pn(t) {
        let e = window.getComputedStyle(t);
        e.getPropertyValue("transition-duration");
        let n = mt(e.getPropertyValue("transition-duration"), 0),
            r = mt(e.getPropertyValue("transition-delay"), 0),
            o = mt(e.getPropertyValue("animation-duration"), 0),
            i = mt(e.getPropertyValue("animation-delay"), 0);
        return {
            transitionDuration: n,
            transitionDelay: r,
            animationDuration: o,
            animationDelay: i,
            transitionTime: n + r,
            animationTime: o + i,
        };
    }
    var ye = (t) => {
            let e,
                n,
                r = (o) => {
                    typeof e == "undefined" && (e = o);
                    let i = o - e;
                    t(i, o) !== !1 && (n = requestAnimationFrame(r));
                };
            return (
                (n = requestAnimationFrame(r)),
                () => void cancelAnimationFrame(n)
            );
        },
        Ws = ({
            setup: t = () => {},
            update: e = () => {},
            complete: n = () => {},
            cancel: r = () => {},
            duration: o,
            easing: i,
        }) => {
            let s = mt(o, 500),
                a = pt(i);
            t();
            let c = ye((u) => {
                if (u < s) e(a(u / s));
                else return e(1), n(), !1;
            });
            return () => {
                r(), c();
            };
        },
        Ns = (t, e, n) =>
            e === n ? n : n > e ? e + (n - e) * t : e + (e - n) * (t * -1),
        kr = (t) =>
            Object.keys(t).reduce((e, n) => ((e[n] = parseFloat(t[n])), e), {}),
        Or = (t, { update: e, interpolate: n = Ns, ...r }) => {
            let o = kr(t);
            return (i = {}) => {
                let s = kr(i);
                return Ws({
                    update: (a) => {
                        e(
                            Object.keys(s).reduce(
                                (c, u) => ((c[u] = n(a, o[u], s[u])), c),
                                {}
                            )
                        );
                    },
                    ...r,
                });
            };
        },
        Vs = (t, e) => {
            let n =
                typeof t == "object"
                    ? Or(t, e)
                    : Or(
                          { from: t },
                          { ...e, update: ({ from: r }) => e.update(r) }
                      );
            return (r) => n(typeof r == "object" ? r : { from: r });
        };
    var mn = 0,
        hn = "--x-body-scroll-bar-size",
        Gs = `var(${hn}, 0)`,
        Yt = "--x-body-scroll-active-bar-size",
        gn = `var(${Yt}, 0)`,
        Us = (t = 0, e = 850, n = null, r = () => {}, o = window) => {
            let i = X(typeof t == "function" ? t(0) : t),
                s = pt(n),
                a = X(e),
                c = o.scrollY || document.documentElement.scrollTop;
            return Pr(o, c, s, a, r, i);
        },
        Ys = (t, e = 0, n = 850, r = null, o = () => {}, i = window) => {
            let s = pt(r),
                a = X(n),
                c = i.scrollY || document.documentElement.scrollTop;
            return Pr(i, c, s, a, o, function () {
                return me(t) + X(typeof e == "function" ? e(0) : e);
            });
        },
        ve = "auto",
        we = !1,
        xe = (t) => {
            (t.target &&
                t.target.closest &&
                (t.target.closest("[data-x-scrollbar]") ||
                    t.target.closest(".x-off-canvas") ||
                    t.target.closest(".x-modal"))) ||
                (t.preventDefault(), t.stopPropagation());
        },
        js = () => {
            if (we) return;
            we = !0;
            let { adminBarOffset: t } = window.csGlobal;
            (ve =
                document.body.style.touchAction === "none"
                    ? ve
                    : document.body.style.touchAction),
                (document.body.style.touchAction = "none");
            let e = window.scrollY - t();
            (document.body.style.top = -e + "px"),
                document.body.classList.add("x-body-scroll-disabled"),
                window.addEventListener("wheel", xe, Ft),
                window.addEventListener("scroll", xe, Ft),
                be(Yt, mn + "px");
        },
        Qs = () => {
            if (!we) return;
            we = !1;
            let { adminBarOffset: t } = window.csGlobal;
            (document.body.style.touchAction = ve === "none" ? "auto" : ve),
                document.body.classList.remove("x-body-scroll-disabled");
            let e = -(parseFloat(document.body.style.top) - t());
            (document.body.style.top = ""),
                window.scrollTo({ top: e }),
                setTimeout(function () {
                    window.dispatchEvent(new CustomEvent("resize"));
                }, 250),
                window.removeEventListener("wheel", xe),
                window.removeEventListener("scroll", xe),
                be(Yt, "0px");
        },
        Js = (t, e = 0, n = 0, r) => {
            let o = D(function () {
                r(Ir(t, e, n));
            }, 25);
            return (
                window.addEventListener("scroll", o, H),
                window.addEventListener("resize", o, H),
                () => {
                    window.removeEventListener("scroll", o),
                        window.removeEventListener("resize", o);
                }
            );
        },
        Ir = (t, e = 0, n = 0) => {
            e === 0 && (e = 0.01), n === 0 && (n = 0.01);
            let {
                    top: r,
                    left: o,
                    bottom: i,
                    right: s,
                } = t.getBoundingClientRect(),
                { innerHeight: a, innerWidth: c } = window,
                u = e ? a * (1 - parseFloat(e) / 100) : 0,
                p = n ? a * (parseFloat(n) / 100) : a;
            return r <= u && o >= 0 && i >= p && s <= c;
        };
    U(function () {
        (mn = window.innerWidth - document.body.offsetWidth),
            be(hn, mn + "px"),
            be(Yt, "0px");
    });
    function be(t, e) {
        document.querySelector(":root").style.setProperty(t, e);
    }
    function Pr(t, e, n, r, o, i = null) {
        let s = t === window;
        return ye((a) => {
            let c = typeof i == "function" ? i() : i;
            if (a < r) {
                let u = e + (c - e) * n(a / r);
                t.scrollTo(0, u), s && document.body.scrollTo(0, u);
            } else
                return (
                    t.scrollTo(0, c), s && document.body.scrollTo(0, c), o(), !1
                );
        });
    }
    function Mr(t, e = null) {
        return (
            e
                ? t.style.setProperty("transition-property", e, "important")
                : t.style.setProperty("transition", "none", "important"),
            t.style.setProperty("animation", "none", "important"),
            () => {
                t.offsetHeight,
                    t.style.removeProperty(
                        e ? "transition-property" : "transition"
                    ),
                    t.style.removeProperty("animation");
            }
        );
    }
    var Hr = (t, e) => (n, { after: r } = {}) => {
            t(n);
            let o = Mr(n);
            return () => {
                e(n), o(), typeof r == "function" && r();
            };
        },
        Zs = Hr(
            (t) => t.style.setProperty("opacity", 1, "important"),
            (t) => t.style.removeProperty("opacity")
        ),
        Ks = (
            t,
            { animation: e, className: n, timeout: r, remove: o },
            i = () => {}
        ) => {
            if (!e) return;
            n && !t.classList.contains(n) && t.classList.add(n),
                t.style.removeProperty("animation-duration"),
                t.style.setProperty("animation-name", e);
            let s = r ? pn(t).animationTime : 0;
            t.csAnimationEndingTimeout &&
                clearTimeout(t.csAnimationEndingTimeout);
            let a = dn(() => {
                o &&
                    (t.csAnimationEndingTimeout = setTimeout(function () {
                        t.style.animationName === e &&
                            t.style.setProperty("animation-name", "");
                    }, 250)),
                    i();
            });
            Wt(t, "animationend", a), r && setTimeout(a, s);
        };
    function Xs(t, e, n) {
        e =
            typeof e == "number"
                ? Et(e.toString())
                : typeof e == "string"
                ? Et(e)
                : e;
        let r = (o, i, s, a) => {
            let c,
                u = i[a];
            if (i.length > a) {
                if (Array.isArray(o))
                    try {
                        (u = yn(u, o)), (c = o.slice());
                    } catch (p) {
                        if (o.length === 0) c = {};
                        else throw new Error(p);
                    }
                else c = Object.assign({}, o);
                return (c[u] = r(o[u] !== void 0 ? o[u] : {}, i, s, a + 1)), c;
            }
            return typeof s == "function" ? s(o) : s;
        };
        return r(t, e, n, 0);
    }
    function ta(t, e, n) {
        e =
            typeof e == "number"
                ? Et(e.toString())
                : typeof e == "string"
                ? Et(e)
                : e;
        for (var r = 0; r < e.length; r++) {
            if (t === null || typeof t != "object") return n;
            let o = e[r];
            Array.isArray(t) && o === "$end" && (o = t.length - 1), (t = t[o]);
        }
        return typeof t == "undefined" ? n : t;
    }
    function ea(t, e) {
        e =
            typeof e == "number"
                ? Et(e.toString())
                : typeof e == "string"
                ? Et(e)
                : e;
        let n = (r, o, i) => {
            let s,
                a = o[i];
            return r === null ||
                typeof r != "object" ||
                (!Array.isArray(r) && r[a] === void 0)
                ? r
                : o.length - 1 > i
                ? (Array.isArray(r)
                      ? ((a = yn(a, r)), (s = r.slice()))
                      : (s = Object.assign({}, r)),
                  (s[a] = n(r[a], o, i + 1)),
                  s)
                : (Array.isArray(r)
                      ? ((a = yn(a, r)),
                        (s = [].concat(r.slice(0, a), r.slice(a + 1))))
                      : ((s = Object.assign({}, r)), delete s[a]),
                  s);
        };
        return n(t, e, 0);
    }
    function yn(t, e) {
        if (
            (t === "$end" && (t = Math.max(e.length - 1, 0)),
            !/^\+?\d+$/.test(t))
        )
            throw new Error(`Array index '${t}' has to be an integer`);
        return parseInt(t);
    }
    function Et(t) {
        return t.split(".").reduce((e, n, r, o) => {
            let i = r > 0 && o[r - 1];
            if (i && /(?:^|[^\\])\\$/.test(i)) {
                let s = e.pop();
                e.push(s.slice(0, -1) + "." + n);
            } else e.push(n);
            return e;
        }, []);
    }
    var vn = { get: ta, set: Xs, deleteProperty: ea };
    var zr = (t, e) => (e && typeof t == "object" ? vn.get(t, _t(e)) : t),
        na = (t, e, n) =>
            e && typeof t == "object" ? { ...t, [_t(e)]: n } : n;
    function ht(t, e) {
        if (Array.isArray(e)) return e.map((i) => ht(t, i));
        if (typeof e == "function") return ht(t, e(t));
        if (typeof e == "object")
            return Object.keys(e).reduce(
                (i, s) => ((i[s] = ht(t, e[s])), i),
                {}
            );
        if (typeof e != "string") return e;
        let n,
            r = () => (n || (n = window.getComputedStyle(t)), n),
            o = sn.get(t);
        return e
            .replace(
                /var\(([\w-]+)(?:\s*,\s*(.+?))?\)/g,
                (i, s, a = "") => r().getPropertyValue(s) || a
            )
            .replace(
                /attr\(([\w-]+)(?:\s*,\s*(.+?))?\)/g,
                (i, s, a = "") => t.getAttribute(s) || a
            )
            .replace(/meta\(([.\w-]+)(?:\s*,\s*(.+?))?\)/g, (i, s, a = "") => {
                let c = vn.get(o, s);
                return typeof c == "undefined" ? a : c;
            });
    }
    var ra = (t, e, n) => {
            let r = t,
                o = e;
            return n === "IN"
                ? r.includes(o)
                : n === "NOT IN"
                ? !r.includes(o)
                : ((typeof r == "boolean" || typeof o == "boolean") &&
                      ((r = !!r), (o = !!o)),
                  n === ">" || n === "<"
                      ? r > o
                      : n === ">=" || n === "<="
                      ? r >= o
                      : n === "=" || n === "=="
                      ? r == o
                      : n === "!="
                      ? r != o
                      : n == "==="
                      ? r === o
                      : n == "!=="
                      ? r !== o
                      : !0);
        },
        wn = (t, e) => {
            if (typeof t == "undefined") return null;
            if (!Array.isArray(t)) return wn([t, "==", e]);
            let [n, r, o] = t;
            return t.length <= 0 ? null : [n, r, o || e];
        },
        oa = (t, e, n, r) => {
            try {
                let o = wn(e, r);
                if (!o) return !0;
                let [i, s, a] = o;
                return ra(zr(n, ht(t, a)), ht(t, i), ht(t, s));
            } catch (o) {
                console.warn(
                    "Failed to check condition. Make sure your state contains the key you are checking",
                    o,
                    { el: t, condition: e, state: n }
                );
            }
            return !1;
        };
    var jt = new Map(),
        xn = new Map(),
        Se = (...t) => void console.warn(...t),
        st = (t, e) => {
            if (jt.has(t)) return Se("Rivet archetypes can not be redefined");
            xn.set(t, typeof e == "function" ? e : (n, ...r) => n(...r));
        },
        gt = (t, e, n, r = {}) => {
            if (jt.has(e)) return Se(`Rivet ${e} already registered`);
            if (!xn.has(t)) return Se("Rivet archetype unknown", t);
            jt.set(e, { archetype: t, handler: n, config: r });
        };
    function Te({
        el: t,
        handle: e,
        handles: n,
        defaultOption: r,
        options: o,
    }) {
        var l;
        let i = n || [e],
            s = i.find(({ type: m }) => m && jt.has(m));
        if (!s)
            return Se(
                `Unknown rivet type: ${(l = i[0]) == null ? void 0 : l.type}`,
                t
            );
        let {
                handler: a,
                config: { defaultOption: c, priority: u = 0, ...p } = {},
                archetype: f,
            } = jt.get(s.type),
            d = c && r ? { [c]: r } : {};
        return [u, () => xn.get(f)(a, t, { ...d, ...(o || {}) }, s.name, p)];
    }
    function Ae(t) {
        return t.sort(([e], [n]) => e - n);
    }
    var bn = "data-rvt";
    function $r(t = window.document.body) {
        return pe(Sn)(t);
    }
    function Sn(t) {
        if (t.hasAttributes()) {
            let e = t.attributes;
            for (let n = e.length - 1; n >= 0; n--)
                if (e[n].name.indexOf(bn) === 0) return !0;
        }
        return !1;
    }
    function ia(t, e) {
        let n = Tt(t, e);
        return typeof n != "object" && typeof n != "undefined" && n !== ""
            ? { defaultOption: n, options: {} }
            : { options: n };
    }
    function sa(t) {
        let e = new Set();
        for (let n = t.attributes.length - 1; n >= 0; n--) {
            let r = t.attributes[n].name;
            if (r.indexOf(bn) !== 0) continue;
            let o = r.substr(bn.length + 1),
                i = o.split("-");
            e.add({
                el: t,
                handles: [
                    { type: o, name: "default" },
                    { name: i.pop(), type: i.join("-") },
                ],
                ...ia(t, r),
            });
        }
        return e;
    }
    function Tn(t) {
        return Q(
            Ae(
                Array.from(sa(t))
                    .map((e) => Te(e))
                    .filter((e) => !!e)
            ).map(([, e]) => e())
        );
    }
    function Rr(t, e) {
        try {
            return t && t.matches && t.matches(e);
        } catch {}
        return !1;
    }
    function Ee(t) {
        try {
            return window.document.querySelectorAll(t);
        } catch (e) {
            console.warn(e);
        }
        return [];
    }
    var _r = !1,
        qr = null,
        Dr,
        An = new Set(),
        En = new Set(),
        Ce = new WeakMap(),
        Ct = new WeakMap();
    function b(t, e, n = 0) {
        if (typeof t != "string") {
            console.warn("Rivet selector must be a string", t), console.trace();
            return;
        }
        if (typeof e != "function") {
            console.warn("Rivet handler must be a function", e),
                console.trace();
            return;
        }
        let r = { handler: e, selector: t, priority: n };
        An.add(r), _r && aa(r);
    }
    function aa(t) {
        clearTimeout(Dr),
            En.add(t),
            (Dr = setTimeout(() => {
                let e = Array.from(En.values());
                En.clear(), Br(e);
            }, 0));
    }
    function Br(t) {
        t.sort(({ priority: e }, { priority: n }) => e - n),
            t.forEach(({ selector: e, handler: n }) => {
                Array.from(Ee(e)).forEach((r) => {
                    Le(r, n, Fr(e, r));
                });
            });
    }
    function Fr(t, e) {
        let n = t.match(/(data-[\w-]+)/g) || [];
        return n && n.length ? (n = n.pop()) : (n = null), n ? Tt(e, n) : null;
    }
    function Le(t, e, n) {
        try {
            if (ca(t, e) || !document.body.contains(t)) return;
            la(t, e);
            let r = Nt(e.call(window, t, n));
            Array.isArray(r) &&
                r.map((o) => {
                    Wr(t, o);
                }),
                typeof r == "function" && Wr(t, r);
        } catch (r) {
            console.warn("Failed to attach handler to element", t, e, n, r);
        }
    }
    function Wr(t, e) {
        Ce.get(t) || Ce.set(t, new Set()), Ce.get(t).add(e);
    }
    function ca(t, e) {
        return Ct.get(t) && Ct.get(t).get(e);
    }
    function la(t, e) {
        Ct.get(t) || Ct.set(t, new WeakMap()), Ct.get(t).set(e, !0);
    }
    window.document.addEventListener("DOMContentLoaded", () => {
        $r().forEach((t) => {
            Le(t, (e) => Tn(e));
        }),
            Br(Array.from(An.values())),
            (qr = new MutationObserver(function (t) {
                t
                    .reduce((e, n) => {
                        for (let r = 0; r < n.addedNodes.length; r++)
                            n.addedNodes[r].nodeType === 1 &&
                                e.push(n.addedNodes[r]);
                        return e;
                    }, [])
                    .forEach(function e(n) {
                        if (!!n) {
                            if (n.children && n.children.length > 0)
                                for (let r = 0; r < n.children.length; r++) {
                                    if (!n) return;
                                    e(n.children[r]);
                                }
                            Sn(n) && Le(n, (r) => Tn(r)),
                                An.forEach(({ selector: r, handler: o }) => {
                                    n && Rr(n, r) && Le(n, o, Fr(r, n));
                                });
                        }
                    }),
                    t
                        .reduce((e, n) => {
                            for (let r = 0; r < n.removedNodes.length; r++) {
                                let o = n.removedNodes[r];
                                o.nodeType === 1 &&
                                    !document.contains(o) &&
                                    e.push(o);
                            }
                            return e;
                        }, [])
                        .forEach(function e(n) {
                            if (n.children && n.children.length > 0)
                                for (let o = 0; o < n.children.length; o++)
                                    e(n.children[o]);
                            let r = Ce.get(n);
                            if (r)
                                for (let o of r.values())
                                    o.call(window, n),
                                        r.delete(o),
                                        Ct.delete(n);
                        });
            })),
            qr.observe(window.document.body, { childList: !0, subtree: !0 }),
            (_r = !0);
    });
    var J = {};
    Qe(J, {
        container: () => k,
        initState: () => wa,
        makeDetectStateChange: () => Vr,
        makeDispatch: () => ma,
        makeInspect: () => pa,
        subscribe: () => ha,
    });
    var k = {
            providers: new Map(),
            subscribers: new Map(),
            relationships: new Map(),
            providerIndex: new WeakMap(),
            subscriberIndex: new WeakMap(),
        },
        Nr = (() => {
            let t = 0;
            return () => t++;
        })();
    function Vr(t) {
        let e = {};
        return (n) => {
            let r = t.filter((o) => e[o] !== n[o]);
            return (
                t.forEach((o) => {
                    e[o] = n[o];
                }),
                r
            );
        };
    }
    var Gr = (t, e) => {
            var n, r;
            return (r =
                (n = k.subscriberIndex.get(t)) == null ? void 0 : n.get(e)) ==
                null
                ? void 0
                : r.id;
        },
        Ur = (t) => k.providers.get(k.relationships.get(t)),
        Yr = (t, e) => Ur(Gr(t, e)),
        ua = (t, e) => k.providerIndex.has(t) && k.providerIndex.get(t).has(e),
        jr = (t, e) => {
            let n = rn((r) => ua(r, e))(t);
            return n ? k.providerIndex.get(n).get(e) : null;
        },
        Lt = new WeakMap();
    window.addEventListener("rvt-store-provider", () => {
        Lt = new WeakMap();
    });
    var Qr = (t, e) => (
            Lt.get(t) || Lt.set(t, {}),
            Lt.get(t).name || (Lt.get(t).name = k.providers.get(jr(t, e))),
            Lt.get(t).name
        ),
        Jr = (t, e = !1) => {
            let n = Ur(t);
            if (!n) return;
            let r = k.subscribers.get(t);
            if (!!r)
                for (let o of r.values()) {
                    let [i, s] = o;
                    i(n.state, s(n.state), e);
                }
        },
        fa = (t, e, n) => {
            let r,
                o = () => {
                    let s = k.relationships.get(t),
                        a = jr(e, n);
                    s !== a &&
                        (k.relationships.set(t, a),
                        clearTimeout(r),
                        (r = setTimeout(() => Jr(t, !0), 10)));
                },
                i = tt(window, "rvt-store-provider", o);
            return (
                o(),
                () => {
                    clearTimeout(r), i();
                }
            );
        },
        da = (t, e) => [
            typeof t == "function" ? t : () => {},
            Vr(Array.isArray(e) ? e : []),
        ],
        pa = (t, e) => () => {
            var n;
            return (n = Qr(t, e)) == null ? void 0 : n.state;
        },
        ma = (t, e) => (n) => {
            var r;
            return (r = Qr(t, e)) == null ? void 0 : r.dispatch(n);
        },
        ha = (t, e, n = () => {}, r = []) => {
            let o = da(n, r);
            if (
                (k.subscriberIndex.has(t) ||
                    k.subscriberIndex.set(t, new Map()),
                !k.subscriberIndex.get(t).has(e))
            ) {
                let s = Nr();
                k.subscribers.set(s, new Set()),
                    k.subscriberIndex
                        .get(t)
                        .set(e, { id: s, teardown: fa(s, t, e) });
            }
            return (
                k.subscribers.get(Gr(t, e)).add(o),
                {
                    unsubscribe: () => {
                        let { id: s, teardown: a } = k.subscriberIndex
                                .get(t)
                                .get(e),
                            c = k.subscribers.get(s);
                        c.delete(o),
                            c.size === 0 &&
                                (k.subscribers.delete(s),
                                k.relationships.delete(s),
                                k.subscriberIndex.get(t).delete(e),
                                a());
                    },
                    getState: () => {
                        var s, a;
                        return (a =
                            (s = Yr(t, e)) == null ? void 0 : s.state) != null
                            ? a
                            : {};
                    },
                    dispatch: (s) => {
                        var a;
                        return (a = Yr(t, e)) == null ? void 0 : a.dispatch(s);
                    },
                }
            );
        },
        ga = (t) => (typeof t != "function" ? (e) => e : (...e) => t(...e)),
        ya = (t) => {
            let e;
            return (n) => {
                let { state: r, ...o } = k.providers.get(t);
                k.providers.set(t, { ...o, state: o.reducer(n(r)) }),
                    cancelAnimationFrame(e),
                    (e = requestAnimationFrame(() => {
                        for (let [i, s] of k.relationships) s === t && Jr(i);
                    }));
            };
        },
        va = (t, e, { _reducer: n, ...r }) => {
            if (
                (k.providerIndex.get(t) || k.providerIndex.set(t, new Map()),
                k.providerIndex.get(t).has(e))
            )
                return;
            let o = ga(n),
                i = Nr();
            return (
                k.providers.set(i, {
                    reducer: o,
                    state: o(r),
                    dispatch: ya(i),
                }),
                k.providerIndex.get(t).set(e, i),
                window.dispatchEvent(new CustomEvent("rvt-store-provider")),
                () => {
                    k.providers.delete(i), k.providerIndex.get(t).delete(e);
                }
            );
        },
        wa = (t, e = {}, n = window.document.documentElement) => {
            if (!t) {
                console.warn("States must set an ID", t, e, n);
                return;
            }
            return va(n, t, e);
        };
    var Zr = Vt(!1);
    function Qt(t) {
        return Zr.has(t);
    }
    Qt.enable = function (t) {
        Zr.set(t, !0);
    };
    var yt = (...t) => gt("action", ...t),
        et = (...t) => gt("observer", ...t),
        vt = (...t) => gt("behavior", ...t),
        Jt = (...t) => gt("innate", ...t),
        Cn = (...t) => gt("macro", ...t),
        F = (...t) => gt("event", ...t);
    function xa(t, e, n = {}, r = "default") {
        let o = { el: t, handle: { type: e, name: r } };
        return (
            typeof n == "string"
                ? ((o.defaultOption = n), (o.options = {}))
                : (o.options = n),
            Te(o)
        );
    }
    function Zt(t) {
        return Q(
            Ae(
                t
                    .filter((e) => !!e)
                    .map((e) => xa(...e))
                    .filter((e) => !!e)
            ).map(([, e]) => e())
        );
    }
    var {
        rivetListener: ba,
        rivetDispatch: Sa,
        expandElementValue: Kr,
        onScanLazy: Ta,
    } = S;
    st("behavior");
    st("innate");
    st("macro", (t, e, n, r) => t(e, Zt, n, r));
    st("action", (t, e, n, r) => {
        let o = () => void t(e, Kr(e, n));
        return ba(e, r, (i) => {
            n.defer ? setTimeout(o, 0) : o();
        });
    });
    st("event", (t, e, n, r) => t(() => Sa(e, r), Kr(e, n), e));
    st("observer", (t, e, n, r = "", { scan: o }) => {
        let [i, s = []] = (typeof t == "function" ? [t] : t) || [],
            a = i(e, n),
            [c, u] = Array.isArray(a) ? a : [a, () => {}],
            { unsubscribe: p, getState: f } = J.subscribe(e, r, c, s),
            d = o ? Ta(() => c(f(), [], !1, !0)) : () => {};
        return [p, u, d];
    });
    var { expandElementValue: Aa, getStateValue: Ea } = S;
    et(
        "outlet",
        (t, { key: e }) => {
            let n = t.innerHTML;
            return (r) => {
                try {
                    let o = Ea(r, Aa(t, e));
                    t.innerHTML = typeof o == "undefined" ? n : o;
                } catch (o) {
                    console.warn("Unable to update Rivet outlet", o, {
                        key: e,
                        state: r,
                        el: t,
                    });
                }
            };
        },
        { defaultOption: "key" }
    );
    var { listener: Xr } = S,
        Ca = ["click", "focus", "focusin", "focusout", "blur"];
    Ca.forEach((t) => {
        F(
            `on${t}`,
            (
                e,
                {
                    preventDefault: n = !0,
                    stopPropagation: r = !1,
                    once: o = !1,
                },
                i
            ) => {
                let s;
                return Xr(i, t, (a) => {
                    (o && s) ||
                        ((s = !0),
                        n && a.preventDefault(),
                        r && a.stopPropagation(),
                        e());
                });
            }
        );
    });
    var La = ["keydown", "keyup"];
    La.forEach((t) => {
        F(
            `on${t}`,
            (
                e,
                {
                    key: n,
                    preventDefault: r = !0,
                    stopPropagation: o = !1,
                    once: i = !1,
                },
                s
            ) => {
                let a;
                return Xr(document, t, (c) => {
                    (i && a) ||
                        ((a = !0),
                        c.key === n &&
                            (r && c.preventDefault(),
                            o && c.stopPropagation(),
                            e()));
                });
            },
            { defaultOption: "key" }
        );
    });
    var {
        throttle: ka,
        debounce: Oa,
        onLoad: Ia,
        onScanLazy: Pa,
        triggerScan: Ma,
        listener: ke,
    } = S;
    F("onready", (t) => {
        setTimeout(() => void t(), 0);
    });
    F("onload", (t) => Ia(t));
    F(
        "onexit",
        (t, { delay: e = 1e3, repeat: n = !1 }) => {
            let r,
                o = !1;
            return ke(document, "mouseout", (i) => {
                clearTimeout(r),
                    !i.toElement &&
                        !i.relatedTarget &&
                        !o &&
                        ((r = setTimeout(() => void t(), e)), n || (o = !0));
            });
        },
        { defaultOption: "delay" }
    );
    F(
        "onresize",
        (t, { throttle: e = 50 }) =>
            ke(window, "resize", ka(t, e, { trailing: !0 }), H),
        { defaultOption: "throttle" }
    );
    F(
        "onresized",
        (t, { debounce: e = 500 }) =>
            ke(window, "resize", Oa(t, e, { trailing: !0 }), H),
        { defaultOption: "debounce" }
    );
    F("onscan", (t, e) => Pa(t, e), { defaultOption: "throttle" });
    b("img", (t) => ke(t, "load", () => void Ma()));
    var { animateTopOffset: Ha, makeDirectionalEasing: za, intersect: $a } = S,
        to,
        eo,
        Oe = !1,
        Ie = new Map();
    function no() {
        to = window.innerHeight;
    }
    window.addEventListener("resize", no);
    no();
    function Ra(t, { prop: e, easingFn: n }) {
        let { top: r, height: o } = t.getBoundingClientRect(),
            i = r + o / 2,
            s = to / 2;
        t.style.setProperty(e, n((i - s) / s));
    }
    function ro() {
        if (!!Oe) {
            for (let [t, e] of Ie) Ra(t, e);
            eo = requestAnimationFrame(ro);
        }
    }
    var _a = (t, e) => {
            Ie.set(t, e), !Oe && ((Oe = !0), (eo = requestAnimationFrame(ro)));
        },
        oo = (t) => {
            Ie.delete(t), Ie.size <= 0 && (Oe = !1);
        };
    vt(
        "intersect",
        (t, { easing: e = "linear", prop: n = "--rvt-intersect" }) => [
            $a(
                t,
                ({ isIntersecting: o }) => {
                    o ? _a(t, { easingFn: za(e), prop: n }) : oo(t);
                },
                { threshold: 0, top: "0px", bottom: "0px" }
            ),
            () => void oo(t),
        ],
        { defaultOption: "prop" }
    );
    yt(
        "scroll-to-top",
        (t, { offset: e, speed: n, easing: r = "easeInOutExpo" }) => {
            Ha(e, n, r);
        },
        { defaultOption: "offset" }
    );
    Cn("scroll-top", (t, e) =>
        e([
            [t, "onclick"],
            [t, "scroll-to-top"],
        ])
    );
    var {
        ensureNumber: io,
        updateStateKey: so,
        getStateValue: qa,
        expandElementValue: Pe,
    } = S;
    Jt(
        "define",
        (t, e = {}, n) => {
            if (!n.match(/^\w+$/)) {
                console.warn("Rivet state keys must be alphanumeric");
                return;
            }
            let { _reducer: r, ...o } = e.__value || e || {};
            J.initState(n, { _reducer: r, ...Pe(t, o) }, t);
        },
        { defaultOption: "__value", priority: -1 }
    );
    yt("set", (t, { state: e, key: n, value: r }) => {
        J.makeDispatch(t, e)((o) => so(o, Pe(t, n), r));
    });
    var Da = (t, e, n) => {
        let r = t.includes(e);
        return n && r ? t.filter((o) => o !== e) : r ? t : [...t, e];
    };
    yt("list", (t, { state: e, key: n, value: r, toggle: o = !0 }) => {
        J.makeDispatch(
            t,
            e
        )((s) => {
            let a = Pe(t, n),
                c = qa(s, a);
            return Array.isArray(c) ? so(s, a, Da(c, r, o)) : s;
        });
    });
    yt(
        "inc",
        (
            t,
            {
                state: e,
                key: n,
                amount: r = 1,
                min: o = null,
                max: i = null,
                wrap: s = !1,
            }
        ) => {
            let a = J.makeDispatch(t, e),
                c = (u) => io(u) + io(r);
            a((u) => {
                let p = Pe(t, n);
                return p ? { ...(u || {}), [p]: c(u[p]) } : c(u);
            });
        },
        { defaultOption: "state" }
    );
    Jt(
        "debug",
        (t) => {
            Qt.enable(t), t.removeAttribute("data-rvt-debug");
        },
        { defaultOption: "message" }
    );
    var {
            isScalar: ao,
            getTransitionDuration: Ba,
            getStateValue: kn,
            expandElementValue: Me,
            evaluateCondition: He,
            listener: Fa,
            fontCompress: Wa,
            addClass: co,
            removeClass: Na,
        } = S,
        Va = (t, e) => {
            let n = t || "$v";
            return ao(n)
                ? ao(e)
                    ? `${n}`.replace("$v", e)
                    : n === "$v"
                    ? ""
                    : n
                : "";
        };
    et(
        "classname",
        (t, { key: e, classname: n, condition: r }) => {
            let o = "";
            return (i) => {
                let s = kn(i, Me(t, e)),
                    c = He(t, r, i, e) ? Va(n, s) : "";
                c !== o &&
                    (o && t.classList.contains(o) && t.classList.remove(o),
                    c && !t.classList.contains(c) && t.classList.add(c)),
                    (o = c);
            };
        },
        { defaultOption: "classname" }
    );
    et(
        "prop",
        (t, { key: e, prop: n, value: r, condition: o }) => {
            let i = null;
            return (s) => {
                let a = kn(s, Me(t, e));
                He(t, o, s, e)
                    ? a !== i &&
                      t.style.setProperty(n, typeof r == "undefined" ? a : r)
                    : a !== i && t.style.removeProperty(n),
                    (i = a);
            };
        },
        { defaultOption: "key" }
    );
    et(
        "attr",
        (t, { key: e, attr: n, value: r, condition: o }) => {
            let i = null;
            return (s) => {
                let a = kn(s, Me(t, e));
                He(t, o, s, e)
                    ? a !== i &&
                      t.setAttribute(n, typeof r == "undefined" ? a : r)
                    : a !== i && t.removeAttribute(n),
                    (i = a);
            };
        },
        { defaultOption: "key" }
    );
    et(
        "height",
        (t, { key: e, condition: n, selector: r }) => {
            let o, i;
            return (s, a, c, u) => {
                if (e && !u) {
                    let f = Me(t, e);
                    if (s[f] === o) return;
                    o = s[f];
                }
                let p = He(t, n, s, e);
                setTimeout(() => {
                    if (p) {
                        let [f, ...d] = Array.from(t.querySelectorAll(r))
                            .map((l) => l.offsetHeight)
                            .sort((l, m) => m - l);
                        f &&
                            f !== i &&
                            (t.style.setProperty(
                                "height",
                                `${f}px`,
                                "important"
                            ),
                            (i = f));
                    } else t.style.removeProperty("height"), (i = null);
                });
            };
        },
        { defaultOption: "selector", scan: !0 }
    );
    window.offscreenTemplates || (window.offscreenTemplates = new WeakMap());
    vt(
        "offscreen-reset",
        (t, { mode: e = "default" }) => {
            let n = t.closest("[data-x-toggleable]");
            if (window.offscreenTemplates.get(t)) return;
            try {
                let c = document.createElement("textarea");
                c.innerHTML = t.querySelector(
                    'script[type="text/rvt-template"]'
                ).textContent;
                let u = document.createElement("div");
                (u.innerHTML = c.innerText),
                    window.offscreenTemplates.set(t, [c.innerText, u]);
            } catch (c) {
                return (
                    console.warn("Unable to locate content template", c),
                    () => {}
                );
            }
            let r,
                o = () => {
                    try {
                        let [c, u] = window.offscreenTemplates.get(t);
                        Array.from(u.querySelectorAll("[data-x-toggleable]"))
                            .map((f) => f.getAttribute("data-x-toggleable"))
                            .forEach((f) => {
                                window.xToggleDelete(f);
                            }),
                            (t.innerHTML = c);
                    } catch (c) {
                        console.warn("Unable to reset offscreen content", c);
                    }
                },
                i = () => {
                    t.innerHTML = "";
                },
                s = () => {
                    r = setTimeout(() => {
                        i(), e === "close" && o();
                    }, Ba(n, 300) + 100);
                },
                a = (c) => {
                    clearTimeout(r),
                        c ? (e === "open" && i(), o()) : e !== "open" && s();
                };
            return (
                e === "close" && o(),
                Fa(
                    n,
                    "tco-toggle",
                    ({ detail: { state: c } = {} }) => void a(c)
                )
            );
        },
        { defaultOption: "mode" }
    );
    vt("font-compress", (t, e) => Wa(t, e));
    var Ga = (t, e) => {
        try {
            if (e) return Array.from(t.querySelectorAll(e));
        } catch {}
        return t;
    };
    vt(
        "inner-wrap",
        (t, { selector: e = "", tag: n = "span", class: r = "" }) =>
            Ga(t, e).map((o) => {
                let i = document.createElement(n);
                co(i, "has-been-tagged"),
                    r && co(i, r),
                    Array.from(o.childNodes).forEach((s) => {
                        i.appendChild(s);
                    }),
                    o.append(i),
                    i.offsetHeight,
                    Na(i, "has-been-tagged");
            }),
        { defaultOption: "selector" }
    );
    var On = { ...Ln };
    var { toggleClass: lo, listener: Ff, PASSIVE_ARGS: Ua } = S;
    b("[data-x-bar]", (t, { scrollButtons: e }) => {
        if (!e) return;
        let n = t.querySelector(".x-bar-scroll-inner"),
            r = t.querySelector(".x-bar-content"),
            o = t.querySelector('[data-x-bar-scroll-button="bck"]'),
            i = t.querySelector('[data-x-bar-scroll-button="fwd"]'),
            s = 0,
            a = 0,
            c = 0,
            u = 0,
            p = () => {
                let h = parseInt(window.getComputedStyle(n).width),
                    y = parseInt(window.getComputedStyle(n, ":before").width),
                    g = parseInt(window.getComputedStyle(r).width);
                (s = h), (a = h - y * 2), (c = g), (u = n.scrollLeft);
                let v = u <= 0,
                    w = c - u - a <= 0;
                lo(o, "is-active", !v), lo(i, "is-active", !w);
            },
            f = (h) => n.scrollTo({ top: 0, left: h, behavior: "smooth" }),
            d = () => {
                f(Math.max(u - s, 0));
            },
            l = () => {
                f(Math.min(u + s, c - a));
            };
        p();
        let m = D(p, 50);
        window.addEventListener("resize", m),
            n.addEventListener("scroll", m, Ua),
            o.addEventListener("mouseup", function () {
                d();
            }),
            i.addEventListener("mouseup", function () {
                l();
            });
    });
    var kt = {},
        Ot = {};
    function Ya(t, e) {
        kt[t] || (kt[t] = []), kt[t].push(typeof e == "function" ? e : () => e);
    }
    function ja(t, e) {
        Ot[t] || (Ot[t] = []), Ot[t].push(e);
    }
    function Qa() {
        let t = [...arguments],
            e = t.shift(),
            n = t.shift(),
            r = kt[e] ? kt[e] : [];
        return (
            (Ot[e] ? Ot[e] : []).forEach((i) => i.call(this, n, ...t)),
            r.reduce((i, s) => s.call(this, i, ...t), n)
        );
    }
    var R = { filter: Ya, action: ja, apply: Qa, filters: kt, actions: Ot };
    var { animateTopOffset: Ja, scrollOffset: Za } = S,
        It,
        uo = !1,
        In;
    function fo() {
        if (!uo) {
            It = 0;
            let t = D(fo, 50);
            window.addEventListener("resize", t, H),
                (In = document.querySelector("#wpadminbar")),
                (uo = !0);
        }
        if (In) {
            let { position: t, height: e } = window.getComputedStyle(In);
            It = t === "fixed" ? parseInt(e) : 0;
        }
        return It;
    }
    var W = () => (It != null ? It : fo()),
        Pt = () => R.apply("fixed_top_offset", 0),
        Ka = (t, e, n) => {
            if (t instanceof Element) {
                let { bottom: r, top: o } = Za(t);
                return e ? r - n : o + n;
            }
            return (typeof t == "number" ? t : parseFloat(t)) + n;
        },
        po = (
            t,
            { offsetTop: e = !0, duration: n, easing: r, bottom: o = !1 } = {}
        ) => {
            Ja(() => Ka(t, o, e ? Pt() : 0), n, r);
        };
    window.csGlobal = window.csGlobal || {};
    window.csJsData = window.csJsData || {};
    window.csGlobal.rivet = On;
    window.csGlobal._ = window.csGlobal.rivet.util;
    window.csGlobal.everinit = On.attach;
    window.csGlobal.adminBarOffset = W;
    window.csGlobal.fixedTopOffset = Pt;
    window.csGlobal.scrollTo = po;
    window.csGlobal.csHooks = R;
    window.document.documentElement.classList.remove("no-js");
    window.document.documentElement.classList.add("js");
    var {
            onScrollRaw: Xa,
            onResize: tc,
            oncePassive: mo,
            elementIndex: ho,
            addClass: Pn,
            removeClass: Mn,
            toggleClass: sd,
            hasClass: Mt,
        } = S,
        go = (t) => getComputedStyle(t).display !== "none",
        yo = 0,
        vo = !1,
        Hn = !1;
    function wo(t) {
        var d, l, m;
        let e = document.querySelector(".x-site");
        if (!e) {
            t.style.width = "100%";
            return;
        }
        var n = window.getComputedStyle(t);
        if (n.position !== "fixed") {
            (t.style.width = ""), (t.style.maxWidth = "");
            return;
        }
        var r = [];
        xo(n["margin-left"]) || r.push(n["margin-left"]),
            xo(n["margin-right"]) || r.push(n["margin-right"]);
        var o = "";
        r.length > 0 && (o = r.length === 1 ? r[0] : "(" + r.join(" + ") + ")");
        let i =
                (m =
                    (l =
                        (d = document.querySelector(
                            "body.x-stack-icon .x-sidebar .max.width:not(.x-container)"
                        )) == null
                            ? void 0
                            : d.parentElement) == null
                        ? void 0
                        : l.offsetWidth) != null
                    ? m
                    : 0,
            s = Array.from(document.querySelectorAll(".x-bar-space-v")).reduce(
                (h, y) => h + y.offsetWidth,
                i
            ),
            a = Array.from(document.querySelectorAll(".x-bar-left")).reduce(
                (h, y) => h + y.offsetWidth,
                i
            ),
            c = "";
        a && (c = "calc(0px + " + a + "px)");
        var u = "";
        s > 0 && (u += " - " + s + "px"),
            o && (u += " - " + o),
            (u += " - " + gn),
            (t.style.width = "calc(100%" + u + ")"),
            (t.style.left = c);
        var p = window.getComputedStyle(e),
            f = p["max-width"];
        f &&
            f !== "none" &&
            (t.style.maxWidth = o ? "calc(" + f + " - " + o + ")" : f);
    }
    function xo(t) {
        return (
            t
                .trim()
                .split(" ")
                .filter((e) => !e.match(/^0[a-zA-Z%]+|0$|none$/)).length === 0
        );
    }
    b("[data-x-bar]", function (t, e) {
        if (e.region === "top" || e.region === "bottom")
            return S.onViewportChange(() => {
                wo(t);
            }, !0);
    });
    var ze = /__cs_debug/.test(location.href),
        bo = !1,
        Ht = [],
        nt = [],
        Kt = [],
        zn,
        Xt = !1;
    function $e(t) {
        let e = Ht.map((o) => o.id),
            n = !1,
            r = Ht.filter(({ el: o, id: i }) => {
                let s = e.indexOf(i);
                return s !== e.lastIndexOf(i)
                    ? ((n = !0), e.splice(s, 1), !1)
                    : window.document.body.contains(o)
                    ? !0
                    : ((n = !0), !1);
            });
        return (
            (n || t) && (r = r.sort((o, i) => ho(o.el) - ho(i.el))),
            n ? ((Ht = r), (nt = Ht), setTimeout($n, 0), !0) : !1
        );
    }
    function $n() {
        if ($e() || !W) return;
        nt = Ht.filter(({ el: o }) => go(o));
        let t = W(),
            e = 0,
            n = 0,
            r = 0;
        oc(),
            nt.forEach((o) => {
                var { height: i } = o.el.getBoundingClientRect();
                (o.height = i = Math.round(i)),
                    o.goal && o.space && (o.space.style.height = i + "px"),
                    o.goal || (o.shrinkHeight = To(i, o.props.shrink)),
                    (o.triggerOffset = parseInt(o.props.triggerOffset)),
                    isNaN(o.triggerOffset) && (o.triggerOffset = 0);
            }),
            (Kt = nt.map((o, i) => {
                let {
                        el: s,
                        props: a,
                        height: c,
                        shrinkHeight: u,
                        triggerOffset: p,
                        goal: f,
                    } = o,
                    d = r++ === 0,
                    l = a.zStack && !d,
                    { marginTop: m } = getComputedStyle(s);
                var h = parseFloat(m),
                    y = a.keepMargin ? h : 0,
                    { top: g, bottom: v } = s.getBoundingClientRect();
                let w = 0,
                    L = s.parentNode.getBoundingClientRect().top - W();
                L += window.scrollY;
                let x = s.parentNode.childNodes;
                for (let V = 0; V < x.length; ++V) {
                    let ot = x[V];
                    if (!!ot.getBoundingClientRect) {
                        if (ot === s) break;
                        Mt(ot, "x-bar-space") ||
                            Mt(ot, "x-bar-is-sticky") ||
                            (w += ot.getBoundingClientRect().height);
                    }
                }
                g = L + p + (w - e) + W();
                let T = p + w + L + W(),
                    E = document.body.scrollTop,
                    q = E + g;
                if (a.triggerSelector)
                    try {
                        let V = document.querySelector(a.triggerSelector);
                        if (V) {
                            let { top: ot } = V.getBoundingClientRect();
                            T = ot + E + p - u;
                        }
                    } catch (V) {
                        ze && console.warn(V);
                    }
                else
                    a.hideInitially
                        ? ((T += c), (T += p))
                        : p > 0 && (T += p + c);
                l ? (T += u) : (T -= y);
                let M = W() + e;
                Rn(T, "red");
                let _ = t + n;
                a.keepMargin || ((_ += h), (M -= h)),
                    (T = Math.floor(T)),
                    Rn(T, "green"),
                    (t = T),
                    l ? ((M -= u + y), (M = Math.max(M, W()))) : (e += u + y);
                let B = a.hideInitially || q < T || q + c < M;
                n += c - u;
                let N = u + e;
                Rn(N, "orange"), a.keepMargin && (N += h), (N = Math.ceil(N));
                let le = y ? `calc( -100% - ${y}px)` : "-100%";
                return (
                    f && M !== Kt[i].top && (s.style.top = `${M}px`),
                    {
                        offset: T,
                        bottom: v,
                        top: M,
                        slide: B,
                        elOffset: q,
                        topOffset: N,
                        translateY: le,
                        firstBar: d,
                        only_show_on_scroll_up: a.only_show_on_scroll_up,
                    }
                );
            })),
            ze &&
                nt.forEach(function (o, i) {
                    console.log(`Bar: ${i}`, o);
                }),
            Re();
    }
    function Re() {
        if (
            Xt ||
            $e() ||
            Hn ||
            document.body.classList.contains("x-body-scroll-disabled")
        )
            return;
        Hn = !0;
        let t = window.scrollY + W(),
            e = t - yo,
            n = e === 0 ? vo : e < 0 && window.scrollY !== 0;
        (yo = t), (vo = n);
        let r = Kt.reduce(
                (i, { offset: s, only_show_on_scroll_up: a }, c) =>
                    t >= s && (!a || n) ? c : i,
                -1
            ),
            o = !1;
        nt.forEach((i, s) => {
            let a = i.goal;
            (i.goal = r >= s), a !== i.goal && (o = !0);
        }),
            o && requestAnimationFrame(So),
            (Hn = !1);
    }
    function So() {
        if (Xt) return;
        let t = ec();
        t
            ? ((Xt = !0),
              t(() => {
                  (Xt = !1), So();
              }))
            : ((Xt = !1), setTimeout(Re, 0));
    }
    function ec() {
        let t = -1,
            e = nt.map(({ goal: n, el: r }) => ({
                goal: n,
                fixed: Mt(r, "x-bar-fixed"),
            }));
        if (
            (e.forEach(({ goal: n, fixed: r }, o) => {
                let i = n === r;
                !i && t === -1 && (t = o),
                    !i && o > 0 && e[o - 1].fixed && Kt[o].slide && (t = o);
            }),
            t !== -1)
        ) {
            let n = nt[t],
                r = n.goal;
            if (!r && !Mt(n.el, "x-bar-fixed")) return !1;
            let o = r ? nc : rc;
            return (i) => o(nt[t], Kt[t], { st: window.scrollY, done: i });
        }
        return !1;
    }
    function nc(
        { el: t, space: e, content: n, shrinkHeight: r, height: o },
        {
            top: i,
            slide: s,
            elOffset: a,
            translateY: c,
            firstBar: u,
            only_show_on_scroll_up: p,
        },
        { st: f, done: d }
    ) {
        let l = { top: `${i}px` },
            m = s || (!u && a + r < f + i) || p;
        if (r && o !== r) {
            l.height = r;
            let { paddingTop: v, paddingBottom: w } = getComputedStyle(t);
            (n.style.height = `calc(${r}px - (${v} + ${w}))`),
                (t.style.height = `calc(${r}px - (${v} + ${w}))`);
        }
        m && (l.transform = `translate3d( 0, ${c}, 0)`);
        let h = () => d();
        if (
            (Object.entries(l).forEach(([v, w]) => {
                t.style.setProperty(v, w);
            }),
            e)
        ) {
            e.style.display = "";
            let v = o + "px";
            v !== e.style.height && (e.style.height = v);
        }
        zn.forEach((v) => void Pn(t, v)),
            Mn(t, "x-bar-is-initially-hidden"),
            wo(t);
        let g = window.getComputedStyle(t)["transition-duration"];
        (g = g ? parseFloat(g.replace("s", "")) : 0),
            m
                ? (Pn(t, "x-bar-is-visible"),
                  (t.style.transform = ""),
                  g !== 0 ? mo(t, "transitionend", h) : d())
                : d();
    }
    function rc(
        { el: t, space: e, props: n, content: r, shrinkHeight: o },
        {
            top: i,
            slide: s,
            elOffset: a,
            translateY: c,
            firstBar: u,
            only_show_on_scroll_up: p,
        },
        { st: f, done: d }
    ) {
        let l = parseFloat(n.shrink),
            m = !1,
            h = s || (!u && a + o < f + i) || (p && a + o < f + i);
        function y() {
            let w = window.getComputedStyle(t)["transition-duration"];
            if (((w = w ? parseFloat(w.replace("s", "")) : 0), w === 0)) {
                g();
                return;
            }
            mo(t, "transitionend", g), setTimeout(g, w * 1e3 + 100);
        }
        n.hideInitially && Pn(t, "x-bar-is-initially-hidden");
        function g() {
            m ||
                ((m = !0),
                e && (e.style.display = "none"),
                (r.style.height = ""),
                (t.style.top = ""),
                (t.style.transform = ""),
                (t.style.height = ""),
                (t.style.width = ""),
                zn.forEach((v) => Mn(t, v)),
                Mn(t, "x-bar-is-visible"),
                d());
        }
        h
            ? ((t.style.transform = `translate3d( 0, ${c}, 0)`), y())
            : !isNaN(l) && l < 1
            ? ((r.style.height = ""), (t.style.height = ""), y())
            : g();
    }
    function oc() {
        !ze ||
            Ee(".cs-sticky-bar-waypoint-debug").forEach(function (t) {
                t.remove();
            });
    }
    function Rn(t, e = "red", n = "white") {
        if (!ze) return;
        let r = `<div class="cs-sticky-bar-waypoint-debug" style="position:absolute;height:1px;width:100%;top:${t}px;border-top:1px solid ${e};z-index:999999"><span style="color: ${n};background-color: ${e};left: 0;position: absolute;top: 0; padding: .5em 1em; transform: translate3d(0,-50%,0);";>${t}</span></div>`,
            o = document.createElement("div");
        (o.innerHTML = r), document.body.appendChild(o.childNodes[0]);
    }
    function ic() {
        let t = 0;
        return (
            nt.forEach(function (e) {
                var n;
                t +=
                    e.goal && !((n = e.props) == null ? void 0 : n.zStack)
                        ? e.height
                        : 0;
            }),
            t
        );
    }
    R.filter("fixed_top_offset", (t) => Math.max(t, ic() + W()));
    var _n = () => {
            $e(!0) || $n();
        },
        qn = () => {
            $e(!0), $n();
        };
    function sc() {
        if (typeof window.ResizeObserver == "undefined") return;
        let t = window.document.body.clientHeight;
        new ResizeObserver(
            D(function (n) {
                !n ||
                    document.body.classList.contains(
                        "x-body-scroll-disabled"
                    ) ||
                    (t !== window.document.body.clientHeight &&
                        ((t = window.document.body.clientHeight), _n()));
            }, 100)
        ).observe(document.body);
    }
    b("[data-x-bar]", (t, e) => {
        bo ||
            ((zn = (Mt(document.body, "x-boxed-layout-active")
                ? "x-bar-fixed x-container max width"
                : "x-bar-fixed"
            ).split(" ")),
            U(_n),
            tc(_n),
            Xa(Re),
            sc(),
            (bo = !0));
        let { id: n, region: r } = e;
        if (!Mt(t, "x-bar-is-sticky") || r !== "top") return;
        var { top: o, height: i } = t.getBoundingClientRect();
        i = Math.round(i);
        let s = document.querySelector(`.${n}.x-bar-space`);
        return (
            s && (s.style.height = i + "px"),
            Ht.push({
                id: n,
                el: t,
                props: e,
                height: i,
                topOffset: i,
                shrinkHeight: To(i, e.shrink),
                space: s,
                content: t.querySelector(".x-bar-content"),
                visible: go(t),
                startingRectTop: o,
            }),
            qn(),
            setTimeout(function () {
                qn();
            }, 1e3),
            function () {
                qn(), Re();
            }
        );
    });
    function To(t, e) {
        return !isNaN(e) && e > 0 ? e * t : t;
    }
    var { listener: ac, oncePassive: cc } = S;
    b('.x-alert [data-dismiss="alert"]', (t) =>
        ac(t, "click", (e) => {
            e.preventDefault();
            let n = t.parentElement;
            n.classList.remove("in"),
                n.classList.remove("x-effect-enter"),
                cc(n, "transitionend", () => {
                    if (window.csGlobal && window.csGlobal.isPreview) {
                        n.style.display = "none";
                        return;
                    }
                    n.remove();
                });
        })
    );
    var { util: lc } = window.csGlobal.rivet,
        { addClass: te, removeClass: ee, hasClass: _e } = lc;
    function zt(t, e) {
        if (e) {
            if (!t || _e(t, "x-anchor-layered-back")) return;
            te(t, "x-active");
        } else ee(t, "x-active");
    }
    function Dn(t, e) {
        if (e) {
            if (!t || _e(t, "x-active") || _e(t, "x-currently-active")) return;
            te(t, "x-currently-active");
        } else ee(t, "x-currently-active");
    }
    function Ao(t) {
        setTimeout(() => {
            let e = t.closest(".x-menu");
            e.addEventListener("transitionend", function (n) {
                let r = e.getBoundingClientRect().top;
                if (r < 0 && n.propertyName === "height") {
                    let o = 0,
                        i =
                            t.closest(
                                ".x-bar-v .x-bar-scroll-inner, .x-off-canvas-content, .x-modal"
                            ) || window;
                    if (i === window) {
                        let s = window.pageYOffset,
                            a = parseInt(
                                window.getComputedStyle(
                                    document.documentElement
                                ).marginTop
                            ),
                            c = parseInt(window.getComputedStyle(e).fontSize);
                        o = Math.max(0, r + s - a - c);
                    }
                    i.scrollTo({ top: o, left: 0, behavior: "smooth" });
                }
            });
        }, 0);
    }
    function uc(t) {
        var e = t.offsetHeight,
            n = getComputedStyle(t);
        return (e += parseInt(n.marginTop) + parseInt(n.marginBottom)), e;
    }
    var Eo = (t) =>
            Math.max(
                t.offsetHeight,
                Array.from(t.children).reduce((e, n) => e + uc(n) || 0, 0)
            ),
        Co = (t, e) => {
            let n = t.closest("[data-x-toggle-layered-root]");
            n && (n.style.height = `${e}px`);
        };
    function fc(t) {
        Co(t, Eo(t));
        let e = t.closest(
            `ul:not([data-x-toggleable="${t.getAttribute(
                "data-x-toggleable"
            )}"])`
        );
        ee(e, "x-current-layer"),
            te(e, "x-prev-layer"),
            te(t, "x-current-layer"),
            Ao(t);
    }
    function dc(t) {
        let e = t.closest(
            `ul:not([data-x-toggleable="${t.getAttribute(
                "data-x-toggleable"
            )}"])`
        );
        !_e(e, "x-prev-layer") ||
            (Co(t, Eo(e)),
            ee(t, "x-current-layer"),
            te(e, "x-current-layer"),
            ee(e, "x-prev-layer"),
            Ao(t));
    }
    function Lo(t, e) {
        return e ? fc(t) : dc(t);
    }
    function ko(t, e, n) {
        var r,
            o,
            i,
            s,
            a = !1,
            c = !1,
            u = {},
            p = 0,
            f = 0,
            d = { sensitivity: 7, interval: 100, timeout: 0, handleFocus: !1 };
        function l(x, T) {
            return (
                f && (f = clearTimeout(f)), (p = 0), c ? void 0 : n.call(x, T)
            );
        }
        function m(x) {
            (r = x.clientX), (o = x.clientY);
        }
        function h(x, T) {
            if (
                (f && (f = clearTimeout(f)),
                Math.abs(i - r) + Math.abs(s - o) < d.sensitivity)
            )
                return (p = 1), c ? void 0 : e.call(x, T);
            (i = r),
                (s = o),
                (f = setTimeout(function () {
                    h(x, T);
                }, d.interval));
        }
        u.options = function (x) {
            var T = x.handleFocus !== d.handleFocus;
            return (
                (d = Object.assign({}, d, x)),
                T && (d.handleFocus ? C() : L()),
                u
            );
        };
        function y(x) {
            return (
                (a = !0),
                f && (f = clearTimeout(f)),
                t.removeEventListener("mousemove", m, !1),
                p !== 1 &&
                    ((i = x.clientX),
                    (s = x.clientY),
                    t.addEventListener("mousemove", m, !1),
                    (f = setTimeout(function () {
                        h(t, x);
                    }, d.interval))),
                this
            );
        }
        function g(x) {
            return (
                (a = !1),
                f && (f = clearTimeout(f)),
                t.removeEventListener("mousemove", m, !1),
                p === 1 &&
                    (f = setTimeout(function () {
                        l(t, x);
                    }, d.timeout)),
                this
            );
        }
        function v(x) {
            a || ((c = !0), e.call(t, x));
        }
        function w(x) {
            !a && c && ((c = !1), n.call(t, x));
        }
        function C() {
            t.addEventListener("focus", v, !1),
                t.addEventListener("blur", w, !1);
        }
        function L() {
            t.removeEventListener("focus", v, !1),
                t.removeEventListener("blur", w, !1);
        }
        return (
            (u.remove = function () {
                !t ||
                    (t.removeEventListener("mouseover", y, !1),
                    t.removeEventListener("mouseout", g, !1),
                    L());
            }),
            t &&
                (t.addEventListener("mouseover", y, !1),
                t.addEventListener("mouseout", g, !1)),
            u
        );
    }
    var { util: pc } = window.csGlobal.rivet,
        {
            addClass: Bn,
            removeClass: Fn,
            hasClass: fd,
            getOuterHeight: Oo,
            oncePassive: Io,
            makeAlternatingSynchronizer: mc,
        } = pc,
        hc = (t) =>
            mc(
                (e) => {
                    t.setAttribute("aria-hidden", "false");
                    let n = Oo(t);
                    Fn(t, "x-collapsed"),
                        Bn(t, "x-collapsing"),
                        t.offsetHeight,
                        (t.style.height = `${n}px`),
                        Io(t, "transitionend", () => {
                            Fn(t, "x-collapsing"), (t.style.height = ""), e();
                        });
                },
                (e) => {
                    t.setAttribute("aria-hidden", "true"),
                        (t.style.height = `${Oo(t)}px`),
                        Bn(t, "x-collapsing"),
                        t.offsetHeight,
                        (t.style.height = ""),
                        Io(t, "transitionend", () => {
                            Fn(t, "x-collapsing"), Bn(t, "x-collapsed"), e();
                        });
                }
            ),
        Wn = new WeakMap(),
        gc = (t) => (Wn.has(t) || Wn.set(t, hc(t)), Wn.get(t));
    function Po(t, e) {
        gc(t)(e);
    }
    var { util: Mo } = window.csGlobal.rivet,
        {
            listener: yc,
            debounce: Ho,
            addClass: vc,
            removeClass: wc,
            hasClass: ct,
            toggleClass: Z,
            oncePassive: zo,
            scrollingDisable: xc,
            scrollingEnable: $o,
        } = Mo,
        qe = null,
        De = (t) =>
            document.querySelector(`[data-x-toggleable="${t}"][data-x-toggle]`),
        bc = (t) =>
            document.querySelector(
                `[data-x-toggleable="${t}"]:not([data-x-toggle])`
            ),
        Ro = (t) =>
            t
                ? t.parentElement.matches(".x-nav-tabs-item")
                    ? "classic-tab"
                    : t.getAttribute("data-x-toggle")
                : null,
        Sc = (t) => ["tab", "classic-tab"].includes(Ro(t)),
        Nn = (t) => t && t.getAttribute("data-x-toggle-group"),
        Tc = (t) =>
            !!document.querySelector(
                `[data-x-toggle-group="${t || ""}"].x-active`
            ),
        lt = (t, e) => t && (t.matches(e) ? t : t.closest(e)),
        Ac = (t, e) => t && (t.matches(e) ? t : t.find(e)),
        Ec = (t) => lt(t, "[data-x-toggle]"),
        Cc = (t) => lt(t, "[data-x-toggleable]"),
        K = (t) => t && t.getAttribute("data-x-toggleable"),
        Be = (t) => t && t.getAttribute("data-x-toggle-hash"),
        Lc = (t) => t && t.matches(".mce-content-body"),
        kc = (t) => {
            let { marginTop: e, marginBottom: n } = getComputedStyle(t);
            return t.offsetHeight + parseInt(e) + parseInt(n);
        },
        ne = () => window.location.hash.replace("#", ""),
        _o = (t) =>
            document.querySelectorAll(
                `[data-x-toggle-group="${Nn(t)}"]:not([data-x-toggleable="${K(
                    t
                )}"])`
            ),
        Oc = (t) =>
            document.querySelectorAll(
                `[data-x-toggle-group="${Nn(t)}"].x-active`
            );
    Mo.toggle = { getOthersInGroup: _o, getActiveInGroup: Oc };
    var Ic = (t) => {
            let e = Ec(t);
            return [e, K(e)];
        },
        qo = (t) =>
            Array.from(document.querySelectorAll("[data-x-toggle-hash]"))
                .filter((e) => Be(e) === t)
                .map(K),
        re = (t) => lt(t, "[data-x-toggleable]:not([data-x-toggle])"),
        Fe = (t, e) => {
            let n = [],
                r,
                o = t;
            for (; (r = o && re(o)); ) {
                let i = K(r);
                (o = De(i)), n.push(i);
            }
            return e && n.shift(), n;
        };
    window.TCOToggleStates ||
        ((window.TCOToggleStates = new Map()),
        (window.TCOToggleScrollBlocking = new Map()));
    var Pc = !1,
        ut = window.TCOToggleStates,
        Vn = window.TCOToggleScrollBlocking,
        ft = !1;
    function Mc() {
        let t = [];
        for (let [e, n] of ut) {
            let r = bc(e);
            n && Vn.has(e) && t.push(e), r || ut.delete(e);
        }
        t.find((e) => !ut.has(e)) && requestAnimationFrame($o);
    }
    window.integrityCheckTimeout || (window.integrityCheckTimeout = null);
    var Hc = function () {
        clearTimeout(window.integrityCheckTimeout),
            (window.integrityCheckTimeout = setTimeout(Mc, 500));
    };
    window.xToggleIntegrityCheck || (window.xToggleIntegrityCheck = Hc);
    function zc(t) {
        let e = De(t);
        switch (Ro(e)) {
            case "collapse":
            case 1:
            case "layered":
                return e.matches(".x-active");
            case "tab":
                return Tc(Nn(e));
            case "classic-tab":
                return e.parentElement.matches(".active");
            case "collapse-b":
                return !e.matches(".collapsed");
        }
        return e ? e.classList && e.classList.contains("x-active") : null;
    }
    function $t(t) {
        return ut.has(t) || ut.set(t, zc(t)), ut.get(t);
    }
    function Y({
        id: t,
        state: e,
        _triggeringGroup: n,
        force: r,
        hashUpdate: o = !window.csGlobal.isPreview,
    }) {
        let i = $t(t);
        typeof e == "undefined" && (e = !i);
        let s = De(t);
        (!r && !n && (Lc(s) || (!e && Sc(s)))) ||
            (ut.set(t, e),
            (i !== e || r) && ($c(t, e), o && Fc(s, e)),
            n ||
                _o(s).forEach((a) => {
                    Y({
                        force: r,
                        id: K(a),
                        state: !1,
                        _triggeringGroup: !0,
                        hashUpdate: o,
                    });
                }));
    }
    window.xToggleGetState = (t) => $t(t);
    window.xToggleGetStateFromNode = (t) => $t(K(t));
    window.xToggleUpdate = (t, e) => Y({ id: t, state: e });
    window.xToggleDelete = (t) => ut.delete(t);
    window.xToggleGetId = K;
    var Do = !1;
    window.xToggleTempUnlock = () => {
        (Do = !!ft), (ft = !1);
    };
    window.xToggleTempRelock = () => {
        ft = Do;
    };
    window.xToggleSetLocking = (t) => {
        ft = !!t;
    };
    function $c(t, e) {
        Array.from(
            document.querySelectorAll(`[data-x-toggleable="${t}"]`)
        ).forEach((n) => {
            n.dispatchEvent(
                new CustomEvent("tco-toggle", {
                    bubbles: !1,
                    detail: { state: e, id: t },
                })
            );
        });
    }
    function Bo(t) {
        return yc(
            t,
            "tco-toggle",
            ({ currentTarget: e, detail: { state: n, id: r } }) => {
                var o;
                if (
                    (t.hasAttribute("data-x-toggle-overlay") &&
                        (n
                            ? ((o = document.querySelector(
                                  `[data-x-toggleable=${r}][role="dialog"]`
                              )) == null
                                  ? void 0
                                  : o.hasAttribute(
                                        "data-x-disable-body-scroll"
                                    )) &&
                              (requestAnimationFrame(xc), Vn.set(r, !0))
                            : n || (Vn.delete(r), requestAnimationFrame($o))),
                    t.hasAttribute("aria-hidden") &&
                        t.setAttribute("aria-hidden", !n),
                    t.hasAttribute("aria-expanded") &&
                        t.setAttribute("aria-expanded", n),
                    t.hasAttribute("aria-selected") &&
                        t.setAttribute("aria-selected", n),
                    t.hasAttribute("data-x-toggle-collapse")
                        ? Po(t, n)
                        : t.hasAttribute("data-x-toggle-layered")
                        ? Lo(t, n)
                        : ct(t, "x-anchor")
                        ? zt(t, n)
                        : t.getAttribute("data-x-toggle") === "collapse-b"
                        ? Z(t, "collapsed", !n)
                        : ct(t.parentElement, "x-nav-tabs-item")
                        ? Z(t.parentElement, "active", n)
                        : ct(t, "x-tab-pane")
                        ? Z(t, "active", n)
                        : ct(t, "x-dropdown")
                        ? We(t, n)
                        : Z(t, "x-active", n),
                    n &&
                        ct(t, "x-modal") &&
                        setTimeout(function () {
                            window.dispatchEvent(new Event("resize"));
                        }, 150),
                    t.matches("[data-x-toggle]"))
                ) {
                    if ((Z(t.querySelector(".x-toggle"), "x-active", n), Pc))
                        return;
                    Array.from(
                        t.querySelectorAll("[data-x-toggle-anim]")
                    ).forEach((i) => {
                        ct(i, "x-running") ||
                            zo(i, "animationiteration", () => {
                                wc(i, "x-running"),
                                    ct(t, "x-active") ||
                                        i.removeAttribute("style");
                            }),
                            vc(i, "x-running"),
                            ct(t, "x-active") &&
                                (i.style.animationName = i.getAttribute(
                                    "data-x-toggle-anim"
                                ));
                    });
                }
                if (n && !window.csGlobal.isPreview)
                    if (
                        e.querySelector(
                            "[data-x-search][data-x-search-autofocus]"
                        )
                    ) {
                        let i = e.querySelector(
                            "[data-x-search][data-x-search-autofocus] input"
                        );
                        if ((Wc(i, 350), !fn())) return;
                        zo(e, "transitionend", function () {
                            i.scrollIntoView(!0);
                        });
                    } else {
                        let i = t.querySelector('[tabindex="-1"]');
                        i &&
                            i.focus &&
                            (i.focus(),
                            setTimeout(function () {
                                i.focus();
                            }, 250));
                    }
            }
        );
    }
    var Rc = (t) => {
            let e = re(t);
            return !!(
                e &&
                ((e.matches(".x-modal") && !t.closest(".x-modal-content")) ||
                    (e.matches(".x-off-canvas") &&
                        !t.closest(".x-off-canvas-content")))
            );
        },
        _c = (t, { exclude: e = [] } = {}) => {
            if (ft) return;
            let n = [...Fe(t, Rc(t)), ...e].filter((r) => !!r);
            Array.from(
                document.querySelectorAll(
                    "[data-x-toggleable].x-dropdown, [data-x-toggleable].x-off-canvas, [data-x-toggleable].x-modal"
                )
            )
                .map((r) => r.getAttribute("data-x-toggleable"))
                .filter((r) => !n.includes(r))
                .forEach((r) => Y({ id: r, state: !1 }));
        };
    function Gn() {
        qo(ne()).forEach((e) => {
            Y({ id: e, state: !0 });
        });
    }
    var qc = (t, e, n) => {
        if (!t || e.isContentEditable) return !1;
        if (t.matches("[data-x-toggle-hover]")) {
            if (ft) return !0;
            if (n) return !1;
        }
        let r = t.querySelector("[data-x-toggle-nested-trigger]");
        return r
            ? lt(e, "[data-x-toggle-nested-trigger]") === r
            : lt(e, "[data-x-toggle]") === t;
    };
    var Un = ({ ignoreHoverToggle: t = !0 } = {}) => (e) => {
            let [n, r] = Ic(e.target);
            qc(n, e.target, t) &&
                (lt(e.target, "a[href]") && e.preventDefault(), Y({ id: r }));
            let o = !r && lt(e.target, "[data-x-toggle-close]"),
                i = o && K(Cc(o));
            i && Y({ id: i });
            let s = lt(e.target, "a[href]"),
                a = s ? s.getAttribute("href").replace("#", "").trim() : "",
                u = a && a === ne() ? qo(ne()) : [];
            u.length > 0 &&
                u.forEach((p) => {
                    Y({ id: p, state: !0 });
                }),
                _c(e.target, { exclude: [r, i, ...u] });
        },
        z = {},
        Dc = (t) => (e) => {
            Y({ id: t, state: !0 });
        },
        Bc = (t) => (e) => (
            (z[t].canHoverLeave = !1), Y({ id: t, state: !1 }), () => {}
        );
    function Fo(t) {
        let e = K(t),
            n = De(e);
        if (!n) return;
        let r = t.getAttribute("data-x-hoverintent");
        r = JSON.parse(r || "{}");
        let { interval: o = 100, timeout: i = 100 } = r;
        return (
            (z[e] = {
                canHoverLeave: !1,
                cancelEnter: () => {},
                cancelLeave: () => {},
                hasHoverToggle: () =>
                    !!document.querySelector(
                        `[data-x-toggleable="${e}"][data-x-toggle-hover]`
                    ),
                onEnter: Ho(Dc(e), o),
                onLeave: Ho(Bc(e), i),
            }),
            [
                G(n, "mouseenter", () => {
                    z[e].hasHoverToggle() &&
                        ((z[e].canHoverLeave = !0),
                        z[e].cancelLeave(),
                        $t(e) || (z[e].cancelEnter = z[e].onEnter()));
                }),
                G(n, "mouseleave", () => {
                    z[e].canHoverLeave &&
                        (ft || (z[e].cancelLeave = z[e].onLeave()));
                }),
                G(t, "mouseenter", () => {
                    let s = [e, ...Fe(re(t))];
                    setTimeout(() => {
                        s.forEach((a) => {
                            z[a] && z[a].cancelLeave();
                        });
                    });
                }),
                G(t, "mouseleave", ({ toElement: s }) => {
                    [e, ...Fe(re(t))].forEach((u) => {
                        z[u] &&
                            z[u].canHoverLeave &&
                            (ft || (z[u].cancelLeave = z[u].onLeave()));
                    }),
                        Fe(re(s)).forEach((u) => {
                            z[u] && z[u].cancelLeave();
                        });
                }),
            ]
        );
    }
    function We(t, e) {
        let r = window.getComputedStyle(t)["transition-duration"];
        if (
            ((r = r ? parseFloat(r.replace("s", "")) : 0),
            qe && (qe(), (qe = null)),
            !r)
        ) {
            Z(t, "x-active", e), Z(t, "x-active-animate", e);
            return;
        }
        let o = r * 1e3,
            i = e ? "x-active" : "x-active-animate",
            s = e ? "x-active-animate" : "x-active",
            a = e ? 15 : o;
        requestAnimationFrame(function () {
            Z(t, i, e), window.dispatchEvent(new CustomEvent("resize"));
        });
        let c = setTimeout(function () {
            requestAnimationFrame(function () {
                Z(t, s, e);
            });
        }, a);
        return (qe = function () {
            !c ||
                (clearTimeout(c),
                Z(t, "x-active", e),
                Z(t, "x-active-animate", e));
        });
    }
    function Wo(t) {
        if (t.tagName === "BUTTON") return;
        let e = Un({ ignoreHoverToggle: !1 });
        t.addEventListener("keydown", (n) => {
            n.key === "Enter" && e(n);
        });
    }
    function No(t) {
        let e = function () {
            let r = Ac(t, ".x-current-layer"),
                o = Array.from(r.children)
                    .filter((i) => i.matches("li"))
                    .reduce((i, s) => i + kc(s), 0);
            t.style.height = `${o}px`;
        };
        e();
        let n = D(e, 50);
        window.addEventListener("resize", n);
    }
    function Fc(t, e) {
        let n = Be(t);
        if (!n) return;
        let r = e ? n : "";
        (!e && `#${n}` !== window.location.hash) ||
            (history.pushState(null, null, "#" + r),
            window.dispatchEvent(new CustomEvent("hashchange")));
    }
    function Wc(t, e) {
        if ((e || (e = 100), t)) {
            var n = document.createElement("input");
            (n.style.position = "fixed"),
                (n.style.top = t.offsetTop + 7 + "px"),
                (n.style.left = t.offsetLeft + "px"),
                (n.style.height = 0),
                (n.style.opacity = 0),
                document.body.appendChild(n),
                n.focus(),
                setTimeout(function () {
                    t.focus(), t.click(), document.body.removeChild(n);
                }, e);
        }
    }
    var {
            addClass: Yn,
            siblings: Ed,
            once: Nc,
            removeClass: Ne,
            hasClass: oe,
            listener: ie,
            makeGetComputedStyle: Vo,
            makeGetComputedFloatValues: Vc,
        } = S,
        Gc = { interval: 25, timeout: 25, sensitivity: 9 };
    function Go(t) {
        Qc(t), Jc();
    }
    var jn = (t) => (t ? t.getBoundingClientRect() : null),
        Uc = Vo("position"),
        Yc = Vo("direction"),
        jc = Vc([
            "paddingLeft",
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "borderTopWidth",
            "borderBottomWidth",
        ]);
    function Qc(t) {
        t = Object.assign(
            {
                selectors: [],
                indicatingSelector: "a",
                rootElementEvents: !1,
                transitionTimeout: null,
                requireClick() {
                    return !1;
                },
                toggleOnFocus: !0,
                activate(o) {
                    t.indicatingSelector
                        ? Yn(
                              o.querySelector(t.indicatingSelector),
                              t.activeClass
                          )
                        : Yn(o, t.activeClass);
                    let i = o.querySelector(t.nestedSelector);
                    if (oe(i, "x-dropdown")) {
                        t.transitionTimeout && t.transitionTimeout(),
                            (t.transitionTimeout = We(i, !0));
                        return;
                    }
                    Yn(i, t.activeClass);
                },
                deactivate(o) {
                    t.indicatingSelector
                        ? Ne(
                              o.querySelector(t.indicatingSelector),
                              t.activeClass
                          )
                        : Ne(o, t.activeClass);
                    let i = o.querySelector(t.nestedSelector);
                    if (oe(i, "x-dropdown")) {
                        t.transitionTimeout && t.transitionTimeout(),
                            (t.transitionTimeout = We(i, !1));
                        return;
                    }
                    Ne(i, t.activeClass);
                },
                isActive(o) {
                    return t.indicatingSelector
                        ? oe(
                              o.querySelector(t.indicatingSelector),
                              t.activeClass
                          )
                        : oe(o, t.activeClass);
                },
                deactivateChildren(o, i) {
                    Array.from(o.querySelectorAll(t.nestedSelector)).forEach(
                        (s) => {
                            !oe(s, t.activeClass) ||
                                (Ne(s, t.activeClass),
                                typeof i == "function" && i(s));
                        }
                    );
                },
                deactivateChild: null,
                activeClass: "x-active",
                nestedSelector: ".sub-menu",
                findSiblings: null,
                closeSiblings: !0,
            },
            typeof t == "object" ? t : {}
        );
        function e(o) {
            var i = !1;
            o._stemAllowFocusIn = !0;
            let s = o.closest("[data-x-hoverintent]"),
                a = s && s.getAttribute("data-x-hoverintent"),
                c = a ? JSON.parse(a) : Gc,
                u = t.rootElementEvents
                    ? o
                    : o.querySelector(t.indicatingSelector) || o,
                p = ie(u, "mousedown", h),
                f = ie(u, "touch", h),
                d = [p, f];
            if (
                (d.push(
                    ie(u, "touchstart", () => {
                        o._stemAllowFocusIn = !1;
                    })
                ),
                t.toggleOnFocus &&
                    (d.push(ie(u, "focusin", l)), d.push(ie(o, "focusout", m))),
                !t.requireClick(o))
            ) {
                d.push(
                    Wt(u, "touchstart", () => {
                        i = !0;
                    })
                );
                let y = ko(
                    o,
                    function () {
                        i || (p(), f(), n(o, !0));
                    },
                    function () {
                        i || n(o, !1);
                    }
                );
                try {
                    y.options(c);
                } catch {}
                d.push(() => y.remove());
            }
            function l() {
                o._stemAllowFocusIn && r(o, n(o, !0));
            }
            function m() {
                setTimeout(() => {
                    o.contains(document.activeElement) || r(o, n(o, !1));
                }, 0);
            }
            function h(y) {
                y.type === "mousedown" &&
                    Nc(
                        y.currentTarget,
                        "click",
                        (v) => void v.preventDefault()
                    ),
                    y.preventDefault(),
                    y.stopPropagation();
                let g = n(o);
                if ((r(o, g), g && t.closeSiblings)) {
                    let v =
                        typeof t.findSiblings == "function"
                            ? t.findSiblings(o)
                            : v(o);
                    v.forEach((w) => {
                        n(w, !1), r(w, !1);
                    });
                }
            }
            return d;
        }
        t.selectors.forEach((o) => {
            b(o, e);
        });
        function n(o, i) {
            return (
                (o._stemAllowFocusIn = !0),
                typeof i == "undefined" && (i = !t.isActive(o)),
                i
                    ? (typeof t.beforeActivate == "function" &&
                          t.beforeActivate(o),
                      t.activate(o),
                      typeof t.afterActivate == "function" &&
                          t.afterActivate(o))
                    : (typeof t.beforeDeactivate == "function" &&
                          t.beforeDeactivate(o),
                      t.deactivate(o),
                      typeof t.afterDeactivate == "function" &&
                          t.afterDeactivate(o)),
                t.isActive(o)
            );
        }
        function r(o, i) {
            typeof t.deactivateChildren == "function" &&
                (clearTimeout(o._stemCloseChildrenTimer),
                i ||
                    (o._stemCloseChildrenTimer = setTimeout(function () {
                        t.deactivateChildren(o, t.deactivateChild);
                    }, 1e3)));
        }
    }
    function Jc() {
        function t(l) {
            var m = [];
            function h(g, v) {
                if (!v && g.hasAttribute("data-x-stem")) {
                    m.push(g), t(g);
                    return;
                }
                if (g.children)
                    for (var w = 0; w < g.children.length; w++)
                        h(g.children[w]);
            }
            h(l, !0);
            let y = function () {
                o(l),
                    setTimeout(() => {
                        m.forEach(n);
                    }, 0);
            };
            l.addEventListener("x-stem:update", y, !1);
        }
        let e = [];
        function n(l) {
            l && l.dispatchEvent(new CustomEvent("x-stem:update"));
        }
        b("[data-x-stem-menu-top], [data-x-stem-root]", (l) => {
            requestAnimationFrame(() => {
                t(l), n(l), e.push(l);
            });
        });
        let r = D(function () {
            e.forEach(n);
        }, 50);
        window.addEventListener(
            "tco-toggle",
            ({ detail: { state: l } = {} }) => {
                l && r();
            },
            H
        ),
            window.addEventListener("resize", r, H),
            window.addEventListener("scroll", r, H),
            U(r);
        function o(l) {
            if (!l) return;
            let m = d(l);
            if (!m) return;
            let h = jn(m),
                y = a(l),
                g =
                    y === "data-x-stem-root"
                        ? jn(
                              document.querySelector(
                                  `[data-x-toggleable="${l.getAttribute(
                                      "data-x-toggleable"
                                  )}"][data-x-toggle]`
                              )
                          )
                        : h;
            if (!g) return;
            let v = l.getAttribute("data-x-stem-force");
            if (v) {
                let B = v.indexOf("d") !== -1,
                    N = v.indexOf("r") !== -1;
                l.setAttribute("data-x-stem", v),
                    y === "data-x-stem-root" && i(l, h, g, N, B),
                    y || p(l, N, B);
                return;
            }
            let w = jn(l),
                { top: C, left: L, bottom: x, right: T } = s(w, g, y),
                { x: E, y: q } = c(l, y),
                M = u(E, window.innerWidth - T, L),
                _ = u(q, window.innerHeight - x, C);
            l.setAttribute("data-x-stem", (_ ? "d" : "u") + (M ? "r" : "l")),
                y === "data-x-stem-root" && i(l, h, g, M, _),
                y || p(l, M, _);
        }
        function i(
            l,
            m,
            { top: h, left: y, bottom: g, right: v, height: w, width: C },
            L,
            x
        ) {
            let T = l.getAttribute("data-x-stem-root").indexOf("h") !== -1;
            if (L) {
                let E = y - m.left;
                (l.style.left = `${T ? E + C : E}px`), (l.style.right = "auto");
            } else {
                let E = m.right - v;
                (l.style.right = `${T ? E + C : E}px`), (l.style.left = "auto");
            }
            if (x) {
                let E = h - m.top;
                (l.style.top = `${T ? E : E + w}px`), (l.style.bottom = "auto");
            } else {
                let E = m.bottom - g;
                (l.style.bottom = `${T ? E : E + w}px`), (l.style.top = "auto");
            }
        }
        function s({ height: l, width: m }, h, y) {
            let g = {
                top: h.top - l,
                right: h.left + h.width + m,
                bottom: h.top + l,
                left: h.left - m,
            };
            return y && ((g.right += h.width), (g.bottom += h.height)), g;
        }
        function a(l) {
            return l.hasAttribute("data-x-stem-menu-top")
                ? "data-x-stem-menu-top"
                : l.hasAttribute("data-x-stem-root")
                ? "data-x-stem-root"
                : null;
        }
        function c(l, m) {
            if (m) {
                var h = Yc(l) === "ltr",
                    y = l.getAttribute(m).indexOf("r") !== -1;
                return { y: !0, x: !!(h ^ y) };
            }
            let g = f(l);
            return { y: g.indexOf("d") !== -1, x: g.indexOf("r") !== -1 };
        }
        function u(l, m, h) {
            if (l && m < 0) {
                if (m < h) return !1;
            } else if (h < 0 && h < m) return !0;
            return l;
        }
        function p(l, m, h) {
            let {
                paddingLeft: y,
                paddingTop: g,
                paddingRight: v,
                paddingBottom: w,
                borderTopWidth: C,
                borderBottomWidth: L,
            } = jc(l);
            if (
                (m
                    ? ((l.style.marginLeft = y !== 0 ? `${y}px` : null),
                      (l.style.marginRight = null))
                    : ((l.style.marginRight = v !== 0 ? `${v}px` : null),
                      (l.style.marginLeft = null)),
                h)
            ) {
                let x = g + C;
                (l.style.marginTop = x !== 0 ? `${x * -1}px` : null),
                    (l.style.marginBottom = null);
            } else {
                let x = w + L;
                (l.style.marginBottom = x !== 0 ? `${(w + L) * -1}px` : null),
                    (l.style.marginTop = null);
            }
        }
        function f(l) {
            return l.parentElement === null
                ? "tr"
                : l.parentElement.hasAttribute("data-x-stem-force")
                ? l.parentElement.getAttribute("data-x-stem-force")
                : l.parentElement.hasAttribute("data-x-stem")
                ? l.parentElement.getAttribute("data-x-stem")
                : f(l.parentElement);
        }
        function d(l) {
            return l.parentElement === null
                ? document.body
                : Uc(l.parentElement) === "relative"
                ? l.parentElement
                : d(l.parentElement);
        }
    }
    var {
            onLoad: Uo,
            addClass: Md,
            hasClass: Yo,
            removeClass: Hd,
            debounce: jo,
            animateToElement: Zc,
            listener: Qo,
            listenerPassive: Jo,
            onScroll: Kc,
            onResize: Xc,
            PASSIVE_ARGS: tl,
        } = S,
        Zo = (t) => t.match(/#[a-zA-Z]/);
    Go({
        selectors: [
            ".x-menu-inline .menu-item-has-children",
            ".x-menu-dropdown .menu-item-has-children",
        ],
        beforeActivate: (t) => zt(t.querySelector("a"), !0),
        beforeDeactivate: (t) => zt(t.querySelector("a"), !1),
        deactivateChild: (t) => zt(t.querySelector("a"), !1),
    });
    Uo(() => {
        let {
            selector: t,
            duration: e,
            easing: n,
            initialMove: r,
            before: o,
            after: i,
            allowScroll: s,
        } = R.apply("hash_scrolling_config", {
            selector: window.csJsData.linkSelector,
            easing: "ease-out",
            duration: 500,
            initialMove: !0,
            before: (f) => R.apply("hash_scrolling_before", f),
            after: (f) => R.apply("hash_scrolling_before", f),
            allowScroll: (...f) => R.apply("hash_scrolling_allow", !0, ...f),
        });
        function a(f) {
            try {
                return document.querySelector(f);
            } catch {}
            return null;
        }
        function c() {
            let f = !1;
            return (
                Jo(document.body, "touchstart", () => {
                    f = !1;
                }),
                Jo(document.body, "touchmove", () => {
                    f = !0;
                }),
                () => f
            );
        }
        let u = (f, d = !0, l) => {
                Zc(f, () => Pt() * -1, d ? e : 0, n, l);
            },
            p = c();
        r &&
            window.location.hash &&
            (u(a(window.location.hash), !1),
            setTimeout(() => u(a(window.location.hash), !1), 300)),
            Qo(document.body, "click", (f) => {
                let d = f.target.matches(t) ? f.target : f.target.closest(t);
                if (!d || f.tcoAbortScroll) return;
                let l = d.getAttribute("href"),
                    m = l.split("#");
                if (!m[1]) return;
                let h = m[0].replace(location.origin, ""),
                    y = `#${m[1]}`;
                if (
                    p() ||
                    (h && h !== location.pathname) ||
                    !Zo(l) ||
                    !s(d, f, y)
                )
                    return;
                let g = a(y);
                !g ||
                    (window.history.pushState &&
                        (window.history.pushState(null, null, y),
                        window.dispatchEvent(
                            new CustomEvent("tcoHistoryPush")
                        )),
                    f.preventDefault(),
                    o({ anchor: d, target: g, hash: y }),
                    u(g, !0, () => void i({ anchor: d, target: g, hash: y })));
            });
    });
    Uo(() => {
        let t = !1,
            e,
            n = new Map(),
            r = new Map(),
            o = [],
            i = jo(() => {
                var f, d;
                let p = [];
                for (let [l, m] of r) {
                    let h =
                        ((d =
                            (f = m.getBoundingClientRect()) == null
                                ? void 0
                                : f.top) != null
                            ? d
                            : 0) + window.scrollY;
                    p.push({ y: h, href: l });
                }
                o = p.sort((l, m) => m.y - l.y);
            }, 100),
            s = (p) => {
                if (e !== p) {
                    for (let [f, d] of n)
                        if (f === p)
                            for (let l of d)
                                Yo(l, "x-anchor") && Dn(l, !0),
                                    R.apply("scrollspy_activate", l);
                        else
                            for (let l of d)
                                Yo(l, "x-anchor") && Dn(l, !1),
                                    R.apply("scrollspy_deactivate", l);
                    e = p;
                }
            };
        b(window.csJsData.linkSelector, (p) => {
            let f = R.apply("scrollspy_ignore_patterns", ["#/", "#wp-toolbar"]),
                d = `#${p.getAttribute("href").trim().split("#").pop()}`;
            if (!(!Zo(d) || f.find((l) => l.match(d))))
                return (
                    n.has(d) || n.set(d, new Set()),
                    n.get(d).add(p),
                    [
                        b(
                            d,
                            (l) => (
                                r.has(d) || r.set(d, l),
                                i(),
                                () => {
                                    r.has(d) && r.delete(d);
                                }
                            )
                        ),
                        () => {
                            var l;
                            (l = n.get(d)) == null || l.delete(p);
                        },
                        Qo(
                            p,
                            "click",
                            () => {
                                (t = !0), s(d);
                            },
                            { capture: !0 }
                        ),
                    ]
                );
        }),
            Xc(i);
        let a = () => {
                var f, d;
                let p = window.scrollY + Pt() + W() + 1;
                return Math.ceil(window.innerHeight + window.scrollY) >=
                    Math.floor(document.body.offsetHeight)
                    ? (d =
                          (f = o
                              .map((l, m) => ({ ...l, i: m }))
                              .sort((l, m) => m.y - p - (l.y - p))[0]) == null
                              ? void 0
                              : f.i) != null
                        ? d
                        : -1
                    : o.findIndex(({ y: l }) => p >= l);
            },
            c = () => {
                t = !1;
                let p = a();
                s(p === -1 ? "" : o[p].href);
            },
            u = jo(c, 250);
        u(),
            window.addEventListener(
                "hashchange",
                function (p) {
                    s(window.location.hash);
                },
                tl
            ),
            Kc(() => {
                o.length <= 0 || (t ? u() : c());
            });
    });
    var {
            addClass: Qn,
            removeClass: Jn,
            farthest: Ko,
            getCachedJsonAttribute: Xo,
            oncePassive: el,
            listenerPassive: nl,
            evaluateCondition: rl,
            expandElementValue: ti,
            makeAlternatingSynchronizer: Zn,
            makeElementWeakMap: Kn,
            getDurations: ol,
            lockMotion: ei,
            forceOpaque: il,
            runAnimation: ni,
            elementMeta: sl,
            waypoint: ri,
            parseTime: al,
        } = S,
        wt = "x-effect-enter",
        Xn = "x-effect-entering",
        rt = "x-effect-exit",
        tr = "x-effect-exiting",
        Ve = "x-effect-animated",
        Ge = "x-effect-holding",
        cl = "x-effect-opacity";
    b("[data-x-single-anim]", (t, e) => {
        if (!t.classList.contains("x-always-active"))
            return nl(
                t.closest(".x-anchor, .x-text"),
                "mouseenter",
                () => void ni(t, { animation: e, remove: !0 })
            );
    });
    var oi = Kn({ scrollEffects: !1 }),
        ll = () => {
            let { get: t, set: e, has: n } = Kn();
            return (r) => (n(r) || e(r, { effects: [], particles: [] }), t(r));
        },
        Ue = ll(),
        ii = Kn(0),
        si = (t) => {
            ii.set(t, ol(t));
        },
        ai = (t, e = "transitionTime") => {
            var n, r;
            return (r = (n = ii.get(t)) == null ? void 0 : n[e]) != null
                ? r
                : 0;
        },
        ci = (
            t,
            { from: e, to: n, trans: r, record: o = !1 },
            i = () => {}
        ) => (
            t.classList.remove(e),
            t.classList.add(r),
            t.classList.add(n),
            o && si(t),
            t.csAnimationEndingTimeout &&
                clearTimeout(t.csAnimationEndingTimeout),
            () => {
                (t.csAnimationEndingTimeout = setTimeout(function () {
                    t.classList.remove(r);
                }, 250)),
                    i();
            }
        ),
        li = (t, e, n = () => {}) =>
            ni(t, { className: Ve, animation: e, remove: !0, timeout: !0 }, n),
        ul = (t, e) => {
            t.classList.contains(rt) ||
                (t.classList.contains(Ve) || t.classList.add(Ve),
                t.style.setProperty("animation-duration", "0ms", "important"),
                t.style.setProperty("animation-name", e));
        },
        ui = (t, e, n) => el(t, "transitionend", ci(t, e, n)),
        fi = (t, e, n, r) => li(t, e, ci(t, n, r)),
        fl = (t, e, n) =>
            fi(t, e, { from: rt, to: wt, trans: Xn, record: !0 }, n),
        di = (t, e, n) => fi(t, e, { from: wt, to: rt, trans: tr }, n),
        dl = (t, e) => ui(t, { from: rt, to: wt, trans: Xn, record: !0 }, e),
        pi = (t, e) => ui(t, { from: wt, to: rt, trans: tr }, e),
        pl = (t, e, n) => {
            Qn(t, Ge),
                setTimeout(
                    il(t, {
                        after: () => {
                            Jn(t, Ge), n();
                        },
                    }),
                    e
                );
        },
        mi = (t, e, n) => {
            let r = ei(t, e === "fade" ? "opacity" : null);
            t.style.setProperty("opacity", e === "fade" ? 0 : 1, "important");
            let o = ai(t);
            Qn(t, Ge),
                setTimeout(() => {
                    Jn(t, wt),
                        Jn(t, Ge),
                        Qn(t, rt),
                        t.style.removeProperty("opacity"),
                        r(),
                        n();
                }, o);
        };
    function ml(t, e, n) {
        let r,
            o = 0,
            i,
            s,
            { durationBase: a, animationAlt: c } = Xo(t, "data-x-effect"),
            u = al(a),
            p = () => {
                window.removeEventListener("mousemove", y),
                    c
                        ? n(() => {
                              f();
                          })
                        : (n(),
                          u
                              ? setTimeout(() => {
                                    f();
                                }, u)
                              : f());
            },
            f = () => {
                t.addEventListener("mouseenter", m);
            },
            d = () => {
                let {
                    top: v,
                    left: w,
                    width: C,
                    height: L,
                } = t.getBoundingClientRect();
                r.push({
                    top: v + window.scrollY,
                    left: w + window.scrollX,
                    width: C,
                    height: L,
                });
            },
            l = (v) => {
                (o = 0),
                    (r = []),
                    d(),
                    e(),
                    u
                        ? (clearTimeout(i),
                          (i = setTimeout(() => {
                              d();
                          }, u)))
                        : d();
            },
            m = (v) => {
                clearTimeout(s), window.addEventListener("mousemove", y), l(v);
            },
            h = (v) => {
                o++,
                    o > 10 &&
                        r.length ===
                            r.filter((C) =>
                                g(
                                    C,
                                    v.clientX,
                                    v.clientY,
                                    window.scrollX,
                                    window.scrollY
                                )
                            ).length &&
                        p();
            },
            y = (v) => {
                h(v),
                    clearTimeout(s),
                    (s = setTimeout(() => {
                        h(v);
                    }, 300));
            },
            g = ({ top: v, left: w, height: C, width: L }, x, T, E, q) => {
                let M = v - q,
                    _ = w - E,
                    B = x > _ && x < _ + L,
                    N = T > M && T < M + C;
                return !B || !N;
            };
        f();
    }
    b("[data-x-effect-provider]", (t, e = "") => {
        e.split(" ").filter((r) => !Ko(t, `[data-x-effect-provider*="${r}"]`))
            .length > 0 && er(t);
    });
    function er(t) {
        let e = Ue(t);
        e.registered ||
            ml(
                t,
                () => {
                    let { registered: n, ...r } = Ue(t);
                    Object.keys(r).forEach((o) => {
                        r[o].forEach(({ setup: i }) => {
                            i && i();
                        });
                    });
                },
                () => {
                    let { registered: n, ...r } = Ue(t);
                    Object.keys(r).forEach((o) => {
                        r[o].forEach(({ teardown: i }) => {
                            i && i();
                        });
                    });
                }
            ),
            (e.registered = !0);
    }
    function hi(t, e, n = () => {}, r = () => {}, o = !0) {
        let i = Ko(e, `[data-x-effect-provider*="${t}"]`),
            s = o ? i || e : i;
        return s
            ? (Ue(s)[t].push({ el: e, setup: n, teardown: r }), e === s)
            : !1;
    }
    b(".x-anchor", (t) => {
        hi("particles", t) && er(t);
    });
    b(
        "[data-x-effect]",
        (t, e) => {
            try {
                return (
                    hi(
                        "effects",
                        t,
                        () => {
                            e.animationAlt && li(t, e.animationAlt);
                        },
                        () => {},
                        !t.matches("x-anchor")
                    ) && er(t),
                    Sl(t, e)
                );
            } catch (n) {
                console.warn(n);
            }
        },
        1e3
    );
    var hl = (t, e) =>
            Zn(
                (n) => dl(t, n),
                (n) => (e === "transform" ? pi(t, n) : mi(t, e, n))
            ),
        gl = (t, e, { animationEnter: n, animationExit: r }) =>
            Zn(
                (o) => fl(t, n, o),
                (o) => (e === "animation" ? di(t, r, o) : mi(t, e, o))
            ),
        yl = (t, e, n) =>
            Zn(
                (r) => {
                    if ((si(t), ["transform", "animation"].includes(e))) {
                        e === "animation" &&
                            (t.classList.remove(Ve),
                            t.style.setProperty("opacity", 0, "important"),
                            t.style.removeProperty("animation-name"),
                            t.offsetHeight,
                            t.style.removeProperty("opacity"));
                        let o = ei(t, "opacity");
                        t.classList.remove(rt), o();
                    }
                    r();
                },
                (r) => {
                    switch (e) {
                        case "none":
                            return pl(t, ai(t), r);
                        case "transform":
                            return pi(t, r);
                        case "animation":
                            return di(t, n.animationExit, r);
                        default:
                            r();
                    }
                }
            ),
        gi = (t, e, n) => {
            let r = Xo(t, "data-x-effect");
            if (r.scroll) {
                let o = (a) =>
                    a === "effect"
                        ? r.animationEnter && r.animationExit
                            ? "animation"
                            : "transform"
                        : a;
                e !== "effect" &&
                    n !== "effect" &&
                    (t.classList.add("x-no-at"),
                    t.classList.remove("x-effect-exit"),
                    setTimeout(() => {
                        t.classList.remove("x-no-at");
                    }));
                let i = o(e),
                    s = o(n);
                switch (
                    (s === "animation" && ul(t, r.animationExit),
                    e === "effect" &&
                        ["fade", "none"].includes(n) &&
                        t.classList.add(cl),
                    i)
                ) {
                    case "animation":
                        return gl(t, o(n), r);
                    case "transform":
                        return hl(t, s, r);
                    case "fade":
                        return yl(t, s, r);
                }
            }
            return !1;
        };
    et("effects", (t, { key: e, condition: n, enter: r, exit: o }) => {
        oi.set(t, { scrollEffects: "managed" });
        let i = gi(t, ti(t, r), ti(t, o));
        return i ? (s) => void i(rl(t, n, s, e)) : () => {};
    });
    var vl = (t, { behaviorScroll: e }) => {
            let n = gi(t, "effect", "effect"),
                r = !1;
            return (o) => {
                let [i, s] = o.split(":");
                (e === "reset" && i === "exit" && s === "down") ||
                    (e === "fire-once" && r) ||
                    (i === "enter" && (r = !0), n(i === "enter"));
            };
        },
        wl = (t) => {
            let e = parseInt(t);
            return t.includes("px")
                ? () => e
                : () => (window.innerHeight * e) / 100;
        },
        xl = (t) => {
            let e = parseInt(t);
            return t.includes("px")
                ? () => window.innerHeight - e
                : () =>
                      window.innerHeight -
                      window.innerHeight * (parseInt(e) / 100);
        };
    function bl(t, e) {
        let n,
            r = () => {},
            o = () => {
                let { effectRivet: i } = sl.get(e);
                i ? (r = Zt([[t, ...i]])) : setTimeout(o, 10);
            };
        return (
            o(),
            () => {
                clearTimeout(n), r();
            }
        );
    }
    function Sl(t, e) {
        let n = t.closest("[data-x-slide], [data-x-slide-goto]");
        if (n && t !== n) return bl(t, n);
        if (!e.scroll || oi.get(t).scrollEffects === "managed") return;
        if (
            (window.csGlobal.isPreview && t.classList.add(rt),
            e.forceScrollEffect)
        ) {
            t.classList.remove(wt),
                t.classList.remove(Xn),
                t.classList.remove(rt),
                t.classList.remove(tr),
                e.forceScrollEffect === "in" && t.classList.add(wt),
                e.forceScrollEffect === "out" && t.classList.add(rt);
            return;
        }
        let r = vl(t, e),
            { offsetTop: o = "10%", offsetBottom: i = "10%" } = e;
        ri(
            t,
            (s) => void r(`${s === "up" ? "enter" : "exit"}:${s}`),
            wl(o),
            !1
        ),
            ri(
                t,
                (s) => void r(`${s !== "up" ? "enter" : "exit"}:${s}`),
                xl(i),
                !1
            );
    }
    var {
        defer: Tl,
        addClass: yi,
        toggleClass: Al,
        removeClass: El,
        listenerPassive: Rt,
    } = S;
    b("[data-x-search]", function (t) {
        let e = t.querySelector("input"),
            n = () => Tl(() => e.focus()),
            r = () => Al(t, "x-search-has-content", !!e.value);
        return [
            Rt(e, "input", r),
            Rt(t, "mousedown", () => {
                yi(t, "x-search-focused"), n();
            }),
            Rt(t, "focusin", () => void yi(t, "x-search-focused")),
            Rt(t, "focusout", () => void El(t, "x-search-focused")),
            Rt(t.querySelector("[data-x-search-clear]"), "click", () => {
                (e.value = ""), e.focus(), r();
            }),
            Rt(t.querySelector("[data-x-search-submit]"), "click", () => {
                window.csGlobal.isPreview || t.submit();
            }),
        ];
    });
    b(
        "[data-x-element-bg-layer]",
        (
            t,
            { parallaxDir: e = "v", parallaxRev: n = !1, parallaxSize: r = "" }
        ) => {
            let o = t.closest(".x-bg"),
                i = e === "h";
            (t.style.opacity = "1"),
                i
                    ? (n || ((t.style.left = "auto"), (t.style.right = "0")),
                      (t.style.width = r))
                    : (n || ((t.style.top = "auto"), (t.style.bottom = "0")),
                      (t.style.height = r));
            let s = !1;
            function a() {
                if (s) return;
                s = !0;
                let {
                    width: u,
                    height: p,
                    top: f,
                    bottom: d,
                } = o.getBoundingClientRect();
                if (f <= window.innerHeight && d >= 0) {
                    let { width: l, height: m } = t.getBoundingClientRect(),
                        h = n ? -1 : 1,
                        y = i ? l - u : m - p,
                        g = 1 - d / (window.innerHeight + p),
                        v = `${parseInt(g * y * h, 10)}px`,
                        w = i
                            ? `translate3d(${v}, 0, 0)`
                            : `translate3d(0, ${v}, 0)`;
                    t.style.transform = w;
                }
                s = !1;
            }
            function c() {
                requestAnimationFrame(a);
            }
            return [cn(c), ge(c), U(c)];
        }
    );
    U(function () {
        b("[data-x-scroll-link]", function (t, e) {
            let n = document.querySelector(e);
            return G(t, "wheel", function (r) {
                n.scrollTop += r.deltaY;
            });
        });
    });
    var {
        addClass: Cl,
        removeClass: vi,
        hasClass: Ll,
        listenerPassive: se,
    } = S;
    function nr(t, e) {
        (e != null ? e : !Ll(t, "is-active"))
            ? (vi(t, "has-not-flipped"), Cl(t, "is-active"))
            : vi(t, "is-active");
    }
    var Ye = !1;
    b("[data-x-element-card]", (t) => [
        se(t, "touchstart", () => {
            Ye = !0;
        }),
        se(t, "click", ({ target: e }) => {
            t.contains(e.closest("a")) || nr(t);
        }),
        se(t, "pointerenter", () => {
            setTimeout(function () {
                Ye || nr(t, !0);
            }, 15);
        }),
        se(t, "pointerleave", () => {
            Ye || nr(t, !1);
        }),
        se(t, "touchend", () => {
            setTimeout(function () {
                Ye = !1;
            }, 100);
        }),
    ]);
    var { makeRafLoop: kl } = S;
    function Ol(t, e) {
        let n = `${t}`;
        for (; n.length < e; ) n = `0${n}`;
        return n;
    }
    function Il() {
        let t = new WeakMap();
        return function (e, n) {
            t.has(e) || t.set(e, e.innerHTML),
                n !== t.get(e) && ((e.innerHTML = n), t.set(e, n));
        };
    }
    function wi({
        el: t,
        end: e,
        serverTime: n,
        leadingZeros: r = !0,
        hideEmpty: o = !0,
        loadingClass: i = "is-loading",
        completeClass: s = "is-complete",
        digitClass: a = "x-countdown-digit",
        completeMessageTag: c = "div",
        completeMessageContent: u = "",
        completeMessageClass: p = "x-countdown-complete",
        hideOnComplete: f = !1,
        selectors: d = {
            days: "[data-x-countdown-d]",
            hours: "[data-x-countdown-h]",
            minutes: "[data-x-countdown-m]",
            seconds: "[data-x-countdown-s]",
            daysLabel: "[data-x-countdown-label-d]",
            hoursLabel: "[data-x-countdown-label-h]",
            minutesLabel: "[data-x-countdown-label-m]",
            secondsLabel: "[data-x-countdown-label-s]",
            parent: "[data-x-countdown-unit]",
            aria: "[data-x-countdown-aria]",
        },
        singularLabels: l = { d: "Day", h: "Hour", m: "Minute", s: "Second" },
        pluralLabels: m = { d: "Days", h: "Hours", m: "Minutes", s: "Seconds" },
        ariaLabel: h = "Countdown ends in {{d}} days, {{h}} hours, and {{m}} minutes.",
    } = {}) {
        if (!t) return;
        let y = {
                days: t.querySelector(d.days),
                hours: t.querySelector(d.hours),
                minutes: t.querySelector(d.minutes),
                seconds: t.querySelector(d.seconds),
            },
            { days: g, hours: v, minutes: w, seconds: C } = y,
            L = {
                d: t.querySelector(d.daysLabel),
                h: t.querySelector(d.hoursLabel),
                m: t.querySelector(d.minutesLabel),
                s: t.querySelector(d.secondsLabel),
            },
            x = new Date(e).getTime(),
            T = new Date(n).getTime() - new Date().getTime(),
            E = Il(),
            q = (I) => {
                let P = Math.abs(I),
                    $ = parseInt(P / 86400);
                P %= 86400;
                let it = parseInt(P / 3600);
                P %= 3600;
                let xt = parseInt(P / 60);
                P %= 60;
                let fr = parseInt(P);
                return (
                    g || (it += $ * 24),
                    v || (xt += it * 60),
                    w || (fr += xt * 60),
                    {
                        diffDays: $,
                        diffHours: it,
                        diffMinutes: xt,
                        diffSeconds: fr,
                    }
                );
            },
            M = () => {
                if ((Object.keys(y).forEach(V), f)) {
                    (t.style.display = "none"), E(t, "");
                    return;
                }
                if (!u) return;
                let I = document.createElement(c);
                (I.innerHTML = u),
                    p && I.classList.add(p),
                    t.append(I),
                    t.classList.add(s);
            },
            _ = (I) =>
                (r ? Ol(I, 2) : I.toString())
                    .split("")
                    .map(($) => `<span class="${a}">${$}</span>`)
                    .join(""),
            B = (I, P) => {
                if (!I || !L[I]) return;
                let $ = L[I];
                E($, (P ? l : m)[I]);
            },
            N = ({
                diffDays: I,
                diffHours: P,
                diffMinutes: $,
                diffSeconds: it,
            }) => {
                g && (E(g, _(I)), B("d", I === 1)),
                    v && (E(v, _(P)), B("h", P === 1)),
                    w && (E(w, _($)), B("m", $ === 1)),
                    C && (E(C, _(it)), B("s", it === 1));
            },
            le = ({
                diffDays: I,
                diffHours: P,
                diffMinutes: $,
                diffSeconds: it,
            }) => {
                let xt = t.querySelector(d.aria);
                xt &&
                    E(
                        xt,
                        h
                            .replace(/{{d}}/g, I)
                            .replace(/{{h}}/g, P)
                            .replace(/{{m}}/g, $)
                            .replace(/{{s}}/g, it)
                    );
            },
            V = (I) => {
                if (!y[I]) return;
                let P = y[I].closest(d.parent);
                P && (P.remove(), (y[I] = null));
            },
            ot = ({ diffDays: I, diffHours: P, diffMinutes: $ }) => {
                I === 0 && V("days"),
                    I === 0 && P === 0 && V("hours"),
                    I === 0 && P === 0 && $ === 0 && V("minutes");
            },
            Oi = T + new Date().getTime();
        return kl((I) => {
            let P = Oi + I;
            if (P > x) return M(), !1;
            let $ = q((P - x) / 1e3);
            o && ot($), N($), le($), I === 0 && t.classList.remove(i);
        });
    }
    b("[data-x-element-countdown]", (t, e = {}) => wi({ el: t, ...e }));
    var {
            waypoint: Pl,
            tween: Ml,
            getPrecisionLength: Hl,
            getPrecisionLengthWithCommas: zl,
            round: $l,
        } = S,
        Rl = ",",
        xi = ".",
        _l = /(-)?(\d+)(\.\d+)?/;
    function ql({
        el: t,
        from: e,
        to: n,
        commaSeparatedDecimal: r = !1,
        ...o
    }) {
        let i = typeof e == "undefined" ? t.textContent : e,
            s = typeof n == "undefined" ? t.textContent : n,
            a = r ? xi : Rl,
            c = s.toString().includes(a) || i.toString().includes(a),
            u = r ? zl : Hl,
            p = Math.max(u(s), u(i)),
            f = (m) => {
                if (!m) return console.warn("Input invalid", m), "";
                let [, h = "", y = "", g = ""] = m.match(_l),
                    v = y.split("").reverse(),
                    w = [];
                for (; v.length; ) w.push(v.splice(0, 3).reverse().join(""));
                return `${h}${w.reverse().join(a)}${g}`;
            },
            d = bi(i, a),
            l = bi(s, a);
        Ml(d, {
            ...o,
            update: (m) => {
                let h = $l(m, Math.pow(10, p)).toFixed(p),
                    y = c ? f(h) : h;
                t.textContent = r ? y.replace(/\.(\d+)$/, ",$1") : y;
            },
        })(l);
    }
    function bi(t, e) {
        let n = 0;
        return (
            e === xi &&
                ((n = t.split(",") || []),
                (n = n[1] || 0),
                n && n.length && (n = n / Math.pow(10, n.length))),
            parseFloat(t.replace(new RegExp("\\" + e, "g"), "")) + n
        );
    }
    b(
        "[data-x-element-counter]",
        (
            t,
            {
                to: e,
                speed: n,
                selector: r = ".x-counter-number",
                commaSeparatedDecimal: o,
            }
        ) =>
            Pl(
                t,
                () =>
                    void ql({
                        el: t.querySelector(r),
                        to: e,
                        commaSeparatedDecimal: o,
                        duration: n,
                    }),
                "85%"
            )
    );
    function Si(t, e = {}) {
        try {
            return JSON.parse(t);
        } catch {}
        return e;
    }
    var {
            intersect: Dl,
            hasClass: at,
            addClass: Bl,
            removeClass: rr,
            unwrapHtmlTemplate: Fl,
            dispatch: Ti,
            listener: je,
            onResize: Wl,
            elementIsVisibleInViewport: Nl,
        } = S,
        Vl = ["playpause", "progress"],
        Gl = [
            "playpause",
            "current",
            "progress",
            "duration",
            "tracks",
            "volume",
            "fullscreen",
        ];
    b("[data-x-element-mejs]", (t, { poster: e, options: n = {} }) => {
        let r = at(t, "bg") || at(t, "x-video-bg"),
            o = at(t, "vimeo") || at(t, "youtube"),
            i = t.getAttribute("data-x-video-options") || n;
        i = typeof i == "string" ? Si(i) : i || {};
        let s = [];
        if (
            (r &&
                (e &&
                    (Bl(t, "poster"),
                    (t.style.backgroundImage = `url(${e})`),
                    setTimeout(() => void rr(t, "transparent"), 500)),
                Fl(t.querySelector('script[type="text/template"]')),
                s.push(
                    je(t, "xmejs-start", () => {
                        rr(t.querySelector(".transparent"), "transparent"),
                            rr(t, "transparent");
                    })
                )),
            !window.mejs)
        )
            return;
        let a = t.querySelector(".x-mejs");
        if (!a || at(a.parentElement, "mejs-mediaelement")) return;
        let c = (d) => {
                console.warn("MEJS media error.", d), d.stopPropagation();
            },
            u = at(a, "advanced-controls") ? Gl : Vl;
        u = window.csGlobal.csHooks.apply("cs_mejs_video_features", u, t);
        try {
            window.jQuery(a).mediaelementplayer({
                pluginPath: window._wpmejsSettings.pluginPath,
                startVolume: 1,
                features: r ? [] : u,
                audioWidth: "100%",
                audioHeight: 32,
                audioVolume: "vertical",
                videoWidth: "100%",
                videoHeight: "100%",
                videoVolume: "vertical",
                pauseOtherPlayers: !1,
                alwaysShowControls: !0,
                setDimensions: !1,
                stretching: "responsive",
                autoRewind: !1,
                success: p,
                error(d) {
                    c(d);
                },
            });
        } catch (d) {
            c(d);
        }
        function p(d, l, m) {
            let h = !0,
                y = !0;
            at(t, "autoplay") &&
                (!i.pause_out_of_view || Nl(t)) &&
                (l.setAttribute("autoplay", !0),
                setTimeout(() => {
                    l.play();
                }, 100));
            let g = () => {
                l.attributes.hasOwnProperty("autoplay") &&
                    h &&
                    (d.play(), (h = !1)),
                    l.attributes.hasOwnProperty("muted") &&
                        y &&
                        (d.setMuted(!0), (y = !1)),
                    d.removeEventListener("canplay", g);
            };
            d.addEventListener("canplay", g);
            let v = m.controls[0].querySelector(".mejs-volume-button");
            d.addEventListener("volumechange", () =>
                d.setVolume(at(v, "mejs-mute") ? 1 : 0)
            ),
                d.addEventListener("ended", () => {
                    l.attributes.hasOwnProperty("loop") && d.play();
                }),
                r ||
                    d.addEventListener("playing", () => {
                        Object.keys(window.mejs.players)
                            .filter(
                                (w) =>
                                    w !== m.id &&
                                    !window.mejs.players[w].xIsVideoBG
                            )
                            .map((w) => window.mejs.players[w])
                            .forEach((w) => w.pause());
                    }),
                m.isVideo === !0 && ((m.xIsVideoBG = r), f(d, l, m));
        }
        function f(d, l, { container: m, controls: h }) {
            if (
                (d.addEventListener("timeupdate", function g() {
                    Ti(t, "xmejs-start"),
                        d.removeEventListener("timeupdate", g);
                }),
                je(m[0], "fullscreenchange", () => {
                    document.fullscreenElement || d.removeAttribute("style");
                }),
                o &&
                    s.push(
                        je(t, "xmejs-start", () => {
                            var g;
                            (g = t.querySelector("video.x-mejs")) == null ||
                                g.removeAttribute("poster");
                        })
                    ),
                r)
            )
                d.addEventListener("playing", () => {
                    d.setMuted(!0), Ti(t, "xmejs-bgvideoready");
                }),
                    s.push(je(t, "xmejs-bgvideoready", y)),
                    s.push(Wl(y));
            else {
                let g = () => h.stop().animate({ opacity: 1 }, 150),
                    v = () => h.stop().animate({ opacity: 0 }, 150);
                d.addEventListener("playing", () =>
                    m.on("mouseenter", g).on("mouseleave", v)
                ),
                    d.addEventListener("pause", () => {
                        m.off("mouseenter mouseleave"), g();
                    });
            }
            i.pause_out_of_view && s.push(Ul(t, d));
            function y() {
                let g = t.querySelector(o ? ".me-plugin" : "video"),
                    v = l.videoWidth,
                    w = l.videoHeight,
                    C = o || v === 0 ? 1280 : v,
                    L = o || w === 0 ? 720 : w,
                    x = t.offsetWidth || 0,
                    T = t.offsetHeight || 0,
                    E = x / C,
                    q = T / L,
                    M = E > q ? E : q,
                    _ = Math.ceil(M * C + 20),
                    B = Math.ceil(M * L + 20),
                    N = Math.ceil((_ - x) / 2),
                    le = Math.ceil((B - T) / 2);
                (g.style.width = `${_}px`), (g.style.height = `${B}px`);
            }
        }
        return s;
    });
    function Ul(t, e) {
        let n = at(t, "autoplay");
        return Dl(t, function (r) {
            if (r.isIntersecting) {
                n && e.play();
                return;
            }
            e.pause();
        });
    }
    var { waypoint: Yl } = S;
    b("[data-x-element-statbar]", (t, { triggerOffset: e } = {}) => {
        Yl(
            t,
            () => {
                Array.from(
                    t.querySelectorAll(".x-statbar-bar, .x-statbar-label")
                ).forEach((n) => {
                    n.classList.add("x-active");
                });
            },
            e
        );
    });
    var { listener: Qd, onLoad: jl, onResize: Ql, getOuterHeight: Jl } = S;
    b("[data-x-element-tabs]", (t, { equalPanelHeight: e }) => {
        if (!e) return;
        let n = Array.from(t.querySelectorAll(".x-tabs-panels")),
            r = () => {
                let o = n.reduce((i, s) => Math.max(i, Jl(s)), 0);
                n.forEach((i) => {
                    i.style.height = `${o}px`;
                });
            };
        return r(), [jl(r), Ql(r)];
    });
    window.addEventListener(
        "load",
        function () {
            if (window.jQuery) {
                let e = function (n) {
                        let r =
                            '<span class="x-anchor-content" style="-webkit-justify-content: center; justify-content: center; -webkit-align-items: center; align-items: center;"><span class="x-anchor-text"><span class="x-anchor-text-primary"></span></span></span>';
                        t(n)
                            .find(".button")
                            .removeClass("button")
                            .addClass("x-anchor")
                            .wrapInner(r);
                    },
                    t = window.jQuery;
                b(".x-mini-cart", (n) => {
                    e(n);
                }),
                    t(document).on(
                        "added_to_cart wc_fragments_loaded wc_fragments_refreshed",
                        "body",
                        () => {
                            Array.from(
                                document.querySelectorAll(".x-mini-cart")
                            ).forEach(e);
                        }
                    ),
                    t(document).on("wc_cart_button_updated", (n, r) => {
                        r.hasClass("x-anchor-button") &&
                            r.parent().find(".added_to_cart").remove();
                    }),
                    t(() => {
                        b(".x-preview-woocommerce-product-gallery", (n) => {
                            let r = t(n);
                            r
                                .addClass("woocommerce-product-gallery")
                                .removeClass("x-woocommerce-product-gallery"),
                                r.trigger("wc-product-gallery-before-init", [
                                    n,
                                    window.wc_single_product_params,
                                ]),
                                r.wc_product_gallery(
                                    window.wc_single_product_params
                                ),
                                r.trigger("wc-product-gallery-after-init", [
                                    n,
                                    window.wc_single_product_params,
                                ]);
                        });
                    });
            }
        },
        H
    );
    b("script[data-cs-late-style]", function (t) {
        let e = document.createElement("style");
        e.setAttribute(
            "id",
            `cs-late-css-${t.getAttribute("data-cs-late-style")}`
        ),
            e.appendChild(window.document.createTextNode(t.textContent)),
            window.document.head.appendChild(e),
            t.remove();
    });
    var { listener: Ai, PASSIVE_ARGS: Zl } = S;
    b("[data-x-toggleable]", (t) => Bo(t));
    var or = !1;
    document.addEventListener(
        "readystatechange",
        () => {
            document.readyState === "complete" &&
                (window.document.body.addEventListener("click", Un()),
                b("[data-x-toggleable]", (t) => {
                    let e = K(t),
                        n = Be(t);
                    ($t(e) || (n && n === ne())) &&
                        (window.csGlobal.isPreview &&
                            ((or = !0),
                            t.setAttribute("data-x-disable-animation", !0)),
                        Y({ id: e, state: !0, force: !0, hashUpdate: !1 }),
                        or &&
                            ((or = !1),
                            setTimeout(() => {
                                t.removeAttribute("data-x-disable-animation");
                            }, 60)));
                }));
        },
        Zl
    );
    b("[data-x-toggleable]:not([data-x-toggle])", Fo);
    b("[data-x-toggle]", Wo);
    b("[data-x-toggle-layered-root]", No);
    R.filter("hash_scrolling_allow", (t, e, n) =>
        n.target.hasAttribute("data-x-toggle-nested-trigger") ||
        n.target.hasAttribute("data-x-skip-scroll")
            ? !1
            : t
    );
    R.action("hash_scrolling_before", ({ anchor: t }) => {
        let e = t.closest(".x-modal.x-active, .x-off-canvas.x-active");
        e &&
            !(
                t.hasAttribute("data-x-toggleable") &&
                !t.querySelector("[data-x-toggle-nested-trigger]")
            ) &&
            Y({ id: e.getAttribute("data-x-toggleable"), state: !1 });
    });
    F(
        "ontoggleclose",
        (t, e, n) =>
            Ai(n.closest("[data-x-toggleable]"), "tco-toggle", (r) => {
                r.detail.state && t();
            }),
        { defaultOption: "throttle" }
    );
    F(
        "ontoggleopen",
        (t, e, n) =>
            Ai(n.closest("[data-x-toggleable]"), "tco-toggle", (r) => {
                r.detail.state || t();
            }),
        { defaultOption: "throttle" }
    );
    window.addEventListener("tcoHistoryPush", Gn, !1);
    window.addEventListener("hashchange", Gn, !1);
    var {
        onScroll: Kl,
        onResize: Ei,
        addClass: ir,
        removeClass: sr,
        toggleClass: Xl,
        onLoad: ar,
        tween: Ci,
        getOuterHeight: cr,
        scrollOffset: lr,
        listener: dt,
        oncePassive: Li,
        getCachedJsonAttribute: ur,
        waypoint: ae,
        fontCompress: tu,
    } = S;
    function j(t, e) {
        b(
            `[data-x-element="${t}"]`,
            (n) => void e.call(n, n, ur(n, "data-x-params"))
        );
    }
    b(
        "[data-x-element-responsive-text]",
        (
            t,
            { selector: e, compression: n, minFontSize: r, maxFontSize: o }
        ) => {
            e &&
                Array.from(document.querySelectorAll(e)).forEach((i) =>
                    tu(i, { c: n, min: r, max: o })
                );
        }
    );
    var eu = () =>
        !!(
            /Android|webOS|Opera Mini|windows phone/i.test(
                navigator.userAgent
            ) ||
            (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
        );
    function ki(t) {
        if (!Bt(t, "parallax")) return;
        if (eu()) {
            (t.style.backgroundAttachment = "scroll"),
                (t.style.backgroundSize = "cover"),
                (t.style.backgroundPosition = "center");
            return;
        }
        let e = 0;
        Bt(t, "bg-image") && (e = 0.1), Bt(t, "bg-pattern") && (e = 0.3);
        let n = lr(t).top,
            r = document.readyState === "complete",
            o = () => {
                let { top: i } = lr(t);
                i + t.offsetHeight < window.scrollY ||
                    i > window.scrollY + window.innerHeight ||
                    (t.style.backgroundPosition = `50% ${Math.floor(
                        (n - window.scrollY) * e
                    )}px`);
            };
        return (
            r && o(),
            [
                Kl(o),
                Ei(() => {
                    n = lr(t).top;
                }),
                ar(() => {
                    (r = !0), o();
                }),
            ]
        );
    }
    j("section", ki);
    j("content_band", ki);
    j("column", (t, e) => {
        !e.fade ||
            ae(
                t.parentElement,
                () => {
                    (t.style.opacity = "1"),
                        (t.style.transform = "translate(0, 0)");
                },
                "65%"
            );
    });
    j("classic_card", function (t) {
        function e(h) {
            h.target.tagName !== "A" && Xl(t, "flipped");
        }
        function n() {
            ir(t, "flipped");
        }
        function r() {
            sr(t, "flipped");
        }
        let o = dt(t, "click", e),
            i = dt(t, "mouseenter", n),
            s = dt(t, "mouseleave", r),
            a;
        dt(t, "touchstart", () => {
            a && a(), (a = dt(t, "touchend", e));
        }),
            dt(t, "touchmove", () => {
                a && a();
            }),
            Li(t, "touchstart", () => {
                o(), i(), s();
            });
        let c = t.querySelector(".x-card-inner"),
            u = t.querySelector(".x-face-outer.front"),
            p = u.querySelector(".x-face-content"),
            f = t.querySelector(".x-face-outer.back"),
            d = u.querySelector(".x-face-content"),
            l = (h) => {
                let {
                    borderTopWidth: y,
                    borderBottomWidth: g,
                } = getComputedStyle(f);
                return parseFloat(y) + parseFloat(g);
            };
        function m() {
            let h = Math.max(cr(p) + l(f), cr(d) + l(u));
            c.style.height = `${h}px`;
        }
        return [ar(m), Ei(m, !0)];
    });
    j("skill_bar", (t, e) => {
        let n = t.querySelector(".bar");
        ae(
            t,
            () => {
                Ci(0, {
                    duration: 750,
                    update: (r) => {
                        n.style.width = `${r}%`;
                    },
                })(parseFloat(e.percent));
            },
            "95%"
        );
    });
    j("recent_posts", function (t, { fade: e }) {
        if (!e) return;
        let n = Array.from(t.querySelectorAll("a"));
        ae(
            t,
            () => {
                n.forEach((r, o) => {
                    setTimeout(() => {
                        Ci(0, {
                            duration: 750,
                            update: (i) => {
                                r.style.opacity = `${i}`;
                            },
                        })(1);
                    }, o * 90);
                }),
                    setTimeout(() => {
                        ir(t, "complete");
                    }, n * 90 + 400);
            },
            "75%"
        );
    });
    j("creative_cta", function (t, e) {
        let n = t.querySelector(".graphic");
        n.style.transform = "translate(-50%, -50%) scale(0)";
        let r = () => {
            (n.style.transform = "translate(-50%, -50%) scale(0)"),
                (t.style.backgroundColor = e.bg_color);
        };
        return (
            r(),
            [
                dt(t, "mouseenter", () => {
                    (t.style.backgroundColor = e.bg_color_hover),
                        (n.style.transform = "translate(-50%, -50%) scale(1)");
                }),
                dt(t, "mouseleave", r),
            ]
        );
    });
    j("feature_box", function (t, e) {
        e.child !== !0 &&
            e.graphicAnimation !== "none" &&
            ae(
                t,
                () => {
                    setTimeout(() => {
                        ce(
                            t.querySelector(".x-feature-box-graphic-outer"),
                            "animated " + e.graphicAnimation
                        );
                    }, e.graphicAnimationDelay);
                },
                e.graphicAnimationOffset + "%"
            );
    });
    j("feature_list", function (t, e) {
        var n = ur(t.querySelector(".x-feature-box"), "data-x-params"),
            r = 0;
        if (n.graphicAnimation !== "none" || n.connectorAnimation !== "none") {
            let o = Array.from(t.children);
            ae(
                t,
                function () {
                    setTimeout(function () {
                        o.forEach((i, s) => {
                            var c;
                            if (
                                (n.graphicAnimation !== "none" &&
                                    ce(
                                        i.querySelector(
                                            ".x-feature-box-graphic-outer"
                                        ),
                                        "animated " + n.graphicAnimation,
                                        r++,
                                        e.animationDelayBetween
                                    ),
                                n.connectorAnimation !== "none")
                            ) {
                                var a = "animated " + n.connectorAnimation;
                                let u = i.querySelector(".lower");
                                u && ce(u, a, r, e.animationDelayBetween);
                                let p =
                                    (c = o[s + 1]) == null
                                        ? void 0
                                        : c.querySelector(".upper");
                                p && ce(p, a, r, e.animationDelayBetween);
                                let f = i.querySelector(".full");
                                f && ce(f, a, r++, e.animationDelayBetween);
                            }
                        });
                    }, e.animationDelayInitial);
                },
                e.animationOffset + "%"
            );
        }
    });
    j("tab_nav", function (t, { orientation: e }) {
        e === "vertical" &&
            (t.style.minHeight = `${cr(t.nextElementSibling)}px`);
    });
    function ce(t, e, n = 0, r = 0) {
        let o = e
            .split(" ")
            .map((i) => i.trim())
            .filter((i) => !!i);
        setTimeout(() => {
            sr(t, "animated-hide"),
                o.forEach((i) => void ir(t, i)),
                Li(t, "animationend", () => {
                    o.forEach((i) => void sr(t, i));
                });
        }, n * r);
    }
    j("google_map", function (t, e) {
        if (!window.google || !window.google.maps) return;
        function n(h) {
            var y = [],
                g = [];
            Array.from(t.querySelectorAll(".x-google-map-marker")).forEach(
                function (v, w) {
                    var C = ur(v, "data-x-params"),
                        L = new window.google.maps.Marker({
                            map: h,
                            position: new window.google.maps.LatLng(
                                C.lat,
                                C.lng
                            ),
                            infoWindowIndex: w,
                            icon: C.image,
                        });
                    if (((y[w] = L), C.markerInfo !== "")) {
                        var x = new window.google.maps.InfoWindow({
                            content: C.markerInfo,
                            maxWidth: 200,
                        });
                        (g[w] = x),
                            C.startOpen && x.open(h, L),
                            window.google.maps.event.addListener(
                                y[w],
                                "click",
                                function () {
                                    x.open(h, this);
                                }
                            );
                    }
                }
            );
        }
        var r = t.querySelector(".x-google-map-inner"),
            o = e.lat,
            i = e.lng,
            s = new window.google.maps.LatLng(o, i),
            a = e.drag,
            c = parseInt(e.zoom),
            u = e.zoomControl,
            p = e.hue,
            f = [
                {
                    featureType: "all",
                    elementType: "all",
                    stylers: [{ hue: p || null }],
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [
                        { hue: p || null },
                        { saturation: 0 },
                        { lightness: 50 },
                    ],
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
            ],
            d = {
                scrollwheel: !1,
                draggable: a === !0,
                zoomControl: u === !0,
                disableDoubleClickZoom: !1,
                disableDefaultUI: !0,
                zoom: c,
                center: s,
                mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            },
            l = new window.google.maps.StyledMapType(f, { name: "Styled Map" }),
            m = new window.google.maps.Map(r, d);
        m.mapTypes.set("map_style", l),
            m.setMapTypeId("map_style"),
            n.call(this, m);
    });
    ar(() => {
        let t = window.jQuery;
        if (!t) return;
        let e = {
                animation: !0,
                placement: "top",
                template:
                    '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                container: !1,
            },
            n = {
                placement: "right",
                trigger: "click",
                content: "",
                template:
                    '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            };
        class r {
            constructor(i, { type: s = "tooltip", ...a }) {
                (this.type = s),
                    (this.options = { ...(s === "popover" ? n : e), ...a }),
                    (this.hoverState = null),
                    (this.$element = null),
                    (this.enter = () => {
                        (this.hoverState = "in"), this.show();
                    }),
                    (this.leave = () => {
                        (this.hoverState = "out"), this.hide();
                    }),
                    (this.toggle = () => {
                        this.tip().hasClass("in") ? this.leave() : this.enter();
                    }),
                    (this.el = i),
                    (this.$element = t(i)),
                    (this.$body = t("body"));
                for (
                    var c = this.options.trigger.split(" "), u = c.length;
                    u--;

                ) {
                    var p = c[u];
                    if (p == "click")
                        this.$element.on("click." + this.type, !1, this.toggle);
                    else {
                        var f = p == "hover" ? "mouseenter" : "focusin",
                            d = p == "hover" ? "mouseleave" : "focusout";
                        this.$element.on(f + "." + this.type, !1, this.enter),
                            this.$element.on(
                                d + "." + this.type,
                                !1,
                                this.leave
                            );
                    }
                }
                (this.$element.attr("title") ||
                    typeof this.$element.attr("data-original-title") !=
                        "string") &&
                    this.$element
                        .attr(
                            "data-original-title",
                            this.$element.attr("title") || ""
                        )
                        .attr("title", "");
            }
            show() {
                var i = t.Event("show.bs." + this.type);
                if (this.getTitle() || this.getContent()) {
                    this.$element.trigger(i);
                    var s = t.contains(
                        document.documentElement,
                        this.$element[0]
                    );
                    if (i.isDefaultPrevented() || !s) return;
                    var a = this,
                        c = this.tip(),
                        u = this.getUID(this.type);
                    this.setContent(),
                        c.attr("id", u),
                        this.$element.attr("aria-describedby", u),
                        this.options.animation && c.addClass("fade");
                    var p =
                            typeof this.options.placement == "function"
                                ? this.options.placement.call(
                                      this,
                                      c[0],
                                      this.$element[0]
                                  )
                                : this.options.placement,
                        f = /\s?auto?\s?/i,
                        d = f.test(p);
                    d && (p = p.replace(f, "") || "top"),
                        c
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(p)
                            .data("bs." + this.type, this),
                        this.options.container
                            ? c.appendTo(this.options.container)
                            : c.insertAfter(this.$element);
                    var l = this.getElementPosition(this.el),
                        m = c[0].offsetWidth,
                        h = c[0].offsetHeight;
                    if (d) {
                        var y = p,
                            g = this.getElementPosition(this.el.parentElement);
                        (p =
                            p == "bottom" &&
                            l.top + l.height + h - g.scroll > g.height
                                ? "top"
                                : p == "top" && l.top - g.scroll - h < 0
                                ? "bottom"
                                : p == "right" && l.right + m > g.width
                                ? "left"
                                : p == "left" && l.left - m < g.left
                                ? "right"
                                : p),
                            c.removeClass(y).addClass(p);
                    }
                    var v = this.getCalculatedOffset(p, l, m, h);
                    this.applyPlacement(v, p);
                    var w = function () {
                        a.$element.trigger("shown.bs." + a.type),
                            (a.hoverState = null);
                    };
                    this.$tip.hasClass("fade")
                        ? c.one("transitionend", w)
                        : w();
                }
            }
            applyPlacement(i, s) {
                var a = this.tip(),
                    c = a[0].offsetWidth,
                    u = a[0].offsetHeight,
                    p = parseInt(a.css("margin-top"), 10),
                    f = parseInt(a.css("margin-left"), 10);
                isNaN(p) && (p = 0),
                    isNaN(f) && (f = 0),
                    (i.top = i.top + p),
                    (i.left = i.left + f),
                    t.offset.setOffset(
                        a[0],
                        t.extend(
                            {
                                using: function (v) {
                                    a.css({
                                        top: Math.round(v.top),
                                        left: Math.round(v.left),
                                    });
                                },
                            },
                            i
                        ),
                        0
                    ),
                    a.addClass("in");
                var d = a[0].offsetWidth,
                    l = a[0].offsetHeight;
                s == "top" && l != u && (i.top = i.top + u - l);
                var m = this.getViewportAdjustedDelta(s, i, d, l);
                m.left ? (i.left += m.left) : (i.top += m.top);
                var h = m.left ? m.left * 2 - c + d : m.top * 2 - u + l,
                    y = m.left ? "left" : "top",
                    g = m.left ? "offsetWidth" : "offsetHeight";
                a.offset(i), this.replaceArrow(h, a[0][g], y);
            }
            replaceArrow(i, s, a) {
                this.arrow().css(a, i ? 50 * (1 - i / s) + "%" : "");
            }
            setContent() {
                let i = this.tip(),
                    s = this.getTitle();
                if (this.type === "popover") {
                    let a = i.find(".popover-title");
                    s ? a.text(s) : i.find(".popover-title").hide(),
                        i
                            .find(".popover-content")
                            .empty()
                            .text(this.getContent());
                } else i.find(".tooltip-inner").text(s);
                i.removeClass("fade in top bottom left right");
            }
            hide() {
                var i = this,
                    s = this.tip(),
                    a = t.Event("hide.bs." + this.type);
                this.$element.removeAttr("aria-describedby");
                function c() {
                    i.hoverState != "in" && s.detach(),
                        i.$element.trigger("hidden.bs." + i.type);
                }
                if ((this.$element.trigger(a), !a.isDefaultPrevented()))
                    return (
                        s.removeClass("in"),
                        this.$tip.hasClass("fade")
                            ? s.one("transitionend", c)
                            : c(),
                        (this.hoverState = null),
                        this
                    );
            }
            getContent() {
                return this.type !== "popover"
                    ? ""
                    : this.$element.attr("data-content") ||
                          this.getContentOption();
            }
            getViewportDimensions() {
                return {
                    ...window.document.body.getBoundingClientRect(),
                    scroll:
                        document.documentElement.scrollTop ||
                        document.body.scrollTop,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    top: 0,
                    left: 0,
                };
            }
            getElementPosition(i) {
                let s = i.getBoundingClientRect();
                return {
                    ...s,
                    scroll: i.scrollTop,
                    width: i.offsetWidth,
                    height: i.offsetHeight,
                    top:
                        s.top +
                        (document.documentElement.scrollTop ||
                            document.body.scrollTop),
                    left:
                        s.left +
                        (document.documentElement.scrollLeft ||
                            document.body.scrollLeft),
                };
            }
            getCalculatedOffset(i, s, a, c) {
                return i == "bottom"
                    ? {
                          top: s.top + s.height,
                          left: s.left + s.width / 2 - a / 2,
                      }
                    : i == "top"
                    ? { top: s.top - c, left: s.left + s.width / 2 - a / 2 }
                    : i == "left"
                    ? { top: s.top + s.height / 2 - c / 2, left: s.left - a }
                    : {
                          top: s.top + s.height / 2 - c / 2,
                          left: s.left + s.width,
                      };
            }
            getViewportAdjustedDelta(i, s, a, c) {
                var u = { top: 0, left: 0 },
                    p = this.getViewportDimensions();
                if (/right|left/.test(i)) {
                    var f = s.top - p.scroll,
                        d = s.top - p.scroll + c;
                    f < p.top
                        ? (u.top = p.top - f)
                        : d > p.top + p.height &&
                          (u.top = p.top + p.height - d);
                } else {
                    var l = s.left,
                        m = s.left + a;
                    l < p.left
                        ? (u.left = p.left - l)
                        : m > p.width && (u.left = p.left + p.width - m);
                }
                return u;
            }
            getTitle() {
                return (
                    this.$element.attr("data-original-title") ||
                    this.getTitleOption() ||
                    (this.type !== "popover" && this.getContentOption())
                );
            }
            getTitleOption() {
                return typeof this.options.title == "function"
                    ? this.options.title.call(this.$element[0])
                    : this.options.title || "";
            }
            getContentOption() {
                return typeof this.options.content == "function"
                    ? this.options.content.call(this.$element[0])
                    : this.options.content || "";
            }
            getUID(i) {
                do i += ~~(Math.random() * 1e6);
                while (document.getElementById(i));
                return i;
            }
            tip() {
                return (this.$tip = this.$tip || t(this.options.template));
            }
            arrow() {
                return (
                    this.$arrow ||
                        (this.$arrow = this.tip().find(
                            this.type === "popover"
                                ? ".arrow"
                                : ".tooltip-arrow"
                        )),
                    this.$arrow
                );
            }
            validate() {
                this.$element[0].parentNode ||
                    (this.hide(),
                    (this.$element = null),
                    (this.options = null));
            }
        }
        j("extra", (o, i) => void new r(o, i));
    });
    var Tp = window.csGlobal;
})();
