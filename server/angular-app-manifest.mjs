
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5097, hash: 'a9048b17c6e8af9386777eb3b72c82049e75a5e31bbc7990866df55ff4fee267', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '92c25199f2cb3010aef5635965801a37b598fd3da95ab6bfc5cd63e3ad1b8a1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 16082, hash: '924e63f1908221a1b74a11ff73c6933b36ef070359037fbb041930b6754a5119', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16082, hash: '924e63f1908221a1b74a11ff73c6933b36ef070359037fbb041930b6754a5119', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16082, hash: '924e63f1908221a1b74a11ff73c6933b36ef070359037fbb041930b6754a5119', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 16082, hash: '924e63f1908221a1b74a11ff73c6933b36ef070359037fbb041930b6754a5119', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-O26SLNDE.css': {size: 249769, hash: 'rmeR5FWfErw', text: () => import('./assets-chunks/styles-O26SLNDE_css.mjs').then(m => m.default)}
  },
};
