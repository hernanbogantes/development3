FROM openjdk:8-jdk-alpine
LABEL maintainer="h.bogantes - svitla.com homework"
VOLUME /main-app
ADD build/libs/spring-boot-postgresql-base-project-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar","/app.jar"]
