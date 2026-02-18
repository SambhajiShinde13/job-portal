# -------- Stage 1: Build JAR --------
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# -------- Stage 2: Run JAR --------
FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY --from=build /app/target/JobPortal-0.0.1-SNAPSHOT.jar JobPortal.jar

# Optional: Default environment variables (can be overridden)
ENV MONGO_HOST=localhost
ENV MONGO_PORT=27017

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "JobPortal.jar"]