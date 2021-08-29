/*
<i class="fas fa-toggle-on"></i>
<i class="fas fa-toggle-off"></i>
*/

class Tools{
    static convertDigits(num){
        let convertedNum;
        let numToString = num.toString();
        let numLength = numToString.length;
        switch(Math.floor((numLength-1) / 3)){
            case 2:
                convertedNum = numToString.slice(0, -3 * 2) + " million";
                break;
            case 3:
                convertedNum = numToString.slice(0, -3 * 3) + " billion";
                break;
            case 4:
                convertedNum = numToString.slice(0, -3 * 4) + " trillion";
                break;
            case 5:
                convertedNum = numToString.slice(0, -3 * 5) + " quadrillion";
                break;
            default:
                convertedNum = num.toLocaleString();
                break;
        }
        return convertedNum;
    }

}



class User{
    constructor(name, age=20, day=0, money=200_000, clickCounter=0){
        this.name = name;
        this.age = age;
        this.day = day;
        this.money = money;
        this.moneyLog = [money,money];
        this.clickCounter = clickCounter;
        this.hamburger = new Hamburger(0, "Hamburger", 0, 1, 1, 25, "https://4.bp.blogspot.com/-PNH44j6odcg/WwJaPJri5oI/AAAAAAABMK4/V_U6WfMGTtIodWf8nMxVj-75aZ-zfsa5ACLcBGAs/s800/hamburger_meat_sauce.png")
        ;
        this.abilities ={
            "FlipMachine":new Ability(0, "FlipMachine", 15_000, 500, 1, 0, "https://1.bp.blogspot.com/-Bw5ZckDs9X8/XdttVGl2K5I/AAAAAAABWG4/ySICN6pGG68DXOA3iGg6OehjhfY4UYzwACNcBGAsYHQ/s1600/cooking_camp_bbq_grill.png")
        };
        this.items = {
            "ETFStock" : new Stock(2, "ETFStock", 300_000, Infinity, 0, 0, 0, 10, 0.1, "https://2.bp.blogspot.com/-H5cCL2IBtBY/VA7l_46deNI/AAAAAAAAmJI/Q_Cu5SOQXFg/s800/money_kabuken.png"),
            "ETFBonds" : new Stock(3, "ETFBonds", 300_000, Infinity, 0, 0, 0, 0, 0.07, "https://1.bp.blogspot.com/-SlXHptXp-Hg/U8Xkf0VeAVI/AAAAAAAAiyA/n9d4fdHDmJk/s800/money_saiken.png"),
            "LemonadeStand" : new RealEstate(4, "LemonadeStand", 30_000, 1000, 0, 30, "https://1.bp.blogspot.com/-tzP9gGYpFP8/XVjgHkZ40UI/AAAAAAABUMU/zQeTzUi4MjMRSXxZBI3cOqDYXwiAQhe1wCLcBGAs/s1600/drink_lemonade.png"),
            "IceCreamTruck" : new RealEstate(5, "IceCreamTruck", 1_000_000, 500, 0, 120, "https://1.bp.blogspot.com/-xcVRGLdi_vM/WKFi9LKxuGI/AAAAAAABBqo/e-1SdPAhoLgU2KEgN9alnve9X7Qb1I_sACLcB/s800/car_reitousya.png"),
            "House" : new RealEstate(6, "House", 20_000_000, 100, 0, 32_000, "https://1.bp.blogspot.com/-0uQ7sDBi-ts/V8PYwQ-3lFI/AAAAAAAA9UM/qKo-av_O5okEZIs5SvZJj0mIFAnHbC53ACLcB/s800/window_amado_close.png"),
            "TownHouse" : new RealEstate(7, "TownHouse", 20_000_000, 100, 0, 32_000, "https://2.bp.blogspot.com/-aQK1Zr_1Vic/UvTdwCPLhrI/AAAAAAAAddU/xu6xBIZEwZ8/s800/room_veranda.png"),
            "Mansion" : new RealEstate(8, "Mansion", 250_000_000, 20, 0, 500_000, "https://4.bp.blogspot.com/-Btz47iBHM8M/Udy6itsKbtI/AAAAAAAAWH8/2B5p0xLupGI/s800/building_goutei.png"),
            "Ranch" : new RealEstate(9, "Ranch", 500_000_000, 5, 0, 1_000_000, "https://4.bp.blogspot.com/-Ye72nJJkacU/VPQT3x62m-I/AAAAAAAAsDU/fQdFOaf4Yzk/s800/bokujou_gyuusya.png"),
            "Farm" : new RealEstate(10, "Farm", 1_000_000_000, 5, 0, 2_000_000, "https://2.bp.blogspot.com/-RA_r9EVIbto/Ur1Hh8V6SRI/AAAAAAAAciE/UFlqD_v-9nM/s800/hatake.png"),
            "IndustrialSpace" : new RealEstate(11, "IndustrialSpace", 5_000_000_000, 5, 0, 4_200_000, "https://4.bp.blogspot.com/-X6Y32Uh5ud4/W_UF70_iobI/AAAAAAABQT0/gF3Braf7peIkKgr_MWRSRz_RuCR4wMnsACLcBGAs/s800/building_koujou_entotsu.png"),
            "HotelSkyscraper" : new RealEstate(12, "HotelSkyscraper", 10_000_000_000, 5, 0, 25_000_000, "https://3.bp.blogspot.com/-qbqb7xIicEA/VpjCnDpHkfI/AAAAAAAA3EE/8NqVEr8MMxQ/s800/kousou_hotel.png"),
            "BulletSpeedSkyRailway" : new RealEstate(13, "BulletSpeedSkyRailway", 10_000_000_000_000, 1, 0, 30_000_000_000, "https://4.bp.blogspot.com/-xeElVHnaO6E/UUhH-h33LkI/AAAAAAAAO6s/ZdByhm_3NRI/s1600/train_shinkansen.png")
        };
        this.tempItems = {
            "AutoClickerUnlock": new TempItem(0, "AutoClickerUnlock", 15_000, 1, 0, 0, "https://1.bp.blogspot.com/-wNjPYeUc6Vw/XTPoAMa-aEI/AAAAAAABTvI/_HNnn_woqhIZ7mtjXDk3wFD1dz9P3HzbQCLcBGAs/s800/computer_cursor_arrow_white.png"),
            "CheeseBurgerUnlock": new TempItem(0, "CheeseBurgerUnlock", 500_000_000, 1, 0, 0, "https://2.bp.blogspot.com/-63vQtYUKJBY/UgSMCmG66LI/AAAAAAAAW6w/-VMth7DVjcY/s800/food_hamburger.png"),
            "BLTBurgerUnlock": new TempItem(0, "BLTBurgerUnlock", 750_000_000, 1, 0, 0, "https://2.bp.blogspot.com/-ydmVz8cQgiw/WGnPS4aBHVI/AAAAAAABA3M/baZ-lRZ1ViIRIfaQx1sjdSLgXPPZTGZKwCLcB/s800/hamburger_blt_burger.png")
        };
        this.clickTimeArray = [];
        this.amIFastCliker = false;

    }

//********************************************************************************************************************* */
//Save

