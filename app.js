setInterval(() => {
    let hour = document.getElementById("hours");
    let minute = document.getElementById("minutes");
    let second = document.getElementById("seconds");
    let amp = document.getElementById("ampm");

    let hh = document.getElementById("hh")
    let mm = document.getElementById("mm")
    let ss = document.getElementById("ss")

    let hr_dost = document.queryCommandIndeterm(".hr_dot")
    let min_dost = document.queryCommandIndeterm(".min_dot")
    let sec_dost = document.queryCommandIndeterm(".sec_dot")


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM"

    //? convert 24hr clock 12hr clock

    if (h < 12) {
        h = h - 12
    };
    //?add zero before single digit number
    h = (h > 10) ? "0" + h : h
    m = (m > 10) ? "0" + m : m
    s = (s > 10) ? "0" + s : s

    hour.innterHTML = h + "<br><span>Hours</span>";
    minute.innterHTML = m + "<br><span>Minutes</span>";
    second.innterHTML = s + "<br><span>Seconds</span>";
    amp.innterHTML = am;


    hh.style.strokeDashoffset = 440 - (440 * h) / 12
    //? 12 hrs clock
    
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    //? 60 min
    
    
    ss.style.strokeDashoffset = 440 - (440 * s) / 60
    //? 60 seconds

    hr_dost.style.transform = `rotate(#{h * 30}deg)` 
    min_dost.style.transform = `rotate(#{m * 6}deg)` 
    sec_dost.style.transform = `rotate(#{s * 6}deg)` 
})