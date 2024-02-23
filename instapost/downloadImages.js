const fs = require('fs');
const path = require('path');
const axios = require('axios');

const imagesLinks =
    [
        'https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/429197511_938413280673929_6357611074982223671_n.jpg?stp=c0.135.1080.1080a_dst-jpg_e35_s150x150&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=1&_nc_ohc=fwteWpHwd3EAX8xm_Sk&edm=AOUPxh0BAAAA&ccb=7-5&oh=00_AfDnXE9DTLvL8-vZjcjcxbNCavqPQ4vj7nLhYOkVNoQodw&oe=65DD21F3&_nc_sid=9dc660',
        'https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/429067112_430234406331903_3082680293347072450_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=103&_nc_ohc=QpY67YZwZHcAX85Wlj1&edm=AOUPxh0BAAAA&ccb=7-5&oh=00_AfDCUQCizNm7iVtZT_Yn3ekxha6x7XCJa2UoqZV9UwgsDg&oe=65DC4083&_nc_sid=9dc660',
        'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/420635730_836443198249228_1682242738706274827_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=FzbeeE06kmAAX-sgrJW&edm=AOUPxh0BAAAA&ccb=7-5&oh=00_AfCLgrBZ_U5lFF5xJUHaxdlHa5vKJjzx6LnILNq0HsQB2Q&oe=65DDF0FB&_nc_sid=9dc660',
        'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/429032647_1542069843247809_7304844510597105421_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=109&_nc_ohc=zFSyxwTIG24AX-mgOTp&edm=AOUPxh0BAAAA&ccb=7-5&oh=00_AfAtwbB0xG_-KQDrY6v5QZBmAnCh-G78qQEwEfhhbBB2jA&oe=65DDBA2A&_nc_sid=9dc660',
        'https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/429329543_7723011204376117_7398223574310853595_n.jpg?stp=c0.178.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=101&_nc_ohc=8q3K_UqLElcAX_47vrb&edm=AOUPxh0BAAAA&ccb=7-5&oh=00_AfAcluammv7BPqflLaAKzopSoojkAZWONBNigeVKVBTuqA&oe=65DCCC61&_nc_sid=9dc660',
        'https://scontent-sin6-4.cdninstagram.com/v/t39.30808-6/428628249_18412035988023709_1390429119845893820_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=101&_nc_ohc=8MPxLu1ADUIAX9MbIMc&edm=AOUPxh0AAAAA&ccb=7-5&oh=00_AfDJzgTCieLLLcw3hGYyUWDHb54KvuVVfLXpLq4pl1Zx-g&oe=65DC964F&_nc_sid=9dc660',
        'https://scontent-sin6-2.cdninstagram.com/v/t39.30808-6/428638133_18415993018025961_155070474384540515_n.jpg?stp=c0.178.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=109&_nc_ohc=a0ULPDPE8zAAX9WGZvr&edm=AOUPxh0AAAAA&ccb=7-5&oh=00_AfCbsnxoSSezd4zau5Cn_XGMjvK9lEzXdL-dw1KWHOkmIQ&oe=65DDDA58&_nc_sid=9dc660',
        'https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/429576561_2018416465226194_3233621252412427446_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=110&_nc_ohc=BRNcGwQZKCIAX8I5VAF&edm=AOUPxh0BAAAA&ccb=7-5&oh=00_AfArPUMuCMtCtoOx_5IMP9ErGgJ8ic8QCNR_hu1f0Jnlsw&oe=65DCDF9B&_nc_sid=9dc660',
        'https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/429452236_960157065622486_2640634608305219401_n.webp?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=110&_nc_ohc=6r12RwZ6kiAAX9Gds9l&edm=AOUPxh0BAAAA&ccb=7-5&oh=00_AfCG-aISsioMwLH5bvTu7iCOyoI-IjGL0V3McwZnvRWx0Q&oe=65DCAC08&_nc_sid=9dc660',
        'https://scontent-sin6-2.cdninstagram.com/v/t39.30808-6/408996739_18417511999040861_874180233447925889_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=HX6yiDymb_wAX9IED6K&edm=AOUPxh0AAAAA&ccb=7-5&oh=00_AfDbQMG9hO6-ETJfA8kpKF1zpcN1TZQ6TO706Sh2L25Q3Q&oe=65DDC6D8&_nc_sid=9dc660'
    ]



async function downloadImage(url, index) {
    const response = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
        }
    });
    const buffer = Buffer.from(response.data, 'binary');
    const fileExtension = path.extname(new URL(url).pathname);
    fs.writeFile(`./images/image${index}${fileExtension}`, buffer, () =>
        console.log('finished downloading image', index));
}

imagesLinks.forEach((url, index) => downloadImage(url, index));