import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";
import Header from "../props/page";
import UserProfiles from "../multi-props/page";

export default function Page() {
  return (
    <div>
      <Header title="Shopping" />
      {/* <ServerComponent />

      <ClientComponent /> */}

      <UserProfiles
        name="John Doe"
        age={30}
        email="john.doe@example.com"
        isAdmin={true}
      />
    </div>
  );
}
