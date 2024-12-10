(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 3271:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3909));


/***/ }),

/***/ 3909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(6063);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./components/GradientBG.js
// @ts-nocheck



function GradientBG(param) {
    let { children } = param;
    const canvasRef = (0,react.useRef)(null);
    const [context, setContext] = (0,react.useState)(null);
    const [pixels, setPixels] = (0,react.useState)([]);
    function Color(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
        this.dir = Math.random() > 0.5 ? -1 : 1;
        this.toString = function() {
            return "hsla(" + this.h + ", " + this.s + "%, " + this.l + "%, " + this.a + ")";
        };
    }
    function Pixel(x, y, w, h, color) {
        this.x = {
            c: x,
            min: 0,
            max: canvasRef.current.width,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.y = {
            c: y,
            min: 0,
            max: canvasRef.current.height,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.w = {
            c: w,
            min: 2,
            max: canvasRef.current.width,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.h = {
            c: h,
            min: 2,
            max: canvasRef.current.height,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.color = color;
        this.direction = Math.random() > 0.1 ? -1 : 1;
        this.velocity = (Math.random() * 100 + 100) * 0.01 * this.direction;
    }
    function updatePixel(pixel) {
        if (pixel.x.c <= pixel.x.min || pixel.x.c >= pixel.x.max) {
            pixel.x.dir *= -1;
        }
        if (pixel.y.c <= pixel.y.min || pixel.y.c >= pixel.y.max) {
            pixel.y.dir *= -1;
        }
        if (pixel.w.c <= pixel.w.min || pixel.w.c >= pixel.w.max) {
            pixel.w.dir *= -1;
        }
        if (pixel.h.c <= pixel.h.min || pixel.h.c >= pixel.h.max) {
            pixel.h.dir *= -1;
        }
        if (pixel.color.a <= 0 || pixel.color.a >= 0.75) {
            pixel.color.dir *= -1;
        }
        pixel.x.c += 0.005 * pixel.x.dir;
        pixel.y.c += 0.005 * pixel.y.dir;
        pixel.w.c += 0.005 * pixel.w.dir;
        pixel.h.c += 0.005 * pixel.h.dir;
    }
    function renderPixel(pixel) {
        context.restore();
        context.fillStyle = pixel.color.toString();
        context.fillRect(pixel.x.c, pixel.y.c, pixel.w.c, pixel.h.c);
    }
    function paint() {
        if (canvasRef.current) {
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            for(let i = 0; i < pixels.length; i++){
                updatePixel(pixels[i]);
                renderPixel(pixels[i]);
            }
        }
    }
    (0,react.useEffect)(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            setContext(ctx);
            const currentPixels = [
                new Pixel(1, 1, 3, 4, new Color(252, 70, 67, 0.8)),
                new Pixel(0, 0, 1, 1, new Color(0, 0, 98, 1)),
                new Pixel(0, 3, 2, 2, new Color(11, 100, 62, 0.8)),
                new Pixel(4, 0, 4, 3, new Color(190, 94, 75, 0.8)),
                new Pixel(3, 1, 1, 2, new Color(324, 98, 50, 0.1))
            ];
            setPixels(currentPixels);
        }
    }, []);
    (0,react.useEffect)(()=>{
        let animationFrameId;
        if (context) {
            const animate = ()=>{
                paint();
                animationFrameId = window.requestAnimationFrame(animate);
            };
            animate();
        }
        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [
        paint,
        pixels,
        context
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Home_module.background,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("canvas", {
                    className: Home_module.backgroundGradients,
                    width: "6",
                    height: "6",
                    ref: canvasRef
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Home_module.container,
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/reactCOIServiceWorker.tsx
function loadCOIServiceWorker() {
    if ( true && window.location.hostname != "localhost") {
        const coi = window.document.createElement("script");
        coi.setAttribute("src", "/04-zkapp-browser-ui/coi-serviceworker.min.js"); // update if your repo name changes for 'npm run deploy' to work correctly
        window.document.head.appendChild(coi);
    }
}
loadCOIServiceWorker();


// EXTERNAL MODULE: ./node_modules/o1js/dist/web/index.js
var web = __webpack_require__(337);
;// CONCATENATED MODULE: ../node_modules/comlink/dist/esm/comlink.mjs
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const finalizer = Symbol("Comlink.finalizer");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val) => (typeof val === "object" && val !== null) || typeof val === "function";
/**
 * Internal transfer handle to handle objects marked to proxy.
 */
const proxyTransferHandler = {
    canHandle: (val) => isObject(val) && val[proxyMarker],
    serialize(obj) {
        const { port1, port2 } = new MessageChannel();
        expose(obj, port1);
        return [port2, [port2]];
    },
    deserialize(port) {
        port.start();
        return wrap(port);
    },
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */
const throwTransferHandler = {
    canHandle: (value) => isObject(value) && throwMarker in value,
    serialize({ value }) {
        let serialized;
        if (value instanceof Error) {
            serialized = {
                isError: true,
                value: {
                    message: value.message,
                    name: value.name,
                    stack: value.stack,
                },
            };
        }
        else {
            serialized = { isError: false, value };
        }
        return [serialized, []];
    },
    deserialize(serialized) {
        if (serialized.isError) {
            throw Object.assign(new Error(serialized.value.message), serialized.value);
        }
        throw serialized.value;
    },
};
/**
 * Allows customizing the serialization of certain values.
 */
const transferHandlers = new Map([
    ["proxy", proxyTransferHandler],
    ["throw", throwTransferHandler],
]);
function isAllowedOrigin(allowedOrigins, origin) {
    for (const allowedOrigin of allowedOrigins) {
        if (origin === allowedOrigin || allowedOrigin === "*") {
            return true;
        }
        if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
            return true;
        }
    }
    return false;
}
function expose(obj, ep = globalThis, allowedOrigins = ["*"]) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
            return;
        }
        if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
            console.warn(`Invalid origin '${ev.origin}' for comlink proxy`);
            return;
        }
        const { id, type, path } = Object.assign({ path: [] }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
            switch (type) {
                case "GET" /* MessageType.GET */:
                    {
                        returnValue = rawValue;
                    }
                    break;
                case "SET" /* MessageType.SET */:
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;
                case "APPLY" /* MessageType.APPLY */:
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;
                case "CONSTRUCT" /* MessageType.CONSTRUCT */:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* MessageType.ENDPOINT */:
                    {
                        const { port1, port2 } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [port1]);
                    }
                    break;
                case "RELEASE" /* MessageType.RELEASE */:
                    {
                        returnValue = undefined;
                    }
                    break;
                default:
                    return;
            }
        }
        catch (value) {
            returnValue = { value, [throwMarker]: 0 };
        }
        Promise.resolve(returnValue)
            .catch((value) => {
            return { value, [throwMarker]: 0 };
        })
            .then((returnValue) => {
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
            if (type === "RELEASE" /* MessageType.RELEASE */) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
                if (finalizer in obj && typeof obj[finalizer] === "function") {
                    obj[finalizer]();
                }
            }
        })
            .catch((error) => {
            // Send Serialization Error To Caller
            const [wireValue, transferables] = toWireValue({
                value: new TypeError("Unserializable return value"),
                [throwMarker]: 0,
            });
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
        });
    });
    if (ep.start) {
        ep.start();
    }
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.close();
}
function wrap(ep, target) {
    const pendingListeners = new Map();
    ep.addEventListener("message", function handleMessage(ev) {
        const { data } = ev;
        if (!data || !data.id) {
            return;
        }
        const resolver = pendingListeners.get(data.id);
        if (!resolver) {
            return;
        }
        try {
            resolver(data);
        }
        finally {
            pendingListeners.delete(data.id);
        }
    });
    return createProxy(ep, pendingListeners, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
    }
}
function releaseEndpoint(ep) {
    return requestResponseMessage(ep, new Map(), {
        type: "RELEASE" /* MessageType.RELEASE */,
    }).then(() => {
        closeEndPoint(ep);
    });
}
const proxyCounter = new WeakMap();
const proxyFinalizers = "FinalizationRegistry" in globalThis &&
    new FinalizationRegistry((ep) => {
        const newCount = (proxyCounter.get(ep) || 0) - 1;
        proxyCounter.set(ep, newCount);
        if (newCount === 0) {
            releaseEndpoint(ep);
        }
    });
