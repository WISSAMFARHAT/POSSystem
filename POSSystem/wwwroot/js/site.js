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
var generateQrCode = document.querySelector(".generate");
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
var open = document.querySelector("#open");
var qrcodeButton = document.querySelector("#qrcode");
var inside = document.querySelector(".inside-qr");
popupAdd.forEach(function (item) {
    item.addEventListener("click", function () {
        popupAddShow.style.display = "flex";
    });
});
popupClose.forEach(function (item) {
    item.addEventListener("click", function () {
        popupAddShow.style.display = "none";
        popupDollarShow.style.display = "none";
        generateQrCode.style.display = "none";
        codeAdd.value = "";
        nameAdd.value = "";
        priceAdd.value = "";
        changeDollar.value = "";
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
            generateQrCode.style.display = "none";
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
                        span2.className = "listName";
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
document.addEventListener("keydown", function (event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(event.key === "Escape")) return [3 /*break*/, 2];
                    return [4 /*yield*/, OpenCash()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (event.key === "Control") {
                        qrcode.focus();
                    }
                    if (!(event.key === "Delete")) return [3 /*break*/, 4];
                    table.innerHTML = "";
                    updateInfoPrice();
                    return [4 /*yield*/, OpenCash()];
                case 3:
                    _a.sent();
                    qrcode.focus();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
});
open.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, OpenCash()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
function OpenCash() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/CashDraswer", {
                        method: 'POST',
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
qrcodeButton.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            generateQrCode.style.display = "flex";
            return [2 /*return*/];
        });
    });
});
{};


