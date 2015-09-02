define("js", function() {
    (function() {
        var Zepto = function() {
            function a(a) {
                return null == a ? String(a) : U[V.call(a)] || "object"
            }

            function b(b) {
                return "function" == a(b)
            }

            function c(a) {
                return null != a && a == a.window
            }

            function d(a) {
                return null != a && a.nodeType == a.DOCUMENT_NODE
            }

            function e(b) {
                return "object" == a(b)
            }

            function f(a) {
                return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
            }

            function g(a) {
                return "number" == typeof a.length
            }

            function h(a) {
                return D.call(a, function(a) {
                    return null != a
                })
            }

            function i(a) {
                return a.length > 0 ? x.fn.concat.apply([], a) : a
            }

            function j(a) {
                return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function k(a) {
                return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
            }

            function l(a, b) {
                return "number" != typeof b || H[j(a)] ? b : b + "px"
            }

            function m(a) {
                var b, c;
                return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c), F[a]
            }

            function n(a) {
                return "children" in a ? C.call(a.children) : x.map(a.childNodes, function(a) {
                    return 1 == a.nodeType ? a : void 0
                })
            }

            function o(a, b, c) {
                for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
            }

            function p(a, b) {
                return null == b ? x(a) : x(a).filter(b)
            }

            function q(a, c, d, e) {
                return b(c) ? c.call(a, d, e) : c
            }

            function r(a, b, c) {
                null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
            }

            function s(a, b) {
                var c = a.className,
                    d = c && c.baseVal !== v;
                return b === v ? d ? c.baseVal : c : void(d ? c.baseVal = b : a.className = b)
            }

            function t(a) {
                var b;
                try {
                    return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : /^0/.test(a) || isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? x.parseJSON(a) : a : b) : a
                } catch (c) {
                    return a
                }
            }

            function u(a, b) {
                b(a);
                for (var c in a.childNodes) u(a.childNodes[c], b)
            }
            var v, w, x, y, z, A, B = [],
                C = B.slice,
                D = B.filter,
                E = window.document,
                F = {},
                G = {},
                H = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                },
                I = /^\s*<(\w+|!)[^>]*>/,
                J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                L = /^(?:body|html)$/i,
                M = /([A-Z])/g,
                N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                O = ["after", "prepend", "before", "append"],
                P = E.createElement("table"),
                Q = E.createElement("tr"),
                R = {
                    tr: E.createElement("tbody"),
                    tbody: P,
                    thead: P,
                    tfoot: P,
                    td: Q,
                    th: Q,
                    "*": E.createElement("div")
                },
                S = /complete|loaded|interactive/,
                T = /^[\w-]*$/,
                U = {},
                V = U.toString,
                W = {},
                X = E.createElement("div"),
                Y = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                Z = Array.isArray || function(a) {
                    return a instanceof Array
                };
            return W.matches = function(a, b) {
                if (!b || !a || 1 !== a.nodeType) return !1;
                var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
                if (c) return c.call(a, b);
                var d, e = a.parentNode,
                    f = !e;
                return f && (e = X).appendChild(a), d = ~W.qsa(e, b).indexOf(a), f && X.removeChild(a), d
            }, z = function(a) {
                return a.replace(/-+(.)?/g, function(a, b) {
                    return b ? b.toUpperCase() : ""
                })
            }, A = function(a) {
                return D.call(a, function(b, c) {
                    return a.indexOf(b) == c
                })
            }, W.fragment = function(a, b, c) {
                var d, e, g;
                return J.test(a) && (d = x(E.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(K, "<$1></$2>")), b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, d = x.each(C.call(g.childNodes), function() {
                    g.removeChild(this)
                })), f(c) && (e = x(d), x.each(c, function(a, b) {
                    N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
                })), d
            }, W.Z = function(a, b) {
                return a = a || [], a.__proto__ = x.fn, a.selector = b || "", a
            }, W.isZ = function(a) {
                return a instanceof W.Z
            }, W.init = function(a, c) {
                var d;
                if (!a) return W.Z();
                if ("string" == typeof a)
                    if (a = a.trim(), "<" == a[0] && I.test(a)) d = W.fragment(a, RegExp.$1, c), a = null;
                    else {
                        if (c !== v) return x(c).find(a);
                        d = W.qsa(E, a)
                    } else {
                    if (b(a)) return x(E).ready(a);
                    if (W.isZ(a)) return a;
                    if (Z(a)) d = h(a);
                    else if (e(a)) d = [a], a = null;
                    else if (I.test(a)) d = W.fragment(a.trim(), RegExp.$1, c), a = null;
                    else {
                        if (c !== v) return x(c).find(a);
                        d = W.qsa(E, a)
                    }
                }
                return W.Z(d, a)
            }, x = function(a, b) {
                return W.init(a, b)
            }, x.extend = function(a) {
                var b, c = C.call(arguments, 1);
                return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
                    o(a, c, b)
                }), a
            }, W.qsa = function(a, b) {
                var c, e = "#" == b[0],
                    f = !e && "." == b[0],
                    g = e || f ? b.slice(1) : b,
                    h = T.test(g);
                return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
            }, x.contains = function(a, b) {
                return a !== b && a.contains(b)
            }, x.type = a, x.isFunction = b, x.isWindow = c, x.isArray = Z, x.isPlainObject = f, x.isEmptyObject = function(a) {
                var b;
                for (b in a) return !1;
                return !0
            }, x.inArray = function(a, b, c) {
                return B.indexOf.call(b, a, c)
            }, x.camelCase = z, x.trim = function(a) {
                return null == a ? "" : String.prototype.trim.call(a)
            }, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function(a, b) {
                var c, d, e, f = [];
                if (g(a))
                    for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c);
                else
                    for (e in a) c = b(a[e], e), null != c && f.push(c);
                return i(f)
            }, x.each = function(a, b) {
                var c, d;
                if (g(a)) {
                    for (c = 0; c < a.length; c++)
                        if (b.call(a[c], c, a[c]) === !1) return a
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1) return a;
                return a
            }, x.grep = function(a, b) {
                return D.call(a, b)
            }, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                U["[object " + b + "]"] = b.toLowerCase()
            }), x.fn = {
                forEach: B.forEach,
                reduce: B.reduce,
                push: B.push,
                sort: B.sort,
                indexOf: B.indexOf,
                concat: B.concat,
                map: function(a) {
                    return x(x.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                slice: function() {
                    return x(C.apply(this, arguments))
                },
                ready: function(a) {
                    return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded", function() {
                        a(x)
                    }, !1), this
                },
                get: function(a) {
                    return a === v ? C.call(this) : this[a >= 0 ? a : a + this.length]
                },
                toArray: function() {
                    return this.get()
                },
                size: function() {
                    return this.length
                },
                remove: function() {
                    return this.each(function() {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function(a) {
                    return B.every.call(this, function(b, c) {
                        return a.call(b, c, b) !== !1
                    }), this
                },
                filter: function(a) {
                    return b(a) ? this.not(this.not(a)) : x(D.call(this, function(b) {
                        return W.matches(b, a)
                    }))
                },
                add: function(a, b) {
                    return x(A(this.concat(x(a, b))))
                },
                is: function(a) {
                    return this.length > 0 && W.matches(this[0], a)
                },
                not: function(a) {
                    var c = [];
                    if (b(a) && a.call !== v) this.each(function(b) {
                        a.call(this, b) || c.push(this)
                    });
                    else {
                        var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
                        this.forEach(function(a) {
                            d.indexOf(a) < 0 && c.push(a)
                        })
                    }
                    return x(c)
                },
                has: function(a) {
                    return this.filter(function() {
                        return e(a) ? x.contains(this, a) : x(this).find(a).size()
                    })
                },
                eq: function(a) {
                    return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function() {
                    var a = this[0];
                    return a && !e(a) ? a : x(a)
                },
                last: function() {
                    var a = this[this.length - 1];
                    return a && !e(a) ? a : x(a)
                },
                find: function(a) {
                    var b, c = this;
                    return b = "object" == typeof a ? x(a).filter(function() {
                        var a = this;
                        return B.some.call(c, function(b) {
                            return x.contains(b, a)
                        })
                    }) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function() {
                        return W.qsa(this, a)
                    })
                },
                closest: function(a, b) {
                    var c = this[0],
                        e = !1;
                    for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
                    return x(c)
                },
                parents: function(a) {
                    for (var b = [], c = this; c.length > 0;) c = x.map(c, function(a) {
                        return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
                    });
                    return p(b, a)
                },
                parent: function(a) {
                    return p(A(this.pluck("parentNode")), a)
                },
                children: function(a) {
                    return p(this.map(function() {
                        return n(this)
                    }), a)
                },
                contents: function() {
                    return this.map(function() {
                        return C.call(this.childNodes)
                    })
                },
                siblings: function(a) {
                    return p(this.map(function(a, b) {
                        return D.call(n(b.parentNode), function(a) {
                            return a !== b
                        })
                    }), a)
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = ""
                    })
                },
                pluck: function(a) {
                    return x.map(this, function(b) {
                        return b[a]
                    })
                },
                show: function() {
                    return this.each(function() {
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
                    })
                },
                replaceWith: function(a) {
                    return this.before(a).remove()
                },
                wrap: function(a) {
                    var c = b(a);
                    if (this[0] && !c) var d = x(a).get(0),
                        e = d.parentNode || this.length > 1;
                    return this.each(function(b) {
                        x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
                    })
                },
                wrapAll: function(a) {
                    if (this[0]) {
                        x(this[0]).before(a = x(a));
                        for (var b;
                            (b = a.children()).length;) a = b.first();
                        x(a).append(this)
                    }
                    return this
                },
                wrapInner: function(a) {
                    var c = b(a);
                    return this.each(function(b) {
                        var d = x(this),
                            e = d.contents(),
                            f = c ? a.call(this, b) : a;
                        e.length ? e.wrapAll(f) : d.append(f)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        x(this).replaceWith(x(this).children())
                    }), this
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(!0)
                    })
                },
                hide: function() {
                    return this.css("display", "none")
                },
                toggle: function(a) {
                    return this.each(function() {
                        var b = x(this);
                        (a === v ? "none" == b.css("display") : a) ? b.show(): b.hide()
                    })
                },
                prev: function(a) {
                    return x(this.pluck("previousElementSibling")).filter(a || "*")
                },
                next: function(a) {
                    return x(this.pluck("nextElementSibling")).filter(a || "*")
                },
                html: function(a) {
                    return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function(b) {
                        var c = this.innerHTML;
                        x(this).empty().append(q(this, a, b, c))
                    })
                },
                text: function(a) {
                    return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                        this.textContent = a === v ? "" : "" + a
                    })
                },
                attr: function(a, b) {
                    var c;
                    return "string" == typeof a && b === v ? 0 == this.length || 1 !== this[0].nodeType ? v : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : this.each(function(c) {
                        if (1 === this.nodeType)
                            if (e(a))
                                for (w in a) r(this, w, a[w]);
                            else r(this, a, q(this, b, c, this.getAttribute(a)))
                    })
                },
                removeAttr: function(a) {
                    return this.each(function() {
                        1 === this.nodeType && r(this, a)
                    })
                },
                prop: function(a, b) {
                    return a = Y[a] || a, b === v ? this[0] && this[0][a] : this.each(function(c) {
                        this[a] = q(this, b, c, this[a])
                    })
                },
                data: function(a, b) {
                    var c = this.attr("data-" + a.replace(M, "-$1").toLowerCase(), b);
                    return null !== c ? t(c) : v
                },
                val: function(a) {
                    return 0 === arguments.length ? this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
                        return this.selected
                    }).pluck("value") : this[0].value) : this.each(function(b) {
                        this.value = q(this, a, b, this.value)
                    })
                },
                offset: function(a) {
                    if (a) return this.each(function(b) {
                        var c = x(this),
                            d = q(this, a, b, c.offset()),
                            e = c.offsetParent().offset(),
                            f = {
                                top: d.top - e.top,
                                left: d.left - e.left
                            };
                        "static" == c.css("position") && (f.position = "relative"), c.css(f)
                    });
                    if (0 == this.length) return null;
                    var b = this[0].getBoundingClientRect();
                    return {
                        left: b.left + window.pageXOffset,
                        top: b.top + window.pageYOffset,
                        width: Math.round(b.width),
                        height: Math.round(b.height)
                    }
                },
                css: function(b, c) {
                    if (arguments.length < 2) {
                        var d = this[0],
                            e = getComputedStyle(d, "");
                        if (!d) return;
                        if ("string" == typeof b) return d.style[z(b)] || e.getPropertyValue(b);
                        if (Z(b)) {
                            var f = {};
                            return x.each(Z(b) ? b : [b], function(a, b) {
                                f[b] = d.style[z(b)] || e.getPropertyValue(b)
                            }), f
                        }
                    }
                    var g = "";
                    if ("string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
                        this.style.removeProperty(j(b))
                    });
                    else
                        for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" : this.each(function() {
                            this.style.removeProperty(j(w))
                        });
                    return this.each(function() {
                        this.style.cssText += ";" + g
                    })
                },
                index: function(a) {
                    return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function(a) {
                    return a ? B.some.call(this, function(a) {
                        return this.test(s(a))
                    }, k(a)) : !1
                },
                addClass: function(a) {
                    return a ? this.each(function(b) {
                        y = [];
                        var c = s(this),
                            d = q(this, a, b, c);
                        d.split(/\s+/g).forEach(function(a) {
                            x(this).hasClass(a) || y.push(a)
                        }, this), y.length && s(this, c + (c ? " " : "") + y.join(" "))
                    }) : this
                },
                removeClass: function(a) {
                    return this.each(function(b) {
                        return a === v ? s(this, "") : (y = s(this), q(this, a, b, y).split(/\s+/g).forEach(function(a) {
                            y = y.replace(k(a), " ")
                        }), void s(this, y.trim()))
                    })
                },
                toggleClass: function(a, b) {
                    return a ? this.each(function(c) {
                        var d = x(this),
                            e = q(this, a, c, s(this));
                        e.split(/\s+/g).forEach(function(a) {
                            (b === v ? !d.hasClass(a) : b) ? d.addClass(a): d.removeClass(a)
                        })
                    }) : this
                },
                scrollTop: function(a) {
                    if (this.length) {
                        var b = "scrollTop" in this[0];
                        return a === v ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function() {
                            this.scrollTop = a
                        } : function() {
                            this.scrollTo(this.scrollX, a)
                        })
                    }
                },
                scrollLeft: function(a) {
                    if (this.length) {
                        var b = "scrollLeft" in this[0];
                        return a === v ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function() {
                            this.scrollLeft = a
                        } : function() {
                            this.scrollTo(a, this.scrollY)
                        })
                    }
                },
                position: function() {
                    if (this.length) {
                        var a = this[0],
                            b = this.offsetParent(),
                            c = this.offset(),
                            d = L.test(b[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : b.offset();
                        return c.top -= parseFloat(x(a).css("margin-top")) || 0, c.left -= parseFloat(x(a).css("margin-left")) || 0, d.top += parseFloat(x(b[0]).css("border-top-width")) || 0, d.left += parseFloat(x(b[0]).css("border-left-width")) || 0, {
                            top: c.top - d.top,
                            left: c.left - d.left
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position");) a = a.offsetParent;
                        return a
                    })
                }
            }, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function(a) {
                var b = a.replace(/./, function(a) {
                    return a[0].toUpperCase()
                });
                x.fn[a] = function(e) {
                    var f, g = this[0];
                    return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
                        g = x(this), g.css(a, q(this, e, b, g[a]()))
                    })
                }
            }), O.forEach(function(b, c) {
                var d = c % 2;
                x.fn[b] = function() {
                    var b, e, f = x.map(arguments, function(c) {
                            return b = a(c), "object" == b || "array" == b || null == c ? c : W.fragment(c)
                        }),
                        g = this.length > 1;
                    return f.length < 1 ? this : this.each(function(a, b) {
                        e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null, f.forEach(function(a) {
                            if (g) a = a.cloneNode(!0);
                            else if (!e) return x(a).remove();
                            u(e.insertBefore(a, b), function(a) {
                                null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                            })
                        })
                    })
                }, x.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
                    return x(a)[b](this), this
                }
            }), W.Z.prototype = x.fn, W.uniq = A, W.deserializeValue = t, x.zepto = W, x
        }();
        window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
            function(a) {
                function b(a) {
                    return a._zid || (a._zid = m++)
                }

                function c(a, c, f, g) {
                    if (c = d(c), c.ns) var h = e(c.ns);
                    return (q[b(a)] || []).filter(function(a) {
                        return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
                    })
                }

                function d(a) {
                    var b = ("" + a).split(".");
                    return {
                        e: b[0],
                        ns: b.slice(1).sort().join(" ")
                    }
                }

                function e(a) {
                    return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
                }

                function f(a, b) {
                    return a.del && !s && a.e in t || !!b
                }

                function g(a) {
                    return u[a] || s && t[a] || a
                }

                function h(c, e, h, i, k, m, n) {
                    var o = b(c),
                        p = q[o] || (q[o] = []);
                    e.split(/\s/).forEach(function(b) {
                        if ("ready" == b) return a(document).ready(h);
                        var e = d(b);
                        e.fn = h, e.sel = k, e.e in u && (h = function(b) {
                            var c = b.relatedTarget;
                            return !c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0
                        }), e.del = m;
                        var o = m || h;
                        e.proxy = function(a) {
                            if (a = j(a), !a.isImmediatePropagationStopped()) {
                                a.data = i;
                                var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
                                return b === !1 && (a.preventDefault(), a.stopPropagation()), b
                            }
                        }, e.i = p.length, p.push(e), "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n))
                    })
                }

                function i(a, d, e, h, i) {
                    var j = b(a);
                    (d || "").split(/\s/).forEach(function(b) {
                        c(a, b, e, h).forEach(function(b) {
                            delete q[j][b.i], "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
                        })
                    })
                }

                function j(b, c) {
                    return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y, function(a, d) {
                        var e = c[a];
                        b[a] = function() {
                            return this[d] = v, e && e.apply(c, arguments)
                        }, b[d] = w
                    }), (c.defaultPrevented !== l ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)), b
                }

                function k(a) {
                    var b, c = {
                        originalEvent: a
                    };
                    for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
                    return j(c, a)
                }
                var l, m = 1,
                    n = Array.prototype.slice,
                    o = a.isFunction,
                    p = function(a) {
                        return "string" == typeof a
                    },
                    q = {},
                    r = {},
                    s = "onfocusin" in window,
                    t = {
                        focus: "focusin",
                        blur: "focusout"
                    },
                    u = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    };
                r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", a.event = {
                    add: h,
                    remove: i
                }, a.proxy = function(c, d) {
                    if (o(c)) {
                        var e = function() {
                            return c.apply(d, arguments)
                        };
                        return e._zid = b(c), e
                    }
                    if (p(d)) return a.proxy(c[d], c);
                    throw new TypeError("expected function")
                }, a.fn.bind = function(a, b, c) {
                    return this.on(a, b, c)
                }, a.fn.unbind = function(a, b) {
                    return this.off(a, b)
                }, a.fn.one = function(a, b, c, d) {
                    return this.on(a, b, c, d, 1)
                };
                var v = function() {
                        return !0
                    },
                    w = function() {
                        return !1
                    },
                    x = /^([A-Z]|returnValue$|layer[XY]$)/,
                    y = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };
                a.fn.delegate = function(a, b, c) {
                    return this.on(b, a, c)
                }, a.fn.undelegate = function(a, b, c) {
                    return this.off(b, a, c)
                }, a.fn.live = function(b, c) {
                    return a(document.body).delegate(this.selector, b, c), this
                }, a.fn.die = function(b, c) {
                    return a(document.body).undelegate(this.selector, b, c), this
                }, a.fn.on = function(b, c, d, e, f) {
                    var g, j, m = this;
                    return b && !p(b) ? (a.each(b, function(a, b) {
                        m.on(a, c, d, b, f)
                    }), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, d = l), e === !1 && (e = w), m.each(function(l, m) {
                        f && (g = function(a) {
                            return i(m, a.type, e), e.apply(this, arguments)
                        }), c && (j = function(b) {
                            var d, f = a(b.target).closest(c, m).get(0);
                            return f && f !== m ? (d = a.extend(k(b), {
                                currentTarget: f,
                                liveFired: m
                            }), (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0
                        }), h(m, b, e, d, c, j || g)
                    }))
                }, a.fn.off = function(b, c, d) {
                    var e = this;
                    return b && !p(b) ? (a.each(b, function(a, b) {
                        e.off(a, c, b)
                    }), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function() {
                        i(this, b, d, c)
                    }))
                }, a.fn.trigger = function(b, c) {
                    return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b), b._args = c, this.each(function() {
                        "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
                    })
                }, a.fn.triggerHandler = function(b, d) {
                    var e, f;
                    return this.each(function(g, h) {
                        e = k(p(b) ? a.Event(b) : b), e._args = d, e.target = h, a.each(c(h, b.type || b), function(a, b) {
                            return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0
                        })
                    }), f
                }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
                    a.fn[b] = function(a) {
                        return a ? this.bind(b, a) : this.trigger(b)
                    }
                }), ["focus", "blur"].forEach(function(b) {
                    a.fn[b] = function(a) {
                        return a ? this.bind(b, a) : this.each(function() {
                            try {
                                this[b]()
                            } catch (a) {}
                        }), this
                    }
                }), a.Event = function(a, b) {
                    p(a) || (b = a, a = b.type);
                    var c = document.createEvent(r[a] || "Events"),
                        d = !0;
                    if (b)
                        for (var e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
                    return c.initEvent(a, d, !0), j(c)
                }
            }(Zepto),
            function(a) {
                function b(b, c, d) {
                    var e = a.Event(c);
                    return a(b).trigger(e, d), !e.isDefaultPrevented()
                }

                function c(a, c, d, e) {
                    return a.global ? b(c || s, d, e) : void 0
                }

                function d(b) {
                    b.global && 0 === a.active++ && c(b, null, "ajaxStart")
                }

                function e(b) {
                    b.global && !--a.active && c(b, null, "ajaxStop")
                }

                function f(a, b) {
                    var d = b.context;
                    return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : void c(b, d, "ajaxSend", [a, b])
                }

                function g(a, b, d, e) {
                    var f = d.context,
                        g = "success";
                    d.success.call(f, a, g, b), e && e.resolveWith(f, [a, g, b]), c(d, f, "ajaxSuccess", [b, d, a]), i(g, b, d)
                }

                function h(a, b, d, e, f) {
                    var g = e.context;
                    e.error.call(g, d, b, a), f && f.rejectWith(g, [d, b, a]), c(e, g, "ajaxError", [d, e, a || b]), i(b, d, e)
                }

                function i(a, b, d) {
                    var f = d.context;
                    d.complete.call(f, b, a), c(d, f, "ajaxComplete", [b, d]), e(d)
                }

                function j() {}

                function k(a) {
                    return a && (a = a.split(";", 2)[0]), a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
                }

                function l(a, b) {
                    return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
                }

                function m(b) {
                    b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), b.data = void 0)
                }

                function n(b, c, d, e) {
                    return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d, d = void 0), {
                        url: b,
                        data: c,
                        success: d,
                        dataType: e
                    }
                }

                function o(b, c, d, e) {
                    var f, g = a.isArray(c),
                        h = a.isPlainObject(c);
                    a.each(c, function(c, i) {
                        f = a.type(i), e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
                    })
                }
                var p, q, r = 0,
                    s = window.document,
                    t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                    u = /^(?:text|application)\/javascript/i,
                    v = /^(?:text|application)\/xml/i,
                    w = "application/json",
                    x = "text/html",
                    y = /^\s*$/;
                a.active = 0, a.ajaxJSONP = function(b, c) {
                    if (!("type" in b)) return a.ajax(b);
                    var d, e, i = b.jsonpCallback,
                        j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r,
                        k = s.createElement("script"),
                        l = window[j],
                        m = function(b) {
                            a(k).triggerHandler("error", b || "abort")
                        },
                        n = {
                            abort: m
                        };
                    return c && c.promise(n), a(k).on("load error", function(f, i) {
                        clearTimeout(e), a(k).off().remove(), "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c), window[j] = l, d && a.isFunction(l) && l(d[0]), l = d = void 0
                    }), f(n, b) === !1 ? (m("abort"), n) : (window[j] = function() {
                        d = arguments
                    }, k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function() {
                        m("timeout")
                    }, b.timeout)), n)
                }, a.ajaxSettings = {
                    type: "GET",
                    beforeSend: j,
                    success: j,
                    error: j,
                    complete: j,
                    context: null,
                    global: !0,
                    xhr: function() {
                        return new window.XMLHttpRequest
                    },
                    accepts: {
                        script: "text/javascript, application/javascript, application/x-javascript",
                        json: w,
                        xml: "application/xml, text/xml",
                        html: x,
                        text: "text/plain"
                    },
                    crossDomain: !1,
                    timeout: 0,
                    processData: !0,
                    cache: !0
                }, a.ajax = function(b) {
                    var c = a.extend({}, b || {}),
                        e = a.Deferred && a.Deferred();
                    for (p in a.ajaxSettings) void 0 === c[p] && (c[p] = a.ajaxSettings[p]);
                    d(c), c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) && RegExp.$2 != window.location.host), c.url || (c.url = window.location.toString()), m(c), c.cache === !1 && (c.url = l(c.url, "_=" + Date.now()));
                    var i = c.dataType,
                        n = /\?.+=\?/.test(c.url);
                    if ("jsonp" == i || n) return n || (c.url = l(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(c, e);
                    var o, r = c.accepts[i],
                        s = {},
                        t = function(a, b) {
                            s[a.toLowerCase()] = [a, b]
                        },
                        u = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol,
                        v = c.xhr(),
                        w = v.setRequestHeader;
                    if (e && e.promise(v), c.crossDomain || t("X-Requested-With", "XMLHttpRequest"), t("Accept", r || "*/*"), (r = c.mimeType || r) && (r.indexOf(",") > -1 && (r = r.split(",", 2)[0]), v.overrideMimeType && v.overrideMimeType(r)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && t("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers)
                        for (q in c.headers) t(q, c.headers[q]);
                    if (v.setRequestHeader = t, v.onreadystatechange = function() {
                            if (4 == v.readyState) {
                                v.onreadystatechange = j, clearTimeout(o);
                                var b, d = !1;
                                if (v.status >= 200 && v.status < 300 || 304 == v.status || 0 == v.status && "file:" == u) {
                                    i = i || k(c.mimeType || v.getResponseHeader("content-type")), b = v.responseText;
                                    try {
                                        "script" == i ? (1, eval)(b) : "xml" == i ? b = v.responseXML : "json" == i && (b = y.test(b) ? null : a.parseJSON(b))
                                    } catch (f) {
                                        d = f
                                    }
                                    d ? h(d, "parsererror", v, c, e) : g(b, v, c, e)
                                } else h(v.statusText || null, v.status ? "error" : "abort", v, c, e)
                            }
                        }, f(v, c) === !1) return v.abort(), h(null, "abort", v, c, e), v;
                    if (c.xhrFields)
                        for (q in c.xhrFields) v[q] = c.xhrFields[q];
                    var x = "async" in c ? c.async : !0;
                    v.open(c.type, c.url, x, c.username, c.password);
                    for (q in s) w.apply(v, s[q]);
                    return c.timeout > 0 && (o = setTimeout(function() {
                        v.onreadystatechange = j, v.abort(), h(null, "timeout", v, c, e)
                    }, c.timeout)), v.send(c.data ? c.data : null), v
                }, a.get = function() {
                    return a.ajax(n.apply(null, arguments))
                }, a.post = function() {
                    var b = n.apply(null, arguments);
                    return b.type = "POST", a.ajax(b)
                }, a.getJSON = function() {
                    var b = n.apply(null, arguments);
                    return b.dataType = "json", a.ajax(b)
                }, a.fn.load = function(b, c, d) {
                    if (!this.length) return this;
                    var e, f = this,
                        g = b.split(/\s/),
                        h = n(b, c, d),
                        i = h.success;
                    return g.length > 1 && (h.url = g[0], e = g[1]), h.success = function(b) {
                        f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b), i && i.apply(f, arguments)
                    }, a.ajax(h), this
                };
                var z = encodeURIComponent;
                a.param = function(a, b) {
                    var c = [];
                    return c.add = function(a, b) {
                        this.push(z(a) + "=" + z(b))
                    }, o(c, a, b), c.join("&").replace(/%20/g, "+")
                }
            }(Zepto),
            function(a) {
                a.fn.serializeArray = function() {
                    var b, c = [];
                    return a([].slice.call(this.get(0).elements)).each(function() {
                        b = a(this);
                        var d = b.attr("type");
                        "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != d && "reset" != d && "button" != d && ("radio" != d && "checkbox" != d || this.checked) && c.push({
                            name: b.attr("name"),
                            value: b.val()
                        })
                    }), c
                }, a.fn.serialize = function() {
                    var a = [];
                    return this.serializeArray().forEach(function(b) {
                        a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
                    }), a.join("&")
                }, a.fn.submit = function(b) {
                    if (b) this.bind("submit", b);
                    else if (this.length) {
                        var c = a.Event("submit");
                        this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit()
                    }
                    return this
                }
            }(Zepto),
            function(a) {
                "__proto__" in {} || a.extend(a.zepto, {
                    Z: function(b, c) {
                        return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b
                    },
                    isZ: function(b) {
                        return "array" === a.type(b) && "__Z" in b
                    }
                });
                try {
                    getComputedStyle(void 0)
                } catch (b) {
                    var c = getComputedStyle;
                    window.getComputedStyle = function(a) {
                        try {
                            return c(a)
                        } catch (b) {
                            return null
                        }
                    }
                }
            }(Zepto),
            function(a) {
                function b(a, b, c, d) {
                    return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
                }

                function c() {
                    k = null, m.last && (m.el.trigger("longTap"), m = {})
                }

                function d() {
                    k && clearTimeout(k), k = null
                }

                function e() {
                    h && clearTimeout(h), i && clearTimeout(i), j && clearTimeout(j), k && clearTimeout(k), h = i = j = k = null, m = {}
                }

                function f(a) {
                    return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary
                }

                function g(a, b) {
                    return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b
                }
                var h, i, j, k, l, m = {},
                    n = 750;
                a(document).ready(function() {
                    var o, p, q, r, s = 0,
                        t = 0;
                    "MSGesture" in window && (l = new MSGesture, l.target = document.body), a(document).bind("MSGestureEnd", function(a) {
                        var b = a.velocityX > 1 ? "Right" : a.velocityX < -1 ? "Left" : a.velocityY > 1 ? "Down" : a.velocityY < -1 ? "Up" : null;
                        b && (m.el.trigger("swipe"), m.el.trigger("swipe" + b))
                    }).on("touchstart MSPointerDown pointerdown", function(b) {
                        (!(r = g(b, "down")) || f(b)) && (q = r ? b : b.touches[0], b.touches && 1 === b.touches.length && m.x2 && (m.x2 = void 0, m.y2 = void 0), o = Date.now(), p = o - (m.last || o), m.el = a("tagName" in q.target ? q.target : q.target.parentNode), h && clearTimeout(h), m.x1 = q.pageX, m.y1 = q.pageY, p > 0 && 250 >= p && (m.isDoubleTap = !0), m.last = o, k = setTimeout(c, n), l && r && l.addPointer(b.pointerId))
                    }).on("touchmove MSPointerMove pointermove", function(b) {
                        (!(r = g(b, "move")) || f(b)) && (q = r ? b : b.touches[0], d(), m.x2 = q.pageX, m.y2 = q.pageY, s += Math.abs(m.x1 - m.x2), t += Math.abs(m.y1 - m.y2), a.os.android && (Math.abs(m.x1 - m.x2) > 10 || Math.abs(m.y1 - m.y2) > 10) && (s = t = 0))
                    }).on("touchend MSPointerUp pointerup", function(c) {
                        (!(r = g(c, "up")) || f(c)) && (d(), m.x2 && Math.abs(m.x1 - m.x2) > 30 || m.y2 && Math.abs(m.y1 - m.y2) > 30 ? j = setTimeout(function() {
                            m.el.trigger("swipe"), m.el.trigger("swipe" + b(m.x1, m.x2, m.y1, m.y2)), m = {}
                        }, 0) : "last" in m && (30 > s && 30 > t ? i = setTimeout(function() {
                            var b = a.Event("tap");
                            b.cancelTouch = e, m.el.trigger(b), m.isDoubleTap ? (m.el && m.el.trigger("doubleTap"), m = {}) : h = setTimeout(function() {
                                h = null, m.el && m.el.trigger("singleTap"), m = {}
                            }, 250)
                        }, 0) : m = {}), s = t = 0)
                    }).on("touchcancel MSPointerCancel pointercancel", e), a(window).on("scroll", e)
                }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
                    a.fn[b] = function(a) {
                        return this.on(b, a)
                    }
                })
            }(Zepto),
            function(a) {
                function b(a) {
                    var b = this.os = {},
                        c = this.browser = {},
                        d = a.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                        e = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                        f = a.match(/(iPad).*OS\s([\d_]+)/),
                        g = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        h = !f && a.match(/(iPhone\sOS)\s([\d_]+)/);
                    (c.webkit = !!d) && (c.version = d[1]), e && (b.android = !0, b.version = e[2]), h && !g && (b.ios = b.iphone = !0, b.version = h[2].replace(/_/g, ".")), f && (b.ios = b.ipad = !0, b.version = f[2].replace(/_/g, ".")), g && (b.ios = b.ipod = !0, b.version = g[3] ? g[3].replace(/_/g, ".") : null)
                }
                b.call(a, navigator.userAgent), a.__detect = b
            }(Zepto),
            function(a) {
                "function" == typeof define && define.amd ? define(["jquery"], a) : a(Zepto || jQuery)
            }(function(a) {
                function b(a) {
                    return h.raw ? a : encodeURIComponent(a)
                }

                function c(a) {
                    return h.raw ? a : decodeURIComponent(a)
                }

                function d(a) {
                    return b(h.json ? JSON.stringify(a) : String(a))
                }

                function e(a) {
                    0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                    try {
                        return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
                    } catch (b) {}
                }

                function f(b, c) {
                    var d = h.raw ? b : e(b);
                    return a.isFunction(c) ? c(d) : d
                }
                var g = /\+/g,
                    h = a.cookie = function(e, g, i) {
                        if (void 0 !== g && !a.isFunction(g)) {
                            if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                                var j = i.expires,
                                    k = i.expires = new Date;
                                k.setDate(k.getDate() + j)
                            }
                            return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                        }
                        for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                            var p = m[n].split("="),
                                q = c(p.shift()),
                                r = p.join("=");
                            if (e && e === q) {
                                l = f(r, g);
                                break
                            }
                            e || void 0 === (r = f(r)) || (l[q] = r)
                        }
                        return l
                    };
                h.defaults = {}, a.removeCookie = function(b, c) {
                    return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
                        expires: -1
                    })), !a.cookie(b))
                }
            }),
            function(a) {
                "use strict";

                function b(a) {
                    return a = a || p.href, a.replace(/^[^#]*#?\/?(.*)\/?$/, "$1")
                }

                function c(a) {
                    return "[object RegExp]" == Object.prototype.toString.call(a)
                }

                function d(a) {
                    return a = a.replace(M, "\\$&").replace(J, "(?:$1)?").replace(K, function(a, b) {
                        return b ? a : "([^/]+)"
                    }).replace(L, "(.*?)"), "^" + a + "$"
                }

                function e(b, c) {
                    var d = b.exec(c).slice(1),
                        e = [];
                    return a.each(d, function(a, b) {
                        b && e.push(decodeURIComponent(b))
                    }), e
                }

                function f(a, b) {
                    F[a.data("id")], F[b.data("id")];
                    a.css({
                        zIndex: z
                    }), b.css({
                        zIndex: A
                    })
                }

                function g(b, c, d, e) {
                    var f = a(".spa-page-body", b),
                        g = (a(".spa-page-body", c), {});
                    !O && (d = "defaultInOut"), S[d] || (d = "defaultInOut"), u && (u = !1, d = "defaultInOut"), g.opacity = 1, !T(d) && O && (g[O] = "translate(0, 0) scale(1, 1)"), f.css(g), R[d].apply(b, [b, c, e])
                }

                function h() {
                    event.stopPropagation(), event.preventDefault()
                }
                var i, j, k, l, m, n = a(window),
                    o = a(document),
                    p = window.location,
                    q = window.history,
                    r = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/),
                    s = !1,
                    t = !1,
                    u = !0,
                    v = {},
                    w = {},
                    x = [],
                    y = 2e3,
                    z = 2001,
                    A = 2002,
                    B = 0,
                    C = {},
                    D = {},
                    E = [],
                    F = {},
                    G = "body {position: relative; margin: 0; padding: 0; width: 100%; overflow: hidden;}        .spa-fullscreen {position: absolute; left: 0; top: 0; margin: 0; padding: 0; width: 100%; visibility: hidden; overflow: hidden; z-index: -1; }        .spa-page {position: absolute; left: 0; top: 0; bottom: 0; right: 0; margin: 0; padding: 0; overflow: hidden; z-index: 2000; -webkit-transform: translateZ(0); -webkit-backface-visibility: hidden; -webkit-transform-style: preserve-3d;}        .spa-page-bg {position: absolute; left: 0; top: 0; bottom: 0; right: 0; margin: 0; padding: 0; }        .spa-page-body {position: absolute; left: 0; top: 0; bottom: 0; right: 0; margin: 0; padding: 0; overflow: hidden; -webkit-transform: translateZ(0); -webkit-backface-visibility: hidden; -webkit-transform-style: preserve-3d;}        .spa-scroll {overflow: auto;}        .spa-scroll-touch {-webkit-overflow-scrolling: touch; }        .spa-scroll-x {overflow-y: hidden;}        .spa-scroll-y {overflow-x: hidden;}        .spa-cover {display: none; position: absolute; left: 0; right: 0; top: 0; bottom: 0; text-align: center; z-index: 5000; }        .spa-loader {display: none; position: absolute; left: 0; right: 0; top: 0; bottom: 0; text-align: center; overflow: hidden; z-index: 5001; }",
                    H = '<div class="spa-loader-animate"><div class="bg"></div><span class="ball"></span><span class="ball"></span></div>',
                    I = ".spa-loader-animate {position: absolute; top: 50%; left: 50%;}        .spa-loader-animate .bg {position: absolute; width: 64px; height: 64px; margin: 0 auto; top: -32px; left: -32px; border-radius: 50%; background: #2C3E50; opacity: 0.5;}        .spa-loader-animate .ball {display: block; float: left; padding: 8px; margin-top: -8px; margin-left: -10px; -webkit-border-radius: 50%; -moz-border-radius: 50%; -ms-border-radius: 50%; -o-border-radius: 50%; border-radius: 50%;}        .spa-loader-animate span:nth-child(2) {background: #16A085; -webkit-animation: move-left 800ms ease-in-out infinite alternate; -moz-animation: move-left 800ms ease-in-out infinite alternate; -ms-animation: move-left 800ms ease-in-out infinite alternate; -animation: move-left 800ms ease-in-out infinite alternate;}        .spa-loader-animate .ball:nth-child(3) {background: #E67E22; -webkit-animation: move-right 800ms ease-in-out infinite alternate; -moz-animation: move-right 800ms ease-in-out infinite alternate; -ms-animation: move-right 800ms ease-in-out infinite alternate; animation: move-right 800ms ease-in-out infinite alternate;}        @-webkit-keyframes move-left {to {-webkit-transform: translate(20px, 0); transform: translate(20px, 0); background: #e85932;}}        @-webkit-keyframes move-right {to {-webkit-transform: translate(-20px, 0); transform: translate(-20px, 0); background: #44bbcc;}}";
                a.spa = {}, a.spa.getViewData = function(a) {
                        return F[a.data("id")]
                    }, a.spa.getCurPage = function() {
                        return m
                    }, a.spa.version = "1.0.4", o.on("spa:addstyle", function(b, c) {
                        a("head").append('<style type="text/css">' + c + "</style>")
                    }),
                    function() {
                        var b, c, d, e, f = function() {
                            d = Math.max(n.height(), window.innerHeight), e = Math.max(n.width(), window.innerWidth), k.css({
                                height: 2 * d
                            }), window.scrollTo(0, 0), i.data("innerHeight", window.innerHeight), d = Math.max(n.height(), window.innerHeight), k.height() != d && (i.css({
                                width: e,
                                height: d
                            }), k.css({
                                width: e,
                                height: d
                            }))
                        };
                        n.on("spa:adjustfullscreen" + (a.os.ios ? " orientationchange" : ""), function() {
                            void 0 !== b && (cancelAnimationFrame(b), b = void 0), b = requestAnimationFrame(f)
                        }), a.os.android && n.on("orientationchange", function() {
                            clearTimeout(c), c = setTimeout(f, 500)
                        }), n.on("resize", function() {
                            clearTimeout(c), c = setTimeout(f, 200)
                        })
                    }(), o.on("spa:scroll", function(b, c) {
                        var d = a(b.target),
                            e = c && c.direction || "";
                        d.addClass("spa-scroll" + (e ? " spa-scroll-" + e : ""))
                    }), o.on("spa:removescroll", function(b) {
                        var c = a(b.target);
                        c.removeClass("spa-scroll")
                    }), r && o.on("touchstart", ".spa-scroll, .spa-scroll-x, .spa-scroll-y", function(b) {
                        var c = a(b.currentTarget),
                            d = c.prop("scrollTop"),
                            e = c.prop("scrollLeft"),
                            f = c.height(),
                            g = c.width(),
                            h = c.prop("scrollHeight"),
                            i = c.prop("scrollWidth");
                        (c.hasClass("spa-scroll") || c.hasClass("spa-scroll-x")) && (0 >= e && c.prop("scrollLeft", 1), e + g >= i && c.prop("scrollLeft", i - g - 1)), (c.hasClass("spa-scroll") || c.hasClass("spa-scroll-y")) && (0 >= d && c.prop("scrollTop", 1), d + f >= h && c.prop("scrollTop", d - 1))
                    }), n.on("popstate", function(a) {
                        if (s) {
                            if (l && "block" === l.css("display")) return !1;
                            if (m && m.hasClass("spa-panel")) {
                                var c = m.data("id"),
                                    d = F[c],
                                    e = d.prevPage;
                                return e.trigger("spa:openpage"), !1
                            }
                            var f = b();
                            if (!x.length || x[x.length - 1] !== f) {
                                x.push(f);
                                var g = C[f],
                                    h = a.state || {};
                                if (j && (h = j, j = void 0), g) {
                                    var i = g.data("id"),
                                        k = F[i];
                                    k.oldpushData = k.pushData, k.pushData = h, g.trigger("spa:openpage")
                                } else o.trigger("spa:createpage", {
                                    hash: f,
                                    pushData: h
                                })
                            }
                        }
                    });
                var J = /\((.*?)\)/g,
                    K = /(\(\?)?:\w+/g,
                    L = /\*\w+/g,
                    M = /[\-{}\[\]+?.,\\\^$|#\s]/g,
                    N = {
                        route: "",
                        animate: "",
                        classname: "",
                        view: function() {
                            return {
                                title: "",
                                body: ""
                            }
                        },
                        init: function() {},
                        beforeopen: function() {},
                        afteropen: function() {},
                        beforeclose: function() {},
                        afterclose: function() {}
                    };
                o.on("spa:route", function(b, e) {
                    var f = Array.prototype.slice.call(arguments, 1);
                    if (f.length > 1) return a.each(f, function(a, b) {
                        o.trigger("spa:route", b)
                    }), !1;
                    var g = e.route || "";
                    c(g) || (g = d(g)), e.animate && !a.isFunction(e.animate) && T(e.animate) && (e.animate = ""), v[g] = a.extend({}, N, e)
                });
                var O, P, Q, R = {},
                    S = {};
                ! function() {
                    var a, b = {
                            "-webkit-transition": ["-webkit-transform", "webkitTransitionEnd"],
                            "-moz-transition": ["-moz-transform", "transitionend"],
                            "-ms-transition": ["-ms-transform", "msTransitionEnd"],
                            "-o-transition": ["-o-transform", "oTransitionEnd"],
                            transition: ["transform", "transitionend"]
                        },
                        c = document.createElement("div");
                    for (a in b)
                        if (void 0 !== c.style[a]) {
                            P = a, O = b[a][0], Q = b[a][1];
                            break
                        }
                }(), a.fn.transition = function(b, c) {
                    var d = a(this);
                    return requestAnimationFrame(function() {
                        d.get(0).offsetWidth, b[P] = "0.4s", d.css(b).emulateTransitionEnd(function() {
                            b = {}, b[P] = "", d.css(b), c && c()
                        })
                    }), d
                }, a.fn.emulateTransitionEnd = function(b, c) {
                    var d, e = !1,
                        f = a(this);
                    c = c || 500, f.one(Q, function() {
                        e = !0, clearTimeout(d), b.call(f)
                    });
                    var g = function() {
                        e || f.trigger(Q)
                    };
                    return d = setTimeout(g, c), f
                }, R.defaultInOut = function(a, b, c) {
                    f(b, a), c()
                }, o.on("spa:addTransitPageAnimates", function(b, c) {
                    var d = [];
                    a.each(c, function(a) {
                        d.push(a)
                    }), a.each(d, function(a, b) {
                        S[b] = a % 2 === 0 ? d[a + 1] : d[a - 1]
                    }), a.extend(R, c)
                }), o.trigger("spa:addTransitPageAnimates", {
                    fadeIn: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), {
                                opacity: 0
                            }),
                            h = {
                                opacity: 1
                            };
                        g.opacity = 0, e.css(g), f(c, b), e.transition(h, function() {
                            d()
                        })
                    },
                    fadeOut: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = {
                                opacity: 0
                            };
                        e.transition(g, function() {
                            f(c, b), d()
                        })
                    },
                    slideInLeft: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), {}),
                            h = {};
                        g[O] = "translate(100%, 0)", h[O] = "translate(0%, 0)", e.css(g), f(c, b), e.transition(h, function() {
                            d()
                        })
                    },
                    slideOutRight: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = {};
                        g[O] = "translate(100%, 0)", e.transition(g, function() {
                            f(c, b), d()
                        })
                    },
                    slideInRight: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), {}),
                            h = {};
                        g[O] = "translate(-100%, 0)", h[O] = "translate(0%, 0)", e.css(g), f(c, b), e.transition(h, function() {
                            d()
                        })
                    },
                    slideOutLeft: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = {};
                        g[O] = "translate(-100%, 0)", e.transition(g, function() {
                            f(c, b), d()
                        })
                    },
                    slideInUp: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), {}),
                            h = {};
                        g[O] = "translate(0, 100%)", h[O] = "translate(0, 0%)", e.css(g), f(c, b), e.transition(h, function() {
                            d()
                        })
                    },
                    slideOutDown: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = {};
                        g[O] = "translate(0, 100%)", e.transition(g, function() {
                            f(c, b), d()
                        })
                    },
                    slideInDown: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), {}),
                            h = {};
                        g[O] = "translate(0, -100%)", h[O] = "translate(0, 0%)", e.css(g), f(c, b), e.transition(h, function() {
                            d()
                        })
                    },
                    slideOutUp: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = {};
                        g[O] = "translate(0, -100%)", e.transition(g, function() {
                            f(c, b), d()
                        })
                    },
                    pushInLeft: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = 0,
                            i = {},
                            j = {},
                            k = {};
                        i[O] = "translate(100%, 0)", j[O] = "translate(0%, 0)", k[O] = "translate(-100%, 0)", e.css(i), f(c, b), e.transition(j, function() {
                            2 == ++h && d()
                        }), g.transition(k, function() {
                            2 == ++h && d()
                        })
                    },
                    pushOutRight: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = 0,
                            i = {},
                            j = {},
                            k = {};
                        i[O] = "translate(-100%, 0)", j[O] = "translate(0%, 0)", k[O] = "translate(100%, 0)", e.css(i), f(c, b), e.transition(j, function() {
                            2 == ++h && d()
                        }), g.transition(k, function() {
                            2 == ++h && d()
                        })
                    },
                    pushInRight: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = 0,
                            i = {},
                            j = {},
                            k = {};
                        i[O] = "translate(-100%, 0)", j[O] = "translate(0%, 0)", k[O] = "translate(100%, 0)", e.css(i), f(c, b), e.transition(j, function() {
                            2 == ++h && d()
                        }), g.transition(k, function() {
                            2 == ++h && d()
                        })
                    },
                    pushOutLeft: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = 0,
                            i = {},
                            j = {},
                            k = {};
                        i[O] = "translate(100%, 0)", j[O] = "translate(0%, 0)", k[O] = "translate(-100%, 0)", e.css(i), f(c, b), e.transition(j, function() {
                            2 == ++h && d()
                        }), g.transition(k, function() {
                            2 == ++h && d()
                        })
                    },
                    pushInUp: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = 0,
                            i = {},
                            j = {},
                            k = {};
                        i[O] = "translate(0, 100%)", j[O] = "translate(0%, 0)", k[O] = "translate(0, -100%)", e.css(i), f(c, b), e.transition(j, function() {
                            2 == ++h && d()
                        }), g.transition(k, function() {
                            2 == ++h && d()
                        })
                    },
                    pushOutDown: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = 0,
                            i = {},
                            j = {},
                            k = {};
                        i[O] = "translate(0, -100%)", j[O] = "translate(0%, 0)", k[O] = "translate(0, 100%)", e.css(i), f(c, b), e.transition(j, function() {
                            2 == ++h && d()
                        }), g.transition(k, function() {
                            2 == ++h && d()
                        })
                    },
                    pushInDown: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = 0,
                            i = {},
                            j = {},
                            k = {};
                        i[O] = "translate(0, -100%)", j[O] = "translate(0%, 0)", k[O] = "translate(0, 100%)", e.css(i), f(c, b), e.transition(j, function() {
                            2 == ++h && d()
                        }), g.transition(k, function() {
                            2 == ++h && d()
                        })
                    },
                    pushOutUp: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = 0,
                            i = {},
                            j = {},
                            k = {};
                        i[O] = "translate(0, 100%)", j[O] = "translate(0%, 0)", k[O] = "translate(0, -100%)", e.css(i), f(c, b), e.transition(j, function() {
                            2 == ++h && d()
                        }), g.transition(k, function() {
                            2 == ++h && d()
                        })
                    },
                    zoomIn: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), {}),
                            h = {};
                        g[O] = "scale(0, 0)", h[O] = "scale(1, 1)", e.css(g), f(c, b), e.transition(h, function() {
                            d()
                        })
                    },
                    zoomOut: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = {};
                        g[O] = "scale(0, 0)", e.transition(g, function() {
                            f(c, b), d()
                        })
                    },
                    overlayInLeft: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), e.children().width()),
                            h = {
                                left: "auto",
                                width: g
                            },
                            i = {};
                        i[O] = "translate(0px, 0)", e.css(h), g = 2 * g - e.prop("clientWidth"), h = {
                            width: g
                        }, h[O] = "translate(" + g + "px, 0)", e.css(h), f(c, b), e.transition(i, function() {
                            d()
                        })
                    },
                    overlayOutRight: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = e.width(),
                            h = {},
                            i = {
                                width: "auto",
                                left: 0
                            };
                        h[O] = "translate(" + g + "px, 0)", e.transition(h, function() {
                            f(c, b), e.css(i), d()
                        })
                    },
                    overlayInRight: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), e.children().width()),
                            h = {
                                right: "auto",
                                width: g
                            },
                            i = {};
                        i[O] = "translate(0px, 0)", e.css(h), g = 2 * g - e.prop("clientWidth"), h = {
                            width: g
                        }, h[O] = "translate(" + (0 - g) + "px, 0)", e.css(h), f(c, b), e.transition(i, function() {
                            d()
                        })
                    },
                    overlayOutLeft: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = e.width(),
                            h = {},
                            i = {
                                width: "auto",
                                right: 0
                            };
                        h[O] = "translate(" + (0 - g) + "px, 0)", e.transition(h, function() {
                            f(c, b), e.css(i), d()
                        })
                    },
                    overlayInUp: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), e.children().height()),
                            h = {
                                top: "auto",
                                height: g
                            },
                            i = {};
                        i[O] = "translate(0, 0px)", e.css(h), g = 2 * g - e.prop("clientHeight"), h = {
                            height: g
                        }, h[O] = "translate(0, " + g + "px)", e.css(h), f(c, b), e.transition(i, function() {
                            d()
                        })
                    },
                    overlayOutDown: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = e.height(),
                            h = {},
                            i = {
                                height: "auto",
                                top: 0
                            };
                        h[O] = "translate(0, " + g + "px)", e.transition(h, function() {
                            f(c, b), e.css(i), d()
                        })
                    },
                    overlayInDown: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = (a(".spa-page-body", c), e.children().height()),
                            h = {
                                bottom: "auto",
                                height: g
                            },
                            i = {};
                        i[O] = "translate(0, 0px)", e.css(h), g = 2 * g - e.prop("clientHeight"), h = {
                            height: g
                        }, h[O] = "translate(0, " + (0 - g) + "px)", e.css(h), f(c, b), e.transition(i, function() {
                            d()
                        })
                    },
                    overlayOutUp: function(b, c, d) {
                        var e = (a(".spa-page-body", b), a(".spa-page-body", c)),
                            g = e.height(),
                            h = {},
                            i = {
                                height: "auto",
                                bottom: 0
                            };
                        h[O] = "translate(0, " + (0 - g) + "px)", e.transition(h, function() {
                            f(c, b), e.css(i), d()
                        })
                    },
                    revealInLeft: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = e.children().width(),
                            i = {
                                left: "auto",
                                width: h
                            },
                            j = {};
                        i[O] = "translate(0, 0)", e.css(i), h = 2 * e.width() - e.prop("clientWidth"), e.css({
                            width: h
                        }), j[O] = "translate(" + (0 - h) + "px, 0)", f(b, c), g.transition(j, function() {
                            f(c, b), d()
                        })
                    },
                    revealOutRight: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = (g.width(), {});
                        h[O] = "translate(0px, 0)", f(c, b), e.transition(h, function() {
                            g.css({
                                width: "auto",
                                left: 0
                            }), d()
                        })
                    },
                    revealInRight: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = e.children().width(),
                            i = {
                                right: "auto",
                                width: h
                            },
                            j = {};
                        i[O] = "translate(0, 0)", e.css(i), h = 2 * e.width() - e.prop("clientWidth"), e.css({
                            width: h
                        }), j[O] = "translate(" + h + "px, 0)", f(b, c), g.transition(j, function() {
                            f(c, b), d()
                        })
                    },
                    revealOutLeft: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = (g.width(), {});
                        h[O] = "translate(0px, 0)", f(c, b), e.transition(h, function() {
                            g.css({
                                width: "auto",
                                right: 0
                            }), d()
                        })
                    },
                    revealInUp: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = e.children().height(),
                            i = {
                                top: "auto",
                                height: h
                            },
                            j = {};
                        i[O] = "translate(0, 0)", e.css(i), h = 2 * e.height() - e.prop("clientHeight"), e.css({
                            height: h
                        }), j[O] = "translate(0, " + (0 - h) + "px)", f(b, c), g.transition(j, function() {
                            f(c, b), d()
                        })
                    },
                    revealOutDown: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = (g.height(), {});
                        h[O] = "translate(0, 0px)", f(c, b), e.transition(h, function() {
                            g.css({
                                height: "auto",
                                top: 0
                            }), d()
                        })
                    },
                    revealInDown: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = e.children().height(),
                            i = {
                                bottom: "auto",
                                height: h
                            },
                            j = {};
                        i[O] = "translate(0, 0)", e.css(i), h = 2 * e.height() - e.prop("clientHeight"), e.css({
                            height: h
                        }), j[O] = "translate(0, " + h + "px)", f(b, c), g.transition(j, function() {
                            f(c, b), d()
                        })
                    },
                    revealOutUp: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = (g.height(), {});
                        h[O] = "translate(0, 0px)", f(c, b), e.transition(h, function() {
                            g.css({
                                height: "auto",
                                bottom: 0
                            }), d()
                        })
                    },
                    pushPartInLeft: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = e.children().width(),
                            i = 0,
                            j = {
                                left: "auto",
                                width: h
                            },
                            k = {},
                            l = {};
                        e.css(j), h = 2 * e.width() - e.prop("clientWidth"), j = {
                            width: h
                        }, j[O] = "translate(" + h + "px, 0)", k[O] = "translate(0px, 0)", l[O] = "translate(" + (0 - h) + "px, 0)", e.css(j), f(c, b), e.transition(k, function() {
                            2 == ++i && d()
                        }), g.transition(l, function() {
                            2 == ++i && d()
                        })
                    },
                    pushPartOutRight: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = g.width(),
                            i = 0,
                            j = {},
                            k = {},
                            l = {
                                width: "auto",
                                left: 0
                            };
                        j[O] = "translate(0px, 0)", k[O] = "translate(" + h + "px, 0)", f(c, b), e.transition(j, function() {
                            2 == ++i && d()
                        }), g.transition(k, function() {
                            g.css(l), 2 == ++i && d()
                        })
                    },
                    pushPartInRight: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = e.children().width(),
                            i = 0,
                            j = {
                                right: "auto",
                                width: h
                            },
                            k = {},
                            l = {};
                        e.css(j), h = 2 * e.width() - e.prop("clientWidth"), j = {
                            width: h
                        }, j[O] = "translate(" + (0 - h) + "px, 0)", l[O] = "translate(" + h + "px, 0)", k[O] = "translate(0px, 0)", e.css(j), f(c, b), e.transition(k, function() {
                            2 == ++i && d()
                        }), g.transition(l, function() {
                            2 == ++i && d()
                        })
                    },
                    pushPartOutLeft: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = g.width(),
                            i = 0,
                            j = {},
                            k = {},
                            l = {
                                width: "auto",
                                right: 0
                            };
                        j[O] = "translate(0px, 0)", k[O] = "translate(" + (0 - h) + "px, 0)", f(c, b), e.transition(j, function() {
                            2 == ++i && d()
                        }), g.transition(k, function() {
                            g.css(l), 2 == ++i && d()
                        })
                    },
                    pushPartInUp: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = e.children().height(),
                            i = 0,
                            j = {
                                top: "auto",
                                height: h
                            },
                            k = {},
                            l = {};
                        e.css(j), h = 2 * e.height() - e.prop("clientHeight"), j = {
                            height: h
                        }, j[O] = "translate(0, " + h + "px)", k[O] = "translate(0, 0px)", l[O] = "translate(0, " + (0 - h) + "px)", e.css(j), f(c, b), e.transition(k, function() {
                            2 == ++i && d()
                        }), g.transition(l, function() {
                            2 == ++i && d()
                        })
                    },
                    pushPartOutDown: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = g.height(),
                            i = 0,
                            j = {},
                            k = {},
                            l = {
                                height: "auto",
                                top: 0
                            };
                        j[O] = "translate(0, 0px)", k[O] = "translate(0, " + h + "px)", f(c, b), e.transition(j, function() {
                            2 == ++i && d()
                        }), g.transition(k, function() {
                            g.css(l), 2 == ++i && d()
                        })
                    },
                    pushPartInDown: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = e.children().height(),
                            i = 0,
                            j = {
                                bottom: "auto",
                                height: h
                            },
                            k = {},
                            l = {};
                        e.css(j), h = 2 * e.height() - e.prop("clientHeight"), j = {
                            height: h
                        }, j[O] = "translate(0, " + (0 - h) + "px)", k[O] = "translate(0, 0px)", l[O] = "translate(0, " + h + "px)", e.css(j), f(c, b), e.transition(k, function() {
                            2 == ++i && d()
                        }), g.transition(l, function() {
                            2 == ++i && d()
                        })
                    },
                    pushPartOutUp: function(b, c, d) {
                        var e = a(".spa-page-body", b),
                            g = a(".spa-page-body", c),
                            h = g.height(),
                            i = 0,
                            j = {},
                            k = {},
                            l = {
                                height: "auto",
                                bottom: 0
                            };
                        j[O] = "translate(0, 0px)", k[O] = "translate(0, " + (0 - h) + "px)", f(c, b), e.transition(j, function() {
                            2 == ++i && d()
                        }), g.transition(k, function() {
                            g.css(l), 2 == ++i && d()
                        })
                    }
                });
                var T = function() {
                        var a = /^(overlay|reveal|pushPart).*$/;
                        return function(b) {
                            return a.test(b)
                        }
                    }(),
                    U = function() {
                        var a = 0;
                        return function() {
                            return a++
                        }
                    }();
                o.on("spa:createpage", function(b, d) {
                    o.trigger("spa:openloader");
                    var f, g, h, i = d.hash,
                        j = d.pushData;
                    if (a.each(v, function(a, b) {
                            return g = new RegExp(a), g.test(i) ? (f = a, h = b, !1) : void(g = !1)
                        }), c(g)) {
                        var k, l, m = h.classname ? " spa-page-" + h.classname : "",
                            n = a('<div class="spa-page' + m + '"><div class="spa-page-body"></div></div>'),
                            p = U();
                        n.data("id", p), k = {
                            id: p,
                            hash: i,
                            pushData: j,
                            requestData: e(g, i),
                            route: f,
                            el: n
                        }, F[p] = k, o.trigger("spa:viewcache", {
                            view: n
                        }), l = h.view.call(n, k), a.isPlainObject(l) && o.trigger("spa:initpage", [n, l])
                    }
                }), o.on("spa:initpage", function(b, c, d) {
                    var e = c.data("id"),
                        f = F[e],
                        g = v[f.route];
                    a.each(["init", "beforeopen", "afteropen", "beforeclose", "afterclose"], function(a, b) {
                        d[b] && (g[b] = d[b])
                    }), f.viewData = d, o.trigger("spa:closeloader"), a(".spa-page-body", c).html(d.body), i.append(c), c.trigger("spa:openpage")
                }), o.on("spa:openpage", ".spa-page", function(c, d) {
                    var e = a(c.currentTarget),
                        f = e.data("id"),
                        h = F[f],
                        j = v[h.route],
                        k = h.hash,
                        l = h.pushData,
                        p = (h.oldpushData, h.requestData, h.viewData),
                        q = l.title || p.title,
                        r = !1,
                        s = l.animate || j.animate;
                    m || (i.append('<div class="spa-page spa-page-empty"><div class="spa-page-body"></div></div>'), m = a(".spa-page-empty"));
                    var u = m.data("id"),
                        x = F[u] || {};
                    if (!l.animate && x.prevPage && x.prevPage.data("id") === f) {
                        var A = x.prevAnimate;
                        A && !a.isFunction(A) && (s = S[A]), r = !0
                    }
                    var B, C;
                    if (m.hasClass("spa-panel")) {
                        var D = w[m.data("id")];
                        B = D.beforeclose, C = D.afterclose
                    } else if (x.route) {
                        var E = v[x.route];
                        B = E.beforeclose, C = E.afterclose, o.trigger("spa:navigate", {
                            hash: k,
                            title: q,
                            pushData: l,
                            replace: !0
                        })
                    }
                    var G = function() {
                        e.data("spa:init") || (e.data("spa:init", !0), j.init.call(e, h), a.os.ios && parseInt(a.os.version.slice(0, 1)) > 5 && a(".spa-scroll", e).addClass("spa-scroll-touch")), a.os.ios && parseInt(a.os.version.slice(0, 1)) > 5 && a(".spa-scroll", m).removeClass("spa-scroll-touch"), C && C.call(m, x), m.hasClass("spa-panel") ? (m.css({
                            zIndex: y
                        }), h.prevPage && h.prevPage.css({
                            zIndex: z
                        })) : r || (h.prevPage = m), j.afteropen.call(e, h), m = e, h.hash !== b() ? (t = !1, n.trigger("popstate")) : (a.isFunction(d) && d.call(e), t = !1)
                    };
                    B && B.call(m, x), j.beforeopen.call(e, h), !r && (h.prevAnimate = s), a.os.ios && parseInt(a.os.version.slice(0, 1)) > 5 && a(".spa-scroll", e).addClass("spa-scroll-touch"), r || x.prevPage && x.prevPage.css({
                        zIndex: y
                    }), a.isFunction(s) ? s(e, m, G) : g(e, m, s, G), o.trigger("spa:viewcachesort", {
                        view: e
                    })
                });
                var V = {
                    id: "",
                    animate: "",
                    classname: "",
                    view: function() {
                        return {
                            body: ""
                        }
                    },
                    init: function() {},
                    beforeopen: function() {},
                    afteropen: function() {},
                    beforeclose: function() {},
                    afterclose: function() {}
                };
                o.on("spa:panel", function(b, c) {
                    var d = Array.prototype.slice.call(arguments, 1);
                    return d.length > 1 ? (a.each(d, function(a, b) {
                        o.trigger("spa:panel", b)
                    }), !1) : void(c.id && !w[c.id] && (w[c.id] = a.extend({}, V, c)))
                }), o.on("spa:createpanel", function(b, c, d) {
                    var e = w[c];
                    if (e) {
                        o.trigger("spa:openloader");
                        var f, g, h = e.classname ? " spa-panel-" + e.classname : "",
                            i = a('<div id="spa-panel-' + c + '" class="spa-page spa-panel ' + h + '"><div class="spa-page-bg"></div><div class="spa-page-body"></div></div>');
                        i.data("id", c), f = {
                            id: c,
                            pushData: d,
                            el: i
                        }, F[c] = f, o.trigger("spa:viewcache", {
                            view: i
                        }), g = e.view.call(i, f), a.isPlainObject(g) && i.trigger("spa:initpanel", [i, g])
                    }
                }), o.on("spa:initpanel", function(b, c, d) {
                    var e = c.data("id"),
                        f = F[e],
                        g = f.pushData,
                        h = w[e];
                    a.each(["init", "beforeopen", "afteropen", "beforeclose", "afterclose"], function(a, b) {
                        d[b] && (h[b] = d[b])
                    }), f.viewData = d, a(".spa-page-body", c).html(d.body), i.append(c), o.trigger("spa:closeloader"), c.trigger("spa:openpanel", [e, g])
                }), o.on("spa:openpanel", function(b, c, d) {
                    if (l && "block" === l.css("display")) return !1;
                    var e = D[c];
                    if (d || (d = {}), e) {
                        if (t) return !1;
                        t = !0;
                        var f = w[c],
                            h = d.animate || f.animate;
                        if (m.hasClass("spa-panel")) {
                            var i = F(m.data("id")).prevPage;
                            return i.trigger("spa:openpage", [function() {
                                o.trigger("spa:openpanel", [c, d])
                            }]), !1
                        }
                        var j = F[c];
                        j.oldpushData = j.pushData, j.pushData = d, f.beforeopen.call(e, j);
                        var k = function() {
                            e.data("spa:init") || (e.data("spa:init", !0), f.init.call(e, j), a.os.ios && parseInt(a.os.version.slice(0, 1)) > 5 && setTimeout(function() {
                                a(".spa-scroll", e).addClass("spa-scroll-touch")
                            }, 17)), j.prevPage = m, f.afteropen.call(e, j), m = e, t = !1
                        };
                        j.prevAnimate = h, a.os.ios && parseInt(a.os.version.slice(0, 1)) > 5 && a(".spa-scroll", e).addClass("spa-scroll-touch");
                        var n = m.data("id"),
                            p = F[n] || {};
                        p.prevPage && p.prevPage.css({
                            zIndex: y
                        }), a.isFunction(h) ? h(e, m, k) : g(e, m, h, k), o.trigger("spa:viewcachesort", {
                            view: e
                        })
                    } else o.trigger("spa:createpanel", [c, d])
                }), o.on("spa:closepanel", function(b, c) {
                    var d = a(b.target),
                        e = d.data("id"),
                        f = F[e];
                    if (c && c.id && (d = a(".spa-panel-" + c.id)), m.hasClass("spa-panel") && m.data("id") === e) {
                        var g = f.prevPage;
                        g.trigger("spa:openpage")
                    }
                }), o.on("click touchstart", ".spa-panel", function(b) {
                    var c = a(b.currentTarget),
                        d = a(b.target);
                    (d.hasClass("spa-page-bg") || d.hasClass("spa-panel")) && (b.stopPropagation(), b.preventDefault(), c.trigger("spa:closepanel"))
                }), o.on("spa:viewcachecount", function(a, b) {
                    B = b.count
                }), o.on("spa:viewcache", function(b, c) {
                    var d, e, f = c.view,
                        g = f.data("id");
                    if (f.hasClass("spa-panel") ? (d = "panle", e = g, D[e] = f) : (d = "page", e = F[g].hash, C[e] = f), E.unshift(d + ":" + e), 0 !== B && E.length > B) {
                        var h, i, j, k, l = E.splice(B);
                        a.each(l, function(b, c) {
                            h = c.split(":", 2), i = h[0], j = h[1], k = "page" == i ? C : D, a("img", k[j]).remove(), k[j].html("").remove(), delete k[j]
                        })
                    }
                }), o.on("spa:viewcachesort", function(a, b) {
                    var c, d, e, f, g = b.view,
                        h = g.data("id");
                    g.hasClass("spa-panel") ? (c = "panle", d = h) : (c = "page", d = F[h].hash), e = c + ":" + d, f = E.indexOf(e), -1 !== f && (E.splice(f, 1), E.unshift(e))
                }), o.on("spa:navigate", function(b, c) {
                    var d = c.hash || "",
                        e = c.title || "",
                        f = c.pushData || {},
                        g = c.replace || !1,
                        h = c.url || "";
                    if (e && (document.title = e), d = h + "#" + d, g) q.replaceState(f, e, d);
                    else {
                        if (!m.hasClass("spa-panel") && x.length && "#" + x[x.length - 1] === d) return;
                        if (t) return !1;
                        t = !0, q.pushState(f, e, d), !a.isEmptyObject(f) && (j = f), n.trigger("popstate")
                    }
                }), o.on("spa:loader", function(a, b) {
                    b.body && (H = b.body), b.style && (I = b.style)
                });
                var W;
                o.on("spa:openloader", function() {
                    W = setTimeout(function() {
                        W = void 0, l.show()
                    }, 300)
                }), o.on("spa:closeloader", function() {
                    W ? (clearTimeout(W), W = void 0) : l.hide()
                }), o.on("spa:boot", function(b, c) {
                    i = a("body"), o.trigger("spa:addstyle", G + I), i.append('<div class="spa-fullscreen"></div><div class="spa-loader">' + H + "</div>"), k = a(".spa-fullscreen"), o.trigger("spa:adjustfullscreen"), l = a(".spa-loader"), l.on("click select mousedown mousemove mouseup touchstart touchmove touchend", h), s = !0, n.trigger("popstate"), c && c.callback && c.callback()
                })
            }(window.Zepto || window.jQuery || window.$),
            function() {
                "use strict";
                for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
                    var c = (new Date).getTime(),
                        d = Math.max(0, 16 - (c - a)),
                        e = window.setTimeout(function() {
                            b(c + d)
                        }, d);
                    return a = c + d, e
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
                    clearTimeout(a)
                })
            }(), ! function() {
                function a(a) {
                    return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y)
                }

                function b(a) {
                    return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
                }

                function c(c, d) {
                    function e(a) {
                        return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a
                    }

                    function f(b) {
                        var c = m;
                        if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function() {
                                return m++, "$line=" + m + ";"
                            })), 0 === b.indexOf("=")) {
                            var e = l && !/^=[=#]/.test(b);
                            if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
                                var f = b.replace(/\s*\([^\)]+\)/, "");
                                n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")")
                            } else b = "$string(" + b + ")";
                            b = s[1] + b + s[2]
                        }
                        return g && (b = "$line=" + c + ";" + b), r(a(b), function(a) {
                            if (a && !p[a]) {
                                var b;
                                b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0
                            }
                        }), b + "\n"
                    }
                    var g = d.debug,
                        h = d.openTag,
                        i = d.closeTag,
                        j = d.parser,
                        k = d.compress,
                        l = d.escape,
                        m = 1,
                        p = {
                            $data: 1,
                            $filename: 1,
                            $utils: 1,
                            $helpers: 1,
                            $out: 1,
                            $line: 1
                        },
                        q = "".trim,
                        s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
                        t = q ? "$out+=text;return $out;" : "$out.push(text);",
                        u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
                        v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
                        w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
                        x = s[0],
                        y = "return new String(" + s[3] + ");";
                    r(c.split(h), function(a) {
                        a = a.split(i);
                        var b = a[0],
                            c = a[1];
                        1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)))
                    });
                    var z = w + x + y;
                    g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
                    try {
                        var A = new Function("$data", "$filename", z);
                        return A.prototype = n, A
                    } catch (B) {
                        throw B.temp = "function anonymous($data,$filename) {" + z + "}", B
                    }
                }
                var d = function(a, b) {
                    return "string" == typeof b ? q(b, {
                        filename: a
                    }) : g(a, b)
                };
                d.version = "3.0.0", d.config = function(a, b) {
                    e[a] = b
                };
                var e = d.defaults = {
                        openTag: "<%",
                        closeTag: "%>",
                        escape: !0,
                        cache: !0,
                        compress: !1,
                        parser: null
                    },
                    f = d.cache = {};
                d.render = function(a, b) {
                    return q(a, b)
                };
                var g = d.renderFile = function(a, b) {
                    var c = d.get(a) || p({
                        filename: a,
                        name: "Render Error",
                        message: "Template not found"
                    });
                    return b ? c(b) : c
                };
                d.get = function(a) {
                    var b;
                    if (f[a]) b = f[a];
                    else if ("object" == typeof document) {
                        var c = document.getElementById(a);
                        if (c) {
                            var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
                            b = q(d, {
                                filename: a
                            })
                        }
                    }
                    return b
                };
                var h = function(a, b) {
                        return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a
                    },
                    i = {
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "&": "&#38;"
                    },
                    j = function(a) {
                        return i[a]
                    },
                    k = function(a) {
                        return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j)
                    },
                    l = Array.isArray || function(a) {
                        return "[object Array]" === {}.toString.call(a)
                    },
                    m = function(a, b) {
                        var c, d;
                        if (l(a))
                            for (c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a);
                        else
                            for (c in a) b.call(a, a[c], c)
                    },
                    n = d.utils = {
                        $helpers: {},
                        $include: g,
                        $string: h,
                        $escape: k,
                        $each: m
                    };
                d.helper = function(a, b) {
                    o[a] = b
                };
                var o = d.helpers = n.$helpers;
                d.onerror = function(a) {
                    var b = "Template Error\n\n";
                    for (var c in a) b += "<" + c + ">\n" + a[c] + "\n\n";
                    "object" == typeof console && console.error(b)
                };
                var p = function(a) {
                        return d.onerror(a),
                            function() {
                                return "{Template Error}"
                            }
                    },
                    q = d.compile = function(a, b) {
                        function d(c) {
                            try {
                                return new i(c, h) + ""
                            } catch (d) {
                                return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c))
                            }
                        }
                        b = b || {};
                        for (var g in e) void 0 === b[g] && (b[g] = e[g]);
                        var h = b.filename;
                        try {
                            var i = c(a, b)
                        } catch (j) {
                            return j.filename = h || "anonymous", j.name = "Syntax Error", p(j)
                        }
                        return d.prototype = i.prototype, d.toString = function() {
                            return i.toString()
                        }, h && b.cache && (f[h] = d), d
                    },
                    r = n.$each,
                    s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
                    t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
                    u = /[^\w$]+/g,
                    v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
                    w = /^\d[^,]*|,\d[^,]*/g,
                    x = /^,+|,+$/g,
                    y = /^$|,+/;
                e.openTag = "{{", e.closeTag = "}}";
                var z = function(a, b) {
                    var c = b.split(":"),
                        d = c.shift(),
                        e = c.join(":") || "";
                    return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")"
                };
                e.parser = function(a) {
                    a = a.replace(/^\s/, "");
                    var b = a.split(" "),
                        c = b.shift(),
                        e = b.join(" ");
                    switch (c) {
                        case "if":
                            a = "if(" + e + "){";
                            break;
                        case "else":
                            b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "", a = "}else" + b + "{";
                            break;
                        case "/if":
                            a = "}";
                            break;
                        case "each":
                            var f = b[0] || "$data",
                                g = b[1] || "as",
                                h = b[2] || "$value",
                                i = b[3] || "$index",
                                j = h + "," + i;
                            "as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){";
                            break;
                        case "/each":
                            a = "});";
                            break;
                        case "echo":
                            a = "print(" + e + ");";
                            break;
                        case "print":
                        case "include":
                            a = c + "(" + b.join(",") + ");";
                            break;
                        default:
                            if (/^\s*\|\s*[\w\$]/.test(e)) {
                                var k = !0;
                                0 === a.indexOf("#") && (a = a.substr(1), k = !1);
                                for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) o = z(o, m[l]);
                                a = (k ? "=" : "=#") + o
                            } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a
                    }
                    return a
                }, this.template = d
            }(),
            function() {
                "use strict";
                var a = {};
                a.chatImg = '<img class="js_check{{pId}} js_checkImg" src="{{header}}" data-pid="{{pId}}" height=36 width=36/>', a.search = '<div class="contact_search_bar"><div class="search_wrap {{ if !isSearch }}js_search{{else}}searching{{/if}}">                    <a href="javascript:;" class="search_cancel">搜索</a>                    <div class="search_input_wrap">                        <div class="search_input_avatar js_check">                            {{each checkArr}}                            <img class="js_check{{$value}} js_checkImg" src="{{header}}" data-pid="{{$value}}" height=30 width=30/>                            {{/each}}                        </div>                        <div class="search_input_input js_input">                            <span class="search_icon"></span>                            <input type="search" value="{{val}}" class="search_input" placeholder="姓名/手机号">                        </div>                    </div>                </div>                <div class="tips js_tips">msg</div></div>', a.dep = '<li class="contact_node" id="{{depId}}">            <div class="contact_content js_directory">                <div class="contact_content_inner ">                    <div class="contact_folder_wrap ">                        <span class="{{ if hasChild }}icon {{/if}} icon_arrow_down js_arrow"></span>                        <p class="contact_folder_name">{{depName}}</p>                        <a class="indicator_link js_goPList" href="#dep/{{depId}}">                            <span class="contact_gruop_num js_goPList">{{userCount}}</span>                            <span class="icon icon_indicator js_goPList" ></span>                        </a>                    </div>                </div>            </div>            <ul class="contact_items js_container"></ul>        </li>', a.navCheckMod = '<div class="toolbar">            <a href="javascript:;" class="search_done js_checkdone mod-contact-chmod-empty js_checknum">确定</a>    </div>', a.letter = '<div class="contact_member_block js_letter{{letter}}" data-letter="{{letter}}" {{if isAndroid}}style="width: 95%"{{/if}}>            <div class="contact_member_title">{{letter}}</div>            <ul class="contact_member_items js_container">{{#str}}</ul>        </div>', a.people = '<li class="contact_member_content">            <div class="contact_content">            <a href="#p/{{pId}}" class="contact_info">                <img data-pid="{{pId}}" data-header="{{header}}" class="contact_member_avatar js_lazyload">                <p class="contact_member_name">{{pName}}</p>            </a>            </div>        </li>', a.peopleCheckMod = '<li class="contact_member_content contact_check_mod {{if !isdefaultChat}}js_checkbox{{/if}} js_{{pId}}" data-header={{header}} data-ver={{pVer}} data-name={{pName}} data-pid="{{pId}}">                <div class="contact_content">                {{if isdefaultChat}}                <div class="contact_member_checkbox contact_member_defaultChat"></div>                {{else if checkObj[pId]}}                <div class="contact_member_checkbox js_input contact_member_checkbox-checked" ></div>                {{else}}                <div class="contact_member_checkbox js_input" ></div>                {{/if}}                <a class="contact_member-chat-name js_nameimg" href="#p/{{pId}}">                <img data-pid="{{pId}}" data-header="{{header}}" class="contact_member_avatar js_lazyload">                <p class="contact_member_name">{{pName}}</p>                </a>                </div>        </li>', a.deplist = '<div class="contact_main_wrap js_wrap">            {{#search}}            <div class="contact_tree_wrap js_scroll js_container" {{if isChatMod}}style="bottom: 55px"{{/if}}>                <ul class="contact_items items_animation-opacity1" style="min-height:{{minHeight}}px;-webkit-transition:0;transition:0">                    {{#loading}}                </ul>            </div>            {{if isChatMod}}{{#nav}}{{/if}}        </div>', a.peoplelist = '<div class="contact_main_wrap js_wrap">            {{#search}}            <div class="contact_member_wrap js_container js_scroll" {{if isChatMod}}style="bottom: 55px;"{{/if}}>                {{#loading}}            </div>            {{if isChatMod}}{{#nav}}{{/if}}            {{#rightBar}}        </div>', a.searchList = '<div class="contact_member_wrap js_container js_scroll js_searchlist" style="bottom: 55px">                {{#loading}}            </div>', a.searchCancelBtn = '<a href="javascript:;" class="search_done js_searchcannel" style="float: left;">取消搜索</a>', a.loading = '<div class="spa-loader-animate" {{if style}}style="{{style}}"{{/if}}>            <div class=""></div>            <span class="ball"></span>            <span class="ball"></span>        </div>', a.button = "<span>{{b1}}</span>            <span>{{b2}}</span>            <span>{{b3}}</span>", a.rightBar = '<div class="contact_index_wrap js_rightBar" style="visibility:hidden">            <div class="contact_index_inner">                <div class="js_specail">↑</div>                <div>A</div>                <div>B</div>                <div>C</div>                <div>D</div>                <div>E</div>                <div>F</div>                <div>G</div>                <div>H</div>                <div>I</div>                <div>J</div>                <div>K</div>                <div>L</div>                <div>M</div>                <div>N</div>                <div>O</div>                <div>P</div>                <div>Q</div>                <div>R</div>                <div>S</div>                <div>T</div>                <div>U</div>                <div>V</div>                <div>W</div>                <div>X</div>                <div>Y</div>                <div>Z</div>                <div>#</div>            </div>            <div class="contact_index_float js_seleter" style="display:none">                <div class="contact_index_arrow js_arrow"></div>                <div class="contact_index_buttons js_button">                    <span>C</span>                    <span>D</span>                    <span>E</span>                </div>            </div>        </div>', a.pinfo = '<div class="main_wrap js_wrap">            <div class="member_detail_wrap">                <div class="mod-member__header-wrap">                    <div class="member_detail_head member_detail_head-new">                        <img src="{{header}}" class="member_detail_avatar js_avatar">                        <div class="name_wrap">                            <p class="name_c">{{name}}                            {{if sex}}                                <span class="{{if sex === 1 }}mod-man{{else}}mod-woman{{/if}}"></span>                            {{/if}}                            </p>                            {{if wechat}}                            <p class="mod-name__content">微信号：{{wechat}}</p>                            {{/if}}                            {{if account}}                            <p class="mod-name__content">企业号帐号：{{account}}</p>                            {{/if}}                        </div>                    </div>                </div>                <div class="member_detail_body">                    {{ each details}}                    {{if $value}}                    <div class="member_detail_item">                        <span class="member_detail_label">{{$index}}</span>                        {{if config[$index] === \'tel\' }}                        <a  href="tel:{{$value}}" class="member_detail_content member_detail_content_phone">{{$value}}</a>                        {{else if config[$index] === \'email\'}}                        <a  href="mailto:{{$value}}" class="member_detail_content member_detail_content_phone">{{$value}}</a>                        {{else}}                            <p class="member_detail_content">{{$value}}</p>                        {{/if}}                    </div>                    {{/if}}                    {{/each}}                    {{if dep.length}}                    <div class="member_detail_item">                        <span class="member_detail_label">部门</span>                        <div class="member_detail_dep-list">                        {{each dep}}                        {{if isGetUser}}                        <p class="member_detail_content-dep">{{$value}}</p>                        {{else}}                        <p class="member_detail_content-dep">                        <a href="#dep/{{$value[0]}}">{{$value[1]}}</a>                        </p>                        {{/if}}                        {{/each}}                        </div>                    </div>                    {{/if}}                </div>                {{if canSelChat}}                <div class="member_detail_buttons js_selChat" data-uin={{uin}} data-name={{name}}>                    <a href="javascript:;" class="member_detail_sendButton">发消息</a>                </div>                {{/if}}            </div>        </div>', window.tpl = a
            }(),
            function() {
                "use strict";

                function a(a) {
                    return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\x60/g, "&#96;").replace(/\x27/g, "&#39;").replace(/\x22/g, "&quot;")
                }

                function b(a) {
                    return (a + "").replace(/&quot;/g, '"').replace(/&#0*39;/g, "'").replace(/&#0*96;/g, "`").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&")
                }

                function c(a) {
                    ob(function() {
                        WeixinJSBridge.invoke("imagePreview", a, $.noop)
                    })
                }

                function d() {
                    var a = {
                        enterprise_members: []
                    };
                    $.each(w, function(b, c) {
                        a.enterprise_members.push({
                            id: c + "@qy_u",
                            nick_name: x[c][0],
                            ver: parseInt(x[c][1]),
                            head_img_url: x[c][2].replace(/64$/, 132),
                            profile_url: window.defaultProfileUrl.replace("CONTACT_UIN", c)
                        })
                    }), ob(function() {
                        WeixinJSBridge.invoke("closeWindow", a, $.noop)
                    })
                }

                function e(a) {
                    return Y > a ? a : 1e3 > a ? "500+" : 1e4 > a ? parseInt(a / 1e3) + "000+" : 1e5 > a ? parseInt(a / 1e4) + "0000+" : "100000+"
                }

                function f(a, b) {
                    var c = $(document.createDocumentFragment()),
                        d = window.dep[b];
                    $.each(d[cb], function(a, b) {
                        var d = window.dep[b],
                            f = e(d[bb]);
                        c.append(M({
                            hasChild: d[cb].length > 0,
                            depId: b,
                            userCount: f,
                            depName: window.dep[b][ab]
                        }))
                    }), a.empty().append(c).data("init", !0)
                }

                function g(a) {
                    var b = a.$el,
                        c = a.callBack,
                        d = a.userList,
                        e = $(document.createDocumentFragment()),
                        f = $(".contact_member_block", b),
                        g = !f.length;
                    if (!g) {
                        var h = f.last(),
                            i = h.data("letter");
                        d[i] && ($.each(d[i], function(a, b) {
                            var c = b[db];
                            e.append($(P({
                                checkObj: x,
                                checkArr: s.data.checkArr,
                                isdefaultChat: y[c],
                                pId: c,
                                pName: b[eb],
                                pVer: b[gb],
                                header: b[fb] + Z
                            })))
                        }), delete d[i], h.append(e))
                    }
                    var j = "";
                    $.each(d, function(a, b) {
                        if (b.length) {
                            var c = "";
                            $.each(b, function(a, b) {
                                var d = b[db];
                                c += P({
                                    checkArr: s.data.checkArr,
                                    checkObj: x,
                                    isdefaultChat: y[d],
                                    pId: d,
                                    pName: b[eb],
                                    pVer: b[gb],
                                    header: b[fb] + Z
                                })
                            }), "_" === a && (a = "↑");
                            var d = O({
                                letter: a,
                                str: c,
                                isAndroid: $.os.android
                            });
                            j += d
                        }
                    }), g ? b.get(0).innerHTML = j : b.append(j), c && c(b), k(b)
                }

                function h(a, b) {
                    var c = a.data("top"),
                        d = a.data("py"),
                        e = a.data("url"),
                        f = e;
                    return void 0 !== c && (f += "&top=" + c), d && (f += "&py=" + d), s.ajaxCache[f] ? void q(s.ajaxCache[f], a, b) : void $.getJSON(f, function(c) {
                        q(c, a, b), s.ajaxCache[f] = c
                    })
                }

                function i(a) {
                    var b = $(a.target);
                    clearTimeout(Bb), Bb = setTimeout(function() {
                        var a = b.height(),
                            c = $(".js_lazyload", b),
                            d = c.length;
                        if (d)
                            for (var e = 0; d > e; e++) {
                                var f = $(c[e]),
                                    g = f.offset().top;
                                if (g > 0 && a + 50 > g && f.attr("src", f.data("header")).removeClass("js_lazyload"), g > a) return
                            }
                    }, 200)
                }

                function j(a) {
                    if (!Db) {
                        var b = $(a.target);
                        if (b.data("isall")) return void b.off("scroll", j);
                        clearTimeout(Cb), Cb = setTimeout(function() {
                            var a = b.height(),
                                c = $(".contact_member_content", b).last(),
                                d = c.offset().top;
                            if (a > d) {
                                var e = $('<div class="contact_member_block">' + S({
                                    style: "position:relative"
                                }) + "</div>");
                                b.append(e), Db = !0, h(b, function(a) {
                                    Db = !1, e && e.remove();
                                    var c = JSON.parse(a.contact_user),
                                        d = a.allusercnt < B;
                                    g({
                                        isAll: d,
                                        userList: c,
                                        $el: b
                                    })
                                })
                            }
                        }, 500)
                    }
                }

                function k(a) {
                    a.data("viewinit") || (a.data("viewinit", !0), a.on("scroll", j), a.on("scroll", i), a.trigger("scroll"))
                }

                function l(a) {
                    var b = $.trim(Fb.val());
                    if (!b && 8 === a.keyCode && s.data.checkNum) {
                        var c = $(".js_check img", Mb).last();
                        return void(c.hasClass("chat-img_mask") ? c.trigger(qb) : c.addClass("chat-img_mask"))
                    }
                    var d = 13 === a.keyCode;
                    d && o({
                        target: Fb
                    })
                }

                function m(a) {
                    var b = $(".toolbar", a);
                    if (!b.data("cannelbtn")) {
                        var c = $(X());
                        b.append(c).data("cannelbtn", !0)
                    }
                }

                function n(a) {
                    var b = $(".toolbar", a);
                    $(".js_searchcannel", b).remove(), b.data("cannelbtn", !1)
                }

                function o() {
                    var a = $.trim(Fb.val());
                    if (a) {
                        if (t) {
                            var b = Eb.closest(".js_wrap");
                            $(".js_searchlist", b).remove();
                            var c = $(".js_container ", b).first(),
                                d = $(W({
                                    loading: S({})
                                }));
                            c.hide().after(d), d.trigger("spa:scroll", {
                                direction: "y"
                            }), $(window).trigger("spa:adjustfullscreen");
                            var e = parseInt(location.hash.replace("#dep/", "")) || 1;
                            return void d.trigger("search:item", {
                                key: a,
                                dep: e,
                                callBack: function(a) {
                                    a ? m(b) : (d.remove(), c.show(), Kb("无搜索结果"), n(b))
                                }
                            })
                        }
                        var f = location.hash.match(/dep\/(-?\d*)/);
                        f = f ? f[1] || 1 : 1, location.hash = "#search/" + f + "/" + encodeURIComponent(a)
                    }
                }

                function p(a, b, c) {
                    var d = a.allusercnt;
                    Jb.hide();
                    var e = JSON.parse(a.contact_user),
                        f = B > d;
                    g({
                        isAll: f,
                        userList: e,
                        $el: c,
                        callBack: function() {
                            var a = $("ul", c);
                            a.length || Kb("无搜索结果", 1), b.callBack(!!a.length)
                        }
                    })
                }

                function q(a, b, c) {
                    var d = a.base_resp;
                    if (0 !== d.ret) return void alert(d.err_msg);
                    var e = a.top;
                    void 0 !== e && b.data("top", e);
                    var f = a.py;
                    f && b.data("py", f);
                    var g = a.isall;
                    g && b.data("isall", g), c(a)
                }

                function r(a, b) {
                    b || (b = document.location.toString().replace(/#.*$/g, ""));
                    var c = new RegExp("(^|&|\\\\?)" + a + "=([^&]*)(&|$|#)"),
                        d = b.match(c);
                    return d ? d[2] : ""
                }
                $.noop = function() {};
                var s = window.app = {};
                s.setupConfig = {}, s.ajaxCache = {}, s.currentPeople = {};
                var t = window.isChatMod,
                    u = window.isGetUser,
                    v = window.canSelChat,
                    w = [],
                    x = {},
                    y = window.defaultChat,
                    z = 0;
                for (var A in y) z++;
                var B = 200,
                    C = "/wxContact/list.json?",
                    D = "/wxContact/user.json?",
                    E = "/wxContact/search.json?",               
                    F = $(document),
                    G = $(window),
                    H = $("body"),
                    I = template.compile,
                    J = window.tpl,
                    K = I(J.chatImg),
                    L = I(J.search),
                    M = I(J.dep),
                    N = t ? I(J.navCheckMod) : $.noop,
                    O = I(J.letter),
                    P = I(t ? J.peopleCheckMod : J.people),
                    Q = I(J.deplist),
                    R = I(J.peoplelist),
                    S = I(J.loading),
                    T = I(J.rightBar),
                    U = I(J.button),
                    V = I(J.pinfo),
                    W = t ? I(J.searchList) : $.noop,
                    X = t ? I(J.searchCancelBtn) : $.noop;
                window.tpl = void 0;
                var Y = 500,
                    Z = 64,
                    _ = 132,
                    ab = 0,
                    bb = 1,
                    cb = 2,
                    db = 0,
                    eb = 1,
                    fb = 2,
                    gb = 3,
                    hb = 0,
                    ib = 1,
                    jb = 2,
                    kb = 3,
                    lb = 5,
                    mb = 6,
                    nb = 7,
                    ob = function(a) {
                        "object" == typeof WeixinJSBridge && "function" == typeof WeixinJSBridge.invoke ? a() : F.on("WeixinJSBridgeReady", a)
                    },
                    pb = function() {
                        ob(function() {
                            WeixinJSBridge.invoke("hideOptionMenu")
                        })
                    },
                    qb = function() {
                        return "createTouch" in document ? "tap" : "click"
                    }();
                "tap" === qb && (F.on("touchstart", "a", function(a) {
                    var b = $(a.currentTarget);
                    b.data("taptime", +new Date)
                }), F.on("click", "a", function(a) {
                    var b = $(a.currentTarget),
                        c = b.data("taptime");
                    (!c || +new Date - c > 500) && (a.preventDefault(), a.stopPropagation())
                })), F.on(qb, ".js_avatar", function(a) {
                    var b = $(a.target),
                        d = b.attr("src").replace(RegExp(_ + "$"), ""),
                        e = {
                            current: d,
                            urls: [d]
                        };
                    c(e)
                }), F.on("doubleTap", ".toolbar", function(a) {
                    var b = $(a.target),
                        c = /^#dep\//.test(location.hash);
                    if (c) {
                        var d = b.prev(),
                            e = [];
                        $("li img", d).each(function() {
                            var a = $(this),
                                b = a.attr("src") || a.data("header");
                            e.push(b.replace(RegExp(Z + "$"), ""))
                        }), ob(function() {
                            WeixinJSBridge.invoke("imagePreview", {
                                current: e[0],
                                urls: e
                            }, function() {})
                        })
                    }
                });
                for (var rb = [], sb = 0; 26 > sb; sb++) rb.push(String.fromCharCode(65 + sb));
                rb.push("_");
                var tb = window.setup.detail,
                    ub = window.setup.spdetail,
                    vb = tb.length,
                    wb = ub.length,
                    xb = 5,
                    yb = window.setup.config;
                s.setupConfig = yb;
                var zb = function(a) {
                    for (var b = {
                            sp: {},
                            co: {}
                        }, c = a[hb], d = c ? ub : tb, e = c ? wb : vb, f = xb; e > f; f++) "微信" === d[f] ? b.sp.wechat = a[f] : "帐号" === d[f] ? b.sp.account = a[f] : f === mb ? b.sp.sex = a[f] : f === nb || (b.co[d[f]] = f === lb ? "" : a[f]);
                    return b
                };
                window.dep = window.dep.dep || {}, $.isEmptyObject(window.dep) || (window.dep[-1] = [window.dep[1][ab], window.dep[1][bb],
                    []
                ], window.dep[1][cb].unshift(-1)), F.on("deplist:getdata", function(a, b) {
                    b = b || {};
                    var c = b.callBack || $.noop,
                        d = $(a.target),
                        e = b.depId,
                        g = b.noRender;
                    g || f(d, e), c()
                });
                var Ab = function(a) {
                    return window.dep[a]
                };
                F.on("peoplelist:getdata", function(a, b) {
                    //用户列表
                    var c = $(a.target),
                        d = parseInt(b.depId),
                        e = b.callBack,
                        f = {
                            $el: c,
                            callBack: e
                        },
                        i = C; - 1 !== d && (i += "&pid=" + d), c.data("url", i), h(c, function(a) {
                        var b = JSON.parse(a.contact_user),
                            c = a.allusercnt,
                            d = B > c;
                        f.isAll = d, f.userList = b, g(f)
                    })
                }), F.on("peopleinfo:getdata", function(a, b) {
                    function c(a, b) {
                        var c = [];
                        b ? c = a[lb] : $.each(a[lb], function(a, b) {
                            var d = [];
                            $.each(b, function(a, b) {
                                var c = Ab(b);
                                c && d.push(c[ab])
                            }), d.length && c.push([b[b.length - 1], d.join("-")])
                        });
                        var g = zb(a);
                        s.currentPeople = {
                            head_img_url: a[jb] + _,
                            id: e + "@qy_u",
                            nick_name: a[kb],
                            ver: a[nb],
                            profile_url: window.defaultProfileUrl.replace("CONTACT_UIN", e)
                        };
                        var h = V({
                            uin: a[ib],
                            header: a[jb] + _,
                            name: a[kb],
                            wechat: g.sp.wechat,
                            account: g.sp.account,
                            sex: g.sp.sex,
                            dep: c,
                            details: g.co,
                            config: yb,
                            isGetUser: u,
                            canSelChat: v
                        });
                        d.empty().append(h), f()
                    }
                    b = b || {};
                    var d = $(a.target),
                        e = b.uid,
                        f = b.callBack || $.noop,
                        g = D + e;
                    if (u) {
                        var h = window.contact[0];
                        return void c(h, !0)
                    }
                    $.getJSON(g, function(a) {
                        var b = a.base_resp;
                        if (0 !== b.ret) return void alert(b.err_msg);
                        var d = JSON.parse(a.contact_user)[0];
                        c(d)
                    })
                });
                var Bb, Cb, Db, Eb = $(L({})),
                    Fb = $("input", Eb),
                    Gb = $(".search_cancel", Eb),
                    Hb = $(".search_wrap", Eb),
                    Ib = function(a, b) {
                        var c = b.placeholder,
                            d = b.value;
                        c && Fb.attr("placeholder", c), d && Fb.val(d), Jb.hide();
                        var e;
                        t && (e = Ob.scrollLeft()), $(".js_wrap", a).prepend(Eb), t && (Rb(a), Ob.scrollLeft(e))
                    },
                    Jb = $(".js_tips", Eb),
                    Kb = function(a, b) {
                        if (Jb.html(a), Jb.show(), 1 !== b) setTimeout(function() {
                            Jb.hide()
                        }, 1e3);
                        else {
                            if (t) return;
                            var c = Eb.next();
                            if (!c.data("topinit")) {
                                var d = c.offset().top;
                                c.css("top", d + 30).data("topinit", !0)
                            }
                        }
                    };
                if (t) {
                    var Lb = !0,
                        Mb = $(".search_input_wrap", Eb),
                        Nb = $(".js_input", Mb),
                        Ob = $(".js_check", Mb),
                        Pb = $(".search_icon", Nb),
                        Qb = window.innerWidth,
                        Rb = function(a) {
                            var b, c = $(".js_checknum", a),
                                d = Ob.width(),
                                e = Gb.width();
                            if (Lb) {
                                var f = 45 * Math.floor(parseInt(.8 * Qb - 100) / 45) - 9,
                                    g = f;
                                Ob.css({
                                    "max-width": g
                                }), b = Qb - 27
                            } else b = Eb.width() - 27;
                            Lb = !1;
                            var h = b - d - e;
                            Nb.css("width", h), s.data.checkNum ? c.html("确定(<span>" + s.data.checkNum + "</span>)").removeClass("mod-contact-chmod-empty") : c.text("确定").addClass("mod-contact-chmod-empty"), s.data.checkNum ? Pb.hide() : Mb.closest(".searching").length || Pb.show()
                        },
                        Sb = "contact_member_checkbox-checked";
                    F.on("chat:updata", function(a, b) {
                        var c = b.isChat,
                            d = b.pId,
                            e = b.$target.closest(".js_wrap"),
                            f = !1;
                        if (c) {
                            var g = $(K({
                                pId: d,
                                header: $("img", b.$target).data("header")
                            }));
                            Ob.append(g), g.get(0).scrollIntoView(!1), $(".js_" + d + " .js_input").addClass(Sb)
                        } else {
                            var h = $(".js_check" + d, Ob);
                            f = !h.hasClass("chat-img_mask") && Ob.children().last().data("pid") === h.data("pid"), h.remove(), $(".js_" + d + " .js_input").removeClass(Sb)
                        }
                        f && b.mayNeedHack ? setTimeout(function() {
                            Rb(e)
                        }, 350) : Rb(e);
                        var i = $(".js_searchlist", e);
                        i.length && (i.prev().show(), i.remove(), n(e), Fb.val(""))
                    }), F.on("input:change", ".js_checkbox .js_input", function(a) {
                        var b = $(a.target),
                            c = b.closest("li"),
                            d = b.hasClass(Sb),
                            e = c.data("pid");
                        if (d) {
                            var f = c.data("name"),
                                g = c.data("ver"),
                                h = c.data("header");
                            w.push(e), x[e] = [f, g, h], s.data.checkNum++
                        } else w.splice(w.indexOf(e), 1), delete x[e], s.data.checkNum--;
                        F.trigger("chat:updata", {
                            isChat: d,
                            pId: e,
                            $target: c
                        })
                    }), F.on(qb, ".js_checkbox", function(a) {
                        var b = $(a.target);
                        if (!b.closest(".js_nameimg").length) {
                            var c = $(a.currentTarget),
                                d = $(".js_input", c);
                            if (d.length) {
                                if (!d.hasClass(Sb) && s.data.checkNum + z + 1 > 1e3) return void alert("最多勾选1000人");
                                d.toggleClass(Sb).trigger("input:change")
                            }
                            var e = c.closest(".js_wrap"),
                                f = $(".js_seleter", e);
                            f.hide()
                        }
                    }), F.on(qb, ".js_checkImg", function(a) {
                        var b = $(a.target),
                            c = b.data("pid");
                        w.splice(w.indexOf(c), 1), delete x[c], s.data.checkNum--, F.trigger("chat:updata", {
                            isChat: !1,
                            pId: c,
                            $target: b,
                            mayNeedHack: !0
                        })
                    }), F.on(qb, ".js_checkdone", function() {
                        s.data.checkNum && ob(d)
                    }), F.on(qb, ".js_searchcannel", function(a) {
                        var b = $(a.target),
                            c = b.closest(".js_wrap"),
                            d = $(".js_searchlist", c);
                        d.length && (d.prev().show(), d.remove());
                        var e = $(".search_input", c);
                        e.val(""), n(c)
                    })
                }
                v && F.on(qb, ".js_selChat", function(a) {
                    var b = $(a.currentTarget),
                        c = b.data("name"),
                        d = b.data("uin"),
                        e = {
                            useridlist: d + "@qy_u",
                            chatname: c
                        };
                    c.length % 2 && (e.useridlist += ";1280005252@qy_u"), ob(function() {
                        WeixinJSBridge.invoke("openEnterpriseChat", e, function(a) {
                            "openEnterpriseChat:fail" === a.err_msg && alert(JSON.stringify(a))
                        })
                    })
                }), Eb.on("keydown", ".js_search .search_input", l), Eb.on("input", ".js_search .search_input", function() {
                    var a = $.trim(Fb.val());
                    a ? Hb.addClass("searching") : Hb.removeClass("searching"), t && Rb(Hb.closest(".js_wrap"))
                }), Eb.on("focus", ".js_search .search_input", function() {
                    Hb.addClass("searching"), t && Rb(Hb.closest(".js_wrap"))
                }), Eb.on("blur", ".js_search .search_input", function() {
                    var a = $.trim(Fb.val());
                    a || (Hb.removeClass("searching"), t && Rb(Hb.closest(".js_wrap"))), G.trigger("spa:adjustfullscreen")
                }), Eb.on(qb, ".js_search .search_cancel", o), F.on("search:item", function(a, b) {
                    var c = $(a.target),
                        d = b.key,
                        e = b.dep,
                        f = b.py;
                    Fb.blur(), -1 === e && (e = 1);
                    var g = ["pid=" + e, "keyword=" + encodeURIComponent(d)];
                    f && g.push("py_init=" + encodeURIComponent(f));
                    var i = E + g.join("&");
                    c.data("url", i), h(c, function(a) {
                        p(a, b, c)
                    })
                }), G.on("hashchange", function() {
                    setTimeout(function() {
                        pb()
                    }, 97)
                }), s.data = {
                    isChatMod: t,
                    checkNum: 0,
                    checkArr: w,
                    isGetUser: u
                }, s.common = {
                    $doc: F,
                    $win: G,
                    $body: H,
                    encodeHtml: a,
                    decodeHtml: b,
                    tapEvent: qb,
                    searchTpl: L,
                    navTpl: N,
                    letterTpl: O,
                    depListTpl: Q,
                    loadingTpl: S,
                    peopleListTpl: R,
                    rightBarTpl: T,
                    buttonTpl: U,
                    letterArr: rb,
                    showTips: Kb,
                    evalWXjsApi: ob,
                    hideOptionMenu: pb,
                    getDepInfoById: Ab,
                    getUrlParam: r,
                    setSearchDom: Ib,
                    $searchDom: Eb
                }, F.trigger("spa:viewcachecount", {
                    count: 10
                })
            }(),
            function() {
                "use strict";
                var a = app.common,
                    b = app.data,
                    c = a.$doc,
                    d = 2,
                    e = {
                        route: "deplist",
                        classname: "deplist",
                        animate: "slideInLeft",
                        title: "部门",
                        view: function() {
                            var c = window.innerHeight,
                                d = a.depListTpl({
                                    minHeight: c,
                                    isChatMod: b.isChatMod,
                                    loading: a.loadingTpl({}),
                                    nav: b.isChatMod ? a.navTpl({
                                        num: b.checkNum,
                                        backUrl: ""
                                    }) : ""
                                });
                            return {
                                body: d
                            }
                        },
                        init: function() {
                            var b = this,
                                c = $(".js_container ul", b),
                                e = $(".js_scroll", b);
                            e.trigger("spa:scroll", {
                                direction: "y"
                            }), c.trigger("deplist:getdata", {
                                depId: 1,
                                callBack: function() {
                                    setTimeout(function() {
                                        var a = $("#-1").next();
                                        a.get(0).scrollIntoView()
                                    }, 17)
                                }
                            }), b.on(a.tapEvent, ".js_directory", function(b) {
                                var c = $(b.target);
                                if (!c.hasClass("js_goPList")) {
                                    var e, f = $(b.currentTarget),
                                        g = f.closest(".contact_node"),
                                        h = $(".js_container", g).first(),
                                        i = $(".js_arrow", f),
                                        j = g.data("open"),
                                        k = g.attr("id"),
                                        l = a.getDepInfoById(k);
                                    if (!l[d].length) return void(location.hash = "#dep/" + parseInt(k));
                                    j ? (h.hide(), h.removeClass("items_animation-opacity1"), i.removeClass("icon_animation-rotate90")) : (e = h.data("init"), i.addClass("icon_animation-rotate90"), e ? (h.show(), h.addClass("items_animation-opacity1")) : h.trigger("deplist:getdata", {
                                        depId: k,
                                        callBack: function() {
                                            h.addClass("items_animation-opacity1")
                                        }
                                    })), g.data("open", !j)
                                }
                            })
                        },
                        beforeopen: function() {
                            a.setSearchDom(this, {})
                        }
                    };
                c.trigger("spa:route", e)
            }(),
            function() {
                "use strict";

                function a(a) {
                    b || (b = $('<style type="text/css"></style>'), $("head").append(b));
                    var c = ".contact_index_inner div{" + a + "}";
                    b.html(c)
                }
                var b, c, d = app.common,
                    e = app.data,
                    f = d.$doc,
                    g = d.$win,
                    h = 0,
                    i = app.data.isChatMod ? 50 : 45,
                    j = 45,
                    k = 120,
                    l = {
                        route: "dep/:id",
                        classname: "peoplelist",
                        animate: "slideInLeft",
                        title: "部门",
                        view: function() {
                            var a = d.peopleListTpl({
                                isChatMod: e.isChatMod,
                                loading: d.loadingTpl({}),
                                nav: e.isChatMod ? d.navTpl({
                                    num: e.checkNum,
                                    backUrl: "#deplist"
                                }) : "",
                                rightBar: d.rightBarTpl({})
                            });
                            return {
                                body: a
                            }
                        },
                        init: function(b) {
                            function e() {
                                var b = f.height(),
                                    d = f.width();
                                if (!(d > b)) {
                                    var e = $(".contact_index_inner", u).children().length;
                                    c = c || f.height() - i - j;
                                    var g = (c - 15) / (e - 1);
                                    a("line-height:" + g + "px"), u.css({
                                        visibility: "visible"
                                    }).data("init", !0)
                                }
                            }

                            function h() {
                                t.trigger("peoplelist:getdata", {
                                    depId: s,
                                    callBack: function() {
                                        $(".spa-loader-animate", t).remove();
                                        var a = t.data("isall");
                                        if (a)
                                            if (t.children().length) {
                                                var b = $(".js_specail", u);
                                                $(".js_letter↑", r).length ? (p = !0, b.show(), q = !1) : (p = !1, b.remove(), q = !0), e()
                                            } else d.showTips("当前部门暂无成员", 1)
                                    }
                                })
                            }

                            function l(a) {
                                if (!o) {
                                    var b = $(a.target),
                                        c = b.html();
                                    "#" === c && (c = "_");
                                    var e = d.letterArr.indexOf(c);
                                    e === d.letterArr.length - 1 && (e -= 1);
                                    var g = "↑" === c;
                                    g || 0 !== e || (e = 1);
                                    var h, l, m;
                                    g ? (h = "↑", l = "A", m = "B") : (h = d.letterArr[e - 1], l = d.letterArr[e], m = d.letterArr[e + 1], "_" === m && (m = "#")), w.html(d.buttonTpl({
                                        b1: h,
                                        b2: l,
                                        b3: m
                                    }));
                                    var n = b.offset().top - 53,
                                        p = f.height();
                                    j > n ? (n = j + 2, "A" === l ? x.css("top", "17%") : x.css("top", "31%")) : n + k + i + j >= p ? (n = p - i - k, "Z" === l ? x.css("top", "76%") : "X" === l ? x.css("top", "45%") : x.css("top", "62%")) : x.css("top", "45%"), v.css({
                                        top: n
                                    }).show()
                                }
                            }

                            function m(a) {
                                var b, c = $(a.target),
                                    e = c.html();
                                if ("#" === e) {
                                    var f = $(".contact_member_block", r).last();
                                    b = "#" === f.data("letter") ? f : []
                                } else b = $(".js_letter" + e, r);
                                return o = !0, b.length ? (y.removeClass("spa-scroll-touch"), b.get(0).scrollIntoView(), y.addClass("spa-scroll-touch")) : d.showTips("当前部门无字母 " + e + " 开头的成员"), v.hide(), setTimeout(function() {
                                    o = !1
                                }, 500), a.stopPropagation(), !1
                            }

                            function n() {
                                v.hide()
                            }
                            var o, p, q, r = this,
                                s = d.encodeHtml(b.requestData[0]),
                                t = $(".js_container", r),
                                u = $(".js_rightBar", r),
                                v = $(".js_seleter", r),
                                w = $(".js_button", v),
                                x = $(".js_arrow", v),
                                y = $(".js_scroll", r);
                            y.trigger("spa:scroll", {
                                direction: "y"
                            }), f.trigger("deplist:getdata", {
                                depId: s,
                                noRender: !0,
                                callBack: h
                            }), r.on(d.tapEvent, ".js_search", n), r.on(d.tapEvent, ".toolbar", n), r.on(d.tapEvent, ".contact_member_title", n), $.os.ios && g.on("orientationchange", function() {
                                var a = f.height(),
                                    b = f.width();
                                b > a ? u.hide() : (u.data("init") || e(), u.show())
                            }), $(".contact_index_inner div", u).on(d.tapEvent, l), w.on(d.tapEvent, m)
                        },
                        beforeopen: function(a) {
                            var b;
                            if (!e.isChatMod) {
                                var c = d.encodeHtml(a.requestData[0]),
                                    f = d.getDepInfoById(c);
                                b = "在 " + f[h] + " 中搜索姓名/手机号"
                            }
                            d.setSearchDom(this, {
                                placeholder: b
                            })
                        },
                        afteropen: function() {
                            var a = this,
                                b = $(".js_rightBar", a);
                            b.show()
                        },
                        afterclose: function() {
                            var a = this,
                                b = $(".js_rightBar", a);
                            b.hide();
                            var c = $(".js_seleter", b);
                            c.hide()
                        }
                    };
                f.trigger("spa:route", l)
            }(),
            function() {
                "use strict";
                var a = app.common,
                    b = a.$doc,
                    c = {
                        route: "p/:id",
                        classname: "people",
                        animate: "slideInLeft",
                        title: "用户",
                        view: function() {
                            return {
                                body: a.loadingTpl({})
                            }
                        },
                        init: function(b) {
                            var c = this,
                                d = $(".spa-page-body", c),
                                e = a.encodeHtml(b.requestData[0]);
                            d.trigger("spa:scroll", {
                                direction: "y"
                            }).trigger("peopleinfo:getdata", {
                                uid: e
                            })
                        }
                    };
                b.trigger("spa:route", c)
            }(),
            function() {
                "use strict";
                var a = app.common,
                    b = a.$doc,
                    c = app.data,
                    d = {
                        route: "search/:dep/:key",
                        classname: "search",
                        animate: "slideInLeft",
                        title: "搜索",
                        view: function(d) {
                            var e = this,
                                f = parseInt(a.encodeHtml(decodeURIComponent(d.requestData[0]))),
                                g = a.peopleListTpl({
                                    isChatMod: c.isChatMod,
                                    loading: a.loadingTpl({}),
                                    nav: c.isChatMod ? a.navTpl({
                                        num: c.checkNum,
                                        backUrl: 1 === f || -1 === f ? "#deplist" : "#dep/" + f
                                    }) : "",
                                    rightBar: a.rightBarTpl()
                                });
                            b.trigger("spa:initpage", [e, {
                                body: g
                            }])
                        },
                        init: function(b) {
                            var c = this,
                                d = parseInt(a.encodeHtml(decodeURIComponent(b.requestData[0]))),
                                e = a.encodeHtml(decodeURIComponent(b.requestData[1])),
                                f = $(".js_scroll", c),
                                g = $(".js_container", c),
                                h = $(".search_input", c),
                                i = $(".js_tips", c);
                            f.trigger("spa:scroll", {
                                direction: "y"
                            }), h.blur(), $(window).trigger("spa:adjustfullscreen"), g.trigger("search:item", {
                                key: e,
                                dep: d,
                                $tips: i,
                                callBack: function() {}
                            }), c.on(a.tapEvent, ".search_cancel", function() {
                                var a = $.trim(h.val());
                                a && e !== a && (h.val(e), location.hash = "#search/" + d + "/" + encodeURIComponent(a))
                            }), h.on("keyup", function(b) {
                                13 === b.keyCode && $(".search_cancel", c).trigger(a.tapEvent)
                            })
                        },
                        beforeopen: function(b) {
                            var c = a.encodeHtml(decodeURIComponent(b.requestData[1]));
                            a.setSearchDom(this, {
                                value: c
                            })
                        }
                    };
                b.trigger("spa:route", d)
            }(),
            function() {
                "use strict";
                var a = app.common,
                    b = a.$doc,
                    c = app.data,
                    d = {
                        route: "pysearch/:py/:key",
                        classname: "search",
                        animate: "slideInLeft",
                        title: "搜索",
                        view: function(d) {
                            var e = this,
                                f = a.encodeHtml(decodeURIComponent(d.requestData[0])),
                                g = a.peopleListTpl({
                                    search: a.searchTpl({
                                        isSearch: !0,
                                        val: f,
                                        placeholder: ""
                                    }),
                                    loading: a.loadingTpl({}),
                                    nav: a.navTpl({
                                        num: c.checkNum,
                                        backUrl: "#deplist"
                                    }),
                                    rightBar: a.rightBarTpl()
                                });
                            b.trigger("spa:initpage", [e, {
                                body: g
                            }])
                        },
                        init: function(b) {
                            var c = this,
                                d = a.encodeHtml(decodeURIComponent(b.requestData[0])),
                                e = a.encodeHtml(decodeURIComponent(b.requestData[1])),
                                f = $(".js_scroll", c),
                                g = $(".js_container", c),
                                h = $(".search_input", c),
                                i = $(".js_tips", c);
                            f.trigger("spa:scroll", {
                                direction: "y"
                            }), h.blur(), $(window).trigger("spa:adjustfullscreen"), g.trigger("search:item", {
                                key: e,
                                dep: 1,
                                py: d,
                                $tips: i,
                                callBack: function() {}
                            }), c.on(a.tapEvent, ".search_cancel", function() {
                                var a = $.trim(h.val());
                                a && e !== a && (h.val(e), location.hash = "#search/1/" + encodeURIComponent(a))
                            }), h.on("keyup", function(b) {
                                13 === b.keyCode && $(".search_cancel", c).trigger(a.tapEvent)
                            })
                        }
                    };
                b.trigger("spa:route", d)
            }(),
            function() {
                "use strict";

                function a() {
                    var a = d("action"),
                        b = "search_hash" === a,
                        e = d("route"),
                        f = "search" === e || b,
                        g = d("keyword"),
                        h = "p" === e,
                        i = "d" === e,
                        j = parseInt(d("pid")),
                        k = d("py_init"),
                        l = "deplist";
                    f ? l = k ? "pysearch/" + k + "/" + g : "search/-1/" + g : h && j ? l = "p/" + j : i && j && (l = "dep/" + j), c.trigger("spa:navigate", {
                        hash: l,
                        replace: !0
                    }), c.trigger("spa:boot", {
                        callback: function() {}
                    })
                }
                var b = app.common,
                    c = b.$doc,
                    d = b.getUrlParam;
                b.hideOptionMenu(), a()
            }();
    })()
})