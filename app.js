
// 后期替换成Google Sheet API地址即可
const members = {
"C001028":{
name:"王小姐",
package:"10杯充值卡",
used:3,
records:[
"2026-08-30 14:30 购买1杯",
"2026-08-28 10:20 购买1杯",
"2026-08-25 16:40 购买1杯"
]
},
"C001029":{
name:"李先生",
package:"10杯充值卡",
used:5,
records:[
"2026-08-30 15:00 购买1杯"
]
}
};

function searchMember(){
let id=document.getElementById("id").value.trim();
let m=members[id];

if(!m){
document.getElementById("result").innerHTML="未找到会员编号";
return;
}

let history=m.records.map(x=>"<p>"+x+"</p>").join("");

document.getElementById("result").innerHTML=
`
客户：${m.name}<br>
编号：${id}<br>
套餐：${m.package}<br><br>

<b>已消费：${m.used}/10杯</b><br>
还差：${10-m.used}杯领取赠杯

<hr>

<h3>消费记录</h3>
${history}
`;
}
