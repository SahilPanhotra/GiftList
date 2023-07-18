FROM node:18
WORKDIR /app
COPY . /app
RUN npm install
ENV PORT 1225
EXPOSE 1225
CMD ["node", "index.js"]