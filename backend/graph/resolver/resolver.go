package resolver

import (
	"github.com/so-heee/graphql-example/plan2/interfaces/database"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	repo *database.Repository
}

func NewResolver(repo *database.Repository) *Resolver {
	return &Resolver{repo}
}
