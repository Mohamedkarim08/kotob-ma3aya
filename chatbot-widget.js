<!-- بوت معايا - نسخة كاملة باللينكات -->
<style>
#ktbk-btn{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:#6c5ce7;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:28px;cursor:pointer;z-index:9999;box-shadow:0 4px 15px rgba(0,0,0,.3)}
#ktbk-box{position:fixed;bottom:90px;right:20px;width:360px;max-width:92vw;height:460px;background:white;border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,.2);display:none;flex-direction:column;z-index:9999;overflow:hidden;font-family:'Cairo',sans-serif}
#ktbk-head{background:#6c5ce7;color:white;padding:14px;font-weight:bold;display:flex;justify-content:space-between}
#ktbk-msgs{flex:1;padding:12px;overflow-y:auto;background:#f8f9fa}
.ktbk-m{margin:6px 0;padding:10px 14px;border-radius:12px;max-width:85%;line-height:1.5;white-space:pre-line}
.ktbk-b{background:white;box-shadow:0 1px 2px rgba(0,0,0,.08)}
.ktbk-u{background:#6c5ce7;color:white;margin-left:auto}
#ktbk-in{display:flex;padding:10px;border-top:1px solid #eee}
#ktbk-in input{flex:1;border:1px solid #ddd;border-radius:20px;padding:10px 14px;outline:none}
#ktbk-in button{background:#6c5ce7;color:white;border:none;border-radius:20px;padding:10px 16px;margin-right:8px;cursor:pointer}
.ktbk-link{color:#6c5ce7;font-weight:bold}
</style>
<div id="ktbk-btn">💬</div>
<div id="ktbk-box">
<div id="ktbk-head"><span>معايا 🤖</span><span id="ktbk-x" style="cursor:pointer">✕</span></div>
<div id="ktbk-msgs"><div class="ktbk-m ktbk-b">ازيك يا بطل! 👋
انا معايا مساعدك في كتبك معايا

تقدر تقولي:
📚 اسم الكتاب اللي عايزه
🔗 عايز لينك الموقع / تليجرام / واتساب
🆘 عندك مشكلة
📩 عايز تطلب كتاب

قولّي محتاج ايه؟</div></div>
<div id="ktbk-in"><input id="ktbk-input" placeholder="اكتب هنا..."><button id="ktbk-send">ابعت</button></div>
</div>
<script>
const LINKS={
site:"https://mohamedkarim08.github.io/kotob-ma3aya/",
telegram:"https://t.me/mrmohamedbooks",
support:"https://t.me/MohamedHelpDesk_bot",
request:"https://t.me/KotobkMaya_bot",
whatsapp:"https://chat.whatsapp.com/G017CD9YyCv8ygNaRcBX6A?s=cl&p=a&iam=2"
};
const BOOKS=[
{name:"الامتحان فيزياء تالتة ثانوي 2026",link:LINKS.site},
{name:"المعاصر انجليزي",link:LINKS.site},
{name:"كيان عربي",link:LINKS.site}
];
const btn=document.getElementById('ktbk-btn'),box=document.getElementById('ktbk-box'),x=document.getElementById('ktbk-x'),msgs=document.getElementById('ktbk-msgs'),inp=document.getElementById('ktbk-input'),send=document.getElementById('ktbk-send');
function add(t,w){let d=document.createElement('div');d.className='ktbk-m '+(w=='u'?'ktbk-u':'ktbk-b');d.innerText=t;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight}
function reply(q){
let qq=q.toLowerCase();
if(qq.includes("موقع")||qq.includes("لينك الموقع")||qq.includes("site")) return `لينك الموقع أهو يا نجم 👇\n${LINKS.site}\nادخل هتلاقي كل الكتب`;
if(qq.includes("واتساب")||qq.includes("whatsapp")||qq.includes("قناة الواتس")) return `قناة الواتساب بتاعتنا أهي ❤️\n${LINKS.whatsapp}\nتابعها عشان يوصلك الجديد`;
if(qq.includes("تليجرام")||qq.includes("تلجرام")||qq.includes("telegram")) return `قناة التليجرام أهي 👇\n${LINKS.telegram}\nعليها كل الكتب بسرعة`;
if(qq.includes("دعم")||qq.includes("مشكلة")||qq.includes("مساعدة")||qq.includes("support")) return `عندك مشكلة؟ كلم بوت الدعم الفني وهو هيحلهالك فوراً 🛠️\n${LINKS.support}`;
if(qq.includes("طلب")||qq.includes("عايز كتاب مش موجود")||qq.includes("اطلب")) return `عايز تطلب كتاب مش لاقيه؟ ابعت لبوت الطلبات وهو هيجيبهولك 📩\n${LINKS.request}`;
let f=BOOKS.filter(b=>b.name.toLowerCase().includes(qq)||qq.split(' ').some(w=>w.length>2&&b.name.toLowerCase().includes(w)));
if(f.length>0){let r="لقيتهولك يا بطل 😎\n";f.slice(0,3).forEach(b=>{r+=`📚 ${b.name}\n`});r+=`\nحمله من هنا: ${LINKS.site}`;return r;}
return `بص يا نجم، انا دورت بس مش لاقي "${q}" بالظبط 😅\n\nممكن تعمل كده:\n1- اكتب اسم المادة بس (فيزياء / انجليزي)\n2- أو اطلب الكتاب من هنا: ${LINKS.request}\n3- أو شوف كل الكتب على الموقع: ${LINKS.site}`;
}
function go(){let q=inp.value.trim();if(!q)return;add(q,'u');inp.value='';setTimeout(()=>add(reply(q),'b'),500)}
btn.onclick=()=>box.style.display='flex';x.onclick=()=>box.style.display='none';send.onclick=go;inp.onkeypress=e=>{if(e.key=='Enter')go()}
</script>
<!-- انتهى -->
