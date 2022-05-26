const catchAsync = require('../utils/catchAsync');
const fetch = require("node-fetch");


const getImages = catchAsync(async (req, res) => {
     const response1 =  await fetch('https://my-json-server.typicode.com/coing-dev/photo-api/photos');
    const data1 = await response1.json();

    const response2 =  await fetch('https://my-json-server.typicode.com/coing-dev/photo-api/images');
    const data2 = await response2.json();

    let length = data2[0].length;

    const newData = data2[0].map(item => {
        item.url = item.path;
        item.id = length;

        length++;

        delete item.path;
        return item;
    });

    res.send({ data: [...data1[0], ...newData] });
});

module.exports = {
    getImages
};