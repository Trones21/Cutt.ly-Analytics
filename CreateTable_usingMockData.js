let testData = [{
    "link": "https://cutt.ly/FourCornerstones-stats",
    "clickData": {
        "28.05.2020": "2",
        "29.05.2020": "5",
        "": ""
    }
}, {
    "link": "https://cutt.ly/8yXdqJC-stats",
    "clickData": {
        "02.06.2020": "0",
        "": ""
    }
}, {
    "link": "https://cutt.ly/RejuvenationRoadmap-stats",
    "clickData": {
        "01.06.2020": "0",
        "02.06.2020": "1",
        "": ""
    }
}, {
    "link": "https://cutt.ly/jd-ITroneSI-stats",
    "clickData": {
        "21.05.2020": "9",
        "22.05.2020": "10",
        "23.05.2020": "9",
        "24.05.2020": "8",
        "25.05.2020": "9",
        "26.05.2020": "10",
        "27.05.2020": "6",
        "28.05.2020": "12",
        "29.05.2020": "5",
        "30.05.2020": "3",
        "31.05.2020": "1",
        "01.06.2020": "5",
        "02.06.2020": "4",
        "": ""
    }
}, {
    "link": "https://cutt.ly/LifeExtension-Europe-stats",
    "clickData": {
        "01.06.2020": "0",
        "02.06.2020": "2",
        "": ""
    }
}, {
    "link": "https://cutt.ly/RAADFest-stats",
    "clickData": {
        "07.05.2020": "3",
        "08.05.2020": "2",
        "11.05.2020": "1",
        "12.05.2020": "2",
        "13.05.2020": "1",
        "18.05.2020": "1",
        "19.05.2020": "1",
        "21.05.2020": "1",
        "22.05.2020": "1",
        "28.05.2020": "2",
        "30.05.2020": "1",
        "": ""
    }
}, {
    "link": "https://cutt.ly/Pluralsight-stats",
    "clickData": {
        "01.06.2020": "0",
        "02.06.2020": "1",
        "": ""
    }
}, {
    "link": "https://cutt.ly/lifespan-io-stats",
    "clickData": {
        "07.05.2020": "8",
        "08.05.2020": "8",
        "11.05.2020": "1",
        "12.05.2020": "7",
        "13.05.2020": "3",
        "14.05.2020": "4",
        "17.05.2020": "1",
        "18.05.2020": "7",
        "19.05.2020": "3",
        "20.05.2020": "3",
        "21.05.2020": "2",
        "22.05.2020": "1",
        "25.05.2020": "2",
        "26.05.2020": "1",
        "27.05.2020": "2",
        "28.05.2020": "3",
        "30.05.2020": "1",
        "31.05.2020": "1",
        "": ""
    }
}, {
    "link": "https://cutt.ly/SENS-stats",
    "clickData": {
        "07.05.2020": "3",
        "08.05.2020": "2",
        "11.05.2020": "1",
        "12.05.2020": "4",
        "13.05.2020": "1",
        "14.05.2020": "1",
        "19.05.2020": "2",
        "22.05.2020": "1",
        "25.05.2020": "1",
        "28.05.2020": "2",
        "": ""
    }
}, {
    "link": "https://cutt.ly/ITroneSI-stats",
    "clickData": {
        "21.05.2020": "4",
        "22.05.2020": "3",
        "23.05.2020": "2",
        "25.05.2020": "1",
        "26.05.2020": "1",
        "27.05.2020": "3",
        "28.05.2020": "4",
        "29.05.2020": "2",
        "30.05.2020": "2",
        "31.05.2020": "1",
        "02.06.2020": "3",
        "": ""
    }
}];
let minDate = new Date(2020,4,20)
let maxDate = new Date();

buildTable();

function buildTable() {

    let statsTable = document.createElement("table");
    //statsTable.appendChild(createHeaders());

    //Create Dates Row
    let datesRow = createDatesRow(minDate, maxDate);
    statsTable.appendChild(datesRow);

    for (let item of testData) {
        let row = document.createElement("tr");
        let linkName = document.createElement("td");
        linkName.innerText = item.link.split('/')[3].substr(0, item.link.split('/')[3].lastIndexOf('-'));
        row.appendChild(linkName)

        let datesRowArr = Array.from(datesRow.children).map((i)=>i.innerText);
        datesRowArr.shift();

        //Match Date to Item
        for (let date of datesRowArr) {
            let cell = document.createElement("td");
            cell.innertext = "N/A";
            //console.log(date);
            for (let[k,v] of Object.entries(item.clickData)) {
                if (date === k) {
                    console.log(date + " :: " + k)
                    cell.innerText = v;
                }
            }
            row.appendChild(cell);
        }
        statsTable.appendChild(row);

    }
    document.getElementsByClassName("content-current")[0].appendChild(statsTable);
}

function getDaysArray(start, end) {
    for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
}
;function createDatesRow(minDate, maxDate) {
    let dates = getDaysArray(minDate, maxDate).map((d)=>{
        let monthRaw = 1 + d.getMonth();
        let month = (monthRaw.toString().length < 2) ? "0" + monthRaw.toString() : monthRaw;
        return d.getDate() + "." + month + "." + d.getFullYear()
    }
    );
    let datesRow = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerText = "Link";
    datesRow.appendChild(cell);
    for (let date of dates) {
        let cell = document.createElement("td");
        cell.innerText = date;
        datesRow.appendChild(cell);
    }
    return datesRow;
}

function createHeaders() {
    let headerRow = document.createElement("tr");
    let dateHeader = document.createElement("th");
    let linkHeader = document.createElement("th");

    dateHeader.innerText = "Daily Clicks";
    linkHeader.innerText = "Links";

    headerRow.appendChild(linkHeader);
    headerRow.appendChild(dateHeader);

    return headerRow;
}

function matchTest(item, date) {

    for (let[k,v] of Object.entries(item.clickData)) {
        console.log()
        if (date.innerText === k) {
            console.log(date.innerText + " :: " + k)
            cell.innerText = v;
        }
    }
}
