var exports = {};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var popupAdd = document.querySelectorAll(".showPopupAdd");
var popupAddShow = document.querySelector(".add");
var popup = document.querySelectorAll(".popup");
var popupDollarShow = document.querySelector(".change");
var popupClose = document.querySelectorAll(".close");
var dollarPopup = document.querySelector("#dollarPopup");
var clearAll = document.querySelector("#clear");
var submit = document.querySelector("#submit");
var submitChange = document.querySelector("#submitChange");
var codeAdd = document.querySelector("input[name='addCode']");
var nameAdd = document.querySelector("input[name='addname']");
var rateinput = document.querySelector("input[name='rateinput']");
var priceAdd = document.querySelector("input[name='addprice']");
var LBAdd = document.querySelector("input[name='LB']");
var changeDollar = document.querySelector("input[name='changeDollar']");
var qrcode = document.querySelector("input[name='qrcode']");
var message = document.querySelector(".message");
var messagechange = document.querySelector(".messagechange");
var table = document.querySelector("#table");
var total = document.querySelector(".total");
var quantiter = document.querySelector(".quantiter");
popupAdd.forEach(function (item) {
    item.addEventListener("click", function () {
        popupAddShow.style.display = "flex";
    });
});
popupClose.forEach(function (item) {
    item.addEventListener("click", function () {
        popupAddShow.style.display = "none";
        popupDollarShow.style.display = "none";
    });
});
dollarPopup.addEventListener("click", function () {
    popupDollarShow.style.display = "flex";
});
popup.forEach(function (popupdiv) {
    popupdiv.addEventListener('click', function (event) {
        var article = popupdiv.querySelector(".inside");
        if (!article.contains(event.target)) {
            popupAddShow.style.display = "none";
            popupDollarShow.style.display = "none";
            codeAdd.value = "";
            nameAdd.value = "";
            priceAdd.value = "";
            changeDollar.value = "";
        }
    });
});
submit.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function () {
        var valuecode, valuename, valueprice, data, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    valuecode = codeAdd.value;
                    valuename = nameAdd.value;
                    valueprice = priceAdd.value;
                    if (valuecode === "" || valuename === "" || valueprice === "") {
                        alert("Enter all information");
                        return [2 /*return*/];
                    }
                    submit.classList.add("_load");
                    return [4 /*yield*/, fetch("/Api/add", {
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
                        })];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.text()];
                case 2:
                    result = _a.sent();
                    if (result === "Done") {
                        message.innerHTML = "Done";
                        message.style.display = "block";
                        codeAdd.value = "";
                        nameAdd.value = "";
                        priceAdd.value = "";
                        submit.classList.remove("_load");
                    }
                    else {
                        message.innerHTML = "Error";
                        message.style.display = "block";
                        submit.classList.remove("_load");
                    }
                    return [2 /*return*/];
            }
        });
    });
});
submitChange.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function () {
        var dollar, data, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dollar = changeDollar.value;
                    if (dollar === "") {
                        alert("Enter new Rate");
                        return [2 /*return*/];
                    }
                    submitChange.classList.add("_load");
                    return [4 /*yield*/, fetch("/Api/ChangeRate", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                Dollar: dollar,
                            })
                        })];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.text()];
                case 2:
                    result = _a.sent();
                    if (result === "Done") {
                        messagechange.innerHTML = "Done";
                        messagechange.style.display = "block";
                        changeDollar.value = "";
                        submitChange.classList.remove("_load");
                    }
                    else {
                        messagechange.innerHTML = "Error";
                        messagechange.style.display = "block";
                        submitChange.classList.remove("_load");
                    }
                    return [2 /*return*/];
            }
        });
    });
});
codeAdd.addEventListener("keypress", function (event) {
    return __awaiter(this, void 0, void 0, function () {
        var value, data, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(event.keyCode === 13)) return [3 /*break*/, 3];
                    value = codeAdd.value;
                    if (value === "")
                        return [2 /*return*/];
                    return [4 /*yield*/, fetch("/Api/fetch", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(value)
                        })];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    result = _a.sent();
                    if (result.name) {
                        nameAdd.value = result.name;
                        priceAdd.value = result.price;
                        LBAdd.checked = result.lbcheck;
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
});
qrcode.addEventListener("keypress", function (event) {
    return __awaiter(this, void 0, void 0, function () {
        var value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(event.keyCode === 13)) return [3 /*break*/, 2];
                    value = qrcode.value;
                    if (value === "")
                        return [2 /*return*/];
                    return [4 /*yield*/, AddRow(value)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
});
clearAll.addEventListener("click", function () {
    table.innerHTML = "";
    updateInfoPrice();
});
function Remove(guid) {
    var rowTable = document.querySelectorAll(".table-row");
    for (var i = 0; i < rowTable.length; i++) {
        var dataRow = rowTable[i].dataset.id;
        if (dataRow === guid) {
            rowTable[i].remove();
        }
    }
    updateInfoPrice();
}
function generateGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function updateInfoPrice() {
    var pricelist = document.querySelectorAll(".pricelist");
    var newprice = 0;
    for (var i = 0; i < pricelist.length; i++) {
        newprice += parseFloat(pricelist[i].innerHTML);
    }
    quantiter.innerHTML = pricelist.length.toString();
    total.innerHTML = newprice.toLocaleString("en-LB", {
        style: "currency",
        currency: "LBP",
        minimumFractionDigits: 0,
    });
}
function AutoBarcode(value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, AddRow(value)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function AddRow(value) {
    return __awaiter(this, void 0, void 0, function () {
        var data, result, id, newDiv, span1, span2, span3, rate, pricetolb, span4, button, svg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/Api/fetch", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(value.toString())
                    })];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    result = _a.sent();
                    if (result.name) {
                        id = generateGuid();
                        newDiv = document.createElement("div");
                        newDiv.className = "table-row";
                        newDiv.dataset.id = id;
                        span1 = document.createElement("span");
                        span1.innerHTML = result.qrCode;
                        span2 = document.createElement("span");
                        span2.innerHTML = result.name;
                        span3 = document.createElement("span");
                        span3.className = "pricelist";
                        if (result.lbcheck == true) {
                            span3.innerHTML = result.price;
                        }
                        else {
                            rate = rateinput.value;
                            pricetolb = (parseFloat(result.price) * parseFloat(rate));
                            span3.innerHTML = (Math.ceil(pricetolb / 1000) * 1000).toString();
                        }
                        span4 = document.createElement("span");
                        button = document.createElement("button");
                        button.className = "--button remove";
                        svg = '<svg class="--svg-fill" viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 18.1913 35.9336 C 18.1913 36.9649 19.0117 37.8086 20.0429 37.8086 C 20.5585 37.8086 21.0273 37.6211 21.3554 37.2696 L 27.9882 30.6133 L 34.6444 37.2696 C 34.9726 37.5977 35.4179 37.8086 35.9335 37.8086 C 36.9648 37.8086 37.8085 36.9649 37.8085 35.9336 C 37.8085 35.3945 37.5976 34.9727 37.2460 34.6211 L 30.6366 27.9883 L 37.2695 21.3320 C 37.6444 20.9571 37.8320 20.5352 37.8320 20.0430 C 37.8320 19.0118 37.0117 18.1680 35.9570 18.1680 C 35.4882 18.1680 35.0898 18.3555 34.7148 18.7305 L 27.9882 25.4102 L 21.3085 18.7539 C 20.9570 18.4258 20.5585 18.2149 20.0429 18.2149 C 19.0351 18.2149 18.1913 19.0352 18.1913 20.0664 C 18.1913 20.5586 18.4023 21.0039 18.7304 21.3555 L 25.3632 27.9883 L 18.7304 34.6445 C 18.4023 34.9961 18.1913 35.4180 18.1913 35.9336 Z"></path></svg>';
                        button.innerHTML = svg;
                        button.setAttribute("onclick", "Remove('" + id.toString() + "')");
                        span4.appendChild(button);
                        newDiv.appendChild(span1);
                        newDiv.appendChild(span2);
                        newDiv.appendChild(span3);
                        newDiv.appendChild(span4);
                        table.appendChild(newDiv);
                        qrcode.value = "";
                    }
                    else {
                        alert("product not found !");
                        qrcode.value = "";
                    }
                    updateInfoPrice();
                    return [2 /*return*/];
            }
        });
    });
}
{};