    setLoadData(loadData){
        this.age = loadData["age"];
        this.day = loadData["day"];
        this.money = loadData["money"];
        this.clickCounter = loadData["clickCounter"];
        this.amIFastCliker = loadData["amIFastCliker"];
        this.hamburger.setLoadData(loadData["hamburger"]);
        for (let tempItem in loadData["tempItems"]){
            this.tempItems[tempItem].setLoadData(loadData["tempItems"][tempItem]);
        };
        for (let ability in loadData["abilities"]){
            if(loadData["abilities"]["AutoClicker"]){
                this.abilities["AutoClicker"] = new Ability(1, "AutoClicker", 15_000, 10, 0, 0, "https://1.bp.blogspot.com/-wNjPYeUc6Vw/XTPoAMa-aEI/AAAAAAABTvI/_HNnn_woqhIZ7mtjXDk3wFD1dz9P3HzbQCLcBGAs/s800/computer_cursor_arrow_white.png");
                this.abilities["AutoClicker"].setLoadData(loadData["abilities"][ability]);
                this.abilities["AutoClicker"].setAutoClickerInterval();
            }else{
                this.abilities[ability].setLoadData(loadData["abilities"][ability]);
            }
        }
        for (let item in loadData["items"]){
            this.items[item].setLoadData(loadData["items"][item]);
        }
    }

    getSaveData(){
        let saveTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
        let saveData = {
            "name": this.name,
            "age": this.age,
            "day": this.day,
            "money": this.money,
            "clickCounter": this.clickCounter,
            "hamburger": this.hamburger.getItemSaveData(),
            "tempItems": {},
            "abilities": {},
            "items": {},
            "saveTime": saveTime,
            "amIFastCliker": this.amIFastCliker,
            "isUndeletable": false
        }
        for (let tempItem in this.tempItems){
            saveData["tempItems"][tempItem] = this.tempItems[tempItem].getItemSaveData();
        }
        for (let ability in this.abilities){
            saveData["abilities"][ability] = this.abilities[ability].getItemSaveData();
        }
        for (let item in this.items){
            saveData["items"][item] = this.items[item].getItemSaveData();
        }
        return saveData;

    }


//********************************************************************************************************************* */
//tool

    makeClickerAbility(){
        this.abilities["AutoClicker"] = new Ability(1, "AutoClicker", 15_000, 10, 0, 0, "https://1.bp.blogspot.com/-wNjPYeUc6Vw/XTPoAMa-aEI/AAAAAAABTvI/_HNnn_woqhIZ7mtjXDk3wFD1dz9P3HzbQCLcBGAs/s800/computer_cursor_arrow_white.png");
        this.abilities["AutoClicker"] .setAutoClickerInterval();
    }

    earnMoneyPerDay(){
        this.day ++;
        if(this.day % 365 === 0){this.age ++};
        Object.keys(this.items).forEach(item => this.money += this.items[item].earnMoney());

    }
    getDailyAllowanceNum(){
        if(this.moneyLog.length <= 1){
            this.moneyLog.push(this.money);
        }else{
            this.moneyLog.shift();
            this.moneyLog.push(this.money);
        }
        return this.moneyLog[1] - this.moneyLog[0];
    }


    earnMoneyClick(){
        this.clickCounter++;
        this.money += this.hamburger.earnMoney() * this.abilities["FlipMachine"].getItemQuantity();
    }

    checkFastCliker(){
        if (!this.amIFastCliker){
            if(this.clickTimeArray.length <= 10){
                this.clickTimeArray.push(new Date());
            }else{
                this.clickTimeArray.shift();
                this.clickTimeArray.push(new Date());
                this.amIFastCliker = ((this.clickTimeArray[9].getTime()-this.clickTimeArray[0].getTime()) < 2000)
                this.tempItems["AutoClickerUnlock"].unlock();
            }
        }else{
            // this.makeClickerAbility()
        };
    }

    purchaseItem(itemName){
        if(this.tempItems[itemName]){
            if (this.money >= this.tempItems[itemName].unitPrice && this.tempItems[itemName].isNotMaxQuantity()){
                this.tempItems[itemName].addOneItem();
                this.money -= this.tempItems[itemName].unitPrice;
                this.purchaseTempItemsHelper(itemName);
            }
        }
        if(this.abilities[itemName]){
            if (this.money >= this.abilities[itemName].unitPrice && this.abilities[itemName].isNotMaxQuantity()){
                this.abilities[itemName].addOneItem();
                this.money -= this.abilities[itemName].unitPrice;
            }
        }else if(this.items[itemName]){
            if (this.money >= this.items[itemName].unitPrice && this.items[itemName].isNotMaxQuantity()){
                this.items[itemName].addOneItem();
                this.money -= this.items[itemName].unitPrice;
                this.purchaseItemsHelper(itemName);
            }
        }else if(this.hamburger[itemName] && this.hamburger[itemName].isNotMaxQuantity()){
            if (this.money >= this.hamburger[itemName].unitPrice){
                this.hamburger[itemName].addOneItem();
                this.money -= this.hamburger[itemName].unitPrice;
            }
        }

    }

    purchaseItemsHelper(itemName){
        switch (itemName){
            case "Ranch":
                this.tempItems["CheeseBurgerUnlock"].unlock();
                break;
            case "Farm":
                this.tempItems["BLTBurgerUnlock"].unlock();
                break;
            default:
                break;

        }
    }

