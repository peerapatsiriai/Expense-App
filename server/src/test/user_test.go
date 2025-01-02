// filepath: /Users/peerqapatsiriai/PersonalProject/Expense-App/server/test/user_test.go
package test

import (
	"os"
	"testing"

	"app/src/internal/models" // Adjust the import path to your models package

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

func setup() {
	// Load environment variables from .env file
	err := godotenv.Load("../../.env") // Adjust the path as needed
	if err != nil {
		panic("Error loading .env file")
	}

	dsn := "host=" + os.Getenv("DB_HOST") + " user=" + os.Getenv("DB_USER") + " password=" + os.Getenv("DB_PASSWORD") + " dbname=" + os.Getenv("DB_NAME") + " port=" + os.Getenv("DB_PORT") + " sslmode=disable"
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&models.User{})
}

func teardown() {
	db.Exec("DELETE FROM users")
}

func TestCreateUser(t *testing.T) {
	setup()
	defer teardown()

	user := models.User{Name: "John Doe", Email: "john.doe@example.com"}
	result := db.Create(&user)
	if result.Error != nil {
		t.Errorf("failed to create user: %v", result.Error)
	}

	var count int64
	db.Model(&models.User{}).Count(&count)
	if count != 1 {
		t.Errorf("expected 1 user, got %d", count)
	}
}

func TestReadUser(t *testing.T) {
	setup()
	defer teardown()

	user := models.User{Name: "John Doe", Email: "john.doe@example.com"}
	db.Create(&user)

	var readUser models.User
	result := db.First(&readUser, user.ID)
	if result.Error != nil {
		t.Errorf("failed to read user: %v", result.Error)
	}

	if readUser.Name != user.Name || readUser.Email != user.Email {
		t.Errorf("expected user %v, got %v", user, readUser)
	}
}

func TestUpdateUser(t *testing.T) {
	setup()
	defer teardown()

	user := models.User{Name: "John Doe", Email: "john.doe@example.com"}
	db.Create(&user)

	user.Name = "Jane Doe"
	result := db.Save(&user)
	if result.Error != nil {
		t.Errorf("failed to update user: %v", result.Error)
	}

	var updatedUser models.User
	db.First(&updatedUser, user.ID)
	if updatedUser.Name != "Jane Doe" {
		t.Errorf("expected user name to be 'Jane Doe', got %s", updatedUser.Name)
	}
}

func TestDeleteUser(t *testing.T) {
	setup()
	defer teardown()

	user := models.User{Name: "John Doe", Email: "john.doe@example.com"}
	db.Create(&user)

	result := db.Delete(&user)
	if result.Error != nil {
		t.Errorf("failed to delete user: %v", result.Error)
	}

	var count int64
	db.Model(&models.User{}).Count(&count)
	if count != 0 {
		t.Errorf("expected 0 users, got %d", count)
	}
}
