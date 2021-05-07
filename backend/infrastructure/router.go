package infrastructure

import (
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/render"
	"github.com/sirupsen/logrus"
	"github.com/so-heee/graphql-todo-app/backend/graph/generated"
	"github.com/so-heee/graphql-todo-app/backend/graph/resolver"

	"github.com/rs/cors"
	"github.com/so-heee/graphql-todo-app/backend/interfaces/database"
)

func Router(repo *database.Repository) *chi.Mux {

	r := chi.NewRouter()

	/*
	 * Middleware settings
	 */

	// Use JSON logger
	customLogger := logrus.New()
	customLogger.Formatter = &logrus.JSONFormatter{
		// disable, as we set our own
		DisableTimestamp: true,
	}

	r.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(render.SetContentType(render.ContentTypeJSON))

	/*
	 * Routing settings
	 */

	// GraphQL endpoint
	r.Handle("/graphql", handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: resolver.NewResolver(repo)})))

	// GraphQL playground
	r.Handle("/", playground.Handler("GraphQL Playground", "/graphql"))

	return r
}
