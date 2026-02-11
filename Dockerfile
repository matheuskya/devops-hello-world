FROM eclipse-temurin:17
WORKDIR /app
COPY /demo/mvnw .
COPY /demo/pom.xml .
COPY /demo/src src
COPY /demo/.mvn .mvn

RUN chmod +x mvnw
RUN ./mvnw package -DskipTests

ENTRYPOINT ["java","-jar","target/demo-0.0.1-SNAPSHOT.jar"] 