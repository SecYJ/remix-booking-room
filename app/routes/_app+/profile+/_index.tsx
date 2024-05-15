import { useSearchParams } from "@remix-run/react";
import BasicInfoField from "./index+/components/BasicInfoField";
import PasswordField from "./index+/components/PasswordField";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { requireUser } from "~/utils/auth.server";
import { parseWithZod } from "@conform-to/zod";
import { BASIC_INFO_SCHEMA } from "./index+/schema/schema";
import { updateDetail } from "~/services/users/updateDetail.server";
import { getUser } from "~/services/users/getUser.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await requireUser(request);

    return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
    const user = await requireUser(request);
    const userDetail = await getUser(user.token as string);
    const formData = await request.formData();

    const submission = parseWithZod(formData, { schema: BASIC_INFO_SCHEMA });

    if (submission.status !== "success") {
        return json({ result: submission.reply() }, { status: 400 });
    }

    const birthDate =
        `${submission.value.birthYear}/${submission.value.birthMonth}/${submission.value.birthDay}` ||
        userDetail.result.birthday;

    const userData = await updateDetail(
        {
            name: submission.value.username || userDetail.result.name,
            userId: userDetail.result.id,
            phone: submission.value.phoneNumber || userDetail.result.phone,
            birthday: birthDate,
            address: {
                zipcode: 800,
                detail: "文山路23號",
            },
        },
        user.token as string,
    );

    console.log("userData", userData);

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
