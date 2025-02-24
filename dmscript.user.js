// ==UserScript==
// @name         Show Easy DM links
// @namespace    com.th.dm
// @version      1.6.0
// @description  Adds multiple eay links to often used apps in SAP DM
// @author       Matthias Kolley
// @match        https://*.web.dmc.cloud.sap/*
// @icon         data:image/png;base64,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
// @updateURL    https://github.com/TrebingHimstedt/th_tampermonkey/raw/refs/heads/main/dmscript.user.js
// @downloadURL  https://github.com/TrebingHimstedt/th_tampermonkey/raw/refs/heads/main/dmscript.user.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.14.1/jquery-ui.min.js
// @require https://github.com/TrebingHimstedt/th_tampermonkey/raw/refs/heads/main/toast.min.js
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_listValues
// @grant       GM_deleteValue
// ==/UserScript==

/* global $ iqwerty*/

(function() {
    'use strict';
    if(GM_getValue("everUsedBefore")) {
        if(GM_getValue("hasSeenWelcomeBack")) {
        } else {
            const options = {
                settings: {
                    duration: 2000,
                }
            };
            iqwerty.toast.toast('Welcome back. Using TH-scripts', options);
            GM_setValue("hasSeenWelcomeBack", true);
        }
    } else {
        GM_setValue("everUsedBefore", true);
    };
    const adjustPadding = () => {
        const shellLayout = document.getElementById('shellLayout');
        const newElement = document.getElementById("Custom-th-bookmarklet-element")
        if (shellLayout && newElement) {
            shellLayout.style.paddingTop = newElement.offsetHeight + 'px';
        } else {
            setTimeout(adjustPadding, 100);
        }
    }
    const activities = ["DMEWorkCenterPOD-Display", "ManageMaterial-Display", "OrderReport-Display", "SFCReport-Display", "DMEPODDesigner-Edit", "ProductionProcessDesigns-Manage", "ProductionProcess-Monitor", "AutomaticTriggers-Manage", "BusinessRule-Monitor", "ServiceRegistry-Display", "EmbeddedSAC-Display", "ManageBOM-Display"]
    const configuration = {
        showInNewTab: true,
        backgroundColor: "yellow",
        timeoutToCreateContent: 1000
    }
    setTimeout(() => {
        // Create container element
        const newElement = document.createElement('div');
        newElement.id = "Custom-th-bookmarklet-element";
        newElement.style.position = 'fixed'; // Ensure the element is positioned
        newElement.style.top = '0';
        newElement.style.left = '0';
        newElement.style.width = '100%';
        newElement.style.backgroundColor = configuration.backgroundColor;
        newElement.style.zIndex = '1000'; // Ensure it is on top
        newElement.style.padding = '10px';

        // Create and append the config div with the checkbox
        const configDiv = document.createElement('div');
        configDiv.id = 'config';
    
        const checkboxLabel = document.createElement('label');
        checkboxLabel.textContent = 'Open in new tab';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const checked = GM_getValue("openInNewTab");
        if(checked != null) {
            checkbox.checked = checked;
        } else {
            checkbox.checked = configuration.showInNewTab;
        }
        checkbox.addEventListener("change", (event) => {
            GM_setValue("openInNewTab", event.currentTarget.checked);
        });
        checkboxLabel.appendChild(checkbox);
    
        configDiv.appendChild(checkboxLabel);
        newElement.appendChild(configDiv);

        // Create activities button box
        const buttonsDiv = document.createElement('div');
        newElement.appendChild(buttonsDiv);

        // Add buttons to activities box
        activities.forEach(activity => {
            const button = document.createElement("button");
            button.textContent = activity.split("-")[0];
            button.onclick = () => {
                const origin = window.location.origin;
                const path = window.location.pathname;
                const target = GM_getValue("openInNewTab") ? '_blank' : '_self';
                window.open(`${origin + path}#${activity}`, target);
            }
            buttonsDiv.appendChild(button);
        });


        // Append the new element to the top of the body
        document.body.prepend(newElement);

        adjustPadding();
        $("#Custom-th-bookmarklet-element").draggable();
    }, configuration.timeoutToCreateContent);

    window.addEventListener('resize', adjustPadding);
    window.addEventListener("hashchange", () => {
        console.log("Hash has changed", window.location.hash.split("&")[0]);
    });

})();
