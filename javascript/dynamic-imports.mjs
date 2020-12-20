// Importação estática
import * as fs from 'fs';
console.log(fs.readFileSync);

// Importação dinâmica
const runtimeModuleDefinedName = 'fs';
import(runtimeModuleDefinedName).then((modulo) => {
  console.log(modulo.readFileSync);
});

(async () => {
  const modulo = await import(runtimeModuleDefinedName);
  console.log(modulo.readFileSync);
})();
