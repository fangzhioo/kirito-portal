#基于镜像node，版本自己查看上面的链接
FROM node:10.22.0
#参数，node的环境为生产环境
ENV NODE_ENV=production
#任意ip
ENV HOST 0.0.0.0
#容器内创建目录blog
RUN mkdir -p /blog
#复制当前的内容到容器内容部目录blog
COPY . /blog
#切换工作目录到blog
WORKDIR /blog
#暴露端口3000，默认端口
EXPOSE 3000
#配置npm的远程仓库
RUN npm config set registry https://registry.npm.taobao.org
#安装依赖
RUN npm install
#构建，生成dist文件
RUN npm run build
#start
CMD ["npm","start"]