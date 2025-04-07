import CustomTextField from "../../commons/CommonTextField";
import { useTranslation } from "react-i18next";

interface Props {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  emailError: string;
  handleEmailBlur: () => void;
}

export default function RegisterEmailStage({ name, setName, email, setEmail, emailError, handleEmailBlur }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <CustomTextField
        label={t("register.email.nameField.label")}
        value={name}
        setValue={setName}
        placeholder={t("register.email.nameField.placeholder")}
      />
      <CustomTextField
        label={t("register.email.emailField.label")}
        value={email}
        setValue={setEmail}
        placeholder={t("register.email.emailField.placeholder")}
        error={!!emailError}
        helperText={emailError}
        onBlur={handleEmailBlur}
      />
    </>
  );
}
