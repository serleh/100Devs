//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHarkCharacter(chName, chStance, chMove, chSponsor) {
  this.characterName = chName;
  this.stance = chStance;
  this.sponsor = chSponsor;
  this.specialMove = chMove;
  this.flip = function () {
    console.log("KICKCCCCCK");
  };
  this.taunt = function () {
    console.log(`Dont make me use my ${this.specialMove}`);
  };
  this.grab = function () {
    console.log("MELON GRABBB");
  };
}

let kareemCampbell = new TonyHarkCharacter(
  "Kareem",
  "Goofy",
  "Element",
  "Ghetto Bird"
);
