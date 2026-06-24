// ====== CROSSLIST AI - LISTING GENERATOR ENGINE ======
const WALLET_ADDRESS = "0xb4EbCFdc40e384E192a9E0eCC7cB50521DCc8f6A";

// ====== TEMPLATE ENGINE ======
const TITLE_TEMPLATES = {
  electronics: {
    US: ["{name} | {kw1} {kw2} with {kw3} - {feat1}, {feat2}, {feat3} for {use_case}","{name} - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case} Bundle","2026 Newest {name} | {kw1} {kw2} with {kw3}, {feat1} & {feat2}, {feat3} for {use_case}"],
    UK: ["{name} - {kw1} {kw2} with {kw3} - {feat1}, {feat2} & {feat3} for {use_case}","{name} | {kw1} {kw2} {kw3} | {feat1} {feat2} {feat3} | {use_case}"],
    JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}","{name} {kw1} {kw2}対応 {kw3}搭載 {feat1} {feat2} {feat3} {use_case}用"],
    DE: ["{name} mit {kw1} {kw2} und {kw3} - {feat1}, {feat2}, {feat3} f\u00fcr {use_case}","{name} - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case} im Angebot"]
  },
  home: {US: ["{name} for Home - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} - {use_case}"],UK: ["{name} - {kw1} {kw2} & {kw3} {feat1} {feat2} {feat3} - {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}用"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"]},
  pet: {US: ["{name} for Pets - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} - {use_case}"],UK: ["{name} - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} - {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}用"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} f\u00fcr {use_case}"]},
  beauty: {US: ["{name} - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} - {use_case}"],UK: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"]},
  outdoor: {US: ["{name} - {kw1} {kw2} with {kw3} {feat1} {feat2} {feat3} for {use_case}"],UK: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}用"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} f\u00fcr {use_case}"]},
  kitchen: {US: ["{name} - {kw1} {kw2} with {kw3} {feat1} {feat2} {feat3} - {use_case}"],UK: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}用"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"]},
  phone: {US: ["{name} - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} for {use_case}"],UK: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}用"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"]},
  fashion: {US: ["{name} - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} - {use_case}"],UK: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}用"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"]},
  toy: {US: ["{name} - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} - {use_case}"],UK: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}用"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"]},
  auto: {US: ["{name} - {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} - {use_case}"],UK: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"],JP: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}用"],DE: ["{name} {kw1} {kw2} {kw3} {feat1} {feat2} {feat3} {use_case}"]}
};

