(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/books/[[...slug]]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Books
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Cursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Grain$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Grain.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/books.ts [app-client] (ecmascript)");
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
;
;
;
const W = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 clamp(1.5rem, 5.5vw, 5rem)'
};
/* ── helper ── */ function Reveal({ children, delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "reveal",
        style: {
            transitionDelay: `${delay}s`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(Reveal, "R6lsF/5GV6UhDn/m6681hjVhyFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = Reveal;
const TABS = [
    {
        key: 'all',
        label: 'All'
    },
    {
        key: 'award',
        label: 'Award'
    },
    {
        key: 'best-seller',
        label: 'Best Seller'
    },
    {
        key: 'recent',
        label: 'Recent'
    }
];
/* ── Book cover card ── */ function CoverCard({ book, delay, onClick }) {
    _s1();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "reveal",
        style: {
            transitionDelay: `${delay}s`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-hover": "true",
            onMouseEnter: ()=>setHov(true),
            onMouseLeave: ()=>setHov(false),
            onClick: onClick,
            style: {
                position: 'relative',
                cursor: 'pointer'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        aspectRatio: '2/3',
                        overflow: 'hidden',
                        background: book.palette.bg,
                        position: 'relative',
                        boxShadow: hov ? '0 24px 60px rgba(14,12,10,0.18), 0 6px 16px rgba(14,12,10,0.10)' : '0 8px 24px rgba(14,12,10,0.09)',
                        transition: 'box-shadow 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                        transform: hov ? 'translateY(-6px)' : 'none'
                    },
                    children: [
                        book.imgSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: book.imgSrc,
                            alt: book.title,
                            loading: "lazy",
                            style: {
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'opacity 0.5s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this) : /* Typographic cover layout only if no image */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverLayout, {
                            book: book,
                            hov: hov
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(14,12,10,0.55)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                opacity: hov ? 1 : 0,
                                transition: 'opacity 0.35s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Fraunces', serif",
                                        fontSize: '1.0625rem',
                                        fontWeight: 300,
                                        color: '#f4f1ea',
                                        letterSpacing: '-0.01em',
                                        textAlign: 'center',
                                        padding: '0 1.5rem'
                                    },
                                    children: book.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.625rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: book.palette.accent
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].short || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        book.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                top: '0.6rem',
                                left: '0.6rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.3rem'
                            },
                            children: book.tags.includes('award') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.5rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    background: '#c9a227',
                                    color: '#0e0c0a',
                                    padding: '0.25em 0.5em'
                                },
                                children: "Award"
                            }, void 0, false, {
                                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '0.875rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Fraunces', serif",
                                fontSize: '0.9375rem',
                                fontWeight: 300,
                                letterSpacing: '-0.01em',
                                color: '#0e0c0a',
                                lineHeight: 1.25,
                                marginBottom: '0.2rem'
                            },
                            children: book.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.6875rem',
                                fontWeight: 400,
                                color: 'rgba(14,12,10,0.42)',
                                letterSpacing: '0.04em'
                            },
                            children: [
                                book.author && `${book.author} · `,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/books/publication/${book.publisher}`,
                                    style: {
                                        color: '#c9a227',
                                        textDecoration: 'none',
                                        transition: 'opacity 0.2s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.7',
                                    onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].short || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                ' · ',
                                book.year
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '0.35rem',
                                marginTop: '0.45rem',
                                flexWrap: 'wrap'
                            },
                            children: book.tags.filter((t)=>t !== 'award').map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.5rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        color: 'rgba(14,12,10,0.38)',
                                        border: '1px solid rgba(14,12,10,0.12)',
                                        padding: '0.2em 0.55em'
                                    },
                                    children: t
                                }, t, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s1(CoverCard, "/BcQ1KV2IFJXzXhi/CiDmnXYaxE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c1 = CoverCard;
/* ── Typographic cover layout ── */ function CoverLayout({ book, hov }) {
    const { bg, text, accent } = book.palette;
    const title = book.title;
    const author = book.author;
    const pub = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].short || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].label;
    const base = {
        position: 'absolute',
        inset: 0,
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        background: bg
    };
    if (book.layout === 'center') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 28,
                    height: 1,
                    background: accent,
                    marginBottom: '1rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(1.1rem,3vw,1.5rem)',
                    fontWeight: 200,
                    color: text,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: '0.75rem'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.55rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: accent
                },
                children: author
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 163,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.45rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: `${text}55`
                },
                children: pub
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
    if (book.layout === 'top-left') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            justifyContent: 'flex-start'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(1.1rem,3vw,1.6rem)',
                    fontWeight: 200,
                    color: text,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '0.5rem'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 20,
                    height: 1,
                    background: accent,
                    marginBottom: '0.5rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.5rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: `${accent}cc`
                },
                children: author
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 172,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '1.25rem',
                    right: '1.25rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.45rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: `${text}44`,
                    writingMode: 'vertical-rl'
                },
                children: pub
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
    if (book.layout === 'top-center') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            alignItems: 'center',
            justifyContent: 'flex-start',
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(1.1rem,3vw,1.5rem)',
                    fontWeight: 200,
                    color: text,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: '0.5rem'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 24,
                    height: 1,
                    background: accent,
                    margin: '0 auto 0.5rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.5rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: `${accent}cc`
                },
                children: author
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 181,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.45rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: `${text}44`
                },
                children: pub
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
    if (book.layout === 'bottom-left') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            justifyContent: 'flex-end'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 20,
                    height: 1,
                    background: accent,
                    marginBottom: '0.6rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(1.1rem,3vw,1.6rem)',
                    fontWeight: 200,
                    color: text,
                    letterSpacing: '-0.03em',
                    lineHeight: 1
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.5rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: `${accent}cc`,
                    marginTop: '0.5rem'
                },
                children: author
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 190,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.45rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: `${text}44`,
                    writingMode: 'vertical-rl'
                },
                children: pub
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
    if (book.layout === 'bottom-right') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            textAlign: 'right'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 20,
                    height: 1,
                    background: accent,
                    marginBottom: '0.6rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(1.1rem,3vw,1.6rem)',
                    fontWeight: 200,
                    color: text,
                    letterSpacing: '-0.03em',
                    lineHeight: 1
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.5rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: `${accent}cc`,
                    marginTop: '0.5rem'
                },
                children: author
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 199,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.45rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: `${text}44`,
                    writingMode: 'vertical-rl'
                },
                children: pub
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
    /* split */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            justifyContent: 'space-between'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "'Fraunces', serif",
                    fontSize: 'clamp(1.1rem,3vw,1.6rem)',
                    fontWeight: 200,
                    color: text,
                    letterSpacing: '-0.03em',
                    lineHeight: 1
                },
                children: title.split(' ').slice(0, Math.ceil(title.split(' ').length / 2)).join(' ')
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: "'Fraunces', serif",
                            fontSize: 'clamp(1.1rem,3vw,1.6rem)',
                            fontWeight: 200,
                            color: accent,
                            letterSpacing: '-0.03em',
                            lineHeight: 1,
                            textAlign: 'right'
                        },
                        children: title.split(' ').slice(Math.ceil(title.split(' ').length / 2)).join(' ')
                    }, void 0, false, {
                        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.5rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: `${text}88`,
                            marginTop: '0.5rem',
                            textAlign: 'right'
                        },
                        children: author
                    }, void 0, false, {
                        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                        lineNumber: 214,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '1.25rem',
                    width: 16,
                    height: 1,
                    background: accent,
                    transform: 'translateY(-50%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_c2 = CoverLayout;
function Books() {
    _s2();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params?.slug || [];
    const filter = slug[0] === 'publication' ? undefined : slug[0];
    const publisher = slug[0] === 'publication' ? slug[1] : undefined;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedBook, setSelectedBook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* Determine context */ const isPublisherView = !!publisher;
    const pubKey = publisher;
    const [dbBooks, setDbBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Books.useEffect": ()=>{
            fetch('/api/books').then({
                "Books.useEffect": (r)=>r.json()
            }["Books.useEffect"]).then({
                "Books.useEffect": (data)=>{
                    if (Array.isArray(data)) {
                        setDbBooks(data.map({
                            "Books.useEffect": (b)=>({
                                    id: b.id,
                                    title: b.title,
                                    author: b.author,
                                    publisher: b.publication,
                                    tags: b.genre.split(',').map({
                                        "Books.useEffect": (s)=>s.trim()
                                    }["Books.useEffect"]),
                                    year: new Date(b.createdAt).getFullYear(),
                                    palette: {
                                        bg: '#1c0c08',
                                        text: '#f5e6df',
                                        accent: '#c0392b'
                                    },
                                    layout: 'center',
                                    imgSrc: b.coverImageUrl,
                                    hasSpotUV: b.hasSpotUV,
                                    hasMatteLamination: b.hasMatteLamination,
                                    hasFoilEmboss: b.hasFoilEmboss,
                                    purchaseLink: b.purchaseLink
                                })
                        }["Books.useEffect"]));
                    }
                }
            }["Books.useEffect"]).finally({
                "Books.useEffect": ()=>setLoading(false)
            }["Books.useEffect"]);
        }
    }["Books.useEffect"], []);
    /* Sync tab from URL */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Books.useEffect": ()=>{
            if (filter === 'award' || filter === 'best-seller' || filter === 'recent') setTab(filter);
            else setTab('all');
        }
    }["Books.useEffect"], [
        filter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Books.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["Books.useEffect"], [
        publisher,
        filter
    ]);
    /* Filter logic */ const allBooks = [
        ...dbBooks,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOKS"]
    ];
    const visibleBooks = allBooks.filter((b)=>{
        if (isPublisherView && pubKey && b.publisher !== pubKey) return false;
        if (tab === 'award') return b.tags.includes('award');
        if (tab === 'best-seller') return b.tags.includes('best-seller');
        if (tab === 'recent') return b.tags.includes('recent');
        return true;
    });
    /* Page title */ const pageTitle = isPublisherView && pubKey ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][pubKey].label : filter === 'award' ? 'Award-Winning' : filter === 'best-seller' ? 'Best Sellers' : filter === 'recent' ? 'Recent' : 'Books';
    const pageSub = isPublisherView && pubKey ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][pubKey].short ? `[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][pubKey].short}]` : ''} · Book Cover Design` : 'Book Cover Design';
    /* Tab navigation for publisher view */ const handleTab = (t)=>{
        setTab(t);
        if (isPublisherView) {
        // stay on publisher, update hash for UX only (no route change needed — filter is local state)
        } else {
            router.push(t === 'all' ? '/books' : `/books/${t}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#f4f1ea',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Grain$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    paddingTop: 'calc(68px + clamp(3.5rem,8vh,5.5rem))',
                    paddingBottom: 'clamp(2.5rem,5vw,4rem)',
                    borderBottom: '1px solid rgba(14,12,10,0.08)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: [
                        isPublisherView && pubKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/books",
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.6rem',
                                fontWeight: 500,
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: 'rgba(14,12,10,0.38)',
                                marginBottom: '2rem',
                                transition: 'color 0.2s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.color = '#0e0c0a',
                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(14,12,10,0.38)',
                            children: "← All Books"
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '1.5rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'block',
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '0.5625rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.22em',
                                                textTransform: 'uppercase',
                                                color: '#c9a227',
                                                marginBottom: '0.75rem'
                                            },
                                            children: pageSub
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontFamily: "'Fraunces', serif",
                                                fontSize: 'clamp(2.5rem,7vw,5rem)',
                                                fontWeight: 200,
                                                letterSpacing: '-0.035em',
                                                lineHeight: 0.95,
                                                color: '#0e0c0a'
                                            },
                                            children: pageTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.6875rem',
                                        color: 'rgba(14,12,10,0.30)',
                                        letterSpacing: '0.04em'
                                    },
                                    children: [
                                        visibleBooks.length,
                                        " cover",
                                        visibleBooks.length !== 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        !isPublisherView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '2.5rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                            },
                            children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"]).map((p)=>{
                                const count = allBooks.filter((b)=>b.publisher === p).length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push(`/books/publication/${p}`),
                                    "data-hover": "true",
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.6875rem',
                                        letterSpacing: '0.06em',
                                        color: 'rgba(14,12,10,0.50)',
                                        padding: '0.45em 0.9em',
                                        border: '1px solid rgba(14,12,10,0.12)',
                                        background: 'transparent',
                                        transition: 'all 0.2s',
                                        textDecoration: 'none',
                                        cursor: 'none'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = '#0e0c0a';
                                        e.currentTarget.style.color = '#f4f1ea';
                                        e.currentTarget.style.borderColor = '#0e0c0a';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'rgba(14,12,10,0.50)';
                                        e.currentTarget.style.borderColor = 'rgba(14,12,10,0.12)';
                                    },
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].short || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: '0.4em',
                                                opacity: 0.45,
                                                fontSize: '0.6rem'
                                            },
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                            lineNumber: 357,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, p, true, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '1px solid rgba(14,12,10,0.08)',
                    position: 'sticky',
                    top: 68,
                    zIndex: 100,
                    background: 'rgba(244,241,234,0.96)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...W,
                        display: 'flex',
                        gap: 0
                    },
                    children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-hover": "true",
                            onClick: ()=>handleTab(t.key),
                            style: {
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.625rem',
                                fontWeight: 500,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: tab === t.key ? '#0e0c0a' : 'rgba(14,12,10,0.38)',
                                background: 'none',
                                border: 'none',
                                borderBottom: tab === t.key ? '2px solid #0e0c0a' : '2px solid transparent',
                                padding: '1.1rem 0',
                                marginRight: '2.5rem',
                                transition: 'color 0.2s, border-color 0.2s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.color = '#0e0c0a',
                            onMouseLeave: (e)=>e.currentTarget.style.color = tab === t.key ? '#0e0c0a' : 'rgba(14,12,10,0.38)',
                            children: [
                                t.label,
                                t.key !== 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        marginLeft: '0.4em',
                                        fontSize: '0.5rem',
                                        opacity: 0.55
                                    },
                                    children: allBooks.filter((b)=>{
                                        if (isPublisherView && pubKey && b.publisher !== pubKey) return false;
                                        return b.tags.includes(t.key);
                                    }).length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, t.key, true, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: 'clamp(3rem,7vw,5rem) 0 clamp(5rem,10vw,8rem)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: visibleBooks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            padding: '6rem 0',
                            color: 'rgba(14,12,10,0.35)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Fraunces', serif",
                                fontSize: '1.375rem',
                                fontWeight: 200,
                                fontStyle: 'italic'
                            },
                            children: "No covers in this category yet."
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 401,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                        lineNumber: 400,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookGrid, {
                        books: visibleBooks,
                        onBookSelect: setSelectedBook
                    }, void 0, false, {
                        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                        lineNumber: 404,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            isPublisherView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    borderTop: '1px solid rgba(14,12,10,0.08)',
                    padding: 'clamp(3rem,6vw,5rem) 0'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.5625rem',
                                fontWeight: 500,
                                letterSpacing: '0.22em',
                                textTransform: 'uppercase',
                                color: 'rgba(14,12,10,0.35)',
                                marginBottom: '1.25rem'
                            },
                            children: "Other Publishers"
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                            },
                            children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"]).filter((p)=>p !== pubKey).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/books/publication/${p}`,
                                    "data-hover": "true",
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.06em',
                                        color: 'rgba(14,12,10,0.48)',
                                        padding: '0.4em 0.85em',
                                        border: '1px solid rgba(14,12,10,0.10)',
                                        transition: 'all 0.2s',
                                        textDecoration: 'none'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = '#0e0c0a';
                                        e.currentTarget.style.color = '#f4f1ea';
                                        e.currentTarget.style.borderColor = '#0e0c0a';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'rgba(14,12,10,0.48)';
                                        e.currentTarget.style.borderColor = 'rgba(14,12,10,0.10)';
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label
                                }, p, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 416,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 412,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 411,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            selectedBook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                book: selectedBook,
                onClose: ()=>setSelectedBook(null)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 433,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, this);
}
_s2(Books, "U/ZqJgDRQHArdhBGOj7SA/65v/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = Books;
/* ── Masonry-style grid ── */ function BookGrid({ books, onBookSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "book-grid",
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'clamp(2rem,4vw,3.5rem) clamp(1.25rem,3vw,2.5rem)'
                },
                children: books.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverCard, {
                        book: b,
                        delay: Math.min(i * 0.06, 0.36),
                        onClick: ()=>onBookSelect(b)
                    }, b.id, false, {
                        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (min-width: 640px)  { .book-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 1024px) { .book-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (min-width: 1280px) { .book-grid { grid-template-columns: repeat(5, 1fr) !important; } }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
_c4 = BookGrid;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "CoverCard");
__turbopack_context__.k.register(_c2, "CoverLayout");
__turbopack_context__.k.register(_c3, "Books");
__turbopack_context__.k.register(_c4, "BookGrid");
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
                                    marginBottom: '0.75rem',
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
                                    marginBottom: '1rem'
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
                                    marginBottom: '1rem'
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
                                                {
                                                    label: 'Author',
                                                    value: book.author || 'Rabindra Samir'
                                                },
                                                {
                                                    label: 'Publication House',
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
                                                    label: 'Award Recieved',
                                                    value: 'Madan Puraskar'
                                                },
                                                {
                                                    label: 'Inside Layout',
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
                                                }, this))
                                        }, void 0, false, {
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
                                        lineNumber: 164,
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
                                                        lineNumber: 170,
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
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookModal.tsx",
                                                lineNumber: 169,
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
                                                        lineNumber: 176,
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
                                                                lineNumber: 177,
                                                                columnNumber: 94
                                                            }, this),
                                                            "Lamination"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookModal.tsx",
                                                lineNumber: 175,
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
                                                        lineNumber: 182,
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
                                                                lineNumber: 183,
                                                                columnNumber: 93
                                                            }, this),
                                                            "Emboss"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookModal.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookModal.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookModal.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            book.purchaseLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '1.5rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: book.purchaseLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        display: 'inline-block',
                                        padding: '0.6rem 1.25rem',
                                        background: '#c9a227',
                                        color: '#0e0c0a',
                                        textDecoration: 'none',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.05em',
                                        borderRadius: '6px',
                                        textTransform: 'uppercase',
                                        transition: 'opacity 0.2s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.85',
                                    onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                                    children: "Get book from here"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookModal.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookModal.tsx",
                                lineNumber: 192,
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
                lineNumber: 219,
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
"[project]/src/components/Cursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Cursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -200,
        y: -200
    });
    const lerped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -200,
        y: -200
    });
    const rafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hidden');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cursor.useEffect": ()=>{
            const onMove = {
                "Cursor.useEffect.onMove": (e)=>{
                    mouse.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    if (state === 'hidden') setState('default');
                    const el = document.elementFromPoint(e.clientX, e.clientY);
                    const interactive = el?.closest('a, button, [role="button"], input, textarea, label, [data-hover]');
                    const draggable = el?.closest('[data-drag]');
                    setState(draggable ? 'drag' : interactive ? 'hover' : 'default');
                }
            }["Cursor.useEffect.onMove"];
            const onLeave = {
                "Cursor.useEffect.onLeave": ()=>setState('hidden')
            }["Cursor.useEffect.onLeave"];
            const onEnter = {
                "Cursor.useEffect.onEnter": ()=>setState('default')
            }["Cursor.useEffect.onEnter"];
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseleave', onLeave);
            document.addEventListener('mouseenter', onEnter);
            const animate = {
                "Cursor.useEffect.animate": ()=>{
                    lerped.current.x += (mouse.current.x - lerped.current.x) * 0.1;
                    lerped.current.y += (mouse.current.y - lerped.current.y) * 0.1;
                    if (dotRef.current) {
                        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
                    }
                    if (ringRef.current) {
                        ringRef.current.style.transform = `translate(${lerped.current.x}px, ${lerped.current.y}px) translate(-50%, -50%)`;
                    }
                    rafId.current = requestAnimationFrame(animate);
                }
            }["Cursor.useEffect.animate"];
            rafId.current = requestAnimationFrame(animate);
            return ({
                "Cursor.useEffect": ()=>{
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseleave', onLeave);
                    document.removeEventListener('mouseenter', onEnter);
                    cancelAnimationFrame(rafId.current);
                }
            })["Cursor.useEffect"];
        }
    }["Cursor.useEffect"], [
        state
    ]);
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && !window.matchMedia('(hover: hover)').matches) return null;
    const ringSize = state === 'hover' ? 48 : state === 'drag' ? 64 : 36;
    const dotSize = state === 'hover' ? 0 : 5;
    const ringColor = state === 'hover' ? '#c9a227' : 'rgba(14,12,10,0.35)';
    const dotColor = '#c9a227';
    const opacity = state === 'hidden' ? 0 : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    zIndex: 99999,
                    width: dotSize,
                    height: dotSize,
                    borderRadius: '50%',
                    background: dotColor,
                    opacity,
                    transition: 'width 0.25s, height 0.25s, opacity 0.3s',
                    willChange: 'transform'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Cursor.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    zIndex: 99998,
                    width: ringSize,
                    height: ringSize,
                    borderRadius: '50%',
                    border: `1px solid ${ringColor}`,
                    opacity: opacity * 0.85,
                    transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, opacity 0.3s',
                    willChange: 'transform'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Cursor.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Cursor.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(Cursor, "m04P7SZJlb1dAg93l3/UYqDBUwg=");
