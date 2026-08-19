(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Grain$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Grain.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBookMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroBookMockup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* ── shared container ── */ const W = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 clamp(1.5rem, 5.5vw, 5rem)'
};
/* ── label / eyebrow ── */ function Label({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: 'block',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.625rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#c9a227'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Label;
/* ── thin rule ── */ function Rule({ style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: 1,
            background: 'rgba(14,12,10,0.10)',
            ...style
        }
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c1 = Rule;
/* ── Reveal wrapper ── */ function Reveal({ children, style, delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "reveal",
        style: {
            transitionDelay: `${delay}s`,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Reveal, "R6lsF/5GV6UhDn/m6681hjVhyFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c2 = Reveal;
/* ─────────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────────── */ function ContactForm() {
    _s1();
    const [fields, setFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const validate = ()=>{
        const e = {
            name: '',
            email: '',
            message: ''
        };
        if (!fields.name.trim()) e.name = 'Required';
        if (!fields.email.trim()) e.email = 'Required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Invalid email';
        if (!fields.message.trim()) e.message = 'Required';
        setErrors(e);
        return !e.name && !e.email && !e.message;
    };
    const submit = async (e)=>{
        e.preventDefault();
        if (!validate()) return;
        setStatus('sending');
        try {
            const res = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    ...fields
                }).toString()
            });
            setStatus(res.ok ? 'ok' : 'err');
            if (res.ok) setFields({
                name: '',
                email: '',
                message: ''
            });
        } catch  {
            setStatus('err');
        }
    };
    const inputBase = {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(14,12,10,0.15)',
        padding: '0.75rem 0',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.9375rem',
        fontWeight: 300,
        color: '#0e0c0a',
        width: '100%',
        outline: 'none',
        borderRadius: 0,
        WebkitAppearance: 'none'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        name: "contact",
        method: "POST",
        "data-netlify": "true",
        onSubmit: submit,
        noValidate: true,
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "form-name",
                value: "contact"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            [
                'name',
                'email',
                'message'
            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: 'block',
                                fontSize: '0.5625rem',
                                fontWeight: 500,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'rgba(14,12,10,0.38)',
                                marginBottom: '0.5rem'
                            },
                            children: f.charAt(0).toUpperCase() + f.slice(1)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        f === 'message' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: fields.message,
                            rows: 4,
                            onChange: (e)=>setFields((p)=>({
                                        ...p,
                                        message: e.target.value
                                    })),
                            onFocus: (e)=>e.target.style.borderBottomColor = '#c9a227',
                            onBlur: (e)=>e.target.style.borderBottomColor = 'rgba(14,12,10,0.15)',
                            style: {
                                ...inputBase,
                                resize: 'none',
                                minHeight: 100
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: f === 'email' ? 'email' : 'text',
                            value: fields[f],
                            onChange: (e)=>setFields((p)=>({
                                        ...p,
                                        [f]: e.target.value
                                    })),
                            onFocus: (e)=>e.target.style.borderBottomColor = '#c9a227',
                            onBlur: (e)=>e.target.style.borderBottomColor = 'rgba(14,12,10,0.15)',
                            style: inputBase
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 122,
                            columnNumber: 15
                        }, this),
                        errors[f] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '0.6875rem',
                                color: '#c0634e',
                                display: 'block',
                                marginTop: '0.375rem'
                            },
                            children: errors[f]
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 128,
                            columnNumber: 25
                        }, this)
                    ]
                }, f, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: status === 'sending',
                style: {
                    alignSelf: 'flex-start',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#0a0a0a',
                    background: status === 'sending' ? 'rgba(201,162,39,0.7)' : '#c9a227',
                    border: '1px solid #c9a227',
                    padding: '1em 2.5em',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    opacity: status === 'sending' ? 0.7 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transform: status === 'sending' ? 'scale(0.98)' : 'scale(1)',
                    position: 'relative',
                    overflow: 'hidden'
                },
                onMouseEnter: (e)=>{
                    if (status !== 'sending') {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#c9a227';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(201,162,39,0.2)';
                    }
                },
                onMouseLeave: (e)=>{
                    if (status !== 'sending') {
                        e.currentTarget.style.background = '#c9a227';
                        e.currentTarget.style.color = '#0a0a0a';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }
                },
                children: status === 'sending' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: 'inline-block',
                                width: 12,
                                height: 12,
                                border: '2px solid currentColor',
                                borderTopColor: 'transparent',
                                borderRadius: '50%',
                                animation: 'spin 0.6s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        "Sending…"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this) : 'Send Message'
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            status === 'ok' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.8125rem',
                    color: '#5a9e5e',
                    fontStyle: 'italic',
                    fontFamily: "'Fraunces', serif",
                    padding: '1rem 1.25rem',
                    background: 'rgba(90,158,94,0.08)',
                    borderLeft: '3px solid #5a9e5e',
                    borderRadius: '0 6px 6px 0',
                    animation: 'slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Received!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    " I'll be in touch soon."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this),
            status === 'err' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.8125rem',
                    color: '#c0634e',
                    padding: '1rem 1.25rem',
                    background: 'rgba(192,99,78,0.08)',
                    borderLeft: '3px solid #c0634e',
                    borderRadius: '0 6px 6px 0',
                    animation: 'slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Oops!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    " Something went wrong. Please email",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "mailto:yogolsachin@gmail.com",
                        style: {
                            color: '#c9a227',
                            textDecoration: 'underline',
                            fontWeight: 500
                        },
                        children: "yogolsachin@gmail.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    " directly."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s1(ContactForm, "JEgxr+SSTbvggH8S538LAjvPZQ0=");
