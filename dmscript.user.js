// ==UserScript==
// @name         Show Easy DM links
// @namespace    com.th.dm
// @version      1.2.0
// @description  Adds multiple eay links to often used apps in SAP DM
// @author       Matthias Kolley
// @match        https://*.web.dmc.cloud.sap/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://github.com/TrebingHimstedt/th_tampermonkey/raw/refs/heads/main/dmscript.user.js
// @downloadURL  https://github.com/TrebingHimstedt/th_tampermonkey/raw/refs/heads/main/dmscript.user.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.14.1/jquery-ui.min.js
// @grant        none
// ==/UserScript==

/* global $ */

(function() {
    'use strict';
    const adjustPadding = () => {
        const shellLayout = document.getElementById('shellLayout');
        const newElement = document.getElementById("Custom-th-bookmarklet-element")
        if (shellLayout && newElement) {
            shellLayout.style.paddingTop = newElement.offsetHeight + 'px';
        } else {
            setTimeout(adjustPadding, 100);
        }
    }
    const activities = ["DMEWorkCenterPOD-Display", "ManageMaterial-Display", "OrderReport-Display", "SFCReport-Display", "DMEPODDesigner-Edit", "ProductionProcessDesigns-Manage", "ProductionProcess-Monitor", "AutomaticTriggers-Manage", "BusinessRule-Monitor", "ServiceRegistry-Display", "EmbeddedSAC-Display"]
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
        checkbox.checked = configuration.showInNewTab;
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
                const target = checkbox.checked ? '_blank' : '_self';
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

})();