    purchaseTempItemsHelper(itemName){
        switch (itemName){
            case "AutoClickerUnlock":
                this.abilities["AutoClicker"] = new Ability(1, "AutoClicker", 15_000, 50, 0, 0, "https://1.bp.blogspot.com/-wNjPYeUc6Vw/XTPoAMa-aEI/AAAAAAABTvI/_HNnn_woqhIZ7mtjXDk3wFD1dz9P3HzbQCLcBGAs/s800/computer_cursor_arrow_white.png");
                break;
            case "CheeseBurgerUnlock":
                this.hamburger = new Hamburger(0, "CheeseBurger", 0, 1, 1, 100, "https://2.bp.blogspot.com/-63vQtYUKJBY/UgSMCmG66LI/AAAAAAAAW6w/-VMth7DVjcY/s800/food_hamburger.png");
                break;
            case "BLTBurgerUnlock":
                this.hamburger = new Hamburger(0, "Spesial BLT set", 0, 1, 1, 1000, "https://2.bp.blogspot.com/-ydmVz8cQgiw/WGnPS4aBHVI/AAAAAAABA3M/baZ-lRZ1ViIRIfaQx1sjdSLgXPPZTGZKwCLcB/s800/hamburger_blt_burger.png");
                break;
            default:
        }
    }


//********************************************************************************************************************* */
//get系
    getItemObj(itemName){
        if(this.tempItems[itemName]){
            return this.tempItems[itemName]
        }else if(this.abilities[itemName]){
            return this.abilities[itemName];
        }else if(this.items[itemName]){
            return this.items[itemName];
        }else{
        }
    }

    getAbilitiesAndItemsData(){
        let abilitiesAndItemsList = [];
        for (let item in this.tempItems){
            if(!this.tempItems[item].getIsPurchased() && !this.tempItems[item].lock){
                abilitiesAndItemsList.push(this.tempItems[item]);
            }
        }
        Object.keys(this.abilities).forEach(
            ability => abilitiesAndItemsList.push(this.abilities[ability]));

        Object.keys(this.items).forEach(
            item => abilitiesAndItemsList.push(this.items[item]));
        return abilitiesAndItemsList;
    }

    getUserName(){
        return this.name;
    }
    getUserMoney(){
        return this.money;
    }
    getUserDay(){
        return this.day;
    }
    getUserAge(){
        return this.age;
    }
    getUserAbility(abilityName){
        return this.abilities[abilityName];
    }
    getUserHamburger(){
        return this.hamburger;
    }
    getClickCounter(){
        return this.clickCounter;
    }
}



class Item {
    constructor(id, itemName, unitPrice, maxQuantity, quantity, interest, imgUrl){
        this.itemID = id;
        this.itemName = itemName;
        this.unitPrice = unitPrice;
        this.maxQuantity = maxQuantity;
        this.quantity = quantity;
        this.interest = interest;
        this.imgUrl = imgUrl
    }

    getItemSaveData(){
        let saveData = {
            "ItemType": this.constructor.name,
            "itemID": this.itemID,
            "itemName": this.itemName,
            "unitPrice": this.unitPrice,
            "maxQuantity": this.maxQuantity,
            "quantity": this.quantity,
            "interest": this.interest,
            "imgUrl": this.imgUrl
        }
        return saveData;
    }

    setLoadData(loadData){
        this.unitPrice = loadData["unitPrice"];
        this.quantity = loadData["quantity"];
        this.interest = loadData["interest"];
    }


    isNotMaxQuantity(){
        return this.quantity < this.maxQuantity;
    }

    addOneItem(){
        this.quantity++
    }

    earnMoney(){
        return this.interest * this.quantity;
    }

    getClassName() {
        return this.constructor.name;
    }

    getItemName(){
        return this.itemName;
    }

    getItemQuantity(){
        return this.quantity;
    }

    getItemMaxQuantity(){
        return this.maxQuantity;
    }

    getItemType(){
        return this.constructor.name;
    }

    getItemUnitPrice(){
        return this.unitPrice;
    }
}

class TempItem extends Item{
    constructor(id, itemName, unitPrice, maxQuantity, quantity, interest, imgUrl, isPurchased = false, lock = true){
        super(id, itemName, unitPrice, maxQuantity, quantity, interest, imgUrl);
        this.isPurchased = isPurchased;
        this.lock = lock;
    }
    getItemSaveData(){
        let saveData = {
            "ItemType": this.constructor.name,
            "itemID": this.itemID,
            "itemName": this.itemName,
            "unitPrice": this.unitPrice,
            "maxQuantity": this.maxQuantity,
            "quantity": this.quantity,
            "interest": this.interest,
            "imgUrl": this.imgUrl,
            "isPurchased": this.isPurchased,
            "lock": this.lock
        }
        return saveData;
    }

    setLoadData(loadData){
        this.unitPrice = loadData["unitPrice"];
        this.quantity = loadData["quantity"];
        this.interest = loadData["interest"];
        this.isPurchased = loadData["isPurchased"];
        this.lock = loadData["lock"];
    }

    addOneItem(){
        this.quantity ++;

        this.isPurchased = true;
    }
    getIsPurchased(){
        return this.isPurchased;
    }

    unlock(){
        this.lock = false;
    }
}

class Ability extends Item{
    constructor(id,itemName, unitPrice, maxQuantity, quantity, interest, imgUrl){
        super(id, itemName, unitPrice, maxQuantity, quantity, interest, imgUrl)
    }

    setAutoClickerInterval(){
        this.autoClickerInterval = 1000;
    }

    addOneItem(){
        this.quantity ++;
        if(this.itemName == "AutoClicker"){
            if(this.quantity !== 0)this.autoClickerInterval = 1000/this.quantity;
        }

    }
    setLoadData(loadData){
        this.unitPrice = loadData["unitPrice"];
        this.quantity = loadData["quantity"];
        this.interest = loadData["interest"];
        if(this.itemName == "AutoClicker"){
            if(this.quantity !== 0)this.autoClickerInterval = 1000/this.quantity;
        }
    }

    getAutoClickerInterval(){
        return this.autoClickerInterval;
    }
}

