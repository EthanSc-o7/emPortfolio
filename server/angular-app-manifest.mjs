
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/emPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/emPortfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/emPortfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/emPortfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/emPortfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/emPortfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5109, hash: '997ae64b847ed449e82901631735b0e8dd6da8df80393f6bddecfa28fa89e2a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: 'db4fb731310bef4ccb8f7edcd27b02e2fb3d8de74f5333a4eb5ab998ab44c50a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 16094, hash: '01285d5c18deb232261231865cba57bace8b986b319264bbda4f468b5dfebd0d', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 16094, hash: '01285d5c18deb232261231865cba57bace8b986b319264bbda4f468b5dfebd0d', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16094, hash: '01285d5c18deb232261231865cba57bace8b986b319264bbda4f468b5dfebd0d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16094, hash: '01285d5c18deb232261231865cba57bace8b986b319264bbda4f468b5dfebd0d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-O26SLNDE.css': {size: 249769, hash: 'rmeR5FWfErw', text: () => import('./assets-chunks/styles-O26SLNDE_css.mjs').then(m => m.default)}
  },
};
