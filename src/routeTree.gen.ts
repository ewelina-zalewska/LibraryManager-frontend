/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as RegisterImport } from "./routes/register";
import { Route as LoginImport } from "./routes/login";
import { Route as BooksImport } from "./routes/books";
import { Route as SplatImport } from "./routes/$";
import { Route as IndexImport } from "./routes/index";
import { Route as BooksBookIdImport } from "./routes/books/$bookId";
import { Route as AuthWithUserAuthImport } from "./routes/auth/_withUserAuth";
import { Route as AuthWithAdminAuthImport } from "./routes/auth/_withAdminAuth";
import { Route as AuthSplatImport } from "./routes/auth/$";
import { Route as AuthWithUserAuthUserImport } from "./routes/auth/_withUserAuth/user";
import { Route as AuthWithAdminAuthAdminImport } from "./routes/auth/_withAdminAuth/admin";

// Create Virtual Routes

const AuthImport = createFileRoute("/auth")();

// Create/Update Routes

const AuthRoute = AuthImport.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => rootRoute,
} as any);

const RegisterRoute = RegisterImport.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => rootRoute,
} as any);

const LoginRoute = LoginImport.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => rootRoute,
} as any);

const BooksRoute = BooksImport.update({
	id: "/books",
	path: "/books",
	getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/books.lazy").then((d) => d.Route));

const SplatRoute = SplatImport.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => rootRoute,
} as any);

const BooksBookIdRoute = BooksBookIdImport.update({
	id: "/$bookId",
	path: "/$bookId",
	getParentRoute: () => BooksRoute,
} as any).lazy(() =>
	import("./routes/books/$bookId.lazy").then((d) => d.Route),
);

const AuthWithUserAuthRoute = AuthWithUserAuthImport.update({
	id: "/_withUserAuth",
	getParentRoute: () => AuthRoute,
} as any);

const AuthWithAdminAuthRoute = AuthWithAdminAuthImport.update({
	id: "/_withAdminAuth",
	getParentRoute: () => AuthRoute,
} as any);

const AuthSplatRoute = AuthSplatImport.update({
	id: "/auth/$",
	path: "/auth/$",
	getParentRoute: () => rootRoute,
} as any);

const AuthWithUserAuthUserRoute = AuthWithUserAuthUserImport.update({
	id: "/user",
	path: "/user",
	getParentRoute: () => AuthWithUserAuthRoute,
} as any);

const AuthWithAdminAuthAdminRoute = AuthWithAdminAuthAdminImport.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthWithAdminAuthRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/": {
			id: "/";
			path: "/";
			fullPath: "/";
			preLoaderRoute: typeof IndexImport;
			parentRoute: typeof rootRoute;
		};
		"/$": {
			id: "/$";
			path: "/$";
			fullPath: "/$";
			preLoaderRoute: typeof SplatImport;
			parentRoute: typeof rootRoute;
		};
		"/books": {
			id: "/books";
			path: "/books";
			fullPath: "/books";
			preLoaderRoute: typeof BooksImport;
			parentRoute: typeof rootRoute;
		};
		"/login": {
			id: "/login";
			path: "/login";
			fullPath: "/login";
			preLoaderRoute: typeof LoginImport;
			parentRoute: typeof rootRoute;
		};
		"/register": {
			id: "/register";
			path: "/register";
			fullPath: "/register";
			preLoaderRoute: typeof RegisterImport;
			parentRoute: typeof rootRoute;
		};
		"/auth/$": {
			id: "/auth/$";
			path: "/auth/$";
			fullPath: "/auth/$";
			preLoaderRoute: typeof AuthSplatImport;
			parentRoute: typeof rootRoute;
		};
		"/auth": {
			id: "/auth";
			path: "/auth";
			fullPath: "/auth";
			preLoaderRoute: typeof AuthImport;
			parentRoute: typeof rootRoute;
		};
		"/auth/_withAdminAuth": {
			id: "/auth/_withAdminAuth";
			path: "/auth";
			fullPath: "/auth";
			preLoaderRoute: typeof AuthWithAdminAuthImport;
			parentRoute: typeof AuthRoute;
		};
		"/auth/_withUserAuth": {
			id: "/auth/_withUserAuth";
			path: "";
			fullPath: "/auth";
			preLoaderRoute: typeof AuthWithUserAuthImport;
			parentRoute: typeof AuthImport;
		};
		"/books/$bookId": {
			id: "/books/$bookId";
			path: "/$bookId";
			fullPath: "/books/$bookId";
			preLoaderRoute: typeof BooksBookIdImport;
			parentRoute: typeof BooksImport;
		};
		"/auth/_withAdminAuth/admin": {
			id: "/auth/_withAdminAuth/admin";
			path: "/admin";
			fullPath: "/auth/admin";
			preLoaderRoute: typeof AuthWithAdminAuthAdminImport;
			parentRoute: typeof AuthWithAdminAuthImport;
		};
		"/auth/_withUserAuth/user": {
			id: "/auth/_withUserAuth/user";
			path: "/user";
			fullPath: "/auth/user";
			preLoaderRoute: typeof AuthWithUserAuthUserImport;
			parentRoute: typeof AuthWithUserAuthImport;
		};
	}
}

