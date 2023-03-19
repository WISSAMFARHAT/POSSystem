export { };
const popupAdd = document.querySelectorAll(".showPopupAdd");
const popupAddShow = document.querySelector(".add") as HTMLDivElement;
const popup = document.querySelectorAll(".popup");
const popupDollarShow = document.querySelector(".change") as HTMLDivElement;
const generateQrCode = document.querySelector(".generate") as HTMLDivElement;
const popupClose = document.querySelectorAll(".close");
const dollarPopup = document.querySelector("#dollarPopup") as HTMLButtonElement;
const clearAll = document.querySelector("#clear") as HTMLButtonElement;
const submit = document.querySelector("#submit") as HTMLButtonElement;
const submitChange = document.querySelector("#submitChange") as HTMLButtonElement;
const codeAdd = document.querySelector("input[name='addCode']") as HTMLInputElement;
const nameAdd = document.querySelector("input[name='addname']") as HTMLInputElement;
const rateinput = document.querySelector("input[name='rateinput']") as HTMLInputElement;
const priceAdd = document.querySelector("input[name='addprice']") as HTMLInputElement;
const LBAdd = document.querySelector("input[name='LB']") as HTMLInputElement;
const changeDollar = document.querySelector("input[name='changeDollar']") as HTMLInputElement;
const qrcode = document.querySelector("input[name='qrcode']") as HTMLInputElement;
const message = document.querySelector(".message") as HTMLSpanElement;
const messagechange = document.querySelector(".messagechange") as HTMLSpanElement;
const table = document.querySelector("#table") as HTMLDivElement;
const total = document.querySelector(".total") as HTMLSpanElement;
const quantiter = document.querySelector(".quantiter") as HTMLSpanElement;
const open = document.querySelector("#open") as HTMLButtonElement;
const qrcodeButton = document.querySelector("#qrcode") as HTMLButtonElement;
const inside = document.querySelector(".inside-qr") as HTMLDivElement;


