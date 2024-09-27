import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import RootLayout from "./shared/navigation/RootLayout";
import SignupForm, { action as signupAction } from "./shared/component/Signup";
import LoginForm, { action as loginAction } from "./shared/component/Login";

import ErrorHandler from "./shared/component/Error";

//Notes  app
import AddNotes from "./components/Admin/AddNotes";
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

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorHandler />,
    children: [
      { index: true, element: <h1>Notes list </h1> },
      { path: "add", element: <AddNotes /> },

      { path: "signup", element: <SignupForm />, action: signupAction },
      { path: "login", element: <LoginForm />, action: loginAction },
      {
        path: "notes",
        element: <NotesLayout />,
        loader: notesLoader,
        id: "notes",

        children: [
          { index: true, element: <NotesList />, loader: notesLoader },
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
