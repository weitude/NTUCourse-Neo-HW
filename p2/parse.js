const {readFile, writeFile} = require('fs').promises;

const inputFileName = 'raw_data.json';
const outputFileName = 'clean_data.csv';

async function parseJSONFile(fileName) {
    try {
        const file = await readFile(fileName);
        return JSON.parse(file.toString());
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

function arrayToCSV(data) {
    let output = []
    Object.keys(data).map((item, idx) => {
        output[idx] = [
            data[item]['id'],
            item,
            data[item]['transcript'][0]['score'].replace(/\D/g, ""),
            data[item]['transcript'][1]['score'].replace(/\D/g, ""),
            data[item]['transcript'][2]['score'].replace(/\D/g, ""),
            data[item]['transcript'][3]['score'].replace(/\D/g, ""),
            data[item]['transcript'][4]['score'].replace(/\D/g, "")
        ]
    });
    output.sort()

    let csv = '"id", "name", "chinese", "english", "math", "social", "science"\n'
    const len = output.length
    for (let i = 0; i < len; i++) {
        csv += `"${output[i][0]}","${output[i][1]}"`
        for (let j = 2; j <= 6; j++)
            csv += `,${output[i][j]}`
        if (i !== len - 1)
            csv += "\n"
    }
    return csv;
}

async function writeCSV(fileName, data) {
    await writeFile(fileName, data, 'utf8');
}

(async () => {
    const data = await parseJSONFile(inputFileName);
    const csv = arrayToCSV(data);
    await writeCSV(outputFileName, csv);
    console.log(`Successfully converted ${outputFileName}!\n`);
    console.log(csv)
})();
