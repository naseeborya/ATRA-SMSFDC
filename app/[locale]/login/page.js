import Link from "next/link";
import LoginForm from "../../ui/authentication/LoginForm";

function page({ params }) {
  const { locale } = params;

  return (
    <div>
      <LoginForm locale={locale} />
    </div>
  );
}

export default page;
