function Player(name,bdate,teamName){
    this.name = name;
    this.bdate = bdate;
    this.teamName = teamName;
}

Player.prototype.login = function (){
        console.log(`Welcome ${this.name}`);
}
Player.prototype.logout = function (){
        console.log(`Goodbye ${this.name} :'(`);
}
Player.prototype.viewProfile = function (){
    console.log(`Username: ${this.name}`);
    console.log(`Birth Date: ${this.bdate}`);
    console.log(`Team Name: ${this.teamName}`);
}

/*---------------------------------------Defender ------------------------------------------------------------------*/ 
function Defender (name,bdate,teamName,tacklingSkill,strength){
    Player.call(this,name,bdate,teamName);
    this.tacklingSkil = tacklingSkill;
    this.strength = strength;
}
Defender.prototype = Object.create(Player.prototype);
Defender.prototype.constructor = Defender;

Defender.prototype.defend = function(){
    console.log(`name: ${this.name}\nTackling Skills ${this.tacklingSkil}\nStrength ${this.strength}`);
}


/*-------------------------------------------------------Attacker------------------------------------------------*/

function Attacker (name,bdate,teamName,shootingAccuracy,speed){
    Player.call(this,name,bdate,teamName);
    this.shootingAccuracy = shootingAccuracy;
    this.speed = speed;
}
Attacker.prototype = Object.create(Player.prototype);
Attacker.prototype.constructor = Attacker;

Attacker.prototype.attack = function(){
    console.log(`name: ${this.name}\nShooting Accuracy: ${this.shootingAccuracy}\nSpeed ${this.speed}`);
}

/*-----------------------------------------------------Goal keeper---------------------------------- */
function Goalkeeper (name,bdate,teamName,tacklingSkill,strength , divingSkills, reflex){
    Defender.call(this,name,bdate,teamName,tacklingSkill,strength);
    this.divingSkills = divingSkills;
    this.reflex = reflex;
}
Goalkeeper.prototype = Object.create(Defender.prototype);
Goalkeeper.prototype.constructor = Goalkeeper;

Goalkeeper.prototype.save = function(){
    console.log(`name: ${this.name}\nDiving Skill: ${this.divingSkills}\nReflex: ${this.reflex}`);
}

/*---------------------------------------Testing---------------------------------------------------------------------*/

var player = new Player("Ahmed",2003,"Chelsea");
player.login("Ahmed");
player.logout("Ahmed");
player.viewProfile();

var defenderPlayer = new Defender("Mohammed" , 2005 , "Real Madrid",88,75);
defenderPlayer.viewProfile();
defenderPlayer.defend();

var forwardPlayer = new Attacker("Suarez" , 1990 , "Inter Miami", 90 , 80);
forwardPlayer.viewProfile();
forwardPlayer.attack();

var goalKeeperPlayer = new Goalkeeper("Shenawy",1900,"Al-Ahli",50,50,90,80);
goalKeeperPlayer.viewProfile();
goalKeeperPlayer.save();