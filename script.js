// script.js
document.getElementById('runButton').addEventListener('click', function () {
    const html = document.getElementById('htmlInput').value;
    const css = document.getElementById('cssInput').value;
    const js = document.getElementById('jsInput').value;

    const outputFrame = document.getElementById('outputFrame');
    const output = outputFrame.contentDocument || outputFrame.contentWindow.document;

    output.open();
    output.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
        </html>
    `);
    output.close();
});