const USE_CASES = {
  electronics: {US:"Daily Use",UK:"Everyday Use",JP:"\u65e5\u5e38\u4f7f\u7528",DE:"T\u00e4glicher Gebrauch"},
  home:{US:"Home Organization",UK:"Home Organisation",JP:"\u5bb6\u5ead\u53ce\u7d0d",DE:"Haushaltsorganisation"},
  pet:{US:"Pet Care",UK:"Pet Care",JP:"\u30da\u30c3\u30c8\u30b1\u30a2",DE:"Haustierpflege"},
  beauty:{US:"Beauty Routine",UK:"Beauty Routine",JP:"\u7f8e\u5bb9\u30b1\u30a2",DE:"Sch\u00f6nheitspflege"},
  outdoor:{US:"Outdoor Adventures",UK:"Outdoor Adventures",JP:"\u30a2\u30a6\u30c8\u30c9\u30a2",DE:"Outdoor-Abenteuer"},
  kitchen:{US:"Kitchen Cooking",UK:"Kitchen Cooking",JP:"\u30ad\u30c3\u30c1\u30f3\u8abf\u7406",DE:"K\u00fcchenkochen"},
  phone:{US:"Mobile Accessories",UK:"Mobile Accessories",JP:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30af\u30bb\u30b5\u30ea\u30fc",DE:"Handyzubeh\u00f6r"},
  fashion:{US:"Fashion Style",UK:"Fashion Style",JP:"\u30d5\u30a1\u30c3\u30b7\u30e7\u30f3",DE:"Modestil"},
  toy:{US:"Kids Play",UK:"Children\u2019s Play",JP:"\u5b50\u4f9b\u306e\u904a\u3073",DE:"Kinderspiel"},
  auto:{US:"Car Care",UK:"Car Care",JP:"\u30ab\u30fc\u30b1\u30a2",DE:"Auto Pflege"}
};

const FEATURE_ADJECTIVES = {
  electronics:["Premium","High-Performance","Advanced","Professional","Ultra-Slim","Smart","Wireless","Portable","Durable","Fast-Charging"],
  home:["Space-Saving","Multifunctional","Eco-Friendly","Sturdy","Easy-to-Clean","Foldable","Lightweight","Modern","Compact","Premium"],
  pet:["Comfortable","Breathable","Waterproof","Adjustable","Soft","Durable","Reflective","Non-Slip","Washable","Safe"],
  beauty:["Professional","Gentle","Hypoallergenic","Long-Lasting","Waterproof","Portable","Rechargeable","Precision","Ergonomic","Luxury"],
  outdoor:["Waterproof","Lightweight","Durable","Compact","Foldable","Weather-Resistant","Anti-Slip","High-Visibility","Rust-Proof","Shockproof"],
  kitchen:["BPA-Free","Dishwasher-Safe","Heat-Resistant","Non-Stick","Stainless Steel","Eco-Friendly","Multifunctional","Space-Saving","Premium","Professional-Grade"],
  phone:["Tempered Glass","Shockproof","Ultra-Thin","Military-Grade","Wireless","Fast Charging","Anti-Scratch","Flexible","Magnetic","HD Clear"],
  fashion:["Trendy","Classic","Minimalist","Vintage","Handmade","Premium","Adjustable","Lightweight","Versatile","Eco-Friendly"],
  toy:["Educational","Interactive","Safe","Non-Toxic","Colorful","Creative","STEM","Montessori","Soft","Durable"],
  auto:["Heavy-Duty","All-Weather","Universal","Premium","Anti-Slip","Waterproof","UV-Proof","Easy-Install","Durable","Compact"]
};

const BULLET_TEMPLATES = {
  performance:["{adj} Performance: {feature_text} - engineered to deliver {benefit}. Experience {result} like never before.","Superior {adj} Technology: Built with {feature_text} that {benefit}. Perfect for {use_case}.","{adj} Power: {feature_text} provides {benefit}, ensuring {result} every time."],
  quality:["Premium Build Quality: Made from {adj} materials with {feature_text}. {benefit} guaranteed long-lasting use.","{adj} Construction: {feature_text} ensures {benefit}. Built to withstand {use_case}.","Durable Design: {feature_text} with {adj} craftsmanship. {benefit} - built for years of reliable use."],
  convenience:["Easy to Use: {feature_text} design makes it simple to {benefit}. No complicated setup required.","{adj} Convenience: {feature_text} allows you to {benefit} effortlessly. {result} in seconds.","User-Friendly Design: {feature_text} means you can {benefit} with zero hassle. {result}."],
  compatibility:["Wide Compatibility: Works seamlessly with {feature_text}. {benefit} across all major devices and platforms.","Universal Fit: {feature_text} designed to {benefit}. Compatible with {use_case} requirements.","Versatile Use: {feature_text} supports {benefit}. Perfect for {use_case} scenarios."],
  value:["Exceptional Value: Get {feature_text} plus {benefit} at an unbeatable price point. {result} without breaking the bank.","Complete Package: Includes {feature_text} for {benefit}. Everything you need for {use_case}.","Cost-Effective Solution: {feature_text} delivers {benefit} at a fraction of the cost of alternatives. {result}."]
};

const BACKEND_KEYWORD_PAIRS = [["best","premium"],["affordable","cheap"],["top rated","quality"],["new","2026"],["professional","home"],["gift","present"],["for men","for women"],["for adults","for kids"],["portable","compact"],["easy to use","user friendly"],["must have","essential"],["durable","long lasting"],["multi functional","versatile"],["trending","popular"],["bestseller","high quality"]];

function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}
function pickN(arr,n){const s=[...arr].sort(()=>Math.random()-0.5);return s.slice(0,Math.min(n,s.length))}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1)}

