FROM node:20

WORKDIR /src/app

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY ["index.js", "package.json", "package-lock.json", "/src/app/"]

EXPOSE 3000