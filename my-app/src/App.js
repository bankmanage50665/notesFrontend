import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import "./App.css";
import "./index.css";
import RootLayout from "./shared/navigation/RootLayout";
import ErrorHandler from "./shared/component/Error";

import NotesList, {
  loader as notesLoader,
} from "./components/Questions/NotesList";
import NotesLayout from "./shared/navigation/NotesLayout";
import FirstYear from "./components/year/FirstYear";
import SecondYear from "./components/year/SecondYear";
import FinalYear from "./components/year/FinalYear";
import NotesDetails, {
  loader as notesDetailLoader,
} from "./components/Questions/NotesDetails.jsx";
import EditNotes from "./components/Questions/EditNotes.jsx";
import { tokenLoader } from "./utils/getToken.js";
import { logoutAction } from "./utils/logout.js";
import { signupAction } from "./shared/component/Signup.jsx";
import { loginAction } from "./shared/component/Login.jsx";
import { Suspense } from "react";

const AddNotes = React.lazy(() => import("./components/Admin/AddNotes"));
const SignupForm = React.lazy(() => import("./shared/component/Signup"));
const LoginForm = React.lazy(() => import("./shared/component/Login"));

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorHandler />,
    loader: tokenLoader,
    id: "root",
    children: [
      { index: true, element: <Navigate to="notes" /> },
      {
        path: "add",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <AddNotes />
          </Suspense>
        ),
      },

      {
        path: "signup",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <SignupForm />
          </Suspense>
        ),
        action: signupAction,
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <LoginForm />
          </Suspense>
        ),
        action: loginAction,
      },
      {
        path: "notes",
        element: <NotesLayout />,
        loader: notesLoader,
        id: "notes",

        children: [
          {
            index: true,
            element: <NotesList />,
            loader: notesLoader,
          },
          {
            path: "1-professional",
            element: <FirstYear />,
            loader: notesLoader,
          },
          { path: "2-professional", element: <SecondYear /> },

          { path: "final-year", element: <FinalYear /> },
          {
            path: ":id",
            loader: notesDetailLoader,
            id: "note-id",
            children: [
              {
                index: true,
                element: <NotesDetails />,
              },
              { path: "edit", element: <EditNotes /> },
            ],
          },
        ],
      },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