function getCategoryData(category,market){
  const k=category||"electronics";const t=TITLE_TEMPLATES[k]||TITLE_TEMPLATES.electronics;
  const m=t[market]||t.US;const u=(USE_CASES[k]||USE_CASES.electronics)[market]||"Daily Use";
  const a=FEATURE_ADJECTIVES[k]||FEATURE_ADJECTIVES.electronics;return{titleTemplates:m,useCase:u,adjectives:a}
}

function generateTitle(name,category,market,keywords,features){
  const d=getCategoryData(category,market);const k=keywords.split(",").map(x=>x.trim()).filter(Boolean);
  const f=features.split("\n").map(x=>x.trim()).filter(Boolean);const adj=d.adjectives;
  let t=pick(d.titleTemplates)
    .replace(/{name}/g,name).replace(/{kw1}/g,k[0]||name).replace(/{kw2}/g,k[1]||pick(adj))
    .replace(/{kw3}/g,k[2]||"Premium").replace(/{feat1}/g,f[0]||pick(adj))
    .replace(/{feat2}/g,f[1]||pick(adj)).replace(/{feat3}/g,f[2]||pick(adj))
    .replace(/{use_case}/g,d.useCase);
  return t.length>190?t.substring(0,187)+"...":t
}

function generateBullets(name,category,market,keywords,features){
  const d=getCategoryData(category,market);const k=keywords.split(",").map(x=>x.trim()).filter(Boolean);
  const f=features.split("\n").map(x=>x.trim()).filter(Boolean);
  const types=Object.keys(BULLET_TEMPLATES);const sel=pickN(types,5);
  const bullets=[];const used=new Set();
  for(let i=0;i<5;i++){
    const t=sel[i]||types[i%types.length];const tmp=pick(BULLET_TEMPLATES[t]);
    const adj=pick(d.adjectives);const feat=f[i]||adj+" "+name+" feature";
    const benefit=pick(["delivers outstanding results","saves you time and effort","provides unmatched quality","ensures reliable performance","offers exceptional convenience","maximizes your productivity","gives you peace of mind","simplifies your daily routine","enhances your experience","exceeds your expectations"]);
    const result=pick(["You\'ll wonder how you ever lived without it","The difference is immediately noticeable","Your satisfaction is guaranteed","You get exactly what you need","Your expectations will be exceeded","The quality speaks for itself"]);
    const bk=benefit.substring(0,10);if(used.has(bk))continue;used.add(bk);
    let b=tmp.replace(/{adj}/g,adj).replace(/{feature_text}/g,feat).replace(/{benefit}/g,benefit).replace(/{result}/g,result).replace(/{use_case}/g,d.useCase).replace(/{name}/g,name);
    bullets.push(b)
  }
  return bullets.slice(0,5)
}

function generateDescription(name,category,market,keywords,features,bullets,storeDomain){
  const d=getCategoryData(category,market);const k=keywords.split(",").map(x=>x.trim()).filter(Boolean);
  const f=features.split("\n").map(x=>x.trim()).filter(Boolean);
  const domainLine=storeDomain?"\n\n\ud83c\udf10 Visit our store: "+storeDomain+" for more amazing products!":"";
  return "Introducing the "+name+" - your ultimate solution for "+d.useCase+"!\\n\\nDesigned with "+pick(d.adjectives)+" technology and premium materials, the "+name+" delivers exceptional performance that transforms your "+d.useCase+" experience.\\n\\nWhy Choose "+name+"?\\n"+bullets.slice(0,3).map(b=>"\u2022 "+(b.split(":")[0]||b.substring(0,40)+"...")).join("\\n")+"\\n\\nWhether you\'re a professional or a beginner, the "+name+" is designed to meet all your needs. Its "+pick(d.adjectives)+" construction ensures long-lasting durability, while the "+pick(["intuitive","user-friendly","streamlined","efficient","innovative"])+" design makes it accessible to everyone.\\n\\nWhat\'s in the Box:\\n\u2022 1x "+name+"\\n\u2022 1x User Manual\\n\u2022 1x Premium Packaging\\n"+(f.length>2?"\u2022 "+f[0]+" Accessory Kit":"\u2022 Satisfaction Guarantee Card")+domainLine+"\\n\\nClick \'Add to Cart\' now and experience the "+name+" difference!"
}

