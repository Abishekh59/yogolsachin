(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const PUBLICATIONS = [
    {
        value: 'fp',
        label: 'Fine Print (FP)'
    },
    {
        value: 'bh',
        label: 'Bookhill (BH)'
    },
    {
        value: 'nepalaya',
        label: 'Nepalaya (NP)'
    },
    {
        value: 'kitab',
        label: 'Kitab (KT)'
    },
    {
        value: 'sunbarshi',
        label: 'Sunbarshi (SB)'
    },
    {
        value: 'kalam',
        label: 'Kalam (KL)'
    },
    {
        value: 'lipi',
        label: 'Lipi (LP)'
    },
    {
        value: 'indigo',
        label: 'Indigo (IN)'
    },
    {
        value: 'other',
        label: 'Other'
    }
];
const empty = {
    title: '',
    size: '',
    isbn: '',
    author: '',
    genre: '',
    layoutDesigner: '',
    collaboratorArtist: '',
    description: '',
    coverImageUrl: '',
    publication: 'fp',
    hasSpotUV: false,
    hasMatteLamination: false,
    hasFoilEmboss: false,
    purchaseLink: ''
};
function AdminPage() {
    _s();
    const [books, setBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(empty);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailInput, setEmailInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [passwordInput, setPasswordInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleLogin = (e)=>{
        e.preventDefault();
        // Hardcoded credentials for now.
        if (emailInput === 'yogalsachin@gmail.com' && passwordInput === 'Sachin@Yogal2026!') {
            setIsAuthenticated(true);
            setMessage(null);
        } else {
            setMessage({
                type: 'error',
                text: 'Incorrect email or password'
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            fetch('/api/books').then({
                "AdminPage.useEffect": (r)=>r.json()
            }["AdminPage.useEffect"]).then(setBooks).catch(console.error);
        }
    }["AdminPage.useEffect"], []);
    const handleUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        try {
            const fd = new FormData();
            fd.append('file', file);
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: fd
            });
            const data = await res.json();
            if (data.url) {
                setForm((f)=>({
                        ...f,
                        coverImageUrl: data.url
                    }));
                setMessage({
                    type: 'success',
                    text: 'Image uploaded!'
                });
            }
        } catch  {
            setMessage({
                type: 'error',
                text: 'Image upload failed'
            });
        } finally{
            setUploading(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!form.title.trim()) {
            setMessage({
                type: 'error',
                text: 'Title is required'
            });
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch('/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            if (res.ok) {
                const newBook = await res.json();
                setBooks((prev)=>[
                        newBook,
                        ...prev
                    ]);
                setForm(empty);
                if (fileRef.current) fileRef.current.value = '';
                setMessage({
                    type: 'success',
                    text: `"${newBook.title}" added successfully!`
                });
            } else {
                setMessage({
                    type: 'error',
                    text: 'Failed to add book'
                });
            }
        } catch  {
            setMessage({
                type: 'error',
                text: 'Network error'
            });
        } finally{
            setSubmitting(false);
        }
    };
    const set = (key)=>(e)=>setForm((f)=>({
                    ...f,
                    [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
                }));
    /* ── Styles ── */ const pageStyle = {
        minHeight: '100vh',
        background: '#0e0c0a',
        color: '#f4f1ea',
        fontFamily: 'Inter, sans-serif',
        padding: 'clamp(1.5rem, 5vw, 4rem)'
    };
    const cardStyle = {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        maxWidth: 720,
        margin: '0 auto'
    };
    const inputStyle = {
        width: '100%',
        padding: '0.75rem 1rem',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '8px',
        color: '#f4f1ea',
        fontSize: '0.875rem',
        fontFamily: 'Inter, sans-serif',
        outline: 'none',
        transition: 'border-color 0.2s'
    };
    const labelStyle = {
        display: 'block',
        fontSize: '0.7rem',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(244,241,234,0.5)',
        marginBottom: '0.4rem'
    };
    const fieldWrap = {
        marginBottom: '1.25rem'
    };
    const btnStyle = {
        width: '100%',
        padding: '0.875rem',
        background: '#c9a227',
        color: '#0e0c0a',
        border: 'none',
        borderRadius: '8px',
        fontSize: '0.8rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'opacity 0.2s'
    };
    const rowStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: pageStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 720,
                    margin: '0 auto 2rem',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Fraunces', serif",
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: 200,
                            letterSpacing: '-0.03em',
                            marginBottom: '0.5rem'
                        },
                        children: "Book Admin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.8rem',
                            color: 'rgba(244,241,234,0.4)',
                            letterSpacing: '0.08em'
                        },
                        children: "Add new books to the portfolio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 720,
                    margin: '0 auto 1.5rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    background: message.type === 'success' ? 'rgba(42,157,86,0.15)' : 'rgba(220,53,69,0.15)',
                    border: `1px solid ${message.type === 'success' ? 'rgba(42,157,86,0.3)' : 'rgba(220,53,69,0.3)'}`,
                    color: message.type === 'success' ? '#2a9d56' : '#dc3545',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    message.text,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMessage(null),
                        style: {
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this),
            !isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: fieldWrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: labelStyle,
                                    children: "Admin Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    style: inputStyle,
                                    value: emailInput,
                                    onChange: (e)=>setEmailInput(e.target.value),
                                    placeholder: "Enter email",
                                    onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                    onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)',
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: fieldWrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: labelStyle,
                                    children: "Admin Password"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    style: inputStyle,
                                    value: passwordInput,
                                    onChange: (e)=>setPasswordInput(e.target.value),
                                    placeholder: "Enter password",
                                    onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                    onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            style: btnStyle,
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: fieldWrap,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            style: inputStyle,
                                            value: form.title,
                                            onChange: set('title'),
                                            placeholder: "पियूसी बित्तो",
                                            onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: rowStyle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: fieldWrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "Author"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: inputStyle,
                                                    value: form.author,
                                                    onChange: set('author'),
                                                    placeholder: "साउभाका",
                                                    onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                                    onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: fieldWrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "Genre"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: inputStyle,
                                                    value: form.genre,
                                                    onChange: set('genre'),
                                                    placeholder: "Fiction (Novel)",
                                                    onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                                    onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: rowStyle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: fieldWrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "Size"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: inputStyle,
                                                    value: form.size,
                                                    onChange: set('size'),
                                                    placeholder: "5.5 × 8.5 inches",
                                                    onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                                    onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: fieldWrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "ISBN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: inputStyle,
                                                    value: form.isbn,
                                                    onChange: set('isbn'),
                                                    placeholder: "978-9937-928-08-3",
                                                    onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                                    onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: rowStyle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: fieldWrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "Layout Designer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: inputStyle,
                                                    value: form.layoutDesigner,
                                                    onChange: set('layoutDesigner'),
                                                    placeholder: "Designer name",
                                                    onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                                    onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: fieldWrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "Collaborator / Artist"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: inputStyle,
                                                    value: form.collaboratorArtist,
                                                    onChange: set('collaboratorArtist'),
                                                    placeholder: "Artist name",
                                                    onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                                    onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: fieldWrap,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Publication"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            style: {
                                                ...inputStyle,
                                                cursor: 'pointer'
                                            },
                                            value: form.publication,
                                            onChange: set('publication'),
                                            children: PUBLICATIONS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: p.value,
                                                    style: {
                                                        background: '#1a1816',
                                                        color: '#f4f1ea'
                                                    },
                                                    children: p.label
                                                }, p.value, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: fieldWrap,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Purchase Link (URL)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            style: inputStyle,
                                            value: form.purchaseLink,
                                            onChange: set('purchaseLink'),
                                            placeholder: "https://example.com/buy",
                                            onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: fieldWrap,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Printing Effects"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '1.5rem',
                                                marginTop: '0.5rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        fontSize: '0.8rem',
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: form.hasSpotUV,
                                                            onChange: set('hasSpotUV')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 17
                                                        }, this),
                                                        "Spot UV"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        fontSize: '0.8rem',
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: form.hasMatteLamination,
                                                            onChange: set('hasMatteLamination')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/page.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 17
                                                        }, this),
                                                        "Matte Lamination"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        fontSize: '0.8rem',
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: form.hasFoilEmboss,
                                                            onChange: set('hasFoilEmboss')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 17
                                                        }, this),
                                                        "Foil Emboss"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: fieldWrap,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            style: {
                                                ...inputStyle,
                                                minHeight: 100,
                                                resize: 'vertical'
                                            },
                                            value: form.description,
                                            onChange: set('description'),
                                            placeholder: "Nepali description...",
                                            onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: fieldWrap,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Cover Image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '0.75rem',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: fileRef,
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: handleUpload,
                                                    style: {
                                                        ...inputStyle,
                                                        padding: '0.5rem 0.75rem',
                                                        flex: 1
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 15
                                                }, this),
                                                uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '0.75rem',
                                                        color: '#c9a227'
                                                    },
                                                    children: "Uploading…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 13
                                        }, this),
                                        form.coverImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: form.coverImageUrl,
                                                    alt: "Preview",
                                                    style: {
                                                        width: 60,
                                                        height: 80,
                                                        objectFit: 'cover',
                                                        borderRadius: '4px',
                                                        border: '1px solid rgba(255,255,255,0.1)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '0.75rem',
                                                        color: 'rgba(244,241,234,0.5)'
                                                    },
                                                    children: form.coverImageUrl
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '0.65rem',
                                                color: 'rgba(244,241,234,0.3)',
                                                marginTop: '0.4rem'
                                            },
                                            children: "Or type a path manually:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            style: {
                                                ...inputStyle,
                                                marginTop: '0.3rem'
                                            },
                                            value: form.coverImageUrl,
                                            onChange: set('coverImageUrl'),
                                            placeholder: "/books/book.jpg",
                                            onFocus: (e)=>e.currentTarget.style.borderColor = '#c9a227',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    style: {
                                        ...btnStyle,
                                        opacity: submitting ? 0.6 : 1
                                    },
                                    disabled: submitting,
                                    children: submitting ? 'Adding…' : 'Add Book'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 222,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    books.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 720,
                            margin: '3rem auto 0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "'Fraunces', serif",
                                    fontSize: '1.25rem',
                                    fontWeight: 200,
                                    letterSpacing: '-0.02em',
                                    marginBottom: '1.25rem',
                                    color: 'rgba(244,241,234,0.7)'
                                },
                                children: [
                                    "Existing Books (",
                                    books.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                },
                                children: books.map((book)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '1rem',
                                            alignItems: 'center',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: '8px',
                                            padding: '0.75rem 1rem'
                                        },
                                        children: [
                                            book.coverImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: book.coverImageUrl,
                                                alt: book.title,
                                                style: {
                                                    width: 40,
                                                    height: 56,
                                                    objectFit: 'cover',
                                                    borderRadius: '3px',
                                                    border: '1px solid rgba(255,255,255,0.08)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 369,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minWidth: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            fontWeight: 500,
                                                            margin: 0
                                                        },
                                                        children: book.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.7rem',
                                                            color: 'rgba(244,241,234,0.4)',
                                                            margin: '0.15rem 0 0'
                                                        },
                                                        children: [
                                                            book.author && `${book.author} · `,
                                                            book.publication,
                                                            " · ",
                                                            book.genre
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.6rem',
                                                    color: 'rgba(244,241,234,0.25)',
                                                    whiteSpace: 'nowrap'
                                                },
                                                children: new Date(book.createdAt).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, book.id, true, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "Qp4WsW8q1oYSH/9K0QvjX9hZQhw=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_admin_page_tsx_1po4qpu._.js.map