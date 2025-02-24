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
import { Route as LogoutImport } from "./routes/logout";
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
import { Route as AuthWithUserAuthUserHomePageImport } from "./routes/auth/_withUserAuth/user/homePage";
import { Route as AuthWithUserAuthUserDashboardImport } from "./routes/auth/_withUserAuth/user/dashboard";
import { Route as AuthWithUserAuthUserBooksImport } from "./routes/auth/_withUserAuth/user/books";
import { Route as AuthWithUserAuthUserSplatImport } from "./routes/auth/_withUserAuth/user/$";
import { Route as AuthWithAdminAuthAdminHomePageImport } from "./routes/auth/_withAdminAuth/admin/homePage";
import { Route as AuthWithAdminAuthAdminDashboardImport } from "./routes/auth/_withAdminAuth/admin/dashboard";
import { Route as AuthWithAdminAuthAdminBooksImport } from "./routes/auth/_withAdminAuth/admin/books";
import { Route as AuthWithAdminAuthAdminSplatImport } from "./routes/auth/_withAdminAuth/admin/$";
import { Route as AuthWithUserAuthUserBorrowBorrowImport } from "./routes/auth/_withUserAuth/user/borrow/borrow";
import { Route as AuthWithUserAuthUserBorrowBookIdImport } from "./routes/auth/_withUserAuth/user/borrow/$bookId";
import { Route as AuthWithUserAuthUserBorrowSplatImport } from "./routes/auth/_withUserAuth/user/borrow/$";
import { Route as AuthWithUserAuthUserBooksBookIdImport } from "./routes/auth/_withUserAuth/user/books/$bookId";
import { Route as AuthWithAdminAuthAdminBooksBookIdImport } from "./routes/auth/_withAdminAuth/admin/books/$bookId";

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

const LogoutRoute = LogoutImport.update({
	id: "/logout",
	path: "/logout",
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

const AuthWithUserAuthUserHomePageRoute =
	AuthWithUserAuthUserHomePageImport.update({
		id: "/homePage",
		path: "/homePage",
		getParentRoute: () => AuthWithUserAuthUserRoute,
	} as any);

const AuthWithUserAuthUserDashboardRoute =
	AuthWithUserAuthUserDashboardImport.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => AuthWithUserAuthUserRoute,
	} as any);

const AuthWithUserAuthUserBooksRoute = AuthWithUserAuthUserBooksImport.update({
	id: "/books",
	path: "/books",
	getParentRoute: () => AuthWithUserAuthUserRoute,
} as any).lazy(() =>
	import("./routes/auth/_withUserAuth/user/books.lazy").then((d) => d.Route),
);

const AuthWithUserAuthUserSplatRoute = AuthWithUserAuthUserSplatImport.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => AuthWithUserAuthUserRoute,
} as any);

const AuthWithAdminAuthAdminHomePageRoute =
	AuthWithAdminAuthAdminHomePageImport.update({
		id: "/homePage",
		path: "/homePage",
		getParentRoute: () => AuthWithAdminAuthAdminRoute,
	} as any);

const AuthWithAdminAuthAdminDashboardRoute =
	AuthWithAdminAuthAdminDashboardImport.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => AuthWithAdminAuthAdminRoute,
	} as any);

const AuthWithAdminAuthAdminBooksRoute =
	AuthWithAdminAuthAdminBooksImport.update({
		id: "/books",
		path: "/books",
		getParentRoute: () => AuthWithAdminAuthAdminRoute,
	} as any).lazy(() =>
		import("./routes/auth/_withAdminAuth/admin/books.lazy").then(
			(d) => d.Route,
		),
	);

const AuthWithAdminAuthAdminSplatRoute =
	AuthWithAdminAuthAdminSplatImport.update({
		id: "/$",
		path: "/$",
		getParentRoute: () => AuthWithAdminAuthAdminRoute,
	} as any);

const AuthWithUserAuthUserBorrowBorrowRoute =
	AuthWithUserAuthUserBorrowBorrowImport.update({
		id: "/borrow/borrow",
		path: "/borrow/borrow",
		getParentRoute: () => AuthWithUserAuthUserRoute,
	} as any);

