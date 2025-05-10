
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Flip7/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Flip7"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 610, hash: '396aff95a3c5d3441479aa8a70420d7ea52817a4f202f56aeb3e59e52aa8510f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'c7926e28b000db999ed5e26bf0a95c35fd24d0b94686661a70e7b22d86f90010', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2745, hash: 'af6b035e6f8a2ab7d65024e803fb3d8f9158d9d173464d278e3df08ec7e24fd4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-USLPTMVG.css': {size: 57, hash: 'APJ5sWkotCA', text: () => import('./assets-chunks/styles-USLPTMVG_css.mjs').then(m => m.default)}
  },
};
