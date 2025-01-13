import Link from "next/link";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <Link href="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="188"
                height="36"
                fill="none"
                viewBox="0 0 188 36"
                {...props}
            >
                <path
                    fill="currentColor"
                    d="M.812 1.968H5.96V34H.812zm37.725 29.524q-.66.485-2.068 1.188-1.408.704-3.344 1.232-1.892.485-4.224.44-3.74-.045-6.732-1.32-2.992-1.32-5.06-3.52a16.5 16.5 0 0 1-3.212-5.104q-1.1-2.905-1.1-6.16 0-3.652 1.144-6.688t3.256-5.236a14.7 14.7 0 0 1 5.016-3.476q2.904-1.232 6.336-1.232 3.036 0 5.412.836 2.42.792 4.048 1.804l-2.024 4.84q-1.232-.88-3.08-1.716t-4.18-.836a9.7 9.7 0 0 0-4.048.88 9.85 9.85 0 0 0-3.388 2.42 12.1 12.1 0 0 0-2.332 3.608q-.836 2.068-.836 4.488 0 2.508.748 4.62.792 2.068 2.2 3.608a10.6 10.6 0 0 0 3.432 2.42q2.024.836 4.488.836 2.508 0 4.356-.748 1.892-.792 3.036-1.76zm4.854-13.464q0-3.345 1.276-6.292a17.1 17.1 0 0 1 3.52-5.236 16.2 16.2 0 0 1 5.192-3.564q2.991-1.32 6.38-1.32 3.343 0 6.292 1.32 2.992 1.276 5.236 3.564a16.8 16.8 0 0 1 3.564 5.236q1.32 2.948 1.32 6.292 0 3.388-1.32 6.336a16.8 16.8 0 0 1-3.564 5.236 16.5 16.5 0 0 1-5.236 3.52q-2.949 1.232-6.292 1.232-3.432 0-6.38-1.232a17 17 0 0 1-5.192-3.476 16.6 16.6 0 0 1-3.52-5.192q-1.276-2.992-1.276-6.424m5.28 0q0 2.376.836 4.444a11.8 11.8 0 0 0 2.42 3.652 11.5 11.5 0 0 0 3.564 2.42q2.024.88 4.4.88 2.288 0 4.268-.88a10.9 10.9 0 0 0 3.52-2.42 11.6 11.6 0 0 0 2.332-3.652q.88-2.068.88-4.444 0-2.42-.88-4.488a12.3 12.3 0 0 0-2.376-3.652 10.6 10.6 0 0 0-3.52-2.464q-2.025-.88-4.356-.88-2.333 0-4.356.88a11.1 11.1 0 0 0-3.564 2.464 11.5 11.5 0 0 0-2.332 3.696q-.837 2.068-.836 4.444m62.5 17.116L86.575 11.296l1.496.616L88.203 34h-5.192V.868h.22l24.244 23.848-1.188-.352-.088-22.396h5.104v33.176zm8.965-33.176h5.148V34h-5.148zm17.309 0 10.076 25.08-2.948-.572 9.372-24.508h6.072l-14.344 33.528-14.344-33.528zm28.582 0h21.252v4.928h-16.104v8.536h14.344v4.972h-14.344v8.668h16.72V34h-21.868z"
                ></path>
            </svg>
        </Link> 
    )
}