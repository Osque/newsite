activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets
activate :gzip
activate :protect_emails
activate :i18n, :mount_at_root => :fr
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
  activate :images
  set :relative_links, true
  activate :sitemap, hostname: data.settings.site.url
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