class Stock extends Item{
    constructor(id, itemName, unitPrice, maxQuantity, quantity, interest, investmentAmount, purchaseFluctuationRate, inflationRate, imgUrl){
        super(id, itemName, unitPrice, maxQuantity, quantity, interest, imgUrl);
        this.investmentAmount = investmentAmount;
        this.purchaseFluctation = purchaseFluctuationRate;
        this.inflationRate = inflationRate;
    }
    getItemSaveData(){
        let saveData = {
            "ItemType": this.constructor.name,
            "itemID": this.itemID,
            "itemName": this.itemName,
            "unitPrice": this.unitPrice,
            "maxQuantity": this.maxQuantity,
            "quantity": this.quantity,
            "interest": this.interest,
            "imgUrl": this.imgUrl,
            "investmentAmount": this.investmentAmount,
            "purchaseFluctuationRate": this.purchaseFluctation,
            "inflationRate": this.inflationRate
        }
        return saveData;
    }

    setLoadData(loadData){
        this.unitPrice = loadData["unitPrice"];
        this.quantity = loadData["quantity"];
        this.interest = loadData["interest"];
        this.investmentAmount = loadData["investmentAmount"];
        this.purchaseFluctuationRate = loadData["purchaseFluctuationRate"];
        this.inflationRate = loadData["inflationRate"];
    }

    setInvestmentAmount(investmentAmount){
        this.investmentAmount = investmentAmount;
    }

    getInvestmentAmount(){
        return this.investmentAmount;
    }

    addOneItem(){
        this.quantity++
        this.investmentAmount += this.unitPrice;
        this.interest = Number(Math.floor(this.investmentAmount * this.inflationRate / 100 / 10)* 10);
        this.unitPrice = Number(Math.floor(this.unitPrice * (1 + this.purchaseFluctation/100)/10)*10);
    }

}

class RealEstate extends Item{
}

class Hamburger extends Item{
}

class Controller{
    constructor(){
        this.timeInterval = 1000;
        this.saveDataFile = new SaveData();
    }

    setUser(name){

        if(name == "cheater"){
            this.user = new User(name, 0, 0, 99_999_999_999)
        }else{
            this.user = new User(name);
        }
    }
    setTimeInterVal(timeInterval){
        this.timeInterval = timeInterval;
    }

    timeStart(){
        let user = this.user;
        let timeInterval = this.timeInterval;
        this.promoteDayFn = setInterval(function(){
            user.earnMoneyPerDay();
            Render.refreshEveryDay(user);
        }, timeInterval);
    }

    timePause(){
        clearInterval(this.promoteDayFn);
    }


    getUser(){
        return this.user;
    }

    saveData(){
        this.saveDataFile.save(this.user.getSaveData());
    }

    logoff(){
        this.user = null;
        this.timePause();
        this.stopAutoClicker();

    }

    loadData(data){

        let loadData = data;
        this.timePause();
        if(loadData["abilities"]["AutoClicker"]){
            this.stopAutoClicker()
        }

        this.setUser(loadData["name"]);
        this.user.setLoadData(loadData);
        this.timeStart();

        if(loadData["abilities"]["AutoClicker"]){
            this.changeAutoClickerInterval();
        }

    }
    getAllSaveFile(){
        return this.saveDataFile.getAllSaveFile();
    }
    purchaseOne(itemName, num = 1){
        let user = this.user;
        [...Array(num)].map(() => user.purchaseItem(itemName));
        Render.refreshEveryPurchaseItem(user, itemName);
    }


    startAutoClicker(){
        let user = this.user;
        this.autoClickerFn = setInterval(function(){
            user.earnMoneyClick();
            Render.refreshEveryClick(user);
        }, user.getUserAbility("AutoClicker").getAutoClickerInterval());
    }

    changeAutoClickerInterval(){
        let user = this.user;
        clearInterval(this.autoClickerFn);
        this.autoClickerFn = setInterval(function(){
            user.earnMoneyClick();
            Render.refreshEveryClick(user);
        }, user.getUserAbility("AutoClicker").getAutoClickerInterval());

    }
    stopAutoClicker(){
        if(this.autoClickerFn)clearInterval(this.autoClickerFn);
    }
    isUserFasterCliker(){
        return this.user.amIFastCliker;
    }

}


class SaveData{
    constructor(){
        this.maxSaveFile = 10;
        if(localStorage.getItem("ClikerGameData")){
            this.fileQueue = SaveData.loadFromLocalStrage();
        }else{
            this.fileQueue = [];
        }

    }



    save(saveData){
        if(this.fileQueue.length <= this.maxSaveFile){
            this.fileQueue.push(saveData);

        }else{
            this.fileQueue.shift();
            this.fileQueue.push(saveData);
        }
        this.saveToLocalStrage()
    }

    saveToLocalStrage(){

        localStorage.setItem("ClikerGameData", JSON.stringify(this.fileQueue));
    }

    static loadFromLocalStrage(){

        // let intermediateList = JSON.stringify(localStorage.getItem("ClikerGameData"))

        // let convertedList = []
        // for(let i; i < intermediateList.length; i++){
        //     convertedList.push(JSON.stringify(intermediateList[i]))
        // }
        // return convertedList;
        return JSON.parse(localStorage.getItem("ClikerGameData"))
    }

    deleteAllSaveData(){
        for(let i=0; i < this.fileQueue.length; i++){
            localStorage.removeItem(i);
        }
    }

    load(num = 0){
        return this.fileQueue[num];
    }

    getAllSaveFile(){
        return this.fileQueue;
    }

}


class Render{

//********************************************************************************************************************* */
//addEvent系
    static addEventDirectPurchase(controller){
        let itemList = controller.getUser().getAbilitiesAndItemsData();
        for(let i in itemList){
            let item = itemList[i];
            let tempButtonId = document.getElementById("purchase-button-"+item.itemName);
            tempButtonId.addEventListener("click", function(){
                Render.refreshEveryPurchaseItem(controller.getUser(), item.itemName);
                let itemNum = controller.getUser().getAbilitiesAndItemsData().length;
                controller.purchaseOne(item.itemName)
                if(itemNum != controller.getUser().getAbilitiesAndItemsData().length){
                    Render.createItemTable(controller);
                }
                if(item.itemName =="AutoClicker"){
                    controller.changeAutoClickerInterval();
                    Render.createPointer(item.getItemQuantity());
                }
                if(item.getItemType() === "TempItem"){
                    Render.createItemTable(controller);
                    Render.createHamburgerButton(controller);
                }
            });
        }
    }

