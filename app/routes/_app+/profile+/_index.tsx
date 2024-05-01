import { useSearchParams } from "@remix-run/react";
import BasicInfoField from "./index+/components/BasicInfoField";
import PasswordField from "./index+/components/PasswordField";
import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const action = formData.get("_action");

    if (action === "save-basic-info") {
        console.log(Object.fromEntries(formData));
    }

    return null;
};

const ProfileIndexPage = () => {
    const [searchParams] = useSearchParams();
    const editParams = searchParams.getAll("edit");
    const hasPasswordField = editParams.includes("reset-password");
    const hasBasicInfoField = editParams.includes("basic-info");

    return (
        <div className="grid items-start gap-6 lg:grid-cols-[5fr_7fr]">
            <PasswordField
                isEditing={hasPasswordField}
                hasBasicInfoField={hasBasicInfoField}
            />

            <BasicInfoField
                isEditing={hasBasicInfoField}
                hasPasswordField={hasPasswordField}
            />
        </div>
    );
};

export default ProfileIndexPage;
