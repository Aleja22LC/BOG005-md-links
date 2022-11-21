const dataSample = {
    pathFile: 'C:\\LAB\\BOG005-md-links\\fileTest',
    validateFalse: [
        {
            href: "https://www.google.com'",
            text: 'esto es un link,',
            file: 'C:\\LAB\\BOG005-md-links\\fileTest\\proof.md',
            status: '404 Server error',
            ok: 'Fail'
        },
    ],
    validateTrue: [
        {
            href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
            text: 'recurso,',
            file: 'C:\\LAB\\BOG005-md-links\\fileTest\\proof.md',
            status: 200,
            result: 'Ok!'
        }
    ],
}

module.exports = {
    dataSample,
};