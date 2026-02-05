FROM amazoncorretto:17.0.18

WORKDIR /app

COPY . .

RUN ./mvnw clean install

CMD ["./mvnw", "spring-boot:run"]

