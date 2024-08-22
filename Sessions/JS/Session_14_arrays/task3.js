const urls = [
    "https://www.x.com/users?id=545",
    "http://www.z.com/users?id=545&limit=10",
    "htps://www.m.com/users?id=545",
    "zhttps://www.y.com/users?id=545&limit=15",
    "https://www.y.com/users?id=545&limit=45",
];
const result = [];
for(url of urls){
    if(url.startsWith("https")){
        const urlsplitter = url.split('?')[1];
        const limitsplitter = url.split('&')[1];
        if(limitsplitter){
            const splitterarray = [];
            splitterarray.push(limitsplitter.split('='));
            result.push(splitterarray);
        }
        else{
            const splitterarray = [];
            splitterarray.push(urlsplitter.split('='));
            result.push(splitterarray);
        }
    }
    else{
        result.push("Not Secure");
    }
}
console.log(result);