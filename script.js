import axios from 'axios';
 
const cookies = "_HYVUUID=485c8b1f-8d96-4b2a-b613-3e2a47b93e60; HYV_LOGIN_PLATFORM_OPTIONAL_AGREEMENT={%22content%22:[]}; DEVICEFP_SEED_ID=04a7664ad80d8807; DEVICEFP_SEED_TIME=1742488246712; _MHYUUID=d37f4c80-58eb-4239-a6d9-a5be7c9fc131; ltoken_v2=v2_CAISDGNlMXRidXdiMDB6axokNDg1YzhiMWYtOGQ5Ni00YjJhLWI2MTMtM2UyYTQ3YjkzZTYwIOCF8b4GKI7Ig7wGMJa_jXRCC2hrNGVfZ2xvYmFs.4ELcZwAAAAAB.MEUCIFchNSVgmHzk7XG4fEKpH2Toab1OuPnDK1uJEcOUi15HAiEAiMX5Dnqh_eC1kIdtjSTiBGGYkdXdm9GB0SGg0ejqlcM; ltmid_v2=1urkefd753_hy; ltuid_v2=243490710; HYV_LOGIN_PLATFORM_LOAD_TIMEOUT={}; mi18nLang=zh-cn; DEVICEFP=38d7f4e9d3bf6; HYV_LOGIN_PLATFORM_TRACKING_MAP={%22sourceValue%22:%2276%22}; _gid=GA1.2.1089193815.1742635484; HYV_LOGIN_PLATFORM_LIFECYCLE_ID={%22value%22:%2204248e3f-9d3c-4f63-b29d-e14f9473d488%22}; _ga_54PBK3QDF4=GS1.1.1742638003.4.0.1742638003.0.0.0; _ga_T9HTWX7777=GS1.1.1742638003.4.0.1742638003.0.0.0; _ga=GA1.1.897878441.1742488247";
const url = "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=zh-tw&act_id=e202102251931481";

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

sendPostRequest(url, data);
