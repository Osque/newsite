# Gzip compression
 activate :gzip

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :protect_emails
activate :sprockets
activate :i18n, :mount_at_root => :false
activate :directory_indexes
set :trailing_slash, false

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

redirect "index.html", to: "fr/home.html"
redirect "fr/index.html", to: "fr/home.html"
redirect "home.html", to: "fr/home.html"
redirect "en/index.html", to: "en/home.html"
