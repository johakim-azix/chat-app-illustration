const INCOMING_MSG_TXT_PLACE_HOLDER = "<div id=\"view-template\"  class=\"msg-item incoming placeholder\">\n" +
    "                                       <span></span>\n" +
    "                                       <div class=\"msg\">\n" +
    "                                           <div></div>\n" +
    "                                           <div></div>\n" +
    "                                       </div>\n" +
    "                                  </div>"

const INCOMING_MSG_TXT = "<div id=\"view-template\" class=\"msg-item incoming\">\n" +
    "                        <span></span>\n" +
    "                        <p class=\"msg\"></p>\n" +
    "                     </div>"

const OUTGOING_MSG_TXT = "<div id=\"view-template\" class=\"msg-item outgoing\">\n" +
    "                         <span></span>\n" +
    "                         <p class=\"msg\"></p>\n" +
    "                     </div>"

const OUTGOING_IMG_MSG_ITEM = "<div id=\"view-template\" class=\"msg-item outgoing\">\n" +
    "                            <span></span>\n" +
    "                            <div class=\"images\" >\n" +
    "                                <div class=\"grid\">\n" +
    "                                    <div class=\"item\">\n" +
    "                                        <img src=\"images/dog-image-1.jpg\" alt=\"\">\n" +
    "                                    </div>\n" +
    "                                    <div class=\"item\">\n" +
    "                                        <img src=\"images/dog-image-2.jpg\" alt=\"\">\n" +
    "                                    </div>\n" +
    "                                    <div class=\"item\">\n" +
    "                                        <img src=\"images/dog-image-3.jpg\" alt=\"\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                        </div>"

const OUTGOING_IMG_MSG_ITEM_PLACE_HOLDER = "<div id=\"view-template\" class=\"msg-item outgoing placeholder\">\n" +
    "                            <span></span>\n" +
    "                            <div class=\"images\" >\n" +
    "                                <div class=\"grid\">\n" +
    "                                    <div class=\"item\">\n" +
    "                                        <div class=\"cover\">\n" +
    "                                            <div class=\"load-indicator\"></div>\n" +
    "                                        </div>\n" +
    "                                        <img src=\"images/dog-image-1.jpg\" alt=\"\">\n" +
    "                                    </div>\n" +
    "                                    <div class=\"item\">\n" +
    "                                        <div class=\"cover\">\n" +
    "                                            <div class=\"load-indicator\"></div>\n" +
    "                                        </div>\n" +
    "                                        <img src=\"images/dog-image-2.jpg\" alt=\"\">\n" +
    "                                    </div>\n" +
    "                                    <div class=\"item\">\n" +
    "                                        <div class=\"cover\">\n" +
    "                                            <div class=\"load-indicator\"></div>\n" +
    "                                        </div>\n" +
    "                                        <img src=\"images/dog-image-3.jpg\" alt=\"\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                        </div>"

const INCOMING_PRICING_ITEM_PLACE_HOLDER = "<div id=\"view-template\" class=\"msg-item incoming placeholder\">\n" +
    "                            <div class=\"pricing-item\">\n" +
    "                                <div class=\"radio\" style=\"\"></div>\n" +
    "                                <small>30 minute walk</small>\n" +
    "                                <strong>$29</strong>\n" +
    "                            </div>\n" +
    "                        </div>"

const INCOMING_PRICING_ITEM = "<div id=\"view-template\" class=\"msg-item incoming \">\n" +
    "                            <div class=\"pricing-item\">\n" +
    "                                <div class=\"radio\"></div>\n" +
    "                                <small></small>\n" +
    "                                <strong></strong>\n" +
    "                            </div>\n" +
    "                        </div>"

const MSG_FIELD_SENTENCE_ITEM = "<div id='sentence-view-template' class='msg-field-sentence-item'>" +
    "<div class='content'></div>" +
    "<div class='mask'></div>" +
    "</div>"

let msgQueue = null

document.addEventListener("DOMContentLoaded", () => {
    msgQueue = document.getElementsByClassName("queue")[0];
    setTimeout(() => {
            startMsgQueueAnimation()
        },
        2000
    )
})

