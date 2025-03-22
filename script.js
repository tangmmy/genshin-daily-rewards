import axios from 'axios';
const cookies = process.env.GENSHIN_COOKIES;
const genshinUrl = "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=zh-tw&act_id=e202102251931481";

const requestHeader = {
    Cookie: cookies,
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br,ztsd',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
    'x-rpc-client_type': '4',
    'Referer': 'https://m.hoyolab.com/',
    'Origin': 'https://m.hoyolab.com'
};

async function sendPostRequest(url, data) {
    try {
        const response = await axios.post(url, data, {
            headers: requestHeader
        });
        console.log("Success:", response.data);
    } catch (error) {
        console.error("Error:", error);
    }
}


const data = { key1: "value1", key2: "value2" };

sendPostRequest(genshinUrl, data);