// Create and export the route tree

interface BooksRouteChildren {
	BooksBookIdRoute: typeof BooksBookIdRoute;
}

const BooksRouteChildren: BooksRouteChildren = {
	BooksBookIdRoute: BooksBookIdRoute,
};

const BooksRouteWithChildren = BooksRoute._addFileChildren(BooksRouteChildren);

interface AuthWithAdminAuthRouteChildren {
	AuthWithAdminAuthAdminRoute: typeof AuthWithAdminAuthAdminRoute;
}

const AuthWithAdminAuthRouteChildren: AuthWithAdminAuthRouteChildren = {
	AuthWithAdminAuthAdminRoute: AuthWithAdminAuthAdminRoute,
};

const AuthWithAdminAuthRouteWithChildren =
	AuthWithAdminAuthRoute._addFileChildren(AuthWithAdminAuthRouteChildren);

interface AuthWithUserAuthRouteChildren {
	AuthWithUserAuthUserRoute: typeof AuthWithUserAuthUserRoute;
}

const AuthWithUserAuthRouteChildren: AuthWithUserAuthRouteChildren = {
	AuthWithUserAuthUserRoute: AuthWithUserAuthUserRoute,
};

const AuthWithUserAuthRouteWithChildren =
	AuthWithUserAuthRoute._addFileChildren(AuthWithUserAuthRouteChildren);

interface AuthRouteChildren {
	AuthWithAdminAuthRoute: typeof AuthWithAdminAuthRouteWithChildren;
	AuthWithUserAuthRoute: typeof AuthWithUserAuthRouteWithChildren;
}

const AuthRouteChildren: AuthRouteChildren = {
	AuthWithAdminAuthRoute: AuthWithAdminAuthRouteWithChildren,
	AuthWithUserAuthRoute: AuthWithUserAuthRouteWithChildren,
};

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);

export interface FileRoutesByFullPath {
	"/": typeof IndexRoute;
	"/$": typeof SplatRoute;
	"/books": typeof BooksRouteWithChildren;
	"/login": typeof LoginRoute;
	"/register": typeof RegisterRoute;
	"/auth/$": typeof AuthSplatRoute;
	"/auth": typeof AuthWithUserAuthRouteWithChildren;
	"/books/$bookId": typeof BooksBookIdRoute;
	"/auth/admin": typeof AuthWithAdminAuthAdminRoute;
	"/auth/user": typeof AuthWithUserAuthUserRoute;
}