function startMsgQueueAnimation() {
    // first msg incoming Msg Txt Placeholder animation
    renderIncomingMsgTxtItemPlaceHolder()

    //first incoming msg txt item animation
    setTimeout(() => {
            renderIncomingMsgTxtItem("That sound great. i'd be happy to discuss more.")
        },
        1500
    )

    // second msg incoming Msg Txt Placeholder animation
    setTimeout(() => {
            renderIncomingMsgTxtItemPlaceHolder()
        },
        2500
    )

    //second incoming msg txt item animation
    setTimeout(() => {
            renderIncomingMsgTxtItem("Could you send over some pictures of your dog. please ?")
        },
        4000
    )


    //the image bottom sheet animation
    setTimeout(() => {
        simulateClickOnImageSelector()
        showBottomSheetBackDrop()
        showBottomSheet()
    }, 5000)

    //first image selection animation
    let imageGridItemClickableCovers = document.getElementsByClassName("clickable-cover")
    let imageGridItemSelectableCovers = document.getElementsByClassName("selectable-cover")

    setTimeout(() => { //todo : the click
        imageGridItemClickableCovers[0].classList.add("image-clickable-cover-clicked")
    }, 1000)

    setTimeout(() => { //todo : the select
        imageGridItemSelectableCovers[0].classList.add("selectable-cover-click-selected")
    }, 7200)


    //second image selection animation
    setTimeout(() => { //todo : the click
        imageGridItemClickableCovers[1].classList.add("image-clickable-cover-clicked")
    }, 8000)

    setTimeout(() => { //todo : the select
        imageGridItemSelectableCovers[1].classList.add("selectable-cover-click-selected")
    }, 8200)

    //third image selection animation
    setTimeout(() => { //todo : the click
        imageGridItemClickableCovers[2].classList.add("image-clickable-cover-clicked")
    }, 9000)

    setTimeout(() => { //todo : the select
        imageGridItemSelectableCovers[2].classList.add("selectable-cover-click-selected")
    }, 9200)


    //simulate a click on the send btn
    setTimeout(() => {
        document.getElementById("btn-send-images").classList.add("control-clicked")
    }, 10000)

    //queue image upload animation
    setTimeout(() => {
        renderOutgoingImageItemPlaceHolder()
    }, 10200)

    //hide the bottom sheet
    setTimeout(() => {
        hideBottomSheet()
        hideBottomSheetBackDrop()
    }, 11000)

    //start queue image upload animation
    setTimeout(() => {
        renderOutgoingImageItem()
    }, 14000)

    setTimeout(() => {
        firstOutgoingMsgtypingAnimation(["Here are few pictures. ", " She'is a happy girl."])
    }, 14000)

    setTimeout(() => {
        secondOutgoingMsgtypingAnimation(["Can you make it?"])
    }, 20000)


    //wait 21s display the third incoming message placeholderg
    setTimeout(() => {
            renderIncomingMsgTxtItemPlaceHolder()
        },
        24000
    )

    //wait 25.5s then add an incomming msh txt item
    setTimeout(() => {
            renderIncomingMsgTxtItem("She looks so happy, the time we discussed works.How long should i take her out for?")
        },
        25500
    )

    //animate last pricing items
    setTimeout(()=>{
        renderIncomingPricingItemPlaceHolder()
    }, 27000)

    setTimeout(()=>{
        renderIncomingPricingItem("30 minute walk", "$29")
    }, 29000)

    setTimeout(()=>{
        renderIncomingPricingItemPlaceHolder()
    }, 30700)

    setTimeout(()=>{
        renderIncomingPricingItem("45 minute walk", "$49")
    }, 31700)
}

//==================== outgoing image item animation ==============
function renderOutgoingImageItem() {
    msgQueue.replaceChild(createView(OUTGOING_IMG_MSG_ITEM),msgQueue.getElementsByClassName("placeholder")[0])
}

function renderOutgoingImageItemPlaceHolder(){
    msgQueue.appendChild(createView(OUTGOING_IMG_MSG_ITEM_PLACE_HOLDER))
}

//============== image selection animation ======================
function simulateClickOnImageSelector() {
    document.getElementById("image-selector").classList.add("animate")
}

function showBottomSheetBackDrop() {
    document.getElementsByClassName("images-bottom-sheet-cover")[0].classList.add("show")
}

function hideBottomSheetBackDrop() {
    document.getElementsByClassName("images-bottom-sheet-cover")[0].classList.replace("show","hide")
}

function showBottomSheet() {
    document.getElementsByClassName("images-bottom-sheet")[0].classList.add("show")
}

function hideBottomSheet() {
    document.getElementsByClassName("images-bottom-sheet")[0].classList.replace("show","hide")
}

//============ pricing items ===============

function renderIncomingPricingItemPlaceHolder() {
    msgQueue.appendChild(createView(INCOMING_PRICING_ITEM_PLACE_HOLDER))
}

