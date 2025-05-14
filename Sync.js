const fs = require('fs');
const path = require('path');
const axios = require('axios');

const LOCAL_DIR = path.join(__dirname, 'imagenes');
const MAPPING_FILE = path.join(__dirname, 'map.json');
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyiAqcyUa-y9HlQ0xjeWzqX2xLNJTCzJGN44yCtzHT_suLsOXdoWZTFFxoLgNcZOQXHxg/exec';

let nameMap = fs.existsSync(MAPPING_FILE)
    ? JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'))
    : {};




function getStartingId() {
    if (!fs.existsSync(LOCAL_DIR)) return 234339;

    const files = fs.readdirSync(LOCAL_DIR)
        .map(f => parseInt(f.split('.')[0])) 
        .filter(n => !isNaN(n));

    return files.length > 0 ? Math.max(...files) + 1 : 234339;
}



let currentId = getStartingId();


// Devuelve el siguiente número disponible
function getNextFilename(originalName) {
    if (nameMap[originalName]) {
        return nameMap[originalName];
    } else {
        const filename = `${currentId}.jpg`;
        nameMap[originalName] = filename;
        currentId++;
        return filename;
    }
}

async function fetchDriveImages() {
    const res = await axios.get(SCRIPT_URL);
    return res.data; // [{ name, url }]
}

function getLocalImages() {
    return fs.existsSync(LOCAL_DIR)
        ? fs.readdirSync(LOCAL_DIR)
        : [];
}

async function downloadImage(driveImage, localName) {
    const filePath = path.join(LOCAL_DIR, localName);
    const writer = fs.createWriteStream(filePath);
    const response = await axios({ url: driveImage.url, method: 'GET', responseType: 'stream' });

    return new Promise((resolve, reject) => {
        response.data.pipe(writer);
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

async function syncImages() {
    if (!fs.existsSync(LOCAL_DIR)) fs.mkdirSync(LOCAL_DIR);

    const driveImages = await fetchDriveImages();
    const driveNames = driveImages.map(img => img.name);
    const localImages = getLocalImages();

    // Descargar nuevas imágenes
    for (const img of driveImages) {
        if (!nameMap[img.name]) {
            const newName = getNextFilename(img.name);
            console.log(`⬇️ Descargando y nombrando: ${img.name} → ${newName}`);
            await downloadImage(img, newName);
        }
    }

    // Eliminar imágenes que ya no están en Drive
    for (const originalName in nameMap) {
        if (!driveNames.includes(originalName)) {
            const localName = nameMap[originalName];
            const localPath = path.join(LOCAL_DIR, localName);
            if (fs.existsSync(localPath)) {
                console.log(`🗑️ Eliminando: ${localName}`);
                fs.unlinkSync(localPath);
            }
            delete nameMap[originalName];
        }
    }

    // Guardar el nuevo mapeo
    fs.writeFileSync(MAPPING_FILE, JSON.stringify(nameMap, null, 2));

    console.log('✅ Sincronización completa');
}

syncImages().catch(console.error);
