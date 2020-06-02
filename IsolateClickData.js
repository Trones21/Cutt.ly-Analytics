fetch("https://cutt.ly/jd-ITroneSI-stats").then((res)=>{
    return res.text();
}
).then((html)=>{
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    console.log(doc);
    let js = document.getElementsByTagName("script")[19];
    let clicks = js.innerText.match(/(?<=datasets:.+\n.+data:\s\[).+(?=\]\,\n)/g)[0].replace(/'|"|\s/g, '').split(",");
    let dates = js.innerText.match(/(?<=labels:\s\[).+(?=\]\,\n)/g)[0].replace(/'|\s/g, '').split(",");
    let dictionary = clicksArr.reduce((result,clickCount,index)=>{
        result[datesArr[index]] = clickCount;
        return result;
    }
    , {});
    //Data Regex
    //  /(?<=datasets:.+\n.+data:\s\[).+(?=\]\,\n)/g

    //Date Labels Regex
    //  /(?<=labels:\s\[).+(?=\]\,\n)/g
}
);

//document.getElementsByClassName("col-xs-12 col-sm-12 col-md-12 all_stats_index")[0].appendChild()