function renderIncomingPricingItem(label, price) {
    let pricingItem = createView(INCOMING_PRICING_ITEM)
    pricingItem.setAttribute("id", "")
    pricingItem.getElementsByClassName("pricing-item")[0].getElementsByTagName("small")[0].innerText = label
    pricingItem.getElementsByClassName("pricing-item")[0].getElementsByTagName("strong")[0].innerText = price
    msgQueue.replaceChild(pricingItem,msgQueue.getElementsByClassName("placeholder")[0])
}


//============== outgoing text animations =======================
function firstOutgoingMsgtypingAnimation(sentences) {
    let msgField = document.getElementsByClassName("msg-field")[0]
    msgField.innerText = ""
    sentences.forEach((sentence, index) => {
        let msgFieldSentenceItem = createView(MSG_FIELD_SENTENCE_ITEM)
        msgFieldSentenceItem.setAttribute("id", "sentence-item-" + index)
        msgField.appendChild(msgFieldSentenceItem)
        msgFieldSentenceItem = document.getElementById("sentence-item-" + index)
        msgFieldSentenceItem.getElementsByClassName("content")[0].innerText = sentence
        if (index === 0) msgFieldSentenceItem.getElementsByClassName("mask")[0].classList.add("typing")
    })

    setTimeout(() => {
        msgField.style = "height:fit-content"
    }, 2500)

    setTimeout(() => {
        msgField.getElementsByClassName("msg-field-sentence-item")[1].getElementsByClassName("mask")[0].classList.add("typing")
    }, 3000)

    //simulate the click on the send message btn
    setTimeout(() => {
        document.getElementById("send-msg").classList.add("animate")
    }, 3200)

    //add the corresponding message item in the msgQueue
    setTimeout(() => {
        renderOutgoingMsgTxtItem(msgField.innerText.toString())
        msgField.innerHTML = "Type amessage..."
    }, 5300)
}

function secondOutgoingMsgtypingAnimation(sentences) {
    let msgField = document.getElementsByClassName("msg-field")[0]
    msgField.innerText = ""
    sentences.forEach((sentence, index) => {
        let msgFieldSentenceItem = createView(MSG_FIELD_SENTENCE_ITEM)
        msgFieldSentenceItem.setAttribute("id", "sentence-item-" + index)
        msgField.appendChild(msgFieldSentenceItem)
        msgFieldSentenceItem = document.getElementById("sentence-item-" + index)
        msgFieldSentenceItem.getElementsByClassName("content")[0].innerText = sentence
        msgFieldSentenceItem.getElementsByClassName("mask")[0].classList.add("typing")
    })

    //simulate the click on the send message btn
    document.getElementById("send-msg").classList.remove("animate")
    setTimeout(() => {
        document.getElementById("send-msg").classList.add("animate")
    }, 100)

    //add the corresponding message item in the msgQueue
    setTimeout(() => {
        renderOutgoingMsgTxtItem(msgField.innerText.toString())
        msgField.innerHTML = "Type amessage..."
    }, 2300)
}

function renderOutgoingMsgTxtItem(msg) {
    msgQueue.appendChild(buildOutgoingMsgTxt(msg))
}

function buildOutgoingMsgTxt(msg) {
    let view = createView(OUTGOING_MSG_TXT)
    view.setAttribute("id", "")
    view.getElementsByClassName("msg")[0].innerText = msg
    return view
}


//=========== first two incoming animation ========================
function renderIncomingMsgTxtItemPlaceHolder() {
    msgQueue.appendChild(buildIncomingMsgTxtPlaceHolder())
}

function renderIncomingMsgTxtItem(msg) {
    //replace the msg placeholder by a incoming msg item
    msgQueue.replaceChild(buildIncomingMsgTxt(msg), msgQueue.getElementsByClassName("placeholder")[0])
}


function buildIncomingMsgTxtPlaceHolder() {
    //build the corresponding message placeholder
    return createView(INCOMING_MSG_TXT_PLACE_HOLDER)
}

function buildIncomingMsgTxt(msg) {
    //build the corresponding message item
    let view = createView(INCOMING_MSG_TXT)
    view.setAttribute("id", "")
    view.getElementsByClassName("msg")[0].innerText = msg
    return view
}

function createView(viewTemplate) {
    let domParser = new DOMParser()
    let view = domParser.parseFromString(viewTemplate, "text/html")
    if (view.getElementById("view-template") !== null) return view.getElementById("view-template")
    return view.getElementById("sentence-view-template")
}