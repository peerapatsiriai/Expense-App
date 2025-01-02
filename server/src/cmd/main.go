// filepath: /Users/peerqapatsiriai/PersonalProject/Expense-App/server/src/cmd/main.go
package main

import (
	"app/src/internal/handlers"
	"app/src/internal/models"
	"app/src/internal/repositories"
	"app/src/internal/routes"
	"app/src/internal/services"
	"app/src/pkg/database"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables from .env file
	err := godotenv.Load()
	// err := godotenv.Load("/app/.env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	// Connect to the database
	database.Connect()
	database.DB.AutoMigrate(&models.User{})

	// Setup repository, service, and handler
	userRepo := repositories.NewUserRepository(database.DB)
	userService := services.NewUserService(userRepo)
	userHandler := handlers.NewUserHandler(userService)

	// Setup Gin router
	router := gin.Default()
	routes.RegisterRoutes(router, userHandler)

	// Start server
	router.Run(":8080")
}