_c3 = ContactForm;
function Home() {
    _s2();
    /* Scroll indicator visibility */ const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const h = {
                "Home.useEffect.h": ()=>setScrolled(window.scrollY > 80)
            }["Home.useEffect.h"];
            window.addEventListener('scroll', h, {
                passive: true
            });
            return ({
                "Home.useEffect": ()=>window.removeEventListener('scroll', h)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const aboutPortrait = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    const aboutText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    const contactLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    const contactRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#f4f1ea',
            color: '#0e0c0a'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Grain$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    position: 'relative',
                    height: '100svh',
                    minHeight: 600,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f4f1ea'
                },
                className: "hero-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          @media (max-width: 768px) { .hero-content { flex-direction: column-reverse !important; } }
        `
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 88,
                            left: 0,
                            right: 0,
                            zIndex: 2,
                            animation: 'fadeIn 1s 0.4s both'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...W,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.625rem',
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: 'rgba(14,12,10,0.40)'
                                    },
                                    children: "Kathmandu, Nepal"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.625rem',
                                        letterSpacing: '0.14em',
                                        color: 'rgba(14,12,10,0.30)',
                                        fontFamily: "'Fraunces', serif",
                                        fontStyle: 'italic'
                                    },
                                    children: "Est. 2010"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-content",
                        style: {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '3rem',
                            width: '100%',
                            ...W,
                            paddingTop: '6rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-left",
                                style: {
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: "'Fraunces', serif",
                                            fontSize: 'clamp(2.5rem,6vw,5rem)',
                                            fontWeight: 200,
                                            lineHeight: 1,
                                            color: '#0e0c0a'
                                        },
                                        children: [
                                            "Book cover design ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                style: {
                                                    fontStyle: 'italic'
                                                },
                                                children: "& visual identity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: 'clamp(0.875rem,1.2vw,1rem)',
                                            color: 'rgba(14,12,10,0.6)',
                                            maxWidth: '40ch'
                                        },
                                        children: "Crafting cohesive visual systems that bring stories to life."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-right",
                                style: {
                                    alignSelf: 'flex-end',
                                    marginTop: 'auto'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroBookMockup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 24,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            opacity: scrolled ? 0 : 1,
                            transition: 'opacity 0.5s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.5625rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(14,12,10,0.35)'
                                },
                                children: "Scroll"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 1,
                                    height: 40,
                                    background: 'linear-gradient(to bottom, rgba(201,162,39,0.7), rgba(201,162,39,0))',
                                    animation: 'scrollBounce 2s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.3) 30%, rgba(201,162,39,0.3) 70%, transparent)',
                            zIndex: 2,
                            animation: 'fadeIn 1.2s 0.8s both'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: 'clamp(6rem,12vw,10rem) 0',
                    borderTop: '1px solid rgba(14,12,10,0.08)',
                    background: 'linear-gradient(to bottom, #f4f1ea 0%, #f8f6f0 100%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                style: {
                    padding: 'clamp(6rem,12vw,10rem) 0',
                    borderTop: '1px solid rgba(14,12,10,0.08)',
                    background: '#f4f1ea'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutSection, {
                        revealPortrait: aboutPortrait,
                        revealText: aboutText
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                style: {
                    padding: 'clamp(6rem,12vw,10rem) 0',
                    borderTop: '1px solid rgba(14,12,10,0.08)',
                    background: 'linear-gradient(135deg, #f4f1ea 0%, #f8f5ed 100%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: contactLeft,
                            className: "reveal",
                            style: {
                                marginBottom: 'clamp(4rem,8vw,7rem)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'Fraunces', serif",
                                    fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                                    fontWeight: 200,
                                    lineHeight: 0.95,
                                    letterSpacing: '-0.04em',
                                    color: '#0e0c0a'
                                },
                                children: [
                                    "Let's make",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#c9a227',
                                            display: 'inline-block',
                                            animation: 'subtleFloat 3s ease-in-out infinite'
                                        },
                                        children: "something."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                                gap: 'clamp(3rem, 7vw, 8rem)',
                                alignItems: 'start'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: contactRight,
                                    className: "reveal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 'clamp(0.9375rem, 1.1vw, 1rem)',
                                                color: 'rgba(14,12,10,0.52)',
                                                lineHeight: 1.75,
                                                margin: '1.25rem 0 2rem',
                                                maxWidth: '34ch'
                                            },
                                            children: "For new projects, brand commissions, or press — write directly."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:yogolsachin@gmail.com",
                                            style: {
                                                display: 'block',
                                                fontFamily: "'Fraunces', serif",
                                                fontSize: 'clamp(1rem, 1.8vw, 1.375rem)',
                                                fontWeight: 300,
                                                letterSpacing: '-0.01em',
                                                color: '#0e0c0a',
                                                borderBottom: '1px solid rgba(14,12,10,0.15)',
                                                paddingBottom: '1.25rem',
                                                marginBottom: '1.5rem',
                                                transition: 'color 0.3s, border-color 0.3s'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = '#c9a227';
                                                e.currentTarget.style.borderBottomColor = '#c9a227';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = '#0e0c0a';
                                                e.currentTarget.style.borderBottomColor = 'rgba(14,12,10,0.15)';
                                            },
                                            children: "yogolsachin@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://instagram.com/sachinyagol",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                fontSize: '0.6875rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                color: 'rgba(14,12,10,0.38)',
                                                transition: 'color 0.3s'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = '#c9a227',
                                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(14,12,10,0.38)',
                                            children: "Instagram ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        transitionDelay: '0.1s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactForm, {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (min-width: 768px) {
          .about-inner { grid-template-columns: 340px 1fr !important; }
        }
        @media (max-width: 1024px) {
          .hero-book-display { display: none !important; }
        }

        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_s2(Home, "txgvOcNp+jm7Q/ABDSBpJpTrMBU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c4 = Home;
/* ─────────────────────────────────────────────────
   ABOUT SECTION — needs refs passed in
───────────────────────────────────────────────── */ function AboutSection({ revealPortrait, revealText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 'clamp(3rem, 6vw, 5rem)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 495,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-inner",
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 'clamp(3rem, 7vw, 8rem)',
                    alignItems: 'start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: revealPortrait,
                        className: "reveal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                overflow: 'hidden',
                                background: '#e8e3da',
                                aspectRatio: '4/5',
                                maxWidth: 400
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&auto=format",
                                alt: "Sachin Yagol Shrestha — replace with final portrait",
                                loading: "lazy",
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(20%) brightness(0.92)',
                                    transition: 'filter 0.9s, transform 0.9s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                                    e.currentTarget.style.transform = 'scale(1.02)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.filter = 'grayscale(20%) brightness(0.92)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: revealText,
                        className: "reveal",
                        style: {
                            transitionDelay: '0.15s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                style: {
                                    fontFamily: "'Fraunces', serif",
                                    fontSize: 'clamp(1.375rem, 2.8vw, 2rem)',
                                    fontWeight: 200,
                                    fontStyle: 'italic',
                                    lineHeight: 1.35,
                                    letterSpacing: '-0.02em',
                                    color: '#0e0c0a',
                                    borderLeft: '2px solid #c9a227',
                                    paddingLeft: '1.5rem',
                                    margin: '0 0 2.5rem',
                                    maxWidth: '36ch'
                                },
                                children: [
                                    '"Design should feel inevitable.',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 44
                                    }, this),
                                    'Not clever — certain."'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 529,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)',
                                    lineHeight: 1.8,
                                    color: 'rgba(14,12,10,0.65)',
                                    marginBottom: '1rem',
                                    maxWidth: '52ch'
                                },
                                children: "I'm a graphic designer and art director based in Kathmandu, Nepal. Over fifteen years I've built visual systems for airlines, spirits, publishers, and cultural institutions — work that endures because it's grounded in real thinking, not just aesthetic instinct."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)',
                                    lineHeight: 1.8,
                                    color: 'rgba(14,12,10,0.45)',
                                    maxWidth: '52ch',
                                    marginBottom: '3rem'
                                },
                                children: "Born and working in Nepal, I bring a specific point of view to every brief — one shaped by the visual culture, history, and ambition of this place."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '2.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.5625rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: 'rgba(14,12,10,0.35)',
                                            display: 'block',
                                            marginBottom: '0.875rem'
                                        },
                                        children: "Disciplines"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 568,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            'Brand Identity',
                                            'Visual Systems',
                                            'Typography',
                                            'Packaging',
                                            'Book Covers',
                                            'Art Direction'
                                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.75rem',
                                                    color: 'rgba(14,12,10,0.50)',
                                                    border: '1px solid rgba(14,12,10,0.12)',
                                                    padding: '0.35em 0.85em',
                                                    letterSpacing: '0.04em',
                                                    transition: 'border-color 0.3s, color 0.3s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = 'rgba(201,162,39,0.5)';
                                                    e.currentTarget.style.color = '#c9a227';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = 'rgba(14,12,10,0.12)';
                                                    e.currentTarget.style.color = 'rgba(14,12,10,0.50)';
                                                },
                                                children: d
                                            }, d, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 493,
        columnNumber: 5
    }, this);
}
_c5 = AboutSection;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Label");
__turbopack_context__.k.register(_c1, "Rule");
__turbopack_context__.k.register(_c2, "Reveal");
__turbopack_context__.k.register(_c3, "ContactForm");
__turbopack_context__.k.register(_c4, "Home");
__turbopack_context__.k.register(_c5, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BookCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/books.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
/* ── Renders a single book cover as a designed object ── */ function Cover({ book, active }) {
    const { title, author, img, palette, layout, weight, italic } = book;
    const titleSize = {
        light: 'clamp(1.125rem, 2.8vw, 1.5rem)',
        regular: 'clamp(1.25rem,  3.2vw, 1.75rem)',
        heavy: 'clamp(1.5rem,   3.8vw, 2.125rem)'
    }[weight];
    const titleWeight = {
        light: 200,
        regular: 300,
        heavy: 400
    }[weight];
    const titleStyle = {
        fontFamily: "'Fraunces', serif",
        fontSize: titleSize,
        fontWeight: titleWeight,
        fontStyle: italic ? 'italic' : 'normal',
        lineHeight: 1.1,
        letterSpacing: weight === 'heavy' ? '-0.02em' : '-0.01em',
        color: palette.text,
        textShadow: '0 1px 8px rgba(0,0,0,0.6)'
    };
    const authorStyle = {
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.5625rem',
        fontWeight: 400,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: palette.accent,
        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
        display: 'block'
    };
    /* Layout-specific positioning of title + author */ const renderContent = ()=>{
        switch(layout){
            case 'title-top-left':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                top: '1.25rem',
                                left: '1rem',
                                right: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 28,
                                        height: 1,
                                        background: palette.accent,
                                        marginBottom: '0.625rem'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookCarousel.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: titleStyle,
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookCarousel.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookCarousel.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                ...authorStyle,
                                position: 'absolute',
                                bottom: '1rem',
                                left: '1rem'
                            },
                            children: author
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookCarousel.tsx",
                            lineNumber: 64,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookCarousel.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this);
            case 'title-top-center':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '1.5rem',
                            left: '1rem',
                            right: '1rem',
                            textAlign: 'center'
                        },
                        children: [
                            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    ...authorStyle,
                                    marginBottom: '0.5rem',
                                    color: palette.accent
                                },
                                children: author
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 72,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 1,
                                    background: palette.accent,
                                    margin: '0.5rem auto 0.625rem'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: titleStyle,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookCarousel.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this);
            case 'title-center':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: titleStyle,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookCarousel.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 32,
                                        height: 1,
                                        background: palette.accent,
                                        margin: '0.75rem auto'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookCarousel.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: authorStyle,
                                    children: author
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookCarousel.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookCarousel.tsx",
                            lineNumber: 88,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookCarousel.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this);
            case 'title-bottom-left':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '1.25rem',
                            left: '1rem',
                            right: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: titleStyle,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 28,
                                            height: 1,
                                            background: palette.accent,
                                            margin: '0.5rem 0'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookCarousel.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: authorStyle,
                                        children: author
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookCarousel.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 102,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookCarousel.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this);
            case 'title-bottom-right':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: '1.25rem',
                        right: '1rem',
                        left: '1rem',
                        textAlign: 'right'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: titleStyle,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookCarousel.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 28,
                                        height: 1,
                                        background: palette.accent,
                                        margin: '0.5rem 0 0.5rem auto'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookCarousel.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: authorStyle,
                                    children: author
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookCarousel.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookCarousel.tsx",
                            lineNumber: 116,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookCarousel.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this);
            case 'title-split':
                {
                    /* Split: "YOU DON'T WANT" light, "SUCCESS" heavy on next line */ const words = title.split(' ');
                    const half = Math.ceil(words.length / 2);
                    const lineA = words.slice(0, half).join(' ');
                    const lineB = words.slice(half).join(' ');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '1.25rem',
                            left: '1rem',
                            right: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    ...titleStyle,
                                    fontWeight: 200,
                                    fontSize: 'clamp(0.875rem, 2.2vw, 1.125rem)'
                                },
                                children: lineA
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    ...titleStyle,
                                    fontWeight: 400,
                                    letterSpacing: '-0.03em'
                                },
                                children: lineB
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    ...authorStyle,
                                    marginTop: '0.625rem'
                                },
                                children: author
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 134,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this);
                }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            flexShrink: 0,
            width: 'clamp(148px, 16vw, 210px)',
            aspectRatio: '2/3',
            background: palette.bg,
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: active ? '0 28px 56px rgba(0,0,0,0.8), -5px 0 15px rgba(0,0,0,0.4)' : '0 10px 28px rgba(0,0,0,0.6), -3px 0 8px rgba(0,0,0,0.3)',
            transform: active ? 'translateY(-12px) scale(1.04)' : 'translateY(0) scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease',
            userSelect: 'none'
        },
        children: [
            img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: img,
                alt: `${title} — book cover`,
                draggable: false,
                style: {
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter 0.5s'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: palette.tint
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 30%)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '45%',
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '55%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    renderContent()
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: palette.accent,
                    transform: active ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookCarousel.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c = Cover;
/* ── Progress indicator ── */ function Progress({ trackRef }) {
    _s();
    const [p, setP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Progress.useEffect": ()=>{
            const el = trackRef.current;
            if (!el) return;
            const fn = {
                "Progress.useEffect.fn": ()=>setP(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth))
            }["Progress.useEffect.fn"];
            el.addEventListener('scroll', fn, {
                passive: true
            });
            return ({
                "Progress.useEffect": ()=>el.removeEventListener('scroll', fn)
            })["Progress.useEffect"];
        }
    }["Progress.useEffect"], [
        trackRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    height: 1,
                    background: 'rgba(14,12,10,0.10)',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: `${p * 100}%`,
                        background: '#c9a227',
                        transition: 'width 0.1s',
                        minWidth: 24
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/BookCarousel.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: '0.5625rem',
                    letterSpacing: '0.14em',
                    color: 'rgba(14,12,10,0.28)',
                    flexShrink: 0,
                    fontFamily: "'Fraunces',serif",
                    fontStyle: 'italic'
                },
                children: "drag to explore"
            }, void 0, false, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookCarousel.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_s(Progress, "MEfQ3cGrWqUKAiHBR9ShFSBljwk=");
_c1 = Progress;
function BookCarousel() {
    _s1();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [books, setBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedBook, setSelectedBook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        scroll: 0
    });
    const velRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookCarousel.useEffect": ()=>{
            fetch('/api/books').then({
                "BookCarousel.useEffect": (r)=>r.json()
            }["BookCarousel.useEffect"]).then({
                "BookCarousel.useEffect": (data)=>{
                    if (Array.isArray(data)) {
                        const layouts = [
                            'title-top-left',
                            'title-center',
                            'title-bottom-left',
                            'title-bottom-right',
                            'title-top-center',
                            'title-split'
                        ];
                        const weights = [
                            'light',
                            'regular',
                            'heavy'
                        ];
                        setBooks(data.map({
                            "BookCarousel.useEffect": (b, i)=>({
                                    ...b,
                                    img: b.coverImageUrl || '',
                                    publication: b.publication || '',
                                    palette: {
                                        bg: '#1c0c08',
                                        text: '#f5e6df',
                                        accent: '#c0392b',
                                        tint: 'rgba(80,10,10,0.62)'
                                    },
                                    layout: layouts[i % layouts.length],
                                    weight: weights[i % weights.length],
                                    italic: i % 2 === 0
                                })
                        }["BookCarousel.useEffect"]));
                    }
                }
            }["BookCarousel.useEffect"]).catch(console.error);
        }
    }["BookCarousel.useEffect"], []);
    const onDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookCarousel.useCallback[onDown]": (e)=>{
            cancelAnimationFrame(rafId.current);
            setDragging(true);
            const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
            startRef.current = {
                x,
                scroll: trackRef.current?.scrollLeft ?? 0
            };
            lastXRef.current = x;
            velRef.current = 0;
        }
    }["BookCarousel.useCallback[onDown]"], []);
    const onMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookCarousel.useCallback[onMove]": (e)=>{
            if (!dragging || !trackRef.current) return;
            const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
            if ('touches' in e) {} else e.preventDefault();
            trackRef.current.scrollLeft = startRef.current.scroll - (x - startRef.current.x);
            velRef.current = x - lastXRef.current;
            lastXRef.current = x;
        }
    }["BookCarousel.useCallback[onMove]"], [
        dragging
    ]);
    const onUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BookCarousel.useCallback[onUp]": ()=>{
            setDragging(false);
            const glide = {
                "BookCarousel.useCallback[onUp].glide": ()=>{
                    if (!trackRef.current || Math.abs(velRef.current) < 0.4) return;
                    trackRef.current.scrollLeft -= velRef.current;
                    velRef.current *= 0.9;
                    rafId.current = requestAnimationFrame(glide);
                }
            }["BookCarousel.useCallback[onUp].glide"];
            rafId.current = requestAnimationFrame(glide);
        }
    }["BookCarousel.useCallback[onUp]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookCarousel.useEffect": ()=>({
                "BookCarousel.useEffect": ()=>cancelAnimationFrame(rafId.current)
            })["BookCarousel.useEffect"]
    }["BookCarousel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '2.5rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid rgba(14,12,10,0.08)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.625rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: '#c9a227',
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                },
                                children: "Book Covers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.8125rem',
                                    color: 'rgba(14,12,10,0.38)',
                                    fontStyle: 'italic',
                                    fontFamily: "'Fraunces',serif"
                                },
                                children: "A selection of cover commissions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookCarousel.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            opacity: 0.4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '0.6rem',
                                fontWeight: 500,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'rgba(14,12,10,0.28)',
                                fontFamily: 'Inter, sans-serif'
                            },
                            children: "Fine Print Co."
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookCarousel.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: trackRef,
                onMouseDown: onDown,
                onMouseMove: onMove,
                onMouseUp: onUp,
                onMouseLeave: onUp,
                style: {
                    display: 'flex',
                    gap: 'clamp(0.75rem, 1.2vw, 1rem)',
                    overflowX: 'scroll',
                    overflowY: 'visible',
                    paddingTop: '1rem',
                    paddingBottom: '1.5rem',
                    cursor: dragging ? 'grabbing' : 'grab',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch',
                    /* Slight perspective for depth */ perspective: '1200px'
                },
                children: [
                    books.map((book, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseEnter: ()=>setActive(i),
                            onMouseLeave: ()=>setActive(null),
                            onClick: ()=>{
                                if (!dragging && Math.abs(startRef.current.scroll - (trackRef.current?.scrollLeft ?? 0)) < 10) {
                                    setSelectedBook(book);
                                }
                            },
                            style: {
                                flexShrink: 0,
                                transformStyle: 'preserve-3d',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cover, {
                                    book: book,
                                    active: active === i
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookCarousel.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 'clamp(148px, 16vw, 210px)',
                                        paddingLeft: '0.25rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Fraunces', serif",
                                                fontSize: 'clamp(0.8125rem, 1.6vw, 0.9375rem)',
                                                fontWeight: 300,
                                                letterSpacing: '-0.01em',
                                                color: '#0e0c0a',
                                                lineHeight: 1.3,
                                                marginBottom: '0.25rem',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical'
                                            },
                                            children: book.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookCarousel.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '0.5625rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                color: 'rgba(14,12,10,0.42)',
                                                transition: 'color 0.2s'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = '#c9a227',
                                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(14,12,10,0.42)',
                                            children: book.publication && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publication] ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publication].label : 'Unknown'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookCarousel.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookCarousel.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, book.title + i, true, {
                            fileName: "[project]/src/components/BookCarousel.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flexShrink: 0,
                            width: 'clamp(1rem, 4vw, 3rem)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookCarousel.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    right: 0,
                    width: 'clamp(60px, 8vw, 120px)',
                    top: 0,
                    bottom: 0,
                    background: 'linear-gradient(to left, #f4f1ea, transparent)',
                    pointerEvents: 'none',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Progress, {
                trackRef: trackRef
            }, void 0, false, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            selectedBook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                book: selectedBook,
                onClose: ()=>setSelectedBook(null)
            }, void 0, false, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 431,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `::-webkit-scrollbar { display: none; }`
            }, void 0, false, {
                fileName: "[project]/src/components/BookCarousel.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookCarousel.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_s1(BookCarousel, "JYQDSF9TgxM/hDU69Hqvu+EnLZg=");
_c2 = BookCarousel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Cover");
__turbopack_context__.k.register(_c1, "Progress");
__turbopack_context__.k.register(_c2, "BookCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BookModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function BookModal({ book, onClose }) {
    _s();
    // Prevent body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookModal.useEffect": ()=>{
            document.body.style.overflow = 'hidden';
            return ({
                "BookModal.useEffect": ()=>{
                    document.body.style.overflow = 'auto';
                }
            })["BookModal.useEffect"];
        }
    }["BookModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn 0.2s ease-out'
        },
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    maxWidth: '820px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: '0 0 45%',
                            backgroundColor: '#eaddc9',
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '210px',
                                aspectRatio: '2/3',
                                backgroundColor: book.palette?.bg || '#fff',
                                position: 'relative',
                                borderRadius: '2px 4px 4px 2px',
                                boxShadow: '20px 20px 30px rgba(0,0,0,0.15), -5px 0 15px rgba(0,0,0,0.05)',
                                overflow: 'hidden',
                                transform: 'perspective(1000px) rotateY(-5deg)',
                                transformStyle: 'preserve-3d'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: book.imgSrc || book.img,
                                    alt: book.title,
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to right, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.1) 3%, transparent 6%)',
                                        pointerEvents: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookModal.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookModal.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: '1',
                            padding: '1.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                            maxHeight: '90vh'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'transparent',
                                    border: 'none',
                                    fontSize: '1.25rem',
                                    cursor: 'pointer',
                                    color: '#333'
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookModal.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.75rem',
                                    fontWeight: 600,
                                    color: '#2a4538',
                                    marginBottom: '0.2rem',
                                    fontFamily: "'Fraunces', serif",
                                    lineHeight: 1.1
                                },
                                children: book.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookModal.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.8rem',
                                            lineHeight: 1.4,
                                            color: '#666',
                                            marginBottom: '0.5rem'
                                        },
                                        children: "A compelling literary work exploring themes of love, relationships, politics, and the deeper layers of the human mind. The narrative strives to reflect the realities of our society while inspiring readers to think, feel, and dream of change."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookModal.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.8rem',
                                            lineHeight: 1.4,
                                            color: '#666'
                                        },
                                        children: "If you appreciate profound storytelling and vibrant characters, this is a must-read masterpiece."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookModal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookModal.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#0e0c0a',
                                            marginBottom: '0.5rem',
                                            letterSpacing: '0.05em'
                                        },
                                        children: "SPECIFICATIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookModal.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: {
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            fontSize: '0.75rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                [
                                                    {
                                                        label: 'Author',
                                                        value: book.author || 'Rabindra Samir'
                                                    },
                                                    {
                                                        label: 'Publication',
                                                        value: 'Bookhill Publications'
                                                    },
                                                    {
                                                        label: 'ISBN',
                                                        value: '978-9937-75-05-0'
                                                    },
                                                    {
                                                        label: 'Page Numbers',
                                                        value: '256 pages'
                                                    },
                                                    {
                                                        label: 'Binding',
                                                        value: 'Paperback'
                                                    },
                                                    {
                                                        label: 'Published Year',
                                                        value: book.year || '2024'
                                                    },
                                                    {
                                                        label: 'Category',
                                                        value: 'Literary / Non-Fiction'
                                                    },
                                                    {
                                                        label: 'Language',
                                                        value: 'Nepali'
                                                    },
                                                    {
                                                        label: 'Size',
                                                        value: '130 x 200mm'
                                                    },
                                                    {
                                                        label: 'Award',
                                                        value: book.awardName || 'N/A'
                                                    },
                                                    {
                                                        label: 'Layout Design',
                                                        value: 'Umesh Kafle'
                                                    },
                                                    {
                                                        label: 'Collaboration',
                                                        value: ''
                                                    }
                                                ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: '1px solid #e5e7eb'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '0.35rem 0.5rem',
                                                                    background: '#eaddc9',
                                                                    color: '#333',
                                                                    width: '35%',
                                                                    fontWeight: 500
                                                                },
                                                                children: row.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookModal.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '0.35rem 0.5rem',
                                                                    color: '#555'
                                                                },
                                                                children: row.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookModal.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        borderBottom: '1px solid #e5e7eb'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '0.35rem 0.5rem',
                                                                background: '#eaddc9',
                                                                color: '#333',
                                                                width: '35%',
                                                                fontWeight: 500
                                                            },
                                                            children: "Purchase Link"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookModal.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '0.35rem 0.5rem',
                                                                color: '#555'
                                                            },
                                                            children: book.purchaseLink && book.purchaseLink.trim() !== '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: book.purchaseLink,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                style: {
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.4rem',
                                                                    padding: '0.4rem 0.8rem',
                                                                    background: '#c9a227',
                                                                    color: '#fff',
                                                                    textDecoration: 'none',
                                                                    fontSize: '0.65rem',
                                                                    fontWeight: 600,
                                                                    letterSpacing: '0.05em',
                                                                    borderRadius: '4px',
                                                                    textTransform: 'uppercase',
                                                                    transition: 'all 0.2s'
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.background = '#b8912a';
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.background = '#c9a227';
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "🛒"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Buy Book"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                                        lineNumber: 191,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/BookModal.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 23
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '0.7rem',
                                                                    color: '#999',
                                                                    fontStyle: 'italic'
                                                                },
                                                                children: "Not available"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookModal.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookModal.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookModal.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BookModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookModal.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookModal.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            (book.hasSpotUV || book.hasMatteLamination || book.hasFoilEmboss) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#0e0c0a',
                                            marginBottom: '0.5rem',
                                            letterSpacing: '0.05em'
                                        },
                                        children: "SPECIAL PRINTING EFFECTS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookModal.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '1.5rem',
                                            textAlign: 'center'
                                        },
                                        children: [
                                            book.hasSpotUV && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/logo/Spot UV.png",
                                                        alt: "Spot UV",
                                                        style: {
                                                            width: '48px',
                                                            height: '48px',
                                                            margin: '0 auto 0.25rem',
                                                            display: 'block',
                                                            objectFit: 'contain'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.6rem',
                                                            color: '#333',
                                                            lineHeight: 1.1
                                                        },
                                                        children: "Spot UV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookModal.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this),
                                            book.hasMatteLamination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/logo/Matte Lamination.png",
                                                        alt: "Matte Lamination",
                                                        style: {
                                                            width: '48px',
                                                            height: '48px',
                                                            margin: '0 auto 0.25rem',
                                                            display: 'block',
                                                            objectFit: 'contain'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.6rem',
                                                            color: '#333',
                                                            lineHeight: 1.1
                                                        },
                                                        children: [
                                                            "Matte",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/BookModal.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 94
                                                            }, this),
                                                            "Lamination"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookModal.tsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, this),
                                            book.hasFoilEmboss && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/logo/Foil Emboss.png",
                                                        alt: "Foil Emboss",
                                                        style: {
                                                            width: '48px',
                                                            height: '48px',
                                                            margin: '0 auto 0.25rem',
                                                            display: 'block',
                                                            objectFit: 'contain'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.6rem',
                                                            color: '#333',
                                                            lineHeight: 1.1
                                                        },
                                                        children: [
                                                            "Foil",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/BookModal.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 93
                                                            }, this),
                                                            "Emboss"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookModal.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookModal.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookModal.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookModal.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookModal.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/BookModal.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookModal.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(BookModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = BookModal;
var _c;
__turbopack_context__.k.register(_c, "BookModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            borderTop: '1px solid rgba(14,12,10,0.08)',
            padding: 'clamp(3rem, 6vw, 5rem) 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1280,
                margin: '0 auto',
                padding: '0 clamp(1.5rem, 5.5vw, 5rem)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "'Fraunces', serif",
                        fontSize: '0.9375rem',
                        fontWeight: 300,
                        color: '#0e0c0a',
                        letterSpacing: '-0.01em'
                    },
                    children: "Sachin Yagol Shrestha"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: '0.625rem',
                        letterSpacing: '0.12em',
                        color: 'rgba(14,12,10,0.30)',
                        textTransform: 'uppercase'
                    },
                    children: [
                        "© ",
                        new Date().getFullYear()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://instagram.com/sachinyagol",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                        fontSize: '0.625rem',
                        fontWeight: 500,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'rgba(14,12,10,0.32)',
                        textDecoration: 'none',
                        transition: 'color 0.3s'
                    },
                    onMouseEnter: (e)=>e.currentTarget.style.color = '#c9a227',
                    onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(14,12,10,0.32)',
                    children: "Instagram"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Grain.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Film-grain overlay — SVG feTurbulence tiled at 256px */ __turbopack_context__.s([
    "default",
    ()=>Grain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Grain() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        style: {
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 9000,
            opacity: 0.038,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Grain.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = Grain;
var _c;
__turbopack_context__.k.register(_c, "Grain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/books.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CATEGORIES = [
    {
        label: 'Publication',
        key: 'publication'
    },
    {
        label: 'Award',
        key: 'award'
    },
    {
        label: 'Best Seller',
        key: 'best-seller'
    },
    {
        label: 'Recent',
        key: 'recent'
    }
];
const PUB_KEYS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"]);
_c = PUB_KEYS;
/* ── Enhanced circular publisher logo with tooltip ── */ function PubCircle({ pub, size = 56, onClick }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        "aria-label": `View ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label} books`,
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2px solid ${hov ? '#c9a227' : 'rgba(14,12,10,0.08)'}`,
                    background: '#fff',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: hov ? '0 8px 24px rgba(201,162,39,0.24), 0 2px 8px rgba(201,162,39,0.12)' : '0 2px 8px rgba(14,12,10,0.06)',
                    transform: hov ? 'translateY(-4px) scale(1.05)' : 'scale(1)',
                    flexShrink: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].logo,
                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label,
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        filter: hov ? 'none' : 'saturate(0.9)',
                        transition: 'filter 0.3s'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.5rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: hov ? '#c9a227' : 'rgba(14,12,10,0.45)',
                    transition: 'color 0.3s',
                    textAlign: 'center',
                    maxWidth: size + 12,
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            hov && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: 'absolute',
                    top: -8,
                    left: '50%',
                    transform: 'translateX(-50%) translateY(-100%)',
                    background: '#0e0c0a',
                    color: '#f4f1ea',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 6,
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    pointerEvents: 'none',
                    zIndex: 1000,
                    animation: 'tooltipFadeIn 0.2s ease-out'
                },
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: 'absolute',
                            bottom: -4,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 0,
                            height: 0,
                            borderLeft: '4px solid transparent',
                            borderRight: '4px solid transparent',
                            borderTop: '4px solid #0e0c0a'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(PubCircle, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c1 = PubCircle;
function Header() {
    _s1();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [megaOpen, setMegaOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileBooks, setMobileBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobilePub, setMobilePub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const megaTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const fn = {
                "Header.useEffect.fn": ()=>setScrolled(window.scrollY > 60)
            }["Header.useEffect.fn"];
            window.addEventListener('scroll', fn, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', fn)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            document.body.style.overflow = menuOpen ? 'hidden' : '';
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        menuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMenuOpen(false);
            setMegaOpen(false);
            setMobileBooks(false);
            setMobilePub(false);
        }
    }["Header.useEffect"], [
        pathname
    ]);
    const openMega = ()=>{
        if (megaTimer.current) clearTimeout(megaTimer.current);
        setMegaOpen(true);
    };
    const closeMega = ()=>{
        megaTimer.current = setTimeout(()=>setMegaOpen(false), 200);
    };
    const go = (href)=>{
        setMenuOpen(false);
        if (href.startsWith('#')) {
            if (pathname !== '/') {
                router.push('/');
                setTimeout(()=>document.querySelector(href)?.scrollIntoView({
                        behavior: 'smooth'
                    }), 500);
            } else {
                document.querySelector(href)?.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };
    const navLinkStyle = (active = false)=>({
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.6875rem',
            fontWeight: 400,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: active ? '#0e0c0a' : 'rgba(14,12,10,0.42)',
            textDecoration: 'none',
            transition: 'color 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
        });
    const isBooksActive = pathname.startsWith('/books');
    const isAdvActive = pathname.startsWith('/advertisement');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 600,
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    background: scrolled || megaOpen ? 'rgba(244,241,234,0.98)' : 'rgba(244,241,234,0.6)',
                    backdropFilter: scrolled || megaOpen ? 'blur(24px)' : 'blur(12px)',
                    WebkitBackdropFilter: scrolled || megaOpen ? 'blur(24px)' : 'blur(12px)',
                    borderBottom: scrolled || megaOpen ? '1px solid rgba(14,12,10,0.1)' : '1px solid rgba(14,12,10,0.04)',
                    boxShadow: scrolled ? '0 4px 24px rgba(14,12,10,0.04)' : 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1280,
                        margin: '0 auto',
                        padding: '0 clamp(1.5rem, 5.5vw, 5rem)',
                        height: 68,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'clamp(1.5rem, 3vw, 2.5rem)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    style: {
                                        fontFamily: "'Fraunces', serif",
                                        fontSize: '1.0625rem',
                                        fontWeight: 300,
                                        letterSpacing: '0.015em',
                                        color: '#0e0c0a',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        display: 'inline-block'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.color = '#c9a227';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.color = '#0e0c0a';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    },
                                    children: "Sachin Yagol"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hdr-nav",
                                    style: {
                                        display: 'none',
                                        position: 'relative'
                                    },
                                    onMouseEnter: openMega,
                                    onMouseLeave: closeMega,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                ...navLinkStyle(isBooksActive),
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                paddingBottom: '0.25rem',
                                                borderBottom: megaOpen ? '2px solid #c9a227' : '2px solid transparent',
                                                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = '#0e0c0a',
                                            onMouseLeave: (e)=>e.currentTarget.style.color = isBooksActive ? '#0e0c0a' : 'rgba(14,12,10,0.42)',
                                            onClick: ()=>router.push('/books'),
                                            "aria-expanded": megaOpen,
                                            "aria-haspopup": "true",
                                            children: [
                                                "Books",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "8",
                                                    height: "5",
                                                    viewBox: "0 0 8 5",
                                                    fill: "none",
                                                    style: {
                                                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                        transform: megaOpen ? 'rotate(180deg)' : 'none',
                                                        opacity: 0.6
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 1l3 3 3-3",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: openMega,
                                            onMouseLeave: closeMega,
                                            style: {
                                                position: 'fixed',
                                                top: 68,
                                                left: 0,
                                                right: 0,
                                                background: 'rgba(244,241,234,0.98)',
                                                backdropFilter: 'blur(24px)',
                                                WebkitBackdropFilter: 'blur(24px)',
                                                borderBottom: '1px solid rgba(14,12,10,0.08)',
                                                boxShadow: '0 12px 40px rgba(14,12,10,0.08)',
                                                zIndex: 590,
                                                pointerEvents: megaOpen ? 'auto' : 'none',
                                                opacity: megaOpen ? 1 : 0,
                                                transform: megaOpen ? 'translateY(0)' : 'translateY(-12px)',
                                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxWidth: 1280,
                                                    margin: '0 auto',
                                                    padding: '2.5rem clamp(1.5rem, 5.5vw, 5rem) 3rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.75rem',
                                                            marginBottom: '1.5rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'Inter, sans-serif',
                                                                    fontSize: '0.5625rem',
                                                                    fontWeight: 600,
                                                                    letterSpacing: '0.22em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#c9a227'
                                                                },
                                                                children: "Publishers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '0.5rem',
                                                                    color: 'rgba(14,12,10,0.35)',
                                                                    padding: '0.2em 0.6em',
                                                                    background: 'rgba(14,12,10,0.04)',
                                                                    borderRadius: 12,
                                                                    fontWeight: 500
                                                                },
                                                                children: PUB_KEYS.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
                                                            gap: '1.5rem',
                                                            marginBottom: '2.5rem',
                                                            maxWidth: 900
                                                        },
                                                        children: PUB_KEYS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    animation: megaOpen ? `slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.03}s both` : 'none'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PubCircle, {
                                                                    pub: p,
                                                                    size: 58,
                                                                    onClick: ()=>{
                                                                        closeMega();
                                                                        router.push(`/books/publication/${p}`);
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, p, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: 1,
                                                            background: 'linear-gradient(to right, transparent, rgba(14,12,10,0.12) 20%, rgba(14,12,10,0.12) 80%, transparent)',
                                                            marginBottom: '2rem'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: '3rem',
                                                            flexWrap: 'wrap'
                                                        },
                                                        children: CATEGORIES.slice(1).map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/books/${c.key}`,
                                                                style: {
                                                                    fontFamily: "'Fraunces', serif",
                                                                    fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                                                                    fontWeight: 200,
                                                                    letterSpacing: '-0.02em',
                                                                    color: 'rgba(14,12,10,0.35)',
                                                                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                                    textDecoration: 'none',
                                                                    display: 'inline-block',
                                                                    animation: megaOpen ? `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.05}s both` : 'none'
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.color = '#c9a227';
                                                                    e.currentTarget.style.transform = 'translateX(4px)';
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.color = 'rgba(14,12,10,0.35)';
                                                                    e.currentTarget.style.transform = 'translateX(0)';
                                                                },
                                                                children: [
                                                                    c.label,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            marginLeft: '0.5rem',
                                                                            fontSize: '0.7rem',
                                                                            opacity: 0.4
                                                                        },
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Header.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, c.key, true, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/advertisement",
                                    className: "hdr-nav",
                                    style: {
                                        ...navLinkStyle(isAdvActive),
                                        display: 'none'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = '#0e0c0a',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = isAdvActive ? '#0e0c0a' : 'rgba(14,12,10,0.42)',
                                    children: "Advertisement"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hdr-nav",
                            style: {
                                display: 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    display: 'flex',
                                    gap: '2rem',
                                    margin: 0
                                },
                                children: [
                                    {
                                        label: 'About',
                                        href: '#about'
                                    },
                                    {
                                        label: 'Contact',
                                        href: '#contact'
                                    }
                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: l.href,
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                go(l.href);
                                            },
                                            style: navLinkStyle(),
                                            onMouseEnter: (e)=>e.currentTarget.style.color = '#0e0c0a',
                                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(14,12,10,0.42)',
                                            children: l.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this)
                                    }, l.label, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "hdr-burger",
                            onClick: ()=>setMenuOpen((o)=>!o),
                            "aria-label": menuOpen ? 'Close menu' : 'Open menu',
                            "aria-expanded": menuOpen,
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 6,
                                padding: 10,
                                background: 'none',
                                border: 'none',
                                color: '#0e0c0a',
                                cursor: 'pointer',
                                position: 'relative',
                                zIndex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: 'block',
                                        width: 24,
                                        height: 2,
                                        background: 'currentColor',
                                        borderRadius: 2,
                                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s',
                                        transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: 'block',
                                        width: 24,
                                        height: 2,
                                        background: 'currentColor',
                                        borderRadius: 2,
                                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s',
                                        transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 500,
                    background: '#f4f1ea',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? 'auto' : 'none',
                    transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    padding: '100px clamp(1.5rem,7vw,4rem) 3rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both' : 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileBooks((o)=>!o),
                                    style: {
                                        fontFamily: "'Fraunces', serif",
                                        fontSize: 'clamp(2.25rem,9vw,3.5rem)',
                                        fontWeight: 200,
                                        letterSpacing: '-0.03em',
                                        color: mobileBooks ? '#0e0c0a' : 'rgba(14,12,10,0.38)',
                                        background: 'none',
                                        border: 'none',
                                        padding: '0.25rem 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        transition: 'color 0.3s',
                                        width: '100%',
                                        textAlign: 'left',
                                        cursor: 'pointer'
                                    },
                                    children: [
                                        "Books",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "10",
                                            height: "6",
                                            viewBox: "0 0 10 6",
                                            fill: "none",
                                            style: {
                                                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                                transform: mobileBooks ? 'rotate(180deg)' : 'none',
                                                opacity: 0.5
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 1l4 4 4-4",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                mobileBooks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        margin: '1rem 0 1.5rem 0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.25rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMobilePub((o)=>!o),
                                                    style: {
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 600,
                                                        letterSpacing: '0.18em',
                                                        textTransform: 'uppercase',
                                                        color: '#c9a227',
                                                        background: 'none',
                                                        border: 'none',
                                                        padding: '0.75rem 0',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        "Publishers",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "8",
                                                            height: "5",
                                                            viewBox: "0 0 8 5",
                                                            fill: "none",
                                                            style: {
                                                                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                                                transform: mobilePub ? 'rotate(180deg)' : 'none',
                                                                opacity: 0.7
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1 1l3 3 3-3",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 19
                                                }, this),
                                                mobilePub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        margin: '1rem 0 1.5rem 0',
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(65px, 1fr))',
                                                        gap: '1.25rem 1rem'
                                                    },
                                                    children: PUB_KEYS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/books/publication/${p}`,
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                                gap: '0.45rem',
                                                                textDecoration: 'none'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: 50,
                                                                        height: 50,
                                                                        borderRadius: '50%',
                                                                        overflow: 'hidden',
                                                                        border: '2px solid rgba(14,12,10,0.08)',
                                                                        background: '#fff',
                                                                        boxShadow: '0 2px 8px rgba(14,12,10,0.06)',
                                                                        transition: 'transform 0.3s, box-shadow 0.3s'
                                                                    },
                                                                    onTouchStart: (e)=>{
                                                                        e.currentTarget.style.transform = 'scale(0.95)';
                                                                    },
                                                                    onTouchEnd: (e)=>{
                                                                        e.currentTarget.style.transform = 'scale(1)';
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].logo,
                                                                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label,
                                                                        style: {
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            objectFit: 'cover',
                                                                            display: 'block'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Header.tsx",
                                                                        lineNumber: 464,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontFamily: 'Inter, sans-serif',
                                                                        fontSize: '0.45rem',
                                                                        fontWeight: 500,
                                                                        letterSpacing: '0.08em',
                                                                        textTransform: 'uppercase',
                                                                        color: 'rgba(14,12,10,0.50)',
                                                                        textAlign: 'center',
                                                                        maxWidth: 58,
                                                                        lineHeight: 1.25
                                                                    },
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, p, true, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this),
                                        CATEGORIES.slice(1).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/books/${c.key}`,
                                                    style: {
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 500,
                                                        letterSpacing: '0.16em',
                                                        textTransform: 'uppercase',
                                                        color: 'rgba(14,12,10,0.50)',
                                                        display: 'block',
                                                        padding: '0.75rem 0',
                                                        textDecoration: 'none',
                                                        transition: 'color 0.3s'
                                                    },
                                                    onTouchStart: (e)=>e.currentTarget.style.color = '#c9a227',
                                                    onTouchEnd: (e)=>e.currentTarget.style.color = 'rgba(14,12,10,0.50)',
                                                    children: c.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 21
                                                }, this)
                                            }, c.key, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 485,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' : 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/advertisement",
                                style: {
                                    fontFamily: "'Fraunces', serif",
                                    fontSize: 'clamp(2.25rem,9vw,3.5rem)',
                                    fontWeight: 200,
                                    letterSpacing: '-0.03em',
                                    color: 'rgba(14,12,10,0.38)',
                                    display: 'block',
                                    padding: '0.25rem 0',
                                    textDecoration: 'none'
                                },
                                children: "Advertisement"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                marginTop: '2rem',
                                paddingTop: '2rem',
                                borderTop: '1px solid rgba(14,12,10,0.08)',
                                animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' : 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#about",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    go('#about');
                                },
                                style: {
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(14,12,10,0.42)',
                                    display: 'block',
                                    padding: '0.75rem 0',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                },
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 516,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' : 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    go('#contact');
                                },
                                style: {
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(14,12,10,0.42)',
                                    display: 'block',
                                    padding: '0.75rem 0',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                },
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (min-width: 768px) {
          .hdr-nav    { display: flex !important; }
          .hdr-burger { display: none !important; }
        }

        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(calc(-100% - 4px)); }
          to { opacity: 1; transform: translateX(-50%) translateY(-100%); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 549,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s1(Header, "lXoHouFZJv9T9IKJS/36HWwA0Nc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = Header;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PUB_KEYS");
__turbopack_context__.k.register(_c1, "PubCircle");
__turbopack_context__.k.register(_c2, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeroBookMockup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBookMockup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const DISPLAY_IMAGES = [
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1600&auto=format&fit=crop'
];
function HeroBookMockup() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBookMockup.useEffect": ()=>{
            if (DISPLAY_IMAGES.length <= 1) return;
            const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (mediaQuery.matches) return;
            const interval = setInterval({
                "HeroBookMockup.useEffect.interval": ()=>{
                    setActiveIndex({
                        "HeroBookMockup.useEffect.interval": (prev)=>(prev + 1) % DISPLAY_IMAGES.length
                    }["HeroBookMockup.useEffect.interval"]);
                }
            }["HeroBookMockup.useEffect.interval"], 3500);
            return ({
                "HeroBookMockup.useEffect": ()=>clearInterval(interval)
            })["HeroBookMockup.useEffect"];
        }
    }["HeroBookMockup.useEffect"], []);
    const pageW = 240;
    const pageH = pageW * 1.4;
    const totalW = pageW * 2 + 2; // both pages + seam
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero-display-wrapper",
        "aria-hidden": "true",
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-open-book",
                style: {
                    perspective: '1200px',
                    perspectiveOrigin: '50% 40%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            width: totalW,
                            height: pageH,
                            boxShadow: '0 20px 50px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.1)',
                            borderRadius: '4px',
                            display: 'flex'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    overflow: 'hidden',
                                    borderRadius: '4px',
                                    background: '#f8f5ef'
                                },
                                children: DISPLAY_IMAGES.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: src,
                                        alt: "",
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: idx === activeIndex ? 1 : 0,
                                            transition: 'opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }
                                    }, idx, false, {
                                        fileName: "[project]/src/components/HeroBookMockup.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroBookMockup.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: pageW,
                                    height: pageH,
                                    background: 'linear-gradient(to right, rgba(0,0,0,0.06) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.1) 100%)',
                                    borderRadius: '4px 0 0 4px',
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroBookMockup.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: pageW,
                                    height: pageH,
                                    background: 'linear-gradient(to left, rgba(0,0,0,0.04) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.08) 100%)',
                                    borderRadius: '0 4px 4px 0',
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroBookMockup.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    width: 24,
                                    height: 24,
                                    background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.06) 50%)',
                                    zIndex: 5,
                                    borderRadius: '0 0 4px 0'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroBookMockup.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroBookMockup.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: totalW,
                            height: 12,
                            margin: '0 auto',
                            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)',
                            marginTop: -2
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroBookMockup.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroBookMockup.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'rgba(14, 12, 10, 0.35)'
                },
                children: "Book Covers"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBookMockup.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 480px) {
          .hero-open-book {
            transform: scale(0.75);
            transform-origin: center center;
          }
        }
        @media (max-width: 768px) {
          .hero-open-book {
            transform: scale(0.85);
            transform-origin: center center;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBookMockup.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroBookMockup.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(HeroBookMockup, "16En7kR7TbAJMjBrm+xutVNIc5Q=");
_c = HeroBookMockup;
var _c;
__turbopack_context__.k.register(_c, "HeroBookMockup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/books.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOOKS",
    ()=>BOOKS,
    "PUBLISHERS",
    ()=>PUBLISHERS
]);
const PUBLISHERS = {
    bh: {
        label: 'Bookhill',
        short: 'BH',
        color: '#2d1b00',
        logo: '/publication/01 Logos_Bookhill.jpg'
    },
    fp: {
        label: 'Fine Print',
        short: 'FP',
        color: '#1a1a2e',
        logo: '/publication/02 Logos_FP.jpg'
    },
    kitab: {
        label: 'Kitab',
        short: 'KT',
        color: '#1e0d2b',
        logo: '/publication/03 Logos_Kitab.jpg'
    },
    imprint: {
        label: 'Imprint',
        short: 'IM',
        color: '#0d1a2b',
        logo: '/publication/04 Logos_Imprint.jpg'
    },
    nepalaya: {
        label: 'Nepalaya',
        short: 'NP',
        color: '#0d2818',
        logo: '/publication/05 Logos_Nepalaya.jpg'
    },
    lipi: {
        label: 'Lipi',
        short: 'LP',
        color: '#1a1a0a',
        logo: '/publication/06 Logos_Lipi.jpg'
    },
    sunbarshi: {
        label: 'Sunbarshi',
        short: 'SB',
        color: '#1a0a0a',
        logo: '/publication/07 Logos_Sunbarshi.jpg'
    },
    indigo: {
        label: 'Indigo',
        short: 'IN',
        color: '#0d0d2b',
        logo: '/publication/08 Logos_Indigo.jpg'
    },
    kalam: {
        label: 'Kalam',
        short: 'KL',
        color: '#0a1a1a',
        logo: '/publication/09 Logos_Kalam.jpg'
    },
    shailee: {
        label: 'Shailee',
        short: 'SL',
        color: '#1a0d00',
        logo: '/publication/10 Logos_Shailee.jpg'
    },
    sambodhan: {
        label: 'Sambodhan',
        short: 'SM',
        color: '#0a0a1a',
        logo: '/publication/11 Logos_Sambodhan.jpg'
    },
    ratna: {
        label: 'Ratna',
        short: 'RT',
        color: '#1a0a00',
        logo: '/publication/12 Logos_Ratna.jpg'
    },
    educational: {
        label: 'Educational',
        short: 'ED',
        color: '#001a0a',
        logo: '/publication/13 Logos_Educational.jpg'
    },
    sas: {
        label: 'SAS Trust',
        short: 'ST',
        color: '#1a1218',
        logo: '/publication/14 Logos_SAS Trust.jpg'
    },
    shangrila: {
        label: 'Shangrila',
        short: 'SH',
        color: '#0d1a1a',
        logo: '/publication/15 Logos_Shangrila.jpg'
    }
};
const BOOKS = [];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useReveal() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReduced) {
                el.classList.add('visible');
                return;
            }
            const observer = new IntersectionObserver({
                "useReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        el.classList.add('visible');
                        observer.disconnect();
                    }
                }
            }["useReveal.useEffect"], {
                threshold: 0.1,
                rootMargin: '0px 0px -48px 0px'
            });
            observer.observe(el);
            return ({
                "useReveal.useEffect": ()=>observer.disconnect()
            })["useReveal.useEffect"];
        }
    }["useReveal.useEffect"], []);
    return ref;
}
_s(useReveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0ou4m5e._.js.map