function generateKeywords(name,category,market,keywords){
  const k=keywords.split(",").map(x=>x.trim()).filter(Boolean);const d=getCategoryData(category,market);
  const all=[...k,name,...d.adjectives.slice(0,3)];const pairs=pickN(BACKEND_KEYWORD_PAIRS,10);
  const r=[];
  for(const w of all)if(w.length>1)r.push(w.toLowerCase());
  for(const[a,b]of pairs)for(const w of all.slice(0,3)){r.push(a+" "+w);r.push(w+" "+b)}
  const mt={US:["amazon","prime","usa","free shipping"],UK:["amazon uk","prime eligible","british"],JP:["amazon jp","prime","\u65e5\u672c","\u65e5\u672c\u8a9e"],DE:["amazon de","prime","deutschland","versand"]};
  const terms=mt[market]||mt.US;
  for(const t of terms)for(const w of all.slice(0,2))r.push(w+" "+t);
  return[...new Set(r)].slice(0,100).join(", ")
}

function generateListing(data){
  const{productName,category,market,keywords,features,storeDomain}=data;
  const t=generateTitle(productName,category,market,keywords,features);
  const b=generateBullets(productName,category,market,keywords,features);
  const d=generateDescription(productName,category,market,keywords,features,b,storeDomain);
  const k=generateKeywords(productName,category,market,keywords);
  const vars=generateTitleVariants(productName,category,market,keywords,features);
  const score=scoreListing(t,productName,category);
  return{title:t,bullets:b,description:d,backendKeywords:k,variants:vars,score:score}
}

// ====== TITLE VARIANTS (AB TESTING) ======
function generateTitleVariants(name,category,market,keywords,features){
  const d=getCategoryData(category,market);const k=keywords.split(",").map(x=>x.trim()).filter(Boolean);
  const f=features.split("\n").map(x=>x.trim()).filter(Boolean);const adj=d.adjectives;
  const styles=[
    {t:"SEO\u538b\u6c34\u730e\u5957\u8def",map:{kw2:"Amazon",feat1:k[0]||adj[0],feat2:k[1]||adj[1],feat3:k[2]||adj[2]}},
    {t:"\u60c5\u611f\u5356\u70b9\u5957\u8def",map:{kw2:"Best",feat1:"Amazing "+adj[0],feat2:k[0]||adj[1],feat3:"Perfect"}},
    {t:"\u7cbe\u54c1\u5dee\u5f02\u5316\u5957\u8def",map:{kw2:"Premium",feat1:adj[0]+" Technology",feat2:adj[1]+" Design",feat3:"Latest"}}
  ];
  return styles.map(s=>{
    return d.titleTemplates[0]
      .replace(/{name}/g,name)
      .replace(/{kw1}/g,k[0]||name)
      .replace(/{kw2}/g,s.map.kw2)
      .replace(/{kw3}/g,k[2]||"Quality")
      .replace(/{feat1}/g,s.map.feat1)
      .replace(/{feat2}/g,s.map.feat2)
      .replace(/{feat3}/g,s.map.feat3)
      .replace(/{use_case}/g,d.useCase);
  }).map(t=>t.length>190?t.substring(0,187)+"...":t)
}

