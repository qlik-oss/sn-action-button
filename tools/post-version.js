const { exec } = require('child_process');

exec('yarn spec');
exec('git commit -a -m "docs: bump api specs"');

// bump qext
// const copyQext = (folder) => {
//   if (!fs.existsSync(folder)) {
//     fs.ensureDirSync(folder);
//   }
//   const qext = pkg.qext || {};
//   const contents = {
//     name: qext.name || qname,
//     description: `${pkg.description} (${pkg.version})`,
//     author: pkg.author,
//     icon: qext.icon || 'extension',
//     type: 'visualization',
//     version: pkg.version,
//     supernova: qext.supernova,
//     __next: !qext.supernova ? true : undefined,
//   };

//   if (!fs.existsSync(dist)) {
//     fs.ensureDirSync.sync(dist);
//   }
//   if (qext.preview) {
//     contents.preview = qext.preview;
//     fs.copyFileSync(path.resolve(cwd, `assets/${qext.preview}`), path.resolve(dist, qext.preview));
//   }
//   fs.writeFileSync(path.resolve(folder, `${qname}.qext`), JSON.stringify(contents, null, 2));
// };
