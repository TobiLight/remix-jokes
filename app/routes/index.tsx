import type { LinksFunction, MetaFunction } from "remix";
import { Link } from "remix";
import stylesUrl from "../styles/index.css";
import tailwindStyles from "../styles/appstyles.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl
    },
    {
      rel: 'stylesheet',
      href: tailwindStyles
    }
  ];
};

export const meta: MetaFunction = () => {
  return {
    title: `Remix: So great, it's funny!`,
    description: 'Remix Jokes App. Learn and laugh at the same time!'
  }
}

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}