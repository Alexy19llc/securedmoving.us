import { defineNuxtConfig } from 'nuxt/config'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.securedmoving.us',
        },
      },
    ssr: true,
    
    // Add entry css file
    build: {
        transpile: ['@heroicons/vue', '@tailwindcss/typography'],
    },
    // dir: [
    //     // '~/components/',
    // ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxt/image-edge',
        'nuxt-headlessui',
        '@nuxtjs/html-validator',
        'nuxt-purgecss',
        'nuxt-delay-hydration',
        'nuxt-simple-sitemap',
        'nuxt-gtag'
    ],
    image: {
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/alexy-19-llc/image/upload/secured-moving-company',
        },
    },
    content: {
        documentDriven: true,
        markdown: {
            anchorLinks: false,
        },
        nestedProperties: ['category.slug', 'category.name']
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            cssnano: {
                preset: ['default', {
                    mergeRules: false,
                    svgo: false,
                }],
            },
        }
    },
    webpack: {
        extractCSS: true,
        optimization: {
          splitChunks: {
            cacheGroups: {
              styles: {
                name: 'styles',
                test: /\.(css|vue)$/,
                chunks: 'all',
                enforce: true
              }
            }
          }
        }
      },
    delayHydration: {
        mode:'mount'
    },
    sitemap: {
        exclude: [
            '/reviews/**',
            '/faqs/**',
            '/_packing-tips/**',
            '/md/**'
        ],
        include: [
            '/blog/**'
        ]
    },
    gtag: {
        id: 'G-YTFLYBBB92'
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/blog/1', '/blog/2', '/blog/3','/blog/4', '/reviews/1', '/reviews/2', '/reviews/3', '/reviews/4', '/reviews/5']
        }
    },
    app: {
        head: {
          link: [
            { rel: "icon", type: "image/png", href: "/secured-moving-combination-lock.png" },
            { rel: "preconnect", href: "https://res.cloudinary.com/"}
          ]
      }
    }
})
