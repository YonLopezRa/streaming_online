FROM openjdk:17-jdk-alpine
WORKDIR /app

# Crear directorio de configuración
RUN mkdir -p /app/config

# Copiar el JAR
COPY target/*.jar app.jar

# ✅ COPIAR SOLO archivos que existen
COPY src/main/resources/application.yml ./config/

# Puerto expuesto
EXPOSE 8081

# Usar directorio de configuración
ENTRYPOINT ["java", "-jar", "app.jar", "--spring.config.location=classpath:/,file:/app/config/"]