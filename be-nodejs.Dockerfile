FROM node:alpine
WORKDIR /app/
COPY nodejs /app/
RUN mv .env.example .env
RUN yarn install
EXPOSE 3000
CMD yarn start