    static addEventMakeHamburger(controller){
        let buttonID = document.getElementById("hamburger-button");
        buttonID.addEventListener("click", function(){
            controller.getUser().earnMoneyClick();
            let itemNum = controller.getUser().getAbilitiesAndItemsData().length;
            controller.getUser().checkFastCliker();
            if(itemNum != controller.getUser().getAbilitiesAndItemsData().length){
                Render.createItemTable(controller);
            }
            Render.refreshEveryClick(controller.getUser());
        })
    }

    static addEventSaveBtn(controller){
        let buttonID = document.getElementById("save-btn");
        buttonID.addEventListener("click", function(){
            controller.saveData();
            if(document.getElementById("save-file-table") != null){
                Render.createSaveFileFolderDiv(controller)
            }
        })
    }

    static addEventFolderOpenBtn(controller){
        let buttonID = document.getElementById("folder-open-btn");
        buttonID.addEventListener("click", function(){
            Render.createSaveFileFolderDiv(controller)
        })
    }

    static addEventReturnItemTableBtn(controller){
        let buttonID = document.getElementById("return-item-table-btn");
        buttonID.addEventListener("click", function(){
            Render.createItemTable(controller);
        })
    }

    static addEventImgBtn(controller){
        let itemList = controller.getUser().getAbilitiesAndItemsData();
        for(let i in itemList){
            let item = itemList[i];
            let tempButtonId = document.getElementById("item-button-"+item.itemName);
            tempButtonId.addEventListener("click", function(){
                Render.createItemInfoPage(controller, i);
            });
        }
    }

    static addEventGoBtn(controller,direction, num){
        if(direction == "right"){
            let buttonID = document.getElementById("item-info-R-Arrow-btn");
            buttonID.addEventListener("click", function(){
                Render.createItemInfoPage(controller, Number(num)+1)
            })
        }else{
            let buttonID = document.getElementById("item-info-L-Arrow-btn");
            buttonID.addEventListener("click", function(){
                Render.createItemInfoPage(controller, Number(num)-1)
            })
        }
    }

    static addEventNewGameBtn(){
        let buttonID = document.getElementById("newgame-btn");
        buttonID.addEventListener("click", function(){
            let name = prompt("名前を入力してください");
            if(name){
                Render.createMainPage(name);
            }else if(name === null){
                let mainPageDiv = document.getElementById("main-page-div");
                mainPageDiv.innerHTML = ``;
                Render.createLoginPage();
            }else{
                alert("名前が入力されていません")
            }

        })
    }

    static addEventLogoffBtn(controller){
        let buttonID = document.getElementById("logoff-btn");
        buttonID.addEventListener("click", function(){
            controller.logoff();
            Render.createLoginPage();
        })
    }

    static addEventLoadBtn(){
        let buttonID = document.getElementById("json-load-btn");
        buttonID.addEventListener("click", function(){
            let data = prompt("セーブデータを貼り付けてください")
            if (data){
                data = JSON.parse(data);
                let name = data["name"];
                let age = data["age"]
                let day = data["day"];
                let money = data["money"];
                let time = data["saveTime"];
                let ok = confirm("こちらでよろしいですか？" + "\n"
                    + "名前： " + name + "\n"
                    + "年齢： " + age + "\n"
                    + "経過日数： " + day + "\n"
                    + "所持金： " + money + "\n"
                    + "セーブ時間： " + time);
                if(ok)Render.createMainPage(name, data);
            }else if(data === null){
                let mainPageDiv = document.getElementById("main-page-div");
                mainPageDiv.innerHTML = ``;
                Render.createLoginPage();
            }else{
                alert("セーブデータが入力されていません");
            }

        })
    }

    static addEventLoadLocalStorageBtn(){
        let buttonID = document.getElementById("load-local-storage-btn");
        buttonID.addEventListener("click", function(){
            if(SaveData.loadFromLocalStrage()){
                Render.createLocalSaveFileFolderDiv();
            }else{
                alert("セーブデータがありません")
            }

        });
    }

    static addEventLocalDataLoadBtn(){
        let saveFileList = SaveData.loadFromLocalStrage();
        for(let i = 0; i < saveFileList.length; i++){
            let saveData = saveFileList[i]
            let buttonID = document.getElementById("No."+ i + "-local-load-btn");
            buttonID.addEventListener("click", function(){
                let name = saveData["name"];
                Render.createMainPage(name, saveData);
                alert("No."+ i +"をロードしました！");
            })
        }
    }

//********************************************************************************************************************* */
//HTML系

    static createPointer(num){
        let pointerDiv = document.getElementById("l-side-lower-div")
        pointerDiv.className = ""
        pointerDiv.classList.add("center-block", "container", "row", "justify-content-around", "mx-auto", "pt-3");

        pointerDiv.innerHTML = ``;
        for(let i=num;i--;)pointerDiv.innerHTML += `<div><i class="pointer fas fa-hand-pointer fa-x2 mx-auto"></i></div>`;
    }

    static createSaveBtn(controller){
        let saveIconDiv = document.getElementById("r-side-lower-div");
        saveIconDiv.classList.add("text-right", "mt-3")
        saveIconDiv.innerHTML = `
            <i id="folder-open-btn" class="button fas fa-folder-open fa-2x mr-2"></i>
            <i id="save-btn" class="button fas fa-save fa-2x mr-2"></i>
            <i id="logoff-btn" class="fas fa-door-open fa-2x mr-2"></i>`;
        Render.addEventSaveBtn(controller);
        Render.addEventFolderOpenBtn(controller);
        Render.addEventLogoffBtn(controller);
    }

    static createHamburgerInfoBoadDiv(controller){
        let hamburgerInfoBoadDiv = document.getElementById("l-side-upper-div");
        let user = controller.getUser()
        let hamburger = user.hamburger;
        hamburgerInfoBoadDiv.innerHTML=`
            <div class="container text-center bg-secondary">
                <div class="mx-auto">
                    <span id="hamburger-name">${hamburger.getItemName()}<span>
                </div>
                <div class="mx-auto">
                    <span id="user-clickCounter">${Tools.convertDigits(user.getClickCounter())}</span> Burgers
                </div>
                <div class="mx-auto">
                <span id="user-daily-allowance">${Tools.convertDigits(user.getDailyAllowanceNum())}</span>円/日
                </div>
            </div>`;
    }

