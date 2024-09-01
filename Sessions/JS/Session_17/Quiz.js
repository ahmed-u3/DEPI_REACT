//Problem 1

function multi(...arr){
    var multilist = [];
    for (i = 0 ; i<arr.length-1; i++)
        {
            mul = arr[0]*arr[i+1]
            multilist.push(mul);
        } 
    return console.log(multilist);
}

multi(5,1,2,3,4,5);

//Problem 2
const api = {
    userDetails: {
        id: 123,
    personalInfo: {
        name: "Ali",
        bdate: {
            year: 1990,
            month: "June",
            day: 15,
            },
        },
    },
    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            sms: false,
        },
    },
    settings: {
        privacy: {
            tracking: false,
            ads: true,
        },
    },
};

const {userDetails:{personalInfo:{name,bdate:{year,month,day}}},
    preferences:{theme,notifications:{
        email,
        sms
    }
},
    settings:{
        privacy:{
            tracking,
            ads
        }
    }
} = api;

console.log(name);
console.log(year);
console.log(month);
console.log(day);
console.log(theme);
console.log(email);
console.log(sms);
console.log(tracking);
console.log(ads);

