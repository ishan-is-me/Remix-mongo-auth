import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node';
import { getUser } from '~/utils/auth.server';
import { logout } from '~/utils/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  // If user has active session, redirect to the homepage
  return (await getUser(request)) ? null : redirect('/login');
};

export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};

export default function Index() {
  return (
    <div className="text-center m-[30vh] block">
      <div>
        <small className="text-slate-400 pb-5 block">You are Logged in!</small>
        <h1 className="text-4xl text-green-600 font-bold pb-3">
          Welcome to Remix Application
        </h1>
        <p className="text-slate-400">
          Configured with TailwindCSS and Prisma ORM using MongoDB
        </p>
      </div>
      <div className="text-sm mt-[40px]">
        <button
          name="_action"
          value="delete"
          className="font-medium text-red-600 hover:text-red-500"
        >
          Log me out
        </button>
      </div>
    </div>
  );
}