    static createItemInfoPage(controller, num){
        let itemList = controller.getUser().getAbilitiesAndItemsData();
        let item = itemList[num];
        let tmpString
        if(item.getItemType() == "Stock"){
            tmpString = `総額: ${Tools.convertDigits(item.getInvestmentAmount())}円`
        }else{
            tmpString = `所持数: ${item.getItemQuantity()}/${item.getItemMaxQuantity()}</span>`
        }
        let purchasePageDiv = document.getElementById("r-side-middle-div");
        purchasePageDiv.classList.add("col-12", "bg-secondary", "item-cards");
        purchasePageDiv.innerHTML = `
        <div id="return-item-table-btn" class="text-right py-2">
            <i class="button far fa-times-circle fa-lg"></i>
        </div>
        <div class = "row justify-content-between">
            <div>
                <h2>${item.getItemName()}</h2>
                <p>${tmpString}</p>
                <p>価格:${Tools.convertDigits(item.getItemUnitPrice())}</span>円</p>
            </div>
            <div>
                <img class="item-img-100px" src="${item.imgUrl}">
            </div>
        </div>`;
        if(num == 0){
            purchasePageDiv.innerHTML += `
                <div class="justify-content-end row">
                <div><button id="item-info-R-Arrow-btn" class="btn btn-light"><i class="fas fa-angle-right"></i></button></div>
            </div>`
            Render.addEventGoBtn(controller,"right", num);
        }else if(num == itemList.length-1){
            purchasePageDiv.innerHTML += `
            <div class="justify-content-start row">
                <div><button id="item-info-L-Arrow-btn" class="btn btn-light"><i class="fas fa-angle-left"></i></button></div>
            </div>`
            Render.addEventGoBtn(controller,"left", num);
        }else{
            purchasePageDiv.innerHTML += `
            <div class="justify-content-between row">
                <div><button id="item-info-L-Arrow-btn" class="btn btn-light"><i class="fas fa-angle-left"></i></button></div>
                <div><button id="item-info-R-Arrow-btn" class="btn btn-light"><i class="fas fa-angle-right"></i></button></div>
            </div>`
            Render.addEventGoBtn(controller,"right", num);
            Render.addEventGoBtn(controller,"left", num);
        }
        Render.addEventReturnItemTableBtn(controller)
    }

    static createLocalSaveFileFolderDiv(){
        let targetDiv = document.getElementById("main-page-div");
        let saveFileList = SaveData.loadFromLocalStrage();
        targetDiv.innerHTML = ""

        let saveFileListDiv = document.createElement("div")
        saveFileListDiv.classList.add("text-white", "overflow-auto", "column", "col-8","bg-secondary", "item-cards");
        for(let i = 0; i < saveFileList.length; i++){
            let saveFile = saveFileList[i];
            let saveFileDiv = document.createElement("div");
            saveFileDiv.innerHTML =`
                <div id="save-file-${i}" class="container bg-dark my-3"> 
                    <div class="p-1 bg-danger text-center">
                        <span id="save-file-No-${i}">No.${i}</span>
                    </div>
                    <div>
                        <div class="row">
                            <div class="bg-dark mx-auto">
                                名前:<span id="user-name-${i}">${saveFile["name"]}</span>
                            </div>
                            <div class="bg-dark mx-auto">
                                経過日数：<span id="user-age-${i}">${saveFile["day"]}</span>日
                            </div>                    
                            <div class="bg-dark mx-auto">
                                所持金：<span id="user-monery-${i}">${Tools.convertDigits(saveFile["money"])}</span>円
                            </div>
                        </div>
                        <div>
                            <div class="bg-dark mx-auto">
                                保存時間：<span id="user-clickCounter-${i}">${saveFile["saveTime"]}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <i id="No.${i}-local-load-btn" class="button fas fa-book-open fa-2x mr-2"></i>
                    </div>
                </div>`
            saveFileListDiv.append(saveFileDiv)
        }
        targetDiv.append(saveFileListDiv)
        Render.addEventLocalDataLoadBtn();
    }




    static createSaveFileFolderDiv(controller){
        let multiPurposeDiv = document.getElementById("r-side-middle-div");
        multiPurposeDiv.innerHTML=`
        <div  class="text-right py-2 bg-secondary">
            <i id="return-item-table-btn" class="button far fa-times-circle fa-lg mr-2"></i>
        </div>`;

        let saveFileFolderDiv = document.createElement("div");
        saveFileFolderDiv.classList.add("overflow-auto", "col-12", "bg-secondary", "item-cards");
        saveFileFolderDiv.id = "save-file-table";
        let saveFileList = controller.getAllSaveFile();
        for(let i = 0; i < saveFileList.length; i++){
            let saveFile = saveFileList[i];
            let saveFileDiv = document.createElement("div");
            saveFileDiv.innerHTML =`
                <div id="save-file-${i}" class="container bg-dark my-3">
                    <div class="p-1 bg-danger text-center">
                        <span id="save-file-No-${i}">No.${i}</span>
                    </div>
                    <div>
                        <div class="row">
                            <div class="bg-dark mx-auto">
                                名前:<span id="user-name-${i}">${saveFile["name"]}</span>
                            </div>
                            <div class="bg-dark mx-auto">
                                経過日数：<span id="user-age-${i}">${saveFile["day"]}</span>日
                            </div>                    
                            <div class="bg-dark mx-auto">
                                所持金：<span id="user-monery-${i}">${Tools.convertDigits(saveFile["money"])}</span>円
                            </div>
                        </div>
                        <div>
                            <div class="bg-dark mx-auto">
                                保存時間：<span id="user-clickCounter-${i}">${saveFile["saveTime"]}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <i id="No.${i}-load-btn" class="button fas fa-book-open fa-2x mr-2"></i>
                        <i id="No.${i}-export-btn" class="button fas fa-clipboard fa-2x"></i>
                    </div>
                </div>`
            saveFileFolderDiv.append(saveFileDiv)
        }
        multiPurposeDiv.append(saveFileFolderDiv);
        Render.addEventReturnItemTableBtn(controller)
        Render.addEventExportBtn(controller);
        Render.addEventDirectLoadBtn(controller);
    }