export interface FileRoutesByTo {
	"/": typeof IndexRoute;
	"/$": typeof SplatRoute;
	"/books": typeof BooksRouteWithChildren;
	"/login": typeof LoginRoute;
	"/register": typeof RegisterRoute;
	"/auth/$": typeof AuthSplatRoute;
	"/auth": typeof AuthWithUserAuthRouteWithChildren;
	"/books/$bookId": typeof BooksBookIdRoute;
	"/auth/admin": typeof AuthWithAdminAuthAdminRoute;
	"/auth/user": typeof AuthWithUserAuthUserRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/": typeof IndexRoute;
	"/$": typeof SplatRoute;
	"/books": typeof BooksRouteWithChildren;
	"/login": typeof LoginRoute;
	"/register": typeof RegisterRoute;
	"/auth/$": typeof AuthSplatRoute;
	"/auth": typeof AuthRouteWithChildren;
	"/auth/_withAdminAuth": typeof AuthWithAdminAuthRouteWithChildren;
	"/auth/_withUserAuth": typeof AuthWithUserAuthRouteWithChildren;
	"/books/$bookId": typeof BooksBookIdRoute;
	"/auth/_withAdminAuth/admin": typeof AuthWithAdminAuthAdminRoute;
	"/auth/_withUserAuth/user": typeof AuthWithUserAuthUserRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths:
		| "/"
		| "/$"
		| "/books"
		| "/login"
		| "/register"
		| "/auth/$"
		| "/auth"
		| "/books/$bookId"
		| "/auth/admin"
		| "/auth/user";
	fileRoutesByTo: FileRoutesByTo;
	to:
		| "/"
		| "/$"
		| "/books"
		| "/login"
		| "/register"
		| "/auth/$"
		| "/auth"
		| "/books/$bookId"
		| "/auth/admin"
		| "/auth/user";
	id:
		| "__root__"
		| "/"
		| "/$"
		| "/books"
		| "/login"
		| "/register"
		| "/auth/$"
		| "/auth"
		| "/auth/_withAdminAuth"
		| "/auth/_withUserAuth"
		| "/books/$bookId"
		| "/auth/_withAdminAuth/admin"
		| "/auth/_withUserAuth/user";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	IndexRoute: typeof IndexRoute;
	SplatRoute: typeof SplatRoute;
	BooksRoute: typeof BooksRouteWithChildren;
	LoginRoute: typeof LoginRoute;
	RegisterRoute: typeof RegisterRoute;
	AuthSplatRoute: typeof AuthSplatRoute;
	AuthRoute: typeof AuthRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
	IndexRoute: IndexRoute,
	SplatRoute: SplatRoute,
	BooksRoute: BooksRouteWithChildren,
	LoginRoute: LoginRoute,
	RegisterRoute: RegisterRoute,
	AuthSplatRoute: AuthSplatRoute,
	AuthRoute: AuthRouteWithChildren,
};

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$",
        "/books",
        "/login",
        "/register",
        "/auth/$",
        "/auth"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$": {
      "filePath": "$.tsx"
    },
    "/books": {
      "filePath": "books.tsx",
      "children": [
        "/books/$bookId"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/auth/$": {
      "filePath": "auth/$.tsx"
    },
    "/auth": {
      "filePath": "auth",
      "children": [
        "/auth/_withAdminAuth",
        "/auth/_withUserAuth"
      ]
    },
    "/auth/_withAdminAuth": {
      "filePath": "auth/_withAdminAuth.tsx",
      "parent": "/auth",
      "children": [
        "/auth/_withAdminAuth/admin"
      ]
    },
    "/auth/_withUserAuth": {
      "filePath": "auth/_withUserAuth.tsx",
      "parent": "/auth",
      "children": [
        "/auth/_withUserAuth/user"
      ]
    },
    "/books/$bookId": {
      "filePath": "books/$bookId.tsx",
      "parent": "/books"
    },
    "/auth/_withAdminAuth/admin": {
      "filePath": "auth/_withAdminAuth/admin.tsx",
      "parent": "/auth/_withAdminAuth"
    },
    "/auth/_withUserAuth/user": {
      "filePath": "auth/_withUserAuth/user.tsx",
      "parent": "/auth/_withUserAuth"
    }
  }
}
ROUTE_MANIFEST_END */