//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUM7d0JBRTFCLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBRTFCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3FCQUVyQjt5QkFBTTt3QkFDSCxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzt3QkFDN0IsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7cUJBQ3JCO29CQUVELGVBQWUsRUFBRSxDQUFDOzs7OztDQUNyQiIsImZpbGUiOiJzaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgfTtcclxuY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dQb3B1cEFkZFwiKTtcclxuY29uc3QgcG9wdXBBZGRTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cFwiKTtcclxuY29uc3QgcG9wdXBEb2xsYXJTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IHBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsb3NlXCIpO1xyXG5jb25zdCBkb2xsYXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9sbGFyUG9wdXBcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IGNsZWFyQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGVhclwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IHN1Ym1pdENoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0Q2hhbmdlXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBjb2RlQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2FkZENvZGUnXVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBuYW1lQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2FkZG5hbWUnXVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCByYXRlaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncmF0ZWlucHV0J11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgcHJpY2VBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nYWRkcHJpY2UnXVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBMQkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdMQiddXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGNoYW5nZURvbGxhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdjaGFuZ2VEb2xsYXInXVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBxcmNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncXJjb2RlJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZVwiKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbmNvbnN0IG1lc3NhZ2VjaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VjaGFuZ2VcIikgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGVcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3RhbFwiKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbmNvbnN0IHF1YW50aXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdGVyXCIpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcblxyXG5cclxucG9wdXBBZGQuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwb3B1cEFkZFNob3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfSk7XHJcbn0pXHJcbnBvcHVwQ2xvc2UuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwb3B1cEFkZFNob3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHBvcHVwRG9sbGFyU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxufSlcclxuZG9sbGFyUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBvcHVwRG9sbGFyU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn0pXHJcbnBvcHVwLmZvckVhY2goKHBvcHVwZGl2KSA9PiB7XHJcbiAgICBwb3B1cGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBwb3B1cGRpdi5xdWVyeVNlbGVjdG9yKFwiLmluc2lkZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBpZiAoIWFydGljbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSB7XHJcbiAgICAgICAgICAgIHBvcHVwQWRkU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHBvcHVwRG9sbGFyU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGNvZGVBZGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBuYW1lQWRkLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgcHJpY2VBZGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBjaGFuZ2VEb2xsYXIudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHZhbHVlY29kZSA9IGNvZGVBZGQudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVuYW1lID0gbmFtZUFkZC52YWx1ZTtcclxuICAgIGxldCB2YWx1ZXByaWNlID0gcHJpY2VBZGQudmFsdWU7XHJcblxyXG5cclxuICAgIGlmICh2YWx1ZWNvZGUgPT09IFwiXCIgfHwgdmFsdWVuYW1lID09PSBcIlwiIHx8IHZhbHVlcHJpY2UgPT09IFwiXCIpIHtcclxuICAgICAgICBhbGVydChcIkVudGVyIGFsbCBpbmZvcm1hdGlvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiX2xvYWRcIik7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFwiL0FwaS9hZGRcIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgUXJDb2RlOiB2YWx1ZWNvZGUsXHJcbiAgICAgICAgICAgIE5hbWU6IHZhbHVlbmFtZSxcclxuICAgICAgICAgICAgUHJpY2U6IHZhbHVlcHJpY2UsXHJcbiAgICAgICAgICAgIExCQ2hlY2s6IExCQWRkLmNoZWNrZWRcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGRhdGEudGV4dCgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IFwiRG9uZVwiKSB7XHJcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBcIkRvbmVcIjtcclxuICAgICAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgY29kZUFkZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgbmFtZUFkZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgcHJpY2VBZGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvYWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJFcnJvclwiO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnJlbW92ZShcIl9sb2FkXCIpO1xyXG4gICAgfVxyXG5cclxufSlcclxuc3VibWl0Q2hhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZG9sbGFyID0gY2hhbmdlRG9sbGFyLnZhbHVlO1xyXG5cclxuICAgIGlmIChkb2xsYXIgPT09IFwiXCIpIHtcclxuICAgICAgICBhbGVydChcIkVudGVyIG5ldyBSYXRlXCIpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0Q2hhbmdlLmNsYXNzTGlzdC5hZGQoXCJfbG9hZFwiKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCIvQXBpL0NoYW5nZVJhdGVcIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgRG9sbGFyOiBkb2xsYXIsXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciByZXN1bHQgPSBhd2FpdCBkYXRhLnRleHQoKTtcclxuXHJcbiAgICBpZiAocmVzdWx0ID09PSBcIkRvbmVcIikge1xyXG4gICAgICAgIG1lc3NhZ2VjaGFuZ2UuaW5uZXJIVE1MID0gXCJEb25lXCI7XHJcbiAgICAgICAgbWVzc2FnZWNoYW5nZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGNoYW5nZURvbGxhci52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgc3VibWl0Q2hhbmdlLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9hZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZWNoYW5nZS5pbm5lckhUTUwgPSBcIkVycm9yXCI7XHJcbiAgICAgICAgbWVzc2FnZWNoYW5nZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHN1Ym1pdENoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvYWRcIik7XHJcbiAgICB9XHJcblxyXG59KVxyXG5jb2RlQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSBjb2RlQWRkLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFwiL0FwaS9mZXRjaFwiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lm5hbWUpIHtcclxuICAgICAgICAgICAgbmFtZUFkZC52YWx1ZSA9IHJlc3VsdC5uYW1lO1xyXG4gICAgICAgICAgICBwcmljZUFkZC52YWx1ZSA9IHJlc3VsdC5wcmljZTtcclxuICAgICAgICAgICAgTEJBZGQuY2hlY2tlZCA9IHJlc3VsdC5sYmNoZWNrO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59KVxyXG5cclxucXJjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBxcmNvZGUudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBhd2FpdCBBZGRSb3codmFsdWUpO1xyXG5cclxuICAgIH1cclxufSlcclxuY2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0YWJsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIHVwZGF0ZUluZm9QcmljZSgpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gUmVtb3ZlKGd1aWQpIHtcclxuIFxyXG4gICAgbGV0IHJvd1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZS1yb3dcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dUYWJsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkYXRhUm93ID0gKHJvd1RhYmxlW2ldIGFzIEhUTUxEaXZFbGVtZW50KS5kYXRhc2V0LmlkO1xyXG5cclxuICAgICAgICBpZiAoZGF0YVJvdyA9PT0gZ3VpZCkge1xyXG4gICAgICAgICAgICByb3dUYWJsZVtpXS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSW5mb1ByaWNlKCk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR3VpZCgpIHtcclxuICAgIHJldHVybiBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsXHJcbiAgICAgICAgICAgIHYgPSBjID09IFwieFwiID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUluZm9QcmljZSgpIHtcclxuXHJcbiAgICBsZXQgcHJpY2VsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmljZWxpc3RcIik7XHJcbiAgICBsZXQgbmV3cHJpY2UgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmljZWxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXdwcmljZSArPSBwYXJzZUZsb2F0KHByaWNlbGlzdFtpXS5pbm5lckhUTUwpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHF1YW50aXRlci5pbm5lckhUTUwgPSBwcmljZWxpc3QubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICB0b3RhbC5pbm5lckhUTUwgPSBuZXdwcmljZS50b0xvY2FsZVN0cmluZyhcImVuLUxCXCIsIHtcclxuICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgICAgIGN1cnJlbmN5OiBcIkxCUFwiLFxyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCxcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBdXRvQmFyY29kZSh2YWx1ZSkge1xyXG5cclxuICAgIGF3YWl0IEFkZFJvdyh2YWx1ZSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFJvdyh2YWx1ZSlcclxue1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcIi9BcGkvZmV0Y2hcIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlLnRvU3RyaW5nKCkpXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdC5uYW1lKSB7XHJcbiAgICAgICAgbGV0IGlkID0gZ2VuZXJhdGVHdWlkKCk7XHJcbiAgICAgICAgdmFyIG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3RGl2LmNsYXNzTmFtZSA9IFwidGFibGUtcm93XCI7XHJcbiAgICAgICAgbmV3RGl2LmRhdGFzZXQuaWQgPSBpZDtcclxuXHJcbiAgICAgICAgdmFyIHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3BhbjEuaW5uZXJIVE1MID0gcmVzdWx0LnFyQ29kZTtcclxuXHJcbiAgICAgICAgdmFyIHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3BhbjIuaW5uZXJIVE1MID0gcmVzdWx0Lm5hbWU7XHJcblxyXG4gICAgICAgIHZhciBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4zLmNsYXNzTmFtZSA9IFwicHJpY2VsaXN0XCI7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sYmNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgc3BhbjMuaW5uZXJIVE1MID0gcmVzdWx0LnByaWNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJhdGUgPSByYXRlaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwcmljZXRvbGIgPSAocGFyc2VGbG9hdChyZXN1bHQucHJpY2UpICogcGFyc2VGbG9hdChyYXRlKSk7XHJcbiAgICAgICAgICAgIHNwYW4zLmlubmVySFRNTCA9IChNYXRoLmNlaWwocHJpY2V0b2xiIC8gMTAwMCkgKiAxMDAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNwYW40ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcIi0tYnV0dG9uIHJlbW92ZVwiO1xyXG5cclxuICAgICAgICB2YXIgc3ZnID0gJzxzdmcgY2xhc3M9XCItLXN2Zy1maWxsXCIgdmlld0JveD1cIjAgMCA1NiA1NlwiPjxwYXRoIGQ9XCJNIDEzLjc4NTEgNDkuNTc0MiBMIDQyLjIzODIgNDkuNTc0MiBDIDQ3LjEzNjYgNDkuNTc0MiA0OS41NzQzIDQ3LjEzNjcgNDkuNTc0MyA0Mi4zMDg2IEwgNDkuNTc0MyAxMy42OTE0IEMgNDkuNTc0MyA4Ljg2MzMgNDcuMTM2NiA2LjQyNTggNDIuMjM4MiA2LjQyNTggTCAxMy43ODUxIDYuNDI1OCBDIDguOTEwMSA2LjQyNTggNi40MjU3IDguODM5OCA2LjQyNTcgMTMuNjkxNCBMIDYuNDI1NyA0Mi4zMDg2IEMgNi40MjU3IDQ3LjE2MDIgOC45MTAxIDQ5LjU3NDIgMTMuNzg1MSA0OS41NzQyIFogTSAxMy44NTU0IDQ1LjgwMDggQyAxMS41MTE3IDQ1LjgwMDggMTAuMTk5MiA0NC41NTg2IDEwLjE5OTIgNDIuMTIxMSBMIDEwLjE5OTIgMTMuODc4OSBDIDEwLjE5OTIgMTEuNDQxNCAxMS41MTE3IDEwLjE5OTIgMTMuODU1NCAxMC4xOTkyIEwgNDIuMTY3OSAxMC4xOTkyIEMgNDQuNDg4MiAxMC4xOTkyIDQ1LjgwMDcgMTEuNDQxNCA0NS44MDA3IDEzLjg3ODkgTCA0NS44MDA3IDQyLjEyMTEgQyA0NS44MDA3IDQ0LjU1ODYgNDQuNDg4MiA0NS44MDA4IDQyLjE2NzkgNDUuODAwOCBaIE0gMTguMTkxMyAzNS45MzM2IEMgMTguMTkxMyAzNi45NjQ5IDE5LjAxMTcgMzcuODA4NiAyMC4wNDI5IDM3LjgwODYgQyAyMC41NTg1IDM3LjgwODYgMjEuMDI3MyAzNy42MjExIDIxLjM1NTQgMzcuMjY5NiBMIDI3Ljk4ODIgMzAuNjEzMyBMIDM0LjY0NDQgMzcuMjY5NiBDIDM0Ljk3MjYgMzcuNTk3NyAzNS40MTc5IDM3LjgwODYgMzUuOTMzNSAzNy44MDg2IEMgMzYuOTY0OCAzNy44MDg2IDM3LjgwODUgMzYuOTY0OSAzNy44MDg1IDM1LjkzMzYgQyAzNy44MDg1IDM1LjM5NDUgMzcuNTk3NiAzNC45NzI3IDM3LjI0NjAgMzQuNjIxMSBMIDMwLjYzNjYgMjcuOTg4MyBMIDM3LjI2OTUgMjEuMzMyMCBDIDM3LjY0NDQgMjAuOTU3MSAzNy44MzIwIDIwLjUzNTIgMzcuODMyMCAyMC4wNDMwIEMgMzcuODMyMCAxOS4wMTE4IDM3LjAxMTcgMTguMTY4MCAzNS45NTcwIDE4LjE2ODAgQyAzNS40ODgyIDE4LjE2ODAgMzUuMDg5OCAxOC4zNTU1IDM0LjcxNDggMTguNzMwNSBMIDI3Ljk4ODIgMjUuNDEwMiBMIDIxLjMwODUgMTguNzUzOSBDIDIwLjk1NzAgMTguNDI1OCAyMC41NTg1IDE4LjIxNDkgMjAuMDQyOSAxOC4yMTQ5IEMgMTkuMDM1MSAxOC4yMTQ5IDE4LjE5MTMgMTkuMDM1MiAxOC4xOTEzIDIwLjA2NjQgQyAxOC4xOTEzIDIwLjU1ODYgMTguNDAyMyAyMS4wMDM5IDE4LjczMDQgMjEuMzU1NSBMIDI1LjM2MzIgMjcuOTg4MyBMIDE4LjczMDQgMzQuNjQ0NSBDIDE4LjQwMjMgMzQuOTk2MSAxOC4xOTEzIDM1LjQxODAgMTguMTkxMyAzNS45MzM2IFpcIj48L3BhdGg+PC9zdmc+J1xyXG5cclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gc3ZnO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwiUmVtb3ZlKCdcIiArIGlkLnRvU3RyaW5nKCkgKyBcIicpXCIpO1xyXG4gICAgICAgIHNwYW40LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChzcGFuMSk7XHJcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHNwYW4yKTtcclxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoc3BhbjMpO1xyXG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChzcGFuNCk7XHJcblxyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcblxyXG4gICAgICAgIHFyY29kZS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcInByb2R1Y3Qgbm90IGZvdW5kICFcIik7XHJcbiAgICAgICAgcXJjb2RlLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJbmZvUHJpY2UoKTtcclxufSJdfQ==
