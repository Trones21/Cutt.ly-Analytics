let minDate = new Date();
let maxDate = new Date();
let fullData = []; 

let links = Array.from(document.getElementsByClassName("short_url_l")).map((i)=> i.innerText);
let reqCount = links.length;
for(let link of links){
    link = link.trim() + "-stats";
    getClickData(link);

}

setTimeout(() => {
  buildTable();
  console.log(fullData);
},4000);


function getClickData(link)
{
fetch(link).then((res)=>{
    return res.text();
}
).then((html)=>{
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let js = doc.getElementsByTagName("script")[17];
    let clicksArr = js.innerText.match(/(?<=datasets:.+\n.+data:\s\[).+(?=\]\,\n)/g)[0].replace(/'|"|\s/g, '').split(",");
    let datesArr = js.innerText.match(/(?<=labels:\s\[).+(?=\]\,\n)/g)[0].replace(/'|\s/g, '').split(",");
    let dictionary = clicksArr.reduce((result,clickCount,index)=>{
        result[datesArr[index]] = clickCount;
        return result;
    }
    , {});
    for(let [k, v] of Object.entries(dictionary)){
        //dd.mm.yyyy
        let dateParts = k.split(".");
        //Month index -- This is important!
        let thisDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        if (thisDate < minDate){
            minDate = thisDate;
        }      
    }
 fullData.push({link: link, clickData: dictionary}) 

reqCount += 1;
}
);
}
