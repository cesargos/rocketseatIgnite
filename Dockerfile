FROM node:16

WORKDIR /usr/app

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]