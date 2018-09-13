###
# Google Analytics
###
activate :google_analytics do |ga|
    ga.tracking_id = data.settings.google_analytics.tracking_code
    ga.anonymize_ip = true
    ga.debug = false
    ga.development = false
    ga.minify = true
end

# Minification
activate :minify_css
activate :minify_javascript
activate :minify_html, remove_input_attributes: false

# Gzip compression
 activate :gzip

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :protect_emails
activate :sprockets
activate :i18n, :mount_at_root => false
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
  deploy.branch = 'master'
  deploy.deploy_method = :git
end


redirect "index.html", to: "fr/home.html"
redirect "fr/index.html", to: "fr/home.html"
redirect "home.html", to: "fr/home.html"
redirect "en/index.html", to: "en/home.html"
