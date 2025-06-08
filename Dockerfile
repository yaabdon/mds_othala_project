
FROM node:20-alpine


WORKDIR /app


COPY back/package*.json ./


RUN npm install


COPY back .


EXPOSE 3000


CMD ["npm", "run", "dev"]
