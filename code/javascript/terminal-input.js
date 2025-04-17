const searchDictionary = {
    /* Letter: A */
    a: 'https://wiki.archlinux.org/index.php?search=',

    arch: 'https://wiki.archlinux.org/index.php?search=',
    archlinux: 'https://wiki.archlinux.org/index.php?search=',
    archwiki: 'https://wiki.archlinux.org/index.php?search=',

    aur: 'https://aur.archlinux.org/packages?O=0&K=',


    /* Letter: B */
    b: 'https://bsky.app/search?q=',

    bsky: 'https://bsky.app/search?q=',
    bluesky: 'https://bsky.app/search?q=',
    bing: 'https://www.bing.com/search?q=',


    /* Letter: D */
    d: 'https://duckduckgo.com/?t=ffab&q=',

    ddg: 'https://duckduckgo.com/?t=ffab&q=',
    duckduckgo: 'https://duckduckgo.com/?t=ffab&q=',


    /* Letter: G */
    g: 'https://www.google.com/search?q=',

    google: 'https://www.google.com/search?q=',

    gi: 'https://genshin-impact.fandom.com/wiki/Special:Search?query=',
    genshin: 'https://genshin-impact.fandom.com/wiki/Special:Search?query=',


    /* Letter: H */
    h: 'https://honkai-star-rail.fandom.com/wiki/Special:Search?query=',

    hsr: 'https://honkai-star-rail.fandom.com/wiki/Special:Search?query=',
    honkai: 'https://honkai-star-rail.fandom.com/wiki/Special:Search?query=',
    honkaistarrail: 'https://honkai-star-rail.fandom.com/wiki/Special:Search?query=',


    /* Letter: M */
    m: 'https://developer.mozilla.org/en-US/search?q=',

    mozilla: 'https://developer.mozilla.org/en-US/search?q=',


    /* Letter: Q */
    q: 'https://www.qwant.com/?q=',

    qwant: 'https://www.qwant.com/?q=',


    /* Letter: R */
    r: 'https://reddit.com/search/?q=',

    red: 'https://reddit.com/search/?q=',
    reddit: 'https://reddit.com/search/?q=',

    rst: 'https://doc.rust-lang.org/stable/reference/?search=',
    rust: 'https://doc.rust-lang.org/stable/reference/?search=',


    /* Letter: S */
    s: 'https://www.startpage.com/sp/search?query=',

    sp: 'https://www.startpage.com/sp/search?query=',
    stp: 'https://www.startpage.com/sp/search?query=',
    start: 'https://www.startpage.com/sp/search?query=',
    startpage: 'https://www.startpage.com/sp/search?query=',

    starrail: 'https://honkai-star-rail.fandom.com/wiki/Special:Search?query=',

    steam: 'https://store.steampowered.com/search/?term=',


    /* Letter: W */
    w: 'https://en.wikipedia.org/w/index.php?search=',

    wp: 'https://en.wikipedia.org/w/index.php?search=',
    wiki: 'https://en.wikipedia.org/w/index.php?search=',
    wikipedia: 'https://en.wikipedia.org/w/index.php?search=',

    wuwa: 'https://wutheringwaves.fandom.com/wiki/Special:Search?query=',
    wuther: 'https://wutheringwaves.fandom.com/wiki/Special:Search?query=',
    wuthering: 'https://wutheringwaves.fandom.com/wiki/Special:Search?query=',
    wutheringwaves: 'https://wutheringwaves.fandom.com/wiki/Special:Search?query=',


    /* Letter: Y */
    y: 'https://youtube.com/results?search_query=',

    yt: 'https://youtube.com/results?search_query=',
    youtube: 'https://youtube.com/results?search_query=',


    /* Letter: Z */
    z: 'https://zenless-zone-zero.fandom.com/wiki/Special:Search?query=',

    zzz: 'https://zenless-zone-zero.fandom.com/wiki/Special:Search?query=',
    zen: 'https://zenless-zone-zero.fandom.com/wiki/Special:Search?query=',
    zenless: 'https://zenless-zone-zero.fandom.com/wiki/Special:Search?query=',
    zonezero: 'https://zenless-zone-zero.fandom.com/wiki/Special:Search?query=',
    zenlesszero: 'https://zenless-zone-zero.fandom.com/wiki/Special:Search?query=',
    zenlesszonezero: 'https://zenless-zone-zero.fandom.com/wiki/Special:Search?query=',


};

const search = document.getElementById("TERMINAL_INPUT")
search.addEventListener('keydown', function onEvent(event) {
    if (event.key === "Enter") {
        const query = search.value;
        let url = getURL(query);
        if (url != null) {
            window.location.href = url;
            return;
        }
        url = getSpecialSearchURL(query);
        if (url != null) {
            window.location.href = url;
            return;
        }
        const searchQuery = encodeURI(query);
        if (searchQuery.length <= 1) {
            return
        }
        try {
            window.location.href = ("https://www.google.com/search?q=" + searchQuery + "&udm=14");
        } catch (e) { }
    }
});
function getURL(query) {
    let url;
    if (query.includes('.') && !query.includes(' ') && (query.indexOf(".") < query.length - 2)) {
        try {
            url = (new URL(query)).href;
            return url;
        } catch (_) { }
        try {
            url = (new URL("https://" + query)).href;
            return url;
        } catch (_) { }
    }
    return url;
}
function getSpecialSearchURL(query) {
    let url;
    let value = "";
    try {
        while (query.substring(0, 1) == " ") { // remove whitespace from start of query
            query = query.substring(1);
        };
    } catch { console.log("how did u fuck up removing whitespace?????? D:") }
    try {
        if (query.substring(0, 2) == "r/" || query.substring(0, 2) == "R/") {
            let separator = query.indexOf(":");
            if (separator == -1) {
                let sub = query.substring(2);
                return (new URL("https://reddit.com/r/" + sub)).href; // go directly to subreddit if no query found
            }
            let sub = query.substring(2, separator);
            query = query.substring(separator + 1);
            try { // SHAMELESSLY COPY PASTING CODE BLOCK FROM LIKE 10 LINES UP
                while (query.substring(0, 1) == " ") {
                    query = query.substring(1);
                };
            } catch { console.log("how did u fuck up removing whitespace?????? D:") }
            if (query != "") {
                return (new URL("https://reddit.com/r/" + sub + "/search/?q=" + query)).href; // return search subreddit for query
            }
            return (new URL("https://reddit.com/r/" + sub)).href; // something get fucked up ? go straight to subreddit instead C:
        }
    } catch { console.log("oopsie! someone does not know how subreddits work :33") }
    for (const key in searchDictionary) { // search the general query dictionary
        try {
            value = searchDictionary[key];
            if (query.includes(key + ':')) {
                if (query.substring(0, (key.length + 1)) == key + ':') {
                    query = query.substring(key.length + 1);
                    if (query.substring(0, 1) == " ") { query = query.substring(1); };
                    return (new URL(value + query)).href;
                }
            }
        } catch { console.log("awwhh that threw an error >////< mayb try again ?") }
    }
    return url;
}