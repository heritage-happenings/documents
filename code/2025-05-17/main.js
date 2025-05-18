
const COR = {

    // Used by GFO ~ github file open
    defaultFile: "README.md",
    pathContent: "../../",

    // Used by GTV ~ github tree view
    user: "heritage-happenings",
    repo: "documents",
    branch: "main",

    urlSource: "https://github.com/heritage-happenings/heritage-happenings.github.io",
    urlPathContent: "https://heritage-happenings.github.io/documents",
    urlPushPath: "https://heritage-happenings.github.io/documents",

    menuTitle: "Heritage Happenings",
    version: "Version: 2025-05-17 17:07",
 
    filterFolders: [], //[ "code" ],

    ignoreFiles: [], //["404.html", "favicon.ico", "index.html", "readme.html"],
}

/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '10');
r.style.setProperty('--mnu-width', '19rem');

