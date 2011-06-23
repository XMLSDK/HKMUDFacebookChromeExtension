// Will retrieve from Google Spreadsheet
var nameDict = {};

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
    for (var key in nameDict)
    {
        var value = null;
        value = nameDict[key];
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

var timer;

function check() {
    clearTimeout(timer);
    replace_names_in_element("pagelet_group");
    replace_emotes_in_element("pagelet_group");
    timer = setTimeout(check, 2000);
}

function init() {
    //console.log("loaded");
    chrome.extension.sendRequest({message: "getNameDict"}, function(response) {
        nameDict = response.nameDict;
        console.log(nameDict);
        replace_names_in_element("pagelet_group");
        replace_emotes_in_element("pagelet_group");
        check();
    });
}

window.onload = init;
