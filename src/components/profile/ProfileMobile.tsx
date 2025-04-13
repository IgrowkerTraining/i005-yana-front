import React, { useState } from "react"
import { Avatar, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import theme from "../../theme"
import avatarImage from "../../assets/avatars/avatar_34.svg"
import accountIcon from "../../assets/icons/account_circle.svg"
import intaractionsIcon from "../../assets/icons/groups.svg"
import configurationIcon from "../../assets/icons/settings2.svg"
import logoutIcon from "../../assets/icons/logout_blue.svg"
import helpIcon from "../../assets/icons/emergency.svg"
import deleteIcon from "../../assets/icons/cancel.svg"
import CustomButton from "../../commons/CommonButton"
import Modal from "../../commons/DeleteModal"

const ProfileMobile: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const handleDeleteAccount = () => {
    console.log('Account deleted')
    setIsDeleteModalOpen(false)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        padding: "6em 1em",
        gap: "1.25rem",
        backgroundColor: theme.colors.blackBackground,
      }}
    >
      <Avatar
        sx={{
          width: "10.81rem",
          height: "10.81rem",
          marginBottom: "3.44rem",
        }}
        src={avatarImage}
        alt="User Avatar"
      />
      <CustomButton
        text={t("/profile.account")}
        icon={<img src={accountIcon} alt={t("/profile.account")} />}
        iconPosition="end"
        variantType="square-primary"
        onClick={() => handleNavigation("/profile/account")}
      />
      <CustomButton
        text={t("/profile.interactions")}
        icon={<img src={intaractionsIcon} alt={t("/profile.interactions")} />}
        iconPosition="end"
        variantType="square-primary"
        onClick={() => handleNavigation("/profile/intaractions")}
      />
      <CustomButton
        text={t("/profile.configuration")}
        icon={<img src={configurationIcon} alt={t("/profile.configuration")} />}
        iconPosition="end"
        variantType="square-primary"
        onClick={() => handleNavigation("/profile/configuration")}
      />
      <CustomButton
        text={t("/profile.help")}
        icon={<img src={helpIcon} alt={t("/profile.help")} />}
        iconPosition="end"
        variantType="square-primary"
        onClick={() => handleNavigation("/profile/help")}
      />
      <CustomButton
        text={t("/profile.logout")}
        icon={<img src={logoutIcon} alt={t("/profile.logout")} />}
        iconPosition="end"
        variantType="square-secondary"
        onClick={() => handleNavigation("/login")}
      />
      <CustomButton
        text={t("/profile.deleteAccount")}
        icon={<img src={deleteIcon} alt={t("/profile.deleteAccount")} />}
        iconPosition="end"
        variantType="ghost"
        onClick={() => setIsDeleteModalOpen(true)}
      />

      <Modal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onPasswordSubmit={handleDeleteAccount}
      />
    </Box>
  )
}

export default ProfileMobile
