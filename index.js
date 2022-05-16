// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    return Math.abs(x - 42);
}

function distanceFromHqInFeet(x) {
    return distanceFromHqInBlocks(x)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination*264 - start*264);
}

function calculatesFarePrice(start, destination) {
    const dist = distanceTravelledInFeet(start, destination);
    let price; 
    if (dist <= 400) {
        price = 0;
        return price;
    } else if (dist > 400 & dist <= 2000) {
        price = (dist - 400)*0.02;
        return price
    } else if (dist > 2000 & dist <= 2500) {
        price = 25;
        return price;
    } else if (dist > 2500) {
        return "cannot travel that far";
    }
}