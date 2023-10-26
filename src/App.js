import { HashRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import StudentsPage from './pages/StudentsPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import { AuthProvider, AuthRoute } from './components/auth';
import { DataProvider } from './components/blogdata';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
      <Menu />
      <DataProvider>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/courses" element={<CoursesPage />}/>
        <Route path="/students" element={<StudentsPage />}/>
          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />}/>
          </Route>
          <Route path="/login" element={<LoginPage />}/>
        <Route
          path="/logout"
          element={
            <AuthRoute>
              <LogoutPage />
            </AuthRoute>
          }/>
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <ProfilePage />
            </AuthRoute>
          }/>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
      </DataProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
