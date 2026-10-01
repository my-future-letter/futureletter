import {decryptLetter} from './security.js';
const bundle=window.__MY_FUTURE_LETTER__;
const $=s=>document.querySelector(s);
$('#unlock').onclick=async()=>{const p=$('#password').value;$('#msg').textContent='';try{const data=await decryptLetter(bundle,p);$('#locked').classList.add('hidden');const view=$('#letter');view.classList.remove('hidden');$('#title').textContent=data.title;$('#author').textContent=data.author||'A Future Letter';$('#future').textContent=data.futureDate||'';$('#content').innerHTML=data.html;document.title=`${data.title} — My Future Letter`}catch(e){$('#msg').textContent='Incorrect password. Please try again.'}};
$('#password').onkeydown=e=>{if(e.key==='Enter')$('#unlock').click()};
