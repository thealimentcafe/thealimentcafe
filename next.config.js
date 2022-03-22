/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: 'http://thealiment.cafe/backendapi/api/',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/home': { page: '/home' },
      '/menus/add': { page: '/menus/add' },
      '/menus/list': { page: '/menus/list' },
      '/orders/add-order': { page: '/orders/add-order' },
      '/orders/list': { page: '/orders/list' },
      '/orders/live': { page: '/orders/live' },
      '/orders/view': { page: '/orders/view' },
      '/sales': { page: '/sales' },
      '/stocks/add-item': { page: '/stocks/add-item' },
      '/stocks/list': { page: '/stocks/list' },
      '/stocks/stock-update': { page: '/stocks/stock-update' },
      '/users/list': { page: '/users/list' },
      '/users/add': { page: '/users/add' },
      '/users/edit/:id': { page: '/users/edit/[id]' },
      '/users/view/:id': { page: '/users/view' }
    }
  },
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
  }
}

module.exports = nextConfig
