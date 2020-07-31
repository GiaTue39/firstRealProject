FROM johnpapa/angular-cli AS angular-built
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod

FROM nginx:alpine
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.bak
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=angular-built /usr/src/app/dist/firstRealPro /usr/share/nginx/html
EXPOSE 4200
CMD [ "nginx", "-g", "daemon off;" ]
