// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push,
    onValue, remove
 } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-c78f2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// leads collection in db
const referenceInDb = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

// Render leads to unordered list ulEl
function render(leads) {
    let listItems = ""
    
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems;

}

// Delete event listener
deleteBtn.addEventListener("dblclick", function() {
    
    console.log("removing leads from firebase")

    // Remove items from torage and ulEl
    remove(referenceInDb);
    inputEl.value = "";
    
})

// Input Button event listener
inputBtn.addEventListener("click", function() {
   
    // Push new lead to firebase leads collection
    console.log("pushing to firebase")
    push(referenceInDb, inputEl.value);
    inputEl.value = ""
})

// listen to firebase snapshots using onValue
onValue(referenceInDb, function(snapshot) {

    if (!snapshot.exists()) {
        render([])
        return;
    }

    // retrieve values from snapshot val object and display it to user
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);

})
