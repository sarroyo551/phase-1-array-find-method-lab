// code your solution here

function superbowlWin (arrOfObj) {
    const foundWin = arrOfObj.find(object => object.result === 'W')
    if (foundWin === undefined) {
        return undefined
    } else {
        return foundWin.year
    }
}




/*function superbowlWin(numOfWins) {
    let loss = null;
    for(let result of record){
        if(numOfWins(result) === true){
            loss = result;
        }
    }
    console.log('is this working')
    return loss
}

function isWin(record){
    return record.result === 'W'
}

isWin(2015)*/