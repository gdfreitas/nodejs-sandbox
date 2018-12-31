module.exports.build = content => `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>NodeJS - EJS</title>
        </head>
        <body>
            <p>${content}</p>
        </body>
    </html>
`