package routes

import (
	"app/src/internal/handlers"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine, userHandler *handlers.UserHandler) {
	api := router.Group("/api/users")
	{
		api.POST("/", userHandler.CreateUser)
		api.GET("/", userHandler.GetAllUsers)
		api.GET("/:id", userHandler.GetUserByID)
		api.PUT("/:id", userHandler.UpdateUser)
		api.DELETE("/:id", userHandler.DeleteUser)
	}
}
