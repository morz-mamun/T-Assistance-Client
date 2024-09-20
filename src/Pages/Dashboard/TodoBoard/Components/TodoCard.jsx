import { Card, CardContent, Typography } from "@mui/material"
import { useState } from "react";
import TodoDetailsModal from "./TodoModal";
const TodoCard = ({ name, title, description, shortDescription, companyName, onForwardStatusChange, onBackwardStatusChange, status, companySize, companyWebsite, industry, phoneNumber, businessEmail, service, conpanyHQ, backgroundColor, hoverColor }) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((pre) => !pre);
  };

  return (

    <>

      <Card className="cursor-pointer" onClick={handleModal} sx={{
        maxWidth: 345, backgroundColor: backgroundColor,
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: hoverColor,
        },
      }}>
        <CardContent className=" text-left">
          <Typography className="font-bold pb-2" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {service}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {shortDescription}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Company: {companyName}
          </Typography>
        </CardContent>
      </Card>

      {/*show modal */}
      <TodoDetailsModal
        open={open}
        handleModal={handleModal}
        backgroundColor={backgroundColor}
        status={status}
        name={name}
        title={title}
        description={description}
        companyName={companyName}
        companyHQ={conpanyHQ}
        companySize={companySize}
        companyWebsite={companyWebsite}
        industry={industry}
        phoneNumber={phoneNumber}
        service={service}
        businessEmail={businessEmail}

      />
    </>
  )
}

export default TodoCard
