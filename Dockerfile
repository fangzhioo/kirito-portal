FROM node:11.13.0-alpine

RUN mkdir -p /app 
WORKDIR /app 

RUN sed -i "s/dl-cdn.alpinelinux.org/${ALPINE_REPOSITORIES}/g" /etc/apk/repositories
RUN apk update && apk upgrade
RUN apk add --no-cache make gcc g++ python

COPY . /app 

#If the environment in China build please open the following comments 
#如果在中国环境下构建请把下面注释打开 
RUN npm config set registry https://registry.npm.taobao.org 
RUN npm install 
RUN npm run build 
RUN npm cache clean --force
RUN apk del make gcc g++ python

ENV NODE_ENV=production 
ENV HOST 0.0.0.0 
ENV NUXT_PORT=3000

EXPOSE 3000 

CMD ["npm", "start"]