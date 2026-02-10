FROM eclipse-temurin:17
ARG JAR_FILE=demo/target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE $PORT
ENTRYPOINT ["java","-jar","/app.jar"] 