    static addEventExportBtn(controller){
        let saveFileList = controller.getAllSaveFile();
        for(let i = 0; i < saveFileList.length; i++){
            let saveFile = saveFileList[i]
            let buttonID = document.getElementById("No."+ i + "-export-btn");
            buttonID.addEventListener("click", function(){
                navigator.clipboard.writeText(JSON.stringify(saveFile))
                alert("クリップボードにコピーしました！");
            })
        }
    }

    static addEventDirectLoadBtn(controller){
        let saveFileList = controller.getAllSaveFile();
        for(let i = 0; i < saveFileList.length; i++){
            let saveFile = saveFileList[i]
            let buttonID = document.getElementById("No."+ i + "-load-btn");
            buttonID.addEventListener("click", function(){
                controller.loadData(saveFile);
                alert("No."+ i +"をロードしました！");
            })
        }
    }

    static createItemTable(controller){
        let user = controller.getUser();
        let multiPurposeDiv = document.getElementById("r-side-middle-div");
        multiPurposeDiv.innerHTML=``;

        let itemTableDiv = document.createElement("div");
        let itemAndAbilityList = user.getAbilitiesAndItemsData();
        itemTableDiv.id = "item-table";
        itemTableDiv.classList.add("overflow-auto", "col-12", "bg-secondary", "item-cards");

        for(let i=0 ; i<itemAndAbilityList.length; i++){
            let item = itemAndAbilityList[i];
            let tmpString;
            if(item.getItemType() == "Stock"){
                tmpString = `総額: ${Tools.convertDigits(item.getInvestmentAmount())}円`
            }else{
                tmpString = `所持数: ${item.getItemQuantity()}/${item.getItemMaxQuantity()}</span>`
            }

            let purchaseBtnColor;
            let purchaseText;
            if(item.getItemUnitPrice() > user.getUserMoney() || item.getItemQuantity() >= item.getItemMaxQuantity()){
                purchaseBtnColor = `bg-danger`;
                purchaseText = `不`;
            }else{

                purchaseBtnColor = `bg-success`;
                purchaseText = `買`;
            }
            let itemButtonDiv = document.createElement("div");
            itemButtonDiv.innerHTML =`
                <div id="item-card-${item.itemName}" class=" d-flex align-items-center justify-content-between bg-dark my-3">
                    <img id="item-button-${item.itemName}" class="button item-img-50px" src="${item.imgUrl}">
                        <div class="container row text-center">
                            <div class="col-6 bg-dark">
                                <span id="item-name-${item.itemName}">${item.itemName}</span>
                            </div>
                            <div class="col-6 bg-dark">
                                <span id="item-sum-${item.itemName}">${tmpString}</span>
                            </div>                    
                            <div class="col-6 bg-dark">
                                <span id="price-${item.itemName}">${Tools.convertDigits(item.unitPrice)}円</span>
                            </div>
                            <div class="col-6 bg-dark">
                                <span id="earnMoney-${item.itemName}">${item.getItemType() == "Ability" || item.getItemType() == "TempItem"? "" : Tools.convertDigits(item.earnMoney())+"円/日" }</span>
                            </div>
                        </div>

                    <div id="purchase-button-${item.itemName}" class="p-3 button ${purchaseBtnColor}">
                        <span>${purchaseText}</span>
                    </div>
                </div>`
            itemTableDiv.append(itemButtonDiv);
        }


        multiPurposeDiv.append(itemTableDiv);
        Render.addEventDirectPurchase(controller);
        Render.addEventImgBtn(controller);
    }

    static createHamburgerButton(controller){
        let hamburgerButtonDiv =  document.getElementById("l-side-middle-div");"border-rounded"
        let hamburger = controller.getUser().getUserHamburger();
        hamburgerButtonDiv.innerHTML = `
                    <img id="hamburger-button" class="burgerImg d-block mx-auto pt-5" src="${hamburger.imgUrl}">
                `
        Render.addEventMakeHamburger(controller)
    }

    static createUserInfoBoard(controller){
        let infoBoardDiv = document.getElementById("r-side-upper-div");
        let user = controller.getUser();
        infoBoardDiv.classList.add("container", "row", "text-center", "m-auto");
        infoBoardDiv.innerHTML = `
            <div id="info-board" class="container row text-center justify-content-between">
                <div class="col-6 bg-secondary">
                    <span id="user-name">${user.getUserName()}<span>
                </div>
                <div class="col-6 bg-secondary">
                    <span id="user-age">${user.getUserAge()}</span> 歳
                </div>                    
                <div class="col-6 bg-secondary">
                    <span id ="day">${user.getUserDay()}</span> 日
                </div>
                <div class="col-6 bg-secondary">
                    <span id ="user-money">${Tools.convertDigits(user.getUserMoney())}</span> 円
                </div>
            </div>`;
    }

    static refreshEveryDay(user){
        let daySpan = document.getElementById("day");
        let userAgeSpan = document.getElementById("user-age");
        let userMoneySpan = document.getElementById("user-money");
        let userNameSpan = document.getElementById("user-name");
        let getDailyAllowanceSpan = document.getElementById("user-daily-allowance");

        daySpan.innerHTML = user.getUserDay();
        userAgeSpan.innerHTML = user.getUserAge();
        userMoneySpan.innerHTML = Tools.convertDigits(user.getUserMoney());
        userNameSpan.innerHTML = user.getUserName();
        getDailyAllowanceSpan.innerHTML = Tools.convertDigits(user.getDailyAllowanceNum());

        // Render.refreshPurchaseButton(user);

    }

