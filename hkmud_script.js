var dict = {
    "Arthur Yeung":     "先機(Yct)",
    "Alan Lo":          "野孩子(Mcse)",

    "Billy Fan":        "心兒風(Sumyee)",

    "Candy Chau":       "?(Yinrong)",
    "Calvin Cheung":    "慕容仔(Schanuzer)",
    "Carmen Tong":      "希奈(Kokai)",
    "Chan Tsz Fung":    "天豐(Ctfa)",

    "Dennis Tong":      "公仔風(Dennis)",

    "Edmund Lau":       "慕容雁(Goose)",
    "Eddie Cheng":      "奧丁(Odin)",

    "Fong Silas":       "無頭騎士(Sleepyhollow)",
    "Frank Lee":        "天零(Zero)",
    "Fai Wong":         "芝士子(Cheesecake)",

    "Ivan Kwok":        "清風(Zonezone)",

    "John Lau":         "玄機使(Johnlcf)",
    "Jeff Lai":         "夕陽(Tanaka)",

    "Kenny Chan":       "玉羅剎(Brokenheart)",
    "Ka Wing":          "阿基拉(Akiranokia)",

    "Lewis Lau":        "小桃風(Xiaotao)",

    "Mark Lee":         "麻牛麵(Noodle)",

    "Oldfield So":      "?(Oldfield)",
    
    "Pah Chin Hee":     "風風兒(Sephirov)",
    "Philip Wong":      "日光子(sunlight)",
    "Patrick Chan":     "樂心(Sumpat)",
    "Papaya Jht":       "痞子蔡(Jht)",
    "PP Wong":          "小吉(Gut)",
    "Paul Chan":        "慕容大笑(Paulckp)",
    "Perry Li":         "慕容戈兒(Dragonmen)",

    "Raymond Sin":      "天神(Raymond)",
    "Ricky Chong":      "死鵝老大(Astral)",
    "Rainie Chong":     "菜緒(Rainie)",

    "Sai Hong":         "羅塔爾(Reu)",
    "Simon Chow":       "總舵舵主(Vbman)",
    "Steven Lam":       "沙林(Sandlam)",

    "Tyrone Bench":     "唯讀子(Cdrom)",
    "Tim Tsang":        "慕容傷(Spell)",
    "Teresa Lee":       "柳月(Liuyue)",
    "Terence Wong":     "慕容檸檬(Lemon)",

    "Walter Cheng":     "天華(Tinwa)",
    "Wheel Lun":        "墮天風(Angelsword)",
};

var emote_dict = {
"addoil":"你憋足了勁大喊：大伙兒加油挖啊！ 泥巴下面就是寶貝了！",
"applaud":"你鼓了鼓掌。",
"happy":"你打了個大揖，笑呵呵地說道︰新年好，恭喜發財！",
"jump":"你跳了起來。",
"nomatch":"你仰首面對蒼天，狂笑不已，長嘆道：難道這天底下，竟然沒有人是我的對手？！",
"pk":"你用手摸了摸“咕咕”叫的肚子，心說︰“今天天氣這麼好，干脆再來個‘揚州十日’吧！”不知不覺中口水流了出來。",
"shout":"你咬牙切齒地對著天空大叫：“賊老天！”",
"slogan2":"你振臂高呼：“我們熱愛金庸群俠傳，金庸群俠傳萬歲！”",
};

function replace_names_in_element(id) {
    var e, lastText;
    if (id == 0)
    {
        e = document.body;
    }
    else
    {
        e = document.getElementById(id);
    }
    lastText = e.innerHTML;
    var changed = 0;
    for (var key in dict)
    {
        var value = null;
        value = dict[key];
        if (value != null && lastText != null)
        {
            var newText = lastText.replace(new RegExp(key, "g"), value);
            if (newText != lastText)
            {
                lastText = newText;
                changed++;
            }
        }
    }

    if (changed > 0)
    {
        e.innerHTML = lastText;
    }
}

function replace_emotes_in_element(id) {
    var e, lastText;
    if (id == 0)
    {
        e = document.body;
    }
    else
    {
        e = document.getElementById(id);
    }
    lastText = e.innerHTML;
    var changed = 0;
    for (var key in emote_dict)
    {
        var emote_command = "chat\\* " + key;
        var value = null;
        value = emote_dict[key];
        if (value != null && lastText != null)
        {
            var newText = lastText.replace(new RegExp(emote_command, "g"), value);
            if (newText != lastText)
            {
                lastText = newText;
                changed++;
            }
        }
    }

    if (changed > 0)
    {
        e.innerHTML = lastText;
    }
}

var needChecking = 0;
var t;

function check() {
    clearTimeout(t);
    //if (needChecking == 1)
    {
        replace_names_in_element("pagelet_group");
        replace_emotes_in_element("pagelet_group");
        needChecking = 0;
    }
    t = setTimeout(check, 2000);
}

var nodeInserted = function(event) {
   needChecking = 1;
};

//$(document).ready(function() {
    //console.log("ready");

    //replace_names_in_element(0);
    //replace_emotes_in_element(0);
    //check();

    //$('body').bind("DOMNodeInserted", nodeInserted);
    //document.body.addEventListener("DOMNodeInserted", nodeInserted, false);
//});

function init() {
    //console.log("loaded");
    replace_names_in_element("pagelet_group");
    replace_emotes_in_element("pagelet_group");
    check();
}

window.onload = init;
