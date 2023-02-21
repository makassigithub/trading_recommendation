import moment from 'moment'

const tenDaysFormNow = () => {
    const dates = [];
    for(let i = 1; i< 10; ++i){
       dates.push(moment().subtract(i,'days'))
    }

    console.log(dates);

    return dates;
}

const fillRecords = (dates) => {
   return dates.map(date => ({
        day: date,
        price : 0,
        socialMediaCount: 0,
    }))
}

export const dates = tenDaysFormNow();

export const  TIME_WINDOWS =['10 days','20 days','30 days']

const stocksDB = {
    FACEBOOK: {
        name: 'Facebook',
        records:fillRecords(dates),
    },
    APPLE: {
        name: 'Apple',
        records:fillRecords(dates),
    },
    GOOGLE: {
        name: 'Google',
        records:fillRecords(dates),
    },
    MICROSOFT: {
        name: 'Microsoft',
        records:fillRecords(dates),
    },
}

console.log(stocksDB);

export default stocksDB;