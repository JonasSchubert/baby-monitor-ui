FROM nginx:stable-alpine

ARG INTERNAL_PORT=8080

# copy build files from dist
COPY dist /usr/share/nginx/html

# copy nginx config files
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Default port exposure
EXPOSE ${INTERNAL_PORT}

CMD ["nginx", "-g", "\"daemon off;\""]
