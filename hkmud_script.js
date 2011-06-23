var dict = {
    "Simon Chow":       "總舵舵主(Vbman)",
    "Papaya Jht":       "痞子蔡(Jht)",
    "PP Wong":          "小吉(Gut)",
    "Paul Chan":        "慕容大笑(Paulckp)",
    "Tim Tsang":        "慕容傷(Spell)",
    "Raymond Sin":      "天神(Raymond)",
    "Edmund Lau":       "張毛鵝(Astral)",
    "Pah Chin Hee":     "風風兒(Sephirov)",
    "Arthur Yeung":     "先機(Yct)",
    "Wheel Lun":        "墮天風(Angelsword)",
    "Teresa Lee":       "柳月(Liuyue)",
    "Mark Lee":         "麻牛麵(Noodle)",
    "Philip Wong":      "日光子(sunlight)",
    "Tyrone Bench":     "唯讀子(Cdrom)",
    "Patrick Chan":     "樂心(Sumpat)",
    "Frank Lee":        "天零(Zero)",
    "Perry Li":         "慕容戈兒(Dragonmen)",
    "Terence Wong":     "慕容檸檬(Lemon)",
};

function replace_names() {
    for (var key in dict)
    {
        var value = dict[key];
        if (value)
        {
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp(key, "g"), value);
        }
    }
}

replace_names();
