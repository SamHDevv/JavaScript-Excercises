var bulletPosition = 2;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};


const fireGun = (x) => {
    if (x === bulletPosition) return ("You're dead!");
    else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));