// ====== LISTING QUALITY SCORING ======
function scoreListing(title,name,category){
  const d=getCategoryData(category);let score=0;const notes=[];
  const l=title.length;
  if(l>=80&&l<=150){score+=25;notes.push("\u2705 \u6807\u9898\u957f\u5ea6\u4f18\u79c0(80-150\u5b57\u7b26)");}
  else if(l>=60&&l<=190){score+=15;notes.push("\u2714\ufe0f \u6807\u9898\u957f\u5ea6\u5408\u7402");}
  else{score+=5;notes.push("\u26a0\ufe0f \u6807\u9898\u957f\u5ea6\u5efa\u8bae\u8c03\u6574\u523080-150\u5b57\u7b26");}
  const hasName=title.toLowerCase().includes(name.toLowerCase().split(" ")[0]);
  if(hasName){score+=20;notes.push("\u2705 \u4ea7\u54c1\u540d\u79f0\u5df2\u5305\u542b\u5728\u6807\u9898\u4e2d");}
  else{score+=5;notes.push("\u26a0\ufe0f \u5efa\u8bae\u5c06\u4ea7\u54c1\u540d\u653e\u5165\u6807\u9898");}
  const adj=d.adjectives;
  const adjCount=adj.filter(a=>title.toLowerCase().includes(a.toLowerCase())).length;
  if(adjCount>=2){score+=20;notes.push("\u2705 \u5305\u542b\u591a\u4e2a\u5356\u70b9\u5f62\u5bb9\u8bcd");}
  else{score+=10;notes.push("\u2714\ufe0f \u53ef\u8003\u8651\u589e\u52a0\u66f4\u591a\u5356\u70b9\u5f62\u5bb9\u8bcd");}
  const hasNumbers=/\\d+/.test(title);
  if(hasNumbers){score+=15;notes.push("\u2705 \u5305\u542b\u6570\u5b57\uff08\u63d0\u5347\u70b9\u51fb\u7387\uff09");}
  else{notes.push("\u2714\ufe0f \u5efa\u8bae\u52a0\u5165\u6570\u5b57\uff08\u5982\u5bb9\u91cf\u3001\u5c3a\u5bf8\u3001\u5e74\u4efd\uff09");}
  const kwCount=(title.match(/\\b\\w{3,}\\b/g)||[]).length;
  if(kwCount>=8){score+=20;notes.push("\u2705 \u5bc6\u96c6\u5173\u952e\u8bcd\u5e03\u5c40\uff0cSEO\u4f18\u79c0");}
  else if(kwCount>=5){score+=10;notes.push("\u2714\ufe0f \u5173\u952e\u8bcd\u5e03\u5c40\u5408\u7402");}
  return{total:score,level:score>=80?"A":score>=60?"B":score>=40?"C":"D",notes:notes}
}

// ====== USAGE TRACKING ======
const USAGE_KEY="crosslist_usage";const UNLOCKED_KEY="crosslist_unlocked";
function getUsageCount(){return parseInt(localStorage.getItem(USAGE_KEY)||"0")}
function incrementUsage(){const c=getUsageCount()+1;localStorage.setItem(USAGE_KEY,c.toString());return c}
function isUnlocked(){return localStorage.getItem(UNLOCKED_KEY)==="true"}
function unlockAccess(){localStorage.setItem(UNLOCKED_KEY,"true")}

// ====== GLOBAL UI FUNCTIONS (accessible from initUI) ======
let toastTimer=null;
function showToast(msg,type){
  const t=document.getElementById("toast");if(!t)return;
  t.textContent=msg;t.className="toast show";if(type)t.classList.add(type);
  if(toastTimer)clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),3000)
}

function updateUsageUI(){
  const b=document.getElementById("usageBadge");if(!b)return;
  if(isUnlocked()){b.innerHTML='\uD83D\uDC8E \u65e0\u9650\u4f7f\u7528';b.style.borderColor='var(--success)';b.style.color='var(--success)';return}
  const r=Math.max(0,1-getUsageCount());b.innerHTML='\u5269\u4f59\u4f7f\u7528\uff1a<strong>'+r+'</strong> \u6b21'
}

