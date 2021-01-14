import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function navigate(path, replace = false) {
  const goToPath = path === "/" ? "" : path;
  if (replace) {
    history.replace(`${goToPath}`);
  } else {
    history.push(`${goToPath}`);
  }
}

export { history, navigate };