_c = Cursor;
var _c;
__turbopack_context__.k.register(_c, "Cursor");
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
                    "data-hover": "true",
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
var _s = __turbopack_context__.k.signature();
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
function Header() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [megaOpen, setMegaOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pubHover, setPubHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
        megaTimer.current = setTimeout(()=>setMegaOpen(false), 160);
    };
    const go = (href)=>{
        setMenuOpen(false);
        if (href.startsWith('#')) {
            if (pathname !== '/') {
                router.push('/');
                setTimeout(()=>document.querySelector(href)?.scrollIntoView({
                        behavior: 'smooth'
                    }), 400);
            } else document.querySelector(href)?.scrollIntoView({
                behavior: 'smooth'
            });
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
            transition: 'color 0.25s',
            cursor: 'none',
            background: 'none',
            border: 'none',
            padding: 0
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
                    transition: 'background 0.5s, border-color 0.5s',
                    background: scrolled || megaOpen ? 'rgba(244,241,234,0.96)' : 'transparent',
                    backdropFilter: scrolled || megaOpen ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled || megaOpen ? 'blur(20px)' : 'none',
                    borderBottom: scrolled || megaOpen ? '1px solid rgba(14,12,10,0.08)' : '1px solid transparent'
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
                                    "data-hover": "true",
                                    style: {
                                        fontFamily: "'Fraunces', serif",
                                        fontSize: '1rem',
                                        fontWeight: 300,
                                        letterSpacing: '0.015em',
                                        color: '#0e0c0a',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = '#c9a227',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = '#0e0c0a',
                                    children: "Sachin Yagol"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 93,
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
                                            "data-hover": "true",
                                            style: {
                                                ...navLinkStyle(isBooksActive),
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.35rem'
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
                                                        transition: 'transform 0.25s',
                                                        transform: megaOpen ? 'rotate(180deg)' : 'none',
                                                        opacity: 0.5
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 1l3 3 3-3",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 110,
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
                                                backdropFilter: 'blur(20px)',
                                                WebkitBackdropFilter: 'blur(20px)',
                                                borderBottom: '1px solid rgba(14,12,10,0.08)',
                                                zIndex: 590,
                                                pointerEvents: megaOpen ? 'auto' : 'none',
                                                opacity: megaOpen ? 1 : 0,
                                                transform: megaOpen ? 'translateY(0)' : 'translateY(-8px)',
                                                transition: 'opacity 0.25s, transform 0.25s'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxWidth: 1280,
                                                    margin: '0 auto',
                                                    padding: '2.5rem clamp(1.5rem, 5.5vw, 5rem) 2.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginBottom: '2rem'
                                                        },
                                                        onMouseEnter: ()=>setPubHover(true),
                                                        onMouseLeave: ()=>setPubHover(false),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: 'block',
                                                                    fontFamily: 'Inter, sans-serif',
                                                                    fontSize: '0.5625rem',
                                                                    fontWeight: 500,
                                                                    letterSpacing: '0.22em',
                                                                    textTransform: 'uppercase',
                                                                    color: '#c9a227',
                                                                    marginBottom: '1rem'
                                                                },
                                                                children: "Publication"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    flexWrap: 'wrap',
                                                                    gap: '0.5rem'
                                                                },
                                                                children: PUB_KEYS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>router.push(`/books/publication/${p}`),
                                                                        "data-hover": "true",
                                                                        style: {
                                                                            fontFamily: 'Inter, sans-serif',
                                                                            fontSize: '0.75rem',
                                                                            fontWeight: 400,
                                                                            letterSpacing: '0.06em',
                                                                            color: 'rgba(14,12,10,0.55)',
                                                                            padding: '0.4em 0.9em',
                                                                            border: '1px solid rgba(14,12,10,0.12)',
                                                                            background: 'transparent',
                                                                            transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                                                                            textDecoration: 'none'
                                                                        },
                                                                        onMouseEnter: (e)=>{
                                                                            e.currentTarget.style.background = '#0e0c0a';
                                                                            e.currentTarget.style.color = '#f4f1ea';
                                                                            e.currentTarget.style.borderColor = '#0e0c0a';
                                                                        },
                                                                        onMouseLeave: (e)=>{
                                                                            e.currentTarget.style.background = 'transparent';
                                                                            e.currentTarget.style.color = 'rgba(14,12,10,0.55)';
                                                                            e.currentTarget.style.borderColor = 'rgba(14,12,10,0.12)';
                                                                        },
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].short ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label} [${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].short}]` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label
                                                                    }, p, false, {
                                                                        fileName: "[project]/src/components/Header.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: 1,
                                                            background: 'rgba(14,12,10,0.07)',
                                                            marginBottom: '1.75rem'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: '3rem',
                                                            flexWrap: 'wrap'
                                                        },
                                                        children: CATEGORIES.slice(1).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/books/${c.key}`,
                                                                "data-hover": "true",
                                                                style: {
                                                                    fontFamily: "'Fraunces', serif",
                                                                    fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                                                                    fontWeight: 200,
                                                                    letterSpacing: '-0.02em',
                                                                    color: 'rgba(14,12,10,0.35)',
                                                                    transition: 'color 0.25s',
                                                                    textDecoration: 'none'
                                                                },
                                                                onMouseEnter: (e)=>e.currentTarget.style.color = '#0e0c0a',
                                                                onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(14,12,10,0.35)',
                                                                children: c.label
                                                            }, c.key, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/advertisement",
                                    className: "hdr-nav",
                                    "data-hover": "true",
                                    style: {
                                        ...navLinkStyle(isAdvActive),
                                        display: 'none'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = '#0e0c0a',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = isAdvActive ? '#0e0c0a' : 'rgba(14,12,10,0.42)',
                                    children: "Advertisement"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 92,
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
                                            "data-hover": "true",
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
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this)
                                    }, l.label, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "hdr-burger",
                            "data-hover": "true",
                            onClick: ()=>setMenuOpen((o)=>!o),
                            "aria-label": menuOpen ? 'Close' : 'Menu',
                            "aria-expanded": menuOpen,
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 5,
                                padding: 8,
                                background: 'none',
                                border: 'none',
                                color: '#0e0c0a'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: 'block',
                                        width: 22,
                                        height: 1,
                                        background: 'currentColor',
                                        transition: 'transform 0.35s',
                                        transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: 'block',
                                        width: 22,
                                        height: 1,
                                        background: 'currentColor',
                                        transition: 'transform 0.35s',
                                        transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 76,
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
                    transition: 'opacity 0.4s cubic-bezier(0.16,1,0.3,1)',
                    padding: '100px clamp(1.5rem,7vw,4rem) 3rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-hover": "true",
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
                                        gap: '0.75rem',
                                        transition: 'color 0.25s',
                                        width: '100%',
                                        textAlign: 'left'
                                    },
                                    children: [
                                        "Books",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "10",
                                            height: "6",
                                            viewBox: "0 0 10 6",
                                            fill: "none",
                                            style: {
                                                transition: 'transform 0.3s',
                                                transform: mobileBooks ? 'rotate(180deg)' : 'none',
                                                opacity: 0.4
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 1l4 4 4-4",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                mobileBooks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        margin: '0.5rem 0 1rem 1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.1rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "data-hover": "true",
                                                    onClick: ()=>setMobilePub((o)=>!o),
                                                    style: {
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 500,
                                                        letterSpacing: '0.18em',
                                                        textTransform: 'uppercase',
                                                        color: '#c9a227',
                                                        background: 'none',
                                                        border: 'none',
                                                        padding: '0.5rem 0',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.4rem'
                                                    },
                                                    children: [
                                                        "Publication",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "8",
                                                            height: "5",
                                                            viewBox: "0 0 8 5",
                                                            fill: "none",
                                                            style: {
                                                                transition: 'transform 0.3s',
                                                                transform: mobilePub ? 'rotate(180deg)' : 'none',
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
                                                                lineNumber: 291,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                mobilePub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        margin: '0.25rem 0 0.75rem 1rem',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '0'
                                                    },
                                                    children: PUB_KEYS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/books/publication/${p}`,
                                                                "data-hover": "true",
                                                                style: {
                                                                    fontFamily: 'Inter, sans-serif',
                                                                    fontSize: '0.8125rem',
                                                                    color: 'rgba(14,12,10,0.55)',
                                                                    letterSpacing: '0.04em',
                                                                    display: 'block',
                                                                    padding: '0.4rem 0'
                                                                },
                                                                children: [
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label,
                                                                    " ",
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].short ? `[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].short}]` : ''
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, p, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this),
                                        CATEGORIES.slice(1).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/books/${c.key}`,
                                                    "data-hover": "true",
                                                    style: {
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 500,
                                                        letterSpacing: '0.18em',
                                                        textTransform: 'uppercase',
                                                        color: 'rgba(14,12,10,0.50)',
                                                        display: 'block',
                                                        padding: '0.5rem 0'
                                                    },
                                                    children: c.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 21
                                                }, this)
                                            }, c.key, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/advertisement",
                                "data-hover": "true",
                                style: {
                                    fontFamily: "'Fraunces', serif",
                                    fontSize: 'clamp(2.25rem,9vw,3.5rem)',
                                    fontWeight: 200,
                                    letterSpacing: '-0.03em',
                                    color: 'rgba(14,12,10,0.38)',
                                    display: 'block',
                                    padding: '0.25rem 0'
                                },
                                children: "Advertisement"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                marginTop: '1.5rem',
                                paddingTop: '1.5rem',
                                borderTop: '1px solid rgba(14,12,10,0.08)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#about",
                                "data-hover": "true",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    go('#about');
                                },
                                style: {
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.7rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(14,12,10,0.40)',
                                    display: 'block',
                                    padding: '0.5rem 0'
                                },
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                "data-hover": "true",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    go('#contact');
                                },
                                style: {
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.7rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(14,12,10,0.40)',
                                    display: 'block',
                                    padding: '0.5rem 0'
                                },
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (min-width: 768px) {
          .hdr-nav    { display: flex !important; }
          .hdr-burger { display: none !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(Header, "ARursdU7HfTlVznp40UeYzHzVuw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "PUB_KEYS");
__turbopack_context__.k.register(_c1, "Header");
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
    fp: {
        label: 'Fine Print',
        short: 'FP',
        color: '#1a1a2e'
    },
    bh: {
        label: 'Bookhill',
        short: 'BH',
        color: '#2d1b00'
    },
    nepalaya: {
        label: 'Nepalaya',
        short: 'NP',
        color: '#0d2818'
    },
    kitab: {
        label: 'Kitab',
        short: 'KT',
        color: '#1e0d2b'
    },
    sunbarshi: {
        label: 'Sunbarshi',
        short: 'SB',
        color: '#1a0a0a'
    },
    kalam: {
        label: 'Kalam',
        short: 'KL',
        color: '#0a1a1a'
    },
    lipi: {
        label: 'Lipi',
        short: 'LP',
        color: '#1a1a0a'
    },
    indigo: {
        label: 'Indigo',
        short: 'IN',
        color: '#0d0d2b'
    },
    other: {
        label: 'Other',
        short: '',
        color: '#1a1218'
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

//# sourceMappingURL=src_0vf32k6._.js.map