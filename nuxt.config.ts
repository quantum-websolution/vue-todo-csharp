// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// ssr: false,
	srcDir: 'src/',
	app: {
		head: {
			title: "todolist",
			htmlAttrs: { lang: "ja" },
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width-device-width, initial-scale=1" },
				{ hid: "description", name:"description", content: "" },
				// {},
				{
					hid: "robots",
					name: "robots",
					content: "noindex, nofollow, noarchive"
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
		}
	},

	// devtools: { enabled: true },

	build: {
		transpile: ['vuetify']
	},

	css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.css'],

	// modules: ["@pinia/nuxt"],

	typescript: {
		shim: false, // shimsファイル生成の無効化（VSCodeでVolarを使う場合はfalseにする）
		strict: true, // 型チェックを厳格化
		typeCheck: false // nuxt devまたはnuxt build時に型チェックを実行
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: "@import '@assets/styles/variable.scss';",
				},
			},
		},
		define: {
			'process.env.DEBUG': false
		},
		// for HMR
		server: {
			watch: {
				usePolling: true
			}
		}
	}
})
