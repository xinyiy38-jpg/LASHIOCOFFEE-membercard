const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQKpI45beMdEW3UKVQR2CMu-FLwa8GLp0dLvpe4s_lQmsXOppRRIQ51FyMNWerJjxhkLRlduk5RgA6/pub?output=csv";


async function searchMember(){

    let id = document.getElementById("id").value.trim();

    let response = await fetch(sheetURL);

    let csv = await response.text();

    let rows = csv.split(/\r?\n(?=LS)/);

    let member = null;


    rows.forEach(row=>{

        let data = row.split(",");

        if(data[0] == id){

            member = data;

        }

    });


    if(member){

        document.getElementById("result").innerHTML = `

        客户：${member[1]}<br>

        会员编码：${member[0]}<br>

        套餐：${member[2]}<br><br>


        <b>已消费：${member[3]}/10杯</b><br>

        还差：${10-member[3]}杯获得赠杯

        <hr>

        <h3>消费记录</h3>

      ${member[4].replace(/"/g,"").replace(/\n/g,"<br>")}
        `;

    }else{

        document.getElementById("result").innerHTML =
        "未找到会员编号";

    }

}
