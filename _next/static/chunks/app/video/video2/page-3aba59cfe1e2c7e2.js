(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[146],{4358:function(e,t,n){Promise.resolve().then(n.bind(n,7663))},7663:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var u=n(7437),s=n(2265),l=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(null),[l,a]=(0,s.useState)(null);(0,s.useEffect)(()=>{let t=e.current;t&&(t.muted=!0,t.play().catch(e=>{console.error("自動再生に失敗しました:",e)}))},[]);let r=async()=>{if(!t&&e.current){let t=e.current,u=new(window.AudioContext||window.webkitAudioContext);n(u);let s=u.createGain();a(s),u.createMediaElementSource(t).connect(s),s.connect(u.destination),"suspended"===u.state&&await u.resume(),t.muted=!1,t.play()}};return(0,u.jsxs)("div",{children:[(0,u.jsx)("video",{ref:e,src:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",playsInline:!0,muted:!0,autoPlay:!0,controls:!0,style:{width:"100%"}}),(0,u.jsx)("button",{onClick:r,children:"音声を再生"}),(0,u.jsx)("input",{type:"range",min:"0",max:"1",step:"0.01",defaultValue:"1",onChange:e=>{l&&(l.gain.value=Number(e.target.value),console.log("volume changed: ",l.gain.value))},disabled:!l})]})},a=n(381),r=n.n(a);function c(){return(0,s.useEffect)(()=>{new(r())},[]),(0,u.jsx)(l,{})}}},function(e){e.O(0,[104,971,23,744],function(){return e(e.s=4358)}),_N_E=e.O()}]);