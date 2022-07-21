//codigo para compatibilizar con __dirname y no tener problema con las rutas absolutas

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default __dirname;