    static refreshPurchaseButton(user){
        let itemAndAbilityList = user.getAbilitiesAndItemsData();

        for(let i=0 ; i<itemAndAbilityList.length; i++) {
            let item = itemAndAbilityList[i];
            let purchaseButton = document.getElementById("purchase-button-"+item.itemName);
            if(purchaseButton === null) continue;
            if(item.getItemUnitPrice() > user.getUserMoney() || item.getItemQuantity() >= item.getItemMaxQuantity()){
                if( purchaseButton.classList.contains('bg-success'))purchaseButton.classList.remove('bg-success');
                purchaseButton.classList.add("bg-danger")
                purchaseButton.innerHTML = `不`;
            }else{
                if( purchaseButton.classList.contains('bg-danger'))purchaseButton.classList.remove('bg-danger');

                purchaseButton.classList.add('bg-success')
                purchaseButton.innerHTML = `買`;
            }
        }    }

    static refreshEveryClick(user){
        let userMoneySpan = document.getElementById("user-money");
        userMoneySpan.innerHTML = Tools.convertDigits(user.getUserMoney());
        let clickCounterSpan = document.getElementById("user-clickCounter");
        clickCounterSpan.innerHTML = user.getClickCounter();

        let itemAndAbilityList = user.getAbilitiesAndItemsData();
        for(let i=0 ; i<itemAndAbilityList.length; i++) {
            let item = itemAndAbilityList[i];
            let purchaseButton = document.getElementById("purchase-button-"+item.itemName);
            if(item.getItemUnitPrice() > user.getUserMoney() || item.getItemQuantity() >= item.getItemMaxQuantity()){
                purchaseButton.classList.remove('bg-success');
                purchaseButton.classList.add("bg-danger")
                purchaseButton.innerHTML = `不`;
            }else{
                purchaseButton.classList.remove('bg-danger');
                purchaseButton.classList.add('bg-success')
                purchaseButton.innerHTML = `買`;
            }
        }
    }

    static refreshEveryPurchaseItem(user, itemName){
        let item = user.getItemObj(itemName);
        let userMoneySpan = document.getElementById("user-money");
        userMoneySpan.innerHTML = Tools.convertDigits(user.getUserMoney());

        let tmpString

        if(item.getItemType() == "Stock"){
            tmpString = `総額: ${Tools.convertDigits(item.getInvestmentAmount())}円`
        }else{
            tmpString = `所持数: ${item.getItemQuantity()}/${item.getItemMaxQuantity()}</span>`
        }

        // if(item.getClassName() === "Stock"){
        let userItemStockSumSpan = document.getElementById("item-sum-"+item.itemName);
        userItemStockSumSpan.innerHTML = tmpString;
        let userItemUnitPrice = document.getElementById("price-"+item.itemName);
        userItemUnitPrice.innerHTML = `${Tools.convertDigits(item.unitPrice)}円`;
        // }
        if(item.getClassName() !== "Ability" && item.getClassName() !== "TempItem"){
            let userItemProfitSpan = document.getElementById("earnMoney-"+item.itemName);
            userItemProfitSpan.innerHTML = `${Tools.convertDigits(item.earnMoney())}円/日`
        }else{

        }

        if(item.getClassName() === "TempItem"){
            let hamburgerNameSpan = document.getElementById("hamburger-name")
            hamburgerNameSpan.innerHTML = user.hamburger.getItemName();

        }
        Render.refreshPurchaseButton(user);


    }

    static createLeftSideDiv(){
        let leftSideDiv = document.createElement("div");
        leftSideDiv.classList.add("col-5","bg-dark","item-box");
        leftSideDiv.setAttribute("id","left-side");
        let leftSideUpperDiv = document.createElement("div");
        leftSideUpperDiv.setAttribute("id", "l-side-upper-div");
        let leftSideMiddleDiv = document.createElement("div");
        leftSideMiddleDiv.setAttribute("id", "l-side-middle-div");
        let leftSideLowerDiv = document.createElement("div");
        leftSideLowerDiv.setAttribute("id", "l-side-lower-div");

        leftSideDiv.append(leftSideUpperDiv);
        leftSideDiv.append(leftSideMiddleDiv);
        leftSideDiv.append(leftSideLowerDiv);

        return leftSideDiv;
    }

    static createRightSideDiv(){
        let rightSideDiv = document.createElement("div");
        rightSideDiv.classList.add("col-7", "bg-dark", "item-box", "flex-column");
        rightSideDiv.setAttribute("id","right-side");
        let rightSideUpperDiv = document.createElement("div");
        rightSideUpperDiv.setAttribute("id", "r-side-upper-div");
        let rightSideMiddleDiv = document.createElement("div");
        rightSideMiddleDiv.setAttribute("id", "r-side-middle-div");
        let rightSideLowerDiv = document.createElement("div");
        rightSideLowerDiv.setAttribute("id", "r-side-lower-div");

        rightSideDiv.append(rightSideUpperDiv);
        rightSideDiv.append(rightSideMiddleDiv);
        rightSideDiv.append(rightSideLowerDiv);

        return rightSideDiv;
    }

    static createLoginPage(){
        let mainPageDiv = document.getElementById("main-page-div");
        mainPageDiv.innerHTML=``;
        mainPageDiv.classList.add("d-flex", "justify-content-around");

        let loginDiv = document.createElement("div")
        loginDiv.innerHTML = `
            <div class="container d-flex flex-wrap">
                <div class="col-md-6 col-12 my-2">
                    <button id="newgame-btn" class="btn btn-primary btn-block" >NewGame</button>
                </div>

                <div class="col-md-6 col-12 my-2">
                    <button id="load-local-storage-btn" class="btn btn-success btn-block" >LoadGame</button>
                </div>
            </div>
            `
        mainPageDiv.append(loginDiv)
        Render.addEventNewGameBtn();
        // Render.addEventLoadBtn();
        Render.addEventLoadLocalStorageBtn();
    }


    static createMainPage(name, saveData){
        let game = new Controller();
        if(saveData){
            game.loadData(saveData);
        }else{
            game.setUser(name);
            game.timeStart();
        }
        let mainPageDiv = document.getElementById("main-page-div");
        mainPageDiv.innerHTML = ``;
        mainPageDiv.className = ``;

        mainPageDiv.classList.add("d-flex", "justify-content-around");

        mainPageDiv.append(Render.createLeftSideDiv());
        mainPageDiv.append(Render.createRightSideDiv());

        Render.createHamburgerInfoBoadDiv(game)
        Render.createHamburgerButton(game)

        Render.createUserInfoBoard(game);
        Render.createItemTable(game);
        Render.createSaveBtn(game);

    }


}

Render.createLoginPage();