function showOutput(result){
  const ob=document.getElementById("outputBody");if(!ob)return;
  const mNames={US:"\uD83C\uDDFA\uD83C\uDDF8 \u7f8e\u56fd",UK:"\uD83C\uDDEC\uD83C\uDDE7 \u82f1\u56fd",JP:"\uD83C\uDDEF\uD83C\uDDF5 \u65e5\u672c",DE:"\uD83C\uDDE9\uD83C\uDDEA \u5fb7\u56fd"};
  const cNames={electronics:"\u7535\u5b50\u4ea7\u54c1",home:"\u5bb6\u5c45\u7528\u54c1",pet:"\u5ba0\u7269\u7528\u54c1",beauty:"\u7f8e\u5986\u5de5\u5177",outdoor:"\u6237\u5916\u8fd0\u52a8",kitchen:"\u53a8\u623f\u7528\u54c1",phone:"\u624b\u673a\u914d\u4ef6",fashion:"\u65f6\u5c1a\u914d\u9970",toy:"\u73a9\u5177",auto:"\u6c7d\u8f66\u7528\u54c1"};
  const m=document.getElementById("market");const c=document.getElementById("category");
  const levelColors={A:"var(--success)",B:"var(--accent-light)",C:"orange",D:"#ff6b6b"};
  const levelLabels={A:"\u4f18\u79c0",B:"\u826f\u597d",C:"\u4e00\u822c",D:"\u5f85\u4f18\u5316"};
  const s=result.score;
  ob.innerHTML='<div class="output-result"><div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap"><span style="font-size:12px;padding:2px 8px;border-radius:4px;background:rgba(108,92,231,0.1);color:var(--accent-light)">'+(mNames[m?m.value:"US"]||"\uD83C\uDDFA\uD83C\uDDF8 \u7f8e\u56fd")+'</span><span style="font-size:12px;padding:2px 8px;border-radius:4px;background:rgba(0,230,118,0.1);color:var(--success)">'+(cNames[c?c.value:"electronics"]||"\u901a\u7528")+'</span><span style="font-size:12px;padding:2px 8px;border-radius:4px;background:rgba(255,193,7,0.1);color:'+levelColors[s.level]+'">\u2b50 \u8d28\u91cf\u7b49\u7ea7: '+s.level+' ('+levelLabels[s.level]+')</span></div>'+
    '<div class="output-section"><div class="output-section-label">\uD83D\uDCCC \u6807\u9898 (Title)</div><div class="output-section-content">'+result.title+'</div></div>'+
    '<div class="output-section"><div class="output-section-label">\uD83C\uDF1F AB\u6d4b\u8bd5\u6807\u9898\u53d8\u4f53</div>'+
    result.variants.map((v,i)=>'<div class="output-section-content" style="margin-bottom:4px;font-size:13px;background:rgba(108,92,231,0.03)">\u5f62\u5f0f'+(i+1)+': '+v+'</div>').join("")+'</div>'+
    '<div class="output-section"><div class="output-section-label">\u2705 \u4e94\u70b9\u5356\u70b9 (Bullet Points)</div>'+
    result.bullets.map(b=>'<div class="output-section-content" style="margin-bottom:6px">\u2022 '+b+'</div>').join("")+'</div>'+
    '<div class="output-section"><div class="output-section-label">\uD83D\uDCDD \u4ea7\u54c1\u63cf\u8ff0 (Description)</div><div class="output-section-content" style="font-size:13px">'+result.description+'</div></div>'+
    '<div class="output-section"><div class="output-section-label">\uD83D\uDD11 \u540e\u7aef\u5173\u952e\u8bcd (Search Terms)</div><div class="output-section-content" style="font-size:12px;color:var(--text-muted)">'+result.backendKeywords+'</div></div>'+
    '<div class="output-section"><div class="output-section-label">\uD83D\uDCCA \u4f18\u5316\u5efa\u8bae</div><div class="output-section-content" style="font-size:13px">'+
    s.notes.map(n=>'<div style="padding:2px 0">'+n+'</div>').join("")+'</div></div></div>';
  document.getElementById("copyAllBtn").disabled=false;
  document.getElementById("exportBtn").disabled=false
}

// ====== DEMO INIT ======
function initUI(){
  const result=generateListing({
    productName:"Wireless Bluetooth Earbuds",category:"electronics",market:"US",
    keywords:"wireless earbuds, noise cancelling, Bluetooth 5.3, water resistant, long battery",
    features:"HD Sound Quality\\n30hr Playtime\\nIPX7 Waterproof\\nComfort Fit\\nTouch Control",
    storeDomain:""
  });
  const ob=document.getElementById("outputBody");
  if(ob&&!ob.querySelector(".output-result")){showOutput(result);document.getElementById("copyAllBtn").disabled=true;document.getElementById("exportBtn").disabled=true}
  updateUsageUI()
}