//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUU7d0JBQ3pCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDbEI7eUJBRUcsQ0FBQSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQSxFQUF0Qix3QkFBc0I7b0JBRXRCLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNyQixlQUFlLEVBQUUsQ0FBQztvQkFDbEIscUJBQU0sUUFBUSxFQUFFLEVBQUE7O29CQUFoQixTQUFnQixDQUFDO29CQUNqQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7OztDQUd0QixDQUFDLENBQUM7QUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOzs7O3dCQUMzQixxQkFBTSxRQUFRLEVBQUUsRUFBQTs7b0JBQWhCLFNBQWdCLENBQUM7Ozs7O0NBRXBCLENBQUMsQ0FBQztBQUNILFNBQWUsUUFBUTs7Ozt3QkFDbEIscUJBQU0sS0FBSyxDQUFDLGNBQWMsRUFBRTt3QkFDekIsTUFBTSxFQUFFLE1BQU07cUJBRWpCLENBQUMsRUFBQTs7b0JBSEQsU0FHQyxDQUFDOzs7OztDQUNOO0FBRUQsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs7O1lBQ25DLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7OztDQThCekMsQ0FBQyxDQUFBIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB9O1xyXG5jb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd1BvcHVwQWRkXCIpO1xyXG5jb25zdCBwb3B1cEFkZFNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwXCIpO1xyXG5jb25zdCBwb3B1cERvbGxhclNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgZ2VuZXJhdGVRckNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmVyYXRlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCBwb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZVwiKTtcclxuY29uc3QgZG9sbGFyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvbGxhclBvcHVwXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBjbGVhckFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXJcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBzdWJtaXRDaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdENoYW5nZVwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgY29kZUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdhZGRDb2RlJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgbmFtZUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdhZGRuYW1lJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgcmF0ZWlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3JhdGVpbnB1dCddXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IHByaWNlQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2FkZHByaWNlJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgTEJBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nTEInXVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBjaGFuZ2VEb2xsYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nY2hhbmdlRG9sbGFyJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgcXJjb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3FyY29kZSddXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VcIikgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5jb25zdCBtZXNzYWdlY2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlY2hhbmdlXCIpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG90YWxcIikgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5jb25zdCBxdWFudGl0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXRlclwiKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbmNvbnN0IG9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IHFyY29kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXJjb2RlXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBpbnNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluc2lkZS1xclwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcblxyXG5wb3B1cEFkZC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBvcHVwQWRkU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9KTtcclxufSlcclxucG9wdXBDbG9zZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBvcHVwQWRkU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgcG9wdXBEb2xsYXJTaG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBnZW5lcmF0ZVFyQ29kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgY29kZUFkZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgbmFtZUFkZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgcHJpY2VBZGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGNoYW5nZURvbGxhci52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxufSlcclxuZG9sbGFyUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBvcHVwRG9sbGFyU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn0pXHJcbnBvcHVwLmZvckVhY2goKHBvcHVwZGl2KSA9PiB7XHJcbiAgICBwb3B1cGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBwb3B1cGRpdi5xdWVyeVNlbGVjdG9yKFwiLmluc2lkZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBpZiAoIWFydGljbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSB7XHJcbiAgICAgICAgICAgIHBvcHVwQWRkU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHBvcHVwRG9sbGFyU2hvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlUXJDb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgY29kZUFkZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIG5hbWVBZGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBwcmljZUFkZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNoYW5nZURvbGxhci52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdmFsdWVjb2RlID0gY29kZUFkZC52YWx1ZTtcclxuICAgIGxldCB2YWx1ZW5hbWUgPSBuYW1lQWRkLnZhbHVlO1xyXG4gICAgbGV0IHZhbHVlcHJpY2UgPSBwcmljZUFkZC52YWx1ZTtcclxuXHJcblxyXG4gICAgaWYgKHZhbHVlY29kZSA9PT0gXCJcIiB8fCB2YWx1ZW5hbWUgPT09IFwiXCIgfHwgdmFsdWVwcmljZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiRW50ZXIgYWxsIGluZm9ybWF0aW9uXCIpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJfbG9hZFwiKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCIvQXBpL2FkZFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBRckNvZGU6IHZhbHVlY29kZSxcclxuICAgICAgICAgICAgTmFtZTogdmFsdWVuYW1lLFxyXG4gICAgICAgICAgICBQcmljZTogdmFsdWVwcmljZSxcclxuICAgICAgICAgICAgTEJDaGVjazogTEJBZGQuY2hlY2tlZFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZGF0YS50ZXh0KCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJEb25lXCIpIHtcclxuICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9IFwiRG9uZVwiO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBjb2RlQWRkLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBuYW1lQWRkLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBwcmljZUFkZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9hZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBcIkVycm9yXCI7XHJcbiAgICAgICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvYWRcIik7XHJcbiAgICB9XHJcblxyXG59KVxyXG5zdWJtaXRDaGFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBkb2xsYXIgPSBjaGFuZ2VEb2xsYXIudmFsdWU7XHJcblxyXG4gICAgaWYgKGRvbGxhciA9PT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiRW50ZXIgbmV3IFJhdGVcIik7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRDaGFuZ2UuY2xhc3NMaXN0LmFkZChcIl9sb2FkXCIpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcIi9BcGkvQ2hhbmdlUmF0ZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBEb2xsYXI6IGRvbGxhcixcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGRhdGEudGV4dCgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IFwiRG9uZVwiKSB7XHJcbiAgICAgICAgbWVzc2FnZWNoYW5nZS5pbm5lckhUTUwgPSBcIkRvbmVcIjtcclxuICAgICAgICBtZXNzYWdlY2hhbmdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgY2hhbmdlRG9sbGFyLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBzdWJtaXRDaGFuZ2UuY2xhc3NMaXN0LnJlbW92ZShcIl9sb2FkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlY2hhbmdlLmlubmVySFRNTCA9IFwiRXJyb3JcIjtcclxuICAgICAgICBtZXNzYWdlY2hhbmdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc3VibWl0Q2hhbmdlLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9hZFwiKTtcclxuICAgIH1cclxuXHJcbn0pXHJcbmNvZGVBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNvZGVBZGQudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCIvQXBpL2ZldGNoXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubmFtZSkge1xyXG4gICAgICAgICAgICBuYW1lQWRkLnZhbHVlID0gcmVzdWx0Lm5hbWU7XHJcbiAgICAgICAgICAgIHByaWNlQWRkLnZhbHVlID0gcmVzdWx0LnByaWNlO1xyXG4gICAgICAgICAgICBMQkFkZC5jaGVja2VkID0gcmVzdWx0LmxiY2hlY2s7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn0pXHJcbnFyY29kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gcXJjb2RlLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgYXdhaXQgQWRkUm93KHZhbHVlKTtcclxuXHJcbiAgICB9XHJcbn0pXHJcbmNsZWFyQWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGFibGUuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICB1cGRhdGVJbmZvUHJpY2UoKTtcclxufSlcclxuZnVuY3Rpb24gUmVtb3ZlKGd1aWQpIHtcclxuXHJcbiAgICBsZXQgcm93VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLXJvd1wiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd1RhYmxlLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGxldCBkYXRhUm93ID0gKHJvd1RhYmxlW2ldIGFzIEhUTUxEaXZFbGVtZW50KS5kYXRhc2V0LmlkO1xyXG5cclxuICAgICAgICBpZiAoZGF0YVJvdyA9PT0gZ3VpZCkge1xyXG4gICAgICAgICAgICByb3dUYWJsZVtpXS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSW5mb1ByaWNlKCk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlR3VpZCgpIHtcclxuICAgIHJldHVybiBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsXHJcbiAgICAgICAgICAgIHYgPSBjID09IFwieFwiID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVJbmZvUHJpY2UoKSB7XHJcblxyXG4gICAgbGV0IHByaWNlbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpY2VsaXN0XCIpO1xyXG4gICAgbGV0IG5ld3ByaWNlID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpY2VsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3cHJpY2UgKz0gcGFyc2VGbG9hdChwcmljZWxpc3RbaV0uaW5uZXJIVE1MKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBxdWFudGl0ZXIuaW5uZXJIVE1MID0gcHJpY2VsaXN0Lmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgdG90YWwuaW5uZXJIVE1MID0gbmV3cHJpY2UudG9Mb2NhbGVTdHJpbmcoXCJlbi1MQlwiLCB7XHJcbiAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgICBjdXJyZW5jeTogXCJMQlBcIixcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXHJcbiAgICB9KTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBBdXRvQmFyY29kZSh2YWx1ZSkge1xyXG4gICAgYXdhaXQgQWRkUm93KHZhbHVlKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBBZGRSb3codmFsdWUpIHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCIvQXBpL2ZldGNoXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZS50b1N0cmluZygpKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG5cclxuICAgIGlmIChyZXN1bHQubmFtZSkge1xyXG4gICAgICAgIGxldCBpZCA9IGdlbmVyYXRlR3VpZCgpO1xyXG4gICAgICAgIHZhciBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld0Rpdi5jbGFzc05hbWUgPSBcInRhYmxlLXJvd1wiO1xyXG4gICAgICAgIG5ld0Rpdi5kYXRhc2V0LmlkID0gaWQ7XHJcblxyXG4gICAgICAgIHZhciBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4xLmlubmVySFRNTCA9IHJlc3VsdC5xckNvZGU7XHJcblxyXG4gICAgICAgIHZhciBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4yLmlubmVySFRNTCA9IHJlc3VsdC5uYW1lO1xyXG4gICAgICAgIHNwYW4yLmNsYXNzTmFtZSA9IFwibGlzdE5hbWVcIjtcclxuXHJcbiAgICAgICAgdmFyIHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3BhbjMuY2xhc3NOYW1lID0gXCJwcmljZWxpc3RcIjtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sYmNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgc3BhbjMuaW5uZXJIVE1MID0gcmVzdWx0LnByaWNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJhdGUgPSByYXRlaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwcmljZXRvbGIgPSAocGFyc2VGbG9hdChyZXN1bHQucHJpY2UpICogcGFyc2VGbG9hdChyYXRlKSk7XHJcbiAgICAgICAgICAgIHNwYW4zLmlubmVySFRNTCA9IChNYXRoLmNlaWwocHJpY2V0b2xiIC8gMTAwMCkgKiAxMDAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNwYW40ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcIi0tYnV0dG9uIHJlbW92ZVwiO1xyXG5cclxuICAgICAgICB2YXIgc3ZnID0gJzxzdmcgY2xhc3M9XCItLXN2Zy1maWxsXCIgdmlld0JveD1cIjAgMCA1NiA1NlwiPjxwYXRoIGQ9XCJNIDEzLjc4NTEgNDkuNTc0MiBMIDQyLjIzODIgNDkuNTc0MiBDIDQ3LjEzNjYgNDkuNTc0MiA0OS41NzQzIDQ3LjEzNjcgNDkuNTc0MyA0Mi4zMDg2IEwgNDkuNTc0MyAxMy42OTE0IEMgNDkuNTc0MyA4Ljg2MzMgNDcuMTM2NiA2LjQyNTggNDIuMjM4MiA2LjQyNTggTCAxMy43ODUxIDYuNDI1OCBDIDguOTEwMSA2LjQyNTggNi40MjU3IDguODM5OCA2LjQyNTcgMTMuNjkxNCBMIDYuNDI1NyA0Mi4zMDg2IEMgNi40MjU3IDQ3LjE2MDIgOC45MTAxIDQ5LjU3NDIgMTMuNzg1MSA0OS41NzQyIFogTSAxMy44NTU0IDQ1LjgwMDggQyAxMS41MTE3IDQ1LjgwMDggMTAuMTk5MiA0NC41NTg2IDEwLjE5OTIgNDIuMTIxMSBMIDEwLjE5OTIgMTMuODc4OSBDIDEwLjE5OTIgMTEuNDQxNCAxMS41MTE3IDEwLjE5OTIgMTMuODU1NCAxMC4xOTkyIEwgNDIuMTY3OSAxMC4xOTkyIEMgNDQuNDg4MiAxMC4xOTkyIDQ1LjgwMDcgMTEuNDQxNCA0NS44MDA3IDEzLjg3ODkgTCA0NS44MDA3IDQyLjEyMTEgQyA0NS44MDA3IDQ0LjU1ODYgNDQuNDg4MiA0NS44MDA4IDQyLjE2NzkgNDUuODAwOCBaIE0gMTguMTkxMyAzNS45MzM2IEMgMTguMTkxMyAzNi45NjQ5IDE5LjAxMTcgMzcuODA4NiAyMC4wNDI5IDM3LjgwODYgQyAyMC41NTg1IDM3LjgwODYgMjEuMDI3MyAzNy42MjExIDIxLjM1NTQgMzcuMjY5NiBMIDI3Ljk4ODIgMzAuNjEzMyBMIDM0LjY0NDQgMzcuMjY5NiBDIDM0Ljk3MjYgMzcuNTk3NyAzNS40MTc5IDM3LjgwODYgMzUuOTMzNSAzNy44MDg2IEMgMzYuOTY0OCAzNy44MDg2IDM3LjgwODUgMzYuOTY0OSAzNy44MDg1IDM1LjkzMzYgQyAzNy44MDg1IDM1LjM5NDUgMzcuNTk3NiAzNC45NzI3IDM3LjI0NjAgMzQuNjIxMSBMIDMwLjYzNjYgMjcuOTg4MyBMIDM3LjI2OTUgMjEuMzMyMCBDIDM3LjY0NDQgMjAuOTU3MSAzNy44MzIwIDIwLjUzNTIgMzcuODMyMCAyMC4wNDMwIEMgMzcuODMyMCAxOS4wMTE4IDM3LjAxMTcgMTguMTY4MCAzNS45NTcwIDE4LjE2ODAgQyAzNS40ODgyIDE4LjE2ODAgMzUuMDg5OCAxOC4zNTU1IDM0LjcxNDggMTguNzMwNSBMIDI3Ljk4ODIgMjUuNDEwMiBMIDIxLjMwODUgMTguNzUzOSBDIDIwLjk1NzAgMTguNDI1OCAyMC41NTg1IDE4LjIxNDkgMjAuMDQyOSAxOC4yMTQ5IEMgMTkuMDM1MSAxOC4yMTQ5IDE4LjE5MTMgMTkuMDM1MiAxOC4xOTEzIDIwLjA2NjQgQyAxOC4xOTEzIDIwLjU1ODYgMTguNDAyMyAyMS4wMDM5IDE4LjczMDQgMjEuMzU1NSBMIDI1LjM2MzIgMjcuOTg4MyBMIDE4LjczMDQgMzQuNjQ0NSBDIDE4LjQwMjMgMzQuOTk2MSAxOC4xOTEzIDM1LjQxODAgMTguMTkxMyAzNS45MzM2IFpcIj48L3BhdGg+PC9zdmc+J1xyXG5cclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gc3ZnO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwiUmVtb3ZlKCdcIiArIGlkLnRvU3RyaW5nKCkgKyBcIicpXCIpO1xyXG4gICAgICAgIHNwYW40LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChzcGFuMSk7XHJcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHNwYW4yKTtcclxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoc3BhbjMpO1xyXG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChzcGFuNCk7XHJcblxyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcblxyXG4gICAgICAgIHFyY29kZS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcInByb2R1Y3Qgbm90IGZvdW5kICFcIik7XHJcbiAgICAgICAgcXJjb2RlLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJbmZvUHJpY2UoKTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgYXdhaXQgT3BlbkNhc2goKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQ29udHJvbFwiKSB7XHJcbiAgICAgICAgcXJjb2RlLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJEZWxldGVcIikge1xyXG5cclxuICAgICAgICB0YWJsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHVwZGF0ZUluZm9QcmljZSgpO1xyXG4gICAgICAgIGF3YWl0IE9wZW5DYXNoKCk7XHJcbiAgICAgICAgcXJjb2RlLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxub3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgYXdhaXQgT3BlbkNhc2goKTtcclxuXHJcbn0pO1xyXG5hc3luYyBmdW5jdGlvbiBPcGVuQ2FzaCgpIHtcclxuICAgICBhd2FpdCBmZXRjaChcIi9DYXNoRHJhc3dlclwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnFyY29kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgZ2VuZXJhdGVRckNvZGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgLy9pbnNpZGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3ROYW1lXCIpO1xyXG4gICAgLy9jb25zdCBsaXN0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaWNlbGlzdFwiKTtcclxuICAgIC8vbGV0IG5hbWU9W107XHJcbiAgICAvL2xldCBwcmljZT1bXTtcclxuXHJcbiAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE5hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgIG5hbWUucHVzaChsaXN0TmFtZVtpXS5pbm5lckhUTUwpO1xyXG4gICAgLy8gICAgcHJpY2UucHVzaChsaXN0UHJpY2VbaV0uaW5uZXJIVE1MKTtcclxuXHJcbiAgICAvL31cclxuXHJcbiAgICAvL2NvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcIi9RcmNvZGVcIiwge1xyXG4gICAgLy8gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAvLyAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIC8vICAgIH0sXHJcbiAgICAvLyAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAvLyAgICAgICAgTmFtZTogbmFtZSxcclxuICAgIC8vICAgICAgICBQcmljZTogcHJpY2UsXHJcbiAgICAvLyAgICB9KVxyXG5cclxuICAgIC8vfSk7XHJcblxyXG4gICAgLy92YXIgcmVzdWx0ID1hd2FpdCAgZGF0YS50ZXh0KCk7XHJcblxyXG4gICAgLy9pZiAocmVzdWx0ICE9IFwiZXJyb3JcIikge1xyXG4gICAgLy8gICAgaW5zaWRlLmlubmVySFRNTCA9IHJlc3VsdDtcclxuXHJcbn0pIl19
