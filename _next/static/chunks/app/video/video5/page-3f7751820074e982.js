(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{1683:function(e,t,n){Promise.resolve().then(n.bind(n,2189))},2189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),u=n(2265),c=n(3915),o=n(7776),s=n(6089);let l=e=>{let{src:t,volume:n}=e;(0,u.useEffect)(()=>{navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{console.log("getUserMedia: ",e)}).catch(e=>{console.error("getUserMedia error: ",e)})},[]);let l=(0,u.useMemo)(()=>{let e=document.createElement("video");return e.crossOrigin="anonymous",e.playsInline=!0,e.loop=!0,e},[]),i=(0,u.useMemo)(()=>new o.VideoTexture(l),[l]),d=(0,u.useMemo)(()=>{let e=new c.ZP;return e.attachMedia(l),e},[l]);(0,u.useEffect)(()=>()=>{d.destroy()},[d]);let f=(0,u.useRef)(null),m=(0,u.useRef)(null),v=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let e=()=>{null===f.current&&(f.current=new AudioContext,m.current=f.current.createGain(),v.current=f.current.createMediaElementSource(l),v.current.connect(m.current),m.current.connect(f.current.destination),m.current.gain.value=n,console.log("connected")),console.log("audioContextRef.current.state: ",f.current.state),f.current.resume(),l.play()};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[n,l]),(0,u.useEffect)(()=>{null!==m.current&&(m.current.gain.value=n,console.log("volume changed: ",n))},[n]),(0,u.useEffect)(()=>(a()&&l.canPlayType("application/vnd.apple.mpegurl")?(l.src=t,console.log("Safari native HLS")):c.ZP.isSupported()?(d.loadSource(t),console.log("Hls.js")):console.error("HLS is not supported."),()=>{l.pause()}),[l,d,t]),(0,r.jsx)(s.JO,{args:[16,9],children:(0,r.jsx)("meshBasicMaterial",{map:i})})},a=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);var i=n(7585),d=n(381),f=n.n(d);function m(){(0,u.useEffect)(()=>{new(f())},[]);let[e,t]=(0,u.useState)(.5),[n,c]=(0,u.useState)(!0);return(0,u.useEffect)(()=>{let e=()=>{n&&(c(!n),console.log("muted: ",!n))};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"range",min:0,max:1,step:.01,value:e,onChange:e=>{t(parseFloat(e.target.value))}}),(0,r.jsx)("div",{style:{height:"95dvh"},children:(0,r.jsx)(i.Xz,{children:(0,r.jsx)(l,{src:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",volume:e,muted:n})})})]})}}},function(e){e.O(0,[104,689,404,540,971,23,744],function(){return e(e.s=1683)}),_N_E=e.O()}]);