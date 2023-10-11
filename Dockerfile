FROM nginx:1.11.8
COPY dist/ /usr/share/nginx/html/console
COPY nginx-front.conf /etc/nginx/conf.d/default.conf
