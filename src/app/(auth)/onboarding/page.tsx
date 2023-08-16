import { AccountProfile } from "@/components/forms/AccountProfile";

export default function Onboarding() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="text-base-regular text-light-2 mt-3">
        Complete your profile now to use Threads
      </p>
      <section className="bg-dark-2 mt-9 p-10">
        <AccountProfile />
      </section>
    </main>
  );
}
