/***************\
  config loading
\***************/
import Config from './config/config';

/***************\
  lang loading
\***************/
import zh_cn from './i18n/zh_cn';
import zh_tw from './i18n/zh_tw';
import de from './i18n/de';
import en from './i18n/en';
import fr from './i18n/fr';
import jp from './i18n/jp';
const
    Langs = {
        'zh_cn': zh_cn,
        'zh_tw': zh_tw,
        'de': de,
        'en': en,
        'fr': fr,
        'jp': jp,
    },
    Lang = Langs[Storage.lang ? Storage.lang : Config.lang]
;

/***************\
 calc length GBK
\***************/
function strlen(val) {
    if(!val){
        return 0;
    }
    let len = 0;
    for (let i = 0; i < val.length; i++) {
        len += val.charAt(i).match(/[^\x00-\xff]/ig) != null ? 2 : 1;
    }
    return len;
}

/***************\
   cut the str
\***************/
function substr(str, length, start = 0) {
    let res = '';
    if(str && length !== 0 && start < str.length){
        if (strlen(str) <= length){
            res = str;
        } else {
            let len = 1;
            for (let i = start; i < str.length; i++) {
                if(len <= length){
                    res += str[i];
                    len += (str.charAt(i).match(/[^\x00-\xff]/ig) != null) ? 2 : 1;
                } else {
                    break;
                }
            }
        }
    }

    return res;
}

/***************\
 create rand str
\***************/

function rand(length, type){
    const num = '0123456789', letM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', letm = 'abcdefghijklmnopqrstuvwxyz';

    let arr = [] , str = '';
    switch (type) {
        case 'letter': arr = letM; break;
        case 'mixm': arr = num + letm; break;
        case 'mixM': arr = num + letM; break;
        default: arr = num + letm + letM;
    }

    for(let i=0; i < length; i++){
        str += arr[Math.round(Math.random() * (arr.length-1))];
    }
    return str;
}

/***************\
      Output
\***************/
export {
    Config, // 配置文件
    Lang,   // 获取语言字符串函数
    Langs,  // 获取语言
    rand,   //随机字符串生成
    strlen, //计算字符串长度（GBK）
    substr, //截取字符串长度
}