document.addEventListener("DOMContentLoaded", function(){
let div = document.createElement("div");
div.innerHTML = `
<style>
#ktbk-btn{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:#6c5ce7;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:28px;cursor:pointer;z-index:9999;box-shadow:0 4px 15px rgba(0,0,0,.3)}
#ktbk-box{position:fixed;bottom:90px;right:20px;width:360px;max-width:92vw;height:460px;background:white;border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,.2);display:none;flex-direction:column;z-index:9999;overflow:hidden;font-family:'Cairo',sans-serif}
#ktbk-head{background:#6c5ce7;color:white;padding:14px;font-weight:bold;display:flex;justify-content:space-between}
#ktbk-msgs{flex:1;padding:12px;overflow-y:auto;background:#f8f9fa}
.ktbk-m{margin:6px 0;padding:10px 14px;border-radius:12px;max-width:85%;line-height:1.5;white-space:pre-line}
.ktbk-b{background:white}.ktbk-u{background:#6c5ce7;color:white;margin-left:auto}
#ktbk-in{display:flex;padding:10px;border-top:1px solid #eee}
#ktbk-in input{flex:1;border:1px solid #ddd;border-radius:20px;padding:10px 14px;outline:none}
#ktbk-in button{background:#6c5ce7;color:white;border:none;border-radius:20px;padding:10px 16px;margin-right:8px;cursor:pointer}
</style>
<div id="ktbk-btn">💬</div>
<div id="ktbk-box">
<div id="ktbk-head"><span>معايا 🤖</span><span id="ktbk-x" style="cursor:pointer">✕</span></div>
<div id="ktbk-msgs"><div class="ktbk-m ktbk-b">ازيك يا بطل! 👋 قولي محتاج ايه؟</div></div>
<div id="ktbk-in"><input id="ktbk-input" placeholder="اكتب هنا..."><button id="ktbk-send">ابعت</button></div>
</div>`;
document.body.appendChild(div);
const LINKS={site:"https://mohamedkarim08.github.io/kotob-ma3aya/",telegram:"https://t.me/mrmohamedbooks",support:"https://t.me/MohamedHelpDesk_bot",request:"https://t.me/KotobkMaya_bot",whatsapp:"https://chat.whatsapp.com/G017CD9YyCv8ygNaRcBX6A?s=cl&p=a&iam=2"};
const BOOKS=[];
const btn=document.getElementById('ktbk-btn'),box=document.getElementById('ktbk-box'),x=document.getElementById('ktbk-x'),msgs=document.getElementById('ktbk-msgs'),inp=document.getElementById('ktbk-input'),send=document.getElementById('ktbk-send');
function add(t,w){let d=document.createElement('div');d.className='ktbk-m '+(w=='u'?'ktbk-u':'ktbk-b');d.innerText=t;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight}
function reply(q){
let qq=q.toLowerCase();
if(qq.includes("موقع")) return "لينك الموقع 👇\n"+LINKS.site;
if(qq.includes("واتساب")) return "قناة الواتساب ❤️\n"+LINKS.whatsapp;
if(qq.includes("تليجرام")||qq.includes("تلجرام")) return "قناة التليجرام 👇\n"+LINKS.telegram;
if(qq.includes("دعم")||qq.includes("مشكلة")) return "بوت الدعم 🛠️\n"+LINKS.support;
if(qq.includes("طلب")||qq.includes("اطلب")) return "بوت طلب الكتب 📩\n"+LINKS.request;
return "جرب تكتب اسم الكتاب أو قول واتساب / تليجرام / دعم / طلب\nالموقع: "+LINKS.site;
}
function go(){let q=inp.value.trim();if(!q)return;add(q,'u');inp.value='';setTimeout(()=>add(reply(q),'b'),400)}
btn.onclick=()=>box.style.display='flex';x.onclick=()=>box.style.display='none';send.onclick=go;inp.onkeypress=e=>{if(e.key=='Enter')go()}
});

// وده السطر اللي هتحطه في index.html قبل </body>
// <script src="chatbot-widget.js"></script>
