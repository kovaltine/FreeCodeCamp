//Clock
let ClockHour = document.getElementById("#hours");
let ClockMinute = document.getElementById("#minutes");
let ClockSecond = document.getElementById("#seconds");

function getTime() {
    //create a date object
    const time = new Date();
    //get the time values from the date object
    ClockHour = time.getHours();
    ClockMinute = time.getMinutes();
    ClockSecond = time.getSeconds();
    //make it so time variable is always taking up two spaces
    if (ClockHour < 10) {
        ClockHour = '0' + ClockHour;
    }
    if (ClockMinute < 10) {
        ClockMinute = '0' + ClockMinute;
    }
    if (ClockSecond < 10) {
        ClockSecond = '0' + ClockSecond;
    }
    //replace it on the webpage
    hours.innerHTML = ClockHour;
    minutes.innerHTML = ClockMinute;
    seconds.innerHTML = ClockSecond;
}
//set an interval so the clock is always updating
setInterval(function () { getTime() }, 1000);


//arrays for quotes
let morningQuotes = [
    {
        "author": "Mother Theresa",
        "quote": "“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.”",
    },
    {
        "author": "Lao Tzu",
        "quote": "“Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.”",
    },
    {
        "author": "Meister Eckhart",
        "quote": "“Be willing to be a beginner every single morning.”",
    },
    {
        "author": "Marcia Carrington",
        "quote": "“A morning coffee is my favorite way of starting the day, settling the nerves so that they don't later fray.”",
    },
    {
        "author": "Marty Rubin",
        "quote": "“Morning will come, it has no choice.”",
    },
    {
        "author": "Lemony Snicket, The Blank Book",
        "quote": "“Morning is an important time of day, because how you spend your morning can often tell you what kind of day you are going to have.”",
    },
    {
        "author": "Charlotte Eriksson",
        "quote": "“I woke up early and took the first train to take me away from the city. The noise and all its people. I was alone on the train and had no idea where I was going, and that’s why I went there. Two hours later we arrived in a small town, one of those towns with one single coffee shop and where everyone knows each other’s name. I walked for a while until I found the water, the most peaceful place I know. There I sat and stayed the whole day, with nothing and everything on my mind, cleaning my head. Silence, I learned, is some times the most beautiful sound.”",
    }
]

let afternoonQuotes = [
    {
        "author": "Dr. Seuss",
        "quote": "“How did it get so late so soon?”",
        //"timeOfDay": "20"
    },
    {
        "author": "Bill Watterson",
        "quote": "“There's never enough time to do all the nothing you want.”",
        "timeOfDay": "16"
    },
    {
        "author": "Jean-Paul Sartre , Nausea",
        "quote": "“Three o'clock is always too late or too early for anything you want to do.”",
        //"timeOfDay": "15"
    },
    {
        "author": "Wilkie Collins, The Woman in White",
        "quote": "“My hour for tea is half-past five, and my buttered toast waits for nobody.”"
    },
    {
        "author": "Antoine de Saint-Exupéry, The Little Prince",
        "quote": "“If you come at four in the afternoon, I'll begin to be happy by three.”"
    },
    {
        "author": "Jonathan Grimwood, The Last Banquet",
        "quote": "“The afternoon knows what the morning never suspected.”"
    },
    {
        "author": "Dodie Smith",
        "quote": "“It is the still, yellow kind of afternoon when one is apt to get stuck in a dream if one sits very quiet”"
    }
]

let eveningQuotes = [
    {
        "author": "Vladimir Nabokov, Pale Fire",
        "quote": "“The evening is the time to praise the day”"
    },
    {
        "author": "Bamigboye Olurotimi",
        "quote": "“Take an evening stroll, enjoy the cool breeze while praising God, empty out the negative, and make room for more Joy.”"
    },
    {
        "author": "Jardine Libaire, White Fur",
        "quote": "“She likes the mystery of that changeover, those fifteen minutes of sundown when the streets and trees and people and parked cars are delicate and immediate, every sound and smell and movement amplified by the lowest light or the lightest darkness. Even a city that’s broken and dirty can, in that time, be divine and intimate.”"
    },
    {
        "author": "Hermann Hesse, Steppenwolf",
        "quote": "“The morning was a wretched time of day for him. He feared it and it never brought him any good. On no morning of his life had he ever been in good spirits nor done any good before midday, nor ever had a happy idea, nor devised any pleasure for himself or others. By degrees during the afternoon he warmed and became alive, and only towards evening, on his good days, was he productive active and sometimes, aglow with joy.”"
    },
    {
        "author": "Giovannie de Sadeleer",
        "quote": "“The last thought in the evening is often the first one in the morning.”"
    },
    {
        "author": "Ann Beattie",
        "quote": "“Nothing is so lovely as a quietly snoring dog and some evening Brahms, as you sit in a comfortably overstuffed chair with your feet on the footstool.”"
    },
    {
        "author": "Rabindranath Tagore, Stray Birds",
        "quote": "“My day is done, and I am like a boat drawn on the beach, listening to the dance-music of the tide in the evening.”"
    }
]

function getQuote() {
    //check the clock for what hour it is
    const thisHour = document.getElementById("hours").innerText;

    //convert thisHour to a number
    let quoteHour = parseInt(thisHour);

    //determine the quote based on the hour range
    if (quoteHour > 6 && quoteHour < 13) {
        //get a random number within the array range
        let x = Math.floor(Math.random() * morningQuotes.length)
        //use that number to select a quote from the array
        document.getElementById("hourlyQuote").innerHTML = morningQuotes[x].quote;
        document.getElementById("quoteAuthor").innerHTML = morningQuotes[x].author;
    }
    if (quoteHour > 12 && quoteHour < 17) {
        //get a random number within the array range
        let x = Math.floor(Math.random() * afternoonQuotes.length)
        //use that number to select a quote from the array
        document.getElementById("hourlyQuote").innerHTML = afternoonQuotes[x].quote;
        document.getElementById("quoteAuthor").innerHTML = afternoonQuotes[x].author;
    }
    if (quoteHour > 16 && quoteHour < 25) {
        //get a random number within the array range
        let x = Math.floor(Math.random() * eveningQuotes.length)
        //use that number to select a quote from the array
        document.getElementById("hourlyQuote").innerHTML = eveningQuotes[x].quote;
        document.getElementById("quoteAuthor").innerHTML = eveningQuotes[x].author;
    } else if (quoteHour < 7) {
        let auto = "You're up so early! go get some coffee!";
        document.getElementById("hourlyQuote").innerHTML = auto;
        document.getElementById("quoteAuthor").innerHTML = "Me";
    }
}





