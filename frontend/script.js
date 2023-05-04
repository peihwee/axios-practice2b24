const API_URL = "http://localhost:5000";

/////////////////////////////////////////////////////////////////////
// Initalize Constant to store DOM Elements
/////////////////////////////////////////////////////////////////////
const butTestGET = document.getElementById("testGET");
const butTestPOST = document.getElementById("testPOST");

const butCreate = document.getElementById("createTable");
const butDrop = document.getElementById("dropTable");
const butInsert = document.getElementById("insertMessage");
const butSelect = document.getElementById("getMessages");
const txtToSend = document.getElementById("messageToSend");
const txtDisplay = document.getElementById("messagesDisplay");

/////////////////////////////////////////////////////////////////////
// Setup onclick Events
/////////////////////////////////////////////////////////////////////
butTestGET.onclick = TestGet;
butTestPOST.onclick = TestPost;
butCreate.onclick = CreateTable;
butDrop.onclick = DropTable;
butInsert.onclick = InsertMessage;
butSelect.onclick = GetAllMessages;

/////////////////////////////////////////////////////////////////////
// Function to Display Server Response
/////////////////////////////////////////////////////////////////////
function DisplayResponse(objData)
{   
    txtDisplay.innerHTML = "";
    let sData = JSON.stringify(objData);
    txtDisplay.append(sData);
}

/////////////////////////////////////////////////////////////////////
// Function to Test GET with Server
/////////////////////////////////////////////////////////////////////
function TestGet()
{
    axios.get(API_URL+'/api', { params: { message: "Hello World!" } })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        DisplayResponse(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Test POST with Server
/////////////////////////////////////////////////////////////////////
function TestPost()
{
    axios.post(API_URL+'/api/', { message: "Hello Again!" })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        DisplayResponse(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Create Table
/////////////////////////////////////////////////////////////////////
function CreateTable()
{
    axios.post(API_URL+'/api/table', {})
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        DisplayResponse(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Drop Table using DELETE
/////////////////////////////////////////////////////////////////////
function DropTable()
{
    axios.delete(API_URL+'/api/table', {})
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        DisplayResponse(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Insert Row using POST
/////////////////////////////////////////////////////////////////////
function InsertMessage()
{
    axios.post(API_URL+'/api/message', { message : txtToSend.value })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        DisplayResponse(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Select Rows using GET
/////////////////////////////////////////////////////////////////////
function GetAllMessages()
{
    axios.get(API_URL+'/api/message', {})
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        DisplayResponse(error);
    });
}