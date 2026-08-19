module.exports = [
"[project]/src/app/books/[[...slug]]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Books
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Grain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Grain.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/books.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReveal.ts [app-ssr] (ecmascript)");
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
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "reveal",
        style: {
            transitionDelay: `${delay}s`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
/* ── Enhanced circular publisher logo ── */ function PubCircle({ pub, size = 56 }) {
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        style: {
            width: size,
            height: size,
            borderRadius: '50%',
            overflow: 'hidden',
            border: `2px solid ${hov ? '#c9a227' : 'rgba(14,12,10,0.08)'}`,
            background: '#fff',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: hov ? '0 8px 24px rgba(201,162,39,0.22), 0 2px 8px rgba(201,162,39,0.12)' : '0 2px 8px rgba(14,12,10,0.06)',
            transform: hov ? 'translateY(-4px) scale(1.08)' : 'scale(1)',
            flexShrink: 0,
            cursor: 'pointer',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].logo,
                alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label,
                style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: hov ? 'none' : 'saturate(0.92)',
                    transition: 'filter 0.3s'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            hov && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(0,0,0,0.85)',
                    color: '#fff',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 6,
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    zIndex: 10,
                    animation: 'tooltipFadeIn 0.2s ease-out'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
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
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "reveal",
        style: {
            transitionDelay: `${delay}s`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onMouseEnter: ()=>setHov(true),
            onMouseLeave: ()=>setHov(false),
            onClick: onClick,
            style: {
                position: 'relative',
                cursor: 'pointer'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        book.imgSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            lineNumber: 111,
                            columnNumber: 13
                        }, this) : /* Typographic cover layout only if no image */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverLayout, {
                            book: book,
                            hov: hov
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.625rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: book.palette.accent
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].short || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        book.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                top: '0.6rem',
                                left: '0.6rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.3rem'
                            },
                            children: book.tags.includes('award') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 150,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '0.875rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.6875rem',
                                fontWeight: 400,
                                color: 'rgba(14,12,10,0.42)',
                                letterSpacing: '0.04em'
                            },
                            children: [
                                book.author && `${book.author} · `,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/books/publication/${book.publisher}`,
                                    style: {
                                        color: '#c9a227',
                                        textDecoration: 'none',
                                        transition: 'opacity 0.2s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.7',
                                    onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].short || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                ' · ',
                                book.year
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '0.35rem',
                                marginTop: '0.45rem',
                                flexWrap: 'wrap'
                            },
                            children: book.tags.filter((t)=>t !== 'award').map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
/* ── Typographic cover layout ── */ function CoverLayout({ book, hov }) {
    const { bg, text, accent } = book.palette;
    const title = book.title;
    const author = book.author;
    const pub = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].short || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][book.publisher].label;
    const base = {
        position: 'absolute',
        inset: 0,
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        background: bg
    };
    if (book.layout === 'center') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 28,
                    height: 1,
                    background: accent,
                    marginBottom: '1rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                lineNumber: 214,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                lineNumber: 215,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
    if (book.layout === 'top-left') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            justifyContent: 'flex-start'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 20,
                    height: 1,
                    background: accent,
                    marginBottom: '0.5rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                lineNumber: 224,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
    if (book.layout === 'top-center') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            alignItems: 'center',
            justifyContent: 'flex-start',
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 24,
                    height: 1,
                    background: accent,
                    margin: '0 auto 0.5rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                lineNumber: 233,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
    if (book.layout === 'bottom-left') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            justifyContent: 'flex-end'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 20,
                    height: 1,
                    background: accent,
                    marginBottom: '0.6rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                lineNumber: 241,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                lineNumber: 242,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
    if (book.layout === 'bottom-right') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            textAlign: 'right'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 20,
                    height: 1,
                    background: accent,
                    marginBottom: '0.6rem'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                lineNumber: 250,
                columnNumber: 7
            }, this),
            author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                lineNumber: 251,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
    /* split */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...base,
            justifyContent: 'space-between'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        lineNumber: 266,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
function Books() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params?.slug || [];
    const filter = slug[0] === 'publication' ? undefined : slug[0];
    const publisher = slug[0] === 'publication' ? slug[1] : undefined;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedBook, setSelectedBook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /* Determine context */ const isPublisherView = !!publisher;
    const pubKey = publisher;
    const [dbBooks, setDbBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/books').then((r)=>r.json()).then((data)=>{
            if (Array.isArray(data)) {
                setDbBooks(data.map((b)=>{
                    // Build tags array from genre, isBestSeller, and isAwardWinner flags
                    const tags = b.genre ? b.genre.split(',').map((s)=>s.trim()) : [];
                    if (b.isBestSeller) tags.push('best-seller');
                    if (b.isAwardWinner) tags.push('award');
                    // Auto-add 'recent' tag if book was created in last 6 months
                    const createdDate = new Date(b.createdAt);
                    const sixMonthsAgo = new Date();
                    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
                    console.log('Book:', b.title, 'Created:', createdDate, 'Six months ago:', sixMonthsAgo, 'Is recent:', createdDate >= sixMonthsAgo);
                    if (createdDate >= sixMonthsAgo) {
                        tags.push('recent');
                    }
                    return {
                        id: b.id,
                        title: b.title,
                        author: b.author,
                        publisher: b.publication,
                        tags: tags,
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
                        awardName: b.awardName,
                        purchaseLink: b.purchaseLink
                    };
                }));
            }
        }).finally(()=>setLoading(false));
    }, []);
    /* Sync tab from URL */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (filter === 'award' || filter === 'best-seller' || filter === 'recent') setTab(filter);
        else setTab('all');
    }, [
        filter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo(0, 0);
    }, [
        publisher,
        filter
    ]);
    /* Filter logic */ const allBooks = [
        ...dbBooks,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKS"]
    ];
    const visibleBooks = allBooks.filter((b)=>{
        if (isPublisherView && pubKey && b.publisher !== pubKey) return false;
        if (tab === 'award') return b.tags.includes('award');
        if (tab === 'best-seller') return b.tags.includes('best-seller');
        if (tab === 'recent') return b.tags.includes('recent');
        return true;
    });
    /* Page title */ const pageTitle = isPublisherView && pubKey ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pubKey].label : filter === 'award' ? 'Award-Winning' : filter === 'best-seller' ? 'Best Sellers' : filter === 'recent' ? 'Recent' : 'Books';
    const pageSub = isPublisherView && pubKey ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pubKey].short ? `[${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pubKey].short}]` : ''} · Book Cover Design` : 'Book Cover Design';
    /* Tab navigation for publisher view */ const handleTab = (t)=>{
        setTab(t);
        if (isPublisherView) {
        // stay on publisher, update hash for UX only (no route change needed — filter is local state)
        } else {
            router.push(t === 'all' ? '/books' : `/books/${t}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#f4f1ea',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Grain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    paddingTop: 'calc(68px + clamp(3.5rem,8vh,5.5rem))',
                    paddingBottom: 'clamp(2.5rem,5vw,4rem)',
                    borderBottom: '1px solid rgba(14,12,10,0.08)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: [
                        isPublisherView && pubKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 387,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '1.5rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this),
                        !isPublisherView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '2.5rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1.25rem',
                                alignItems: 'flex-start'
                            },
                            children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"]).map((p)=>{
                                const count = allBooks.filter((b)=>b.publisher === p).length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push(`/books/publication/${p}`),
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.45rem',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PubCircle, {
                                            pub: p
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '0.6875rem',
                                                fontWeight: 400,
                                                letterSpacing: '0.04em',
                                                color: 'rgba(14,12,10,0.55)',
                                                textAlign: 'center',
                                                maxWidth: 72,
                                                lineHeight: 1.3
                                            },
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label,
                                                count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: 'block',
                                                        color: '#c9a227',
                                                        fontSize: '0.6rem',
                                                        fontWeight: 500
                                                    },
                                                    children: count
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                            lineNumber: 418,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, p, true, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 411,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '1px solid rgba(14,12,10,0.08)',
                    position: 'sticky',
                    top: 68,
                    zIndex: 100,
                    background: 'rgba(244,241,234,0.98)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 4px 12px rgba(14,12,10,0.02)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...W,
                        display: 'flex',
                        gap: 0,
                        overflowX: 'auto',
                        scrollbarWidth: 'none'
                    },
                    children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTab(t.key),
                            style: {
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.625rem',
                                fontWeight: 600,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: tab === t.key ? '#0e0c0a' : 'rgba(14,12,10,0.38)',
                                background: 'none',
                                border: 'none',
                                borderBottom: tab === t.key ? '2px solid #c9a227' : '2px solid transparent',
                                padding: '1.2rem 0',
                                marginRight: '2.75rem',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                cursor: 'pointer',
                                position: 'relative'
                            },
                            onMouseEnter: (e)=>{
                                if (tab !== t.key) e.currentTarget.style.color = 'rgba(14,12,10,0.65)';
                            },
                            onMouseLeave: (e)=>{
                                if (tab !== t.key) e.currentTarget.style.color = 'rgba(14,12,10,0.38)';
                            },
                            children: [
                                t.label,
                                t.key !== 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        marginLeft: '0.5em',
                                        fontSize: '0.5rem',
                                        opacity: tab === t.key ? 0.7 : 0.45,
                                        fontWeight: 500,
                                        color: tab === t.key ? '#c9a227' : 'inherit'
                                    },
                                    children: allBooks.filter((b)=>{
                                        if (isPublisherView && pubKey && b.publisher !== pubKey) return false;
                                        return b.tags.includes(t.key);
                                    }).length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, t.key, true, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 443,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: 'clamp(3rem,7vw,5rem) 0 clamp(5rem,10vw,8rem)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: visibleBooks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            padding: '6rem 0',
                            color: 'rgba(14,12,10,0.35)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Fraunces', serif",
                                fontSize: '1.375rem',
                                fontWeight: 200,
                                fontStyle: 'italic'
                            },
                            children: "No covers in this category yet."
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 487,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                        lineNumber: 486,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookGrid, {
                        books: visibleBooks,
                        onBookSelect: setSelectedBook
                    }, void 0, false, {
                        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                        lineNumber: 490,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 484,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            isPublisherView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    borderTop: '1px solid rgba(14,12,10,0.08)',
                    padding: 'clamp(3rem,6vw,5rem) 0'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: W,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            lineNumber: 499,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1.25rem',
                                alignItems: 'flex-start'
                            },
                            children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"]).filter((p)=>p !== pubKey).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/books/publication/${p}`,
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.45rem',
                                        textDecoration: 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PubCircle, {
                                            pub: p
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                            lineNumber: 506,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '0.6875rem',
                                                fontWeight: 400,
                                                letterSpacing: '0.04em',
                                                color: 'rgba(14,12,10,0.55)',
                                                textAlign: 'center',
                                                maxWidth: 72,
                                                lineHeight: 1.3
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, p, true, {
                                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                            lineNumber: 502,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                    lineNumber: 498,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 497,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            selectedBook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                book: selectedBook,
                onClose: ()=>setSelectedBook(null)
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 520,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 375,
        columnNumber: 5
    }, this);
}
/* ── Masonry-style grid ── */ function BookGrid({ books, onBookSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "book-grid",
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'clamp(2rem,4vw,3.5rem) clamp(1.25rem,3vw,2.5rem)'
                },
                children: books.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverCard, {
                        book: b,
                        delay: Math.min(i * 0.06, 0.36),
                        onClick: ()=>onBookSelect(b)
                    }, b.id, false, {
                        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                        lineNumber: 539,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 533,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (min-width: 640px)  { .book-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 1024px) { .book-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (min-width: 1280px) { .book-grid { grid-template-columns: repeat(5, 1fr) !important; } }

        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
                lineNumber: 542,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/books/[[...slug]]/page.tsx",
        lineNumber: 532,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/BookModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function BookModal({ book, onClose }) {
    // Prevent body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.body.style.overflow = 'auto';
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: '0 0 45%',
                            backgroundColor: '#eaddc9',
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: '1',
                            padding: '1.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                            maxHeight: '90vh'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: {
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            fontSize: '0.75rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
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
                                                ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: '1px solid #e5e7eb'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        borderBottom: '1px solid #e5e7eb'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '0.35rem 0.5rem',
                                                                color: '#555'
                                                            },
                                                            children: book.purchaseLink && book.purchaseLink.trim() !== '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "🛒"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BookModal.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            (book.hasSpotUV || book.hasMatteLamination || book.hasFoilEmboss) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '1.5rem',
                                            textAlign: 'center'
                                        },
                                        children: [
                                            book.hasSpotUV && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            book.hasMatteLamination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.6rem',
                                                            color: '#333',
                                                            lineHeight: 1.1
                                                        },
                                                        children: [
                                                            "Matte",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                                            book.hasFoilEmboss && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.6rem',
                                                            color: '#333',
                                                            lineHeight: 1.1
                                                        },
                                                        children: [
                                                            "Foil",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
}),
"[project]/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            borderTop: '1px solid rgba(14,12,10,0.08)',
            padding: 'clamp(3rem, 6vw, 5rem) 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
}),
"[project]/src/components/Grain.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Film-grain overlay — SVG feTurbulence tiled at 256px */ __turbopack_context__.s([
    "default",
    ()=>Grain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Grain() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/books.ts [app-ssr] (ecmascript)");
"use client";
;
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
const PUB_KEYS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"]);
/* ── Enhanced circular publisher logo with tooltip ── */ function PubCircle({ pub, size = 56, onClick }) {
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        "aria-label": `View ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label} books`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].logo,
                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            hov && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][pub].label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function Header() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [megaOpen, setMegaOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileBooks, setMobileBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobilePub, setMobilePub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const megaTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fn = ()=>setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', fn, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', fn);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        menuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMenuOpen(false);
        setMegaOpen(false);
        setMobileBooks(false);
        setMobilePub(false);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'clamp(1.5rem, 3vw, 2.5rem)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hdr-nav",
                                    style: {
                                        display: 'none',
                                        position: 'relative'
                                    },
                                    onMouseEnter: openMega,
                                    onMouseLeave: closeMega,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "8",
                                                    height: "5",
                                                    viewBox: "0 0 8 5",
                                                    fill: "none",
                                                    style: {
                                                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                        transform: megaOpen ? 'rotate(180deg)' : 'none',
                                                        opacity: 0.6
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxWidth: 1280,
                                                    margin: '0 auto',
                                                    padding: '2.5rem clamp(1.5rem, 5.5vw, 5rem) 3rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.75rem',
                                                            marginBottom: '1.5rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
                                                            gap: '1.5rem',
                                                            marginBottom: '2.5rem',
                                                            maxWidth: 900
                                                        },
                                                        children: PUB_KEYS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    animation: megaOpen ? `slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.03}s both` : 'none'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PubCircle, {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: '3rem',
                                                            flexWrap: 'wrap'
                                                        },
                                                        children: CATEGORIES.slice(1).map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hdr-nav",
                            style: {
                                display: 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
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
                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both' : 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "10",
                                            height: "6",
                                            viewBox: "0 0 10 6",
                                            fill: "none",
                                            style: {
                                                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                                transform: mobileBooks ? 'rotate(180deg)' : 'none',
                                                opacity: 0.5
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                mobileBooks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        margin: '1rem 0 1.5rem 0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.25rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "8",
                                                            height: "5",
                                                            viewBox: "0 0 8 5",
                                                            fill: "none",
                                                            style: {
                                                                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                                                transform: mobilePub ? 'rotate(180deg)' : 'none',
                                                                opacity: 0.7
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                mobilePub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        margin: '1rem 0 1.5rem 0',
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(65px, 1fr))',
                                                        gap: '1.25rem 1rem'
                                                    },
                                                    children: PUB_KEYS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/books/publication/${p}`,
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                                gap: '0.45rem',
                                                                textDecoration: 'none'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].logo,
                                                                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label,
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLISHERS"][p].label
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
                                        CATEGORIES.slice(1).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' : 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                marginTop: '2rem',
                                paddingTop: '2rem',
                                borderTop: '1px solid rgba(14,12,10,0.08)',
                                animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' : 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' : 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
}),
"[project]/src/data/books.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/hooks/useReveal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useReveal() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            el.classList.add('visible');
            return;
        }
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                el.classList.add('visible');
                observer.disconnect();
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -48px 0px'
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, []);
    return ref;
}
}),
];

//# sourceMappingURL=src_0r_0quq._.js.map