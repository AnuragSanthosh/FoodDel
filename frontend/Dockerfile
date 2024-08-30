FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 5173
ENV PORT 5173
CMD serve -s dist -l $PORT