const AuthWithUserAuthUserBorrowBookIdRoute =
	AuthWithUserAuthUserBorrowBookIdImport.update({
		id: "/borrow/$bookId",
		path: "/borrow/$bookId",
		getParentRoute: () => AuthWithUserAuthUserRoute,
	} as any).lazy(() =>
		import("./routes/auth/_withUserAuth/user/borrow/$bookId.lazy").then(
			(d) => d.Route,
		),
	);

const AuthWithUserAuthUserBorrowSplatRoute =
	AuthWithUserAuthUserBorrowSplatImport.update({
		id: "/borrow/$",
		path: "/borrow/$",
		getParentRoute: () => AuthWithUserAuthUserRoute,
	} as any);

const AuthWithUserAuthUserBooksBookIdRoute =
	AuthWithUserAuthUserBooksBookIdImport.update({
		id: "/$bookId",
		path: "/$bookId",
		getParentRoute: () => AuthWithUserAuthUserBooksRoute,
	} as any).lazy(() =>
		import("./routes/auth/_withUserAuth/user/books/$bookId.lazy").then(
			(d) => d.Route,
		),
	);

const AuthWithAdminAuthAdminBooksBookIdRoute =
	AuthWithAdminAuthAdminBooksBookIdImport.update({
		id: "/$bookId",
		path: "/$bookId",
		getParentRoute: () => AuthWithAdminAuthAdminBooksRoute,
	} as any).lazy(() =>
		import("./routes/auth/_withAdminAuth/admin/books/$bookId.lazy").then(
			(d) => d.Route,
		),
	);

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
		"/logout": {
			id: "/logout";
			path: "/logout";
			fullPath: "/logout";
			preLoaderRoute: typeof LogoutImport;
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
		"/auth/_withAdminAuth/admin/$": {
			id: "/auth/_withAdminAuth/admin/$";
			path: "/$";
			fullPath: "/auth/admin/$";
			preLoaderRoute: typeof AuthWithAdminAuthAdminSplatImport;
			parentRoute: typeof AuthWithAdminAuthAdminImport;
		};
		"/auth/_withAdminAuth/admin/books": {
			id: "/auth/_withAdminAuth/admin/books";
			path: "/books";
			fullPath: "/auth/admin/books";
			preLoaderRoute: typeof AuthWithAdminAuthAdminBooksImport;
			parentRoute: typeof AuthWithAdminAuthAdminImport;
		};
		"/auth/_withAdminAuth/admin/dashboard": {
			id: "/auth/_withAdminAuth/admin/dashboard";
			path: "/dashboard";
			fullPath: "/auth/admin/dashboard";
			preLoaderRoute: typeof AuthWithAdminAuthAdminDashboardImport;
			parentRoute: typeof AuthWithAdminAuthAdminImport;
		};
		"/auth/_withAdminAuth/admin/homePage": {
			id: "/auth/_withAdminAuth/admin/homePage";
			path: "/homePage";
			fullPath: "/auth/admin/homePage";
			preLoaderRoute: typeof AuthWithAdminAuthAdminHomePageImport;
			parentRoute: typeof AuthWithAdminAuthAdminImport;
		};
		"/auth/_withUserAuth/user/$": {
			id: "/auth/_withUserAuth/user/$";
			path: "/$";
			fullPath: "/auth/user/$";
			preLoaderRoute: typeof AuthWithUserAuthUserSplatImport;
			parentRoute: typeof AuthWithUserAuthUserImport;
		};
		"/auth/_withUserAuth/user/books": {
			id: "/auth/_withUserAuth/user/books";
			path: "/books";
			fullPath: "/auth/user/books";
			preLoaderRoute: typeof AuthWithUserAuthUserBooksImport;
			parentRoute: typeof AuthWithUserAuthUserImport;
		};
		"/auth/_withUserAuth/user/dashboard": {
			id: "/auth/_withUserAuth/user/dashboard";
			path: "/dashboard";
			fullPath: "/auth/user/dashboard";
			preLoaderRoute: typeof AuthWithUserAuthUserDashboardImport;
			parentRoute: typeof AuthWithUserAuthUserImport;
		};
		"/auth/_withUserAuth/user/homePage": {
			id: "/auth/_withUserAuth/user/homePage";
			path: "/homePage";
			fullPath: "/auth/user/homePage";
			preLoaderRoute: typeof AuthWithUserAuthUserHomePageImport;
			parentRoute: typeof AuthWithUserAuthUserImport;
		};
		"/auth/_withAdminAuth/admin/books/$bookId": {
			id: "/auth/_withAdminAuth/admin/books/$bookId";
			path: "/$bookId";
			fullPath: "/auth/admin/books/$bookId";
			preLoaderRoute: typeof AuthWithAdminAuthAdminBooksBookIdImport;
			parentRoute: typeof AuthWithAdminAuthAdminBooksImport;
		};
		"/auth/_withUserAuth/user/books/$bookId": {
			id: "/auth/_withUserAuth/user/books/$bookId";
			path: "/$bookId";
			fullPath: "/auth/user/books/$bookId";
			preLoaderRoute: typeof AuthWithUserAuthUserBooksBookIdImport;
			parentRoute: typeof AuthWithUserAuthUserBooksImport;
		};
		"/auth/_withUserAuth/user/borrow/$": {
			id: "/auth/_withUserAuth/user/borrow/$";
			path: "/borrow/$";
			fullPath: "/auth/user/borrow/$";
			preLoaderRoute: typeof AuthWithUserAuthUserBorrowSplatImport;
			parentRoute: typeof AuthWithUserAuthUserImport;
		};
		"/auth/_withUserAuth/user/borrow/$bookId": {
			id: "/auth/_withUserAuth/user/borrow/$bookId";
			path: "/borrow/$bookId";
			fullPath: "/auth/user/borrow/$bookId";
			preLoaderRoute: typeof AuthWithUserAuthUserBorrowBookIdImport;
			parentRoute: typeof AuthWithUserAuthUserImport;
		};
		"/auth/_withUserAuth/user/borrow/borrow": {
			id: "/auth/_withUserAuth/user/borrow/borrow";
			path: "/borrow/borrow";
			fullPath: "/auth/user/borrow/borrow";
			preLoaderRoute: typeof AuthWithUserAuthUserBorrowBorrowImport;
			parentRoute: typeof AuthWithUserAuthUserImport;
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

interface AuthWithAdminAuthAdminBooksRouteChildren {
	AuthWithAdminAuthAdminBooksBookIdRoute: typeof AuthWithAdminAuthAdminBooksBookIdRoute;
}

const AuthWithAdminAuthAdminBooksRouteChildren: AuthWithAdminAuthAdminBooksRouteChildren =
	{
		AuthWithAdminAuthAdminBooksBookIdRoute:
			AuthWithAdminAuthAdminBooksBookIdRoute,
	};

const AuthWithAdminAuthAdminBooksRouteWithChildren =
	AuthWithAdminAuthAdminBooksRoute._addFileChildren(
		AuthWithAdminAuthAdminBooksRouteChildren,
	);

interface AuthWithAdminAuthAdminRouteChildren {
	AuthWithAdminAuthAdminSplatRoute: typeof AuthWithAdminAuthAdminSplatRoute;
	AuthWithAdminAuthAdminBooksRoute: typeof AuthWithAdminAuthAdminBooksRouteWithChildren;
	AuthWithAdminAuthAdminDashboardRoute: typeof AuthWithAdminAuthAdminDashboardRoute;
	AuthWithAdminAuthAdminHomePageRoute: typeof AuthWithAdminAuthAdminHomePageRoute;
}

const AuthWithAdminAuthAdminRouteChildren: AuthWithAdminAuthAdminRouteChildren =
	{
		AuthWithAdminAuthAdminSplatRoute: AuthWithAdminAuthAdminSplatRoute,
		AuthWithAdminAuthAdminBooksRoute:
			AuthWithAdminAuthAdminBooksRouteWithChildren,
		AuthWithAdminAuthAdminDashboardRoute: AuthWithAdminAuthAdminDashboardRoute,
		AuthWithAdminAuthAdminHomePageRoute: AuthWithAdminAuthAdminHomePageRoute,
	};

const AuthWithAdminAuthAdminRouteWithChildren =
	AuthWithAdminAuthAdminRoute._addFileChildren(
		AuthWithAdminAuthAdminRouteChildren,
	);

interface AuthWithAdminAuthRouteChildren {
	AuthWithAdminAuthAdminRoute: typeof AuthWithAdminAuthAdminRouteWithChildren;
}

const AuthWithAdminAuthRouteChildren: AuthWithAdminAuthRouteChildren = {
	AuthWithAdminAuthAdminRoute: AuthWithAdminAuthAdminRouteWithChildren,
};

const AuthWithAdminAuthRouteWithChildren =
	AuthWithAdminAuthRoute._addFileChildren(AuthWithAdminAuthRouteChildren);

interface AuthWithUserAuthUserBooksRouteChildren {
	AuthWithUserAuthUserBooksBookIdRoute: typeof AuthWithUserAuthUserBooksBookIdRoute;
}

const AuthWithUserAuthUserBooksRouteChildren: AuthWithUserAuthUserBooksRouteChildren =
	{
		AuthWithUserAuthUserBooksBookIdRoute: AuthWithUserAuthUserBooksBookIdRoute,
	};

const AuthWithUserAuthUserBooksRouteWithChildren =
	AuthWithUserAuthUserBooksRoute._addFileChildren(
		AuthWithUserAuthUserBooksRouteChildren,
	);

interface AuthWithUserAuthUserRouteChildren {
	AuthWithUserAuthUserSplatRoute: typeof AuthWithUserAuthUserSplatRoute;
	AuthWithUserAuthUserBooksRoute: typeof AuthWithUserAuthUserBooksRouteWithChildren;
	AuthWithUserAuthUserDashboardRoute: typeof AuthWithUserAuthUserDashboardRoute;
	AuthWithUserAuthUserHomePageRoute: typeof AuthWithUserAuthUserHomePageRoute;
	AuthWithUserAuthUserBorrowSplatRoute: typeof AuthWithUserAuthUserBorrowSplatRoute;
	AuthWithUserAuthUserBorrowBookIdRoute: typeof AuthWithUserAuthUserBorrowBookIdRoute;
	AuthWithUserAuthUserBorrowBorrowRoute: typeof AuthWithUserAuthUserBorrowBorrowRoute;
}

const AuthWithUserAuthUserRouteChildren: AuthWithUserAuthUserRouteChildren = {
	AuthWithUserAuthUserSplatRoute: AuthWithUserAuthUserSplatRoute,
	AuthWithUserAuthUserBooksRoute: AuthWithUserAuthUserBooksRouteWithChildren,
	AuthWithUserAuthUserDashboardRoute: AuthWithUserAuthUserDashboardRoute,
	AuthWithUserAuthUserHomePageRoute: AuthWithUserAuthUserHomePageRoute,
	AuthWithUserAuthUserBorrowSplatRoute: AuthWithUserAuthUserBorrowSplatRoute,
	AuthWithUserAuthUserBorrowBookIdRoute: AuthWithUserAuthUserBorrowBookIdRoute,
	AuthWithUserAuthUserBorrowBorrowRoute: AuthWithUserAuthUserBorrowBorrowRoute,
};

const AuthWithUserAuthUserRouteWithChildren =
	AuthWithUserAuthUserRoute._addFileChildren(AuthWithUserAuthUserRouteChildren);

interface AuthWithUserAuthRouteChildren {
	AuthWithUserAuthUserRoute: typeof AuthWithUserAuthUserRouteWithChildren;
}

const AuthWithUserAuthRouteChildren: AuthWithUserAuthRouteChildren = {
	AuthWithUserAuthUserRoute: AuthWithUserAuthUserRouteWithChildren,
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
	"/logout": typeof LogoutRoute;
	"/register": typeof RegisterRoute;
	"/auth/$": typeof AuthSplatRoute;
	"/auth": typeof AuthWithUserAuthRouteWithChildren;
	"/books/$bookId": typeof BooksBookIdRoute;
	"/auth/admin": typeof AuthWithAdminAuthAdminRouteWithChildren;
	"/auth/user": typeof AuthWithUserAuthUserRouteWithChildren;
	"/auth/admin/$": typeof AuthWithAdminAuthAdminSplatRoute;
	"/auth/admin/books": typeof AuthWithAdminAuthAdminBooksRouteWithChildren;
	"/auth/admin/dashboard": typeof AuthWithAdminAuthAdminDashboardRoute;
	"/auth/admin/homePage": typeof AuthWithAdminAuthAdminHomePageRoute;
	"/auth/user/$": typeof AuthWithUserAuthUserSplatRoute;
	"/auth/user/books": typeof AuthWithUserAuthUserBooksRouteWithChildren;
	"/auth/user/dashboard": typeof AuthWithUserAuthUserDashboardRoute;
	"/auth/user/homePage": typeof AuthWithUserAuthUserHomePageRoute;
	"/auth/admin/books/$bookId": typeof AuthWithAdminAuthAdminBooksBookIdRoute;
	"/auth/user/books/$bookId": typeof AuthWithUserAuthUserBooksBookIdRoute;
	"/auth/user/borrow/$": typeof AuthWithUserAuthUserBorrowSplatRoute;
	"/auth/user/borrow/$bookId": typeof AuthWithUserAuthUserBorrowBookIdRoute;
	"/auth/user/borrow/borrow": typeof AuthWithUserAuthUserBorrowBorrowRoute;
}

export interface FileRoutesByTo {
	"/": typeof IndexRoute;
	"/$": typeof SplatRoute;
	"/books": typeof BooksRouteWithChildren;
	"/login": typeof LoginRoute;
	"/logout": typeof LogoutRoute;
	"/register": typeof RegisterRoute;
	"/auth/$": typeof AuthSplatRoute;
	"/auth": typeof AuthWithUserAuthRouteWithChildren;
	"/books/$bookId": typeof BooksBookIdRoute;
	"/auth/admin": typeof AuthWithAdminAuthAdminRouteWithChildren;
	"/auth/user": typeof AuthWithUserAuthUserRouteWithChildren;
	"/auth/admin/$": typeof AuthWithAdminAuthAdminSplatRoute;
	"/auth/admin/books": typeof AuthWithAdminAuthAdminBooksRouteWithChildren;
	"/auth/admin/dashboard": typeof AuthWithAdminAuthAdminDashboardRoute;
	"/auth/admin/homePage": typeof AuthWithAdminAuthAdminHomePageRoute;
	"/auth/user/$": typeof AuthWithUserAuthUserSplatRoute;
	"/auth/user/books": typeof AuthWithUserAuthUserBooksRouteWithChildren;
	"/auth/user/dashboard": typeof AuthWithUserAuthUserDashboardRoute;
	"/auth/user/homePage": typeof AuthWithUserAuthUserHomePageRoute;
	"/auth/admin/books/$bookId": typeof AuthWithAdminAuthAdminBooksBookIdRoute;
	"/auth/user/books/$bookId": typeof AuthWithUserAuthUserBooksBookIdRoute;
	"/auth/user/borrow/$": typeof AuthWithUserAuthUserBorrowSplatRoute;
	"/auth/user/borrow/$bookId": typeof AuthWithUserAuthUserBorrowBookIdRoute;
	"/auth/user/borrow/borrow": typeof AuthWithUserAuthUserBorrowBorrowRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/": typeof IndexRoute;
	"/$": typeof SplatRoute;
	"/books": typeof BooksRouteWithChildren;
	"/login": typeof LoginRoute;
	"/logout": typeof LogoutRoute;
	"/register": typeof RegisterRoute;
	"/auth/$": typeof AuthSplatRoute;
	"/auth": typeof AuthRouteWithChildren;
	"/auth/_withAdminAuth": typeof AuthWithAdminAuthRouteWithChildren;
	"/auth/_withUserAuth": typeof AuthWithUserAuthRouteWithChildren;
	"/books/$bookId": typeof BooksBookIdRoute;
	"/auth/_withAdminAuth/admin": typeof AuthWithAdminAuthAdminRouteWithChildren;
	"/auth/_withUserAuth/user": typeof AuthWithUserAuthUserRouteWithChildren;
	"/auth/_withAdminAuth/admin/$": typeof AuthWithAdminAuthAdminSplatRoute;
	"/auth/_withAdminAuth/admin/books": typeof AuthWithAdminAuthAdminBooksRouteWithChildren;
	"/auth/_withAdminAuth/admin/dashboard": typeof AuthWithAdminAuthAdminDashboardRoute;
	"/auth/_withAdminAuth/admin/homePage": typeof AuthWithAdminAuthAdminHomePageRoute;
	"/auth/_withUserAuth/user/$": typeof AuthWithUserAuthUserSplatRoute;
	"/auth/_withUserAuth/user/books": typeof AuthWithUserAuthUserBooksRouteWithChildren;
	"/auth/_withUserAuth/user/dashboard": typeof AuthWithUserAuthUserDashboardRoute;
	"/auth/_withUserAuth/user/homePage": typeof AuthWithUserAuthUserHomePageRoute;
	"/auth/_withAdminAuth/admin/books/$bookId": typeof AuthWithAdminAuthAdminBooksBookIdRoute;
	"/auth/_withUserAuth/user/books/$bookId": typeof AuthWithUserAuthUserBooksBookIdRoute;
	"/auth/_withUserAuth/user/borrow/$": typeof AuthWithUserAuthUserBorrowSplatRoute;
	"/auth/_withUserAuth/user/borrow/$bookId": typeof AuthWithUserAuthUserBorrowBookIdRoute;
	"/auth/_withUserAuth/user/borrow/borrow": typeof AuthWithUserAuthUserBorrowBorrowRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths:
		| "/"
		| "/$"
		| "/books"
		| "/login"
		| "/logout"
		| "/register"
		| "/auth/$"
		| "/auth"
		| "/books/$bookId"
		| "/auth/admin"
		| "/auth/user"
		| "/auth/admin/$"
		| "/auth/admin/books"
		| "/auth/admin/dashboard"
		| "/auth/admin/homePage"
		| "/auth/user/$"
		| "/auth/user/books"
		| "/auth/user/dashboard"
		| "/auth/user/homePage"
		| "/auth/admin/books/$bookId"
		| "/auth/user/books/$bookId"
		| "/auth/user/borrow/$"
		| "/auth/user/borrow/$bookId"
		| "/auth/user/borrow/borrow";
	fileRoutesByTo: FileRoutesByTo;
	to:
		| "/"
		| "/$"
		| "/books"
		| "/login"
		| "/logout"
		| "/register"
		| "/auth/$"
		| "/auth"
		| "/books/$bookId"
		| "/auth/admin"
		| "/auth/user"
		| "/auth/admin/$"
		| "/auth/admin/books"
		| "/auth/admin/dashboard"
		| "/auth/admin/homePage"
		| "/auth/user/$"
		| "/auth/user/books"
		| "/auth/user/dashboard"
		| "/auth/user/homePage"
		| "/auth/admin/books/$bookId"
		| "/auth/user/books/$bookId"
		| "/auth/user/borrow/$"
		| "/auth/user/borrow/$bookId"
		| "/auth/user/borrow/borrow";
	id:
		| "__root__"
		| "/"
		| "/$"
		| "/books"
		| "/login"
		| "/logout"
		| "/register"
		| "/auth/$"
		| "/auth"
		| "/auth/_withAdminAuth"
		| "/auth/_withUserAuth"
		| "/books/$bookId"
		| "/auth/_withAdminAuth/admin"
		| "/auth/_withUserAuth/user"
		| "/auth/_withAdminAuth/admin/$"
		| "/auth/_withAdminAuth/admin/books"
		| "/auth/_withAdminAuth/admin/dashboard"
		| "/auth/_withAdminAuth/admin/homePage"
		| "/auth/_withUserAuth/user/$"
		| "/auth/_withUserAuth/user/books"
		| "/auth/_withUserAuth/user/dashboard"
		| "/auth/_withUserAuth/user/homePage"
		| "/auth/_withAdminAuth/admin/books/$bookId"
		| "/auth/_withUserAuth/user/books/$bookId"
		| "/auth/_withUserAuth/user/borrow/$"
		| "/auth/_withUserAuth/user/borrow/$bookId"
		| "/auth/_withUserAuth/user/borrow/borrow";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	IndexRoute: typeof IndexRoute;
	SplatRoute: typeof SplatRoute;
	BooksRoute: typeof BooksRouteWithChildren;
	LoginRoute: typeof LoginRoute;
	LogoutRoute: typeof LogoutRoute;
	RegisterRoute: typeof RegisterRoute;
	AuthSplatRoute: typeof AuthSplatRoute;
	AuthRoute: typeof AuthRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
	IndexRoute: IndexRoute,
	SplatRoute: SplatRoute,
	BooksRoute: BooksRouteWithChildren,
	LoginRoute: LoginRoute,
	LogoutRoute: LogoutRoute,
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
        "/logout",
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
    "/logout": {
      "filePath": "logout.tsx"
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
      "parent": "/auth/_withAdminAuth",
      "children": [
        "/auth/_withAdminAuth/admin/$",
        "/auth/_withAdminAuth/admin/books",
        "/auth/_withAdminAuth/admin/dashboard",
        "/auth/_withAdminAuth/admin/homePage"
      ]
    },
    "/auth/_withUserAuth/user": {
      "filePath": "auth/_withUserAuth/user.tsx",
      "parent": "/auth/_withUserAuth",
      "children": [
        "/auth/_withUserAuth/user/$",
        "/auth/_withUserAuth/user/books",
        "/auth/_withUserAuth/user/dashboard",
        "/auth/_withUserAuth/user/homePage",
        "/auth/_withUserAuth/user/borrow/$",
        "/auth/_withUserAuth/user/borrow/$bookId",
        "/auth/_withUserAuth/user/borrow/borrow"
      ]
    },
    "/auth/_withAdminAuth/admin/$": {
      "filePath": "auth/_withAdminAuth/admin/$.tsx",
      "parent": "/auth/_withAdminAuth/admin"
    },
    "/auth/_withAdminAuth/admin/books": {
      "filePath": "auth/_withAdminAuth/admin/books.tsx",
      "parent": "/auth/_withAdminAuth/admin",
      "children": [
        "/auth/_withAdminAuth/admin/books/$bookId"
      ]
    },
    "/auth/_withAdminAuth/admin/dashboard": {
      "filePath": "auth/_withAdminAuth/admin/dashboard.tsx",
      "parent": "/auth/_withAdminAuth/admin"
    },
    "/auth/_withAdminAuth/admin/homePage": {
      "filePath": "auth/_withAdminAuth/admin/homePage.tsx",
      "parent": "/auth/_withAdminAuth/admin"
    },
    "/auth/_withUserAuth/user/$": {
      "filePath": "auth/_withUserAuth/user/$.tsx",
      "parent": "/auth/_withUserAuth/user"
    },
    "/auth/_withUserAuth/user/books": {
      "filePath": "auth/_withUserAuth/user/books.tsx",
      "parent": "/auth/_withUserAuth/user",
      "children": [
        "/auth/_withUserAuth/user/books/$bookId"
      ]
    },
    "/auth/_withUserAuth/user/dashboard": {
      "filePath": "auth/_withUserAuth/user/dashboard.tsx",
      "parent": "/auth/_withUserAuth/user"
    },
    "/auth/_withUserAuth/user/homePage": {
      "filePath": "auth/_withUserAuth/user/homePage.tsx",
      "parent": "/auth/_withUserAuth/user"
    },
    "/auth/_withAdminAuth/admin/books/$bookId": {
      "filePath": "auth/_withAdminAuth/admin/books/$bookId.tsx",
      "parent": "/auth/_withAdminAuth/admin/books"
    },
    "/auth/_withUserAuth/user/books/$bookId": {
      "filePath": "auth/_withUserAuth/user/books/$bookId.tsx",
      "parent": "/auth/_withUserAuth/user/books"
    },
    "/auth/_withUserAuth/user/borrow/$": {
      "filePath": "auth/_withUserAuth/user/borrow/$.tsx",
      "parent": "/auth/_withUserAuth/user"
    },
    "/auth/_withUserAuth/user/borrow/$bookId": {
      "filePath": "auth/_withUserAuth/user/borrow/$bookId.tsx",
      "parent": "/auth/_withUserAuth/user"
    },
    "/auth/_withUserAuth/user/borrow/borrow": {
      "filePath": "auth/_withUserAuth/user/borrow/borrow.tsx",
      "parent": "/auth/_withUserAuth/user"
    }
  }
}
ROUTE_MANIFEST_END */
