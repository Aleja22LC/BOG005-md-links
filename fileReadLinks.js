// Expresiíon regular para leer links
let regexLinks = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
// Expresiíon regular para leer texto
let regexpText = /([\[][(\S)]+[( \S?)]+\]\(ht)+/g;
                 
// función para leer texto
let readingText = (newRoute) => {
    return new Promise((resolve, reject) => {
        if (newRoute) {
            let text = newRoute.match(regexpText);
            resolve(text);
        } else {
            reject(console.log(err));
        }
    });
};
// función para leer links
let readingLinks = (newRoute) => {
    return new Promise((resolve, reject) => {
        if (newRoute) {
            let links = newRoute.match(regexLinks);
            resolve(links);
        } else {
            reject(console.log(err));
        }
    });
};

// module.exports = {
//     readingLinks,
//     readingText,
// };