export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"t":"Get Started"} }],
  ["/install-vuepress.html", { loader: () => import(/* webpackChunkName: "install-vuepress.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/install-vuepress.html.js"), meta: {"t":"vuepress 安装主题"} }],
  ["/books/cs-basics.html", { loader: () => import(/* webpackChunkName: "books_cs-basics.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/books/cs-basics.html.js"), meta: {"t":"计算机基础必读经典书籍","i":"computer"} }],
  ["/golang/home.html", { loader: () => import(/* webpackChunkName: "golang_home.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/golang/home.html.js"), meta: {"t":"golang 语言的介绍","i":"golang"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"Features demo","i":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"Disabling layout and features","i":"gears","O":4} }],
  ["/demo/encryption.html", { loader: () => import(/* webpackChunkName: "demo_encryption.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/encryption.html.js"), meta: {"t":"Encryption Article","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"Layout","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown Enhance","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"Page Config","i":"file","O":3} }],
  ["/k8s/home.html", { loader: () => import(/* webpackChunkName: "k8s_home.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/home.html.js"), meta: {"t":"k8s 的介绍","i":"creative"} }],
  ["/k8s/resource/pod.html", { loader: () => import(/* webpackChunkName: "k8s_resource_pod.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/resource/pod.html.js"), meta: {"t":"pod 资源"} }],
  ["/k8s/resource/service.html", { loader: () => import(/* webpackChunkName: "k8s_resource_service.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/resource/service.html.js"), meta: {"t":"server 资源"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/books/", { loader: () => import(/* webpackChunkName: "books_index.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/books/index.html.js"), meta: {"t":"Books"} }],
  ["/golang/", { loader: () => import(/* webpackChunkName: "golang_index.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/golang/index.html.js"), meta: {"t":"Golang"} }],
  ["/k8s/", { loader: () => import(/* webpackChunkName: "k8s_index.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/index.html.js"), meta: {"t":"K8s"} }],
  ["/k8s/resource/", { loader: () => import(/* webpackChunkName: "k8s_resource_index.html" */"/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/resource/index.html.js"), meta: {"t":"Resource"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
