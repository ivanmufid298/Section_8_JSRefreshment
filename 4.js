let bdays = ['10-17','05-19','20-19'];
let result = []

bdays.map( day => {
    result.push(day.replace('-','/'))
    }
);

console.log(result);