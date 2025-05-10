
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
    'index.csr.html': {size: 499, hash: '9c609e91b10ffd22cf7488d770a9205d1955a74fe2a9b66d4a695aef817b0bf2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '50ede395ce49485ab1851c73fe60d29c1643fe9cdec756a0966707c80130ad58', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 657, hash: '6bc782eeba1e77c6b1effda689efced875507ab45cd08d4ea0f26cf62540d5af', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