function registerProxy(proxy, ep) {
    const newCount = (proxyCounter.get(ep) || 0) + 1;
    proxyCounter.set(ep, newCount);
    if (proxyFinalizers) {
        proxyFinalizers.register(proxy, ep, proxy);
    }
}
function unregisterProxy(proxy) {
    if (proxyFinalizers) {
        proxyFinalizers.unregister(proxy);
    }
}
function createProxy(ep, pendingListeners, path = [], target = function () { }) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get(_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) {
                return () => {
                    unregisterProxy(proxy);
                    releaseEndpoint(ep);
                    pendingListeners.clear();
                    isProxyReleased = true;
                };
            }
            if (prop === "then") {
                if (path.length === 0) {
                    return { then: () => proxy };
                }
                const r = requestResponseMessage(ep, pendingListeners, {
                    type: "GET" /* MessageType.GET */,
                    path: path.map((p) => p.toString()),
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, pendingListeners, [...path, prop]);
        },
        set(_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, pendingListeners, {
                type: "SET" /* MessageType.SET */,
                path: [...path, prop].map((p) => p.toString()),
                value,
            }, transferables).then(fromWireValue);
        },
        apply(_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) {
                return requestResponseMessage(ep, pendingListeners, {
                    type: "ENDPOINT" /* MessageType.ENDPOINT */,
                }).then(fromWireValue);
            }
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") {
                return createProxy(ep, pendingListeners, path.slice(0, -1));
            }
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, pendingListeners, {
                type: "APPLY" /* MessageType.APPLY */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
        construct(_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, pendingListeners, {
                type: "CONSTRUCT" /* MessageType.CONSTRUCT */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
    });
    registerProxy(proxy, ep);
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
}
function windowEndpoint(w, context = globalThis, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context),
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
            const [serializedValue, transferables] = handler.serialize(value);
            return [
                {
                    type: "HANDLER" /* WireValueType.HANDLER */,
                    name,
                    value: serializedValue,
                },
                transferables,
            ];
        }
    }
    return [
        {
            type: "RAW" /* WireValueType.RAW */,
            value,
        },
        transferCache.get(value) || [],
    ];
}
function fromWireValue(value) {
    switch (value.type) {
        case "HANDLER" /* WireValueType.HANDLER */:
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* WireValueType.RAW */:
            return value.value;
    }
}
function requestResponseMessage(ep, pendingListeners, msg, transfers) {
    return new Promise((resolve) => {
        const id = generateUUID();
        pendingListeners.set(id, resolve);
        if (ep.start) {
            ep.start();
        }
        ep.postMessage(Object.assign({ id }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}


//# sourceMappingURL=comlink.mjs.map

;// CONCATENATED MODULE: ./app/zkappWorkerClient.ts


class ZkappWorkerClient {
    async setActiveInstanceToDevnet() {
        return this.remoteApi.setActiveInstanceToDevnet();
    }
    async loadContract() {
        return this.remoteApi.loadContract();
    }
    async compileContract() {
        return this.remoteApi.compileContract();
    }
    async fetchAccount(publicKeyBase58) {
        return this.remoteApi.fetchAccount(publicKeyBase58);
    }
    async initZkappInstance(publicKeyBase58) {
        return this.remoteApi.initZkappInstance(publicKeyBase58);
    }
    async getNum() {
        const result = await this.remoteApi.getNum();
        return web/* Field */.gN.fromJSON(JSON.parse(result));
    }
    async createUpdateTransaction() {
        return this.remoteApi.createUpdateTransaction();
    }
    async proveUpdateTransaction() {
        return this.remoteApi.proveUpdateTransaction();
    }
    async getTransactionJSON() {
        return this.remoteApi.getTransactionJSON();
    }
    constructor(){
        // Initialize the worker from the zkappWorker module
        const worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(764), __webpack_require__.b)), {
            type: undefined
        });
        // Wrap the worker with Comlink to enable direct method invocation
        this.remoteApi = wrap(worker);
    }
}


;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





let transactionFee = 0.1;
const ZKAPP_ADDRESS = "B62qpXPvmKDf4SaFJynPsT6DyvuxMS9H1pT4TGonDT26m599m7dS9gP";
function Home() {
    const [zkappWorkerClient, setZkappWorkerClient] = (0,react.useState)(null);
    const [hasWallet, setHasWallet] = (0,react.useState)(null);
    const [hasBeenSetup, setHasBeenSetup] = (0,react.useState)(false);
    const [accountExists, setAccountExists] = (0,react.useState)(false);
    const [currentNum, setCurrentNum] = (0,react.useState)(null);
    const [publicKeyBase58, setPublicKeyBase58] = (0,react.useState)("");
    const [creatingTransaction, setCreatingTransaction] = (0,react.useState)(false);
    const [displayText, setDisplayText] = (0,react.useState)("");
    const [transactionlink, setTransactionLink] = (0,react.useState)("");
    const displayStep = (step)=>{
        setDisplayText(step);
        console.log(step);
    };
    // -------------------------------------------------------
    // Do Setup
    (0,react.useEffect)(()=>{
        const setup = async ()=>{
            try {
                if (!hasBeenSetup) {
                    displayStep("Loading web worker...");
                    const zkappWorkerClient = new ZkappWorkerClient();
                    setZkappWorkerClient(zkappWorkerClient);
                    await new Promise((resolve)=>setTimeout(resolve, 5000));
                    displayStep("Done loading web worker");
                    await zkappWorkerClient.setActiveInstanceToDevnet();
                    const mina = window.mina;
                    if (mina == null) {
                        setHasWallet(false);
                        displayStep("Wallet not found.");
                        return;
                    }
                    const publicKeyBase58 = (await mina.requestAccounts())[0];
                    setPublicKeyBase58(publicKeyBase58);
                    displayStep("Using key:".concat(publicKeyBase58));
                    displayStep("Checking if fee payer account exists...");
                    const res = await zkappWorkerClient.fetchAccount(publicKeyBase58);
                    const accountExists = res.error === null;
                    setAccountExists(accountExists);
                    await zkappWorkerClient.loadContract();
                    displayStep("Compiling zkApp...");
                    await zkappWorkerClient.compileContract();
                    displayStep("zkApp compiled");
                    await zkappWorkerClient.initZkappInstance(ZKAPP_ADDRESS);
                    displayStep("Getting zkApp state...");
                    await zkappWorkerClient.fetchAccount(ZKAPP_ADDRESS);
                    const currentNum = await zkappWorkerClient.getNum();
                    setCurrentNum(currentNum);
                    console.log("Current state in zkApp: ".concat(currentNum));
                    setHasBeenSetup(true);
                    setHasWallet(true);
                    setDisplayText("");
                }
            } catch (error) {
                displayStep("Error during setup: ".concat(error.message));
            }
        };
        setup();
    }, []);
    // -------------------------------------------------------
    // Wait for account to exist, if it didn't
    (0,react.useEffect)(()=>{
        const checkAccountExists = async ()=>{
            if (hasBeenSetup && !accountExists) {
                try {
                    for(;;){
                        displayStep("Checking if fee payer account exists...");
                        const res = await zkappWorkerClient.fetchAccount(publicKeyBase58);
                        const accountExists = res.error == null;
                        if (accountExists) {
                            break;
                        }
                        await new Promise((resolve)=>setTimeout(resolve, 5000));
                    }
                } catch (error) {
                    displayStep("Error checking account: ".concat(error.message));
                }
            }
            setAccountExists(true);
        };
        checkAccountExists();
    }, [
        zkappWorkerClient,
        hasBeenSetup,
        accountExists
    ]);
    // -------------------------------------------------------
    // Send a transaction
    const onSendTransaction = async ()=>{
        setCreatingTransaction(true);
        displayStep("Creating a transaction...");
        console.log("publicKeyBase58 sending to worker", publicKeyBase58);
        await zkappWorkerClient.fetchAccount(publicKeyBase58);
        await zkappWorkerClient.createUpdateTransaction();
        displayStep("Creating proof...");
        await zkappWorkerClient.proveUpdateTransaction();
        displayStep("Requesting send transaction...");
        const transactionJSON = await zkappWorkerClient.getTransactionJSON();
        displayStep("Getting transaction JSON...");
        const { hash } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        const transactionLink = "https://minascan.io/devnet/tx/".concat(hash);
        setTransactionLink(transactionLink);
        setDisplayText(transactionLink);
        setCreatingTransaction(true);
    };
    // -------------------------------------------------------
    // Refresh the current state
    const onRefreshCurrentNum = async ()=>{
        try {
            displayStep("Getting zkApp state...");
            await zkappWorkerClient.fetchAccount(ZKAPP_ADDRESS);
            const currentNum = await zkappWorkerClient.getNum();
            setCurrentNum(currentNum);
            console.log("Current state in zkApp: ".concat(currentNum));
            setDisplayText("");
        } catch (error) {
            displayStep("Error refreshing state: ".concat(error.message));
        }
    };
    // -------------------------------------------------------
    // Create UI elements
    let auroLinkElem;
    if (hasWallet === false) {
        const auroLink = "https://www.aurowallet.com/";
        auroLinkElem = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                "Could not find a wallet.",
                " ",
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                    href: "https://www.aurowallet.com/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Install Auro wallet here"
                })
            ]
        });
    }
    const stepDisplay = transactionlink ? /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
        href: transactionlink,
        target: "_blank",
        rel: "noreferrer",
        style: {
            textDecoration: "underline"
        },
        children: "View transaction"
    }) : displayText;
    let setup = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Home_module_default()).start,
        style: {
            fontWeight: "bold",
            fontSize: "1.5rem",
            paddingBottom: "5rem"
        },
        children: [
            stepDisplay,
            auroLinkElem
        ]
    });
    let accountDoesNotExist;
    if (hasBeenSetup && !accountExists) {
        const faucetLink = "https://faucet.minaprotocol.com/?address='".concat(publicKeyBase58);
        accountDoesNotExist = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        paddingRight: "1rem"
                    },
                    children: "Account does not exist."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                    href: faucetLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Visit the faucet to fund this fee payer account"
                })
            ]
        });
    }
    let mainContent;
    if (hasBeenSetup && accountExists) {
        mainContent = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                justifyContent: "center",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Home_module_default()).center,
                    style: {
                        padding: 0
                    },
                    children: [
                        "Current state in zkApp: ",
                        currentNum === null || currentNum === void 0 ? void 0 : currentNum.toString(),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: (Home_module_default()).card,
                    onClick: onSendTransaction,
                    disabled: creatingTransaction,
                    children: "Send Transaction"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: (Home_module_default()).card,
                    onClick: onRefreshCurrentNum,
                    children: "Get Latest State"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(GradientBG, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (Home_module_default()).main,
            style: {
                padding: 0
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Home_module_default()).center,
                style: {
                    padding: 0
                },
                children: [
                    setup,
                    accountDoesNotExist,
                    mainContent
                ]
            })
        })
    });
}


/***/ }),

/***/ 357:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var _global_process, _global_process1;
module.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(8081);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 8081:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ }),

/***/ 6063:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"Home_main__VkIEL","background":"Home_background__nqUIs","backgroundGradients":"Home_backgroundGradients__6K9ld","container":"Home_container__d256j","tagline":"Home_tagline__q1jNE","start":"Home_start__3ARHr","code":"Home_code__VVrIr","grid":"Home_grid__AVljO","state":"Home_state__FiDi6","error":"Home_error__514Ji","bold":"Home_bold__Ib1jN","card":"Home_card__E5spL","center":"Home_center__O_TIN","logo":"Home_logo__IOQAX","content":"Home_content__tkQPU"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [357,917,971,23,744], function() { return __webpack_exec__(3271); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);