popupAdd.forEach(item => {
    item.addEventListener("click", function () {
        popupAddShow.style.display = "flex";
    });
})
popupClose.forEach(item => {
    item.addEventListener("click", function () {
        popupAddShow.style.display = "none";
        popupDollarShow.style.display = "none";
        generateQrCode.style.display = "none";
        codeAdd.value = "";
        nameAdd.value = "";
        priceAdd.value = "";
        changeDollar.value = "";
    });
})
dollarPopup.addEventListener("click", function () {
    popupDollarShow.style.display = "flex";
})
popup.forEach((popupdiv) => {
    popupdiv.addEventListener('click', (event) => {
        const article = popupdiv.querySelector(".inside") as HTMLDivElement;
        if (!article.contains(event.target as Node)) {
            popupAddShow.style.display = "none";
            popupDollarShow.style.display = "none";
            generateQrCode.style.display = "none";
            codeAdd.value = "";
            nameAdd.value = "";
            priceAdd.value = "";
            changeDollar.value = "";
        }
    });

});
submit.addEventListener("click", async function () {
    let valuecode = codeAdd.value;
    let valuename = nameAdd.value;
    let valueprice = priceAdd.value;


    if (valuecode === "" || valuename === "" || valueprice === "") {
        alert("Enter all information");

        return;
    }

    submit.classList.add("_load");

    const data = await fetch("/Api/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            QrCode: valuecode,
            Name: valuename,
            Price: valueprice,
            LBCheck: LBAdd.checked
        })
    });

    var result = await data.text();

    if (result === "Done") {
        message.innerHTML = "Done";
        message.style.display = "block";
        codeAdd.value = "";
        nameAdd.value = "";
        priceAdd.value = "";
        submit.classList.remove("_load");
    } else {
        message.innerHTML = "Error";
        message.style.display = "block";
        submit.classList.remove("_load");
    }

})
submitChange.addEventListener("click", async function () {
    let dollar = changeDollar.value;

    if (dollar === "") {
        alert("Enter new Rate");

        return;
    }

    submitChange.classList.add("_load");

    const data = await fetch("/Api/ChangeRate", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Dollar: dollar,
        })
    });

    var result = await data.text();

    if (result === "Done") {
        messagechange.innerHTML = "Done";
        messagechange.style.display = "block";
        changeDollar.value = "";
        submitChange.classList.remove("_load");
    } else {
        messagechange.innerHTML = "Error";
        messagechange.style.display = "block";
        submitChange.classList.remove("_load");
    }

})
codeAdd.addEventListener("keypress", async function (event) {
    if (event.keyCode === 13) {

        let value = codeAdd.value;

        if (value === "")
            return;

        const data = await fetch("/Api/fetch", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value)
        });

        var result = await data.json();

        if (result.name) {
            nameAdd.value = result.name;
            priceAdd.value = result.price;
            LBAdd.checked = result.lbcheck;
        }


    }
})
qrcode.addEventListener("keypress", async function (event) {

    if (event.keyCode === 13) {
        let value = qrcode.value;

        if (value === "")
            return;

        await AddRow(value);

    }
})
clearAll.addEventListener("click", function () {

    table.innerHTML = "";

    updateInfoPrice();
})
function Remove(guid) {

    let rowTable = document.querySelectorAll(".table-row");

    for (let i = 0; i < rowTable.length; i++) {

        let dataRow = (rowTable[i] as HTMLDivElement).dataset.id;

        if (dataRow === guid) {
            rowTable[i].remove();
        }
    }

    updateInfoPrice();

}
function generateGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function updateInfoPrice() {

    let pricelist = document.querySelectorAll(".pricelist");
    let newprice = 0;
    for (let i = 0; i < pricelist.length; i++) {
        newprice += parseFloat(pricelist[i].innerHTML)
    }


    quantiter.innerHTML = pricelist.length.toString();
    total.innerHTML = newprice.toLocaleString("en-LB", {
        style: "currency",
        currency: "LBP",
        minimumFractionDigits: 0,
    });
}
async function AutoBarcode(value) {
    await AddRow(value);
}
async function AddRow(value) {

    const data = await fetch("/Api/fetch", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value.toString())
    });

    var result = await data.json();

    if (result.name) {
        let id = generateGuid();
        var newDiv = document.createElement("div");
        newDiv.className = "table-row";
        newDiv.dataset.id = id;

        var span1 = document.createElement("span");
        span1.innerHTML = result.qrCode;

        var span2 = document.createElement("span");
        span2.innerHTML = result.name;
        span2.className = "listName";

        var span3 = document.createElement("span");
        span3.className = "pricelist";

        if (result.lbcheck == true) {
            span3.innerHTML = result.price;
        }
        else {
            let rate = rateinput.value;
            let pricetolb = (parseFloat(result.price) * parseFloat(rate));
            span3.innerHTML = (Math.ceil(pricetolb / 1000) * 1000).toString();
        }

        var span4 = document.createElement("span");

        var button = document.createElement("button");
        button.className = "--button remove";

        var svg = '<svg class="--svg-fill" viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 18.1913 35.9336 C 18.1913 36.9649 19.0117 37.8086 20.0429 37.8086 C 20.5585 37.8086 21.0273 37.6211 21.3554 37.2696 L 27.9882 30.6133 L 34.6444 37.2696 C 34.9726 37.5977 35.4179 37.8086 35.9335 37.8086 C 36.9648 37.8086 37.8085 36.9649 37.8085 35.9336 C 37.8085 35.3945 37.5976 34.9727 37.2460 34.6211 L 30.6366 27.9883 L 37.2695 21.3320 C 37.6444 20.9571 37.8320 20.5352 37.8320 20.0430 C 37.8320 19.0118 37.0117 18.1680 35.9570 18.1680 C 35.4882 18.1680 35.0898 18.3555 34.7148 18.7305 L 27.9882 25.4102 L 21.3085 18.7539 C 20.9570 18.4258 20.5585 18.2149 20.0429 18.2149 C 19.0351 18.2149 18.1913 19.0352 18.1913 20.0664 C 18.1913 20.5586 18.4023 21.0039 18.7304 21.3555 L 25.3632 27.9883 L 18.7304 34.6445 C 18.4023 34.9961 18.1913 35.4180 18.1913 35.9336 Z"></path></svg>'

        button.innerHTML = svg;
        button.setAttribute("onclick", "Remove('" + id.toString() + "')");
        span4.appendChild(button);

        newDiv.appendChild(span1);
        newDiv.appendChild(span2);
        newDiv.appendChild(span3);
        newDiv.appendChild(span4);

        table.appendChild(newDiv);

        qrcode.value = "";

    } else {
        alert("product not found !");
        qrcode.value = "";
    }

    updateInfoPrice();
}
document.addEventListener("keydown", async function (event: KeyboardEvent) {

    if (event.key === "Escape") {
        await OpenCash();
    }
    if (event.key === "Control") {
        qrcode.focus();
    }

    if (event.key === "Delete") {

        table.innerHTML = "";
        updateInfoPrice();
        await OpenCash();
        qrcode.focus();
    }

});
open.addEventListener("click", async function () {
    await OpenCash();

});
async function OpenCash() {
     await fetch("/CashDraswer", {
        method: 'POST',

    });
}

qrcodeButton.addEventListener("click", async function () {
    generateQrCode.style.display = "flex";
    //inside.innerHTML = "";
    //const listName = document.querySelectorAll(".listName");
    //const listPrice = document.querySelectorAll(".pricelist");
    //let name=[];
    //let price=[];

    //for (let i = 0; i < listName.length; i++) {
    //    name.push(listName[i].innerHTML);
    //    price.push(listPrice[i].innerHTML);

    //}

    //const data = await fetch("/Qrcode", {
    //    method: 'POST',
    //    headers: {
    //        'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify({
    //        Name: name,
    //        Price: price,
    //    })

    //});

    //var result =await  data.text();

    //if (result != "error") {
    //    inside.innerHTML = result;

})