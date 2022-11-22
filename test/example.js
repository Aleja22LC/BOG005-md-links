const dataExample = {
    pathFile: 'C:\\LAB\\BOG005-md-links\\fileTest\\fileProof',
    validateFalse: [
        {
            href: 'https://como.help/nodejs/javascript/como-verificar-si-un-archivo-existe-en-nodejs-asincronicamente.err',
            text: 'esto es un link roto,',
            file: 'C:\\LAB\\BOG005-md-links\\fileTest\\fileProof\\proofMix.md',
            status: 404,
            ok: 'Fail'
        },
        {
            href: "https://www.google.com'",
            text: 'esto es un link,',
            file: 'C:\\LAB\\BOG005-md-links\\fileTest\\fileProof\\proofMix.md',
            status: '404 Server error',
            ok: 'Fail'
        },
    ],
    validateTrue: [
        {
            href: 'https://www.youtube.com/watch?v=YGvrR-vzVaw',
            text: 'youtube link bueno,',
            file: 'C:\\LAB\\BOG005-md-links\\fileTest\\fileProof\\proofMix.md',
            status: 200,
            result: 'Ok!'
        },
        {
            href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
            text: 'recurso,',
            file: 'C:\\LAB\\BOG005-md-links\\fileTest\\fileProof\\proofMix.md',
            status: 200,
            result: 'Ok!'
        },
    ],
}

module.exports = {
    dataExample,
};