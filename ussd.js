let tel= "12345"
let telNum
let servicePick
let proceed
let dataAmount
let airtimeBalance = 1000
let dataBalance = 1000
let transferNum
let transferVal
let borrowAction
let borrowLimit = 200
// let phoneDataset=["09043526893" , "08149574083"]

startProcess()
function startProcess(){
    telNum=prompt("Enter your phone number")
    validateTel()
}

function validateTel(){
    if(telNum == null){
        alert("Wrong format or empty input")
        startProcess()
    }
    else if(telNum === tel){
        alert("Success!")
        promptServePick()
    }
    else {
        alert("incorrect number")
        startProcess()
    }
    
}

function promptServePick(){
    servicePick=prompt("Choose the service you want \n 1.Airtime \n 2.Data \n 3.Transfer \n 4.Check Bakance \n 5.Borrow ");
    service();
}

function service(){
    switch (servicePick) {
        case "1":
            alert("You've chosen to Buy Airtime")
            airtime()
            break;
        case "2":
            alert("You've chosen to Buy Data")
            data()
            break;
        case "3":
            alert("You've chosen a Transfer")
            transfer()
            break;
        case "4":
            alert("You've chosen to Check Balance  ")
            balance()
            break;
        case "5":
            alert("You've chosen to Borrow")
            borrow()
            break;
    
        default:
            alert("Choose 1-5")
            promptServePick()
            break;
    }
}

function airtime(){
    airtimeAmount=prompt("How much airtime do you want to get? \n 1.100 \n 2.500 \n 3.1000")
    airtimeSelect()
}

function airtimeSelect(){
    switch (airtimeAmount) {
        case "1":
            proceed= prompt("You have selected #100. \n proceed? \n yes(y)/no(n)")
            switch (proceed) {
                case "yes" :
                    // i could not get the OR operator to work for || "y"
                    airtimeBalance = airtimeBalance - 100 
                    alert("you have bought #100 airtime \n Your balance is: " +airtimeBalance+  "\n have a good day")                    
                    break;
                default:
                    alert("Type 'yes' or 'y'")
                    airtime()
                    break;
            }
            break;
        case "2":
            proceed= prompt("You have selected #500. \n proceed? \n yes(y)/no(n)")
            switch (proceed) {
                case "yes" || "y":
                    airtimeBalance -= 500 
                    alert("you have bought #500 airtime \n Your balance is: " +airtimeBalance+  "\n have a good day")
                    break;
            
                default:
                    alert("Type 'yes' or 'y'")
                    airtime()
                    break;
            }
            break;
            case "3":
                proceed= prompt("You have selected #1000. \n proceed? \n yes(y)/no(n)")
                switch (proceed) {
                    case "yes" || "y":
                        airtimeBalance = airtimeBalance - 1000 
                        alert("you have bought #500 airtime \n Your balance is: " +airtimeBalance+  "\n have a good day")
                        break;
                
                    default:
                        alert("Type 'yes' or 'y'")
                        airtime()
                        break;
                }
                break;
    }
}

function data(){
    dataAmount=prompt("What plan do you want to get? \n only daily available \n 1.Daily \n 2.Weekly \n 3.Monthly")
    dataSelect()
}

function dataSelect(){
    switch (dataAmount) {
        case "1":
            proceed= prompt("Daily. \n 1.N50 for 40MB \n 2.N100 for 100MB")
            switch (proceed) {
                case "1":
                    alert("you purchased N50 for 40MB sucessfully. \n have a good day")
                    break;
            
                case "2":
                    alert("you purchased N100 for 100MB sucessfully. \n have a good day")
                    break;
                
                case null:
                    alert("1 or 2!")
                    data()
                    break;
            }
            break;
    }
}

function balance(){
    balanceVar=prompt("What balance do you want to check? \n 1.Airtime \n 2.Data")
    balanceSwitch()
}

function balanceSwitch(){
    switch (balanceVar) {
        case "1":
            alert("Your Airtime balance is: " + airtimeBalance + ", \n have a good day!")
            break;
        case "2":
            alert("Your Data balance is: " + dataBalance + ", \n have a good day!")
            break;
        case null:
            alert("1 or 2!")
            balance()
            break;
    }
}

function transfer() {
    transferNum=prompt("Enter number you want to transfer to?")
    transferAction()
}

function transferAction(){
    transferVal = prompt("How much would you like to transfer to "+ transferNum + "?")
    transferProceedVal=prompt("You are about to transfer " + "N"+transferVal + " to " + transferNum + "\n To proceed, enter 'yes'")
    switch (transferProceedVal) {
        case "yes" || "y" || "1":
            airtimeBalance -= transferVal;
            alert("you have sucessfully transferred " + "N"+transferVal + " to " + transferNum +" Your balance is now " + "N"+airtimeBalance + " have a nice day")
            break; 
    
        default:
            alert("Try again")
            transfer()
            break;
    }
}

function borrow(){
    borrowAction = prompt("How much would you like to borrow? \n 1.100 \n 2.200 \n 3.500")
    switch (borrowAction) {
        case "1" || "one":
            borrowAction = 100
            if(borrowAction <= borrowLimit){
                borrowLimit -= borrowAction 
                alert("You just borrowed " + borrowAction + "\n and your borrow limit is now " + borrowLimit + "\n have a lovely day☺")
            }
            else{
                alert("Sorry, Your borrow limit is not enough")
                borrow()
            }
            break;
        case "2" || "two":
            borrowAction = 200
            if(borrowAction <= borrowLimit){
                borrowLimit -= borrowAction 
                alert("You just borrowed " + borrowAction + "\n and your borrow limit is now " + borrowLimit + "\n have a lovely day☺")
            }
            else{
                alert("Sorry, Your borrow limit is not enough")
                borrow()
            }
            break;
        case "3" || "three":
            borrowAction = 500
            if(borrowAction <= borrowLimit){
                borrowLimit -= borrowAction 
                alert("You just borrowed " + borrowAction + "\n and your borrow limit is now " + borrowLimit + "\n have a lovely day☺")
            }
            else{
                alert("Your borrow limit is not enough")
                borrow()
            }
            break;
        default:
            alert("Enter from 1 - 3!")
            borrow()
            break;
    }
    console.log(borrowLimit);
}