// ====== DOM READY ======
document.addEventListener("DOMContentLoaded",function(){
  const form=document.getElementById("listingForm");const outputBody=document.getElementById("outputBody");
  const generateBtn=document.getElementById("generateBtn");const usageBadge=document.getElementById("usageBadge");
  const copyAllBtn=document.getElementById("copyAllBtn");const exportBtn=document.getElementById("exportBtn");
  const buyBtn=document.getElementById("buyBtn");const paymentModal=document.getElementById("paymentModal");
  const modalClose=document.getElementById("modalClose");

  form.addEventListener("submit",function(e){
    e.preventDefault();
    if(!isUnlocked()&&getUsageCount()>=1){paymentModal.classList.add("active");return}
    const pn=document.getElementById("productName").value.trim();const kw=document.getElementById("keywords").value.trim();
    if(!pn){showToast("\u8bf7\u586b\u5199\u4ea7\u54c1\u540d\u79f0","error");return}
    if(!kw){showToast("\u8bf7\u586b\u5199\u6838\u5fc3\u5173\u952e\u8bcd","error");return}
    generateBtn.disabled=true;generateBtn.innerHTML='<span class="spinner"></span> \u751f\u6210\u4e2d...';
    setTimeout(function(){
      try{
        const result=generateListing({
          productName:pn,category:document.getElementById("category").value,
          market:document.getElementById("market").value,
          keywords:kw,features:document.getElementById("features").value||"Premium Quality,Easy to Use,Durable Design",
          storeDomain:document.getElementById("storeDomain").value.trim()
        });
        showOutput(result);if(!isUnlocked())incrementUsage();updateUsageUI();showToast("\u2705 Listing\u751f\u6210\u6210\u529f\uff01","success")
      }catch(err){showToast("\u751f\u6210\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5","error")}
      generateBtn.disabled=false;generateBtn.innerHTML='\u2728 AI\u751f\u6210Listing'
    },800)
  });

  copyAllBtn.addEventListener("click",function(){
    const sections=outputBody.querySelectorAll(".output-section");
    let text="";
    sections.forEach(s=>{
      const label=s.querySelector(".output-section-label");
      const content=s.querySelectorAll(".output-section-content");
      if(label&&content.length>0){
        text+=label.textContent.trim()+"\\n";
        content.forEach(c=>{text+=c.textContent.trim()+"\\n"});
        text+="\\n"
      }
    });
    navigator.clipboard.writeText(text).then(()=>showToast("\u2705 \u5168\u90e8\u5185\u5bb9\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f","success")).catch(()=>{const ta=document.createElement("textarea");ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();showToast("\u2705 \u5df2\u590d\u5236","success")})
  });

  exportBtn.addEventListener("click",function(){
    const sections=outputBody.querySelectorAll(".output-section");
    let text="Amazon Listing - "+document.getElementById("productName").value.trim()+"\\n"+"=".repeat(50)+"\\n\\n";
    sections.forEach(s=>{
      const label=s.querySelector(".output-section-label");
      const content=s.querySelectorAll(".output-section-content");
      if(label&&content.length>0){
        text+=label.textContent.trim()+"\\n";
        content.forEach(c=>{text+=c.textContent.trim()+"\\n"});
        text+="\\n"
      }
    });
    const blob=new Blob([text],{type:"text/plain"});const url=URL.createObjectURL(blob);
    const a=document.createElement("a");a.href=url;a.download="listing_"+document.getElementById("productName").value.trim().replace(/\\s+/g,"_")+".txt";a.click();URL.revokeObjectURL(url);
    showToast("\u2705 \u6587\u4ef6\u5df2\u4e0b\u8f7d","success")
  });

  buyBtn.addEventListener("click",function(){paymentModal.classList.add("active")});
  modalClose.addEventListener("click",function(){paymentModal.classList.remove("active")});
  paymentModal.addEventListener("click",function(e){if(e.target===paymentModal)paymentModal.classList.remove("active")});
  
  // ====== SCREENSHOT UPLOAD + AUTO VERIFY ======
  const uploadArea=document.getElementById("uploadArea");
  const fileInput=document.getElementById("screenshotInput");
  const uploadStatus=document.getElementById("uploadStatus");
  
  uploadArea.addEventListener("click",function(){fileInput.click()});
  uploadArea.addEventListener("dragover",function(e){e.preventDefault();uploadArea.style.borderColor="var(--accent)";uploadArea.style.background="rgba(108,92,231,0.05)"});
  uploadArea.addEventListener("dragleave",function(){uploadArea.style.borderColor="var(--border)";uploadArea.style.background="transparent"});
  uploadArea.addEventListener("drop",function(e){e.preventDefault();uploadArea.style.borderColor="var(--border)";if(e.dataTransfer.files.length)handleScreenshot(e.dataTransfer.files[0])});
  fileInput.addEventListener("change",function(){if(this.files.length)handleScreenshot(this.files[0])});
  
  function handleScreenshot(file){
    uploadStatus.style.display="block";
    uploadStatus.innerHTML='<div style="text-align:center"><span class="spinner"></span> 正在识别付款截图...</div>';
    
    const reader=new FileReader();
    reader.onload=function(e){
      const imgData=e.target.result;
      
      // Try OCR with Tesseract
      if(typeof Tesseract!=="undefined"){
        Tesseract.recognize(imgData,"chi_sim+eng",{logger:function(m){if(m.status==="recognizing text"){uploadStatus.innerHTML='<div style="text-align:center"><span class="spinner"></span> 识别中... '+Math.round(m.progress*100)+"%</div>"}}})
        .then(function(r){
          const text=r.data.text;
          console.log("OCR result:",text);
          checkPaymentText(text,imgData)
        })
        .catch(function(){
          fallbackVerify(imgData)
        })
      }else{
        fallbackVerify(imgData)
      }
    };
    reader.readAsDataURL(file)
  }
  
  function checkPaymentText(text,imgData){
    // Very lenient check - any Chinese text = likely a payment screenshot
    const hasChinese=/[\u4e00-\u9fff]/.test(text);
    const hasNumbers=/\d+/.test(text);
    
    if(hasChinese||hasNumbers||hasPaymentRelated(text)){
      autoUnlock()
    }else{
      showRetry(text,imgData)
    }
  }
  
  function hasPaymentRelated(text){
    const keywords=/支付|微信|交易|金额|成功|完成|¥|￥|29|付款|转账|wechat|pay/i;
    return keywords.test(text)
  }
  
  function autoUnlock(){
    unlockAccess();
    uploadStatus.innerHTML='<div style="text-align:center;color:var(--success);font-size:16px;font-weight:600">✅ 验证通过！已自动开通无限权限 🎉<br><small style="color:var(--text-muted)">返回生成器即可无限使用</small></div>';
    setTimeout(function(){paymentModal.classList.remove("active");updateUsageUI()},2000)
  }
  
  function showRetry(text,imgData){
    uploadStatus.innerHTML='<div style="text-align:center"><p style="color:#ff6b6b">❌ 未能识别到付款信息</p><p style="font-size:13px;color:var(--text-muted);margin-top:4px">点击下方按钮确认支付后，自动开通</p><button class="btn btn-primary btn-sm" onclick="manualUnlock()" style="margin-top:8px">✅ 我已支付 ¥29.9，立即开通</button></div>'
  }
  
  function fallbackVerify(imgData){
    uploadStatus.innerHTML='<div style="text-align:center"><img src="'+imgData+'" style="max-width:200px;border-radius:4px;margin-bottom:8px"><p>请确认已支付 <strong>¥29.9</strong></p><button class="btn btn-primary btn-sm" onclick="manualUnlock()" style="margin-top:4px">✅ 确认已付款，开通</button></div>'
  }
  
  function manualUnlock(){
    unlockAccess();
    uploadStatus.innerHTML='<div style="text-align:center;color:var(--success);font-weight:600">🎉 已开通！感谢您的支持</div>';
    setTimeout(function(){paymentModal.classList.remove("active");updateUsageUI()},1500)
  }
  
  initUI()
});

window.WALLET_ADDRESS=WALLET_ADDRESS;window.generateListing=generateListing;window.isUnlocked=isUnlocked;window.unlockAccess=unlockAccess;

// ====== UNLOCK BY URL PARAMETER ======
(function(){
  const urlParams=new URLSearchParams(window.location.search);
  const unlockCode=urlParams.get("unlock");
  if(unlockCode==="crosslist2026"){
    unlockAccess();
    // Remove the param from URL without reloading
    const url=new URL(window.location.href);
    url.searchParams.delete("unlock");
    window.history.replaceState({},"",url.toString());
    showToast("\uD83C\uDF89 \u606d\u559c\uff01\u5df2\u89e3\u9501\u65e0\u9650\u4f7f\u7528\u6743\u9650\uff01","success");
    updateUsageUI()
  }
})();
